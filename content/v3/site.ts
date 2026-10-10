/** Site-wide copy: about, process, pricing, FAQs, contact, tech, differentiators. All prices AED, exclude 5% VAT. */
export type Pair = { t: string; p: string };
export type QA = { q: string; a: string };
export type TeamNote = { role: string; note: string };
export type ProcessStep = { n: string; wk: string; t: string; p: string; you: string };
export type PricingRow = { service: string; from: string; time: string; typical: string; href: string };
export type PricingGroup = { group: string; rows: PricingRow[] };
export type ContactChannel = { label: string; value: string; note: string };

export const ABOUT: { story: string[]; principles: Pair[]; team: TeamNote[] } = {
  story: [
    "We are a small, senior studio in Dubai that builds online stores, websites and the software behind them. The people who scope your project are the people who build it, so nothing is lost between a sales conversation and the code. Founded [owner to confirm: founding year]. Team size [owner to confirm: number and roles]. Trade licence [owner to confirm: licence number and issuing authority].",
    "Our commerce work covers Shopify and Shopify Plus, custom themes, WordPress and WooCommerce, with Arabic and English from the start and local payments such as Tabby, Tamara and Apple Pay. Our software work covers an ERP for UAE businesses, WhatsApp auto-reply, AI assistants and automation that replaces repeated manual work, usually Excel.",
    "We publish our prices, our process and our reasoning, including when we would tell you not to buy something. The six builds on our work page are concept builds we designed to show how we think; they are labelled that way because they are not client projects. Real client work will replace them as it is approved for publication [owner to confirm].",
  ],
  principles: [
    { t: "Senior people on the work", p: "You talk to the people who design and build. We take fewer projects so that this stays true." },
    { t: "Say the price early", p: "Prices start from a published figure in AED, and a fixed quote follows the discovery call. No surprises after the contract." },
    { t: "Fewer parts, each with a reason", p: "We prefer native platform features to apps and plugins, because every addition has a cost in speed, security and upkeep." },
    { t: "You own what you pay for", p: "Store, domain, code repository and accounts are in your name. Leaving us should be possible without a hostage negotiation." },
    { t: "Honest about limits", p: "Nobody can guarantee a search ranking or a sales figure. We promise a clean build, a clear process and straight answers." },
  ],
  team: [
    { role: "Founder and lead", note: "[owner to confirm: name, background, photo, and whether to name them publicly]" },
    { role: "Lead developer", note: "[owner to confirm: name or role description, platforms covered]" },
    { role: "Designer", note: "[owner to confirm: name or role description, in-house or contract]" },
    { role: "Project manager", note: "[owner to confirm: whether this is a separate role or the founder]" },
    { role: "Arabic content and QA", note: "[owner to confirm: in-house, or a named external reviewer]" },
  ],
};

export const PROCESS: ProcessStep[] = [
  { n: "01", wk: "Day 0", t: "Discovery call", p: "A 30 to 45 minute conversation about the business, the current site or process, what is not working and what a good result looks like. We say early if we are not the right fit.", you: "Your goals, current links or screenshots, and the decision maker on the call." },
  { n: "02", wk: "Days 1 to 3", t: "Scope and fixed quote", p: "We write down what is in and out, the platform recommendation with reasons, the timeline and a fixed price in AED excluding 5% VAT.", you: "Answers to our follow-up questions and a yes, a no, or changes." },
  { n: "03", wk: "Day 3 to 5", t: "Contract and deposit", p: "A short agreement covering scope, ownership, payment terms and change handling. Under AED 20,000 is paid 50% at start and 50% at launch; above that, 30%, 40% and 30%.", you: "Signed agreement, deposit, and the company details for invoicing." },
  { n: "04", wk: "Week 1", t: "Kickoff and access", p: "We set up a shared channel, a project plan with dates, and staging. We agree who approves what, and how fast.", you: "Brand assets, platform and domain access, product data, and one named approver." },
  { n: "05", wk: "Weeks 1 to 3", t: "Structure and design", p: "Site structure, key page designs for desktop and mobile, and Arabic layouts where needed. You see real designs, not a mood board.", you: "Feedback within the agreed window, consolidated into one list if possible." },
  { n: "06", wk: "Weeks 3 to 8", t: "Build", p: "Development on a staging site you can open at any time, with regular reviews. Integrations such as payments, shipping, WhatsApp or ERP data are built and tested here.", you: "Content and product data, payment and courier accounts, and timely answers to questions." },
  { n: "07", wk: "Final 1 to 2 weeks", t: "Content, QA and training", p: "Content load, device and browser testing, order tests with real payment methods, accessibility checks, redirect checks, and a short training session for your team.", you: "Final content approval and test orders from your side." },
  { n: "08", wk: "Launch", t: "Go-live", p: "A launch plan with a rollback option, DNS and redirect changes at a quiet hour, and monitoring in the first days. Final payment is due at launch.", you: "Sign-off, final payment, and availability on launch day." },
  { n: "09", wk: "After launch", t: "Care plan", p: "Updates, security, backups, small changes and fixes under a monthly plan from AED 790. A review after the first month shows what to improve next.", you: "Choose a plan, or take the handover documents and run it yourself." },
];

export const PRICING_ROWS: PricingGroup[] = [
  { group: "Online stores", rows: [
    { service: "Shopify launch store", from: "AED 9,900", time: "3 to 4 weeks", typical: "A new brand or a store moving from marketplaces, using a strong base theme.", href: "/shopify-agency-dubai" },
    { service: "Custom Shopify theme", from: "AED 29,000", time: "6 to 8 weeks", typical: "A brand where design and speed are part of the product.", href: "/custom-shopify-theme-development-dubai" },
    { service: "Shopify Plus, headless or custom apps", from: "AED 69,000+", time: "10 to 16 weeks", typical: "Larger catalogues, several markets, custom checkout rules or integrations.", href: "/shopify-plus-agency-dubai" },
    { service: "Store migration to Shopify", from: "Quoted after audit", time: "Depends on catalogue", typical: "An existing store moving platform; scoped from a URL and data audit.", href: "/shopify-migration-dubai" },
    { service: "Luxury e-commerce design", from: "AED 29,000", time: "6 to 8 weeks", typical: "Priced as a custom theme; larger scope is quoted as Shopify Plus.", href: "/luxury-ecommerce-website-design-dubai" },
    { service: "E-commerce website development", from: "AED 9,900", time: "3 to 16 weeks", typical: "Platform chosen after discovery; priced by the matching platform tier.", href: "/ecommerce-website-development-dubai" },
  ] },
  { group: "Websites", rows: [
    { service: "WordPress business site", from: "AED 7,900", time: "2 to 4 weeks", typical: "A company site with services, contact and a blog.", href: "/wordpress-agency-dubai" },
    { service: "Custom WordPress site", from: "AED 19,900", time: "4 to 8 weeks", typical: "A bespoke design and custom blocks, often bilingual.", href: "/custom-wordpress-theme-development-dubai" },
    { service: "WordPress with WooCommerce or bookings", from: "AED 44,000", time: "8 to 12 weeks", typical: "A shop or booking system on WordPress.", href: "/woocommerce-development-dubai" },
    { service: "Website design", from: "AED 7,900", time: "2 to 8 weeks", typical: "Priced by the WordPress tier that fits.", href: "/website-design-dubai" },
  ] },
  { group: "Automation software", rows: [
    { service: "WhatsApp assistant", from: "AED 2,900", time: "1 to 2 weeks", typical: "Auto-replies, business hours and hand-off to a person.", href: "/whatsapp-automation-dubai" },
    { service: "AI assistant that takes actions", from: "AED 29,000", time: "6 to 10 weeks", typical: "Answers from your data and completes tasks such as quotes or bookings.", href: "/ai-assistant-for-business-dubai" },
    { service: "Back-office AI agents", from: "AED 59,000", time: "8 to 12 weeks", typical: "Agents handling document, data and follow-up work behind the scenes.", href: "/ai-assistant-for-business-dubai" },
    { service: "Business automation, up to 10 automations", from: "AED 7,900", time: "2 to 4 weeks", typical: "Connecting the tools you already use and removing repeat entry.", href: "/business-automation-dubai" },
    { service: "Operations system", from: "AED 59,000", time: "10 to 14 weeks", typical: "Orders, stock and invoices for one business, replacing spreadsheets.", href: "/erp-software-dubai" },
    { service: "Multi-branch ERP", from: "AED 150,000+", time: "Phased, quoted", typical: "Several branches or companies with consolidated reporting.", href: "/erp-software-dubai" },
  ] },
];

export const PRICING_FAQ: QA[] = [
  { q: "Do your prices include VAT?", a: "No. All prices are in AED and exclude 5% VAT, which is added on the invoice." },
  { q: "Is the price fixed?", a: "The figures are starting points. After the discovery call we give a fixed quote for the agreed scope. If you later add scope, we quote the change before starting it." },
  { q: "How do payments work?", a: "Projects under AED 20,000 are paid 50% at start and 50% at launch. Larger projects are paid 30% at start, 40% at a mid-project milestone and 30% at launch." },
  { q: "What is not included?", a: "Third-party costs such as Shopify or Shopify Plus subscription fees, premium apps, hosting for WordPress, domains, photography and payment provider fees are paid by you directly to the provider. Platform pricing changes, so confirm it with the vendor." },
  { q: "What does a care plan cost?", a: "Care plans start from AED 790 a month and cover updates, backups, monitoring and a set amount of change work. Local SEO starts from AED 3,500 a month and is a separate service." },
  { q: "Why is a payment integration priced separately?", a: "Connecting a payment method such as Tabby, Tamara or a local gateway depends on the provider's account, approval and testing. It starts from AED 2,900 on top of the platform build." },
];

export const GENERAL_FAQ: QA[] = [
  { q: "How do you work with us?", a: "We follow nine steps from a discovery call to a care plan. You get a fixed quote, a staging site you can open at any time, and regular reviews. The process page lists what we do and what we need from you at each step." },
  { q: "Who owns the website, code and accounts?", a: "You do. The store, domain, hosting accounts and code repository are set up in your name, or transferred to it at handover. We keep access only while we support you." },
  { q: "Do you host the website?", a: "Shopify includes hosting in its subscription. For WordPress we recommend a managed host and set it up in your account. We can manage it under a care plan. You pay hosting directly to the provider." },
  { q: "What support do you offer after launch?", a: "Every build includes a short bug-fix period after launch [owner to confirm: length]. After that, a care plan from AED 790 a month covers updates, security, backups and small changes." },
  { q: "Do you build in Arabic?", a: "Yes. Arabic is designed as a full right-to-left layout, with its own typography and copy review, not a mirrored English page. We recommend a native reader reviews the final text." },
  { q: "How long does a project take?", a: "A Shopify launch store takes 3 to 4 weeks, a custom theme 6 to 8, and Plus or headless builds 10 to 16. A WordPress business site takes 2 to 4. Speed depends mostly on how quickly content and approvals arrive." },
  { q: "What are your payment terms?", a: "Under AED 20,000: 50% at start and 50% at launch. Above that: 30% at start, 40% at a milestone and 30% at launch. Prices exclude 5% VAT." },
  { q: "Can you work with our existing team or agency?", a: "Yes. We can build with your in-house developers or marketers, take over a theme, or hand over to your team with documentation." },
  { q: "Do you guarantee search rankings or sales?", a: "No, and be wary of anyone who does. We build sites that are fast, crawlable and well structured, which makes ranking possible. Results depend on content, competition and promotion over time." },
  { q: "Will you tell us if we do not need what we asked for?", a: "Yes. If a premium theme, WordPress or a spreadsheet fix is the better choice, we say so, even if the project is smaller." },
];

export const HOME_FAQ: QA[] = [
  { q: "Which platform should we use: Shopify, WordPress or something custom?", a: "Shopify suits most stores that want to sell reliably with little maintenance. WordPress suits content-led company sites. Custom or headless makes sense when a standard platform genuinely blocks the experience. We recommend one after a discovery call." },
  { q: "How much does a website or store cost in Dubai?", a: "Our prices start from AED 7,900 for a WordPress business site and AED 9,900 for a Shopify launch store. Custom Shopify themes start from AED 29,000 and Shopify Plus or headless builds from AED 69,000, excluding 5% VAT." },
  { q: "How long does it take?", a: "A WordPress business site takes 2 to 4 weeks, a Shopify launch store 3 to 4, a custom theme 6 to 8, and Plus or headless 10 to 16 weeks." },
  { q: "Can you migrate our existing store to Shopify?", a: "Yes. We move products, customers and orders, and build a redirect map so existing URLs keep working. Migration scope is quoted after we audit the current site." },
  { q: "Can the store be in Arabic and English?", a: "Yes. We build right-to-left Arabic layouts with proper typography, and configure bilingual storefronts, currencies and local payment methods." },
  { q: "Do you support Tabby, Tamara and Apple Pay?", a: "We integrate them where the platform and your provider account allow. Provider approval and fees are between you and them. Payment integration starts from AED 2,900." },
  { q: "What happens after launch?", a: "You get a handover, a short bug-fix period and the option of a care plan from AED 790 a month for updates, backups and changes." },
  { q: "Do you also build software, not just websites?", a: "Yes. We build WhatsApp auto-reply, AI assistants, business automation and an ERP that replaces Excel, which can connect to your store." },
];

export const CONTACT: { hours: string; channels: ContactChannel[]; steps: string[] } = {
  hours: "Sunday to Thursday, [owner to confirm: opening hours] Gulf Standard Time. We reply to every enquiry within one working day [owner to confirm].",
  channels: [
    { label: "Email", value: "[owner to confirm: email address]", note: "Best for briefs, files and links." },
    { label: "WhatsApp", value: "[owner to confirm: number]", note: "Best for quick questions and arranging a call." },
    { label: "Phone", value: "[owner to confirm: number]", note: "During working hours." },
    { label: "Office", value: "[owner to confirm: address or service-area wording]", note: "Meetings by appointment, in Dubai or online." },
  ],
  steps: [
    "Send a short brief: what you sell or need, your current site, and a rough timeline.",
    "We reply within one working day with questions or a time for a discovery call.",
    "After the call you receive a scope and fixed quote in AED, usually within three working days.",
  ],
};

export const TECH: string[] = [
  "Shopify", "Shopify Plus", "Liquid", "Shopify Storefront API", "Shopify CLI", "WordPress", "WooCommerce", "PHP", "Advanced Custom Fields",
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "GraphQL", "WhatsApp Business Platform", "Anthropic Claude API", "Tabby and Tamara", "Google Search Console", "Playwright", "GitHub", "Figma",
];

export const WHY: Pair[] = [
  { t: "Senior people do the work", p: "The person who scopes the project also builds it. There is no hand-off from a salesperson to a junior team." },
  { t: "Published prices", p: "Starting prices are on the pricing page, and a fixed quote follows discovery. You can budget before you call us." },
  { t: "Commerce and automation under one roof", p: "Store, WhatsApp, AI assistant and ERP are built by one team, so data flows between them without a second vendor." },
  { t: "Arabic from the first design", p: "Right-to-left layouts, Arabic typography and local payment methods are part of the design phase, not an add-on at the end." },
  { t: "You own everything", p: "Accounts, code and domain are in your name, with documentation at handover." },
  { t: "Fewer apps and plugins", p: "We use native platform features first and justify every addition, which keeps stores faster and cheaper to maintain." },
];
