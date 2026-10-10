# Industry Page: Auto Repair Shops — Design Spec

- **Date:** 2026-10-08
- **Status:** Mockup built, waiting for owner review
- **Route:** `/industries/auto-repair`
- **Reference mockup:** `docs/superpowers/mockups/industry-auto-repair.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` (design system §3, template §5, accessibility/responsive §6). Only page-specific content is recorded here.

**Positioning:** everything an independent auto repair shop needs on top of the shop software it already runs (Tekmetric, Shopmonkey, Mitchell 1): getting found, online booking, digital inspections, text-to-pay and service reminders. We don't replace the shop system.

**Story:** the front desk runs the owner → three daily leaks (status calls, declined work, invisible on Google) → follow one customer (Marcus, 2019 Tacoma) through five screens → the back office the customer never sees → "do you need custom software? usually no" → 12 weeks without closing a bay → Apex case study → price → objections → call.

**Industry page template (differs from the service template):** section 3 is a **customer-journey showcase** (tabs = journey steps, not industries) and section 4 is **"Behind the counter"** (shop operations). All other sections keep the service-page structure. Class prefix: `au-` (shared by all industry pages as the industry template), page-specific screens add their own prefix.

**Mockup mix:** light: 1280 shop board (kanban by RO status), 1024 tech tablet inspection, parts & margins table, invoices & payouts, service reminders, Apple Pay sheet, Google local results, iOS Recents; dark: Apex website, online booking phone, inspection report phone header, owner's daily report phone. Booking used once (journey tab 2).

---

## IA1 · Hero (dark panel)
- **Breadcrumb:** Industries / Auto repair shops
- **H1:** "You run a great shop. **The front desk is running you.**"
- **Sub:** Websites, online booking, digital inspections and text-to-pay for independent auto repair shops. Built around how your service writers already work, and connected to the shop software you use today.
- **CTAs:** Book a free call · See what we build
- **Chips:** Works with Tekmetric · Shopmonkey · Mitchell 1 · QuickBooks · Google Business Profile
- **Visual:** light shop board (Tue Oct 13 · 9 bays; KPIs 23 cars, 3 waiting on approval, 7/9 bays, $9,476 billed, $412 ARO; columns Checked in / Inspecting / Waiting approval (RO #4821 Tacoma highlighted, "Sent 11:02 · viewed ✓") / In the bay / Ready) at 0.7× + phone with the customer inspection report.
- **Floating cards:** "Google Maps · ★ 4.9 · 860 reviews · #1" · "Inspection approved · 11:06 AM · ✓ $289 · Marcus T., by text" · "Payment received · $418.00 · Apple Pay".

## IA2 · Sound familiar? "What shop owners tell us on the first call."

| Quote | Before | After | Cost (red) | Fix |
|---|---|---|---|---|
| "Half my day is people calling to ask if their car is ready." | iOS Recents: 9 calls 3:51–4:52 PM, 5 missed in red; badge "17 missed calls since lunch" | Customer status page: "Your 2019 Tacoma is Ready ✓", timeline checked in → inspection sent → brakes replaced → ready; Dave R.; "Pay $418 · Apple Pay" | 41 calls yesterday, 17 missed. | Automatic texts at every step and a live status page. Status calls drop by half. |
| "Customers say no to work they can't see." | iMessage: Tony quotes $389 pads + rotors; Marcus: "is that really needed right now?… I'll just pick it up as is" | Inspection report: 1 urgent / 1 watch / 39 good; wheel photo with red circle + "Video from Dave · 0:14"; Front brake pads 2 mm · $289 checked; "Approve 1 item · $289" | A $389 brake job, declined by text. | Digital inspections with photos and video. |
| "The quick-lube down the road gets all the Google calls." | Google "brake repair near me": Valley Quick Lube 3.9, AutoCare Express 4.1, Desert Tire & Brake 4.0; dashed box "Apex Auto Works · #7 · 4.9 from 860 reviews, not on this screen" | Apex #1 (4.9 · 860, 0.8 mi, Open · Closes 6 PM, orange "Book online") above the two others | You're #7, under shops with worse reviews. | Fast site, a page per repair, Google profile that ranks. Top 3 on the map. |

## IA3 · Journey showcase: "Follow one customer, from Google to his next oil change."
Tabs + arrows + autoplay (7 s) + progress bar. Lead: Marcus has a 2019 Tacoma with squeaky brakes.

| # | Tab | Stage | Headline | Results | Chips | Mockups |
|---|---|---|---|---|---|---|
| 01 | Found on Google | light stone | He searches "brake repair near me." You come up first. | Top 3 on Google Maps · 1.1 s page load | Website, Local SEO, Google profile, Review requests | Apex website (dark, 0.6×) + Google results phone; card "New lead · from Google · Marcus T. · brakes · Tacoma" |
| 02 | Booked online | deep orange | He books at 10 PM, without calling anyone. | 38% booked after hours · 0 phone calls | Online booking, Plate & VIN lookup, Shop software sync | Booking by plate (CRT-4821 → 2019 Tacoma SR5, brakes free inspection + oil $129, Tue 13 · 8:00) + "You're booked" status; card "Shop board · new RO #4821" |
| 03 | Inspection approved | dark | Dave finds worn pads. Marcus sees them too. | 64% work approved (was 22%) · 4 min to approve | Tablet inspections, Photo & video, Approve by text | Tech tablet (light) + customer report phone; card "Approved by Marcus · 11:06 AM · $289" |
| 04 | Paid by text | pastel blue | He pays from the text and walks straight to his truck. | 6 min avg. time to pay · 71% paid by text | Text-to-pay, Apple Pay, Fleet invoicing, QuickBooks | iMessage with pay link (Invoice #4821 · $418) + Apple Pay sheet; card "Payment received · 4:09 PM" |
| 05 | Back in 5,000 miles | deep plum | Five thousand miles later, he comes back. | 32% of reminders book · +212 Google reviews | Service reminders, Review requests, Customer app (optional) | Lock screen (oil change due, Google review reply, review request) + reminders window (412 sent, 131 booked, $38,420) |

## IA4 · Behind the counter (dark panel, 5 tabs): "The side your customers never see."

| # | Tab · chip | Headline | Fine print | Mockup |
|---|---|---|---|---|
| 01 | Shop board · Bays · Techs · Status | Every car in the building, on one screen. | Reads and writes to Tekmetric, Shopmonkey or Mitchell 1. | Shop board 0.66× |
| 02 | Tech inspections · Tablet · Photo · Video | Your techs inspect with a tablet, not a clipboard. | Works with gloves on; templates match your 41-point check. | Tablet: RO #4821 · Bay 2, category list, pad photo "2 mm", Good/Watch/Urgent, notes, "$289", "Send report to Marcus by text" |
| 03 | Parts & margins · Parts · Suppliers · Margin | Know your parts margin before the car leaves. | Ordering connects to supplier accounts where offered. | Parts table: $14,820 sales, 46% margin, 1 late ("Front CV axle · Late · bay 4 waiting") |
| 04 | Invoices & payouts · Text-to-pay · Fleet · QuickBooks | Paid before they reach the counter. | Card fees from 2.6% + 10¢. | $9,476 collected, 71% by text, 6 min to pay, payout Wed $8,912; fleet net-30 rows |
| 05 | Owner's daily report · Car count · ARO · Labor rate | Your shop's numbers, on your phone at 6 PM. | Weekly email for partners. | Dark phone "Good evening, Rick": $9,476 ▲18%, 23 cars, $412 ARO, 64% approved, $148/h ELR, billed hours per tech |

## IA5 · Honest choice: "Do you need custom software? Usually, no."

| | Shop software alone | **Your software + [Brand]** (most chosen) | Fully custom system |
|---|---|---|---|
| Best for | Shops happy with a generic site and default texts | Independent shops that want to win on Google, convert inspections, stop chasing payments | Multi-location groups and fleets |
| Your customers see | Software's standard pages | Your brand on site, booking, reports, payment page | Your brand everywhere, incl. app |
| Time to launch | 2–4 weeks setup | 8–12 weeks | 4–6 months |
| Budget | $ + monthly seats | $$ + current software | $$$ |
| Customer data | In their system | Synced to a database you own | Yours |

## IA6 · Process: "About 12 weeks, without closing a bay."
01 Week 1 A day at your counter (41 calls, 3 lost sheets, 22% approved) · 02 Weeks 2–3 Design in Figma (booking phone, "Figma · 28 screens") · 03 Weeks 4–9 Build and connect (sync / send / charge log) · 04 Week 10 Train your team · 05 Weeks 11–12 Go live one piece at a time (inspections → text-to-pay → site) · 06 Ongoing monthly check-up (ARO chart $412).

## IA7 · Case study: Apex Auto Works · Phoenix, AZ · 9 bays
- **H3:** Three service writers, finally off the phone.
- **Problem:** afternoons on "is it ready?" calls; paper inspection sheets; 22% approval; invisible on Google.
- **Built:** site + Google profile, online booking, tablet inspections, text-to-pay, reminders, synced with their shop software. Live in 11 weeks.
- **Metrics:** $412 ARO (was $318) · −52% status calls · +212 Google reviews.
- **Quote:** "My service writers go home at six now. And customers approve more, because they can actually see what we see." · Rick A., owner
- **Visual:** owner report phone + Google #1 phone. Glow: orange.

## IA8 · Pricing (placeholders)
| Get found · Website + Google | **Full shop upgrade** (most chosen) | Multi-location · Group & fleet platform |
|---|---|---|
| from **$3,900** · 2–4 weeks (= homepage Launch) | from **$14,900** · 10–12 weeks (= homepage Build) | from **$29,000** · 14–20 weeks |

Price chips: locations, shop software, fleet accounts, customer app, content and photos, data migration.

## IA9 · FAQ
Switching from Tekmetric/Shopmonkey/Mitchell 1 (no) · Will techs use tablets · Texting compliance (10DLC, opt-in, STOP) · Fleet accounts (portal, net-30) · How long until more cars (inspections/text-to-pay month 1; Maps 60–120 days) · Ownership (100% yours).

## IA10 · Go deeper
Local SEO · Text-to-pay & payments · Automation & ERP · Customer app. Other industries row.

## IA11 · CTA
"Tell us how your shop runs today. **30 minutes**, and you'll know what to fix first." Times in Mountain Time.

---

## Consistency with homepage
| Item | This page | Homepage / approved pages |
|---|---|---|
| Apex city | Phoenix, AZ | Phoenix, AZ ✓ |
| Apex reviews | 4.9 · 860 | 4.9 · 860 (SITES) ✓ |
| Owner | Rick | SEO page signs replies "— Rick" ✓ |
| Launch price | $3,900 · 2–4 weeks | $3,900 · 2–4 weeks ✓ |
| Build price | $14,900 | $14,900 ✓ |
| Customer vehicle | 2019 Toyota Tacoma | SITES app card uses Porsche 911 GT3 (other pages) — different customer, no conflict |

## Open items
- Confirm we can actually integrate Tekmetric, Shopmonkey, Mitchell 1 before claiming "works with".
- Inspection photo is a wheel shot (BMW badge) from the owner's auto project; replace with a licensed brake close-up.
- Real prices, real case study, real supplier names (currently fictional: Metro Auto Parts, PartsHub, Desert Wholesale).
