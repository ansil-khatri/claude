# Industry Page: Restaurants — Design Spec

- **Date:** 2026-10-09 · **UAE localization:** 2026-10-10 (per `2026-10-09-uae-localization-design.md` §8.18; US version in `specs/us/`)
- **Status:** Mockup localized for Dubai + UAE, waiting for owner review
- **Market:** Dubai + UAE
- **Route:** `/industries/restaurants`
- **Reference mockup:** `docs/superpowers/mockups/industry-restaurants.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` and the industry template in `2026-10-08-industry-pages-design.md`. Only page-specific content is recorded here.

**Positioning:** commission-free ordering (site, app, WhatsApp), reservations with deposits, a kitchen screen, menu and sold-out sync across Talabat, Deliveroo and Careem, food cost, tip pool for WPS payroll and a guest list the restaurant owns, built on top of Foodics.

**Story:** the kitchen is full but the apps keep 30% → three leaks (delivery commission, Friday 9 PM no-shows, sold-out items still selling on the apps) → follow Olivia R. (Dubai Marina) from Google to "the usual" → behind the pass → "usually no custom software" → 12 weeks without closing for a night → Ember Kitchen case → price → objections → call.

**Mockup mix:** unchanged from the US version (light windows, dark Ember phones and KDS). Class prefix: `ek-` on top of the shared `au-` industry template. Narrow table cells carry the currency in the column header ("Price (AED)", "App fee (AED)", "Share (AED)") so AED amounts never wrap.

---

## IR1 · Hero (dark panel)
- **Breadcrumb:** Industries / Restaurants
- **H1 kicker:** "Ordering, WhatsApp and back-office software for restaurants in Dubai & UAE"
- **H1:** "The kitchen is full every night. **The apps keep 30% of it.**"
- **CTAs:** Book a free call · WhatsApp us ("Hi, I'm on your restaurants page") · See what we build
- **Chips:** Works with Foodics · Talabat · Deliveroo · Careem · Eat App
- **Visual:** orders window "Orders · tonight, Fri 16 Oct" (86 orders ▲18%, **AED 14,400** direct · 0% commission, **−AED 790** app commission tonight, **AED 169** avg ticket ▲ AED 26, **AED 22,900** catering this week; channels Website / Your app / Talabat / WhatsApp / Deliveroo / Catering / Careem; totals AED 140–6,760, app fees 0 / −72 / −53 / −42) + order-status phone (Cluster D, JLT · 0.6 km).
- **Floating cards:** "Order #311 · Olivia R. · 7:02 PM · AED 245 · direct · 0% commission" · "Fri · 8:02 PM · short rib 86'd · synced to 4 channels in 2.1 s" · "Reservation · Fri 8:30 PM · table for 4 · AED 160 deposit held".

## IR1b · In plain English
"We help UAE restaurants and cloud kitchens take orders without paying 30% to the apps: your own ordering site and app, WhatsApp ordering, reservations with deposits, a kitchen screen, and sold-out items synced to Talabat and Deliveroo in seconds. It works with Foodics. Online ordering starts from AED 7,900; the full restaurant upgrade takes about 12 weeks." Chips: From AED 7,900 · Time 2–12 weeks · Languages English + Arabic · Based in Dubai.

## IR2 · Sound familiar?
| Quote | Before | After | Cost | Fix |
|---|---|---|---|---|
| "Delivery apps take 30% of every order, and they keep the customer." | Merchant payout, week of 5–11 Oct: 128 orders, **AED 17,700** gross, **−AED 5,310** commission (30%), **−AED 660** promos, **AED 11,730** deposited 13 Oct to Emirates NBD ••2210; "0 guest contacts shared" | Ember ordering (JLT): octopus AED 85 · short rib AED 120 · sourdough AED 40 · **AED 245** total incl. VAT, fees AED 0.00, +245 points, Apple Pay | AED 5,310 commission last week, not a single guest contact. | Own site + app, 0% commission. |
| "Friday at 9 PM, four tables are empty. Nobody called." | Tonight (Friday, 9 Oct): 142 covers; no-shows at 9:00–9:15 PM; Haddad and Al Mansoori seated | Hold your table: Fri 16 Oct, **8:30 PM**, 4 guests, **AED 160** deposit (AED 40/guest), free cancel until Thu 8:30 PM, WhatsApp reminder | 3 no-shows: 11 covers, about AED 1,840 of food. | AED 40-per-guest deposit + WhatsApp reminder. |
| "We 86 the short rib at 8. The apps keep selling it until 10." | Google reviews 4.6 (1,812) | "Removed in 2.1 s from Website · App · Talabat · Deliveroo" | AED 780 refunds on Friday. | One tap on "86" updates every channel. |

## IR3 · Journey
"Example project · illustrative numbers" chip under the stage.

| # | Tab | Headline | UAE values |
|---|---|---|---|
| 01 | Found on Google | Olivia searches "wood-fired restaurant near me." You're first. | Ember website (`EN · ع`, AED menu) + results: Ember 0.6 km · AED 150–200; Lake Terrace Trattoria 1.1 km; Cluster T Grill House 1.8 km; "Olivia R. · Dubai Marina" |
| 02 | Ordered direct | She orders on your site, not on an app. **You keep the AED 74.** | "AED 73.50 of her AED 245 would have gone to commission" |
| 03 | On the line | Her ticket hits the hearth the second she pays. | KDS (Fri 16 Oct): late ticket #305 **Talabat**, #315 Deliveroo, "Bump · WhatsApp Olivia" |
| 04 | Picked up & paid | In and out in under a minute, already paid. | "7:24 PM · WhatsApp sent", lock screen +245 points, Wallet AED 245.00 |
| 05 | The usual, please | Two months later, she reorders "the usual" in two taps. | Rewards (usual AED 160, "Give AED 35, get AED 35"), **Tuesday short-rib WhatsApp**, guests window (3,912 guests; Olivia · Dubai Marina · 14 orders · AED 2,980; J. Park "came from Talabat"); "86 orders · AED 14,470 on a slow night" |

## IR4 · Behind the pass (dark, 5 tabs)
01 Every order, one screen (orders flow into Foodics) · 02 Menu & 86 everywhere (Direct / Apps in AED, Talabat and Deliveroo columns, **fresh juices · dine-in only**, Friday brunch roast special, app markup +AED 10) · 03 Food cost & inventory (short rib **AED 36 → AED 40/kg at Al Aweer Fresh Co. (+AED 690/week)**, octopus 2 kg · par 5, butter 1 kg · par 3; "raise to AED 140?") · 04 Shifts & tip pool (tips **AED 10,450** split by hours, labour 29.4%, "Send to WPS payroll"; fine print "Exports a WPS payroll file for your payroll provider every month") · 05 "Tonight at Ember" (Ember Kitchen · JLT, Fri 16 Oct): **AED 36,100** ▲14%, avg check **AED 169**, sales by channel Dine-in AED 19,100 · Pickup AED 10,940 · Direct delivery AED 3,450 · Talabat AED 1,760 · Deliveroo AED 880.

## IR5 · Honest choice
Restaurant POS alone (Foodics · Lightspeed) · **Your POS + [Brand]** · Fully custom. Budget: AED 400–1,200 a month in fees / from AED 49,000 + your current POS / from AED 105,000.

## IR6 · Process
Week 1 A night on the line (AED 5,310 commission) · … · Weeks 5–9 (`order #311 → foodics + kds.hearth`, `payout AED 245.00 fee AED 0.00`) · Weeks 11–12 Go live, **never on a Thursday or Friday night** · Ongoing (+38% repeat orders).

## IR7 · Case study: Ember Kitchen · JLT, Dubai · 90 seats
"Example project" chip. 0% commission · +38% repeat orders · **AED 47,700 kept in October** · Marco Bellini, owner.

## IR8 · Pricing (placeholders, excl. 5% VAT)
Get orders from **AED 7,900** (WhatsApp review requests) · **Full restaurant upgrade** from **AED 49,000** · Group platform from **AED 105,000**. Chip "Own riders or Careem delivery".

## IR9 · FAQ
Do I have to leave Foodics? (no) · **Should I leave Talabat and Deliveroo?** (not right away; move regulars direct) · Kitchen screen · Deposits (only Thursday and Friday nights and larger parties) · App or website · Ownership.

## IR10–11 · Go deeper + CTA
Ordering app & rewards · Payments & deposits · Automation & ERP (Zoho Books) · Local SEO ("dinner near me" in your area). CTA + WhatsApp pill; booking Mon–Fri 10:00 AM–5:00 PM GST, "Google Meet or in person in Dubai", "Prefer WhatsApp?".

### UAE visual check (2026-10-10)
- [x] Money: AED; ordering total "incl. VAT"; pricing excludes VAT; payout to Emirates NBD
- [x] Areas: JLT, Cluster D/T, Dubai Marina; km distances
- [x] Platforms: Talabat, Deliveroo, Careem, Foodics, Eat App, Zoho Books, WPS payroll; no DoorDash/Uber Eats/Toast/Square/Clover/OpenTable/Gusto
- [x] Chat: WhatsApp for ready notices, reminders and the Tuesday campaign; WhatsApp order channel
- [x] Culture: no wine (fresh juices dine-in only; `SITES` app chip "Juices" on all 19 pages), Friday brunch, Thursday/Friday nights, 9 PM dinner
- [x] People: Olivia R., Marco Bellini, Haddad, Al Mansoori
- [x] Proof labelled: Example chips on journey and case
- Checks: `uae-audit` PASS (10 states) · `verify` OK, 0 errors, 0 overflow · `text-audit` PASS

---

## Consistency (AED)
| Item | This page | Source |
|---|---|---|
| Ember · JLT, Dubai · 4.8 · 2,100 · 90 seats | ✓ | SITES / UAE spec §4 |
| Order #311 = AED 85 + 120 + 40 = AED 245 | ✓ | UAE spec §4 |
| Payout AED 17,700 / −5,310 / −660 / 11,730 · 128 orders | ✓ | UAE spec §4 |
| AED 47,700 kept in October · Marco Bellini | ✓ | UAE spec §4 |
| Reservation deposit | AED 160 (AED 40 × 4) | UAE spec §8.18 (its hero card said AED 150; AED 160 used everywhere) |
| Prices | AED 7,900 / 49,000 / 105,000 | ✓ |

## Open items
- Confirm integrations with Foodics, Talabat, Deliveroo, Careem and Eat App (menu sync, order injection) before claiming them.
- Food photos reuse the two checked Ember photos; replace with real dish photos.
- Supplier (Al Aweer Fresh Co.), competitors (Lake Terrace Trattoria, Cluster T Grill House) and staff names are fictional.
