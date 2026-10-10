# 07 · Implementation backlog (next build step)

Ordered by impact on traffic and enquiries. Each item names the files so it can be done without re-planning. Do not start until the owner approves `05` decisions and the scope below.

## A · Conversion first (week 1 to 2)
1. **Sticky conversion bar** (desktop top-right pill + mobile bottom bar) on money, industry, post and tool pages: price floor, "Get a fixed quote", WhatsApp with page text. `src/components/ui/ConvertBar.tsx`, mounted in `layout.tsx`, hidden on `/contact`. Events: `whatsapp_click`, `quote_click`.
2. **Quote form** (3 questions) on `/contact` and in `CtaBand`; `/api/lead` already exists; add source page + UTM fields; send an email/webhook. 
3. **`/free-website-audit`** page + form + thank-you (noindex). Offer copy from `03`.
4. **GA4 events** in `Analytics.tsx`: `quote_submit`, `audit_submit`, `calculator_use`, `pricing_view`, `phone_click`.
5. **Trust strip** component (real items only: "Fixed price in writing", "You own everything", "30-day fix window", reply SLA; Clutch/Google review count when it exists).

## B · On-page fixes to existing pages (week 1 to 2)
6. Apply `03` titles and add "Who we are not for", platform chooser, UAE assumptions table, and price table where missing in `content/v3/pages/*.ts` and `posts/*.ts`.
7. Add a visible `Updated <date>` and Search-Console-driven FAQ slots.
8. Extend `scripts/seo-audit.mjs`: fail if a money page has fewer than 6 internal links, an answer box outside 35 to 70 words, an H1 without the primary keyword in the first half, or a post without a link to its parent money page.
9. Extend `scripts/links-audit.mjs` to report orphans (no inbound links).

## C · New templates and pages (week 3 to 8)
10. **Industry hub + template:** `src/app/industries/page.tsx`, `src/app/industries/[slug]/page.tsx`, content type `Industry` in `content/v3/types.ts` (situation, problems[3] with Visual, build, price band, FAQ, related, case), data in `content/v3/industries/*.ts`. Schema Service + FAQ + Breadcrumb. Add to `routes.ts`, `markdown.ts`, `llms`.
11. **8 gap money pages** (re-using `MoneyPage`): shopify-store-setup-dubai, online-store-for-small-business-uae, website-for-small-business-dubai, website-redesign-dubai, wordpress-maintenance-dubai, e-invoicing-software-uae, inventory-management-software-dubai, plus the audit page.
12. **Tools hub + 3 calculators** with unit tests (pattern: `src/lib/shopify-cost.ts` + `test/*.test.ts`): website cost, WhatsApp reply ROI (hours saved x wage), ERP-vs-Excel checker (scored quiz). `src/app/tools/page.tsx`.
13. **21 new posts** per `04` into `content/v3/posts/*.ts`; refresh the 5 reused guides with UAE tables; add to `posts/index.ts`.
14. **Nav:** add "Industries" and "Tools" to the mega menu; footer columns for industries and tools.

## D · AI and technical (week 3 to 6)
15. Regenerate `llms.txt` and `llms-full.txt` sections per `06` (industries, tools, audit); `.md` twins for new routes (already automatic via `routeEntries`).
16. `/about` facts block + `sameAs` array driven by `site.ts` (fill when profiles exist).
17. Per-route OG images for industries and tools (pattern exists).
18. Keep hreflang `en-AE` and `x-default`; add `ar-AE` pairs only when Arabic pages exist.
19. Search Console and Bing verification via metadata `verification` fields from env.

## E · Phase 3 (month 3+, owner decision)
20. `/abu-dhabi`, `/sharjah` pages only with real local content.
21. Arabic site at `/ar/*` for P1 money pages (next-intl, RTL, Arabic fonts, hreflang pairs); start with `website-design`, `shopify-agency`, `whatsapp-automation`.

## Definition of done per page
Unique title/meta/H1, answer box, price visible, 6 plus internal links, FAQ with schema, mockup or screenshot with alt text, OG image, in sitemap, `.md` twin present, passes `npm run audit` and `npm run links`, conversion bar and WhatsApp text correct, GA4 events firing.
