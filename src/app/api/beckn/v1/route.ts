import { NextResponse } from "next/server";
import { createHash, createPublicKey, verify as cryptoVerify } from "node:crypto";

// Real Beckn HTTP-signature verification, matching beckn-onix's actual
// signvalidator implementation byte-for-byte (verified by reading
// beckn-onix/pkg/plugin/implementation/signvalidator/signvalidator.go
// directly, not by trusting docs -- two different doc pages disagreed on
// whether the algorithm is "ed25519" or "xed25519"; the real source code
// settles it: plain Ed25519 (RFC 8032), no "X" variant).
//
// Signing string (exactly 3 lines, \n-joined):
//   (created): {unix_ts}
//   (expires): {unix_ts}
//   digest: BLAKE-512={base64(BLAKE2b-512(raw request body bytes))}
//
// Authorization header:
//   Signature keyId="{subscriberId}|{uniqueKeyId}|ed25519",algorithm="ed25519",
//     created="{ts}",expires="{ts}",headers="(created) (expires) digest",
//     signature="{base64 signature}"

const CLOCK_SKEW_TOLERANCE_SECONDS = 5; // matches signvalidator's default; created only, expires gets zero tolerance

type ParsedAuth = {
  subscriberId: string;
  uniqueKeyId: string;
  algorithm: string;
  created: number;
  expires: number;
  signature: string;
};

function parseAuthHeader(header: string): ParsedAuth | { error: string } {
  const trimmed = header.replace(/^Signature\s+/, "");
  const parts = trimmed.split(",");
  const map: Record<string, string> = {};
  for (const part of parts) {
    const eq = part.indexOf("=");
    if (eq === -1) continue;
    const key = part.slice(0, eq).trim();
    const value = part.slice(eq + 1).trim().replace(/^"|"$/g, "");
    map[key] = value;
  }

  if (map.algorithm !== "ed25519") {
    return { error: `unsupported algorithm "${map.algorithm}": only ed25519 is permitted` };
  }
  if (!map.signature) {
    return { error: "signature missing in header" };
  }
  const keyIdParts = (map.keyId ?? "").split("|");
  if (keyIdParts.length < 2) {
    return { error: "malformed keyId: expected subscriberId|uniqueKeyId|algorithm" };
  }
  const created = Number(map.created);
  const expires = Number(map.expires);
  if (!Number.isFinite(created) || !Number.isFinite(expires)) {
    return { error: "invalid created/expires timestamp" };
  }

  return {
    subscriberId: keyIdParts[0],
    uniqueKeyId: keyIdParts[1],
    algorithm: map.algorithm,
    created,
    expires,
    signature: map.signature,
  };
}

function signingString(rawBody: string, created: number, expires: number): string {
  const digest = createHash("blake2b512").update(rawBody, "utf-8").digest("base64");
  return `(created): ${created}\n(expires): ${expires}\ndigest: BLAKE-512=${digest}`;
}

// Ed25519 raw 32-byte public key -> SPKI DER wrapper Node's crypto needs.
// Same fixed 12-byte prefix used (and verified) for our own Beckn keypair
// earlier in this same registration work.
const ED25519_SPKI_PREFIX = Buffer.from("302a300506032b6570032100", "hex");

function verifyEd25519(publicKeyB64: string, message: string, signatureB64: string): boolean {
  const pub = Buffer.from(publicKeyB64, "base64");
  const publicKey = createPublicKey({
    key: Buffer.concat([ED25519_SPKI_PREFIX, pub]),
    format: "der",
    type: "spki",
  });
  return cryptoVerify(null, Buffer.from(message, "utf-8"), publicKey, Buffer.from(signatureB64, "base64"));
}

// --- Key resolution: the part that's still intentionally simplified ---
//
// A real ONIX deployment resolves ANY sender's signing_public_key
// automatically via the network registry, given just their subscriber_id.
// That requires a subscriber_id -> {DeDi namespace, record_id} directory
// lookup we haven't built yet (this is what ONIX's own "registry" plugin
// exists to abstract). For now we only know how to resolve counterparties
// we've explicitly recorded here -- honest scope, not full automatic
// discovery. Extend this map (or replace it with a real directory lookup)
// as we test against real counterparties.
const KNOWN_COUNTERPARTIES: Record<string, { namespace: string; registry: string; recordId: string }> = {
  // "some-bpp.example.com": { namespace: "...", registry: "deg-beckn-subscribers", recordId: "..." },
};

async function resolveSigningPublicKey(subscriberId: string): Promise<string | null> {
  const known = KNOWN_COUNTERPARTIES[subscriberId];
  if (!known) return null;
  const url = `https://api.dedi.global/dedi/lookup/${known.namespace}/${known.registry}/${known.recordId}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return null;
  const json = await res.json();
  return json?.data?.details?.signing_public_key ?? null;
}

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "nharuvi-beckn",
    role: "BAP",
    protocol: "Beckn",
    version: "2.0.0",
  });
}

export async function POST(request: Request) {
  const rawBody = await request.text();
  const authHeader = request.headers.get("authorization") ?? request.headers.get("Authorization");

  if (!authHeader) {
    return NextResponse.json(
      { message: { ack: { status: "NACK" } }, error: { code: "AUT_SIGNATURE_MISSING", message: "Authorization header missing" } },
      { status: 401 }
    );
  }

  const parsed = parseAuthHeader(authHeader);
  if ("error" in parsed) {
    return NextResponse.json(
      { message: { ack: { status: "NACK" } }, error: { code: "AUT_SIGNATURE_INVALID", message: parsed.error } },
      { status: 401 }
    );
  }

  const now = Math.floor(Date.now() / 1000);
  if (parsed.created > now + CLOCK_SKEW_TOLERANCE_SECONDS) {
    return NextResponse.json(
      { message: { ack: { status: "NACK" } }, error: { code: "AUT_SIGNATURE_INVALID", message: "signature not yet valid (created is in the future)" } },
      { status: 401 }
    );
  }
  if (now > parsed.expires) {
    return NextResponse.json(
      { message: { ack: { status: "NACK" } }, error: { code: "AUT_SIGNATURE_INVALID", message: "signature expired" } },
      { status: 401 }
    );
  }

  const publicKey = await resolveSigningPublicKey(parsed.subscriberId);
  if (!publicKey) {
    return NextResponse.json(
      {
        message: { ack: { status: "NACK" } },
        error: { code: "AUT_SIGNATURE_INVALID", message: `cannot resolve signing key for unknown subscriber "${parsed.subscriberId}" -- add it to KNOWN_COUNTERPARTIES` },
      },
      { status: 401 }
    );
  }

  const expectedMessage = signingString(rawBody, parsed.created, parsed.expires);
  const valid = verifyEd25519(publicKey, expectedMessage, parsed.signature);

  if (!valid) {
    return NextResponse.json(
      { message: { ack: { status: "NACK" } }, error: { code: "AUT_SIGNATURE_INVALID", message: "signature verification failed" } },
      { status: 401 }
    );
  }

  console.log(`Beckn request from verified subscriber ${parsed.subscriberId}:`, rawBody);

  // Real ACK-now pattern: verification passed, so this is genuinely a
  // trusted message -- the actual business response (on_discover etc.)
  // still goes out later via a separate outbound call, same as UC3.
  return NextResponse.json({
    message: {
      ack: {
        status: "ACK",
      },
    },
  });
}
