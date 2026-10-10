# 03 · Internal linking plan

Internal links do two jobs: they tell Google which pages matter most (the money pages), and they walk a reader from "I have a problem" to "Book a call". Every link here is a normal crawlable `<a href>` in server-rendered HTML.

## 1. The rules

1. **Money pages get the most links.** Service pages, solution pages and `/pricing` receive links from every related article. Articles rarely link to other articles except within their cluster.
2. **Every article links to exactly one primary money page** in its first 30% (contextual, in a sentence), plus one industry or solution page if relevant, plus `/pricing` or its cost guide. That's 2–4 money links per article, no more.
3. **Every service and industry page has a "Guides" block** (before the FAQ) listing its 3–6 cluster articles. That's the hub → spoke link.
4. **Anchor text = how the customer would say it**, varied naturally. No exact-match anchor more than ~30% of the time to one page.
   - Good: "we build [custom apps for small businesses](/services/mobile-app-development)", "see [what a Shopify store really costs](/guides/shopify-store-cost)", "[own ordering app with 0% commission](/industries/restaurants/online-ordering)".
   - Bad: "click here", "learn more", or "mobile app development company usa" stuffed into a sentence.
5. **Breadcrumbs everywhere** (also BreadcrumbList schema).
6. **No orphan pages.** Every new page must be linked from its hub, from the sitemap, and from at least 3 other pages before it ships.
7. **Never link to a 404 or redirect.** CI check on build (see `07`).
8. **CTAs aren't SEO links.** "Book a call" buttons go to `/contact#book` (or open the widget). They don't replace the contextual links.

## 2. Link matrix: service ↔ industry

These are the "Often paired with" (section 10) and "industries row" links on each service page, and the "services we use here" links on each industry page. ● = strong link (in body copy and the paired block) · ○ = industries row / paired block only.

| Service ↓ / Industry → | Restaurants | Salons | Laundry | Auto repair | Home services | Phone repair |
|---|---|---|---|---|---|---|
| Mobile apps | ● ordering app | ● booking app | ● pickup app | ○ | ○ | ○ |
| Web apps | ○ | ○ | ● ops dashboard | ● shop board | ● dispatch | ○ |
| Shopify | ○ | ○ (retail) | — | — | — | ● parts/accessories store |
| WordPress | ○ | ○ | ○ | ● website | ● website | ● website |
| Landing pages | ○ | ○ | ○ | ● ads | ● ads | ○ |
| Payments | ● | ● deposits | ● per-lb billing | ● text-to-pay | ● | ○ |
| AI | ○ | ● DM assistant | ● dispatcher | ● invoices | ● receptionist | ○ |
| Automation | ● stock/POs | ○ | ● plant floor | ● | ● | ● inventory |
| SEO | ○ | ○ | ○ | ● | ● | ● |
| Vibe rescue | — | — | — | — | — | — (links to SaaS, web apps instead) |
| White-label | — (links to services, not industries) | | | | | |

Each industry page links to its **2–4 ● services** in body copy, all others in the paired row.

## 3. Service ↔ service ("Often paired with")

Keep the pairs already approved in the specs; they're also the natural upsells:

| From | Paired with |
|---|---|
| Mobile apps | Payments · AI · Web apps · Vibe rescue |
| Web apps | Automation · Mobile apps · Payments · SaaS |
| SaaS | Payments · AI · Web apps · Vibe rescue |
| Shopify | Payments · Automation · SEO · Landing pages |
| WordPress | SEO · Landing pages · Payments · AI |
| Landing pages | SEO · WordPress · AI (text-back) · Payments |
| Payments | Shopify · Mobile apps · Automation · SaaS |
| AI | Automation · Web apps · WordPress · Payments |
| Automation | AI · Web apps · Payments · Shopify |
| SEO | WordPress · Landing pages · AI · Shopify |
| Vibe rescue | SaaS · Web apps · Payments · Mobile apps |
| Agencies | Shopify · WordPress · Mobile apps · Web apps (the four most white-labelled) |

## 4. Clusters: which article links to which money page

Each cluster = 1 hub (service page) + 1 cost pillar + supporting articles. Full article list in `05-content-plan.md`.

| Hub (money page) | Cost pillar | Supporting articles (link up to the hub) |
|---|---|---|
| Mobile apps | app-development-cost | does-my-business-need-an-app · flutter-vs-react-native · publish-app-app-store-google-play · loyalty-app-small-business · developer-disappeared · app-like-uber-cost |
| Web apps | custom-software-cost | replace-spreadsheets-with-software · custom-software-vs-off-the-shelf · custom-crm-cost · client-portal-guide |
| SaaS | saas-mvp-cost | build-saas-non-technical-founder · mvp-scope-checklist · vertical-saas-ideas |
| Shopify | shopify-store-cost | woocommerce-to-shopify-migration · move-to-shopify · shopify-vs-woocommerce · start-selling-online-local-shop · shopify-speed |
| WordPress | website-cost-small-business | fix-wordpress-site · wordpress-hacked-what-to-do · speed-up-wordpress · wordpress-vs-wix-vs-squarespace |
| Landing pages | landing-page-cost | google-ads-clicks-no-calls · landing-page-checklist-contractors |
| Payments | (fee calculator tool) | stripe-vs-square-vs-paypal · text-to-pay · take-deposits-for-appointments · bnpl-small-business |
| AI | ai-chatbot-cost | ai-for-small-business (pillar) · ai-receptionist-cost · ai-invoice-entry-quickbooks · ai-chatbot-mistakes |
| Automation | erp-cost-small-business | automate-small-business (pillar) · zapier-vs-make-vs-n8n · quickbooks-automation |
| SEO | seo-cost-small-business | not-showing-on-google-maps · get-more-google-reviews · show-up-in-chatgpt |
| Vibe rescue | (in-page pricing) | lovable-app-to-production · ai-app-works-locally-breaks-deployed · supabase-rls-security-check · is-my-ai-built-app-safe · lovable-vs-hiring-developer |
| Agencies | white-label-dev-pricing | vet-white-label-partner · white-label-shopify-guide · agency-margins-dev-work |

Industry clusters (each article links to its industry page **and** its solution page):
- **Restaurants:** delivery-app-commission-math · doordash-alternatives · restaurant-loyalty-that-works
- **Salons:** salon-no-shows-deposits · own-salon-app-vs-booking-platform · salon-memberships
- **Laundry:** start-laundry-pickup-delivery · laundry-per-pound-pricing-software
- **Auto repair:** more-customers-auto-repair-shop · digital-inspections-get-approved
- **Home services:** more-plumbing-leads · servicetitan-alternatives-custom · missed-calls-contractors
- **Phone repair:** more-customers-phone-repair-shop · repair-ticket-tracking

## 5. Links from tools (calculators)

Each tool's result screen links to the page that fixes the problem it just showed:
- Delivery commission calculator → `/industries/restaurants/online-ordering`
- Payment fee calculator → `/services/payment-integration`
- Missed-call calculator → `/services/ai-integration` and `/industries/home-services/ai-receptionist`
- No-show cost calculator → `/industries/salons/booking-app` + `/guides/take-deposits-for-appointments`
- App cost calculator → `/services/mobile-app-development` + `/pricing`

## 5b. Location pages (see `09-location-pages.md`)

- `/locations` hub → every city hub → each city × service page (breadcrumbs: Home / Locations / Houston / Shopify agency).
- Each national service page gets a "We work with businesses across the US" row linking its city pages (anchor = "Shopify agency in Houston").
- Each city × service page links up to its city hub and across to the national service page, plus 2–3 industry pages framed for that city.
- City pages don't link to each other's service pages (avoids a web of near-duplicates); the city hub lists the other cities.
- Footer: one "Locations" link to the hub, not 24 city links.

## 6. Homepage outbound links (it passes the most authority)

The homepage links to: all 11 services (services section + nav), all 6 industries, `/pricing`, `/agencies`, `/work`, and the **3 most important cost guides** in a small "Straight answers" row (app cost · website cost · custom software cost). Nothing else, so authority isn't spread thin.

## 7. Maintenance

- Monthly: Search Console → Links report. Any money page with fewer internal links than an article? Fix it.
- When a new article ships: add it to its hub's Guides block and add 1–2 links **to** it from older related articles.
- Crawl monthly (Screaming Frog free ≤500 URLs) for broken links, orphans and redirect chains.
