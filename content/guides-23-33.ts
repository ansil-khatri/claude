import type { Guide } from "./guides";
const CHECKED = "October 2026";

const C = (t: string) => ({ check: t });
const P = (t: string) => ({ p: t });

/** Full text for guides #23–#33 (docs/seo-uae/09-blog-calendar.md outlines). Items with a check box must be re-verified on publish day. */
export const MORE_23_33: Record<string, Partial<Guide>> = {
  "whatsapp-chatbot-guide-uae": {
    keywords: ["whatsapp chatbot uae", "whatsapp chatbot dubai", "whatsapp ai assistant for business"],
    opening: "By lunchtime your shop has had 312 WhatsApp messages, and about four in five are the same five questions: price, location, opening hours, delivery and “is it available?”.",
    answer: "A WhatsApp chatbot answers repeat questions, takes bookings or orders and hands anything tricky to your staff. In the UAE we set up a simple assistant from AED 2,900, with AED 150–1,100 a month running costs. One that books and orders, with staff handover, starts at AED 29,000.",
    links: [{ href: "/services/ai-whatsapp-automation", label: "WhatsApp & AI assistants" }, { href: "/guides/whatsapp-business-api-cost-uae", label: "WhatsApp Business API cost" }, { href: "/guides/arabic-ai-chatbot", label: "Arabic AI chatbots" }, { href: "/guides/whatsapp-ordering-for-restaurants", label: "WhatsApp ordering" }],
    body: [
      { h2: "What a chatbot can answer" }, P("Start with the questions your team types out every day. Take the last 100 customer chats and count them. Usually a handful of topics cover most of the volume."),
      { ul: ["Opening hours, location and parking", "Price lists and what is included", "Stock and delivery times", "Booking status and opening a new request", "How to pay and where the receipt is"] },
      { h2: "Booking and orders" }, P("Answering is the easy part. The real saving comes when the chatbot finishes the job: it offers three free slots, takes a deposit link, confirms, and puts the booking in your calendar. For restaurants and shops it builds a cart and sends a ticket to the kitchen or your stock system."),
      { h2: "Handover to a person" }, P("Every good assistant knows when to stop. Set clear triggers so a human takes over quickly."),
      { ul: ["The customer is upset or asks for a manager", "A refund, a complaint or a price negotiation", "The bot has failed to understand twice in a row", "Anything involving health, legal or money decisions"] },
      P("The handover should pass the whole chat to your staff inbox, so nobody asks the customer to repeat themselves."),
      { h2: "Rules: what it may never say" }, P("Write these down before launch and test them."),
      { ul: ["No prices, discounts or delivery promises that are not in your current price list", "No medical, legal or tax advice", "No made-up answers: if it does not know, it says so and offers a person", "No marketing messages to people who have not opted in"] },
      { h2: "What it costs" }, { table: { head: ["Level", "From (AED)", "What you get"], rows: [["Simple assistant", "2,900", "Answers common questions on WhatsApp or your website; AED 150–1,100 a month running cost"], ["Orders and bookings", "29,000", "Takes orders or bookings, payment links and staff handover; 4–6 weeks"], ["Back-office agents", "59,000", "Quotes, follow-ups and internal tasks; 8–12 weeks"]] } },
      C("Meta charges for business messages by category and country, and a WhatsApp provider adds its own fee. Both change. Last checked " + CHECKED + ". Confirm with Meta’s current rate card and your provider before relying on a monthly figure."),
      { h2: "Setup steps" }, { ol: ["List the top 20 questions from real chats", "Write the answers once, in the tone you use with customers", "Decide what the bot may do alone and what needs a person", "Verify your business with Meta and choose a provider", "Build and test with your own team for a week", "Launch with a staff member watching the first days", "Review missed questions every Friday and add them"] },
    ],
    faq: [
      { q: "Do I need the WhatsApp Business API?", a: "For a bot or a shared inbox, yes. The free Business app is for one phone and manual replies. See our guide on API costs." },
      { q: "Will customers know they are talking to a bot?", a: "Say so in the first message. People accept it when it is quick and a person is one tap away." },
      { q: "Can it reply in Arabic?", a: "Yes, with testing. Arabic quality depends on dialect and your real chat examples; see our Arabic chatbot guide." },
    ],
  },

  "e-invoicing-odoo-uae": {
    keywords: ["odoo e-invoicing uae", "odoo uae e-invoicing asp", "odoo vat uae"],
    opening: "Your Odoo has run quietly for three years. Then your accountant asks whether it can send invoices to a government network, and nobody on the team knows where to look.",
    answer: "Whether Odoo is ready for UAE e-invoicing depends on your version, your edition and the localisation module you run. Plan on connecting Odoo to an Accredited Service Provider, testing real invoices, and starting the check now. Our readiness and ASP setup for Odoo starts from AED 9,900.",
    links: [{ href: "/guides/uae-e-invoicing", label: "UAE e-invoicing explained" }, { href: "/guides/e-invoicing-checklist-july-2027", label: "E-invoicing checklist" }, { href: "/services/e-invoicing-integration", label: "E-invoicing integration" }, { href: "/tools/e-invoicing-readiness-check", label: "Readiness check" }],
    body: [
      { h2: "Does Odoo support UAE e-invoicing?" }, P("Odoo is modular and ships regional accounting packages called localisations. What a UAE localisation covers, and from which version, is Odoo’s decision, not ours, and it is changing as the UAE mandate approaches."),
      C("Odoo’s UAE e-invoicing support, supported versions and ASP connections change often. Last checked " + CHECKED + ". Confirm with Odoo’s official documentation and your Odoo partner before relying on it."),
      { h2: "Check your version first" }, P("Odoo Online, Odoo.sh and self-hosted installs behave differently. Community and Enterprise editions also differ. Write down four things before you ask anyone for a quote."),
      { ul: ["Exact Odoo version number", "Community or Enterprise", "Online, Odoo.sh or your own server", "Which modules were customised by a developer"] },
      { h2: "Connecting Odoo to an ASP" }, P("Under the UAE model, invoices travel from your system to an Accredited Service Provider, which handles the network and the tax authority side. For Odoo that connection can come from a provider’s own module, from a connector you install, or from a custom module. Ask each provider for a sandbox and a written statement of which Odoo versions it supports."),
      { h2: "Settings that cause rejected invoices" }, { ul: ["Company TRN missing or typed with spaces", "Customer records without a valid TRN or full address", "Tax codes that do not match standard-rated, zero-rated and exempt sales", "Credit notes created by hand instead of from the original invoice", "Units of measure and product descriptions left blank"] },
      { h2: "Invoices that do not start in Odoo" }, P("Many UAE companies issue some invoices from a POS, a booking system or Excel. Those need a route into the same ASP, or they fall outside your e-invoicing. List them all before choosing a provider."),
      { h2: "Custom modules" }, P("If a developer changed invoice layouts, numbering or tax logic, an upgrade or connector can break it. Have the custom code reviewed, and keep your own changes separate from the standard module."),
      { h2: "Testing" }, { ol: ["Run a normal sale to a VAT-registered customer", "Run a zero-rated export", "Issue a credit note", "Take a part payment", "Send an invoice with missing customer data and see the error", "Repeat it all with the numbers your accountant uses at month end"] },
      { h2: "What we do" }, P("We audit your Odoo set-up, connect it to your chosen provider and test a month of your real invoices. Readiness and ASP set-up for Odoo, Zoho or QuickBooks is from AED 9,900 in 2–4 weeks; custom or legacy systems start at AED 24,000. We are an integration partner for your system, not an Accredited Service Provider."),
    ],
    faq: [
      { q: "Do I need a developer for Odoo e-invoicing?", a: "Not always. A standard Odoo with a supported connector may need only configuration and testing. Customised Odoo usually needs developer time." },
      { q: "Which ASP should I choose for Odoo?", a: "The one that supports your exact Odoo version, gives you a sandbox and quotes a price per invoice volume. See our ASP selection guide." },
    ],
  },

  "e-invoicing-quickbooks-uae": {
    keywords: ["quickbooks e-invoicing uae", "quickbooks uae e-invoicing", "quickbooks uae vat"],
    opening: "Your books live in QuickBooks Online, which your bookkeeper loves. Then a client mentions the UAE e-invoicing mandate and asks if you can send them structured invoices.",
    answer: "QuickBooks is a tool built mainly for other markets, so UAE e-invoicing support may be limited. You have three routes: a connector to an Accredited Service Provider, an integration we build, or a move to software with local support. Our integration for QuickBooks starts from AED 9,900.",
    links: [{ href: "/guides/uae-e-invoicing", label: "UAE e-invoicing explained" }, { href: "/guides/uae-e-invoicing-asp-how-to-choose", label: "How to choose an ASP" }, { href: "/guides/zoho-vs-odoo-vs-custom", label: "Zoho vs Odoo vs custom" }, { href: "/services/e-invoicing-integration", label: "E-invoicing integration" }],
    body: [
      { h2: "Where QuickBooks stands" }, P("QuickBooks Online handles UAE VAT reporting, but e-invoicing in the UAE is a separate requirement: invoices must go through an Accredited Service Provider in a set format. Whether Intuit builds that into the UAE version is for Intuit to say."),
      C("QuickBooks’ UAE e-invoicing support changes and we cannot see Intuit’s roadmap. Last checked " + CHECKED + ". Confirm with Intuit’s official UAE support pages before relying on it."),
      { h2: "Your three options" }, { table: { head: ["Option", "Good when", "Watch out for"], rows: [["Connector from an ASP or app store", "All invoices come from QuickBooks and the connector supports UAE", "Check it supports credit notes, zero-rated sales and your volume"], ["Custom integration", "Invoices also come from a POS, a booking system or Excel", "Needs testing and ongoing care"], ["Move to local software", "You are already unhappy with QuickBooks for UAE VAT", "Data migration, staff training, a new cost"]] } },
      { h2: "What an integration involves" }, P("We read invoices from QuickBooks through its API, check them against the required fields, send them to your ASP, and write the ASP’s status back so your team can see which invoices were accepted. Failed invoices go to a short list with a plain explanation."),
      { h2: "Costs" }, P("Readiness and ASP set-up for QuickBooks, Zoho or Odoo starts from AED 9,900 and takes 2–4 weeks. Custom or legacy connections start from AED 24,000. ASP fees and any QuickBooks subscription changes are paid to those providers and are not included. Prices exclude 5% VAT."),
      { h2: "Our recommendation" }, { ul: ["One system, simple sales: try a connector first and test with a month of real invoices", "Several invoice sources: integrate once, so every system feeds the same ASP", "Already planning a change of accounting software: decide before you pay for a connector"] },
      { h2: "Before you decide" }, { ol: ["Count how many invoices you issue each month", "List every tool that creates invoices", "Check your customers’ TRNs", "Ask your ASP shortlist if they support QuickBooks Online", "Pick a go-live date well before the deadline"] },
    ],
    faq: [
      { q: "Should I leave QuickBooks because of e-invoicing?", a: "Not automatically. If a reliable connector exists for your set-up, staying can cost less than migrating. Test it first." },
      { q: "Does the integration change how my team works?", a: "Only slightly. They keep issuing invoices in QuickBooks and check a short status list for any rejected ones." },
    ],
  },

  "uae-e-invoicing-asp-how-to-choose": {
    keywords: ["uae accredited service provider list", "how to choose e-invoicing provider uae", "uae e-invoicing asp"],
    opening: "You open the official list of Accredited Service Providers. It is long, every name sounds similar, and nobody has told you what to ask them.",
    answer: "Choose an Accredited Service Provider by what it connects to, what it costs at your invoice volume, and how it handles errors, not by its brand. Take the official list, shortlist three, ask eight questions and test each one with your real invoices before you sign anything.",
    links: [{ href: "/guides/uae-e-invoicing", label: "UAE e-invoicing explained" }, { href: "/guides/e-invoicing-checklist-july-2027", label: "E-invoicing checklist" }, { href: "/tools/e-invoicing-readiness-check", label: "Readiness check" }, { href: "/services/e-invoicing-integration", label: "E-invoicing integration" }],
    body: [
      { h2: "Where to find the official list" }, P("Use the list published by the Ministry of Finance and the Federal Tax Authority, not a third-party site. We do not copy it here because it changes."),
      C("The list of Accredited Service Providers is updated by the authorities. Last checked " + CHECKED + ". Confirm the current list on the official Ministry of Finance and Federal Tax Authority pages before you shortlist anyone."),
      { h2: "Eight questions to ask every provider" }, { ol: ["Which accounting or ERP systems do you connect to today, and which versions?", "Can I test in a sandbox with my own invoices before paying?", "How is the price built: setup, monthly fee, per invoice, per user?", "What happens when an invoice is rejected, and who sees it?", "How are credit notes, zero-rated and export sales handled?", "Where is my data stored, and can I export it if I leave?", "What support do you offer in Arabic and English, and during what hours?", "What is the contract length and the notice period?"] },
      { h2: "How providers price" }, { table: { head: ["Model", "Suits", "Watch out for"], rows: [["Monthly subscription", "Steady, predictable volume", "A tier that jumps when you pass a limit"], ["Per invoice", "Low or seasonal volume", "Costs grow quickly if you issue thousands"], ["Setup plus monthly", "Custom integrations", "Setup fees that repeat for each new system"]] } },
      C("We do not quote ASP fees here because they vary by provider and volume and are not set by us. Last checked " + CHECKED + ". Get written quotes from each provider."),
      { h2: "Connecting to your software" }, P("The best provider on paper is the wrong one if it cannot talk to your system. If your invoices come from Zoho, Odoo, QuickBooks, a POS or a custom system, ask for the connection method in writing. Our integration work covers the gap between your software and any provider you pick."),
      { h2: "Red flags" }, { ul: ["A provider that will not give you a sandbox", "Pressure to sign a long contract before testing", "No clear answer on exporting your data", "A price that hides per-invoice charges until later", "Claims of accreditation you cannot find on the official list"] },
      { h2: "A simple way to decide" }, P("Shortlist three. Give each the same 20 invoices, including a credit note and a zero-rated sale. Compare how many pass, how clear the errors are and how fast support answers. Then compare price."),
    ],
    faq: [
      { q: "Are you an Accredited Service Provider?", a: "No. We connect your software to the provider you choose." },
      { q: "Can I change provider later?", a: "Usually, but ask about data export and notice periods before you start." },
      { q: "When should I pick one?", a: "Well before the deadline that applies to you. See our main e-invoicing guide for the dates and confirm them with the authorities." },
    ],
  },

  "app-like-talabat-cost": {
    keywords: ["app like talabat cost", "food delivery app development cost uae", "build a delivery app dubai"],
    opening: "“Can you build me a Talabat?” is the first question every app studio hears, usually from someone with two restaurants and a good idea.",
    answer: "Talabat is not one app. It is a customer app, a restaurant app, a rider app, an admin and a large operation behind them. A true marketplace starts around AED 105,000 and can reach AED 250,000 or more. A smarter start for one restaurant group is an ordering app from AED 35,000.",
    links: [{ href: "/services/mobile-app-development", label: "Mobile apps" }, { href: "/guides/app-development-cost-dubai", label: "App development cost" }, { href: "/guides/talabat-commission-math", label: "Talabat commission math" }, { href: "/industries/restaurants/ordering-app", label: "Restaurant ordering app" }],
    body: [
      { h2: "What Talabat really is" }, { ul: ["A customer app: search, menus, cart, payment, order tracking", "A restaurant app or tablet to accept orders", "A rider app with routes, status and earnings", "An admin system for support, payouts, promotions and reports", "Thousands of restaurants, riders and support staff, which is the hard part"] },
      P("The software is the visible part. The marketplace only works if there are restaurants on it, riders available and customers ordering often."),
      { h2: "MVP or full platform" }, { table: { head: ["Scope", "From (AED)", "Time"], rows: [["Ordering app for your own restaurants", "35,000", "6–8 weeks"], ["Ordering app with payments, loyalty, admin", "49,000", "10–12 weeks"], ["Multi-restaurant platform with riders and admin", "105,000", "14–20 weeks"], ["Large platform with custom operations", "250,000+", "16+ weeks"]] } },
      C("These are our own price tiers. Prices exclude 5% VAT and depend on your final scope; what other companies charge varies widely. Last checked " + CHECKED + "."),
      { h2: "What pushes the price up" }, { ul: ["Live rider tracking and dispatch", "Several languages with right-to-left layouts", "Payments with Apple Pay, Tabby and refunds", "Restaurant dashboards and payout reports", "Integrations with POS systems such as Foodics", "Promotions, coupons and loyalty"] },
      { h2: "A smarter start for one restaurant group" }, P("If you run one brand or a small group, you do not need a marketplace. You need your own ordering, with your own customers. Build that first: menu, Apple Pay, pickup and your delivery area, with orders printing at the kitchen. It can cost a fraction of a platform and saves delivery-app commission on repeat customers."),
      { h2: "When a marketplace makes sense" }, P("A marketplace is a business model, not an app. It makes sense when you can bring both sides, restaurants and customers, in a niche the big apps ignore: a cuisine, a building community, a campus. Start narrow and add the rider side later."),
      { h2: "Next step" }, P("Tell us what you actually need. We will recommend the smallest version that tests the idea, with a fixed price in AED before you commit."),
    ],
    faq: [
      { q: "Can I compete with Talabat?", a: "Not by copying it. Winning niches or direct ordering for your own customers is realistic. Our app guide explains the numbers." },
      { q: "Do I need my own riders?", a: "Not at the start. Many restaurants use their own drivers or a delivery partner and add tracking later." },
      { q: "Who owns the app?", a: "You do, from the first payment, including the Apple and Google accounts." },
    ],
  },

  "start-laundry-delivery-business-uae": {
    keywords: ["laundry pickup and delivery business dubai", "start laundry business uae", "laundry app uae"],
    opening: "You have a shop with three machines and a regular crowd, and customers keep asking, “Can you collect it from my flat?”",
    answer: "A pickup and delivery laundry works when you price clearly, plan routes tightly and let customers book and track on their phone. Check what licence your activity needs, then start with a WhatsApp booking flow or an app. Our laundry app starts from AED 7,900.",
    links: [{ href: "/industries/laundry/pickup-delivery-app", label: "Laundry pickup and delivery app" }, { href: "/industries/laundry", label: "Laundries in the UAE" }, { href: "/services/mobile-app-development", label: "Mobile apps" }, { href: "/pricing", label: "Pricing" }],
    body: [
      { h2: "Licence and permissions" }, P("Laundry and dry-cleaning activities, vehicles used for delivery and your premises are each regulated. Requirements depend on whether you are on the mainland or in a free zone, and on your emirate."),
      C("Licence activities, municipality approvals and vehicle rules differ by emirate and change. Last checked " + CHECKED + ". Confirm with your emirate’s economic department or free-zone authority before you invest."),
      { h2: "Pricing: per kg or per piece" }, { table: { head: ["Model", "Works for", "Watch out for"], rows: [["Per piece", "Dry cleaning, suits, abayas, curtains", "Slow to count at pickup"], ["Per kg", "Wash and fold, everyday clothes", "Customers worry about weight accuracy"], ["Subscription", "Households with weekly loads", "Set a fair limit and a clear pause rule"]] } },
      P("Whichever you choose, publish the prices on your booking page and WhatsApp reply. “Ask us” loses customers to whoever shows a number."),
      { h2: "Drivers and routes" }, P("Cluster pickups by area and time slot, for example Marina and JLT on Mondays and Wednesdays. Offer two-hour windows, not “sometime today”. Half-empty vans are the fastest way to lose money."),
      { h2: "Booking: WhatsApp or an app" }, { ul: ["WhatsApp booking: fastest to start, good under about 30 pickups a day", "Web booking page: works without a download, easy to share", "Your own app: best when customers book weekly, track orders and pay in the app"] },
      { h2: "Tracking each garment" }, P("Tag each order with a number or QR label from pickup to delivery. It cuts lost-item disputes and lets customers see “washing”, “pressing” and “out for delivery”."),
      { h2: "Costs to plan for" }, { ul: ["Licence, premises and equipment", "Vehicles, fuel and driver salaries", "Packaging and hangers", "Software and payment fees", "Marketing, such as Google listings and referral offers"] },
      P("For software, our laundry pickup and delivery package starts from AED 7,900 for booking, order status and WhatsApp updates, and rises to AED 49,000 for a full app. Prices exclude 5% VAT."),
      { h2: "Competing with Washmen and others" }, P("Do not try to out-spend big names. Win on a neighbourhood: reliable slots, clear prices, WhatsApp replies in minutes and the same driver each week."),
    ],
    faq: [
      { q: "Do I need an app on day one?", a: "No. Many laundries start with WhatsApp and a booking page and add an app once weekly customers justify it." },
      { q: "Can the app work with my laundry software?", a: "Often yes. Tell us which system you use and we will check how to connect it." },
    ],
  },

  "ac-maintenance-business-bookings": {
    keywords: ["ac maintenance company bookings", "ac maintenance dubai marketing", "ac company website dubai"],
    opening: "It is 2 a.m. in July. Seven people have called your AC company since midnight, nobody answered, and by morning they have booked someone else.",
    answer: "AC companies win more summer bookings by answering faster than competitors: online booking with a deposit, an instant WhatsApp reply, a complete Google profile and yearly maintenance contracts. A website built for AC companies starts from AED 7,900 and helps with all four.",
    links: [{ href: "/industries/home-services/website", label: "AC company website" }, { href: "/industries/home-services", label: "AC and maintenance companies" }, { href: "/services/seo", label: "Local SEO" }, { href: "/services/ai-whatsapp-automation", label: "WhatsApp & AI" }],
    body: [
      { h2: "Why missed calls cost the most in summer" }, P("In the hottest weeks customers ring several companies and book whoever answers first. Your technicians are on roofs and cannot pick up. The fix is to answer without them."),
      { h2: "Online booking with a deposit" }, { ul: ["Let customers pick the service: cleaning, gas refill, repair, annual contract", "Show the call-out fee and price range before they book", "Ask for a small deposit by card or Apple Pay to cut no-shows", "Collect the building, unit and a photo of the unit"] },
      { h2: "A WhatsApp auto-reply that helps" }, P("When a message arrives at night, reply within seconds with three buttons: book a visit, get a quote, speak to dispatch in the morning. The customer feels looked after, and you wake up to organised jobs."),
      { h2: "AMC contracts" }, P("An annual maintenance contract turns a one-off call into recurring work. Offer two or three simple plans, show them on your website and send renewal reminders by WhatsApp before the season starts. Reminders are cheap and bring in work you would otherwise lose."),
      { h2: "Your Google profile" }, { ul: ["Pick accurate categories and list every service", "Set the areas you cover instead of showing a home address", "Add real photos of your vans and technicians", "Show opening hours, including emergency hours if you offer them", "Post offers before summer begins"] },
      { h2: "Reviews" }, P("Ask for a review on the day of the job, by WhatsApp, with a direct link. Reply to every review, including the bad ones, in a calm tone. Do not pay for or invent reviews."),
      { h2: "Dispatch and follow-up" }, P("Send the customer the technician’s name and arrival window. After the visit, send a short summary with what was done and when the next service is due."),
      { h2: "What it costs" }, P("An AC company website with booking and WhatsApp starts from AED 7,900 in 2–4 weeks. Local SEO starts at AED 4,900 for setup and AED 3,500 a month. Prices exclude 5% VAT."),
    ],
    faq: [
      { q: "Do I need an app?", a: "Usually not. A fast mobile website with booking and WhatsApp covers most AC companies." },
      { q: "Can customers pay online?", a: "Yes. Deposits and payment links work through card and Apple Pay." },
    ],
  },

  "salon-no-shows-deposits": {
    keywords: ["reduce no shows salon", "salon deposit policy", "salon booking app dubai"],
    opening: "At 2:58 p.m. a client messages, “So sorry, can’t make 3.” Your colourist was ready, the chair is empty and the afternoon slot is gone.",
    answer: "Stop salon no-shows with four things: a deposit for longer or higher-value services, WhatsApp reminders, a waitlist to refill cancelled slots and a cancellation policy clients accept. A booking app that does all four starts from AED 7,900.",
    links: [{ href: "/industries/salons/booking-app", label: "Salon booking app" }, { href: "/industries/salons", label: "Salons in the UAE" }, { href: "/guides/fresha-vs-own-salon-app", label: "Fresha vs your own app" }, { href: "/services/payment-integration", label: "Payments" }],
    body: [
      { h2: "How much deposit?" }, P("There is no single right number. Match the deposit to the cost of an empty chair."),
      { table: { head: ["Service", "Suggested approach"], rows: [["Blow-dry, quick services", "No deposit, reminder only"], ["Colour, keratin, bridal trial", "A fixed deposit that covers your direct loss"], ["Long appointments or groups", "Deposit per person, due at booking"], ["New clients", "Consider a small deposit until they have visited once"]] } },
      P("Take it as a card or Apple Pay payment at booking and take it off the final bill, so clients feel they are paying for their own visit."),
      { h2: "Reminders on WhatsApp" }, { ul: ["Confirmation the moment they book", "A reminder the day before with a one-tap confirm", "A second reminder a few hours before for long services", "A reschedule button, so changing the time is easier than not turning up"] },
      C("WhatsApp message fees and template rules are set by Meta and your provider, and change. Last checked " + CHECKED + ". Confirm costs before you plan a reminder volume."),
      { h2: "A waitlist that refills slots" }, P("When someone cancels, the system messages waitlisted clients for that day. The first to tap Yes gets the slot. A cancelled hour becomes a booked hour instead of a loss."),
      { h2: "A policy clients accept" }, { ul: ["State it before they pay, in one short paragraph", "Free changes up to a clear cut-off, such as 24 hours before", "Deposits are kept after the cut-off, and credited when rebooked within a set period", "Keep a rule for emergencies, and use it with kindness"] },
      { h2: "Handling regulars" }, P("Do not charge your best clients the same way as strangers. Waive the deposit for clients with a good visit history, and only apply it to those with repeated no-shows."),
      { h2: "Tools" }, P("Marketplaces such as Fresha offer reminders and deposits. Your own booking app does too, with the client list and brand in your hands. Our salon booking package starts from AED 7,900 for deposits, WhatsApp reminders and a waitlist, with the full app from AED 49,000. Prices exclude 5% VAT."),
    ],
    faq: [
      { q: "Will deposits scare clients away?", a: "Some, mostly those who would not have turned up. Start with deposits on the services where a no-show hurts most." },
      { q: "Can I refund deposits easily?", a: "Yes. Refunds and credits are made from your booking dashboard and logged." },
      { q: "Do I need Fresha and my own app?", a: "Many salons keep Fresha for discovery and run their own for regulars. See our comparison." },
    ],
  },

  "seo-cost-dubai": {
    keywords: ["seo cost dubai", "seo packages dubai", "local seo price uae"],
    opening: "One agency offers SEO at AED 999 a month. Another quotes AED 15,000 for what looks like the same list. You need to know which one is fair.",
    answer: "Local SEO in Dubai usually costs from a few thousand dirhams a month, and the price depends on competition, languages and branches. Ours is AED 4,900 setup, then AED 3,500 a month in English or AED 6,500 bilingual, with multi-branch from AED 11,000. No lock-in.",
    links: [{ href: "/services/seo", label: "Local SEO" }, { href: "/pricing", label: "Pricing" }, { href: "/guides/arabic-seo-guide", label: "Arabic SEO in the UAE" }, { href: "/guides/not-showing-on-google-maps-dubai", label: "Not showing on Google Maps" }],
    body: [
      { h2: "What drives SEO prices" }, { ul: ["Competition for your search terms: AC repair differs from a niche B2B service", "Languages: English only or English and Arabic", "Number of locations and Google profiles", "How many pages need writing or fixing", "Technical problems on your current website", "How fast you need results"] },
      { h2: "Price ranges" }, C("Market prices for SEO in Dubai vary widely and are rarely published. Cheap packages often cover only listings and reports. Last checked " + CHECKED + ". Ask every agency for a written scope and compare what is actually delivered."),
      { table: { head: ["Our plan", "Price (AED)", "Includes"], rows: [["Setup", "4,900 once", "Audit, Google profile, key pages, tracking"], ["Monthly, English", "3,500 a month", "Content, local listings, reviews, reporting"], ["Monthly, bilingual", "6,500 a month", "Everything in English, plus Arabic content and pages"], ["Multi-branch", "From 11,000 a month", "Several locations and profiles"]] } },
      P("All prices exclude 5% VAT."),
      { h2: "What you should get each month" }, { ul: ["A written plan of pages and posts for the month", "Fixes to your Google Business Profile and listings", "Review requests and replies", "A short report on calls, direction requests and form leads, not just rankings", "A call or message when something needs your decision"] },
      { h2: "Arabic SEO" }, P("Arabic searches behave differently from English searches. Arabic content has to be written for readers, not machine-translated. That is why bilingual plans cost more, and why it can bring customers your competitors miss."),
      { h2: "Contracts to avoid" }, P("Be careful with 6- to 12-month lock-ins and “guaranteed first page” promises. Nobody outside Google can guarantee a ranking. Ours is monthly with 30 days’ notice."),
      { h2: "Red flags" }, { ul: ["No access to your own Google and website accounts", "Reports full of rankings for names nobody searches", "Unexplained link-buying", "A single price for any business, with no audit first"] },
      { h2: "How long it takes" }, P("Google profile and listing fixes can show results within weeks. Content and competitive searches take months. Judge us on calls and bookings after a quarter."),
    ],
    faq: [
      { q: "Is cheap SEO worth it?", a: "Sometimes for listings and basics. Check what is delivered each month before you compare prices." },
      { q: "Do I own the work?", a: "Yes. Your accounts, content and pages are yours from the first payment." },
    ],
  },

  "is-my-ai-built-app-safe": {
    keywords: ["is my ai built app secure", "lovable app security", "ai generated app security check"],
    opening: "A stranger emails you: “Hi, I can see your customers’ names and phone numbers. You may want to fix that.” Your app was built in a weekend with Lovable.",
    answer: "Do not assume an AI-built app is safe: the checks below take about an hour and catch the most common problems, such as open data, exposed keys and unverified payments. Our audit is free within 48 hours, and a typical rescue costs AED 9,000–27,000.",
    links: [{ href: "/services/vibe-code-rescue", label: "Fix my AI-built app" }, { href: "/guides/lovable-app-to-production", label: "Lovable app to production" }, { href: "/guides/saas-mvp-cost-uae", label: "SaaS MVP cost" }, { href: "/services/web-app-development", label: "Web apps" }],
    body: [
      { h2: "The 12 checks" }, P("You do not need to be a developer for most of these. Use a test account, never real customer data, and do not try to break anything that is not yours."),
      { h2: "1–4: Who can see what" }, { ol: ["Open the app in a private window, signed out. Can you reach any internal page?", "Create two test users. Can user A see user B’s data by changing the URL?", "Look for an admin page. Is it protected by a login and a role check?", "Ask the builder or your developer whether your database has row-level rules turned on. Supabase calls this row-level security."] },
      { h2: "5–8: Keys and secrets" }, { ol: ["Search your public code for words like secret, service key or sk_. Private keys must never be in the browser.", "Check that your repository is private and no key sits in its history.", "Confirm you can rotate each key if you must.", "Check who has access to your hosting, database and payment accounts."] },
      { h2: "9–10: Payments" }, { ol: ["Does a payment confirm only after the payment provider tells your server it succeeded, not because the browser says so?", "What happens if a customer pays twice, refunds or the payment fails halfway?"] },
      { h2: "11–12: Survival" }, { ol: ["Do you have automatic backups, and have you restored one at least once?", "Can the app handle your expected number of users on launch day?"] },
      { h2: "What to fix first" }, { table: { head: ["Priority", "Problem", "Why"], rows: [["1", "Open data or missing user rules", "Customer data is exposed now"], ["2", "Keys in the browser or code", "Anyone can use your accounts"], ["3", "Unverified payments", "You can lose money or ship unpaid orders"], ["4", "No backups", "One mistake can lose everything"], ["5", "Speed and load", "Annoying, but rarely a breach"]] } },
      C("Security needs vary by what data you hold. If you store personal data, check your obligations under UAE data protection rules. Last checked " + CHECKED + ". Confirm with the official UAE authorities or a qualified adviser before relying on this list."),
      { h2: "Getting help" }, P("We audit AI-built apps free within 48 hours and tell you what is safe, what is not and what it will cost. Rescue and launch starts at AED 2,900, with most rescues between AED 9,000 and AED 27,000. You can keep using Lovable or Bolt afterwards. Prices exclude 5% VAT."),
    ],
    faq: [
      { q: "Is Lovable itself unsafe?", a: "No. The risk comes from default settings and unreviewed generated code. Any app needs these checks." },
      { q: "Should I take the app down?", a: "If you find customer data open to strangers, restrict access first, then fix the rules." },
      { q: "Can you do this without my login details?", a: "We ask for read access to the code and a test account, never your customers’ data." },
    ],
  },

  "peppol-pint-ae-explained": {
    keywords: ["peppol uae", "pint ae", "uae e-invoicing format"],
    opening: "Your finance manager has heard “PEPPOL”, “PINT AE” and “five-corner model” in three meetings, and has to explain them to the owner by Thursday.",
    answer: "PEPPOL is an international network and set of rules for exchanging electronic invoices. PINT AE is the UAE’s invoice data specification built on it. Your system must produce invoice data in that structure and pass it to an Accredited Service Provider, which handles delivery. Check the current specification before you build.",
    links: [{ href: "/guides/uae-e-invoicing", label: "UAE e-invoicing explained" }, { href: "/guides/uae-e-invoicing-asp-how-to-choose", label: "How to choose an ASP" }, { href: "/guides/e-invoicing-custom-erp", label: "E-invoicing for custom software" }, { href: "/services/e-invoicing-integration", label: "E-invoicing integration" }],
    body: [
      { h2: "What PEPPOL is" }, P("PEPPOL is a set of shared standards for sending business documents electronically between companies and governments in different countries. Think of it as an agreed envelope, address book and language, so any two connected systems can exchange an invoice."),
      { h2: "What PINT AE is" }, P("A PEPPOL international invoice format is adapted for each country. PINT AE is the version for the UAE: it defines which fields an invoice must contain, such as seller and buyer TRNs, tax categories and totals, and how they are structured."),
      C("The UAE specification, field list and validation rules are published by the authorities and updated. Last checked " + CHECKED + ". Confirm with the Ministry of Finance and Federal Tax Authority documentation before building to it."),
      { h2: "The five-corner model" }, P("In simple terms, the UAE model has more parties than your invoice sender and buyer. You send to your Accredited Service Provider, which passes the invoice through the network to the buyer’s provider, and tax data is reported to the authority."),
      { ol: ["You, the seller, create the invoice in your system", "Your Accredited Service Provider validates it and sends it on", "The buyer’s provider receives it", "The buyer receives the invoice in their system", "The tax authority receives the required data"] },
      C("The exact flow and parties may change as the rules are finalised. Last checked " + CHECKED + ". Confirm with the official UAE e-invoicing documentation."),
      { h2: "What your system must output" }, { ul: ["Complete seller and buyer details, including TRNs for B2B", "Line items with quantities, units, prices and tax categories", "Totals that add up exactly, including discounts", "Unique invoice numbers and issue dates", "Credit notes that refer back to the original invoice"] },
      { h2: "Common validation errors" }, { ul: ["Missing or malformed TRN", "Totals that differ by a rounding fraction", "A tax category that does not match the item", "A credit note without a reference to the invoice", "Blank mandatory fields from old customer records"] },
      { h2: "What a finance manager should do" }, { ol: ["List every system that creates invoices", "Ask your software vendor and shortlisted providers for their PINT AE support in writing", "Clean your customer data", "Run test invoices, including credit notes", "Set a go-live date before the deadline that applies to you"] },
      P("We connect your system to the provider you choose. We are an integration partner, not an Accredited Service Provider. Readiness and set-up for Zoho, Odoo or QuickBooks is from AED 9,900."),
    ],
    faq: [
      { q: "Do I have to understand PEPPOL myself?", a: "Not in depth. Your provider and integration handle the format. You need clean data and tested invoices." },
      { q: "Is PINT AE the same as PEPPOL?", a: "No. PEPPOL is the network and standards; PINT AE is the UAE’s version of the invoice format." },
    ],
  },
};
