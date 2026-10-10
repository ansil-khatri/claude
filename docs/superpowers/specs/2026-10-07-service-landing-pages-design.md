# Service Page: Landing Pages — Design Spec

- **Date:** 2026-10-07
- **Status:** Mockup built, waiting for owner review
- **Route:** `/services/landing-pages`
- **Reference mockup:** `docs/superpowers/mockups/service-landing-pages.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` (design system §3, template §5, accessibility/responsive §6). Only page-specific content is recorded here.

**Audience:** owners paying for Google/Meta ads whose clicks don't turn into calls.

**Story:** your ads get clicks, your page should get calls → three ways money leaks (homepage traffic, slow page, slow follow-up) → one-offer pages per industry → what every page gets → custom vs builder vs homepage vs template → 10 days → proof → price → objections → free page review.

**Mockup mix:** light throughout: real landing pages (desktop + phone), Google Ads campaign table, PageSpeed Insights, Gmail inbox, a leads CRM, Google search results with a sponsored ad, A/B experiment report, attribution dashboard. Note that the primary CTA on this page is **"Get a free page review"**, not "Book a free call".

---

## L1 · Hero (dark panel)
- **Breadcrumb:** Services / Landing Pages
- **H1:** "Your ads get clicks. **Your page should get calls.**"
- **Sub:** Landing pages built for one ad, one offer and one button, so the people you pay to reach actually call, book or buy. Live in about 10 days, and tracked down to every lead.
- **CTAs:** Get a free page review · See pricing
- **Tech chips:** Next.js · Webflow · Google Ads · GA4 · Meta Pixel · HubSpot · GoHighLevel · CallRail · A/B testing
- **Visual:** Volt & Wire EV-charger landing page (`voltwire.com/ev-charger`): offer bar "$300 off EV charger installs · ends Oct 31", H1 "Your Tesla charger, installed this week.", 3 checks (flat $1,240, permit included, Tesla Certified), ★4.9 (427), "Installed yesterday · Model Y · Plano" photo card, **2-step form** ("What are you charging?" Tesla / Other EV / Not sure / Panel upgrade + ZIP 75024 → "See my price"), trust row (1,200+ installs, 3-day wait, $0 permit fees, Tesla Certified, BBB A+, license number), 3-step "Charging at home by Friday". Phone: mobile version with sticky Call now / Get my price.
- **Floating cards:** "New lead · 41 seconds ago · Tesla charger · Plano 75024" · "Visitors who became leads 11.4% ▲ from 1.9%" · "Phone speed score 98 · loads in 1.1 s".

## L2 · Sound familiar? "Paying for clicks that never call."

| Quote | Before | After | Cost (red) | Fix |
|---|---|---|---|---|
| "We spend $4,000 a month on Google Ads and the phone barely rings." | Google Ads (Peak Plumbing, Sep 16–Oct 15): $4,212 cost, 1,840 clicks, 11 conversions, **$382.91/conv.**; all 3 campaigns → `peakplumbing.com` (red) | Next month, same budget: $4,204, 122 conversions, **$34.46/conv.**; each campaign → its own page (`/water-heater` 6.4%, `/drains` 5.9%, `/emergency` 7.6%) | Every ad sends people to the homepage. 1,840 clicks → 11 leads = $383 per lead. | One page per ad, one offer, one button. Same budget: 122 leads at $34 each. |
| "Our page looks great on my laptop." | PageSpeed Insights mobile for `maisonrose.com/bridal`: CWV **Failed**, LCP 8.4 s, CLS 0.31, opportunities (unused JS 4.9 s, 6.8 MB images, page-builder scripts) | Same URL: CWV **Passed**, LCP 1.1 s, CLS 0.01, AVIF images 212 KB, page 380 KB (was 9.2 MB), form visible in 0.9 s on 4G | 8.4 s on a phone; most people tap back before the form appears. | Rebuilt to load in 1.1 s. Speed score 23 → 98. |
| "By the time we call back, they've hired someone else." | Shared inbox, 61 unread: "New submission: EV charger" ×4, "Still waiting to hear back…", "Never mind, we went with another company" | Volt & Wire "New leads" CRM: first reply **41 sec** (was 19 hours), 61% booked, went elsewhere 0 (was 6 of 14); leads with source ad + time to first text | Average reply 19 hours; 6 of 14 leads went to a competitor. | Text in under a minute, a call within 5, lands in your CRM with the ad it came from. |

## L3 · Showcase: "One offer. One page. One button."
- **Lead:** Each page was written for one ad and one kind of customer, on a laptop and on a phone.

| Tab | Brand · offer | Results | Chips | Page highlights |
|---|---|---|---|---|
| Home services | Volt & Wire · EV charger installs, Dallas | 11.4% visitors → leads · $29/lead (was $164) | Matched to 6 ad groups, 2-step form, Text-back in 41 s, Call tracking | Hero page above |
| Salons & spas | Maison Rose · bridal hair, Austin | 38 weddings booked from ads · $19/inquiry on Instagram | Instagram + Pinterest ads, Date checker, Deposit to hold, Photo gallery | "Check your wedding date" (Spring/Summer/Fall 2027), real-wedding card (Laura & James · Hotel Ella) |
| Auto shops | Apex Auto Works · brake service, Phoenix | 8.7% visitors book · $41/booked job (was $186) | One page per service, Online booking, Photo quotes by text, Google Ads tracking | "Brakes squeaking?" free inspection, symptom picker |
| Restaurants | Ember Kitchen · private dining, Brooklyn | $94k in December parties · 41 events in 6 weeks | Party size picker, Set menus, Deposits, Events inbox | "Check December dates", party size 12–40, "Seats 30 · fireplace" |
| Phone repair | FixPoint · screen repair, Miami | 3× online bookings · $12/booked repair | Instant price, Time slot, 3 locations, Google Maps ads | Model picker, $149 → $129 online, 45-min repair |
| SaaS trials | Ledgerly · QuickBooks users trial page | 14.2% visitor → trial · −38% cost per trial | Matched to keywords, Work-email check, Demo video, LinkedIn Ads tracking | "Start your free trial", company-size picker |

## L4 · What every page gets (dark panel, 5 tabs): "Built to turn a click into a call."

| # | Tab · chip | Headline | Fine print | Mockup |
|---|---|---|---|---|
| 01 | Matches the ad · One page per ad group · Same words · Same offer | They click "installed this week". The page says the same. | A separate page for each advertised service, in customers' words. | Google results for "tesla charger install dallas": Sponsored Volt & Wire ad ("Tesla Charger Installed This Week \| Flat $1,240") above a generic competitor and tesla.com, + matching phone page + toast "Same promise, ad to page" |
| 02 | Forms people finish · 2-step forms · Click to call · Instant booking | A form that feels like a question, not paperwork. | Every lead to CRM, inbox and phone at once. | Phone step 2 ("Where should we text your price?") → thanks page "$1,240" + "Carlos will text you in ~5 min" + install day picker + toast "Lead sent to HubSpot + Carlos · 0.8 s" |
| 03 | Fast on phones · Under 1.5 s on 4G · Core Web Vitals | Loaded before they can tap back. | Faster page raises Quality Score; clicks cost less. | PageSpeed "Passed" + toast "Loads in 1.1 s · was 8.4 s · 23 → 98" |
| 04 | Tested, not guessed · A/B tests · Headlines · Offers · Forms | Two versions, real visitors, a clear winner. | Growth plan: a new test every two weeks. | Experiment "Headline test · EV charger page": Original 4.1% vs "Price + speed" 7.5% (179 leads), 97% confidence, +83% leads same spend, "Make B live →" |
| 05 | Every lead tracked · Google Ads · GA4 · Meta Pixel · CallRail · CRM | Know which ad brought every customer. | Conversions sent back to Google and Meta. | "Where your customers came from": $6,240 spend, 184 leads (71 calls, 113 forms), $34/lead, $118k quoted; by-campaign table; tracking check list ✓ |

## L5 · Honest choice: "Custom page, page builder or your homepage? It depends on what a lead is worth to you."
Lead: if Unbounce suits your team better we'll say so, and can build in it too.

| | **Custom landing page** (recommended) · Next.js or Webflow | Page builder · Unbounce, Leadpages, Instapage | Your homepage · Wix, Squarespace, WordPress | Cheap template · Fiverr, ThemeForest |
|---|---|---|---|---|
| Best for | Ads where each lead is worth $50+ | Marketing teams that build/test themselves | People who already know your name | Live this week |
| Phone speed score | 95–100 | 60–85 | 30–60 | 40–70 |
| Visitors → leads | ●●●●● | ●●● | low | low |
| A/B testing | Built in, we run it | Built in, you run it | — | — |
| Monthly cost | $0–20 hosting | $99–575/mo | Included in plan | $0–20 hosting |
| Edit text yourself | Yes, simple editor | Yes | Yes | Rarely |

## L6 · Process: "About 10 days, step by step." (eyebrow: From first call to live page)
| Step | When | Title | Visual |
|---|---|---|---|
| 01 | Days 1–2 | Ads & offer review | Ad groups reviewed · 1,240 search terms read · competitor pages · offer chosen |
| 02 | Days 2–4 | Words first (you approve every line) | Copy draft 2 "approved", highlighted headline, client comment "Customers always ask about the permit. Keep it." |
| 03 | Days 4–6 | Design for phone and laptop (phone first) | Volt & Wire page frame |
| 04 | Days 6–9 | Build and speed test | `lighthouse /ev-charger --mobile` → Performance 98, SEO 100, LCP 1.1 s, CLS 0.01 |
| 05 | Day 10 | Tracking and launch | Pills: Google Ads, GA4, Meta Pixel, CallRail, HubSpot ✓ |
| 06 | Every 2 weeks | Test and improve | One A/B test at a time |

## L7 · Case study (dark): Apex Auto Works · Phoenix, AZ
- **H3:** Same ad budget. A booked car for $41 instead of $186.
- **Problem:** $5,800/mo on Google Ads, all to the homepage; booking button under a slider and a "Welcome to Apex" paragraph.
- **Built:** five pages (brakes, AC, check-engine light, oil service, fleets) with real-work photos, 2-step booking, text confirmation. Live in 12 days.
- **Metrics:** $41 per booked job (was $186) · 8.7% of visitors book (was 1.6%) · 12 days first call to live
- **Quote:** "Same budget, same ads. We just stopped sending people to the homepage."
- **Mockups:** `apexautoworks.com/brakes` desktop ("Brakes squeaking?", free inspection, "Front pads at 2 mm" photo card) + phone.

## L8 · Pricing: "Fixed price. Agreed before we start."
| Tier | Price (placeholder) | Includes | Time |
|---|---|---|---|
| One offer · Single landing page | from **$1,900** | Ads/offer review, copy written, phone + laptop design, 2-step form or booking, tracking | 7–10 days |
| **Most chosen · Campaign pack** | from **$4,900** | Up to 4 matched pages, call tracking + CRM, text-back under a minute, first A/B test, cost-per-lead report | 2–3 weeks |
| Growth · Test & improve | from **$1,500/mo** | New A/B test every 2 weeks, new pages as you add services, monthly report, works with your ads manager, cancel anytime | Ongoing (for $5k+/mo ad spend) |

**What changes the price:** number of pages · copywriting · Spanish version · booking or payments · CRM integration · custom photos or video.

## L9 · FAQ: "Questions before you build a page."
1. Why not just send ads to my homepage? (focus moves 1–2% → 6–10%)
2. Will you write the words, or do I? (we write; you approve before design)
3. Do you run the ads too? (we do page, tracking, follow-up; work with your ads person or introduce one)
4. Can I change the text or prices myself later? (simple editor)
5. How soon will I see more leads? (first week; 30-day before/after on the same budget)
6. Who owns the page and the domain? (you; $0–20/mo hosting, no lock-in)

## L10 · Often paired with: "Get more from every lead."
SEO · Business automation · AI integration (answers leads at 11 PM) · White-label for agencies. Industries: Home services, Salons & spas, Auto shops, Restaurants, Phone repair, SaaS trials.

## L11 · CTA + footer
"Paying for clicks that don't call? *30 minutes* and we'll show you why." Lead: send the page your ads point to; we'll show what's costing leads "even if you never hire us". Widget: **Free landing page review**.

---

## Consistency with homepage (homepage wins)
Checked against the homepage on 2026-10-07 (prices, timelines, concept-brand facts): no conflicts found. "About 10 days" matches the homepage ("a landing page can be live in under two weeks").

## Open items (this page)
- Real prices; is Growth a retainer the owner wants to offer?
- "We can introduce you to ad managers we trust": confirm the owner has these partners.
- Spanish version is listed as a price factor; confirm it's offered.
- License number "TECL 41822", BBB/Tesla Certified badges are concept content on a concept brand.
