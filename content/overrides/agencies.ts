import type { Page } from "../types";
import { whitelabel as base } from "../services/whitelabel";

/** Gap-audit patch for /agencies (spec 2026-10-07-service-white-label-design.md, UAE values per localization spec §5/§8.13). Merge as {...page, ...PATCH}. */
export const PATCH: Partial<Page> = {
  pains: [
    { q: "\"Our freelancer went quiet two weeks before launch.\"", cost: "Launch pushed five weeks and AED 22,800 refunded to keep the account after a dev disappeared mid-project.", fix: "A team, not one person: nightly updates, a staging site that always works, a named backup developer and a project manager who answers in your Slack the same working day." },
    { q: "\"Our client asked for an app. We've never built one.\"", cost: "The reply sat in Drafts for 6 days and the client nearly went to another agency. Copperline proposal CL-118: app AED 80,800 + Foodics/Stripe AED 34,900 + loyalty AED 25,700 = AED 141,400.", fix: "A fixed wholesale price within 48 hours (here AED 87,400, margin AED 54,000, 38%). You add your margin and send it as your own." },
    { q: "\"Our only developer is booked until March.\"", cost: "AED 352,600 of signed work waiting on one person, who is working weekends.", fix: "A white-label team in five working days, under your name, starting Monday. It scales with your pipeline, month to month." },
  ],
  tabs: base.tabs.map((t, i) => {
    if (i === 0) return { ...t, fine: "No logo, credits or links from us in anything we build." };
    if (i === 3) return { ...t, fine: "Change requests in 24 h. We invoice you, never your client. Monthly, Net 15, AED. Partners keep 35–45% on average." };
    if (i === 4) return {
      ...t,
      fine: "Handover of code, docs and accounts within five working days if you stop.",
      viz: { t: "steps", title: "Contract clauses", sub: "Plain English", steps: [["No direct contact", "Unless you invite us"], ["Non-solicitation", "24 months after the last project"], ["You own the code", "From the first payment"]] },
    };
    return t;
  }),
  techRows: [
    base.techRows[0],
    base.techRows[1],
    base.techRows[3],
    ["Time to start", "5 working days", "2–4 months to hire", "1–2 weeks", "2–4 weeks"],
    ["If someone leaves", "Another team member picks it up next day", "Projects stop until you rehire", "You start over", "Depends"],
    ["What your client sees", "Only your name, everywhere", "Your team", "Often the freelancer's name", "Their name, overnight replies"],
    ["Who manages the work", "Our lead, with you in the loop", "You", "You", "You, mostly"],
    base.techRows[2],
    base.techRows[4],
  ],
  tiers: [
    base.tiers[0],
    { ...base.tiers[1], desc: "Lead + 2 developers + QA, ~480 h/month. A dedicated team that scales with your pipeline.", items: ["Lead, two developers and QA (~480 h/month)", "Joins your Slack, Jira and Figma", "Month to month", "Scale up or down in 30 days"] },
    base.tiers[2],
  ],
  faq: [
    base.faq[0],
    { q: "What stops you from taking my client?", a: "A 24-month non-solicitation clause in the contract. If a client contacts us directly, we send them back to you." },
    base.faq[1],
    base.faq[2],
    { q: "Can you join calls with my client?", a: "Yes, as your team (for example your dev lead), or we stay behind the scenes. Your choice, call by call." },
    base.faq[3],
    { q: "What happens when the client changes the scope?", a: "You get a wholesale price for the change within 24 hours, in writing, before any work starts." },
    base.faq[4],
    base.faq[5],
  ],
  related: [
    { k: "WEB APPS", name: "Web app development", p: "Portals and tools for your clients.", href: "/services/web-app-development" },
    base.related[2],
    base.related[0],
    base.related[3],
  ],
  indRow: ["Branding studios", "Marketing agencies", "SEO agencies", "Design studios", "Product studios", "Freelance PMs"],
  caseStudy: {
    brand: "ledgerly",
    label: "Northlight Studio · Dubai Design District (d3) (example project)",
    h: "A branding studio that turned down app work. Now it sells it.",
    problem: "Clients wanted the website and the app. With one developer, Northlight said no to six projects in 2025, about AED 770,000 of work.",
    built: "A white-label team of four (lead, two developers, QA) in Northlight's Slack, GitHub and Linear. Eleven projects launched under Northlight's name, including Maison Rose AED 154,000, Ember AED 141,400, Apex AED 198,000 and the Ledgerly MVP AED 352,000.",
    metrics: [["11", "projects launched under their name"], ["AED 1.78M", "new dev revenue in 18 months"], ["38–42%", "typical margin"]],
    quote: "Our clients think we hired a dev team. In a way, we did.",
    by: "Maya Torres, founder",
    viz: { t: "dash", title: "Pipeline", sub: "AED", kpis: [["Signed", "AED 352,600"], ["Margin", "42%"]], rows: [["Ledgerly MVP", "AED 352,000", "g|Live"]], head: ["PROJECT", "PRICE", ""] },
    viz2: { t: "phone", k: "ledgerly", kind: "lock" },
  },
};
