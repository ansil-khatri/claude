import type { Case } from "../types";

export const caseStudy: Case = {
  slug: "maison-verre",
  name: "Maison Verre",
  sector: "Luxury leather goods",
  platform: "Shopify Plus, custom theme",
  brand: "maisonverre",
  h: "A quiet storefront for a leather house that sells slowly and carefully",
  summary:
    "A concept build we designed to show how we approach a luxury Shopify Plus theme. Maison Verre is a fictional brand, not a client.",
  brief:
    "Imagine a leather goods house with a small catalogue, high prices and customers who compare it with the biggest names in the category. A premium theme gives it the same layout as everyone else. The brief we set ourselves: a store that feels like a boutique, keeps every product page calm, and still lets the team change content without a developer.",
  built:
    "A custom Online Store 2.0 theme on Shopify Plus. Editorial home and collection templates, a product page with a sticky purchase panel, a cart drawer, a clienteling-style enquiry form for high-value pieces, and theme sections the merchandising team can reorder in the editor. Built as a concept to demonstrate structure, code and decisions.",
  decisions: [
    {
      t: "Fixed-ratio image boxes everywhere",
      p: "Every product and editorial image sits in a container with a declared aspect ratio, and the hero reserves its height before the image loads. The page does not jump as photography arrives, which matters most on a brand whose pages are mostly photography.",
    },
    {
      t: "Cart as a drawer, not a page",
      p: "At AED 3,900 to 7,400 a piece, a shopper adding a second item should not lose their place. The drawer keeps them on the product page, shows the order summary and delivery note, and goes to checkout in one step. The drawer is progressive: without JavaScript the add-to-cart button still posts to the cart page.",
    },
    {
      t: "Sections and blocks instead of hard-coded templates",
      p: "Home, collection and story pages are built from JSON templates and reusable sections. The merchandising team can swap a lookbook for a collection feature without touching Liquid, and developers keep one source of truth for spacing, type and colour tokens.",
    },
    {
      t: "Few apps, native features first",
      p: "Variants, metafields for leather and hardware details, and the native search are used before any app is added. Each app loads scripts on every page, so we only add one when no native option exists and we can say what it costs the page.",
    },
    {
      t: "Enquiry path for pieces above a threshold",
      p: "High-value items offer a private enquiry form next to checkout, writing to a Shopify customer tag so the sales team can follow up. Some buyers of luxury goods want a conversation first, and the store should allow both.",
    },
    {
      t: "Restrained type and motion",
      p: "One serif for display, one sans for interface, and motion limited to opacity and short transforms that respect the reduced-motion setting. Luxury here means fewer effects, not more.",
    },
  ],
  stack: ["Shopify Plus", "Liquid", "Online Store 2.0 JSON templates", "Shopify CLI", "Theme Check", "Metafields and metaobjects", "Vanilla JavaScript", "Git with GitHub", "Lighthouse CI"],
  timeline:
    "Planned as a 10 to 12 week Shopify Plus build: discovery and design in weeks 1 to 3, theme development in weeks 4 to 9, QA and content load in weeks 10 to 11, launch week after.",
  scope: ["Brand and UX design", "Custom Shopify Plus theme", "Product page and cart drawer", "Metafield data model", "Enquiry form", "QA across devices", "Handover and care plan outline"],
  visuals: ["store-home", "store-pdp", "store-cart", "theme-code", "shopify-admin"],
  services: ["shopify-plus-agency-dubai", "luxury-ecommerce-website-design-dubai", "custom-shopify-theme-development-dubai"],
  posts: ["luxury-ecommerce-website-design", "shopify-vs-shopify-plus-uae", "custom-shopify-theme-vs-premium-theme"],
};
