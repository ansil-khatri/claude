# Service Page: Vibe-Code Rescue — Design Spec

- **Date:** 2026-10-07
- **Status:** Mockup built, waiting for owner review
- **Route:** `/services/vibe-code-rescue`
- **Reference mockup:** `docs/superpowers/mockups/service-vibe-rescue.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` (design system §3, template §5, accessibility/responsive §6). Only page-specific content is recorded here.
- **Source of truth:** where this page disagrees with the homepage, the homepage wins (see "Consistency with homepage" at the end).

**Audience:** owners and founders who built an app with Lovable, Bolt, Replit, v0 or Cursor and are now stuck, leaking data or crashing under real users.

**Positioning:** keep what you built, fix what's dangerous. Free audit first, fixed price after. You can keep using your AI builder afterwards, with a safety net.

**Story:** built it with AI, now every fix breaks something else → three cracks real customers found (prompt loop, public data, crashes at scale) → apps we've rescued per industry → five things that turn a demo into something you can sell → keep prompting vs rescue vs rebuild vs freelancer → 2–4 weeks → proof → price → objections → free rescue audit call.

**Mockup mix:** mostly light: rescue findings dashboard, GitHub PR with checks, Supabase-style security policies, Stripe webhooks log, PageSpeed, plain-English audit report (PDF style). Dark tool UIs for balance: the Lovable-style prompt loop, a hosting log console, a k6 load-test terminal and a VS Code-style test file. Also an email "before", an iMessage thread and a health dashboard. Class prefix for this page: `vk-`. Primary CTA: **"Get a free audit"**.

---

## V1 · Hero (dark panel)
- **Breadcrumb:** Services / Vibe-Code Rescue
- **H1:** "Built it with AI? Now every fix breaks something else. **We make it safe to launch.**"
- **Sub:** Lovable, Bolt, Replit and Cursor get you a working demo. Real customers need more: data no stranger can read, payments that don't fail without anyone noticing, and pages that stay fast at 9 AM on a Monday. We keep what you built and fix what's dangerous.
- **CTAs:** Get a free audit · See pricing
- **Tech chips:** Lovable · Bolt · v0 · Replit · Cursor · Supabase · Firebase · Next.js · React · Stripe · Vercel
- **Visual:** Ledgerly rescue "Findings" dashboard (`rescue.[brand].com/ledgerly/findings`, "Built with Lovable + Supabase", Rescue · week 2 of 3): critical issues (was 4 on day 1), tests passing (was 0), dashboard 1.2 s (was 8.6 s), missed payments "23 recovered · $1,840"; findings table: Stripe webhook never checked (Critical → Testing… → Fixed · PR #41), customers could see other companies' invoices (Fixed · PR #38), OpenAI key in browser (Fixed · PR #36), 412 queries per page (Fixed · 1.2 s), no staging/backups (In progress); "This week" panel by Alex, lead engineer ("Sam still ships small changes in Lovable. They run through the same tests first."). Phone: iMessage between the founder and Alex, where the missed Stripe upgrades are found, replayed and alerted on.
- **Floating cards:** "Found in the free audit · day 2 · 4 critical · 23 issues in total" · "Missed payments recovered · $1,840 · 23 customers" · "Checked before every release · 96 tests ✓ · 0 failed".

## V2 · Sound familiar? "The demo worked. Real customers found the cracks."

| Quote | Before | After | Cost (red) | Fix |
|---|---|---|---|---|
| "Every time I ask it to fix one thing, it breaks two others." | Lovable-style editor for `freshfold-app`: "login is broken AGAIN…", "I apologize for the confusion…", "12 of 500 credits left · try #23 today"; preview shows TypeError on BookingPage | GitHub PR #48 "Fix blank booking page for new customers" merged: 5 checks passed (142 unit tests, 18 flow tests, security scan 0 secrets, Vercel preview), diff with a session guard, "Live since 11:42 AM · 0 errors" | Three weeks in circles, $380 in credits, login broke twice in launch week. | Code moves to GitHub with 142 automatic checks; nothing goes live until they pass; every change written up in plain English. |
| "A stranger emailed to say he could see all our clients' phone numbers." | Email to Sophie: booking app returns every client (`GET /rest/v1/clients?select=*` → 2,310 rows with phones and notes) + OpenAI usage alert $1,912.40 vs a $50 limit | Security check for `book.maisonrose.com`: 0 critical; findings marked FIXED (client list, key in browser, open /admin, form spam); `supabase/policies.sql` diff; "Scanned again every night · last scan 2:00 AM ✓" | Security rules off, 2,310 records public; AI key in the browser cost $1,912 in a weekend. | Security rules on every table, keys moved and replaced, nightly scan; criticals fixed within 48 hours. |
| "It worked with 20 customers. With 400, it crashes every morning." | Hosting log for `apex-quotes`: 9–11 s requests, "too many connections", heap out of memory, 502s; 1-star review from Linda Park (quote never loaded) | Apex quotes health: quote page 0.6 s (was 9.4 s), 0 crashes (was 3 a day), load test 5,000 users ✓, 46 quotes approved today (71% by text), alerts to Rick within 60 s | 9-second pages and an 8 AM crash; about one customer in three gave up. | Queries fixed, caching, proper hosting: 0.6 s, held 5,000 test users. |

## V3 · Showcase: "Built by the owner. Made safe by us."
- **Lead:** The big screen is the rescue report the owner got from us, and the phone is the app their customers use today.
- **Stage:** a "Rescue report" desktop (counts before/after, findings table, "What [owner] noticed") + the customer app on a phone. Each tab names the builder used.

| Tab | Brand · app · builder | Results | Chips | Phone |
|---|---|---|---|---|
| Salons & spas | Maison Rose · booking app · Bolt | 0 public client records (was 2,310) · 2 weeks audit to safe | Bolt, Supabase rules, Stripe deposits, Slot locking | Pick a time → "Pay deposit · $85" |
| Restaurants | Ember Kitchen · online ordering · Lovable | 0 lost orders (was 31/mo) · 1.1 s menu load (was 7.4 s) | Lovable, Toast sync, Stripe webhooks, Kitchen printer | Order pickup |
| Auto shops | Apex Auto Works · quote approvals · Replit | 0.6 s quote page (was 9.4 s) · 71% approved by text (was 40%) | Replit, Postgres, Twilio texts, Load tested | Your vehicle / quote |
| Home services | Volt & Wire · estimates · Cursor | 142 automatic tests (was 0) · 0 broken releases since June | Cursor, Next.js, GitHub checks, Staging site | Your estimate |
| Laundry | FreshFold · customer app · Lovable | 4.8★ app rating (was 3.1) · 0 login loops (was ~40/day) | Lovable, Supabase, Push alerts, Promo limits | Schedule a pickup |
| Phone repair | FixPoint · repair tracker · Bolt · **Miami, FL** | $46 Firebase bill (was $1,180) · 3 stores on one system | Bolt, Firebase rules, Nightly backups, IMEI search | Repair or trade in |

Maison Rose's findings, as an example: client list public, OpenAI key in browser ($1,912 weekend), deposit charged twice on double tap, two clients in one slot, reminder texts at 3 AM (UTC time zone). Note: "Sophie still edits the app in Bolt. Anything touching payments or client data gets a quick review first."

## V4 · What we fix (dark panel, 5 tabs): "Five things that turn a demo into something you can sell."

| # | Tab · chip | Headline | Fine print | Mockup |
|---|---|---|---|---|
| 01 | A straight answer in 48 hours · Free audit · Written report · Walkthrough video | Find out what's really wrong before you spend another dollar. | If a rebuild is cheaper, the report says so and why. | "RESCUE AUDIT · OCT 9" for Ledgerly (Lovable + Supabase, 214 files, 1,140 users): score out of 100, three plain-English problems, area table (Security Unsafe 3 days · Payments Unsafe 2 days · Speed Slow 3 days · Code health Fragile 1 week · Screens Keep), fixed price, keeps 85% of code |
| 02 | Lock your data down · Supabase rules · Firebase rules · Logins · API keys | Customers only ever see their own data. | Short security summary you can send to customers. | Supabase-style Policies screen: security advisor 0 errors (was 7), all 9 tables protected; per-table policies in plain English (invoices "was open to everyone", api_keys "server only") |
| 03 | Payments you can trust · Stripe · Webhooks · Subscriptions · Refunds | When a card is charged, the account changes. Every time. | At Ledgerly, replaying missed events recovered $1,840 from 23 customers. | Stripe-style Webhooks: signature verified, 1,284 delivered 100%, failed 0 (was 412), event log with "what the app did", two "Replayed · Upgrade restored" rows + toast "23 missed payments replayed" |
| 04 | Fast with real traffic · Speed · Caching · Hosting · Load tests | Fast on a phone, fast at the morning rush. | Before/after measured the same way. | PageSpeed for `app.ledgerly.com/dashboard` (Passed, LCP 1.2 s, queries 412 → 9, JS 3.1 MB → 420 KB) + k6 terminal "monday-rush.js": 5,000 users, p95 182 ms, 0.00% failed, DB load 31%, "before the rescue: failed at 300 users" |
| 05 | Change it without fear · GitHub · Automatic tests · Staging site · Docs | Keep building in Lovable or Cursor. Just with a safety net. | Handover doc so any developer can pick it up. | VS Code-style `invoices.test.ts` (tenant isolation test returns 404, Stripe upgrade test), terminal 96 passed, deploy to staging + toast "Released to customers · 96 of 96 tests passed" |

## V5 · Honest choice: "Keep prompting, rescue it, or start over? Most apps are worth saving."
Lead: if your AI builder still fixes things without breaking others, keep going; we only recommend a rebuild when the audit shows it's cheaper.

| | **Rescue & harden** (recommended) | Keep prompting · Lovable · Bolt · Replit | Rebuild from scratch | Hourly freelancer · Upwork · Fiverr |
|---|---|---|---|---|
| Best for | Apps with real users, or about to get them | Early demos, small changes | Apps whose core idea changed | One small, clear bug |
| Typical cost | **From $990, fixed price** (homepage Add-on; see below) | $25–200/mo in credits | $25,000–80,000 | $40–120/h, open-ended |
| Keeps your work | ●●●● | ●●●●● | low | ●●●● |
| Time to safe launch | 2–4 weeks for a full rescue; small fixes in days | Unknown | 3–6 months | Depends |
| Security & payments checked | Yes, with a written report | Not really | Yes | Only what you ask |
| Who owns it | You: code, data, accounts | You, on their platform | You | You, if the contract says so |

Note: "Typical 2026 prices. AI builder credits and hosting are paid by you directly, never marked up by us."

## V6 · Process: "About 2–4 weeks, step by step." (eyebrow: From "please don't break" to launch)
| Step | When | Title | Visual |
|---|---|---|---|
| 01 | Day 1 | Read-only access (NDA first; we work on a copy) | GitHub · Supabase read only · Stripe view only |
| 02 | Days 1–2 | Audit in plain English (ranked by harm; fixed price) | Customers see each other's data CRITICAL · Payments not verified CRITICAL · Dashboard 8.6 s HIGH |
| 03 | Week 1 | Stop the bleeding | Rotate OpenAI key ✓ · 9 of 9 tables protected ✓ · webhook signatures verified ✓ |
| 04 | Weeks 2–3 | Make it sturdy | Tests 0 → 96 · dashboard 8.6 → 1.2 s · staging + Slack alerts |
| 05 | Week 3 | Move into your accounts | Vercel / Supabase Pro with daily backups / GitHub, all "Owner" |
| 06 | After launch | Hand over, or keep going | Handover doc + walkthrough video |

## V7 · Case study (dark): PromptPilot · Austin, TX
New concept brand (an AI writing tool for real-estate agents), not one of the shared `SITES` brands, because the story needs a founder-built SaaS.
- **H3:** Built in Lovable over six weekends. Then 1,200 people signed up in a day.
- **Problem:** Product Hunt launch → 1,200 sign-ups; logins failed, users could read each other's drafts, leaked OpenAI key ran up $2,300.
- **Built:** 48-hour audit, three weeks of fixes on a copy: security rules on every table, keys on the server, Stripe verified, 142 tests, staging. Maya still makes small changes in Lovable.
- **Metrics:** 38 → 96 audit score · $0 surprise AI bills since · 3 weeks to relaunch
- **Quote:** "I thought I'd have to start over. They kept most of what I built and made it safe to sell."
- **Mockups:** `admin.promptpilot.ai/overview` (1,140 paying users, $22,680 MRR, AI spend $38.20 under a $120 server-side limit, 0 errors (was 412/week), sign-ups chart Product Hunt → relaunch) + iMessage on relaunch day (486 sign-ups, 0 errors, 210 ms) + stat card (page load p75 9.8 → 0.9 s, tests 0 → 142).

## V8 · Pricing: "Free audit. Fixed price after."
Lead: you know what's wrong and what it costs before paying anything; hosting, database and builder fees billed to you at cost.

| Tier | Price | Includes | Time |
|---|---|---|---|
| Audit · Rescue audit | **Free** | Read-only access with NDA, security/payments/speed/code health, written report + video, fixed price for every fix | Within 48 hours |
| **Most chosen · Rescue & launch** | **from $990** (homepage Add-on price) | Data rules, logins, leaked keys; payments + webhooks verified; slow pages fixed + load tested; tests + staging; moved into your accounts; handover doc + video | Days for a focused fix; 2–4 weeks for a full rescue |
| Ongoing · Rescue + keep building | from **$3,000/month** | Everything above + features every two weeks, review of your Lovable/Cursor changes, uptime and error alerts, cancel any month | Monthly |

**What changes the price:** size of the app · live users and data · payments or subscriptions · which builder it came from · integrations · mobile app too.

## V9 · FAQ: "Questions before you hand over your app."
1. Will you just rewrite everything? (no; usually keep 70–90% of the code)
2. Can I keep using Lovable, Bolt or Cursor afterwards? (yes, through GitHub and the same tests)
3. How do you get access, and is my code safe with you? (NDA, read-only, work on a copy)
4. Do I pay before I know what's wrong? (no; free audit in ~48 h with a fixed price)
5. My app already has paying users. Will they notice? (only that things stop breaking; staging, quiet-hour release, one-click rollback)
6. Who owns the code afterwards? (you; all accounts in your name, documented)

## V10 · Often paired with: "Once it's safe, make it grow."
SaaS development · Payment integration · AI integration · Mobile app development. Industries: Salons & spas, Restaurants, Auto shops, Home services, Laundry, Phone repair, SaaS founders.

## V11 · CTA + footer
"Stuck in a loop with your AI builder? *Send us the link.* We'll tell you what's wrong in 48 hours." Steps end with "Get your free audit within 48 hours". Widget: **Free rescue audit call**. (The italic accent here is a phrase, not "30 minutes" as on other pages.)

---

## Consistency with homepage (homepage wins)
All items below were **fixed in the mockup on 2026-10-07** unless marked "Owner to decide". Verified in headless Chrome: values render, no page errors.

| Item | Homepage | This mockup | Resolution |
|---|---|---|---|
| Entry price for fixing an AI-built app | Add-on **from $990**, "Fix and secure an AI-built app", "Live in days" | Rescue & launch from $4,500, 2–4 weeks; comparison table "From $4,500" | Spec uses **from $990**. Update the pricing card and the comparison cell; keep "2–4 weeks" for a full rescue but add "small fixes in days". |
| Free audit | FAQ: "We start with a free audit" | Free audit | Consistent. |
| Homepage hero tab "I built it with AI" | Code audit report with scores before → after | Audit score 38 → 96 (case study), audit report in tab 01 | Consistent. |
| FixPoint location | Not on homepage; approved Mobile Apps page = **Miami, FL** (★4.8 · 930 reviews) | Houston · ★4.9 · 690 reviews | Change the showcase tab to Miami, FL · ★4.8 · 930 reviews. |

## Open items (this page)
- Real prices for the audit, rescue and ongoing tiers.
- PromptPilot is a new concept brand; confirm the owner is happy to add it to the brand set.
- Uses a Supabase/Stripe UI look-alike and a Lovable-style editor; keep these generic (no logos) before launch.
