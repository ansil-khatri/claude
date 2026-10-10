# Industry Page: Home Services (AC & maintenance) — Design Spec

- **Date:** 2026-10-09 · **UAE localization:** 2026-10-10 (per `2026-10-09-uae-localization-design.md` §8.19 — biggest change; US plumbing version in `specs/us/`)
- **Status:** Mockup localized for Dubai + UAE, waiting for owner review
- **Market:** Dubai + UAE
- **Route:** `/industries/home-services`
- **Reference mockup:** `docs/superpowers/mockups/industry-home-services.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` and the industry template in `2026-10-08-industry-pages-design.md`. Only page-specific content is recorded here.

**Brand change:** Peak Plumbing (Denver) became **Peak Cooling** (AC & maintenance · Dubai & Sharjah · 14 vans · since 2004 · 4.9 · 640 reviews · +971 4 555 0148), because AC is the UAE's main home-service job. Colours and logo stay (blue `#1d6fd6`). Same name on the homepage tab 2.

**Positioning:** for AC, cleaning, electrical and maintenance companies: online booking with an AED 99 call-out deposit, WhatsApp replies to every missed call, a dispatch board for every van, good-better-best quotes with Tabby/Tamara signed on site, payment before the van leaves, and annual maintenance contracts (AMC) that renew before summer. Built on Jobber or Excel, Zoho Books.

**Story:** you're on a roof at 46°C and the phone rings → three leaks (missed calls overnight = lost AC emergencies, quotes "to think about", AED 67,650 unpaid) → follow Tom R. (Villa 214, Arabian Ranches) from a warm house at 1 AM to "see you before summer" → behind the vans → "usually no custom software" → 12 weeks without a van sitting idle → Peak Cooling case → price → objections → call.

**Mockup mix:** light: dispatch board, estimates kanban, invoices table, AMC contracts window, Recents, WhatsApp chats (auto-reply, tech chat), quote options, Zoho Books overdue, Google results, booking; dark: tech app, vans & stock board, owner's report, lock screen. Booking used once (journey tab 2). Class prefix: `hs-` on the shared `au-` template. The template block `/* industry page: home services — templates */` was rewritten as a whole (AC content, same functions and classes).

---

## IH1 · Hero (dark panel)
- **Breadcrumb:** Industries / Home services
- **H1 kicker:** "Booking, dispatch and payments for AC and maintenance companies in Dubai & UAE"
- **H1 (changed):** "You're on a roof at 46°C. **Your phone is ringing again.**"
- **Sub:** "Online booking with a call-out deposit, a dispatch board for every van, quotes your techs close on the spot, and annual maintenance contracts that bring customers back before every summer. Built for AC, cleaning, electrical and maintenance companies, connected to the tools you already use."
- **CTAs:** Book a free call · WhatsApp us ("Hi, I'm on your home services page") · See what we build
- **Chips:** Works with Jobber · Zoho Books · WhatsApp Business · Google Business Profile
- **Visual:** dispatch board "Tue, 13 Oct · 9:18 AM": 46 jobs, 14 vans out, 2 emergencies (#7744 "AC not cooling · villa · 3 kids"), 94% on time, **AED 104,500** booked; job #7741 Tom R. highlighted + dark tech app.
- **Floating cards:** "Booked 1:04 AM · #7741 · Tom R. · AED 99 deposit paid · first slot 7–8 AM" · "Van 7 · Ryan · 12 min away · Tom messaged ✓" · "Paid on site · 8:12 AM · AED 880 · Apple Pay · photos sent".

## IH1b · In plain English
"We build what AC, cleaning and maintenance companies in the UAE need: online booking with a call-out deposit, WhatsApp replies at 1 AM, a dispatch board for every van, quotes with Tabby instalments signed on site, payment before the van leaves, and annual maintenance contracts that renew before summer. Booking starts from AED 7,900; the full upgrade takes about 12 weeks." Chips: From AED 7,900 · Time 2–12 weeks · Languages English + Arabic · Based in Dubai.

## IH2 · Sound familiar?
| Quote | Before | After | Cost | Fix |
|---|---|---|---|---|
| "Every missed call is a job for the next AC company on Google." | iOS Recents: +971 numbers (Dubai, Sharjah, Al Barsha), Tom R. · Arabian Ranches 1:02 AM, Ryan · Van 7, Al Quoz HVAC Supply; badge "7 missed calls overnight. Two were AC failures. Both booked someone else by 7 AM." | WhatsApp (Peak Cooling business account): auto-reply at 1:02 AM with booking link `peakcooling.ae/book`; Tom: "blowing warm air, house is 31°C… 3 kids"; "Booked ✓ Ryan arrives 7–8 AM (#7741). AED 99 deposit paid" | 7 missed calls overnight. | WhatsApp reply in seconds with a booking + deposit link. |
| "The customer wants to think about it. Then she calls someone else." | WhatsApp owner ↔ Ryan · Van 7 about Linda Park's 15-year-old 1.5-ton split AC: "she'll think about it" → "she went with Desert Breeze AC 🙃" | Quote #Q-2318 "New AC · 3 options": Split 1.5 ton AED 2,450 (Tabby 4 × AED 613) · **Inverter split 2 ton AED 3,200 (Tabby 4 × AED 800), most chosen** · Ducted upgrade AED 9,800 (Tamara 12 months); sign + approve | 11 AC replacement quotes "to think about", three came back. | Three options with Tabby/Tamara, signed on site. |
| "We finish the job on Friday. We get paid in 34 days." | Zoho Books unpaid: **AED 67,650**, 23 invoices (AED 18,290 / 32,170 / 17,190 by age), rows for duct cleaning, Marina Heights 12-unit service, gas top-up, compressor repair | Paid **AED 880** (AED 979 gas top-up + capacitor − AED 99 deposit) · Apple Pay 8:12 AM · photos sent on WhatsApp · Zoho synced, VAT included · "Peak Care AMC · AED 49/mo offered" | AED 67,650 unpaid. | Payment on the spot (card, Apple Pay, Tabby). |

## IH3 · Journey: "Follow one customer, from a warm house at 1 AM to 'see you before summer.'"
Lead: Tom wakes up at 1 AM in Arabian Ranches and the AC is blowing warm air; 31°C inside. "Example project · illustrative numbers" chip under the stage.

| # | Tab | Headline | Mockups |
|---|---|---|---|
| 01 | Found at 1 AM | Tom searches "ac repair near me" at 1 AM. You're first. | Peak Cooling site (`EN · ع`, AC repair from AED 249) + Google: Peak Cooling #1 (Open 24 hours · Arabian Ranches · 1.9 km · first slot 7–8 AM), Desert Breeze AC and CoolFix Technical Services "Closed · Opens 8/9 AM"; map labels ARABIAN RANCHES, Al Qudra Rd |
| 02 | Booked & deposit paid | He books the first slot and pays AED 99. Then he tries to sleep. | Booking: AC not cooling / Water leaking / Noisy or smells / Service or AMC; photos; Tue 13 Oct 7–8 AM Ryan · Van 7; **AED 99** deposit; status "we'll WhatsApp you", "Add community gate notes" |
| 03 | On the way | Ryan shows up with the right gas and capacitor, and Tom knows when. | Tech app (Villa 214, Arabian Ranches; "Community gate · show booking QR"; van stock R410A gas ×2, 45/5 µF capacitor ×3) + tracking "Message Ryan on WhatsApp" |
| 04 | Fixed & paid | Cooling again in an hour, paid before Ryan leaves the villa. | Paid receipt AED 880 + lock screen with WhatsApp notifications (receipt link `peakcooling.ae/r/7741`) |
| 05 | Back before every summer | Ryan mentions the 9-year-old outdoor unit. Tom joins Peak Care. | **Peak Care AMC AED 49/month** (2 services a year, priority in summer, no deposits, 15% off parts; "AC service before summer · Apr 2027") + AMC contracts window (1,120 contracts, **AED 54,900** monthly recurring, 91% renew; Marina Heights building AMC AED 660/mo); quote card = homepage Tom R. quote |

## IH4 · Behind the vans (dark, 5 tabs)
01 Dispatch board (syncs with Jobber or your Excel job sheet; community gate notes; WhatsApp arrival updates) · 02 Estimates & follow-ups (open value **AED 235,800**, close rate 58%, chip Good · Better · Best · Tabby) · 03 Invoices & payments (**AED 353,700** collected this week, overdue **AED 7,860** (was AED 67,650), 81% paid on site; Tabby, WhatsApp pay links; "Zoho Books ✓ synced"; amounts column "Amount (AED)") · 04 Vans & stock (R410A/R32 gas cylinders, capacitors, filters, fan motor, ducting; restock AED 4,720 to **Al Quoz HVAC Supply**) · 05 "Today at Peak" (Peak Cooling · 14 vans): **AED 104,500** ▲12%, 46 jobs, avg ticket **AED 2,270**, close rate 58%, 6 new AMC contracts.

## IH5 · Honest choice
Field-service software alone (Jobber · Zoho FSM · Excel) · **Your software + [Brand]** (growing companies with 5–40 vans) · Fully custom. Budget: AED 150–350 a month per tech / from AED 49,000 + your current software / from AED 105,000.

## IH6 · Process: "About 12 weeks, without a van sitting idle."
01 A day in the vans (7 missed calls, 11 quotes, AED 67,650 unpaid) · 02 Figma · 03 Build and connect (`booking #7741 → jobber.job`, `deposit AED 99.00 network_intl`, `dispatch van 7 · Ryan`) · 04 Train (techs · 14) · 05 Go live: missed-call WhatsApp replies and booking first, then tech app and quotes, then AMC contracts — never in July or August · 06 Ongoing (+31% booked jobs).

## IH7 · Case study: Peak Cooling · Dubai & Sharjah · 14 vans
"Example project" chip. "From missed calls to a full board by 8 AM." · Built: booking + AED 99 deposit, WhatsApp replies, tech app with quotes and payment, AMC contracts · Metrics +31% booked jobs · 1.4 days to get paid (was 34) · 4.9★ 640 reviews · Quote "Half our emergency jobs book themselves overnight now. In August, that's everything." · Peak Cooling owner.

## IH8 · Pricing (placeholders, excl. 5% VAT)
Get booked from **AED 7,900** (missed-call WhatsApp reply, WhatsApp review requests) · **Full trade business upgrade** from **AED 49,000** (WhatsApp arrival updates, AMC contracts + customer app) · Multi-trade platform from **AED 105,000** (AC, cleaning, electrical; van stock; WPS payroll exports). Chips: vans, field-service software, tech app, AMC contracts, Tabby / Tamara, data migration.

## IH9 · FAQ
Do I have to leave Jobber or Excel? (no) · Will techs use it? · Who answers emergency calls at night? (WhatsApp reply + optional AI receptionist in English and Arabic) · Won't a call-out deposit put customers off? · Can customers pay over time for big jobs? (Tabby/Tamara, paid upfront) · **Do AMC contracts renew automatically?** ("Yes, if the customer agrees. They get a WhatsApp reminder 30 days before renewal and can cancel in one tap.") · Ownership.

## IH10–11 · Go deeper + CTA
Website & online booking · Payments (Tabby/Tamara) · AI receptionist (WhatsApp after hours) · Local SEO ("ac repair near me"). CTA "Tell us how your vans run today." + WhatsApp pill; booking Mon–Fri 10:00 AM–5:00 PM GST, "Google Meet or in person in Dubai", "Prefer WhatsApp?".

### UAE visual check (2026-10-10)
- [x] Money: AED; invoices VAT included; pricing excludes VAT
- [x] Areas: Arabian Ranches (Villa 214), Mirdif, Dubai Hills, JVC, Al Barsha, Sharjah; map labels; km
- [x] Climate: 46°C roof, 31°C house, "before summer", "never in July or August", AC jobs throughout
- [x] Phones/chat: +971 numbers; WhatsApp auto-reply, tech chat, lock-screen notifications; no iMessage/SMS
- [x] Payments: Apple Pay, Tabby, Tamara, Network International deposit
- [x] Platforms: Jobber, Zoho Books, WhatsApp Business; no ServiceTitan/Housecall Pro/QuickBooks/Google Local Services
- [x] Suppliers/competitors: Al Quoz HVAC Supply, Desert Breeze AC, CoolFix Technical Services (fictional)
- [x] People: Tom R., Ryan K., Linda Park
- [x] Proof labelled: Example chips on journey and case
- Checks: `uae-audit` PASS (10 states) · `verify` OK, 0 errors, 0 overflow · `text-audit` PASS

---

## Consistency (AED)
| Item | This page | Homepage / UAE spec §4 |
|---|---|---|
| Brand | Peak Cooling · AC & maintenance · Dubai & Sharjah · 14 vans · 4.9 · 640 | homepage tab 2 + UAE spec §4 ✓ |
| Deposit | AED 99 call-out | ✓ |
| Repair prices | AC repair from AED 249 · servicing from AED 199 · duct cleaning from AED 899 | homepage Peak Cooling site ✓ |
| AMC | Peak Care AMC AED 49/month | UAE spec §4 ✓ |
| Customer + quote | Tom R., Arabian Ranches · "Booked online at 1 AM, they were here by 8. Fixed in an hour." | ✓ |
| Prices | AED 7,900 / 49,000 / 105,000 | ✓ |

## Open items
- Confirm Jobber/Zoho integrations, Tabby/Tamara merchant eligibility for services, and Network International as deposit provider.
- Photos are the existing checked plumbing/heater shots relabelled "Indoor unit / Outdoor unit"; replace with licensed AC photos.
- Owner name not approved ("Peak Cooling owner").
