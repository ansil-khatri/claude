# 07 · Technical SEO for the Next.js build (UAE, bilingual)

Stack: Next.js App Router, TypeScript, Tailwind v4, next-intl, GSAP + ScrollTrigger, Lenis, `next/image`. This file stands on its own for the UAE build.

## 1. Rendering

- All pages are Server Components, statically generated. No copy created on the client.
- GSAP/Lenis/cursor only animate server-rendered HTML. The H1 must be visible in the first paint (no `opacity:0` waiting for JS).
- Tab panels, FAQ answers and showcase copy are in the HTML (hidden with CSS/`hidden`), not mounted on click.
- Footer links are real `<a href>`.
- **CI check:** `curl` each built page and assert the H1, the plain-English block, the pricing H2 and the FAQ text are in the raw HTML, for both `/` and `/ar/` versions.

## 2. Locales, hreflang and RTL

- next-intl locales: `en` (default, no prefix, region AE) and `ar` (`/ar`). Later `en-US` at `/us`.
- `generateMetadata` sets for each page that has both versions:
  ```ts
  alternates: {
    canonical: url,
    languages: { 'en-AE': enUrl, 'ar-AE': arUrl, 'x-default': enUrl },
  }
  ```
  Pages with only English have no `ar-AE` entry (never point hreflang at a missing page).
- `<html lang="en-AE" dir="ltr">` / `<html lang="ar-AE" dir="rtl">`.
- **RTL layout:** use Tailwind logical properties (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`) everywhere so the layout mirrors for free. Mirror arrows and the horizontal process scroll direction; don't mirror phone mockups, logos or numbers.
- **Arabic fonts:** Plus Jakarta Sans and Instrument Serif have no Arabic. Pair with an Arabic family of similar weight and feel (e.g. IBM Plex Sans Arabic or Tajawal for headings/body via `next/font`), and test the H1 at weight 700–800. The serif-italic accent has no direct Arabic equivalent: use the lime colour and weight for emphasis on Arabic pages.
- Arabic copy uses Western (1, 2, 3) or Arabic-Indic digits consistently: pick Western digits for prices (common in UAE commerce).

## 3. Metadata

- Titles and descriptions in `messages/en.json` and `messages/ar.json` under `seo.<page>` (values from `04`).
- Brand from `site.config.ts`; currency `AED`; phone `+971…`; WhatsApp number; trade licence number; address (if real).
- Canonical absolute, lowercase, no trailing slash, no query strings; `https` + one host.
- `opengraph-image.tsx` per route and locale (Arabic OG images rendered RTL with the Arabic font).

## 4. Structured data

| Page | Schema |
|---|---|
| Root | `Organization` (name, logo, url, sameAs, contactPoint with `availableLanguage: ["English","Arabic"]`, `areaServed: {"@type":"Country","name":"United Arab Emirates"}`), `WebSite` |
| Root, **only with a real Dubai address** | `ProfessionalService` (subtype of LocalBusiness): address, geo, telephone +971, openingHoursSpecification, priceRange "AED 2,900–250,000" |
| Service pages | `Service` (provider → Organization `@id`, areaServed AE, `offers: AggregateOffer` priceCurrency **AED**), `BreadcrumbList`, `FAQPage` |
| Industry / solution | `Service` + `audience` BusinessAudience + BreadcrumbList + FAQPage |
| City pages | `Service` with `areaServed: {"@type":"City","name":"Abu Dhabi"}` |
| Pricing | `OfferCatalog` (AED) |
| Guides | `Article` (author Person, datePublished, dateModified), BreadcrumbList, FAQPage, `VideoObject` if video |
| Tools | `WebApplication` (free) |

Every schema block exists per locale with `inLanguage`. No self-serving `AggregateRating`; no reviews we don't have.

## 5. Sitemaps, robots, AI crawlers

- `app/sitemap.ts` from the route registry, with `alternates.languages` per entry (Next.js sitemap supports this), real `lastModified`.
- `app/robots.ts`: allow all search and AI answer bots (Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, GPTBot, PerplexityBot, ClaudeBot, Claude-SearchBot, Google-Extended, Applebot), disallow `/api/` and booking confirmation pages, link the sitemap.
- Check Cloudflare/Vercel bot-blocking is **off** for AI crawlers.
- Google Search Console (domain property) + Bing Webmaster Tools + IndexNow pings on publish.
- `/llms.txt` and `/llms-full.txt` generated from messages + price config (drafts in `llms/`), and a `.md` version of every page (`/services/shopify-development.md`). Cheap insurance; not the main lever.

## 6. Speed (UAE is ~80% mobile)

- Targets on a mid-range phone on 4G: **LCP < 2.5 s, INP < 200 ms, CLS < 0.1**.
- **Hosting:** a CDN with Middle East edge locations (Cloudflare and Vercel both serve the Gulf from nearby edges). Static pages served from the edge. Check TTFB from Dubai with WebPageTest (Dubai location) at launch.
- GSAP/ScrollTrigger/Lenis loaded with `next/dynamic` after hydration and only where used; Lenis and the custom cursor off on touch devices and with reduced motion.
- Below-the-fold mockups: `content-visibility: auto` + `contain-intrinsic-size`; heavy tab mockups mount on first open (text stays in HTML).
- `next/image` (AVIF/WebP), `priority` only on the hero; licensed images (replace Unsplash) including **UAE photos** (Dubai storefronts, local people) for UAE pages.
- `next/font` with Latin + Arabic subsets, preload only the H1 weights.
- Reserve space for every scaled mockup (`aspect-ratio`).

## 7. Conversion tracking (UAE specifics)

GA4 key events: `whatsapp_click` (most important in the UAE), `book_call_click`, `booking_completed`, `phone_click`, `calculator_completed`, `einvoice_check_completed`, `pricing_view`. Mark `booking_completed` and `whatsapp_click` as conversions. Pass the page and language into the prefilled WhatsApp text so leads can be attributed ("Hi, I'm on the Shopify page…"). Use a WhatsApp Business account with labels per source.

Consent: UAE PDPL requires lawful processing and transparency. Show a cookie/consent banner for analytics and a clear privacy policy (English + Arabic).

## 8. Hygiene

- Real 404 page (EN + AR) linking to services, industries and pricing.
- 301s in `next.config.ts` for any changed URL; no chains. If the `.ae` domain is bought, 301 it to the `.com`.
- CI: broken-link check, one-H1 lint, hreflang reciprocity check (every `ar` page points back to its `en` page and vice versa), schema validation.
- `noindex` on thank-you pages, internal search and filtered listings.

## 9. Launch checklist

- [ ] Unique title/meta/H1 kicker/canonical/OG on every page, both languages.
- [ ] hreflang pairs valid; no hreflang to missing pages.
- [ ] Arabic pages render RTL correctly at 390 px and 1440 px (screenshots with headless Chrome, as for the mockups).
- [ ] Raw-HTML `curl` test passes.
- [ ] sitemap + robots live; GSC + Bing verified; IndexNow working.
- [ ] Lighthouse mobile ≥ 90 on home, Shopify, one industry, one guide (EN + AR); WebPageTest from Dubai.
- [ ] WhatsApp CTA works on every page with a page-specific message; GA4 events firing.
- [ ] All proof is real or labeled "Example project" (UAE consumer protection and Google policies; see `08`).
- [ ] Trade licence number, address and +971 number consistent on site, Google profile and directories.
