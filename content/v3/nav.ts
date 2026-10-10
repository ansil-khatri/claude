/** Single registry of money pages for nav, footer, sitemap and internal links. Keep slugs in sync with content/v3/pages/*. */
export type NavItem = { slug: string; label: string; short: string; cluster: "commerce" | "web" | "automation"; blurb: string };
export const MONEY: NavItem[] = [
  { slug: "shopify-agency-dubai", label: "Shopify agency in Dubai", short: "Shopify agency", cluster: "commerce", blurb: "Stores built to sell, in English and Arabic." },
  { slug: "shopify-plus-agency-dubai", label: "Shopify Plus agency in Dubai", short: "Shopify Plus", cluster: "commerce", blurb: "For brands that outgrew a standard store." },
  { slug: "custom-shopify-theme-development-dubai", label: "Custom Shopify theme development", short: "Custom Shopify themes", cluster: "commerce", blurb: "A theme built around your products." },
  { slug: "shopify-migration-dubai", label: "Shopify migration in Dubai", short: "Shopify migration", cluster: "commerce", blurb: "Move platforms without losing rankings." },
  { slug: "ecommerce-website-development-dubai", label: "Ecommerce website development", short: "Ecommerce development", cluster: "commerce", blurb: "The right platform, built properly." },
  { slug: "luxury-ecommerce-website-design-dubai", label: "Luxury ecommerce website design", short: "Luxury ecommerce", cluster: "commerce", blurb: "Stores with the discipline of a fashion house." },
  { slug: "wordpress-agency-dubai", label: "WordPress agency in Dubai", short: "WordPress agency", cluster: "web", blurb: "Custom sites your team can edit." },
  { slug: "custom-wordpress-theme-development-dubai", label: "Custom WordPress theme development", short: "Custom WordPress themes", cluster: "web", blurb: "Block themes, no page-builder bloat." },
  { slug: "woocommerce-development-dubai", label: "WooCommerce development in Dubai", short: "WooCommerce", cluster: "web", blurb: "Flexible stores on WordPress." },
  { slug: "website-design-dubai", label: "Website design in Dubai", short: "Website design", cluster: "web", blurb: "A business website that brings enquiries." },
  { slug: "erp-software-dubai", label: "ERP software in Dubai", short: "ERP software", cluster: "automation", blurb: "Orders, stock and invoices without Excel." },
  { slug: "whatsapp-automation-dubai", label: "WhatsApp automation in Dubai", short: "WhatsApp automation", cluster: "automation", blurb: "Auto-reply and order updates, in Arabic and English." },
  { slug: "ai-assistant-for-business-dubai", label: "AI assistant for business", short: "AI assistant", cluster: "automation", blurb: "Answers from your catalogue, hands off to people." },
  { slug: "business-automation-dubai", label: "Business automation in Dubai", short: "Business automation", cluster: "automation", blurb: "Replace copy-paste with workflows." },
  { slug: "shopify-store-setup-dubai", label: "Shopify store setup in Dubai", short: "Shopify store setup", cluster: "commerce", blurb: "A store set up properly, from AED 6,900." },
  { slug: "online-store-for-small-business-uae", label: "Online store for a small business", short: "Online store, small business", cluster: "commerce", blurb: "Start selling online without the jargon." },
  { slug: "website-for-small-business-dubai", label: "Website for a small business", short: "Small business website", cluster: "web", blurb: "A clear site that brings enquiries." },
  { slug: "website-redesign-dubai", label: "Website redesign in Dubai", short: "Website redesign", cluster: "web", blurb: "Refresh it without losing your rankings." },
  { slug: "wordpress-maintenance-dubai", label: "WordPress maintenance in Dubai", short: "WordPress maintenance", cluster: "web", blurb: "Updates, backups and security from AED 590." },
  { slug: "e-invoicing-software-uae", label: "E-invoicing software for the UAE", short: "E-invoicing", cluster: "automation", blurb: "Get your invoices ready for the UAE rules." },
  { slug: "inventory-management-software-dubai", label: "Inventory management software", short: "Inventory software", cluster: "automation", blurb: "Stock that matches the shelf." },
];
export const CLUSTERS = {
  commerce: { title: "Commerce", blurb: "Shopify and e-commerce" },
  web: { title: "Web", blurb: "WordPress and websites" },
  automation: { title: "Software", blurb: "ERP, WhatsApp and AI" },
} as const;
export const money = (slug: string) => MONEY.find((m) => m.slug === slug);
export const MAIN_NAV = [
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Journal" },
  { href: "/tools", label: "Tools" },
  { href: "/about", label: "About" },
];
