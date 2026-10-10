# 03 · Site architecture, URLs and internal linking (UAE)

## 1. Domain and languages

**Recommendation: one `.com`, UAE English at the root, Arabic at `/ar/`, US added later at `/us/`.**

| Option | Verdict |
|---|---|
| **`.com`, root = UAE English, `/ar/` = Arabic** | ✅ Recommended. Strongest focus now (like Lumina, whose root is Dubai), keeps one domain's authority for later markets. |
| `.ae` domain | Strong local signal, but needs a UAE trade licence or trademark to register, and it's a weak base for the US later. Good to **own and redirect** once we have the licence. |
| `.com` with `/ae/` subfolder (how Cubix and Tekrevol do it) | Works, but makes the UAE look secondary. Only if the US becomes the main market again. |

Language tags (`hreflang`): `en-AE` (root), `ar-AE` (`/ar/`), `x-default` → root. When the US launches: `en-US` at `/us/`. Arabic pages are written by a native writer, not machine-translated. English slugs on both (`/ar/services/shopify-development`) keep URLs short and shareable; Arabic keywords go in the title, H1 and copy.

## 2. URL map

✅ mockup exists (needs UAE localization) · 🆕 new

```
/                                           ✅ Home (UAE English)  ·  /ar  Arabic home
│
├── /services                               🆕 Services hub
│   ├── /services/shopify-development       ✅  ("Shopify Agency in Dubai & UAE")
│   ├── /services/website-design            ✅  (was wordpress-development; UAE owners search "website design")
│   ├── /services/mobile-app-development    ✅
│   ├── /services/ai-whatsapp-automation    ✅  (was ai-integration; leads with WhatsApp)
│   ├── /services/business-automation       ✅  (automation, ERP, accounting)
│   │   └── /services/e-invoicing-integration     🆕 solution page (UAE 2027 mandate)
│   ├── /services/payment-integration       ✅  (Tabby, Tamara, Stripe, Telr, N-Genius)
│   ├── /services/web-app-development       ✅
│   ├── /services/saas-development          ✅  (MVPs for Dubai startups)
│   ├── /services/landing-pages             ✅
│   ├── /services/seo                       ✅  (bilingual local SEO)
│   └── /services/vibe-code-rescue          ✅
│
├── /agencies                               ✅ White-label for Dubai agencies
│
├── /industries                             🆕 Industries hub
│   ├── /industries/restaurants             ✅
│   │   ├── /online-ordering                🆕   ├── /whatsapp-ordering 🆕   └── /ordering-app 🆕
│   ├── /industries/salons                  ✅   └── /booking-app 🆕
│   ├── /industries/laundry                 ✅   └── /pickup-delivery-app 🆕
│   ├── /industries/auto-repair             ✅   └── /website 🆕
│   ├── /industries/home-services           ✅   └── /website 🆕  (AC, cleaning, maintenance)
│   └── /industries/phone-repair            ✅   └── /website 🆕 (P2)
│
├── /abu-dhabi                              🆕 P2 city hub → /app-development · /website-design · /shopify-agency
├── /sharjah                                🆕 P3 → /website-design
│
├── /pricing                                🆕 AED prices, VAT, payment terms
├── /work                                   🆕 Case studies (real UAE clients only)
├── /process · /about · /contact            🆕 (about = Dubai base, team, licence number)
│
├── /guides                                 🆕 Content hub; flat article URLs /guides/<slug>
│   └── category hubs: /guides/e-invoicing · /guides/ecommerce · /guides/apps · /guides/payments
│       · /guides/whatsapp-ai · /guides/websites · /guides/restaurants · /guides/costs
│
├── /tools                                  🆕 Calculators
│   ├── /tools/talabat-commission-calculator
│   ├── /tools/payment-gateway-fee-calculator   (Stripe vs Telr vs Tap vs Ziina on your volume)
│   ├── /tools/app-cost-calculator              (AED)
│   └── /tools/e-invoicing-readiness-check      (10 questions → "what you must do before July 2027")
│
├── /ar/...                                 Arabic mirror of the top pages (see §4)
├── /sitemap.xml · /robots.txt · /llms.txt · /llms-full.txt · /<page>.md
```

## 3. Solution pages and city pages: rules

**Solution pages** (industry × job) answer one specific money search ("whatsapp ordering for restaurants", "laundry app development dubai"). Each needs its own hero mockup, its own "before" scenario (WhatsApp chaos, Talabat statement), its own AED cost table and its own FAQ: at least 60% content found nowhere else. Template: Hero → Sound familiar (2 cards) → What you get (3–4 tabs) → Cost and timeline → Mini case → FAQ → CTA. 1,200–1,800 words.

**City pages** (Abu Dhabi, Sharjah) need ≥50% city-specific content: local buyers (government, ADGM, Hub71 for Abu Dhabi; SPC/SRTIP SMEs for Sharjah), local licence/regulation notes, local clients, honest FAQ about meetings ("We're based in Dubai; we meet in Abu Dhabi on request"). Pages that only swap the city name are doorway pages under Google's spam policy.

## 4. Arabic rollout

Not the whole site at once. Translate where Arabic searchers have demand (from `02`):

| Wave | Arabic pages |
|---|---|
| AR-1 (month 2–3) | `/ar` home, `/ar/services/website-design`, `/ar/services/shopify-development`, `/ar/services/mobile-app-development`, `/ar/services/ai-whatsapp-automation`, `/ar/guides/uae-e-invoicing`, `/ar/guides/website-cost-dubai`, `/ar/guides/app-development-cost-dubai`, `/ar/pricing`, `/ar/contact` |
| AR-2 (month 4–6) | Payments, automation, e-invoicing integration, restaurants + whatsapp-ordering, salons + booking-app, SEO |
| AR-3 | Everything else as demand shows in Search Console |

Untranslated pages don't get an `/ar/` URL (no empty or machine-translated pages). The language switcher only shows on pages that have both versions.

## 5. Navigation

- **Header:** Services ▾ (mega menu: *Sell online* (Shopify, Website design, Payments, Landing pages) · *Build* (Mobile apps, Web apps & portals, SaaS & MVPs) · *Run & grow* (WhatsApp & AI, Automation & ERP, E-invoicing, SEO, Fix my AI-built app)) · Industries ▾ · Pricing · Work · For agencies · العربية · **WhatsApp us** (green icon) · **Book a call** (lime).
- **Footer:** every service, every industry, top cost guides, e-invoicing pillar, tools, Abu Dhabi/Sharjah, pricing, about (with trade licence number), contact, legal.
- **Breadcrumbs** everywhere (+ BreadcrumbList schema): `Home / Industries / Restaurants / WhatsApp ordering`.
- Max 3 clicks to any page.

## 6. Internal linking rules

1. **Money pages get the most links.** Every article links to exactly one primary money page in its first 30%, plus its industry/solution page if relevant, plus `/pricing` or its cost guide. 2–4 money links per article.
2. **Every service and industry page has a "Guides" block** (before the FAQ) with its 3–6 cluster articles.
3. **Anchor text = the owner's words**, varied: "[your own WhatsApp ordering](/industries/restaurants/whatsapp-ordering)", "[what a Shopify store costs in the UAE](/guides/shopify-store-cost-uae)". No exact-match anchor over ~30% of the time.
4. **English links to English, Arabic links to Arabic.** An Arabic article never sends people to an English page unless no Arabic version exists (then mark it "(English)").
5. No orphans: every new page is linked from its hub, the sitemap and 3+ related pages before it ships.
6. "Book a call" and "WhatsApp us" buttons are CTAs, not SEO links. Contextual links still matter.

## 7. Clusters (hub → pillar → supporting articles)

| Hub (money page) | Cost / main pillar | Supporting articles |
|---|---|---|
| **E-invoicing integration** | uae-e-invoicing (pillar) | uae-e-invoicing-asp-how-to-choose · e-invoicing-zoho-books · e-invoicing-odoo · e-invoicing-quickbooks-uae · peppol-pint-ae-explained · e-invoicing-checklist-july-2027 |
| Shopify | shopify-store-cost-uae | start-shopify-store-uae · shopify-vs-salla · shopify-tabby-tamara-setup · shopify-arabic-store · noon-amazon-vs-own-store · license-to-sell-online-uae |
| Website design | website-cost-dubai | bilingual-website-guide · fix-wordpress-site · website-redesign-checklist |
| Mobile apps | app-development-cost-dubai | app-like-talabat-cost · do-i-need-an-app · publish-app-uae-developer-account |
| WhatsApp & AI | whatsapp-business-api-cost-uae | whatsapp-chatbot-guide-uae · arabic-ai-chatbot · ai-for-uae-small-business |
| Payments | best-payment-gateway-uae (+ fee calculator) | tabby-vs-tamara-merchants · payment-links-whatsapp · apple-pay-website-uae |
| Automation & ERP | erp-cost-uae | corporate-tax-ready-books · zoho-vs-odoo-vs-custom · inventory-system-uae |
| SaaS / MVP | saas-mvp-cost-uae | mvp-for-non-technical-founders-dubai · startup-programs-tech-partner (in5, Hub71) |
| Vibe rescue | (in-page pricing) | lovable-app-to-production · is-my-ai-built-app-safe · supabase-rls-security-check |
| SEO | seo-cost-dubai | not-showing-on-google-maps-dubai · arabic-seo-guide · get-more-google-reviews |
| Agencies | white-label-dev-pricing-uae | vet-white-label-partner · white-label-shopify-for-agencies |

Industry clusters (link to the industry page **and** the solution page):
- Restaurants: talabat-commission-math · whatsapp-ordering-for-restaurants · cloud-kitchen-multi-brand-ordering
- Salons: fresha-vs-own-salon-app · salon-no-shows-deposits
- Laundry: start-laundry-delivery-business-uae · app-like-washmen-cost
- Auto repair: more-customers-garage-dubai
- Home services: ac-maintenance-business-bookings · app-like-justlife-cost

## 8. Service ↔ industry matrix (● strong link in body copy, ○ "paired" block only)

| Service ↓ / Industry → | Restaurants | Salons | Laundry | Auto repair | Home services | Phone repair |
|---|---|---|---|---|---|---|
| Mobile apps | ● ordering app | ● booking app | ● pickup app | ○ | ● cleaning/AC booking | ○ |
| WhatsApp & AI | ● whatsapp ordering | ● booking assistant | ● dispatcher | ○ | ● call/WhatsApp answering | ○ |
| Shopify | ○ | ○ (retail) | — | — | — | ● accessories store |
| Website design | ○ | ○ | ○ | ● | ● | ● |
| Payments | ● | ● deposits, Tabby | ● | ● payment links | ● | ○ |
| Automation & ERP / e-invoicing | ● stock, Foodics | ○ | ● | ● | ● | ● inventory |
| SEO | ○ | ○ | ○ | ● | ● | ● |

## 9. Homepage links
All services, all industries, `/pricing`, `/agencies`, `/work`, the e-invoicing pillar ("E-invoicing becomes mandatory in July 2027: what to do") and 2 cost guides (website cost Dubai, app cost Dubai). Nothing else.
