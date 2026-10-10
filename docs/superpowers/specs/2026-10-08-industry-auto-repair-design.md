# Industry Page: Auto Repair Shops — Design Spec

- **Date:** 2026-10-08 · **UAE localization:** 2026-10-10 (per `2026-10-09-uae-localization-design.md` §8.14–8.15; US version in `specs/us/`)
- **Status:** Mockup localized for Dubai + UAE, waiting for owner review
- **Market:** Dubai + UAE
- **Route:** `/industries/auto-repair`
- **Reference mockup:** `docs/superpowers/mockups/industry-auto-repair.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` (design system §3, UAE components §3.7, template §5, accessibility/responsive §6). Only page-specific content is recorded here.

**Positioning:** everything an independent garage in the UAE needs on top of the garage software it already runs: getting found on Google Maps, online booking by plate number, digital inspections approved on WhatsApp, WhatsApp payment links (Apple Pay, card, Tabby) and service reminders every 10,000 km. We don't replace the garage system and we don't name UAE garage systems until integrations are verified.

**Story:** the front desk runs the owner → three daily leaks (status calls, work declined on WhatsApp, invisible on Google in Al Quoz) → follow one customer (Marcus T., 2019 Nissan Patrol) through five screens → the back office the customer never sees → "do you need custom software? usually no" → 12 weeks without closing a bay → Apex case study → price → objections → call.

**Industry page template (differs from the service template):** section 3 is a **customer-journey showcase** (tabs = journey steps, not industries) and section 4 is **"Behind the counter"** (shop operations). All other sections keep the service-page structure. Class prefix: `au-` (shared by all industry pages as the industry template), page-specific screens add their own prefix. This page is the source of the industry shared blocks (`service page template#1` CSS, `interactions#1`, NAV variant B with the WhatsApp icon); they were propagated to the 5 other industry pages on 2026-10-10.

**Mockup mix:** light: 1280 shop board (kanban by job status), 1024 tech tablet inspection, parts & margins table, invoices & payouts, service reminders, Apple Pay sheet, Google local results, iOS Recents, WhatsApp chats; dark: Apex website, online booking phone, inspection report phone header, owner's daily report phone. Booking used once (journey tab 2).

---

## IA1 · Hero (dark panel)
- **Breadcrumb:** Industries / Auto repair shops
- **H1 kicker:** "Websites, inspections and payments for garages in Dubai & UAE"
- **H1:** "You run a great shop. **The front desk is running you.**"
- **Sub:** Websites, online booking, digital inspections and WhatsApp payment links for independent garages. Built around how your service advisors already work, and connected to the garage software you use today.
- **CTAs:** Book a free call · WhatsApp us (prefilled "Hi, I'm on your garages page") · See what we build. Hero buttons use 22px side padding and 10px gap so all three stay on one row.
- **Chips:** Works with your garage software · Zoho Books · WhatsApp Business · Google Business Profile
- **Visual:** light shop board (Tue, 13 Oct · 9 bays; KPIs 23 cars, 3 waiting on approval, 7/9 bays, AED 34,800 billed ▲18%, AED 1,480 ARO; RO #4821 2019 Nissan Patrol highlighted "Sent 11:02 · viewed ✓") at 0.7× + phone with the customer inspection report.
- **Floating cards:** "Google Maps · ★ 4.9 · 860 reviews · #1" · "Inspection approved · 11:06 AM · ✓ AED 890 · Marcus T., on WhatsApp" · "Payment received · AED 1,535.10 · Apple Pay".

## IA1b · In plain English
"We build what an independent garage in the UAE needs around the software it already uses: a website that ranks on Google Maps, online booking by plate number, photo inspections customers approve on WhatsApp, payment links with Apple Pay and Tabby, and service reminders every 10,000 km. Most garages go live in about 12 weeks; a website and Google profile start from AED 7,900." Chips: From AED 7,900 · Time 2–12 weeks · Languages English + Arabic · Based in Dubai.

## IA2 · Sound familiar? "What shop owners tell us on the first call."

| Quote | Before | After | Cost (red) | Fix |
|---|---|---|---|---|
| "Half my day is people calling to ask if their car is ready." | iOS Recents: 9 calls 3:51–4:52 PM (+971 numbers from Dubai, Sharjah, Ajman; Marcus T. · Patrol; Sharjah Parts Trading), missed in red; badge "17 missed calls since lunch" | Status page: "Your 2019 Patrol is Ready ✓", timeline ending "WhatsApp sent 4:05 PM"; Dave R., Master Technician; "Pay AED 1,535.10 · Apple Pay" | 41 calls yesterday, 17 missed. Every one pulls a service advisor off the counter. | Automatic WhatsApp updates at every step and a live status page. |
| "Customers say no to work they can't see." | WhatsApp chat with Apex (green header, ✓✓ ticks): Tony quotes AED 1,390 pads + rotors; Marcus: "…I'll just pick it up as is" | Inspection report: 1 urgent / 1 watch / 39 good; wheel photo + "Video from Dave · 0:14"; Front brake pads 2 mm · AED 890; rear tyres 3 mm · about 8,000 km left; "Approve 1 item · AED 890" | An AED 1,390 brake job, declined on WhatsApp. | Digital inspections with photos and video. |
| "The quick-lube down the road gets all the Google calls." | Google "car service near me": map labelled AL QUOZ IND. 3 and Sheikh Zayed Rd; Quick Lube Al Quoz 3.9 (1.9 km), AutoCare Express 4.1 (3.2 km), Desert Tyre & Brake 4.0 (3.9 km); "Apex Auto Works · #7" box | Apex #1 (4.9 · 860, 1.3 km, orange "Book online") | You're #7 for "car service near me" in Al Quoz. | Fast site, a page per repair, Google profile that ranks. |

## IA3 · Journey showcase: "Follow one customer, from Google to his next oil change."
Tabs + arrows + autoplay (7 s) + progress bar. Lead: Marcus has a 2019 Nissan Patrol with squeaky brakes. "Example project · illustrative numbers" chip under the stage (replaces the concept-shop note).

| # | Tab | Stage | Headline | Results | Chips | Mockups |
|---|---|---|---|---|---|---|
| 01 | Found on Google | light stone | He searches "car service near me." You come up first. | Top 3 on Google Maps · 1.1 s page load | Website, Local SEO, Google profile, Review requests | Apex website (dark, `EN · ع`) + Google results phone; card "New lead · from Google · Marcus T. · brakes · Patrol" |
| 02 | Booked online | deep orange | He books at 10 PM, without calling anyone. | 38% booked after hours · 0 phone calls | Online booking, Plate & VIN lookup, Shop software sync | Booking by Dubai plate (`D 48210` → 2019 Nissan Patrol LE · 99,860 km; brakes free inspection + oil service AED 299, check-engine AED 250; Tue 13 · 8:00) + "You're booked" status (WhatsApp reminder Mon 6 PM) |
| 03 | Inspection approved | dark | Dave finds worn pads. Marcus sees them too. | 64% work approved (was 22%) · 4 min to approve | Tablet inspections, Photo & video, Approve on WhatsApp | Tech tablet + customer report phone; card "✓ Front brake pads · AED 890" |
| 04 | Paid on WhatsApp | pastel blue | He pays from WhatsApp and walks straight to his car. | 6 min avg. time to pay · 71% paid on WhatsApp | WhatsApp pay links, Apple Pay, Tabby, Zoho Books | WhatsApp chat with pay link (Invoice #4821 · AED 1,535.10 incl. VAT, pay.apexautoworks.ae, 12-month warranty) + Apple Pay sheet (brakes AED 890 · oil service AED 299 · AC cabin filter AED 273 · VAT 5% AED 73.10 · total AED 1,535.10) |
| 05 | Back in 10,000 km | deep plum | Ten thousand kilometres later, he comes back. | 32% of reminders book · +212 Google reviews | Service reminders, Review requests, Customer app (optional) | Lock screen ("due for a service, 10,000 km since October"; review reply "see you before summer!") + reminders window (412 sent, 131 booked from WhatsApp, AED 141,100 work booked; Priya's Pajero "AC service before summer") |

## IA4 · Behind the counter (dark panel, 5 tabs): "The side your customers never see."

| # | Tab · chip | Headline | Fine print | Mockup |
|---|---|---|---|---|
| 01 | Shop board · Bays · Techs · Status | Every car in the building, on one screen. | Reads and writes to your garage software, so nobody types a job card twice. | Shop board 0.66×: Patrol, Land Cruiser, Pajero, Sorento, Hilux (fleet · Gulf Cool Services), amounts AED 250–4,710 |
| 02 | Tech inspections · Tablet · Photo · Video | Your techs inspect with a tablet, not a clipboard. | Works with gloves on; templates match your 41-point check. | Tablet: `D 48210` · RO #4821 · 99,860 km · Bay 2; "Parts AED 350 · Labour 1.4 h · AED 890"; "Send report to Marcus on WhatsApp" |
| 03 | Parts & margins | Know your parts margin before the car leaves. | Ordering connects to supplier accounts where offered. | AED 54,400 parts sales, 46% margin; suppliers Sharjah Parts Trading (cheapest), Al Quoz Auto Spares, Emirates Auto Wholesale; "Oil filter + 5 L 0W-20" |
| 04 | Invoices & payouts · WhatsApp pay · Fleet · Zoho Books | Paid before they reach the counter. | Card fees from about 2.5% + AED 1. Payouts to Emirates NBD, ADCB or Mashreq. | AED 34,800 collected, 71% paid on WhatsApp, payout Wed AED 32,700 → Emirates NBD ••4410; rows incl. Tabby pay-in-4 and fleet 30-day accounts (Gulf Cool Services, Al Barsha Facilities LLC); "Sync to Zoho Books" |
| 05 | Owner's daily report · Car count · ARO · Labour rate | Your shop's numbers, on your phone at 6 PM. | Weekly email for partners. | Dark phone "Good evening, Rashid" (Tue, 13 Oct): AED 34,800 ▲18%, 23 cars, ARO AED 1,480 ▲ AED 345, 64% approved, ELR AED 545/h |

## IA5 · Honest choice: "Do you need custom software? Usually, no."

| | Garage software alone | **Your software + [Brand]** (most chosen) | Fully custom system |
|---|---|---|---|
| Best for | Garages happy with a generic site and default messages | Independent garages that want to win on Google, convert inspections, stop chasing payments | Multi-location groups and fleets |
| Your customers see | Software's standard pages | Your brand on site, booking, reports, payment page | Your brand everywhere, incl. app |
| Time to launch | 2–4 weeks setup | 8–12 weeks | 4–6 months |
| Budget | AED 500–1,500 a month in seats | from AED 49,000 + current software | from AED 105,000 |
| Customer data | In their system | Synced to a database you own | Yours |

## IA6 · Process: "About 12 weeks, without closing a bay."
01 Week 1 A day at your counter · 02 Weeks 2–3 Design in Figma · 03 Weeks 4–9 Build and connect (log: `sync job.4821 → garage software`, `send inspection → whatsapp +971 50 ··· 0147`, `charge AED 1,535.10 apple_pay`) · 04 Week 10 Train your team · 05 Weeks 11–12 Go live one piece at a time (inspections → WhatsApp payments → site; "First inspection approved · AED 890", "First WhatsApp payment · AED 1,535") · 06 Ongoing monthly check-up (ARO chart AED 1,480).

## IA7 · Case study: Apex Auto Works · Al Quoz, Dubai · 9 bays
- "Example project · illustrative numbers" chip under the label.
- **H3:** Three service advisors, finally off the phone.
- **Built:** site + Google profile, online booking, tablet inspections, WhatsApp payment links, reminders, synced with their garage software. Live in 11 weeks.
- **Metrics:** AED 1,480 ARO (was AED 1,170) · −52% status calls · +212 Google reviews.
- **Quote:** "My service advisors go home at six now. And customers approve more, because they can actually see what we see." · Rashid A., owner

## IA8 · Pricing (placeholders, excl. 5% VAT)
| Get found · Website + Google | **Full shop upgrade** (most chosen) | Multi-location · Group & fleet platform |
|---|---|---|
| from **AED 7,900** · 2–4 weeks (= homepage Launch) | from **AED 49,000** · 10–12 weeks (= homepage Build) | from **AED 105,000** · 14–20 weeks |

Lists: review requests on WhatsApp; WhatsApp payments + service reminders; fleet portal with monthly billing. Lead ends "Prices exclude 5% VAT."

## IA9 · FAQ
Do I have to switch garage software? (no) · Will techs use tablets · **Can we message customers on WhatsApp legally?** ("Yes, when customers opt in. We use the WhatsApp Business API with approved message templates and an easy way to stop messages.") · Fleet accounts (portal, 30-day terms) · How long until more cars (inspections/WhatsApp payments month 1; Maps 60–120 days) · Ownership (100% yours).

## IA10 · Go deeper
Local SEO ("car service near me") · WhatsApp pay & payments (Apple Pay or Tabby from a WhatsApp link) · Automation & ERP (garage software, Zoho Books, suppliers) · Customer app. Other industries row.

## IA11 · CTA
"Tell us how your shop runs today. **30 minutes**, and you'll know what to fix first." WhatsApp us pill under the list. Booking: Mon–Fri, 10:00 AM–5:00 PM, "Times shown in Dubai time (GST)", "Google Meet or in person in Dubai", "Prefer WhatsApp?" line. Footer line from the homepage.

### UAE visual check (2026-10-10)
- [x] Money: AED everywhere; Apple Pay sheet shows `VAT 5%`; pricing excludes VAT
- [x] Addresses / areas: Al Quoz, AL QUOZ IND. 3 and Sheikh Zayed Rd on the map, km distances, Dubai/Sharjah/Ajman callers
- [x] Phones: +971 numbers; WhatsApp chats replace iMessage (pains and journey)
- [x] Language: `EN · ع` toggle on the Apex site; plain-English chip English + Arabic
- [x] Payments: Apple Pay, Tabby, payouts to Emirates NBD
- [x] Identity: Dubai plate `D 48210`
- [x] Platforms: Zoho Books, WhatsApp Business; no Tekmetric/Shopmonkey/Mitchell 1/QuickBooks
- [x] Calendar: GST booking, "before summer", AC service reminder
- [x] People: Rashid A. (owner), Marcus T. (Patrol), Omar L.; fictional UAE suppliers and competitors
- [x] Proof labelled: Example chips on the journey and the case study
- Checks: `uae-audit` PASS (10 states) · `verify` OK, 0 errors, 0 overflow · `text-audit` PASS

---

## Consistency with homepage (AED)
| Item | This page | Homepage / UAE spec §4 |
|---|---|---|
| Apex location | Al Quoz, Dubai | `SITES`: Garage · Al Quoz, Dubai ✓ |
| Apex reviews | 4.9 · 860 | 4.9 · 860 ✓ |
| Owner | Rashid A. | UAE spec §4 Rashid ✓ |
| Launch price | AED 7,900 · 2–4 weeks | AED 7,900 ✓ |
| Build price | AED 49,000 | AED 49,000 ✓ |
| Brake pads / oil service / diagnostics | AED 890 / 299 / 250 | UAE spec §4 ✓ |
| ARO | AED 1,480 | UAE spec §4 ✓ |
| Warranty | 12 months | UAE spec §4 (12 months / 20,000 km) ✓ |
| Invoice #4821 total | AED 1,535.10 incl. VAT (890 + 299 + AC cabin filter 273 + VAT 73.10) | UAE spec §4/§8.15 says AED 1,535 — rounded, ✓ |

## Open items
- Confirm which UAE garage systems we can actually integrate before naming any ("works with your garage software" until then).
- Inspection photo is a wheel shot from the existing set; replace with a licensed brake close-up.
- Real prices, real case study; suppliers and competitors are fictional (Sharjah Parts Trading, Al Quoz Auto Spares, Emirates Auto Wholesale, Quick Lube Al Quoz, AutoCare Express, Desert Tyre & Brake).
