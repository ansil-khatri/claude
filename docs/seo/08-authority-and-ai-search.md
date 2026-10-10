# 08 · Authority, "best agency" and AI search (ChatGPT, Perplexity, Gemini, AI Overviews)

## 1. How "best agency in the USA" actually gets decided

When someone asks Google "best app development company for small business" or asks ChatGPT "who can build an ordering app for my restaurant?", the answer isn't decided by our own pages. It comes from:

1. **What other sites say about us**: review platforms (Clutch is one of the most-cited third-party domains in AI answers about agencies), "best X agencies" lists, partner directories, press, Reddit threads and YouTube.
2. **How clearly our own site states the facts**: what we do, for whom, where, for how much, with proof. AI systems quote clear, specific, crawlable text.
3. **Brand searches**: people searching "[Brand] reviews" or "[Brand] pricing" tells Google we're a real, known business.

AI answers change on almost every run (studies find recommendation lists rarely repeat exactly), so the goal is to be **mentioned often across many sources**, not to "rank #1 in ChatGPT".

## 2. Our site's part (already covered in 04/07)

- "In plain English" fact block on every page, prices in text, FAQ in people's words.
- Organization schema with `sameAs` links to every profile below, so Google and AI connect them as one entity.
- An `/about` page with real people (names, photos, LinkedIn, experience), and author pages for guide writers.
- Consistent brand facts everywhere: the same one-line description, the same "from" prices, the same service list. Inconsistency confuses models.
- `/llms.txt`, `/llms-full.txt`, `.md` pages (drafts in `llms/`). **Honest note:** 2026 log studies show most AI crawlers rarely fetch llms.txt, and Google has said its search doesn't use it. It costs an hour and does no harm, so we ship it, but it's not the strategy.

## 3. Off-site plan, in priority order

### Month 0–2: profiles where buyers and AI already look
| Where | Why | Action |
|---|---|---|
| **Clutch** (+ The Manifest, same group) | Most-cited agency source in AI answers; buyers filter by it | Full profile, portfolio, pricing ($/h band, min project $990–3,900), then **collect 10+ verified client reviews** (Clutch interviews clients). This is the #1 off-site task. |
| GoodFirms, DesignRush, UpCity, Sortlist | Feed "best agencies" lists | Complete profiles with the same facts |
| **Shopify Partner Directory** | Merchants hire straight from it | Become a Shopify Partner, list services, collect directory reviews |
| **Platform expert/partner directories** | Buyers with intent | Stripe Partner directory, Zapier Experts, Make partners, n8n experts list, Supabase partners; check whether Lovable/Bolt/Replit run expert or agency programs (perfect for vibe rescue) |
| LinkedIn company page + founders' profiles | Entity + agency audience | Same description, weekly posts |
| Crunchbase, Google (Knowledge Panel later), Wikidata (once notable) | Entity signals | Basic profiles |
| GitHub org | Credibility with founders/agencies | Publish small open-source helpers (e.g. Supabase RLS checker) that link back |

### Month 2–6: earned mentions
- **"Best agencies" lists:** many "Top 10 Shopify agencies / app developers for small business" articles accept submissions or update yearly. Pitch with Clutch rating + a specific niche ("best for restaurants", "best for fixing AI-built apps"). Listicles are reported as the single largest share of AI citations.
- **Industry media and associations** (where non-technical owners read): restaurant (Restaurant Business, Modern Restaurant Management, state restaurant associations), salon (Modern Salon, Salon Today, Professional Beauty Association), laundry (Coin Laundry Association, American Coin-Op, Drycleaning & Laundry Institute), auto repair (Ratchet+Wrench, Auto Care Association), trades (Contracting Business, PHCC, ACCA), phone repair (RepairDesk/iFixit communities). Offer guest articles built from our guides ("What delivery apps really cost a 60-seat restaurant").
- **Expert quotes:** Qwoted, Featured.com and similar journalist-request services: answer small-business tech questions with real numbers.
- **Podcasts:** small-business, Shopify, restaurant-owner and trades podcasts. One a month.
- **Original data (Wave 4 in `05`):** "We audited 50 AI-built apps: here's what was broken" will get picked up by tech press and newsletters, and it makes us the reference for vibe-code rescue.

### Ongoing: community (as real people)
Team members answer questions in r/smallbusiness, r/shopify, r/lovable, r/vibecoding, r/restaurantowners, r/sweatystartup, r/agency and on Quora, under their own names, with real help first. Link to a guide only when it truly answers the question. **No fake accounts, no planted "has anyone used [Brand]?" posts.** Reddit bans it, users expose it, and it'd poison the brand in exactly the threads AI quotes.

## 4. Tracking AI visibility (monthly)

Run these prompts 5× each in ChatGPT (search on), Perplexity, Gemini, Claude and Google AI Mode; log whether we're mentioned, cited (linked), and which source was used:

- "best company to build an app for my small business in the US"
- "who can build a commission-free ordering app for my restaurant"
- "how much does it cost to build an app for a salon"
- "someone to fix my Lovable app before launch"
- "white label web development partner for agencies"
- "AI answering service for plumbers that books jobs"
- "custom software to replace spreadsheets for a laundry business"
- "Shopify developer to migrate from WooCommerce without losing SEO"
- "[Brand] reviews" / "[Brand] pricing" (does the answer match our facts?)

Free to do by hand; paid trackers exist once there's budget. Track share of mentions over time, not single results.

## 5. Proof and the law: must be fixed before launch ⚠️

The mockups use concept brands with specific results ("+212% online orders", "Peak Plumbing: $383 → $34 per lead", quotes from "Sophie", ★4.9 ratings). That's fine for a design review. **On the live site, presenting them as real clients would be fake testimonials.** The US FTC's rule on fake reviews and testimonials (in force since late 2024) allows civil penalties per violation, and Google treats it as deceptive content.

Before launch, each one must be either:
1. **Replaced** with a real client's result, with written permission; or
2. **Clearly labeled** as an example: "Example project · illustrative numbers" on mockups and case-study sections, with no fake client quotes or star ratings presented as reviews.

Real case studies (even 2–3 small ones) beat 10 polished fakes for SEO, for AI trust and for the owner's "$50k agency" bar. Start collecting them now: every project gets a before/after, 3 numbers and a quote with permission.

## 6. E-E-A-T checklist for a remote studio

- [ ] Real founder(s) with photo, bio, LinkedIn, years of experience, past companies/projects.
- [ ] "Where we work from" stated plainly, plus US working hours, US phone, response time.
- [ ] Legal entity name and registered address (US LLC if formed) in the footer and `/legal/terms`.
- [ ] Real client logos only with permission.
- [ ] Contract basics public: fixed price, code ownership, NDA, payment terms, what happens if we're late.
- [ ] Every guide: named author, "reviewed by", date updated, sources linked for any statistic.
- [ ] Clutch badge and review count shown once real.
