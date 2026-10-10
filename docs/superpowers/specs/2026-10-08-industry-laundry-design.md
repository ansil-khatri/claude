# Industry Page: Laundry & Dry Cleaning — Design Spec

- **Date:** 2026-10-08 · **UAE localization:** 2026-10-10 (per `2026-10-09-uae-localization-design.md` §8.17; US version in `specs/us/`)
- **Status:** Mockup localized for Dubai + UAE, waiting for owner review
- **Market:** Dubai + UAE
- **Route:** `/industries/laundry`
- **Reference mockup:** `docs/superpowers/mockups/industry-laundry.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` and the industry template in `2026-10-08-industry-auto-repair-design.md`. Only page-specific content is recorded here.

**Positioning:** pickup and delivery, driver routes with building and concierge notes, tagged intake and per-kilo billing, subscriptions and commercial accounts (gyms, hotels, holiday homes, spas) for UAE laundries, built on top of their POS (CleanCloud or similar).

**Story:** the machines run all day, so does the phone → three leaks (WhatsApp orders, drivers messaging for towers and concierges, "lost" items) → follow Daniel K. (Dubai Marina) from Google to a weekly plan → the back office → "usually no custom software" → 12 weeks without missing a pickup → FreshFold case → price → objections → call.

**Mockup mix:** light: orders board, routes with map, commercial accounts, subscriptions, intake tablet (dark scale panel), WhatsApp chats list, WhatsApp driver chat, Google reviews, Google local results, pickup scheduling, intake list, subscription plan, tracking; dark: driver app, machines monitor, owner's report, lock screen. Booking used once (pickup scheduling). Class prefix: `lf-` on top of the shared `au-` industry template.

---

## IL1 · Hero (dark panel)
- **Breadcrumb:** Industries / Laundry & dry cleaning
- **H1 kicker:** "Pickup and delivery apps and software for laundries in Dubai & UAE"
- **H1:** "Your machines run all day. **So does your phone.**"
- **Sub:** Pickup and delivery apps, routes for your drivers, per-kilo orders that bill themselves and commercial accounts on autopilot. Built for laundromats, wash-and-fold and dry cleaners, connected to the POS you already use.
- **CTAs:** Book a free call · WhatsApp us ("Hi, I'm on your laundry page") · See what we build
- **Chips:** Works with CleanCloud · Zoho Books · WhatsApp Business · Google Business Profile
- **Visual:** orders board (Dubai Marina, Tue 13 Oct: 86 orders, **560 kg** ▲12%, 4 due in 2 h, 98% on time, **AED 15,830** charged; #2241 Daniel K. 6.6 kg · AED 264) at 0.7× + tracking phone (Imran, 8 min).
- **Floating cards:** "Weighed · #2241 · 9:12 AM · 6.6 kg + 7 items · AED 264 charged" · "Route B · Imran · 7 of 18 stops · on time" · "App Store · FreshFold · ★ 4.8 · 1,240 ratings".

## IL1b · In plain English
"We build pickup and delivery for UAE laundries: a customer app in English and Arabic, a driver app with building and concierge notes, per-kilo orders weighed and charged automatically, and monthly billing for hotels, gyms and holiday homes. It connects to CleanCloud or the POS you use. Online pickup starts from AED 7,900; the full laundry upgrade takes about 12 weeks." Chips: From AED 7,900 · Time 2–12 weeks · Languages English + Arabic · Based in Dubai.

## IL2 · Sound familiar?
| Quote | Before | After | Cost | Fix |
|---|---|---|---|---|
| "Every pickup starts with a WhatsApp message and a sticky note." | WhatsApp Chats: Anna K. (Princess Tower), **Rashed A. in Arabic** «وين طلبي؟ صار لي يومين أنتظر» ("where's my order? I've been waiting two days", `dir="rtl"`), Marina Fitness Club, Mel C., Jen P., Daniel K. ("pickup in Dubai Marina?"); "23 unread before 9 AM" | Tracking: "Imran is on the way · 8 min", order #2241 · back by Wed 6–8 PM | 23 unread chats by 9 AM. | Pickups in the app in 30 s + live map. |
| "My drivers message me for every tower and every concierge." | WhatsApp with Imran (driver): "which tower? Marina Gate 1 or 2?", "concierge won't let me up 😩", "can you do Princess Tower first then?" | Dark driver app: Route B · Imran · 7 of 18, next stop Princess Tower, Apt 3302; "Card at reception · building access", "Concierge · if not home"; stops Marina Gate 2 (Daniel), Marina Fitness Club service entrance, Cluster D JLT | Imran messaged 9 times; 2 missed pickups. | Driver app with ordered stops, building and concierge notes, photo at every door. |
| "A customer says we lost her shirt…" | Google reviews FreshFold Dubai Marina 4.3 (212) | "We've got your order": 6.6 kg · AED 99 (AED 15/kg), shirts AED 45, blazer AED 45, duvet AED 75 | AED 1,250 in refunds; unanswered 1-star. | Weighed, tagged, photographed at intake. |

## IL3 · Journey: "Follow one customer, from his first pickup to 'I haven't done laundry in a year.'"
"Example project · illustrative numbers" chip under the stage.

| # | Tab | Headline | Mockups (UAE values) |
|---|---|---|---|
| 01 | Found on Google | Daniel searches "laundry pickup near me." You're first. | FreshFold site (`EN · ع`, AED 15/kg) + Google results: FreshFold Dubai Marina 0.6 km, Clean Spin 1.4 km, Marina Dry Cleaners 2.1 km |
| 02 | Pickup scheduled | He schedules a pickup in 30 seconds. | Pickup: **Marina Gate 2, Apt 1804** · "leave with concierge if I'm out" · W&F AED 15/kg · bedding from AED 75 · Tuesday 13 Oct 8–9 AM · back Wed 6–8 PM + tracking (Imran) |
| 03 | Weighed & tagged | Every bag weighed, every shirt photographed. | Intake tablet: scale **6.6 kg** · AED 15/kg = AED 99; items AED 45/45/75/99; card on file · incl. VAT 5% · **AED 264.00**; results "AED 0 lost-item refunds · 6.6 kg charged exactly" |
| 04 | Delivered & paid | Back at his door the next evening, already paid. | Driver app + lock screen ("Left with your concierge", "Weighed: 6.6 kg + 7 items. AED 264 charged (incl. VAT)") |
| 05 | Every Tuesday, on autopilot | Three weeks later, he never schedules again. | Plan: Weekly Fresh **AED 549/mo**, **24 of 36 kg**, AED 790 saved, "Give AED 75, get AED 75", DANIEL20 + subscriptions (318 plans, **AED 152,800 MRR**) |

## IL4 · Behind the counter (dark, 5 tabs)
01 Orders in production (kilos per order, AED per order; CleanCloud or your POS) · 02 Routes & drivers (**66 km** −23%, Imran's Route B through Cayan Tower, Marina Gate 1/2, Marina Fitness Club, Princess Tower, JBR Stays, Al Barsha Barbers, Marina Promenade; "WhatsApp sent ✓") · 03 Commercial accounts (38 accounts, **AED 90,300/mo**, **4,270 kg**: Marina Fitness Club AED 7/kg · 15 days; JBR Stays (holiday homes, per turnover); Bloom Day Spa AED 8/kg · 30 days; Al Barsha Barbers flat AED 1,030/mo; JLT Yoga Co. overdue; Marina Kitchen AED 6.60/pc) · 04 Machines (AED 4,715 self-serve, W2 top earner AED 350; WhatsApp alert for W8) · 05 Owner's daily report ("Today at FreshFold": **AED 43,400** ▲16%, **3,400 kg**, kilos by branch: Dubai Marina, JLT, JVC, Business Bay, Al Barsha).

## IL5 · Honest choice
Laundry POS alone (CleanCloud · Laundry POS) · **Your POS + [Brand]** · Fully custom. Budget: AED 300–1,000 a month in fees / from AED 49,000 + your current POS / from AED 105,000.

## IL6 · Process
Week 1 A day on your route (23 chats, 9 driver messages asking which tower, 2 missed pickups) · Weeks 2–4 Figma · Weeks 5–9 Build and connect (`scale order.2241 → 6.6 kg`, `charge AED 264.00`, `route B · 18 stops · 66 km`) · Week 10 Train · Weeks 11–12 Go live · Ongoing (+212%).

## IL7 · Case study: FreshFold · Dubai Marina & JLT · 6 branches
"Example project" chip. "From a paper order book to an app." · +212% online orders · −50% phone calls · 4.8★ App Store, 1,240 ratings · quote unchanged.

## IL8 · Pricing (placeholders, excl. 5% VAT)
Get orders from **AED 7,900** (WhatsApp review requests) · **Full laundry upgrade** from **AED 49,000** · Multi-location from **AED 105,000**.

## IL9 · FAQ
Do I have to leave CleanCloud? (no) · **How do you charge by the kilo before we weigh it?** (card saved, charged after the scale, receipt on WhatsApp) · Drivers on their own phones (stays) · Commercial accounts (gyms, hotels, holiday-home operators, spas, restaurants; kilos per account; 15- or 30-day terms) · App or website · Ownership.

## IL10–11 · Go deeper + CTA
Customer & driver apps · Card on file & subscriptions (by the kilo, Apple Pay, Tabby) · Automation & ERP (Zoho Books) · Local SEO. CTA + WhatsApp pill; booking Mon–Fri 10:00 AM–5:00 PM GST, "Google Meet or in person in Dubai", "Prefer WhatsApp?".

### UAE visual check (2026-10-10)
- [x] Money: AED; intake shows "incl. VAT 5%"; pricing excludes VAT
- [x] Addresses / areas: Marina Gate 1/2, Princess Tower, Cayan Tower, Marina Promenade, Cluster D JLT; branches Dubai Marina, JLT, JVC, Business Bay, Al Barsha
- [x] Units: kg and km only (no lb/mi)
- [x] Chat: WhatsApp chats list and driver chat (no iMessage); concierge/access-card notes instead of gate codes and doormen
- [x] Language: Arabic customer message (RTL) in the chats list; `EN · ع` on the FreshFold site
- [x] Platforms: CleanCloud, Zoho Books, WhatsApp Business; Tabby in related
- [x] People: Imran (driver), Luis, Daniel K., Rashed A.
- [x] Proof labelled: Example chips on journey and case
- Checks: `uae-audit` PASS (10 states) · `verify` OK, 0 errors, 0 overflow · `text-audit` PASS

---

## Consistency with homepage (AED)
| Item | This page | Homepage / UAE spec §4 |
|---|---|---|
| Location | Dubai Marina & JLT · 6 branches | SITES ✓ |
| Driver | Imran (Luis on route C) | UAE spec §4 ✓ |
| Wash & fold | AED 15 / kg | SITES ✓ |
| Duvet / dry cleaning | AED 75 / blazer AED 45 (dry cleaning from AED 18) | ✓ |
| Daniel K. | Dubai Marina, Marina Gate 2 Apt 1804 | UAE spec §6.9 ✓ |
| Order #2241 | 6.6 kg + 7 items · AED 264 incl. VAT | UAE spec §8.17 says AED 296 — recomputed from item prices (99 + 45 + 45 + 75) |
| Prices | AED 7,900 / 49,000 / 105,000 | ✓ |

## Open items
- Confirm integrations with CleanCloud and with scales / machine card readers before claiming them.
- Arabic customer message needs a native-speaker check.
- Item photos reuse the checked laundry photos; replace with real intake photos.
- Commercial account names are fictional.
