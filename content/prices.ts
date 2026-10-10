/** Single AED price book (docs/seo-uae/06-pricing-aed.md + UAE spec §5). Every page reads from here. */
export type PriceRow = { service: string; slug: string; tiers: [name: string, from: string, time: string][]; land: string };

export const PACKAGES = [
  { k: "ADD-ON", name: "Add-on", amt: "AED 2,900", blurb: "Payments, a WhatsApp/AI assistant on your site, or fixing an AI-built app.", items: ["Live in days", "Fixed price", "Typical total AED 2,900–12,000"], time: "Live in days", href: "/services/payment-integration" },
  { k: "LAUNCH", name: "Launch", amt: "AED 7,900", blurb: "A bilingual business website or Shopify store.", items: ["Arabic + English", "You edit it yourself", "Typical total AED 7,900–24,000"], time: "2–4 weeks", href: "/services/website-design" },
  { k: "MOST CHOSEN", name: "Build", amt: "AED 49,000", blurb: "Website plus an iPhone and Android app.", items: ["Designed in Figma, approved first", "Apple Pay, Tabby, WhatsApp updates", "Typical total AED 49,000–120,000"], time: "~12 weeks", hot: true, href: "/services/mobile-app-development" },
  { k: "CARE", name: "Care", amt: "AED 790", unit: "/month", blurb: "Hosting, updates, backups, security and changes.", items: ["Daily backups, uptime alerts", "2 hours of changes included", "Cancel with 30 days' notice"], time: "Ongoing", href: "/pricing#care" },
] as { k: string; name: string; amt: string; unit?: string; blurb: string; items: string[]; time: string; hot?: boolean; href: string }[];

export const PRICE_ROWS: { group: string; rows: PriceRow[] }[] = [
  { group: "Sell online", rows: [
    { service: "Shopify", slug: "shopify-development", tiers: [["Launch store", "AED 9,900", "3–4 wk"], ["Custom theme, Arabic + English, Tabby/Tamara", "AED 29,000", "6–8 wk"], ["Plus, headless or custom apps", "AED 69,000", "10–16 wk"]], land: "AED 9,900–55,000" },
    { service: "Website design", slug: "website-design", tiers: [["Business site (up to 8 pages, EN + AR)", "AED 7,900", "2–4 wk"], ["Custom site", "AED 19,900", "5–6 wk"], ["WooCommerce / bookings / custom", "AED 44,000", "8–12 wk"]], land: "AED 7,900–30,000" },
    { service: "Payments", slug: "payment-integration", tiers: [["Checkout & payment links", "AED 2,900", "Days"], ["Complete payments (Tabby/Tamara, subscriptions, Zoho sync)", "AED 19,900", "3–4 wk"], ["Marketplace / multi-currency", "AED 49,000", "6–8 wk"]], land: "AED 2,900–25,000" },
    { service: "Landing pages", slug: "landing-pages", tiers: [["One page", "AED 5,900", "7–10 days"], ["Campaign pack (4 pages)", "AED 15,900", "2–3 wk"], ["Test & improve", "AED 4,900/mo", "Monthly"]], land: "AED 5,900–20,000" },
  ] },
  { group: "Build", rows: [
    { service: "Mobile apps", slug: "mobile-app-development", tiers: [["MVP app", "AED 35,000", "6–8 wk"], ["Business app (= homepage Build)", "AED 49,000", "10–12 wk"], ["Custom platform", "AED 105,000", "14–20 wk"]], land: "AED 49,000–130,000" },
    { service: "Web apps", slug: "web-app-development", tiers: [["Internal tool", "AED 29,000", "5–7 wk"], ["Business web app", "AED 59,000", "9–12 wk"], ["Platform", "AED 120,000", "14–20 wk"]], land: "AED 39,000–140,000" },
    { service: "SaaS & MVPs", slug: "saas-development", tiers: [["Clickable prototype", "AED 24,000", "2–3 wk"], ["Launch-ready SaaS", "AED 120,000", "10–14 wk"], ["Platform", "AED 250,000", "16+ wk"]], land: "AED 120,000–320,000" },
  ] },
  { group: "Run & grow", rows: [
    { service: "WhatsApp & AI", slug: "ai-whatsapp-automation", tiers: [["WhatsApp / web assistant (+ AED 150–1,100/mo running)", "AED 2,900", "Days"], ["Assistant that takes orders/bookings + staff handover", "AED 29,000", "4–6 wk"], ["Back-office agents", "AED 59,000", "8–12 wk"]], land: "AED 2,900–45,000" },
    { service: "Automation & ERP", slug: "business-automation", tiers: [["Automations (up to 10)", "AED 7,900", "1–3 wk"], ["Operations system", "AED 59,000", "8–12 wk"], ["Multi-branch ERP", "AED 150,000", "16+ wk"]], land: "AED 7,900–110,000" },
    { service: "E-invoicing integration", slug: "e-invoicing-integration", tiers: [["Readiness + ASP setup (Zoho/Odoo/QuickBooks)", "AED 9,900", "2–4 wk"], ["Custom / legacy system integration", "AED 24,000", "4–8 wk"], ["Multi-entity / ERP rebuild", "AED 59,000+", "8–16 wk"]], land: "AED 9,900–35,000" },
    { service: "Local SEO", slug: "seo", tiers: [["Setup", "AED 4,900", "2–3 wk"], ["Monthly (English)", "AED 3,500/mo", "Monthly"], ["Bilingual EN + AR · multi-branch AED 11,000/mo", "AED 6,500/mo", "Monthly"]], land: "AED 3,500–11,000/mo" },
    { service: "Fix my AI-built app", slug: "vibe-code-rescue", tiers: [["Audit", "Free", "48 h"], ["Rescue & launch", "AED 2,900", "2–4 wk"], ["Rescue + keep building", "AED 11,000/mo", "Monthly"]], land: "Most rescues AED 9,000–27,000" },
    { service: "White-label for agencies", slug: "agencies", tiers: [["Per project", "AED 18,000", "From 5 days"], ["Dedicated team", "AED 59,000/mo", "Monthly"], ["Hour blocks", "AED 220/h", "Flexible"]], land: "Wholesale, you set the client price" },
  ] },
  { group: "Industry packages (all six industries)", rows: [
    { service: "Restaurants, salons, laundries, garages, AC & maintenance, phone repair", slug: "industries", tiers: [["Get found / booked / ordering", "AED 7,900", "2–4 wk"], ["Full industry upgrade", "AED 49,000", "~12 wk"], ["Multi-location platform", "AED 105,000", "14–20 wk"]], land: "AED 7,900–120,000" },
  ] },
];

export const CARE = [
  { name: "Care", amt: "AED 790", items: "Hosting setup and monitoring, updates, daily backups, security, uptime alerts, 2 h of changes" },
  { name: "Care Plus", amt: "AED 1,900", items: "Everything in Care + 6 h of changes, same-day WhatsApp replies, monthly speed/SEO check" },
  { name: "Growth Care", amt: "AED 4,900", items: "Everything in Care Plus + 15 h of improvements, monthly report and call, small features every two weeks" },
];

export const PRICE_DRIVERS = ["Number of pages or screens", "Arabic + English (RTL)", "Payments & Tabby/Tamara", "Integrations (Zoho, Foodics…)", "Data migration", "Photos & content", "Number of locations", "Deadline"];

export const COMPARE = {
  cols: ["Freelancer / very cheap shop", "Large Dubai agency", "Us"],
  rows: [
    ["Small business website", "AED 1,500–5,000", "AED 18,000–40,000+", "AED 7,900–19,900"],
    ["Business app", "AED 8,500–45,000", "AED 70,000–120,000+", "AED 35,000–105,000"],
    ["Fixed price in writing?", "Sometimes", "Usually", "Always, in AED"],
    ["Arabic + English included?", "Extra", "Extra", "Included"],
    ["Contract lock-in", "None (or none that holds)", "6–12 months", "None. 30 days' notice"],
    ["Who owns the code?", "Often unclear", "Often the agency until paid in full", "You, from the first payment"],
  ],
};

export const TERMS = [
  "Under AED 20,000: 50% to start, 50% at launch.",
  "Over AED 20,000: 30% to start, 40% at design approval / mid-build demo, 30% at launch.",
  "Monthly plans are billed monthly. 30 days' notice to cancel. No 6-month lock-ins.",
  "Pay by bank transfer, card or payment link. Tax invoices issued (and e-invoices once the mandate applies to us).",
  "You own the code, designs and accounts (Shopify, Apple/Google developer accounts, domains) from the first payment.",
];
