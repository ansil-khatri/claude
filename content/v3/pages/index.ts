import type { MoneyPage } from "../types";
import { page as ai_assistant_for_business_dubai } from "./ai-assistant-for-business-dubai";
import { page as business_automation_dubai } from "./business-automation-dubai";
import { page as custom_shopify_theme_development_dubai } from "./custom-shopify-theme-development-dubai";
import { page as custom_wordpress_theme_development_dubai } from "./custom-wordpress-theme-development-dubai";
import { page as ecommerce_website_development_dubai } from "./ecommerce-website-development-dubai";
import { page as erp_software_dubai } from "./erp-software-dubai";
import { page as luxury_ecommerce_website_design_dubai } from "./luxury-ecommerce-website-design-dubai";
import { page as shopify_agency_dubai } from "./shopify-agency-dubai";
import { page as shopify_migration_dubai } from "./shopify-migration-dubai";
import { page as shopify_plus_agency_dubai } from "./shopify-plus-agency-dubai";
import { page as website_design_dubai } from "./website-design-dubai";
import { page as whatsapp_automation_dubai } from "./whatsapp-automation-dubai";
import { page as woocommerce_development_dubai } from "./woocommerce-development-dubai";
import { page as wordpress_agency_dubai } from "./wordpress-agency-dubai";

export const PAGES: MoneyPage[] = [ai_assistant_for_business_dubai, business_automation_dubai, custom_shopify_theme_development_dubai, custom_wordpress_theme_development_dubai, ecommerce_website_development_dubai, erp_software_dubai, luxury_ecommerce_website_design_dubai, shopify_agency_dubai, shopify_migration_dubai, shopify_plus_agency_dubai, website_design_dubai, whatsapp_automation_dubai, woocommerce_development_dubai, wordpress_agency_dubai];
export const pageBySlug = (s: string) => PAGES.find((p) => p.slug === s);
