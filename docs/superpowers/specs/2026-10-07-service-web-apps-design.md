# Service Page: Web Apps — Design Spec

- **Date:** 2026-10-07
- **Status:** Mockup built, waiting for owner review
- **Market:** Dubai + UAE (localized 2026-10-10 per `2026-10-09-uae-localization-design.md`; US version in `specs/us/`)
- **Route:** `/services/web-app-development`
- **Reference mockup:** `docs/superpowers/mockups/service-web-apps.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md`, which defines the design system (§3), the service-page template (§5) and the accessibility/responsive rules (§6). This spec only records what is specific to this page.

**Story:** you've outgrown the spreadsheet → three moments you recognize → the system we'd build for your industry → what it can do → which stack → 10 weeks step by step → proof → price → objections → book.

**Mockup mix:** mostly light admin UIs (white dashboards, calendars, tables, invoices) with a light Stripe checkout and run log; dark only in the code-editor process card. Booking appears once (Maison Rose calendar). Desktop screens are cropped and zoomed per hard rule 10 (`crop()` / `zoom()` helpers live in this file).

---

## W1 · Hero (dark panel)
- **Breadcrumb:** Services / Web Apps
- **H1 kicker:** "Custom web apps and business software in Dubai & UAE"
- **H1:** "Outgrown the spreadsheet? **Get a system built for how you work.**"
- **Sub:** Customer portals, booking systems, dashboards and internal tools, built around how your team already works. Opens in any browser on any device, with nothing to install.
- **CTAs:** Book a free call · WhatsApp us · See web app pricing
- **Tech chips:** Next.js · React · Node (MERN) · Laravel · Django · Ruby on Rails · PostgreSQL
- **Visual:** FreshFold ops dashboard in a browser (`app.freshfold.com/today`): sidebar, ⌘K search, "Good morning, Nina", 4 KPIs (64 orders ▲12%, 9 out for delivery, AED 2,418 paid, 0 late), live orders table (#2231–#2236, Dubai neighbourhoods Al Barsha/Al Quoz/Jumeirah/Business Bay/Al Satwa/Deira, status/payment/driver pills in AED), and Mike's route panel. A phone shows the customer tracking page ("Mike arrives in 8 min", order timeline) at `track.freshfold.com`.
- **Floating cards:** "Automation · Invoice INV-2235 emailed ✓" · "Live at app.freshfold.com" · "Replaced Excel + 6 apps → 1 login".

## W1b · In plain English (stone band, no animation)
"We replace spreadsheets and WhatsApp groups with one web app built around how your team works…", fact row **From** AED 29,000 · **Time** 5–12 weeks · **Languages** English + Arabic · **Based in** Dubai.

## W2 · Sound familiar? "Why owners call us about a web app."
Hover/tap wipes each **before** to the **after**.

| Quote | Before | After | Cost (red) | Fix |
|---|---|---|---|---|
| "We run the whole business out of a spreadsheet." | Excel `Orders_FINAL_v7 (2).xlsx`: `??? ask Sam`, `#REF!`, red "NO" paid cells, sheet tabs "Copy of Orders" / "OLD - DONT USE" | FreshFold Orders screen with filters (All 64 · New 6 · In progress 21 · Unpaid 0) | Three copies, and nobody knows which one is right. | One web app with every order, status and payment, live for the whole team. |
| "We pay for seven tools that don't talk to each other." | Business card statement: HubSpot AED 450, Podium AED 289, Trello AED 120, Zoho Books AED 99, Zapier AED 73.50, Calendly AED 64, Jotform AED 39 = **AED 1,134.50/mo** + sticky note "every night at 9pm: Calendly → Zoho Books → Trello. Copy, paste. 45 min" | Apex Auto Works "Today at Apex": 14 booked, 3 quotes (AED 1,339), AED 6,240 paid, 38 automatic texts, jobs-by-bay table | AED 1,134 a month, and someone still copies data between them every night. | One system shaped around your workflow. You pay for hosting, not per seat. |
| "Customers email all day asking for updates." | Gmail-style inbox, 47 unread: "Is the electrician still coming Thursday?", voicemail, "Where do I pay?", "Breaker tripping AGAIN" | Volt & Wire customer portal for Tom Reynolds (Al Barsha 2, Dubai): EV charger install timeline, next visit (Carlos M., Thu 9–11 AM), approved estimate E-1042 (AED 1,240, e-signed), "Pay AED 940" | 47 unread before 10 AM. Every one pulls someone away from paid work. | A customer portal where they check status, approve estimates and pay. |

## W3 · Showcase: "The system behind the front desk."
- **Lead:** On the big screen is what your team runs the day on; on the phone is what your customers see. Both are the same web app.
- **Stage:** brand-colored; app icon, name, location, rating, 2 result tiles, feature chips, **a cropped admin browser + a customer phone** (differs from the mobile page, which shows three phones). Controls as in the template (tabs, ‹ ›, counter, 6s autoplay). An `.ex-chip` ("Example project · illustrative numbers") sits under the stage.

| Tab | Brand · place | Results | Chips | Admin screen | Customer phone |
|---|---|---|---|---|---|
| Salons & spas | Maison Rose · Jumeirah, Dubai · ★4.9 (312) | 9 h front-desk time saved/wk · −64% no-shows | Staff calendar, Online booking, Deposits, Client notes | `book.maisonrose.ae/admin` staff day calendar (4 stylists) + booking detail with color formula | Balayage with stylist picker, "Reserve my spot · AED 100" |
| Laundry | FreshFold · Dubai Marina & JLT · ★4.8 (1,240) | 18,402 orders moved off Excel · −50% "where is it?" calls | Live orders, Driver routes, Payments, Auto invoices | Ops "Today" dashboard + route | Order tracking |
| Automotive | Apex Auto Works · Al Quoz, Dubai · ★4.9 (860) | 31 h admin saved/wk · +AED 18k approved repairs/mo | Job board, Photo quotes, Text approvals, Zoho Books sync | Kanban job board (Checked in → Inspecting → Waiting approval → In repair → Ready) | Brake quote approval |
| Restaurants | Ember Kitchen · Al Rigga, Dubai · ★4.8 (2,100) | 0% commission on orders · AED 6.2k catering/week | Pickup queue, Catering orders, Payouts, Guest list | `ops.emberkitchen.com` "Tonight" + catering order | Pickup order |
| Home services | Volt & Wire · Dubai & Sharjah · ★4.9 (427) | 10 min to send an estimate · +41% estimates won | Dispatch board, Estimates, Customer portal, Invoices | Dispatch board by electrician + estimate E-1043 | "Your install" |
| Phone repair | FixPoint · Deira, Dubai · ★4.8 (930) | 45 min avg. repair · 3 stores, one system | Repair tickets, Inventory, Trade-in quotes, Status texts | Repair tickets + low-stock reorder + trade-in quote | "Your repair" |

## W4 · What your web app can do (dark panel, 5 tabs): "Your whole operation, one login away."

| # | Tab · chip | Headline | Story (short) | Fine print | Mockup |
|---|---|---|---|---|---|
| 01 | Customer portal · Login · Status · E-sign · Pay | "Where are we at?" answered without a phone call. | Customers see status, next visit, photos and the estimate; sign and pay on one page. | Login by email link, or UAE Pass for verified identities. | Volt & Wire portal + invoice INV-3381 (balance AED 940) + site photos + "Estimate approved" toast |
| 02 | Booking & scheduling · Calendar · Staff · Deposits | The front desk, without the front desk. | Online booking, one staff calendar, deposits up front, automatic reminders, client notes. | Google Calendar/Outlook sync; buffers, breaks, double-booking rules. | Maison Rose admin calendar + "New booking · AED 100 deposit paid" toast |
| 03 | Dashboards & reports · Live numbers · Exports | Know your numbers without opening Excel. | Live bookings, revenue, no-shows, top services; Monday email report; CSV export. | Built on your real data, not 40 charts nobody reads. | Maison Rose "October at a glance": 412 bookings ▲38%, AED 58.9k, 3.1% no-shows, 71% rebooked, weekly chart, top services, "Emailed to Sophie every Monday 7 AM" |
| 04 | Invoices & payments · Apple Pay · Tabby · Zoho Books | Send the invoice. Get paid tonight. | Pay link by text/WhatsApp; card, Apple Pay or Tabby; marked paid; synced to Zoho Books; VAT 5% on every invoice. | Deposits, partial payments, refunds, overdue reminders. | Apex invoices list (AED 48,210 collected, 82% paid same day vs 31% on paper, AED 0 overdue) + checkout AED 418 (Tabby/card) + "Payment succeeded" |
| 05 | Connects your tools · Zoho Books · WhatsApp · Google · Shopify | Your tools finally talk to each other. | A booking creates the invoice, messages the customer on WhatsApp, blocks the calendar. | Every automation has a run log. | Run log #2,416: quote approved → Zoho Books invoice → WhatsApp message → Google Calendar bay block (1.3s, 0 errors); 2,416 runs · 0 errors · 31 h saved/wk |

## W5 · Honest tech choice: "Next.js, Laravel, Django or Rails? All four are good. Here's the fit."
Lead: we pick by what you're building and who maintains it; if you already have code in one, we work in it rather than rewrite.

| | **Next.js** (recommended, "Most chosen") · React + Node, incl. MERN | Laravel · PHP | Django · Python | Ruby on Rails |
|---|---|---|---|---|
| Best for | Customer portals and SaaS where speed, SEO and polish matter | Admin-heavy booking/invoicing/back-office | Reporting, data-heavy, AI features | Marketplaces, MVPs, existing Rails apps |
| Time to first version | 6–10 weeks | 6–10 weeks | 8–12 weeks | 6–10 weeks |
| Hosting / month | AED 75–550 | AED 55–370 | AED 90–550 | AED 90–550 |
| Admin panel | Custom-built | Filament, day one | Django admin, day one | ActiveAdmin, day one |
| Hiring developers later | ●●●●● | ●●●● | ●●●● | ●●● |

## W6 · Process: "About 10 weeks, step by step." (eyebrow: From spreadsheet to software)
| Step | When | Title | Visual |
|---|---|---|---|
| 01 | Week 1 | Map how you work | FreshFold order flow: Order in → Pickup → Wash → Deliver → Invoice + WhatsApp; "4 roles · 11 screens · 3 integrations" |
| 02 | Weeks 2–3 | Design the screens | Figma-style frame of the FreshFold dashboard |
| 03 | Weeks 4–8 | Build in sprints (private link from week 4, updated Fridays) | Code snippet `await orders.markDelivered(id)` · 214 tests passed · staging build 58 |
| 04 | Week 9 | Move your data | Import list: Orders_FINAL_v7 18,402 rows ✓ · Customers.csv 1,204 ✓ · Zoho Books invoices 3,880 ✓ · 212 duplicates merged |
| 05 | Week 10 | Train & go live | Pills: "Owner · Managers · Drivers trained" · "app.freshfold.com is live" |
| 06 | Ongoing | Grow it with you | Updates, backups, uptime, monthly features |

## W7 · Case study (dark): Apex Auto Works · Al Quoz, Dubai
- **H3:** From a whiteboard and five apps to one shop system.
- **Problem:** whiteboard jobs, Word quotes, Zoho Books invoices, texts from the owner's personal phone; nine bays, nobody sees the whole day.
- **Built:** Laravel shop system: online booking, 9-bay job board, photo quotes approved by WhatsApp, Zoho Books sync. Live in 10 weeks.
- **Metrics:** 31 h admin saved/week · +AED 18k approved repairs/month · 5 → 1 tools to log into
- **Quote:** "We wiped the whiteboard. Every car, every quote and every payment is on one screen now."
- **`.ex-chip`:** "Example project · illustrative numbers"
- **Mockups:** job board (`shop.apexautoworks.com/board`) + phone quote approval ("Approve quote · AED 890").

## W8 · Pricing: "Fixed price. Agreed before we start."
| Tier | Price | Includes | Time |
|---|---|---|---|
| Starter · Internal tool | from **AED 29,000** | One team, one workflow, up to 8 screens, logins/roles, spreadsheet import | 5–7 weeks |
| **Most chosen · Business web app** (lime) | from **AED 59,000** | + customer portal & staff admin, payments/invoicing, email/WhatsApp notifications, 2 integrations | 9–12 weeks |
| Advanced · Platform or SaaS (dark) | from **AED 120,000** | Multi-location/tenant, Stripe/Telr Billing, API for a mobile app, audit log, SSO, advanced roles | 14–20 weeks |

**What changes the price:** user roles · integrations · data migration · payments · real-time features · reporting depth. Prices exclude 5% VAT.

## W9 · FAQ: "Questions before you build a web app."
1. Do I need a web app or a mobile app? (start with web; add apps later on the same backend)
2. Can you move our data out of spreadsheets and old tools? (import, merge duplicates, check totals; old tools run until you switch)
3. Which tech stack will you use? (Next.js for portals/SaaS, Laravel for admin-heavy; Django for data/AI; Rails for existing Rails)
4. Can you take over an app someone else built? (incl. Lovable/Bolt/Replit; review first, written report)
5. Where is it hosted, and what does it cost to run? (your Vercel/AWS/DigitalOcean account, AED 75–550/mo; Care from AED 790/mo)
6. Who owns the code and the data? (you, 100%)
7. Can customers log in with UAE Pass? (yes, next to email login, for portals that need verified identities)

## W10 · Often paired with: "Make the web app work even harder."
Mobile apps · Payment integration · Business automation & ERP · Fix my AI-built app. Industries row: Salons & spas, Laundry, Automotive, Restaurants, Home services, Phone repair.

## W11 · CTA + footer
"Running on spreadsheets? *30 minutes* and you'll know what it takes to replace them." Lead: "Bring the spreadsheet." WhatsApp CTA next to the three-step list, shared booking widget (Mon–Fri, Dubai time/GST, "Google Meet or in person in Dubai") and footer (`Based in Dubai · Trade licence [number] · Mon–Fri 9:00–18:00 GST · WhatsApp +971 50 000 0000`).

---

## Consistency with homepage (AED)
| Value | Web apps page | Homepage | Match |
|---|---|---|---|
| Business web app tier | AED 59,000 | between Launch (7,900) and Build (49,000) tiers — a deliberate mid-tier, not meant to equal either | — (by design) |
| Care plan | AED 790/mo | Care from AED 790/mo | ✓ |
| VAT | "Prices exclude 5% VAT" | "Prices exclude 5% VAT" | ✓ |
| WhatsApp number | +971 50 000 0000 | +971 50 000 0000 | ✓ |
| Accounting tool | Zoho Books | Zoho Books (homepage §automation deep dive) | ✓ |

## Open items (this page)
- Real starting prices and timelines for the three tiers; confirm "about 10 weeks".
- Hosting cost ranges in the comparison table are estimates; confirm before launch.
- UAE Pass integration: confirm we can actually offer this before it goes live as a claim.
- All six showcase brands and the Apex case study are concepts; replace or label.
