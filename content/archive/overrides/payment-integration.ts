import type { Page } from "../types";
import { payments } from "../services/payments";

// Working for process step 2 (rates from the comparison table / src/lib/calcs.ts GATEWAYS):
// AED 150,000/month, 500 payments, domestic cards.
//   Stripe: 150,000 x 2.9% = 4,350 + 500 x AED 1    = 4,850 a month
//   Telr:   150,000 x 2.49% = 3,735 + 500 x AED 0.5 + AED 99 plan = 4,084 a month
//   Difference 766 a month x 12 = AED 9,192 a year.

const PAY_PAIN_VIZ: Pick<Page["pains"][number], "bv" | "av">[] = [
  {
    bv: { t: "chat", name: "Volt & Wire · customers", color: "#25d366", msgs: [{ w: "in", t: "Can I transfer?", time: "9:14 AM" }, { w: "in", t: "Cash on collection ok?", time: "9:31 AM" }, { w: "in", t: "Bank transfer pending??", time: "Fri 4:05 PM" }, { w: "out", t: "Unpaid jobs: AED 36,200. Please send proof.", time: "Fri 4:20 PM" }] },
    av: { t: "chat", name: "Volt & Wire", color: "#25d366", msgs: [{ w: "out", t: "Your EV charger install is done. Pay securely here:", link: "Pay AED 4,550.00 · Volt & Wire", time: "2:10 PM" }, { w: "in", t: "Done! Thank you", time: "2:12 PM" }, { w: "out", t: "Receipt sent · VAT 5% included · Paid ✓", time: "2:12 PM" }] },
  },
  {
    bv: { t: "steps", title: "Ember Kitchen · Checkout", sub: "Step 3 of 5 · session expires in 02:14", steps: [["Payment error", "Card declined, try again", "x"], ["14 required fields", "Address, floor, landmark…", "x"], ["Create an account to continue", "Required", "x"], ["PayPal opens a new window", "Leave the page", "x"]] },
    av: { t: "dash", title: "Ember Kitchen · Checkout", sub: "One page · no account needed", kpis: [["Apple Pay", "Double-click to pay"], ["Tip", "10 / 12 / 15%"], ["Total", "AED 245.00"]], rows: [["Octopus + short rib", "AED 233.33", "l|x1"], ["VAT 5%", "AED 11.67", "l|Incl."], ["Pay with Apple Pay", "AED 245.00", "g|1 tap"]], head: ["ITEM", "AMOUNT", ""] },
  },
  {
    bv: { t: "doc", title: "Payouts_reconcile_OCT (final) v3.xlsx", sub: "Bookkeeper · 6 h a week", lines: [["14 Oct deposit", "tips??"], ["15 Oct deposit", "refund Kevin?"], ["16 Oct deposit", "#N/A"], ["AED 412.00", "WHERE IS THIS"]], total: ["Difference", "#VALUE!"] },
    av: { t: "dash", title: "FreshFold · Payouts", sub: "Emirates NBD ••2210 · Oct", kpis: [["Paid out", "AED 86,412.30"], ["Fees", "AED 2,894.10"], ["Matched", "100%"]], rows: [["14 Oct · AED 21,540", "Zoho Books", "g|Matched"], ["15 Oct · AED 22,115", "Zoho Books", "g|Matched"], ["16 Oct · AED 20,970", "Zoho Books", "g|Matched"]], head: ["DEPOSIT", "SYNCED TO", "STATE"] },
  },
];

const [t1, t2, t3, t4, t5] = payments.tabs;

export const PATCH: Partial<Page> = {
  pains: payments.pains.map((p, i) => ({ ...p, ...PAY_PAIN_VIZ[i] })),
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
