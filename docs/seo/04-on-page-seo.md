# 04 · On-page SEO for every page

## 1. The one design change SEO needs: keyword kicker inside the H1

The approved H1s are emotional ("Your customers live on their phones. Your business should too."). They convert, but none says what we sell, and Google and AI read the H1 to decide what a page is about.

**Fix without changing the design:** the small label above the headline becomes part of the H1.

```html
<h1>
  <span class="h1-kicker">Mobile app development for small businesses</span>
  Your customers live on their phones. <em class="lime">Your business should too.</em>
</h1>
```

The kicker is styled like today's eyebrow (JetBrains Mono, small, muted). Visually nothing changes; semantically the H1 now reads "Mobile app development for small businesses: Your customers live on their phones…". Use this on **every** service, industry and solution page.

## 2. Rules for every page

| Element | Rule |
|---|---|
| `<title>` | ≤ 60 characters. Primary keyword first, a benefit or a price, then `· [Brand]`. Each one unique. |
| Meta description | 140–155 characters. Customer's problem → what we do → a proof point or price → soft CTA. Doesn't affect ranking but drives clicks. |
| URL | Lowercase, hyphens, the keyword, no dates, no IDs. |
| H1 | One per page, kicker pattern above. |
| H2s | Keep the brand voice, but each section H2 should contain the topic in plain words. Patterns below. |
| "In plain English" block | **New, every service/industry/solution page**, directly under the hero: 60–90 words of plain text that answers *what is it, who is it for, what does it cost, how long does it take*. This is what Google's AI Overviews and ChatGPT quote. Not a mockup, real text. |
| Body text | Service pages need **≥1,200 words of real HTML text** (not counting mockup UI). Most of it is already there across sections; the FAQ and "In plain English" block add the rest. |
| Mockups | Wrap every mockup container in `data-nosnippet` so Google never uses fake UI text ("Mike arrives in 8 min") as the search snippet. Give each a short `aria-label` describing it ("Example: laundry pickup app showing live driver tracking"). |
| Images | Descriptive file names (`laundry-pickup-app-driver-tracking.webp`), alt text that describes the scene, `next/image` with width/height. |
| FAQ | 6–8 questions, phrased **exactly as people ask them** (from Google's "People also ask" + Reddit). Answer in the first sentence, then detail. FAQPage schema. |
| Prices | Prices shown as real HTML text (not only inside mockups), plus Offer schema. "From $X" with a short "what changes the price" line. |
| Freshness | "Prices and details updated October 2026" line at the bottom of pricing sections; update quarterly. |
| Author/reviewer | Guides show a real named author with a bio page; service pages show "Reviewed by [name], [role]". |

### H2 rewrite pattern (keep the voice, add the topic)

| Template section | Today | Pattern |
|---|---|---|
| 2 · Sound familiar? | "Sound familiar?" | "Sound familiar? Three reasons owners call us about **[topic]**" |
| 3 · Showcase | "Built for businesses like yours." | "**[Apps/Stores/Automations]** we've built for salons, restaurants and repair shops" |
| 4 · What it can do | "What your app can do" | "What a **custom app** can do for your business" |
| 5 · Honest choice | "The honest tech choice" | "**Flutter vs React Native vs native**: which is right for you?" (the comparison in words) |
| 6 · Process | "About 12 weeks, step by step." | "How we build your **app** in about 12 weeks" |
| 8 · Pricing | "Fixed price…" | "**How much does an app cost?** Fixed prices from $9,900" |
| 9 · FAQ | "Questions before…" | "**Mobile app development** questions, answered" |

The pricing H2 phrased as the question people search ("How much does a Shopify store cost?") is the single most valuable H2 on each page.

---

## 3. Page-by-page

Format: **URL** · primary keyword · secondary keywords · title · meta · H1 kicker · schema · FAQ additions (from PAA/Reddit) beyond the spec's FAQ.

### Homepage `/`
- **Primary:** software development company for small business · **Secondary:** app and website development company USA, custom software for small business, hire a developer for my business
- **Title:** `Apps, Websites & Software for Small Businesses · [Brand]` (55)
- **Meta:** `We build the apps, websites and systems that run US small businesses: online ordering, bookings, payments, AI and automation. Fixed prices. Book a free call.` (155)
- **H1 kicker:** "Custom apps, websites and software for US small businesses"
- **Schema:** Organization (name, logo, url, sameAs: Clutch, LinkedIn, GitHub, Google profile if any; `areaServed: US`; `knowsAbout` list), WebSite (+ SearchAction once /guides has search), FAQPage.
- **Add:** a "Straight answers" row linking the 3 cost pillars; an "In plain English" block: who we are (remote studio, US hours), who we serve, 4 price anchors, booking.

### Services hub `/services` 🆕
- **Primary:** software development services for small business
- **Title:** `Software Development Services for Small Businesses · [Brand]`
- **Meta:** `Apps, websites, Shopify, payments, AI and automation. Pick what you need, or tell us the problem and we'll point you to the right fix. Prices from $990.`
- **H1:** "What we build, and **what it costs**." Kicker: "Services"
- **Content:** 3 groups (Build · Sell online · Run & grow), each service as a card with one-line customer problem + "from $X" + link. A "Not sure? Start with your problem" block (8 problems → right page). ItemList schema.

### Mobile apps `/services/mobile-app-development`
- **Primary:** app development for small business · **Secondary:** custom app for my business, hire someone to make an app, booking app for small business, iOS and Android app development, Flutter app development
- **Title:** `App Development Company for US Small Businesses · [Brand]` (57) (price moves to the meta)
- **Meta:** `iPhone and Android apps for bookings, orders, deliveries and loyalty. Designed in Figma, built in Flutter, published to both stores for you. From $9,900.`
- **Kicker:** "Mobile app development for small businesses"
- **Pricing H2:** "How much does an app cost? Fixed prices from $9,900"
- **Schema:** Service (`serviceType: Mobile app development`, `areaServed: US`, `provider` → Organization, `offers` AggregateOffer lowPrice 9900 USD), FAQPage, BreadcrumbList.
- **FAQ additions:** "Do I really need an app, or is a mobile website enough?" · "How much does it cost to maintain an app each year?" (answer: usually 15–20% of the build, or Care from $290/mo) · "Can you take over an app another developer started?" · "Will I own the code and the App Store account?"

### Web apps `/services/web-app-development`
- **Primary:** custom software for small business · **Secondary:** custom web application development, replace spreadsheets with software, customer portal, internal tools, custom dashboard
- **Title:** `Custom Software for Small Businesses · Web Apps · [Brand]` (56)
- **Meta:** `Outgrown Excel? We build web apps, customer portals and dashboards that fit how your team works, with logins, payments and integrations. From $7,900.`
- **Kicker:** "Custom web apps and business software"
- **Pricing H2:** "How much does custom software cost? Fixed prices from $7,900"
- **FAQ additions:** "Should we buy software or build our own?" · "Can you move our data out of Excel/Google Sheets?" · "Do we pay per user?" (no, you own it; hosting $50–200/mo)

### SaaS `/services/saas-development`
- **Primary:** SaaS development company · **Secondary:** SaaS MVP development, MVP for non-technical founders, cost to build a SaaS, rebuild MVP
- **Title:** `SaaS Development Company · MVP to Scale · [Brand]` (49)
- **Meta:** `From idea to paying customers: clickable prototype in 2–3 weeks, launch-ready SaaS with Stripe billing in 10–14 weeks. Built for founders. From $6,900.`
- **Kicker:** "SaaS development for founders and industry experts"
- **Pricing H2:** "How much does it cost to build a SaaS?"
- **FAQ additions:** "I'm not technical. Can I still build a SaaS?" · "Who owns the code and IP?" · "Can you take over an MVP built by someone else (or by AI)?"

### Shopify `/services/shopify-development`
- **Primary:** hire Shopify developer · **Secondary:** Shopify store setup service, Shopify expert USA, WooCommerce to Shopify migration, Shopify custom theme, Shopify speed
- **Title:** `Shopify Agency for US Brands · Stores from $4,900 · [Brand]` (57) (revised: the country is our home market, like Lumina's "Dubai & UAE")
- **Meta:** `New Shopify store, custom theme or a move from WooCommerce, Wix or Squarespace without losing your Google rankings. PageSpeed 90+ on phones. From $4,900.`
- **Kicker:** "Shopify development and store setup"
- **Pricing H2:** "How much does a Shopify store cost?"
- **FAQ additions:** "Will I lose my Google rankings if I move to Shopify?" (301 plan) · "Do I need Shopify Plus?" · "Theme or custom design?"

### WordPress `/services/wordpress-development`
- **Primary:** WordPress developer for small business · **Secondary:** fix my WordPress site, WordPress speed, hacked WordPress, WordPress redesign, WooCommerce developer
- **Title:** `WordPress Developer for Small Businesses · [Brand]` (49)
- **Meta:** `Fast, secure WordPress sites that bring in calls and bookings, plus fixes for slow, broken or hacked sites. Custom blocks you can edit. From $3,900.`
- **Kicker:** "WordPress design, development and fixes"
- **Pricing H2:** "How much does a WordPress website cost?"
- **FAQ additions:** "My site was hacked. What do I do first?" · "Why is my WordPress site so slow on phones?" · "WordPress, Wix or Squarespace?"

### Landing pages `/services/landing-pages`
- **Primary:** landing page design service · **Secondary:** landing page for Google Ads, landing page for contractors, cost per lead, PPC landing page
- **Title:** `Landing Pages for Google Ads That Get Calls · [Brand]` (51)
- **Meta:** `Paying for clicks that never call? One page per ad, one offer, one button, with call tracking. Peak Plumbing went from $383 to $34 per lead. From $1,900.`
- **Kicker:** "Landing page design for Google and Meta ads"
- **Pricing H2:** "How much does a landing page cost?"
- **Note:** the "$383 → $34" claim must become a real client result or be labeled as an example before launch.

### Payments `/services/payment-integration`
- **Primary:** payment integration services · **Secondary:** Stripe integration developer, add online payments to website, text to pay, deposits, Apple Pay, BNPL
- **Title:** `Payment Integration: Stripe, Apple Pay, Text-to-Pay · [Brand]` (59)
- **Meta:** `Get paid faster: online checkout, pay-by-text, deposits, subscriptions and Klarna/Affirm, synced to QuickBooks. Live in days, from $990.`
- **Kicker:** "Payment integration for small businesses"
- **Pricing H2:** "How much does payment integration cost?"
- **FAQ additions:** "Stripe, Square or PayPal: which is cheapest for me?" (link fee calculator) · "Can I take deposits for appointments?" · "Is it PCI compliant?"

### AI `/services/ai-integration`
- **Primary:** AI chatbot for small business · **Secondary:** AI receptionist, AI agents, AI automation agency, chatbot trained on my business
- **Title:** `AI Chatbots & AI Receptionists for Small Business · [Brand]` (58)
- **Meta:** `AI that answers customers from your real prices and calendar, picks up missed calls and types invoices into QuickBooks, with rules you set. From $990.`
- **Kicker:** "AI chatbots, receptionists and agents for small businesses"
- **Pricing H2:** "How much does an AI chatbot or receptionist cost?"
- **FAQ additions:** "Will the AI make things up or promise discounts?" · "What does it cost to run each month?" · "Can it answer the phone?"

### Automation `/services/business-automation`
- **Primary:** business process automation services · **Secondary:** automate my small business, n8n developer, Zapier expert, QuickBooks integration, custom ERP, inventory system
- **Title:** `Business Automation & Custom ERP for Small Business · [Brand]` (59)
- **Meta:** `Stop typing the same thing twice. We connect QuickBooks, Shopify, Square and Gusto, or build one system to run jobs, stock and invoices. From $2,500.`
- **Kicker:** "Business process automation and ERP"
- **Pricing H2:** "How much does business automation cost?"
- **FAQ additions:** "Zapier, Make or n8n: which do you use?" · "What should I automate first?" · "Do I need an ERP or just automations?"

### SEO `/services/seo`
- **Primary:** local SEO for contractors and service businesses · **Secondary:** SEO for plumbers/electricians/auto repair, Google Business Profile optimization, show up in ChatGPT
- **Title:** `Local SEO for Service Businesses · From $1,200/mo · [Brand]` (58)
- **Meta:** `Show up when people nearby search for what you do, on Google Maps and in AI answers. Profile, reviews, pages and speed. Monthly, no long contract.`
- **Kicker:** "Local SEO for plumbers, electricians, shops and salons"
- **Pricing H2:** "How much does local SEO cost?"
- **Note:** this page must practise what it preaches: fastest page, best schema on the site.

### Vibe-code rescue `/services/vibe-code-rescue`
- **Primary:** fix vibe coded app · **Secondary:** Lovable app to production, fix Bolt/Replit/Cursor app, Supabase security audit, AI code audit
- **Title:** `Fix Your AI-Built App · Lovable, Bolt, Cursor · [Brand]` (53)
- **Meta:** `Built it with Lovable, Bolt, Replit or Cursor and now every fix breaks something? Free audit in 48 hours, then a fixed price to make it safe to launch.`
- **Kicker:** "Vibe-code rescue: fix and launch AI-built apps"
- **Pricing H2:** "How much does it cost to fix an AI-built app?"
- **FAQ additions:** "Do I have to rebuild from scratch?" (usually no) · "Is my Supabase data exposed?" · "Can I keep using Lovable/Cursor after?"
- **Nav label:** "Fix my AI-built app" (customer words) while the URL keeps "vibe-code-rescue".

### Agencies `/agencies`
- **Primary:** white label web development · **Secondary:** white label app development, white label Shopify/WordPress, outsource development for agencies
- **Title:** `White-Label Web & App Development for US Agencies · [Brand]` (59)
- **Meta:** `Your brand, our developers. Websites, Shopify, WordPress and apps built under NDA in your tools, with wholesale fixed prices or a dedicated team from $14,500/mo.`
- **Kicker:** "White-label development for agencies"
- **FAQ additions:** "Who owns the code?" · "Will our client ever see your name?" · "Can you join our client calls as our team?"
- **Exception:** the page shows **no** case studies with real client names (NDA); proof = process, sample docs, anonymized metrics.

### Industry pages (all 6) · shared pattern
- **Title pattern:** `[Industry] Software, Apps & Websites · [Brand]`
- **Schema:** Service with `audience` (BusinessAudience, e.g. "Auto repair shops"), FAQPage, BreadcrumbList.
- **Must add:** "In plain English" block; a "What it costs for a [industry]" table in text; Guides block; links to the industry's solution pages high on the page (after section 2).

| URL | Primary | Title | H1 kicker | Meta |
|---|---|---|---|---|
| `/industries/restaurants` | restaurant ordering app and software | `Restaurant Ordering Apps & Software · 0% Commission · [Brand]` | "Online ordering, apps and back-office software for restaurants" | `Keep the 30% the delivery apps take. Your own ordering site and app, loyalty, and stock and food-cost tracking that connects to Toast or Square.` |
| `/industries/salons` | salon booking app | `Salon & Spa Apps, Booking and Memberships · [Brand]` | "Booking apps, memberships and software for salons and spas" | `Your own branded booking app with deposits, rebooking reminders and memberships that fill quiet Tuesdays, plus commission and payroll reports.` |
| `/industries/laundry` | laundry pickup and delivery app | `Laundry Pickup & Delivery Apps and Software · [Brand]` | "Pickup and delivery apps and software for laundries and dry cleaners" | `Pickup and delivery app, driver routes, per-pound billing and commercial accounts for laundromats, wash-and-fold and dry cleaners, on top of your POS.` |
| `/industries/auto-repair` | auto repair shop software and website | `Auto Repair Shop Websites, Apps & Software · [Brand]` | "Websites, digital inspections and software for auto repair shops" | `Photo inspections customers approve by text, text-to-pay, a website that books jobs and a shop board, connected to Tekmetric or Shopmonkey.` |
| `/industries/home-services` | software and websites for plumbers, electricians and HVAC | `Websites & Software for Plumbers, Electricians, HVAC · [Brand]` | "Websites, AI call answering and dispatch for home service businesses" | `Never miss a job while you're under a sink: AI call answering, a website that books, live "tech on the way" texts and dispatch, from $3,900.` |
| `/industries/phone-repair` | phone repair shop website and software | `Phone Repair Shop Websites & Software · [Brand]` | "Websites, instant quotes and repair tracking for phone repair shops" | `Instant repair quotes by model, online booking, repair status texts, trade-ins and parts inventory, so "how much?" stops taking all day.` |

### Solution pages (8) · pattern
- **Title:** `[Exact job] for [industry] · [benefit/price] · [Brand]`, e.g. `Commission-Free Online Ordering for Restaurants · [Brand]`, `Websites for Plumbers & Electricians That Book Jobs · [Brand]`, `Laundry Pickup & Delivery App Development · [Brand]`, `Your Own Salon Booking App, No Commission · [Brand]`, `AI Answering Service for Contractors · [Brand]`.
- **H1 kicker** = the primary keyword verbatim.
- **Schema:** Service + Offer + FAQPage + BreadcrumbList (Home / Industries / Restaurants / Online ordering).

### Location pages (`/locations/<city>/<service>`) 🆕
Full rules in `09-location-pages.md`.
- **Title:** `Shopify Agency in Houston · Stores from $4,900 · [Brand]` · `App Developers in Chicago for Small Businesses · [Brand]` · `Custom Software Development in Dallas · [Brand]`. "Best"/"Top-rated" only once reviews back it.
- **Kicker H1:** "Shopify agency in Houston" + a city-specific headline.
- **Meta:** city problem + what we do + price + "remote team on Central Time".
- **Schema:** Service with `areaServed` City, BreadcrumbList (Home / Locations / Houston / Shopify agency), FAQPage. Never LocalBusiness.
- **Must have:** ≥50% city-specific content, honest "Do you have an office in Houston?" FAQ, links to the city hub, the national service page and the relevant industry pages.

### `/pricing` 🆕
- **Primary:** software development pricing for small business (+ every "[service] cost" long-tail)
- **Title:** `Pricing: Apps, Websites, Shopify, AI & Automation · [Brand]` (58)
- **Meta:** `Every price on one page. Websites from $3,900, apps from $9,900, web + app from $14,900, add-ons from $990, care from $290/mo. Fixed before we start.`
- **H1:** "Every price, **before you call us.**" Kicker: "Pricing"
- **Content:** see `06-pricing.md`. Each service block in plain HTML tables, with "typical total" ranges and "what changes the price". Schema: one Service + AggregateOffer per block, FAQPage ("Why fixed price?", "Do you work hourly?", "Payment terms?", "What's not included?").

### `/about`, `/process`, `/contact`
- **About:** real names, photos, roles, years of experience, LinkedIn links, where the team works from, US hours. Person schema per founder. This is the core of E-E-A-T for a remote studio. Title: `About [Brand] · A Remote Software Studio for US Businesses`.
- **Process:** the 12-week plan, weekly demos, code ownership, contracts, communication. Title: `How We Work: Fixed Price, Weekly Demos, You Own the Code · [Brand]`.
- **Contact:** booking widget, email, phone, reply time. ContactPage + Organization `contactPoint`.

### Guides (articles) · template
- **Title:** the question or the answer, ≤ 60 characters, year only on cost guides ("How Much Does an App Cost in 2026? Real Prices").
- **Structure:** answer in the first 2–3 sentences (the "AI snippet") → a cost/summary table → the story (customer situation) → the detail → "What we'd do" (soft pitch + link to the money page) → FAQ → author box.
- **Schema:** Article (author Person with url to bio, datePublished, dateModified), BreadcrumbList, FAQPage if it has a FAQ.
- Full briefs in `05-content-plan.md`.
