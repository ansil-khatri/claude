/** Editorial plan from docs/seo-uae/09-blog-calendar.md. Guides with `body` are published; the rest show as "coming soon" (no page, no sitemap entry). */
export type Block =
  | { h2: string; id?: string }
  | { h3: string }
  | { p: string }
  | { ul: string[] }
  | { ol: string[] }
  | { check: string }
  | { tip: string }
  | { figure: { title: string; rows: [string, string][] } }
  | { table: { head: string[]; rows: string[][] } };

export type Guide = {
  n: number; slug: string; title: string; seoTitle: string; cat: string; month: string; read: number;
  answer?: string; opening?: string; keywords?: string[]; links?: { href: string; label: string }[];
  body?: Block[]; faq?: { q: string; a: string }[]; updated?: string; ar?: boolean;
};

export const CHECKED = "October 2026";
export const CATS = ["E-invoicing", "Costs", "E-commerce", "Apps", "Payments", "WhatsApp & AI", "Websites", "Restaurants", "Salons", "For agencies", "Automation", "Startups", "SEO"];

const G = (n: number, slug: string, title: string, seoTitle: string, cat: string, month: string, read = 8, extra: Partial<Guide> = {}): Guide => ({ n, slug, title, seoTitle, cat, month, read, ...extra });

export const GUIDES: Guide[] = [
  G(1, "uae-e-invoicing", "UAE e-invoicing in plain English: what your business must do before July 2027", "UAE E-Invoicing 2026–2027: Deadlines and What SMEs Must Do", "E-invoicing", "Month 1", 9, { ar: true,
    keywords: ["e-invoicing uae", "uae e-invoicing deadline", "e-invoicing mandate uae"],
    opening: "Your accountant forwards a Ministry of Finance circular with “ASP?” in the subject line, and nobody in the office knows what it means.",
    answer: "Most UAE businesses must send invoices electronically through an Accredited Service Provider (ASP). Businesses with revenue under AED 50 million must appoint an ASP by 31 March 2027 and go live on 1 July 2027; larger businesses go live on 1 January 2027.",
    links: [{ href: "/services/e-invoicing-integration", label: "E-invoicing integration" }, { href: "/tools/e-invoicing-readiness-check", label: "Readiness check" }, { href: "/guides/e-invoicing-checklist-july-2027", label: "10-step checklist" }, { href: "/guides/e-invoicing-zoho-books-uae", label: "E-invoicing with Zoho Books" }],
    body: [
      { h2: "What is e-invoicing, and why is the UAE doing it?", id: "what" },
      { p: "E-invoicing means your invoice is no longer a PDF you email. It is structured data (in the PINT AE format) sent through a certified network, so the tax authority and your customer receive the same invoice at the same time. Governments adopt it to reduce VAT errors and fraud, and to speed up payment." },
      { p: "The UAE’s system is a “five-corner” model: your system, your Accredited Service Provider (ASP), the buyer’s ASP, the buyer and the tax authority. You only ever deal with your own ASP." },
      { h2: "Who has to do it, and by when?", id: "when" },
      { check: "Dates below follow Ministry of Finance guidance as last checked in " + CHECKED + ". They have changed once already, so confirm on the official Ministry of Finance and Federal Tax Authority pages before you plan." },
      { table: { head: ["Milestone", "Date", "Applies to"], rows: [["Pilot", "From 1 July 2026", "Volunteers and early adopters"], ["Appoint an ASP (large businesses)", "30 October 2026", "Revenue AED 50 million or more"], ["Go live", "1 January 2027", "Revenue AED 50 million or more"], ["Appoint an ASP", "31 March 2027", "Revenue under AED 50 million"], ["Go live", "1 July 2027", "Revenue under AED 50 million"], ["Go live", "1 October 2027", "Government entities"]] } },
      { p: "Business-to-consumer (B2C) sales are not covered yet. That may change, so we re-check monthly." },
      { h2: "What’s an Accredited Service Provider (ASP)?", id: "asp" },
      { p: "An ASP is a company accredited by the authorities to send and receive e-invoices on your behalf. You choose one, connect your invoicing software to it, and it handles the format, the validation and the reporting. The official list of accredited providers is published by the Ministry of Finance; we link to it rather than copy it, so it stays current." },
      { p: "We are an integration partner, not an ASP. We connect your Zoho Books, Odoo, QuickBooks, POS or custom software to the ASP you choose." },
      { h2: "What changes on your invoices?", id: "invoices" },
      { ul: ["Both your TRN and your customer’s TRN must be present and valid.", "Customer name and address must be complete and consistent.", "VAT 5% (and zero-rated or exempt lines) must be shown per line in structured fields.", "The invoice is created in the PINT AE data format, not as a free-form PDF.", "Credit notes must reference the original invoice."] },
      { h2: "What does it cost a small business?", id: "cost" },
      { p: "Costs have two parts: the ASP’s fees (usually per invoice or per month, so ask two or three for a quote on your volume) and the work to connect your software and clean your data. Our readiness and setup package for Zoho Books, Odoo or QuickBooks starts from AED 9,900; custom or legacy systems from AED 24,000." },
      { check: "ASP pricing varies by provider and is changing as the market opens. Check current quotes rather than relying on any single figure." },
      { h2: "Does it apply if I’m in a free zone, or not VAT-registered?", id: "freezone" },
      { check: "Free-zone treatment depends on VAT registration and the type of supply, and the guidance has been evolving. Confirm with the Ministry of Finance guidance or your tax advisor before you decide you are exempt." },
      { p: "If you are not VAT-registered and have no B2B invoicing in scope, you may not be affected yet. If you issue tax invoices to other businesses, assume you are." },
      { h2: "A 10-step checklist", id: "checklist" },
      { ol: ["Confirm your revenue band and deadline.", "List every place invoices are created (POS, Zoho, Excel, Word).", "Check customer data (TRNs, addresses).", "Pick an ASP: ask for quotes and test accounts.", "Check your accounting software’s e-invoicing support.", "Decide: built-in support or an integration.", "Test with real invoices in the ASP’s sandbox.", "Train whoever issues invoices.", "Keep records as required.", "Go live before the deadline, not on it."] },
      { h2: "What happens if you’re late?", id: "late" },
      { check: "Penalties are set by the authorities and may change. Check the current penalty schedule on the official Federal Tax Authority site." },
      { p: "Beyond fines, the practical risk is that invoices you cannot issue electronically cannot be delivered or paid on time. Start with the data clean-up: it takes longer than the technical connection." },
    ],
    faq: [{ q: "Are you an ASP?", a: "No. We are an integration partner. We connect your system to the ASP you choose, clean your data and test the flow." }, { q: "Is B2C covered?", a: "Not yet, as of our last check (" + CHECKED + ")." }, { q: "Where do I find the list of ASPs?", a: "On the official Ministry of Finance website. We don’t copy it so it never goes stale." }, { q: "How long does it take to get ready?", a: "Most businesses with one or two invoice sources are ready in 2–4 weeks." }] }),
  G(2, "e-invoicing-checklist-july-2027", "E-invoicing checklist for UAE small businesses: 10 steps before July 2027", "E-Invoicing Checklist for UAE SMEs: 10 Steps Before July 2027", "E-invoicing", "Month 1", 6, {
    opening: "You’ve read the headlines. Now you need a list you can tick off with your accountant this week.",
    answer: "Ten steps get most small businesses ready: confirm your deadline, list every place invoices are created, clean your customer data, pick an ASP, check your software, plan the connection, test, train, keep records and go live early.",
    links: [{ href: "/guides/uae-e-invoicing", label: "The full e-invoicing guide" }, { href: "/services/e-invoicing-integration", label: "E-invoicing integration" }, { href: "/tools/e-invoicing-readiness-check", label: "Readiness check" }],
    body: [
      { h2: "1. Confirm your revenue band and deadline" }, { p: "Under AED 50 million: appoint an ASP by 31 March 2027 and go live on 1 July 2027. AED 50 million or more: go live on 1 January 2027." }, { check: "Dates per Ministry of Finance guidance, last checked " + CHECKED + "." },
      { h2: "2. List every place invoices are created" }, { p: "POS, Zoho Books, Excel, Word templates, custom software, a freelancer’s script. Each one needs a path to your ASP." },
      { h2: "3. Check your customer data" }, { p: "Every B2B customer needs a valid TRN and a complete address. Export your customer list and count the blanks." },
      { h2: "4. Pick an ASP" }, { p: "Ask two or three providers for a quote on your invoice volume and a sandbox account. Compare price, support and how they connect to your software." },
      { h2: "5. Check your accounting software’s e-invoicing support" }, { p: "Ask your vendor in writing what they support and from when." },
      { h2: "6. Plan the connection" }, { p: "Built-in support is simplest if all invoices come from one system. If they come from several, you need an integration." },
      { h2: "7. Test with real invoices" }, { p: "Credit notes, zero-rated sales, foreign buyers and part payments are where tests fail." },
      { h2: "8. Train whoever issues invoices" }, { p: "A rejected invoice should be a 30-second fix, not a mystery." },
      { h2: "9. Keep records" }, { check: "Retention periods are set by the authorities. Check the current requirement on the official site." },
      { h2: "10. Go live before the deadline, not on it" }, { p: "Go live a month early so you have time for the unexpected." },
    ] }),
  G(3, "website-cost-dubai", "How much does a website cost in Dubai? Real AED prices for 2026", "Website Design Cost in Dubai (2026): Real AED Prices", "Costs", "Month 1", 8, { ar: true,
    opening: "You asked three companies for a quote. One said AED 1,500, one AED 15,000, one “depends”. Here’s why, and what you should actually pay.",
    answer: "Across the Dubai market a professional small-business website usually costs AED 6,000 to 18,000, template sites AED 3,500 to 8,000, and custom bilingual sites with booking or a store AED 18,000 to 45,000. Our WordPress business sites start from AED 7,900 excluding VAT, plus hosting and care each month.",
    links: [{ href: "/services/website-design", label: "Website design" }, { href: "/pricing", label: "Pricing" }, { href: "/guides/bilingual-website-guide", label: "Bilingual websites" }],
    body: [
      { h2: "Price by type of website" }, { table: { head: ["Type", "Typical price (AED)", "What you get"], rows: [["Template", "3,500–8,000", "A theme with your logo and text, a few pages"], ["Professional / bespoke", "6,000–18,000", "Custom design, up to ~8 pages, SEO basics"], ["Custom bilingual with booking or store", "18,000–45,000", "Arabic + English, integrations, performance work"]] } },
      { check: "Market ranges come from published 2026 agency guides and vary widely. Treat them as ranges, not quotes." },
      { h2: "Why quotes differ ten times" }, { p: "Prices differ because the work differs: who designs, who writes, whether Arabic is a real translation or a plugin, whether the site is fast on a phone, who owns the code and what happens after launch. A cheap quote often omits half of this." },
      { h2: "Hidden costs to ask about" }, { ul: ["Hosting and domain (AED 75–550 a month for good hosting)", "Arabic content and right-to-left layout", "Photos and copywriting", "Licences or plugins that renew every year", "Care: updates, backups and security"] },
      { h2: "Freelancer vs Dubai agency vs offshore" }, { table: { head: ["", "Freelancer", "Large Dubai agency", "Us"], rows: [["Small business website", "AED 1,500–5,000", "AED 18,000–40,000+", "AED 7,900–19,900"], ["Fixed price in writing", "Sometimes", "Usually", "Always, in AED"], ["Arabic included", "Extra", "Extra", "Included"], ["Contract lock-in", "None", "6–12 months", "None"]] } },
      { h2: "Does Arabic double the cost?" }, { p: "No. Done properly, Arabic adds roughly 15–25% because the layout is mirrored and the text is written, not translated. Done badly, it costs nothing and shows." },
      { h2: "Questions to ask before you pay a deposit" }, { ol: ["Is the price fixed and in writing?", "Who owns the code and the domain?", "Is Arabic written by a native writer?", "What is the mobile speed score?", "What does care cost, and can I cancel?"] },
      { h2: "Our prices" }, { p: "Business site AED 7,900 (2–4 weeks), custom site AED 19,900, WooCommerce or bookings AED 44,000. All exclude 5% VAT. See the pricing page for every service." },
    ],
    faq: [{ q: "Can I get a good website for AED 2,000?", a: "You can get a template with your logo. It will rarely be fast, bilingual or easy to grow." }, { q: "Are your prices final?", a: "Yes. You get a fixed price in writing within 48 hours of our call." }] }),
  G(4, "shopify-store-cost-uae", "How much does a Shopify store cost in the UAE? (Setup, apps, fees and agencies)", "Shopify Store Cost in UAE (2026): Plans, Apps, Setup in AED", "Costs", "Month 1"),
  G(5, "start-shopify-store-uae", "How to open a Shopify store in the UAE: licence, payments, delivery and Arabic", "How to Start a Shopify Store in UAE (2026 Step-by-Step)", "E-commerce", "Month 1"),
  G(6, "app-development-cost-dubai", "How much does it cost to build an app in Dubai? Real prices for small businesses", "App Development Cost in Dubai (2026): Real AED Prices", "Costs", "Month 1", 9, { ar: true }),
  G(7, "talabat-commission-math", "How much do Talabat and Deliveroo really take from your restaurant?", "Talabat Commission for Restaurants: What You Really Pay", "Restaurants", "Month 1", 7, {
    opening: "Your weekly payout says AED 11,730. Your orders added up to AED 17,700. Where did AED 5,970 go?",
    answer: "Delivery apps in the UAE typically charge restaurants about 15–30% commission per order, plus promotions and fees. On AED 70,000 a month of app orders that can be AED 15,000–21,000.",
    links: [{ href: "/tools/talabat-commission-calculator", label: "Talabat commission calculator" }, { href: "/industries/restaurants/online-ordering", label: "Commission-free online ordering" }, { href: "/guides/whatsapp-ordering-for-restaurants", label: "WhatsApp ordering" }],
    body: [
      { h2: "How commission works" }, { check: "Commission rates are set by each platform’s contract and change over time. The 15–30% range comes from published 2026 reports; check your own agreement." }, { p: "Commission is a percentage of the order value, deducted before you are paid. A 30% commission on a AED 245 order is AED 73.50 — before any promotions you funded." },
      { h2: "A real weekly payout, line by line" }, { table: { head: ["Line", "AED"], rows: [["128 orders, gross", "17,700"], ["Commission (30%)", "−5,310"], ["Promotions you funded", "−660"], ["Deposited to your bank", "11,730"]] } },
      { p: "That is AED 5,970 of every AED 17,700, or 34%, gone before ingredients, rent or staff." },
      { h2: "What you lose besides money" }, { p: "The platform keeps the customer’s details. You can’t message them, reward them or ask them to come back." },
      { h2: "Should you leave the apps? (No)" }, { p: "The apps are good at finding new customers. The goal is to move your regulars to your own ordering: your site, WhatsApp or your own app, with Apple Pay and no commission." },
      { h2: "Your own ordering: what it costs and saves" }, { p: "Card fees are around 2.9% against 30% commission. If 30% of your regulars order direct, a restaurant doing 512 app orders a month at AED 138 keeps about AED 69,000 a year. Use the calculator for your own numbers." },
    ] }),
  G(8, "whatsapp-ordering-for-restaurants", "WhatsApp ordering for restaurants in the UAE: how to take orders without the chaos", "WhatsApp Ordering System for Restaurants in UAE", "Restaurants", "Month 1"),
  G(9, "whatsapp-business-api-cost-uae", "WhatsApp Business API in the UAE: what it costs and when you need it", "WhatsApp Business API Cost in UAE (2026 Guide)", "WhatsApp & AI", "Month 2"),
  G(10, "best-payment-gateway-uae", "Best payment gateway in the UAE for small businesses: Stripe, Telr, N-Genius and more", "Best Payment Gateway in UAE (2026): Fees Compared", "Payments", "Month 2"),
  G(11, "tabby-vs-tamara-merchants", "Tabby vs Tamara: which “buy now, pay later” should your UAE business offer?", "Tabby vs Tamara for Merchants (UAE 2026)", "Payments", "Month 2"),
  G(12, "shopify-tabby-tamara-setup", "How to add Tabby and Tamara to your Shopify store (step by step)", "Add Tabby & Tamara to Shopify: Step-by-Step UAE Guide", "Payments", "Month 2"),
  G(13, "fresha-vs-own-salon-app", "Fresha or your own salon app? An honest comparison for UAE salons", "Fresha Alternative: Own Salon Booking App vs Fresha (UAE)", "Salons", "Month 2"),
  G(14, "e-invoicing-zoho-books-uae", "UAE e-invoicing with Zoho Books: what’s built in and what you still need", "Zoho Books E-Invoicing UAE: Setup Guide (2026)", "E-invoicing", "Month 2"),
  G(15, "lovable-app-to-production", "Your Lovable app works in the demo. Here’s how to make it safe for real customers.", "Lovable App to Production: Security, Payments, Speed", "Startups", "Month 2"),
  G(16, "white-label-dev-pricing-uae", "White-label web development in the UAE: what agencies should pay (and charge)", "White Label Web Development Pricing UAE (2026)", "For agencies", "Month 2"),
  G(17, "shopify-vs-salla", "Shopify vs Salla vs WooCommerce: which is best for a UAE store?", "Shopify vs Salla vs WooCommerce for UAE Stores", "E-commerce", "Month 3"),
  G(18, "noon-amazon-vs-own-store", "Noon and Amazon.ae, or your own store? Where UAE brands should sell", "Noon vs Amazon.ae vs Your Own Store (UAE)", "E-commerce", "Month 3"),
  G(19, "license-to-sell-online-uae", "Do you need a licence to sell online in the UAE?", "Licence to Sell Online in the UAE: e-Trader, Free Zone, Mainland", "E-commerce", "Month 3"),
  G(20, "shopify-arabic-store", "Building an Arabic Shopify store that doesn’t feel translated", "Arabic Shopify Store: RTL Themes and Translation Done Right", "E-commerce", "Month 3"),
  G(21, "bilingual-website-guide", "Bilingual websites in the UAE: how to do Arabic and English right", "Bilingual Website (Arabic + English) Guide for UAE Businesses", "Websites", "Month 3"),
  G(22, "arabic-ai-chatbot", "Arabic AI chatbots: can AI really answer customers in Arabic?", "Arabic AI Chatbots for UAE Businesses", "WhatsApp & AI", "Month 3"),
  G(23, "whatsapp-chatbot-guide-uae", "WhatsApp chatbots for UAE businesses: a practical guide", "WhatsApp Chatbot for UAE Businesses: A Practical Guide", "WhatsApp & AI", "Month 3"),
  G(24, "e-invoicing-odoo-uae", "UAE e-invoicing with Odoo", "Odoo E-Invoicing UAE Guide", "E-invoicing", "Month 3"),
  G(25, "e-invoicing-quickbooks-uae", "UAE e-invoicing with QuickBooks", "QuickBooks E-Invoicing UAE Guide", "E-invoicing", "Month 4"),
  G(26, "uae-e-invoicing-asp-how-to-choose", "How to choose a UAE e-invoicing provider (ASP)", "How to Choose a UAE E-Invoicing Provider (ASP)", "E-invoicing", "Month 4"),
  G(27, "app-like-talabat-cost", "How much does an app like Talabat cost?", "App Like Talabat: Cost to Build in the UAE", "Costs", "Month 4"),
  G(28, "start-laundry-delivery-business-uae", "Starting a laundry pickup and delivery business in the UAE", "Start a Laundry Pickup & Delivery Business in the UAE", "Apps", "Month 4"),
  G(29, "ac-maintenance-business-bookings", "How AC maintenance companies get more bookings before summer", "AC Maintenance Company: Get More Bookings Before Summer", "Apps", "Month 4"),
  G(30, "salon-no-shows-deposits", "How to stop no-shows at your salon (without losing clients)", "Stop Salon No-Shows: Deposits, Reminders, Waitlists", "Salons", "Month 4"),
  G(31, "seo-cost-dubai", "How much does SEO cost in Dubai?", "SEO Cost in Dubai (2026): What You Should Pay", "SEO", "Month 4"),
  G(32, "is-my-ai-built-app-safe", "Is my AI-built app safe? 12 checks you can do today", "Is My AI-Built App Secure? 12 Checks", "Startups", "Month 4"),
  G(33, "peppol-pint-ae-explained", "PEPPOL and PINT AE explained for finance managers", "PEPPOL and PINT AE Explained", "E-invoicing", "Months 5–6"),
  G(34, "e-invoicing-custom-erp", "E-invoicing when you run custom or old software", "E-Invoicing for Custom or Legacy Software (UAE)", "E-invoicing", "Months 5–6"),
  G(35, "corporate-tax-ready-books", "Corporate-tax-ready bookkeeping: automate it before your accountant asks", "Corporate-Tax-Ready Bookkeeping in the UAE", "Automation", "Months 5–6"),
  G(36, "zoho-vs-odoo-vs-custom", "Zoho vs Odoo vs custom software for UAE SMEs", "Zoho vs Odoo vs Custom Software for UAE SMEs", "Automation", "Months 5–6"),
  G(37, "erp-cost-uae", "How much does an ERP cost for a small business in the UAE?", "ERP Cost for Small Business in the UAE", "Costs", "Months 5–6"),
  G(38, "inventory-system-uae", "Inventory system for UAE shops and restaurants: when Excel stops working", "Inventory Management System for UAE Shops and Restaurants", "Automation", "Months 5–6"),
  G(39, "saas-mvp-cost-uae", "How much does a SaaS MVP cost in the UAE?", "SaaS MVP Cost in the UAE (2026)", "Costs", "Months 5–6"),
  G(40, "mvp-for-non-technical-founders-dubai", "Building an MVP in Dubai without a technical co-founder", "MVP in Dubai Without a Technical Co-Founder", "Startups", "Months 5–6"),
  G(41, "startup-programs-tech-partner", "in5, Hub71, DIFC: getting your tech built while in a UAE startup program", "in5, Hub71, DIFC: Tech Partner for UAE Startups", "Startups", "Months 5–6"),
  G(42, "payment-links-whatsapp", "Payment links on WhatsApp: get paid before the customer leaves", "WhatsApp Payment Links in the UAE", "Payments", "Months 5–6"),
  G(43, "apple-pay-website-uae", "Apple Pay on your website in the UAE", "Apple Pay on Your Website in the UAE", "Payments", "Months 7–8"),
  G(44, "arabic-seo-guide", "Arabic SEO in the UAE: how to rank in Arabic searches", "Arabic SEO in the UAE", "SEO", "Months 7–8"),
  G(45, "not-showing-on-google-maps-dubai", "Why your business isn’t showing on Google Maps in Dubai", "Business Not Showing on Google Maps in Dubai: Fixes", "SEO", "Months 7–8"),
  G(46, "get-more-google-reviews", "How to get more Google reviews in the UAE (without breaking the rules)", "How to Get More Google Reviews in the UAE", "SEO", "Months 7–8"),
  G(47, "cloud-kitchen-multi-brand-ordering", "Cloud kitchens: running multiple brands from one kitchen without chaos", "Cloud Kitchen Software for Multi-Brand Ordering (UAE)", "Restaurants", "Months 7–8"),
  G(48, "app-like-washmen-cost", "How much does an app like Washmen cost?", "App Like Washmen: Cost to Build in the UAE", "Costs", "Months 7–8"),
  G(49, "app-like-justlife-cost", "How much does an app like Justlife cost?", "App Like Justlife: Cost to Build in the UAE", "Costs", "Months 7–8"),
  G(50, "do-i-need-an-app", "Does my business need an app, or just a better website?", "Do I Need an App or a Better Website?", "Apps", "Months 7–8"),
  G(51, "more-customers-garage-dubai", "How garages in Dubai can get more customers", "How Garages in Dubai Get More Customers", "Apps", "Months 7–8"),
  G(52, "uae-pdpl-website-app-checklist", "UAE data protection (PDPL) checklist for websites and apps", "UAE PDPL Checklist for Websites and Apps", "Websites", "Months 7–8"),
  G(53, "google-ads-leads-not-converting-dubai", "Google Ads in Dubai: why clicks don’t turn into calls", "Google Ads in Dubai: Why Clicks Don’t Turn Into Calls", "SEO", "Months 9–12"),
  G(54, "ramadan-ready-checklist", "Ramadan and Eid: getting your store, app and staff ready", "Ramadan and Eid Ready Checklist for UAE Businesses", "E-commerce", "Months 9–12"),
  G(55, "ai-for-uae-small-business", "What AI can do for a UAE small business in 2026 (20 real jobs)", "AI for UAE Small Business: 20 Real Jobs", "WhatsApp & AI", "Months 9–12"),
];

export const STUDIES = [
  { id: "D1", title: "UAE e-invoicing readiness report 2027", note: "From readiness-check answers (anonymised, opt-in)" },
  { id: "D2", title: "What UAE restaurants really pay delivery apps", note: "From calculator submissions (opt-in)" },
  { id: "D3", title: "We audited 30 AI-built apps from UAE startups", note: "From free rescue audits (anonymised)" },
];

import { MORE } from "./guides-more";
import { MORE_12_22 } from "./guides-12-22";
import { MORE_23_33 } from "./guides-23-33";
import { MORE_34_44 } from "./guides-34-44";
import { MORE_45_55 } from "./guides-45-55";
const ALL_MORE = { ...MORE, ...MORE_12_22, ...MORE_23_33, ...MORE_34_44, ...MORE_45_55 };
for (const g of GUIDES) { const m = ALL_MORE[g.slug]; if (m) Object.assign(g, m); }
// Guide #1: timeline figure (dates per the Ministry of Finance, as last checked in CHECKED)
{
  const g1 = GUIDES.find((g) => g.n === 1);
  if (g1?.body && !g1.body.some((b) => "figure" in b)) {
    g1.body.splice(2, 0, { figure: { title: "UAE e-invoicing timeline (last checked " + CHECKED + ")", rows: [["1 Jul 2026", "Pilot starts"], ["1 Jan 2027", "Mandatory: businesses with revenue of AED 50 million or more"], ["31 Mar 2027", "Appoint an ASP: businesses under AED 50 million"], ["1 Jul 2027", "Go live: businesses under AED 50 million"], ["1 Oct 2027", "Government entities"]] } });
  }
}
const FAQ_EXTRA: Record<string, { q: string; a: string }[]> = {
  "e-invoicing-checklist-july-2027": [{ q: "Can I do the checklist myself?", a: "Most steps are admin: collecting TRNs, choosing an ASP and testing. The integration step is where a developer helps." }, { q: "What if I miss the deadline?", a: "Penalties and rules are set by the authorities. Check the latest Ministry of Finance guidance rather than relying on a summary." }],
  "talabat-commission-math": [{ q: "Do Talabat and Deliveroo charge the same commission?", a: "Rates differ by plan and contract. Use your own contract percentage in the calculator." }, { q: "Should I leave delivery apps?", a: "Usually not. Keep them for discovery and move regulars to your own ordering link." }],
};
for (const g of GUIDES) if (g.body && !g.faq && FAQ_EXTRA[g.slug]) g.faq = FAQ_EXTRA[g.slug];
/** URL slug for each category hub, e.g. /guides/e-invoicing */
export const catSlug = (c: string) => c.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
export const catFromSlug = (s: string) => CATS.find((c) => catSlug(c) === s);
export const published = () => GUIDES.filter((g) => g.body);
export const guide = (slug: string) => GUIDES.find((g) => g.slug === slug);
