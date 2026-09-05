# The Postman Deep-Dive Guide — Send the Real Beckn Calls Yourself

**For anyone who watched Grid Pulse and wants to go one level deeper: not
just understand the network, but actually fire the real requests
yourself, by hand, against the real running software, and watch the real
JSON come back.**

This is a different kind of document from `LAYMAN-GUIDE.md`. That one
explains what you're looking at. This one is a hands-on lab: by the end,
you will have personally sent every major request in the demo — publish,
discover, init, confirm, settle, and the rejected trade — through Postman,
against the same real Docker containers Grid Pulse's recording came from,
and seen the real responses land in front of you.

No prior networking or programming knowledge is assumed. Every step below
tells you exactly where to click, what to type, and what you should see.

---

## Part 1 — What the Postman collection actually is (and whether it's real)

Short answer: **yes, it's the real thing.** This isn't a simplified
teaching version — it's the exact same devkit configuration (same
hostnames, same ports, same network name, same test prices and
quantities) that produced the real captured run Grid Pulse shows you.

Here's how you can verify that for yourself, and how it actually works:

### Where it lives

Inside the real devkit repo, under
`devkits/p2p-trading-ies-wave2/uc1/postman/`, there are six ready-made
files, one per participant:

| File | Who you're pretending to be |
|---|---|
| `p2p-trading-ies-wave2-uc1.SELLER-DEG.postman_collection.json` | The seller's trading platform (publishes the offer, sends the real answers: `on_init`, `on_confirm`, `on_status`) |
| `p2p-trading-ies-wave2-uc1.BUYER-DEG.postman_collection.json` | The buyer's trading platform (searches, initiates, confirms, asks for status) |
| `p2p-trading-ies-wave2-uc1.SELLERDISCOMLEDGER-DEG.postman_collection.json` | The seller's electricity company's own record-keeping system |
| `p2p-trading-ies-wave2-uc1.BUYERDISCOMLEDGER-DEG.postman_collection.json` | The buyer's electricity company's own record-keeping system |
| `p2p-trading-ies-wave2-uc1.SELLERDISCOM-DEG.postman_collection.json` | The seller's electricity company itself (the dormant grey dot from Grid Pulse) |
| `p2p-trading-ies-wave2-uc1.BUYERDISCOM-DEG.postman_collection.json` | The buyer's electricity company itself (the other dormant grey dot) |

Each `.json` file is a complete, ready-to-import Postman collection —
folders of requests, real example bodies, and a bundled list of default
values, all in one file. You don't write any of this by hand; you just
import it.

### Where these files come from, and why you can trust them

Sitting right next to those six files is a small generator script,
`scripts/generate_postman_collection.py`, plus a devkit-specific wrapper
at `devkits/p2p-trading-ies-wave2/scripts/generate_postman_collection.py`.
This script's job is to read one shared configuration block for this
devkit — the same real hostnames (`buyerapp.example.com`,
`sellerapp.example.com`), the same real ports (`8081` through `8086`,
`9000`), the same test network name
(`indiaenergystack.in/test-ies-p2p-trading-network`) — and mechanically
produce the six collection files above from it. There's even a
`generate.sh` script in the `postman/` folder that regenerates all six in
one go, if a maintainer ever changes the devkit's configuration.

**What this means for you:** these six files aren't hand-written demo
props — they're generated, deterministically, from the exact same
configuration values the real Docker containers use. Open any of them and
you'll recognize the same numbers from Grid Pulse: the two price bands
(₹12.5 and ₹14.5 per kWh), the requested quantities (20.5 and 15.5 kWh),
the same test company names (`TEST_DISCOM_BUYER`, `TEST_DISCOM_SELLER`),
even the exact same policy-document URL. This is the genuine, reproducible
way to manually recreate the demo yourself, one real HTTP call at a time.

### What each request actually does when you click Send

This is the one thing to get right before you start clicking: **you are
not manually recreating every single hop from Grid Pulse.** When you send
one of these requests, you're only providing the *first* hop of each
flow — the moment the app hands its message to its own guard (its onix
adapter). From that point on, the guard does everything else completely
by itself, automatically: signing the message, forwarding it across the
network, the other side's guard verifying and checking it, handing it to
their app, and — for `init`, `confirm`, and `status` — that other side's
guard automatically sending the real answer back, all on its own, within
a second or two, exactly like it did in the recording.

So: **one Postman click reproduces an entire multi-hop flow from Grid
Pulse, automatically, for real.** The extra "answer" requests in the
SELLER collection (`on_init`, `on_confirm`, `on_status`) exist so you can
*also*, optionally, send that exact same answer yourself, by hand, to see
that side of the conversation up close too — not because the network
needs you to.

---

## Part 2 — Prerequisites (do this before opening Postman)

You need three things installed, and one thing running.

### 1. Docker Desktop

This whole demo is a small network of about a dozen containers running
on your own machine — there's no shared server anyone else can break by
poking it. If you don't already have Docker Desktop, install it from
[docker.com](https://www.docker.com/products/docker-desktop/) and start
it. Wait until its whale icon in your system tray/menu bar shows it's
fully running before continuing.

### 2. Postman

Install the free Postman desktop app from
[postman.com/downloads](https://www.postman.com/downloads/), or use the
web version at [postman.com](https://www.postman.com) (a free account is
enough — you don't need a paid plan for anything in this guide).

### 3. The devkit's actual code

You need a real copy of the `p2p-trading-ies-wave2` devkit on your own
machine — this is what `docker compose` will actually start, and where
the six Postman collection files live.

If you're using the companion demo repo
(`p2p-trading-live-demo`), its `setup.sh` script does this for you — run
it once, and it sparse-clones exactly the folders you need into
`DEG-repo/` alongside it, including
`DEG-repo/devkits/p2p-trading-ies-wave2/`. If you're working from a full
clone of the upstream `beckn/DEG` repo instead, the same folder already
exists at `devkits/p2p-trading-ies-wave2/` — the paths below assume the
former; adjust the leading `DEG-repo/` if yours differs.

### 4. Start the real network

```bash
cd DEG-repo/devkits/p2p-trading-ies-wave2/install
docker compose up -d
```

Give it about 20 seconds, then check everything came up cleanly:

```bash
docker compose ps
```

Every container listed — `beckn-router`, `onix-buyerapp`,
`sandbox-buyerapp`, `onix-sellerapp`, `sandbox-sellerapp`,
`onix-ledger-buyerdiscom`, `onix-ledger-sellerdiscom`, and the rest —
should show `Up` (some show a `healthy` tag too). If any show
`Restarting` or `Exited`, give it another few seconds and check again
before moving on.

**Quick map of what's now listening on your own machine**, so the URLs in
Part 5 make sense at a glance:

| Port on your machine | Which container | Matches which Grid Pulse node |
|---|---|---|
| `8081` | `onix-buyerapp` | `onix-buyerapp` |
| `8082` | `onix-sellerapp` | `onix-sellerapp` |
| `8083` | `onix-ledger-sellerdiscom` | `onix-ledger-sellerdiscom` |
| `8084` | `onix-ledger-buyerdiscom` | `onix-ledger-buyerdiscom` |
| `8085` | `onix-buyerdiscom` | one of the two dormant grey dots |
| `8086` | `onix-sellerdiscom` | the other dormant grey dot |
| `9000` | `beckn-router` | `beckn-router` (via Docker's internal network, only the containers talk to it directly on this port — you never call `9000` yourself) |

When you're completely done for the day:

```bash
docker compose down
```

This stops and removes the containers cleanly. Nothing persists between
runs unless you specifically set that up, so it's safe to bring the whole
thing up and down as often as you like.

---

## Part 3 — Importing the collections into Postman

1. Open Postman.
2. Click **Import** (top-left, or **File → Import**).
3. Drag in, or browse to, all six files from
   `DEG-repo/devkits/p2p-trading-ies-wave2/uc1/postman/*.json`. You can
   select all six at once — Postman imports each `.json` file as its own
   separate collection.
4. In Postman's left sidebar, under **Collections**, you should now see
   six new entries, named exactly like the files (e.g.
   `p2p-trading-ies-wave2-uc1.BUYER-DEG`).

**You do not need to create a separate Postman "Environment."** Each
collection file already carries its own bundled list of default values —
Postman calls these **collection variables** — things like `{{domain}}`,
`{{buyerplatform_id}}`, `{{bap_caller_url}}`, all pre-filled with the real
values (`http://localhost:8081/bap/caller`, and so on). They come in
automatically the moment you import the file. If you ever want to see or
change them, click the collection's name, then the **Variables** tab.

---

## Part 4 — Anatomy of one request (read this once, it explains all of them)

Click into any request — for example, open **BUYER-DEG → discover →
discover-request**. You'll see the same four things in every single
request across all six collections:

**Method** — the HTTP verb. Almost everything here is `POST` (you're
submitting a message); `discover` is the one exception, using `GET`
(explained below).

**URL** — always built from one variable plus a plain path, e.g.
`{{bap_caller_url}}/discover`. `{{bap_caller_url}}` resolves to
`http://localhost:8081/bap/caller` — so the actual URL Postman sends to is
`http://localhost:8081/bap/caller/discover`. Every request's URL points at
**your own** side's adapter, on your own machine — never at the other
company's containers directly. That's deliberate: you always hand a
message to your *own* guard, and trust it to deliver it correctly. That's
the exact same rule from `LAYMAN-GUIDE.md` Part 3.

**Headers** — every single request in these collections ships with an
empty header list. That's not a mistake to fix — it's intentional.
Postman automatically adds `Content-Type: application/json` for you
because the body is set to raw JSON, and that's the only header you
actually need. **You never need to construct any kind of authentication
or signature header yourself.** That's precisely the adapter's job: the
moment you hand it your plain, unsigned JSON message, its own `sign` step
(from `LAYMAN-GUIDE.md` Part 6) stamps it with your side's real
cryptographic signature before it ever leaves your machine. If you were
hand-crafting this request against a production Beckn network without an
adapter in front of you, you'd need to sign it yourself — the whole point
of the adapter is that you don't have to.

**Body** — raw JSON, with two kinds of placeholder inside it:
- Plain collection variables, like `{{buyerplatform_id}}` — these get
  swapped for their real value (`buyerapp.example.com`) every time you
  hit Send.
- `{{$guid}}`, used for `messageId` — this is a **Postman dynamic
  variable**: it generates a brand-new random ID every single time you
  send the request, so you never accidentally reuse a message ID.

There's also one small piece of automation worth knowing about: each
collection has a tiny **pre-request script** attached (visible under the
collection's own **Scripts** tab) that runs automatically, silently, the
instant before every request goes out. All it does here is stamp the
current real time into a variable called `{{iso_date}}`, so the
`timestamp` field in the message is always accurate, without you ever
typing it in. You don't need to do anything for this to work — it's
already wired in.

**`transaction_id`** is the one collection variable that stays *the same*
across every request, on purpose — it's what ties every message in one
single trade together end to end, exactly like the shared tracking number
from `LAYMAN-GUIDE.md` Part 4. If you want to run through the whole demo
a second time as a genuinely fresh, separate trade, edit this one
variable (collection's **Variables** tab) to any new random value before
you start.

---

## Part 5 — The full walkthrough: sending every real request yourself

This follows the exact same order as Grid Pulse's six tabs. For each one:
which collection, which request, what you'll see, and how to also
witness the automatic side of it. (For what each payload's *fields*
actually mean in plain English, see `LAYMAN-GUIDE.md` Parts 7 and 10 —
this guide focuses on the mechanics of sending it.)

### 1. Publish

**Open:** `SELLER-DEG` → **publish** → **publish-catalog**
**Method:** `POST`
**URL:** `http://localhost:8082/bpp/caller/catalog/publish`

Click **Send**. You should get back, almost instantly:
```
Status: 200 OK
Body:   { "message": { "status": "ACK", "messageId": "<a real uuid>" } }
```
That's it — the seller's offer (30.5 kWh, ₹12.5/₹14.5 per slot) is now on
the shared catalog, exactly like Grid Pulse's Tab 1.

### 2. Discover

**Open:** `BUYER-DEG` → **discover** → **discover-request**
**Method:** `GET` *(yes, really — see the note below)*
**URL:** `http://localhost:8081/bap/caller/discover`

Click **Send**. Same `200 OK` / `{"status":"ACK",...}` shape back.

> **A quirk worth knowing:** this request is a `GET`, but it still carries
> a JSON body (the search filter). Normally, tools strip the body off a
> `GET` request, since a plain "get me this page" request usually
> shouldn't carry one — but Beckn's `discover` call is specified to
> include one anyway. This collection has a Postman setting already
> switched on for this one request (**Settings → Disable body
> pruning**) so the body survives. You don't need to change anything —
> just know why this one looks unusual if you ever inspect it closely.

### 3. Init

**Open:** `BUYER-DEG` → **init** → **init-request**
**Method:** `POST`
**URL:** `http://localhost:8081/bap/caller/init`

Click **Send** — you'll get the same immediate `200 · ACK` back within
Postman. That ACK is *only* "message received," per the ACK-now,
answer-later pattern from `LAYMAN-GUIDE.md` Part 5. The real answer —
`on_init` — is generated by the seller's own adapter and delivered back
to the buyer's `/bap/receiver` automatically, within a second or two,
entirely on its own. To actually watch that happen, in a separate
terminal:

```bash
docker compose logs -f onix-sellerapp onix-buyerapp
```

You'll see the real signed `on_init` message get created, sent, and
verified, in real time, in the log output.

**Want to send that `on_init` yourself instead of just watching it
happen?** Open `SELLER-DEG` → **on_init** → **on-init-response** (`POST`
`http://localhost:8082/bpp/caller/on_init`) and click Send — this
reproduces, by hand, exactly the message the network already sent
automatically. Either way is a real, correct call; doing it manually is
purely for the extra hands-on understanding.

### 4. Confirm

**Open:** `BUYER-DEG` → **confirm** → **confirm-request**
**Method:** `POST`
**URL:** `http://localhost:8081/bap/caller/confirm`

Send it, get the ACK back. Then, exactly as with Init, the seller's side
automatically generates and sends `on_confirm` back — and this is the
message that also triggers the real ledger cascade (Grid Pulse Tab 4,
Hops 5–7): a copy heading to the seller's own discom ledger, and a
separate copy heading straight out to the real, internet-hosted IES
Energy Ledger. Watch all of it with:

```bash
docker compose logs -f onix-sellerapp onix-buyerapp onix-ledger-sellerdiscom onix-ledger-buyerdiscom
```

**To send that answer by hand instead:** `SELLER-DEG` → **on_confirm** →
**on-confirm-response** (`POST` `http://localhost:8082/bpp/caller/on_confirm`).

### 5. Settle

The real settlement math (Grid Pulse Tab 5 — the ₹437.15 split) is
triggered by an `on_status` message, sent by the **seller**, reporting
what was actually delivered.

**Open:** `SELLER-DEG` → **on_status** → **on-status-response-settled**
**Method:** `POST`
**URL:** `http://localhost:8082/bpp/caller/on_status`

Click Send. This is the single most important response body in the whole
demo — open the **Body** tab on the response and look for
`consideration.revenueFlows`: you'll see the real computed
`+437.15` / `-437.15` split, sent right back to you in Postman's own
response pane, computed by the seller's adapter the instant you hit
Send — not typed in anywhere by a person. The same automatic cascade as
Confirm then pushes this final result on to the buyer's own discom ledger
— watch it with the same `docker compose logs -f` command as above.

*(If you'd rather trigger this from the buyer's side asking for a status
update instead of the seller pushing one, `BUYER-DEG` → **status** →
**status-request** — `POST` `http://localhost:8081/bap/caller/status` —
is the equivalent buyer-initiated version.)*

### 6. Rejected

This is the one that proves the network really enforces its own rules.

**Open:** `BUYER-DEG` → **init** → **init-request-blocked-discom**
**Method:** `POST`
**URL:** `http://localhost:8081/bap/caller/init`

Same folder, same URL as the real Init — the only difference is inside
the body: this pre-built example has `buyerDiscom` set to
`TEST_OUTSIDE_DISCOM` instead of the approved `TEST_DISCOM_BUYER`. Click
**Send** and, this time, you'll get back:
```
Status: 400 Bad Request
Body:   { "message": { "status": "NACK", ...
          "error": { "message": "BAD Request: settlement policy
          violations: buyer discom \"TEST_OUTSIDE_DISCOM\" is not
          allowed to trade with this discom's prosumers on the test
          network (allowed: [...])" } } }
```
Unlike every other request in this walkthrough, there's no automatic
follow-up to watch for here — the rejection happens synchronously, in
this exact response, and nothing further is sent. You just proved, with
your own click, that the same checkpoint that let the real trade through
in Step 3 genuinely refuses one it shouldn't allow.

---

## Part 6 — Going further: the ledger and discom collections

Once the six requests above feel completely natural, two more collections
are worth opening, purely for the curious — they model the parts of the
system Grid Pulse deliberately leaves dormant or only shows as a
cascade, rather than something you click through directly.

**`BUYERDISCOMLEDGER-DEG` / `SELLERDISCOMLEDGER-DEG`** — model each
electricity company's own record-keeping system directly. Their
`on_status` folder (URL: `{{buyer_ledger_bpp_caller_url}}/on_status`,
i.e. `http://localhost:8084/bpp/caller/on_status` for the buyer's side) is
the exact same kind of cascade copy that Confirm and Settle already
deliver automatically — sending it here yourself lets you see that
specific company's ledger receive and acknowledge it in isolation, apart
from the rest of the flow.

**`BUYERDISCOM-DEG` / `SELLERDISCOM-DEG`** — model the two grey, "not
used this walkthrough" dots from Grid Pulse: the electricity companies
themselves, as distinct participants from their ledger systems, used for
meter-data workflows this demo doesn't exercise live. They're included
here for completeness and honesty about what the full devkit actually
covers, exactly as Grid Pulse itself explains those two dots.

---

## Part 7 — Troubleshooting

**"Could not send request" / connection refused** — the containers
aren't up yet, or docker compose is still starting. Run `docker compose
ps` and wait for everything to show `Up`.

**A `404` instead of an ACK** — double-check the exact URL, especially
the trailing path (`/catalog/publish` has two segments; everything else
is one). Copy it fresh from the collection rather than retyping it.

**You want to run through the whole demo again as a brand-new trade** —
edit the `transaction_id` collection variable (on each collection's
**Variables** tab) to a new random value first. Reusing the same
`transaction_id` on a second full run is harmless for exploring
individual requests, but a real fresh trade should carry its own unique
ID from the very first message.

**Done for the day** — `docker compose down` from the `install/` folder
stops everything cleanly; nothing here needs to be left running.
