# Service Page: Shopify Development — Design Spec

- **Date:** 2026-10-07
- **Status:** Mockup built, waiting for owner review
- **Route:** `/services/shopify-development`
- **Reference mockup:** `docs/superpowers/mockups/service-shopify.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` (design system §3, template §5, accessibility/responsive §6). Only page-specific content is recorded here.

**Story:** your products are great but the store doesn't sell → three store problems you recognize → stores for your kind of product → what a serious store needs → which platform → 7 weeks → proof → price → objections → store review call.

**Mockup mix:** light storefronts (product pages, cart drawers, checkout), Shopify-style admin (apps list, theme editor), PageSpeed report, run log, migration report; one Gmail-style inbox as a "before". No booking UI on this page.

---

## S1 · Hero (dark panel)
- **Breadcrumb:** Services / Shopify Development
- **H1:** "Your products are great. **Your store should sell like it.**"
- **Sub:** Shopify stores, custom themes and apps for brands doing $10k to $10M a year. Fast on phones, easy for your team to edit, and built to turn browsers into buyers.
- **CTAs:** Book a free call · See Shopify pricing
- **Tech chips:** Shopify & Shopify Plus · Liquid · Online Store 2.0 · Hydrogen (headless) · Shopify Functions · Klaviyo · Recharge
- **Visual:** Maison Rose product page (`maisonrose.com/products/bond-repair-shampoo`): announcement bar, Bond Repair Shampoo $28.90 (was $34, save 15%), ★4.9 (1,284), size picker, subscribe & save 15% vs one-time, Add to cart + Shop Pay/Apple Pay, accordions. Phone: cart drawer ("$8.00 away from free shipping", 2 items, "Pairs well with Shine Oil", subtotal $56.90).
- **Floating cards:** "New order · #1042 · $56.90 · Shop Pay" · "Mobile PageSpeed 38 → 94" · "Conversion rate 1.1% → 3.4%".

## S2 · Sound familiar? "Why store owners call us."

| Quote | Before | After | Cost (red) | Fix |
|---|---|---|---|---|
| "Plenty of visitors. Hardly anyone buys." | Cluttered mobile store: MEGA SALE marquee, keyword-stuffed title, "Someone in Ohio just bought this", "Loading… 9.8s", "WAIT!! 10% OFF" popup ("No thanks, I hate saving money"), cookie banner | Clean Maison Rose mobile product page with sticky "Add to cart · $28.90" + Shop Pay | 2,840 visits last week, 31 orders. 9.8 s to load, then a popup covers it. | A fast, clean mobile store with a sticky Add to cart and one-tap Shop Pay. |
| "We have 23 apps and the theme breaks every update." | Shopify admin Apps list: Popup Pro (+1.2s load), Sticky Cart Drawer (conflicts), Countdown Timer (unused since 2023), Bundle Builder X (breaks on update), SEO Booster Ultra (duplicate meta)… 23 apps · **$612/mo** | Theme editor (`admin.shopify.com/.../themes`): section tree + live preview + "Subscribe & save" block settings | $612 a month in apps, and $400 to a freelancer just to move a banner. | A custom theme with the features built in, and sections your team edits in minutes. |
| "Wholesale orders still come in as PDFs." | Inbox of shop reorders with PDF/XLSX/photo attachments, "old prices", "wrong flavor shipped" | Ember Kitchen wholesale portal: Gold tier −30%, Net 30, quick-order table (Hot Honey, Chili Crisp, Smoke Rub, Hearth Gift Box), 14 cases $1,444.80, "Reorder last order" | 40 shops reorder by email. Someone retypes every line, and mistakes ship. | A wholesale portal on your store with their prices, terms and one-click reorder. |

## S3 · Showcase: "Shops that fit what you sell."
- **Lead:** On the big screen is the product page your customers land on; on the phone is the moment they pay.
- **Stage:** desktop product page + phone (cart, checkout, subscription or order status).

| Tab | Brand · place | Results | Chips | Phone moment |
|---|---|---|---|---|
| Beauty & salons | Maison Rose · hair care shop, Austin · ★4.9 (1,284) | $9.8k product sales/mo · 38% orders on subscription | Custom theme, Subscribe & save, Cart upsells, Gift cards | Cart drawer with upsell |
| Home & laundry | FreshFold · plastic-free laundry sheets, Chicago · ★4.8 | 2,140 active subscribers · −18% cancellations with "skip" | Subscriptions, Skip & swap, Scent variants, Klaviyo flows | Manage subscription: ship / skip / swap |
| Auto parts | Apex Auto Works · parts & service, Phoenix · ★4.9 (418) | −71% wrong-part returns · +$22k parts sales/mo | Fits-your-car check, VIN lookup, Install booking, Fleet accounts | Ceramic brake pads "Fits your 2022 Porsche 911 GT3" + install add-on → order status ending "Install at Apex" |
| Food & pantry | Ember Kitchen · pantry brand, Brooklyn · ★4.9 (2,031) | 3.2% conversion · $41k holiday month | Gift boxes, Gift notes, Local pickup, Wholesale portal | Gift checkout (ship to gift recipient, shipping method) |
| Home services | Volt & Wire · EV chargers + install, Dallas · ★4.9 (427) | 64% buy with install · $1,065 avg order | Install add-on, ZIP check, Klarna, Calendar sync | Tesla Wall Connector $475 + "We install at 75034 · Frisco" → order timeline with install Thu 9 AM |
| Electronics | FixPoint · refurbished phones, Miami · ★4.8 (930) | 2.9× trade-ins · $489 avg order | Condition grades, Trade-in credit, Klarna, 12-mo warranty | Cart with iPhone 14 "Good" + iPhone 13 trade-in credit |

## S4 · What your store can do (dark panel, 5 tabs): "Everything a serious store needs to sell."

| Tab · chip | Headline | Story (short) | Fine print | Mockup |
|---|---|---|---|---|
| A theme you can edit · Online Store 2.0 · Custom sections | Your brand, not a template everyone else bought. | Theme designed for your products; team changes headlines or launches sale pages alone. | Features built in instead of apps: faster, cheaper. | Theme editor + "Saved and live · Sophie changed the subscribe block" toast |
| Speed on phones · Core Web Vitals · PageSpeed 90+ | Loads in about a second on a phone. | Cut app bloat, compress images, load only what's needed. | Faster pages rank better and lower ad costs. | PageSpeed report, old (Sept 2) vs new (Oct 14): LCP 9.8 s → 1.1 s, TBT 2,140 → 90 ms, CLS 0.41 → 0.01, 8.4 MB → 1.2 MB |
| Subscriptions & bundles · Recharge · Shopify Subscriptions · Bundles | Customers who come back without being asked. | Subscribe-and-save with skip/swap; gift boxes and bundles raise AOV. | Klaviyo reminder, win-back, "ships Monday" flows. | FreshFold "Your subscription" phone + Ember "Build a gift box" (3 of 4 picked, $42) |
| Custom apps & B2B · Shopify Functions · Admin API · B2B | When no app does exactly what you need. | Wholesale pricing, ERP/warehouse sync, custom discounts, fitment lookups. | Run log, alerts, tests; you own the code. | Run log #1,108: wholesale order → reserve warehouse stock → QuickBooks INV-2207 $1,512 → Klaviyo email (2.1 s); 412 wholesale orders/yr, 0 retyped, 9 h saved/wk |
| Moving to Shopify · From WooCommerce · Wix · Squarespace · Magento | Switch platforms without losing a sale. | Products, customers, history, reviews, gift card balances move; every URL redirects. | Launch on a quiet night; watch orders and rankings 30 days. | Migration report WooCommerce → Shopify (Ember Kitchen Pantry, Oct 6 2:00 AM): all items ✓, gift balances $3,840, 301 redirects; 30-day organic chart: 48/50 keywords kept, +22% visits, 0 broken links, 0 lost orders |

## S5 · Honest platform choice: "Shopify, Plus, headless or WooCommerce? Most stores need less than they're sold."
Lead: we'll say which fits on the first call, even if it's the cheapest.

| | **Shopify** (recommended) | Shopify Plus | Headless (Hydrogen / Next.js) | WooCommerce |
|---|---|---|---|---|
| Best for | Brands up to ~$1M/yr who want to sell, not maintain servers | $1M+ with wholesale, multiple stores, heavy automation | Content-heavy brands needing a fully custom experience | Stores deep in WordPress |
| Platform cost | $39–399/mo | from $2,300/mo | Shopify plan + $50–300 hosting | $20–100 hosting + paid plugins |
| Time to launch | 4–8 weeks | 8–12 weeks | 10–16 weeks | 6–10 weeks |
| Security & updates | Shopify | Shopify | Front end is on your team | On you: core, theme, every plugin |
| Checkout conversion | ●●●●● | ●●●●● | ●●●●● | ●●● |

## S6 · Process: "About 7 weeks, step by step." (eyebrow: From first call to first sale)
| Step | When | Title | Visual |
|---|---|---|---|
| 01 | Week 1 | Audit the store | Audit card: mobile speed 38/100 · 23 apps $612/mo · 71% checkout drop-off · quick wins found |
| 02 | Weeks 2–3 | Design the store (Figma, mobile first, real products) | Product page frame |
| 03 | Weeks 3–6 | Build the theme (preview link, check weekly on your phone) | `{% render 'subscribe-widget' %}` · theme check 0 errors · preview URL |
| 04 | Week 6 | Move everything over | Products/customers/orders ✓ · 301 redirects |
| 05 | Week 7 | Test every checkout | Pills: Shop Pay, Apple Pay, Klarna, iPhone SE, Pixel 8, Discounts ✓ |
| 06 | Ongoing | Grow sales with you | A/B tests, launch pages, monthly report |

## S7 · Case study (dark): Ember Kitchen Pantry · Brooklyn, NY
- **H3:** From the restaurant counter to a nationwide pantry brand.
- **Problem:** hot honey sold at the register and on a WooCommerce site that crashed every December; 9 s on a phone; 0.8% buying.
- **Built:** custom Shopify theme, gift box builder, subscriptions, wholesale portal for 40 shops; 4,200 customers moved. Live in 7 weeks.
- **Metrics:** 3.2% conversion (was 0.8%) · $41k in the holiday month · 1.1 s mobile load
- **Quote:** "We sold more hot honey in December than the restaurant sold in wine."
- **Mockups:** Hearth Gift Box product page ($58, gift note, "Ships Mon–Wed") + gift box builder phone.

## S8 · Pricing: "Fixed price. Agreed before we start."
| Tier | Price (placeholder) | Includes | Time |
|---|---|---|---|
| Starter · Launch store | from **$4,900** | Premium theme customized, up to 100 products, payments/shipping/taxes, speed + SEO basics | 3–4 weeks |
| **Most chosen · Custom theme** | from **$11,900** | Figma design, editable sections, subscriptions or bundles, migration, PageSpeed 90+ mobile | 6–8 weeks |
| Advanced · Plus, headless or custom app | from **$24,000** | Plus or Hydrogen, wholesale/B2B pricing, ERP/warehouse/POS sync, custom apps | 10–16 weeks |

**What changes the price:** products & variants · migration · custom apps · subscriptions · wholesale/B2B · markets & languages.

## S9 · FAQ: "Questions before you build a store."
1. Can you move my store from WooCommerce, Wix or Squarespace?
2. Will I lose my Google rankings? (301 map, keep titles, watch 30 days)
3. Premium theme or custom theme, which do I need? (honest stage-based answer)
4. How many apps will I need? (typically 15–25 → 5–9)
5. Can my team edit the store after launch? (sections, recorded walkthrough, cheat sheet)
6. Who owns the store, the theme and the data? (you, 100%)

## S10 · Often paired with: "Make the store work even harder."
Payment integration · SEO · Business automation & ERP · White-label for agencies. Industries row: Beauty & hair care, Home & lifestyle, Auto parts, Food & pantry, Home services, Electronics.

## S11 · CTA + footer
"Store not selling like it should? *30 minutes* and we'll show you why." Lead: send your store link before the call; we come with the three biggest changes. Widget title: **Store review call** (30 min · Google Meet · free).

---

## Consistency with homepage (homepage wins)
Checked against the homepage on 2026-10-07 (prices, timelines, concept-brand facts): no conflicts found.

## Open items (this page)
- Real tier prices; confirm the 7-week typical timeline.
- Platform costs in the comparison table are approximate and change; verify before launch.
- Shopify Partner status and real store case studies (with permission).
