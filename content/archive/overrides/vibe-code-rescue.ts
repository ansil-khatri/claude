import type { Page } from "../types";
import type { VizSpec } from "../../src/components/mock/Viz";
import { rescue as base } from "../services/rescue";

const RESCUE_PAIN_VIZ: { bv: VizSpec; av: VizSpec }[] = [
  { bv: { t: "chat", name: "Lovable · freshfold-app", sub: "12 of 500 credits left", color: "#7c5cff", day: "Try #23", msgs: [{ w: "out", t: "Login is broken AGAIN. Fix it and don't touch anything else.", time: "9:02 PM" }, { w: "in", t: "I apologize for the confusion! Fixed the login. (BookingPage now throws a TypeError.)", time: "9:03 PM" }, { w: "out", t: "Now the booking page is blank!!", time: "9:04 PM" }] },
    av: { t: "steps", title: "PR #48 · Fix blank booking page", sub: "Merged · live since 11:42 AM", steps: [["142 unit tests", "Passed", "p"], ["18 flow tests", "Passed", "p"], ["Security scan", "0 secrets found", "p"], ["Vercel preview", "Approved · 0 errors", "p"]] } },
  { bv: { t: "doc", title: "OpenAI usage alert · Today 6:12 AM", sub: "promptpilot-prod", lines: [["Monthly limit", "AED 185"], ["Spent so far", "AED 7,020"], ["Key found in", "Browser bundle"]], total: ["Over limit by", "AED 6,835"] },
    av: { t: "dash", title: "AI spend · PromptPilot", sub: "Key on server · rate limits on", kpis: [["Spend", "AED 140"], ["Limit", "AED 440"], ["Alerts", "At 80%"]], rows: [["Key location", "Server only", "g|Safe"], ["Per-user limit", "50 calls / day", "g|On"], ["Surprise bills", "0 since", "g|OK"]], head: ["CHECK", "NOW", ""] } },
  { bv: { t: "code", file: "security-scan · book.maisonrose.ae", lines: ["// 4 findings · 2 critical", "- CRITICAL GET /rest/v1/clients?select=*", "- 2,310 rows with phones, no login needed", "- CRITICAL OpenAI key found in browser bundle", "- HIGH /admin open to everyone"] },
    av: { t: "dash", title: "Security check · book.maisonrose.ae", sub: "Scanned nightly · last 2:00 AM", kpis: [["Critical", "0"], ["Public records", "0"], ["Fixed", "4 / 4"]], rows: [["Client list", "Row-level rules", "g|FIXED"], ["AI key", "Moved to server", "g|FIXED"], ["/admin", "Staff login only", "g|FIXED"]], head: ["FINDING", "NOW", "STATUS"] } },
  { bv: { t: "code", file: "hosting log · apex-quotes", lines: ["// 8:00 AM · Dubai", "- 502 Bad Gateway  /quote  11.2 s", "- Error: too many connections", "- FATAL heap out of memory", "- 3 crashes today · 9.4 s average"] },
    av: { t: "bars", title: "Apex quotes · health", sub: "Load test: 5,000 users passed", rows: [["Quote page", 6, "0.6 s", "#c8f542"], ["Before", 94, "9.4 s"], ["Crashes a day", 0, "0 (was 3)", "#c8f542"], ["Quotes approved", 71, "46 · 71% by text", "#c8f542"]] } },
];

/** Gap-audit patch for /services/vibe-code-rescue (spec 2026-10-07-service-vibe-rescue-design.md, UAE values per localization spec §5/§8.12). Merge as {...page, ...PATCH}. */
export const PATCH: Partial<Page> = {
  tech: ["Lovable", "Bolt", "v0", "Replit", "Cursor", "Supabase", "Firebase", "Next.js", "React", "Stripe", "Vercel"],
  pains: [
    ...base.pains,
    { q: "\"It worked with 20 customers. With 400, it crashes every morning.\"", cost: "Apex's quote page took 9 seconds and the app crashed at 8 AM. About one customer in three gave up, and a 1-star review followed.", fix: "Queries fixed, caching and proper hosting. Apex's quote page now loads in 0.6 s (was 9.4 s) and held a 5,000-user load test." },
  ].map((p, i) => ({ ...p, ...RESCUE_PAIN_VIZ[i] })),
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
