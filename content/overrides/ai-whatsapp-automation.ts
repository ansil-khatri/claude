import type { Page } from "../types";
import { ai } from "../services/ai";

// Spec AI7 values converted at about AED 3.67/USD: +$26k booked work/month -> +AED 96k.

export const PATCH: Partial<Page> = {
  tech: ["Arabic + English", "WhatsApp Business API", "OpenAI", "Claude", "Gemini", "Twilio Voice", "Your docs & data"],
  stage: {
    ...ai.stage,
    main: { t: "dash", title: "FreshFold · Conversations", sub: "app.freshfold.ae/inbox · 312 today · first reply 4 sec (was 2 h 10 min)", kpis: [["Today", "312"], ["Handled by AI", "84%"], ["Sent to team", "3"]], rows: [["WhatsApp · وين طلبي؟ رقم 2241", "ETA sent", "g|AI"], ["Web chat · Wedding dress cleaning?", "AED 690 quote", "g|AI"], ["Phone · Stain on a white shirt", "Sent to Nina", "y|Handoff"], ["WhatsApp · Move pickup to 8 AM", "Rescheduled", "g|AI"]], head: ["CONVERSATION", "RESULT", "BY"] },
    side: { t: "steps", title: "Handoff · Amy K.", sub: "Stain on a white shirt · AI summary for Nina", steps: [["Customer is upset about a stain", "Photo and order 2241 attached"], ["Suggested fix", "Free re-clean + AED 20 credit"], ["Approve, or reply myself", "Nina decides, the AI sends it"]] },
    cards: [
      { icon: "🤖", title: "Handled without staff", sub: "84% of conversations", style: { left: "-3%", bottom: "8%" } },
      { icon: "✓", title: "Answered at 2:14 AM · WhatsApp", sub: "Pickup moved to 8 AM", style: { right: "0%", top: "0%" }, dark: true },
    ],
  },
  faq: [
    ai.faq[0],
    ai.faq[1],
    ai.faq[2],
    { q: "Is our customer data used to train AI?", a: "Not by us. We don't use your customers' conversations to train any model, and each client's data is kept separate from every other client's. Whether an AI provider (OpenAI, Anthropic, Google) keeps or learns from data depends on the plan and settings on the account, so we use business or API accounts in your name with training switched off where the provider offers that, and we show you the setting. The assistant never needs card numbers: payments go through a secure pay link." },
    ai.faq[3],
    ai.faq[4],
    ai.faq[5],
  ],
  related: [
    ai.related[0],
    ai.related[1],
    ai.related[2],
    { k: "SAAS", name: "SaaS development", p: "An AI copilot inside your own product.", href: "/services/saas-development" },
    ai.related[3],
  ],
  caseStudy: {
    brand: "voltwire",
    label: "Volt & Wire · Abu Dhabi",
    h: "38% of calls came after 5 PM. Now every one gets answered.",
    problem: "The office closes at 5 PM. After-hours calls went to voicemail, and emergencies went to whoever answered first on Google.",
    built: "An AI receptionist on the main line plus website chat. It prices standard jobs, triages emergencies by safety and messages Carlos a summary. Live in 5 weeks.",
    metrics: [["100%", "of calls answered"], ["+AED 96k", "booked work a month"], ["2.4 h", "a day back for Erin"]],
    quote: "It asks the questions I'd ask. When someone smells burning, it tells them to switch off the breaker before anything else.",
    by: "Erin, Volt & Wire office manager",
    viz: { t: "dash", title: "office.voltwire.ae/calls", sub: "Last 30 days · 214 calls", kpis: [["Calls", "214"], ["Answered", "100%", "was 64%"], ["After 5 PM", "38%"]], rows: [["Tonight 9:41 PM · burning smell", "Breaker advice first", "r|Urgent"], ["Tonight 8:15 PM · EV charger quote", "AED 4,550 given", "g|Priced"], ["Tonight 7:02 PM · DB board tripping", "Booked 8 AM", "g|Booked"]], head: ["CALL", "OUTCOME", "STATE"] },
    viz2: { t: "chat", name: "Carlos · Volt & Wire", color: "#facc15", day: "Today", msgs: [{ w: "in", t: "🔴 URGENT · Linda Park, Khalifa City. Burning smell from the DB board. Told to switch off the breaker. Booked 7:30 AM, AED 330 call-out approved.", time: "9:41 PM" }, { w: "out", t: "On it. 👍", time: "9:42 PM" }] },
  },
};
