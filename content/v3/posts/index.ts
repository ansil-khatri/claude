import type { Post } from "../types";
import { GUIDES, type Guide } from "../../guides";
import { post as choose } from "./choose-shopify-agency-dubai";
import { post as themeVs } from "./custom-shopify-theme-vs-premium-theme";
import { post as ecoSeo } from "./ecommerce-seo-dubai";
import { post as erpExcel } from "./erp-vs-excel-uae";
import { post as headless } from "./headless-commerce-do-you-need-it";
import { post as luxury } from "./luxury-ecommerce-website-design";
import { post as migration } from "./shopify-migration-seo-checklist";
import { post as plus } from "./shopify-vs-shopify-plus-uae";
import { post as waReply } from "./whatsapp-auto-reply-for-business";
import { post as wpVsShopify } from "./wordpress-vs-shopify-dubai";

/** Slugs of the posts kept from the earlier guide library, re-skinned for this site. Their links are remapped to the new URL structure. */
const REUSED: Record<string, { cluster: Post["cluster"]; seoTitle: string; desc: string; links: { href: string; label: string }[]; date: string }> = {
  "shopify-store-cost-uae": { cluster: "shopify", seoTitle: "Shopify Store Cost in the UAE (2026): Plans, Apps, Setup", desc: "What a Shopify store really costs in the UAE: plan, theme, apps and setup, with AED figures for DIY, freelancer and agency routes.", date: "2026-10-02",
    links: [{ href: "/shopify-agency-dubai", label: "Shopify agency in Dubai" }, { href: "/custom-shopify-theme-development-dubai", label: "Custom Shopify themes" }, { href: "/blog/custom-shopify-theme-vs-premium-theme", label: "Custom vs premium theme" }, { href: "/tools/shopify-store-cost-calculator", label: "Store cost calculator" }] },
  "shopify-vs-salla": { cluster: "shopify", seoTitle: "Shopify vs Salla for UAE and Gulf Brands: Which to Pick", desc: "Shopify or Salla for a UAE and Gulf brand? Payments, Arabic, apps, fees and when each platform wins, compared honestly.", date: "2026-10-03",
    links: [{ href: "/shopify-agency-dubai", label: "Shopify agency in Dubai" }, { href: "/ecommerce-website-development-dubai", label: "Ecommerce development" }, { href: "/blog/shopify-vs-shopify-plus-uae", label: "Shopify vs Shopify Plus" }, { href: "/blog/choose-shopify-agency-dubai", label: "How to choose a Shopify agency" }] },
  "shopify-tabby-tamara-setup": { cluster: "shopify", seoTitle: "Add Tabby & Tamara to Shopify (UAE Setup Guide)", desc: "How to add Tabby and Tamara pay-later options to a Shopify store in the UAE: eligibility, setup steps, fees to ask about and testing.", date: "2026-10-04",
    links: [{ href: "/shopify-agency-dubai", label: "Shopify agency in Dubai" }, { href: "/ecommerce-website-development-dubai", label: "Ecommerce development" }, { href: "/blog/shopify-store-cost-uae", label: "Shopify store cost" }] },
  "shopify-arabic-store": { cluster: "shopify", seoTitle: "Arabic Shopify Store: RTL, Translation and SEO", desc: "How to run an Arabic and English Shopify store properly: RTL themes, translation, hreflang, fonts and the mistakes that hurt conversion.", date: "2026-10-05",
    links: [{ href: "/custom-shopify-theme-development-dubai", label: "Custom Shopify themes" }, { href: "/shopify-agency-dubai", label: "Shopify agency in Dubai" }, { href: "/work/oud-atelier", label: "Concept build: Oud Atelier" }] },
  "website-cost-dubai": { cluster: "web", seoTitle: "How Much Does a Website Cost in Dubai? Real AED Prices", desc: "Website cost in Dubai in AED: template, custom WordPress and e-commerce sites, what changes the price, and what a quote should include.", date: "2026-10-06",
    links: [{ href: "/website-design-dubai", label: "Website design in Dubai" }, { href: "/wordpress-agency-dubai", label: "WordPress agency in Dubai" }, { href: "/blog/wordpress-vs-shopify-dubai", label: "WordPress vs Shopify" }, { href: "/pricing", label: "Pricing" }] },
};
const fromGuide = (g: Guide, r: (typeof REUSED)[string]): Post => ({
  slug: g.slug, title: g.title, seoTitle: r.seoTitle, desc: r.desc, cluster: r.cluster, read: g.read, date: r.date, updated: "2026-10-09",
  answer: g.answer ?? "", opening: g.opening ?? "", keywords: g.keywords ?? [], links: r.links, body: g.body ?? [], faq: g.faq ?? [],
});
const reused: Post[] = Object.keys(REUSED).map((s) => GUIDES.find((g) => g.slug === s)).filter((g): g is Guide => !!g?.body).map((g) => fromGuide(g, REUSED[g.slug]));

export const POSTS: Post[] = [choose, wpVsShopify, themeVs, plus, migration, headless, ecoSeo, luxury, erpExcel, waReply, ...reused]
  .sort((a, b) => (a.date < b.date ? 1 : -1));
export const postBySlug = (s: string) => POSTS.find((p) => p.slug === s);
export const CLUSTER_LABEL: Record<Post["cluster"], string> = { shopify: "Shopify", web: "Web and WordPress", luxury: "Luxury commerce", automation: "Automation" };
