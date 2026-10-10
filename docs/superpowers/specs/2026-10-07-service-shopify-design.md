# Service Page: Shopify Development — Design Spec

- **Date:** 2026-10-07
- **Status:** Mockup built, waiting for owner review
- **Market:** Dubai + UAE (localized 2026-10-10 per `2026-10-09-uae-localization-design.md`; US version in `specs/us/`)
- **Route:** `/services/shopify-development`
- **Reference mockup:** `docs/superpowers/mockups/service-shopify.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` (design system §3, template §5, accessibility/responsive §6). Only page-specific content is recorded here.

**Story:** your products are great but the store doesn't sell → three store problems you recognize → stores for your kind of product → what a serious store needs → which platform → 7 weeks → proof → price → objections → store review call.

**Mockup mix:** light storefronts (product pages, cart drawers, checkout), Shopify-style admin (apps list, theme editor), PageSpeed report, run log, migration report; one Gmail-style inbox as a "before". No booking UI on this page.

---

## S1 · Hero (dark panel)
- **Breadcrumb:** Services / Shopify Development
- **H1 kicker:** "Shopify agency in Dubai & UAE"
- **H1:** "Your products are great. **Your store should sell like it.**"
- **Sub:** Shopify stores, custom themes and apps for brands doing AED 10k to AED 10M a year. Fast on phones, easy for your team to edit, and built to turn browsers into buyers.
- **CTAs:** Book a free call · WhatsApp us · See Shopify pricing
- **Tech chips:** Shopify & Shopify Plus · Liquid · Online Store 2.0 · Hydrogen (headless) · Shopify Functions · Klaviyo · Tabby · Tamara
- **Visual:** Maison Rose product page (`maisonrose.ae/products/bond-repair-shampoo`): announcement bar, Bond Repair Shampoo AED 109 (was AED 129, save 15%), ★4.9 (1,284), size picker, subscribe & save 15% vs one-time, Add to cart + Apple Pay, accordions. Phone: cart drawer ("AED 30 away from free delivery", 2 items, "Pairs well with Shine Oil", subtotal AED 218).
- **Floating cards:** "New order · #1042 · AED 218 · Apple Pay" · "Mobile PageSpeed 38 → 94" · "Conversion rate 1.1% → 3.4%".

## S1b · In plain English (stone band, no animation)
"We build and fix Shopify stores for brands selling in the UAE: Arabic and English themes, AED checkout with Apple Pay, Tabby and Tamara, delivery across all seven emirates…", fact row **From** AED 9,900 · **Time** 3–8 weeks · **Languages** English + Arabic · **Based in** Dubai.

## S2 · Sound familiar? "Why store owners call us."

| Quote | Before | After | Cost (red) | Fix |
|---|---|---|---|---|
| "Plenty of visitors. Hardly anyone buys." | Cluttered mobile store: MEGA SALE marquee, keyword-stuffed title, "Someone in Sharjah just bought this", "Loading… 9.8s", "WAIT!! 10% OFF" popup ("No thanks, I hate saving money"), cookie banner | Clean Maison Rose mobile product page with sticky "Add to cart · AED 109" + Apple Pay | 2,840 visits last week, 31 orders. 9.8 s to load, then a popup covers it. | A fast, clean mobile store with a sticky Add to cart and one-tap Apple Pay. |
| "We have 23 apps and the theme breaks every update." | Shopify admin Apps list: Popup Pro (+1.2s load), Sticky Cart Drawer (conflicts), Countdown Timer (unused since 2023), Bundle Builder X (breaks on update), SEO Booster Ultra (duplicate meta)… 23 apps · **AED 2,250/mo** | Theme editor (`admin.shopify.com/.../themes`): section tree + live preview + "Subscribe & save" block settings | AED 2,250 a month in apps, and AED 1,500 to a freelancer just to move a banner. | A custom theme with the features built in, and sections your team edits in minutes. |
| "Wholesale orders still come in as PDFs." | Inbox of shop reorders with PDF/XLSX/photo attachments, "old prices", "wrong flavor shipped", correspondents across Dubai (Ras Al Khor Market, Al Satwa Co-op, Al Quoz Cheese Co., Business Bay Provisions, Al Barsha Deli) | Ember Kitchen wholesale portal: Gold tier −30%, Net 30, quick-order table (Hot Honey, Chili Crisp, Smoke Rub, Hearth Gift Box), 14 cases AED 1,444.80, "Reorder last order" | 40 shops reorder by email. Someone retypes every line, and mistakes ship. | A wholesale portal on your store with their prices, terms and one-click reorder. |

## S3 · Showcase: "Shops that fit what you sell."
- **Lead:** On the big screen is the product page your customers land on; on the phone is the moment they pay. An `.ex-chip` ("Example project · illustrative numbers") sits under the tab row.
- **Stage:** desktop product page + phone (cart, checkout, subscription or order status).

| Tab | Brand · place | Results | Chips | Phone moment |
|---|---|---|---|---|
| Beauty & salons | Maison Rose · hair care shop, Jumeirah, Dubai · ★4.9 (1,284) | AED 9.8k product sales/mo · 38% orders on subscription | Custom theme, Subscribe & save, Cart upsells, Gift cards | Cart drawer with upsell |
| Home & laundry | FreshFold · plastic-free laundry sheets, Dubai Marina & JLT · ★4.8 | 2,140 active subscribers · −18% cancellations with "skip" | Subscriptions, Skip & swap, Scent variants, Klaviyo flows | Manage subscription: ship / skip / swap |
| Auto parts | Apex Auto Works · parts & service, Al Quoz, Dubai · ★4.9 (418) | −71% wrong-part returns · +AED 22k parts sales/mo | Fits-your-car check, VIN lookup, Install booking, Fleet accounts | Ceramic brake pads "Fits your 2022 Porsche 911 GT3" + install add-on → order status ending "Install at Apex" |
| Food & pantry | Ember Kitchen · pantry brand, Al Rigga, Dubai · ★4.9 (2,031) | 3.2% conversion · AED 41k holiday month | Gift boxes, Gift notes, Local pickup, Wholesale portal | Gift checkout (ship to gift recipient, shipping method) |
| Home services | Volt & Wire · EV chargers + install, Dubai & Sharjah · ★4.9 (427) | 64% buy with install · AED 1,065 avg order | Install add-on, Emirates ID check, Tabby, Calendar sync | Tesla Wall Connector + "We install in Jumeirah, Dubai" → order timeline with install Thu 9 AM |
| Electronics | FixPoint · refurbished phones, Deira, Dubai · ★4.8 (930) | 2.9× trade-ins · AED 489 avg order | Condition grades, Trade-in credit, Tabby, 12-mo warranty | Cart with iPhone 14 "Good" + iPhone 13 trade-in credit |

## S4 · What your store can do (dark panel, 5 tabs): "Everything a serious store needs to sell."

| Tab · chip | Headline | Story (short) | Fine print | Mockup |
|---|---|---|---|---|
| A theme you can edit · Online Store 2.0 · Custom sections | Your brand, not a template everyone else bought. | Theme designed for your products; team changes headlines or launches sale pages alone. | Features built in instead of apps: faster, cheaper. | Theme editor + "Saved and live · Sophie changed the subscribe block" toast |
| Speed on phones · Core Web Vitals · PageSpeed 90+ | Loads in about a second on a phone. | Cut app bloat, compress images, load only what's needed. | Faster pages rank better and lower ad costs. | PageSpeed report, old (Sept 2) vs new (Oct 14): LCP 9.8 s → 1.1 s, TBT 2,140 → 90 ms, CLS 0.41 → 0.01, 8.4 MB → 1.2 MB |
| Subscriptions & bundles · Shopify Subscriptions · Bundles | Customers who come back without being asked. | Subscribe-and-save with skip/swap; gift boxes and bundles raise AOV. | Klaviyo reminder, win-back, "ships Monday" flows. | FreshFold "Your subscription" phone + Ember "Build a gift box" |
| Custom apps & B2B · Shopify Functions · Admin API · B2B | When no app does exactly what you need. | Wholesale pricing, ERP/warehouse sync, custom discounts, fitment lookups. | Run log, alerts, tests; you own the code. | Run log #1,108: wholesale order → reserve warehouse stock → Zoho Books INV-2207 AED 1,512 → Klaviyo email (2.1 s); 412 wholesale orders/yr, 0 retyped, 9 h saved/wk |
| Moving to Shopify · From WooCommerce · Wix · Salla | Switch platforms without losing a sale. | Products, customers, history, reviews, gift card balances move; every URL redirects. | Launch on a quiet night; watch orders and rankings 30 days. | Migration report WooCommerce → Shopify (Ember Kitchen Pantry, Oct 6 2:00 AM): all items ✓, gift balances AED 3,840, 301 redirects; 30-day organic chart: 48/50 keywords kept, +22% visits, 0 broken links, 0 lost orders |

## S5 · Honest platform choice: "Shopify, Plus, Salla or WooCommerce? Most stores need less than they're sold."
Lead: we'll say which fits on the first call, even if it's the cheapest.

| | **Shopify** (recommended) | Shopify Plus | Salla (Gulf platform, Tabby/Tamara built in) | WooCommerce |
|---|---|---|---|---|
| Best for | Brands up to ~AED 1M/yr who want to sell, not maintain servers | AED 1M+ with wholesale, multiple stores, heavy automation | Gulf-first brands that want local payment methods out of the box | Stores deep in WordPress |
| Platform cost | ≈ AED 145–1,465/mo | ≈ AED 8,450/mo | from ≈ AED 100/mo, Tabby/Tamara built in | AED 75–370 hosting + plugins |
| Time to launch | 4–8 weeks | 8–12 weeks | 2–4 weeks | 6–10 weeks |
| Security & updates | Shopify | Shopify | Salla | On you: core, theme, every plugin |
| Checkout conversion | ●●●●● | ●●●●● | ●●●●(●) | ●●● |

Note: Shopify bills in USD; AED shown at 3.67.

## S6 · Process: "About 7 weeks, step by step." (eyebrow: From first call to first sale)
| Step | When | Title | Visual |
|---|---|---|---|
| 01 | Week 1 | Audit the store | Audit card: mobile speed 38/100 · 23 apps AED 2,250/mo · 71% checkout drop-off · quick wins found |
| 02 | Weeks 2–3 | Design the store (Figma, mobile first, real products) | Product page frame |
| 03 | Weeks 3–6 | Build the theme (preview link, check weekly on your phone) | `{% render 'subscribe-widget' %}` · theme check 0 errors · preview URL |
| 04 | Week 6 | Move everything over | Products/customers/orders ✓ · 301 redirects |
| 05 | Week 7 | Test every checkout | Pills: Apple Pay, Tabby, Tamara, Cash on delivery, iPhone SE, Pixel 8 ✓ |
| 06 | Ongoing | Grow sales with you | A/B tests, launch pages, monthly report |

## S7 · Case study (dark): Ember Kitchen Pantry · Al Rigga, Dubai
- **H3:** From the restaurant counter to a nationwide pantry brand.
- **Problem:** hot honey sold at the register and on a WooCommerce site that crashed every December; 9 s on a phone; 0.8% buying.
- **Built:** custom Shopify theme, gift box builder, subscriptions, wholesale portal for 40 shops; 4,200 customers moved. Live in 7 weeks.
- **Metrics:** 3.2% conversion (was 0.8%) · AED 41k in the holiday month · 1.1 s mobile load
- **Quote:** "We sold more hot honey in December than the restaurant sold mains all month." *(rewritten 2026-10-10 — Ember Kitchen serves no wine, per UAE spec §4)*
- **`.ex-chip`:** "Example project · illustrative numbers"
- **Mockups:** Hearth Gift Box product page (gift note, "Ships Mon–Wed") + gift box builder phone.

## S8 · Pricing: "Fixed price. Agreed before we start."
| Tier | Price | Includes | Time |
|---|---|---|---|
| Starter · Launch store | from **AED 9,900** | Premium theme customized, up to 100 products, payments/shipping/taxes, speed + SEO basics | 3–4 weeks |
| **Most chosen · Custom theme** | from **AED 29,000** | Figma design, editable sections, subscriptions or bundles, migration, PageSpeed 90+ mobile | 6–8 weeks |
| Advanced · Plus, headless or custom app | from **AED 69,000** | Plus or Hydrogen, wholesale/B2B pricing, ERP/warehouse/POS sync, custom apps | 10–16 weeks |

**What changes the price:** products & variants · migration · custom apps · subscriptions · wholesale/B2B · markets & languages. Prices exclude 5% VAT.

## S9 · FAQ: "Questions before you build a store."
1. Can you move my store from WooCommerce, Wix or Salla?
2. Will I lose my Google rankings? (301 map, keep titles, watch 30 days)
3. Premium theme or custom theme, which do I need? (honest stage-based answer)
4. How many apps will I need? (typically 15–25 → 5–9)
5. Can my team edit the store after launch? (sections, recorded walkthrough, cheat sheet)
6. Who owns the store, the theme and the data? (you, 100%)
7. Do I need a trade licence to sell online? (e-Trader licence for home-based sellers, or a free-zone/mainland trade licence)

## S10 · Often paired with: "Make the store work even harder."
Payment integration · SEO · Business automation & ERP · White-label for agencies. Industries row: Beauty & hair care, Home & lifestyle, Auto parts, Food & pantry, Home services, Electronics.

## S11 · CTA + footer
"Store not selling like it should? *30 minutes* and we'll show you why." Lead: send your store link before the call; we come with the three biggest changes. WhatsApp CTA next to the three-step list. Widget title: **Store review call** (30 min · Google Meet or in person in Dubai · free, Mon–Fri, Dubai time/GST); footer `Based in Dubai · Trade licence [number] · Mon–Fri 9:00–18:00 GST · WhatsApp +971 50 000 0000`.

---

## Consistency with homepage (AED)
| Value | Shopify page | Homepage | Match |
|---|---|---|---|
| VAT | "Prices exclude 5% VAT" | "Prices exclude 5% VAT" | ✓ |
| WhatsApp number | +971 50 000 0000 | +971 50 000 0000 | ✓ |
| Accounting tool | Zoho Books | Zoho Books | ✓ |
| Maison Rose deposit/prices | AED 109/129 (shampoo), AED 650 (balayage elsewhere) | Services from AED 180/650/950 | ✓ (same brand, different SKU) |

## Open items (this page)
- Real tier prices; confirm the 7-week typical timeline.
- Platform costs in the comparison table (incl. the 3.67 USD/AED peg note) are approximate and change; verify before launch.
- Shopify Partner status and real store case studies (with permission).
