# Industry Page: Laundry & Dry Cleaning — Design Spec

- **Date:** 2026-10-08
- **Status:** Mockup built, waiting for owner review
- **Route:** `/industries/laundry`
- **Reference mockup:** `docs/superpowers/mockups/industry-laundry.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` and the industry template in `2026-10-08-industry-auto-repair-design.md`. Only page-specific content is recorded here.

**Positioning:** pickup and delivery, driver routes, tagged intake and per-pound billing, subscriptions and commercial accounts for laundromats, wash-and-fold and dry cleaners, built on top of their POS (CleanCloud, Cents, SPOT).

**Story:** the machines run all day, so does the phone → three leaks (WhatsApp orders, drivers texting for addresses, "lost" items) → follow Daniel K. from Google to a weekly plan → the back office → "usually no custom software" → 12 weeks without missing a pickup → FreshFold case → price → objections → call.

**Mockup mix:** light: orders board (production stages), routes with map, commercial accounts, subscriptions, intake tablet (with dark scale panel), WhatsApp chats, iMessage, Google reviews, Google local results, pickup scheduling, intake list, subscription plan, tracking; dark: driver app, machines monitor, owner's report, lock screen. Booking used once (pickup scheduling). Class prefix: `lf-` on top of the shared `au-` industry template.

---

## IL1 · Hero (dark panel)
- **Breadcrumb:** Industries / Laundry & dry cleaning
- **H1:** "Your machines run all day. **So does your phone.**"
- **Sub:** Pickup and delivery apps, routes for your drivers, per-pound orders that bill themselves and commercial accounts on autopilot. Built for laundromats, wash-and-fold and dry cleaners, connected to the POS you already use.
- **Chips:** Works with CleanCloud · Cents · SPOT · QuickBooks · Google Business Profile
- **Visual:** orders board (Lincoln Park, Tue Oct 13: 86 orders, 1,240 lb ▲12%, 4 due in 2 h, 98% on time, $4,310 charged; columns Picked up / Washing / Drying / Folding / Out for delivery; #2241 Daniel K. highlighted) at 0.7× + tracking phone (Mike, 8 min).
- **Floating cards:** "Weighed · #2241 · 9:12 AM · 14.6 lb + 7 items · $80.69 charged" · "Route B · Mike · 7 of 18 stops · on time" · "App Store · FreshFold · ★ 4.8 · 1,240 ratings".

## IL2 · Sound familiar?
| Quote | Before | After | Cost | Fix |
|---|---|---|---|---|
| "Every pickup starts with a WhatsApp message and a sticky note." | WhatsApp Chats: Anna K., Ricardo D. ("where is my order?"), Lakeview Fitness, Mel C., Jen P. ("lost my shirt again"), Daniel K.; badge "23 unread before 9 AM" | Tracking: map, "Mike is on the way · 8 min", steps, order #2241 · 2 bags · back by Wed 6–8 PM | 23 unread chats by 9 AM. | Pickups in the app in 30 s + live map. |
| "My drivers text me for every address and gate code." | iMessage with Mike: address, gate code, skipped stop, "already passed it 😩" | Dark driver app: Route B · 7 of 18, next stop 2231 N Clark 4B, gate 4471#, doorman, Navigate/Call/Photo, next stops | Mike texted 9 times; 2 missed pickups. | Driver app with ordered stops, gate codes, photo at every door. |
| "A customer says we lost her shirt…" | Google reviews FreshFold Lincoln Park 4.3 (212): Jen P. 1★ "lost my good work shirt…", Tom W. 2★, both "No reply from the owner" | "We've got your order": 14.6 lb · $29.20, itemized shirts/blazer/duvet/bag tags with photos, "Looks right ✓" | $340 in refunds; unanswered 1-star. | Weighed, tagged, photographed at intake; list sent before washing. |

## IL3 · Journey: "Follow one customer, from his first pickup to 'I haven't done laundry in a year.'"
| # | Tab | Stage | Headline | Results | Mockups |
|---|---|---|---|---|---|
| 01 | Found on Google | pastel blue | Daniel searches "laundry pickup near me." You're first. | #1 · 1,186 pickups from search (= SEO page) | FreshFold website + Google local results (Schedule pickup button) |
| 02 | Pickup scheduled | deep blue | He schedules a pickup in 30 seconds. | 30 s · −50% phone calls | Pickup scheduling (1840 N Halsted, W&F + dry cleaning, Tue 8–9 AM, back Wed 6–8 PM, "pay after weighing") + tracking |
| 03 | Weighed & tagged | light grey | Every bag weighed, every shirt photographed. | $0 lost-item refunds · 14.6 lb charged exactly | Intake tablet: scale 14.6 lb, bag tag #2241-A, preferences, 7 items with photos, $80.69, "Send list to Daniel" |
| 04 | Delivered & paid | dark navy | Back at his door the next evening, already paid. | 98% on time · 0 cash at the door | Driver app + lock screen (delivered with photo, $80.69 charged, picked up) |
| 05 | Every Tuesday, on autopilot | pastel mint | Three weeks later, he never schedules again. | $159/month · +212% online orders | Plan screen (Weekly Fresh $159/mo, 52/80 lb, skip, $214 saved, DANIEL20) + Subscriptions window (318 plans, $41,620 MRR, 2 referrals) |

## IL4 · Behind the counter (dark, 5 tabs)
01 Orders in production (orders board) · 02 Routes & drivers (route list + map, 41 mi −23%, 96% in window) · 03 Commercial accounts (38 accounts, $24,600/mo, 9,420 lb; Lakeview Fitness, Wicker Park Stays, Bloom Day Spa, Clark St Barbers, Lincoln Yoga Co. overdue, Halsted Kitchen) · 04 Machines & capacity (dark monitor, 12 machines, W8 out of order alert) · 05 Owner's daily report (dark phone "Today at FreshFold": $11,820 ▲16%, 7,480 lb, 412 orders, 98% on time, 11 new subscribers $1,749/mo, pounds by store).

## IL5 · Honest choice
Laundry POS alone · **Your POS + [Brand]** (most chosen) · Fully custom. Rows: best for, what customers see, time (1–3 weeks / ~12 weeks / 4–6 months), budget, customer list ownership.

## IL6 · Process: "About 12 weeks, without missing a pickup."
Week 1 A day on your route (23 chats, 9 driver texts, 2 missed pickups, 1 "lost" shirt) · Weeks 2–4 Figma (pickup phone, 31 screens) · Weeks 5–9 Build and connect (scale / charge / route log) · Week 10 Train (counter, 4 drivers, production, bag tags) · Weeks 11–12 Go live in steps (intake → driver app → customer app) · Ongoing (+212% online orders).

## IL7 · Case study: FreshFold · Chicago, IL · 6 locations
"From a paper order book to an app." (= homepage) · Metrics +212% online orders · −50% phone calls · 4.8★ App Store, 1,240 ratings · Quote "The app paid for itself in two months. Phone calls dropped by half." (= homepage) · Visual: owner report + driver app. Glow: blue.

## IL8 · Pricing (placeholders)
Get orders · Website + online pickup from **$3,900** · 2–4 weeks · **Full laundry upgrade** from **$14,900** · about 12 weeks · Multi-location from **$29,000** · 14–20 weeks. Chips: stores, POS, driver app, commercial accounts, machine monitoring, data migration.

## IL9 · FAQ
Leave CleanCloud/Cents/SPOT? (no) · Charging by the pound before weighing (card on file, charged after scale) · Drivers on their own phones · Commercial accounts · App or website · Ownership.

## IL10–11 · Go deeper + CTA
Customer & driver apps · Card on file & subscriptions · Automation & ERP · Local SEO. CTA "Tell us how your laundry runs today. **30 minutes**, and you'll know what to fix first." Central Time.

---

## Consistency with homepage
| Item | This page | Homepage / approved pages |
|---|---|---|
| City | Chicago, IL | ✓ |
| Case headline + quote | "From a paper order book to an app." / "paid for itself in two months…" | ✓ |
| +212% online orders, −50% calls, 4.8★ 1,240 ratings, 6 locations | ✓ | ✓ (homepage + mobile-apps) |
| Driver | Mike (Luis on route C) | Mike · 8 min, Luis ✓ |
| Wash & fold | $2.00 / lb | SITES $2.00 / lb ✓ |
| Daniel K. | regular customer, "I haven't done laundry in a year." | SITES quote ✓ |
| Prices | $3,900 / $14,900 | ✓ |

## Open items
- Confirm integrations with CleanCloud, Cents, SPOT and with scales / machine card readers before claiming them.
- Item photos reuse the three checked laundry photos; replace with real intake photos.
- Commercial account names are fictional.
