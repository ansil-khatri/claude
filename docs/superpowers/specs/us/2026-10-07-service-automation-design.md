# Service Page: Business Automation & ERP — Design Spec

- **Date:** 2026-10-07
- **Status:** Mockup built, waiting for owner review
- **Route:** `/services/business-automation`
- **Reference mockup:** `docs/superpowers/mockups/service-automation.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` (design system §3, template §5, accessibility/responsive §6). Only page-specific content is recorded here.

**Story:** your business runs on six spreadsheets and a group chat → three "typing it twice" moments (stock counts, chasing invoices, crew chat dispatch) → each industry's busywork → five things that give you your evenings back → connect vs buy vs build vs ERP → 8–12 weeks → proof → price → objections → automation planning call.

**Mockup mix:** almost all light: ops dashboards, field-tech phone app, A/R aging report, automation flow canvas (n8n-style), Monday report, roles/approvals matrix, data-import mapper, Excel and WhatsApp group chat as "before", bay schedule (Gantt-style) and an iMessage daily report. Class prefix for this page: `bz-`. **No booking UI on this page.**

---

## B1 · Hero (dark panel)
- **Breadcrumb:** Services / Business Automation & ERP
- **H1:** "Your business runs on six spreadsheets and a group chat. **Let one system run the day.**"
- **Sub:** Jobs, orders, stock, invoices and payroll in one place, with your apps finally talking to each other. When a job closes, the invoice goes out, QuickBooks updates and the hours land in payroll. Nobody retypes a thing.
- **CTAs:** Book a free call · See pricing
- **Tech chips:** QuickBooks · Xero · n8n · Make · Zapier · Gusto · Shopify · Square · Toast · Laravel · Next.js · Odoo
- **Visual:** Peak Plumbing ops "Today" (`ops.peakplumbing.com/today`, Denver · 14 trucks): jobs today (2 emergencies), $14,280 invoiced, $1,140 unpaid over 30 days (was $18,400 in June), 0 hours typed by hand; jobs table J-2204–2210 with plumber/status/invoice (J-2207 animates "Not sent" → "Sent · $2,180"; J-2210 "Suggest: Tony"); **"Automations today" log** (41 runs, 0 errors: job closed → invoice emailed + texted → QuickBooks sync → low stock → PO-318 to Ferguson → timesheet to Gusto → review request). Phone: plumber's job app (J-2207 water heater swap, checklist, parts used from Truck 3, customer signature, "Complete & send invoice") → "Invoice sent · QuickBooks synced · 3.5 h → Gusto".
- **Floating cards:** "Job closed 11:42 → invoice sent 11:42 · INV-5528 · $2,180" · "Typed by hand this week · 0 orders · 0 timesheets" · "Stock low → PO drafted · PO-318 · 50-gal heaters × 4".

## B2 · Sound familiar? "You didn't start a business to type things twice."

| Quote | Before | After | Cost (red) | Fix |
|---|---|---|---|---|
| "Every Sunday night I count the walk-in and fix the spreadsheet." | Excel `Inventory_MASTER_v12_SHARE (3).xlsx` ("ORDER!!", `#REF!`, "Luigi's copy says 10") | Ember Kitchen Stock: "Counts drop with every Toast sale", 0 counted by hand, stock bars vs minimum, next step per item (PO-1182 approved ✓, added to PO-1180); waste in October $410 (was $1,900), 0 dishes ran out | 4 h/week, three copies, $1,900 of short rib thrown out while octopus ran out twice. | Stock drops as dishes sell; at minimum the PO writes itself; Marco approves with one tap. |
| "Chasing invoices is my whole Friday." | QuickBooks-style A/R Aging (FreshFold LLC): $18,400 over 30 days across 14 hotel/gym accounts + sticky "CALL ALL OF THEM FRIDAY!! — Nina" | Run log "Invoices & reminders · business accounts": invoice same day as delivery, reminder, card on file charged on due date, 14 payments matched in QuickBooks, 20-days-late → "Ask Nina"; over 30 days late $1,140 (was $18,400) | $18,400 >30 days late; Nina spends every Friday on the phone. | Invoices out the day linens are delivered; reminders at 3/10/20 days; cards charged on due date. |
| "Every morning starts with 40 messages in the crew chat." | WhatsApp group "V&W Crew 🔌": "which frisco address?", "who has the 200A breaker?", two techs at the same Plano EV job, "did anyone call the Ruiz lady back??" | Dispatch board (Tue Oct 13, 4 trucks × 7 AM–3 PM), "0 double-booked", parts noted ("200A kit loaded"), callback Ruiz scheduled, auto-assigned quote visit | Erin's first hour is sending addresses; two electricians drove to the same job; a panel job left without a breaker. | Each electrician gets their jobs in order with notes and parts; drag to move; customer texted automatically. |

## B3 · Showcase: "Every business has its own busywork."
- **Lead:** The big screen is what the office sees, and the phone is what happens out on the floor.

| Tab | Brand · system | Results | Chips | Office screen | Phone |
|---|---|---|---|---|---|
| Salons & spas | Maison Rose · commission & payroll | 6 min payroll prep (was 2 days) · 0 pay disputes since June | Tiered commission, Product + tips, Gusto sync, Stylist app | Staff & pay (Oct 3–16): $21,480 services, $9,412 commission, $2,240 card tips; per-stylist table → "Synced to Gusto"; "How Mia's pay adds up" ($4,198) | Stylist app "Hi Mia · $4,198.00" breakdown |
| Restaurants | Ember Kitchen · stock & purchasing | 29.4% food cost (was 34%) · $1,490 less waste/mo | Toast sales sync, Automatic POs, WhatsApp approvals, Recipe costing | Stock + PO-1182 | PO approval |
| Auto shops | Apex Auto Works · tech time & bays | 85% of clocked hours billed · 86% bay use (was 64%) | Clock in per job, Parts per job, Efficiency flags, QuickBooks sync | Techs & time + "Why Sam is at 69%" | "RO-4822 ready" |
| Home services | Volt & Wire · job costing | 38% avg margin (was 27%) · same-day invoices (was 4 days) | Quoted vs actual, Timesheets, Parts per job, Pay links | Job costing + "Why J-1176 ran over" | Tech timesheet |
| Laundry | FreshFold · plant floor tracking | 0 lost bags (was 6/mo) · 19 h avg turnaround | Bag tags, Station scans, Customer texts, Business accounts | Plant floor kanban (Received → Washing → Drying → Folding → Ready) | "Bag 2241-B Found" scan |
| Phone repair | FixPoint · parts across 3 stores · Miami, FL | $640 dead stock (was $5,200) · 1 text to move parts between stores | Stock per store, Parts per booking, Transfers, Serial numbers | Parts & stock + "Move, don't buy" | Transfer text |

## B4 · What we build (dark panel, 5 tabs): "Five things that give you your evenings back."

| # | Tab · chip | Headline | Fine print | Mockup |
|---|---|---|---|---|
| 01 | One record per job · Jobs · Orders · Invoices · Payments | From the first call to money in the bank, it's all one record. | Built around how your team works, not a generic template. | Peak Plumbing J-2207 record: billed $2,180, parts $742, labor $385, margin $1,053 (48%); 7-event timeline from call 8:14 AM → dispatched → "5 minutes away" text → closed with photos → invoice → Apple Pay → 5-star review |
| 02 | Apps that talk · Shopify · QuickBooks · Gusto · Slack · 5,000+ apps | When one thing happens, the next five happen by themselves. | Every run logged; Slack alert with reason and one-click retry on failure. | n8n-style flow (FixPoint): web order → reserve stock → QuickBooks invoice → store pick list → customer text → stock < 3? → #orders post → PO (skipped); run #8,214, 2.1 s, 0 errors; 1,940 runs/mo, 0 typed by hand |
| 03 | Monday-morning numbers · Live dashboards · Monday email · Any device | Know last week's numbers by 7 AM Monday, without opening a spreadsheet. | Same numbers your accountant sees. | FreshFold Monday report (6 locations): $48,212, 2,214 orders, labor 27.8%, on time 98%; revenue by location; "Worth a look" (Evanston labor 36%, Dryer 3 errors, 13 of 14 accounts paid) + toast "Emailed at 7:00 AM" |
| 04 | Roles & approvals · Roles · Approvals · Audit log | Everyone sees what they need. Big decisions still come to you. | Offboarding: switch off one account, not eleven passwords. | Apex Team & approvals: role matrix (Owner/Office/Techs/Accountant) with "Ask Rick" cells; "Waiting for Rick": PO-512 $1,480, 15% discount RO-4829 (Approve/Decline) |
| 05 | Off the spreadsheets · Excel · Google Sheets · Old software | Your old spreadsheets come with you, cleaned up. | Originals never deleted; export any time. | Excel `Customers_MASTER_v9 (OLD) (2).xlsx` with "DANA KIM / Dana Kim / dana k" → Volt & Wire import: 4,812 read, 4,771 clean, merged by phone, rows needing a look; column mapping with cleaned examples |

## B5 · Honest choice: "Connect your apps, buy software, or build your own? Usually it's a mix."
Lead: we often start by connecting existing apps; custom is worth it when how you work is why customers choose you.

| | **Custom ops system** (recommended) | Connect your apps · n8n · Make · Zapier | Industry software · ServiceTitan · Toast · Shopmonkey | Big ERP · NetSuite · Odoo · SAP B1 |
|---|---|---|---|---|
| Best for | 10–150 people with their own way of working | Good apps that don't talk | Standard workflows in one trade | Larger companies with a finance team |
| Typical cost | From $18,000 once + $50–200/mo hosting | From $2,500 once + $20–300/mo app fees | $250–500/user/mo + setup | $25,000–150,000+ setup + licences |
| Fits how you work | ●●●●● | ●●● | ●●● | — |
| Time to go live | 8–12 weeks | 1–3 weeks | 4–8 weeks | 4–9 months |
| As you grow | Add what you need | Messy past ~40 automations | Only where the vendor goes | Yes, at a price |
| Who owns it | You: code and data | You, on their platforms | Vendor | Vendor |

Note: "Published prices in 2026. App and hosting fees are paid by you directly, never marked up by us."

## B6 · Process: "About 8–12 weeks, step by step." (eyebrow: From spreadsheets to one system)
| Step | When | Title | Visual |
|---|---|---|---|
| 01 | Days 1–5 | Sit in on your week | Hours bars: retyping orders 9 h · chasing invoices 6 h · scheduling 5 h · payroll prep 4 h · stock counts 4 h |
| 02 | Week 2 | Map it on one page (signed off by you) | Flow Call → Quote → Schedule → Job → **Invoice → Paid → QuickBooks** (automated first, highlighted) |
| 03 | Weeks 3–8 | Build it in two-week slices | Jobs + dispatch (week 4) · Invoices + QuickBooks (week 6) · Stock + POs (week 8) |
| 04 | Weeks 7–8 | Move your data over | Import log: 4,771 rows, 37 duplicates merged, 4 need a look |
| 05 | Weeks 9–10 | Run it side by side | Old $48,212.40 = New $48,212.40 · "Matched 10 days in a row" |
| 06 | Every month | Train, hand over, improve | Role videos, a person to call, monthly check-in |

## B7 · Case study (dark): Apex Auto Works · Phoenix, AZ
- **H3:** Nine bays, a whiteboard and three spreadsheets. Now one screen runs the shop.
- **Problem:** whiteboard, quoting app, QuickBooks and spreadsheets for parts/hours/warranty; month-end took two days; nobody knew which techs billed their hours.
- **Built:** repair orders, live bay board, parts matched to supplier invoices, per-job tech clock-ins, two-way QuickBooks sync. Live in 11 weeks incl. two weeks side by side.
- **Metrics:** +1.2 h billed per tech a day · 2 h month-end (was 2 days) · $3,900/month in parts no longer missed
- **Quote:** "I used to find out on the 5th how last month went. Now I check it on my phone between cars."
- **Mockups:** `shop.apexautoworks.com/bays` bay schedule (5 bays × 8 AM–1 PM, RO blocks, "Waiting on parts") + iMessage 6 PM "Apex Shop Report" (14 cars, $9,860, 85% hours billed, Bay 3 idle on a late water pump, MTD $186,420, 41% parts margin).

## B8 · Pricing: "Fixed price. Agreed before we start."
Lead adds: hosting and app fees billed to you at cost, usually $50–300/month.

| Tier | Price (placeholder) | Includes | Time |
|---|---|---|---|
| Automations · Connect what you have | from **$2,500** | Up to 10 automations (QuickBooks/Xero, Shopify, Square, Gusto, Google, Slack), run log + alerts, 30 days of fixes | 1–3 weeks |
| **Most chosen · Ops system for your team** | from **$18,000** | Jobs/orders + dispatch, invoices + accounting sync, stock + POs, roles/approvals/audit log, field phone app, data migration | 8–12 weeks |
| ERP · Multi-location ERP | from **$45,000** | Everything above + multiple locations/warehouses, purchasing, payroll, job costing, per-location and accountant reports | 3–6 months, in phases |

**What changes the price:** teams or locations · apps to connect · data to move · field app · approval steps · reports.

## B9 · FAQ: "Questions before you change how the business runs."
1. Do we have to stop using QuickBooks and our other apps? (no; we connect them)
2. What happens to our old spreadsheets? (imported, originals untouched, two weeks side by side)
3. What if my team won't use it? (built per role; sit in first; videos; watch usage)
4. Is Zapier enough for us? (often, under ~20 automations; we'll say so)
5. Who owns it, and what if you disappear? (you; Laravel/Next.js + PostgreSQL, documented)
6. What does it cost to run each month? ($50–200 hosting, no per-user fee)

## B10 · Often paired with: "Good systems make everything else easier."
AI integration · Payment integration · Mobile app development · Web app development. Industries: Salons & spas, Restaurants, Auto shops, Home services, Laundry, Phone repair.

## B11 · CTA + footer
"Running the business from spreadsheets? *30 minutes* and we'll show you what to automate first." Lead: bring a list of your apps and spreadsheets; we'll name the first three things, hours saved, and a fixed price. Widget: **Automation planning call**.

---

## Consistency with homepage (homepage wins)
All items below were **fixed in the mockup on 2026-10-07** unless marked "Owner to decide". Verified in headless Chrome: values render, no page errors.

| Item | Homepage / approved source | This mockup | Resolution |
|---|---|---|---|
| Peak Plumbing fleet | Homepage: **14 trucks**, 22 yrs in Denver, 4.9 · 640 reviews | "Denver · 7 trucks", "7 trucks · 2 emergencies" | Change to 14 trucks (the jobs table can stay a subset). |
| FixPoint location | Not on homepage; approved Mobile Apps page: **Miami, FL** · ★4.8 · 930 reviews | "Houston, TX · ★4.9 · 690 Google reviews" (showcase tab) | Change to Miami, FL · ★4.8 · 930. |

## Open items (this page)
- Real prices.
- Comparison-table vendor prices (ServiceTitan, NetSuite, etc.) are approximate; verify.
- Uses the same Excel inventory "before" as the SaaS page (pain card 1); fine as a connected story, but consider a different sheet if both pages are seen together.
