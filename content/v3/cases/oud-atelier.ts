import type { Case } from "../types";

export const caseStudy: Case = {
  slug: "oud-atelier",
  name: "Oud Atelier",
  sector: "Perfume house",
  platform: "Shopify, Arabic RTL with Tabby",
  brand: "oudatelier",
  h: "An Arabic-first perfume store where right-to-left is designed, not mirrored",
  summary:
    "A concept build showing how we handle a bilingual Shopify store with real right-to-left layout and instalments through Tabby. Oud Atelier is a fictional brand, not a client.",
  brief:
    "A perfume house in Dubai sells to Arabic and English readers, often on a phone, often as a gift. The brief we set ourselves: an Arabic experience that is the equal of the English one, a discovery set that lowers the risk of a first purchase, and a payment flow that offers instalments clearly without cluttering the page.",
  built:
    "A Shopify store with English and Arabic storefronts under one theme, logical CSS properties for layout, Arabic typography chosen for display and body, a discovery-set flow, gift options, and Tabby shown at product and cart level. Built as a concept to demonstrate decisions.",
  decisions: [
    {
      t: "Logical CSS properties instead of a mirrored stylesheet",
      p: "Spacing and alignment use start and end instead of left and right, so one stylesheet serves both directions. A separate RTL override file drifts out of date; logical properties keep the two languages in step. Icons that imply direction, such as arrows and carousels, are flipped explicitly.",
    },
    {
      t: "Arabic is a language, not a translation layer",
      p: "Arabic copy is written for the product page, not pasted from English, and gets its own font choice, line height and weight. Arabic script needs more vertical room, so type scales are set per language.",
    },
    {
      t: "Numbers and prices stay readable in both directions",
      p: "Prices are wrapped so the currency and amount do not reorder inside an Arabic sentence, and we decide up front whether to use Western or Arabic-Indic numerals and apply it everywhere, including emails.",
    },
    {
      t: "Tabby messaging where the decision happens",
      p: "The instalment line sits under the price on the product page and in the cart, and the full checkout option is configured in the Shopify payments settings. We keep the message short and link to the provider's terms rather than restating them, since terms can change.",
    },
    {
      t: "Discovery set as the entry point",
      p: "A five-vial set with a credit toward a full bottle gives first-time buyers a lower-risk start. It is a merchandising decision implemented as a product bundle, with the credit rule handled by a discount code the customer sees in the cart.",
    },
    {
      t: "Dark theme with tested contrast",
      p: "The dark palette suits the product, but gold text on near-black can fail contrast at small sizes. Body text uses the light ink; gold is reserved for large type, lines and buttons.",
    },
  ],
  stack: ["Shopify", "Liquid", "Shopify Markets", "Translate and Adapt", "Tabby", "CSS logical properties", "Shopify Flow", "Vanilla JavaScript", "Git with GitHub"],
  timeline:
    "Planned as a 6 to 8 week custom theme build: discovery in week 1, design in weeks 1 to 2, development in weeks 3 to 6, Arabic QA with a native reader and content load in weeks 6 to 7, launch week after.",
  scope: ["Bilingual UX design", "Custom Shopify theme", "Arabic RTL layout and typography", "Tabby setup", "Discovery set bundle", "Email templates in both languages", "QA with a native Arabic reader"],
  visuals: ["store-rtl", "store-home", "store-pdp", "store-cart", "store-mobile"],
  services: ["shopify-agency-dubai", "custom-shopify-theme-development-dubai", "ecommerce-website-development-dubai"],
  posts: ["shopify-arabic-store", "shopify-tabby-tamara-setup", "shopify-vs-salla"],
};
