# Service Page: White-label for Agencies — Design Spec

- **Date:** 2026-10-07
- **Status:** Mockup built, waiting for owner review
- **Route:** `/agencies` (white-label for agencies)
- **Reference mockup:** `docs/superpowers/mockups/service-white-label.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` (design system §3, template §5, accessibility/responsive §6). Only page-specific content is recorded here.
- **Source of truth:** where this page disagrees with the homepage, the homepage wins (see "Consistency with homepage" at the end).

**Audience:** US agencies (branding studios, marketing and SEO agencies, design and product studios, freelance PMs) who sell dev work they can't staff. This is the only service page written to a second audience, so its language is about **margin, client ownership and staffing**, not about the end business.

**Positioning (matches homepage FAQ):** we sign an NDA, join your Slack and tools, deliver under your brand, and your client never hears our name. Partner (wholesale) pricing and weekly reports you can forward as-is.

**Story:** you won the pitch, now someone has to build it → three agency pains (freelancer vanishes, client asks for something you can't build, only developer booked) → work sold by agencies per industry → how it works for you → hire vs freelance vs offshore vs partner → start in five working days → proof → wholesale price → objections → agency partner call.

**Concept agencies used:** Northlight Studio (Austin branding studio, main thread), Copperline Digital, Lonestar Local (SEO), Field & Form. Their clients are the shared concept brands, so the site still tells one story. Class prefix for this page: `wl-`. Primary CTA: **"Book a partner call"**.

**Mockup mix:** Slack-style agency workspace, GitHub PR, Linear-style cycle board, Gmail draft, proposal on the agency's letterhead with a private margin note, capacity spreadsheet, client update email, margin dashboard, e-signed partner agreement, iOS lock screen, iMessage. Mostly light, with dark chat/editor accents.

---

## W1 · Hero (dark panel)
- **Breadcrumb:** Services / White-label for Agencies
- **H1:** "You won the pitch. Now someone has to build it. **We do, under your name.**"
- **Sub:** Senior developers who work as part of your team, in your Slack, on your GitHub, with your email addresses. Your client only ever hears your name. You keep the relationship and the margin.
- **CTAs:** Book a partner call · See wholesale pricing
- **Tech chips:** Next.js · React · Laravel · WordPress · Shopify · Flutter · React Native · Your Slack · Jira · Linear · Mutual NDA
- **Visual:** Northlight Studio Slack workspace, channel `#maison-rose` (shared with the client): Sam Kim posts that Apple Pay deposits are on staging and booking is down to 3 taps, with three phone screens (Maison Rose home "Hi Sarah", pick a time, checkout with $85 deposit + Apple Pay) and the staging link `staging.northlight.studio/maison-rose · Build 41 · iOS + Android`; client Sarah replies "It's perfect 😍"; founder Maya: "Told you our dev team was good 😉 Launch is still on for Nov 12". Phone: iMessage from Sarah to Maya asking for a site for a second salon, built by "Sam" again.
- **Floating cards:** "Commit author on every change · sam@northlight.studio" · "Times the client saw [Brand] · 0" · "Northlight's margin on this project · $17,500 · 42%".

## W2 · Sound familiar? "Selling the work is the easy part."

| Quote | Before | After | Cost (red) | Fix |
|---|---|---|---|---|
| "Our freelancer went quiet two weeks before launch." | DM thread with "Jake (freelance dev) · last active 9 days ago": four unanswered messages Mon → Thu, "Jake hasn't read these messages", sticky "Demo in 6 hours. Call Sarah?? 😬" | `#maison-rose-build`: Sam's daily update (Mon–Thu shipped items), Linear "Sprint 4 · 11 of 13 done", "Demo Thursday 2 PM · on track" | Launch pushed five weeks; $6,200 refunded to keep the account. | A team, not one person: nightly updates, staging always works, cover when someone is out. |
| "Our client asked for an app. We've never built one." | Gmail: Marco (Ember Kitchen) asks Copperline for an ordering app, budget ~$40k; Dan's reply has sat in Drafts for 6 days; sticky "who builds apps??" | Copperline proposal CL-118 on their letterhead: app $22,000 + Toast/Stripe $9,500 + loyalty $7,000 = **$38,500**, 10 weeks, signed by Marco Oct 7; private note "ONLY DAN SEES THIS: [Brand] wholesale $23,800 · margin $14,700 · 38%" | Six days in Drafts; Marco nearly went to another agency. | Fixed wholesale price within 48 hours; you add margin and send it as your own. |
| "Our only developer is booked until March." | Excel `Capacity_Q4_REAL_v3.xlsx`: Chris at 130–160%, Ember app "NO ONE", Volt & Wire "March??", Apex "signed, waiting" | "Team capacity · Q4": 0 waiting; Peak Plumbing site (Chris), Ember app (Sam, Priya), Volt & Wire Shopify (Leo), Apex shop system (Sam, Priya, Dana); "$110,500 of signed work started · Chris at 90% · no weekends" | $96,000 of signed work waiting on one person; Chris working weekends. | A white-label team in five working days, under your name, starting Monday. |

## W3 · Showcase: "Their name on it. Our team behind it."
- **Lead:** Every project here was sold, branded and delivered by an agency. We built it, and their clients never saw our name.
- **Stage difference:** the info block shows **which agency sold it**, the client price the agency set, and the agency's margin, instead of ratings.

| Tab | Client · project | Sold by | Results | Chips | Screens |
|---|---|---|---|---|---|
| Salons & spas | Maison Rose · site + app | Northlight Studio · launched in 10 weeks | $42,000 client price · 42% margin | Next.js site, iOS + Android, Stripe deposits, Their staging domain | Site on `staging.northlight.studio/maison-rose` + booking phone |
| Restaurants | Ember Kitchen · stock & ordering | Copperline Digital · 9 weeks | $38,500 client price · $14,700 margin | Toast sync, WhatsApp approvals, Laravel, Copperline care plan | Stock + PO-1182 |
| Auto shops | Apex Auto Works · shop system | Northlight Studio · live since August | $54,000 client price · 3 follow-on projects | Bay board, Tech clock-ins, QuickBooks sync, Their GitHub | Techs & time |
| Home services | Volt & Wire · site + lead tracking | Lonestar Local (SEO) · 5 weeks | +64% calls in 90 days · $12,800 client price | WordPress, Call tracking, Pay links, Lonestar's SEO on top | Site on `staging.lonestarlocal.com/volt-wire` + pay-link text |
| Laundry | FreshFold · plant floor system | Copperline Digital · 11 weeks | 0 lost bags · $1,500/mo care plan resold | Bag scanning, Customer texts, Business accounts, Monthly care plan | Plant floor board |
| SaaS startups | Ledgerly · MVP + 6 months | Field & Form · MVP in 12 weeks | $96,000 MVP + six months of releases · 4 people in Field & Form's Linear | Next.js + Postgres, Stripe billing, SOC 2-ready, Their design system | Ledgerly marketing site (`ledgerly.com`) + app |

## W4 · How it works for you (dark panel, 5 tabs): "Your agency, with a bigger dev team."

| # | Tab · chip | Headline | Fine print | Mockup |
|---|---|---|---|---|
| 01 | Your name on everything · Your GitHub · Your email · Your staging domain | Every commit, link and invoice says your agency. | No logo, credits or links from us in anything we build. | Private GitHub repo `northlight-studio/maison-rose-app`, PR #84 "Add Apple Pay deposits" by sam-northlight / priya-northlight, approved by maya-northlight, 142 tests passed; panel "What Sarah would see": code, email, staging, invoices all Northlight; mentions of [Brand]: 0 |
| 02 | Inside your tools · Slack · Jira · Linear · ClickUp · Basecamp | We work the way your agency already works. | At least 4 hours of overlap with US Eastern daily; same-day Slack replies. | Linear-style "Maison Rose · Cycle 4" board (In progress / In review / Done, incl. "Gift cards in app · change request") + toast "Maya approved PR #84" |
| 03 | Updates you can forward · Weekly client update · Demo videos · Staging links | Friday updates, written for your client, ready to send. | We can join client calls as your team. | Email from maya@northlight.studio to Sarah "Week 6: deposits are live on staging" (done / next / needs from you) with 3 phone screens + toast "Drafted by [Brand] Fri 2 PM · Maya added one line and sent it at 4:10 PM" |
| 04 | Margin you can see · Fixed wholesale prices · Change requests in 24 h | You know your margin before you send the proposal. | We invoice you, never your client. Monthly, Net 15, USD. Partners keep 35–45% on average. | Northlight "Dev projects & margin" Q4: billed $166.5k, wholesale $96.9k, 42% gross margin; per-project table + toast "Change request · gift cards · our price $1,800 · you charge $3,200 · +$1,400" |
| 05 | Your clients stay yours · Mutual NDA · Non-solicitation · Code ownership | Your clients stay yours, in writing. | Handover of code, docs and accounts within five working days if you stop. | E-signed "White-label Partner Agreement" (Ref. NL-2026-007, page 3 of 5): clauses 4 White-label, 5 Non-solicitation (24 months), 6 Ownership, 7 Confidentiality, 8 Pricing; signers panel; also signed NDA, GitHub access, Slack guest accounts |

## W5 · Honest choice: "Hire, freelance, offshore, or partner? Each one fits a different agency."
Lead: with steady year-round dev work, hiring is usually better and we'll say so; a partner fits work that comes in waves or skills you don't have.

| | **White-label partner** (recommended) · [Brand] | Hire in-house · senior developer | Freelancers · Upwork, referrals | Offshore dev shop · hourly |
|---|---|---|---|---|
| Best for | Agencies selling 2–10 dev projects a year | Steady year-round dev work | Small fixes, one-off sites | Big, well-specified builds |
| Typical cost | Fixed per project, or from $14,500/mo for a team | $130,000–170,000/yr per developer + benefits | $60–150/h | $25–50/h + your PM time |
| Time to start | 5 working days | 2–4 months to hire | 1–2 weeks | 2–4 weeks |
| If someone leaves | Another team member picks it up next day | Projects stop until you rehire | You start over | Depends |
| What your client sees | Only your name, everywhere | Your team | Often the freelancer's name | Their name, overnight replies |
| Who manages the work | Our lead, with you in the loop | You | You | You, mostly |

Note: "Salary and rate ranges are typical US figures for 2026. Our prices are placeholders until the owner sets them."

## W6 · Process: "Start in five working days." (eyebrow: From brief to launch, under your name)
| Step | When | Title | Visual |
|---|---|---|---|
| 01 | Day 1 | NDA first, then the brief (Figma, proposal or a voice note) | Mutual NDA 9:14 · Brief_MaisonRose_v2.pdf 9:40 · Figma file 9:41 |
| 02 | Within 48 h | Wholesale price you can mark up | Wholesale $24,500 · typical client price $38–44k · fixed, valid 30 days · 10 weeks |
| 03 | Week 1 | We join your tools | sam@northlight.studio added to Slack · GitHub org · Linear project |
| 04 | Weeks 2–9 | Build in two-week slices | Website + booking (wk 3) · App + Apple Pay deposits (wk 6) · App Store review (wk 9) |
| 05 | When you want | Client calls, as your team | Video call tiles "Sam · Northlight Studio" + client, REC |
| 06 | Launch + after | Hand over, or stay on retainer | `git push` to the agency's GitHub · 34 pages of docs · "care plan you resell: $2,000/mo" |

## W7 · Case study (dark): Northlight Studio · Austin, TX · 9 people
- **H3:** A branding studio that turned down app work. Now it sells it.
- **Problem:** clients wanted the website and app; with one developer, Maya said no to six projects in 2025 (~$210,000).
- **Built:** a white-label team of four (lead, two developers, QA) in Northlight's Slack, GitHub and Linear since March; eleven projects under Northlight's name.
- **Metrics:** 11 projects launched under their name · $486k new dev revenue in 18 months · 38% average margin on dev work
- **Quote:** "Our clients think we hired a dev team. In a way, we did." (Maya Torres, Founder)
- **Mockups:** `studio.northlight.studio/projects` (dev projects table: Maison Rose $42,000 live, Ember $38,500 building, Apex $54,000 care plan, Volt & Wire Shopify $18,000, Peak Plumbing booking site $14,000; team hours; monthly wholesale $14,500) + iOS lock screen Nov 12 (Slack "app is live on the App Store and Google Play 🎉", client message, Stripe "Payment received $12,600 · Milestone 3").

## W8 · Pricing: "Fixed wholesale prices. You set the client price."
Lead: an exact price per brief within 48 hours; we only invoice the agency.

| Tier | Price (placeholder) | Includes |
|---|---|---|
| Per project · One project, start to finish | from **$6,000** | Websites, WordPress, Shopify, web and mobile apps; from your Figma or designed under your brand; your GitHub/staging/tools; weekly client-ready updates; 30 days of fixes |
| **Most chosen · Your own dev team** | from **$14,500/mo** | Lead, two developers and QA (~480 h/month), joins Slack/standups/client calls, move people between projects, swap skills, 30 days' notice, no lock-in |
| Hours · Care plans & small changes | from **$65/hr** | Blocks of 20 or 40 hours, updates and small features, reply within one business day, monthly report sent as your own |

**What changes the price:** design included or from your Figma · tech stack · projects at the same time · client calls with us · support after launch · time-zone overlap.

## W9 · FAQ: "Questions agencies ask before they trust us with a client."
1. Will my client ever find out about you? (not from us)
2. What stops you from taking my client? (24-month non-solicitation; we send clients back to you)
3. Who owns the code? (you or your client; in your GitHub from the first commit)
4. Can you join calls with my client? (yes, as your team, or stay behind the scenes)
5. What happens when the client changes the scope? (wholesale price within 24 hours, in writing)
6. What time zone do you work in? (overlap with US Eastern 9 AM–1 PM, Pacific mornings; urgent issues within an hour on care plans)

## W10 · Often paired with: "What agencies resell most."
Web app development · Mobile app development · Shopify development · Vibe-code rescue. "Agencies we work with": Branding studios, Marketing agencies, SEO agencies, Design studios, Product studios, Freelance PMs.

## W11 · CTA + footer
"Got a project you can't staff? *30 minutes* to a wholesale price in 48 hours." Steps include "Walk us through the project (we'll sign your NDA first)". Widget: **Agency partner call**.

---

## Consistency with homepage (homepage wins)
All items below were **fixed in the mockup on 2026-10-07** unless marked "Owner to decide". Verified in headless Chrome: values render, no page errors.

| Item | Homepage | This mockup | Resolution |
|---|---|---|---|
| How white-label works | NDA, join your Slack and tools, deliver under your brand, client never hears our name, partner pricing, weekly reports forwarded as-is | Same | Consistent. |
| Pricing band | "Agencies: white-label partner rates · dedicated developers or fixed-price projects under your brand, NDA included" | Per project / dev team / hours | Consistent (homepage gives no numbers). |
| Ledgerly domain | `ledgerly.com` | Showcase SaaS tab uses `ledgerly.io` | Change to `ledgerly.com`. |
| Concept agency name | Homepage agency tab uses "Northwind Agency" / "YourAgency" | Northlight Studio and three others | Not a contradiction (different example agencies). Optional: rename Northlight → Northwind Agency so the homepage and this page follow one agency. "Northwind Co" is also a Ledgerly customer, so a rename would need that changed too. **Owner to decide.** |

## Open items (this page)
- Real wholesale prices, team size/hours and the "partners keep 35–45%" claim.
- Confirm the owner will sign a 24-month non-solicitation clause and offers 24/7 urgent cover on care plans.
- Salary ranges in the comparison table are estimates; verify.
- Route: `/agencies` vs `/services/white-label`; decide with the nav ("For agencies").
