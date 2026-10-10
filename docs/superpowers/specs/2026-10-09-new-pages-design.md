# New Pages for the UAE Site — Design Spec

- **Date:** 2026-10-09
- **Status:** Draft, waiting for owner review
- **Why:** the UAE SEO plan (`docs/seo-uae/03-architecture-and-linking.md`) needs pages that have no mockup yet: hubs, pricing, about, tools, the e-invoicing service, solution pages, guides, case studies, Abu Dhabi pages and Arabic. This spec defines each one. Each built page later gets its own short spec, as with the service pages.
- **Builds on:** the design system and templates in `2026-10-07-agency-site-homepage-and-mobile-apps-design.md`, the industry template in `2026-10-08-industry-pages-design.md`, and **all UAE rules in `2026-10-09-uae-localization-design.md`** (brand facts §4, AED prices §5, shared components §6, visual checklist §6.9).
- **Order:** build these after the 19 existing pages are localized (plan `2026-10-09-uae-localization.md`), because they reuse the localized templates.

## 0. Shared rules for every new page

- Same shell: floating pill nav (with WhatsApp icon), footer reveal with the Dubai line, cursor, motion rules (CLAUDE.md §7).
- Every page has: H1 with `.h1-kicker`, a plain-English block where it's a money page, WhatsApp CTA, booking widget in GST, `.ex-chip` on any concept example, `data-nosnippet` on mockups, exactly one `<h1>`.
- Every page passes `uae-audit.js` and the §6.9 visual checklist, and gets screenshots with `verify.js`.
- New CSS classes get a page prefix (listed per page) and are grepped across all mockups before use.
- SEO titles and metas come from `docs/seo-uae/04-on-page-seo.md`; where a page isn't there, they're given below.
- Mock data uses the UAE concept brands (§4 of the UAE spec). Mix light and dark mockups; show operations, not only bookings.

## Priority

| Priority | Pages | Why |
|---|---|---|
| **P1 · before launch** | N1 Services hub · N2 Industries hub · N3 Pricing · N4 About · N5 How we work · N6 Contact · N7 Guides hub + guide template · N8 E-invoicing integration · N9–N11 three calculators · N12 404 + legal | Navigation, trust and the biggest SEO opportunities |
| **P2 · months 1–4** | N13 Solution-page template + 7 solution pages · N14 App cost calculator · N15 Work hub + case study template | Money pages for specific searches; real proof |
| **P3 · months 5–12** | N16 Abu Dhabi hub + 3 city pages · N17 Arabic homepage (RTL prototype) · N18 New industries | Expansion |

---

## N1 · Services hub (`/services`) · file `services.html` · prefix `sv-`
- **Title:** `Software Development Services in Dubai & UAE · [Brand]` · **Meta:** "Shopify stores, websites, apps, WhatsApp assistants, payments, e-invoicing and automation for UAE businesses. Fixed AED prices. Start with your problem."
- **Hero (dark, compact):** kicker "Services"; H1 "What we build, and **what it costs.**"; sub "Twelve services, one team, fixed prices in AED. Not sure which you need? Start with your problem below."; CTAs Book a call · WhatsApp us.
- **Plain English:** "We build software for UAE businesses in three groups: selling online (Shopify, websites, payments, landing pages), building products (mobile apps, web apps, SaaS) and running the business (WhatsApp & AI, automation, e-invoicing, SEO, fixing AI-built apps). Every service has a fixed AED price agreed before we start."
- **Problem finder (stone):** 10 rows from `docs/seo-uae/05-content-plan.md` §6 ("Talabat takes too much", "Drowning in WhatsApp messages", "I need e-invoicing before 2027"…); each row is a link with an arrow to the right page. Interaction: hover highlights the row and shows a small preview thumbnail of that service's hero mockup on the right (desktop only).
- **Three groups (cards):** *Sell online* (Shopify AED 9,900 · Website design AED 7,900 · Payments AED 2,900 · Landing pages AED 5,900) · *Build* (Mobile apps AED 35,000 · Web apps AED 29,000 · SaaS & MVPs AED 24,000) · *Run & grow* (WhatsApp & AI AED 2,900 · Automation & ERP AED 7,900 · E-invoicing AED 9,900 · Local SEO AED 3,500/mo · Fix my AI-built app AED 2,900). Each card: one-line customer problem, "from AED X", a small cropped mockup from that page, link.
- **For agencies band (dark):** link to `/agencies`.
- **FAQ (4):** Which service do I need? · Can you do several together? · Are prices fixed? · Do you work outside Dubai?
- **CTA + footer.** Schema: ItemList of Services.

## N2 · Industries hub (`/industries`) · `industries.html` · prefix `ix-`
- **Title:** `Software for UAE Restaurants, Salons, Garages & More · [Brand]`
- **Hero:** kicker "Industries"; H1 "We've seen how your business **actually runs.**"; sub "Six industries we know from the counter up, and the software they already use."
- **Grid (6 large cards, brand-coloured):** Restaurants & cloud kitchens (Ember Kitchen) · Salons & spas (Maison Rose) · Laundry (FreshFold) · Garages & car service (Apex Auto Works) · AC, cleaning & maintenance (Peak Cooling) · Phone repair (FixPoint). Each: owner's frustration line (the page H1), "works with" chips, 2 result numbers + `.ex-chip`, phone mockup, link; second row of links to that industry's solution pages.
- **"Not on the list?" band:** "We also work with clinics, real-estate brokers, car rentals and retail brands. Tell us how your business runs." + WhatsApp.
- **CTA + footer.**

## N3 · Pricing (`/pricing`) · `pricing.html` · prefix `pz-`
- **Title/meta:** from `seo-uae/04` (`Prices in AED: Websites, Shopify, Apps, WhatsApp AI · [Brand]`).
- **Hero:** kicker "Pricing"; H1 "Every price, **before you call us.**"; sub "Fixed in AED, agreed in writing before we start. Prices exclude 5% VAT."
- **Plain English:** "Most UAE businesses start with one of four packages: an add-on from AED 2,900, a website from AED 7,900, a website and app from AED 49,000, or a monthly care plan from AED 790. Every service below lists its starting price, what most projects really cost, and what changes the price."
- **Four packages (cards, homepage style):** Add-on · Launch · Build (lime, most chosen) · Care.
- **Service price tables (stone, accordions by group):** for every service the three tiers from UAE spec §5 + "Most projects land between" from `seo-uae/06` + time. Industry packages row.
- **Care plans table:** Care AED 790 · Care Plus AED 1,900 · Growth Care AED 4,900 (from `seo-uae/06`).
- **"What changes the price" chips** (shared list).
- **How you pay (dark):** under AED 20,000 50/50; above 30/40/30; monthly plans cancel with 30 days' notice; bank transfer, card, payment link; tax invoices; "You own the code from the first payment."
- **Compare us (light table):** Freelancer · Big Dubai agency · Us, with rows Price for a business website, for a business app, Fixed price?, Arabic included?, Contract lock-in, Who owns the code (values from `seo-uae/06` §1).
- **FAQ (6):** Why fixed price? · Do you work hourly? · Is VAT included? · What's not included (third-party fees) · Can I pay in instalments? · What if the scope changes?
- **CTA + footer.** Schema: OfferCatalog (AED). Updated-on stamp "Prices checked [month year]".

## N4 · About (`/about`) · `about.html` · prefix `ab-`
- **Title:** `About [Brand] · A Software Studio Based in Dubai`
- **Hero:** kicker "About us"; H1 "A small senior team. **Based in Dubai, building for the UAE.**"
- **Story (stone, two columns):** why the studio exists (owners stuck between cheap freelancers and slow big agencies), in the owner's voice, placeholder text marked `[owner to write]` with a 150-word draft to edit.
- **Team (cards):** photo, name, role, years, languages, LinkedIn. Placeholders `[Name]` with grey initials until the owner sends photos (no fake people).
- **How we're different (5 points):** fixed AED prices · Arabic + English included · you own everything · weekly demos · same time zone.
- **Facts strip:** "Licensed in Dubai · [free zone] · Licence [number]" · "Mon–Fri 9:00–18:00 GST" · "Replies on WhatsApp within an hour" · "[N] projects launched".
- **Where we are:** address card + static map image of the area (only once the address is real; until then "Dubai · meetings by video or at your office").
- **CTA + footer.** Schema: AboutPage + Person per founder.

## N5 · How we work (`/process`) · `process.html` · prefix `pw-`
- **Title:** `How We Work: Fixed Price, Weekly Demos, You Own the Code · [Brand]`
- **Hero:** H1 "No surprises. **Here's exactly what happens.**"
- **Timeline (reuses the homepage "How it works" sticky stage, 9 steps, UAE values)** with a toggle: "Website (2–4 weeks)" / "Website + app (~12 weeks)" / "Add-on (days)", each changing the step weeks.
- **What you get every week (cards):** Friday demo video, staging link, written update in plain English, WhatsApp group with the team.
- **The contract in plain English (light document mockup):** scope, fixed price, payment milestones, change requests priced before work, code ownership, NDA, what happens if we're late, 30 days of fixes after launch.
- **After launch:** care plans.
- **FAQ (5).** CTA + footer.

## N6 · Contact (`/contact`) · `contact.html` · prefix `ct-`
- **Title:** `Contact [Brand] · Book a Call or WhatsApp Us`
- **Hero:** H1 "Tell us what's going on. **We'll tell you what it takes.**"
- **Three ways (cards):** Book a 30-minute call (embedded booking widget, GST) · WhatsApp (QR code + button, "replies within an hour, Mon–Fri") · Email + phone.
- **Short form (optional):** name, business, what you need (chips: website, store, app, WhatsApp/AI, e-invoicing, other), budget range in AED, WhatsApp number. Success state: "Thanks, [name]. We'll WhatsApp you within an hour."
- **What happens next (3 steps).** Address/hours. Footer.

## N7 · Guides hub (`/guides`) + guide template (`/guides/<slug>`) · `guides.html`, `guide-e-invoicing.html` · prefix `gd-`
**Hub:** H1 "Straight answers for UAE business owners."; search box; category chips (E-invoicing · Costs · E-commerce · Apps · Payments · WhatsApp & AI · Websites · Restaurants · Salons · For agencies); featured pillar (e-invoicing) with a countdown chip "Days until 1 July 2027"; grid of guide cards (title, 1-line answer, read time, category, updated date) using real titles from `docs/seo-uae/09-blog-calendar.md`; tools strip linking the calculators; newsletter/WhatsApp-channel signup.
**Guide template (built with real content of guide #1):**
- Breadcrumb Home / Guides / E-invoicing; H1 (the guide title) with kicker = category; meta row: author avatar + name + role, "Reviewed by", "Updated [date]", read time; language switch EN / ع when an Arabic version exists.
- **Answer box** (lime left border): the 2–3-sentence answer.
- Sticky table of contents (desktop left rail), progress bar.
- Body typography: 19px/1.7, max 720px, H2/H3, tables, callouts (✓ tip, ⚠ "check the official source"), figures in the site's mockup style (timeline, invoice).
- "What we'd do" box (dark, small) with 2 links + WhatsApp.
- FAQ accordion; sources list with official links; author box; "Related guides" (3); CTA band.
- Schema: Article + BreadcrumbList + FAQPage.

## N8 · E-invoicing integration (`/services/e-invoicing-integration`) · `service-e-invoicing.html` · prefix `ei-`
New service page on the **service template** (11 sections). Title/meta/kicker from `seo-uae/04`.
- **Hero H1:** "E-invoicing becomes law in 2027. **Your invoices should be ready before it does.**"; sub "We connect Zoho Books, Odoo, QuickBooks, your POS or custom software to the Accredited Service Provider you choose, test it with real invoices, and train your team. We're an integration partner, not an ASP."; chips Zoho Books · Odoo · QuickBooks · Foodics · Custom ERP · PINT AE · Your ASP; visual: light "E-invoicing status" dashboard for Peak Cooling (1,284 invoices this month, 0 rejected, 3 sources connected: Zoho Books, Foodics-style POS, Excel import; deadline countdown "263 days to 1 July 2027"), phone with WhatsApp alert "Invoice INV-5531 rejected: buyer TRN missing · Fix".
- **Plain English:** "From 2027, UAE businesses must send invoices electronically through an Accredited Service Provider. If your invoices come from Zoho Books, Odoo, a POS, Excel or your own software, we connect them to the provider you choose, fix the data your invoices are missing, test everything with real invoices and train your team. Most businesses are ready in 2–4 weeks, from AED 9,900."
- **Pains (3):** "Our invoices come from three different places." (Zoho + POS + Excel) · "Half our customers have no TRN in the system." (customer list with blanks → cleaned) · "Our software is custom and the developer left." (old PHP system → connector).
- **Showcase by setup (6 tabs, not industries):** Zoho Books · Odoo · QuickBooks · Foodics/POS · Custom software · Several entities. Each: what we connect, time, the status screen.
- **What we do (5 tabs):** readiness audit · data clean-up (TRNs, addresses) · connection to your ASP · testing with real invoices · rejections handled (alert + fix).
- **Honest choice:** Your software's built-in e-invoicing · Software + our integration (recommended) · Replace your software · Do it manually through the ASP portal.
- **Process:** "About 2–4 weeks" (audit → clean data → connect → test → go live → monitor).
- **Case (example):** Peak Cooling: 3 invoice sources, 1,284 invoices/month, ready 9 months early + `.ex-chip`.
- **Pricing:** Readiness + setup AED 9,900 · Custom/legacy integration AED 24,000 · Multi-entity / ERP rebuild AED 59,000+.
- **FAQ (6):** Are you an ASP? (no) · What's my deadline? · Does it apply in a free zone? ⚠ · What about B2C? ⚠ · What does the ASP cost? · Can you fix rejected invoices?
- Every date/rule shows "Checked against Ministry of Finance guidance on [date]".

## N9 · Talabat commission calculator (`/tools/talabat-commission-calculator`) · `tool-delivery-commission.html` · prefix `tc-`
- **H1:** "How much do delivery apps really cost your restaurant?"; intro 300 words (method, assumptions, sources, "we don't store your numbers unless you opt in").
- **Inputs (sliders + fields):** orders per month on apps, average order (AED), commission % (default 25), promo spend, % of app customers who'd reorder direct.
- **Result (dark card, live):** "Last 12 months to delivery apps: AED X" · "If 30% of regulars ordered direct: you'd keep AED Y a year" · bar chart (commission vs own ordering at ~3% card fees); CTA "See how restaurants keep this" → `/industries/restaurants/online-ordering`; WhatsApp "Send me this result".
- **FAQ (4)** and "How we calculate it". Schema WebApplication.

## N10 · Payment gateway fee calculator (`/tools/payment-gateway-fee-calculator`) · `tool-payment-fees.html` · prefix `gf-` (`pf-` is taken)
- **H1:** "Which payment gateway leaves you the most money?"
- **Inputs:** monthly card sales (AED), number of payments, % international cards, need Tabby/Tamara (y/n).
- **Result:** table Stripe · Telr · Network International · Ziina · PayTabs with monthly and yearly fees (rates from the payments page, dated, "check current pricing" note), cheapest highlighted; CTA to payments page.

## N11 · E-invoicing readiness check (`/tools/e-invoicing-readiness-check`) · `tool-einvoice-check.html` · prefix `rc-`
- **H1:** "Is your business ready for UAE e-invoicing?"
- **10 questions (one per screen, progress bar):** revenue band, where invoices come from, accounting software, customers with TRN, ASP chosen, invoices per month, entities, IT help, B2B vs B2C, free zone or mainland.
- **Result:** deadline for your band, readiness score /100, personal checklist (what's done / what's next), "Email me this" + WhatsApp, CTA to N8.
- Answers stored only with opt-in (for data study D1).

## N12 · 404 and legal
- **404 (`404.html`):** dark panel "This page moved or never existed." + search + links to services, industries, pricing, guides + WhatsApp.
- **Privacy, Terms, Cookies:** simple text pages in the stone layout with a table of contents; content to be written by a lawyer (placeholder outline: what we collect, WhatsApp, analytics, PDPL rights, contact).

---

## N13 · Solution-page template + 7 solution pages · prefix `so-`
A shorter page for one industry × one job (`docs/seo-uae/03` §3). **Template (7 sections):** Hero (job-specific H1, kicker = exact keyword, solution mockup, 2 floating cards) → Plain English → Sound familiar (2 cards) → What you get (3–4 tabs) → Cost & timeline (AED table + "most land between") → Mini case (example) → FAQ (5) + CTA. 1,200–1,800 words. Links up to its industry page and across to the service page. At least 60% content not found elsewhere.

| # | URL / file | H1 | Hero mockup | Tabs |
|---|---|---|---|---|
| a | `/industries/restaurants/whatsapp-ordering` · `sol-restaurant-whatsapp.html` | "Your customers already order on WhatsApp. **Make it an ordering system.**" | WhatsApp menu → cart → pay link → kitchen ticket | Menu in chat · Pay by link · Straight to the kitchen · Order updates |
| b | `/industries/restaurants/online-ordering` · `sol-restaurant-ordering.html` | "Keep the 30%. **Take orders on your own site.**" | Ember ordering page + "0% commission" savings card | Ordering site · Pickup & own delivery · Rewards · Sync with Foodics & the apps |
| c | `/industries/restaurants/ordering-app` · `sol-restaurant-app.html` | "Your regulars, **one tap from their usual.**" | Ember app (rewards, reorder) | App · Rewards · Push offers · Admin |
| d | `/industries/salons/booking-app` · `sol-salon-app.html` | "Your own booking app. **No marketplace, no commission.**" | Maison Rose app booking + deposit | Booking & deposits · Waitlist · Memberships · WhatsApp reminders |
| e | `/industries/laundry/pickup-delivery-app` · `sol-laundry-app.html` | "Pickup and delivery, **without 23 WhatsApps before 9 AM.**" | FreshFold customer + driver apps | Customer app · Driver app · Weigh & charge · Business accounts |
| f | `/industries/auto-repair/website` · `sol-garage-website.html` | "A garage website that **books cars, not just calls.**" | Apex site + booking by plate | Website · Booking by plate · Google profile · Reviews |
| g | `/industries/home-services/website` · `sol-ac-website.html` | "When the AC dies at 1 AM, **they find you first.**" | Peak Cooling site + 1 AM booking | Website & booking · WhatsApp auto-reply · AMC contracts · Google profile |

Each page's prices: Get found tier AED 7,900 and the relevant service tier; FAQs specific to the job.

## N14 · App cost calculator (`/tools/app-cost-calculator`) · `tool-app-cost.html` · prefix `ac-`
Inputs as chips: app type (booking, ordering, delivery, loyalty, marketplace, internal) · platforms (iPhone, Android, both) · features (payments, Tabby, live tracking, chat, admin, Arabic, integrations) · design (template, custom). Result: AED range from our tiers + weeks + "what's driving it" list + CTA "Get a fixed price in 30 minutes".

## N15 · Work hub (`/work`) + case study template (`/work/<client>`) · `work.html`, `case-template.html` · prefix `wk-`
- **Hub:** H1 "Work we're proud of." Filters by industry and service; cards with real client work only. **Until real clients exist, the page shows the concept projects with `.ex-chip` on every card and the heading "Example projects".**
- **Case template:** client header (logo, industry, location, services, timeline, budget range in AED), "Before" story with real screenshots, what we built (screens), 3 result numbers, client quote with photo (permission), "What's next", related services, CTA. Schema Article (+ Review only when the client wrote it).

## N16 · Abu Dhabi hub + 3 city pages · `abu-dhabi.html`, `abu-dhabi-app-development.html`, `abu-dhabi-website-design.html`, `abu-dhabi-shopify.html` · prefix `ad-`
Rules from `docs/seo-uae/03` §3 (≥50% city-specific). Hub H1 "Software for Abu Dhabi businesses, **from a team an hour away.**" City content: government and semi-government buyers, ADGM, Hub71 startups, Abu Dhabi DED licensing, Khalifa City / Al Reem / Yas examples (Volt & Wire is Abu Dhabi-based), honest FAQ "Do you have an office in Abu Dhabi?" ("We're based in Dubai and meet in Abu Dhabi on request"). Each service page: kicker "[service] in Abu Dhabi", local example, AED tiers, FAQ.

## N17 · Arabic homepage prototype (`/ar`) · `homepage-ar.html` · prefix none (RTL overrides only)
Purpose: prove the design works right-to-left before translating more pages. A full copy of the localized homepage with `dir="rtl" lang="ar"`, Arabic copy written by the Arabic writer (placeholder Arabic headings provided by them, not machine-translated), an Arabic font paired with Plus Jakarta Sans (test IBM Plex Sans Arabic and Tajawal at 700–800 for the H1), mirrored layout via logical properties, mirrored arrows and horizontal scroll, numbers and prices in Western digits, mockups kept LTR where they show English UIs and RTL where they show Arabic UIs. Its own spec will record font choice and RTL rules for all later Arabic pages.

## N18 · New industries (after real demand)
Each uses the industry template (11 sections) with a new concept brand defined first in UAE spec §4:

| Industry | Concept brand (proposed) | Core story |
|---|---|---|
| Real-estate brokerages | **Keyhouse Realty** (ties to Keyhouse SaaS) · Business Bay | Leads from Bayut/Property Finder → WhatsApp follow-up → viewings → Ejari |
| Clinics & medical centres | **Al Noor Family Clinic** · Al Barsha | Online booking, insurance details, reminders, DHA-aware patient data |
| Car rental | **Desert Drive Rentals** · Al Qusais | Booking, deposits, Salik/fines recharges, fleet board |
| Fashion, abaya & perfume brands (e-commerce) | **Oud & Silk** · Dubai | Shopify, Tabby, Ramadan collections, GCC shipping |
| Gyms & studios | **Pulse Studio** · JLT | Memberships, class booking, freeze/pause, WhatsApp |
| Cleaning & maid services | **Sparkle Home Services** · JVC | Hourly booking, recurring cleans, staff app |

Add one only when the owner confirms demand or a client; each needs mockups and its own spec.

---

## Open items for the owner
1. Team photos, names and roles for About (no fake people).
2. Real address and licence before the map, LocalBusiness schema and Google profile go live.
3. Which ASPs we partner with for the e-invoicing page.
4. Who writes the legal pages.
5. Approval of the new concept brands in N18 before any of those pages start.
