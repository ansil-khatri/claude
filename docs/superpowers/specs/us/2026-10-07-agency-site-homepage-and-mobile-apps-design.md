# Agency Website: Homepage & Mobile App Development Page — Design Spec

- **Date:** 2026-10-07
- **Status:** Draft, waiting for owner review
- **Reference mockups (open in Chrome):**
  - `docs/superpowers/mockups/homepage.html`
  - `docs/superpowers/mockups/service-mobile-apps.html`
- **Scope of this spec:** site foundations, the shared design system, the **Homepage** and the **Mobile App Development** service page. Other service pages, industry pages, technology pages, About and Contact get their own specs later. They reuse everything defined here.

---

## 1. What we're building and why

A marketing website for a remote software studio that sells to **US businesses** and to **US agencies** (white-label). The company name is not decided yet.

**Services offered:** web apps (MERN, Next.js, Laravel, Django, Ruby on Rails), mobile apps (Flutter, React Native, Swift, Kotlin), Shopify (stores, themes, apps), WordPress (custom themes, plugins, WooCommerce), SaaS, landing pages, payment integration (Stripe, PayPal, Klarna, Apple Pay, N-Genius, Saferpay), AI integration, business automation and ERP, SEO, fixing apps built with AI tools (Lovable, Replit, Bolt, Cursor), and white-label delivery of any of these for agencies.

**What success looks like:**
- A visitor recognizes their own situation within the first two scrolls.
- They understand exactly what happens after they get in touch.
- They book a call or request a quote.

The site itself has to prove the studio's quality. It should feel like a premium, award-level agency site, not a template or "AI-generated" design.

### Two audiences
| Audience | What they need to see |
|---|---|
| **Business owners** (salons, laundries, auto shops, restaurants, trades, phone repair, startups) | Their own problem described in their words, realistic proof in their industry, a clear process, clear prices |
| **Agencies** buying white-label work | That we deliver quietly under their name, in their tools and time zones, at partner rates |

### Decisions already made (do not reopen)
1. **Brand name lives in one place.** No component or copy may hardcode the name. Use a single config value (`site.config.ts → brand.name`) and interpolate it into translations as `{brand}`.
2. **Localization uses JSON message files.** Launch is **English only, US market**. Arabic/UAE is dropped for now, but every string still goes through the i18n layer so Arabic (right-to-left) can be added later without a rebuild.
3. **Art direction:** came from direction "A · Kinetic Noir", refined into warm stone + ink + lime (see §3).
4. **Copy style:** story-led and written in customer language. Never list services as a keyword strip or marquee. Every claim is shown with a realistic mockup.
5. **Mockups** are real-size interfaces (websites at 1280 px, phone screens at 390 px) with real content, scaled into place. No grey placeholder boxes, no emoji device icons.

---

## 2. Technical foundations

| Area | Choice |
|---|---|
| Framework | Next.js (App Router), TypeScript, React Server Components by default |
| Styling | Tailwind CSS v4, with the design tokens below defined as CSS variables |
| i18n | `next-intl` with `messages/en.json` (plus `ar.json` later). Locale-prefixed routes ready, default locale `en` without a prefix |
| Motion | GSAP 3 + ScrollTrigger, Lenis smooth scrolling (one shared provider) |
| Images | `next/image` with AVIF/WebP, explicit sizes, lazy-loaded below the fold. Mockup photos are licensed or client-supplied (Unsplash is placeholder only) |
| Fonts | Plus Jakarta Sans (UI and headlines), Instrument Serif (italic accents and quotes), JetBrains Mono (labels and code), self-hosted via `next/font` |
| Forms / booking | Booking widget backed by a scheduling provider (Cal.com or similar), decided in the build plan |
| Analytics | Privacy-friendly analytics plus conversion events (call booked, quote requested, tab and industry interactions) |

### Config and content
- `site.config.ts`: brand name, email, phone, social links, booking URL, default currency (USD) and time zone (EST/PST copy).
- `messages/en.json`: all user-facing copy, namespaced by page and section (for example `home.hero.title`, `services.mobile.pains[0].quote`).
- `content/`: typed data for mockup brands (Maison Rose, FreshFold and so on), industry configs, pricing tiers and FAQs, so pages are data-driven and new service pages are mostly content.

---

## 3. Design system

### 3.1 Color tokens
| Token | Value | Use |
|---|---|---|
| `--bg` | `#f1efe9` | Page background (warm stone). Pure white is never used as a page background |
| `--soft` | `#e6e3da` | Inner panels, mockup stages |
| `--card` | `#ffffff` | Cards, mockup windows |
| `--ink` | `#0e0e10` | Primary text, dark buttons |
| `--ink2` | `#2a2a2e` | Secondary text |
| `--mute` | `#6b6b70` | Supporting text |
| `--line` | `#dcd9cf` | Dividers |
| `--panel` | `#111113` | Dark sections (hero, deep dives, results, pricing, CTA, footer) |
| `--lime` | `#c8f542` | Brand accent: primary CTA, highlights, progress, one statement band |

**Rhythm:** sections alternate stone → dark → stone, with exactly one full-lime band per page at most. Lime is never used for body text on light backgrounds.

### 3.2 Typography
| Role | Spec |
|---|---|
| Display / H1 | Plus Jakarta Sans 800, tracking −0.05em, `clamp(42px, 4.4vw, 64px)`, line-height 1.02 |
| Section H2 | 800, tracking −0.045em, `clamp(38px, 4.6vw, 64px)` |
| Accent words / quotes | Instrument Serif italic |
| Eyebrow | 14px/600 with a lime dot |
| Labels, step numbers, code | JetBrains Mono 11–13px |
| Body / lead | 16–20px, line-height 1.6, `--mute` for leads |

### 3.3 Shape, depth, spacing
- **Radii:** sections and panels 36–44px, cards 24–30px, buttons fully rounded.
- **Shadows:** soft and warm (`0 30px 60px -45px rgba(40,30,10,.45)`) on stone. Deeper shadows only on floating mockups.
- **Layout:** max content width 1280px, 28px side padding (16px on phones), section padding 110–140px.

### 3.4 Core components
- **Floating pill nav:** logo · How it works · Work · Services · For agencies · Pricing · FAQ · lime "Book a free call". It hides on scroll down and returns on scroll up (only after 80px of deliberate scroll).
- **Buttons:** lime (primary), ink (secondary), outline (tertiary). Magnetic on desktop.
- **Premium cursor (desktop with a fine pointer only):** a 7px dot plus a 42px ring with `mix-blend-mode: difference`. The ring grows over links and becomes a lime disc with a label ("View", "See fix", "Open") over items that have `data-cursor`. Hidden on touch devices and when reduced motion is preferred.
- **Eyebrow + split-word H2:** headlines reveal word by word.
- **Tab systems:** "starting points" tabs (auto-rotating with a progress bar), dark "deep dive" panels (list + copy + mockup), and industry showcase tabs (colored dot, progress bar, arrows, counter).
- **Booking widget:** date row and time chips; the confirm button text reflects the chosen slot; times shown in Eastern Time.
- **Footer reveal:** the footer is fixed underneath the page and revealed as the page scrolls away. A giant lime wordmark rises inside a clipped strip.

### 3.5 Mockup system (what makes the site look real)
All product visuals are built as components, not images:

| Component | Renders |
|---|---|
| `<DeviceFrame type="iphone\|android\|ipad\|browser">` | Device chrome. Phone height = `(width − 16) × 844 / 390 + 16` so the screen fills the frame exactly |
| `<ScaledScreen width={1280\|390}>` | Renders children at real size and scales to fit the container (ResizeObserver). It re-fits when a hidden tab or panel opens |
| `<SiteTemplate brand>` | A complete small-business website (announcement bar, nav, hero with photo and floating card, trust logos, services with prices, about + stats, testimonial, CTA band, footer) |
| `<AppScreen kind="home\|detail\|status\|tracking\|lock\|loyalty\|checkout" brand>` | Phone screens: home list, service/product detail with options, order or visit status timeline, live map tracking, iOS lock screen with notifications, loyalty stamp card, Apple Pay sheet |
| Tool windows | Figma file, code editor, test report, video call, PDF proposal, e-signature, team chat, analytics dashboard, ops dashboard, Excel, WhatsApp, Stripe-style checkout, code audit, automation run log, search results with map |

**Brand themes** (data, not code): each mockup brand defines `bg, ink, accent, accentInk, accentText, soft, line, logoFont, headingFont, radii`. Current concept brands: Maison Rose (salon), FreshFold (laundry), Apex Auto Works (automotive), Volt & Wire (electrical), Ember Kitchen (restaurant), Ledgerly (SaaS), Peak Plumbing (plumbing), FixPoint (phone repair).

> All concept brands, numbers, ratings, quotes and prices are placeholders. Before launch they are replaced with real, permitted client work, or clearly labeled as concept designs.

### 3.6 Motion principles and performance rules
Motion should feel slow, deliberate and buttery. Fewer, bigger moments beat constant movement.

**Signature moments:** hero intro, starting-point tabs, process story, results wipe, industry showcase, footer reveal.

**Hard rules, learned during mockup testing:**
1. **Never** put a CSS `transition` on `transform` for any element GSAP animates. It causes visible vibration.
2. Scroll-scrubbed animations use **transform and opacity only**. No scrubbed `clip-path`, `border-radius`, `filter`, `height` or `left`/`top`.
3. One element gets one owner per property. Parallax goes on a wrapper layer when the element also has intro or float animations.
4. Entrance animations must never be able to leave content invisible. Content is visible by default in CSS. Entrances are triggered by an `IntersectionObserver` that adds a class, with a fallback timer that forces the final state. GSAP ScrollTrigger is reserved for scrubbed and pinned effects. **Navigation controls such as tabs, arrows and buttons never get an entrance animation that starts hidden.**
5. Promote large animated panels with `will-change: transform`. Don't put `will-change` on everything.
6. Images in scaled mockups request the size actually displayed and decode asynchronously.
7. **Target:** fewer than 5% of frames over 33ms during a full-page scroll on a mid-range laptop. LCP under 2.5s, CLS under 0.05.

**Reduced motion:** with `prefers-reduced-motion`, disable Lenis, scrubs, pins and loops; show final states; keep only instant fades.

---

## 4. Homepage

**Story:** who we are → *where are you starting from?* → *exactly what happens after you call* → our work → what we add to your business → proof → prices → objections → book.

### H1 · Hero (dark rounded panel)
- **Kicker:** "Websites, apps and automation for US businesses"
- **H1:** "You run the business. **We build the software that runs it.**" (the second sentence in lime)
- **Sub:** booking apps, stores, payments, AI and dashboards; designed in Figma; you approve every screen first.
- **CTAs:** "Book a free call" (lime), "See how it works" (outline)
- **Proof row:** three avatars, ★★★★★ 4.9 from N business owners (real number required)
- **Visual:** the Maison Rose website in a browser, its booking app on an iPhone, and three floating cards (New booking · Payment received $85 Apple Pay · AI assistant reply at 11:42 PM). A lime circle bleeds off the top-right corner.
- **Motion:** the panel opens from a smaller rounded shape; words rise; devices slide in; cards pop in, then float gently. On scroll, the panel scales to 0.92, and the browser, phone and cards parallax on wrapper layers.

### H2 · Trust strip
"Trusted by owners and agencies across the US" plus client wordmarks (real logos only).

### H3 · Where are you starting from? (stone panel, 5 auto-rotating tabs, 9s each)
Each tab has a customer quote, a headline, a story paragraph, three ✓ points, a CTA and a mockup.

| Tab | Headline | Mockup |
|---|---|---|
| I have an idea | From a sketch on paper to an app in your customers' hands. | Napkin sketch → FreshFold app on iPhone |
| I have a website, I need more | Your website works. It just doesn't take money yet. | Peak Plumbing website + Stripe-style checkout (Apple Pay, Klarna, card) + "Payment succeeded" toast |
| I built it with AI, now I'm stuck | Built it with AI? We make it safe, fast and ready for real customers. | Code audit report: scores before → after, severity findings, code diff |
| My business runs on Excel | Your business runs on Excel. Let's make it run itself. | Excel with `#REF!` errors + WhatsApp ops chaos → ops dashboard with automation log |
| I'm an agency | You sell it. We build it, quietly, under your name. | Slack-style client channel + weekly report whose logo swaps to "YourAgency" |

### H4 · Statement band (full lime)
Two giant rows moving in opposite directions with scroll: "From first call [photo pill] to **App Store.**" / "No templates. No black box. No surprises."

### H5 · How it works (sticky stage + 9 steps)
The left column has steps with a progress line (scaleY). The right column has a sticky stage showing that step's mockup. Each step shows **when**, **what happens** and **what you do**.

| # | When | Step | Mockup |
|---|---|---|---|
| 01 | Day 1 · 30 min | We talk about your business | Video call with shared notes |
| 02 | Within 48h | Plan and fixed price | PDF proposal: scope table totaling $14,900, timeline |
| 03 | Week 1 | Agree and kick off | E-signature completed, two signatures, signers panel |
| 04 | Weeks 2–4 | Design every screen in Figma | Figma file: layers, 3 iPhone frames, selection, properties, live cursors, comment thread |
| 05 | End of week 4 | You approve | Team chat: designs posted, "Approved ✅", project bot moves to development |
| 06 | Weeks 5–9 | Build web + apps | Code editor + terminal (tests passed, staging deployed) + "Friday demo" chip |
| 07 | Weeks 10–11 | Test everything | Test report: iPhone/Pixel/iPad/desktop screenshots, 216 passed |
| 08 | Week 12 | Go live | App Store listing on iPhone + "now live" notification + "maisonrose.com is live" |
| 09 | After launch | We stay | Monthly analytics report |

Followed by a total bar: "About 12 weeks from first call to launch for a typical website + app" (**owner to confirm the real timeline**).

### H6 · Our work: "This is what we build."
Filter chips (All, Salons & Spas, Laundry, Automotive, Repair & Trades, Restaurants, SaaS). There's a two-column grid of project cards. Each card shows a full scaled website in a browser plus its app on a phone. **Hovering scrolls through the whole site.** The cursor shows "View".

### H7 · Deep dives (dark panel, 5 tabs)
| Tab | Headline | Mockup |
|---|---|---|
| Payments | Get paid the way your customers want to pay. | iOS Apple Pay sheet over the real booking app, looping: side-button pulse → Face ID → Done ✓ |
| AI assistant | Answered at 2 AM. Booked by morning. | Branded chat widget over the dimmed website, ending with a booked card + morning lead summary |
| Automation | Stop copying data between apps. | Automation run log: Shopify order → QuickBooks invoice → SMS → stock sheet, with timings |
| Mobile apps | Your business, on their home screen. | Two real apps (FreshFold, Apex Auto) |
| Found on Google | Found when they search for you. | Local search results with map, Maison Rose ranked first with "Book online" |

### H8 · Results: "Same business. Different week." (pinned)
For each of three clients, the "before" (paper order book / Instagram DMs + no-shows / Excel job cards) is wiped into the "after" (app / booking app / workshop board) by a lime divider. Result counters (+212%, −64%, 31h) count up with scroll. A progress bar shows 3 steps.

### H9 · Pricing (dark panel)
Add-on from **$990** · Launch (website) from **$3,900** · **Build** (web + app, lime, "Most chosen") from **$14,900** · Care from **$290/mo**, plus a white-label partner bar. All prices are placeholders for the owner to set. Card prices align on one baseline.

### H10 · FAQ
Accordion with real objections: cost, code ownership, not liking the design, time to launch, fixing Lovable/Replit apps, how white-label works. Output as FAQPage structured data.

### H11 · Closing CTA (dark panel)
"30 minutes. *Then you'll know exactly* what it costs and when it's live." Three-step list plus the booking widget.

### H12 · Footer (revealed)
Start here · Services · Industries · Company columns, email, giant lime wordmark, legal links.

---

## 5. Mobile App Development page (`/services/mobile-app-development`)

This is the **template for all service pages**: each new service page swaps its content, mockups, comparison, process, case study, pricing and FAQ, while keeping the structure.

### M1 · Hero (dark panel)
- **Breadcrumb:** Services / Mobile Apps
- **H1:** "Your customers live on their phones. **Your business should too.**"
- **Sub:** iPhone and Android apps for bookings, orders, deliveries and loyalty; designed in Figma; published to both stores for you.
- **CTAs:** Book a free call · See app pricing
- **Tech chips:** Flutter, React Native, Swift · iOS, Kotlin · Android, Apple Pay & Google Pay
- **Visual:** three apps fanned out (FreshFold, Maison Rose, Apex Auto) plus floating cards: "Push · Your laundry is ready", "★ 4.9 · 12K ratings", "iOS + Android ✓". A lime circle sits bottom-right.

### M2 · Sound familiar? (hover or tap to reveal the fix)
Three cards. Each has a phone showing a real **before** moment; on hover (or tap on touch) a lime panel wipes up and the **after** app slides in. Below it: a serif quote, the cost (in red) and the fix.

| Quote | Before | After |
|---|---|---|
| "Customers keep asking if we have an app. We don't." | iMessage: customer asks for an app and says a competitor has one | Maison Rose app: "Hi Sarah · Book again" |
| "Delivery apps take 30% of every order." | Delivery-platform weekly payout: −$1,446 commission, 0 customer contacts shared | Ember's own ordering app: "0% commission · earn rewards" |
| "Booking works on desktop. On a phone it's painful." | A desktop site squeezed onto a phone with a required-date error and a "Pinch to zoom" hint | Native booking: "Reserve my spot · $85" |

### M3 · Apps we've shipped: "Built for businesses like yours." (industry showcase)
- **Controls:** always-visible industry tabs with brand-color dots and a progress bar; "‹ ›" arrows; a "NN / 06 · Industry" counter. Autoplays every 6s while on screen; any manual interaction stops autoplay.
- **Stage:** the background gradient takes the brand's colors. It shows the app icon, name, location, store rating, two result tiles, feature chips, and **three phones** (home · detail · status/tracking).

| Industry | Brand | Screens |
|---|---|---|
| Salons & spas | Maison Rose | Home → Balayage with stylist picker → "Your visit" timeline |
| Laundry & dry cleaning | FreshFold | Schedule pickup → Wash & fold options per lb → Live driver map |
| Automotive | Apex Auto Works | Your vehicle → Brake quote with approve → "Ready" job status |
| Restaurants | Ember Kitchen | Menu → Dish options → Pickup countdown |
| Home services | Volt & Wire | Estimate → EV charger install options → Electrician arriving |
| Phone repair & retail | FixPoint | Repair or trade-in → Instant trade-in quote by condition → Repair ready |

### M4 · What your app can do (dark panel, 5 tabs)
| Tab | Headline | Phone screen |
|---|---|---|
| Booking & payments | Book and pay in under a minute. | Checkout with deposit + Apple Pay |
| Push notifications | Reach them on the lock screen. | iOS lock screen with 3 notifications |
| Live tracking | "Where's my order?" answered before they ask. | Map with driver route + delivery progress sheet |
| Loyalty & wallet | A loyalty card they never lose. | Stamp card, perks, "Add to Apple Wallet" |
| Your admin dashboard | Run it all from one dashboard. | Bookings table with deposit status + push campaign result |

### M5 · The honest tech choice
A comparison table of **Flutter** (recommended, "Most chosen") vs **React Native** vs **Native (Swift + Kotlin)**. Rows: best for · time to launch · budget · performance · future updates.

### M6 · About 12 weeks, step by step (pinned, horizontal)
Six cards slide sideways while you scroll down: Plan (week 1) · Design in Figma (weeks 2–4, three real screen thumbnails) · Build iOS + Android (weeks 5–9) · Test on real phones (weeks 10–11) · Launch in both stores (week 12) · Grow (ongoing).

### M7 · Case study spotlight (dark panel)
FreshFold: problem, what we built, results (+212% online orders · 4.8★ · −50% phone calls), quote, and both of its apps (customer + live tracking).

### M8 · App pricing
MVP app from **$9,900** (6–8 weeks) · **Business app** from **$14,900** (lime, most chosen, 10–12 weeks) · Custom platform from **$29,000** (14–20 weeks), plus "What changes the price" chips. Placeholder prices.

### M9 · Mobile app FAQ
Store publishing, timeline, Flutter vs React Native, taking over an existing app, running costs, code ownership. FAQPage structured data.

### M10 · Often paired with
Payment integration · AI assistant · Web apps & dashboards · Fix my AI-built app, plus an industries row.

### M11 · CTA + footer
"Got an app idea? *30 minutes* and you'll know what it costs." with the shared booking widget and footer.

---

## 6. Accessibility, SEO and responsive behavior

- **Accessibility:** semantic landmarks; tabs follow the WAI-ARIA tabs pattern with arrow-key support; autoplay pauses on hover, focus and reduced motion; hover-only reveals also work on tap and focus; all mockups get `aria-hidden` plus a text description; color contrast meets WCAG AA; visible focus rings.
- **SEO:** per-page metadata from the i18n files; Organization, Service and FAQPage structured data; `hreflang`-ready; semantic H1/H2 order; fast LCP (hero text renders before the animation library loads).
- **Responsive:**
  - **Under 1024px:** two-column sections stack; sticky stages turn into an inline mockup under each step; pinned horizontal sections turn into swipeable carousels; the results wipe becomes tap-to-compare.
  - **Under 640px:** the hero mockup shows only the phone; the gallery is one column; the nav collapses to a menu with the CTA always visible.
  - The custom cursor and magnetic buttons are desktop-only.

---

## 7. Open items for the owner (content, not design)
1. **Brand name**, logo and domain. The `{brand}` placeholder everywhere is ready.
2. **Real prices** for every tier (homepage and mobile page).
3. **Real typical timeline** (we assumed about 12 weeks for website + app).
4. **Real proof:** client logos, ratings and platforms you're verified on (Clutch, Upwork, Google, Shopify Partner), case studies and quotes, all with permission.
5. **Photography:** licensed stock or your own, to replace Unsplash placeholders.
6. Whether to show **Tabby** (Gulf buy-now-pay-later) later, when Arabic/UAE returns.

## 8. Out of scope for this spec
Other 11 service pages, industry landing pages, technology pages (`/laravel`, `/flutter`), About, Contact, blog, Arabic localization, CMS choice, and the booking backend. These are planned separately and reuse this design system.
