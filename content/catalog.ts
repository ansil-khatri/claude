/** Lightweight registry of every service and industry. Used by nav, footer, hubs, sitemap, llms.txt. */
export type Group = "sell" | "build" | "run";
export type ServiceMeta = {
  slug: string; name: string; short: string; group: Group; from: string; fromUnit?: string; problem: string; hero: string; source?: string;
};

export const GROUPS: Record<Group, { title: string; blurb: string }> = {
  sell: { title: "Sell online", blurb: "Stores, websites and checkout that turn visitors into orders." },
  build: { title: "Build", blurb: "Apps and products your customers use every day." },
  run: { title: "Run & grow", blurb: "The systems behind the business: WhatsApp, invoices, search, rescue." },
};

export const SERVICES: ServiceMeta[] = [
  { slug: "shopify-development", name: "Shopify", short: "Shopify agency in Dubai & UAE", group: "sell", from: "AED 9,900", problem: "Plenty of visitors. Hardly anyone buys.", hero: "shopify", source: "service-shopify" },
  { slug: "website-design", name: "Website design", short: "Bilingual websites that bring in work", group: "sell", from: "AED 7,900", problem: "My website is old, English-only or slow.", hero: "website", source: "service-wordpress" },
  { slug: "payment-integration", name: "Payments", short: "Tabby, Tamara, Stripe, Telr, Apple Pay", group: "sell", from: "AED 2,900", problem: "Customers want to pay. We make it hard.", hero: "payments", source: "service-payments" },
  { slug: "landing-pages", name: "Landing pages", short: "One page per ad that gets calls", group: "sell", from: "AED 5,900", problem: "I pay for clicks that never call.", hero: "landing", source: "service-landing-pages" },
  { slug: "mobile-app-development", name: "Mobile apps", short: "iPhone and Android apps", group: "build", from: "AED 35,000", problem: "Customers keep asking if we have an app.", hero: "mobile", source: "service-mobile-apps" },
  { slug: "web-app-development", name: "Web apps & portals", short: "Custom business software", group: "build", from: "AED 29,000", problem: "Everything lives in Excel and WhatsApp groups.", hero: "webapp", source: "service-web-apps" },
  { slug: "saas-development", name: "SaaS & MVPs", short: "From idea to paying customers", group: "build", from: "AED 24,000", problem: "I know what my industry is missing.", hero: "saas", source: "service-saas" },
  { slug: "ai-whatsapp-automation", name: "WhatsApp & AI", short: "Assistants that answer, book and take orders", group: "run", from: "AED 2,900", problem: "We're drowning in WhatsApp messages.", hero: "ai", source: "service-ai" },
  { slug: "business-automation", name: "Automation & ERP", short: "One system for jobs, stock and invoices", group: "run", from: "AED 7,900", problem: "The business runs on six spreadsheets and a group chat.", hero: "automation", source: "service-automation" },
  { slug: "e-invoicing-integration", name: "E-invoicing integration", short: "Ready for the July 2027 mandate", group: "run", from: "AED 9,900", problem: "I need e-invoicing before 2027.", hero: "einvoice" },
  { slug: "seo", name: "Local SEO", short: "English + Arabic search, Maps and AI answers", group: "run", from: "AED 3,500", fromUnit: "/mo", problem: "People search and call my competitor.", hero: "seo", source: "service-seo" },
  { slug: "vibe-code-rescue", name: "Fix my AI-built app", short: "Lovable, Bolt, Replit, Cursor rescue", group: "run", from: "AED 2,900", problem: "I built it with AI and it keeps breaking.", hero: "rescue", source: "service-vibe-rescue" },
];

export type IndustryMeta = { slug: string; name: string; brand: string; h1: [string, string]; worksWith: string[]; source: string; solutions: { slug: string; name: string }[] };
export const INDUSTRIES: IndustryMeta[] = [
  { slug: "restaurants", name: "Restaurants & cloud kitchens", brand: "ember", h1: ["The kitchen is full every night.", "The apps keep 30% of it."], worksWith: ["Foodics", "Talabat", "Deliveroo", "Careem", "Eat App"], source: "industry-restaurants",
    solutions: [{ slug: "whatsapp-ordering", name: "WhatsApp ordering" }, { slug: "online-ordering", name: "Commission-free ordering" }, { slug: "ordering-app", name: "Restaurant app" }] },
  { slug: "salons", name: "Salons & spas", brand: "maisonrose", h1: ["Saturday is fully booked.", "Tuesday is a different story."], worksWith: ["Fresha", "Booksy", "Vagaro"], source: "industry-salons",
    solutions: [{ slug: "booking-app", name: "Own booking app" }] },
  { slug: "laundry", name: "Laundry & dry cleaning", brand: "freshfold", h1: ["Your machines run all day.", "So does your phone."], worksWith: ["CleanCloud", "Zoho Books", "WhatsApp Business"], source: "industry-laundry",
    solutions: [{ slug: "pickup-delivery-app", name: "Pickup & delivery app" }] },
  { slug: "auto-repair", name: "Garages & car service", brand: "apex", h1: ["You run a great shop.", "The front desk is running you."], worksWith: ["Your garage software", "Zoho Books", "WhatsApp Business"], source: "industry-auto-repair",
    solutions: [{ slug: "website", name: "Garage website" }] },
  { slug: "home-services", name: "AC, cleaning & maintenance", brand: "peakcooling", h1: ["You're on a roof at 46°C.", "Your phone is ringing again."], worksWith: ["Jobber", "Zoho Books", "WhatsApp Business"], source: "industry-home-services",
    solutions: [{ slug: "website", name: "AC company website" }] },
  { slug: "phone-repair", name: "Phone repair & trade-ins", brand: "fixpoint", h1: ["You fix a screen in 45 minutes.", "\"How much?\" takes all day."], worksWith: ["RepairDesk", "Zoho Books", "WhatsApp Business"], source: "industry-phone-repair",
    solutions: [{ slug: "website", name: "Phone repair website" }] },
];

export const service = (slug: string) => SERVICES.find((s) => s.slug === slug);
export const industry = (slug: string) => INDUSTRIES.find((s) => s.slug === slug);

export const NAV_MAIN = [
  { href: "/process", label: "How it works" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/agencies", label: "For agencies" },
  { href: "/guides", label: "Guides" },
];
