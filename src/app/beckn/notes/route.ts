import { readFileSync } from "node:fs";
import { join } from "node:path";

// Serves the live-demo speaker notes as plain readable text at an
// unlisted URL (nowhere on the site links here) — not linked from
// navigation, and not access-controlled: anyone with the exact URL can
// read it. Served as text/plain rather than left as a raw .md download so
// it just displays in the browser, phone included.
export async function GET() {
  const md = readFileSync(join(process.cwd(), "public", "beckn", "speaker-notes.md"), "utf-8");
  return new Response(md, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
