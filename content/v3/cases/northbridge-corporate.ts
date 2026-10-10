import type { Case } from "../types";

export const caseStudy: Case = {
  slug: "northbridge-corporate",
  name: "Northbridge Advisory",
  sector: "Corporate services",
  platform: "Custom WordPress block theme, bilingual",
  brand: "northbridge",
  h: "A corporate services website that a marketing team can edit and a developer can trust",
  summary:
    "A concept build showing a custom WordPress block theme for a company-setup and compliance firm, in English and Arabic. Northbridge Advisory is a fictional brand, not a client.",
  brief:
    "Imagine an advisory firm whose website is its main source of enquiries: service pages, a setup cost guide, team profiles and a contact form. The brief we set ourselves: a site that reads as credible, can be edited by non-developers without breaking the design, and runs in two languages without duplicate effort.",
  built:
    "A custom WordPress block theme with a restricted set of patterns and custom blocks, structured service and team content types, an enquiry form that routes by service, and an English and Arabic version. Built as a concept to demonstrate structure.",
  decisions: [
    {
      t: "Block theme, not a page builder",
      p: "Layout lives in theme templates and patterns, and content lives in blocks. Editors cannot drag a section into a broken layout, and there is no builder plugin to update or pay for. The cost is a more upfront design effort.",
    },
    {
      t: "A small, locked pattern library",
      p: "Editors pick from a short list of approved patterns such as service hero, comparison table, FAQ and team grid. Other block types and free colour choices are disabled, so every new page keeps the same spacing and type.",
    },
    {
      t: "Custom post types for services and people",
      p: "Services and team members are structured content with their own fields, not pages. That lets the same data appear on a listing, in search and in schema markup, and lets us change layout without re-entering content.",
    },
    {
      t: "Few plugins, each with a reason",
      p: "Forms, SEO metadata, caching and translation are the only plugins, each chosen for maintenance record and kept updated under the care plan. Anything that can be a block or theme feature is not a plugin.",
    },
    {
      t: "Translation planned in the content model",
      p: "Arabic is a full translation with its own URLs and hreflang tags, using logical CSS so one stylesheet serves both directions. We decide the translation workflow before build so editors are not asked to maintain two sites by hand.",
    },
    {
      t: "Enquiry form that routes",
      p: "The contact form asks for service and entity type first and sends to the right inbox with a tidy summary. Visitors answer fewer questions and the team gets cleaner leads.",
    },
  ],
  stack: ["WordPress", "Block theme (theme.json)", "PHP", "Gutenberg custom blocks", "Advanced Custom Fields", "Polylang", "WPForms", "Rank Math", "WP Rocket", "Git with GitHub"],
  timeline:
    "Planned as a 6 to 8 week custom WordPress build: discovery and content structure in weeks 1 to 2, design in weeks 2 to 3, theme development in weeks 3 to 6, content, Arabic review and QA in weeks 6 to 7, launch week after.",
  scope: ["Content structure", "Website design", "Custom block theme", "Pattern library", "Custom post types", "Bilingual setup", "Enquiry routing", "Editor training and handover"],
  visuals: ["wp-site", "wp-editor", "serp", "speed-report"],
  services: ["custom-wordpress-theme-development-dubai", "wordpress-agency-dubai", "website-design-dubai"],
  posts: ["wordpress-vs-shopify-dubai", "website-cost-dubai", "ecommerce-seo-dubai"],
};
