# Service Page: WordPress Development — Design Spec

- **Date:** 2026-10-07
- **Status:** Mockup built, waiting for owner review
- **Market:** Dubai + UAE (localized 2026-10-10 per `2026-10-09-uae-localization-design.md`; US version in `specs/us/`)
- **Route:** `/services/wordpress-development`
- **Reference mockup:** `docs/superpowers/mockups/service-wordpress.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` (design system §3, template §5, accessibility/responsive §6). Only page-specific content is recorded here.

**Story:** your website should bring in work, not make more of it → four WordPress pains (editing, plugins/hacks, checkout) → sites for your industry → what WordPress done right looks like → which build approach → 6 weeks → proof → price → objections → WordPress review call.

**Mockup mix:** light Gutenberg block editor (site preview + block settings sidebar), classic wp-admin screens (Plugins, WooCommerce Orders), PageSpeed report, a monthly care report; dark only for the VS Code-style plugin editor. Booking appears once as a form (Maison Rose); other phones show estimate, checkout and service-request forms.

---

## P1 · Hero (dark panel)
- **Breadcrumb:** Services / WordPress Development
- **H1 kicker:** "WordPress website design in Dubai & UAE"
- **H1:** "Your website should bring in work. **Not make more of it.**"
- **Sub:** Custom WordPress themes, plugins and WooCommerce stores for businesses in Dubai & UAE. Fast on phones, safe from hacks, and simple enough that your team updates it themselves.
- **CTAs:** Book a free call · WhatsApp us · See WordPress pricing
- **Tech chips:** Custom block themes · Gutenberg · ACF · WooCommerce · Custom plugins (PHP) · WP Engine · Kinsta · Rank Math · Yoast
- **Visual:** Gutenberg editor editing the Volt & Wire homepage ("Power, lighting & EV chargers.", ★4.9 · 427 reviews, service cards EV chargers from AED 3,900 / Panel upgrades from AED 4,550 / Lighting from AED 650, stats, testimonial) with the **Hero block** settings sidebar (headline, highlighted words "Wired right.", button, phone, toggles). Phone: estimate form (EV charger, Area: Jumeirah · in our coverage ✓, 2 panel photos ✓, "Estimate by text within 1 hour").
- **Floating cards:** "New estimate request · EV charger · Jumeirah, Dubai" · "Mobile PageSpeed 41 → 96" · "Plugins 47 → 12".

## P1b · In plain English (stone band, no animation)
"We design and build WordPress websites for UAE businesses…", fact row **From** AED 7,900 · **Time** 2–8 weeks · **Languages** English + Arabic · **Based in** Dubai.

## P2 · Sound familiar? "Why WordPress owners call us." (3 cards)

| Quote | Before | After | Cost (red) | Fix |
|---|---|---|---|---|
| "I can't even change our Saturday hours without calling someone." | Page-builder editor: three copies of the hours heading (desktop/tablet/mobile, each different), navigator 14 levels deep, "Sorry, the content area was not found in your page." | Apex Auto Works in the block editor with a **Business hours** block (Mon–Fri 7:30–6, Sat 8–2, sync to Google Business Profile, used on 14 pages) + toast "Saturday hours updated on 14 pages." | Hours copied in 3 places; AED 150 and 4 days for a freelancer to change one line. | One "Business hours" block. Change it once, and it updates on every page. |
| "Every plugin update breaks something. Then we got hacked." | wp-admin Plugins for Ember Kitchen: All (47), 23 updates, "⚠ Security hole", "⚠ Being exploited. Remove now." + "There has been a critical error on this website." | Monthly care report (October): 99.99% uptime, 31/31 backups, 1,284 attacks blocked, log of tested updates, restore test passed (6 min), 2 team changes done | 47 plugins, 23 out of date; down 2 days in the busiest week of December. | A lean theme with 12 trusted plugins, every update tested on a copy first. |
| "Customers get to checkout and then just leave." | FreshFold WooCommerce mobile checkout with card error and "Still loading… 11.2s" | Same checkout with Apple Pay up top | 11 s on a phone, a card error at the last step, 64% of carts never paid. | A WooCommerce checkout that loads in about a second, with Apple Pay up top. |

## P3 · Showcase: "WordPress sites that fit your business."
- **Lead:** The big screen shows the homepage your customers land on. The phone shows the form that turns a visitor into a booking. An `.ex-chip` ("Example project · illustrative numbers") sits under the tab row.
- **Stage:** full brand homepage in a browser + phone form.

| Tab | Brand · place | Results | Chips | Phone form |
|---|---|---|---|---|
| Salons & spas | Maison Rose · Jumeirah, Dubai · ★4.9 (312) | +62% online bookings · 4 min to change a price | Custom blocks, Booking + deposits, Gift cards, Instagram feed | Book your visit (Balayage, Mia, Thu 10 AM, "Book · AED 85 deposit") |
| Laundry | FreshFold · Dubai Marina & JLT · ★4.8 (1,240) | AED 2,918 orders last Friday · 21% carts abandoned (was 64%) | WooCommerce, Pickup windows, Apple Pay, Subscriptions | Checkout with Apple Pay |
| Auto shops | Apex Auto Works · Al Quoz, Dubai · ★4.9 (860) | 3.4× online bookings · 0.9 s mobile load | Service booking, Shop software sync, 12 area pages, Care plan | Book your service (Brakes, 2019 Porsche 911, drop-off) |
| Electricians | Volt & Wire · Dubai & Sharjah · ★4.9 (427) | +41 estimate requests/mo · #1 for "EV charger install Dubai" | Estimate form, Coverage check, Photo upload, Rank Math SEO | Get your estimate |
| Restaurants | Ember Kitchen · Al Rigga, Dubai · ★4.8 (2,100) | AED 0 commission on bookings · 1,240 guests booked online/mo | Reservations, Menu blocks, Private dining, Gift cards | Reserve a table |
| SaaS | Ledgerly · Dubai · G2 High Performer | 2.6× demo bookings · same-day new pages, no developer | Block patterns, HubSpot forms, Docs & blog, Headless-ready | "See Ledgerly in 20 minutes" demo form |

## P4 · What your site can do (dark panel, 5 tabs): "WordPress, done the way it should be."

| # | Tab · chip | Headline | Fine print | Mockup |
|---|---|---|---|---|
| 01 | Edit it yourself · Custom blocks · Gutenberg · ACF | Change it in two minutes. Break nothing. | No page builder: no 40 nested columns, no "hidden on mobile" copies. | Maison Rose Services page in the block editor + **Service card** block (Bridal, from AED 950, badges) + toast "Sophie changed the Bridal price." |
| 02 | Fast on phones · Core Web Vitals · PageSpeed 90+ | Loads before they lose interest. | Faster pages rank higher and cost less per ad click. | PageSpeed for `voltwire.ae/ev-charger-installation`: page-builder (Sept 2) vs custom block theme (Oct 14): LCP 7.4 s → 0.9 s, TBT 1,860 → 40 ms, CLS 0.33 → 0.00, 6.1 MB → 0.8 MB |
| 03 | WooCommerce · Stripe · Subscriptions | A store inside the site you already have. | We'll say when Shopify is the better move. | FreshFold WooCommerce Orders: AED 2,918 today, 58% Apple Pay, 21% abandoned (was 64%), orders #4817–#4821 + mobile checkout |
| 04 | Custom plugins · REST API · WP-CLI | When no plugin does exactly what you need. | Tested, documented, yours; never edits core. | VS Code-style editor: `apex-bookings` plugin `class-sync.php` (hook `apex_booking_confirmed` → shop software repair order → WhatsApp), terminal: PHPUnit 86 tests ✓, `wp apex sync` 42 bookings sent, 0 errors |
| 05 | Security & care · Managed hosting · Backups · Monitoring | Updates, backups and security, handled. | Same-day fix if something goes wrong; in the contract. | Volt & Wire monthly care report + toast "Security patch live in 3 hours" |

## P5 · Honest build choice: "Custom theme, page builder, headless or Webflow? The right answer depends on who edits it."

| | **Custom block theme** (recommended) · Gutenberg · ACF | Page builder · Elementor, Divi, WPBakery | Headless WordPress · + Next.js | Webflow / Squarespace |
|---|---|---|---|---|
| Best for | Businesses wanting a fast site their team edits safely | Quick one-off sites, small budget | Content-heavy brands with in-house devs | Small brochure sites, no custom features |
| Speed on phones | ●●●●● | low | ●●●●● | ●●●● |
| Editing for your team | Fill in fields, the design can't break | Drag anything, easy to break | Easy, but changes need a dev to deploy | Easy within template limits |
| Running cost | AED 75–220/mo hosting | + AED 220–730/yr plugin licences | + AED 75–370 front-end hosting | AED 85–180/mo per site |
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

## P7 · Case study (dark): Apex Auto Works · Al Quoz, Dubai
- **H3:** From a hacked page-builder site to a fully booked shop.
- **Problem:** hacked twice in a year, 7.4 s on a phone, Saturday hours wrong on 9 pages, every booking by phone.
- **Built:** custom block theme, online booking into the shop software, 12 area pages, care plan. Live in 6 weeks.
- **Metrics:** 3.4× online bookings · 0.9 s mobile load · 0 security incidents in 12 months
- **Quote:** "I change our hours from my phone now. Before, I had to call a guy."
- **`.ex-chip`:** "Example project · illustrative numbers"
- **Mockups:** apexautoworks.ae homepage + "Book your service" phone form.

## P8 · Pricing: "Fixed price. Agreed before we start."
| Tier | Price | Includes | Time |
|---|---|---|---|
| Starter · Business website | from **AED 7,900** | Up to 8 pages, custom blocks, contact/booking forms, speed + SEO basics | 2–4 weeks |
| **Most chosen · Custom WordPress site** | from **AED 16,900** | Figma design, custom block theme, service + area pages, migration, PageSpeed 90+ | 5–6 weeks |
| Advanced · WooCommerce or custom plugin | from **AED 35,000** | WooCommerce, subscriptions/bookings, custom plugins, CRM/ERP/shop software sync | 8–12 weeks |

**What changes the price:** pages · content migration · WooCommerce · custom plugins · integrations · care plan from **AED 790/month**. Prices exclude 5% VAT.

## P9 · FAQ: "Questions before you rebuild."
1. Can you fix my current site instead of rebuilding it? (audit first; show the numbers)
2. My site was built with Elementor or Divi. Can you work with that?
3. Will my team really be able to edit it?
4. Our site was hacked. Can you clean it up? (usually within 24 hours)
5. Where will the site be hosted? (WP Engine/Kinsta/SiteGround in your account, AED 75–220/mo)
6. Who owns the site, the theme and the plugins? (you; no licence fees to us)
7. Can the site be in Arabic? (yes, RTL + English in the same theme, from the Starter tier)

## P10 · Often paired with: "Make the site work even harder."
SEO · Landing pages · Payment integration · White-label for agencies. Industries: Salons & spas, Laundry, Auto shops, Electricians & plumbers, Restaurants, SaaS companies.

## P11 · CTA + footer
"Site slow, hacked or hard to edit? *30 minutes* and we'll show you the fix." Lead: send the link; we bring the audit and three biggest changes. WhatsApp CTA next to the three-step list. Widget: **WordPress review call** (30 min · Google Meet or in person in Dubai · free, Mon–Fri, Dubai time/GST); footer `Based in Dubai · Trade licence [number] · Mon–Fri 9:00–18:00 GST · WhatsApp +971 50 000 0000`.

---

## Consistency with homepage (AED)
| Value | WordPress page | Homepage | Match |
|---|---|---|---|
| Starter website tier | AED 7,900, 2–4 weeks | Launch from AED 7,900 (2–4 weeks) | ✓ |
| Care plan | AED 790/mo | Care from AED 790/mo | ✓ |
| VAT | "Prices exclude 5% VAT" | "Prices exclude 5% VAT" | ✓ |
| WhatsApp number | +971 50 000 0000 | +971 50 000 0000 | ✓ |

## Open items (this page)
- Real tier prices beyond the Starter/Care anchors.
- Hosting and licence cost ranges in the table are approximate.
- Ledgerly "G2 High Performer" badge is concept content; remove or replace with real, permitted proof.
