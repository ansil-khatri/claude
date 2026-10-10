#!/usr/bin/env node
// UAE audit (docs/superpowers/specs/2026-10-09-uae-localization-design.md §9): scans the built HTML for US leftovers
// and required items. Run after `next build`:  npm run audit
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(".next/server/app");
const files = [];
(function walk(d) { for (const f of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, f.name); f.isDirectory() ? walk(p) : p.endsWith(".html") && files.push(p); } })(root);

const BAD = [
  [/\$\s?\d/, "USD amount"], [/\bUSD\b/, "USD"], [/iMessage/i, "iMessage"], [/\b(Denver|Austin|Chicago|Brooklyn|Phoenix|Miami|Dallas|Texas)\b/, "US city"],
  [/\bQuickBooks\b/, "QuickBooks (max once per page, comparison only)"], [/Klarna|Afterpay|Affirm/, "US BNPL"], [/DoorDash|Uber Eats|Grubhub/, "US delivery app"],
  [/\bZelle|Venmo|Cash App\b/, "US payment app"], [/\bYelp\b|\bBBB\b/, "US review site"], [/Google Local Services/, "Google Local Services"],
  [/\b(lbs?|miles?)\b/i, "imperial unit"], [/\b\d+\s?°F\b/, "°F"], [/Thanksgiving|Black Friday(?! )/, "US holiday"], [/SOC 2/, "SOC 2"], [/Shop Pay/, "Shop Pay"],
  [/ServiceTitan|Housecall|Tekmetric|Shopmonkey|OpenTable|RepairShopr|Gusto/, "US software"], [/\(\d{3}\)\s?\d{3}-\d{4}/, "US phone"],
];
const clean = (h) => h.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/\s+/g, " ");

let fail = 0;
for (const f of files) {
  const rel = path.relative(root, f);
  if (/^(_|404|ar)/.test(rel) || rel.includes("opengraph")) continue;
  const html = fs.readFileSync(f, "utf8");
  const text = clean(html);
  const issues = [];
  for (const [re, name] of BAD) {
    const m = text.match(re);
    if (!m) continue;
    if (name === "USD" && /bills in USD/.test(text)) continue;
    if (name.startsWith("QuickBooks") && (text.match(/QuickBooks/g) || []).length <= 3) continue;
    if (name === "imperial unit" && /\b(mile|miles)\b/i.test(m[0]) === false && /lb/.test(m[0]) === false) continue;
    issues.push(`${name}: …${text.slice(Math.max(0, m.index - 40), m.index + 50)}…`);
  }
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) issues.push(`expected 1 <h1>, found ${h1}`);
  if (!/wa\.me\//.test(html)) issues.push("no WhatsApp link");
  if (!/application\/ld\+json/.test(html)) issues.push("no JSON-LD");
  if (!/rel="canonical"/.test(html)) issues.push("no canonical");
  const money = /^(services|industries|agencies|pricing)/.test(rel) && !/^(services|industries)\.html$/.test(rel);
  if (money && !/IN PLAIN ENGLISH/i.test(text)) issues.push("missing plain-English block");
  if (rel.startsWith("services/") || rel.startsWith("industries/") || rel === "pricing.html" || rel === "agencies.html") if (!/AED\s?[\d,]+/.test(text)) issues.push("no AED price");
  if (/^(work|industries|services)\//.test(rel) && !/Example project/.test(text) && /^(work|industries)\//.test(rel)) issues.push("missing 'Example project' chip");
  if (issues.length) { fail++; console.log(`FAIL ${rel}\n  - ${issues.join("\n  - ")}`); }
}
console.log(fail ? `\n${fail} of ${files.length} pages have issues` : `PASS · ${files.length} pages audited`);
process.exit(fail ? 1 : 0);
