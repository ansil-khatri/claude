# UAE Localization: All Approved Pages — Design Spec

- **Date:** 2026-10-09
- **Status:** Approved by the owner 2026-10-09 (spec, AED prices, brand changes)
- **Why:** the launch market changed from the USA to **Dubai + UAE** (owner decision, 2026-10-09). SEO plan: `docs/seo-uae/README.md`.
- **Scope:** all 19 approved mockups in `docs/superpowers/mockups/`: homepage, 12 service pages (11 services + white-label) and 6 industry pages, plus their specs.
- **Not in scope:** Arabic RTL page versions, new pages (`/pricing`, `/services`, `/industries`, e-invoicing solution page, solution pages, Abu Dhabi pages), the Next.js build. Each gets its own spec later.
- **The US versions are kept** in `docs/superpowers/mockups/us/` and `docs/superpowers/specs/us/` for the phase-2 US launch.

---

## 1. What stays the same

Design system (§3 of `2026-10-07-agency-site-homepage-and-mobile-apps-design.md`), the service-page template, the industry template, motion rules, hard-won rules in `CLAUDE.md` §7, section order, layouts, colours, fonts, every H1 headline (except home services, §8.19), and the concept-brand names, colours and logos. **This is a content localization, not a redesign.** A visitor who saw the US version should recognise every section.

## 2. Global formatting rules

| Item | US (old) | UAE (new) | Example |
|---|---|---|---|
| Currency | `$1,240` | `AED 1,240` (prefix, one space, comma thousands, no decimals unless the UI is a receipt) | `AED 85`, receipt `AED 245.00` |
| VAT | sales tax / none | Invoices, receipts and checkouts show **VAT 5%** and a TRN line where a real invoice would | `Subtotal AED 233.33 · VAT 5% AED 11.67 · Total AED 245.00` |
| Phone numbers | `(512) 555-0142` | Dubai landline `+971 4 555 0142`, mobile `+971 50 555 0142`, Abu Dhabi `+971 2 555 0187`, Sharjah `+971 6 555 0110` | — |
| Addresses | street + ZIP | building / community / area, no ZIP | `Marina Gate 2, Apt 1804, Dubai Marina` |
| Units | lb, mi, °F, gal | kg, km, °C, litres; AC in tons | `6.6 kg`, `66 km`, `46°C`, `1.5-ton split AC` |
| Time zone | Eastern / Central / Mountain | **GST** (UTC+4) | "Times shown in Dubai time (GST)" |
| Working week | Mon–Fri | Mon–Fri offices; shops and restaurants 7 days; Friday prayer mid-day noted where realistic | — |
| Dates | Oct 13 | Same style (Tue 13 Oct); numeric dates DD/MM/YYYY | `13/10/2026` |
| Seasons & events | fall, December holidays, Thanksgiving, Black Friday | **summer heat (May–Sept)**, **Ramadan & Eid**, **White Friday**, **Dubai Shopping Festival (DSF)**, back-to-school (late Aug) | "Back before every summer" |
| Chat apps | iMessage | **WhatsApp** for every customer and staff conversation; plain SMS only for OTP codes | — |
| Languages | English, Spanish | English and **Arabic**; concept-brand sites show an `EN · ع` toggle in their nav | — |
| Market words | "US businesses", "across the US" | "businesses in Dubai & UAE", "across the UAE" | — |
| Business IDs | license number, BBB | trade licence no., TRN, "DED licensed" / "free-zone licensed" | `Trade licence 1184207` |
| Banks | Chase | Emirates NBD, ADCB, Mashreq, FAB (as payout destinations) | `→ Emirates NBD ••2210` |

## 3. Platform and tool swaps

| US (old) | UAE (new) | Notes |
|---|---|---|
| DoorDash, Uber Eats, Grubhub | **Talabat, Deliveroo, Careem, Noon Food** | Mockups of "the delivery app" stay generic ("Delivery app payout"); named in chips, tables and FAQ |
| DoorDash Drive | own riders, or courier (Quiqup, Careem Box) | — |
| Toast, Square for Restaurants, Clover | **Foodics** (main), Lightspeed | — |
| OpenTable | **Eat App**, SevenRooms | — |
| Square / Shopify POS (retail) | Foodics, Lightspeed, Odoo POS, Shopify POS | Shopify POS exists in UAE; keep where used |
| Square Appointments, Vagaro, Boulevard | **Fresha**, Booksy, Vagaro | Fresha is Dubai-born |
| CleanCloud, Cents, SPOT | CleanCloud, Laundry POS | Competitor to mention: Washmen |
| Tekmetric, Shopmonkey, Mitchell 1 | "your garage software", Zoho Books, Tally | Don't claim named UAE garage systems until verified |
| ServiceTitan, Housecall Pro, Jobber | **Jobber**, Zoho FSM, Excel + WhatsApp | Competitor platforms: Justlife, ServiceMarket |
| RepairDesk, RepairShopr | RepairDesk (works in UAE), Odoo | — |
| QuickBooks | **Zoho Books** (main), Xero, Tally, QuickBooks (max once per page, in comparison only) | — |
| Gusto (payroll) | **WPS payroll** via Zoho Payroll or Bayzat | WPS = UAE Wage Protection System |
| Klarna, Afterpay, Affirm, PayPal Pay Later | **Tabby, Tamara** | — |
| Zelle, Venmo, Cash App, check | bank transfer, cash, cash on delivery, payment link | — |
| Shop Pay | Apple Pay, Tabby | — |
| PayPal, Square, Braintree (comparison) | **Telr, Network International (N-Genius), Checkout.com, Ziina, PayTabs** | Stripe stays (works in UAE) |
| Stripe "2.9% + 30¢" | Stripe "2.9% + AED 1 (+1% international cards)" | Re-verify before launch |
| Yelp, BBB, Angi, HomeAdvisor | Google reviews, Facebook, ServiceMarket, Justlife | — |
| Google Local Services | (remove) | Not available in UAE |
| CallRail | call tracking (generic), Twilio | — |
| 10DLC texting rules | WhatsApp Business API opt-in and template approval | — |
| "Some US states require AI disclosure" | "We always say it's AI, and follow the UAE data protection law (PDPL)" | Legal check stays an open item |
| SOC 2 | ISO 27001, UAE PDPL, data hosted in the UAE region on request | — |
| G2 High Performer | (remove) | — |
| Press: Eater, NYT, Infatuation, Grub Street, Austin Monthly, The Knot, Chicago Tribune, WGN, Block Club | **Time Out Dubai, What's On, Gulf News, Khaleej Times, The National, Vogue Arabia, Harper's Bazaar Arabia, Emirates Woman** | Concept trust logos only |
| Michelin Bib Gourmand | Michelin Guide Dubai · Bib Gourmand | Michelin Guide Dubai exists |
| ASE, AAA, NAPA | Bosch Car Service, Mobil 1, Michelin | — |
| Tesla Certified | Tesla Certified (Tesla sells in UAE) | — |
| Permits | "Authority approvals handled" (DEWA in Dubai, ADDC in Abu Dhabi) | Generic wording; owner to verify |

## 4. Concept brands in the UAE

Names, colours, fonts and logos stay. Locations, phones, prices and local details change. These values go into the shared `SITES` array and every page.

| Brand | US (old) | UAE (new) | Key UAE facts (use exactly) |
|---|---|---|---|
| **Maison Rose** (salon, rose `#b4536a`) | Austin, TX · (512) 555-0142 | **Ladies' salon · Jumeirah, Dubai** · +971 4 555 0142 | 4.9 · 312 Google reviews · 12 yrs in Dubai · 8 stylists · owner Sarah M. · senior stylist Mia · deposit **AED 100** · Cut & style from AED 180 · Balayage from AED 650 · Bridal from AED 950 · 3 no-shows = **AED 1,950** · booking platform in comparisons: Fresha · trust: Vogue Arabia, Harper's Bazaar Arabia, Time Out Dubai, Emirates Woman |
| **FreshFold** (laundry, blue `#2f6bff`) | Chicago, IL · 6 locations · $2.00/lb · driver Mike | **Laundry · Dubai Marina & JLT** · +971 4 555 0199 · 6 branches (Dubai Marina, JLT, JVC, Business Bay, Al Barsha, Downtown) | 4.8 · 1,240 App Store ratings · wash & fold **AED 15/kg** · shirt pressed AED 9 · dry cleaning from AED 18 · duvet AED 75 · driver **Imran** (was Mike), second driver Luis stays · ops manager Nina · customer Daniel K. in Dubai Marina · +212% online orders · −50% calls · "back within 24 hours" · building access via concierge (not gate codes) · trust: Time Out Dubai, Gulf News, Khaleej Times, What's On |
| **Apex Auto Works** (garage, dark + orange `#f97316`) | Phoenix, AZ · owner Rick A. · (602) | **Garage · Al Quoz, Dubai** · +971 4 555 0110 | 4.9 · 860 reviews · 9 bays · 18 yrs in Al Quoz · owner **Rashid A.** (was Rick; "Ask Rashid") · customer Marcus T. with a **2019 Nissan Patrol** (was Tacoma) · Porsche 911 GT3 stays for the SITES app card · Oil service from AED 299 · Brake pads from AED 890 · Diagnostics AED 250 · AC regas from AED 349 · ARO **AED 1,480** (was $412) · warranty 12 months / 20,000 km · reminders "back in 10,000 km" · trust: Bosch Car Service, Mobil 1, Michelin |
| **Volt & Wire** (electrical, yellow on black) | Dallas, TX · (214) · EV chargers | **Electrical & maintenance · Abu Dhabi** · +971 2 555 0187 | 4.9 · 427 reviews · office manager Erin · tech Carlos · customer Tom Reynolds in Khalifa City · EV charger install from **AED 3,900** (flat AED 4,550 incl. approval on the landing page) · DB board upgrades from AED 8,800 · Lighting from AED 650 · "Authority approval handled" · Tesla Certified · area check "Khalifa City ✓ in our area" |
| **Ember Kitchen** (restaurant, dark warm + amber) | Brooklyn, NY · (718) · natural wine | **Restaurant · JLT, Dubai** · +971 4 555 0160 | 4.8 · 2,100 reviews · 90 seats · owner Marco Bellini · customer Olivia R. (Dubai Marina) · order #311 = charred octopus AED 85 + short rib AED 120 + sourdough AED 40 = **AED 245** · drinks: fresh juices and mocktails (no wine) · delivery payout week: 128 orders, AED 17,700 gross, −AED 5,310 commission (30%), −AED 660 promos, AED 11,730 deposited · **AED 47,700 kept in October** (was $13k) · POS Foodics · reservations Eat App · Michelin Guide Dubai · Bib Gourmand · trust: Time Out Dubai, What's On, Gulf News |
| **Ledgerly** (SaaS, indigo `#6366f1`) | San Francisco · QuickBooks · SOC 2 | **SaaS · DIFC, Dubai** | "Finance automation for GCC SMEs" · syncs with Zoho Books and Xero · **UAE e-invoicing ready** · VAT returns · MRR **AED 176,700** (≈ $48.1k) · 2,053 companies · plans Solo AED 45 · Team AED 149 · Business AED 475 /month · customers Harbour Legal Consultants DMCC, Northwind Trading LLC, Brightline Dental Clinic · ISO 27001 |
| **Peak Plumbing → Peak Cooling** (blue `#1d6fd6`) | Denver, CO · 14 trucks · plumbing | **AC & maintenance · Dubai & Sharjah** · +971 4 555 0148 | **Renamed** (AC is the UAE's main home-service job) · 4.9 · 640 reviews · 14 vans · since 2004 · customer Tom R. in Arabian Ranches · quote "Booked online at 1 AM, they were here by 8. Fixed in an hour." (AC died at 1 AM in August) · call-out deposit **AED 99** · AC repair from AED 249 · tech Ryan · annual maintenance contract **Peak Care AMC** AED 49/month (was Peak Club) · competitor "Desert Breeze AC" · supplier "Al Quoz HVAC Supply" |
| **FixPoint** (phone repair, green `#10b981`) | Miami, FL · Downtown / Eastside / Mall | **Phone repair · Dubai** · 3 stores: **Deira / Karama / City Centre** (was Downtown / Eastside / Mall) | 4.8 · 930 ratings · 45 min avg repair · customer Luis G. · tech Sam · iPhone 13 screen **AED 449** · trade-in iPhone 13 Flawless AED 1,350 / Good AED 1,150 / Cracked AED 600 · store credit +10% · refurbished iPhone 15 AED 2,199 · Karama store 4.9 · 302 reviews · competitors "Cell Doctor Deira", "iFix Hub" |
| **PromptPilot** (vibe-rescue case) | Austin, TX · AI writer for real-estate agents | **Dubai** · AI listing writer for Dubai real-estate agents (English + Arabic listings) | founder Maya · 1,140 paying users · MRR AED 83,300 · leaked key bill AED 8,450 |
| **Northlight Studio** (white-label) | Austin branding studio | **Branding studio · Dubai Design District (d3)** · 9 people · founder Maya Torres | Other agencies: Copperline Digital (Dubai Media City), **Gulf Local** (SEO, was Lonestar Local), Field & Form (Abu Dhabi) |
| SaaS sub-brands (SaaS page) | US contexts | Shelfwise (GCC restaurants, Foodics sync), Routeline (UAE trades, WPS export), Glowdesk (salon groups, WPS payroll export), **Keyhouse** (Dubai property managers: Ejari, post-dated rent cheques, RERA), Partsmith (auto parts from Sharjah Industrial Area suppliers) | — |

Rule: every page uses these facts. If a page needs a fact not listed here, add it to this table first.

**Shared foundations:** applied to `SITES` on 2026-10-10 and propagated to all 18 other pages (8 by `sync.js propagate`, 10 diverged copies by the same scripted string swaps, 74/74 each). Extra `SITES` facts set then: Maison Rose blow-dry AED 150 · FreshFold app basket 6 kg wash & fold AED 90.00 + dry clean AED 54.00 = AED 144 · Apex app card oil service AED 459 + brake pads AED 890 = AED 1,349 · Volt & Wire estimate = charger AED 3,900 + authority approval (ADDC) AED 650 = AED 4,550 · Ember pickup order AED 85 + AED 120 = AED 205 · Ledgerly rating line "4.8 · UAE e-invoicing ready" (G2 removed), 2,053 companies, AED 4.4B reconciled, overdue AED 45,500 (Acme Co. AED 15,400, Northwind AED 30,100).

## 5. Agency prices in AED (source: `docs/seo-uae/06-pricing-aed.md`)

**Homepage (source of truth):** Add-on **from AED 2,900** (payments, AI chat on your site, AI-built app fix · live in days) · Launch website **from AED 7,900** (2–4 weeks) · Build web + app **from AED 49,000** (~12 weeks) · Care **from AED 790/mo**. Prices exclude 5% VAT; pricing sections say "+5% VAT".

| Page | Tier 1 | Tier 2 (most chosen) | Tier 3 |
|---|---|---|---|
| Mobile apps | MVP app AED 35,000 · 6–8 wk | Business app **AED 49,000** · 10–12 wk (= homepage Build) | Custom platform AED 105,000 · 14–20 wk |
| Web apps | Internal tool AED 29,000 | Business web app AED 59,000 | Platform AED 120,000 |
| SaaS | Prototype AED 24,000 | Launch-ready SaaS AED 120,000 | Platform AED 250,000 |
| Shopify | Launch store AED 9,900 | Custom theme AED 29,000 | Plus/headless/apps AED 69,000 |
| Website design (WordPress) | Business site AED 7,900 (= Launch) | Custom site AED 19,900 | WooCommerce/plugins AED 44,000 |
| Landing pages | One page AED 5,900 | Campaign pack AED 15,900 | Test & improve AED 4,900/mo |
| Payments | Checkout & payment links **AED 2,900** (= Add-on) | Complete payments AED 19,900 | Platform AED 49,000 |
| WhatsApp & AI | Assistant **AED 2,900** (= Add-on) + AED 150–1,100/mo running | Assistant that acts AED 29,000 | Back-office agents AED 59,000 |
| Automation & ERP | Automations AED 7,900 | Ops system AED 59,000 | Multi-branch ERP AED 150,000 |
| SEO | Setup AED 4,900 | Monthly AED 3,500/mo | Bilingual & multi-branch from AED 6,500/mo |
| Vibe rescue | Audit free | Rescue & launch **from AED 2,900** (= Add-on) | Rescue + build AED 11,000/mo |
| White-label | Per project AED 18,000 | Dev team AED 59,000/mo | Hours AED 220/h |
| Industry pages (all 6) | Get found AED 7,900 · 2–4 wk | Full upgrade AED 49,000 · ~12 wk | Multi-location AED 105,000 · 14–20 wk |

Other money in agency copy: hosting "AED 75–550/mo", Care "AED 790/mo", running costs in AED. Use ×3.6725 and round to a natural number only for **third-party costs** (Shopify plans, hosting). Agency prices come only from this table.

## 6. New shared components

All new CSS goes in one block between `/* uae-shared:start */` and `/* uae-shared:end */` at the end of each page's main `<style>`, identical in every page (synced by tool). Prefixes checked for collisions on 2026-10-09: `h1-kicker`, `plx-`, `ex-chip`, `wa-` are unused.

### 6.1 H1 kicker (SEO)
The small line above the headline moves **inside** the H1, so the H1 names the service and the place. Visually identical to today's homepage `.kicker`.

```html
<h1><span class="h1-kicker">Shopify agency in Dubai & UAE</span>Your products are great.<em>Your store should sell like it.</em></h1>
```
```css
h1 .h1-kicker{display:block;font:600 14px/1.4 'Plus Jakarta Sans',sans-serif;letter-spacing:0;color:rgba(255,255,255,.62);margin:0 0 18px;text-transform:none}
h1 .h1-kicker::before{content:"";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--lime);margin-right:10px;vertical-align:1px}
```
On the homepage the existing `<div class="kicker">` is replaced by the H1 kicker. On service and industry pages the breadcrumb stays and the kicker sits between breadcrumb and headline. Kicker text per page is in §8.

### 6.2 "In plain English" block (SEO + AI answers)
A slim stone band directly after the hero section: left a mono label, right 60–90 words of plain text plus 4 fact chips. It's real text, not a mockup.

```html
<section class="plx"><div class="w plx-in">
  <div class="plx-l">IN PLAIN ENGLISH</div>
  <div class="plx-r"><p>…60–90 words…</p>
    <div class="plx-f"><span><b>From</b> AED 9,900</span><span><b>Time</b> 3–8 weeks</span><span><b>Languages</b> English + Arabic</span><span><b>Based in</b> Dubai</span></div></div>
</div></section>
```
```css
.plx{padding:56px 0 8px}
.plx-in{display:grid;grid-template-columns:220px 1fr;gap:40px;align-items:start;border-top:1px solid var(--line);padding-top:28px}
.plx-l{font:600 12px/1 'JetBrains Mono',monospace;letter-spacing:.08em;color:var(--mute)}
.plx-r p{font:500 19px/1.6 'Plus Jakarta Sans',sans-serif;color:var(--ink);max-width:860px;margin:0}
.plx-f{display:flex;flex-wrap:wrap;gap:10px;margin-top:20px}
.plx-f span{background:var(--card);border:1px solid var(--line);border-radius:999px;padding:9px 16px;font:500 14px/1 'Plus Jakarta Sans',sans-serif;color:var(--ink)}
.plx-f b{font:600 11px/1 'JetBrains Mono',monospace;color:var(--mute);margin-right:8px;letter-spacing:.05em;text-transform:uppercase}
@media(max-width:760px){.plx-in{grid-template-columns:1fr;gap:12px}}
```
No entrance animation (visible by default).

### 6.3 WhatsApp CTA
A secondary pill next to the primary CTA in every hero and closing CTA, and a small icon button in the nav before "Book a free call". Lime stays the primary; WhatsApp is a dark/outline pill with a green glyph.

```html
<a class="btn wa-btn" href="https://wa.me/971500000000?text=Hi%2C%20I%27m%20on%20your%20Shopify%20page" data-cursor="Chat"><svg class="wa-ic" viewBox="0 0 24 24" aria-hidden="true"><path fill="#25D366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Z"/><path fill="#fff" d="M8.9 7.4c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.4.6c-.1.2-.2.3 0 .6.5.9 1.6 2.1 3 2.6.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.2.1.4.2.4.4 0 .5-.2 1.4-1 1.8-.8.4-1.8.5-3.2-.1a9.3 9.3 0 0 1-4.6-4.2c-.8-1.4-.6-2.6-.4-3.2Z"/></svg>WhatsApp us</a>
```
```css
.wa-btn{background:transparent;color:inherit;border:1px solid currentColor;display:inline-flex;align-items:center;gap:10px}
.wa-ic{width:18px;height:18px;flex:none}
.nav .wa-nav{width:40px;height:40px;border-radius:50%;display:inline-grid;place-items:center;border:1px solid var(--line);margin-right:8px}
```
The prefilled text names the page ("Hi, I'm on your Shopify page"), so leads can be attributed. The number is a placeholder (`+971 50 000 0000`) until the owner has one. The booking widget gets one line under the confirm button: "Prefer WhatsApp? Message us and we'll reply within the hour (Mon–Fri, GST)."

### 6.4 "Example project" chip
Every showcase stage and case study gets a small chip, so concept work is never presented as real client results (FTC/UAE consumer-protection risk; see `docs/seo-uae/08`).

```html
<span class="ex-chip">Example project · illustrative numbers</span>
```
```css
.ex-chip{display:inline-block;font:600 11px/1 'JetBrains Mono',monospace;letter-spacing:.05em;padding:7px 11px;border-radius:999px;background:rgba(255,255,255,.12);color:rgba(255,255,255,.7)}
.plx .ex-chip,.sec-light .ex-chip{background:var(--soft);color:var(--mute)}
```
It replaces existing notes such as "Concept apps for this mockup. Replace with real client projects…". It's removed per item when a real client replaces the concept.

### 6.5 `data-nosnippet` on mockups
Add `data-nosnippet` to the outermost wrapper of every mockup: hero stage, pain-card visuals, showcase stage, deep-dive mockup panel, process visuals, case-study visuals, homepage gallery. It keeps fake UI text out of Google snippets in the real build.

### 6.6 Concept websites: language toggle
`siteHTML()` adds `<span class="lng">EN · ع</span>` to the right side of each concept site's nav (before the phone number). Small, muted. Shows that UAE business sites are bilingual.

### 6.7 Footer and booking widget
- Footer line: "Based in Dubai · Trade licence [number] · Mon–Fri 9:00–18:00 GST · WhatsApp +971 50 000 0000 · hello@[brand].com".
- Booking widget: day row Mon–Fri, times 10:00–17:00, label "Dubai time (GST)", meeting type "Google Meet · or in person in Dubai".

### 6.8 Mockup headings
Concept-site templates and tool windows (for example the PDF proposal) render their own `<h1>`. In the mockups, change each one to `<div class="mk-h1">` and give every mockup-scoped `h1` CSS rule a matching `.mk-h1` selector (for example `.S h1` → `.S h1,.S .mk-h1`), so each page has exactly one `<h1>` and nothing looks different. `mk-h1` was checked for collisions on 2026-10-09 (`.h1` and `mh1` are already taken). This mirrors the Next.js rule (one H1 per page).

### 6.9 Every mockup must look like the UAE (visual checklist)
Removing US details isn't enough; each mockup screen must **show** the UAE. When a page is done, every mockup (hero, pain cards, showcase tabs, deep-dive tabs, process visuals, case study) passes this checklist where it applies:

| Element in the mockup | UAE version |
|---|---|
| Money | AED amounts; receipts and invoices show `VAT 5%` and a TRN line |
| Addresses | Dubai/UAE buildings and communities, written out ("Marina Gate 2, Apt 1804, Dubai Marina", "Villa 214, Arabian Ranches", "Warehouse 12, Al Quoz Industrial Area 3", "Cluster D, JLT"), never US street numbers |
| Maps and Google results | Labels with UAE areas (JLT, Dubai Marina, Al Barsha, Business Bay, Jumeirah, Deira, Karama, Khalifa City), roads like "Sheikh Zayed Road" / "Al Khail Road", distances in km |
| Phones | `+971` numbers; WhatsApp chat UIs (green bubbles, double ticks), not iMessage |
| Language | Concept sites show `EN · ع`; at least one Arabic message or label on pages listed in §8 (inside `dir="rtl"`) |
| Payments | Apple Pay, cards, **Tabby / Tamara**, payment links on WhatsApp, cash on delivery where realistic; payouts to UAE banks (Emirates NBD, ADCB, Mashreq, FAB) |
| Identity and documents | Dubai plate numbers (`D 48210`), UAE Pass sign-in on portals, Emirates ID where an ID is realistic, trade licence / TRN on invoices |
| Platforms | Talabat, Deliveroo, Careem, Noon Food, Foodics, Fresha, Zoho Books, WPS payroll (§3) |
| Climate and calendar | °C (summer 42–46°C), "AC not cooling", Ramadan / Eid hours, iftar, White Friday, DSF, Friday prayer break |
| People | Names that fit Dubai's mix (Rashid, Imran, Fatima, Priya, Omar, Sarah, Marcus); stays consistent with §4 |
| Suppliers, competitors, venues | Fictional UAE names (table below), never real US companies |

**Swaps for US places, streets and companies found in the current mockups:**

| US (old) | UAE (new) |
|---|---|
| Chicago addresses (`2231 N Clark St`, `1840 N Halsted St`, `1520 N Wells St`) | `Marina Gate 2, Apt 1804`, `Princess Tower, Apt 3302`, `Cayan Tower, Apt 2107` (all Dubai Marina) |
| Chicago areas (Lincoln Park, Wicker Park, Lakeview, Evanston, Lincoln) | Dubai Marina, JBR, JLT, JVC, Al Barsha, Business Bay |
| Brooklyn (`Smith St`, `Wythe Ave`, `Court St`, Carroll Gardens) | `Cluster D, JLT`, `Cluster T, JLT`, Dubai Marina |
| Phoenix (`2210 W Buckeye Rd`, Tempe, Scottsdale, Mesa) | `Warehouse 12, Al Quoz Industrial Area 3`, Al Barsha, Business Bay, Al Quoz |
| Dallas area (Plano, Frisco, Starwood, `Elm St`) | Khalifa City, Al Reem Island, Yas Island, Saadiyat (Abu Dhabi) |
| Denver area (Lakewood, Arvada, Englewood, Golden, Washington Park) | JVC, Al Barsha, Mirdif, Dubai Hills, Arabian Ranches |
| Other US streets (`Buren St`, `Pierce St`, `Ford St`, `Main St`, `Congress Ave`) | UAE community addresses as above |
| Suppliers: Baldor Foods, WorldPac, Ferguson, Brooklyn Provisions, Front Range Supply, Desert Parts Supply | Al Aweer Fresh Co., Sharjah Parts Trading, Al Quoz HVAC Supply |
| Competitors: Midas, uBreakiFix, Mile High Plumbing, Front Range Rooter, Valley Quick Lube | Quick Lube Al Quoz, iFix Hub, Desert Breeze AC, Cell Doctor Deira (fictional) |
| Venues: Hotel Ella | "a JBR beach resort" |

Photos: only already-checked Unsplash IDs may be used (CLAUDE.md §5), so photos can't be made UAE-specific yet. Avoid images with obvious US signs (yellow school buses, US plates, US flags) in the most visible slots, and keep "licensed UAE photos" as an open item (§10).

## 7. Copy rules for the UAE

- Story-led and customer-language rules (`CLAUDE.md` §4) stay.
- Use UAE reality in every "before": WhatsApp floods, Talabat commission, Fresha fees, 46°C AC breakdowns, "can I pay cash on delivery?", Ramadan hours, building access through concierge.
- Don't overload with Arabic words. English copy with UAE facts. Arabic appears in: concept-site toggles, one or two WhatsApp messages in Arabic where realistic (with the reply in Arabic too), and the "Languages: English + Arabic" chip.
- Never claim a UAE office, licence or partner status we don't have. Placeholders in `[brackets]`.
- Homepage is still the source of truth: once the homepage is localized, every other page follows its AED values.

## 8. Page-by-page changes

Each page follows §2–§7. The lists below are the **page-specific** changes. Anything not listed is either unchanged or covered by the global swaps.

### 8.1 Homepage (`homepage.html`)
- **Kicker (H1):** "Apps, websites and software for businesses in Dubai & UAE".
- **Hero:** Maison Rose browser (Jumeirah, Dubai; AED prices), phone unchanged; floating card "Payment received · AED 100 · Apple Pay"; add WhatsApp CTA; proof row "★ 4.9 from N business owners in the UAE".
- **Plain English:** "We're a software studio based in Dubai. We build websites, Shopify stores, mobile apps, WhatsApp assistants and the systems behind them for UAE businesses: restaurants, salons, garages, laundries, AC companies and shops. Prices are fixed in AED before we start: websites from AED 7,900, website + app from AED 49,000. Everything comes in English and Arabic, and you own the code." Chips: From AED 2,900 · Time 2–12 weeks · English + Arabic · Based in Dubai.
- **Trust strip:** "Trusted by owners and agencies across the UAE".
- **Starting points:** tab 2 Peak Cooling website + checkout (Apple Pay, Tabby, card; "Payment succeeded AED 99"); tab 4 Excel + WhatsApp group stays; tab 5 agency "Northwind Agency" stays.
- **How it works:** step 02 PDF proposal totals **AED 49,000** (+ VAT 5%), "Prepared for Sarah M., Owner · Jumeirah, Dubai"; step 01 video call names "Google Meet"; step 08 "maisonrose.ae is live"; step 09 report in AED.
- **Gallery:** filters unchanged; cards show UAE concept sites.
- **Deep dives:** Payments tab Apple Pay sheet in AED; Automation tab run log "Shopify order → Zoho Books invoice → WhatsApp message → stock sheet"; Google tab "salon near me" results in Jumeirah, Dubai.
- **Results:** counters unchanged.
- **Pricing:** §5 homepage values, "+5% VAT".
- **FAQ:** add "Can the website and app be in Arabic?" and "Are prices in AED, and do they include VAT?"; remove US-only wording.
- **CTA + footer:** §6.3, §6.7.

### 8.2 Mobile apps (`service-mobile-apps.html`)
- **Kicker:** "Mobile app development in Dubai & UAE".
- **Pains:** iMessage → WhatsApp ("Do you have an app? [competitor] does"); delivery payout −AED 5,310; "Reserve my spot · AED 100".
- **Showcase:** FreshFold "Wash & fold · AED 15 / kg"; Volt & Wire screens: estimate → EV charger install options (AED) → "Electrician arriving"; Apex brake quote AED 890; FixPoint trade-in AED values; add `.ex-chip`.
- **What it can do:** checkout with deposit AED 100 + Apple Pay + Tabby option; lock-screen notifications in AED; loyalty "Add to Apple Wallet" stays.
- **Tech table:** budget row in AED.
- **Case study:** FreshFold Dubai Marina & JLT; metrics unchanged; `.ex-chip`.
- **Pricing:** §5; **FAQ:** add "Can the app be in Arabic?" (yes, right-to-left built in); running costs in AED (Apple USD 99/yr developer fee stated as "about AED 365 a year").

### 8.3 Web apps (`service-web-apps.html`)
- **Kicker:** "Custom web apps and business software in Dubai & UAE".
- **Hero:** FreshFold ops dashboard: "AED 8,880 paid", drivers Imran / Luis.
- **Pain 2 tool statement:** "Business card statement": HubSpot AED 1,650, Zoho CRM AED 1,060, Trello AED 440, Zoho Books AED 365, Zapier AED 270, Calendly AED 235, Jotform AED 145 = **AED 4,165/mo**; sticky "every night at 9pm: Calendly → Zoho Books → Trello". After: Apex "Today at Apex" in AED.
- **Pain 3:** Volt & Wire portal for Tom Reynolds (Khalifa City), estimate E-1042 AED 4,550, "Pay AED 3,450".
- **Showcase:** brands per §4; Apex chips "Zoho Books sync"; add UAE Pass sign-in as a chip on the customer-portal tab.
- **Tab 04:** "Zoho Books" replaces QuickBooks; checkout AED 1,535 with Tabby/card.
- **Tech table:** hosting row "AED 75–550".
- **Process 04:** import "Zoho Books invoices 3,880 ✓".
- **Case:** Apex Al Quoz; quote approval "AED 890"; QuickBooks → Zoho Books.
- **FAQ 5:** hosting in AED, Care AED 790/mo; add "Can it log in with UAE Pass?".

### 8.4 SaaS (`service-saas.html`)
- **Kicker:** "SaaS and MVP development in Dubai & UAE".
- **Hero:** Ledgerly admin in AED (MRR AED 176,700; new subscriptions Harbour Legal AED 475, Northwind Trading AED 149, Brightline Dental Clinic AED 149); "Stripe recovered AED 11,530"; tech chips: SOC 2-ready → "ISO 27001-ready · UAE data residency".
- **Pains:** Shelfwise draft order "Al Aweer Fresh Co. AED 1,102"; Routeline numbers in AED.
- **Showcase:** sub-brands per §4; Glowdesk payroll "WPS export AED 75,110"; Keyhouse "Rent cheques · Q4 · AED 1,516,000", Ejari renewals, tenant request "AC not cooling" (was leaking faucet); Partsmith supplier "Sharjah Industrial Area".
- **Tab 02:** "VAT (5%) and e-invoicing handled".
- **Comparison:** Year-one cost row in AED (Custom AED 130k–330k · No-code AED 18k–90k + fees · AI builders AED 4k–37k + rebuild · In-house **AED 1.3M+ salaries, visas and housing**).
- **Case:** Shelfwise · Dubai (GCC restaurants), AED 99/month → "AED 365 a month for it".
- **FAQ 6:** "Stripe ~2.9% + AED 1"; hosting in AED.

### 8.5 Shopify (`service-shopify.html`)
- **Kicker:** "Shopify agency in Dubai & UAE".
- **Hero:** Bond Repair Shampoo AED 109 (was AED 129), "AED 30 away from free delivery", Apple Pay + Tabby; floating cards "New order · #1042 · AED 209 · Apple Pay".
- **Pain 1:** "WHITE FRIDAY MEGA SALE", "Someone in Sharjah just bought this".
- **Pain 2:** apps **AED 2,250/mo**; "AED 1,500 to a freelancer just to move a banner".
- **Pain 3:** Ember wholesale portal in AED; Net 30 stays.
- **Showcase:** FreshFold laundry sheets "Dubai"; Volt & Wire "We install in Khalifa City" (was ZIP); Klarna → Tabby everywhere; FixPoint refurbished iPhones in AED.
- **Tab 05:** migration report times in GST.
- **Comparison:** **Shopify (recommended) vs Shopify Plus vs Salla vs WooCommerce** (headless moves into the Plus column's "best for"). Platform cost row: Shopify "≈ AED 145–1,465/mo", Plus "≈ AED 8,450/mo", Salla "from ≈ AED 100/mo, Tabby/Tamara built in", WooCommerce "AED 75–370 hosting + plugins". Note: "Shopify bills in USD; AED shown at 3.67."
- **Process 05 pills:** Apple Pay, Tabby, Tamara, Cash on delivery, iPhone SE, Pixel 8.
- **Case:** Ember Kitchen Pantry · Dubai; "From the restaurant counter to a UAE-wide pantry brand"; "AED 150k in the Ramadan & Eid month"; quote "We sold more hot honey during Ramadan than the restaurant sold in desserts."; "Delivered next day across the UAE".
- **FAQ:** add "Do I need a trade licence to sell online?" (yes: e-Trader, free-zone or mainland licence; we'll point you the right way).

### 8.6 Website design (`service-wordpress.html`; route becomes `/services/website-design`)
- **Breadcrumb:** "Services / Website Design". **Kicker:** "Website design for businesses in Dubai & UAE".
- **Hero:** Volt & Wire homepage (Abu Dhabi, AED services), estimate form "Area: Khalifa City ✓ in our area"; floating "New estimate request · EV charger · Khalifa City".
- **Pain 1:** business-hours block "Mon–Sat 8–7, Fri 8–12 & 2–7" (Friday prayer gap), "Saturday hours updated on 14 pages"; freelancer cost AED 550.
- **Pain 2:** "down 2 days during Dubai Shopping Festival".
- **Pain 3:** FreshFold WooCommerce checkout with Apple Pay / Tabby.
- **Showcase:** brands per §4; Apex "12 area pages" (was city pages); Volt & Wire "#1 for 'EV charger installation Abu Dhabi'"; Ledgerly · DIFC (G2 removed).
- **Tab 02:** URL `voltwire.ae/ev-charger-installation`.
- **Comparison:** running costs in AED (Webflow/Squarespace "≈ AED 85–180/mo").
- **Case:** Apex Al Quoz; quote unchanged.
- **Pricing:** §5 + Care AED 790/month chip.
- **FAQ 5:** hosting in AED; add "Can the site be in Arabic and English?" (yes, both included from the custom tier; one language added for AED 2,900 on the starter tier).

### 8.7 Landing pages (`service-landing-pages.html`)
- **Kicker:** "Landing pages for Google and Meta ads in Dubai".
- **Hero:** `voltwire.ae/ev-charger`: offer bar "AED 1,100 off EV charger installs · ends 31 Oct", "Your Tesla charger, installed this week.", flat **AED 4,550**, approval handled, Tesla Certified; 2-step form with **area picker** (Khalifa City, Al Reem, Yas, Saadiyat) instead of ZIP; trust row "Trade licence CN-1184207" (was TECL 41822, BBB); floating "New lead · 41 seconds ago · Tesla charger · Khalifa City".
- **Pain 1:** Peak Cooling Google Ads: AED 15,470 cost, 1,840 clicks, 11 conversions, **AED 1,406/conv.**; next month AED 15,440, 122 conversions, **AED 127/conv.**; pages `/ac-repair`, `/duct-cleaning`, `/emergency`.
- **Pain 2:** PageSpeed for `maisonrose.ae/bridal`.
- **Showcase:** Maison Rose bridal "real wedding · a JBR beach resort"; Apex brakes AED; Ember private dining "Check Ramadan iftar & Eid dates", party size 12–40; FixPoint screen price AED 549 → AED 449 online; Ledgerly "Zoho Books users trial page".
- **Tab 05:** spend AED 22,900, AED 125/lead, AED 433k quoted; CallRail → "Call tracking".
- **Comparison:** "Ads where each lead is worth AED 200+"; monthly cost in AED.
- **Price chips:** "Spanish version" → "**Arabic version**".
- **Case:** Apex Al Quoz: AED 21,300/mo ads; **AED 150 per booked job (was AED 683)**.
- **FAQ 6:** hosting "AED 0–75/mo".

### 8.8 Payments (`service-payments.html`)
- **Kicker:** "Payment gateway integration in Dubai & UAE".
- **Tech chips:** Stripe · Telr · Network International · Checkout.com · Apple Pay · Google Pay · Tabby · Tamara.
- **Hero:** Apex invoices "Sent on WhatsApp with a pay link"; Tabby + Tamara replace Klarna + Affirm (Tabby 4 × AED 1,690 = AED 6,760); payout "→ Emirates NBD ••2210"; receipt "Thanks, Sarah. Your keys are at the front desk." stays.
- **Pain 1:** WhatsApp list ("Can I transfer?", "Cash on collection ok?", "Bank transfer pending??"); thread with Tom: "my bank transfer limit…"; pay-link card "Pay AED 4,550.00 · Volt & Wire"; unpaid **AED 36,200**.
- **Pain 2:** Ember checkout total AED 245, tip 10/12/15% (UAE norms), Apple Pay up top.
- **Pain 3:** Payouts reconcile in AED, "matched in Zoho Books".
- **Showcase:** Maison Rose deposits AED; Apex "WhatsApp pay link + Tabby"; Volt & Wire deposits, financing → "Tabby or Tamara on big jobs"; FreshFold "charged by weight (kg)"; Ledgerly subscriptions AED.
- **Tab 02:** "An AED 6,760 repair, in four easy payments." Tabby sheet; owner card "Tabby pays you AED 6,760 · fee −AED 270 (illustrative) · missed payments are Tabby's risk".
- **Tab 03:** WhatsApp pay link (was iMessage).
- **Tab 04:** Zoho Books / Xero.
- **Comparison (new columns):** **Stripe** (recommended for online, apps and SaaS) · **Telr** · **Network International (N-Genius)** · **Checkout.com**. Rows: Best for · Typical UAE online fee (Stripe "2.9% + AED 1, +1% international"; Telr "2.49–2.69% + AED 0.50–1, plans from AED 99/mo"; N-Genius "agreed with the bank"; Checkout.com "custom, for higher volume") · Apple Pay & Google Pay · Tabby & Tamara (Stripe: via their own integration; others: via plugin/integration) · Subscriptions & invoices · Money in your bank ("a few business days" / "agreed with provider"). Note: "Published UAE rates in 2026 from provider and comparison pages. Check current pricing before you choose."
- **Process 02:** fees on AED 150,000/mo, 500 payments: Telr vs Stripe example → "You keep AED X more a year" (compute from the table's rates and show the sum).
- **Case:** Maison Rose · Jumeirah: "No-shows used to cost AED 15,000 a month. Now they pay a deposit."; deposit AED 100.
- **FAQ 3:** "Can you move our saved cards from another provider?"; FAQ 4: Tabby/Tamara risk; FAQ 6 → "Do you work outside the UAE?" (GCC via Checkout.com/Tap; Saudi Mada later).

### 8.9 WhatsApp & AI (`service-ai.html`; route becomes `/services/ai-whatsapp-automation`)
- **Breadcrumb:** "Services / WhatsApp & AI". **Kicker:** "WhatsApp chatbots and AI assistants in Dubai & UAE".
- **Sub (rewrite first clause):** "Assistants that answer customers on WhatsApp, Instagram, your website and the phone, in English and Arabic, …" (rest unchanged).
- **Tech chips:** add "Arabic + English".
- **Hero:** FreshFold inbox in AED (wedding dress AED 690, "free re-clean + AED 20 credit"); one inbox row in Arabic ("وين طلبي؟ رقم 2241" → ETA sent).
- **Pain 1:** Ember main line, Friday 7–10 PM (UAE dinner hours), takeout totals AED.
- **Pain 2:** Instagram `maisonrose.dxb`; prices AED (long-hair balayage AED 790, men's cuts AED 120).
- **Pain 3:** Apex supplier PDFs → **Zoho Books**; sticky "ENTER ALL INTO ZOHO BY THURSDAY!! — Rashid"; rotor AED 250 → AED 298 (+19%).
- **Showcase:** Maison Rose rebooking via **WhatsApp** (was iMessage), deposit AED 100; Ember allergen assistant "Any language, incl. Arabic"; Volt & Wire photo estimate (WhatsApp already); FreshFold dispatcher; Ledgerly copilot cost "AED 270/mo".
- **Tab 02 (phone):** transcript with an Arabic opening line and the AI answering in Arabic, then switching to English when the caller does.
- **Tab 03:** supplier "Sharjah Parts Trading" invoice in AED with TRN and VAT 5% fields extracted.
- **Tab 04:** Slack-style #ops stays; refund AED 20 credit.
- **Tab 05:** test rows: "Ramadan hours" (was Thanksgiving hours) "Fixed".
- **Comparison:** typical cost row in AED (Custom "From AED 2,900 once + AED 150–1,100/mo"; off-the-shelf "≈ AED 3.60/answer or AED 150–550/seat/mo"; DIY "AED 75–370/mo + your time"; hire "AED 6,000–9,000/mo + visa").
- **Case:** Volt & Wire · Abu Dhabi: "38% of calls came in after 6 PM"; WhatsApp to Carlos (was iMessage); "AED 330 call-out approved".
- **FAQ 2:** disclosure per §3; FAQ 3 costs in AED; FAQ 6 → "Can it speak Arabic?" (yes, Gulf Arabic and English; summaries in English).

### 8.10 Automation & ERP (`service-automation.html`)
- **Kicker:** "Business automation and ERP in Dubai & UAE".
- **Tech chips:** Zoho Books · Xero · Odoo · n8n · Make · Zapier · WPS payroll · Shopify · Foodics · Laravel · Next.js.
- **Hero:** Peak Cooling ops "Today" (`ops.peakcooling.ae/today`, Dubai & Sharjah · 14 vans), AED amounts, J-2207 "AC compressor replacement"; automation log: job closed → invoice WhatsApp'd + emailed → **Zoho Books** sync → low stock → PO to Al Quoz HVAC Supply → timesheet to **WPS payroll** → review request.
- **Pain 1:** Ember stock "drops with every Foodics sale".
- **Pain 2:** A/R aging "FreshFold LLC" → "FreshFold Laundry LLC" in AED (AED 67,600 > 30 days, hotel/gym accounts in Dubai Marina/JBR); "ask Nina".
- **Pain 3:** WhatsApp group "V&W Crew 🔌" with Abu Dhabi areas ("which Khalifa City villa?").
- **Showcase:** Maison Rose payroll "Synced to WPS payroll" (was Gusto); Ember "Foodics sales sync"; Apex "Zoho Books sync"; FixPoint stores Deira / Karama / City Centre.
- **Tab 05 replaced: "E-invoicing, done"** · chips: UAE e-invoicing · PINT AE · Your ASP · Zoho / Odoo / custom · Headline: "When e-invoicing becomes law, your invoices are already ready." · Fine print: "We connect your system to the Accredited Service Provider you choose. We're not an ASP." · Mockup: invoice INV-5528 (Peak Cooling, TRN, VAT 5% AED 109.00, total AED 2,289.00) beside a status timeline "Created in Zoho Books 11:42 → Converted to PINT AE ✓ → Sent to ASP ✓ → Reported to FTA ✓ → Delivered to buyer ✓" + toast "1,284 invoices sent this month · 0 rejected". (The old tab 05 "Off the spreadsheets" moves into the process step 04 visual, which already shows the import.)
- **Comparison:** industry software column "Jobber · Foodics · Fresha"; Big ERP "Odoo · SAP B1 · NetSuite"; costs in AED.
- **Process 02:** flow "… → Invoice → E-invoice → Paid → Zoho Books".
- **Case:** Apex Al Quoz; iMessage report → WhatsApp "Apex Shop Report"; AED.
- **FAQ 1:** "Do we have to stop using Zoho Books and our other apps?"; add "Will this get us ready for e-invoicing in July 2027?".

### 8.11 SEO (`service-seo.html`)
- **Kicker:** "Local SEO in Dubai & UAE, in English and Arabic".
- **H1:** "People search "electrician near me" and call your competitor." stays (works in UAE).
- **Hero:** Volt & Wire rankings "checked from 35 points across Khalifa City", searches "ev charger installer abu dhabi", "electrician khalifa city", and one Arabic search "كهربائي ابوظبي" (#2).
- **Pain 1:** Peak Cooling "ac repair near me" (Dubai): #27 → #1 in JVC, Al Barsha and Dubai Marina.
- **Pain 2:** `maisonrose.ae/bridal`, "bridal hair Dubai".
- **Pain 3:** Apex Google profile "Closes 6 PM · Closed Friday" → corrected hours incl. Friday afternoon; reply "— Rashid".
- **Showcase:** Maison Rose "balayage dubai"; Ember profile; Apex "Brake Repair in Dubai | Pads From AED 890 | Same Day" above a generic competitor (no real brand names); Peak Cooling area pages (JVC, Al Barsha, Marina, Mirdif…); FreshFold answer box "Wash and fold in Dubai usually costs AED 12–18 per kg."; Ledgerly "Ledgerly vs Zoho Books".
- **Tab 02:** "A page for every area": `voltwire.ae/ev-charger/khalifa-city`, "64 installs in Khalifa City"; plus chip "English + Arabic pages".
- **Tab 03:** schema `areaServed` Al Quoz/Al Barsha/Business Bay, `priceCurrency AED`.
- **Tab 04:** review request on WhatsApp; "Google, Facebook" (Yelp removed).
- **Tab 05:** report for Peak Cooling.
- **Comparison:** costs in AED (cheap package "AED 750–1,500/mo"; ads "AED 5,500–18,000/mo"); note "Typical UAE prices in 2026"; **no 6-month lock-in** (our selling point vs Dubai agencies).
- **Process 04:** `/ac-repair/jvc`, `/duct-cleaning/al-barsha`, `/emergency-ac/mirdif`.
- **Case:** FixPoint Dubai, stores Deira / Karama / City Centre; competitor "iFix Hub" (was uBreakiFix).
- **Pricing lead:** "Clear monthly price. No long contract." (now month to month from day one; FAQ 6 updated).

### 8.12 Vibe-code rescue (`service-vibe-rescue.html`)
- **Kicker:** "Fix and launch AI-built apps · Dubai-based team".
- **Hero:** Ledgerly · DIFC; "23 recovered · AED 6,760"; founder ↔ Alex chat on **WhatsApp**.
- **Pains:** credits "AED 1,400"; OpenAI alert "AED 7,020 vs an AED 185 limit"; Apex quotes "1-star review from Linda Park".
- **Showcase:** FixPoint Dubai; Maison Rose deposit AED 100; reminder texts at 3 AM "(UTC time zone)" → "(server set to UTC, not Dubai time)".
- **Tab 03:** "recovered AED 6,760 from 23 customers".
- **Comparison:** costs in AED (rescue "From AED 2,900", credits "AED 90–735/mo", rebuild "AED 90,000–295,000", freelancer "AED 150–440/h").
- **Case:** **PromptPilot · Dubai** (listing writer for Dubai real-estate agents, English + Arabic); "AED 8,450" leaked-key bill; MRR AED 83,300; AI spend "AED 140 under an AED 440 limit".
- **Pricing:** §5.

### 8.13 White-label (`service-white-label.html`)
- **Kicker:** "White-label web and app development for agencies in Dubai & UAE".
- **Audience line in copy:** "agencies in Dubai and the UAE".
- **Hero:** Northlight Studio (d3) Slack; deposit AED 100; floating "Northlight's margin on this project · AED 64,300 · 42%".
- **Pains:** "AED 22,800 refunded"; Copperline proposal CL-118: app AED 80,800 + Foodics/Stripe AED 34,900 + loyalty AED 25,700 = **AED 141,400**; private note "wholesale AED 87,400 · margin AED 54,000 · 38%"; capacity "AED 352,600 of signed work waiting".
- **Showcase:** client prices in AED (Maison Rose AED 154,000; Ember AED 141,400; Apex AED 198,000; Volt & Wire "Gulf Local (SEO)" AED 47,000; FreshFold care plan AED 5,500/mo; Ledgerly MVP AED 352,000).
- **Tab 02:** "Same time zone as you (GST); same-day Slack replies."
- **Tab 04:** "We invoice you, never your client. Monthly, Net 15, **AED**." Margins in AED.
- **Comparison:** hire in-house "AED 25,000–35,000/month + visa, housing, insurance"; freelancers "AED 150–550/h"; offshore "AED 90–185/h"; partner "fixed per project, or from AED 59,000/mo"; note "Typical UAE figures for 2026".
- **Process 02:** wholesale AED 90,000 · typical client price AED 140–160k.
- **Case:** Northlight Studio · d3, Dubai; "AED 1.78M new dev revenue in 18 months"; lock-screen "Payment received AED 46,300 · Milestone 3".
- **Pricing:** §5. **FAQ 6:** "What time zone do you work in?" → "Dubai (GST). Same working day as you."

### 8.14 Industry template (shared by all 6)
- Pricing tiers per §5 (AED 7,900 / 49,000 / 105,000).
- Booking widget per §6.7 (GST).
- "Works with" chips per §3.
- Case study and journey stage get `.ex-chip`.
- Plain-English block after the hero (text per page below).

### 8.15 Auto repair (`industry-auto-repair.html`)
- **Kicker:** "Websites, inspections and payments for garages in Dubai & UAE".
- **Chips:** Works with your garage software · Zoho Books · WhatsApp Business · Google Business Profile.
- **Customer:** Marcus T., **2019 Nissan Patrol**; RO #4821 stays.
- **Pain 1:** "41 calls yesterday, 17 missed" stays; status page "Your 2019 Patrol is Ready ✓", "Pay AED 1,535 · Apple Pay".
- **Pain 2:** WhatsApp (was iMessage): "AED 1,390 pads + rotors… I'll just pick it up as is"; "Approve 1 item · AED 890".
- **Pain 3:** Google "car service near me" (Al Quoz); competitors "Quick Lube Al Quoz 3.9", "AutoCare Express 4.1", "Desert Tyre & Brake 4.0".
- **Journey:** 02 booking by **plate number** (Dubai plate "D 48210" → 2019 Nissan Patrol LE), brakes + oil AED 299; 04 **WhatsApp** pay link (Invoice #4821 · AED 1,535) + Apple Pay sheet; 05 "Back in 10,000 km"; reminders AED 141,100 booked.
- **Behind the counter:** 03 parts AED; 04 "Card fees from about 2.5% + AED 1", payout to Emirates NBD; fleet rows = Dubai companies; 05 owner "Good evening, Rashid", AED 34,800 ▲18%, ARO AED 1,480, ELR AED 545/h.
- **Process 01:** "A day at your counter".
- **Case:** Apex Al Quoz; metrics "AED 1,480 ARO (was AED 1,170)"; quote credited "Rashid A., owner".
- **FAQ:** 10DLC → "Can we message customers on WhatsApp legally?" (opt-in, templates, opt-out).
- **Booking:** GST.

### 8.16 Salons (`industry-salons.html`)
- **Kicker:** "Booking, deposits and apps for salons and spas in Dubai & UAE".
- **Chips:** Works with Fresha · Booksy · Vagaro · Instagram booking · Google Business Profile.
- **Hero:** schedule in AED (deposits held AED 1,300; "1 no-show · AED 100 kept"); floating "Deposit received · 11:04 PM · AED 100 · Apple Pay".
- **Pain 1:** "15 empty chair-hours today · about AED 4,950"; filled "+AED 3,090".
- **Pain 2:** WhatsApp (was iMessage) cancellation from Ana R.; "AED 100 kept"; "3 no-shows last Saturday, AED 1,950".
- **Pain 3:** Instagram `maisonrose.dxb`.
- **Journey 02:** Mia AED 650, "AED 100 today / AED 550 in salon"; 04 POS: Balayage AED 650, Olaplex No.3 AED 140, member perk −AED 65, deposit −AED 100, tip AED 65, VAT 5% line, due AED 690; Mia earns in AED; 05 loyalty stays.
- **Behind the counter:** 02 memberships AED 81,450 MRR, gift cards AED 23,580; 03 **WPS payroll** export (was Gusto), booth renter → "chair rental AED 2,400/wk"; 04 retail AED; 05 "Good evening, Sarah": AED 25,100 ▲22%, avg ticket AED 600.
- **Process 01:** "47 DMs, 3 no-shows AED 1,950".
- **Case:** Maison Rose · Jumeirah, Dubai.
- **FAQ:** "Leave Fresha/Booksy?" (no); "Will deposits scare clients?" stays; booth renters → "Chair rental stylists".

### 8.17 Laundry (`industry-laundry.html`)
- **Kicker:** "Pickup and delivery apps and software for laundries in Dubai & UAE".
- **Chips:** Works with CleanCloud · Zoho Books · WhatsApp Business · Google Business Profile.
- **Hero:** orders board "Dubai Marina, Tue 13 Oct": 86 orders, **560 kg** ▲12%, AED 15,830 charged; floating "Weighed · #2241 · 9:12 AM · 6.6 kg + 7 items · AED 296 charged", "Route B · Imran · 7 of 18 stops".
- **Pain 1:** WhatsApp chats (already WhatsApp): add one Arabic message.
- **Pain 2:** WhatsApp (was iMessage) with Imran: "which tower? Marina Gate 1 or 2?", "concierge won't let me up 😩"; driver app: "Marina Gate 2, Apt 1804 · leave with concierge · access card at reception".
- **Pain 3:** Google reviews "FreshFold Dubai Marina 4.3 (212)"; refunds AED 1,250; itemized "6.6 kg · AED 99".
- **Journey:** 01 "laundry pickup near me" Dubai Marina; 02 address "Marina Gate 2, Apt 1804", Tue 8–9 AM, back Wed 6–8 PM; 03 scale **6.6 kg**, AED 296; 04 lock screen AED; 05 plan "Weekly Fresh AED 549/mo, 24 of 36 kg", "AED 790 saved", code DANIEL20; subscriptions "318 plans, AED 152,800 MRR".
- **Behind the counter:** 02 routes **66 km** (−23%); 03 commercial accounts: Marina Fitness Club, JBR Stays (holiday homes), Bloom Day Spa, Al Barsha Barbers, JLT Yoga Co. (overdue), Marina Kitchen; AED 90,300/mo; **4,270 kg**; 05 "Today at FreshFold": AED 43,400 ▲16%, **3,400 kg**, kg by branch.
- **Case:** FreshFold · Dubai Marina & JLT · 6 branches.
- **FAQ:** "Charging by the kilo before weighing"; "Drivers on their own phones" stays.

### 8.18 Restaurants (`industry-restaurants.html`)
- **Kicker:** "Ordering, WhatsApp and back-office software for restaurants in Dubai & UAE".
- **Chips:** Works with Foodics · Talabat · Deliveroo · Careem · Eat App.
- **Hero:** orders "tonight, Fri 16 Oct": AED 14,400 direct · 0% commission, −AED 790 app commission tonight, AED 169 avg ticket, AED 22,900 catering; channel chips Talabat / Deliveroo / Careem / Direct / WhatsApp; floating "Order #311 · Olivia R. · 7:02 PM · AED 245 · direct · 0% commission", "Reservation · Fri 8:30 PM · table for 4 · AED 150 deposit held".
- **Pain 1:** payout per §4 (Ember).
- **Pain 2:** Friday 9 PM (UAE dinner time); deposit AED 40/guest = AED 160.
- **Pain 3:** "Removed in 2.1 s from Website · App · Talabat · Deliveroo"; refunds AED 780.
- **Journey 01:** "wood-fired restaurant near me" JLT; 02 "You keep the AED 74" (30% of 245); 03 KDS: late ticket labelled "Talabat"; 05 Tuesday short-rib **WhatsApp** message (was text); guests 3,912.
- **Behind the pass:** 02 menu "wine dine-in only" → "fresh juices · dine-in only"; 03 short rib "AED 36 → AED 40/kg at Al Aweer Fresh Co. (+AED 690/week)"; 04 "Shifts & tips": tips AED 10,450 split by hours, "Send to WPS payroll"; 05 "Tonight at Ember": AED 36,100 ▲14%, avg check AED 169, sales by channel.
- **Process 05:** "never on a Friday" → "never on a Thursday or Friday night".
- **Case:** Ember Kitchen · JLT, Dubai · 90 seats; "AED 47,700 kept in October".
- **FAQ:** "Should I leave Talabat and Deliveroo?" (not right away); POS question → Foodics.

### 8.19 Home services (`industry-home-services.html`) — biggest change
Brand becomes **Peak Cooling** (AC & maintenance, Dubai & Sharjah). The story moves from plumbing to **AC**, the UAE's main home-service job.
- **H1 (changed):** "You're on a roof at 46°C. **Your phone is ringing again.**"
- **Kicker:** "Booking, dispatch and payments for AC and maintenance companies in Dubai & UAE".
- **Sub:** "Online booking with a call-out deposit, a dispatch board for every van, quotes your techs close on the spot, and annual maintenance contracts that bring customers back before every summer. Built for AC, cleaning, electrical and maintenance companies, connected to the tools you already use."
- **Chips:** Works with Jobber · Zoho Books · WhatsApp Business · Google Business Profile.
- **Hero:** dispatch board "Tue 13 Oct · 9:18 AM": 46 jobs, 14 vans out, 2 emergencies ("AC not cooling · villa · 3 kids"), AED 104,500 booked; job #7741 Tom R. highlighted; floating "Booked 1:04 AM · #7741 · Tom R. · AED 99 deposit paid", "Van 7 · Ryan · 12 min away · Tom messaged ✓", "Paid on site · 8:12 AM · AED 880 · Apple Pay".
- **Pain 1:** "7 missed calls overnight… Two were AC failures. Both booked someone else by 7 AM."; WhatsApp auto-reply (was iMessage text-back) at 1:02 AM.
- **Pain 2:** WhatsApp owner ↔ Ryan about Linda Park's 15-year-old split AC "she'll think about it" → "she went with Desert Breeze AC 🙃"; quote Q-2318: Split 1.5-ton AED 2,450 (Tabby 4 × AED 613) · **Inverter 2-ton AED 3,200 (4 × AED 800, most chosen)** · Ducted upgrade AED 9,800 (Tamara 12 months).
- **Pain 3:** Zoho Books unpaid **AED 67,650**; paid AED 880 (AED 979 − AED 99 deposit) "gas top-up + capacitor", photos, Zoho synced, "Peak Care AMC offered".
- **Journey:** 01 "Found at 1 AM" "ac repair near me" (competitors "Closed · opens 8 AM"); 02 booking (problem "AC blowing warm air", 2 photos, 7–8 AM Ryan · Van 7, AED 99 deposit); 03 tech app (job #7741, villa gate code → "community gate: show booking QR", parts in van ✓); 04 paid receipt; 05 **"Back before every summer"**: Peak Care AMC AED 49/mo (2 services a year, priority in summer, 15% off parts), members AED 54,900/mo, quote card = homepage Tom R. quote.
- **Behind the vans:** 01 dispatch; 02 estimates AED 235,800; 03 invoices AED 353,700 collected, overdue AED 7,860 (was AED 67,650), financing → Tabby/Tamara; 04 vans & stock (gas cylinders, capacitors, filters) restock AED 4,720 to Al Quoz HVAC Supply; 05 "Today at Peak": AED 104,500 ▲12%, 46 jobs, AED 2,270 avg ticket.
- **Process:** "About 12 weeks, without a van sitting idle." Steps: 01 "A day in the vans (7 missed calls, 11 quotes, AED 67,650 unpaid)"; 03 "booking → Jobber / deposit AED 99 / dispatch van 7"; 05 go-live order stays.
- **Case:** Peak Cooling · Dubai & Sharjah · 14 vans: "From missed calls to a full board by 8 AM."; metrics +31% booked jobs · 1.4 days to get paid (was 34) · 4.9★ 640 reviews; quote "Half our emergency jobs book themselves overnight now. In August, that's everything."
- **FAQ:** "Leave Jobber or Excel?" (no); "Who answers emergency calls at night?" (WhatsApp auto-reply + optional AI receptionist); "Won't a call-out deposit put customers off?"; "Can customers pay over time?" (Tabby/Tamara); "Do AMC contracts renew automatically?" (replaces a financing duplicate).

### 8.20 Phone repair (`industry-phone-repair.html`)
- **Kicker:** "Websites, instant quotes and repair tracking for phone repair shops in Dubai".
- **Chips:** Works with RepairDesk · Zoho Books · WhatsApp Business · Google Business Profile.
- **Stores:** Deira / **Karama** (hero store, was Eastside) / City Centre.
- **Hero:** "Karama, Tue 13 Oct": AED 11,680 ▲15%, 6 trade-ins AED 6,830; floating "Transfer T-208 · 4 screens · Deira → Karama · AED 1,600 not spent".
- **Pain 1:** Instagram DMs incl. one in Arabic ("كم سعر شاشة ايفون 13؟"); instant price iPhone 13 screen AED 449.
- **Pain 2:** "Their phone is on my bench, so they call from work" stays; status "Pay AED 449 · Apple Pay".
- **Pain 3:** **WhatsApp** group "FixPoint stores (3)" (was iMessage); "just ordered 4 from PartsHub, AED 1,600"; dead stock AED 19,100.
- **Journey:** 01 Google results (Karama 4.9 · 302, ~15 min wait, AED 449 in stock; competitor "Cell Doctor Deira"); 02 price + book 10:00 AM; 05 trade-in values per §4, refurbished iPhone 15 AED 2,199, store credit AED 1,265.
- **Behind the bench:** parts dead stock AED 2,350 (was AED 19,100); trade-ins AED 151,700 credit; warranty supplier credit AED 1,510; "Today at FixPoint": AED 11,680, revenue by store Deira AED 4,550 / Karama AED 4,330 / City Centre AED 2,800.
- **Case:** FixPoint · Dubai · 3 stores.
- **FAQ:** "Customer data and passcodes" + "UAE PDPL" mention.

## 9. Verification (what "done" means for each page)

A page is done when all of these pass:
1. **UAE audit** (`docs/superpowers/tools/uae-audit.js`): no US leftovers in the rendered page text (USD amounts, US cities/states, US phone formats, US-only platforms, iMessage, US time zones, imperial units, US holidays, "US businesses"); required items present (AED prices, WhatsApp link, H1 kicker, plain-English block, `data-nosnippet` ≥ 3, "Example project" chip, exactly one `<h1>`).
2. **Visual check** (`verify.js`): screenshot of every section, every tab and every hover state; zero `pageerror`s and zero console errors.
3. **Text-size audit** (`text-audit.js`): no mockup with median on-screen text "TOO SMALL" (< 7 px); same or better than the US version.
4. **Looks like the UAE:** every mockup passes the §6.9 checklist in the screenshots (reviewer ticks each mockup).
5. **Spec updated:** the page's spec says UAE, matches the mockup, and its "Consistency with homepage" table is re-checked against the AED homepage.

## 10. Open items for the owner
1. Approve the AED prices (§5) and the brand facts (§4), especially renaming **Peak Plumbing → Peak Cooling** and Apex's owner **Rick → Rashid**.
2. WhatsApp number, trade-licence number and free-zone name for footer and CTAs.
3. Route renames: `/services/website-design` and `/services/ai-whatsapp-automation`.
4. Which integrations we can truly claim (Foodics, Fresha, CleanCloud, RepairDesk, Jobber, Zoho, WPS providers, ASPs).
5. Licensed UAE photos to replace Unsplash (Dubai streets, storefronts, local staff and customers).
6. Arabic RTL versions of the top pages: separate spec once these English pages are approved.
