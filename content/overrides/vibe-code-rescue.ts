import type { Page } from "../types";
import { rescue as base } from "../services/rescue";

/** Gap-audit patch for /services/vibe-code-rescue (spec 2026-10-07-service-vibe-rescue-design.md, UAE values per localization spec §5/§8.12). Merge as {...page, ...PATCH}. */
export const PATCH: Partial<Page> = {
  tech: ["Lovable", "Bolt", "v0", "Replit", "Cursor", "Supabase", "Firebase", "Next.js", "React", "Stripe", "Vercel"],
  pains: [
    ...base.pains,
    { q: "\"It worked with 20 customers. With 400, it crashes every morning.\"", cost: "Apex's quote page took 9 seconds and the app crashed at 8 AM. About one customer in three gave up, and a 1-star review followed.", fix: "Queries fixed, caching and proper hosting. Apex's quote page now loads in 0.6 s (was 9.4 s) and held a 5,000-user load test." },
  ],
  tabs: base.tabs.map((t, i) => {
    if (i === 1) return { ...t, h: "Customers only ever see their own data.", fine: "A short security summary you can send to customers." };
    if (i === 2) return { ...t, h: "When a card is charged, the account changes. Every time." };
    if (i === 3) return { ...t, h: "Fast on a phone, fast at the morning rush.", fine: "Before and after measured the same way. Hosting from AED 75–550 a month." };
    if (i === 4) return { ...t, h: "Keep building in Lovable or Cursor. Just with a safety net.", fine: "A handover doc so any developer can pick it up." };
    return t;
  }).map((t, i) => (i === 0 ? { ...t, h: "Find out what's really wrong before you spend another dirham.", fine: "If a rebuild is cheaper, the report says so and why. Free, no obligation; NDA first if you like." } : t)),
  techRows: [
    base.techRows[0],
    base.techRows[1],
    ["Keeps your work", "●●●●", "●●●●●", "Low", "●●●●"],
    base.techRows[2],
    ["Security & payments checked", "Yes, with a written report", "Not really", "Yes", "Only what you ask"],
    base.techRows[3],
    ["Who owns it", "You: code, data, accounts", "You, on their platform", "You", "You, if the contract says so"],
    base.techRows[4],
  ],
  techNote: "Typical UAE prices in 2026. AI builder credits and hosting are paid by you directly, never marked up by us.",
  faq: [
    { q: "Will you just rewrite everything?", a: "No. We usually keep 70–90% of the code. If a rebuild would be cheaper, the audit says so and why." },
    ...base.faq.slice(0, 1),
    { q: "Will paying users notice?", a: "Only that things stop breaking. We work on a copy, test on a staging site, release in quiet hours and can roll back in one click." },
    ...base.faq.slice(1, 4),
    { q: "Who owns the code?", a: "You. The code, data and every account (GitHub, hosting, database, Stripe) are in your name and documented." },
    ...base.faq.slice(4),
  ],
  caseStudy: {
    brand: "ledgerly",
    label: "PromptPilot · Dubai (example project)",
    h: "Built in Lovable over six weekends. Then 1,200 people signed up in a day.",
    problem: "A Product Hunt launch brought 1,200 sign-ups in a day. Logins failed, users could read each other's drafts, and a leaked OpenAI key ran up an AED 8,450 bill.",
    built: "A 48-hour audit, then three weeks of fixes on a copy: security rules on every table, keys on the server, Stripe verified, 142 tests and a staging site. Maya still makes small changes in Lovable.",
    metrics: [["38 → 96", "audit score"], ["AED 0", "surprise AI bills since"], ["3 weeks", "to relaunch"]],
    quote: "I thought I'd have to start over. They kept most of what I built and made it safe to sell.",
    by: "Maya, founder",
    viz: { t: "dash", title: "PromptPilot · Overview", sub: "Dubai", kpis: [["Paying users", "1,140"], ["MRR", "AED 83,300"], ["AI spend", "AED 140 / 440"]], rows: [["Errors this week", "0 (was 412)", "g|OK"], ["Audit score", "96 (was 38)", "g|Safe"]], head: ["ITEM", "VALUE", ""] },
    viz2: { t: "phone", k: "ledgerly", kind: "home" },
  },
};
