import type { Guide } from "./guides";
const CHECKED = "October 2026";

const C = (t: string) => ({ check: t });
const P = (t: string) => ({ p: t });

/** Full text for guides #4–#6 and #8–#11 (docs/seo-uae/09-blog-calendar.md outlines). Facts marked with a check box must be re-verified on publish day. */
export const MORE: Record<string, Partial<Guide>> = {
  "shopify-store-cost-uae": {
    opening: "Shopify says “from $39 a month”. Your first real month cost you AED 2,600. Here’s where it went.",
    answer: "A UAE Shopify store has four costs: the Shopify plan (about AED 145–1,465 a month), the theme (free to AED 1,100 one-off, or custom), apps (AED 0–600 a month) and setup (DIY, freelancer or agency). Most small stores spend AED 9,900–29,000 to launch with an agency.",
    links: [{ href: "/services/shopify-development", label: "Shopify development" }, { href: "/pricing", label: "Pricing" }],
    body: [
      { h2: "The four costs" }, P("Plan, theme, apps and setup. People budget for the plan and forget the other three, which is why the first month feels like three times the headline price."),
      { h2: "Shopify plan prices in AED" }, C("Shopify bills in US dollars and changes plans and prices. The AED figures here convert at 3.67 and were last checked " + CHECKED + ". Confirm on shopify.com."),
      { table: { head: ["Plan", "Roughly (AED / month)", "Best for"], rows: [["Basic", "145", "New stores"], ["Shopify", "400", "Growing stores"], ["Advanced", "1,465", "Higher volume, advanced reporting"], ["Plus", "8,450", "Brands with wholesale and automation"]] } },
      { h2: "Payment fees in the UAE" }, P("Fees depend on how customers pay: a gateway such as Stripe or Telr (about 2.5–2.9% plus a small fixed fee), Apple Pay through the same gateway, and Tabby or Tamara (agreed with each provider, usually higher than cards)."), C("Shopify Payments availability in the UAE and BNPL merchant fees change. Ask each provider for a current quote before you price your products."),
      { h2: "Theme: free, premium or custom" }, { ul: ["Free theme: AED 0, fine to start, many stores look alike.", "Premium theme: roughly AED 350–1,100 one-off, configured properly.", "Custom theme: AED 29,000+ for a design built around your products, with fewer apps needed."] },
      { h2: "Apps: what you need and what you don’t" }, P("Most stores we rebuild go from 15–25 apps to 5–9. Bundles, size charts and upsells can be built into the theme. That alone often saves a few hundred dirhams a month and loads faster on phones."),
      { h2: "DIY, freelancer or agency" }, { table: { head: ["Route", "Typical cost (AED)", "Watch out for"], rows: [["DIY", "0 + your time", "Arabic RTL, VAT and shipping set-up take longer than expected"], ["Freelancer", "3,000–12,000", "Availability, no team behind them"], ["Agency", "9,900–69,000", "Hidden extras, so ask for a fixed price"]] } },
      { h2: "Shipping and cash on delivery" }, P("Carrier rates, COD fees and returns matter as much as the theme. Set shipping zones for all seven emirates and decide whether COD is worth its failed-delivery rate."),
      { h2: "Our packages" }, P("Launch store AED 9,900 (3–4 weeks), custom theme AED 29,000 (6–8 weeks), Plus, headless or custom apps AED 69,000. Prices exclude 5% VAT."),
    ],
    faq: [{ q: "Can I run Shopify in AED?", a: "Yes. Set AED as the store currency; Shopify itself bills your plan in USD." }, { q: "Do I need a licence?", a: "Yes, a licence that covers e-commerce. See our guide on selling online in the UAE." }],
  },
  "start-shopify-store-uae": {
    opening: "You have the products and an Instagram following. Now you want a real store that takes Tabby and delivers to Abu Dhabi tomorrow.",
    answer: "To open a Shopify store in the UAE: get a licence that covers e-commerce, create the store in AED with VAT set up, connect a gateway plus Apple Pay, Tabby and Tamara, set delivery zones, build an Arabic and English storefront and test a real order. An agency takes 3–4 weeks; DIY usually takes longer.",
    links: [{ href: "/services/shopify-development", label: "Shopify development" }, { href: "/services/payment-integration", label: "Payments" }, { href: "/guides/shopify-store-cost-uae", label: "What a store costs" }],
    body: [
      { h2: "1. Do you need a trade licence?" }, C("You need a licence covering e-commerce: an e-Trader licence for home-based sellers, or a free-zone or mainland trade licence. Rules and fees change; check the issuing authority."), 
      { h2: "2. Set up Shopify for AED and VAT" }, P("Set the store currency to AED, enter your TRN if you’re VAT-registered, and decide whether prices show VAT included (UAE consumers expect it) or added at checkout."),
      { h2: "3. Payments" }, P("Cards and Apple Pay through a gateway (Stripe or Telr), Tabby and Tamara for pay-in-4 and cash on delivery where it still matters."), C("Gateway and BNPL onboarding often asks for your licence, bank letter and website. Requirements differ by provider."),
      { h2: "4. Delivery" }, P("Pick a carrier and set rates for each emirate. Same-day Dubai delivery and next-day elsewhere is a common promise. Add free delivery over a threshold you can afford."),
      { h2: "5. Arabic and English" }, P("A mirrored right-to-left layout, Arabic product copy written by a person and a language switch that keeps the cart. See our Arabic Shopify guide when published."),
      { h2: "6. Product pages that sell" }, { ul: ["Photos from three angles and one in use", "Size or scent guidance", "A delivery promise next to the Add to cart button", "Tabby/Tamara instalment price", "Returns policy in plain words"] },
      { h2: "7. Launch checklist" }, { ol: ["Test a real order with each payment method", "Check VAT on invoices", "Check Arabic on a phone", "Install analytics and the Meta pixel with consent", "Set up redirects if you’re moving from another store", "Place an order from another emirate"] },
      { h2: "8. When to hire help" }, P("If you’re moving from WooCommerce or Salla, selling more than 100 products, or need custom subscriptions or bundles, a fixed-price agency build costs less than the sales you lose while you learn."),
    ],
  },
  "app-development-cost-dubai": {
    opening: "“Customers keep asking if we have an app.” You Google the price and see AED 25,000 and AED 1,000,000 on the same page.",
    answer: "A simple business app in Dubai costs about AED 35,000–90,000; apps with payments, tracking and an admin AED 90,000–180,000; platforms like Talabat far more. Yearly upkeep is 15–20% of the build.",
    links: [{ href: "/services/mobile-app-development", label: "Mobile apps" }, { href: "/tools/app-cost-calculator", label: "App cost calculator" }, { href: "/pricing", label: "Pricing" }],
    body: [
      { h2: "Price by type of app" }, { table: { head: ["App type", "Typical build (AED)", "Time"], rows: [["Booking", "35,000–70,000", "6–10 weeks"], ["Ordering", "45,000–90,000", "8–12 weeks"], ["Delivery with tracking", "60,000–140,000", "10–16 weeks"], ["Loyalty", "35,000–60,000", "6–10 weeks"], ["Marketplace", "105,000–300,000+", "14–24 weeks"]] } },
      C("Market ranges come from published 2026 agency guides. Our own tiers: MVP AED 35,000, business app AED 49,000, custom platform AED 105,000."),
      { h2: "What drives the price" }, { ul: ["Number of screens and user roles", "Payments, Apple Pay and Tabby", "Live tracking and maps", "Arabic and right-to-left layouts", "Admin dashboard and integrations (Zoho, Foodics)", "Custom animation and design"] },
      { h2: "Freelancer vs boutique vs big agency" }, { table: { head: ["", "Freelancer", "Boutique", "Large agency"], rows: [["Business app", "AED 8,500–45,000", "AED 45,000–90,000", "AED 70,000–120,000+"], ["Team", "One person", "Designer, developers, QA", "Large team, account managers"], ["Risk", "Availability", "Low", "Cost and pace"]] } },
      { h2: "iPhone and Android: one app or two?" }, P("With Flutter you build once and publish to both stores, which usually saves 30–40% over two native apps."),
      { h2: "Running costs" }, { ul: ["Apple developer account: about AED 365 a year", "Google Play: a one-off fee", "Hosting: AED 75–550 a month", "WhatsApp and SMS messages: usage-based"] }, C("Store fees and hosting prices change; check current rates."),
      { h2: "Do you need an app at all?" }, P("If customers use your service once a year, a fast mobile website is enough. Apps pay off when people come back weekly: laundry, coffee, salons, groceries."),
    ],
    faq: [{ q: "Can I start smaller?", a: "Yes. A clickable prototype (about AED 24,000) lets you test with users before committing to a full build." }, { q: "Who owns the app?", a: "You do. The Apple and Google accounts and the code are in your name." }],
  },
  "whatsapp-ordering-for-restaurants": {
    opening: "Friday night: 40 WhatsApp messages, two typed orders went to the wrong table, and one customer paid twice.",
    answer: "You can take WhatsApp orders three ways: the free WhatsApp Business app with a catalogue (manual), the WhatsApp Business API with an ordering menu, or a link to your own ordering page. The last two send a paid ticket straight to your kitchen or Foodics.",
    links: [{ href: "/industries/restaurants/whatsapp-ordering", label: "WhatsApp ordering for restaurants" }, { href: "/guides/talabat-commission-math", label: "Talabat commission" }],
    body: [
      { h2: "Why UAE customers order on WhatsApp" }, P("Surveys report that about 85% of UAE residents prefer to contact businesses on WhatsApp. For a restaurant, that means regulars message you before they open an app."),
      { h2: "Option 1: WhatsApp Business app + catalogue" }, P("Free, quick to set up and fine under about 30 orders a day. It’s manual: staff read, type and confirm every order."),
      { h2: "Option 2: the WhatsApp Business API with an ordering menu" }, P("A menu appears in the chat, the customer builds a cart, and the order arrives as a structured ticket. It needs an approved provider, message templates and opt-in."),
      { h2: "Option 3: a link to your own ordering page" }, P("The simplest upgrade: send a link to a mobile page with your menu, Apple Pay and pickup slots. No WhatsApp API needed for this."),
      { h2: "Payments by link" }, P("Apple Pay and card links remove the “I’ll transfer later” problem. Pay first, then the ticket prints."),
      { h2: "Sending orders to the kitchen" }, P("Orders can print on a kitchen printer, appear on a screen or sync to Foodics so reports and stock stay right."),
      { h2: "Costs" }, C("WhatsApp charges per conversation or template message and the rate card changes. Check Meta’s current price list for the UAE."), P("Typical total: setup from AED 7,900, with running costs of AED 150–1,100 a month depending on volume."),
      { h2: "Rules to follow" }, { ul: ["Get opt-in before sending marketing messages", "Use approved templates for notifications", "Always offer a human handover", "Keep order confirmations factual"] },
    ],
  },
  "whatsapp-business-api-cost-uae": {
    opening: "The free WhatsApp Business app worked for 50 chats a day. At 400, your staff can’t keep up.",
    answer: "The WhatsApp Business API itself is free to access through a provider, but you pay Meta per conversation or message, a provider fee and the cost of any chatbot or inbox. Many UAE small businesses spend about AED 150–1,100 a month on messages and AI usage.",
    links: [{ href: "/services/ai-whatsapp-automation", label: "WhatsApp & AI" }, { href: "/guides/whatsapp-ordering-for-restaurants", label: "WhatsApp ordering" }],
    body: [
      { h2: "App vs API: the difference" }, P("The Business app is one phone with one or a few linked devices. The API connects WhatsApp to software, so many staff share an inbox and bots can answer."),
      { h2: "When the free app stops being enough" }, { ul: ["More than about 100 chats a day", "Several people need the same inbox", "You want a bot, order flow or CRM link", "You need message templates and reports"] },
      { h2: "How Meta charges" }, C("Meta prices messages by category (marketing, utility, authentication, service) and by country, and the model has changed more than once. Use Meta’s current UAE rate card for any estimate."),
      { h2: "Provider (BSP) fees" }, C("Providers such as 360dialog, Twilio, Infobip and Gupshup charge monthly or per message fees that vary. Ask for a written quote."),
      { h2: "Chatbot and inbox costs" }, P("A shared inbox is usually AED 100–550 a month. An AI assistant adds usage costs, typically AED 150–1,100 a month all-in for a small business."),
      { h2: "Examples" }, { table: { head: ["Business", "Chats a month", "Typical monthly cost (AED)"], rows: [["Small salon", "800", "150–350"], ["Restaurant", "3,000", "400–800"], ["Busy retailer", "10,000", "1,000+"]] } },
      { h2: "How to start" }, { ol: ["Verify your Meta business", "Choose a provider", "Register your number", "Write and approve templates", "Test with your team", "Go live with a person watching"] },
    ],
  },
  "best-payment-gateway-uae": {
    opening: "Your bank offered a gateway, a friend swears by Stripe, and a salesman pitched Telr. Which one leaves you more money?",
    answer: "There is no single best gateway. For online shops, apps and SaaS, Stripe is usually the easiest. Telr and similar local gateways can be cheaper at some volumes. Network International and Checkout.com suit larger volumes. Compare on your real monthly sales, not the headline rate.",
    links: [{ href: "/tools/payment-gateway-fee-calculator", label: "Gateway fee calculator" }, { href: "/services/payment-integration", label: "Payment integration" }],
    body: [
      { h2: "What to compare" }, { ul: ["Percentage and fixed fees", "International card surcharge", "Payout time", "Apple Pay and Google Pay", "Tabby and Tamara support", "Subscriptions and invoicing", "Onboarding time and documents"] },
      { h2: "Stripe, Telr, Network International, Checkout.com" }, C("Rates below are public figures from 2026 provider and comparison pages, last checked " + CHECKED + ". Confirm with each provider."),
      { table: { head: ["Gateway", "Typical online fee", "Notes"], rows: [["Stripe", "2.9% + AED 1 (+1% international cards)", "Easiest for online, apps, SaaS"], ["Telr", "2.49–2.69% + AED 0.50–1, plans from AED 99/mo", "Local gateway, plugin support"], ["Network International (N-Genius)", "Agreed with the bank", "Bank-grade, higher volume"], ["Checkout.com", "Custom quote", "Regional and high volume"]] } },
      { h2: "Worked example: AED 150,000 a month" }, P("At 500 payments and no international cards, Stripe costs about AED 4,850 a month and Telr about AED 4,084 on these rates, a difference of about AED 9,000 a year. Use the calculator for your own numbers."),
      { h2: "Which fits which business" }, { ul: ["Online shop: Stripe or Telr plus Tabby/Tamara", "App or SaaS: Stripe", "Restaurant: your POS’s gateway plus payment links", "Salon: deposits through Stripe or Telr"] },
      { h2: "How to switch without losing sales" }, P("Build and test the new gateway alongside the old one, then switch at a quiet time. Keep the old one active for refunds."),
    ],
  },
  "tabby-vs-tamara-merchants": {
    opening: "Customers leave your checkout and come back with “Do you have Tabby?”",
    answer: "Both Tabby and Tamara let customers pay in instalments while you receive the full amount upfront minus a merchant fee. Most UAE shops do best offering both, because customers have a favourite. Ask each for current fees and settlement times before you decide.",
    links: [{ href: "/services/payment-integration", label: "Payments" }, { href: "/services/shopify-development", label: "Shopify" }],
    body: [
      { h2: "How buy now, pay later works for the merchant" }, P("The customer chooses pay-in-4 (or longer). The provider pays you the order value, minus its fee, and collects the instalments. If the customer doesn’t pay, that is the provider’s risk."),
      { h2: "Merchant fees" }, C("Fees differ by provider, category and volume and aren’t always published. Ask both for a written quote."),
      { h2: "Reach in the UAE and KSA" }, P("Both are widely used in the Gulf. Tamara has strong reach in Saudi Arabia; Tabby is also common across the UAE. If you sell into KSA, check each provider’s current coverage."),
      { h2: "Plans" }, C("Instalment plans (pay in 4, longer terms) and eligibility change. Check each provider’s merchant page."),
      { h2: "Integration" }, { ul: ["Shopify: apps from each provider", "WooCommerce: plugins", "Custom sites and apps: APIs", "In-store: QR or terminal options where offered"] },
      { h2: "Effect on order value" }, P("Many merchants see larger baskets when instalments are shown on product pages. Test it on your own catalogue before drawing conclusions."),
      { h2: "Can you offer both?" }, P("Yes, and most should. Show both on the product page and at checkout, and see which converts."),
      { h2: "Our recommendation" }, P("Start with both. Drop the one that doesn’t earn its fees after a quarter of real orders."),
    ],
  },
};
