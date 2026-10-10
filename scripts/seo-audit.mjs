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
  if (/\[owner to confirm|\[lawyer to write/.test(html) && !p.startsWith("/legal") && p !== "/about") e.push("placeholder text");
  if (titles.has(t)) e.push("dup title " + titles.get(t)); titles.set(t, p);
  if (descs.has(d)) e.push("dup desc " + descs.get(d)); descs.set(d, p);
  if (e.length) bad.push([p, e.join("; ")]);
}
console.log(`${urls.length} urls checked, ${bad.length} with issues`);
for (const [p, e] of bad) console.log(" ", p, "→", e);
process.exit(bad.length ? 1 : 0);
