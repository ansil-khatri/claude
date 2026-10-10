# Plan v3 · "Parrot Noir": Shopify / WordPress / custom-theme agency + automation software (Dubai)

Written before any code. Replaces the broad-agency site (v1/v2, last commit `7828915`, still in git history).

## 1. Goal, and what code can and cannot do

**Goal:** a site that (a) ranks for Dubai commerce/web head terms and (b) is cited by ChatGPT, Gemini, Perplexity and Google AI answers, (c) looks like a USD 50k agency site to a brand-side buyer, (d) sells the automation software line (WhatsApp auto-reply, AI assistant, our ERP) to the same audience.

**Honest limit:** no website can guarantee a ranking. Code gives us the *eligibility* (crawlable, fast, one clear page per keyword, schema, answer-first copy, llms.txt, internal links). Rankings and AI citations come from *authority* that only the owner can create off-site: Google Business Profile, Clutch/DesignRush/Shopify Partner listings, real reviews, real case studies, backlinks, PR. Section 9 is that checklist.

## 2. Positioning
- Primary: **the Dubai agency for ambitious Shopify, WordPress and custom-theme stores**, including luxury and enterprise brands.
- Secondary: **software that removes manual work** (WhatsApp auto-reply, AI assistant, ERP instead of Excel).
- Buyer we design for: a head of e-commerce / founder at a well-known brand who will check three things in 20 seconds: taste, proof, and whether we can handle scale. Hence: restrained luxury visual language, large case-study mockups, specifics (stack, process, price ranges), no stock-photo clichés.

## 3. Keyword → URL map (flat, exact-match slugs)

| Primary keyword | URL | Cluster |
|---|---|---|
| best shopify agency in dubai | `/shopify-agency-dubai` | Commerce |
| shopify plus agency dubai | `/shopify-plus-agency-dubai` | Commerce |
| custom theme development in dubai | `/custom-shopify-theme-development-dubai` | Commerce |
| shopify migration dubai | `/shopify-migration-dubai` | Commerce |
| ecommerce website development dubai | `/ecommerce-website-development-dubai` | Commerce |
| luxury ecommerce website design (stores like Louis Vuitton) | `/luxury-ecommerce-website-design-dubai` | Commerce |
| best wordpress agency in dubai | `/wordpress-agency-dubai` | Web |
| custom wordpress theme development dubai | `/custom-wordpress-theme-development-dubai` | Web |
| woocommerce development dubai | `/woocommerce-development-dubai` | Web |
| website design for business dubai | `/website-design-dubai` | Web |
| erp software dubai | `/erp-software-dubai` | Automation |
| whatsapp automation / auto reply dubai | `/whatsapp-automation-dubai` | Automation |
| ai assistant for business dubai | `/ai-assistant-for-business-dubai` | Automation |
| business automation (replace excel) dubai | `/business-automation-dubai` | Automation |

Support pages: `/` · `/work` + `/work/[slug]` (6 concept builds) · `/pricing` · `/process` · `/about` · `/contact` · `/blog` + `/blog/[slug]` (15) · `/tools/shopify-store-cost-calculator` · `/legal/{privacy,terms,cookies}` · `/llms.txt` · `/llms-full.txt` · `/<any page>.md` · `/feed.xml` · `/sitemap.xml` · `/robots.txt`.

One page per keyword. No duplicate pages for the same intent. Every money page links to its sibling pages, to 3 to 4 blog posts, to 1 to 2 case studies, and to pricing/contact.

## 4. Design direction: "Parrot Noir"

**Concept:** a luxury fashion house's lookbook crossed with a developer's terminal. Black stage, one parrot-green signal, editorial type, and visible engineering detail (grid lines, mono spec labels, registration marks). Nothing is decorative without meaning.

- **Palette:** ink `#060606`, coal `#0e0e0f`, graphite `#18181a`, paper `#efeee9` (light sections), parrot `#7CFF35` (signal on black; on paper it is only ever a highlighter behind black text), parrot-deep `#2f9a0a` for text on paper. Hairlines at 12% white/black. No gradients except the parrot glow field and still-life lighting.
- **Type:** display **Bricolage Grotesque** (variable, tight, characterful, not Inter/Space Grotesk), body **Geist**, mono **Geist Mono**, and **Instrument Serif** only *inside luxury mockups* (that is the voice of the brands we build for). Display sizes 80 to 190px on desktop.
- **Layout language:** 12-column grid with visible rule lines; asymmetric splits; oversized numerals; captions in mono; section index `01 / 09`; full-bleed black with paper "chapters"; no uniform rounded-card grids (hairline rows and bento with mixed spans instead).
- **2026 market patterns used on purpose:** kinetic/masked type, WebGL light field, scroll-driven product tours, bento proof grid, marquee client/tech strip, cursor-aware elements, page transitions, grain, dark-first with light "paper" interludes.
- **Anti-AI-look rules:** no emoji, no blob gradients, no purple, no identical 3-card rows, no stock icons, no fake avatars. Copy is specific (stack names, AED ranges, timelines). Mockups are built from real UI patterns with real data, not generic wireframes.

### Signature moments (what a visitor remembers)
1. **Hero:** masked kinetic headline over a parrot light field that follows the cursor; a live Dubai clock; the services cycle (Shopify / WordPress / Custom themes / ERP) in a rolling word.
2. **Scroll-driven store tour (home):** a pinned device shows a luxury storefront; scrolling walks it Home → Collection → Product → Cart → Checkout, with parrot annotation callouts naming the design decision (not invented stats).
3. **Blueprint → build scrub:** wireframe layer slides away to reveal the finished design (transform-only, no clip-path scrub).
4. **Bento proof wall:** mixed-span tiles: store mockups, theme-code editor, Shopify admin, speed report, ERP dashboard, WhatsApp auto-reply.
5. **Horizontal case-study rail**, stacked service cards, count-up facts, magnetic CTAs, curtain page transitions, custom cursor with labels.

### Mockup art direction (must not look generated)
- **Still-life product library (SVG, lit, grained):** perfume flacon, watch dial, handbag, signet ring/earring, folded abaya fabric. Soft key light, contact shadow, film grain, brand-specific backdrop. Used in store mockups instead of gradient blobs.
- **Store mocks (1440 / 390):** luxury home, collection, PDP, cart drawer, mobile checkout with Apple Pay / Tabby, Arabic RTL variant.
- **Platform mocks:** Shopify admin theme editor, Liquid/JSON code editor with real snippets, WordPress block editor + ACF fields, PageSpeed report, Search Console chart, migration redirect map.
- **Software mocks:** ERP (orders, stock, invoices with VAT 5%), WhatsApp inbox with auto-reply + human hand-off, AI assistant answering from catalogue.
- Concept builds are always labelled **"Concept build, not a client"**. Never claim clients, awards, rankings or partnerships we do not have.

## 5. Architecture
- Next.js 16 App Router, TypeScript, static generation for every page, no client-side data fetching.
- Reuse: motion engine (`Motion.tsx`: GSAP, ScrollTrigger, SplitText, Lenis), scenes (GlowCanvas, PinnedChapters, StackCards), `meta()`, JSON-LD helpers, llms/markdown/OG routes, Booking/lead endpoint, consent-gated GA4, links/audit scripts.
- Replace: design system CSS (one clean `src/styles/*` set, no layered legacy), page templates, content layer (typed `MoneyPage`, `Post`, `Case`), mockup library.
- Archive (kept in repo, not routed or in sitemap): the 61-guide archive, industry/solution/Abu Dhabi/Arabic prototype content.
- Content schema: `MoneyPage { slug, keyword, title, desc, h1[2], kicker, answer, facts[], sections[], proof[], faq[], related[], posts[], cases[] }` with a typed `Section` union (`split`, `bento`, `process`, `compare`, `stack`, `pricing`, `quote`, `numbers`) so the template renders any page from data.

## 6. SEO / GEO spec
- **Per page:** unique title (≤ 60), meta description (120 to 158), one H1 containing the primary keyword, canonical, OG/Twitter image (generated, parrot-noir), `hreflang en-AE` + `x-default`, breadcrumbs (UI + JSON-LD).
- **Schema (JSON-LD):** `Organization` (+ `ProfessionalService`, `areaServed` Dubai/UAE, no fake address or rating), `WebSite`, `WebPage`, `Service` per money page (`serviceType`, `provider`, `areaServed`, `offers` with AED price ranges), `FAQPage` where FAQs exist, `BreadcrumbList`, `Article` + `Person` author for posts, `ItemList` for blog and work hubs, `WebApplication` for the calculator, `CollectionPage`.
- **Answer-first copy:** every money page opens with a 40 to 60 word answer block, a facts strip (price from, time, stack), a comparison table, an FAQ. This is what AI answers lift.
- **AI crawl:** `robots.txt` allows search + AI bots (Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, GPTBot, PerplexityBot, ClaudeBot, Google-Extended, Applebot), `/llms.txt` + `/llms-full.txt` generated from content, `.md` twin of every page, clean semantic HTML, no content that needs JS to exist (the motion layer only animates server-rendered HTML).
- **Technical:** sitemap with real `lastmod`, RSS `/feed.xml`, IndexNow script, 404 with links, `noindex` on thank-you states, Core Web Vitals budget (LCP < 2.5 s mobile, CLS < 0.05), preloaded display font, no layout shift from mockups (`aspect-ratio` boxes).
- **Internal linking:** hub-and-spoke. Each blog post links up to its pillar money page and sideways to 2 posts; each money page links down to its posts and across to siblings; footer carries all 14 money pages.

## 7. Content plan
**14 money pages**, each 1,400 to 2,200 words: hero, answer block, facts, what we build (split sections with mockups), process with timeline, stack, comparison table, pricing in AED, FAQ (6 to 8), related, CTA.

**15 blog posts (3 clusters; 5 reused from the existing guides and edited, 10 new):**
- *Shopify cluster (pillar: "How to choose a Shopify agency in Dubai")*: Shopify store cost UAE (reuse) · Custom theme vs premium theme (new) · Shopify vs Shopify Plus in the UAE (new) · Shopify vs Salla vs WooCommerce (reuse) · Tabby and Tamara on Shopify (reuse) · Arabic Shopify store (reuse) · Migrating to Shopify without losing SEO (new).
- *Web / WordPress cluster (pillar: "WordPress vs Shopify for a Dubai business")*: Website cost in Dubai (reuse) · Ecommerce SEO in Dubai (new) · Headless commerce: do you need it? (new).
- *Luxury + automation cluster*: Luxury e-commerce website design (new) · ERP vs Excel for a UAE business (new) · WhatsApp auto-reply for business (new).
(Exact list in `content/posts/`.)

**6 concept builds** (clearly labelled): luxury leather goods (Shopify Plus custom theme), perfume house (Arabic RTL + Tabby), modest fashion (WooCommerce → Shopify migration), watches and jewellery (headless), corporate services (WordPress custom theme), trading company (ERP + WhatsApp + AI assistant).

**Prices (from the owner-approved AED price book):** Shopify launch 9,900 · custom theme 29,000 · Plus / headless 69,000+ · WordPress 7,900 / 19,900 / 44,000 · WooCommerce store 44,000 · WhatsApp + AI 2,900 / 29,000 / 59,000 · automation 7,900 · operations system 59,000 · ERP 150,000+ · care from 790/month. All exclude 5% VAT.

## 8. Build phases (this session)
1. **Foundation:** fonts, tokens, base CSS, layout shell (nav, footer, loader, curtain), motion engine tuned to parrot, SEO libs.
2. **Mockup library:** still-life SVGs, store/PDP/cart, Shopify admin, code editor, WordPress editor, ERP, WhatsApp, AI assistant, reports.
3. **Home page** and the **money-page template**, **blog**, **work**, **pricing/process/about/contact** templates.
4. **Content (parallel agents):** 14 money pages, 10 new posts, 6 cases, about/process/pricing/FAQ copy.
5. **SEO layer:** schema, sitemap, llms, md, feed, OG, audits.
6. **QA:** screenshots at 8+ scroll positions on desktop and mobile, reduced motion, no-JS, Lighthouse-style checks, link audit, schema validation, `npm run build`.
7. **Docs:** README (deploy, env, content editing), launch + off-site checklist.

**Definition of done:** `npm run build` passes; every page has one H1, canonical, JSON-LD, OG image, appears in sitemap and llms files; link audit and crawl clean at 1440 and 390; no horizontal scroll; motion works and degrades; all prices from the price book; every concept build labelled.

## 9. Off-site checklist (the part that actually earns rankings; owner action)
Google Business Profile (needs a real address or service-area setup) · Shopify Partner directory + Plus partner application · Clutch, DesignRush, Sortlist, GoodFirms profiles and 15+ real reviews · LinkedIn company page · 3 to 5 real case studies with logos and permission · guest posts and roundup inclusions ("best Shopify agencies in Dubai" lists) · local PR (Gulf News / Arabian Business tech mentions) · Search Console + Bing Webmaster + IndexNow · monthly AI-prompt log (does ChatGPT/Perplexity name us for "best Shopify agency in Dubai"?).

## 10. Owner inputs needed
Brand name and domain · real WhatsApp number, licence number, address · founder bio and photo · any real client work (logos, screenshots, quotes) to replace concept builds · confirm prices · confirm we may name platforms ("Shopify Partner", "Plus") only once actually enrolled.
