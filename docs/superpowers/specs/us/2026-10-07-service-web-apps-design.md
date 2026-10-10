# Service Page: Web Apps — Design Spec

- **Date:** 2026-10-07
- **Status:** Mockup built, waiting for owner review
- **Route:** `/services/web-app-development`
- **Reference mockup:** `docs/superpowers/mockups/service-web-apps.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md`, which defines the design system (§3), the service-page template (§5) and the accessibility/responsive rules (§6). This spec only records what is specific to this page.

**Story:** you've outgrown the spreadsheet → three moments you recognize → the system we'd build for your industry → what it can do → which stack → 10 weeks step by step → proof → price → objections → book.

**Mockup mix:** mostly light admin UIs (white dashboards, calendars, tables, invoices) with a light Stripe checkout and run log; dark only in the code-editor process card. Booking appears once (Maison Rose calendar). Desktop screens are cropped and zoomed per hard rule 10 (`crop()` / `zoom()` helpers live in this file).

---

## W1 · Hero (dark panel)
- **Breadcrumb:** Services / Web Apps
- **H1:** "Outgrown the spreadsheet? **Get a system built for how you work.**"
- **Sub:** Customer portals, booking systems, dashboards and internal tools, built around how your team already works. Opens in any browser on any device, with nothing to install.
- **CTAs:** Book a free call · See web app pricing
- **Tech chips:** Next.js · React · Node (MERN) · Laravel · Django · Ruby on Rails · PostgreSQL
- **Visual:** FreshFold ops dashboard in a browser (`app.freshfold.com/today`): sidebar, ⌘K search, "Good morning, Nina", 4 KPIs (64 orders ▲12%, 9 out for delivery, $2,418 paid, 0 late), live orders table (#2231–#2236 with status/payment/driver pills), and Mike's route panel. A phone shows the customer tracking page ("Mike arrives in 8 min", order timeline) at `track.freshfold.com`.
- **Floating cards:** "Automation · Invoice INV-2235 emailed ✓" · "Live at app.freshfold.com" · "Replaced Excel + 6 apps → 1 login".

## W2 · Sound familiar? "Why owners call us about a web app."
Hover/tap wipes each **before** to the **after**.

| Quote | Before | After | Cost (red) | Fix |
|---|---|---|---|---|
| "We run the whole business out of a spreadsheet." | Excel `Orders_FINAL_v7 (2).xlsx`: `??? ask Sam`, `#REF!`, red "NO" paid cells, sheet tabs "Copy of Orders" / "OLD - DONT USE" | FreshFold Orders screen with filters (All 64 · New 6 · In progress 21 · Unpaid 0) | Three copies, and nobody knows which one is right. | One web app with every order, status and payment, live for the whole team. |
| "We pay for seven tools that don't talk to each other." | Business Visa statement: HubSpot $450, Podium $289, Trello $120, QuickBooks $99, Zapier $73.50, Calendly $64, Jotform $39 = **$1,134.50/mo** + sticky note "every night at 9pm: Calendly → QuickBooks → Trello. Copy, paste. 45 min" | Apex Auto Works "Today at Apex": 14 booked, 3 quotes ($1,339), $6,240 paid, 38 automatic texts, jobs-by-bay table | $1,134 a month, and someone still copies data between them every night. | One system shaped around your workflow. You pay for hosting, not per seat. |
| "Customers email all day asking for updates." | Gmail-style inbox, 47 unread: "Is the electrician still coming Thursday?", voicemail, "Where do I pay?", "Breaker tripping AGAIN" | Volt & Wire customer portal for Tom Reynolds: EV charger install timeline, next visit (Carlos M., Thu 9–11 AM), approved estimate E-1042 ($1,240, e-signed), "Pay $940" | 47 unread before 10 AM. Every one pulls someone away from paid work. | A customer portal where they check status, approve estimates and pay. |

## W3 · Showcase: "The system behind the front desk."
- **Lead:** On the big screen is what your team runs the day on; on the phone is what your customers see. Both are the same web app.
- **Stage:** brand-colored; app icon, name, location, rating, 2 result tiles, feature chips, **a cropped admin browser + a customer phone** (differs from the mobile page, which shows three phones). Controls as in the template (tabs, ‹ ›, counter, 6s autoplay).

| Tab | Brand · place | Results | Chips | Admin screen | Customer phone |
|---|---|---|---|---|---|
| Salons & spas | Maison Rose · Austin, TX · ★4.9 (312) | 9 h front-desk time saved/wk · −64% no-shows | Staff calendar, Online booking, Deposits, Client notes | `book.maisonrose.com/admin` staff day calendar (4 stylists) + booking detail with color formula | Balayage with stylist picker, "Reserve my spot · $85" |
| Laundry | FreshFold · Chicago, IL · ★4.8 (1,240) | 18,402 orders moved off Excel · −50% "where is it?" calls | Live orders, Driver routes, Payments, Auto invoices | Ops "Today" dashboard + route | Order tracking |
| Automotive | Apex Auto Works · Phoenix, AZ · ★4.9 (860) | 31 h admin saved/wk · +$18k approved repairs/mo | Job board, Photo quotes, Text approvals, QuickBooks sync | Kanban job board (Checked in → Inspecting → Waiting approval → In repair → Ready) | Brake quote approval |
| Restaurants | Ember Kitchen · Brooklyn, NY · ★4.8 (2,100) | 0% commission on orders · $6.2k catering/week | Pickup queue, Catering orders, Payouts, Guest list | `ops.emberkitchen.com` "Tonight" + catering order (Northwind office) | Pickup order |
| Home services | Volt & Wire · Dallas, TX · ★4.9 (427) | 10 min to send an estimate · +41% estimates won | Dispatch board, Estimates, Customer portal, Invoices | Dispatch board by electrician + estimate E-1043 | "Your install" |
| Phone repair | FixPoint · Miami, FL · ★4.8 (930) | 45 min avg. repair · 3 stores, one system | Repair tickets, Inventory, Trade-in quotes, Status texts | Repair tickets + low-stock reorder + trade-in quote | "Your repair" |

Note under stage: "Concept apps for this mockup. Replace with real client projects (with permission) before launch."

## W4 · What your web app can do (dark panel, 5 tabs): "Your whole operation, one login away."

| # | Tab · chip | Headline | Story (short) | Fine print | Mockup |
|---|---|---|---|---|---|
| 01 | Customer portal · Login · Status · E-sign · Pay | "Where are we at?" answered without a phone call. | Customers see status, next visit, photos and the estimate; sign and pay on one page. | Login by email link; automatic status texts/emails. | Volt & Wire portal + invoice INV-3381 (balance $940) + site photos + "Estimate approved" toast |
| 02 | Booking & scheduling · Calendar · Staff · Deposits | The front desk, without the front desk. | Online booking, one staff calendar, deposits up front, automatic reminders, client notes. | Google Calendar/Outlook sync; buffers, breaks, double-booking rules. | Maison Rose admin calendar + "New booking · $85 deposit paid" toast |
| 03 | Dashboards & reports · Live numbers · Exports | Know your numbers without opening Excel. | Live bookings, revenue, no-shows, top services; Monday email report; CSV export. | Built on your real data, not 40 charts nobody reads. | Maison Rose "October at a glance": 412 bookings ▲38%, $58.9k, 3.1% no-shows, 71% rebooked, weekly chart, top services, "Emailed to Sophie every Monday 7 AM" |
| 04 | Invoices & payments · Stripe · Apple Pay · QuickBooks | Send the invoice. Get paid tonight. | Pay link by text/email; card or Apple Pay; marked paid; synced to QuickBooks. | Deposits, partial payments, refunds, overdue reminders. | Apex invoices list ($48,210 collected, 82% paid same day vs 31% on paper, $0 overdue) + Stripe-style checkout $418 (Klarna/card) + "Payment succeeded" |
| 05 | Connects your tools · QuickBooks · Twilio · Google · Shopify | Your tools finally talk to each other. | A booking creates the invoice, texts the customer, blocks the calendar. | Every automation has a run log. | Run log #2,416: quote approved → QuickBooks invoice → customer text → Google Calendar bay block (1.3s, 0 errors); 2,416 runs · 0 errors · 31 h saved/wk |

## W5 · Honest tech choice: "Next.js, Laravel, Django or Rails? All four are good. Here's the fit."
Lead: we pick by what you're building and who maintains it; if you already have code in one, we work in it rather than rewrite.

| | **Next.js** (recommended, "Most chosen") · React + Node, incl. MERN | Laravel · PHP | Django · Python | Ruby on Rails |
|---|---|---|---|---|
| Best for | Customer portals and SaaS where speed, SEO and polish matter | Admin-heavy booking/invoicing/back-office | Reporting, data-heavy, AI features | Marketplaces, MVPs, existing Rails apps |
| Time to first version | 6–10 weeks | 6–10 weeks | 8–12 weeks | 6–10 weeks |
| Hosting / month | $20–150 | $15–100 | $25–150 | $25–150 |
| Admin panel | Custom-built | Filament, day one | Django admin, day one | ActiveAdmin, day one |
| Hiring developers later | ●●●●● | ●●●● | ●●●● | ●●● |

## W6 · Process: "About 10 weeks, step by step." (eyebrow: From spreadsheet to software)
| Step | When | Title | Visual |
|---|---|---|---|
| 01 | Week 1 | Map how you work | FreshFold order flow: Order in → Pickup → Wash → Deliver → Invoice + text; "4 roles · 11 screens · 3 integrations" |
| 02 | Weeks 2–3 | Design the screens | Figma-style frame of the FreshFold dashboard |
| 03 | Weeks 4–8 | Build in sprints (private link from week 4, updated Fridays) | Code snippet `await orders.markDelivered(id)` · 214 tests passed · staging build 58 |
| 04 | Week 9 | Move your data | Import list: Orders_FINAL_v7 18,402 rows ✓ · Customers.csv 1,204 ✓ · QuickBooks invoices 3,880 ✓ · 212 duplicates merged |
| 05 | Week 10 | Train & go live | Pills: "Owner · Managers · Drivers trained" · "app.freshfold.com is live" |
| 06 | Ongoing | Grow it with you | Updates, backups, uptime, monthly features |

## W7 · Case study (dark): Apex Auto Works · Phoenix, AZ
- **H3:** From a whiteboard and five apps to one shop system.
- **Problem:** whiteboard jobs, Word quotes, QuickBooks invoices, texts from the owner's personal phone; nine bays, nobody sees the whole day.
- **Built:** Laravel shop system: online booking, 9-bay job board, photo quotes approved by text, QuickBooks sync. Live in 10 weeks.
- **Metrics:** 31 h admin saved/week · +$18k approved repairs/month · 5 → 1 tools to log into
- **Quote:** "We wiped the whiteboard. Every car, every quote and every payment is on one screen now."
- **Mockups:** job board (`shop.apexautoworks.com/board`) + phone quote approval ("Approve quote · $289").

## W8 · Pricing: "Fixed price. Agreed before we start."
| Tier | Price (placeholder) | Includes | Time |
|---|---|---|---|
| Starter · Internal tool | from **$7,900** | One team, one workflow, up to 8 screens, logins/roles, spreadsheet import | 5–7 weeks |
| **Most chosen · Business web app** (lime) | from **$16,900** | + customer portal & staff admin, payments/invoicing, email/text notifications, 2 integrations | 9–12 weeks |
| Advanced · Platform or SaaS (dark) | from **$34,000** | Multi-location/tenant, Stripe Billing, API for a mobile app, audit log, SSO, advanced roles | 14–20 weeks |

**What changes the price:** user roles · integrations · data migration · payments · real-time features · reporting depth.

## W9 · FAQ: "Questions before you build a web app."
1. Do I need a web app or a mobile app? (start with web; add apps later on the same backend)
2. Can you move our data out of spreadsheets and old tools? (import, merge duplicates, check totals; old tools run until you switch)
3. Which tech stack will you use? (Next.js for portals/SaaS, Laravel for admin-heavy; Django for data/AI; Rails for existing Rails)
4. Can you take over an app someone else built? (incl. Lovable/Bolt/Replit; review first, written report)
5. Where is it hosted, and what does it cost to run? (your Vercel/AWS/DigitalOcean account, $20–150/mo; Care from $290/mo)
6. Who owns the code and the data? (you, 100%)

## W10 · Often paired with: "Make the web app work even harder."
Mobile apps · Payment integration · Business automation & ERP · Fix my AI-built app. Industries row: Salons & spas, Laundry, Automotive, Restaurants, Home services, Phone repair.

## W11 · CTA + footer
"Running on spreadsheets? *30 minutes* and you'll know what it takes to replace them." Lead: "Bring the spreadsheet." Shared booking widget + footer.

---

## Consistency with homepage (homepage wins)
Checked against the homepage on 2026-10-07 (prices, timelines, concept-brand facts): no conflicts found. Care from $290/mo in the FAQ matches the homepage.

## Open items (this page)
- Real starting prices and timelines for the three tiers; confirm "about 10 weeks".
- Hosting cost ranges in the comparison table are estimates; confirm before launch.
- All six showcase brands and the Apex case study are concepts; replace or label.
