import type { Page } from "../types";
import type { VizSpec } from "@/components/mock/Viz";
import { fromMockup } from "./_load";

const vizzes: VizSpec[] = [
  { t: "dash", title: "Theme editor · Home", sub: "Online Store 2.0", kpis: [["Sections", "14"], ["Edited by team", "9 this week"], ["Apps removed", "−11", "saves AED 392/mo"]], rows: [["Hero banner", "y|Draft", "Edit"], ["Bundle builder", "g|Live", "Edit"], ["Reviews strip", "g|Live", "Edit"], ["Ramadan collection", "b|Scheduled", "Edit"]], head: ["SECTION", "STATUS", ""] },
  { t: "dash", title: "PageSpeed · mobile", sub: "peakstore.ae", kpis: [["Performance", "96", "was 38"], ["LCP", "1.1 s", "was 9.8 s"], ["CLS", "0.01"]], rows: [["Apps installed", "g|7 (was 23)"], ["Image weight", "g|−72%"], ["Checkout", "g|Apple Pay one-tap"]], head: ["CHECK", "RESULT", ""] },
  { t: "steps", title: "Subscription · Oud Club", sub: "Skio-style", steps: [["Subscribed", "Monthly oud discovery box · AED 189"], ["Next box ships 1 Nov", "Skip, swap or pause in one tap"], ["Tabby pay-in-4 available", "4 × AED 47.25"], ["Bundle: 3 for AED 499", "Saves AED 68"]] },
  { t: "dash", title: "B2B wholesale portal", sub: "Shopify Plus", dark: true, kpis: [["Active shops", "40"], ["Reorders / week", "26", "+18%"], ["Avg. order", "AED 3,420"]], rows: [["Al Safa Mart", "AED 4,200", "g|Net 30"], ["Noor Pharmacy", "AED 2,860", "g|Paid"], ["Marina Gourmet", "AED 5,120", "y|Invoice due"]], head: ["SHOP", "ORDER", "TERMS"] },
  { t: "dash", title: "Migration · WooCommerce → Shopify", sub: "Day 3 of 4", kpis: [["Products", "812 ✓"], ["Customers", "4,310 ✓"], ["301 redirects", "1,094 ✓"]], rows: [["Order history", "g|Imported"], ["Reviews", "g|Imported"], ["Gift card balances", "g|Imported"], ["Google rankings", "l|Watching 30 days"]], head: ["ITEM", "STATUS", ""] },
];

const base = fromMockup("service-shopify", vizzes);
export const shopify: Page = {
  ...base, slug: "shopify-development", name: "Shopify", waText: "Hi, I'm on your Shopify page",
  seo: { title: "Shopify Agency in Dubai & UAE · Stores from AED 9,900", desc: "New Shopify stores, custom themes and migrations for UAE brands: Arabic + English, Tabby and Tamara, AED checkout, fast on phones. From AED 9,900. WhatsApp us." },
  stage: {
    main: { t: "store", k: "oudsilk" }, side: { t: "phone", k: "oudsilk", kind: "checkout" },
    cards: [
      { icon: "🛍", title: "New order · AED 290", sub: "Apple Pay · Dubai Marina", style: { left: "-2%", bottom: "14%" } },
      { icon: "✓", title: "Tabby pay-in-4 enabled", sub: "4 × AED 72.50", style: { right: "2%", top: "4%" }, dark: true },
    ],
  },
  showcase: { eyebrow: "Stores we've built", head: "Shops that fit what you sell.", lead: "Pick your industry. On the big screen is the product page your customers land on; on the phone is the moment they pay.", brands: ["oudsilk", "maisonrose", "freshfold", "apex", "fixpoint"], phone: "checkout" },
  ddEyebrow: "What your store can do", techEyebrow: "The honest platform choice", techLead: "We'll tell you which one fits your size and plans on the first call, even if it's the cheapest option.",
  techNote: "Shopify bills in USD; AED shown at 3.67.", procEyebrow: "From first call to first sale", priceEyebrow: "Shopify pricing", faqEyebrow: "Shopify FAQ", faqHead: "Questions before you build a store.",
  relEyebrow: "Often paired with", relHead: "Make the store work even harder.",
  guides: [{ slug: "shopify-store-cost-uae", title: "Shopify store cost in the UAE" }, { slug: "start-shopify-store-uae", title: "How to open a Shopify store in the UAE" }, { slug: "shopify-tabby-tamara-setup", title: "Add Tabby and Tamara to Shopify" }],
} as Page;
