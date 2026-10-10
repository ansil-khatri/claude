import type { Case, JourneyStep, Page, Stage, Tab } from "./types";
import type { VizSpec } from "@/components/mock/Viz";
import { fromMockup } from "./services/_load";
import { scrubPage } from "./services";

const chat = (name: string, color: string, msgs: { w: "in" | "out"; t: string; time?: string; link?: string; ar?: boolean }[]): VizSpec => ({ t: "chat", name, color, msgs });
const owner = (title: string, k: [string, string, string?][], rows: [string, number, string][]): VizSpec => ({ t: "bars", title, sub: "Daily report", dark: true, rows: rows.map(([l, v, t]) => [l, v, t] as [string, number, string]) });

type Ind = Page & { journey: NonNullable<Page["journey"]>; caseStudy: Case };
const common = {
  ddEyebrow: "Behind the counter", techEyebrow: "The honest choice", procEyebrow: "From first call to go-live",
  faqHead: "Questions owners ask us.", priceEyebrow: "Pricing", priceLead: "Typical starting points. Your exact price comes in writing within 48 hours of our call. Prices exclude 5% VAT.", faqEyebrow: "FAQ",
  relEyebrow: "Go deeper", relHead: "The services behind this page.",
};

/* ===================== Restaurants ===================== */
const restTabs: VizSpec[] = [
  { t: "dash", title: "Every order, one screen · Fri 16 Oct", sub: "Foodics · Talabat · Deliveroo · Direct", kpis: [["Open tickets", "14"], ["Late", "1"], ["Direct share", "38%"]], rows: [["#305 Talabat", "Short rib", "r|Late"], ["#311 Direct · Olivia R.", "AED 245", "g|On the hearth"], ["#315 Deliveroo", "Octopus", "y|Bump"]], head: ["ORDER", "ITEM", "STATUS"] },
  { t: "dash", title: "Menu & 86", sub: "One switch, every channel", kpis: [["Items live", "46"], ["86'd", "2"]], rows: [["Charred octopus", "86'd on all channels", "r|Sold out"], ["Short rib", "AED 120", "g|Live everywhere"]], head: ["ITEM", "STATE", ""] },
  { t: "bars", title: "Food cost", sub: "Foodics sync", rows: [["Seafood", 34, "32%"], ["Meat", 41, "35%"], ["Dairy", 22, "21%"], ["Produce · Al Aweer Fresh Co.", 18, "17%"]] },
  { t: "dash", title: "Shifts & tip pool", sub: "WPS payroll export", kpis: [["Hours", "412"], ["Tip pool", "AED 6,480"], ["Payroll file", "Ready"]], rows: [["Front of house", "AED 3,240", "g|Split"], ["Kitchen", "AED 2,160", "g|Split"]], head: ["POOL", "AMOUNT", ""] },
  owner("Ember Kitchen · Tonight", [], [["Direct orders", 72, "AED 14,470"], ["Talabat", 40, "AED 8,100"], ["Dine-in", 90, "AED 21,300"]]),
];
const restBase = fromMockup("industry-restaurants", restTabs);
const restaurants: Ind = {
  ...restBase, ...common, slug: "restaurants", name: "Restaurants & cloud kitchens", waText: "Hi, I'm on your restaurants page",
  kicker: "Ordering, WhatsApp and back-office software for UAE restaurants and cloud kitchens",
  plain: "We build what a UAE restaurant needs on top of Foodics: commission-free online ordering, WhatsApp ordering, your own app with rewards, and a back office that shows every order from Talabat, Deliveroo, Careem and your own site on one screen. A website with ordering starts from AED 7,900; the full restaurant upgrade takes about 12 weeks from AED 49,000.",
  facts: [["From", "AED 7,900"], ["Time", "2–12 weeks"], ["Languages", "English + Arabic"], ["Based in", "Dubai"]],
  seo: { title: "Restaurant Ordering Apps & Software in Dubai", desc: "Talabat takes 30%. Take orders on your own site, WhatsApp and app: commission-free ordering, rewards and Foodics sync for UAE restaurants. From AED 7,900." },
  stage: { main: { t: "dash", title: "Ember Kitchen · JLT", sub: "Fri 16 Oct · 90 seats", kpis: [["Orders", "128"], ["Gross", "AED 17,700"], ["Commission", "−AED 5,310", "30%"]], rows: [["#311 Direct · Olivia R.", "AED 245", "g|0% commission"], ["#305 Talabat", "AED 168", "r|−AED 50"], ["#315 Deliveroo", "AED 210", "y|−AED 63"]], head: ["ORDER", "TOTAL", "COMMISSION"] }, side: { t: "phone", k: "ember", kind: "home" },
    cards: [{ icon: "✓", title: "Order #311 · AED 245", sub: "Direct · you keep AED 73.50", style: { left: "-3%", bottom: "8%" } }, { icon: "🏆", title: "AED 47,700 kept in October", style: { right: "0%", top: "0%" }, dark: true }, { icon: "📅", title: "Reservation · Fri 8:30 PM · table for 4", sub: "AED 160 deposit held", style: { left: "-3%", top: "16%" } }] },
  journey: { head: "Follow one guest, from her first takeout order to \"the usual, please.\"", lead: "Olivia lives in Dubai Marina and wants dinner tonight. Here's every screen she sees, and every screen your team uses behind her.", steps: [
    { tab: "Found on Google", h: "Olivia searches \"wood-fired restaurant near me.\" You're first.", story: "Your site loads in a second with the menu in AED and a big Order button, in English and Arabic.", results: [["#1", "on Maps"], ["1.1 s", "page load"]], chips: ["Website", "Local SEO", "Google profile"], viz: { t: "serp", query: "wood-fired restaurant near me", items: [["Ember Kitchen · JLT", "emberkitchen.ae", "0.6 km · AED 150–200 · ★ 4.8 (2,100)"], ["Lake Terrace Trattoria", "1.1 km", "★ 4.5"], ["Cluster T Grill House", "1.8 km", "★ 4.4"]], dark: true }, viz2: { t: "site", k: "ember" }, card: { title: "Olivia R. · Dubai Marina", sub: "Found on Google" } },
    { tab: "Ordered direct", h: "She orders on your site, not on an app. You keep the AED 74.", story: "Same food, same speed, but no 30% commission. Apple Pay in one tap.", results: [["AED 73.50", "of her AED 245 would have gone to commission"], ["0%", "commission"]], chips: ["Own ordering", "Apple Pay", "Foodics sync"], viz: { t: "phone", k: "ember", kind: "checkout" }, viz2: { t: "doc", title: "Order #311", sub: "Direct", lines: [["Charred octopus", "AED 85"], ["Short rib", "AED 120"], ["Sourdough", "AED 40"]], total: ["Total (VAT 5% included)", "AED 245.00"] } },
    { tab: "On the line", h: "Her ticket hits the hearth the second she pays.", story: "One kitchen screen shows direct, Talabat, Deliveroo and Careem orders together, so nothing gets lost.", results: [["1 screen", "every channel"], ["−60%", "wrong tickets"]], chips: ["Kitchen display", "WhatsApp updates"], viz: restTabs[0], card: { title: "Bump · WhatsApp Olivia" } },
    { tab: "Picked up & paid", h: "In and out in under a minute, already paid.", story: "She gets a WhatsApp at 7:24 PM, walks in and picks up. Points land in her wallet.", results: [["< 1 min", "at the counter"], ["+245", "reward points"]], chips: ["Pickup", "Wallet", "Rewards"], viz: { t: "phone", k: "ember", kind: "lock" } },
    { tab: "The usual, please", h: "Two months later, she reorders \"the usual\" in two taps.", story: "Rewards, a Tuesday short-rib offer on WhatsApp and a guests list that shows who came from Talabat.", results: [["+38%", "repeat orders"], ["AED 14,470", "on a slow night"]], chips: ["Rewards", "WhatsApp campaigns", "Guest list"], viz: { t: "phone", k: "ember", kind: "loyalty" } },
  ] },
  caseStudy: { brand: "ember", label: "Ember Kitchen · JLT, Dubai · 90 seats", h: "From paying the apps to keeping AED 47,700 a month.", problem: "128 delivery-app orders a week cost AED 5,310 in 30% commission plus AED 660 in promos.", built: "Own ordering site and app, WhatsApp ordering, Foodics sync and rewards.", metrics: [["0%", "commission on direct orders"], ["+38%", "repeat orders"], ["AED 47,700", "kept in October"]], quote: "The apps send us the hungry people. Now we send them back to our own door.", by: "Marco Bellini, owner", viz: restTabs[4], viz2: { t: "phone", k: "ember", kind: "home" } },
  guides: [{ slug: "talabat-commission-math", title: "How much do Talabat and Deliveroo really take?" }, { slug: "whatsapp-ordering-for-restaurants", title: "WhatsApp ordering for restaurants" }, { slug: "cloud-kitchen-multi-brand-ordering", title: "Cloud kitchens: multiple brands, one kitchen" }],
} as Ind;

/* ===================== Salons ===================== */
const salTabs: VizSpec[] = [
  { t: "dash", title: "Schedule & chair time · Sat 17 Oct", sub: "Utilization 87%", kpis: [["Utilization", "87%", "was 61%"], ["Waitlist fills", "9"], ["No-shows", "0"]], rows: [["Mia", "Balayage · Layla K.", "g|In the chair"], ["Jordan", "Open 2–4 PM", "y|Waitlist offered"], ["Ava", "Bridal trial", "b|Booked"]], head: ["STYLIST", "NOW", "STATE"] },
  { t: "dash", title: "Memberships & gift cards", sub: "Recurring revenue", kpis: [["Members", "142"], ["MRR", "AED 21,300"], ["Gift cards unspent", "AED 8,900"]], rows: [["Blowout membership", "AED 290/mo", "g|96 active"], ["Colour membership", "AED 520/mo", "g|46 active"], ["Eid gift card", "AED 500", "y|18 unspent"]], head: ["PLAN", "PRICE", "STATE"] },
  { t: "dash", title: "Commissions & payroll", sub: "WPS export", kpis: [["Mia this week", "AED 342"], ["Tips", "AED 65"], ["Payroll file", "Ready"]], rows: [["Service commission", "AED 263.25", "g|Calculated"], ["Retail commission", "AED 14.00", "g|Calculated"], ["Chair rental (Ava)", "AED 2,400/wk", "g|Charged"]], head: ["LINE", "AMOUNT", ""] },
  { t: "bars", title: "Retail & back bar", sub: "Low stock flagged", rows: [["Olaplex No.3", 22, "6 left"], ["Gloss toner", 61, "24"], ["Shampoo 1 L", 88, "52"]] },
  owner("Maison Rose · Today", [], [["Utilization", 87, "87%"], ["Rebooking", 71, "71%"], ["Avg. ticket", 64, "AED 410"]]),
];
const salBase = fromMockup("industry-salons", salTabs);
const salons: Ind = {
  ...salBase, ...common, slug: "salons", name: "Salons & spas", waText: "Hi, I'm on your salons page",
  kicker: "Booking apps and software for salons, spas and home beauty services",
  plain: salBase.plain,
  seo: { title: "Salon & Spa Booking Apps in Dubai & UAE", desc: "Fresha charges new-client fees and lists your competitors. Your own booking site and app with deposits, a waitlist and WhatsApp reminders. From AED 7,900." },
  stage: { main: { t: "dash", title: "Maison Rose · Sat 17 Oct", sub: "Jumeirah, Dubai · 8 stylists", kpis: [["Utilization", "87%"], ["Deposits", "AED 4,200"], ["No-shows", "0"]], rows: [["Mia", "Balayage · Layla K.", "g|In the chair"], ["Jordan", "Open 2–4 PM", "y|Waitlist offered"]], head: ["STYLIST", "NOW", "STATE"] }, side: { t: "phone", k: "maisonrose", kind: "status" },
    cards: [{ icon: "✓", title: "Booked · Jess M. · Sat 17 Oct", sub: "AED 100 deposit · Apple Pay", style: { left: "-3%", bottom: "8%" } }, { icon: "📲", title: "Waitlist filled the 2 PM slot", sub: "WhatsApp · 4 minutes", style: { right: "0%", top: "0%" }, dark: true }, { icon: "★", title: "Google · Maison Rose · ★ 4.9", sub: "312 reviews", style: { left: "-3%", top: "16%" } }] },
  journey: { head: "Follow one client, from Instagram to her next appointment.", lead: "Jess wants a balayage before her sister's wedding. Here's every screen she sees, and every screen your team uses behind her.", steps: [
    { tab: "Found on Instagram", h: "Jess sees a balayage on Instagram at 11 PM.", story: "A real Book button on Instagram and Google goes straight to your calendar.", results: [["Book", "button on Instagram"], ["38%", "booked after hours"]], chips: ["Website", "Instagram booking", "Google profile"], viz: { t: "site", k: "maisonrose" }, viz2: { t: "phone", k: "maisonrose", kind: "home" } },
    { tab: "Booked with a deposit", h: "She books Mia and pays the deposit with Face ID.", story: "Mia AED 650, Jordan AED 600, Ava AED 550. AED 100 today, AED 550 in the salon.", results: [["−64%", "no-shows"], ["AED 100", "deposit"]], chips: ["Deposits", "Apple Pay", "WhatsApp reminders"], viz: { t: "phone", k: "maisonrose", kind: "detail" }, viz2: { t: "phone", k: "maisonrose", kind: "status" } },
    { tab: "In the chair", h: "Mia already knows her formula.", story: "14 visits, AED 10,500 spent, Gold member. Last visit: balayage AED 650, gloss AED 240, cut & style AED 180.", results: [["14", "visits on record"], ["Gold", "member"]], chips: ["Client history", "Formulas"], viz: salTabs[0] },
    { tab: "Checkout & retail", h: "She leaves with the right products and her next visit booked.", story: "Prices include VAT, as UAE consumer prices do. Balayage AED 650 + Olaplex AED 140 − deposit − member perk, tip 10%.", results: [["AED 690", "due (incl. VAT 5%)"], ["+AED 22", "retail per ticket"]], chips: ["POS", "Retail", "Tips"], viz: { t: "doc", title: "Checkout · Jess M.", sub: "Includes VAT 5% AED 34.52", lines: [["Balayage", "AED 650"], ["Olaplex No.3", "AED 140"], ["Member perk", "−AED 65"], ["Deposit", "−AED 100"], ["Tip 10%", "AED 65"]], total: ["Due", "AED 690"] } },
    { tab: "Back in 6 weeks", h: "Six weeks later, she rebooks in two taps.", story: "Lock-screen reminder on WhatsApp, a loyalty card and \"Refer a friend, you both get AED 50\".", results: [["3.4×", "rebookings"], ["AED 50", "referral credit"]], chips: ["Loyalty", "Referrals", "Apple Wallet"], viz: { t: "phone", k: "maisonrose", kind: "lock" }, viz2: { t: "phone", k: "maisonrose", kind: "loyalty" } },
  ] },
  caseStudy: { brand: "maisonrose", label: "Maison Rose · Jumeirah, Dubai · 8 stylists", h: "From Instagram DMs to a full calendar.", problem: "No-shows cost AED 1,950 a week, and Tuesdays sat empty.", built: "Website, deposits, waitlist, client app and WhatsApp reminders, synced with Fresha.", metrics: [["−64%", "no-shows"], ["3.4×", "rebookings"], ["87%", "utilization (was 61%)"]], quote: "My calendar fills itself, and nobody argues about a deposit anymore.", by: "Sarah M., owner", viz: salTabs[4], viz2: { t: "phone", k: "maisonrose", kind: "home" } },
  guides: [{ slug: "fresha-vs-own-salon-app", title: "Fresha or your own salon app?" }, { slug: "salon-no-shows-deposits", title: "How to stop no-shows at your salon" }],
} as Ind;

/* ===================== Laundry ===================== */
const lauTabs: VizSpec[] = [
  { t: "dash", title: "Orders in production", sub: "Tue 13 Oct", kpis: [["In process", "212"], ["Ready", "64"], ["Late", "2"]], rows: [["#2241 Daniel K.", "6.6 kg · AED 264", "g|Delivered"], ["#2250 Marina Gate 2", "12 items", "b|Pressing"], ["#2253 JLT Cluster D", "9 kg", "y|Washing"]], head: ["ORDER", "ITEMS", "STAGE"] },
  { t: "dash", title: "Routes & drivers", sub: "Dubai Marina · JLT · JVC", kpis: [["Drivers", "9"], ["On time", "96%"], ["Stops today", "184"]], rows: [["Imran · Van 3", "22 stops", "g|On time"], ["Luis · Van 5", "18 stops", "y|+12 min"]], head: ["DRIVER", "ROUTE", "STATE"] },
  { t: "dash", title: "Commercial accounts", sub: "Monthly statements", kpis: [["Accounts", "38"], ["Billed", "AED 152,800"], ["Overdue", "AED 7,860"]], rows: [["Marina hotel & gym", "AED 18,400", "g|Net 30"], ["Dubai Marina tower spa", "AED 9,200", "y|Due"]], head: ["ACCOUNT", "AMOUNT", "STATE"] },
  { t: "bars", title: "Machines & capacity", sub: "Today", rows: [["Washers", 86, "86%"], ["Dryers", 71, "71%"], ["Presses", 54, "54%"]] },
  owner("FreshFold · Today", [], [["On-time delivery", 96, "96%"], ["Lost items", 2, "0 refunds"], ["Revenue", 78, "AED 41,200"]]),
];
const lauBase = fromMockup("industry-laundry", lauTabs);
const laundry: Ind = {
  ...lauBase, ...common, slug: "laundry", name: "Laundry & dry cleaning", waText: "Hi, I'm on your laundry page",
  kicker: "Pickup and delivery apps and software for UAE laundries",
  seo: { title: "Laundry Pickup & Delivery Apps in Dubai", desc: "Stop answering 23 WhatsApps before 9 AM. Pickup and delivery apps, driver routes and per-kg billing for UAE laundries. From AED 7,900." },
  stage: { main: lauTabs[0], side: { t: "phone", k: "freshfold", kind: "tracking" },
    cards: [{ icon: "🚚", title: "Imran · 12 min away", sub: "Marina Gate 2 · concierge", style: { left: "-3%", bottom: "8%" } }, { icon: "⚖", title: "6.6 kg weighed · AED 99", sub: "Charged exactly", style: { right: "0%", top: "0%" }, dark: true }, { icon: "★", title: "App Store · FreshFold · ★ 4.8", sub: "1,240 ratings", style: { left: "-3%", top: "16%" } }] },
  journey: { head: "Follow one customer, from his first pickup to \"I haven't done laundry in a year.\"", lead: "Daniel lives in Marina Gate 2 in Dubai Marina. Here's every screen he sees, and every screen your team uses behind him.", steps: [
    { tab: "Found on Google", h: "Daniel searches \"laundry pickup near me.\" You're first.", story: "FreshFold Dubai Marina, 0.6 km away, AED 15/kg and a Schedule button.", results: [["0.6 km", "away"], ["#1", "on Maps"]], chips: ["Website", "Local SEO"], viz: { t: "serp", query: "laundry pickup near me", items: [["FreshFold Dubai Marina", "freshfold.ae", "0.6 km · AED 15/kg · ★ 4.8"], ["Clean Spin", "1.4 km", "★ 4.4"], ["Marina Dry Cleaners", "2.1 km", "★ 4.3"]] }, viz2: { t: "site", k: "freshfold" } },
    { tab: "Pickup scheduled", h: "He schedules a pickup in 30 seconds.", story: "Marina Gate 2, Apt 1804. \"Leave with concierge if I'm out.\" Tuesday 8–9 AM, back Wednesday 6–8 PM.", results: [["30 s", "to schedule"], ["24 h", "turnaround"]], chips: ["Customer app", "Concierge notes"], viz: { t: "phone", k: "freshfold", kind: "home" }, viz2: { t: "phone", k: "freshfold", kind: "tracking" } },
    { tab: "Weighed & tagged", h: "Every bag weighed, every shirt photographed.", story: "Scale 6.6 kg × AED 15 = AED 99, plus items. Card on file. Total AED 264 incl. VAT 5%.", results: [["AED 0", "lost-item refunds"], ["6.6 kg", "charged exactly"]], chips: ["Intake tablet", "Photos"], viz: { t: "doc", title: "Intake · order #2241", sub: "Weighed 6.6 kg", lines: [["Wash & fold · 6.6 kg", "AED 99.00"], ["Shirts ×4 pressed", "AED 36.00"], ["Duvet", "AED 75.00"], ["Dry clean ×2", "AED 54.00"]], total: ["Total incl. VAT 5%", "AED 264.00"] } },
    { tab: "Delivered & paid", h: "Back at his door the next evening, already paid.", story: "\"Left with your concierge.\" A WhatsApp confirms weight, items and the amount.", results: [["96%", "on-time"], ["0", "calls asked"]], chips: ["Driver app", "WhatsApp"], viz: { t: "phone", k: "freshfold", kind: "lock" } },
    { tab: "Every Tuesday, on autopilot", h: "Three weeks later, he never schedules again.", story: "Weekly Fresh plan AED 549/month, 24 of 36 kg used. \"Give AED 75, get AED 75\".", results: [["318", "plans"], ["AED 152,800", "MRR"]], chips: ["Subscriptions", "Referrals"], viz: { t: "phone", k: "freshfold", kind: "loyalty" } },
  ] },
  caseStudy: { brand: "freshfold", label: "FreshFold · Dubai Marina & JLT · 6 branches", h: "From a paper order book to an app.", problem: "23 WhatsApps before 9 AM and orders lost between drivers.", built: "Customer and driver apps, weight-based billing, commercial accounts and WhatsApp updates.", metrics: [["+212%", "online orders"], ["−50%", "phone calls"], ["4.8★", "1,240 App Store ratings"]], quote: "We stopped answering the phone and started growing.", by: "FreshFold owner", viz: lauTabs[4], viz2: { t: "phone", k: "freshfold", kind: "tracking" } },
  guides: [{ slug: "start-laundry-delivery-business-uae", title: "Starting a laundry pickup and delivery business in the UAE" }, { slug: "app-like-washmen-cost", title: "How much does an app like Washmen cost?" }],
} as Ind;

/* ===================== Auto repair ===================== */
const autTabs: VizSpec[] = [
  { t: "dash", title: "Shop board · Tue 13 Oct", sub: "9 bays", kpis: [["Bays in use", "7/9"], ["Waiting approval", "3"], ["Ready", "4"]], rows: [["Patrol 2019 · D 48210", "Brakes", "y|Waiting approval"], ["Porsche 911 GT3", "Service", "b|In bay 4"], ["Pajero · Priya", "AC service", "g|Ready"]], head: ["CAR", "JOB", "STATE"] },
  { t: "steps", title: "Inspection · Patrol D 48210", sub: "Tablet", steps: [["Front brake pads 2 mm", "Photo + video attached"], ["Customer approved on WhatsApp", "AED 890 · 4 min"], ["Oil service done", "AED 299"], ["AC cabin filter", "AED 273"]] },
  { t: "bars", title: "Parts & margins", sub: "AED 54,400 · 46% margin · Sharjah Parts Trading", rows: [["Brake pads", 62, "41%"], ["Oil + filter", 48, "32%"], ["AC parts", 55, "38%"]] },
  { t: "dash", title: "Invoices & payouts", sub: "Zoho Books · Tabby pay-in-4", kpis: [["Billed", "AED 34,800"], ["Paid on WhatsApp", "71%"], ["Avg. time to pay", "6 min"]], rows: [["#4821 Marcus T.", "AED 1,535.10", "g|Paid"], ["#4824 Fleet", "AED 12,200", "y|Net 30"], ["Payout Wed", "AED 32,700", "g|Emirates NBD ••4410"]], head: ["INVOICE", "AMOUNT", "STATE"] },
  owner("Good evening, Rashid · Tue 13 Oct", [], [["Revenue ▲18%", 78, "AED 34,800"], ["Cars", 70, "23"], ["ARO", 74, "AED 1,480"], ["ELR", 60, "AED 545/h"], ["Approvals", 64, "64%"], ["Status calls", 15, "−52%"]]),
];
const autBase = fromMockup("industry-auto-repair", autTabs);
const autoRepair: Ind = {
  ...autBase, ...common, slug: "auto-repair", name: "Garages & car service", waText: "Hi, I'm on your garages page",
  kicker: "Websites, booking and software for garages and car service in the UAE",
  seo: { title: "Garage & Car Service Websites and Apps in Dubai", desc: "Customers see the inspection photos and approve on WhatsApp. Websites, booking by plate and payment links for garages in Al Quoz and across the UAE. From AED 7,900." },
  stage: { main: autTabs[0], side: { t: "phone", k: "apex", kind: "status" },
    cards: [{ icon: "✓", title: "Brake pads approved · AED 890", sub: "Marcus T. · 4 min", style: { left: "-3%", bottom: "8%" } }, { icon: "💳", title: "Paid on WhatsApp · AED 1,535.10", style: { right: "0%", top: "0%" }, dark: true }, { icon: "★", title: "Google Maps · ★ 4.9 · #1", sub: "860 reviews", style: { left: "-3%", top: "16%" } }] },
  journey: { head: "Follow one customer, from Google to his next oil change.", lead: "Marcus has a 2019 Nissan Patrol with squeaky brakes. Here's every screen he sees, and every screen your team uses behind him.", steps: [
    { tab: "Found on Google", h: "He searches \"car service near me.\" You come up first.", story: "A fast dark site in English and Arabic with a Book button and your Google profile with Friday hours right.", results: [["Top 3", "on Google Maps"], ["1.1 s", "page load"]], chips: ["Website", "Local SEO", "Review requests"], viz: { t: "site", k: "apex" }, viz2: { t: "phone", k: "apex", kind: "home" } },
    { tab: "Booked online", h: "He books at 10 PM, without calling anyone.", story: "Plate D 48210 finds his 2019 Nissan Patrol LE, 99,860 km. Free brake inspection plus oil service AED 299. Tuesday 13, 8:00.", results: [["38%", "booked after hours"], ["0", "phone calls"]], chips: ["Booking by plate", "Garage software sync"], viz: { t: "phone", k: "apex", kind: "detail" }, viz2: { t: "phone", k: "apex", kind: "status" } },
    { tab: "Inspection approved", h: "Dave finds worn pads. Marcus sees them too.", story: "Photos and a short video on his phone. Front brake pads, AED 890, approve with one tap on WhatsApp.", results: [["64%", "work approved (was 22%)"], ["4 min", "to approve"]], chips: ["Tablet inspections", "Photo & video"], viz: autTabs[1], card: { title: "✓ Front brake pads · AED 890" } },
    { tab: "Paid on WhatsApp", h: "He pays from WhatsApp and walks straight to his car.", story: "Invoice #4821 incl. VAT: brakes AED 890, oil AED 299, AC filter AED 273. Apple Pay or Tabby. 12-month warranty.", results: [["6 min", "average time to pay"], ["71%", "paid on WhatsApp"]], chips: ["Pay links", "Apple Pay", "Tabby"], viz: chat("Apex Auto Works", "#f97316", [{ w: "in", t: "Hi Marcus, your Patrol is ready. Invoice #4821 · AED 1,535.10 incl. VAT.", link: "pay.apexautoworks.ae/4821", time: "5:48 PM" }, { w: "out", t: "Paid ✓ thanks!", time: "5:50 PM" }]), viz2: { t: "phone", k: "apex", kind: "checkout" } },
    { tab: "Back in 10,000 km", h: "Ten thousand kilometres later, he comes back.", story: "A WhatsApp reminder — \"due for a service\" — and a review request. 412 reminders sent, 131 booked.", results: [["32%", "of reminders book"], ["+212", "Google reviews"]], chips: ["Reminders", "Review requests"], viz: { t: "phone", k: "apex", kind: "lock" } },
  ] },
  caseStudy: { brand: "apex", label: "Apex Auto Works · Al Quoz, Dubai · 9 bays", h: "Three service advisors, finally off the phone.", problem: "Status calls, declined work and a half-empty Friday afternoon.", built: "Site, Google profile, online booking, tablet inspections, WhatsApp payment links and reminders. Live in 11 weeks.", metrics: [["AED 1,480", "ARO (was AED 1,170)"], ["−52%", "status calls"], ["+212", "Google reviews"]], quote: "My service advisors go home at six now. And customers approve more, because they can actually see what we see.", by: "Rashid A., owner", viz: autTabs[4], viz2: { t: "phone", k: "apex", kind: "status" } },
  guides: [{ slug: "more-customers-garage-dubai", title: "How garages in Dubai get more customers" }],
} as Ind;

/* ===================== Home services ===================== */
const hsTabs: VizSpec[] = [
  { t: "dash", title: "Dispatch board · Tue 13 Oct · 9:18 AM", sub: "46 jobs · 14 vans", kpis: [["Jobs", "46"], ["Emergencies", "2"], ["Booked", "AED 104,500"]], rows: [["#7741 Tom R. · AC not cooling", "Van 7", "b|En route"], ["#7744 Layla · Gas top-up", "Van 3", "g|On site"], ["#7747 Marina Heights AMC", "Van 9", "y|2:30 PM"]], head: ["JOB", "VAN", "STATE"] },
  { t: "dash", title: "Estimates & follow-ups", sub: "Good · Better · Best · Tabby", kpis: [["Open", "AED 235,800"], ["Close rate", "58%"], ["Follow-ups today", "11"]], rows: [["Q-2318 Linda Park · Split 1.5-ton", "AED 2,450", "y|Tabby 4 × AED 613"], ["Q-2318 · Inverter 2-ton", "AED 3,200", "g|Most chosen"], ["Q-2318 · Ducted upgrade", "AED 9,800", "b|Tamara 12 months"]], head: ["ESTIMATE", "AMOUNT", "STATE"] },
  { t: "dash", title: "Invoices & payments", sub: "Zoho Books", kpis: [["Collected", "AED 353,700"], ["Overdue", "AED 7,860", "was 67,650"], ["Paid on site", "81%"]], rows: [["#7741 Tom R.", "AED 880", "g|Apple Pay"], ["Marina Heights", "AED 660/mo", "g|AMC"]], head: ["INVOICE", "AMOUNT", "STATE"] },
  { t: "bars", title: "Vans & stock", sub: "Restock → Al Quoz HVAC Supply", rows: [["R410A gas", 22, "4 left"], ["45/5 µF capacitors", 38, "12"], ["Filters", 70, "56"]] },
  owner("Peak Cooling · Today", [], [["Booked", 78, "AED 104,500"], ["Jobs", 46, "46"], ["Avg. ticket", 55, "AED 2,270"]]),
];
const hsBase = fromMockup("industry-home-services", hsTabs);
const homeServices: Ind = {
  ...hsBase, ...common, slug: "home-services", name: "AC, cleaning & maintenance", waText: "Hi, I'm on your AC & maintenance page",
  kicker: "Booking, dispatch and WhatsApp for UAE home service companies",
  seo: { title: "Apps & Websites for AC, Cleaning and Maintenance Companies", desc: "When the AC dies at 1 AM, they find you first. Booking with call-out deposit, dispatch, WhatsApp replies and AMC contracts for UAE service companies. From AED 7,900." },
  stage: { main: hsTabs[0], side: { t: "phone", k: "peakcooling", kind: "tracking" },
    cards: [{ icon: "🌙", title: "Booked 1:04 AM · #7741", sub: "Tom R. · AED 99 deposit paid", style: { left: "-3%", bottom: "10%" } }, { icon: "💳", title: "Paid on site · 8:12 AM · AED 880", sub: "Apple Pay", style: { right: "0%", top: "0%" }, dark: true }, { icon: "🚐", title: "Van 7 · Ryan · 12 min away", sub: "Tom messaged ✓", style: { left: "-3%", top: "16%" } }] },
  journey: { head: "Follow one customer, from a warm house at 1 AM to \"see you before summer.\"", lead: "Tom wakes up at 1 AM in Arabian Ranches and the AC is blowing warm air — 31°C inside. Here's every screen he sees, and every screen your team uses behind him.", steps: [
    { tab: "Found at 1 AM", h: "Tom searches \"ac repair near me\" at 1 AM. You're first.", story: "Peak Cooling is #1: Open 24 hours, first slot 7–8 AM. Competitors say \"Closed · opens 8 AM\".", results: [["#1", "at 1 AM"], ["First slot", "7–8 AM"]], chips: ["Website", "Local SEO"], viz: { t: "serp", query: "ac repair near me", items: [["Peak Cooling · AC repair from AED 249", "peakcooling.ae", "Open 24 hours · Arabian Ranches 1.9 km · first slot 7–8 AM"], ["Desert Breeze AC", "Closed · Opens 8 AM", "★ 4.4"], ["CoolFix Technical Services", "Closed · Opens 9 AM", "★ 4.2"]] }, viz2: { t: "site", k: "peakcooling" } },
    { tab: "Booked & deposit paid", h: "He books the first slot and pays AED 99. Then he tries to sleep.", story: "AC not cooling, two photos, Tue 13 Oct 7–8 AM with Ryan in Van 7. A community gate note is added.", results: [["AED 99", "call-out deposit"], ["1:04 AM", "booked"]], chips: ["Booking", "Deposit", "WhatsApp"], viz: { t: "phone", k: "peakcooling", kind: "detail" }, viz2: { t: "phone", k: "peakcooling", kind: "status" } },
    { tab: "On the way", h: "Ryan shows up with the right gas and capacitor, and Tom knows when.", story: "Villa 214, Arabian Ranches. Community gate: show the booking QR. R410A gas ×2, 45/5 µF capacitor ×3 in the van.", results: [["12 min", "away, live"], ["First visit", "fix rate up"]], chips: ["Tech app", "Live tracking"], viz: { t: "phone", k: "peakcooling", kind: "tracking" } },
    { tab: "Fixed & paid", h: "Cooling again in an hour, paid before Ryan leaves the villa.", story: "AED 880 on Apple Pay, receipt link on WhatsApp, synced to Zoho Books.", results: [["1.4 days", "to get paid (was 34)"], ["AED 880", "paid on site"]], chips: ["Pay on site", "Zoho Books"], viz: hsTabs[2], viz2: { t: "phone", k: "peakcooling", kind: "lock" } },
    { tab: "Back before every summer", h: "Ryan mentions the 9-year-old outdoor unit. Tom joins Peak Care.", story: "Peak Care AMC, AED 49 a month: two services a year, summer priority, 15% off parts. 1,120 contracts, AED 54,900 monthly recurring, 91% renew.", results: [["AED 54,900", "monthly recurring"], ["91%", "renew"]], chips: ["AMC contracts", "Reminders"], viz: { t: "phone", k: "peakcooling", kind: "loyalty" } },
  ] },
  caseStudy: { brand: "peakcooling", label: "Peak Cooling · Dubai & Sharjah · 14 vans", h: "From missed calls to a full board by 8 AM.", problem: "Seven missed calls overnight, two of them AC failures that booked someone else by 7 AM.", built: "Booking with an AED 99 deposit, WhatsApp replies, tech app with quotes and payment, AMC contracts.", metrics: [["+31%", "booked jobs"], ["1.4 days", "to get paid (was 34)"], ["4.9★", "640 reviews"]], quote: "Half our emergency jobs book themselves overnight now. In August, that's everything.", by: "Peak Cooling owner", viz: hsTabs[4], viz2: { t: "phone", k: "peakcooling", kind: "status" } },
  guides: [{ slug: "ac-maintenance-business-bookings", title: "How AC maintenance companies get more bookings" }, { slug: "app-like-justlife-cost", title: "How much does an app like Justlife cost?" }],
} as Ind;
homeServices.h1a = "You're on a roof at 46°C."; homeServices.h1b = "Your phone is ringing again.";

/* ===================== Phone repair (rewritten for the UAE) ===================== */
const prTabs: VizSpec[] = [
  { t: "dash", title: "Repair tickets · Karama", sub: "Tue 13 Oct", kpis: [["On the bench", "9"], ["Ready", "6"], ["Avg. repair", "45 min"]], rows: [["#4471 Luis G. · iPhone 13", "Screen AED 449", "b|On the bench"], ["#4472 Aisha · Galaxy S23", "Battery AED 229", "g|Ready"]], head: ["TICKET", "REPAIR", "STATE"] },
  { t: "dash", title: "Parts across stores", sub: "Deira · Karama · City Centre", kpis: [["Parts tracked", "1,284"], ["Dead stock", "AED 2,350", "was 19,100"], ["Not spent", "AED 1,600"]], rows: [["iPhone 13 screens ×4", "Deira → Karama", "g|Transfer T-208"], ["Galaxy S23 battery", "City Centre", "y|Low"]], head: ["PART", "MOVE", "STATE"] },
  { t: "dash", title: "Trade-ins & refurbished", sub: "Store credit +10%", kpis: [["Trade-ins", "6 today"], ["Credit issued", "AED 151,700"], ["Margin after refurb", "38%"]], rows: [["iPhone 13 · Flawless", "AED 1,350", "g|Graded"], ["iPhone 13 · Good", "AED 1,150", "g|Graded"], ["iPhone 13 · Cracked", "AED 600", "y|Graded"]], head: ["DEVICE", "OFFER", "STATE"] },
  { t: "bars", title: "Warranty & quality", sub: "1.8% comeback rate · supplier credit AED 1,510 pending", rows: [["Supplier A screens", 8, "1.1%"], ["Batch Z-0912 · iPhone 14 screens", 92, "11.5%", "#ff5a5a"], ["Batteries", 12, "1.6%"]] },
  owner("FixPoint · Today", [], [["Deira", 55, "AED 4,550"], ["Karama", 53, "AED 4,330"], ["City Centre", 34, "AED 2,800"]]),
];
const prBase = fromMockup("industry-phone-repair", prTabs);
const phoneRepair: Ind = {
  ...prBase, ...common, slug: "phone-repair",
  proc: prBase.proc.map((st) => ({ ...st, p: st.p.replace(/status texts/g, "WhatsApp status updates") })), name: "Phone repair & trade-ins", waText: "Hi, I'm on your phone repair page", crumb: "Phone repair",
  kicker: "Websites, instant quotes and repair tracking for phone repair shops in Dubai",
  h1a: "You fix a screen in 45 minutes.", h1b: "\"How much?\" takes all day.",
  sub: "Instant repair prices online, tickets that update the customer on WhatsApp by themselves, parts that move between stores before you run out, and trade-ins priced in seconds. Built for phone, tablet and computer repair shops, connected to the POS you already use.",
  tech: ["Works with RepairDesk", "Zoho Books", "WhatsApp Business", "Shopify POS", "Google Business Profile"],
  plain: "We build what a phone repair shop in the UAE needs on top of RepairDesk or your current POS: a price for every model on your website, online booking, WhatsApp status updates, a bench screen for techs, stock transfers between Deira, Karama and City Centre, and instant trade-in offers. A website with prices starts from AED 7,900; the full shop upgrade takes about 12 weeks from AED 49,000.",
  facts: [["From", "AED 7,900"], ["Time", "2–12 weeks"], ["Languages", "English + Arabic"], ["Based in", "Dubai"]],
  seo: { title: "Mobile Repair Shop Websites & Software in Dubai", desc: "A price for every model, WhatsApp updates instead of 'is it ready?' calls, stock across stores and trade-ins in seconds. For repair shops in Deira, Karama and across the UAE. From AED 7,900." },
  stage: { main: prTabs[0], side: { t: "phone", k: "fixpoint", kind: "status" },
    cards: [{ icon: "🔄", title: "Transfer T-208 · 4 screens", sub: "Deira → Karama · AED 1,600 not spent", style: { left: "-3%", bottom: "8%" } }, { icon: "★", title: "Karama 4.9 · 302 reviews", style: { right: "0%", top: "0%" }, dark: true }, { icon: "★", title: "App Store · FixPoint · ★ 4.8", sub: "930 ratings", style: { left: "-3%", top: "16%" } }] },
  painsHead: "What repair shop owners tell us on the first call.",
  pains: [
    { q: "\"Half my messages are 'كم سعر شاشة ايفون 13؟' or 'how much for an iPhone 13 screen?'\"", cost: "41 price questions in Instagram DMs this week, some in Arabic. 6 of them walked in.", fix: "Every model and repair priced on your site, with stock and wait time per store: iPhone 13 screen AED 449. And a button to book." },
    { q: "\"Their phone is on my bench, so they call from work: 'Is it ready?'\"", cost: "23 \"is it ready?\" calls on Saturday, each one answered by a tech with a screwdriver in his hand.", fix: "WhatsApp status updates to any number they give you, from check-in to \"ready, tested\", with a pay link: Pay AED 449 · Apple Pay." },
    { q: "\"We ordered screens. The other store had nine on the shelf.\"", cost: "A WhatsApp group \"FixPoint stores (3)\": \"just ordered 4 from PartsHub, AED 1,600\". AED 19,100 of parts sitting unsold.", fix: "One stock list for all three stores. Parts move between stores before anyone places an order." },
  ],
  journey: { head: "Follow one customer, from a cracked screen to trading in his next phone.", lead: "Luis cracked his iPhone 13 on the way to work. Here's every screen he sees, and every screen your team uses behind him.", steps: [
    { tab: "Found on Google", h: "Luis searches \"iPhone screen repair near me.\" You're first.", story: "Karama 4.9 · 302 reviews, about a 15 min wait, AED 449 in stock. Competitor Cell Doctor Deira has no price.", results: [["#1", "on Maps"], ["+186%", "calls and walk-ins"]], chips: ["Website", "Local SEO"], viz: { t: "serp", query: "iphone screen repair near me", items: [["FixPoint Karama · iPhone 13 screen AED 449", "fixpoint.ae › karama", "~15 min wait · in stock · ★ 4.9 (302)"], ["Cell Doctor Deira", "", "Call for price"], ["iFix Hub", "", "★ 4.3"]] }, viz2: { t: "site", k: "fixpoint" } },
    { tab: "Priced & booked", h: "He sees AED 449, picks 10:00 AM, and goes to work.", story: "Instant price from part cost, labour and margin. Booked in 10 seconds, no price DMs.", results: [["10 s", "to get a price"], ["0", "price DMs"]], chips: ["Instant price", "Booking"], viz: { t: "phone", k: "fixpoint", kind: "detail" }, viz2: { t: "phone", k: "fixpoint", kind: "status" } },
    { tab: "On the bench", h: "Sam has the part, the photos and a checklist.", story: "iPhone 13 Blue 128 GB, check-in photos, part from transfer T-208 (bin E-14), timer 32:10, 9 tests, battery health 88% noted.", results: [["45 min", "average repair"], ["9/9", "tests passed"]], chips: ["Bench screen", "Checklist"], viz: prTabs[0] },
    { tab: "Ready & paid", h: "He walks in, pays with Apple Pay, and is out in two minutes.", story: "A WhatsApp says ready and tested. Pay AED 449 with Apple Pay at the counter.", results: [["2 min", "at the counter"], ["4.9★", "Karama on Google"]], chips: ["WhatsApp", "Apple Pay"], viz: { t: "phone", k: "fixpoint", kind: "checkout" } },
    { tab: "Trades in next year", h: "A year later, he trades the same iPhone 13 in, right in the app.", story: "Flawless AED 1,350, Good AED 1,150, Cracked AED 600, plus store credit +10% toward a refurbished iPhone 15 at AED 2,199. IMEI clean, data wiped.", results: [["+57%", "trade-ins"], ["38%", "margin after refurb"]], chips: ["Trade-in", "Refurbished", "Store credit"], viz: prTabs[2], viz2: { t: "phone", k: "fixpoint", kind: "home" } },
  ] },
  tabs: prBase.tabs.map((t, i) => ({ ...t, ...[
    { p: "Checked in, diagnosing, waiting for a part, on the bench, ready. Each step updates the customer on WhatsApp, so the counter stops answering the same question all day.", fine: "Reads and writes to RepairDesk, so nobody types a ticket twice." },
    { p: "Every store's parts on one screen, matched to the repairs already booked. When Karama runs short, the system suggests a transfer from Deira before it suggests an order.", fine: "Weekly stock counts take ten minutes with a barcode scanner." },
    { p: "Every traded-in phone is graded, checked against the blacklist, refurbished and listed for sale. You see what you paid, what you spent and what it sold for.", fine: "Lists refurbished devices on your Shopify store and in-store screens." },
    { p: "Every warranty return is tied to the part, the supplier and the tech. When one batch of screens starts failing, you see it in the second week, not the second month.", fine: "Supplier credits (AED 1,510 recovered) are tracked until they're paid." },
    { p: "Repairs, average repair time, trade-ins, reviews and revenue for every store. The numbers you'd normally pull from three POS reports.", fine: "A weekly summary across stores, if you have more than one." },
  ][i] })) as Tab[],
  techRows: [
    ["", "Repair POS alone RepairDesk", "Your POS + [Brand] Most chosen keep your system · we build around it", "Fully custom system built from scratch for you"],
    ["Best for", "Single-counter shops with walk-ins only", "Shops with 1–5 stores growing online bookings and trade-ins", "Chains and refurbishers with their own workflow"],
    ["Your customers see", "The POS's standard emails and forms", "Your own price pages, booking, WhatsApp updates and app", "Your brand everywhere"],
    ["Time to launch", "1–3 weeks of setup", "About 12 weeks", "4–6 months"],
    ["Budget", "AED 150–600 a month in fees", "from AED 49,000 + your current POS", "from AED 105,000"],
    ["Your customer list", "Lives in their system", "Synced to a database you own", "Yours, fully"],
  ],
  tiers: [
    { k: "GET FOUND", name: "Website + repair prices", desc: "A fast site with a price for every model and repair, and online booking.", amt: "AED 7,900", items: ["Price pages for every model", "Stock and wait time per store", "Online booking", "Google profile + review requests on WhatsApp", "2–4 weeks"] },
    { k: "MOST CHOSEN", name: "Full repair shop upgrade", desc: "Everything Luis saw above: website plus your own app.", amt: "AED 49,000", hot: true, items: ["Everything in Get Found", "WhatsApp status + bench screen", "Instant trade-in offers", "Customer app + Apple Pay", "About 12 weeks"] },
    { k: "MULTI-LOCATION", name: "Multi-store platform", desc: "For several stores, a central refurbishing bench or a franchise.", amt: "AED 105,000", items: ["Several stores, one dashboard", "Stock transfers + purchase orders", "Refurbished resale on Shopify", "Custom integrations", "14–20 weeks"] },
  ],
  faq: [
    { q: "Do I have to leave RepairDesk?", a: "No. We build around the POS you already use. Tickets, customers, parts and payments sync both ways, so the counter keeps working the way it does today. If your POS can't connect, we'll tell you on the first call." },
    { q: "How do online prices stay right when part costs change?", a: "Each price is built from the part cost, your labour and your margin. When a supplier changes a cost, the price updates (or waits for your OK). You set the rules once, for 400 repairs or 4,000." },
    { q: "How do customers get updates when their phone is in the shop?", a: "They give you any WhatsApp number (a work phone, a partner's phone) at check-in. Updates go there, with a link to the ticket that works on any device." },
    { q: "What about customer data, passcodes and the UAE PDPL?", a: "We never store passcodes. The check-in flow records consent, a pre-repair checklist and photos of the device, and data is handled under the UAE Personal Data Protection Law (PDPL), so you're covered if a customer says something was already broken." },
    { q: "How are trade-in offers priced?", a: "From your own price table: model, storage and condition (for example iPhone 13 Flawless AED 1,350, Good AED 1,150, Cracked AED 600). You set the margin. Every trade-in gets an IMEI blacklist check before you pay, and the offer can include a store-credit bonus." },
    { q: "Who owns the customer list and the data?", a: "You do, 100%: the website, the app, every customer, ticket, photo and trade-in." },
  ],
  related: [
    { k: "WEBSITE", name: "Price pages & booking", p: "A price for every model and repair, with stock per store.", href: "/services/website-design" },
    { k: "SHOPIFY", name: "Refurbished store", p: "Sell graded trade-ins online, with warranty and Apple Pay.", href: "/services/shopify-development" },
    { k: "AUTOMATION", name: "Automation & ERP", p: "Stock transfers, supplier orders, WhatsApp status and Zoho Books.", href: "/services/business-automation" },
    { k: "SEO", name: "Local SEO", p: "Every store in the top 3 for \"iPhone screen repair near me\".", href: "/services/seo" },
  ],
  ctaSteps: ["Pick a time before you open or after you close", "Walk us through a day at the counter and the bench", "Get your plan and fixed price within 48 hours"],
  caseStudy: { brand: "fixpoint", label: "FixPoint · Dubai · 3 stores", h: "Three stores, one stock list, and no more \"is it ready?\"", problem: "Price DMs, status calls and parts bought twice across Deira, Karama and City Centre.", built: "Price pages, booking, WhatsApp status, bench screen, stock transfers and trade-ins.", metrics: [["45 min", "average repair"], ["+57%", "trade-ins"], ["4.8★", "930 ratings"]], quote: "Customers used to stand at the counter asking. Now they get a WhatsApp, walk in, pay and leave.", by: "FixPoint owner", viz: prTabs[4], viz2: { t: "phone", k: "fixpoint", kind: "status" } },
  guides: [],
} as Ind;

export const INDUSTRY_PAGES: Ind[] = [restaurants, salons, laundry, autoRepair, homeServices, phoneRepair].map(scrubPage);
export const industryPage = (slug: string) => INDUSTRY_PAGES.find((p) => p.slug === slug);
