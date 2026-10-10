import { test } from "node:test";
import assert from "node:assert/strict";
import { websiteCost, replyRoi, erpVerdict } from "../src/lib/calc-tools.ts";

test("business site starts at AED 7,900 with 8 pages included", () => {
  const r = websiteCost({}); assert.equal(r.low, 7900); assert.equal(r.included, 8);
});
test("extra pages, Arabic and integrations add up", () => {
  const r = websiteCost({ tier: "business", pages: 12, arabic: true, integrations: 1 });
  assert.equal(r.low, 7900 + 4 * 500 + 3500 + 4000);
});
test("Arabic is included on custom sites", () => { assert.equal(websiteCost({ tier: "custom", arabic: true }).low, 19900); });
test("reply ROI: 40 msgs, 60% repetitive, 70% automated, 3 min, AED 45/h", () => {
  const r = replyRoi({}); assert.equal(r.handledPerDay, 17); assert.ok(r.hours > 15 && r.hours < 20); assert.ok(r.payback !== null);
});
test("reply ROI never divides by zero", () => { assert.equal(replyRoi({ perDay: 0 }).payback, null); });
test("erp verdict bands", () => {
  assert.equal(erpVerdict([true, false, false, false, false, false, false, false]).level, "excel");
  assert.equal(erpVerdict([true, true, true, true, false, false, false, false]).level, "automate");
  assert.equal(erpVerdict(Array(8).fill(true)).level, "erp");
});
