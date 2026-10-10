import type { Page } from "../types";
import type { VizSpec } from "@/components/mock/Viz";
import { fromMockup } from "./_load";

const viz: VizSpec[] = [
  { t: "site", k: "voltwire" },
  { t: "steps", title: "Lead form · 2 steps", sub: "voltwire.ae/ev-charger", steps: [["Step 1: What are you charging?", "Tesla · BMW · Other · One tap"], ["Step 2: Where are you?", "Khalifa City · Al Reem · Yas · Saadiyat"], ["Instant booking", "Pick Thu 10:00 or Fri 14:00"], ["Lead sent in 41 seconds", "CRM · WhatsApp · your phone"]] },
  { t: "dash", title: "PageSpeed · mobile", sub: "voltwire.ae/ev-charger", kpis: [["Score", "98", "was 23"], ["Load on 4G", "1.1 s", "was 8.4 s"], ["CLS", "0.00"]], rows: [["Headline on screen", "g|0.7 s"], ["Form usable", "g|1.0 s"], ["Quality Score", "l|7 → 9"]], head: ["MOMENT", "TIME", ""] },
  { t: "bars", title: "A/B test #6 · headline", sub: "14 days · 2,310 visitors", rows: [["A · Tesla charger installs", 38, "4.1%"], ["B · Installed this week, AED 4,550", 71, "7.6%", "#c8f542"]] },
  { t: "dash", title: "Cost per booked job", sub: "Last 30 days", dark: true, kpis: [["Ad spend", "AED 21,300"], ["Leads", "142", "▲ 11×"], ["Per booked job", "AED 150", "was AED 683"]], rows: [["Google · EV charger Abu Dhabi", "AED 118", "g|31 jobs"], ["Meta · Home install", "AED 204", "y|12 jobs"], ["Google · Brand", "AED 62", "g|9 jobs"]], head: ["CAMPAIGN", "PER LEAD", "JOBS"] },
];
const base = fromMockup("service-landing-pages", viz);
export const landing: Page = {
  ...base, slug: "landing-pages", name: "Landing pages", waText: "Hi, I'm on your landing pages page",
  kicker: "Landing pages for Google and Meta ads in Dubai",
  plain: "We build landing pages for Google and Meta ads in the UAE: one page per ad, one offer, one button, in English and Arabic. They load in about a second on a phone, send every lead to WhatsApp and your CRM within a minute, and track which ad brought each customer. A single page starts from AED 5,900 and takes 7–10 days; a four-page campaign pack is AED 15,900.",
  facts: [["From", "AED 5,900"], ["Time", "7–10 days"], ["Languages", "English + Arabic"], ["Based in", "Dubai"]],
  seo: { title: "Landing Pages for Google & Meta Ads in Dubai", desc: "Paying for clicks that never call or WhatsApp? One page per ad, one offer, a WhatsApp button that tracks every lead. From AED 5,900, live in 10 days." },
  stage: {
    main: { t: "site", k: "voltwire" }, side: { t: "phone", k: "voltwire", kind: "detail" },
    cards: [{ icon: "⚡", title: "New lead · 41 seconds ago", sub: "Tesla charger · Khalifa City", style: { left: "-3%", bottom: "12%" } }, { icon: "🏷", title: "AED 1,100 off · ends 31 Oct", sub: "Offer bar matches the ad", style: { right: "2%", top: "2%" }, dark: true }],
  },
  sub: "Landing pages built for one ad, one offer and one button, so the people you pay to reach actually call, WhatsApp, book or buy. Live in about 10 days, and tracked down to every lead.",
  tech: ["Next.js · Webflow", "Google Ads · GA4", "Meta Pixel", "Zoho CRM · HubSpot", "Google Tag Manager", "WhatsApp click tracking"],
  pains: [
    { q: "\"We spend AED 15,000 a month on Google Ads and the phone barely rings.\"", cost: "Every ad sends people to the homepage. 1,840 clicks last month turned into 11 leads: AED 1,406 per conversion.", fix: "One page per ad, with one offer and one button (/ac-repair, /duct-cleaning, /emergency). Next month: 122 conversions at AED 127 each." },
    { q: "\"Our page looks great on my laptop.\"", cost: "On a phone maisonrose.ae/bridal takes 8.4 seconds to load, and most people tap back before the booking form appears.", fix: "Rebuilt to load in 1.1 seconds on a phone. Speed score from 23 to 98." },
    { q: "\"By the time we call back, they've hired someone else.\"", cost: "Form leads land in a shared inbox. The average reply takes 19 hours, and 6 of last week's 14 leads went to a competitor.", fix: "Every lead gets a WhatsApp message in under a minute, a call within 5, and lands in your CRM with the ad it came from." },
  ],
  tiers: [
    { k: "ONE OFFER", name: "One page", desc: "One page for your most important ad.", amt: "AED 5,900", items: ["Ads and offer review", "Copy written for you (EN + AR)", "Phone and laptop design", "2-step form or booking", "Tracking set up", "7–10 days"] },
    { k: "MOST CHOSEN", name: "Campaign pack", desc: "A page for every service you advertise.", amt: "AED 15,900", hot: true, items: ["Up to 4 matched pages", "Call and WhatsApp tracking, CRM setup", "WhatsApp reply in under a minute", "First A/B test included", "Cost-per-lead report", "2–3 weeks"] },
    { k: "GROWTH", name: "Test & improve", desc: "For businesses spending AED 5k+ a month on ads.", amt: "AED 4,900", unit: "/month", items: ["New A/B test every 2 weeks", "New pages as you add services", "Monthly lead and cost report", "Works with your ads manager", "Cancel with 30 days' notice"] },
  ],
  priceLead: "Typical starting points. Your exact price comes in writing within 48 hours of our call. Prices exclude 5% VAT.",
  tabs: base.tabs.map((t, i) => i === 0 ? { ...t, h: "They click \"installed this week\". The page says the same.", p: "Someone searching \"Tesla charger install Abu Dhabi\" sees your ad, taps it and lands on a page about exactly that, with the same price and the same promise. No menu to get lost in, no \"Welcome to our company\"." } : t),
  faq: base.faq.map((f) => f.q.startsWith("Who owns") ? { ...f, a: "You do. The page runs on your domain (for example yourbusiness.ae/ev-charger), the code and accounts are in your name, and hosting usually costs AED 0–75 a month. There's no platform you're locked into." } : f),
  techRows: base.techRows.map((r) => r.map((c) => c.replace("AED 99–575 a month", "AED 99–575 a month").replace("Wix, Squarespace, WordPress", "Wix, Squarespace, WordPress"))),
  ctaLead: "Send us the page your ads point to. On the call we'll walk through what's costing you leads and what we'd change first, even if you never hire us.",
  showcase: { eyebrow: "Pages we've built", head: "One offer. One page. One button.", lead: "Pick an offer to see the page and the phone version your ad clicks land on.", brands: ["voltwire", "apex", "maisonrose", "fixpoint", "ember"], phone: "detail" },
  ddEyebrow: "Built to turn a click into a call", techEyebrow: "The honest choice", procEyebrow: "From brief to live page", priceEyebrow: "Landing page pricing", faqEyebrow: "Landing page FAQ", faqHead: "Questions before you build a page.",
  relEyebrow: "Often paired with", relHead: "Get more from every lead.",
  guides: [{ slug: "google-ads-leads-not-converting-dubai", title: "Google Ads in Dubai: why clicks don't turn into calls" }],
} as Page;
