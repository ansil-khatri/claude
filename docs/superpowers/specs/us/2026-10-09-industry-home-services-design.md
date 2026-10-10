# Industry Page: Home Services — Design Spec

- **Date:** 2026-10-09
- **Status:** Mockup built, waiting for owner review
- **Route:** `/industries/home-services`
- **Reference mockup:** `docs/superpowers/mockups/industry-home-services.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` and the industry template in `2026-10-08-industry-pages-design.md`. Only page-specific content is recorded here.

**Positioning:** online booking with a call-out deposit, missed-call text-back, a dispatch board, good-better-best quotes with financing, payment in the driveway, truck stock and member plans for plumbers, electricians, HVAC and other trades, built on top of their field-service software (ServiceTitan, Jobber, Housecall Pro).

**Story:** you're under a sink and the phone rings again → three leaks (missed calls at night, "I'll think about it" quotes, 34 days to get paid) → follow Tom R. from a leak at 1 AM to Peak Club → behind the trucks → "usually no custom software" → 12 weeks without a truck sitting idle → Peak Plumbing case → price → objections → call.

**Mockup mix:** light: dispatch board, estimates pipeline, invoices window, members window, iOS Recents, iMessage text-back, iMessage with a tech, options quote, QuickBooks unpaid list, paid receipt, booking, order status, tracking, Google local results, member phone; dark: tech app, trucks & stock window, owner's report, lock screen. Booking used once (journey 02). Class prefix: `hs-` on top of the shared `au-` industry template.

---

## IH1 · Hero (dark panel)
- **Breadcrumb:** Industries / Home services
- **H1:** "You're under a sink. **Your phone is ringing again.**"
- **Sub:** Online booking with a deposit, a dispatch board for every truck, quotes your techs close in the driveway, and maintenance plans that bring customers back every year. Built for plumbers, electricians, HVAC and other trades, connected to the software you already use.
- **Chips:** Works with ServiceTitan · Jobber · Housecall Pro · QuickBooks · Google Local Services
- **Visual:** dispatch board "Dispatch · today, Tue Oct 13 · 9:18 AM" (46 jobs, 14 trucks out, 2 emergencies, 94% on-time, $28,460 booked; 6 techs on a 7 AM–1 PM grid with done/emergency/now-line, #7741 Tom R. highlighted; unassigned emergency #7765) at 0.72× + dark tech app phone (job #7741).
- **Floating cards:** "Booked 1:04 AM · #7741 · Tom R. · $49 deposit paid · first slot 7–8 AM" · "Truck 7 · Ryan · 12 min away · Tom texted ✓" · "Paid on site · 8:12 AM · $240 · Apple Pay · photos sent".

## IH2 · Sound familiar?
| Quote | Before | After | Cost | Fix |
|---|---|---|---|---|
| "Every missed call is a job for the next plumber on Google." | iOS Recents: 7 missed calls overnight (incl. Tom R. 1:02 AM); toast "Two were burst pipes. Both booked someone else by 7 AM." | iMessage text-back at 1:02 AM → Tom: "under the kitchen sink" → "Booked ✓ Ryan arrives 7–8 AM (#7741). $49 deposit paid…" | 7 missed calls 10 PM–7 AM, two burst pipes. | Text back in seconds with a booking link + deposit. |
| "The customer wants to think about it. Then she calls someone else." | iMessage owner ↔ Ryan: Linda Park water heater, "she'll think about it" → "she went with Mile High Plumbing 🙃" | Quote #Q-2318, 3 options: 40 gal $1,890 ($52/mo) · **50 gal HE $2,450 ($68/mo, most chosen)** · tankless $3,600 ($99/mo), signature | 11 quotes "to think about" last month, 3 came back. | Options + financing, signed in the driveway. |
| "We finish the job on Friday. We get paid in 34 days." | QuickBooks unpaid invoices: $18,420 overdue, 23 invoices, aging 1–30 / 31–60 / 61+ | Paid $240.00 by Tom R. · Apple Pay · 8:12 AM ($289 − $49 deposit), 4 photos, QuickBooks synced, water heater quote saved, Peak Club offered | $18,420 unpaid; Mondays spent chasing. | Payment on the spot; receipt + photos before leaving. |

## IH3 · Journey: "Follow one customer, from a leak at 1 AM to 'see you next fall.'"
| # | Tab | Stage | Headline | Results | Mockups |
|---|---|---|---|---|---|
| 01 | Found at 1 AM | pastel blue | Tom searches "emergency plumber near me" at 1 AM. You're first. | #1 · 24/7 booking, no night shift | Peak Plumbing website + Google local results (Open 24 hours, Book online; competitors "Closed · opens 7 AM") |
| 02 | Booked & deposit paid | deep blue | He books the first slot and pays $49. Then he goes back to sleep. | 1 min to book at 1 AM · +31% booked jobs | Booking (problem, 2 photos, 7–8 AM Ryan · Truck 7, $49 deposit, Apple Pay) + "Your visit" status |
| 03 | On the way | light grey | Ryan shows up with the right part, and Tom knows when. | 94% on-time arrivals · 0 "where is he?" calls | Dark tech app (job #7741, photos, side door, deposit paid, truck stock ✓) + live tracking (12 min) |
| 04 | Fixed & paid | dark navy | Fixed in an hour, paid before Ryan backs out of the driveway. | 1.4 days avg. time to get paid · 81% paid on site | Paid receipt + lock screen (receipt + photos, arrived, 12 min away) |
| 05 | Back every fall | pastel mint | Ryan mentions the 14-year-old water heater. Tom joins Peak Club. | 1,120 members · 91% renew each year | Peak Club phone ($14/mo: flush, priority, 15% off from today, check-up, water heater quote, members line) + members window ($15,680/mo) · floating card = homepage quote "Booked online at 1 AM, they were here by 8." |

## IH4 · Behind the trucks (dark, 5 tabs)
01 Dispatch board (as hero) · 02 Estimates & follow-ups (38 open, $64,200, close rate 58% (was 27%), 1.6 days to sign; Sent / Viewed / Follow-up / Signed with Linda Park signed $2,450 at $68/mo) · 03 Invoices & payments (81% paid on site, 1.4 days (was 34), $2,140 overdue (was $18,420), $96,300 collected; Tom's invoice paid on site, Linda's funded by financing) · 04 Trucks & stock (dark window: 6 trucks with part counts vs par, 3 low, restock list $1,286 to Front Range Supply) · 05 Owner's daily report (dark phone "Today at Peak": $28,460 ▲12%, 46 jobs, $618 avg ticket, 58% close rate, 6 new members, revenue by tech).

## IH5 · Honest choice
Field-service software alone (ServiceTitan · Jobber · Housecall Pro) · **Your software + [Brand]** (most chosen) · Fully custom. Rows: best for (5–40 trucks), what customers see, time (2–6 weeks / ~12 weeks / 4–6 months), budget, customer list ownership.

## IH6 · Process: "About 12 weeks, without a truck sitting idle."
Week 1 A day in the trucks (7 missed calls, 11 quotes, $18,420 unpaid) · Weeks 2–4 Figma (booking phone, 34 screens) · Weeks 5–9 Build and connect (booking → Jobber / deposit $49 Stripe / dispatch truck 7) · Week 10 Train (office, dispatch, 14 techs, price book) · Weeks 11–12 Go live (text-back + booking → tech app + quotes → memberships) · Ongoing (+31% booked jobs).

## IH7 · Case study: Peak Plumbing · Denver, CO · 14 trucks
"From missed calls to a full board by 8 AM." · Metrics +31% booked jobs · 1.4 days to get paid (was 34) · 4.9★ 640 Google reviews · Quote "Half our emergency jobs book themselves overnight now. I stopped sleeping with the phone on the pillow." · Peak Plumbing owner · Visual: owner report + tech app. Glow: blue.

## IH8 · Pricing (placeholders)
Get booked · Website + online booking from **$3,900** · 2–4 weeks · **Full trade business upgrade** from **$14,900** · about 12 weeks · Multi-trade platform from **$29,000** · 14–20 weeks. Chips: trucks, field-service software, tech app, member plans, financing, data migration.

## IH9 · FAQ
Leave ServiceTitan/Jobber/Housecall Pro? (no) · My techs aren't "app people" · Who answers emergency calls at night? (text-back; optional AI receptionist) · Won't a call-out deposit put customers off? · Can customers pay over time? (financing) · Ownership.

## IH10–11 · Go deeper + CTA
Website & online booking · Payments & financing · AI receptionist · Local SEO. CTA "Tell us how your trucks run today. **30 minutes**, and you'll know what to fix first." Mountain Time.

---

## Consistency with homepage / approved pages
| Item | This page | Source |
|---|---|---|
| Peak Plumbing · Denver · 4.9 · 640 reviews · 14 trucks · 22 yrs · (303) 555-0148 | ✓ | homepage `plumbing` site |
| $49 emergency call-out deposit, credited to the bill | ✓ | homepage checkout |
| Tom R. · "Booked online at 1 AM, they were here by 8. Fixed in an hour." | Tom is the page's customer; quote used on journey tab 05 | homepage `plumbing.q` |
| 60-minute arrival window / leak repair from $129 | site unchanged; Tom's job $289 (supply line + shutoff valve) | homepage |
| Prices | $3,900 / $14,900 / $29,000 | ✓ |

## Open items
- **Owner name** isn't on the homepage; the case quote is credited to "Peak Plumbing owner".
- Confirm integrations with ServiceTitan, Jobber, Housecall Pro, Google Local Services and a financing partner before claiming them.
- Volt & Wire (Dallas electrician) is not used on this page so the story stays on one company; it could appear as a second example if the owner wants electricians shown explicitly.
- Photos: only one checked trades photo (`1621905251189…`), reused for Ryan's avatar and the job photo; replace with licensed photos.
- Tech, supplier (Front Range Supply) and competitor (Mile High Plumbing, Front Range Rooter) names are fictional.
