#!/usr/bin/env node
// Ping IndexNow (Bing, Yandex, others) with every URL in the sitemap after a deploy.
// Usage: INDEXNOW_KEY=<key> SITE=https://yourdomain.com node scripts/indexnow.mjs
// Host the key at https://yourdomain.com/<key>.txt (put the file in /public).
const site = process.env.SITE, key = process.env.INDEXNOW_KEY;
if (!site || !key) { console.error("Set SITE and INDEXNOW_KEY"); process.exit(1); }
const xml = await (await fetch(`${site}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
const res = await fetch("https://api.indexnow.org/indexnow", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ host: new URL(site).host, key, urlList }) });
console.log(res.status, `${urlList.length} URLs submitted`);
