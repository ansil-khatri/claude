# Service Page: SaaS Development — Design Spec

- **Date:** 2026-10-07
- **Status:** Mockup built, waiting for owner review
- **Market:** Dubai + UAE (localized 2026-10-10 per `2026-10-09-uae-localization-design.md`; US version in `specs/us/`)
- **Route:** `/services/saas-development`
- **Reference mockup:** `docs/superpowers/mockups/service-saas.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` (design system §3, template §5, accessibility/responsive §6). Only page-specific content is recorded here.

**Audience:** founders and operators who know what their industry is missing (often a business owner whose internal tool other owners want), plus founders with a struggling MVP.

**Story:** you know what your industry is missing → three founder situations → SaaS products per vertical → what a SaaS needs before it can charge → custom vs no-code vs AI builder vs hiring → 12 weeks to first paying customer → proof → price → objections → SaaS planning call.

**Mockup mix:** light SaaS admin UIs (MRR dashboards, billing, roles, onboarding, integrations), an error-tracker "before" and system-health "after", JSON webhook, terminal line. New concept SaaS brands per vertical, each tied to an existing concept business (Shelfwise ← Ember Kitchen, Glowdesk ← Maison Rose, Partsmith ← Apex Auto, Routeline ← Volt & Wire / Peak Plumbing).

---

## SA1 · Hero (dark panel)
- **Breadcrumb:** Services / SaaS Development
- **H1 kicker:** "SaaS and MVP development in Dubai & UAE"
- **H1:** "You know what your industry is missing. **We'll build it.**"
- **Sub:** SaaS products from first version to thousands of paying customers: sign-up, monthly plans, team accounts, dashboards and an admin you control. Your first paying customer in about 12 weeks.
- **CTAs:** Book a free call · WhatsApp us · See SaaS pricing
- **Tech chips:** Next.js · React · Node.js · Laravel · PostgreSQL · Stripe Billing · AWS · Vercel · ISO 27001-ready · UAE data residency
- **Visual:** Ledgerly founder admin (`admin.ledgerly.com`, "Business overview · live from Stripe"): MRR AED 48,117, 2,053 paying companies, 18.4% trial → paid, 1.9% churn, MRR chart Jan–Oct, new subscriptions today (Harbor Legal AED 129 · Northwind AED 39 · Brightline Dental AED 39), revenue by plan (Team AED 39 / Solo AED 12 / Business AED 129), NRR 108%, 312 trials, "Stripe recovered AED 3,140 in failed card payments". Phone: Ledgerly customer app "Cash today" (AED 48,210 received, 12 auto-matched, approvals list, "Approve 3 matches").
- **Floating cards:** "New subscription · Harbor Legal · AED 129 / month" · "MRR AED 48.1k ▲ 12%" · "Trial → paid 18.4%".

## SA1b · In plain English (stone band, no animation)
"We build software products for founders and industry experts in Dubai and Abu Dhabi…", fact row **From** AED 24,000 · **Time** 2–14 weeks · **Languages** English + Arabic · **Based in** Dubai.

## SA2 · Sound familiar? "Why founders call us."

| Quote | Before | After | Cost (red) | Fix |
|---|---|---|---|---|
| "Other owners keep asking for the spreadsheet we built." | Excel `Inventory_MASTER_v12_SHARE (3).xlsx`: "ORDER!!", `#REF!`, "Luigi's copy says 10", tabs "Copy for Luigi's", "Brookside v3", "OLD" | Shelfwise inventory app: food cost 28.4%, AED 14,820 on hand, 7 below par, below-par table by supplier, draft Gulf Fresh Produce order AED 300.10 | Emailed to 11 restaurants. Every copy differs, breaks when edited, and nobody pays you. | A real product: sign up, pay monthly, every customer gets their own account. |
| "Our MVP falls over every time a big customer signs up." | Error tracker for `routeline-api`: 3 outages, TimeoutError 30 s on reports, **"Customer saw another company's invoices"** (missing tenant filter), DB connections exhausted 100/100 | Routeline system health: 99.99% uptime, reports 0.4 s, 0 errors, largest account 2,300 users, tenant isolation 412 tests, load test 10,000 companies p95 180 ms, weekly restore, Slack alerts in 60 s, 0 high security issues | Reports take 14 s, 3 outages last month, one customer saw another company's invoices. | Rebuilt to keep every customer's data apart, tested under 10,000 companies' worth of load. |
| "We still invoice our customers by hand." | Founder inbox: "We paid this already?", "Card declined", "Cancel our account", "Can we pay yearly?", "Wrong amount? We have 4 techs, not 6" | Routeline Subscriptions admin: MRR AED 22,860, AED 3,140 recovered, late invoices 0 (was 23), at-risk list; per-seat plans (Pro · 6 techs AED 294…) | 23 customers paying late, AED 8,400 outstanding, no warning before someone cancels. | Subscriptions that charge, retry failed cards and show MRR and churn every morning. |

## SA3 · Showcase: "Software that runs real businesses."
- **Lead:** On the big screen is the dashboard customers pay for every month. On the phone is the part their team carries around.

| Tab | Product · for | Results | Chips | Desktop | Phone |
|---|---|---|---|---|---|
| Finance teams | Ledgerly · receivables · ★4.8 G2 High Performer | 2,053 companies paying · AED 48k MRR | Zoho Books sync, AI payment matching, Stripe billing, Roles & audit log | Receivables (AED 182,400 outstanding, 94% auto-matched) + "Suggested match" 98% | Cash today |
| Field service | Routeline · dispatch & invoicing for trades · 640 businesses | −2 hrs office work per tech daily · 640 companies paying | Dispatch board, Live arrival texts, Quote to invoice, Zoho Books | Dispatch board by tech | "Morning, Carlos" tech day |
| Restaurants | Shelfwise · inventory & food cost · 380 restaurants | −6 pts food cost · AED 41k MRR | Counts on a phone, Par levels, Supplier orders, Food cost reports | Inventory + draft supplier order | Tonight's count |
| Salon groups | Glowdesk · multi-location mgmt · 120 groups | 3 hrs saved on payroll weekly · +6 pts rebooking | Location reports, Commissions, WPS payroll, Retail stock | "This week" across 3 Maison Rose locations, commissions, payroll AED 20,452 to WPS | Yesterday summary |
| Property managers | Keyhouse · rent & maintenance · 18,000 units | 96.8% rent on time · 1.6 days avg repair | Online rent, Autopay, Maintenance requests, Owner statements | Rent roll · November (AED 412,800) | Tenant "Hi Maya" + leaking faucet request |
| Auto shops | Partsmith · parts purchasing · 290 shops | −83% wrong-part returns · AED 2,960 saved per shop/mo | Live supplier prices, VIN fit check, Barcode receiving, Repair order sync | Parts to order with supplier prices | Al Futtaim Parts delivery |

## SA4 · What your product gets (dark panel, 5 tabs): "Everything a SaaS needs before it can charge."

| # | Tab · chip | Headline | Fine print | Mockup |
|---|---|---|---|---|
| 01 | Sign-up & onboarding · Self-serve sign-up · Guided setup · Imports | From sign-up to useful in six minutes. | Every step tracked: see where trials get stuck. | "Welcome to Ledgerly, Sam" step 3 of 4, QuickBooks import progress (412/412 customers, 188/188 invoices, 2,904/4,680 payments) + toast "Northwind Co is set up · 9:02 → 9:08 AM" |
| 02 | Plans & billing · Stripe Billing · Usage limits · Dunning | Customers upgrade without emailing you. | VAT (5%) and e-invoicing handled. | Customer Billing page: Team AED 39/mo, 6 of 10 seats, usage meters (912/1,000 AI credits "Almost at your limit"), invoice history incl. prorated upgrade + toast "Upgraded to Business · no sales call needed" |
| 03 | Teams & permissions · Workspaces · Roles · Audit log · SSO | Built for teams, not just one login. | Google/Microsoft sign-in day one; SAML SSO for enterprise. | Team & permissions: members, role matrix (Owner/Accountant/Approver/Viewer), audit log toast |
| 04 | Your admin panel · Customer health · Impersonation · Metrics | See every customer, and help them in one click. | MRR, churn, trial conversion straight from Stripe. | Founder "Companies" list sorted by risk (At risk · usage −70%, Card expiring, Ready to upgrade) with "Log in as →" + toast "Brightline Dental saved" |
| 05 | Integrations & API · REST API · Webhooks · Zoho Books · Slack · Zapier | Plugs into the tools your customers already use. | Integrations often win the deal. | Integrations grid + webhook `invoice.paid` → `POST erp.acme.co · 200 OK · 84 ms` with JSON body |

## SA5 · Honest build choice: "Custom code, no-code, AI builder or your own team? It depends on how far you're going."
Lead: if no-code is enough to test your idea, we'll say so.

| | **Custom build** (recommended) · Next.js · Node or Laravel · Postgres | No-code · Bubble, Softr, Glide | AI app builders · Lovable, Bolt, Replit | Hire in-house · 2–3 engineers |
|---|---|---|---|---|
| Best for | A product you plan to grow into a business | Testing with first 10–50 users | Clickable demos, investor prototypes | Funded companies with a technical leader |
| Time to first paying customer | 10–14 weeks | 3–6 weeks | 1–3 weeks, then rework | 4–6 months incl. hiring |
| Year-one cost | AED 35k–90k | AED 5k–25k + platform fees | AED 1k–10k + rebuild later | AED 350k+ salaries |
| Handles 10,000+ customers | ●●●●● | low | low | ●●●●● |
| You own the code (investors check) | Yes, 100% | No, lives on the platform | Yes, but often needs a rewrite | Yes |

## SA6 · Process: "About 12 weeks, step by step." (eyebrow: From idea to first paying customer)
| Step | When | Title | Visual |
|---|---|---|---|
| 01 | Weeks 1–2 | Scope the first version (talk to 2–3 future customers) | Scope card: must-haves · later · customers interviewed · fixed price agreed |
| 02 | Weeks 2–3 | Clickable prototype | Glowdesk "This week" dashboard frame |
| 03 | Weeks 4–10 | Build in 2-week sprints (demo every second Friday) | `npm test` 418 passed · tenant isolation ✓ · staging sprint 4 |
| 04 | Weeks 9–11 | Billing & security | Pills: Stripe live, Backups, 2FA, Pen test, Audit log ✓ |
| 05 | Weeks 11–12 | Beta with real customers | 18 beta companies active · 16 of 18 set up · converted to paid · bugs fixed |
| 06 | Ongoing | Launch and grow | Features each sprint from paying customers' asks |

## SA7 · Case study (dark): Shelfwise · Al Rigga, Dubai
- **H3:** From a chef's spreadsheet to software 380 restaurants pay for.
- **Problem:** Ember Kitchen's chef built an inventory sheet that cut waste by a third; owners wanted copies; every copy broke within a week.
- **Built:** phone inventory counts, par levels, supplier orders, food-cost reports, Stripe billing and free trial. Launched in 13 weeks.
- **Metrics:** 380 restaurants paying · AED 41k MRR · 13 weeks first call to launch
- **Quote:** "Owners used to ask me for my spreadsheet. Now they pay AED 365 a month for it."
- **`.ex-chip`:** "Example project · illustrative numbers"
- **Mockups:** Shelfwise inventory desktop + "Tonight's count" phone (34 of 41, walk-in cooler).

## SA8 · Pricing: "Fixed price. Agreed before we start."
| Tier | Price | Includes | Time |
|---|---|---|---|
| Validate · Clickable prototype | from **AED 24,000** | Scope, every key screen in Figma, clickable desktop + phone, landing page with waitlist | 2–3 weeks |
| **Most chosen · Launch-ready SaaS** | from **AED 120,000** | Sign-up/onboarding/teams, Stripe plans + trials, core features, admin + metrics, security review + backups | 10–14 weeks |
| Scale · Platform & enterprise | from **AED 250,000** | Public API + webhooks, SSO + ISO 27001 groundwork, mobile app, AI features, MVP takeover | — |

**What changes the price:** number of features · integrations · mobile app · AI features · compliance (ISO 27001) · moving existing data. Prices exclude 5% VAT.

## SA9 · FAQ: "Questions before you build a product."
1. Do I need a technical co-founder? (no; we're your tech team, then help you hire and hand over)
2. Will I own the code and the IP? (your GitHub, your cloud, NDA first, IP assignment in contract)
3. Can you take over an MVP someone else built? (two-week audit; fix foundations without downtime)
4. How do you keep each customer's data separate and secure? (enforced in the database; tests, encrypted backups, 2FA, audit log)
5. How long until I can charge customers? (10–14 weeks; prototype in 2–3 to pre-sell)
6. What does it cost to run every month? (AED 75–550 to start; Stripe ~2.9% + AED 1)

## SA10 · Often paired with: "Grow the product faster."
Payment integration · AI integration · Vibe-code rescue · Mobile apps. Markets: Finance teams, Field service, Restaurants, Salon groups, Property managers, Auto shops.

## SA11 · CTA + footer
"Got a SaaS idea, or an MVP that's struggling? *30 minutes* and we'll map your first version." Steps include "We sign an NDA and talk through the idea", plus a WhatsApp CTA. Widget: **SaaS planning call** (Mon–Fri, Dubai time/GST, "Google Meet or in person in Dubai"); footer `Based in Dubai · Trade licence [number] · Mon–Fri 9:00–18:00 GST · WhatsApp +971 50 000 0000`.

---

## Consistency with homepage (AED)
| Value | SaaS page | Homepage | Match |
|---|---|---|---|
| VAT | "Prices exclude 5% VAT" | "Prices exclude 5% VAT" | ✓ |
| WhatsApp number | +971 50 000 0000 | +971 50 000 0000 | ✓ |
| Accounting tool | Zoho Books | Zoho Books | ✓ |
| Payroll term | WPS payroll | (not on homepage; UAE spec §4 standard term) | — |

## Open items (this page)
- Real prices; the Scale tier has no timeline in the mockup.
- Comparison-table cost ranges (incl. "AED 350k+ salaries") are estimates; confirm wording.
- UAE data residency and ISO 27001-ready claims: confirm we can actually offer these before launch.
- Concept SaaS brands (Shelfwise, Routeline, Glowdesk, Keyhouse, Partsmith) and G2 badge must be replaced or labeled as concepts.
