// CI-style checks against a running server (npm run build && npm start): raw-HTML test, broken internal links, canonical hygiene.
// Usage: BASE=http://localhost:3000 node scripts/links-audit.mjs
const BASE = process.env.BASE || "http://localhost:3000";
const xml = await (await fetch(`${BASE}/sitemap.xml`)).text();
const paths = [...xml.matchAll(/<loc>https?:\/\/[^/]+(.*?)<\/loc>/g)].map((m) => m[1] || "/");
const seen = new Map();
const problems = [];
const status = async (p) => {
  if (!seen.has(p)) seen.set(p, fetch(BASE + p, { redirect: "manual" }).then((r) => r.status).catch(() => 0));
  return seen.get(p);
};
for (const p of paths) {
  const html = await (await fetch(BASE + p)).text();
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) problems.push(`${p}: ${h1} H1 in raw HTML`);
  const can = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (!can) problems.push(`${p}: no canonical`);
  else if (can !== can.toLowerCase() || (can.length > 9 && can.endsWith("/") && new URL(can).pathname !== "/")) problems.push(`${p}: canonical not lowercase/no-trailing-slash (${can})`);
  if (/^\/(services|industries)\//.test(p) && !/plx-in|In plain English/i.test(html)) problems.push(`${p}: plain-English block missing from raw HTML`);
  const hrefs = new Set([...html.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1]));
  for (const h of hrefs) {
    if (/^\/(_next|api)\b/.test(h) || /\.(svg|png|ico|xml|txt|webmanifest)$/.test(h)) continue;
    const s = await status(h);
    if (s >= 400 || s === 0) problems.push(`${p}: broken link ${h} (${s})`);
  }
}
console.log(`${paths.length} pages, ${seen.size} unique internal links checked`);
if (problems.length) { console.log(problems.join("\n")); process.exit(1); }
console.log("PASS");
