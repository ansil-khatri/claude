import type { Page } from "../types";
import { automation } from "../services/automation";

const rows = automation.techRows;
const fitsIdx = rows.findIndex((r) => r[0].startsWith("Fits your process"));

export const PATCH: Partial<Page> = {
  techRows: [
    ...rows.slice(0, fitsIdx + 1),
    ["As you grow", "Add what you need", "Gets messy past about 40 automations", "Only where the vendor goes", "Yes, at a price"],
    ...rows.slice(fitsIdx + 1),
  ],
  techNote: "App and hosting fees are paid by you directly, never marked up by us. Published prices in 2026; check current pricing before you choose.",
  priceLead: "Typical starting points. Your exact price comes in writing within 48 hours of our call. Hosting and app fees are billed at cost, usually AED 190–1,100/mo. Prices exclude 5% VAT.",
  faq: [
    automation.faq[0],
    automation.faq[1],
    { q: "What happens to our old spreadsheets?", a: "We import them and leave the originals untouched. Customers, items, open invoices and stock are cleaned on the way in, then old and new run side by side for about two weeks. Nothing is switched off until the numbers match." },
    { q: "What if my team won't use it?", a: "It is built around each role, so a technician sees only their day and an accountant sees invoices. We sit in with your team on the first days, record short walkthrough videos, and watch usage so we can fix whatever people avoid." },
    { q: "Is Zapier enough for us?", a: "Often, yes, up to roughly 20 automations between apps you already pay for. We will say so honestly and build it for you or point you to the tool. A custom system makes sense once the process itself is what sets you apart, or the automations start to tangle." },
    automation.faq[2],
    automation.faq[3],
    automation.faq[4],
    automation.faq[5],
    { q: "What does it cost to run each month?", a: "Hosting and app fees are billed at cost, usually AED 190–1,100 a month depending on size and which tools you connect. There is no per-user fee, and we show you the estimate before we build." },
  ],
  related: [
    automation.related[0],
    automation.related[1],
    automation.related[2],
    { k: "MOBILE", name: "Mobile apps", p: "Staff and customer apps on top of the same data.", href: "/services/mobile-app-development" },
    automation.related[3],
  ],
};
