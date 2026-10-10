import type { Page } from "../types";
import type { VizSpec } from "@/components/mock/Viz";
import { fromMockup } from "./_load";

/* ---------- Mobile apps ---------- */
const mobileViz: VizSpec[] = [
  { t: "phone", k: "maisonrose", kind: "checkout" },
  { t: "phone", k: "freshfold", kind: "lock" },
  { t: "phone", k: "freshfold", kind: "tracking" },
  { t: "phone", k: "maisonrose", kind: "loyalty" },
  { t: "dash", title: "Admin · Bookings", sub: "Today", kpis: [["Bookings", "42"], ["Deposits", "AED 4,200"], ["Push campaign", "31% opened"]], rows: [["Layla K. · Balayage", "AED 100", "g|Deposit paid"], ["Mona A. · Cut", "AED 100", "g|Deposit paid"], ["Dana S. · Bridal", "AED 100", "y|Pending"]], head: ["BOOKING", "DEPOSIT", "STATUS"] },
];
const mb = fromMockup("service-mobile-apps", mobileViz);
export const mobile: Page = {
  ...mb, slug: "mobile-app-development", name: "Mobile apps", waText: "Hi, I'm on your mobile apps page",
  seo: { title: "Mobile App Development in Dubai for Small Business", desc: "iPhone and Android apps for ordering, bookings, delivery and loyalty, with Apple Pay, Tabby and WhatsApp updates. Arabic + English. From AED 35,000." },
  stage: {
    main: { t: "phone", k: "freshfold", kind: "home" }, side: { t: "phone", k: "maisonrose", kind: "detail" },
    cards: [
      { icon: "🔔", title: "Your laundry is ready", sub: "Push · FreshFold", style: { left: "-4%", top: "14%" } },
      { icon: "★", title: "4.9 · 12K ratings", sub: "iOS + Android ✓", style: { right: "-2%", bottom: "12%" }, dark: true },
    ],
  },
  showcase: { eyebrow: "Apps we've shipped", head: "Built for businesses like yours.", lead: "Pick an industry to see the home screen, the booking or ordering flow, and the moment after.", brands: ["maisonrose", "freshfold", "apex", "ember", "peakcooling", "fixpoint"], phone: "home" },
  ddEyebrow: "What your app can do", techEyebrow: "The honest tech choice", procEyebrow: "From idea to both app stores", priceEyebrow: "App pricing", faqEyebrow: "App FAQ", faqHead: "Questions before you build an app.",
  relEyebrow: "Often paired with", relHead: "Make the app work even harder.",
  guides: [{ slug: "app-development-cost-dubai", title: "How much does an app cost in Dubai?" }, { slug: "do-i-need-an-app", title: "Do I need an app, or a better website?" }, { slug: "app-like-talabat-cost", title: "What does an app like Talabat cost?" }],
} as Page;

/* ---------- Web apps ---------- */
const webViz: VizSpec[] = [
  { t: "dash", title: "Customer portal · Northwind Trading", sub: "UAE Pass sign-in", kpis: [["Open orders", "6"], ["Invoices due", "AED 18,400"], ["Next delivery", "Thu"]], rows: [["PO-2209", "AED 6,200", "g|Delivered"], ["PO-2214", "AED 4,350", "b|In transit"], ["PO-2219", "AED 7,850", "y|Packing"]], head: ["ORDER", "TOTAL", "STATUS"] },
  { t: "dash", title: "Scheduling · Techs", sub: "Tue 13 Oct", kpis: [["Jobs today", "46"], ["Vans out", "14"], ["Unassigned", "2"]], rows: [["Ryan · Van 7", "Arabian Ranches", "b|En route"], ["Imran · Van 3", "JLT", "g|On site"], ["Luis · Van 9", "Marina", "y|Next 2:30"]], head: ["TECH", "AREA", "STATUS"] },
  { t: "bars", title: "Weekly numbers · auto-emailed Monday 7 AM", sub: "AED", rows: [["Dubai Marina", 82, "AED 118k"], ["JLT", 64, "AED 92k"], ["Business Bay", 48, "AED 69k"], ["Al Quoz", 31, "AED 44k"]] },
  { t: "doc", title: "Invoice INV-5528", sub: "Zoho Books synced", lines: [["Compressor replacement", "AED 1,980.00"], ["Labour", "AED 200.00"], ["VAT 5% (TRN 100•••••••003)", "AED 109.00"]], total: ["Total", "AED 2,289.00"] },
  { t: "steps", title: "Automation run log", sub: "just now", steps: [["Order received", "Shopify · AED 290"], ["Invoice created", "Zoho Books · VAT 5%"], ["WhatsApp sent to customer", "Pay link + receipt"], ["Stock updated", "Al Quoz warehouse"]] },
];
const wb = fromMockup("service-web-apps", webViz);
export const webapp: Page = {
  ...wb, slug: "web-app-development", name: "Web apps & portals", waText: "Hi, I'm on your web apps page",
  seo: { title: "Custom Software & Web Apps for UAE Businesses", desc: "Outgrown Excel and WhatsApp groups? Customer portals, staff dashboards and internal tools with logins, UAE Pass sign-in and Arabic. From AED 29,000." },
  stage: {
    main: { t: "dash", title: "Peak Cooling · Today", sub: "ops.peakcooling.ae/today", kpis: [["Jobs", "46"], ["Vans out", "14"], ["Booked", "AED 104,500", "▲ 12%"]], rows: [["#7741 Tom R. · AC repair", "Van 7", "b|En route"], ["#7744 Layla A. · Gas top-up", "Van 3", "g|On site"], ["#7747 Marina Heights · AMC", "Van 9", "y|2:30 PM"]], head: ["JOB", "VAN", "STATUS"] },
    side: { t: "phone", k: "peakcooling", kind: "status" },
    cards: [{ icon: "✓", title: "Paid on site · AED 880", sub: "Apple Pay · Van 7", style: { left: "-3%", bottom: "8%" } }, { icon: "🔐", title: "Signed in with UAE Pass", sub: "Customer portal", style: { right: "2%", top: "-2%" }, dark: true }],
  },
  showcase: { eyebrow: "Systems we've built", head: "The system behind the front desk.", lead: "Real dashboards, portals and admin tools, one login away.", brands: ["peakcooling", "apex", "freshfold", "ledgerly"], phone: "status" },
  ddEyebrow: "What a web app can do", techEyebrow: "The honest stack choice", procEyebrow: "From spreadsheet to system", priceEyebrow: "Web app pricing", faqEyebrow: "Web app FAQ", faqHead: "Questions before you build a web app.",
  relEyebrow: "Often paired with", relHead: "Make the web app work even harder.",
  guides: [{ slug: "uae-pdpl-website-app-checklist", title: "UAE PDPL checklist for websites and apps" }, { slug: "zoho-vs-odoo-vs-custom", title: "Zoho vs Odoo vs custom software" }],
} as Page;

/* ---------- SaaS ---------- */
const saasViz: VizSpec[] = [
  { t: "steps", title: "Onboarding · new company", sub: "Ledgerly", steps: [["Create account", "Email or Google"], ["Connect Zoho Books", "OAuth, 20 seconds"], ["Invite your accountant", "Roles: owner, accountant, viewer"], ["First reconciliation", "AED 4.4B reconciled across customers"]] },
  { t: "dash", title: "Plans & billing", sub: "Stripe", kpis: [["MRR", "AED 176,700", "▲ 9%"], ["Companies", "2,053"], ["Churn", "1.8%"]], rows: [["Solo", "AED 45/mo", "g|612 companies"], ["Team", "AED 149/mo", "g|1,104 companies"], ["Business", "AED 475/mo", "g|337 companies"]], head: ["PLAN", "PRICE", "CUSTOMERS"] },
  { t: "dash", title: "Teams & permissions", sub: "Harbour Legal Consultants DMCC", kpis: [["Seats", "12"], ["Admins", "2"], ["Audit events", "1,240"]], rows: [["Aisha · Owner", "All access", "g|Active"], ["Omar · Accountant", "Invoices, VAT", "g|Active"], ["Priya · Viewer", "Read only", "y|Invited"]], head: ["MEMBER", "ACCESS", "STATUS"] },
  { t: "dash", title: "Admin panel", sub: "internal", dark: true, kpis: [["Signups today", "41"], ["Trials ending", "9"], ["Support open", "3"]], rows: [["Brightline Dental Clinic", "Trial · day 12", "y|Nudge"], ["Northwind Trading LLC", "Business plan", "g|Healthy"]], head: ["COMPANY", "STATE", ""] },
  { t: "code", file: "api/v1/invoices.ts", lines: ["// Public API · rate-limited · scoped keys", "GET /v1/invoices?status=overdue", "+ 200 OK", "+ [{ id: 'INV-5528', total: 2289.00, currency: 'AED' }]", "// ✓ Webhooks: invoice.paid, invoice.rejected"] },
];
const sa = fromMockup("service-saas", saasViz);
export const saas: Page = {
  ...sa, slug: "saas-development", name: "SaaS & MVPs", waText: "Hi, I'm on your SaaS page",
  seo: { title: "MVP & SaaS Development in Dubai for Founders", desc: "From idea to paying customers: clickable prototype in 2–3 weeks, launch-ready SaaS with billing in 10–14 weeks. For Dubai and Abu Dhabi founders. From AED 24,000." },
  stage: {
    main: { t: "dash", title: "Ledgerly · Overview", sub: "app.ledgerly.app", kpis: [["MRR", "AED 176,700", "▲ 9%"], ["Companies", "2,053"], ["Overdue", "AED 45,500"]], rows: [["Northwind Trading LLC", "AED 30,100", "r|Overdue"], ["Acme Co.", "AED 15,400", "y|Due 3 days"], ["Harbour Legal DMCC", "AED 9,800", "g|Paid"]], head: ["CUSTOMER", "AMOUNT", "STATUS"] },
    side: { t: "phone", k: "ledgerly", kind: "home" },
    cards: [{ icon: "🧾", title: "UAE e-invoicing ready", sub: "PINT AE · ASP connected", style: { left: "-3%", bottom: "6%" } }, { icon: "📈", title: "+9% MRR this month", style: { right: "2%", top: "0%" }, dark: true }],
  },
  showcase: { eyebrow: "Products we've built", head: "Software that runs real businesses.", lead: "Concept SaaS products for GCC industries, from prototype to billing.", brands: ["ledgerly", "peakcooling", "maisonrose"], phone: "home" },
  ddEyebrow: "What a SaaS needs", techEyebrow: "The honest build choice", procEyebrow: "From idea to first paying customer", priceEyebrow: "SaaS pricing", faqEyebrow: "SaaS FAQ", faqHead: "Questions before you build a product.",
  relEyebrow: "Often paired with", relHead: "Grow the product faster.",
  guides: [{ slug: "saas-mvp-cost-uae", title: "How much does a SaaS MVP cost in the UAE?" }, { slug: "mvp-for-non-technical-founders-dubai", title: "Build an MVP without a technical co-founder" }, { slug: "startup-programs-tech-partner", title: "in5, Hub71, DIFC: getting your tech built" }],
} as Page;
