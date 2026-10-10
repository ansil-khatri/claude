# Industry Pages — Overview & Template Spec

- **Date:** 2026-10-08
- **Status:** 6 of 6 pages built, waiting for owner review (last updated 2026-10-10)
- **Market:** Dubai + UAE. UAE localization per `2026-10-09-uae-localization-design.md` §8.14–8.20, one page per task (T16 auto repair, T17 salons, T18 laundry, T19 restaurants done 2026-10-10; T20–T21 to follow). US version in `specs/us/`.
- **Routes:** `/industries/<slug>`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` (design system §3, service template §5, accessibility/responsive §6).
- **Page specs (full copy and mockups per section):**
  - Auto repair shops: `2026-10-08-industry-auto-repair-design.md` · mockup `industry-auto-repair.html`
  - Salons & spas: `2026-10-08-industry-salons-design.md` · mockup `industry-salons.html`
  - Laundry & dry cleaning: `2026-10-08-industry-laundry-design.md` · mockup `industry-laundry.html`
  - Restaurants: `2026-10-09-industry-restaurants-design.md` · mockup `industry-restaurants.html`
  - Home services: `2026-10-09-industry-home-services-design.md` · mockup `industry-home-services.html`
  - Phone repair: `2026-10-09-industry-phone-repair-design.md` · mockup `industry-phone-repair.html`

This document records what all industry pages share and how they relate. Page-specific copy lives in the page specs.

---

## 1. Purpose

A service page sells **one service to many industries**. An industry page sells **everything one industry needs**, in that owner's language: website, booking/ordering, payments, apps, automation and back-office tools, built around the software they already run.

The visitor should think: "they've seen how my shop actually works." So every page:
- opens with the owner's daily frustration, not a service list;
- follows **one named customer** through the business, screen by screen;
- shows the **back office** the customer never sees (the owner's real day);
- recommends **not** replacing their existing industry software ("Usually, no").

## 2. Template (11 sections)

Same shell, CSS and motion as the service template; sections 3 and 4 differ.

| # | Section | What's on it | Differs from service template? |
|---|---|---|---|
| 1 | **Hero** (dark panel) | Breadcrumb `Industries / <industry>`; H1 = owner's frustration, second sentence in lime; sub; CTAs "Book a free call" + "See what we build"; chips "Works with <their software>…"; hero visual = a **light back-office window** at 0.7× + one phone + 3 floating cards | Same structure |
| 2 | **Sound familiar?** "What <owners> tell us on the first call." | 3 hover/tap before → after cards with real phone screens | Same |
| 3 | **Customer-journey showcase** | 5 tabs = 5 steps one named customer goes through (get found → get booked/ordered → service moment → get paid → come back). Tabs + arrows + numbered tabs + 7 s autoplay with progress bar. Left: step label, headline, story, 2 results, chips. Right: 1–2 phones + a cropped window + 1 floating card. Stages alternate pastel and deep. | **Yes** (service pages: showcase by industry) |
| 4 | **Behind the counter** (dark panel, 5 tabs) | Back-office screens: board/schedule, a second operation, money (payroll/invoices/accounts), a physical-ops screen (parts/retail/machines), owner's daily report phone (dark) | **Yes** (service pages: "What it can do") |
| 5 | **Honest choice** "Do you need custom software? Usually, no." | Their software alone · **their software + [Brand]** (recommended, lime) · fully custom. Rows: best for, what customers see, time to launch, budget, who owns the customer list | Same structure, fixed comparison |
| 6 | **Process** (pinned, horizontal) "About 12 weeks, without <disrupting the business>." | 01 A day at your counter (what we counted) · 02 Figma · 03 Build and connect (code log) · 04 Train your team · 05 Go live one piece at a time · 06 Monthly check-up (chart) | Same |
| 7 | **Case study** (dark panel) | The industry's concept brand; problem, what we built, 3 metrics, owner quote; owner report phone + one customer phone; glow in the brand color | Same |
| 8 | **Pricing** | Light "Get found/booked/orders" **from AED 7,900 · 2–4 weeks** · lime "Full <industry> upgrade" **from AED 49,000 · ~12 weeks** · dark "Multi-location" **from AED 105,000 · 14–20 weeks** (all excl. 5% VAT, lead says so); "what changes the price" chips | Same (values follow homepage) |
| 9 | **FAQ** | 6 questions: do I have to leave <their software>, will my team use it, one industry-specific worry, one industry-specific workflow, app vs website, who owns the data | Same |
| 10 | **Go deeper** | 4 related service pages + "Other industries" row | Renamed from "Often paired with" |
| 11 | **CTA + footer** | "Tell us how your <business> runs today. **30 minutes**, and you'll know what to fix first." + booking widget with local time zone | Same |

## 3. Rules every industry page follows

- **One named customer per page**, consistent across hero, pains, journey and back office (Marcus T. / Jess M. / Daniel K. / Olivia R. / Tom R. / Luis G.). The same order or visit number appears on several screens (RO #4821, ticket #2291, order #2241, order #311, job #7741, ticket #4471).
- **Booking appears at most once** (one journey tab). Everything else is operations: boards, inspections, payroll, inventory, routes, invoices, machines, reports.
- **Mix light and dark mockups.** Back-office windows are light; one dark phone (owner's report) and one dark app per page; journey stages alternate pastel and deep.
- **Owner's daily report** (tab 05) is shared: dark phone, revenue + sparkline, 4 KPIs in the industry's own terms (car count/ARO, utilization/rebooking, pounds/on-time), bars per tech/stylist/store, in the brand accent.
- **Real-size rendering:** desktop windows are 1280 px wide, tablets 1024 px and phones 390×844. They are scaled to ≥ 0.6× and cropped to the part that tells the story. Median on-screen text inside a mockup is ≥ ~8 px.
- **Homepage is the source of truth** for brand facts and prices (see §5).
- **Integrations are claims to verify**: every "Works with …" chip and FAQ answer is listed as an open item.
- **UAE template elements (all six pages):** H1 kicker, "In plain English" band after the hero, WhatsApp us in hero / nav / closing CTA, "Example project · illustrative numbers" chip on the journey stage and the case study, `data-nosnippet` on mockups, WhatsApp chats instead of SMS/iMessage, booking widget Mon–Fri 10:00 AM–5:00 PM "Times shown in Dubai time (GST)" + "Prefer WhatsApp?" line, hero CTAs with 22px padding (`.sp-hp .ctas`, from auto repair).

## 4. The six pages at a glance

| | Auto repair | Salons & spas | Laundry & dry cleaning |
|---|---|---|---|
| Brand · city | Apex Auto Works · Al Quoz, Dubai · 9 bays | Maison Rose · Jumeirah, Dubai · 8 stylists | FreshFold · Dubai Marina & JLT · 6 branches |
| Accent | orange `#f97316` | rose `#b4536a` | blue `#2f6bff` |
| H1 | You run a great shop. **The front desk is running you.** | Saturday is fully booked. **Tuesday is a different story.** | Your machines run all day. **So does your phone.** |
| Works with | your garage software, Zoho Books, WhatsApp Business, Google Business Profile | Fresha, Booksy, Vagaro, Instagram | CleanCloud, Zoho Books, WhatsApp Business |
| Pains | status calls · work declined on WhatsApp · invisible on Google (Al Quoz) | empty weekdays · no-shows · Instagram DMs | WhatsApp orders · drivers texting · "lost" items |
| Customer | Marcus T., 2019 Nissan Patrol (Dubai plate D 48210) | Jess M., balayage before a wedding | Daniel K., Marina Gate 2, Dubai Marina |
| Journey | Found on Google → Booked online → Inspection approved → Paid on WhatsApp → Back in 10,000 km | Found on Instagram → Booked with a deposit → In the chair → Checkout & retail → Back in 6 weeks | Found on Google → Pickup scheduled → Weighed & tagged → Delivered & paid → Every Tuesday, on autopilot |
| Back office | Shop board · Tech inspections · Parts & margins · Invoices & payouts · Owner's report | Schedule & chair time · Memberships & gift cards · Commissions & payroll · Retail & inventory · Owner's report | Orders in production · Routes & drivers · Commercial accounts · Machines & capacity · Owner's report |
| Case metrics | AED 1,480 ARO (was AED 1,170) · −52% status calls · +212 reviews | −64% no-shows · 3.4× rebookings · 87% utilization | +212% online orders · −50% calls · 4.8★ App Store |
| Owner | Rashid A. | Sarah M. | "FreshFold owner" (no name on homepage) |
| CSS prefix | `au-` (shared template) | `sl-` | `lf-` |

| | Restaurants | Home services | Phone repair |
|---|---|---|---|
| Brand · city | Ember Kitchen · JLT, Dubai · 90 seats | Peak Plumbing · Denver, CO · 14 trucks | FixPoint · Miami, FL · 3 stores |
| Accent | amber `#d97706` (dark warm brand) | blue `#1d6fd6` | green `#10b981` |
| H1 | The kitchen is full every night. **The apps keep 30% of it.** | You're under a sink. **Your phone is ringing again.** | You fix a screen in 45 minutes. **"How much?" takes all day.** |
| Works with | Foodics, Talabat, Deliveroo, Careem, Eat App | ServiceTitan, Jobber, Housecall Pro, QuickBooks, Google Local Services | RepairDesk, RepairShopr, Square POS, Shopify POS, QuickBooks |
| Pains | 30% app commission · Friday no-shows · 86'd items still selling | missed calls at night · "I'll think about it" quotes · 34 days to get paid | price DMs · "is it ready?" calls · parts bought twice |
| Customer | Olivia R., Dubai Marina | Tom R., Washington Park (homepage quote) | Luis G., iPhone 13 |
| Journey | Found on Google → Ordered direct → On the line → Picked up & paid → The usual, please | Found at 1 AM → Booked & deposit paid → On the way → Fixed & paid → Back every fall | Found on Google → Priced & booked → On the bench → Ready & paid → Trades in next year |
| Back office | Every order, one screen · Menu & 86 · Food cost & inventory · Shifts & tip pool · Owner's report | Dispatch board · Estimates & follow-ups · Invoices & payments · Trucks & stock · Owner's report | Repair tickets · Parts across stores · Trade-ins & refurbished · Warranty & quality · Owner's report |
| Case metrics | 0% commission · +38% repeat orders · AED 47,700 kept in October | +31% booked jobs · 1.4 days to get paid · 4.9★ 640 | 45 min avg repair · +57% trade-ins · 4.8★ 930 |
| Owner | Marco Bellini (payments page) | "Peak Plumbing owner" (no name approved) | "FixPoint owner" (no name approved) |
| CSS prefix | `ek-` | `hs-` | `fp-` |

## 5. Consistency with homepage

| Item | Industry pages | Homepage / approved pages | Status |
|---|---|---|---|
| Launch / Build prices | AED 7,900 · 2–4 weeks / AED 49,000 · ~12 weeks | same | ✓ |
| Apex | Al Quoz, Dubai, 4.9 · 860, owner Rashid, ARO AED 1,480 | SITES + UAE spec §4 | ✓ (SEO page signs as Rick until T13) |
| Maison Rose | Austin, 4.9 · 312, Sarah M., −64% no-shows, $85 deposit, "3 no-shows · $540", case headline + quote | same | ✓ |
| FreshFold | Chicago, 6 locations, +212%, −50% calls, 4.8★ 1,240, Mike, $2.00/lb, case headline + quote | same | ✓ |
| Multi-location price | from AED 105,000 | matches mobile-apps "Custom platform" (UAE spec §5) | ✓ |
| Ember Kitchen | Brooklyn, 4.8 · 2,100, 90 seats, order #311 $71, 30% / $1,446 commission, 0% / +38%, Marco Bellini, $13k kept | homepage SITES, mobile-apps, payments | ✓ |
| Peak Plumbing | Denver, 4.9 · 640, 14 trucks, $49 call-out deposit, Tom R. + his quote | homepage | ✓ |
| FixPoint | Miami, 4.8 · 930, 45 min, +57% trade-ins, $149 screen, Downtown/Eastside/Mall, #4471, T-208 | mobile-apps, AI, SEO, automation | ✓ (AI page's "Brickell" store filter differs, see open items) |

## 6. Shared implementation notes (for the Next.js build)

- One `IndustryPage` layout with the 11 sections; per-industry content in `messages/en.json` under `industries.<slug>.*`.
- Journey and back-office mockups are components fed by data (customer, order number, brand theme). The brand theme comes from the shared `SITES` config.
- Journey showcase: tabs, arrows, 7 s autoplay that pauses after user interaction and only advances while visible; tab controls are never hidden by scroll animation.
- Scaled mockups use one `crop(width, height, scale, offsetX, offsetY)` helper; re-fit when a hidden tab opens.

## 7. Open items (all industry pages)

- **Integrations:** confirm we can integrate Tekmetric, Shopmonkey, Mitchell 1, Square Appointments, Vagaro, Boulevard, CleanCloud, Cents, SPOT, laundry scales, machine card readers, Toast, Square for Restaurants, Clover, OpenTable, DoorDash Drive, ServiceTitan, Jobber, Housecall Pro, Google Local Services, RepairDesk and RepairShopr before showing "Works with".
- **Photos:** limited checked Unsplash IDs → repeated avatars (salon) and item photos (laundry); auto inspection photo is a wheel with a BMW badge. Replace with licensed photos.
- **Names:** supplier, commercial-account and competitor names are fictional; product brands (Olaplex, K18, Redken, etc.) to be checked.
- **Owner names for FreshFold, Peak Plumbing and FixPoint** are not on any approved page; currently "<brand> owner".
- **FixPoint store names:** the AI service page uses a "Brickell" store filter; SEO, automation and the phone-repair page use Downtown / Eastside / Mall.
- **Volt & Wire** is not used on the home-services page (one company per story); add it as a second example if electricians should be shown explicitly.
- Real prices, timelines, case studies and reviews (as for all pages).
