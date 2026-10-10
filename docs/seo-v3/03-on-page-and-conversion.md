# 03 · On-page SEO and conversion spec

## Rules for every page
| Element | Rule |
|---|---|
| Title | 50 to 60 chars. Primary phrase first, then a benefit or price, no brand (brand is appended by metadata). Pattern: `Shopify Agency in Dubai | Stores from AED 9,900` |
| Meta description | 120 to 158 chars. Phrase, what you get, a number, a verb. Written to earn the click |
| H1 | One. Contains the phrase in the first half. Human, not stuffed |
| First block | **Answer box**, 40 to 60 words, states what/who/price/time. Already in the money-page template (`answer`); add to industry pages and tools |
| Intro | Names the reader's situation in their words (non-technical) before any jargon |
| Headings | H2 per question the reader has; a glossary line when a term is technical ("Liquid, Shopify's template language") |
| Proof | A mockup or real screenshot every 2 to 3 sections; caption says "Concept build" while it is one |
| Price | AED price in the first screen and a table lower. Excl. VAT note |
| FAQ | 6 to 8 real questions (from PAA, Quora, calls). Visible text = schema text |
| Links | per `02` |
| Images | `alt` describes the screen, not the keyword; dimensions set; lazy below the fold |
| Freshness | `Updated <date>` visible; changes when facts change, not otherwise |
| Reading level | Grade 8. Short sentences. No "leverage", "synergy", "cutting-edge" |

## Writing for a non-technical owner
- Lead with the outcome ("orders from WhatsApp land in one place") then the mechanism.
- Explain each platform once in a sentence: *Shopify is a hosted store you rent; WordPress is software you own and host; an ERP is one system for orders, stock and invoices.*
- Use "what it costs / how long / what you need to give us" blocks.
- Say when we are **not** the right fit ("under AED 5,000? Use a template and our guide").
- Never promise rankings, revenue or an exact conversion lift.

## Schema by page type (JSON-LD, one graph per page)
| Page | Types |
|---|---|
| All | Organization + ProfessionalService (site-wide), WebSite, WebPage, BreadcrumbList |
| Money / industry | Service (+ Offer in AED), FAQPage |
| Pricing | OfferCatalog |
| Post | Article (author, datePublished, dateModified), FAQPage, BreadcrumbList |
| Tool | WebApplication |
| Case | CreativeWork (marked concept) |
| About | AboutPage with `sameAs` (Clutch, LinkedIn, Shopify Partners profile, GBP) once they exist |
| Contact | ContactPage; `LocalBusiness` only with a real address |
No `Review`/`AggregateRating` until real reviews are on the page and on a third-party site.

## Page-by-page copy briefs, existing money pages (apply in the next step)
| Page | Title (new) | H1 | Add |
|---|---|---|---|
| shopify-agency-dubai | Shopify Agency in Dubai | Stores from AED 9,900 | "Who we are not for" box; cost table link; 3 industry links; Tabby/Tamara proof |
| shopify-plus-agency-dubai | Shopify Plus Agency in Dubai, UAE | The Shopify Plus agency in Dubai for... | When Plus is overkill; Plus fee (about USD 2,300 per month on 3-year term, USD 2,500 on 1-year; verify on Shopify) |
| custom-shopify-theme-development-dubai | Custom Shopify Theme Development in Dubai | ... | Premium vs custom table; Liquid code mockup caption |
| shopify-migration-dubai | Shopify Migration Dubai, Keep Your SEO | ... | Redirect map mockup; "what breaks if you skip redirects"; free audit CTA |
| luxury-ecommerce-website-design-dubai | Luxury Ecommerce Website Design in Dubai | ... | RTL + Tabby + gifting; 3 industry links |
| ecommerce-website-development-dubai | Ecommerce Website Development in Dubai | ... | Platform chooser (Shopify/Woo/custom) in plain words |
| wordpress-agency-dubai | WordPress Agency in Dubai, Bilingual Sites | ... | Maintenance plan mention; ACF blocks mockup |
| custom-wordpress-theme-development-dubai | Custom WordPress Theme Development in Dubai | ... | Block theme vs page-builder |
| woocommerce-development-dubai | WooCommerce Development in Dubai | ... | Woo vs Shopify honest note; migration link |
| website-design-dubai | Website Design in Dubai | ... | Price table by tier; freelancer vs agency box |
| business-automation-dubai | Business Automation in Dubai | ... | "Spreadsheet to system" before/after; 5 automations with ROI hours |
| erp-software-dubai | ERP Software in Dubai | ... | Odoo/Zoho vs custom table; e-invoicing readiness |
| whatsapp-automation-dubai | WhatsApp Automation in Dubai | ... | 3-layer cost explainer; hand-off rules; Meta fee note |
| ai-assistant-for-business-dubai | AI Assistant for Business in Dubai | ... | What it answers vs hands off; data/PDPL note |

Titles stay under 60 characters; `audit` script already fails over 70.

## Conversion system (this is where the money is)
Visitors from search are at different stages. Give each a next step that fits.

| Stage | Visitor | Step offered | Where |
|---|---|---|---|
| Learning | "shopify vs wordpress" | Related calculator or comparison; subscribe-free | Post end |
| Comparing | "shopify agency dubai" | **Fixed price table**, concept builds, "Book a 30-minute call" | Money page |
| Ready | "hire", "quote" | WhatsApp with page-prefilled message; booking widget | Sticky bar, hero |
| Stuck | "my store is not selling", "site not on Google" | **Free 15-minute website/store audit** (video + 5 findings) | `/free-website-audit` |

Elements to add, in order of impact:
1. **Sticky conversion bar** on all money/industry/post pages: price floor + "Get a fixed quote" + WhatsApp. Mobile bottom bar (UAE is mobile-heavy).
2. **WhatsApp with context:** link text carries the page ("Hi, I'm on the Shopify migration page"). Already in `WaBtn`; ensure every page passes its text.
3. **Free audit page** (`/free-website-audit`): URL field + WhatsApp, promises a reply in one working day with five specific findings. Single field form, no account.
4. **Quote form (3 questions):** what do you sell, current site, budget band. Under 30 seconds.
5. **Proof:** replace concept labels with real work as soon as it exists; add Clutch/Google review count as plain text (no fake stars).
6. **Risk reducers near CTA:** fixed price in writing, you own everything, 30-day fix window, reply in one working day.
7. **Calculators** as lead capture at the end ("send this estimate to us on WhatsApp"). Shopify calculator exists.
8. **Exit-intent is not needed;** a stuck user is better served by a visible phone/WhatsApp.

## Measurement (GA4 + Search Console)
Events: `whatsapp_click` (with page), `quote_submit`, `audit_submit`, `booking_complete`, `calculator_use`, `phone_click`, `pricing_view`. Mark the first four as conversions. Report weekly: organic sessions → landing pages → conversions, and cost-per-lead if ads are added. Conversion rate target before optimising: 2 to 4% of money-page visits start a conversation.
