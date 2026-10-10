/** Content schema for the v3 site (docs/PLAN-V3.md). Pages are data; templates render them. */

/** Mockup ids the template can render. Pick the one that illustrates the section. */
export type Visual =
  | "store-home"        // luxury storefront home (desktop browser)
  | "store-collection"  // collection / listing page with filters
  | "store-pdp"         // product page with sticky add-to-cart
  | "store-cart"        // cart drawer + upsell + Apple Pay / Tabby
  | "store-mobile"      // phone: home + checkout
  | "store-rtl"         // Arabic RTL storefront
  | "shopify-admin"     // Shopify admin / theme editor
  | "theme-code"        // Liquid / JSON code editor
  | "wp-editor"         // WordPress block editor + custom fields
  | "wp-site"           // finished WordPress corporate site
  | "speed-report"      // PageSpeed / Core Web Vitals report
  | "serp"              // Google results + AI answer
  | "migration-map"     // URL redirect map for a platform migration
  | "erp-dash"          // ERP dashboard (orders, stock, cash)
  | "erp-invoice"       // ERP invoice with VAT 5%
  | "wa-inbox"          // WhatsApp inbox with auto-reply and human hand-off
  | "ai-widget"         // AI assistant answering from the catalogue
  | "analytics";        // analytics / Search Console chart

export type Section =
  | { k: "split"; eyebrow: string; h: string; p: string; bullets?: string[]; visual: Visual; flip?: boolean; fine?: string }
  | { k: "bento"; eyebrow: string; h: string; lead?: string; tiles: { t: string; p: string; visual?: Visual; span?: 1 | 2 }[] }
  | { k: "process"; eyebrow: string; h: string; lead?: string; steps: { wk: string; t: string; p: string }[] }
  | { k: "compare"; eyebrow: string; h: string; lead?: string; head: string[]; rows: string[][]; note?: string }
  | { k: "stack"; eyebrow: string; h: string; lead?: string; groups: { name: string; items: string[] }[] }
  | { k: "numbers"; items: { n: number; prefix?: string; suffix?: string; label: string }[] }
  | { k: "pricing"; eyebrow: string; h: string; lead?: string; tiers: { k: string; name: string; amt: string; unit?: string; desc: string; items: string[]; hot?: boolean }[]; note?: string };

export type Faq = { q: string; a: string };

export type MoneyPage = {
  slug: string;                    // URL: /<slug>
  cluster: "commerce" | "web" | "automation";
  keyword: string;                 // primary keyword, lowercase
  title: string;                   // <= 60 chars, no brand
  desc: string;                    // 120-158 chars
  kicker: string;                  // mono label above H1, e.g. "Shopify agency · Dubai"
  h1: [string, string];            // [bold part with the keyword, dim part]
  sub: string;                     // 1-2 sentences under the H1
  answer: string;                  // 40-60 word direct answer (what AI answers lift)
  facts: [string, string][];       // 4 pairs, e.g. ["From","AED 9,900"]
  hero: Visual[];                  // 1-2 visuals for the hero
  sections: Section[];             // 5-8 sections, mixed types
  faq: Faq[];                      // 6-8 questions
  related: string[];               // slugs of sibling money pages (existing URLs only)
  posts: string[];                 // blog slugs (from the plan)
  cases: string[];                 // case slugs (from the plan)
  cta: { h: string; lead: string; wa: string };
};

export type Post = {
  slug: string; title: string; seoTitle: string; desc: string; cluster: "shopify" | "web" | "luxury" | "automation";
  pillar?: boolean; read: number; date: string; updated: string;
  answer: string; opening: string; keywords: string[];
  links: { href: string; label: string }[];   // 3-5 internal links (money pages, other posts, cases)
  body: import("../guides").Block[];
  faq: Faq[];
};

export type Case = {
  slug: string; name: string; sector: string; platform: string; brand: string;
  h: string;                       // headline
  summary: string;                 // 1-2 sentences
  brief: string; built: string;    // the problem, and what we built
  decisions: { t: string; p: string }[];   // 4-6 design/engineering decisions (NOT performance stats)
  stack: string[]; timeline: string; scope: string[];
  visuals: Visual[];               // 3-5 mockups to show
  services: string[];              // money page slugs
  posts: string[];
};

/** Industry landing page (/industries/<slug>). Written in the owner's words; links to money pages, one concept case and posts. */
export type Industry = {
  slug: string; name: string;               // "Perfume and oud brands"
  keyword: string;                          // primary phrase, lowercase
  title: string;                            // <= 60 chars, no brand
  desc: string;                             // 120-158 chars
  kicker: string;                           // mono label, e.g. "Perfume and oud · Online store"
  h1: [string, string];
  sub: string;
  answer: string;                           // 40-60 words, includes an AED figure
  situation: string[];                      // 2-3 short paragraphs in the owner's words
  problems: { t: string; p: string; visual: Visual }[];  // 3 typical problems, each with a mockup
  build: { t: string; p: string }[];        // 4-5 things we build for this sector
  price: { label: string; amt: string; note: string }[]; // 2-3 AED price bands from the price book
  services: string[];                       // money page slugs (2-4)
  case?: string;                            // case slug (concept build)
  posts: string[];                          // blog slugs (2-4)
  faq: Faq[];                               // 5-6
  cta: { h: string; lead: string; wa: string };
};
