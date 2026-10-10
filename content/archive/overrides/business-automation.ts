import type { Page } from "../types";
import type { VizSpec } from "@/components/mock/Viz";
import { automation } from "../services/automation";

const rows = automation.techRows;
const fitsIdx = rows.findIndex((r) => r[0].startsWith("Fits your process"));

const PAIN_VIZ: { bv: VizSpec; av: VizSpec }[] = [
  {
    bv: { t: "doc", title: "Inventory_MASTER_v12_SHARE (3).xlsx", sub: "Last edited Sun 11:48 PM", lines: [["Octopus (kg)", "#REF!"], ["Short rib (kg)", "ORDER!!"], ["Walk-in · Luigi's copy says", "10"]], total: ["Counted by hand", "4 h / week"] },
    av: { t: "bars", title: "Ember Kitchen · Stock", sub: "Counts drop with every Foodics sale", rows: [["Octopus", 72, "18 kg"], ["Short rib", 45, "26 kg"], ["Burrata", 14, "PO-1182 ✓", "#f59e0b"]] },
  },
  {
    bv: { t: "dash", title: "A/R Aging · FreshFold Laundry LLC", sub: "Over 30 days · AED 67,600", kpis: [["Over 30 days", "AED 67,600", "14 accounts"], ["Process", "Ask Nina"]], rows: [["Marina Gate Hotel", "AED 14,200", "r|47 days"], ["JBR Fitness Club", "AED 9,850", "r|38 days"], ["Bay View Suites", "AED 7,300", "r|33 days"]], head: ["ACCOUNT", "OWED", "LATE"] },
    av: { t: "steps", title: "Invoices & reminders · business accounts", sub: "Over 30 days late: AED 4,200 (was AED 67,600)", steps: [["Invoice sent on delivery day", "Marina Gate Hotel · AED 14,200"], ["WhatsApp reminder", "Day 7, 14 and 21"], ["14 payments matched in Zoho Books", "Bank transfers reconciled"], ["Still late at 20 days", "Sent to Nina's inbox", "x"]] },
  },
  {
    bv: { t: "chat", name: "V&W Crew 🔌", sub: "Mohammed, Omar, Raj, Carlos, Erin", color: "#facc15", day: "Today", msgs: [{ w: "in", t: "which Khalifa City villa was it again?", time: "7:02 AM" }, { w: "in", t: "who has the 200A breaker?", time: "7:04 AM" }, { w: "in", t: "I'm at the Al Reem job too, who sent me here?", time: "7:11 AM" }, { w: "in", t: "did anyone call the Park lady back??", time: "7:15 AM" }] },
    av: { t: "dash", title: "Dispatch · Tue 13 Oct", sub: "4 vans · 7 AM–3 PM", kpis: [["Jobs", "9"], ["Double-booked", "0"], ["Callbacks", "1"]], rows: [["Omar · Khalifa City villa 14", "200A kit loaded", "g|7:30"], ["Raj · Al Reem Island", "Photos required", "b|10:00"], ["Callback: Linda Park", "Scheduled", "y|1:00"]], head: ["TECH · JOB", "NOTES", "TIME"] },
  },
];
export const PATCH: Partial<Page> = {
  pains: automation.pains.map((p, i) => ({ ...p, ...PAIN_VIZ[i] })),
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
