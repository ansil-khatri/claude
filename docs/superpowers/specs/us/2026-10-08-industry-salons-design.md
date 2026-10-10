# Industry Page: Salons & Spas — Design Spec

- **Date:** 2026-10-08
- **Status:** Mockup built, waiting for owner review
- **Route:** `/industries/salons`
- **Reference mockup:** `docs/superpowers/mockups/industry-salons.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` and the industry template in `2026-10-08-industry-auto-repair-design.md` (journey showcase + "Behind the counter"). Only page-specific content is recorded here.

**Positioning:** a salon's own brand, booking with deposits, a waitlist for gaps, client formulas and a client app, built on top of the booking app it already uses (Square Appointments, Vagaro, Boulevard, Fresha).

**Story:** Saturday is full, Tuesday is empty → three leaks (empty weekday chairs, no-shows, Instagram DMs) → follow one client (Jess M., balayage before her sister's wedding) → the front desk's back office → "usually no custom software" → 12 weeks without cancelling a client → Maison Rose case → price → objections → call.

**Mockup mix:** light: 1280 schedule by stylist, memberships, payroll, retail, checkout POS, 1024 stylist tablet (client profile + formula), schedule phone, booking phone, Instagram inbox and profile, loyalty phone, status screens; dark/deep: owner's report phone, lock screen. Booking used once (journey tab 2). Class prefix: `sl-` on top of the shared `au-` industry template.

---

## IS1 · Hero (dark panel)
- **Breadcrumb:** Industries / Salons & spas
- **H1:** "Saturday is fully booked. **Tuesday is a different story.**"
- **Sub:** Online booking with deposits, a waitlist that fills last-minute gaps, client formulas on every stylist's tablet and a front desk that runs itself. Built for salons, spas and barbershops, connected to the booking software you already use.
- **Chips:** Works with Square Appointments · Vagaro · Boulevard · Instagram booking · Google Business Profile
- **Visual:** schedule window (Tue Oct 13; 41 appointments, 87% utilization ▲26 pts, $1,105 deposits held, 38 on waitlist, 1 no-show · $85 kept; 5 stylist columns with utilization %, green "from waitlist" blocks) at 0.7× + phone "No-show handled".
- **Floating cards:** "Deposit received · 11:04 PM · $85.00 · Apple Pay" · "Waitlist · today · ✓ 6 openings filled by text" · "Google · Maison Rose · ★ 4.9 · 312 reviews".

## IS2 · Sound familiar?
| Quote | Before | After | Cost | Fix |
|---|---|---|---|---|
| "Saturday's packed. Tuesday afternoon, my stylists are scrolling their phones." | Schedule phone, Mia/Jordan/Ava, dashed "Open" blocks; banner "15 empty chair-hours today · about $1,350" | Same day filled; green "waitlist" blocks; banner "✓ 6 openings filled from the waitlist · +$842" | 15 empty chair-hours, ~$1,350. | Waitlist texts clients when a slot opens. |
| "She cancelled her balayage two minutes before…" | iMessage from Ana R. at 9:58 cancelling her 10 am | "No-show handled": $85 kept, slot sent to 38 waitlist clients, filled by Jess M. 10:30 | 3 no-shows last Saturday, $540 (= homepage). | Deposit at booking, kept on no-show, slot offered to waitlist. |
| "Half my bookings start as Instagram DMs I answer at midnight." | Instagram inbox (maisonrose.atx), 5 unread booking questions; badge "47 unread" | Instagram profile with blue **Book** button; toast "New booking from Instagram · Balayage · Sat 2:00 PM · $85 deposit paid" | 47 unread, 9 wanted to book. | Book button on Instagram and Google → your calendar. |

## IS3 · Journey: "Follow one client, from Instagram to her next appointment."
| # | Tab | Stage | Headline | Results | Mockups |
|---|---|---|---|---|---|
| 01 | Found on Instagram | pastel rose | Jess sees a balayage on Instagram at 11 PM. | 62% book after hours · 0 DMs | Maison Rose website + IG profile |
| 02 | Booked with a deposit | deep rose | She books Mia and pays the deposit with Face ID. | −64% no-shows · 48 s to book | Booking (Mia $180, Sat 2:00 PM, $85 today / $95 in salon, policy) + "You're booked, Jess" |
| 03 | In the chair | light stone | Mia already knows her formula. | 14 visits on file · 0 formulas on paper | Stylist tablet: client card (14 visits, $2,860, Gold, sensitive scalp, oat latte, wedding Oct 24), formula (Blondor + 20 vol + Olaplex No.1; Shades EQ 9V + 9P; root 7N + 7G), Aug 28 / today photos, history |
| 04 | Checkout & retail | dark | She leaves with the right products and her next visit booked. | +$6 retail per ticket · 71% rebook before leaving | POS: Balayage $180, Olaplex No.3 $30 (RETAIL), member perk −$18, deposit −$85, tip 20% $36, due $143, Apple Pay; rebook Thu Nov 26 10:00; Mia earns $72.90 + $3.00 + $36 |
| 05 | Back in 6 weeks | pastel peach | Six weeks later, she rebooks in two taps. | 3.4× rebookings · 4.9★ 312 reviews | Lock screen (gloss reminder, club stamp, Google reply) + loyalty app (8/10, Rebook with Mia, Apple Wallet) |

## IS4 · Behind the front desk (dark, 5 tabs)
01 Schedule & chair time (schedule window) · 02 Memberships & gift cards (214 members, $22,180 MRR, $6,420 gift cards, 2.1% churn) · 03 Commissions & payroll (Oct 1–15; Mia 45% → $6,341 … Lena booth renter $650/wk; export to Gusto) · 04 Retail & inventory ($4,980, $28/ticket, 52% margin, Olaplex and K18 low) · 05 Owner's daily report (dark phone "Good evening, Sarah": $6,840 ▲22%, 87% utilization, 71% rebooked, $164 avg ticket, utilization per stylist).

## IS5 · Honest choice: "Do you need custom software? Usually, no."
Booking app alone · **Your booking app + [Brand]** (most chosen) · Fully custom. Rows: best for, what clients see (marketplace next to competitors vs your brand), time (1–2 weeks / ~12 weeks / 4–6 months), budget, client list ownership.

## IS6 · Process: "About 12 weeks, without cancelling a client."
Week 1 A Saturday at your front desk (47 DMs, 3 no-shows $540, 15 empty hours) · Weeks 2–4 Figma (booking phone, 34 screens) · Weeks 5–9 Build and connect · Week 10 Train your team · Weeks 11–12 Go live in steps (deposit → waitlist → app) · Ongoing (utilization 87%).

## IS7 · Case study: Maison Rose · Austin, TX · 8 stylists
"From Instagram DMs to a full calendar." (= homepage) · Metrics −64% no-shows · 3.4× rebookings in the app · 87% utilization (was 61%) · Quote "We wake up to a full calendar and the deposits already paid." · Sarah M., owner (= homepage). Visual: owner report + IG profile. Glow: rose.

## IS8 · Pricing (placeholders)
Get booked · Website + online booking from **$3,900** · 2–4 weeks · **Full salon upgrade** from **$14,900** · about 12 weeks · Multi-location from **$29,000** · 14–20 weeks. Chips: locations, booking software, client app, memberships, photos and content, data migration.

## IS9 · FAQ
Leave Square/Vagaro/Boulevard? (no) · Will deposits scare clients? · Booth renters · App or just a website? · Booking from Instagram · Who owns clients and formulas.

## IS10–11 · Go deeper + CTA
Client app · Deposits & payments · AI booking assistant · Local SEO. CTA "Tell us how your salon runs today. **30 minutes**, and you'll know what to fix first." Times in Central Time.

---

## Consistency with homepage
| Item | This page | Homepage |
|---|---|---|
| Owner | Sarah M. | Sarah M., Owner ✓ |
| City / reviews | Austin, TX · 4.9 · 312 | ✓ |
| No-shows | −64% · deposit $85 · "3 no-shows · $540" | ✓ |
| Case headline + quote | "From Instagram DMs to a full calendar." | ✓ |
| Stylist | Mia, senior | ✓ (mobile-apps page) |
| Prices | $3,900 / $14,900 | ✓ |

## Open items
- Confirm integrations with Square Appointments, Vagaro, Boulevard before claiming "works with".
- Product brands in mockups (Olaplex, K18, Redken, Oribe, Davines, Blondor, Shades EQ) are realistic but should be checked before launch.
- Some stylist avatars reuse the same photo as Jess (limited checked photo IDs); replace with licensed photos.
