import { test } from "node:test";
import assert from "node:assert/strict";
import { shopifyCost } from "../src/lib/shopify-cost.ts";

test("launch store starts at the published AED 9,900", () => { assert.equal(shopifyCost({}).low, 9900); });
test("Arabic is an add-on on launch, included on custom", () => {
  assert.equal(shopifyCost({ tier: "launch", arabic: true }).low, 13400);
  assert.equal(shopifyCost({ tier: "custom", arabic: true }).low, 29000);
});
test("add-ons stack and the range is above the floor", () => {
  const r = shopifyCost({ tier: "custom", bnpl: true, migration: "small", markets: 2, integrations: 1 });
  assert.equal(r.low, 29000 + 1500 + 4500 + 4000 + 3500);
  assert.ok(r.high > r.low);
});
test("inputs are clamped", () => { assert.equal(shopifyCost({ markets: 99, integrations: -4 }).low, 9900 + 5 * 2000); });
