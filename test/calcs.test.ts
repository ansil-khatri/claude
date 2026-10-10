import test from "node:test";
import assert from "node:assert";
import * as c from "../src/lib/calcs.ts";

test("aed formats whole dirhams", () => {
  assert.strictEqual(c.aed(17700), "AED 17,700");
  assert.strictEqual(c.aed(-5), "AED 0");
  assert.strictEqual(c.aed(NaN), "AED 0");
});
test("deliveryCommission: Ember example", () => {
  const r = c.deliveryCommission({ ordersPerMonth: 512, avgOrder: 138, commissionPct: 30, promoPerMonth: 2640, directSharePct: 30 });
  assert.strictEqual(Math.round(r.appSalesYear), 847872);
  assert.strictEqual(Math.round(r.commissionYear), 286042);
  assert.strictEqual(Math.round(r.keptYear), 68932);
});
test("deliveryCommission: empty inputs give zeros", () => {
  const r = c.deliveryCommission({});
  assert.deepStrictEqual([r.appSalesYear, r.commissionYear, r.keptYear], [0, 0, 0]);
});
test("gatewayFees: AED 150k example, cheapest first", () => {
  const r = c.gatewayFees({ sales: 150000, payments: 500, intlSharePct: 0 });
  assert.strictEqual(Math.round(r.find((g) => g.name === "Stripe")!.monthly), 4850);
  assert.strictEqual(Math.round(r.find((g) => g.name === "Telr (Medium plan)")!.monthly), 4084);
  assert.ok(r[0].monthly <= r[r.length - 1].monthly);
});
test("gatewayFees: extremes stay finite", () => {
  for (const g of c.gatewayFees({ sales: 1e9, payments: 1e6, intlSharePct: 100 })) assert.ok(Number.isFinite(g.yearly));
});
test("einvoiceDeadline by revenue band", () => {
  assert.deepStrictEqual(c.einvoiceDeadline("50m+"), { asp: "30 October 2026", live: "1 January 2027" });
  assert.deepStrictEqual(c.einvoiceDeadline("under50m"), { asp: "31 March 2027", live: "1 July 2027" });
});
test("readinessScore", () => {
  const all = { aspChosen: "yes", softwareReady: "yes", trnsComplete: "all", sources: "one", owner: "yes", tested: "yes" };
  assert.deepStrictEqual(c.readinessScore(all), { score: 100, todo: [] });
  const none = c.readinessScore({});
  assert.strictEqual(none.score, 0);
  assert.strictEqual(none.todo.length, 6);
});
test("appCost: MVP booking = AED 35,000 tier", () => {
  const r = c.appCost({ type: "booking", platforms: "both", features: [], design: "template" });
  assert.strictEqual(r.low, 35000);
  assert.ok(r.high > r.low);
  assert.ok(r.weeks >= 6);
});
test("appCost: unknown type falls back, features add cost", () => {
  const base = c.appCost({ type: "nope", platforms: "both", features: [], design: "template" });
  const more = c.appCost({ type: "booking", platforms: "both", features: ["payments", "tracking"], design: "custom" });
  assert.strictEqual(base.low, 35000);
  assert.ok(more.low > base.low);
});
