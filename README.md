# Agency site (v3, Parrot Noir)

Next.js 16 App Router site for a Dubai Shopify, WordPress and automation studio. Black plus parrot green, GSAP + Lenis motion, real-size mockups built in code (no stock images).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm test           # calculator unit tests
npm run audit      # BASE=http://localhost:3000, checks title/desc/H1/canonical/JSON-LD on every sitemap URL
npm run links      # internal link crawl, broken links and orphans
```

## Where things live
| Path | What |
|---|---|
| `src/config/site.ts` | Brand, domain, WhatsApp, email, licence. Placeholders until `NEXT_PUBLIC_*` env vars are set |
| `content/v3/pages/*.ts` | 21 money pages, one per target keyword, served at `/<slug>` |
| `content/v3/industries/*.ts` | 10 industry pages at `/industries/<slug>` |
| `content/v3/posts/*.ts` | 36 journal posts in 4 clusters, served at `/blog/<slug>` |
| `content/v3/cases/*.ts` | 6 concept builds at `/work/<slug>` (labelled concept, not clients) |
| `content/v3/site.ts` | About, process, pricing rows, FAQs |
| `src/components/mock/` | Mockup library: store, admin, code, WordPress, ERP, WhatsApp, AI, reports |
| `src/components/shell/Motion.tsx` | Data-attribute motion engine (`data-split`, `data-reveal`, `data-stagger`, `data-hscroll`, ...) |
| `src/lib/schema.ts` | JSON-LD builders |

## SEO and AI-crawler surface
Sitemap, robots (AI bots allowed), `/llms.txt`, `/llms-full.txt`, a `.md` twin of every page (`/<slug>.md`), `/feed.xml`, generated OG images, hreflang en-AE, JSON-LD (Organization, Service, FAQPage, Article, BreadcrumbList, ItemList, WebApplication), 308 redirects from the old v2 URLs (`next.config.ts`). Ping IndexNow after publishing: `node scripts/indexnow.mjs`.

The code makes the site eligible to rank and be cited. It cannot guarantee positions in Google or answers from AI assistants.

## Before launch (owner actions)
1. Set `NEXT_PUBLIC_BRAND_NAME`, `NEXT_PUBLIC_DOMAIN`, `NEXT_PUBLIC_EMAIL`; replace WhatsApp number, phone, licence number and free zone in `src/config/site.ts`.
2. Confirm every price in `content/v3/site.ts` and the pages. Fill the team block in `ABOUT.team`.
3. Have a lawyer write the legal pages (`src/app/legal/[slug]/page.tsx`).
4. Replace concept builds with real client work as it ships. Never present a concept build as a client.
5. Off-site authority matters most for ranking: Google Business Profile (needs a real Dubai address), Shopify Partner directory, Clutch and DesignRush listings, reviews, and backlinks. Then add `LocalBusiness` data (`hasRealAddress`).
6. Verify the domain in Google Search Console and Bing Webmaster Tools, submit `/sitemap.xml`, and keep Cloudflare/Vercel bot protection off for AI crawlers.
7. Set `LEAD_WEBHOOK_URL` so the booking form reaches you (`/api/lead`).

The v2 broad-agency site is preserved at tag `v2-broad-agency` (commit `7828915`). Full plan: `docs/PLAN-V3.md`.


## SEO and conversion plan
Full UAE plan (keyword research, architecture, linking, on-page rules, content calendar, pricing, authority and AI): `docs/seo-v3/`. Writers' brief for new content: `docs/seo-v3/WRITING-BRIEF.md`. Conversion pieces: sticky bar (`ConvertBar`), quote form, `/free-website-audit`, four calculators under `/tools`. Set `LEAD_WEBHOOK_URL` or leads only reach WhatsApp.
