import type { Industry } from "../types";

export const industry: Industry = {
  slug: "trading-and-wholesale",
  name: "Trading and wholesale",
  keyword: "b2b ordering website trading company uae",
  title: "B2B Ordering Website for Trading Companies UAE | AED 44,000",
  desc: "B2B ordering website for UAE trading firms: customer price lists, credit limits, VAT invoices and WhatsApp orders into your ERP. Builds from AED 44,000.",
  kicker: "Trading and wholesale · B2B ordering",
  h1: ["A B2B ordering website for UAE trading companies", "with each customer's own prices."],
  sub: "Your customers log in, see their price list and their credit, and order at any hour. The order lands in your system with the VAT invoice, not in a WhatsApp chat.",
  answer:
    "A B2B ordering website for a UAE trading company shows each customer their own prices and credit limit, takes the order and creates the VAT invoice. A B2B ordering build starts at AED 44,000, and a full ERP linked to stock, orders and invoices starts at AED 59,000, excluding 5% VAT.",
  situation: [
    "Our customers order by WhatsApp, email and phone. My team types everything into Excel, then again into the invoice. One wrong price and we argue for a week.",
    "Every customer has a different price. Some have credit, some pay cash, and a few are over their limit but still get stock because nobody checked in time.",
    "I want customers to order themselves and see only their own prices. I want my team to stop typing and start selling. I do not want a system so big that nobody uses it.",
  ],
  problems: [
    {
      t: "Customer-specific price lists",
      p: "Each customer logs in and sees their own price, discount and minimum order. No more sending a PDF price list that is out of date by the next week. You change a price once and every customer sees it.",
      visual: "erp-dash",
    },
    {
      t: "Credit limits and slow payers",
      p: "The order screen shows the customer's credit limit and what they owe. An order over the limit can wait for approval instead of shipping. Your accountant decides the rules; the system applies them every time.",
      visual: "erp-dash",
    },
    {
      t: "Orders that live in WhatsApp",
      p: "Buyers still prefer WhatsApp, and that is fine. The order message is read, matched to the customer and product codes, and placed into the ERP for your team to confirm. Nobody types it twice.",
      visual: "wa-inbox",
    },
  ],
  build: [
    { t: "Customer login and ordering", p: "Trade customers see their products, prices, stock level and past orders. They can reorder in a few taps." },
    { t: "Price lists by customer or group", p: "Set prices by customer, group or volume. Update a list in bulk from a spreadsheet you already have." },
    { t: "Credit and approval rules", p: "Credit limits, payment terms and an approval step for orders that break the rules." },
    { t: "VAT invoices and delivery notes", p: "Invoices with 5% VAT created from the order. UAE e-invoicing is phased from 2026 to 2027 through an Accredited Service Provider; confirm your date on the FTA or MoF site or with your accountant." },
    { t: "WhatsApp orders into the ERP", p: "Orders and reorder requests arrive from WhatsApp as structured orders. Meta and platform fees are extra (checked October 2026, confirm before you buy)." },
  ],
  price: [
    { label: "B2B ordering site", amt: "From AED 44,000", note: "WooCommerce build, 8 to 12 weeks, typical up to 90,000. Customer logins and price lists." },
    { label: "ERP and operations", amt: "From AED 59,000", note: "8 to 16 weeks, typical up to 150,000. Orders, stock, credit and invoices in one system." },
    { label: "WhatsApp orders", amt: "From AED 2,900", note: "1 to 2 weeks, typical up to 12,000, plus Meta and platform fees." },
  ],
  services: ["erp-software-dubai", "business-automation-dubai", "woocommerce-development-dubai"],
  case: "opsdesk-erp",
  posts: ["erp-vs-excel-uae", "whatsapp-orders-without-excel", "custom-erp-vs-odoo-zoho"],
  faq: [
    { q: "Can each customer see a different price?", a: "Yes. Prices can be set per customer, per group or by volume. Customers log in and only see their own. You update a price once and it changes everywhere." },
    { q: "Can I stop orders when a customer is over their credit limit?", a: "Yes. The order can be held for your approval when it goes over the limit or the customer has overdue invoices. You choose the rule." },
    { q: "Do I need an ERP or just a website?", a: "If you only need customers to place orders, a B2B site is enough. If you also need stock, purchasing and invoices to match, you want the ERP too. We will tell you which, even if it is the cheaper option." },
    { q: "Can customers still order on WhatsApp?", a: "Yes. WhatsApp orders are read, matched to the customer and products, and entered for your team to confirm. Messages that the system is not sure about go to a person." },
    { q: "How does this deal with VAT and e-invoicing?", a: "Invoices show 5% VAT. UAE e-invoicing is phased from 2026 to 2027, must go through an Accredited Service Provider in a structured format, not a PDF, and dates vary by business. Confirm yours on the FTA or MoF site." },
    { q: "Why not just use Odoo or Zoho?", a: "They can be a good fit, and for some firms they are the right answer. A custom build makes sense when your price rules or workflow are unusual. We say so on the first call." },
  ],
  cta: {
    h: "Stop typing orders twice.",
    lead: "Send us a sample price list and one week of orders. We reply in one working day with a fixed price and what we would build first.",
    wa: "Hi, I run a trading or wholesale company in the UAE and want a B2B ordering website linked to an ERP.",
  },
};
