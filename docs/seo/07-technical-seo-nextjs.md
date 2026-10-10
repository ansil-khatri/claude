# 07 · Technical SEO for the Next.js build

Stack (from the main spec): Next.js App Router, TypeScript, Tailwind v4, next-intl (`messages/en.json`, `ar.json` later), GSAP + ScrollTrigger, Lenis, `next/image`. This file lists what the build must do for SEO. Add each item to the implementation plan.

## 1. Rendering: all copy in the first HTML response

- Every page is a **Server Component** and statically generated (`generateStaticParams` for services, industries, solution pages, guides). No page copy rendered only on the client.
- GSAP/Lenis/cursor code lives in small client components that **animate existing server-rendered HTML**. Never create text in JS (the mockups today generate HTML in `<script>`; in Next.js those become server components).
- Hidden tabs (section 4 "What it can do", showcase tabs, FAQ answers) must be **in the HTML** and hidden with CSS/`hidden` + `aria`, not mounted on click. Google indexes content in tabs if it's in the DOM.
- Footer "revealed from under the page": the links must be real `<a href>` in the HTML.
- **Test:** `curl -s https://site/services/seo | grep "How much does local SEO cost"` must find it. Add this as a CI check for every page's H1 and pricing H2.

## 2. Metadata (one helper, fed from messages)

```ts
// lib/seo.ts
export function pageMetadata({ key, path }: { key: string; path: string }): Metadata {
  const t = getTranslations(key)          // messages/en.json → seo.<key>.title / .description
  const url = `${site.url}${path}`
  return {
    title: t('title'),                    // template: '%s · {brand}' set in root layout
    description: t('description'),
    alternates: { canonical: url, languages: { en: url, 'x-default': url } }, // add 'ar' later
    openGraph: { url, title: t('title'), description: t('description'), type: 'website',
                 images: [`${url}/opengraph-image`] },
    twitter: { card: 'summary_large_image' },
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  }
}
```

- Titles and descriptions live in `messages/en.json` under `seo.<page>` (from `04-on-page-seo.md`), so Arabic gets its own later.
- Brand name comes from `site.config.ts → brand.name` via `{brand}`.
- **Canonical:** absolute, no trailing slash (`trailingSlash: false`), lowercase, no query strings. Redirect `www` → apex (or the reverse) and `http` → `https` at the host.
- **OG images:** `opengraph-image.tsx` per route using `next/og`: dark panel, lime accent, page H1. Every shared link looks premium.

## 3. Structured data (JSON-LD)

One `<JsonLd>` server component. Schemas per page type:

| Page | Schema |
|---|---|
| Root layout | `Organization` (name, url, logo, sameAs, contactPoint, `areaServed: {"@type":"Country","name":"United States"}`, `knowsAbout`), `WebSite` |
| Service pages | `Service` (serviceType, provider → Organization `@id`, areaServed US, `offers: AggregateOffer` with lowPrice/priceCurrency USD), `BreadcrumbList`, `FAQPage` |
| Industry / solution pages | `Service` with `audience: BusinessAudience`, `BreadcrumbList`, `FAQPage` |
| /pricing | `OfferCatalog` with each Service + Offer |
| Guides | `Article` (headline, author `Person` with url, datePublished, dateModified, image), `BreadcrumbList`, optional `FAQPage`, `VideoObject` if video |
| Tools | `WebApplication` (applicationCategory BusinessApplication, offers price 0) |
| About | `AboutPage` + `Person` for each founder (sameAs LinkedIn) |
| Case studies (real only) | `Article` + `Review` only if the client actually wrote it |

Rules: never mark up reviews/ratings we don't have; no `AggregateRating` on our own Organization (Google ignores self-serving review stars and it risks a manual action). Note that Google shows FAQ rich results only for government/health sites now, but FAQPage markup still helps AI systems parse Q&A, so keep it. Validate every template in Google's Rich Results Test and validator.schema.org in CI.

## 4. Sitemaps, robots, AI crawlers

- `app/sitemap.ts`: generate from the same route registry as navigation (services, industries, solution pages, guides, tools, static pages) with real `lastModified` from content dates. Split into `sitemap-pages.xml` and `sitemap-guides.xml` once guides > 100.
- `app/robots.ts`:

```ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/book/confirm'] },
      // Search + AI answer engines: explicitly allowed (we WANT to be cited)
      { userAgent: ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'ChatGPT-User', 'GPTBot',
                    'PerplexityBot', 'Perplexity-User', 'ClaudeBot', 'Claude-SearchBot',
                    'Claude-User', 'Google-Extended', 'Applebot', 'Applebot-Extended',
                    'DuckAssistBot', 'meta-externalagent'], allow: '/' },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
```

  We allow training crawlers (GPTBot, Google-Extended, ClaudeBot, Applebot-Extended) on purpose: a marketing site wants models to know the brand. Owner can opt out later.
- **Check the host/CDN too:** Cloudflare and Vercel firewalls can block AI bots by default. Confirm in the dashboard that "Block AI bots" is **off**.
- **Bing Webmaster Tools + IndexNow:** ChatGPT search and Copilot lean on Bing's index. Verify the site in Bing, submit the sitemap, and ping IndexNow on every publish (a route handler that posts changed URLs).
- **Google Search Console:** verify the domain property, submit the sitemap, request indexing for the 20 money pages at launch.

## 5. `llms.txt`, `llms-full.txt` and `.md` pages

- Serve `/llms.txt` and `/llms-full.txt` from route handlers (`app/llms.txt/route.ts`) that **build the text from `messages/en.json` and the price config**, so they never drift from the site. Drafts in `docs/seo/llms/`.
- **Markdown copy of every page:** `app/[...slug].md/route.ts` (or a rewrite `/:path*.md` → `/api/md/:path*`) returns that page's copy as clean Markdown (H1, plain-English block, sections, prices, FAQ). Add `<link rel="alternate" type="text/markdown" href="/services/seo.md">` in the head. AI agents and coding assistants fetch these. Cost: one serializer.
- Honest expectation (see `08`): these are cheap insurance. What actually gets us cited is crawlable HTML, clear facts and mentions on other sites.

## 6. Core Web Vitals with heavy motion

The design is motion-rich; Google measures real-user speed. Targets on a mid-range phone over 4G: **LCP < 2.5 s, INP < 200 ms, CLS < 0.1**.

- **LCP:** the hero H1 is the LCP element on most pages. It must paint without waiting for GSAP. The word-by-word reveal starts from the visible state or uses CSS so the first paint has the text. Never `opacity:0` on the H1 until JS loads.
- **JS budget:** load GSAP/ScrollTrigger/Lenis with `next/dynamic` after hydration and only on pages that use them; the custom cursor only on `(pointer: fine)` devices. Target < 150 KB JS on first load for service pages.
- **Mockups:** they're big DOM trees (1280 px sites scaled down). Render below-the-fold mockups with `content-visibility: auto` and `contain-intrinsic-size`; lazy-mount tab panels' heavy mockups on first open (but keep their **text** in the HTML).
- **Images:** `next/image` with explicit sizes, AVIF/WebP, `priority` only on the hero image. Replace Unsplash hotlinks with self-hosted licensed images before launch.
- **Fonts:** `next/font` for Plus Jakarta Sans, Instrument Serif and JetBrains Mono, subset Latin, `display: swap`, preload only the H1 weight.
- **CLS:** reserve space for every scaled mockup (`aspect-ratio`), floating nav doesn't shift content, footer reveal doesn't change layout height.
- **Lenis:** turn off on touch devices and `prefers-reduced-motion`; native scroll there is better for INP.
- Monitor with Vercel Speed Insights or the CrUX report in Search Console; check monthly.

## 7. i18n readiness (Arabic later)

- Default locale `en` without prefix (`/services/seo`); Arabic at `/ar/...` with `dir="rtl"`.
- When `ar` ships: `alternates.languages` gets `ar` + `x-default`, a separate `sitemap` entries per locale, translated slugs optional (keep English slugs at first; it's fine).
- Arabic targets UAE/GCC buyers: separate keyword research then. Don't machine-translate the SEO copy.

## 8. Hygiene

- Custom 404 with links to services, industries, pricing and search. Return a real 404 status.
- `redirects()` in `next.config.ts` for any URL that changes (301). Never chain redirects.
- Build-time link checker (e.g. `linkinator` against the static export in CI): fails on broken internal links.
- One H1 per page lint (a simple test over the built HTML).
- `noindex` on thank-you/booking-confirmation pages, internal search results and any filtered guide listings with query strings.
- Analytics: GA4 + Search Console linked; events `book_call_click`, `booking_completed`, `calculator_completed`, `pricing_view`, `phone_click`, `email_click`. Mark `booking_completed` as the key conversion. Respect consent (US: a simple banner is enough; CCPA "Do not sell" link in the footer).
- Security headers and HTTPS everywhere (HSTS). A secure site is a trust signal and the SEO page claims it.

## 9. Launch checklist

- [ ] Every page passes: unique title/meta, one H1 with kicker, canonical, OG image, breadcrumbs + schema, no console errors.
- [ ] `curl` test finds H1, plain-English block, pricing H2 and FAQ text in raw HTML.
- [ ] sitemap.xml lists every indexable page; robots.txt allows search + AI bots; CDN bot-blocking off.
- [ ] GSC + Bing verified, sitemaps submitted, IndexNow working.
- [ ] Lighthouse mobile ≥ 90 performance on homepage, one service, one industry, one guide; CrUX checked after 28 days.
- [ ] Concept brands, fake metrics and placeholder reviews either replaced with real ones or clearly labeled "Example project" (see `08` §5: legal risk).
- [ ] `/llms.txt`, `/llms-full.txt` and `.md` routes return 200 with current prices.
