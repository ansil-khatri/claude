# [Brand] website · Next.js

Marketing site for a Dubai software studio (UAE launch, English first). Built from the specs, plans and 19 localized mockups in `docs/` (start with `docs/MASTER-PLAN.md`).

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
npm test             # calculator maths (node:test)
npm run typecheck
npm run audit        # UAE audit on the built HTML (run after `next build`)
```

## Where things live

| Path | What |
|---|---|
| `src/config/site.ts` | **Single source of brand facts** (name, domain, WhatsApp, licence, hours). Override the name with `NEXT_PUBLIC_BRAND_NAME`. Nothing else hardcodes it. |
| `content/` | All copy and data as typed modules: `services/*.ts` (13 service pages), `industries.ts` (6), `solutions.ts` (7), `abudhabi.ts`, `home.ts`, `guides.ts` (55 + 3 planned, 11 published), `prices.ts` (the AED price book), `brands.ts` (concept brands), `catalog.ts` (registry used by nav, hubs, sitemap) |
| `content/data/extracted.json` | Section copy lifted from the approved HTML mockups (FAQs, pains, pricing, process, tabs) |
| `src/components/mock/` | Mockup system: `Scaled`/`Browser`/`Phone` frames, brand website + app screens, WhatsApp chat, dashboards, invoices, code, search results (`Viz`) |
| `src/components/sections/` | Page sections shared by every service/industry page (hero, plain-English band, pains, deep dive, compare, process, pricing, FAQ, case study, CTA + booking) |
| `src/lib/calcs.ts` + `test/` | Calculator maths (tested) |
| `docs/` | The original plan, specs, SEO docs and mockups (reference) |

## Routes (58)

`/` · `/services` + 12 service pages + `/services/e-invoicing-integration` · `/agencies` · `/industries` + 6 industries + 7 solution pages · `/pricing` · `/about` · `/process` · `/contact` · `/work` + 6 example cases · `/guides` + 4 guides · `/tools` + 4 calculators · `/abu-dhabi` + 3 pages · `/legal/{privacy,terms,cookies}` · `/ar` (RTL prototype, noindex) · `sitemap.xml` · `robots.txt` · `llms.txt` · `llms-full.txt` · `<page>.md` for services, industries, guides and pricing · OG image.

## Decisions and deviations (read these)

- **No brand name yet** (decision log 2026-10-07): the wordmark shows `[Brand]` everywhere until `NEXT_PUBLIC_BRAND_NAME` is set.
- **Copy is in typed TS modules, not `messages/*.json` + next-intl.** Everything is data-driven and strings are in one place, but adding Arabic means either adopting next-intl at that point or duplicating the content modules. `/ar` is a standalone RTL prototype (spec N17) with draft Arabic that **needs a native writer** before it is indexed.
- **Motion** uses CSS, `IntersectionObserver`, rAF scroll (transform/opacity only) and Lenis. GSAP was not needed and is not installed; the spec's hard rules (content visible by default, no CSS transition on animated transforms, reduced-motion fallback) are followed.
- **Mockups are React components, not images**: every screen is rebuilt from data, with `data-nosnippet`, `aria-hidden` and an "Example project" chip wherever numbers are illustrative. There are no stock photos; brand art is generated SVG.
- **Price book wins over older mockups**: website tiers are AED 7,900 / 19,900 / 44,000 and landing pages AED 5,900 / 15,900 / 4,900 per month (UAE spec §5 and `seo-uae/06`), not the older mockup numbers.
- **Pending localizations done here**: payments, WhatsApp & AI, automation, SEO, vibe-rescue, white-label, phone repair, landing pages and the new e-invoicing page were rewritten for the UAE from `docs/.../uae-localization-design.md` §8 (the HTML mockups for these were still US/USD).
- **Booking widget and contact form are demos** (no network call) until a scheduling provider (Cal.com or similar) and CRM are chosen.
- **Only 11 of 55 guides are published** (#1–#11 in full). The rest appear on `/guides` as "Planned", have no URL and are not in the sitemap, so no thin pages ship.
- **Not built (needs the owner)**: real team, photos, client logos, reviews, licence number, WhatsApp number, address, legal text, native Arabic pages beyond the prototype, licensed UAE photography, GA4 id (`NEXT_PUBLIC_GA_ID`), IndexNow key. See `docs/MASTER-PLAN.md` Part C.
- **US launch (`/us/`) and Saudi** are phase 2/8 in the plan and are not part of this build.

## Placeholders to replace before launch

`src/config/site.ts`: domain, email, WhatsApp number, trade licence, free zone · About page team · guide authors · legal pages · `NEXT_PUBLIC_GA_ID` · hosting with a Gulf edge.


## Design and motion system (v2)

- **Look:** cinematic ink + warm paper, one accent (signal orange), Inter at large sizes, hairlines instead of soft cards, no serif. Tokens and component overrides live in `src/styles/v2.css` (loaded last).
- **Motion engine:** `src/components/shell/Motion.tsx` (GSAP + ScrollTrigger + SplitText + Lenis). Pages stay server-rendered and describe intent with data attributes: `data-split` (masked lines/chars, or `scrub` words that light up), `data-reveal`, `data-stagger`, `data-parallax`, `data-count`, `data-marquee`, `data-hscroll` (pinned horizontal track), `data-magnetic`, `data-tilt`, `data-intro` (runs after the loader). It rebuilds on every route change, plays a loader once per session, a curtain page transition, a custom cursor and smooth anchors.
- **Scenes:** `src/components/scenes/` (`GlowCanvas` WebGL hero light, `PinnedChapters` Apple-style pinned product scene, `StackCards` stacked sticky cards). Mobile and reduced-motion fall back to plain stacked content; with JavaScript off everything is visible (the hiding classes are only ever added by an inline script).
- **Rules to keep:** a pinned element must sit inside a plain wrapper (`.pin-wrap`) so React can unmount it; never put state classes that contain `lenis` on `<html>`; animate transform and opacity only.
