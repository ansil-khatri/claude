# 06 · Authority and AI crawlers (UAE)

## How "best agency" actually gets decided
Google ranks agency queries on topical relevance (our pages), links and brand mentions (other sites), review signals (Google Business Profile, Clutch, Shopify directory) and user behaviour. AI assistants answer "best agency in Dubai" by quoting lists and directories they trust, so being **named on the pages they read** matters more than being on ours. Each item below is an owner action; none can be done in code.

### Off-site checklist, in priority order
| # | Action | Why | When |
|---|---|---|---|
| 1 | **Google Business Profile** (needs a real, verifiable Dubai address or service-area setup that Google accepts) | Maps pack, brand panel, reviews | Week 1 |
| 2 | **Shopify Partner Program** account and public directory profile; apply for services listing | The neutral list buyers and AI use for Shopify agencies; reviews live here | Week 1 |
| 3 | **Clutch, DesignRush, GoodFirms** profiles; ask the first 3 clients for verified reviews | Listicles and AI cite them | Week 2 |
| 4 | LinkedIn company page + founder profile with the same name, address, phone | Entity consistency | Week 1 |
| 5 | Consistent **NAP** (name, address, phone) on all listings and on the site | Local trust | Ongoing |
| 6 | Local business directories and Dubai/UAE startup lists | Citations | Week 3 |
| 7 | Honest **Quora** answers (with disclosure) on the live threads: best e-commerce web design Dubai, affordable web development Dubai, which company provides software and web design ([example](https://www.quora.com/Which-is-the-best-e-commerce-web-design-company-in-Dubai-UAE)) | These threads rank and are read by AI | Week 4 onward |
| 8 | Reddit: answer, do not sell, in r/dubai, r/UAE, r/shopify, r/ecommerce; disclose affiliation | Reddit is heavily used by AI answers; spam gets banned | Week 6 onward |
| 9 | Guest articles and data stories to Gulf business media (Wave 4) | Links with authority | Month 4+ |
| 10 | Podcast/event appearances (Dubai e-commerce meetups, Shopify events) | Mentions and links | Month 3+ |
| 11 | Partner pages: payment (Tabby, Tamara, Telr, Network International), WhatsApp BSP, Zoho/Odoo partner programmes if eligible | Partner directories link out | Month 3+ |

### Reviews policy
Ask every client for a Google and a Clutch review within 7 days of launch. Never buy, incentivise-with-discount, write or gate reviews. UAE consumer-protection and advertising rules apply to fake or paid-for reviews, and Google and Clutch remove them. Do not add `AggregateRating` schema until real reviews are visible on the page.

### Proof replacement plan
Concept builds stay labelled until each is replaced. Fast path: offer two or three early clients a discounted launch in exchange for a named case study and review (written agreement, disclosed on the case page). Replace case pages one by one; keep concept builds as "Studio concepts".

## AI crawler and answer-engine plan (technical part is already built)
Built: `robots.ts` allows Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, GPTBot, PerplexityBot, ClaudeBot, Claude-SearchBot, Google-Extended, Applebot; `/llms.txt` and `/llms-full.txt`; `.md` twin of every page; sitemap, RSS, JSON-LD; answer boxes on money pages.
To add:
1. **llms.txt structure:** a 2-line identity, then sections in this order: *Services (with AED from-prices)*, *Industries*, *Pricing*, *How we work*, *Guides (by cluster)*, *Tools*, *Contact*. One line per URL: `[Title](url): what it answers in one sentence`. Regenerated from the content registry on build so it never drifts (already the case; extend for new page types).
2. **Facts block on `/about`** as plain text: legal name, trade licence, address, founded, services, languages, price range, contact, `sameAs` list. AI models reuse such blocks.
3. **Quotable answers:** keep each answer box self-contained, 40 to 60 words, with the number and the condition ("from AED 9,900, 3 to 4 weeks, excl. 5% VAT").
4. **Dated comparison tables** (Shopify vs WordPress for the UAE; price ranges) with "Checked October 2026".
5. **Semantic HTML:** real tables, lists, `<time>`, one H1, descriptive anchors; no content only inside JS tabs.
6. **No gating** of pricing or key answers behind forms or modals.
7. **IndexNow** ping on publish (script exists), Bing Webmaster Tools verified.

### AI visibility test (monthly, 30 minutes)
Run these in ChatGPT, Perplexity, Gemini and Google AI Overviews; log whether we are named, linked, or a competitor is:
1. best shopify agency in dubai · 2. who builds shopify stores for luxury brands in the uae · 3. shopify or wordpress for my small business in dubai · 4. how much does a website cost in dubai · 5. whatsapp auto reply for my business uae · 6. best erp for a small business in dubai · 7. how do i stop using excel for my business uae · 8. who can migrate my woocommerce store to shopify in dubai · 9. do i need a trade licence to sell online in dubai · 10. best agency for arabic and english ecommerce website uae.
Track: mention count, cited URL, sentiment. Expect zero for 3 to 6 months; the goal is a rising trend, then first citation on long-tail prompts.

## Risks and how we handle them
| Risk | Control |
|---|---|
| Rankings take longer than expected | Track weekly impressions; judge on leading indicators (impressions, queries, positions 8 to 20) in months 1 to 3 |
| Competitors out-review us | Reviews first; ask every client; directory profiles in week 1 to 2 |
| Thin or duplicated industry pages | Each needs distinct problems, mockups, FAQs; noindex until ready |
| AI summarises us wrongly | Fact block, dated tables, consistent NAP; correct via the cited sources |
| Claims we cannot prove | Concept labels, no superlatives, no invented numbers |
