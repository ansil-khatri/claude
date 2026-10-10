# Industry Page: Restaurants — Design Spec

- **Date:** 2026-10-09
- **Status:** Mockup built, waiting for owner review
- **Route:** `/industries/restaurants`
- **Reference mockup:** `docs/superpowers/mockups/industry-restaurants.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` and the industry template in `2026-10-08-industry-pages-design.md`. Only page-specific content is recorded here.

**Positioning:** commission-free ordering, reservations with deposits, a kitchen screen, menu and sold-out sync across every channel, food cost, tip pool and a guest list the restaurant owns, built on top of their POS (Toast, Square, Clover).

**Story:** the kitchen is full but the apps keep 30% → three leaks (delivery commission, Friday no-shows, sold-out items still selling on the apps) → follow Olivia R. from Google to "the usual" → behind the pass → "usually no custom software" → 12 weeks without closing for a night → Ember Kitchen case → price → objections → call.

**Mockup mix:** light: orders window (all channels), menu & 86 window, food-cost window, tip-pool window, guests window, payout statement, reservations list, reservation deposit (cream), Google review, 86 board, Google local results, rewards (cream); dark: Ember ordering phone, order status, kitchen display (KDS), owner's report, lock screen, Apple Pay. Booking used once (the reservation deposit in pain 2). Class prefix: `ek-` on top of the shared `au-` industry template.

---

## IR1 · Hero (dark panel)
- **Breadcrumb:** Industries / Restaurants
- **H1:** "The kitchen is full every night. **The apps keep 30% of it.**"
- **Sub:** Your own online ordering, reservations that hold a deposit, a kitchen screen that never loses a ticket, and regulars who come back without a coupon. Built for restaurants, cafés and bars, connected to the POS you already use.
- **Chips:** Works with Toast · Square for Restaurants · Clover · OpenTable · DoorDash Drive
- **Visual:** orders window "Orders · tonight, Fri Oct 16" (86 orders ▲18%, $3,920 direct · 0% commission, −$216 app commission tonight, $46 avg ticket, $6,240 catering this week; 8 orders with channel chips and fee column, #311 Olivia R. highlighted) at 0.7× + dark order-status phone (ready in 25 min).
- **Floating cards:** "Order #311 · Olivia R. · 7:02 PM · $71 · direct · 0% commission" · "Fri · 8:02 PM · short rib 86'd · synced to 4 channels in 2.1 s" · "Reservation · Fri 7:30 PM · table for 4 · $40 deposit held".

## IR2 · Sound familiar?
| Quote | Before | After | Cost | Fix |
|---|---|---|---|---|
| "Delivery apps take 30% of every order, and they keep the customer." | Merchant payout statement, Oct 5–11: 128 orders, $4,820 gross, −$1,446 commission (30%), −$180 promos, $3,194 deposited; "0 guest emails shared" | Ember ordering (dark): pickup 7:15 PM, octopus $24 / short rib $38 / sourdough $9, $71, fees $0.00, +71 points, Apple Pay | $1,446 commission last week, not a single guest email. | Own site + app, 0% commission, every guest yours. |
| "Friday at 8 PM, four tables are empty. Nobody called." | Tonight (Fri Oct 9): 142 covers, 3 no-shows (Romero 4, Becker 2, Okafor 5), 9 turned away | Hold your table: Fri Oct 16, 7:30 PM, 4 guests, hearth counter, $40 deposit ($10/guest) credited, free cancel until Thu 7:30 PM | 3 no-shows: 11 covers, ~$500 of food. | $10-per-guest deposit + reminder. |
| "We 86 the short rib at 8. The apps keep selling it until 10." | Google reviews 4.6 (1,812): Sam W. 1★ "ordered the short rib through an app… sold out… refund took 5 days", Kayla D. 2★ | Menu · tonight: "Short rib marked sold out. Removed in 2.1 s from Website · App · DoorDash · Uber Eats"; octopus 6 left | $212 refunds on Friday + a 1-star review. | One tap on "86" updates every channel. |

## IR3 · Journey: "Follow one guest, from her first takeout order to 'the usual, please.'"
| # | Tab | Stage | Headline | Results | Mockups |
|---|---|---|---|---|---|
| 01 | Found on Google | pastel amber | Olivia searches "wood-fired restaurant near me." You're first. | #1 · 1 tap to your own menu | Ember website (dark) + Google local results (Order pickup button) |
| 02 | Ordered direct | deep brown | She orders on your site, not on an app. You keep the $21. | 0% commission · $21.30 kept on one order | Ordering phone + order status (#311, ready in 25 min) |
| 03 | On the line | light grey | Her ticket hits the hearth the second she pays. | 0 lost tickets · 14 min avg ticket time | Kitchen display, hearth station, 8 tickets (#311 highlighted, DoorDash ticket late in red), "Bump · text Olivia" |
| 04 | Picked up & paid | dark | In and out in under a minute, already paid. | < 1 min at the door · 0 cards at the counter | Status "Ready · shelf B2" + lock screen (ready text, +71 points, Wallet $71) |
| 05 | The usual, please | cream | Two months later, she reorders "the usual" in two taps. | 14 orders since August · +38% repeat orders | Rewards phone (340 pts, reorder the usual, Tuesday short-rib text, birthday, referral, recent orders) + Guests window (3,912 guests, +38%, 86 orders from Tuesday text) |

## IR4 · Behind the pass (dark, 5 tabs)
01 Every order, one screen (orders window, channel chips, fees per order) · 02 Menu & 86 everywhere (menu window: direct vs app prices, toggles per channel, short rib 86'd, Sunday roast scheduled, wine dine-in only) · 03 Food cost & inventory (plate cost per dish, food cost 28.4%, short rib $9.80 → $11.00/lb at Brooklyn Provisions (+$187/week), low stock and drafted Monday order) · 04 Shifts & tip pool (Friday pool $2,846 split by hours × points across 11 staff, labor 29.4%, "Send to Gusto") · 05 Owner's nightly report (dark phone "Tonight at Ember": $9,840 ▲14%, 212 covers, $46 avg check, 84% of online orders direct, food cost 28.4%, sales by channel).

## IR5 · Honest choice
Restaurant POS alone (Toast · Square · Clover) · **Your POS + [Brand]** (most chosen) · Fully custom. Rows: best for, what guests see, time (1–3 weeks / ~12 weeks / 4–6 months), budget, guest list ownership.

## IR6 · Process: "About 12 weeks, without closing for a night."
Week 1 A night on the line (4 tablets, $1,446 commission, 3 no-shows, 2 tickets retyped) · Weeks 2–4 Figma (ordering phone, 28 screens) · Weeks 5–9 Build and connect (order → Toast + KDS / menu.86 → 4 channels / payout fee $0) · Week 10 Train (hosts, line · 6 cooks, managers, QR menus) · Weeks 11–12 Go live (ordering → KDS → reservations, app, rewards; never on a Friday) · Ongoing (+38% repeat orders).

## IR7 · Case study: Ember Kitchen · Brooklyn, NY · 90 seats
"Off the delivery apps, without losing the orders." · Metrics 0% commission on direct orders · +38% repeat orders · $13k kept in October · Quote "We used to cook for the apps. Now our regulars order from us, and we know their names." · Marco Bellini, owner · Visual: owner report + ordering phone. Glow: amber.

## IR8 · Pricing (placeholders)
Get orders · Website + online ordering from **$3,900** · 2–4 weeks · **Full restaurant upgrade** from **$14,900** · about 12 weeks · Restaurant group platform from **$29,000** · 14–20 weeks. Chips: locations, POS, own delivery or DoorDash Drive, rewards, catering, menu migration.

## IR9 · FAQ
Leave Toast/Square/Clover? (no) · Should I leave DoorDash and Uber Eats? (not right away; move regulars direct) · Will line cooks use a kitchen screen? · Won't a reservation deposit scare guests? · App or website · Ownership.

## IR10–11 · Go deeper + CTA
Ordering app & rewards · Payments & deposits · Automation & ERP · Local SEO. CTA "Tell us how your restaurant runs today. **30 minutes**, and you'll know what to fix first." Eastern Time.

---

## Consistency with homepage / approved pages
| Item | This page | Source |
|---|---|---|
| Brooklyn, NY · 4.8 · 2,100 reviews · 90 seats · Smith St | ✓ | homepage SITES, mobile-apps |
| Order #311 · 3 items · $71 · pickup 7:15 · Chef Marco | ✓ | mobile-apps status |
| 30% commission · $4,820 / −$1,446 / −$180 / $3,194 · 128 orders | ✓ | mobile-apps pain card |
| 0% commission · +38% repeat orders | ✓ | mobile-apps showcase |
| 86 orders tonight · $3,920 direct · $46 avg ticket · $6,240 catering · $13k kept in October · Marco Bellini (owner) | ✓ | payments page |
| Prices | $3,900 / $14,900 / $29,000 | ✓ |

## Open items
- Confirm integrations with Toast, Square for Restaurants, Clover, OpenTable, DoorDash Drive and Uber Eats menu sync before claiming them.
- Food photos reuse the two checked Ember photos; replace with real dish photos.
- The Google review rating on the "before" card (4.6 · 1,812) is intentionally lower than today's 4.8 · 2,100.
- Supplier (Brooklyn Provisions), competitors (Smith & Vine Trattoria, Court St Grill) and staff names are fictional.
