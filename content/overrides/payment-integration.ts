import type { Page } from "../types";
import { payments } from "../services/payments";

// Working for process step 2 (rates from the comparison table / src/lib/calcs.ts GATEWAYS):
// AED 150,000/month, 500 payments, domestic cards.
//   Stripe: 150,000 x 2.9% = 4,350 + 500 x AED 1    = 4,850 a month
//   Telr:   150,000 x 2.49% = 3,735 + 500 x AED 0.5 + AED 99 plan = 4,084 a month
//   Difference 766 a month x 12 = AED 9,192 a year.

const [t1, t2, t3, t4, t5] = payments.tabs;

export const PATCH: Partial<Page> = {
  tabs: [
    {
      ...t1,
      chip: "Apple Pay · Google Pay · Link · Cards",
      fine: "Card, Apple Pay, Google Pay, Link and saved-card checkout all run through one setup and one set of receipts.",
      viz: { t: "dash", title: "Ember Kitchen · Kitchen screen", sub: "Order #5821 · paid with Apple Pay", kpis: [["From cart to paid", "9 seconds", "No account, no card number"], ["Receipt", "#5821"], ["Paid with", "Apple Pay"]], rows: [["#5821 · Octopus + short rib", "Waiting → Paid · Apple Pay", "g|Paid"], ["#5821 · Kitchen", "Not started → Cooking", "y|Cooking"]], head: ["ORDER", "PAYMENT", "KITCHEN"] },
    },
    t2, t3, t4,
    {
      ...t5,
      viz: { t: "dash", title: "Apex Auto Works · Disputes", sub: "Last 12 months · evidence sent 19 days before the deadline", kpis: [["Disputes", "0.06%", "of payments"], ["Won", "7 of 8", "AED 14,360 kept"], ["Blocked as risky", "Before they were charged"]], rows: [["Signed estimate + photos", "Attached", "g|Sent"], ["WhatsApp thread + receipt", "Attached", "g|Sent"], ["Apple Pay with Face ID", "Attached", "g|Sent"], ["Pickup signature", "Attached", "g|Sent"]], head: ["EVIDENCE", "FILE", "STATE"] },
    },
  ],
  proc: payments.proc.map((s) =>
    s.wk === "STEP 02"
      ? { ...s, p: "We compare fees on your real volume and open the accounts in your name. Example: AED 150,000 a month over 500 payments (domestic cards). Stripe: 2.9% = AED 4,350 + 500 × AED 1 = AED 4,850 a month. Telr Medium: 2.49% = AED 3,735 + 500 × AED 0.50 + AED 99 plan = AED 4,084 a month. You keep AED 9,192 more a year (AED 766 × 12) with Telr here. International cards, Tabby fees and a different mix can change the answer, so we check yours." }
      : s,
  ),
};
