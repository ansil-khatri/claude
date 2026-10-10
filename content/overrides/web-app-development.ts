import type { Page } from "../types";

export const PATCH: Partial<Page> = {
  stage: {
    main: { t: "dash", title: "Good morning, Nina · FreshFold Today", sub: "app.freshfold.com/today", kpis: [["Orders", "64", "▲ 12%"], ["Out for delivery", "9"], ["Paid today", "AED 2,418"], ["Late", "0"]], rows: [["#2231 Al Barsha · Wash & fold", "Mike", "g|Paid"], ["#2232 Al Quoz · Dry clean", "Sara", "b|Out for delivery"], ["#2233 Jumeirah · Bedding", "Mike", "y|Packing"], ["#2234 Business Bay · Suits", "Imran", "b|Out for delivery"]], head: ["ORDER", "DRIVER", "STATUS"] },
    side: { t: "phone", k: "freshfold", kind: "tracking" },
    cards: [
      { icon: "✓", title: "Automation · Invoice INV-2235 emailed", sub: "Zoho Books · VAT 5%", style: { left: "-3%", bottom: "8%" } },
      { icon: "🌐", title: "Live at app.freshfold.com", sub: "track.freshfold.com for customers", style: { right: "2%", top: "-2%" }, dark: true },
      { icon: "🔐", title: "Replaced Excel + 6 apps → 1 login", sub: "Orders, drivers, payments", style: { right: "-2%", bottom: "26%" } },
    ],
  },
  tabs: [
    { tab: "Customer portal", chip: "Login · Status · E-sign · Pay", h: "\"Where are we at?\" answered without a phone call.", p: "Customers log in to see their job's status, the next visit, photos of the work, and the estimate to approve. They sign and pay on the same page. Your phone goes quiet and you get paid sooner.", fine: "Login by email link, or UAE Pass for verified identities. WhatsApp messages and emails go out automatically as the status changes.", viz: { t: "dash", title: "Customer portal · Volt & Wire", sub: "Tom Reynolds · Al Barsha 2", kpis: [["Next visit", "Thu 9–11 AM"], ["Estimate E-1042", "AED 1,240"], ["Balance due", "AED 940"]], rows: [["INV-3381 · EV charger install", "AED 940", "y|Pay AED 940"], ["Site photos · 6 uploaded", "Carlos M.", "b|View"], ["Estimate approved", "e-signed", "g|Approved"]], head: ["ITEM", "AMOUNT", "STATUS"] } },
    { tab: "Booking & scheduling", chip: "Calendar · Staff · Deposits", h: "The front desk, without the front desk.", p: "Customers book online, staff see their day on one calendar, deposits are taken up front and reminders go out on their own. Client notes, past visits and color formulas are one click away.", fine: "Syncs with Google Calendar and Outlook. Rules for buffers, breaks and double-booking.", viz: { t: "dash", title: "Scheduling · Techs", sub: "Tue 13 Oct", kpis: [["Jobs today", "46"], ["Vans out", "14"], ["Unassigned", "2"]], rows: [["Ryan · Van 7", "Arabian Ranches", "b|En route"], ["Imran · Van 3", "JLT", "g|On site"], ["Luis · Van 9", "Marina", "y|Next 2:30"]], head: ["TECH", "AREA", "STATUS"] } },
    { tab: "Dashboards & reports", chip: "Live numbers · Exports", h: "Know your numbers without opening Excel.", p: "Bookings, revenue, no-shows and top services, updated live. Every Monday the owner gets the week's report by email. Everything exports to CSV for your accountant.", fine: "Built on your real data, with the numbers you actually check, not 40 charts nobody reads.", viz: { t: "dash", title: "October at a glance · Maison Rose", sub: "Live", kpis: [["Bookings", "412", "▲ 38%"], ["Revenue", "AED 58.9k"], ["No-shows", "3.1%"], ["Rebooked", "71%"]], rows: [["Balayage", "AED 21.4k", "g|Top service"], ["Bridal styling", "AED 14.2k", "g|▲"], ["Emailed to Sophie every Monday 7 AM", "", "l|Scheduled"]], head: ["SERVICE", "REVENUE", ""] } },
    { tab: "Invoices & payments", chip: "Apple Pay · Tabby · Zoho Books", h: "Send the invoice. Get paid tonight.", p: "Invoices go out on WhatsApp or email with a pay link. Customers pay by card, Apple Pay or Tabby, the invoice is marked paid, and it syncs to Zoho Books without anyone retyping it.", fine: "Deposits, partial payments, refunds and automatic reminders for overdue invoices.", viz: { t: "doc", title: "Invoice INV-5528", sub: "Zoho Books synced", lines: [["Compressor replacement", "AED 1,980.00"], ["Labour", "AED 200.00"], ["VAT 5% (TRN 100•••••••003)", "AED 109.00"]], total: ["Total", "AED 2,289.00"] } },
    { tab: "Connects your tools", chip: "Zoho Books · WhatsApp · Google · Shopify", h: "Your tools finally talk to each other.", p: "A booking creates the invoice, messages the customer on WhatsApp and blocks the calendar on its own. The nightly copy-paste session ends, and so do the typos.", fine: "Every automation has a run log, so you can see exactly what happened and when.", viz: { t: "steps", title: "Run log #2,416", sub: "1.3 s · 0 errors", steps: [["Quote approved", "Apex Auto Works · AED 890"], ["Invoice created", "Zoho Books · VAT 5%"], ["WhatsApp message sent", "Pay link + receipt"], ["Calendar bay blocked", "Google Calendar · Bay 4"], ["2,416 runs · 0 errors", "31 h saved a week"]] } },
  ],
  techRows: [
    ["", "Next.js Most chosen React + Node · incl. MERN", "Laravel PHP · admin-heavy systems", "Django Python · data & AI", "Ruby on Rails Ruby · fast MVPs"],
    ["Best for", "Customer portals and SaaS where speed, SEO and a polished feel matter", "Booking, invoicing and back-office systems with lots of admin screens", "Reporting, data-heavy tools and apps with AI features", "Marketplaces and MVPs, or growing an existing Rails app"],
    ["Time to first version", "6–10 weeks", "6–10 weeks", "8–12 weeks", "6–10 weeks"],
    ["Hosting per month", "AED 75–550", "AED 55–370", "AED 90–550", "AED 90–550"],
    ["Admin panel", "Custom-built for your workflow", "Filament, ready on day one", "Django admin, ready on day one", "ActiveAdmin, ready on day one"],
    ["Hiring developers later", "●●●●●", "●●●● ●", "●●●● ●", "●●● ●●"],
  ],
  showcase: {
    eyebrow: "Systems we've built", head: "The system behind the front desk.", lead: "Real dashboards, portals and admin tools, one login away.",
    brands: ["maisonrose", "freshfold", "apex", "ember", "voltwire", "fixpoint"], phone: "status",
    items: [
      { label: "Salons & spas", brand: "maisonrose", results: ["9 h · front-desk time saved a week", "−64% · no-shows"], chips: ["Staff calendar", "Online booking", "Deposits", "Client notes"], moment: "Balayage with stylist picker: Reserve my spot · AED 100", phone: "detail", viz: { t: "dash", title: "book.maisonrose.ae/admin · staff day", kpis: [["Stylists", "4"], ["Utilization", "87%"], ["No-shows", "0"]], rows: [["Mia", "Balayage · Layla K.", "g|In the chair"], ["Jordan", "Open 2–4 PM", "y|Waitlist"]], head: ["STYLIST", "NOW", "STATE"] } },
      { label: "Laundry", brand: "freshfold", results: ["18,402 · orders moved off Excel", "−50% · “where is it?” calls"], chips: ["Live orders", "Driver routes", "Payments", "Auto invoices"], moment: "Order tracking", phone: "tracking", viz: { t: "dash", title: "Ops · Today", kpis: [["Orders", "212"], ["On time", "96%"], ["Invoices", "AED 41,200"]] } },
      { label: "Automotive", brand: "apex", results: ["31 h · admin saved a week", "+AED 18k · approved repairs a month"], chips: ["Job board", "Photo quotes", "WhatsApp approvals", "Zoho Books sync"], moment: "Brake quote approval · AED 890", phone: "status", viz: { t: "dash", title: "Job board", kpis: [["Checked in", "3"], ["Inspecting", "2"], ["Waiting approval", "3"], ["Ready", "4"]] } },
      { label: "Restaurants", brand: "ember", results: ["0% · commission on orders", "AED 6.2k · catering a week"], chips: ["Pickup queue", "Catering orders", "Payouts", "Guest list"], moment: "Pickup order", phone: "status", viz: { t: "dash", title: "ops.emberkitchen.ae · Tonight", kpis: [["Orders", "128"], ["Direct", "38%"], ["Catering", "AED 6.2k"]] } },
      { label: "Home services", brand: "voltwire", results: ["10 min · to send an estimate", "+41% · estimates won"], chips: ["Dispatch board", "Estimates", "Customer portal", "Invoices"], moment: "“Your install”", phone: "status", viz: { t: "dash", title: "Dispatch board", kpis: [["Electricians", "6"], ["Jobs", "18"], ["Estimates open", "7"]] } },
      { label: "Phone repair", brand: "fixpoint", results: ["45 min · average repair", "3 stores · one system"], chips: ["Repair tickets", "Inventory", "Trade-in quotes", "WhatsApp status"], moment: "“Your repair”", phone: "status", viz: { t: "dash", title: "Repair tickets · Karama", kpis: [["On the bench", "9"], ["Ready", "6"], ["Avg. repair", "45 min"]] } },
    ],
  },
  caseStudy: {
    brand: "apex", label: "Apex Auto Works · Al Quoz, Dubai", h: "From a whiteboard and five apps to one shop system.",
    problem: "Whiteboard jobs, Word quotes, Zoho Books invoices and messages from the owner’s personal phone. Nine bays, and nobody saw the whole day.",
    built: "A Laravel shop system: online booking, a 9-bay job board, photo quotes approved on WhatsApp and Zoho Books sync. Live in 10 weeks.",
    metrics: [["31 h", "admin saved a week"], ["+AED 18k", "approved repairs a month"], ["5 → 1", "tools to log into"]],
    quote: "We wiped the whiteboard. Every car, every quote and every payment is on one screen now.", by: "Rashid A., owner",
    viz: { t: "dash", title: "shop.apexautoworks.ae/board", kpis: [["Checked in", "3"], ["Inspecting", "2"], ["Waiting approval", "3"], ["Ready", "4"]] },
    viz2: { t: "phone", k: "apex", kind: "status" },
  },
  related: [
    { k: "MOBILE", name: "Mobile apps", p: "Put your web app in your customers' pocket, on the same backend.", href: "/services/mobile-app-development" },
    { k: "PAYMENTS", name: "Payment integration", p: "Stripe, Apple Pay, deposits and subscriptions, done right.", href: "/services/payment-integration" },
    { k: "AUTOMATION", name: "Business automation & ERP", p: "Invoices, WhatsApp messages and stock updates that run on their own.", href: "/services/business-automation" },
    { k: "RESCUE", name: "Fix my AI-built app", p: "Made it with Lovable or Bolt? We make it secure and production-ready.", href: "/services/vibe-code-rescue" },
  ],
};
