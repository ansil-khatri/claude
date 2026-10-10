# UAE Localization of All Mockups — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn all 19 approved US mockups (homepage, 12 service pages, 6 industry pages) into Dubai + UAE versions, add the SEO components from the UAE SEO plan, and bring every design spec up to date, while keeping the US versions for later.

**Architecture:** Content localization, not a redesign. A small Node toolkit in `docs/superpowers/tools/` audits each page for US leftovers and required UAE items, screenshots every state, checks text size, and copies edited shared code blocks (the `SITES` brands, template libraries, nav, footer, shared CSS) to every page that still holds the old copy. Pages are localized in the order their shared code was created (homepage first, industry pages last), so each shared block is fixed once and propagated.

**Tech Stack:** Static HTML mockups (inline CSS + JS, GSAP), Node 22 (`node:test`), `playwright-core` 1.63.0 driving installed Chrome, Python not required.

**Spec:** `docs/superpowers/specs/2026-10-09-uae-localization-design.md` (read it fully before Task 1; §4 brand facts, §5 prices and §8 page changes are the content source for every task). Background: `docs/seo-uae/README.md`, `CLAUDE.md`.

## Global Constraints

- Market copy: "Dubai & UAE"; never "US businesses", "across the US", "the USA" in page text.
- Currency format: `AED 1,240` (prefix, one space, comma thousands); receipts may use decimals `AED 245.00`.
- VAT: pricing sections say "+5% VAT"; invoices, receipts and checkouts show a `VAT 5%` line.
- Homepage prices (source of truth): Add-on from AED 2,900 · Launch from AED 7,900 (2–4 weeks) · Build from AED 49,000 (~12 weeks) · Care from AED 790/mo.
- All agency prices come from spec §5 only. Third-party costs converted at ×3.6725 and rounded.
- Brand facts come from spec §4 only (add any new fact to §4 first).
- Chat UIs are WhatsApp; SMS only for OTP codes. QuickBooks at most twice per page (comparison only); default accounting tool is Zoho Books.
- Units kg / km / °C / litres / AC tons. Time zone GST. Phone numbers `+971 …` per spec §2.
- Exactly one `<h1>` per page, with `<span class="h1-kicker">` as its first child. Mockup headings use `<div class="mk-h1">`.
- New CSS lives only between `/* uae-shared:start */` and `/* uae-shared:end */`, identical in all pages.
- New class names: only `h1-kicker`, `plx-*`, `ex-chip`, `wa-*`, `mk-h1`, `lng` (checked for collisions). Any other new class must be grepped across all mockups first (CLAUDE.md §7 rule 1).
- Hard-won rules (CLAUDE.md §7) apply: no CSS `transition` on GSAP-animated transforms; never hide tabs/arrows/buttons with entrance animations; mockup text stays readable (median ≥ ~8–9 px on screen).
- Only use Unsplash photo IDs already in the mockups.
- Arabic text in mockups is wrapped in an element with `dir="rtl" lang="ar"`.
- Every mockup must **show** the UAE, not just lose its US details: each page task's visual step checks every mockup screenshot against the spec §6.9 checklist (AED + VAT, UAE addresses and map labels, +971 and WhatsApp, Tabby/Tamara, UAE platforms, °C/Ramadan where relevant, Arabic where §8 asks for it). Write the result as a tick list in that page's spec under "UAE visual check".
- Every page's booking widget (in its CTA section, not shared code) gets the Task 3 changes: Mon–Fri day row, `Times shown in Dubai time (GST)`, `Google Meet or in person in Dubai`, the "Prefer WhatsApp?" line, and a WhatsApp pill next to the closing CTA buttons with that page's prefilled text.
- Placeholders the owner must fill stay in brackets: `[Brand]`, `[number]`; WhatsApp number placeholder `+971 50 000 0000` / `wa.me/971500000000`.
- The project is **not a git repository**. Safety net: the `us/` archive (Task 1) plus a per-task backup copy in `docs/superpowers/mockups/.bak/`. Never edit files in `us/`.

## Review Focus

1. **Text that only renders after a click or hover** (tab panels, showcase stages, hover "after" layers, autoplay states) still showing US content. Expected: zero US leftovers in any state. Pinned by `uae-audit.js`, which walks every tab control and reads hidden text (including both layers of hover cards); each page task's Step 5 requires `PASS` with "N tab states checked" at least equal to the page's tab count (homepage ≥ 10, service pages ≥ 11, industry pages ≥ 10).
2. **AED strings are longer than `$` strings** and can wrap or overflow pills, chips, table cells and phone UIs. Expected: no clipped or two-line prices. Pinned by `verify.js`'s overflow report (every `nowrap` element containing `AED` whose content is wider than its box); each page task's Step 6 requires every reported item to be fixed and the screenshots checked.
3. **Propagating a shared block into a page whose copy had already diverged** would silently overwrite page-specific work. Expected: only identical old copies are replaced. Pinned by `sync-lib` test "propagate skips a target whose block differs from the snapshot".
4. **The H1 kicker being split and animated as headline words**, or hidden by the intro timeline. Expected: kicker visible, not split. Pinned by the audit fact `h1KickerVisible` (opacity > 0.5 after load and no `.wd` word spans inside the kicker), which fails until the `split()` change from Task 2 Step 5 is applied to that page.
5. **Arabic snippets rendering left-to-right or as boxes.** Expected: Arabic only inside `dir="rtl"` elements, readable in screenshots. Pinned by the audit fact `arabicOutsideRtl === 0` (Task 1 rule test) and screenshot review in tasks that add Arabic (Tasks 12, 13, 16, 17, 18, 21).

---

## File map

| Path | Responsibility |
|---|---|
| `docs/superpowers/tools/package.json` | Tool dependencies (`playwright-core`) and `npm test` |
| `docs/superpowers/tools/lib/rules.js` | Pure rules: forbidden US patterns, required UAE facts |
| `docs/superpowers/tools/lib/sync-lib.js` | Pure block finding, snapshot, propagate, shared-CSS insert, `data-nosnippet` insert |
| `docs/superpowers/tools/lib/page.js` | Open a mockup in Chrome, walk tabs, read page text |
| `docs/superpowers/tools/uae-audit.js` | CLI: localization audit for one page (exit 0 = pass) |
| `docs/superpowers/tools/verify.js` | CLI: screenshots of every section/tab/hover + errors + AED overflow report |
| `docs/superpowers/tools/text-audit.js` | CLI: on-screen text size inside scaled mockups |
| `docs/superpowers/tools/sync.js` | CLI: snapshot / propagate / shared / nosnippet |
| `docs/superpowers/tools/uae-allow.json` | Per-page allowlist of legitimate strings the audit would flag |
| `docs/superpowers/tools/test/*.test.js` | `node:test` tests for the pure libs |
| `docs/superpowers/mockups/us/*.html` | Frozen US versions (phase 2) |
| `docs/superpowers/specs/us/*.md` | Frozen US specs |
| `docs/superpowers/mockups/*.html` | The 19 pages, localized in place |
| `docs/superpowers/specs/*.md` | Page specs, updated per page |

Page → task → spec section:

| Task | Page | Spec § | Shared blocks that originate here |
|---|---|---|---|
| 2 | shared foundations (homepage file) | §4, §6 | `SITES`, `UAE-SHARED-CSS`, `mock pass 2…`, `realsize tool windows…` |
| 3 | `homepage.html` | §8.1 | `NAV#…`, `FOOTER` (variant A) |
| 4 | `service-mobile-apps.html` | §8.2 | `service page template`, `service page: mockups`, `industry showcase` |
| 5 | `service-web-apps.html` | §8.3 | `web apps page: templates`, `web apps page (all classes prefixed wx)` |
| 6 | `service-saas.html` | §8.4 | `saas page: templates` |
| 7 | `service-shopify.html` | §8.5 | `shopify page: templates` |
| 8 | `service-wordpress.html` | §8.6 | — |
| 9 | `service-landing-pages.html` | §8.7 | `landing pages: templates` |
| 10 | `service-payments.html` | §8.8 | `payments page: templates`, `payments page: animated phone flows` |
| 11 | `service-ai.html` | §8.9 | `AI page: templates` |
| 12 | `service-automation.html` | §8.10 | `automation & ERP page: templates` |
| 13 | `service-seo.html` | §8.11 | — |
| 14 | `service-vibe-rescue.html` | §8.12 | — |
| 15 | `service-white-label.html` | §8.13 | — |
| 16 | `industry-auto-repair.html` | §8.14, §8.15 | `phone screens (390 × 844)`, industry `industry showcase`, industry `interactions`, `FOOTER`/`NAV` (variant B) |
| 17 | `industry-salons.html` | §8.16 | `desktop  tablet windows (real size)` |
| 18 | `industry-laundry.html` | §8.17 | — |
| 19 | `industry-restaurants.html` | §8.18 | — |
| 20 | `industry-home-services.html` | §8.19 | — |
| 21 | `industry-phone-repair.html` | §8.20 | — |
| 22 | all pages + docs | §9, §10 | — |

All commands below run from `docs/superpowers/tools/` unless stated (`cd "D:/talha company/docs/superpowers/tools"`).

---

### Task 1: Archive the US versions and build the toolkit

**Files:**
- Create: `docs/superpowers/mockups/us/` (copies), `docs/superpowers/specs/us/` (copies), `docs/superpowers/mockups/.bak/`
- Create: `docs/superpowers/tools/package.json`, `lib/rules.js`, `lib/sync-lib.js`, `lib/page.js`, `uae-audit.js`, `verify.js`, `text-audit.js`, `sync.js`, `uae-allow.json`
- Test: `docs/superpowers/tools/test/rules.test.js`, `docs/superpowers/tools/test/sync-lib.test.js`

**Interfaces:**
- Produces: `scanText(text: string, allow: string[]) → {findings: {id, why, match, context}[], warnings: {id, why}[]}`; `checkRequired(facts) → string[]` (facts: `{h1Count, h1KickerVisible, plx, nosnippet, waLinks, exampleChips, aed, arabicOutsideRtl}`); `blocks(src) → {key, start, end}[]`; `snapshot(src) → {[key]: hash}`; `propagate(fromSrc, snap, targetSrc) → {out, applied: string[]}`; `ensureShared(src, block) → string`; `addNoSnippet(src) → string`; `open(file) → {browser, page, errors}`; `walkTabs(page, onState) → number`; `pageText(page) → string`. CLIs: `node uae-audit.js <page>`, `node verify.js <page> <outDir>`, `node text-audit.js <page>`, `node sync.js snapshot|propagate|shared|nosnippet <page>`.

- [x] **Step 1: Archive the US versions**

```bash
cd "D:/talha company/docs/superpowers"
mkdir -p mockups/us specs/us mockups/.bak tools/lib tools/test
cp mockups/*.html mockups/us/
cp specs/2026-10-0[78]-*.md specs/2026-10-09-industry-*.md specs/us/
ls mockups/us | wc -l   # expect 19
ls specs/us | wc -l     # expect 19 (the new UAE spec is not copied)
```

- [x] **Step 2: Create `tools/package.json` and install**

```json
{
  "name": "mockup-tools",
  "private": true,
  "scripts": { "test": "node --test \"test/*.test.js\"" },
  "dependencies": { "playwright-core": "1.63.0" }
}
```

Run: `npm install`
Expected: `added 1 package`. If the network is blocked, copy `C:/Users/786/AppData/Local/Temp/claude/d--talha-company/9dd7bd84-2f26-4e3a-90e6-59bd2ec28838/scratchpad/node_modules/playwright-core` into `tools/node_modules/playwright-core`.

- [x] **Step 3: Write the failing rules tests** — `tools/test/rules.test.js`

```js
'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { scanText, checkRequired } = require('../lib/rules');

const ids = text => scanText(text).findings.map(f => f.id);

test('flags USD amounts but not AED or template literals', () => {
  assert.deepStrictEqual(ids('Pay $85 now'), ['usd']);
  assert.deepStrictEqual(ids('Pay AED 85 now ${price} 5 min'), []);
});
test('flags US places, states, phones, time zones and units', () => {
  assert.ok(ids('Salon · Austin, TX').includes('us-place'));
  assert.ok(ids('Salon · Austin, TX').includes('us-state'));
  assert.ok(ids('Call (512) 555-0142').includes('us-phone'));
  assert.ok(ids('Times shown in Eastern Time (EST)').includes('us-timezone'));
  assert.ok(ids('14.6 lb + 7 items').includes('imperial'));
  assert.deepStrictEqual(ids('6.6 kg · 66 km · 46°C · 15 min'), []);
});
test('flags US-only platforms and iMessage', () => {
  assert.ok(ids('Klarna pay in 4').includes('us-platform'));
  assert.ok(ids('DoorDash payout').includes('us-platform'));
  assert.ok(ids('iMessage thread').includes('imessage'));
  assert.deepStrictEqual(ids('Tabby pay in 4 on WhatsApp via Talabat'), []);
});
test('flags US streets, neighbourhoods and companies', () => {
  assert.ok(ids('Next stop 2231 N Clark St 4B').includes('us-street'));
  assert.ok(ids('Pickup at Smith St').includes('us-street'));
  assert.ok(ids('Wicker Park Stays').includes('us-area'));
  assert.ok(ids('Order from Baldor Foods').includes('us-company'));
  assert.deepStrictEqual(ids('Marina Gate 2, Apt 1804, Dubai Marina · Sheikh Zayed Road · Al Aweer Fresh Co.'), []);
});
test('flags US market wording', () => {
  assert.ok(ids('Websites for US businesses').includes('us-market'));
});
test('allowlist removes legitimate strings before scanning', () => {
  assert.deepStrictEqual(scanText('Business Bay Square tower', ['Business Bay Square']).findings, []);
});
test('warns when QuickBooks appears more than twice', () => {
  const pad = 'x'.repeat(80);
  const three = `Sync to QuickBooks daily. ${pad} Export QuickBooks invoices. ${pad} QuickBooks bank feed.`;
  assert.strictEqual(scanText(three).warnings.length, 1);
  assert.strictEqual(scanText(`Sync to QuickBooks daily. ${pad} Export QuickBooks invoices.`).warnings.length, 0);
  // the same place read twice (two tab states) counts once
  assert.strictEqual(scanText(`${three} ${pad} ${three}`).warnings.length, 1);
});
test('checkRequired lists every missing UAE item', () => {
  const ok = { h1Count: 1, h1KickerVisible: true, plx: 1, nosnippet: 5, waLinks: 2, exampleChips: 1, aed: 20, arabicOutsideRtl: 0 };
  assert.deepStrictEqual(checkRequired(ok), []);
  const bad = { h1Count: 3, h1KickerVisible: false, plx: 0, nosnippet: 0, waLinks: 0, exampleChips: 0, aed: 0, arabicOutsideRtl: 2 };
  assert.strictEqual(checkRequired(bad).length, 8);
});
```

- [x] **Step 4: Run tests to verify they fail**

Run: `npm test`
Expected: FAIL with `Cannot find module '../lib/rules'`.

- [x] **Step 5: Write `tools/lib/rules.js`**

```js
'use strict';
// What a Dubai + UAE mockup must not contain, and must contain.
// Spec: docs/superpowers/specs/2026-10-09-uae-localization-design.md §9
const FORBIDDEN = [
  ['usd', /\$\s?\d/g, 'USD amount: use AED'],
  ['us-place', /\b(Denver|Austin|Phoenix|Chicago|Miami|Dallas|Houston|Brooklyn|San Francisco|New York|Plano|Frisco|Lakewood|Arvada|Englewood|Carroll Gardens|Lincoln Park|Washington Park|Ohio|Texas|Colorado|Arizona|Illinois|Florida)\b/g, 'US place name'],
  ['us-state', /,\s?(TX|AZ|CO|IL|FL|CA|NY)\b/g, 'US state code'],
  ['us-street', /\b\d{2,5} [NSEW]\.? [A-Z][a-z]+ (St|Ave|Blvd|Rd)\b|\b[A-Z][a-z]+ (St|Ave|Blvd)\b/g, 'US street address: use a UAE building/community (spec §6.9)'],
  ['us-area', /\b(Wicker Park|Lakeview|Evanston|Lincoln|Tempe|Scottsdale|Mesa|Starwood|Hotel Ella|Mile High|Front Range)\b/g, 'US neighbourhood or venue (spec §6.9)'],
  ['us-company', /\b(Baldor|WorldPac|Ferguson|Midas|uBreakiFix|Brooklyn Provisions|Desert Parts Supply|Valley Quick Lube)\b/g, 'US supplier or competitor (spec §6.9)'],
  ['us-platform', /\b(DoorDash|Uber Eats|Grubhub|Gusto|Zelle|Venmo|Cash App|Klarna|Affirm|Afterpay|Shop Pay|Yelp|Angi|HomeAdvisor|BBB|ServiceTitan|Housecall Pro|Tekmetric|Shopmonkey|Mitchell 1|RepairShopr|Clover|CallRail|10DLC|OpenTable|Square Appointments|Toast|Square)\b|Chase\s*••/g, 'US-only platform'],
  ['imessage', /iMessage/g, 'use WhatsApp'],
  ['us-phone', /\(\d{3}\)\s?\d{3}-\d{4}/g, 'US phone format: use +971'],
  ['us-timezone', /\b(EST|PST|CST|MST|Eastern Time|Central Time|Mountain Time|Pacific Time|US Eastern)\b/g, 'use GST'],
  ['imperial', /\d\s?(lb|lbs|mi|miles|°F|gal)\b/g, 'use kg / km / °C / litres'],
  ['us-post', /\b(USPS|FedEx|UPS|ZIP)\b/g, 'US post / ZIP: UAE has no ZIP codes'],
  ['us-holiday', /\b(Thanksgiving|Black Friday|Fourth of July|Memorial Day|Labor Day)\b/g, 'US holiday: use Ramadan, Eid, White Friday, DSF'],
  ['us-market', /\b(US businesses|US agencies|US market|across the US|the USA)\b/gi, 'US market wording'],
];
const QUICKBOOKS_MAX = 2;

function scanText(text, allow = []) {
  let t = text;
  for (const a of allow) t = t.split(a).join(' ');
  const findings = [];
  for (const [id, re, why] of FORBIDDEN) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(t))) {
      const context = t.slice(Math.max(0, m.index - 40), m.index + m[0].length + 40).replace(/\s+/g, ' ').trim();
      findings.push({ id, why, match: m[0], context });
    }
  }
  // count distinct places (the audit reads each tab state, so the same text can appear many times)
  const qbPlaces = new Set();
  const qre = /QuickBooks/g;
  let q;
  while ((q = qre.exec(t))) qbPlaces.add(t.slice(Math.max(0, q.index - 30), q.index + 40));
  const qb = qbPlaces.size;
  const warnings = qb > QUICKBOOKS_MAX ? [{ id: 'quickbooks', why: `QuickBooks appears ${qb} times; UAE default is Zoho Books (max ${QUICKBOOKS_MAX})` }] : [];
  return { findings, warnings };
}

function checkRequired(f) {
  const fail = [];
  if (f.h1Count !== 1) fail.push(`exactly one <h1> (found ${f.h1Count})`);
  if (!f.h1KickerVisible) fail.push('visible .h1-kicker inside the <h1>');
  if (f.plx < 1) fail.push('"In plain English" block (section.plx)');
  if (f.nosnippet < 3) fail.push(`data-nosnippet on at least 3 mockup wrappers (found ${f.nosnippet})`);
  if (f.waLinks < 1) fail.push('WhatsApp link (a[href^="https://wa.me/"])');
  if (f.exampleChips < 1) fail.push('"Example project" chip (.ex-chip)');
  if (f.aed < 5) fail.push(`AED prices (found ${f.aed}, need at least 5)`);
  if (f.arabicOutsideRtl > 0) fail.push(`Arabic text outside a dir="rtl" element (${f.arabicOutsideRtl})`);
  return fail;
}

module.exports = { FORBIDDEN, scanText, checkRequired };
```

- [x] **Step 6: Run rules tests**

Run: `npm test`
Expected: rules tests PASS (sync-lib tests don't exist yet).

- [x] **Step 7: Write the failing sync-lib tests** — `tools/test/sync-lib.test.js`

```js
'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { blocks, snapshot, propagate, ensureShared, addNoSnippet, SHARED_START } = require('../lib/sync-lib');

const page = (sites, tpl) => `<style>a{}</style><script>
/* ===== templates A ===== */
${tpl}
const SITES=[
${sites}
];
/* ===== templates B ===== */
b();
</script>`;

test('blocks finds marker and fixed blocks', () => {
  const keys = blocks(page("{city:'Austin'}", 'a()')).map(b => b.key);
  assert.ok(keys.includes('templates A#1'));
  assert.ok(keys.includes('templates B#1'));
  assert.ok(keys.includes('SITES'));
});
test('propagate copies changed blocks into targets that still hold the old copy', () => {
  const oldSrc = page("{city:'Austin'}", 'a()');
  const snap = snapshot(oldSrc);
  const newSrc = page("{city:'Dubai'}", 'a()');
  const { out, applied } = propagate(newSrc, snap, oldSrc);
  assert.ok(out.includes("city:'Dubai'"));
  assert.ok(applied.length >= 1);
});
test('propagate skips a target whose block differs from the snapshot', () => {
  const oldSrc = page("{city:'Austin'}", 'a()');
  const snap = snapshot(oldSrc);
  const newSrc = page("{city:'Austin'}", 'a(); /* UAE */');
  const diverged = page("{city:'Austin'}", 'a(); /* page-specific */');
  const { out, applied } = propagate(newSrc, snap, diverged);
  assert.ok(out.includes('page-specific'));
  assert.deepStrictEqual(applied, []);
});
test('ensureShared inserts before the first </style> once, then replaces', () => {
  const block = `${SHARED_START}\n.x{}\n/* uae-shared:end */`;
  const once = ensureShared('<style>a{}</style>', block);
  assert.ok(once.indexOf(SHARED_START) < once.indexOf('</style>'));
  const twice = ensureShared(once, block.replace('.x{}', '.y{}'));
  assert.strictEqual(twice.split(SHARED_START).length - 1, 1);
  assert.ok(twice.includes('.y{}') && !twice.includes('.x{}'));
});
test('addNoSnippet marks mockup wrappers once', () => {
  const src = '<div class="sp-stage" id="spStage"></div><div class="pv"><div class="pvx"></div></div><div class="dv" id="dv0"></div>';
  const once = addNoSnippet(src);
  assert.strictEqual(once.split('data-nosnippet').length - 1, 3);
  assert.strictEqual(addNoSnippet(once), once);
});
```

- [x] **Step 8: Run to verify failure**

Run: `npm test`
Expected: FAIL with `Cannot find module '../lib/sync-lib'`.

- [x] **Step 9: Write `tools/lib/sync-lib.js`**

```js
'use strict';
// Finds syncable blocks in a mockup and copies edited ones to other mockups that still hold the old copy.
const crypto = require('crypto');

const MARKER = /\/\*\s*=+[^*]*?\*\/|<!--\s*=+[\s\S]*?-->/g;
const SHARED_START = '/* uae-shared:start */';
const SHARED_END = '/* uae-shared:end */';
const FIXED = [
  { key: 'SITES', start: 'const SITES=[', end: '\n];' },
  { key: 'UAE-SHARED-CSS', start: SHARED_START, end: SHARED_END },
  { key: 'NAV', start: '<nav', end: '</nav>' },
  { key: 'FOOTER', start: '<footer', end: '</footer>' },
];
// Static wrappers of mockups that get data-nosnippet (spec §6.5).
const NOSNIPPET = /<([a-z]+)\b([^>]*?)\b(id="(heroStage|spStage|showStage|auStage|stage|csVis)"|class="(pv|dv|viz|cs-vis)(\s[^"]*)?")([^>]*)>/g;

const hash = s => crypto.createHash('md5').update(s).digest('hex').slice(0, 8);
const nameOf = c => c.replace(/^\/\*|\*\/$|^<!--|-->$/g, '').replace(/=+/g, '').trim();

function blocks(src) {
  const out = [];
  const seen = {};
  const ms = [...src.matchAll(MARKER)];
  ms.forEach((m, i) => {
    const name = nameOf(m[0]);
    seen[name] = (seen[name] || 0) + 1;
    out.push({ key: `${name}#${seen[name]}`, start: m.index + m[0].length, end: i + 1 < ms.length ? ms[i + 1].index : src.length });
  });
  for (const f of FIXED) {
    const s = src.indexOf(f.start);
    if (s < 0) continue;
    const e = src.indexOf(f.end, s + f.start.length);
    if (e < 0) continue;
    out.push({ key: f.key, start: s, end: e + f.end.length });
  }
  return out;
}

function snapshot(src) {
  const o = {};
  for (const b of blocks(src)) o[b.key] = hash(src.slice(b.start, b.end));
  return o;
}

function propagate(fromSrc, snap, targetSrc) {
  const fromBody = key => { const b = blocks(fromSrc).find(x => x.key === key); return b && fromSrc.slice(b.start, b.end); };
  let out = targetSrc;
  const applied = [];
  for (const key of Object.keys(snap)) {
    const next = fromBody(key);
    if (next === undefined || hash(next) === snap[key]) continue;   // unchanged in the source page
    const b = blocks(out).find(x => x.key === key);
    if (!b) continue;
    if (hash(out.slice(b.start, b.end)) !== snap[key]) continue;    // target diverged or already updated
    out = out.slice(0, b.start) + next + out.slice(b.end);
    applied.push(key);
  }
  return { out, applied };
}

function ensureShared(src, block) {
  const s = src.indexOf(SHARED_START);
  if (s >= 0) {
    const e = src.indexOf(SHARED_END, s) + SHARED_END.length;
    return src.slice(0, s) + block + src.slice(e);
  }
  const i = src.indexOf('</style>');
  return src.slice(0, i) + block + '\n' + src.slice(i);
}

function addNoSnippet(src) {
  return src.replace(NOSNIPPET, (all) => (all.includes('data-nosnippet') ? all : all.replace(/>$/, ' data-nosnippet>')));
}

module.exports = { blocks, snapshot, propagate, ensureShared, addNoSnippet, hash, SHARED_START, SHARED_END };
```

- [x] **Step 10: Run all tests**

Run: `npm test`
Expected: all tests PASS (13 tests).

- [x] **Step 11: Write `tools/lib/page.js`**

```js
'use strict';
// Opens a mockup in installed Chrome and offers helpers shared by the CLIs.
const path = require('path');
const { chromium } = require('playwright-core');

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const MOCKUPS = path.resolve(__dirname, '../../mockups');
const TAB_SELECTORS = ['#tabs button', '#showTabs button', '#auTabs button', '#ddList button', '#filters button', '#steps > *', '[role="tab"]'];

async function open(file, { width = 1440, height = 900 } = {}) {
  const browser = await chromium.launch({ executablePath: CHROME });
  const page = await browser.newPage({ viewport: { width, height } });
  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errors.push('console: ' + m.text()); });
  const url = 'file:///' + path.join(MOCKUPS, file).replace(/\\/g, '/').replace(/ /g, '%20');
  await page.goto(url, { waitUntil: 'domcontentloaded' });   // images delay the load event (CLAUDE.md §6.4)
  await page.waitForTimeout(4000);
  return { browser, page, errors };
}

// Clicks every tab-like control once and calls onState(label) after each click.
async function walkTabs(page, onState) {
  const n = await page.evaluate(sels => {
    const seen = new Set();
    let i = 0;
    for (const s of sels) document.querySelectorAll(s).forEach(e => { if (!seen.has(e)) { seen.add(e); e.dataset.walk = String(i++); } });
    return i;
  }, TAB_SELECTORS);
  for (let i = 0; i < n; i++) {
    await page.evaluate(i => { const e = document.querySelector(`[data-walk="${i}"]`); e.scrollIntoView({ block: 'center' }); e.click(); }, i);
    await page.waitForTimeout(1200);
    await onState(`tab-${String(i).padStart(2, '0')}`);
  }
  return n;
}

// All text in the page, visible or hidden, excluding <script>, <style>, <template>, <noscript>.
function pageText(page) {
  return page.evaluate(() => {
    const out = [];
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: n => (n.parentElement && n.parentElement.closest('script,style,template,noscript') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
    });
    while (w.nextNode()) out.push(w.currentNode.textContent);
    return out.join(' ');
  });
}

module.exports = { open, walkTabs, pageText, MOCKUPS, TAB_SELECTORS };
```

- [x] **Step 12: Write `tools/uae-audit.js`**

```js
#!/usr/bin/env node
'use strict';
// Usage: node uae-audit.js <page.html>
// Exit 0 when the page has no US leftovers (in any tab state) and has every required UAE item.
const fs = require('fs');
const path = require('path');
const { open, walkTabs, pageText } = require('./lib/page');
const { scanText, checkRequired } = require('./lib/rules');

(async () => {
  const file = process.argv[2];
  if (!file) { console.error('usage: node uae-audit.js <page.html>'); process.exit(2); }
  const allow = JSON.parse(fs.readFileSync(path.join(__dirname, 'uae-allow.json'), 'utf8'))[file] || [];
  const { browser, page, errors } = await open(file);
  let text = await pageText(page);
  const states = await walkTabs(page, async () => { text += ' ' + (await pageText(page)); });
  const facts = await page.evaluate(() => {
    const h1s = [...document.querySelectorAll('h1')];
    const k = h1s[0] && h1s[0].querySelector('.h1-kicker');
    const ks = k && getComputedStyle(k);
    const ar = /[\u0600-\u06FF]/;
    let arabicOutsideRtl = 0;
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) {
      const p = w.currentNode.parentElement;
      if (!p || p.closest('script,style,template')) continue;
      if (ar.test(w.currentNode.textContent) && !p.closest('[dir="rtl"]')) arabicOutsideRtl++;
    }
    return {
      h1Count: h1s.length,
      h1KickerVisible: !!(k && k.offsetHeight > 0 && ks.visibility !== 'hidden' && +ks.opacity > 0.5 && !k.querySelector('.wd')),
      plx: document.querySelectorAll('section.plx').length,
      nosnippet: document.querySelectorAll('[data-nosnippet]').length,
      waLinks: document.querySelectorAll('a[href^="https://wa.me/"]').length,
      exampleChips: document.querySelectorAll('.ex-chip').length,
      arabicOutsideRtl,
    };
  });
  facts.aed = (text.match(/AED\s?\d/g) || []).length;
  const { findings, warnings } = scanText(text, allow);
  const unique = [...new Map(findings.map(f => [`${f.id}|${f.context}`, f])).values()];
  const missing = checkRequired(facts);

  console.log(`UAE audit · ${file} · ${states} tab states checked`);
  const byId = {};
  for (const f of unique) (byId[f.id] = byId[f.id] || []).push(f);
  for (const [id, list] of Object.entries(byId)) {
    console.log(`✗ ${id} (${list.length}) · ${list[0].why}`);
    for (const f of list.slice(0, 8)) console.log(`    "${f.match}" … ${f.context}`);
  }
  for (const m of missing) console.log(`✗ missing: ${m}`);
  for (const w of warnings) console.log(`! ${w.why}`);
  for (const e of errors) console.log(`✗ ${e}`);
  await browser.close();
  const ok = !unique.length && !missing.length && !errors.length;
  console.log(ok ? 'PASS' : `FAIL · ${unique.length} US leftovers · ${missing.length} missing · ${errors.length} errors`);
  process.exit(ok ? 0 : 1);
})();
```

- [x] **Step 13: Write `tools/verify.js`**

```js
#!/usr/bin/env node
'use strict';
// Usage: node verify.js <page.html> <outDir>
// Screenshots every section, every tab state and every hover card; prints page errors and AED text wider than its box.
const fs = require('fs');
const path = require('path');
const { open, walkTabs } = require('./lib/page');

(async () => {
  const [file, out] = process.argv.slice(2);
  if (!file || !out) { console.error('usage: node verify.js <page.html> <outDir>'); process.exit(2); }
  fs.mkdirSync(out, { recursive: true });
  const { browser, page, errors } = await open(file);
  await page.screenshot({ path: path.join(out, '00-top.png') });
  const n = await page.evaluate(() => { const s = [...document.querySelectorAll('body section')]; s.forEach((e, i) => (e.dataset.shot = i)); return s.length; });
  for (let i = 0; i < n; i++) {
    const name = await page.evaluate(i => { const e = document.querySelector(`[data-shot="${i}"]`); window.scrollTo(0, e.getBoundingClientRect().top + scrollY - 40); return e.id || e.className.split(' ')[0] || 'section'; }, i);
    await page.waitForTimeout(1500);
    await page.screenshot({ path: path.join(out, `${String(i + 1).padStart(2, '0')}-${name}.png`) });
  }
  const states = await walkTabs(page, label => page.screenshot({ path: path.join(out, `${label}.png`) }));
  const cards = await page.$$('.pain2');
  for (let i = 0; i < cards.length; i++) {
    await cards[i].scrollIntoViewIfNeeded();
    await cards[i].hover();
    await page.waitForTimeout(1300);
    await page.screenshot({ path: path.join(out, `hover-${i}.png`) });
  }
  await page.mouse.move(5, 5);
  const overflow = await page.evaluate(() => {
    const found = [];
    for (const el of document.querySelectorAll('body *')) {
      if (!/AED/.test(el.textContent) || el.children.length > 3 || el.clientWidth === 0) continue;
      const cs = getComputedStyle(el);
      if (cs.whiteSpace === 'nowrap' && el.scrollWidth > el.clientWidth + 1) found.push(el.textContent.trim().replace(/\s+/g, ' ').slice(0, 70));
    }
    return [...new Set(found)].slice(0, 40);
  });
  console.log(`verify · ${file} · ${n} sections · ${states} tab states · ${cards.length} hover cards → ${out}`);
  for (const o of overflow) console.log(`! AED text wider than its box: "${o}"`);
  for (const e of errors) console.log(`✗ ${e}`);
  await browser.close();
  console.log(errors.length ? `FAIL · ${errors.length} errors` : `OK · ${overflow.length} overflow warnings`);
  process.exit(errors.length ? 1 : 0);
})();
```

- [x] **Step 14: Write `tools/text-audit.js`** (the measurement used for CLAUDE.md §7 rule 10, now with an exit code)

```js
#!/usr/bin/env node
'use strict';
// Usage: node text-audit.js <page.html>
// Measures how large text inside every scaled mockup renders on screen. Exit 1 if any mockup's median is under 7 px.
const { open, TAB_SELECTORS } = require('./lib/page');

(async () => {
  const file = process.argv[2];
  if (!file) { console.error('usage: node text-audit.js <page.html>'); process.exit(2); }
  const { browser, page } = await open(file);
  await page.evaluate(() => {
    window.__R = {}; let n = 0;
    window.__scan = state => {
      const scaleOf = el => { const t = getComputedStyle(el).transform; if (!t || t === 'none') return 1; const m = t.match(/matrix\(([^)]+)\)/); if (!m) return 1; const v = m[1].split(',').map(Number); return Math.hypot(v[0], v[1]); };
      for (const el of document.querySelectorAll('main *, body > section *')) {
        if (![...el.childNodes].some(c => c.nodeType === 3 && c.textContent.trim().length > 2)) continue;
        const r = el.getBoundingClientRect(); if (!r.width || r.bottom < 0 || r.top > innerHeight || el.offsetWidth === 0) continue;
        const cs = getComputedStyle(el); if (cs.visibility === 'hidden' || +cs.opacity === 0) continue;
        const eff = r.width / el.offsetWidth; if (eff > 0.93) continue;
        let root = null, a = el; while (a && a !== document.body) { if (scaleOf(a) < 0.95) root = a; a = a.parentElement; }
        if (!root) continue;
        if (!root.dataset.aid) root.dataset.aid = 'm' + (n++);
        const sec = root.closest('section'); const id = root.dataset.aid;
        const g = window.__R[id] || (window.__R[id] = { sec: sec ? (sec.id || sec.className.split(' ')[0]) : '?', root: String(root.className || root.tagName).slice(0, 40), states: new Set(), px: [] });
        g.states.add(state); g.px.push(parseFloat(cs.fontSize) * eff);
      }
    };
  });
  const scan = s => page.evaluate(s => window.__scan(s), s);
  const H = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < H; y += 450) {
    await page.evaluate(y => window.scrollTo(0, y), y); await page.waitForTimeout(700); await scan('y' + y);
    for (const sel of TAB_SELECTORS) {
      const vis = await page.$$eval(sel, els => els.filter(e => { const r = e.getBoundingClientRect(); return r.top > 0 && r.bottom < innerHeight; }).length).catch(() => 0);
      if (!vis) continue;
      const tot = await page.$$eval(sel, els => els.length);
      for (let i = 0; i < tot; i++) { await page.evaluate(([s, i]) => { const e = document.querySelectorAll(s)[i]; e && e.click(); }, [sel, i]); await page.waitForTimeout(900); await scan(sel + i); }
    }
  }
  const res = await page.evaluate(() => Object.values(window.__R).map(g => { const a = g.px.sort((x, y) => x - y); return { sec: g.sec, root: g.root, n: a.length, med: +a[Math.floor(a.length / 2)].toFixed(1), state: [...g.states][0] }; }));
  res.sort((x, y) => x.med - y.med);
  let tooSmall = 0;
  for (const r of res) { const tag = r.med < 7 ? 'TOO SMALL' : r.med < 9 ? 'small    ' : 'ok       '; if (r.med < 7) tooSmall++; console.log(`${tag} med ${String(r.med).padStart(4)}px n=${String(r.n).padStart(4)} [${r.sec}] ${r.root} (${r.state})`); }
  await browser.close();
  console.log(tooSmall ? `FAIL · ${tooSmall} mockups too small` : 'PASS');
  process.exit(tooSmall ? 1 : 0);
})();
```

- [x] **Step 15: Write `tools/sync.js` and `tools/uae-allow.json`**

```js
#!/usr/bin/env node
'use strict';
// Usage:
//   node sync.js snapshot <page.html>    remember every block of <page> before you edit it
//   node sync.js propagate <page.html>   copy blocks you changed in <page> into every mockup that still has the old copy
//   node sync.js shared <page.html>      copy the /* uae-shared:start…end */ CSS block from <page> into every mockup
//   node sync.js nosnippet <page.html|--all>   add data-nosnippet to mockup wrappers (spec §6.5)
const fs = require('fs');
const path = require('path');
const { snapshot, propagate, ensureShared, addNoSnippet, SHARED_START, SHARED_END } = require('./lib/sync-lib');
const { MOCKUPS } = require('./lib/page');

const [cmd, file] = process.argv.slice(2);
const pages = fs.readdirSync(MOCKUPS).filter(f => f.endsWith('.html'));
const read = f => fs.readFileSync(path.join(MOCKUPS, f), 'utf8');
const write = (f, s) => fs.writeFileSync(path.join(MOCKUPS, f), s);
const snapFile = f => path.join(__dirname, '.snap', f + '.json');

if (cmd === 'snapshot') {
  fs.mkdirSync(path.join(__dirname, '.snap'), { recursive: true });
  fs.writeFileSync(snapFile(file), JSON.stringify(snapshot(read(file)), null, 1));
  fs.copyFileSync(path.join(MOCKUPS, file), path.join(MOCKUPS, '.bak', file.replace('.html', `.${Date.now()}.html`)));
  console.log(`snapshot saved for ${file} (backup in mockups/.bak)`);
} else if (cmd === 'propagate') {
  const snap = JSON.parse(fs.readFileSync(snapFile(file), 'utf8'));
  const src = read(file);
  for (const p of pages) {
    if (p === file) continue;
    const { out, applied } = propagate(src, snap, read(p));
    if (applied.length) { write(p, out); console.log(`${p}: ${applied.join(', ')}`); }
  }
} else if (cmd === 'shared') {
  const src = read(file);
  const s = src.indexOf(SHARED_START);
  if (s < 0) { console.error(`${file} has no ${SHARED_START} block`); process.exit(1); }
  const block = src.slice(s, src.indexOf(SHARED_END, s) + SHARED_END.length);
  for (const p of pages) { if (p !== file) { write(p, ensureShared(read(p), block)); console.log(`${p}: shared CSS in sync`); } }
} else if (cmd === 'nosnippet') {
  for (const p of file === '--all' ? pages : [file]) { const before = read(p); const after = addNoSnippet(before); if (after !== before) { write(p, after); console.log(`${p}: data-nosnippet added`); } }
} else {
  console.error('usage: node sync.js snapshot|propagate|shared|nosnippet <page.html>');
  process.exit(2);
}
```

`tools/uae-allow.json`:

```json
{}
```

- [x] **Step 16: Baseline run on two pages**

Run: `node uae-audit.js homepage.html`
Expected: FAIL, listing `usd`, `us-place`, `us-phone`, `us-timezone`, `us-market` findings and missing `h1-kicker`, `plain-English`, `WhatsApp`, `Example project`, `AED`, plus `exactly one <h1> (found 3)`; "N tab states checked" with N > 0.

Run: `node verify.js homepage.html ../_shots/baseline-home`
Expected: `OK` (0 errors), screenshots written. Run: `node text-audit.js homepage.html` → `PASS` (baseline for later comparison; save the output to `../_shots/baseline-home/text.txt`).

Run: `node sync.js snapshot service-mobile-apps.html && node sync.js propagate service-mobile-apps.html`
Expected: snapshot saved; propagate prints nothing (no changes yet).

- [x] **Step 17: Checkpoint**

No git in this project. Confirm `mockups/us/` has 19 files and `npm test` passes. Add `docs/superpowers/_shots/`, `tools/node_modules/`, `tools/.snap/`, `mockups/.bak/` to the list of throwaway folders in `docs/superpowers/tools/README.md`:

```markdown
# Mockup tools
- `node uae-audit.js <page>`: UAE localization audit (exit 0 = pass)
- `node verify.js <page> <outDir>`: screenshots + errors + AED overflow
- `node text-audit.js <page>`: on-screen text size in mockups
- `node sync.js snapshot|propagate|shared|nosnippet <page>`
- `npm test`: tests for the rule and sync libraries
Throwaway folders (safe to delete): `node_modules/`, `.snap/`, `../_shots/`, `../mockups/.bak/`.
```

---

### Task 2: Shared foundations (brands, shared CSS, mockup headings, kicker-safe split)

Edit in `homepage.html` (the origin of `SITES` and the tool-window libraries), then propagate.

**Files:**
- Modify: `docs/superpowers/mockups/homepage.html` (`const SITES=[…]`, `siteHTML()`, mockup `<h1>`s, `split()`, main `<style>`)
- Modify (by propagation): all other 18 mockups
- Test: `node uae-audit.js homepage.html` (partial), visual check

**Interfaces:**
- Consumes: Task 1 CLIs.
- Produces: `SITES` entries with UAE values for keys `salon, laundry, auto, repair, food, saas`; CSS classes `h1-kicker, plx, plx-in, plx-l, plx-r, plx-f, wa-btn, wa-ic, wa-nav, ex-chip, mk-h1, lng` available on every page; `split()` skips `.h1-kicker`.

- [x] **Step 1: Snapshot**

Run: `node sync.js snapshot homepage.html`

- [x] **Step 2: Rewrite the six `SITES` entries** (spec §4; every price in AED, phones `+971`, trust logos per §3)

For each entry change these fields (others unchanged):

| key | `city` | `ann` | `phone` | `eb` | `trust` | `sv` prices | `ks` | footer-facing text |
|---|---|---|---|---|---|---|---|---|
| salon | `Ladies' salon · Jumeirah, Dubai` | `Now booking December · Gift cards available` | `+971 4 555 0142` | `Hair & beauty studio · Jumeirah, Dubai` | `['VOGUE ARABIA','Harper\'s BAZAAR Arabia','Time Out Dubai','Emirates Woman']` | Cut & style `from AED 180`, Balayage `from AED 650`, Bridal `from AED 950` | `['12 yrs','in Dubai']` | app list prices AED 180 / AED 650 |
| laundry | `Laundry · Dubai Marina & JLT` | `Free pickup on your first order · Code FRESH10` | `+971 4 555 0199` | `Pickup & delivery · Dubai Marina & JLT` | `['Time Out Dubai','Gulf News','Khaleej Times','What\'s On']` | Wash & fold `AED 15 / kg`, Dry cleaning `from AED 18`, Bedding `from AED 75` | `['24h','turnaround'],['6','branches'],['40k','orders']` | quote `"I haven't done laundry in a year. Best AED 150 I spend every week."`; app list `Wash & fold · 6 kg · AED 90.00`, `Dry clean · 3 items · AED 54.00` |
| auto | `Garage · Al Quoz, Dubai` | `Same-day service · Free multi-point inspection` | `+971 4 555 0110` | `Certified car service · Al Quoz, Dubai` | `['Bosch Car Service','Mobil 1','Michelin','Castrol']` | Oil & service `from AED 299`, Brakes `from AED 890`, Diagnostics `AED 250` | `['18 yrs','in Al Quoz'],['9','service bays'],['4.9★','860 reviews']` | `fl2:'Dealer-level diagnostics'`; `abl` warranty `'12-month / 20,000 km warranty'`; app list AED 459 / AED 890 |
| repair | `Electrical · Abu Dhabi` | `24/7 emergency line · Licensed & insured` | `+971 2 555 0187` | `Licensed electricians · Abu Dhabi` | `['Tesla Certified','ADDC approvals','Google 4.9★','ServiceMarket']` | EV chargers `from AED 3,900`, DB board upgrades `from AED 8,800`, Lighting `from AED 650` | unchanged | `fl:['Estimate sent','AED 4,550 · EV charger']`; app list `Charger + install · 1 unit · AED 3,900` |
| food | `Restaurant · JLT, Dubai` | `Now open for Friday brunch · Private dining available` | `+971 4 555 0160` | `Wood-fired kitchen · JLT, Dubai` | `['Time Out Dubai','What\'s On','Gulf News','Michelin Guide Dubai']` | Charred octopus `AED 85`, Short rib `AED 120`, Sourdough `AED 40` | unchanged | `sb` ends "…fresh juices and a room made for long dinners."; `fl2:'Michelin Guide · Bib Gourmand'`; quote `"The short rib alone is worth the drive across Sheikh Zayed Road."`, `qw:['Time Out Dubai',…]`; app list AED 85 / AED 120 |
| saas | `SaaS · DIFC, Dubai` | `New: UAE e-invoicing is live →` | `Sign in` | `Finance automation for GCC SMEs` | `['Stripe','Zoho Books','Xero','UAE Pass']` | unchanged ("Included") | `['2,140','companies'],['AED 4.4B','reconciled'],['99.99%','uptime']` | `sb`: "Ledgerly matches invoices, chases late payments and syncs with Zoho Books, so your finance team can stop copy-pasting."; `fl:['MRR','AED 176.7k ▲ 12%']`; `fl2:'ISO 27001'`; `abl[0]:'Two-way Zoho Books & Xero sync'`; app card `['3 invoices overdue','AED 45,500 total','Remind']`, list `Acme Co. AED 15,400`, `Northwind AED 30,100` |

Also in every entry: replace remaining `$` amounts in `app.list`, `app.card`, `fl` and `q` with AED values from spec §4 (Maison Rose deposit AED 100), and in any `nav` arrays keep items. Search the block for `$` after editing: `grep -c '\$[0-9]'` on the extracted block must be 0.

- [x] **Step 3: `siteHTML()` changes**

In `siteHTML(c)` (homepage `/* mock pass 2 … */` area, line ~1603):
- Replace `<h1>${c.h1}</h1>` with `<div class="mk-h1">${c.h1}</div>`.
- In the nav right side, before `${c.phone}`, add `<span class="lng">EN · ع</span>` → `<div class="r"><span class="lng">EN · ع</span><span>${c.phone}</span>…`.
- In the template footer columns replace `Instagram<br>Google<br>Yelp` with `Instagram<br>Google<br>WhatsApp`.

Then make every other mockup `<h1` in homepage templates a `div.mk-h1` (the PDF proposal at line ~1973: `<h1>Booking website & mobile app…</h1>` → `<div class="mk-h1">…</div>`).

CSS: change `.S h1{…}` to `.S h1,.S .mk-h1{…}`, `.S h1 i{…}` to `.S h1 i,.S .mk-h1 i{…}`, `.page h1{…}` to `.page h1,.page .mk-h1{…}`. Add to the shared block (Step 4): `.S .lng{opacity:.55;font-size:.92em;margin-right:14px;letter-spacing:.04em}`.

Verify: `grep -c "<h1" homepage.html` → `1`.

- [x] **Step 4: Add the shared CSS block** at the end of the main `<style>` in `homepage.html`

```css
/* uae-shared:start */
/* UAE localization components · spec 2026-10-09-uae-localization-design.md §6 */
h1 .h1-kicker{display:block;font:600 14px/1.4 'Plus Jakarta Sans',sans-serif;letter-spacing:0;color:rgba(255,255,255,.62);margin:0 0 18px;text-transform:none}
h1 .h1-kicker::before{content:"";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--lime);margin-right:10px;vertical-align:1px}
.plx{padding:56px 0 8px}
.plx-in{display:grid;grid-template-columns:220px 1fr;gap:40px;align-items:start;border-top:1px solid var(--line);padding-top:28px}
.plx-l{font:600 12px/1 'JetBrains Mono',monospace;letter-spacing:.08em;color:var(--mute)}
.plx-r p{font:500 19px/1.6 'Plus Jakarta Sans',sans-serif;color:var(--ink);max-width:860px;margin:0}
.plx-f{display:flex;flex-wrap:wrap;gap:10px;margin-top:20px}
.plx-f span{background:var(--card);border:1px solid var(--line);border-radius:999px;padding:9px 16px;font:500 14px/1 'Plus Jakarta Sans',sans-serif;color:var(--ink)}
.plx-f b{font:600 11px/1 'JetBrains Mono',monospace;color:var(--mute);margin-right:8px;letter-spacing:.05em;text-transform:uppercase}
.wa-btn{background:transparent;color:inherit;border:1px solid currentColor;display:inline-flex;align-items:center;gap:10px}
.wa-ic{width:18px;height:18px;flex:none}
.wa-nav{width:40px;height:40px;border-radius:50%;display:inline-grid;place-items:center;border:1px solid var(--line);margin-right:8px}
.ex-chip{display:inline-block;font:600 11px/1 'JetBrains Mono',monospace;letter-spacing:.05em;padding:7px 11px;border-radius:999px;background:rgba(255,255,255,.12);color:rgba(255,255,255,.7)}
.show .ex-chip,.au-jr .ex-chip,.gal .ex-chip,.rsec .ex-chip{background:var(--soft);color:var(--mute)}
.S .lng{opacity:.55;font-size:.92em;margin-right:14px;letter-spacing:.04em}
@media(max-width:760px){.plx-in{grid-template-columns:1fr;gap:12px}}
/* uae-shared:end */
```

- [x] **Step 5: Make `split()` skip the kicker**

In homepage `split(el)`, change the element branch from
`else if(c.nodeType===1&&c.tagName!=='BR')walk(c)`
to
`else if(c.nodeType===1&&c.tagName!=='BR'&&!c.classList.contains('h1-kicker'))walk(c)`.
Do the same in the `split()` of every other page during its own task (it lives in page-level script, Step 3 of each page task).

- [x] **Step 6: Propagate and check**

Run: `node sync.js shared homepage.html` → 18 lines "shared CSS in sync".
Run: `node sync.js propagate homepage.html` → each other page lists `SITES` (and `mock pass 2…#1` / `realsize tool windows…#1` where they are identical copies).
Run: `node sync.js nosnippet --all` → pages list "data-nosnippet added".
Run: `node verify.js homepage.html ../_shots/t2-home` → `OK`, 0 errors. Open `../_shots/t2-home/*-work.png` (gallery): concept sites show Dubai details, `EN · ع` in nav, AED prices, nothing clipped.
Run: `node verify.js service-mobile-apps.html ../_shots/t2-mobile` → `OK` (proves propagation didn't break a second page).
Expected audit on homepage still FAILS (page-specific copy is Task 3), but findings that came from `SITES`/`siteHTML()` are gone: `node uae-audit.js homepage.html | grep -c Yelp` → `0`, and no finding context mentions `Ladies' salon` neighbours like `(512) 555-0142` from the gallery sites.

- [x] **Step 7: Record**

Add a line under "Shared foundations" in the UAE spec §4: "Applied to `SITES` on [date]; propagated to 18 pages." `touch` homepage.html for the preview (CLAUDE.md §7 rule 9).

---

### Task 3: Homepage (`homepage.html`)

**Files:**
- Modify: `docs/superpowers/mockups/homepage.html`
- Modify: `docs/superpowers/specs/2026-10-07-agency-site-homepage-and-mobile-apps-design.md` (§1, §2, §3.4, §4)
- Test: `node uae-audit.js homepage.html`

**Interfaces:**
- Consumes: Task 2 shared CSS, `SITES`.
- Produces: homepage AED values that every later page must match (Global Constraints); nav + footer variant A (propagated to the 11 pages that share it).

> **Found in Task 1 baseline (2026-10-09):** the homepage has **12** `<h1>` elements (demote 11 to `h2`/`div` keeping their styles), and `text-audit.js` already FAILS on the US version: 8 mockups have median text under 7px. Real nested small text: "How it works" step 5 approval window and step 7 QA report (`twin qa2w`), the Work grid app phones (`app`, filters 5–6), deep dive 2 (`sw`), starting-point tab 4 phone (`pf-i`). Baseline: `_shots/baseline-home/text.txt`. Fix these (zoom/crop or larger source text, CLAUDE.md §7 rule 10) so Task 3 ends with `text-audit` PASS.

- [x] **Step 1: Snapshot and baseline**

Run: `node sync.js snapshot homepage.html && node uae-audit.js homepage.html`
Expected: FAIL. Keep the list; every item must be gone by Step 5.

- [x] **Step 2: Hero, kicker, plain-English block, WhatsApp**

Replace
```html
<div class="kicker">Websites, apps and automation for US businesses</div>
<h1>You run the business.<em>We build the software that runs it.</em></h1>
```
with
```html
<h1><span class="h1-kicker">Apps, websites and software for businesses in Dubai &amp; UAE</span>You run the business.<em>We build the software that runs it.</em></h1>
```
In the hero timeline change `.from('.hero .kicker',…)` to `.from('.hero .h1-kicker',…)`.

Hero CTAs become:
```html
<div class="ctas"><a class="btn btn-lime" href="#book">Book a free call</a><a class="btn wa-btn" href="https://wa.me/971500000000?text=Hi%2C%20I%27m%20on%20your%20homepage" data-cursor="Chat"><svg class="wa-ic" viewBox="0 0 24 24" aria-hidden="true"><path fill="#25D366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Z"/><path fill="#fff" d="M8.9 7.4c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.4.6c-.1.2-.2.3 0 .6.5.9 1.6 2.1 3 2.6.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.2.1.4.2.4.4 0 .5-.2 1.4-1 1.8-.8.4-1.8.5-3.2-.1a9.3 9.3 0 0 1-4.6-4.2c-.8-1.4-.6-2.6-.4-3.2Z"/></svg>WhatsApp us</a><a class="btn btn-line" href="#how">See how it works</a></div>
```
Hero static Maison Rose browser: `HAIR & BEAUTY STUDIO · JUMEIRAH, DUBAI`, services `from AED 180 / AED 650 / AED 950`. Floating card "Payment received $85 · Apple Pay" → "Payment received · AED 100 · Apple Pay". Proof row: "from N business owners in the UAE".

Directly after the hero `</section>` insert:
```html
<!-- ================= PLAIN ENGLISH ================= -->
<section class="plx"><div class="w plx-in">
  <div class="plx-l">IN PLAIN ENGLISH</div>
  <div class="plx-r"><p>We're a software studio based in Dubai. We build websites, Shopify stores, mobile apps, WhatsApp assistants and the systems behind them for UAE businesses: restaurants, salons, garages, laundries, AC companies and shops. Prices are fixed in AED before we start: websites from AED 7,900, website + app from AED 49,000. Everything comes in English and Arabic, and you own the code.</p>
    <div class="plx-f"><span><b>From</b>AED 2,900</span><span><b>Time</b>2–12 weeks</span><span><b>Languages</b>English + Arabic</span><span><b>Based in</b>Dubai</span></div></div>
</div></section>
```

- [x] **Step 3: Sections per spec §8.1**

- Nav: before the lime "Book a free call" add `<a class="wa-nav" href="https://wa.me/971500000000?text=Hi" aria-label="WhatsApp us"><svg class="wa-ic" …same paths…></svg></a>`.
- Trust strip: "Trusted by owners and agencies across the UAE".
- Starting points tab 2: Peak **Cooling** website (`peakcooling.ae`), checkout Apple Pay / Tabby / card, toast "Payment succeeded · AED 99"; all `$` in the five tab mockups → AED (spec §4 values).
- How it works: step 01 "Google Meet"; step 02 PDF: scope lines summing to **AED 49,000**, `VAT 5% AED 2,450`, total `AED 51,450`, "Prepared for Sarah M., Owner · Jumeirah, Dubai"; step 08 "maisonrose.ae is live"; step 09 report AED.
- Gallery cards: add `<span class="ex-chip">Example project · illustrative numbers</span>` under the filter row (one chip for the grid).
- Deep dives: Payments tab sheet "AED 100"; Automation run log "Shopify order → Zoho Books invoice → WhatsApp message → stock sheet"; Google tab query "salon near me" with results in Jumeirah, Dubai.
- Results: add the `.ex-chip` under the section heading.
- Pricing: Add-on from AED 2,900 · Launch from AED 7,900 · Build from AED 49,000 · Care from AED 790/mo; add line "Prices exclude 5% VAT."; white-label bar "Agencies in Dubai & UAE: …".
- FAQ: add two items: "Can the website and app be in Arabic?" → "Yes. Every website and app we build can run in English and Arabic, including right-to-left layouts. It's included from the custom tiers." and "Are your prices in AED, and do they include VAT?" → "Yes, all prices are fixed in AED. They exclude 5% VAT, which appears on the invoice."; change US wording in other answers.
- Booking widget: day row Mon–Fri; times `10:00 AM, 11:30 AM, 1:00 PM, 2:30 PM, 4:00 PM, 5:00 PM`; `.tz` → `Times shown in Dubai time (GST)`; `<small>30 min · Google Meet or in person in Dubai · free</small>`; after the confirm button add `<div class="tz">Prefer WhatsApp? Message us and we'll reply within the hour (Mon–Fri, GST).</div>`; add a WhatsApp CTA next to the closing CTA heading's buttons if present.
- Footer: add `<p class="ft-uae">Based in Dubai · Trade licence [number] · Mon–Fri 9:00–18:00 GST · WhatsApp +971 50 000 0000</p>` (style inline: `style="color:var(--mute);font-size:14px;margin-top:18px"`).
- `split()` change from Task 2 Step 5 already applies here.

- [x] **Step 4: Remaining leftovers**

Run: `node uae-audit.js homepage.html` and fix each listed item using spec §2–§4 until only missing items you've already added remain. Add genuine exceptions (none expected on this page) to `uae-allow.json` under `"homepage.html"` with a comment in this plan's checklist.

- [x] **Step 5: Audit passes**

Run: `node uae-audit.js homepage.html`
Expected: `PASS`, "N tab states checked" with N ≥ 10.

- [x] **Step 6: Visual check (incl. spec §6.9 UAE checklist)**

Run: `node verify.js homepage.html ../_shots/home`
Expected: `OK`, 0 errors. Fix every "AED text wider than its box" warning (widen the pill or shorten the text). Look at: `00-top.png` (kicker line above the headline, WhatsApp pill), `02-plx.png` (plain-English band), every `tab-*.png`, `*-pricing.png`, `*-book.png`.

- [x] **Step 7: Text size**

Run: `node text-audit.js homepage.html`
Expected: `PASS`, and no mockup smaller than in `../_shots/baseline-home/text.txt`.

- [x] **Step 8: Propagate nav/footer and update the spec**

Run: `node sync.js propagate homepage.html` (nav + footer variant A to identical pages).
Spec `2026-10-07-agency-site-homepage-and-mobile-apps-design.md`:
- Header: add `- **Market:** Dubai + UAE (localized 2026-10-09 per 2026-10-09-uae-localization-design.md; US version in specs/us/)`.
- §1: "sells to **businesses in Dubai & UAE** and to **agencies in the UAE** (white-label)"; decision 2: "Launch is **English first, UAE market**, Arabic for the top pages next."
- §2 config: currency AED, time zone GST, WhatsApp number.
- §3.4 nav adds the WhatsApp icon; booking widget "Dubai time (GST)"; add §3.7 "UAE components" pointing to the UAE spec §6.
- §4 every changed value (H1 kicker line, hero card AED 100, trust strip, tab 2 Peak Cooling, PDF AED 49,000, pricing AED values + VAT, FAQ additions, footer line, plain-English block as new section "H1b").
- §7 open items: replace "Tabby later" with "WhatsApp number, trade licence, free zone".
`touch homepage.html`.

---

### Task 4: Mobile apps (`service-mobile-apps.html`)

**Files:** Modify `docs/superpowers/mockups/service-mobile-apps.html`; Modify §5 of `docs/superpowers/specs/2026-10-07-agency-site-homepage-and-mobile-apps-design.md`. Test: `node uae-audit.js service-mobile-apps.html`.

**Interfaces:** Consumes Task 2–3. Produces the service template's localized blocks (`service page template#1`, `service page: mockups#1`, `industry showcase#1`) that later service pages receive by propagation; the reusable hero/CTA snippets below (same markup on every service page, only texts change).

- [ ] **Step 1: Snapshot and baseline** — `node sync.js snapshot service-mobile-apps.html && node uae-audit.js service-mobile-apps.html` → FAIL (keep the list).

- [ ] **Step 2: Hero, kicker, plain English, WhatsApp**

```html
<div class="crumb">Services / <b>Mobile Apps</b></div>
<h1><span class="h1-kicker">Mobile app development in Dubai &amp; UAE</span>Your customers live on their phones.<em>Your business should too.</em></h1>
```
Hero timeline: after `.from('.crumb',…)` add `.from('.sp-hp .h1-kicker',{y:20,opacity:0,duration:.8},'<')`. Change `split()` per Task 2 Step 5.
CTAs: `Book a free call` · WhatsApp pill (text `Hi%2C%20I%27m%20on%20your%20mobile%20apps%20page`) · `See app pricing`.
Insert after the hero section:
```html
<!-- ================= PLAIN ENGLISH ================= -->
<section class="plx"><div class="w plx-in">
  <div class="plx-l">IN PLAIN ENGLISH</div>
  <div class="plx-r"><p>We build iPhone and Android apps for UAE businesses: ordering for restaurants, booking for salons, pickup and delivery for laundries, loyalty for shops. Every app comes in English and Arabic, takes Apple Pay, cards and Tabby, and sends updates by push and WhatsApp. We design every screen in Figma first and publish to both stores under your own account. Most apps take 10–12 weeks and start from AED 35,000.</p>
    <div class="plx-f"><span><b>From</b>AED 35,000</span><span><b>Time</b>6–12 weeks</span><span><b>Languages</b>English + Arabic</span><span><b>Based in</b>Dubai</span></div></div>
</div></section>
```

- [ ] **Step 3: Sections per spec §8.2**

Pains: card 1 before-screen becomes a WhatsApp chat (reuse the WhatsApp template from homepage `mock pass 2`; customer "Do you have an app? Glow Studio has one 🙂"); card 2 payout "−AED 5,310 commission", "0 customer contacts shared"; card 3 "Reserve my spot · AED 100". Showcase: values from spec §4 (FreshFold `AED 15 / kg`, Apex brake quote `AED 890`, FixPoint trade-in AED), Volt & Wire flow "EV charger install options (AED 3,900 / 4,550 / 6,200)"; replace the stage note "Concept apps for this mockup…" with `<span class="ex-chip">Example project · illustrative numbers</span>`. Features: deposit `AED 100`, Apple Pay + "Tabby · 4 payments" row, lock-screen notifications in AED. Tech table: budget row `AED 35k–110k` / `AED 45k–130k` / `AED 90k–260k`. Case: FreshFold · Dubai Marina & JLT + `.ex-chip`. Pricing: MVP `AED 35,000` · Business app `AED 49,000` · Custom platform `AED 105,000`, "+5% VAT". FAQ: add "Can the app be in Arabic?" → "Yes. We build right-to-left Arabic and English into the same app, and the stores show it in both languages."; running costs "Apple's developer account is about AED 365 a year; hosting AED 75–550 a month". Booking widget + footer as in Task 3 (propagated; check).

- [ ] **Step 4: Fix remaining audit findings** (spec §2–§4).
- [ ] **Step 5: Audit passes** — `node uae-audit.js service-mobile-apps.html` → `PASS`, N ≥ 11 tab states.
- [ ] **Step 6: Visual** — `node verify.js service-mobile-apps.html ../_shots/mobile` → `OK`; tick every mockup against spec §6.9; fix overflow warnings; check `hover-0..2.png`, `tab-*.png`.
- [ ] **Step 7: Text size** — `node text-audit.js service-mobile-apps.html` → `PASS`.
- [ ] **Step 8: Propagate + spec** — `node sync.js propagate service-mobile-apps.html` (service template blocks to later pages). Update spec §5 (M1–M11) with the UAE values above and a "Consistency with homepage (AED)" line: Business app AED 49,000 = homepage Build ✓. `touch` the page.

---

### Task 5: Web apps (`service-web-apps.html`)

**Files:** Modify `service-web-apps.html`; Modify `specs/2026-10-07-service-web-apps-design.md`. Test: audit.

**Interfaces:** Consumes Tasks 2–4. Produces localized `web apps page: templates#1` (and `wx` block) for 8 later pages.

- [ ] **Step 1:** `node sync.js snapshot service-web-apps.html && node uae-audit.js service-web-apps.html` → FAIL.
- [ ] **Step 2: Hero** — kicker `Custom web apps and business software in Dubai &amp; UAE`; WhatsApp text `…web%20apps%20page`; plain English:
  > We replace spreadsheets and WhatsApp groups with one web app built around how your team works: customer portals, staff dashboards, booking and invoicing, with logins for every role and UAE Pass sign-in if you need it. It opens in any browser, connects to Zoho Books and the tools you use, and comes in English and Arabic. Internal tools start from AED 29,000; most business web apps take 9–12 weeks.

  Chips: `From AED 29,000` · `Time 5–12 weeks` · `Languages English + Arabic` · `Based in Dubai`. Kicker animation + `split()` as Task 4 Step 2.
- [ ] **Step 3: Sections per spec §8.3** — hero dashboard `AED 8,880 paid`, drivers Imran/Luis; pain 2 statement (exact lines in §8.3, total **AED 4,165/mo**); pain 3 portal (Khalifa City, E-1042 AED 4,550, "Pay AED 3,450"); showcase brands §4 + Apex chip "Zoho Books sync" + chip "UAE Pass sign-in" on the portal tab + `.ex-chip`; tab 04 Zoho Books, checkout AED 1,535 with Tabby/card; tech table hosting `AED 75–550`; process 04 "Zoho Books invoices 3,880 ✓"; case Apex Al Quoz (`AED 890` approval) + `.ex-chip`; pricing AED 29,000 / 59,000 / 120,000 + VAT; FAQ 5 hosting AED + Care AED 790/mo; add FAQ "Can customers log in with UAE Pass?" → "Yes. We can add UAE Pass sign-in next to email login for portals that need verified identities."
- [ ] **Step 4–7:** audit fixes → `PASS` → `verify.js … ../_shots/webapps` OK → `text-audit.js` PASS (the `crop()`/`zoom()` mockups must stay ≥ 0.6×).
- [ ] **Step 8:** `node sync.js propagate service-web-apps.html`; rewrite the spec's W1–W11 values, "Consistency with homepage (AED)" table (Care AED 790 ✓), open items (UAE Pass integration to confirm). `touch`.

---

### Task 6: SaaS (`service-saas.html`)

**Files:** Modify `service-saas.html`, `specs/2026-10-07-service-saas-design.md`. Test: audit.
**Interfaces:** Produces localized `saas page: templates#1` for 7 later pages.

- [ ] **Step 1:** snapshot + baseline audit (FAIL).
- [ ] **Step 2: Hero** — kicker `SaaS and MVP development in Dubai &amp; UAE`; WhatsApp `…SaaS%20page`; plain English:
  > We build software products for founders and industry experts in Dubai and Abu Dhabi: sign-up, monthly plans with Stripe, team accounts, an admin you control, VAT and e-invoicing handled. You can test the idea with a clickable prototype in 2–3 weeks from AED 24,000, then launch a version customers pay for in 10–14 weeks. You own the code and the IP from day one.

  Chips: `From AED 24,000` · `Time 2–14 weeks` · `Languages English + Arabic` · `Based in Dubai`.
- [ ] **Step 3: Sections per spec §8.4** — Ledgerly admin in AED (values §4/§8.4); tech chip `ISO 27001-ready · UAE data residency`; pains (Shelfwise order `Al Aweer Fresh Co. AED 1,102`; Routeline AED); showcase sub-brands §4 (Keyhouse rent cheques, Ejari, "AC not cooling"; Glowdesk "WPS export AED 75,110"; Partsmith Sharjah Industrial Area) + `.ex-chip`; tab 02 "VAT (5%) and e-invoicing handled"; comparison year-one row (values §8.4); case Shelfwise · Dubai + `.ex-chip` + quote "…Now they pay AED 365 a month for it."; pricing AED 24,000 / 120,000 / 250,000; FAQ 6 "Stripe ~2.9% + AED 1".
- [ ] **Step 4–7:** audit `PASS` → verify OK + every mockup screenshot ticked against spec §6.9 → text-audit PASS.
- [ ] **Step 8:** propagate; update spec SA1–SA11, consistency table, open items (G2 badge removed; UAE data residency claim to confirm). `touch`.

---

### Task 7: Shopify (`service-shopify.html`)

**Files:** Modify `service-shopify.html`, `specs/2026-10-07-service-shopify-design.md`. Test: audit.
**Interfaces:** Produces localized `shopify page: templates#1` (also used by the WordPress page).

- [ ] **Step 1:** snapshot + baseline (FAIL).
- [ ] **Step 2: Hero** — kicker `Shopify agency in Dubai &amp; UAE`; WhatsApp `…Shopify%20page`; plain English:
  > We build and fix Shopify stores for brands selling in the UAE: Arabic and English themes, AED checkout with Apple Pay, Tabby and Tamara, delivery across all seven emirates, and moves from WooCommerce, Wix or Salla without losing your Google rankings. A ready store launches in 3–4 weeks from AED 9,900; a custom theme takes 6–8 weeks. Your team edits it without calling us.

  Chips: `From AED 9,900` · `Time 3–8 weeks` · `Languages English + Arabic` · `Based in Dubai`. Tech chips: replace `Recharge` with `Tabby · Tamara`.
- [ ] **Step 3: Sections per spec §8.5** — hero product AED 109 (was AED 129), "AED 30 away from free delivery", Apple Pay + Tabby (remove Shop Pay); floating cards in AED; pain 1 "WHITE FRIDAY MEGA SALE", "Someone in Sharjah just bought this"; pain 2 apps `AED 2,250/mo`, freelancer `AED 1,500`; pain 3 wholesale AED; showcase per §8.5 + `.ex-chip`; tab 05 times GST; **comparison table columns: Shopify (recommended) · Shopify Plus · Salla · WooCommerce** with rows Best for / Platform cost (`≈ AED 145–1,465/mo` · `≈ AED 8,450/mo` · `from ≈ AED 100/mo, Tabby/Tamara built in` · `AED 75–370 hosting + plugins`) / Time to launch (4–8 / 8–12 / 2–4 / 6–10 weeks) / Security & updates (Shopify / Shopify / Salla / On you) / Checkout conversion (●●●●● / ●●●●● / ●●●● / ●●●) and the note "Shopify bills in USD; AED shown at 3.67."; process 05 pills `Apple Pay · Tabby · Tamara · Cash on delivery · iPhone SE · Pixel 8`; case Ember Kitchen Pantry · Dubai (§8.5 texts) + `.ex-chip`; pricing AED 9,900 / 29,000 / 69,000; FAQ add "Do I need a trade licence to sell online?" → "Yes. In the UAE you need a licence that covers e-commerce: an e-Trader licence for home-based sellers, or a free-zone or mainland trade licence. We'll point you to the right one on the call."
- [ ] **Step 4–7:** audit PASS → verify OK + every mockup screenshot ticked against spec §6.9 → text-audit PASS.
- [ ] **Step 8:** propagate (to the WordPress page); update spec S1–S11 (comparison table rewritten), consistency, open items (Salla figures and Shopify UAE plan prices to verify). `touch`.

---

### Task 8: Website design (`service-wordpress.html`)

**Files:** Modify `service-wordpress.html`, `specs/2026-10-07-service-wordpress-design.md` (route → `/services/website-design`). Test: audit.

- [ ] **Step 1:** snapshot + baseline (FAIL).
- [ ] **Step 2: Hero** — breadcrumb `Services / <b>Website Design</b>`; kicker `Website design for businesses in Dubai &amp; UAE`; WhatsApp `…website%20design%20page`; plain English:
  > We design and build fast business websites for UAE companies on WordPress, in English and Arabic, with booking, enquiry and WhatsApp buttons that turn visitors into customers. Your team edits prices, hours and pages without breaking the design. A business website goes live in 2–4 weeks from AED 7,900, and we can fix a slow or hacked site you already have.

  Chips: `From AED 7,900` · `Time 2–6 weeks` · `Languages English + Arabic` · `Based in Dubai`.
- [ ] **Step 3: Sections per spec §8.6** — hero Volt & Wire Abu Dhabi homepage + estimate form "Area: Khalifa City ✓ in our area"; pain 1 hours block `Mon–Sat 8–7 · Fri 8–12 & 2–7`, freelancer AED 550; pain 2 "down 2 days during Dubai Shopping Festival"; pain 3 checkout Apple Pay/Tabby; showcase §8.6 (Apex "12 area pages", Volt & Wire "#1 for 'EV charger installation Abu Dhabi'", Ledgerly · DIFC, no G2) + `.ex-chip`; tab 02 URL `voltwire.ae/ev-charger-installation`; comparison running costs AED; case Apex Al Quoz + `.ex-chip`; pricing AED 7,900 / 19,900 / 44,000 + Care AED 790/month chip; FAQ 5 hosting AED; add FAQ "Can the site be in Arabic and English?" → "Yes. Both languages are included from the custom tier; on the starter tier a second language adds AED 2,900."
- [ ] **Step 4–7:** audit PASS → verify OK + every mockup screenshot ticked against spec §6.9 → text-audit PASS.
- [ ] **Step 8:** propagate; update spec P1–P11 with the new name/route, consistency (Launch AED 7,900 = starter ✓, Care AED 790 ✓). `touch`.

---

### Task 9: Landing pages (`service-landing-pages.html`)

**Files:** Modify `service-landing-pages.html`, `specs/2026-10-07-service-landing-pages-design.md`. Test: audit.
**Interfaces:** Produces localized `landing pages: templates#1` for 6 later pages.

- [ ] **Step 1:** snapshot + baseline.
- [ ] **Step 2: Hero** — kicker `Landing pages for Google and Meta ads in Dubai`; primary CTA stays "Get a free page review"; WhatsApp `…landing%20pages%20page`; plain English:
  > If you pay for Google or Meta ads in the UAE, we build one page per ad, with one offer and one button: call, WhatsApp or book. Pages load in about a second on a phone, come in English or Arabic, and track every lead back to the ad that brought it. A single page goes live in about 10 days from AED 5,900.

  Chips: `From AED 5,900` · `Time 7–14 days` · `Languages English + Arabic` · `Based in Dubai`. Tech chips: `CallRail` → `Call tracking`.
- [ ] **Step 3: Sections per spec §8.7** — hero page `voltwire.ae/ev-charger` (offer bar, AED 4,550, area picker Khalifa City / Al Reem / Yas / Saadiyat, "Trade licence CN-1184207"), floating cards; pain 1 Peak Cooling ads (exact numbers in §8.7); pain 2 `maisonrose.ae/bridal`; showcase §8.7 + `.ex-chip`; tab 01 Google results "tesla charger installation abu dhabi"; tab 05 numbers §8.7; comparison AED; price chip "Arabic version"; case Apex (AED 150 vs AED 683) + `.ex-chip`; pricing AED 5,900 / 15,900 / 4,900/mo ("for AED 18,000+/mo ad spend"); FAQ 6 hosting AED 0–75/mo.
- [ ] **Step 4–7:** audit PASS → verify OK + every mockup screenshot ticked against spec §6.9 → text-audit PASS.
- [ ] **Step 8:** propagate; update spec L1–L11, consistency, open items (Arabic version offered? confirm). `touch`.

---

### Task 10: Payments (`service-payments.html`)

**Files:** Modify `service-payments.html`, `specs/2026-10-07-service-payments-design.md`. Test: audit.
**Interfaces:** Produces localized `payments page: templates#1` and `payments page: animated phone flows#1` for 5 later pages.

- [ ] **Step 1:** snapshot + baseline.
- [ ] **Step 2: Hero** — kicker `Payment gateway integration in Dubai &amp; UAE`; tech chips `Stripe · Telr · Network International · Checkout.com · Apple Pay · Google Pay · Tabby · Tamara`; WhatsApp `…payments%20page`; plain English:
  > We set up how your customers pay you: online checkout, Apple Pay and Google Pay, Tabby and Tamara, payment links on WhatsApp, deposits and subscriptions in AED, with every payout matched in Zoho Books or Xero. We work with Stripe, Telr, Network International and Checkout.com, and the accounts stay in your name. Simple payment links can be live in days from AED 2,900.

  Chips: `From AED 2,900` · `Time Days–4 weeks` · `Works with All UAE gateways` · `Based in Dubai`.
- [ ] **Step 3: Sections per spec §8.8** — hero invoices (WhatsApp pay links, Tabby 4 × AED 1,690, payout → Emirates NBD ••2210); pains (WhatsApp list and thread, pay link AED 4,550, unpaid AED 36,200; Ember checkout AED 245 with tip 10/12/15%; payouts in AED matched in Zoho Books); showcase §8.8 + `.ex-chip`; tab 02 Tabby sheet AED 6,760 (fee "−AED 270 (illustrative)"); tab 03 WhatsApp pay link; tab 04 Zoho Books/Xero; **comparison table rebuilt** with columns and rows exactly as §8.8 and the note; process 02 example: on AED 150,000/mo with 500 payments, Stripe = 2.9% × 150,000 + 500 × AED 1 = AED 4,850/mo; Telr Medium = 2.49% × 150,000 + 500 × AED 0.50 + AED 99 = AED 4,084/mo → "You keep AED 9,192 more a year" (show these sums on the card); case Maison Rose · Jumeirah (AED 15,000 no-shows, AED 100 deposit) + `.ex-chip`; pricing AED 2,900 / 19,900 / 49,000; FAQ 3 and 6 per §8.8.
- [ ] **Step 4–7:** audit PASS → verify OK + every mockup screenshot ticked against spec §6.9 (check the Apple Pay and Tabby phone flows in `tab-*.png`) → text-audit PASS.
- [ ] **Step 8:** propagate; update spec PY1–PY11 (table and fee example rewritten), consistency (entry AED 2,900 = Add-on ✓), open items (all UAE fees to re-verify; Tabby/Tamara merchant fees unknown). `touch`.

---

### Task 11: WhatsApp & AI (`service-ai.html`)

**Files:** Modify `service-ai.html`, `specs/2026-10-07-service-ai-design.md` (route → `/services/ai-whatsapp-automation`). Test: audit.
**Interfaces:** Produces localized `AI page: templates#1` for 4 later pages.

- [ ] **Step 1:** snapshot + baseline.
- [ ] **Step 2: Hero** — breadcrumb `Services / <b>WhatsApp &amp; AI</b>`; kicker `WhatsApp chatbots and AI assistants in Dubai &amp; UAE`; sub first clause per §8.9; tech chip `Arabic + English`; WhatsApp `…WhatsApp%20and%20AI%20page`; plain English:
  > We build assistants that answer your customers on WhatsApp, Instagram, your website and the phone, in Arabic and English, from your real prices, menu and calendar. They take orders and bookings, and hand anything tricky to your team with a summary. Behind the scenes, AI agents can read supplier invoices into Zoho Books. A website or WhatsApp assistant starts from AED 2,900 plus running costs.

  Chips: `From AED 2,900` · `Time Days–6 weeks` · `Languages Arabic + English` · `Based in Dubai`.
- [ ] **Step 3: Sections per spec §8.9** — hero inbox AED + one Arabic row: `<span dir="rtl" lang="ar">وين طلبي؟ رقم 2241</span>` → "ETA sent"; pains (Ember Fri 7–10 PM, Instagram `maisonrose.dxb` AED prices, Apex PDFs → Zoho Books, sticky "ENTER ALL INTO ZOHO BY THURSDAY!! — Rashid", rotor AED 250 → AED 298); showcase §8.9 (Maison Rose rebooking on WhatsApp) + `.ex-chip`; tab 02 transcript opens in Arabic: AI `<span dir="rtl" lang="ar">مساء الخير، مطعم إمبر. كيف أقدر أساعدك؟</span>`, caller `<span dir="rtl" lang="ar">أبي أطلب للاستلام</span>`, then the caller switches to English and the AI follows; tab 03 supplier "Sharjah Parts Trading" invoice with TRN + VAT 5%; tab 04 refund "AED 20 credit"; tab 05 row "Ramadan hours · Fixed"; comparison cost row §8.9; case Volt & Wire · Abu Dhabi (after 6 PM, WhatsApp to Carlos, "AED 330 call-out approved") + `.ex-chip`; pricing AED 2,900 / 29,000 / 59,000 + "AI and WhatsApp usage billed at cost, usually AED 150–1,100/month"; FAQ 2/3/6 per §8.9 (FAQ 6 "Can it speak Arabic?" → "Yes, Gulf Arabic and English, and it replies in the language the customer uses. Summaries for your team come in English.").
- [ ] **Step 4–7:** audit PASS (`arabicOutsideRtl` 0) → verify OK + every mockup screenshot ticked against spec §6.9 (Arabic renders right-to-left in `tab-*.png`) → text-audit PASS.
- [ ] **Step 8:** propagate; update spec AI1–AI11 (route, breadcrumb, Arabic lines), consistency (AED 2,900 = Add-on ✓), open items (PDPL wording legal check; WhatsApp BSP partner). `touch`.

---

### Task 12: Automation & ERP (`service-automation.html`)

**Files:** Modify `service-automation.html`, `specs/2026-10-07-service-automation-design.md`. Test: audit.
**Interfaces:** Produces localized `automation & ERP page: templates#1` (also in SEO and white-label pages).

- [ ] **Step 1:** snapshot + baseline.
- [ ] **Step 2: Hero** — kicker `Business automation and ERP in Dubai &amp; UAE`; tech chips per §8.10; WhatsApp `…automation%20page`; plain English:
  > We stop your team typing the same thing twice. We connect Zoho Books, Foodics, Shopify, WhatsApp and your spreadsheets so orders, invoices, stock and WPS payroll update by themselves, or build one system that runs jobs, stock and invoices. We also get your invoicing ready for UAE e-invoicing, mandatory for most businesses from July 2027. Automations start from AED 7,900.

  Chips: `From AED 7,900` · `Time 1–12 weeks` · `Ready for UAE e-invoicing` · `Based in Dubai`.
- [ ] **Step 3: Sections per spec §8.10** — hero Peak Cooling ops (`ops.peakcooling.ae/today`, AED, compressor job, log with Zoho Books and WPS payroll); pains (Foodics stock; A/R AED 67,600 hotel/gym accounts; WhatsApp "V&W Crew 🔌" with Abu Dhabi areas and one Arabic message in `dir="rtl"`); showcase §8.10 + `.ex-chip`.
  **Replace deep-dive tab 05** ("Off the spreadsheets") with "E-invoicing, done": list button label `E-invoicing, done`; chip row `UAE e-invoicing · PINT AE · Your ASP · Zoho / Odoo / custom`; headline "When e-invoicing becomes law, your invoices are already ready."; story "Every invoice you create is converted to the UAE format, sent through the Accredited Service Provider you choose, and reported automatically. Rejections come back to you with the reason, not a mystery."; fine print "We connect your system to the provider you choose. We're not an Accredited Service Provider."; mockup (light, 1280 px window cropped to 0.7×): left an invoice card "TAX INVOICE · INV-5528 · Peak Cooling LLC · TRN 100 4561 2870 0003 · Bill to: Arabian Ranches Villa 214 · AC compressor replacement AED 2,180.00 · VAT 5% AED 109.00 · Total AED 2,289.00"; right a status timeline with green ticks "11:42 Created in Zoho Books → 11:42 Converted to PINT AE → 11:42 Sent to your ASP → 11:43 Reported to FTA → 11:43 Delivered to buyer"; toast "1,284 invoices sent this month · 0 rejected". Keep the old "Off the spreadsheets" visual for process step 04.
  Comparison per §8.10 in AED; process 02 flow "… → Invoice → E-invoice → Paid → Zoho Books"; case Apex Al Quoz with WhatsApp "Apex Shop Report" in AED + `.ex-chip`; pricing AED 7,900 / 59,000 / 150,000; FAQ 1 rewritten and new FAQ "Will this get us ready for e-invoicing in July 2027?" → "Yes. We map your invoices to the UAE format and connect your system to an accredited provider well before your deadline (1 July 2027 for most businesses under AED 50 million in revenue)."
- [ ] **Step 4–7:** audit PASS → verify OK + every mockup screenshot ticked against spec §6.9 (new tab 05 screenshot readable) → text-audit PASS (new mockup median ≥ 9 px).
- [ ] **Step 8:** propagate; update spec B1–B11 (tab 05 replaced), consistency (Peak Cooling 14 vans ✓, FixPoint Dubai stores ✓), open items (e-invoicing dates re-checked monthly; ASP partnership). `touch`.

---

### Task 13: SEO (`service-seo.html`)

**Files:** Modify `service-seo.html`, `specs/2026-10-07-service-seo-design.md`. Test: audit.

- [ ] **Step 1:** snapshot + baseline.
- [ ] **Step 2: Hero** — kicker `Local SEO in Dubai &amp; UAE, in English and Arabic`; primary CTA stays "Get a free search check"; WhatsApp `…SEO%20page`; plain English:
  > We help UAE businesses show up when people nearby search on Google Maps, Google and AI assistants, in English and Arabic. That means a fast website, a complete Google Business Profile, a page for every service and area you cover, and reviews that keep coming. We report calls and bookings, not rankings. Setup is AED 4,900, then from AED 3,500 a month, with no long contract.

  Chips: `From AED 3,500/mo` · `First calls 4–8 weeks` · `Languages English + Arabic` · `Based in Dubai`.
- [ ] **Step 3: Sections per spec §8.11** — hero Volt & Wire rankings (Khalifa City grid, searches incl. `<span dir="rtl" lang="ar">كهربائي ابوظبي</span>` at #2); pains (Peak Cooling "ac repair near me" Dubai; `maisonrose.ae/bridal`; Apex profile "Closed Friday" → fixed, reply "— Rashid"); showcase §8.11 (no real competitor brands) + `.ex-chip`; tabs 02–05 per §8.11 (review request on WhatsApp; Yelp removed); comparison AED, note "Typical UAE prices in 2026", row "When you stop paying" unchanged; process 04 URLs; case FixPoint Dubai (Deira / Karama / City Centre; "iFix Hub") + `.ex-chip`; pricing AED 4,900 setup / AED 3,500/mo / from AED 6,500/mo; pricing lead "Clear monthly price. No long contract."; FAQ 6 → "Am I locked into a contract?" → "No. It's month to month from the start, with 30 days' notice. Everything is in your name."
- [ ] **Step 4–7:** audit PASS → verify OK + every mockup screenshot ticked against spec §6.9 → text-audit PASS.
- [ ] **Step 8:** update spec SE1–SE11 (6-month minimum removed), consistency, open items. `touch`.

---

### Task 14: Vibe-code rescue (`service-vibe-rescue.html`)

**Files:** Modify `service-vibe-rescue.html`, `specs/2026-10-07-service-vibe-rescue-design.md`. Test: audit.

- [ ] **Step 1:** snapshot + baseline.
- [ ] **Step 2: Hero** — kicker `Fix and launch AI-built apps · Dubai-based team`; primary CTA "Get a free audit"; WhatsApp `…rescue%20page`; plain English:
  > If you built an app with Lovable, Bolt, Replit or Cursor and it breaks every time you change something, we fix it without starting over. We lock down customer data, fix payments, speed up slow pages, add tests and move it into your own accounts. You get a free written audit within 48 hours, then a fixed price. Small fixes start from AED 2,900.

  Chips: `Audit Free` · `Fixes from AED 2,900` · `Time 2–4 weeks` · `Based in Dubai`.
- [ ] **Step 3: Sections per spec §8.12** — hero Ledgerly · DIFC, "AED 6,760" recovered, founder ↔ Alex on WhatsApp; pains (credits AED 1,400; OpenAI alert AED 7,020 vs AED 185; Apex review); showcase §8.12 + `.ex-chip` (reminder note "server set to UTC, not Dubai time"); tab 03 AED 6,760; comparison AED; case **PromptPilot · Dubai** (listing writer for Dubai agents, EN + AR, AED values §4) + `.ex-chip`; pricing Free / from AED 2,900 / AED 11,000 per month.
- [ ] **Step 4–7:** audit PASS → verify OK + every mockup screenshot ticked against spec §6.9 → text-audit PASS.
- [ ] **Step 8:** update spec V1–V11, consistency (AED 2,900 = Add-on ✓, FixPoint Dubai ✓), open items. `touch`.

---

### Task 15: White-label (`service-white-label.html`)

**Files:** Modify `service-white-label.html`, `specs/2026-10-07-service-white-label-design.md`. Test: audit.

- [ ] **Step 1:** snapshot + baseline.
- [ ] **Step 2: Hero** — kicker `White-label web and app development for agencies in Dubai &amp; UAE`; primary CTA "Book a partner call"; WhatsApp `…agency%20partner%20page`; plain English:
  > We're the development team behind agencies in Dubai and the UAE. We build websites, Shopify stores, WordPress sites and apps under your brand, in your Slack and GitHub, and your client only ever hears your name. You get a fixed wholesale price within 48 hours and set your own client price. We work in your time zone and sign your NDA first.

  Chips: `From AED 18,000 / project` · `Start in 5 days` · `Same time zone (GST)` · `Based in Dubai`.
- [ ] **Step 3: Sections per spec §8.13** — Northlight Studio · d3, AED margins and proposal numbers exactly as §8.13; agency rename Lonestar Local → **Gulf Local**; tab 02 "Same time zone as you (GST)"; tab 04 invoicing in AED; comparison per §8.13; process 02 AED; case Northlight · d3 (AED 1.78M, AED 46,300 milestone) + `.ex-chip`; showcase + `.ex-chip`; pricing AED 18,000 / 59,000/mo / AED 220/h; FAQ 6 → "Dubai (GST). Same working day as you."
- [ ] **Step 4–7:** audit PASS → verify OK + every mockup screenshot ticked against spec §6.9 → text-audit PASS.
- [ ] **Step 8:** update spec W1–W11, consistency, open items (team price/hours to confirm per pricing doc decision). `touch`.

---

### Task 16: Industry template + Auto repair (`industry-auto-repair.html`)

**Files:** Modify `industry-auto-repair.html`, `specs/2026-10-08-industry-auto-repair-design.md`, `specs/2026-10-08-industry-pages-design.md` (§2 pricing row, §3 booking time zone, §4 tables, §5 consistency). Test: audit.
**Interfaces:** Produces localized industry shared blocks (`phone screens (390 × 844)#1`, industry `industry showcase`, industry `interactions`, `NAV`/`FOOTER` variant B) for the 5 other industry pages.

- [x] **Step 1:** snapshot + baseline.
- [x] **Step 2: Hero** — kicker `Websites, inspections and payments for garages in Dubai &amp; UAE`; chips per §8.15; WhatsApp `…garages%20page`; plain English:
  > We build what an independent garage in the UAE needs around the software it already uses: a website that ranks on Google Maps, online booking by plate number, photo inspections customers approve on WhatsApp, payment links with Apple Pay and Tabby, and service reminders every 10,000 km. Most garages go live in about 12 weeks; a website and Google profile start from AED 7,900.

  Chips: `From AED 7,900` · `Time 2–12 weeks` · `Languages English + Arabic` · `Based in Dubai`.
- [x] **Step 3: Sections per spec §8.14–8.15** — nav WhatsApp icon and footer line exactly as Task 3 Step 3 (this page holds nav/footer variant B, which propagates to the other industry pages in Step 8); Marcus T. 2019 Nissan Patrol everywhere (RO #4821); pains (status page AED 1,535; WhatsApp decline AED 1,390 → "Approve 1 item · AED 890"; Google "car service near me" Al Quoz with competitors §8.15); journey (plate `D 48210`, WhatsApp pay link, Apple Pay, "Back in 10,000 km", reminders AED 141,100) + `.ex-chip` on the journey stage; behind the counter (parts AED, fees "about 2.5% + AED 1", payout Emirates NBD, owner "Good evening, Rashid" AED 34,800 / ARO AED 1,480 / ELR AED 545/h); case Apex Al Quoz (ARO AED 1,480 was AED 1,170, "Rashid A., owner") + `.ex-chip`; pricing AED 7,900 / 49,000 / 105,000; FAQ texting → "Can we message customers on WhatsApp legally?" → "Yes, when customers opt in. We use the WhatsApp Business API with approved message templates and an easy way to stop messages."; booking GST.
- [x] **Step 4–7:** audit PASS → verify OK + every mockup screenshot ticked against spec §6.9 → text-audit PASS.
- [x] **Step 8:** propagate (industry shared blocks to the 5 other industry pages); update the auto-repair spec IA1–IA11 and the industry overview spec (§2 pricing row in AED, §3 "booking widget in GST", §4 table rows for Auto repair, §5 consistency in AED). `touch`.

---

### Task 17: Salons (`industry-salons.html`)

**Files:** Modify `industry-salons.html`, `specs/2026-10-08-industry-salons-design.md`, overview spec §4. Test: audit.

- [x] **Step 1:** snapshot + baseline.
- [x] **Step 2: Hero** — kicker `Booking, deposits and apps for salons and spas in Dubai &amp; UAE`; chips per §8.16; WhatsApp `…salons%20page`; plain English:
  > We build what a salon or spa in the UAE needs on top of Fresha or Booksy: your own booking site and app with deposits, a waitlist that fills last-minute gaps, client formulas on every stylist's tablet, memberships, WhatsApp reminders and commission reports ready for WPS payroll. A website with online booking starts from AED 7,900; the full salon upgrade takes about 12 weeks.

  Chips: `From AED 7,900` · `Time 2–12 weeks` · `Languages English + Arabic` · `Based in Dubai`.
- [x] **Step 3: Sections per spec §8.16** — every value listed there (deposits AED 100, AED 4,950 empty hours, WhatsApp cancellation, `maisonrose.dxb`, POS lines incl. VAT 5%, memberships AED 81,450 MRR, WPS payroll export, chair rental AED 2,400/wk, owner report AED 25,100); one client WhatsApp message in Arabic inside `dir="rtl"` on the waitlist screen; journey + case `.ex-chip`; pricing AED 7,900 / 49,000 / 105,000; FAQ per §8.16.
- [x] **Step 4–7:** audit PASS → verify OK + every mockup screenshot ticked against spec §6.9 → text-audit PASS.
- [x] **Step 8:** propagate (desktop/tablet window block); update salon spec IS1–IS11 + overview §4/§5. `touch`.

---

### Task 18: Laundry (`industry-laundry.html`)

**Files:** Modify `industry-laundry.html`, `specs/2026-10-08-industry-laundry-design.md`, overview spec §4. Test: audit.

- [x] **Step 1:** snapshot + baseline.
- [x] **Step 2: Hero** — kicker `Pickup and delivery apps and software for laundries in Dubai &amp; UAE`; chips per §8.17; WhatsApp `…laundry%20page`; plain English:
  > We build pickup and delivery for UAE laundries: a customer app in English and Arabic, a driver app with building and concierge notes, per-kilo orders weighed and charged automatically, and monthly billing for hotels, gyms and holiday homes. It connects to CleanCloud or the POS you use. Online pickup starts from AED 7,900; the full laundry upgrade takes about 12 weeks.

  Chips: `From AED 7,900` · `Time 2–12 weeks` · `Languages English + Arabic` · `Based in Dubai`.
- [x] **Step 3: Sections per spec §8.17** — all kg/km/AED values listed there; driver Imran; WhatsApp with Imran (concierge, Marina Gate); one Arabic customer message in the WhatsApp chats list (`dir="rtl"`); commercial account names; journey + case `.ex-chip`; pricing; FAQ "Charging by the kilo before weighing".
- [x] **Step 4–7:** audit PASS (no `lb`/`mi` left) → verify OK + every mockup screenshot ticked against spec §6.9 → text-audit PASS.
- [x] **Step 8:** update laundry spec IL1–IL11 + overview §4/§5. `touch`.

---

### Task 19: Restaurants (`industry-restaurants.html`)

**Files:** Modify `industry-restaurants.html`, `specs/2026-10-09-industry-restaurants-design.md`, overview spec §4. Test: audit.

- [x] **Step 1:** snapshot + baseline.
- [x] **Step 2: Hero** — kicker `Ordering, WhatsApp and back-office software for restaurants in Dubai &amp; UAE`; chips per §8.18; WhatsApp `…restaurants%20page`; plain English:
  > We help UAE restaurants and cloud kitchens take orders without paying 30% to the apps: your own ordering site and app, WhatsApp ordering, reservations with deposits, a kitchen screen, and sold-out items synced to Talabat and Deliveroo in seconds. It works with Foodics. Online ordering starts from AED 7,900; the full restaurant upgrade takes about 12 weeks.

  Chips: `From AED 7,900` · `Time 2–12 weeks` · `Languages English + Arabic` · `Based in Dubai`.
- [x] **Step 3: Sections per spec §8.18** — orders window with channel chips Talabat / Deliveroo / Careem / Direct / WhatsApp and AED values; payout statement (§4 Ember numbers); reservation deposit AED 160; 86 sync "Website · App · Talabat · Deliveroo"; journey (order #311 AED 245, "You keep the AED 74", KDS late ticket "Talabat", Tuesday short-rib WhatsApp); behind the pass (juices dine-in only, Al Aweer Fresh Co. AED 36 → AED 40/kg, tips AED 10,450 → WPS payroll, owner report AED 36,100); process "never on a Thursday or Friday night"; case Ember · JLT + `.ex-chip`; pricing; FAQ per §8.18.
- [x] **Step 4–7:** audit PASS → verify OK + every mockup screenshot ticked against spec §6.9 → text-audit PASS.
- [x] **Step 8:** update restaurants spec IR1–IR11 + overview §4/§5. `touch`.

---

### Task 20: Home services → Peak Cooling (`industry-home-services.html`)

**Files:** Modify `industry-home-services.html`, `specs/2026-10-09-industry-home-services-design.md`, overview spec §4. Test: audit.

- [ ] **Step 1:** snapshot + baseline.
- [ ] **Step 2: Hero (H1 changes)**
```html
<div class="crumb">Industries / <b>Home services</b></div>
<h1><span class="h1-kicker">Booking, dispatch and payments for AC and maintenance companies in Dubai &amp; UAE</span>You're on a roof at 46°C.<em>Your phone is ringing again.</em></h1>
```
  Sub per §8.19; chips `Works with Jobber · Zoho Books · WhatsApp Business · Google Business Profile`; WhatsApp `…home%20services%20page`; plain English:
  > We build what AC, cleaning and maintenance companies in the UAE need: online booking with a call-out deposit, WhatsApp replies at 1 AM, a dispatch board for every van, quotes with Tabby instalments signed on site, payment before the van leaves, and annual maintenance contracts that renew before summer. Booking starts from AED 7,900; the full upgrade takes about 12 weeks.

  Chips: `From AED 7,900` · `Time 2–12 weeks` · `Languages English + Arabic` · `Based in Dubai`.
- [ ] **Step 3: Sections per spec §8.19** — every "Peak Plumbing" → "Peak Cooling", trucks → vans, plumbing jobs → AC jobs (all values in §8.19: AED 99 deposit, Q-2318 AC options with Tabby/Tamara, unpaid AED 67,650, receipt AED 880, Peak Care AMC AED 49/month, members AED 54,900/mo, stock = gas cylinders/capacitors/filters, supplier Al Quoz HVAC Supply, competitor Desert Breeze AC); journey tab 05 "Back before every summer"; behind the vans tab titles; process heading "About 12 weeks, without a van sitting idle."; case Peak Cooling · Dubai & Sharjah · 14 vans with the new quote + `.ex-chip`; pricing; FAQ per §8.19 (new AMC renewal question: "Do AMC contracts renew automatically?" → "Yes, if the customer agrees. They get a WhatsApp reminder 30 days before renewal and can cancel in one tap."). Check the homepage `plumbing` SITES-style entry used in Task 3 tab 2 says Peak Cooling too.
- [ ] **Step 4–7:** audit PASS → verify OK + every mockup screenshot ticked against spec §6.9 → text-audit PASS.
- [ ] **Step 8:** update home-services spec IH1–IH11 (H1 changed, brand renamed) + overview §4/§5 (Peak Cooling row). `touch`.

---

### Task 21: Phone repair (`industry-phone-repair.html`)

**Files:** Modify `industry-phone-repair.html`, `specs/2026-10-09-industry-phone-repair-design.md`, overview spec §4. Test: audit.

- [ ] **Step 1:** snapshot + baseline.
- [ ] **Step 2: Hero** — kicker `Websites, instant quotes and repair tracking for phone repair shops in Dubai`; chips per §8.20; WhatsApp `…phone%20repair%20page`; plain English:
  > We build what phone repair shops in the UAE need: instant repair prices for every model, booking, status updates on WhatsApp, a bench screen with check-in photos and tests, one stock list across all your stores, and trade-ins priced in seconds. It works with RepairDesk or your POS. A website with repair prices starts from AED 7,900; the full upgrade takes about 12 weeks.

  Chips: `From AED 7,900` · `Time 2–12 weeks` · `Languages English + Arabic` · `Based in Dubai`.
- [ ] **Step 3: Sections per spec §8.20** — stores Deira / Karama / City Centre (Eastside → Karama everywhere, Downtown → Deira, Mall → City Centre); Arabic DM `<span dir="rtl" lang="ar">كم سعر شاشة ايفون 13؟</span>`; iPhone 13 screen AED 449; WhatsApp store group (was iMessage); PartsHub AED 1,600; dead stock AED 19,100 → AED 2,350; trade-ins per §4; refurbished iPhone 15 AED 2,199; owner report by store; journey + case `.ex-chip`; pricing; FAQ adds a PDPL line to the data question.
- [ ] **Step 4–7:** audit PASS → verify OK + every mockup screenshot ticked against spec §6.9 → text-audit PASS.
- [ ] **Step 8:** update phone-repair spec IP1–IP11 + overview §4/§5. `touch`.

---

### Task 22: Cross-page consistency, docs and final verification

**Files:**
- Modify: `CLAUDE.md` (§1, §2 status, §3 note, §4 key values, §5 concept brands, §6 template table)
- Modify: `docs/superpowers/specs/2026-10-08-industry-pages-design.md` (final pass)
- Modify: `docs/superpowers/specs/2026-10-09-uae-localization-design.md` (status → "Built, waiting for owner review")
- Modify: `docs/seo-uae/README.md` (decision 4 "Localize the design?" → done)
- Test: all 19 audits

- [ ] **Step 1: Run every audit**

```bash
for f in homepage.html service-*.html industry-*.html; do node uae-audit.js "$f" | tail -1; done
```
Expected: 19 × `PASS`.

- [ ] **Step 2: Cross-page facts check**

```bash
cd ../mockups
grep -o -h "Peak Plumbing\|Rick A\.\|Eastside\|Tacoma\|Lonestar" *.html | sort | uniq -c   # expect no output
grep -o -h "AED [0-9,]*" homepage.html | sort -u | head -40                               # homepage values
```
Confirm by reading each page's pricing section: Launch AED 7,900, Build AED 49,000, Add-on AED 2,900, Care AED 790 wherever they appear; industry tiers AED 7,900 / 49,000 / 105,000; mobile Business app AED 49,000. Fix any mismatch in the page and its spec.

- [ ] **Step 3: Update `CLAUDE.md`**

- §1: "selling to **businesses in Dubai & UAE** and **UAE agencies** (white-label). English first, Arabic next; US is phase 2 (`docs/seo/`, `mockups/us/`)."
- §2: add "UAE localization ✅/🟡 (2026-10-xx): all 19 mockups localized per `specs/2026-10-09-uae-localization-design.md`; US versions in `mockups/us/`."
- §4 key values: "Add-on from AED 2,900 · Launch from AED 7,900 (2–4 weeks) · Build from AED 49,000 (~12 weeks) · Care from AED 790/mo; Peak Cooling = Dubai & Sharjah, 4.9 · 640 reviews, 14 vans; FixPoint = Dubai (Deira / Karama / City Centre) · 4.8 · 930."
- §5 concept brands: UAE locations from spec §4 (Peak Plumbing → Peak Cooling).
- §6: add "Every page also has: H1 kicker, plain-English block, WhatsApp CTA, Example-project chips, `data-nosnippet` (spec §6). Run `docs/superpowers/tools/uae-audit.js` before calling a page done."
- §7: add rule 12 "Run `node docs/superpowers/tools/uae-audit.js <page>`; it must PASS. New CSS goes only in the `uae-shared` block and is synced with `sync.js shared`."

- [ ] **Step 4: Final visual pass**

```bash
for f in homepage.html service-*.html industry-*.html; do node verify.js "$f" "../_shots/final/${f%.html}" | tail -1; done
```
Expected: 19 × `OK`. Open each page's `00-top.png` and `*-plx.png` side by side to confirm one consistent look.

- [ ] **Step 5: Hand-off note for the owner**

Write `docs/superpowers/mockups/UAE-CHANGES.md` (one screen): what changed, the renamed brand and owner (Peak Cooling, Rashid), the AED prices, the new components, where the US versions are, and the open items from spec §10. `touch homepage.html` so the preview shows the homepage first.
