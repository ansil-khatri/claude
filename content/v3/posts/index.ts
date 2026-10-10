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
import { post as n_ai_chatbot_for_your_website_uae } from "./ai-chatbot-for-your-website-uae";
import { post as n_arabic_website_cost_dubai } from "./arabic-website-cost-dubai";
import { post as n_custom_erp_vs_odoo_zoho } from "./custom-erp-vs-odoo-zoho";
import { post as n_do_i_need_a_website_uae } from "./do-i-need-a-website-uae";
import { post as n_e_invoicing_uae_small_business } from "./e-invoicing-uae-small-business";
import { post as n_freelancer_vs_agency_dubai } from "./freelancer-vs-agency-dubai";
import { post as n_how_long_does_a_shopify_store_take } from "./how-long-does-a-shopify-store-take";
import { post as n_marketplace_vs_own_store_uae } from "./marketplace-vs-own-store-uae";
import { post as n_online_selling_licence_dubai } from "./online-selling-licence-dubai";
import { post as n_payment_gateway_uae_online_store } from "./payment-gateway-uae-online-store";
import { post as n_sell_on_instagram_uae_website } from "./sell-on-instagram-uae-website";
import { post as n_shopify_fees_uae } from "./shopify-fees-uae";
import { post as n_shopify_store_not_selling } from "./shopify-store-not-selling";
import { post as n_shopify_vs_wix_uae } from "./shopify-vs-wix-uae";
import { post as n_start_online_store_dubai } from "./start-online-store-dubai";
import { post as n_website_not_showing_on_google_dubai } from "./website-not-showing-on-google-dubai";
import { post as n_whatsapp_booking_reminders_clinics_salons } from "./whatsapp-booking-reminders-clinics-salons";
import { post as n_whatsapp_business_api_cost_uae } from "./whatsapp-business-api-cost-uae";
import { post as n_whatsapp_orders_without_excel } from "./whatsapp-orders-without-excel";
import { post as n_woocommerce_to_shopify_uae } from "./woocommerce-to-shopify-uae";
import { post as n_wordpress_security_maintenance_uae } from "./wordpress-security-maintenance-uae";

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

export const POSTS: Post[] = [choose, wpVsShopify, themeVs, plus, migration, headless, ecoSeo, luxury, erpExcel, waReply, ...reused, n_ai_chatbot_for_your_website_uae, n_arabic_website_cost_dubai, n_custom_erp_vs_odoo_zoho, n_do_i_need_a_website_uae, n_e_invoicing_uae_small_business, n_freelancer_vs_agency_dubai, n_how_long_does_a_shopify_store_take, n_marketplace_vs_own_store_uae, n_online_selling_licence_dubai, n_payment_gateway_uae_online_store, n_sell_on_instagram_uae_website, n_shopify_fees_uae, n_shopify_store_not_selling, n_shopify_vs_wix_uae, n_start_online_store_dubai, n_website_not_showing_on_google_dubai, n_whatsapp_booking_reminders_clinics_salons, n_whatsapp_business_api_cost_uae, n_whatsapp_orders_without_excel, n_woocommerce_to_shopify_uae, n_wordpress_security_maintenance_uae]
  .sort((a, b) => (a.date < b.date ? 1 : -1));
export const postBySlug = (s: string) => POSTS.find((p) => p.slug === s);
export const CLUSTER_LABEL: Record<Post["cluster"], string> = { shopify: "Shopify", web: "Web and WordPress", luxury: "Luxury commerce", automation: "Automation" };
