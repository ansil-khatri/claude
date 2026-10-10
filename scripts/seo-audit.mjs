// Crawls a running build (default http://localhost:3300) and checks every sitemap URL for core on-page SEO.
const base = process.env.BASE || "http://localhost:3300";
const sm = await (await fetch(base + "/sitemap.xml")).text();
const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
const bad = []; const titles = new Map(); const descs = new Map();
for (const p of urls) {
  const html = await (await fetch(base + p)).text();
  const g = (re) => (html.match(re) || [])[1] || "";
  const t = g(/<title>([^<]*)<\/title>/), d = g(/<meta name="description" content="([^"]*)"/);
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  const e = [];
  if (!t) e.push("no title"); if (t.length > 70) e.push(`title ${t.length}`);
  if (!d || d.length < 70 || d.length > 165) e.push(`desc ${d.length}`);
  if (h1 !== 1) e.push(`h1 x${h1}`);
  if (!/<link rel="canonical"/.test(html)) e.push("no canonical");
  if (!/application\/ld\+json/.test(html)) e.push("no jsonld");
  const body = html.replace(/<(script|style|nav|footer|header)[\s\S]*?<\/\1>/g, "");
  const kind = /^\/blog\/|^\/industries\/|^\/[a-z0-9-]+-(dubai|uae)$/.test(p) ? "content" : "";
  if (kind) {
    const links = new Set([...body.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1]).filter((h) => h !== p && !/^\/(_next|api)/.test(h)));
    if (links.size < 6) e.push(`only ${links.size} internal links (need 6)`);
    const ans = (html.match(/class="answer-box"[^>]*>([^<]*)</) || [])[1];
    if (ans !== undefined) { const w = ans.trim().split(/\s+/).length; if (w < 35 || w > 75) e.push(`answer box ${w} words`); } else e.push("no answer box");
    if (p.startsWith("/blog/") && ![...links].some((h) => /^\/[a-z0-9-]+-(dubai|uae)$/.test(h))) e.push("post has no link to a money page");
  }
  if (kind) {
    const text = body.replace(/<[^>]+>/g, " ");
    if (/\u2014/.test(text)) e.push("em dash in copy");
    const bad = text.match(/\b(leverage|synergy|cutting-edge|seamless(ly)?|game-changer|unlock the power)\b/i); if (bad) e.push(`banned word "${bad[0]}"`);
    if (/\b(No\.? ?1|number one (agency|studio|choice|company)|top-rated|award-winning|best agency in)\b/i.test(text) && !p.includes("choose-shopify-agency")) e.push("superlative claim");
  }
  if (/\[owner to confirm|\[lawyer to write/.test(html) && !p.startsWith("/legal") && p !== "/about") e.push("placeholder text");
  if (titles.has(t)) e.push("dup title " + titles.get(t)); titles.set(t, p);
  if (descs.has(d)) e.push("dup desc " + descs.get(d)); descs.set(d, p);
  if (e.length) bad.push([p, e.join("; ")]);
}
console.log(`${urls.length} urls checked, ${bad.length} with issues`);
for (const [p, e] of bad) console.log(" ", p, "→", e);
process.exit(bad.length ? 1 : 0);
