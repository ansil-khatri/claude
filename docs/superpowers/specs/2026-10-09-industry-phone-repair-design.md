# Industry Page: Phone Repair — Design Spec

- **Date:** 2026-10-09
- **Status:** Mockup built, waiting for owner review
- **Route:** `/industries/phone-repair`
- **Reference mockup:** `docs/superpowers/mockups/industry-phone-repair.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` and the industry template in `2026-10-08-industry-pages-design.md`. Only page-specific content is recorded here.

**Positioning:** instant repair prices and booking, status texts to any number, a bench screen with check-in photos and test checklists, one stock list with transfers between stores, trade-ins and refurbished resale, and warranty tracking for phone, tablet and computer repair shops, built on top of their repair POS (RepairDesk, RepairShopr).

**Story:** you fix a screen in 45 minutes but "how much?" takes all day → three leaks (price DMs, "is it ready?" calls from work phones, stores buying parts another store has) → follow Luis G. from a cracked screen to trading in the same phone a year later → behind the bench → "usually no custom software" → 12 weeks without closing the counter → FixPoint case → price → objections → call.

**Mockup mix:** light: repair-ticket board, parts & stock window, trade-ins window, Instagram DMs, instant price + booking, iOS Recents, order status (ready / booked), iMessage store group, transfer approval, Google local results, trade-in offer, Apple Pay sheet; dark: bench tablet, warranty & quality window, owner's report. Booking used once (instant price → 10:00 AM). Class prefix: `fp-` on top of the shared `au-` industry template.

---

## IP1 · Hero (dark panel)
- **Breadcrumb:** Industries / Phone repair
- **H1:** "You fix a screen in 45 minutes. **"How much?" takes all day.**"
- **Sub:** Instant repair prices online, tickets that update the customer by themselves, parts that move between stores before you run out, and trade-ins priced in seconds. Built for phone, tablet and computer repair shops, connected to the POS you already use.
- **Chips:** Works with RepairDesk · RepairShopr · Square POS · Shopify POS · QuickBooks
- **Visual:** repair tickets "Eastside, Tue Oct 13" (23 repairs ▲4, 45 min ▼12, 6 trade-ins $1,860, $3,180 ▲15%, 0 "is it ready?" calls; Checked in / Diagnosing / Waiting for part / On the bench / Ready with #4471 Luis G. highlighted) at 0.7× + "Your repair · Ready" phone.
- **Floating cards:** "Ticket #4471 · Luis G. · 10:43 AM · iPhone 13 · ready · 9 of 9 tests passed" · "Transfer T-208 · 4 screens · Downtown → Eastside · $436 not spent" · "App Store · FixPoint · ★ 4.8 · 930 ratings".

## IP2 · Sound familiar?
| Quote | Before | After | Cost | Fix |
|---|---|---|---|---|
| "Half my messages are 'how much for an iPhone 13 screen?'" | Instagram DMs (Primary 41): "how much iphone 13 screen??", "do u fix samsung s23 back glass"…; toast "41 price questions this week… 6 walked in." | Instant price: iPhone 13 screen $149 · ~45 min · 6 in stock at Eastside · wait ~15 min; Walk in / 10:00 AM / 11:30 AM | 41 price DMs, 6 walk-ins. | Prices for every model with stock, wait time and booking. |
| "Their phone is on my bench, so they call from work: 'Is it ready?'" | iOS Recents: Luis G. (work phone), Ana P. (sister), Mia R. (office)…; toast "23 'is it ready?' calls on Saturday" | "Your iPhone 13 is Ready · tested · 10:43 AM", checked in 9:58, diagnosed $149, 9 tests passed, Pay $149 · Apple Pay | 23 calls answered by techs mid-repair. | Status texts to any number or email. |
| "We ordered screens. The other store had nine on the shelf." | iMessage "FixPoint stores (3)": Eastside out, Mall needs theirs, "just ordered 4 from PartsHub, $436", Downtown "we have 9 in the back 😅" | Transfer T-208: Downtown 9 → Eastside 0 (4 booked); buy new $436 · 2 days vs move $0 · tomorrow 10 AM; Approve | $5,200 of parts unsold; screens bought twice. | One stock list; transfers before orders. |

## IP3 · Journey: "Follow one customer, from a cracked screen to trading in his next phone."
| # | Tab | Stage | Headline | Results | Mockups |
|---|---|---|---|---|---|
| 01 | Found on Google | pastel mint | Luis searches "iPhone screen repair near me." You're first. | #1 · +186% calls and walk-ins (= SEO page) | FixPoint website + Google local results (Eastside 4.9 · 302, ~15 min wait, $149 in stock) |
| 02 | Priced & booked | deep green | He sees $149, picks 10:00 AM, and goes to work. | 10 sec to get a price · 0 price DMs | Instant price + "You're booked" status |
| 03 | On the bench | light grey | Sam has the part, the photos and a checklist. | 45 min average repair · 9/9 tests | Dark bench tablet: iPhone 13 Blue 128 GB, check-in photos, part from transfer T-208 (bin E-14), timer 32:10, up next, 9 tests (battery health 88% noted), "Mark ready · text Luis" |
| 04 | Ready & paid | dark green | He walks in, pays with Apple Pay, and is out in two minutes. | 2 min at the counter · 4.9★ Eastside on Google | Ready status + Apple Pay sheet ($149, FixPoint Eastside) |
| 05 | Trades in next year | pastel green | A year later, he trades the same iPhone 13 in, right in the app. | +57% trade-ins · 38% margin after refurb | Trade-in offer (Flawless $420 / **Good $360** / Cracked $190 → $396 store credit with 10% bonus, toward refurbished iPhone 15 $649, IMEI clean, data wipe) + trade-ins window |

## IP4 · Behind the bench (dark, 5 tabs)
01 Repair tickets (as hero) · 02 Parts across stores (1,284 parts, 1 short → transfer, dead stock $640 (was $5,200), 10-min weekly count; per-store table + "Move, don't buy · T-208" approved) · 03 Trade-ins & refurbished (142 this month +57%, $41,300 credit, 38% margin, 64 listed; paid / refurb / price / status incl. one IMEI-blacklisted refusal) · 04 Warranty & quality (dark window: 1.8% comeback rate, $412 supplier credit pending; batch Z-0912 iPhone 14 screens 11.5% returns, pulled from all stores) · 05 Owner's daily report (dark phone "Today at FixPoint": $3,180 ▲15%, 23 repairs, 45 min, 6 trade-ins $1,860, 9 new Google reviews; revenue by store Downtown $1,240 / Eastside $1,180 / Mall $760).

## IP5 · Honest choice
Repair POS alone (RepairDesk · RepairShopr) · **Your POS + [Brand]** (most chosen) · Fully custom. Rows: best for (1–5 stores), what customers see, time (1–3 weeks / ~12 weeks / 4–6 months), budget, customer list ownership.

## IP6 · Process: "About 12 weeks, without closing the counter."
Week 1 A day at your counter (41 price DMs, 23 "is it ready?" calls, 4 screens ordered while Downtown had 9) · Weeks 2–4 Figma (instant price phone, 30 screens) · Weeks 5–9 Build and connect (price → 3 stores / ticket #4471 → RepairDesk / stock T-208) · Week 10 Train (counter, 7 techs, 3 stores, 412 repairs priced) · Weeks 11–12 Go live (prices + booking → status texts + bench → transfers + trade-ins) · Ongoing (+57% trade-ins).

## IP7 · Case study: FixPoint · Miami, FL · 3 stores
"Three stores, one stock list, and no more 'is it ready?'" · Metrics 45 min average repair · +57% trade-ins · 4.8★ App Store, 930 ratings · Quote "Customers used to stand at the counter asking. Now they get a text, walk in, pay and leave." · FixPoint owner · Visual: owner report + ready phone. Glow: green.

## IP8 · Pricing (placeholders)
Get found · Website + repair prices from **$3,900** · 2–4 weeks · **Full repair shop upgrade** from **$14,900** · about 12 weeks · Multi-store platform from **$29,000** · 14–20 weeks. Chips: stores, POS, number of models priced, trade-ins & resale, parts suppliers, data migration.

## IP9 · FAQ
Leave RepairDesk/RepairShopr? (no) · How do online prices stay right when part costs change? · How do customers get updates when their phone is in the shop? · Customer data and passcodes · How are trade-in offers priced (IMEI check, store-credit bonus) · Ownership.

## IP10–11 · Go deeper + CTA
Price pages & booking · Refurbished store (Shopify) · Automation & ERP · Local SEO. CTA "Tell us how your repair shop runs today. **30 minutes**, and you'll know what to fix first." Eastern Time.

---

## Consistency with homepage / approved pages
| Item | This page | Source |
|---|---|---|
| Miami, FL · 4.8 · 930 ratings · 45 min avg repair · +57% trade-ins · iPhone 13 screen $149 · Sam | ✓ | mobile-apps (homepage silent) |
| Trade-in iPhone 13: Flawless $420 / Good $360 / Cracked $190 | ✓ | mobile-apps showcase |
| Ticket #4471 Luis G. iPhone 13 Blue · 23 repairs · $3,180 ▲15% · 6 trade-ins $1,860 · +$36 store-credit bonus logic | ✓ (bonus shown as 10% = $36 → $396) | AI page |
| Stores Downtown / Eastside / Mall · Eastside 4.9 (302) · ~15 min wait · +186% calls and walk-ins | ✓ | SEO + automation pages |
| T-208 · $436 for 4 screens · dead stock $640 (was $5,200) · Sara approves transfers · 1,284 parts | ✓ | automation page |
| Prices | $3,900 / $14,900 / $29,000 | ✓ |

## Open items
- The AI service page shows a "Brickell" store filter; the SEO and automation pages (and this page) use Downtown / Eastside / Mall. Align the AI page if the owner agrees.
- **Owner name** isn't on any approved page; the case quote is credited to "FixPoint owner".
- Confirm integrations with RepairDesk, RepairShopr, parts suppliers and an IMEI blacklist service before claiming them.
- Supplier (PartsHub, CellSource, ZenParts) and competitor (Cell Doctor Miami, Brickell Phone Fix) names are fictional.
- Device photos reuse two checked IDs; replace with real repair photos.
