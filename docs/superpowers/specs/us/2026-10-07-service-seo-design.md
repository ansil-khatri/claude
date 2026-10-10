# Service Page: SEO — Design Spec

- **Date:** 2026-10-07
- **Status:** Mockup built, waiting for owner review
- **Route:** `/services/seo`
- **Reference mockup:** `docs/superpowers/mockups/service-seo.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` (design system §3, template §5, accessibility/responsive §6). Only page-specific content is recorded here.

**Positioning:** local SEO for businesses that serve a city. We report calls and bookings, not rankings nobody searches for; no #1 guarantees; no paid reviews.

**Story:** people search "electrician near me" and call your competitor → three ways you're invisible (not on the map, slow site, neglected Google profile) → how each trade gets searched → five things that get you found and chosen → SEO vs ads vs cheap package vs DIY → first calls in 4–8 weeks → proof → monthly price → objections → free search check.

**Mockup mix:** light Google-style UIs throughout: rank grid dashboard, Google local results with map pack on phone, PageSpeed Insights, Google Business Profile panel and Performance view, Search Console, schema JSON in an editor + Rich Results Test, iMessage review request, review replies, a one-page monthly PDF report. Class prefix for this page: `seo-`. Primary CTA is **"Get a free search check"**.

---

## SE1 · Hero (dark panel)
- **Breadcrumb:** Services / SEO
- **H1:** "People search "electrician near me" and call your competitor. **Let's make it your phone that rings.**"
- **Sub:** Local SEO for businesses that serve a city: a fast website, a Google profile that's complete and active, a page for every service and area you cover, and reviews that keep coming. We report on calls and bookings, not on rankings nobody searches for.
- **CTAs:** Get a free search check · See pricing
- **Tech chips:** Google Business Profile · Search Console · GA4 · Schema · Core Web Vitals · AI Overviews
- **Visual:** Volt & Wire Rankings (`seo.voltwire.com/rankings`, "checked from 35 points across Plano"): calls from Google 142 → 143 ticking (was 31 in March), top 3 on the map 18 of 24, website leads, 427 reviews (4.9, 38 new); **35-point geo-grid** for "electrician near me" (avg position 1.9, was 14.2); target searches list (#1 ▲13 "electrician near me", #1 "ev charger installer plano", #2 "panel upgrade plano"…). Phone: Google "electrician near me" local pack with Volt & Wire first (4.9, 427, Open 24 hours, review snippet) → tap Call → "Calling Volt & Wire · Answered by Erin".
- **Floating cards:** ""electrician near me" · Plano · #1 on the map, was #14" · "Calls from Google this month · 143 · was 31 in March" · "New Google review · ★★★★★ "Clean work, on time"".

## SE2 · Sound familiar? "Good at the work. Invisible on Google."

| Quote | Before | After | Cost (red) | Fix |
|---|---|---|---|---|
| "We search 'plumber near me' and we're not even on the map." | Google "plumber near me" (Denver): map pack of three competitors; footer "Peak Plumbing: result #27, on page 3 · 0 calls" | Peak Plumbing first (4.9 · 640 reviews, Denver, Open 24 hours); footer "#1 in Lakewood, Arvada and Englewood · 118 calls, was 31" | #27 on page 3; the top three got the calls, incl. one with half their reviews. | Complete profile, a page per suburb, steady reviews. 14 weeks later: #1 on the map. |
| "Our website is beautiful. Google says it's slow." | PageSpeed `maisonrose.com/bridal` mobile: CWV Failed, LCP 8.4 s | CWV Passed, LCP 1.1 s, 380 KB (was 9.2 MB) | 8.4 s on a phone; bridal page stuck on page 2 for "bridal hair Austin". | Rebuilt images and code, kept the design: 1.1 s, bridal page ranks #2. |
| "Our Google listing still says we close at 5." | Apex Google profile: 3.9 (23), "Closes 5 PM · Closed Saturday", website "page not found", 1-star review ("Called twice on Saturday… went to the dealer") with no reply for 7 months | 4.9 (860), Porsche specialist, correct hours incl. Saturday, services with prices, working website, 5-star review + owner reply signed "— Rick" | 23 reviews, 3.9 stars, unanswered 1-star, wrong hours; people drove to the dealer. | Hours, photos, services, prices fixed; every customer gets a review text; every review gets a reply. |

## SE3 · Showcase: "Every trade gets searched differently."
- **Lead:** The big screen shows what the owner tracks, and the phone shows what a customer sees on Google.

| Tab | Brand · focus | Results | Chips | Owner screen | Phone |
|---|---|---|---|---|---|
| Salons & spas | Maison Rose · local SEO, Austin | 4.2K clicks from Google ▲186% · #1.8 for "balayage austin" | Google profile, Service pages, Review texts, Fast site | **Search Console** Performance: 4.2K clicks, 182K impressions, 2.3% CTR, avg position 6.1 (was 18.4); top queries with ▲ deltas | "balayage near me" local pack → `maisonrose.com/balayage` (Mia's next opening, 612 visits) |
| Restaurants | Ember Kitchen · Google profile & Maps | 18,400 profile views/mo · 1,260 "Order online" taps | Menu with photos, Own ordering link, Holiday hours, Review replies | "Found on Google" + "What we changed" | Profile → "Order #5850 placed" |
| Auto shops | Apex Auto Works · service pages, Phoenix | 231 calls from search (was 74) · 14 of 14 pages with stars | A page per job, Prices in results, FAQ snippets, Review texts | Service pages + "Why the stars show" | Result "Brake Repair in Phoenix, AZ \| Pads From $189 \| Same Day" above Midas |
| Home services | Peak Plumbing · area pages, Denver | 118 calls/mo (was 31) · 11 of 14 suburbs in top 3 | Suburb pages, Real job photos, Arrival times, Review texts | Area pages + "What's on each page" | Local result |
| Laundry | FreshFold · guides, Chicago | 1,186 pickups from search · 9 Google answer boxes | Price guides, Neighborhood pages, Answer boxes, Pickup button | Guides & neighborhood pages + "Why guides work" | Answer box "Wash and fold in Chicago usually costs $1.75–$2.50 per pound." |
| SaaS | Ledgerly · content & AI search | 612 trials/quarter from search · 31% of AI answers mention it | Comparison pages, How-to guides, AI Overviews, Free templates | Organic signups + "Seen in AI answers" (14/12/11 of 40) | "Ledgerly vs QuickBooks: Which Is Better for Small Finance Teams?" |

## SE4 · What we do (dark panel, 5 tabs): "Five things that get you found and chosen."

| # | Tab · chip | Headline | Fine print | Mockup |
|---|---|---|---|---|
| 01 | Your Google profile · Google Business Profile · Maps · Photos · Posts | Most people decide from your Google profile, not your website. | Kept current weekly: holiday hours, photos, offers, Q&A. | FreshFold Lincoln Park GBP Performance: 8,940 interactions (6 months), 1,120 website clicks, 214 calls, 380 directions; searches that showed the profile; how customers found you (61% Search on phone) |
| 02 | A page for every city · Service pages · City pages · Real local proof | Someone in Frisco searches for Frisco. Give them a page about Frisco. | Written with you from real jobs; no AI-spun pages. | `voltwire.com/ev-charger/frisco-tx` ("64 installs in Frisco", 61 reviews from Frisco, last install Tue · Model Y · Starwood, Frisco permit) + positions for 5 city pages (one "#6 · new") |
| 03 | Fast, and easy to read · Core Web Vitals · Schema · Rich results | Fast on a phone, and easy for Google to understand. | Works on WordPress, Shopify, Webflow, Wix or custom; no forced rebuild. | Editor with `schema.json` (AutoRepair, hours, 4.9/860 rating, brake offer minPrice 189, areaServed Phoenix/Tempe/Scottsdale, FAQ note) + Rich Results Test (Local business, Review snippets, FAQ · 4 items valid) + toast "Brake page in the results · Stars, "from $189" and 4 FAQs" |
| 04 | Reviews that keep coming · Review texts · Replies · Google, Yelp, Facebook | Happy customers forget to review. So we ask at the right moment. | Follows Google's rules: everyone is asked, never paid. | iMessage review request (Jess) → 5-star review + owner reply; 3-star "waited 20 minutes" + apologetic reply with free blow-dry; toast "112 → 312 in eight months" |
| 05 | A report you can read · Calls · Bookings · Plain English | One page a month: what came in, what we did, what's next. | Monthly 30-min call; Search Console + Analytics in your name. | One-page "SEO REPORT · OCTOBER 2026 · Peak Plumbing": 118 calls, leads, reviews; What happened (Lakewood #1 on Oct 9; Golden #11, new competitor); What we did (4 area pages, 41 replies, 3 directories fixed, Chamber link); Next month |

## SE5 · Honest choice: "SEO, ads, a cheap package or do it yourself? Here's what each one gets you."
Lead: need calls next week → run Google Ads while SEO builds; more time than budget → we'll show you DIY on the call.

| | **Local SEO with us** (recommended) · setup + monthly | Google Ads only · pay per click | Cheap SEO package · $199–399/mo | Do it yourself |
|---|---|---|---|---|
| Best for | Steady calls every month from people nearby | Calls this week, or a new service | Directory listings | Owners who enjoy learning it |
| Typical cost | $1,500 setup + from $1,200/mo | $1,500–5,000/mo in clicks | $199–399/mo | 5–10 h/month |
| When it works | First calls 4–8 weeks, strong in 3–6 months | Same day | Rarely noticeable | 6–12 months if consistent |
| Calls from it | ●●●●● | ●●●● | low | low |
| When you stop paying | Pages, reviews, rankings stay yours | Calls stop that day | Little changes | Stays if you keep going |
| What you see | Calls and bookings, plain English | Ads dashboard | Rankings for odd keywords | Search Console |

Note: "Typical US prices in 2026. We never resell Google Ads clicks at a markup."

## SE6 · Process: "First calls in 4–8 weeks. Momentum by month 3." (eyebrow: From invisible to on the map)
Note the headline differs from the template's "About N weeks" because SEO is ongoing.

| Step | When | Title | Visual |
|---|---|---|---|
| 01 | Week 1 | Search like your customers (30 money searches, 49 points) | Current positions: "plumber near me" #27, "water heater repair denver" #14… |
| 02 | Weeks 1–3 | Fix what's holding you back (speed, broken pages, titles, 40 directories) | Before / after bars |
| 03 | Weeks 2–4 | Get the Google profile right | Hours FIXED · 24 real photos ADDED · Review text LIVE |
| 04 | Months 1–3 | A page for every service and area (4/month) | `/water-heaters/lakewood`, `/drain-cleaning/arvada`, `/emergency-plumber/englewood` |
| 05 | Every week | Reviews and local links | 64 review texts → 41 reviews → 41 replies → 6 local links |
| 06 | Every month | A report you can read | Monthly report + 30-min call |

## SE7 · Case study (dark): FixPoint · Miami, FL
- **H3:** Three stores, three Google listings. Only one of them showed up.
- **Problem:** Downtown got all the searches; Eastside and Mall listed under an old name with a dead website link; nearby searchers sent across town or to a competitor.
- **Built:** cleaned-up profile and own page per store (live repair prices, wait times, real repair photos), per-store review texts. Local SEO only, no ads.
- **Metrics:** 3 of 3 stores in the top 3 on the map · +186% calls and walk-ins from Google · $0 spent on ads
- **Quote:** "People walk in holding their phone with our Google listing open. Eastside went from our quietest store to our busiest."
- **Mockups:** `seo.fixpoint.com/stores` (1,284 calls + walk-ins, 3 of 3, 930 reviews (Downtown 414 · Eastside 302 · Mall 214); per-store table, Eastside #1 ▲23; Eastside before → after: name "iFix (old)" → "FixPoint Eastside", 404 → /stores/eastside, photos 2 → 46, reviews 18 → 302, prices none → live) + phone "iphone screen repair near me" with FixPoint Eastside above uBreakiFix → directions with "~15 min wait · iPhone 13 screen $149 in stock".

## SE8 · Pricing: "Clear monthly price. No long contract."
Lead adds: after the first 6 months it's month to month, 30 days' notice. (Differs from other pages' "Fixed price. Agreed before we start.")

| Tier | Price (placeholder) | Includes | Time |
|---|---|---|---|
| Setup · Local SEO setup | from **$1,500** | Speed + technical fixes, Google profile rebuilt, schema, 40 directory listings, review texts | 3–4 weeks |
| **Most chosen · Monthly local SEO** | from **$1,200/mo** | Setup + 4 pages/month, weekly profile updates, every review replied, local links, monthly report + call | Ongoing |
| Growth · Multi-location & content | from **$3,000/mo** | Monthly per location, 8+ pages/guides, comparison/buying guides, visibility in ChatGPT and AI Overviews, quarterly strategy | Ongoing |

**What changes the price:** locations · cities served · how competitive your trade is · state of your website · pages per month · languages.

## SE9 · FAQ: "Questions before you spend on SEO."
1. How long until I get more calls? (4–8 weeks first calls; clear difference by month 3)
2. Can you guarantee #1 on Google? (no; we promise the work and an honest report)
3. Do I need a new website? (usually not; separate price if it truly holds you back)
4. What about ChatGPT and Google's AI answers? (same signals; monthly mention check across ChatGPT, Perplexity, AI Overviews)
5. Should I just run Google Ads instead? (ads now, SEO compounds; many run both for 3 months)
6. Am I locked into a contract? (6 months up front, then month to month; everything in your name)

## SE10 · Often paired with: "Getting found is half of it."
Landing pages · WordPress development · AI integration · Shopify development. Industries: Salons & spas, Restaurants, Auto shops, Home services, Laundry, Phone repair, SaaS.

## SE11 · CTA + footer
"Want to see what customers see when they search for you? *30 minutes* and we'll show you where you rank." Steps include "We search your area live, together". Widget: **Free search check**.

---

## Consistency with homepage (homepage wins)
All items below were **fixed in the mockup on 2026-10-07** unless marked "Owner to decide". Verified in headless Chrome: values render, no page errors.

| Item | Homepage / approved source | This mockup | Resolution |
|---|---|---|---|
| Peak Plumbing reviews | Homepage: 4.9 · **640** Google reviews, Denver, (303) 555-0148 | 612 (pain card after-state and showcase tab) | Change 612 → 640. |
| Peak Plumbing city in Google listings | Homepage: Denver, CO | "Plumber · Lakewood" (pain card, showcase phone) | Changed to Denver; it still ranks #1 in the Lakewood/Arvada/Englewood searches. |
| FixPoint location | Not on homepage; approved Mobile Apps page: **Miami, FL** · ★4.8 · 930 reviews | Houston, TX · 4.9 · 690 reviews (case study) | Change the case study to Miami, FL; per-store review counts should total ~930. |

## Open items (this page)
- Real monthly prices and whether the 6-month minimum is the owner's policy.
- Competitor names in mockups (uBreakiFix by Asurion, Midas) are real brands shown in search results; confirm the owner is comfortable, or swap for fictional names.
- "Visibility in ChatGPT and AI Overviews" needs a defined method before it's sold.
