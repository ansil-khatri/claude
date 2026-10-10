import type { Page } from "../types";

/** Gap-audit patch for the Website design page (service spec P1-P5, UAE localization §8.6). Spread over the base page. */
export const PATCH: Partial<Page> = {
  stage: {
    main: { t: "site", k: "voltwire" }, side: { t: "phone", k: "voltwire", kind: "home" },
    cards: [
      { icon: "⚡", title: "PageSpeed 41→96", sub: "Mobile", style: { left: "0%", bottom: "10%" } },
      { icon: "💬", title: "New estimate request", sub: "EV charger · Khalifa City", style: { right: "4%", top: "2%" }, dark: true },
      { icon: "🔌", title: "Plugins 47→12", sub: "Every update tested first", style: { right: "-2%", bottom: "28%" } },
    ],
  },
  showcase: {
    eyebrow: "Sites we've built", head: "WordPress sites that fit your business.", lead: "Each one in English and Arabic, edited by the owners themselves.",
    brands: ["voltwire", "apex", "maisonrose", "peakcooling"], phone: "home",
    items: [
      { label: "Salons & spas", brand: "maisonrose", results: ["+62% · online bookings", "4 min · to change a price"], chips: ["Custom blocks", "Booking + deposits", "Gift cards", "Instagram feed"], moment: "Book your visit: Balayage, Mia, Thu 10 AM, AED 85 deposit", phone: "detail" },
      { label: "Laundry", brand: "freshfold", results: ["AED 2,918 · orders last Friday", "21% · carts abandoned (was 64%)"], chips: ["WooCommerce", "Pickup windows", "Apple Pay", "Subscriptions"], moment: "Checkout with Apple Pay", phone: "checkout" },
      { label: "Auto shops", brand: "apex", results: ["3.4× · online bookings", "0.9 s · mobile load"], chips: ["Service booking", "Shop software sync", "12 area pages", "Care plan"], moment: "Book your service: brakes, 2019 Porsche 911, drop-off", phone: "detail" },
      { label: "Electricians", brand: "voltwire", results: ["+41 · estimate requests a month", "#1 · “EV charger install Abu Dhabi”"], chips: ["Estimate form", "Coverage check", "Photo upload", "Rank Math SEO"], moment: "Get your estimate", phone: "detail" },
      { label: "Restaurants", brand: "ember", results: ["AED 0 · commission on bookings", "1,240 · guests booked online a month"], chips: ["Reservations", "Menu blocks", "Private dining", "Gift cards"], moment: "Reserve a table", phone: "detail" },
      { label: "SaaS", brand: "ledgerly", results: ["2.6× · demo bookings", "Same day · new pages, no developer"], chips: ["Block patterns", "HubSpot forms", "Docs & blog", "Headless-ready"], moment: "“See Ledgerly in 20 minutes”", phone: "home" },
    ],
  },
  tabs: [
    {
      tab: "Edit it yourself", chip: "Custom blocks · Gutenberg · ACF", h: "Change it in two minutes. Break nothing.",
      p: "Your site is built from blocks made for your business: services with prices, team members, business hours, reviews, before-and-afters. Your team fills in the fields and the design stays perfect, on every screen size.",
      fine: "No page builder, so there are no 40 nested columns and no \"hidden on mobile\" copies to keep in sync.",
      viz: { t: "dash", title: "Page editor · Services", sub: "Maison Rose · Service card block", kpis: [["Block", "Service card"], ["Service", "Bridal"], ["Price", "from AED 950"]], rows: [["Title", "g|Bridal"], ["Badges", "b|Trial included · On request"], ["Arabic version", "b|In sync"], ["✓ Saved", "g|Sophie changed the Bridal price"]], head: ["FIELD", "VALUE", ""] },
    },
    {
      tab: "Fast on phones", chip: "Core Web Vitals · PageSpeed 90+", h: "Loads before they lose interest.",
      p: "Most of your visitors are on a phone, often on a slow connection. A hand-built theme loads only what each page needs: compressed images, no unused scripts and no slider plugin weighing down the homepage.",
      fine: "Faster pages rank higher on Google and cost less per click on ads.",
      viz: { t: "dash", title: "PageSpeed · mobile", sub: "voltwire.ae/ev-charger-installation · Sept 2 → Oct 14", kpis: [["Performance", "96", "was 41"], ["LCP", "0.9 s", "was 7.4 s"], ["CLS", "0.00", "was 0.33"]], rows: [["Total blocking time", "g|40 ms (was 1,860 ms)"], ["Page size", "g|0.8 MB (was 6.1 MB)"], ["Theme", "g|Custom block theme (was page builder)"]], head: ["CHECK", "RESULT", ""] },
    },
    {
      tab: "WooCommerce", chip: "WooCommerce · Stripe · Subscriptions", h: "A store inside the site you already have.",
      p: "Sell products, bookings, gift cards or subscriptions right next to your content. Apple Pay and Google Pay at checkout, and orders land in one clean list your team can actually work from.",
      fine: "Already outgrowing WooCommerce? We'll tell you honestly when Shopify is the better move.",
      viz: { t: "dash", title: "WooCommerce · Orders", sub: "FreshFold · Today", kpis: [["Orders today", "AED 2,918"], ["Apple Pay", "58%"], ["Carts abandoned", "21%", "was 64%"]], rows: [["#4821 Layla K.", "AED 420", "g|Apple Pay"], ["#4820 Hamad R.", "AED 890", "y|Pending"], ["#4819 Priya S.", "AED 310", "g|Paid"], ["#4818 Mariam A.", "AED 560", "g|Tabby"], ["#4817 Omar F.", "AED 738", "g|Apple Pay"]], head: ["ORDER", "TOTAL", "STATUS"] },
    },
    {
      tab: "Custom plugins", chip: "Custom plugins · REST API · WP-CLI", h: "When no plugin does exactly what you need.",
      p: "Booking rules, quote calculators, member areas, and syncs with your CRM or shop software. We write small, focused plugins that do one job well, instead of stacking five plugins that almost do it.",
      fine: "Every plugin is tested, documented and yours. It never edits WordPress core, so updates stay safe.",
      viz: { t: "code", file: "apex-bookings/includes/class-sync.php", lines: ["<?php // apex-bookings: booking → shop software", "+add_action('apex_booking_confirmed', function ($booking) {", "+  $order = Shop_API::create_repair_order($booking); // shop software", "+  Whatsapp::send($booking->phone, 'Your slot is confirmed');", "+});", "// Terminal", "$ vendor/bin/phpunit", "✓ OK: 86 tests, 86 passing", "$ wp apex sync", "✓ 42 bookings sent, 0 errors"] },
    },
    {
      tab: "Security & care", chip: "Managed hosting · Backups · Monitoring", h: "Updates, backups and security, handled.",
      p: "On a care plan, we test every update on a copy of your site first, back it up every night and watch for attacks around the clock. Each month you get a one-page report of what we did.",
      fine: "If something does go wrong, we fix it the same day. It's in the contract.",
      viz: { t: "dash", title: "Care plan · October", sub: "Volt & Wire · Auto-report", dark: true, kpis: [["Uptime", "99.99%"], ["Backups", "31 / 31"], ["Updates", "12 applied"]], rows: [["Malware scan", "g|Clean"], ["Plugin updates", "g|All current"], ["Security patch", "g|Live in 3 hours"], ["Changes (2 h plan)", "l|1.5 h used"]], head: ["CHECK", "RESULT", ""] },
    },
  ],
  techRows: [
    ["", "Custom block theme Most chosen WordPress · Gutenberg · ACF", "Page builder Elementor, Divi, WPBakery", "Headless WordPress WordPress + Next.js front end", "Webflow / Squarespace hosted site builders"],
    ["Best for", "Businesses that want a fast site their team edits safely", "Quick one-off sites with a small budget", "Content-heavy brands with an in-house dev team", "Small brochure sites with no custom features"],
    ["Speed on phones", "●●●●●", "●● ●●●", "●●●●●", "●●●● ●"],
    ["Editing for your team", "Fill in fields, the design can't break", "Drag anything, easy to break", "Easy in WordPress, but changes need a developer to deploy", "Easy, within the template's limits"],
    ["Running cost", "AED 75–220 / month hosting", "+ AED 220–730 / year plugin licences", "+ AED 75–370 front-end hosting", "AED 85–180 / month, per site"],
    ["Custom features & integrations", "Anything, through plugins you own", "Limited to the builder's widgets", "Anything", "Limited to the platform's apps"],
  ],
};
