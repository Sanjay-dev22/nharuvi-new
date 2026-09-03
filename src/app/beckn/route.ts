import { readFileSync } from "node:fs";
import { join } from "node:path";

// Serves the Grid Pulse protocol inspector at the clean /beckn URL, so it
// can be pulled up live during a demo without a download step. The file
// itself is a single self-contained HTML page (no build, no server-side
// logic of its own) — this route just reads it from public/beckn/ and
// returns it with the right content type. Source of truth for the file
// itself: github.com/Sanjay-dev22/grid-pulse.
export async function GET() {
  const html = readFileSync(join(process.cwd(), "public", "beckn", "grid-pulse.html"), "utf-8");
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
