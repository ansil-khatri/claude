import type { Industry } from "../types";

export const industry: Industry = {
  slug: "restaurants-and-cafes",
  name: "Restaurants and cafes",
  keyword: "restaurant online ordering website uae",
  title: "Restaurant Online Ordering Website UAE | From AED 7,900",
  desc: "Own ordering website for UAE restaurants and cafes: an editable menu, WhatsApp orders, customer details you keep. Sites from AED 7,900, ordering AED 44,000.",
  kicker: "Restaurants and cafes · Ordering website",
  h1: ["A restaurant ordering website in the UAE", "that sends orders to you, not to an app."],
  sub: "Your own menu, your own ordering page and a WhatsApp number that does not get lost in the chat. Customers order from you, and you keep their details.",
  answer:
    "A restaurant ordering website in the UAE lets guests order straight from you, so you keep the customer details and avoid paying a delivery app on every order. A menu site with WhatsApp ordering starts at AED 10,800 in total. A full online ordering system starts at AED 44,000, excluding 5% VAT.",
  situation: [
    "Most of our orders come through the delivery apps, and they take a cut every time. I would like regulars to order from us directly, but I do not want to run a second system.",
    "Right now WhatsApp is chaos. Orders arrive as voice notes, someone forgets to reply, and the kitchen gets the wrong list. The menu on our website is a PDF from last year.",
    "I do not need a huge platform. I need a menu I can change in two minutes, a way to take orders and payment, and one place where the kitchen sees what to cook.",
  ],
  problems: [
    {
      t: "Delivery apps own your customer",
      p: "On a delivery app, the guest belongs to the app. You do not get a phone number to send a lunch offer to. Fees differ by app and by contract, so we do not quote a percentage here. Look at your own contract and add up last month's fees. Then compare that figure with running your own page for the guests who already know you.",
      visual: "store-mobile",
    },
    {
      t: "WhatsApp orders get lost",
      p: "Orders by voice note and photo of the menu are slow and easy to get wrong. We set up a WhatsApp number that answers at once, asks for the items, area and time, and passes a clean order to your team. A person takes over for special requests and complaints.",
      visual: "wa-inbox",
    },
    {
      t: "The menu is always out of date",
      p: "A PDF menu means sold-out dishes still get ordered and new prices are wrong. We build a menu you edit yourself: switch a dish off, change a price, add a lunch special. The site and the ordering page update together.",
      visual: "wp-editor",
    },
  ],
  build: [
    { t: "A menu site that loads fast on a phone", p: "Photos, categories, allergen notes, opening hours, a map and a big order button. Arabic and English if your guests use both." },
    { t: "Online ordering with payment", p: "Pickup and delivery, delivery zones by area, minimum order values and card payment. Built on WooCommerce for bigger setups, or Shopify for a simple order-ahead range." },
    { t: "WhatsApp ordering and replies", p: "Instant answer to the common questions, a guided order, and a hand-off to your staff. Meta and platform fees are extra and depend on your message volume (checked October 2026, confirm before you buy)." },
    { t: "Kitchen and stock view", p: "If you run several branches or a central kitchen, orders can feed an operations system with stock, purchasing and VAT invoices. This is the work shown in our concept build below." },
    { t: "Table and event booking", p: "Simple booking for tables, private rooms and catering enquiries, with a confirmation message the guest actually reads." },
  ],
  price: [
    { label: "Menu website", amt: "From AED 7,900", note: "WordPress business site, 2 to 4 weeks. Editable menu, maps, enquiry form." },
    { label: "WhatsApp ordering", amt: "From AED 2,900", note: "1 to 2 weeks, typical up to 12,000. Plus Meta and platform fees." },
    { label: "Full online ordering", amt: "From AED 44,000", note: "WooCommerce or bookings build, 8 to 12 weeks, typical up to 90,000. For zones, payments and several branches." },
  ],
  services: ["whatsapp-automation-dubai", "ecommerce-website-development-dubai", "erp-software-dubai"],
  case: "opsdesk-erp",
  posts: ["marketplace-vs-own-store-uae", "whatsapp-orders-without-excel", "whatsapp-auto-reply-for-business"],
  faq: [
    { q: "Do I have to leave the delivery apps?", a: "No. Most restaurants stay on them for new guests and use their own site for regulars. The aim is to move repeat orders to your own page over time. Check your contract with each app to see what it really costs you." },
    { q: "How much do delivery apps charge compared with my own site?", a: "It varies by app, by city and by your contract, so we will not give a number. Pull last month's statements and add up the fees. Your own site has a build cost and payment fees, but no per-order cut from an app." },
    { q: "Can customers order on WhatsApp and pay online?", a: "Yes. The assistant collects the order, then sends a payment link or marks it cash on delivery. A person on your team can take over at any time. Meta message fees apply, checked October 2026, confirm before you buy." },
    { q: "Can I change the menu myself?", a: "Yes. You log in, switch dishes on or off, edit prices and upload photos. We train you and your manager on a recorded session. You do not need a developer for daily changes." },
    { q: "Do I need a licence to take online orders?", a: "Rules depend on your licence and emirate. Confirm with the authority (DET in Dubai) or your accountant before you launch. We build the site; we do not give licence or tax advice." },
    { q: "Will it work in Arabic as well?", a: "Yes. On our custom tiers Arabic right-to-left design is part of the build. On the smallest tier it is an add-on of about AED 3,500." },
  ],
  cta: {
    h: "Want orders that come straight to you?",
    lead: "Send us your menu link and your busiest week. We will reply in one working day with a fixed price in writing.",
    wa: "Hi, I run a restaurant or cafe and want an ordering website with WhatsApp orders.",
  },
};
