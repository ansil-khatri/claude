# Service Page: WordPress Development — Design Spec

- **Date:** 2026-10-07
- **Status:** Mockup built, waiting for owner review
- **Route:** `/services/wordpress-development`
- **Reference mockup:** `docs/superpowers/mockups/service-wordpress.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` (design system §3, template §5, accessibility/responsive §6). Only page-specific content is recorded here.

**Story:** your website should bring in work, not make more of it → four WordPress pains (editing, plugins/hacks, checkout) → sites for your industry → what WordPress done right looks like → which build approach → 6 weeks → proof → price → objections → WordPress review call.

**Mockup mix:** light Gutenberg block editor (site preview + block settings sidebar), classic wp-admin screens (Plugins, WooCommerce Orders), PageSpeed report, a monthly care report; dark only for the VS Code-style plugin editor. Booking appears once as a form (Maison Rose); other phones show estimate, checkout and service-request forms.

---

## P1 · Hero (dark panel)
- **Breadcrumb:** Services / WordPress Development
- **H1:** "Your website should bring in work. **Not make more of it.**"
- **Sub:** Custom WordPress themes, plugins and WooCommerce stores for US businesses. Fast on phones, safe from hacks, and simple enough that your team updates it themselves.
- **CTAs:** Book a free call · See WordPress pricing
- **Tech chips:** Custom block themes · Gutenberg · ACF · WooCommerce · Custom plugins (PHP) · WP Engine · Kinsta · Rank Math · Yoast
- **Visual:** Gutenberg editor editing the Volt & Wire homepage ("Power, lighting & EV chargers.", ★4.9 · 427 reviews, service cards EV chargers from $890 / Panel upgrades from $2,400 / Lighting from $180, stats, testimonial) with the **Hero block** settings sidebar (headline, highlighted words "Wired right.", button, phone, toggles). Phone: estimate form (EV charger, ZIP 75204 in area ✓, 2 panel photos ✓, "Estimate by text within 1 hour").
- **Floating cards:** "New estimate request · EV charger · Dallas 75204" · "Mobile PageSpeed 41 → 96" · "Plugins 47 → 12".

## P2 · Sound familiar? "Why WordPress owners call us." (3 cards)

| Quote | Before | After | Cost (red) | Fix |
|---|---|---|---|---|
| "I can't even change our Saturday hours without calling someone." | Page-builder editor: three copies of the hours heading (desktop/tablet/mobile, each different), navigator 14 levels deep, "Sorry, the content area was not found in your page." | Apex Auto Works in the block editor with a **Business hours** block (Mon–Fri 7:30–6, Sat 8–2, sync to Google Business Profile, used on 14 pages) + toast "Saturday hours updated on 14 pages." | Hours copied in 3 places; $150 and 4 days for a freelancer to change one line. | One "Business hours" block. Change it once, and it updates on every page. |
| "Every plugin update breaks something. Then we got hacked." | wp-admin Plugins for Ember Kitchen: All (47), 23 updates, "⚠ Security hole", "⚠ Being exploited. Remove now." + "There has been a critical error on this website." | Monthly care report (October): 99.99% uptime, 31/31 backups, 1,284 attacks blocked, log of tested updates, restore test passed (6 min), 2 team changes done | 47 plugins, 23 out of date; down 2 days in the busiest week of December. | A lean theme with 12 trusted plugins, every update tested on a copy first. |
| "Customers get to checkout and then just leave." | FreshFold WooCommerce mobile checkout with card error and "Still loading… 11.2s" | Same checkout with Apple Pay / Google Pay up top | 11 s on a phone, a card error at the last step, 64% of carts never paid. | A WooCommerce checkout that loads in about a second, with Apple Pay and Google Pay up top. |

## P3 · Showcase: "WordPress sites that fit your business."
- **Lead:** The big screen shows the homepage your customers land on. The phone shows the form that turns a visitor into a booking.
- **Stage:** full brand homepage in a browser + phone form.

| Tab | Brand · place | Results | Chips | Phone form |
|---|---|---|---|---|
| Salons & spas | Maison Rose · Austin · ★4.9 (312) | +62% online bookings · 4 min to change a price | Custom blocks, Booking + deposits, Gift cards, Instagram feed | Book your visit (Balayage, Mia, Thu 10 AM, "Book · $85 deposit") |
| Laundry | FreshFold · Chicago · ★4.8 (1,240) | $2,918 orders last Friday · 21% carts abandoned (was 64%) | WooCommerce, Pickup windows, Apple Pay, Subscriptions | Checkout with Apple/Google Pay |
| Auto shops | Apex Auto Works · Phoenix · ★4.9 (860) | 3.4× online bookings · 0.9 s mobile load | Service booking, Shop software sync, 12 city pages, Care plan | Book your service (Brakes, 2019 Porsche 911, drop-off) |
| Electricians | Volt & Wire · Dallas · ★4.9 (427) | +41 estimate requests/mo · #1 for "EV charger install Dallas" | Estimate form, ZIP check, Photo upload, Rank Math SEO | Get your estimate |
| Restaurants | Ember Kitchen · Brooklyn · ★4.8 (2,100) | $0 commission on bookings · 1,240 guests booked online/mo | Reservations, Menu blocks, Private dining, Gift cards | Reserve a table |
| SaaS | Ledgerly · San Francisco · G2 High Performer | 2.6× demo bookings · same-day new pages, no developer | Block patterns, HubSpot forms, Docs & blog, Headless-ready | "See Ledgerly in 20 minutes" demo form |

## P4 · What your site can do (dark panel, 5 tabs): "WordPress, done the way it should be."

| # | Tab · chip | Headline | Fine print | Mockup |
|---|---|---|---|---|
| 01 | Edit it yourself · Custom blocks · Gutenberg · ACF | Change it in two minutes. Break nothing. | No page builder: no 40 nested columns, no "hidden on mobile" copies. | Maison Rose Services page in the block editor + **Service card** block (Bridal, from $250, badges) + toast "Sophie changed the Bridal price." |
| 02 | Fast on phones · Core Web Vitals · PageSpeed 90+ | Loads before they lose interest. | Faster pages rank higher and cost less per ad click. | PageSpeed for `voltwire.com/ev-charger-installation`: page-builder (Sept 2) vs custom block theme (Oct 14): LCP 7.4 s → 0.9 s, TBT 1,860 → 40 ms, CLS 0.33 → 0.00, 6.1 MB → 0.8 MB |
| 03 | WooCommerce · Stripe · Subscriptions | A store inside the site you already have. | We'll say when Shopify is the better move. | FreshFold WooCommerce Orders: $2,918 today, 58% Apple/Google Pay, 21% abandoned (was 64%), orders #4817–#4821 + mobile checkout |
| 04 | Custom plugins · REST API · WP-CLI | When no plugin does exactly what you need. | Tested, documented, yours; never edits core. | VS Code-style editor: `apex-bookings` plugin `class-sync.php` (hook `apex_booking_confirmed` → shop software repair order → SMS), terminal: PHPUnit 86 tests ✓, `wp apex sync` 42 bookings sent, 0 errors |
| 05 | Security & care · Managed hosting · Backups · Monitoring | Updates, backups and security, handled. | Same-day fix if something goes wrong; in the contract. | Volt & Wire monthly care report + toast "Security patch live in 3 hours" |

## P5 · Honest build choice: "Custom theme, page builder, headless or Webflow? The right answer depends on who edits it."

| | **Custom block theme** (recommended) · Gutenberg · ACF | Page builder · Elementor, Divi, WPBakery | Headless WordPress · + Next.js | Webflow / Squarespace |
|---|---|---|---|---|
| Best for | Businesses wanting a fast site their team edits safely | Quick one-off sites, small budget | Content-heavy brands with in-house devs | Small brochure sites, no custom features |
| Speed on phones | ●●●●● | low | ●●●●● | ●●●● |
| Editing for your team | Fill in fields, the design can't break | Drag anything, easy to break | Easy, but changes need a dev to deploy | Easy within template limits |
| Running cost | $25–60/mo hosting | + $59–199/yr plugin licences | + $20–100 front-end hosting | $23–49/mo per site |
| Custom features | Anything, via plugins you own | Builder widgets only | Anything | Platform apps only |

## P6 · Process: "About 6 weeks, step by step." (eyebrow: From first call to launch day)
| Step | When | Title | Visual |
|---|---|---|---|
| 01 | Week 1 | Audit your site | Mobile speed 41/100 · 47 plugins, 23 outdated · known security holes · 48 of 61 pages to keep |
| 02 | Weeks 1–2 | Design the pages (Figma, real content, mobile first) | Maison Rose homepage frame |
| 03 | Weeks 2–5 | Build theme & blocks (staging; you try editing from week 3) | `register_block_type('volt/hours')` · phpcs 0 errors · staging URL |
| 04 | Week 5 | Move your content | 360 pages/posts · 2,140 images · 5,812 form entries · 412 redirects |
| 05 | Week 6 | Test, then launch | Pills: Forms, Checkout, iPhone SE, Pixel 8, Redirects, Backups ✓ |
| 06 | Ongoing | Care plan | Tested updates, nightly backups, monthly report, small changes |

## P7 · Case study (dark): Apex Auto Works · Phoenix, AZ
- **H3:** From a hacked page-builder site to a fully booked shop.
- **Problem:** hacked twice in a year, 7.4 s on a phone, Saturday hours wrong on 9 pages, every booking by phone.
- **Built:** custom block theme, online booking into the shop software, 12 city pages, care plan. Live in 6 weeks.
- **Metrics:** 3.4× online bookings · 0.9 s mobile load · 0 security incidents in 12 months
- **Quote:** "I change our hours from my phone now. Before, I had to call a guy."
- **Mockups:** apexautoworks.com homepage + "Book your service" phone form.

## P8 · Pricing: "Fixed price. Agreed before we start."
| Tier | Price (placeholder) | Includes | Time |
|---|---|---|---|
| Starter · Business website | from **$3,900** | Up to 8 pages, custom blocks, contact/booking forms, speed + SEO basics | 2–4 weeks |
| **Most chosen · Custom WordPress site** | from **$8,900** | Figma design, custom block theme, service + city pages, migration, PageSpeed 90+ | 5–6 weeks |
| Advanced · WooCommerce or custom plugin | from **$16,000** | WooCommerce, subscriptions/bookings, custom plugins, CRM/ERP/shop software sync | 8–12 weeks |

**What changes the price:** pages · content migration · WooCommerce · custom plugins · integrations · care plan from **$290/month**.

## P9 · FAQ: "Questions before you rebuild."
1. Can you fix my current site instead of rebuilding it? (audit first; show the numbers)
2. My site was built with Elementor or Divi. Can you work with that?
3. Will my team really be able to edit it?
4. Our site was hacked. Can you clean it up? (usually within 24 hours)
5. Where will the site be hosted? (WP Engine/Kinsta/SiteGround in your account, $25–60/mo)
6. Who owns the site, the theme and the plugins? (you; no licence fees to us)

## P10 · Often paired with: "Make the site work even harder."
SEO · Landing pages · Payment integration · White-label for agencies. Industries: Salons & spas, Laundry, Auto shops, Electricians & plumbers, Restaurants, SaaS companies.

## P11 · CTA + footer
"Site slow, hacked or hard to edit? *30 minutes* and we'll show you the fix." Lead: send the link; we bring the audit and three biggest changes. Widget: **WordPress review call**.

---

## Consistency with homepage (homepage wins)
All items below were **fixed in the mockup on 2026-10-07** unless marked "Owner to decide". Verified in headless Chrome: values render, no page errors.

| Item | Homepage | This mockup | Resolution |
|---|---|---|---|
| Care plan | Care from **$290/mo** | "Care plan from $149 / month" chip | Change the chip to $290/month. |
| Starter website | Launch from $3,900, up to 8 pages, **live in 2–4 weeks** | $3,900, up to 8 pages, 3–4 weeks | Change the timeline to 2–4 weeks. |

## Open items (this page)
- Real tier prices.
- Hosting and licence cost ranges in the table are approximate.
- Ledgerly "G2 High Performer" and the "Michelin Bib Gourmand" badge are concept content; remove or replace with real, permitted proof.
