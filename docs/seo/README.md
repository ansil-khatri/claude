# SEO & content plan · overview (US, phase 2)

> **Status 2026-10-09:** the launch market changed to Dubai + UAE. The active plan is `docs/seo-uae/README.md`. This US plan stays valid for the later US launch at `/us/` on the same domain.

Written 2026-10-09 for the Next.js build of the agency site. Goal: when a US business owner (technical or not) searches for help with an app, website, store, payments, AI or automation, or asks an AI assistant for an agency, they find us and book a call.

## Files

| File | What's in it |
|---|---|
| [01-keyword-research.md](01-keyword-research.md) | ~180 keywords in 17 clusters, intent, est. volume band, competition, owner page, priority. Non-technical phrasing first. |
| [02-site-architecture.md](02-site-architecture.md) | Full URL map, hubs, 8 new solution pages, `/pricing`, `/guides`, `/tools`, and the honest "whole USA" plan (no city doorway pages) |
| [03-internal-linking.md](03-internal-linking.md) | Linking rules, service↔industry matrix, clusters, anchors, maintenance |
| [04-on-page-seo.md](04-on-page-seo.md) | H1 kicker fix, page-by-page title/meta/H1/schema/FAQ for all 18 pages + new pages |
| [05-content-plan.md](05-content-plan.md) | Writing rules, brief template, 4 publishing waves (~60 guides), 5 calculators |
| [06-pricing.md](06-pricing.md) | Market benchmarks, price book with typical totals, care plans, payment terms, 3 owner decisions |
| [07-technical-seo-nextjs.md](07-technical-seo-nextjs.md) | Rendering, metadata, schema, sitemap/robots/AI bots, llms.txt + .md routes, Core Web Vitals with GSAP, launch checklist |
| [08-authority-and-ai-search.md](08-authority-and-ai-search.md) | How "best agency" is decided, Clutch/directories/press plan, AI visibility tracking, **fake-proof legal fix** |
| [09-location-pages.md](09-location-pages.md) | **Revised after the Lumina review:** USA-first service titles, 24 controlled city pages (6 metros × Shopify/apps/software), how to beat thin city pages, the authority stack that makes them rank, and the "where is home?" decision |
| [llms/llms.txt](llms/llms.txt), [llms/llms-full.txt](llms/llms-full.txt) | Drafts for `/llms.txt` and `/llms-full.txt` (`[Brand]`, `[domain]`, `[email]` placeholders) |

## The strategy in 7 lines

1. **Win the non-technical owner.** They search their situation ("doordash fees", "customers want an app", "fix my lovable app"), not stacks. Industry pages, 8 new solution pages and problem-led guides target that.
2. **Win "how much does it cost".** Cost pillars + a public `/pricing` page with our real numbers. Highest-converting content there is, and AI answers love quotable prices.
3. **Take the easy category first: AI-built app rescue.** New, low competition, urgent buyers. Rank in weeks.
4. **USA first, then controlled city pages.** Service pages target the country ("Shopify agency for US brands"). Then 24 city pages (6 metros × Shopify/apps/software), each with real city-specific content, plus the reviews and directory profiles that make Lumina rank in Dubai. No fake addresses; the Maps pack stays out of reach without a real US office.
5. **Every page states facts plainly** (H1 kicker, a plain-English block, prices in text, FAQ in customers' words, schema), so Google and AI can quote us.
6. **"Best agency" is earned off-site:** Clutch reviews, partner directories (Shopify, Stripe, Zapier), "best agencies" lists, industry media, honest community help.
7. **Real proof before launch.** Concept brands and invented results must become real case studies or be labeled "Example". It's an FTC rule and a trust issue.

## 12-month roadmap

| When | Do | Outcome to expect |
|---|---|---|
| **Before launch** | Apply `04` to all 18 pages (kicker, plain-English blocks, H2s, FAQs); build `/services`, `/industries`, `/pricing`, `/about`, `/process`, `/contact`; technical checklist in `07`; label or replace concept proof; Clutch + directory profiles live | Clean, indexable site |
| **Month 1–2** | Wave 1 guides (16), 3 calculators, the first 4 solution pages, GSC + Bing + IndexNow, first Clutch reviews | Rescue + long-tail keywords start ranking; first organic leads from L/E keywords |
| **Month 3–4** | Wave 1 city pages (6 hubs + 18 city × service), Wave 2 guides (16), remaining 4 solution pages, listicle/directory outreach, 2 industry guest posts | Cost guides reach page 1–2; AI mentions for niche prompts |
| **Month 5–8** | Wave 3 (24), technology pages, first real case studies on `/work`, podcasts | Industry + solution pages on page 1 for M keywords |
| **Month 9–12** | Wave 4 original data studies, refresh cost guides with real numbers, real city pages where we have ≥2 clients | Press links, brand searches growing, appearing in "best agency" lists and AI answers |

## What to measure (monthly)

- Booked calls from organic search and AI referrals (GA4 key event `booking_completed`; referrers `chatgpt.com`, `perplexity.ai`, `gemini.google.com`, `copilot.microsoft.com`).
- Search Console: clicks and average position for each money page; queries per page (watch for new phrasing to add to FAQs).
- Number of P1 keywords in the top 10.
- AI visibility prompt log (`08` §4).
- Clutch reviews count, referring domains, brand searches.
- Core Web Vitals pass rate.

## Open decisions for the owner

1. **Brand name and domain.** Everything SEO-related waits on this. Pick a short `.com` that isn't a keyword stuffed name (e.g. not "best-usa-app-developers.com"); brand searches matter more.
2. **Pricing decisions** in `06` §3 (mobile app entry price, rescue typical range, white-label team price).
3. **Real proof:** which concept results can we replace with real clients? Who are the first 5 clients to ask for Clutch reviews?
4. **Legal entity:** US LLC (registered address, US phone) or not. Affects trust copy, not rankings directly.
5. **Who writes:** a named author for guides (owner or a team lead) with a bio page. AI drafts are OK, but the human adds the real experience.
6. **Where is "home"?** If anyone on the team is in a US city, that city becomes our Lumina-style home market (real address, Google profile, Clutch location). See `09` §8.
7. `/agencies` vs `/services/white-label` route (this plan assumes `/agencies`).

## Research notes and limits

- Reddit blocks automated access, so forum phrasing comes from Quora, marketplace briefs and public write-ups. Each article brief includes a 10-minute manual Reddit pass.
- Search volumes are **estimated bands**. Validate in Google Keyword Planner/Ahrefs before writing each page (checklist in `01` §Q).
- Market prices come from 2025–2026 agency guides and Clutch surveys. Many are vendor-published, so they're used as ranges, not exact figures.
