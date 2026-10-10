# Industry Page: Salons & Spas — Design Spec

- **Date:** 2026-10-08 · **UAE localization:** 2026-10-10 (per `2026-10-09-uae-localization-design.md` §8.16; US version in `specs/us/`)
- **Status:** Mockup localized for Dubai + UAE, waiting for owner review
- **Market:** Dubai + UAE
- **Route:** `/industries/salons`
- **Reference mockup:** `docs/superpowers/mockups/industry-salons.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` and the industry template in `2026-10-08-industry-auto-repair-design.md` (journey showcase + "Behind the counter"). Only page-specific content is recorded here.

**Positioning:** a salon's own brand, booking with deposits, a waitlist for gaps (on WhatsApp), client formulas and a client app, built on top of the booking app it already uses (Fresha, Booksy, Vagaro).

**Story:** Saturday is full, Tuesday is empty → three leaks (empty weekday chairs, no-shows, Instagram DMs) → follow one client (Jess M., balayage before her sister's wedding) → the front desk's back office → "usually no custom software" → 12 weeks without cancelling a client → Maison Rose case → price → objections → call.

**Mockup mix:** light: 1280 schedule by stylist, memberships, payroll, retail, checkout POS, 1024 stylist tablet (client profile + formula), schedule phone, booking phone, Instagram inbox and profile, WhatsApp chat, loyalty phone, status screens; dark/deep: owner's report phone, lock screen. Booking used once (journey tab 2). Class prefix: `sl-` on top of the shared `au-` industry template. This page's `service page: mockups#1` block (salon app variants in AED) was propagated to the other 5 industry pages on 2026-10-10.

---

## IS1 · Hero (dark panel)
- **Breadcrumb:** Industries / Salons & spas
- **H1 kicker:** "Booking, deposits and apps for salons and spas in Dubai & UAE"
- **H1:** "Saturday is fully booked. **Tuesday is a different story.**"
- **Sub:** Online booking with deposits, a waitlist that fills last-minute gaps, client formulas on every stylist's tablet and a front desk that runs itself. Built for salons, spas and barbershops, connected to the booking software you already use.
- **CTAs:** Book a free call · WhatsApp us ("Hi, I'm on your salons page") · See what we build
- **Chips:** Works with Fresha · Booksy · Vagaro · Instagram booking · Google Business Profile
- **Visual:** schedule window (Tue Oct 13; 41 appointments, 87% utilization ▲26 pts, AED 1,300 deposits held, 38 on waitlist, 1 no-show · AED 100 kept; 5 stylist columns) at 0.7× + phone "No-show handled".
- **Floating cards:** "Deposit received · 11:04 PM · AED 100 · Apple Pay" · "Waitlist on WhatsApp · Noura, 10:01 AM" with the Arabic reply «نعم، أحجز الساعة ٢ مع ميا ✓» ("Yes, I'll take 2 o'clock with Mia", inside `dir="rtl" lang="ar"`) · "Google · Maison Rose · ★ 4.9 · 312 reviews".

## IS1b · In plain English
"We build what a salon or spa in the UAE needs on top of Fresha or Booksy: your own booking site and app with deposits, a waitlist that fills last-minute gaps, client formulas on every stylist's tablet, memberships, WhatsApp reminders and commission reports ready for WPS payroll. A website with online booking starts from AED 7,900; the full salon upgrade takes about 12 weeks." Chips: From AED 7,900 · Time 2–12 weeks · Languages English + Arabic · Based in Dubai.

## IS2 · Sound familiar?
| Quote | Before | After | Cost | Fix |
|---|---|---|---|---|
| "Saturday's packed. Tuesday afternoon, my stylists are scrolling their phones." | Schedule phone, dashed "Open" blocks; banner "15 empty chair-hours today · about AED 4,950" | Filled day; banner "✓ 6 openings filled from the waitlist on WhatsApp · +AED 3,090 booked" | 15 empty chair-hours, about AED 4,950. | A waitlist that messages clients on WhatsApp when a slot opens. |
| "She cancelled her balayage two minutes before…" | WhatsApp chat from Ana R. at 9:58 cancelling her 10 am (✓✓ ticks) | "No-show handled": AED 100 kept, policy accepted 2 Oct, slot sent to the waitlist on WhatsApp, filled by Jess M. 10:30 | 3 no-shows last Saturday, AED 1,950 (= UAE spec §4). | Deposit at booking, kept on no-show, slot offered to waitlist. |
| "Half my bookings start as Instagram DMs I answer at midnight." | Instagram inbox (`maisonrose.dxb`, kayla.dxb …) | Instagram profile (Jumeirah, Dubai) with **Book**; toast "AED 100 deposit paid" | 47 unread, 9 wanted to book. | Book button on Instagram and Google → your calendar. |

## IS3 · Journey: "Follow one client, from Instagram to her next appointment."
"Example project · illustrative numbers" chip under the stage.

| # | Tab | Headline | Mockups (UAE values) |
|---|---|---|---|
| 01 | Found on Instagram | Jess sees a balayage on Instagram at 11 PM. | Maison Rose website (`EN · ع`) + IG profile |
| 02 | Booked with a deposit | She books Mia and pays the deposit with Face ID. | Stylists Mia AED 650 / Jordan AED 600 / Ava AED 550; AED 100 today / AED 550 in salon; "You're booked, Jess · Saturday, 17 Oct" with WhatsApp reminder |
| 03 | In the chair | Mia already knows her formula. | Tablet: 14 visits, AED 10,500 spent, Gold; history balayage AED 650, gloss AED 240, cut & style AED 180 |
| 04 | Checkout & retail | She leaves with the right products and her next visit booked. | POS (prices VAT-inclusive, as UAE consumer prices are): Balayage AED 650 · Olaplex No.3 AED 140 · member perk −AED 65 · deposit −AED 100 · tip 10% AED 65 (options 5/10/15%) · "Includes VAT 5% AED 34.52 · TRN" · **due AED 690**; Mia earns AED 263.25 + AED 14.00 + AED 65.00; result "+AED 22 retail per ticket" |
| 05 | Back in 6 weeks | Six weeks later, she rebooks in two taps. | Lock screen + loyalty app ("Refer a friend · you both get AED 50"; Apple Wallet stays) |

## IS4 · Behind the front desk (dark, 5 tabs)
01 Schedule & chair time (syncs with Fresha, Booksy or Vagaro) · 02 Memberships & gift cards (214 members, **AED 81,450 MRR**, **AED 23,580** gift cards, plans Color Club AED 550/mo, Blowout Club AED 325/mo; gift cards "sell themselves before Eid") · 03 Commissions & payroll (Oct 1–15, service sales AED 141,060; Lena · **chair rental AED 2,400/wk**; "Export WPS file", fine print "Exports a WPS payroll file and posts to Zoho Books") · 04 Retail & inventory (AED amounts, Olaplex and K18 low) · 05 Owner's daily report ("Good evening, Sarah", Tue 13 Oct: **AED 25,100** ▲22%, avg ticket **AED 600** ▲ AED 77, 1 no-show · AED 100 kept).

## IS5 · Honest choice
Booking app alone (Fresha · Booksy · Vagaro) · **Your booking app + [Brand]** (most chosen) · Fully custom. Budget row: AED 300–900 a month in fees / from AED 49,000 + your current app / from AED 105,000.

## IS6 · Process
Week 1 A Saturday at your front desk (47 DMs, 3 no-shows · AED 1,950, 15 empty hours) · Weeks 2–4 Figma · Weeks 5–9 Build and connect (`sync booking.4821 → fresha`, `hold deposit AED 100 apple_pay`, `whatsapp waitlist(38)`) · Week 10 Train · Weeks 11–12 Go live (First deposit · AED 100) · Ongoing (utilization 87%).

## IS7 · Case study: Maison Rose · Jumeirah, Dubai · 8 stylists
"Example project" chip. "From Instagram DMs to a full calendar." · Problem: no-shows cost AED 1,950 a week · Metrics −64% no-shows · 3.4× rebookings · 87% utilization (was 61%) · Quote · Sarah M., owner.

## IS8 · Pricing (placeholders, excl. 5% VAT)
Get booked from **AED 7,900** · 2–4 weeks (review requests on WhatsApp) · **Full salon upgrade** from **AED 49,000** · about 12 weeks · Multi-location from **AED 105,000** · 14–20 weeks.

## IS9 · FAQ
Do I have to leave Fresha or Booksy? (no) · Won't deposits scare clients away? · **Does it work with chair rental stylists?** (own calendars and payouts, weekly rent e.g. AED 2,400 charged automatically) · App or just a website? · Booking from Instagram · Who owns clients and formulas.

## IS10–11 · Go deeper + CTA
Client app · Deposits & payments · AI booking assistant · Local SEO. CTA "Tell us how your salon runs today. **30 minutes**, and you'll know what to fix first." + WhatsApp us pill; booking Mon–Fri 10:00 AM–5:00 PM, Dubai time (GST), "Google Meet or in person in Dubai", "Prefer WhatsApp?" line.

### UAE visual check (2026-10-10)
- [x] Money: AED everywhere; POS shows VAT 5% and TRN; pricing excludes VAT
- [x] Areas: Jumeirah, Dubai (Instagram bio, case); `.dxb` handles
- [x] Phones/chat: WhatsApp cancellation and waitlist; no iMessage
- [x] Language: Arabic WhatsApp reply (RTL) on the hero waitlist card; `EN · ع` on the Maison Rose site
- [x] Payments: Apple Pay deposits; payroll WPS export
- [x] Platforms: Fresha, Booksy, Vagaro, Zoho Books; no Square/Boulevard/Gusto/QuickBooks
- [x] Calendar: GST booking; gift cards before Eid
- [x] People: Sarah M., Mia, Jess M., Noura (waitlist)
- [x] Proof labelled: Example chips on the journey and case
- Checks: `uae-audit` PASS (10 states) · `verify` OK, 0 errors, 0 overflow · `text-audit` PASS

---

## Consistency with homepage (AED)
| Item | This page | Homepage / UAE spec §4 |
|---|---|---|
| Owner | Sarah M. | ✓ |
| Location / reviews | Jumeirah, Dubai · 4.9 · 312 | ✓ |
| Deposit / no-shows | AED 100 · "3 no-shows · AED 1,950" · −64% | ✓ |
| Balayage / cut & style | AED 650 / AED 180 | SITES ✓ |
| Prices | AED 7,900 / 49,000 / 105,000 | ✓ |
| Checkout due | AED 690 (VAT-inclusive consumer prices) | UAE spec §8.16 ✓ |

## Open items
- Confirm integrations with Fresha, Booksy and Vagaro before claiming "works with".
- Product brands in mockups (Olaplex, K18, Redken, Oribe, Davines, Blondor, Shades EQ) should be checked before launch.
- Arabic waitlist reply needs a native-speaker check.
- Some stylist avatars reuse the same photo as Jess (limited checked photo IDs); replace with licensed photos.
