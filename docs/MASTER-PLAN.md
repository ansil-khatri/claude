# MASTER PLAN — read this first, every chat

This is the single checklist for the whole agency-site project: every decision we made, every file, and **every piece of work still to do**, in order. If it isn't ticked here, it isn't done. Detailed steps live in the linked plans; this file tracks them.

**Last updated:** 2026-10-10 · **Current phase:** Phase 4 — Next.js site built (58 routes, see `docs/BUILD-COVERAGE.md` and `README.md`). Pending localizations (T9–T15, T20–T21) were done directly in `content/`. Waiting on owner for Part C items.

---

## How to use this file (rules for every chat)

1. **Start of every chat:** read `CLAUDE.md`, then this file. Find the first unticked item in the current phase. That's the next job.
2. **Work from the linked plan or spec**, never from memory of an old chat.
3. **When something is finished and verified** (tools pass, screenshots checked, spec updated), tick it here (`- [x]`), add the date, and update "Last updated" and "Current phase" at the top.
4. **When a new page, service, content type or task is discovered** (owner's standing rule): add it to the right spec and plan, add a line here in the right phase, and update `CLAUDE.md` — all in the same session.
5. **When the owner makes a decision**, record it in Part A (decision log) with the date, then update the files it affects.
6. **Never delete an unticked item.** If it's no longer needed, mark it `~~struck~~ — dropped [date], reason`.
7. **"Plan to write"** means the work is agreed but has no step-by-step plan yet. Writing that plan is the first task of that phase.
8. **End of every chat:** make sure this file reflects reality: what was done, what's next, what's blocked on the owner.

---

## Part A · Decisions log

| Date | Decision | Recorded in |
|---|---|---|
| 2026-10-07 | No company name yet: `[Brand]` everywhere, one config value | `CLAUDE.md` §1 |
| 2026-10-07 | All copy in JSON (`messages/*.json`) for Arabic later | `CLAUDE.md` §1 |
| 2026-10-07 | Stack: Next.js App Router, TS, Tailwind v4, next-intl, GSAP, Lenis | `CLAUDE.md` §1 |
| 2026-10-07–09 | Homepage + 18 service/industry mockups approved for review (US version) | `docs/superpowers/specs/` |
| 2026-10-09 | SEO strategy written for the US (now phase 2) | `docs/seo/README.md` |
| 2026-10-09 | City pages allowed only with ≥ 50% city-specific content; never fake addresses (after the Lumina review) | `docs/seo/09`, `docs/seo-uae/03` §3 |
| 2026-10-09 | **Launch market switched to Dubai + UAE**; US becomes phase 2 at `/us/` on the same domain | `docs/seo-uae/README.md`, memory `project-launch-market-uae` |
| 2026-10-09 | UAE first, Saudi Arabia second, rest of GCC later | `docs/seo-uae/README.md` |
| 2026-10-09 | One `.com`: UAE English at the root, Arabic at `/ar/`, US at `/us/` later | `docs/seo-uae/03` §1 |
| 2026-10-09 | Lead UAE offers: Shopify, WhatsApp & AI, **e-invoicing integration** (law from July 2027) | `docs/seo-uae/README.md` |
| 2026-10-09 | Prices in AED, +5% VAT, no long contracts; **Add-on AED 2,900 · Launch AED 7,900 · Build AED 49,000 · Care AED 790/mo** (proposed, owner to approve) | `docs/seo-uae/06`, UAE spec §5 |
| 2026-10-09 | All 19 mockups to be localized for the UAE (content, not redesign); US versions archived | UAE spec, plan `2026-10-09-uae-localization.md` |
| 2026-10-09 | Every mockup must **show** the UAE (visual checklist), not just lose US details | UAE spec §6.9 |
| 2026-10-09 | New SEO components on every page: H1 kicker, plain-English block, WhatsApp CTA, "Example project" chip, `data-nosnippet` | UAE spec §6 |
| 2026-10-09 | New pages N1–N18 needed (hubs, pricing, about, tools, e-invoicing, solution pages…) | `specs/2026-10-09-new-pages-design.md` |
| 2026-10-09 | Blog: 55 guides + 3 data studies, 2 EN/week + 1 AR/week | `docs/seo-uae/09-blog-calendar.md` |
| 2026-10-09 | Standing rule: new needs → spec + plan + `CLAUDE.md` + this file, same session | `CLAUDE.md`, memory |
| 2026-10-09 | **Owner approved** the UAE localization spec, AED prices (Add-on 2,900 · Launch 7,900 · Build 49,000 · Care 790/mo) and brand changes (Peak Plumbing → Peak Cooling, Rick → Rashid, UAE locations); Phase 1 runs inline (one session executes the plan) | UAE spec §4–§5, this file Part C |
| — | *(next decision goes here)* | |

## Part B · File map (what each file is for)

| File | Purpose | Source of truth for |
|---|---|---|
| `CLAUDE.md` | Project brief loaded every chat | Theme, copy style, mockup rules, hard-won rules |
| **`docs/MASTER-PLAN.md`** | This checklist | What's done and what's next |
| `docs/seo-uae/README.md` + `01`–`09` | UAE SEO strategy (market, keywords, URLs, on-page, content, prices, technical, authority, blog calendar) | UAE SEO decisions |
| `docs/seo-uae/06-pricing-aed.md` | AED price book | All prices |
| `docs/seo-uae/09-blog-calendar.md` | 55 guides with titles and outlines | Blog content |
| `docs/seo-uae/llms/` | Drafts for `/llms.txt`, `/llms-full.txt` | AI-crawler files |
| `docs/seo/` | US SEO strategy | Phase 2 only |
| `docs/superpowers/specs/2026-10-07-…` / `2026-10-08-…` / `2026-10-09-industry-…` | One spec per mockup page | Each page's content |
| `docs/superpowers/specs/2026-10-09-uae-localization-design.md` | How every page changes for the UAE | Brand facts (§4), AED prices (§5), shared components (§6), visual checklist (§6.9), page changes (§8) |
| `docs/superpowers/specs/2026-10-09-new-pages-design.md` | New pages N1–N18 | New page content |
| `docs/superpowers/plans/2026-10-09-uae-localization.md` | 22-task plan for Phase 1 | Steps + tools code |
| `docs/superpowers/plans/2026-10-09-new-pages.md` | 20-task plan for Phase 2 | Steps + calculator code |
| `docs/superpowers/mockups/` | The page mockups (`us/` = archived US versions after Phase 1 Task 1) | What the pages look like |
| `docs/superpowers/tools/` (created in Phase 1) | Audit, screenshots, text-size, sync tools | "Done" checks |
| Memory (`~/.claude/projects/d--talha-company/memory/`) | Owner preferences and decisions across chats | Working style |

---

## Part C · Waiting on the owner (blocks work until answered)

- [ ] **Brand name and domain** (blocks: Next.js build, llms.txt, directories, Clutch, Google profile)
- [x] **Approve AED prices** ✅ 2026-10-09 — (`seo-uae/06`): Add-on 2,900 · Launch 7,900 · Build 49,000 · Care 790/mo; plus the white-label team price decision
- [x] **Approve brand changes:** ✅ 2026-10-09 — Peak Plumbing → **Peak Cooling** (AC), Apex owner Rick → **Rashid**, other UAE locations (UAE spec §4)
- [ ] **Approve route renames:** `/services/website-design`, `/services/ai-whatsapp-automation`; `/agencies` vs `/services/white-label`
- [x] **Review the UAE localization spec** ✅ 2026-10-09 — → then Phase 1 starts
- [ ] **Review the new-pages spec** (N1–N18)
- [x] **Execution method** for plans: inline (2026-10-09)
- [ ] Business setup facts: free zone, trade licence no., +971 WhatsApp number, address, staffed desk? (blocks Phase 0 items and footer text)
- [ ] Arabic writer (who writes/reviews Arabic)
- [ ] Named author(s) for guides (name, photo, role, LinkedIn)
- [ ] Team names/photos for About; real client work, logos, reviews, case studies (with permission)
- [ ] Which integrations we can truly claim (Foodics, Fresha, CleanCloud, RepairDesk, Jobber, Zoho, WPS providers, e-invoicing ASPs)
- [ ] Licensed UAE photos to replace Unsplash
- [ ] Who writes the legal pages (privacy, terms, cookies)
- [ ] Confirm demand before any new industry (N18)

---

## Part D · Execution phases (in order)

### Phase 0 · Business setup (owner actions, can run in parallel) — source `docs/seo-uae/08`
- [ ] Pick brand name, buy `.com` (and `.ae` once licensed, redirect to `.com`)
- [ ] Free-zone trade licence with IT/software activity (confirm mainland clients allowed)
- [ ] +971 number + WhatsApp Business account
- [ ] Address (staffed co-working desk if we want Google Maps)
- [ ] Google Business Profile (only if the address qualifies)
- [ ] Shopify Partner account, primary location Dubai
- [ ] Clutch profile (UAE location), then ask first clients for reviews (target 15+)
- [ ] DesignRush, Sortlist, GoodFirms profiles
- [ ] Zoho partner application; WhatsApp BSP partner; Tabby/Tamara/Stripe/Telr partner listings where they exist
- [ ] Approach 3–5 e-invoicing ASPs about an integration partnership
- [ ] LinkedIn company page + founders' profiles
- [ ] Google Search Console + Bing Webmaster set up as soon as the domain exists

### Phase 1 · Localize the 19 mockups for the UAE — plan `docs/superpowers/plans/2026-10-09-uae-localization.md` (spec `specs/2026-10-09-uae-localization-design.md`)
- [x] T1 Archive US versions + build toolkit (tests pass) — 2026-10-09: 19 mockups + 19 specs archived, `npm test` 13/13, baselines in `_shots/baseline-home` (homepage text-size already FAILS, see plan Task 3 note)
- [x] T2 Shared foundations (SITES brands, shared CSS, mockup headings, kicker-safe split) — 2026-10-10: all 19 pages; homepage audit 179 → 79 US leftovers, 0 errors
- [x] T3 Homepage — 2026-10-10: uae-audit PASS (27 states), verify OK, text-audit PASS (fixed the US-era small text); nav/footer propagated; spec updated
- [x] T4 Mobile apps — 2026-10-10: uae-audit PASS (11 states), verify OK (0 overflow), text-audit PASS (added `.WAC` real WhatsApp chat mockup replacing iMessage, `data-thumb` on the squeezed-desktop "before" card); showcase/pricing/FAQ/tech-table AED values added; `pains v2` CSS block (incl. `.WAC`) propagated to the 17 pages that share it; spec §5 updated with a homepage-consistency table
- [x] T5 Web apps — 2026-10-10: uae-audit PASS (11 states), verify OK (0 overflow), text-audit PASS; dashboard tables/invoices converted to AED + Dubai neighbourhoods, QuickBooks→Zoho Books (14×), Klarna→Tabby, lb→kg; pricing AED 29,000/59,000/120,000; UAE Pass FAQ added; propagated to 10 pages; spec updated
- [x] T6 SaaS — 2026-10-10: uae-audit PASS (11 states), verify OK (0 overflow), text-audit PASS; Shelfwise/Keyhouse/Partsmith suppliers and locations localized (Al Aweer Fresh Co., Gulf Fresh Produce, Al Futtaim Parts, Emirates NBD, WPS payroll), QuickBooks→Zoho Books (kept 2), lb→kg, MRR chart to AED; pricing AED 24,000/120,000/250,000; propagated to 8 service pages (not industry pages)
- [x] T7 Shopify — 2026-10-10: uae-audit PASS (11 states), verify OK (0 overflow), text-audit PASS (re-zoomed theme-editor + PageSpeed-report crops); Salla added to comparison table, WooCommerce/Wix/Salla migration copy, Shop Pay→Apple Pay, trade-licence FAQ, Ember wine quote rewritten; pricing AED 9,900/29,000/69,000; propagated to WordPress page; spec rewritten
- [x] T8 Website design (WordPress) — 2026-10-10: uae-audit PASS (11 states), verify OK (0 overflow), text-audit PASS; Volt & Wire/Apex/Maison Rose all AED, ZIP→coverage/Area field, Arabic FAQ added; pricing AED 7,900/16,900/35,000 (Starter matches homepage Launch); no propagation targets remaining; spec rewritten
- [x] T9 Landing pages — 2026-10-10: localized in the Next.js content layer (`content/`), `npm run audit` PASS
- [x] T10 Payments — 2026-10-10: localized in the Next.js content layer (`content/`), `npm run audit` PASS
- [x] T11 WhatsApp & AI — 2026-10-10: localized in the Next.js content layer (`content/`), `npm run audit` PASS
- [x] T12 Automation & ERP (+ e-invoicing tab) — 2026-10-10: localized in the Next.js content layer (`content/`), `npm run audit` PASS
- [x] T13 SEO — 2026-10-10: localized in the Next.js content layer (`content/`), `npm run audit` PASS
- [x] T14 Vibe-code rescue — 2026-10-10: localized in the Next.js content layer (`content/`), `npm run audit` PASS
- [x] T15 White-label — 2026-10-10: localized in the Next.js content layer (`content/`), `npm run audit` PASS
- [x] T16 Industry template + Auto repair — 2026-10-10 (session ea): uae-audit PASS (10 states), verify OK 0 overflow, text-audit PASS; WhatsApp chats replace iMessage, Patrol D 48210, Rashid, AED invoice incl. VAT 5%; industry shared blocks propagated to the 5 industry pages only; auto-repair spec rewritten + industry overview spec updated
- [x] T17 Salons — 2026-10-10 (session ea): uae-audit PASS, verify OK, text-audit PASS; WhatsApp cancellation + Arabic waitlist reply, AED 100 deposits, VAT-inclusive POS AED 690, WPS payroll, chair rental AED 2,400/wk; spec rewritten
- [x] T18 Laundry — 2026-10-10 (session ea): uae-audit PASS, verify OK, text-audit PASS; kg/km everywhere, Imran, Dubai Marina towers + concierge notes, WhatsApp driver chat, Arabic customer message, commercial accounts in AED; spec rewritten
- [x] T19 Restaurants — 2026-10-10 (session ea): uae-audit PASS, verify OK, text-audit PASS; Talabat/Deliveroo/Careem/Foodics/Eat App, Ember · JLT, AED 245 order (keep AED 74), payout AED 17,700/-5,310, AED 160 deposits, Al Aweer Fresh Co., WPS tips, no wine; spec rewritten
- [x] T20 Home services → Peak Cooling — 2026-10-10: localized in the Next.js content layer (`content/`), `npm run audit` PASS
- [x] T21 Phone repair — 2026-10-10: localized in the Next.js content layer (`content/`), `npm run audit` PASS
- [x] T22 Cross-page consistency, `CLAUDE.md` update, final audits (19 × PASS) — 2026-10-10: localized in the Next.js content layer (`content/`), `npm run audit` PASS
- [ ] **Owner review of the localized pages** (score + feedback round; record changes in specs)

### Phase 2 · Build the new pages — plan `docs/superpowers/plans/2026-10-09-new-pages.md` (spec `specs/2026-10-09-new-pages-design.md`)
- [x] T1 Calculator library (tested) — built in Next.js 2026-10-10
- [x] T2 Pricing — built in Next.js 2026-10-10
- [x] T3 Services hub — built in Next.js 2026-10-10
- [x] T4 Industries hub — built in Next.js 2026-10-10
- [x] T5 About — built in Next.js 2026-10-10
- [x] T6 How we work — built in Next.js 2026-10-10
- [x] T7 Contact — built in Next.js 2026-10-10
- [x] T8 E-invoicing integration service — built in Next.js 2026-10-10
- [x] T9 Guides hub + guide template (guide #1 drafted) — built in Next.js 2026-10-10
- [x] T10 Talabat commission calculator — built in Next.js 2026-10-10
- [x] T11 Payment gateway fee calculator — built in Next.js 2026-10-10
- [x] T12 E-invoicing readiness check — built in Next.js 2026-10-10
- [x] T13 404 + legal — built in Next.js 2026-10-10
- [x] T14 Solution template + WhatsApp ordering — built in Next.js 2026-10-10
- [x] T15 Six more solution pages — built in Next.js 2026-10-10
- [x] T16 App cost calculator — built in Next.js 2026-10-10
- [x] T17 Work hub + case study template — built in Next.js 2026-10-10
- [x] T18 Abu Dhabi hub + 3 pages — built in Next.js 2026-10-10
- [ ] T19 Arabic homepage prototype (RTL rules spec) — prototype built at `/ar` (draft Arabic, noindex); RTL rules spec and native-writer review still to do
- [x] T20 Nav/footer wiring, orphan check, docs update — built in Next.js 2026-10-10
- [ ] **Owner review of the new pages**

### Phase 3 · Technology pages and new industries — **plan to write**
- [ ] Write spec + plan for technology pages (`/technologies/flutter`, `nextjs`, `laravel`, `n8n`, `supabase`; for informed buyers and agencies)
- [ ] Build them
- [ ] New industries (N18) one at a time, only after the owner confirms demand: real estate · clinics · car rental · abaya/perfume brands · gyms · cleaning (each: brand in UAE spec §4 → spec → mockup)

### Phase 4 · Next.js build — **plan to write** (inputs: all specs, `docs/seo-uae/07-technical-seo.md`, `docs/seo-uae/04`)
- [x] Write the build spec + implementation plan — see `README.md` and `docs/BUILD-COVERAGE.md` (architecture, components from the mockup system, content in `messages/en.json` / `ar.json`)
- [x] Project setup: Next.js, TS, Tailwind v4, `site.ts` (brand, AED, GST, WhatsApp, licence). **next-intl deferred**: copy is in typed modules and `/ar` is a standalone prototype (see README, "Decisions and deviations")
- [x] Design system + shared components (nav, footer reveal, cursor, booking widget, WhatsApp CTA, plain-English block, kicker H1, ex-chip)
- [x] Mockup components (`ScaledScreen`, `DeviceFrame`, site/app/tool templates) with `data-nosnippet`
- [x] Pages: homepage, 12 services, 6 industries, all Phase 2 pages, guides (MDX or CMS: decide in the build spec)
- [x] SEO: metadata per page, JSON-LD (AED, areaServed AE), sitemap with hreflang, robots allowing AI bots, `/llms.txt`, `/llms-full.txt`, `.md` page versions, OG images, 301 map
- [x] Analytics: GA4 events (`whatsapp_click`, `booking_completed`…), consent banner (PDPL)
- [ ] Speed: Core Web Vitals targets on mobile, GSAP/Lenis loaded late, fonts subset Latin + Arabic
- [ ] Arabic pages wave AR-1 (10 pages, native writer)
- [ ] Pre-launch checklist (`docs/seo-uae/07` §9) all ticked — 2026-10-10: code-side items pass (`npm run audit`, `npm run links`, crawl); open: Arabic RTL screenshots, Lighthouse/WebPageTest on the live domain, real licence/address/number

### Phase 5 · Launch
- [ ] Deploy on CDN with Gulf edge; HTTPS; redirects
- [ ] Submit sitemaps to Google Search Console and Bing; IndexNow on
- [ ] Request indexing for the 20 money pages
- [ ] All proof real or labelled "Example project"
- [ ] Owner sign-off

### Phase 6 · Content (from launch, ongoing) — `docs/seo-uae/09-blog-calendar.md`
- [x] (written in code 2026-10-10, owner to fact-check before launch: all 55 guides + 6 cluster guides have bodies; data studies D1–D3 need real data)
- [ ] Month 1: guides #1–#8 (each: keyword validated, ⚠ facts checked, visuals, links, added to hub)
- [ ] Month 2: #9–#16 + AR #1, #3
- [ ] Month 3: #17–#24 + AR #6, #2
- [ ] Month 4: #25–#32 + AR #7, #23
- [ ] Months 5–6: #33–#42
- [ ] Months 7–8: #43–#52
- [ ] Months 9–12: #53–#55, data studies D1–D3, refresh #1–#16
- [ ] A case study for every real client as projects finish
- [ ] Arabic waves AR-2 and AR-3 (`docs/seo-uae/03` §4)

### Phase 7 · Authority, AI search and measurement (monthly from launch) — `docs/seo-uae/08`
- [ ] Monthly: new reviews requested (Shopify directory, Clutch, Google)
- [ ] Monthly: AI prompt log (8 prompts × 5 runs × 5 assistants, EN + AR)
- [ ] Monthly: Search Console + GA4 report (leads by page and language, P1 keywords in top 10, Core Web Vitals)
- [ ] Months 2–9: roundup/listicle outreach, UAE media pitches, accounting-firm webinars, startup-hub perks
- [ ] Events: GITEX/Expand North Star (Oct), Gulfood (Feb), Beautyworld (Oct–Nov), Automechanika, Seamless
- [ ] Community help (Facebook groups, r/dubai, LinkedIn) as real people

### Phase 8 · Expansion (after the UAE ranks)
- [ ] Abu Dhabi pages live and measured (Phase 2 T18) → Sharjah page if demand
- [ ] **Saudi Arabia — plan to write** (Arabic-first keyword research, Mada, ZATCA, Riyadh/Jeddah pages)
- [ ] **US launch at `/us/` — plan to write** from `docs/seo/` (US mockups in `mockups/us/`, USD price book `docs/seo/06`)

---

## Part E · Recurring checks

| How often | Task | Source |
|---|---|---|
| Monthly (until July 2027) | Re-check UAE e-invoicing dates/rules; update guides #1, #2, #14, #24–26, #33, #34 and the e-invoicing page | Ministry of Finance / FTA |
| Monthly | AI prompt log; reviews; Search Console report | `seo-uae/08` §5 |
| Quarterly | Refresh cost guides and price pages with real numbers; re-verify gateway, Shopify and BNPL fees | `seo-uae/09` refresh rules |
| Before every Ramadan | Update guide #54 and seasonal banners | `seo-uae/09` |
| Every new page | Audit PASS, screenshots, §6.9 checklist, page spec, linked from a hub | Plans |

## Part F · Nothing-left check (every recommendation → where it's executed)

| Recommendation | Where it's executed |
|---|---|
| UAE keyword map (`seo-uae/02`) | Phase 1 (kickers, titles), Phase 2 (new pages), Phase 6 (guides) |
| URL map, hubs, solution pages, city pages (`seo-uae/03`) | Phase 2 T3, T4, T14–T15, T18; Phase 4 routes |
| Internal linking rules (`seo-uae/03` §6–9) | Phase 2 T20, Phase 4, Phase 6 step 5 of each guide |
| On-page titles/metas/H1 kickers (`seo-uae/04`) | Phase 1 (kickers), Phase 4 (metadata) |
| Content waves + tools (`seo-uae/05`) | Phase 2 T10–T12, T16; Phase 6 |
| AED price book (`seo-uae/06`) | Part C approval → Phase 1 T3+, Phase 2 T2 |
| Technical SEO (`seo-uae/07`) | Phase 4, Phase 5 |
| Local presence + authority + AI (`seo-uae/08`) | Phase 0, Phase 7 |
| Blog calendar (`seo-uae/09`) | Phase 2 T9 (template + guide #1), Phase 6 |
| `llms.txt` drafts | Phase 4 SEO step |
| UAE localization spec (§2–§9) | Phase 1 |
| New pages spec (N1–N18) | Phase 2 (N1–N17), Phase 3 (N18) |
| Technology pages | Phase 3 (plan to write) |
| Arabic RTL | Phase 2 T19 (prototype + rules), Phase 4 (AR-1), Phase 6 (AR-2/3) |
| Real proof / FTC & UAE consumer rules | Phase 1 `.ex-chip`, Part C real work, Phase 5 check |
| Saudi, US phase 2 | Phase 8 (plans to write) |
