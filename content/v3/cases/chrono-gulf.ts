import type { Case } from "../types";

export const caseStudy: Case = {
  slug: "chrono-gulf",
  name: "Chrono Gulf",
  sector: "Watches and jewellery",
  platform: "Headless Shopify storefront",
  brand: "chronogulf",
  h: "A headless storefront for a catalogue where every product page is a small editorial",
  summary:
    "A concept build showing when and how we would separate the storefront from Shopify. Chrono Gulf is a fictional brand, not a client.",
  brief:
    "Imagine a watch and jewellery retailer with long product pages: movement details, 360 views, service information and certificates. A standard theme can do part of this. The brief we set ourselves: decide honestly whether headless is justified, and if so build it so the commerce stays in Shopify and the front end stays maintainable.",
  built:
    "A Next.js storefront reading products, collections and carts from the Shopify Storefront API, with checkout handled by Shopify. Rich product pages with structured specification data, a service-and-warranty section, and a content layer for editorial pages. Built as a concept to demonstrate architecture.",
  decisions: [
    {
      t: "Headless only where the theme runs out",
      p: "Our default advice is a custom theme, and we say so in our headless guide. Here the spec-heavy product pages and editorial content justify a separate front end. A client without those needs should not pay for the extra moving parts.",
    },
    {
      t: "Checkout stays on Shopify",
      p: "The storefront builds the cart through the Storefront API and hands off to Shopify checkout. Payments, taxes, fraud checks and wallet buttons stay with the platform that maintains them, and we do not rebuild what we would then have to keep secure.",
    },
    {
      t: "Static generation with revalidation",
      p: "Product and collection pages are generated ahead of time and revalidated when Shopify data changes, so pages are served as HTML and stay current. A price change should not wait for a redeploy.",
    },
    {
      t: "Specifications as structured data",
      p: "Case size, movement, water resistance and metal purity live as typed metafields, not a paragraph. The same data drives the spec table, the comparison view, filters and product schema markup.",
    },
    {
      t: "Preview and editing for non-developers",
      p: "Editorial pages come from a content layer with a draft preview, so the team can publish a feature without a code change. A headless build that only developers can edit becomes a bottleneck.",
    },
    {
      t: "Own the cost of the extra infrastructure",
      p: "Headless means a host, builds, monitoring and a developer who knows the code. We list these costs in the proposal and in the care plan rather than hiding them.",
    },
  ],
  stack: ["Shopify Plus", "Shopify Storefront API", "Next.js", "TypeScript", "React", "GraphQL", "Vercel", "Shopify metafields", "Playwright", "Git with GitHub"],
  timeline:
    "Planned as a 12 to 16 week build: discovery and architecture in weeks 1 to 3, design in weeks 2 to 5, development in weeks 5 to 12, QA, content and load in weeks 12 to 14, launch and stabilisation after.",
  scope: ["Architecture decision", "Storefront design", "Next.js storefront", "Storefront API integration", "Spec data model", "Editorial content layer", "Testing and handover documentation"],
  visuals: ["store-pdp", "store-collection", "theme-code", "speed-report", "shopify-admin"],
  services: ["shopify-plus-agency-dubai", "ecommerce-website-development-dubai", "luxury-ecommerce-website-design-dubai"],
  posts: ["headless-commerce-do-you-need-it", "shopify-vs-shopify-plus-uae", "luxury-ecommerce-website-design"],
};
