import type { Page } from "../types";
import type { VizSpec } from "@/components/mock/Viz";
import { fromMockup } from "./_load";

const vizzes: VizSpec[] = [
  { t: "dash", title: "Page editor · Services", sub: "WordPress blocks", kpis: [["Blocks", "22"], ["Edited today", "3"], ["Dev calls", "0"]], rows: [["Hero headline", "g|Edited by Fatima"], ["Prices table", "g|Edited by Omar"], ["Arabic version", "b|In sync"]], head: ["BLOCK", "STATUS", ""] },
  { t: "dash", title: "PageSpeed · mobile", sub: "voltwire.ae", kpis: [["Performance", "97", "was 41"], ["LCP", "1.2 s"], ["Plugins", "9", "was 31"]], rows: [["Images", "g|WebP + lazy"], ["Caching", "g|Edge, Gulf region"], ["Fonts", "g|Latin + Arabic subset"]], head: ["CHECK", "RESULT", ""] },
  { t: "dash", title: "WooCommerce · Orders", sub: "Today", kpis: [["Orders", "38"], ["Revenue", "AED 14,860"], ["Tabby", "11 orders"]], rows: [["#4402 Layla K.", "AED 420", "g|Paid"], ["#4401 Hamad R.", "AED 890", "y|Pending"], ["#4400 Priya S.", "AED 310", "g|Paid"]], head: ["ORDER", "TOTAL", "STATUS"] },
  { t: "code", file: "booking-widget/plugin.php", lines: ["<?php // Custom plugin: slot booking + deposit", "add_action('rest_api_init', function () {", "+  register_rest_route('booking/v1', '/slots', [", "+    'callback' => 'get_free_slots', // reads your calendar", "+  ]);", "});", "// ✓ 14 tests passed"] },
  { t: "dash", title: "Care plan · this month", sub: "Auto-report", dark: true, kpis: [["Uptime", "100%"], ["Backups", "30 / 30"], ["Updates", "12 applied"]], rows: [["Malware scan", "g|Clean"], ["Plugin updates", "g|All current"], ["Changes (2 h plan)", "l|1.5 h used"]], head: ["CHECK", "RESULT", ""] },
];

const base = fromMockup("service-wordpress", vizzes);
export const website: Page = {
  ...base, slug: "website-design", name: "Website design", waText: "Hi, I'm on your website design page",
  seo: { title: "Website Design in Dubai for Small Businesses", desc: "Fast Arabic + English websites that bring in calls, bookings and WhatsApp chats. Built on WordPress so you can edit it. From AED 7,900, live in 2–4 weeks." },
  stage: {
    main: { t: "site", k: "voltwire" }, side: { t: "phone", k: "voltwire", kind: "home" },
    cards: [
      { icon: "⚡", title: "PageSpeed 97 on mobile", sub: "was 41", style: { left: "0%", bottom: "10%" } },
      { icon: "💬", title: "WhatsApp enquiry", sub: "Khalifa City · EV charger", style: { right: "4%", top: "2%" }, dark: true },
    ],
  },
  showcase: { eyebrow: "Sites we've built", head: "WordPress sites that fit your business.", lead: "Each one in English and Arabic, edited by the owners themselves.", brands: ["voltwire", "apex", "maisonrose", "peakcooling"], phone: "home" },
  ddEyebrow: "What a WordPress site can do", techEyebrow: "The honest choice", procEyebrow: "From first call to launch", priceEyebrow: "Website pricing", faqEyebrow: "Website FAQ", faqHead: "Questions before you rebuild.",
  relEyebrow: "Often paired with", relHead: "Make the site work even harder.",
  guides: [{ slug: "website-cost-dubai", title: "How much does a website cost in Dubai?" }, { slug: "bilingual-website-guide", title: "Bilingual websites: Arabic and English done right" }],
} as Page;
