import type { Page } from "../types";
import type { VizSpec } from "../../src/components/mock/Viz";
import { einvoice as base } from "../services/einvoice";

const PAIN_VIZ: { bv: VizSpec; av: VizSpec }[] = [
  { bv: { t: "dash", title: "Where invoices come from", sub: "Peak Cooling · October", kpis: [["Sources", "3"], ["Formats", "3"], ["Sent to an ASP", "0"]], rows: [["Zoho Books", "Contracts", "y|PDF only"], ["Walk-in POS", "Receipts", "r|No link"], ["Excel", "One-off jobs", "r|Manual"]], head: ["SOURCE", "USED FOR", "STATUS"] },
    av: { t: "steps", title: "One connection, one status screen", sub: "Peak Cooling · PINT AE", steps: [["Zoho Books", "Connected", "p"], ["Walk-in POS", "Connected", "p"], ["Excel import", "Connected", "p"], ["Your ASP", "1,284 invoices this month, 0 rejected", "p"]] } },
  { bv: { t: "code", file: "ASP rejection log · Sandbox", lines: ["// 3 of 12 invoices rejected", "- INV-5531 REJECTED: buyer TRN missing", "- INV-5534 REJECTED: buyer TRN missing", "- INV-5537 REJECTED: invalid TRN length", "// Customer list: 212 blank TRNs"] },
    av: { t: "bars", title: "Customer data quality", sub: "After clean-up", rows: [["TRN present", 41, "41% before"], ["TRN present", 96, "96% now", "#c8f542"], ["Incomplete invoices", 0, "Blocked before send", "#c8f542"]] } },
  { bv: { t: "code", file: "legacy-billing/invoice.php", lines: ["// Last edited: 2019 · no docs", "- $out = generate_pdf($order);", "- // TODO: ask Rashid about VAT", "- no TRN field, no PINT AE format", "// Developer left. Deadline: 1 July 2027"] },
    av: { t: "steps", title: "INV-5528 · via small connector", sub: "Old system untouched", steps: [["Created in billing system", "11:42", "p"], ["Converted to PINT AE", "Checked", "p"], ["Sent to ASP", "Accepted", "p"], ["Delivered to buyer", "Done", "p"]] } },
];

/** Pains with before/after mockups for /services/e-invoicing-integration (spec 2026-10-09 N8). Merge as {...page, ...PATCH}. */
export const PATCH: Partial<Page> = {
  pains: base.pains.map((p, i) => ({ ...p, ...PAIN_VIZ[i] })),
};
