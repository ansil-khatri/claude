# 02 · Site architecture, URLs and hubs

The site is built as **hubs and spokes**: a few strong hub pages, each surrounded by pages that support it and link back. Any page is at most 3 clicks from the homepage.

## 1. Full URL map

Legend: ✅ mockup exists · 🆕 new page to design · ⏳ later (P2/P3)

```
/                                          ✅ Homepage (main hub)
│
├── /services                              🆕 Services hub (11 services + "not sure? start here")
│   ├── /services/mobile-app-development   ✅
│   ├── /services/web-app-development      ✅  (custom software, portals, dashboards)
│   ├── /services/saas-development         ✅
│   ├── /services/shopify-development      ✅
│   ├── /services/wordpress-development    ✅
│   ├── /services/landing-pages            ✅
│   ├── /services/payment-integration      ✅
│   ├── /services/ai-integration           ✅
│   ├── /services/business-automation      ✅  (automation + ERP)
│   ├── /services/seo                      ✅
│   └── /services/vibe-code-rescue         ✅
│
├── /agencies                              ✅ White-label (own hub: audience is different)
│
├── /industries                            🆕 Industries hub
│   ├── /industries/restaurants            ✅
│   │   ├── /industries/restaurants/online-ordering      🆕 solution page
│   │   └── /industries/restaurants/ordering-app         🆕 solution page
│   ├── /industries/salons                 ✅
│   │   └── /industries/salons/booking-app               🆕
│   ├── /industries/laundry                ✅
│   │   └── /industries/laundry/pickup-delivery-app      🆕
│   ├── /industries/auto-repair            ✅
│   │   └── /industries/auto-repair/website              🆕
│   ├── /industries/home-services          ✅
│   │   ├── /industries/home-services/website            🆕
│   │   └── /industries/home-services/ai-receptionist    🆕
│   └── /industries/phone-repair           ✅
│       └── /industries/phone-repair/website             🆕
│
├── /pricing                               🆕 All prices in one place (huge for "cost" + conversion)
├── /work                                  ⏳ Case studies hub (only with real clients)
│   └── /work/<client-slug>                ⏳
├── /process                               🆕 How we work (12-week plan, ownership, communication, US hours)
├── /about                                 🆕 Team, story, real faces, where we work from (E-E-A-T)
├── /contact  (+ /book)                    🆕 Booking widget, email, response time
│
├── /guides                                🆕 Content hub (blog). Category hubs mirror services:
│   ├── /guides/apps · /guides/websites · /guides/ecommerce · /guides/payments
│   ├── /guides/ai · /guides/automation · /guides/seo-marketing · /guides/ai-built-apps
│   ├── /guides/for-agencies · /guides/costs · /guides/comparisons
│   └── /guides/<article-slug>             (flat article URLs; category is metadata, not path)
│
├── /tools                                 🆕 Free calculators (linkable assets that rank + convert)
│   ├── /tools/app-cost-calculator
│   ├── /tools/delivery-commission-calculator
│   ├── /tools/payment-fee-calculator
│   ├── /tools/missed-call-calculator
│   └── /tools/no-show-cost-calculator
│
├── /locations                             🆕 US locations hub (see 09-location-pages.md)
│   └── /locations/<city>                  🆕 City hub (wave 1: new-york, los-angeles, chicago, houston, dallas, miami)
│       └── /locations/<city>/shopify-agency · /app-development · /software-development
│
├── /technologies                          ⏳ Tech hub (for informed buyers + agencies)
│   └── /technologies/flutter · react-native · nextjs · laravel · shopify-hydrogen · n8n · supabase
│
├── /legal/privacy · /legal/terms
├── /sitemap.xml · /robots.txt · /llms.txt · /llms-full.txt
└── /<any-page>.md                         Markdown copy of every page for AI agents (see 07)
```

### Why article URLs are flat (`/guides/<slug>`)
Categories change; URLs shouldn't. A flat `/guides/<slug>` never breaks when an article moves category. Category hub pages (`/guides/apps`) give Google the topical grouping.

### Why `/agencies` stays outside `/services`
Agencies search differently and need different proof (NDA, code ownership, wholesale prices). A separate top-level hub gets its own nav item ("For agencies") and its own cluster of guides. Final route is the owner's call (spec open item); this plan assumes `/agencies`.

## 2. Solution pages (industry × job)

Industry pages answer "do you understand my business?". **Solution pages** answer one specific money query that a non-technical owner types ("plumber website design", "commission free online ordering"). Rules, so they never become thin doorway pages:

1. Only build one when the keyword has **its own demand** (listed in `01`, section N) and we can show **unique** proof for it.
2. Each must have **≥60% content that appears nowhere else**: its own hero mockup, its own "before" scenario, its own cost table, its own FAQ.
3. Template: a shorter service page (Hero → Sound familiar (2 cards) → What you get (3–4 tabs) → Cost and timeline → Mini case → FAQ → CTA). ~1,200–1,800 words of real copy.
4. They link **up** to their industry page and **across** to the matching service page.

Planned (8 at P1/P2): restaurant online ordering, restaurant ordering app, salon booking app, laundry pickup-and-delivery app, auto repair website, home-services website (plumbers, electricians, HVAC sections on one page; split later only if each earns its own demand), home-services AI receptionist, phone repair website.

## 3. "Cover the whole USA" (revised 2026-10-09, see `09-location-pages.md`)

- **Country first.** The USA is our home market, the way "Dubai & UAE" is Lumina's. Service page titles and copy say so ("Shopify Agency for US Brands"), and they target national queries ("shopify agency usa", "custom software for small business").
- **City pages: yes, but controlled.** Google's organic results (not the Maps pack) for "[service] agency in [city]" do rank agencies without an office there, as Lumina shows in Dubai. Wave 1 is 6 metros × 3 services (Shopify, app development, software development) + 6 city hubs = 24 pages. Each page needs at least 50% city-specific content (local market, state rules like sales tax/CCPA/BIPA, local proof, Central/Eastern-time working, honest "remote team" FAQ). Pages that only swap the city name are doorway pages under Google's spam policy, and its recent core updates have deindexed whole sets of them.
- **The Maps pack isn't ours** unless we have a real US address where we meet customers. No virtual offices, no fake GBP listings.
- **Authority makes city pages rank:** Shopify Partner directory reviews, Clutch reviews/awards, DesignRush/Sortlist, real local clients, roundup listings. Lumina's Dubai page is fairly generic; its 57 directory reviews and Clutch awards carry it.
- **US trust signals:** US working hours (EST–PST overlap), a US phone number, USD pricing, US payment terms, a US LLC address if formed. **Never imply a US office we don't have.**

## 4. Navigation (what the header and footer link to)

- **Header (pill nav):** Services ▾ (mega menu: 11 services in 3 groups: *Build* (Mobile apps, Web apps, SaaS) · *Sell online* (Shopify, WordPress, Landing pages, Payments) · *Run & grow* (AI, Automation, SEO, Fix my AI-built app)) · Industries ▾ (6) · Pricing · Work · For agencies · **Book a call** (lime).
- **Footer:** every service, every industry, top 6 guides (the cost pillars), tools, pricing, about, contact, legal. Footer links are crawlable `<a href>`s (the reveal animation must not render them client-only).
- **Breadcrumbs** on every page below the homepage (also as BreadcrumbList schema): `Home / Services / Mobile App Development`, `Home / Industries / Restaurants / Online Ordering`, `Home / Guides / Costs / How much does an app cost?`.

## 5. Click depth check

| Page type | Path from homepage | Clicks |
|---|---|---|
| Service, industry, pricing | Homepage nav | 1 |
| Solution page | Homepage → industry | 2 |
| Cost pillar guide | Homepage footer / service page | 1–2 |
| Normal article | Homepage → /guides or service "Guides" block | 2 |
| Old article | Category hub → article | ≤3 |
