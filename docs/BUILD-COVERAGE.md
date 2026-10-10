# Build coverage: every document → where it is implemented

Written when the Next.js build was completed. Status: ✅ built · 🟡 built as prototype/demo · ⏳ needs owner input · ➡ later phase (planned, not part of this build).

## `docs/MASTER-PLAN.md`

| Item | Status | Where |
|---|---|---|
| Phase 1 T1–T8 (homepage + 7 service mockups, localized) | ✅ | Copy lifted from the mockups into `content/` and rebuilt as components |
| Phase 1 T9 Landing, T10 Payments, T11 WhatsApp & AI, T12 Automation (+ e-invoicing tab), T13 SEO, T14 Vibe rescue, T15 White-label, T21 Phone repair | ✅ | Localized in `content/services/*.ts`, `content/industries.ts` per UAE spec §8.7–8.13, §8.20 |
| Phase 1 T16–T20 industries | ✅ | `content/industries.ts` (home services also localized to Peak Cooling) |
| Phase 1 T22 cross-page consistency + 19 audits | ✅ | `npm run audit` scans every built page |
| Phase 2 N1 services hub · N2 industries hub · N3 pricing · N4 about · N5 process · N6 contact | ✅ | `src/app/{services,industries,pricing,about,process,contact}` |
| N7 guides hub + template (guide #1 in full) | ✅ | `src/app/guides`, `content/guides.ts` |
| N8 e-invoicing integration page | ✅ | `content/services/einvoice.ts` |
| N9–N11, N14 four calculators (tested maths) | ✅ | `src/lib/calcs.ts`, `test/calcs.test.ts`, `src/app/tools/*` |
| N12 404 + legal | ✅ 🟡 | `not-found.tsx`; legal text is an outline for a lawyer |
| N13 seven solution pages | ✅ | `content/solutions.ts` |
| N15 work hub + case template | ✅ | `src/app/work` (concept projects, all labelled) |
| N16 Abu Dhabi hub + 3 pages | ✅ | `content/abudhabi.ts` |
| N17 Arabic homepage prototype (RTL) | 🟡 ⏳ | `src/app/ar` (draft Arabic, noindex, needs native review) |
| N18 new industries | ➡ | Only after demand is confirmed |
| Phase 3 technology pages | ➡ | Plan still to write |
| Phase 4 setup, design system, shared components, mockup components | ✅ | `src/styles`, `src/components` |
| Phase 4 SEO: metadata, JSON-LD (AED, areaServed AE), sitemap, robots (AI bots allowed), llms.txt, llms-full.txt, `.md` pages, OG image, 301 map | ✅ | `src/lib/seo.ts`, `src/app/{sitemap,robots}.ts`, `src/app/llms*`, `next.config.ts` |
| Phase 4 analytics + PDPL consent | ✅ 🟡 | `src/components/shell/Analytics.tsx` (loads GA4 only after consent and when `NEXT_PUBLIC_GA_ID` is set) |
| Phase 4 speed (late-loaded motion, self-hosted fonts, reserved mockup space) | ✅ | `fontsource` fonts, `Scaled` uses fixed aspect-ratio |
| Phase 4 Arabic wave AR-1 (10 pages) | ⏳ | Needs a native Arabic writer |
| Phase 5 launch / Phase 6 content / Phase 7 authority | ➡ | Owner and ongoing |

## `docs/seo-uae/`

| File | Where |
|---|---|
| README (strategy) | Positioning lines, three lead offers (Shopify, WhatsApp & AI, e-invoicing) on home, hubs and nav |
| 01 market research | Facts used in guides and page copy (e-invoicing dates, Talabat range, WhatsApp 85%) |
| 02 keyword research | Kickers and titles per page; one owner page per keyword (`seo.title`, `kicker`) |
| 03 architecture and linking | URL map implemented as routes; nav (mega menu), footer, breadcrumbs + BreadcrumbList, industry ↔ solution links, guides block on service pages (only published guides link), no orphans |
| 04 on-page SEO | Titles/metas/kickers per page in `content/`; plain-English band, WhatsApp CTA with page-specific text, FAQPage schema |
| 05 content plan | Problem finder on `/services`, 4 tools, e-invoicing cluster |
| 06 pricing AED | `content/prices.ts` is the only price source for `/pricing`, home and the service tiers |
| 07 technical SEO | Static rendering, one H1, FAQ/tabs in HTML, schema, sitemap/robots, hreflang `en-AE` (+ `x-default`), `/ar` kept noindex until approved |
| 08 local presence + AI | E-E-A-T placeholders on About; AI-bot-friendly robots, llms.txt; "Example project" labelling everywhere |
| 09 blog calendar | `content/guides.ts` (all 55 + 3 studies); guides #1–#11 written in full; length-checked titles and descriptions and a per-page OG image for every dynamic route |
| `llms/` | `content/data/llms*.txt` served at `/llms.txt` and `/llms-full.txt` with brand facts substituted |

## `docs/superpowers/specs` and `plans`

| Doc | Where |
|---|---|
| Homepage + mobile apps spec | `content/home.ts` + `src/components/home`; mobile apps → `content/services/apps.ts` |
| 12 service specs | `content/services/*.ts` |
| 6 industry specs + overview | `content/industries.ts` (journey, back office, honest choice, process, case, pricing, FAQ) |
| UAE localization spec | Brand facts §4 → `content/brands.ts`; prices §5 → `content/prices.ts`; shared components §6 → `Hero`, `Plain`, `WaBtn`, example chip, `data-nosnippet`, `EN · ع` toggle; page changes §8 applied |
| New pages spec | See Phase 2 table above |
| UAE localization plan / new-pages plan | Toolkit tasks (audits, screenshots) replaced by `npm run audit`, `npm test` and the crawl described in README; calculator code ported as `src/lib/calcs.ts` |
| `docs/seo/` (US) | ➡ Phase 2, `/us/` not built |

## Spec-by-spec gap fill (service pages)

- `content/showcases.ts`: six UAE-localised "Built for your industry" tabs per service (result tiles, chips, "Sold by", mockup, moment caption), from the service specs' showcase tables.
- Case studies added for Shopify, Website, Mobile, Web apps, SaaS, Landing, Payments and Automation (AED figures, illustrative-numbers chip).
- Still partial: process pinned horizontal scroll, results counters/wipe, services-hub hover thumbnails.
