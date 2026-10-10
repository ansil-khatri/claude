# Service Page: Payment Integration — Design Spec

- **Date:** 2026-10-07
- **Status:** Mockup built, waiting for owner review
- **Route:** `/services/payment-integration`
- **Reference mockup:** `docs/superpowers/mockups/service-payments.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` (design system §3, template §5, accessibility/responsive §6). Only page-specific content is recorded here.

**Story:** your customers want to pay, stop making it hard → three collection problems (chasing, checkout drop-off, payouts that don't match) → how each industry gets paid → what we set up from tap to bank → which provider → live in days, fully set up in 3 weeks → proof → price → objections → payments planning call.

**Mockup mix:** light owner dashboards (invoices, deposits, payouts, disputes), phone checkouts and receipts, **iOS Apple Pay sheet** ("Double Click to Pay" → Face ID → Done), Klarna pay-in-4 sheet, iMessage text-to-pay, a long legacy checkout form, and an Excel reconciliation sheet as "before". Class prefix for this page: `pay-`.

---

## PY1 · Hero (dark panel)
- **Breadcrumb:** Services / Payment Integration
- **H1:** "Your customers want to pay. **Stop making it hard.**"
- **Sub:** Apple Pay, pay-later, deposits, subscriptions and payment links by text, set up properly from checkout to bank. The money lands in your account and your books match.
- **CTAs:** Book a free call · See pricing
- **Tech chips:** Stripe · PayPal · Apple Pay · Google Pay · Klarna · Afterpay · N-Genius · Saferpay
- **Visual:** Apex Auto Works Invoices (`shop.apexautoworks.com/invoices`, "Sent as a text with a pay link"): 82% paid by text link within 24 h, 0.6 days to get paid (was 9), $14,200 pay-later sales (Klarna + Affirm), $1,180 unpaid; table INV-4821–4824 with method badges (Apple Pay, Klarna 4 × $460, Affirm 12 months); side panel "INV-4822 · Klarna" (customer pays 4 × $460, Klarna pays you $1,840, fee −$69.18, in your bank tomorrow). Phone: sequence checkout ($418 Porsche brake service) → **Apple Pay sheet** → receipt "Thanks, Sarah. Your keys are at the front desk."
- **Floating cards:** "Payment received · $418.00 · Apple Pay" · "Paid by text link · 82% within a day" · "Payout · tomorrow · $12,480 → Chase ••2210".

## PY2 · Sound familiar? "Money that's hard to collect."

| Quote | Before | After | Cost (red) | Fix |
|---|---|---|---|---|
| "Customers pay by Zelle, Venmo, cash, whatever they have." | iMessage list ("Venmo ok?", "Is check ok?", "Zelle says pending??") + thread with Tom: Zelle $1,000 limit, a week later "Oh right!! Venmo ok?" | Same thread with a branded pay-link card "Pay $1,240.00 · Volt & Wire" → "Done!" → receipt text; list shows "Paid ✓" for everyone | $9,860 sitting in unpaid jobs; every Friday spent texting people for money. | Every invoice goes out as a text with a pay link. 82% paid within a day. |
| "People fill their cart, then leave at checkout." | Ember Kitchen checkout step 3 of 5: payment error, 14 required fields, "Create an account to continue (required)", PayPal opens a new window, "session expires in 02:14" | One-page checkout: items, tip 18/20/25%, total $91.50, Apple Pay / Google Pay up top, Link autofill, "no account needed" | 68% of online orders never paid: 5 steps, 14 fields, no Apple Pay. | One page, one tap. Paid orders from 32% to 61% of carts. |
| "The deposits never match what we sold." | Excel `Payouts_reconcile_OCT (final) v3.xlsx`: diffs "tips??", "refund Kevin?", `#N/A`, `#VALUE!`, "$412.00 WHERE IS THIS" | FreshFold Payouts: $86,412.30 paid out, $2,894.10 fees, $612 refunds, **100% matched**; deposits Oct 14–17 all "Matched" | One lump payout minus fees, refunds and tips; bookkeeper spends 6 h/week matching. | Every payout split into sales, tips, fees and refunds, already matched in QuickBooks. |

## PY3 · Showcase: "Every business gets paid differently."
- **Lead:** On the big screen is what the owner sees. On the phone is what their customer taps.
- **Stage:** owner dashboard + phone sequence (checkout → Apple Pay/Klarna → receipt).

| Tab | Brand · model | Results | Chips | Owner screen | Phone |
|---|---|---|---|---|---|
| Salons & spas | Maison Rose · deposits at booking | −64% no-shows · 71% pay with Apple Pay | Deposits at booking, Saved cards, Tips by stylist, Late-cancel fees | Deposits & payments ($6,120 deposits, $1,140 late-cancel fees, refund on 48h notice) + payout split incl. tips to stylists | $85 deposit checkout → Apple Pay → "You're booked" |
| Restaurants | Ember Kitchen · commission-free ordering | $0 commission per order · $13k kept in October | Apple Pay + Google Pay, Tips at checkout, Nightly payouts, One-click refunds | Online orders + "Saved vs delivery apps" | Pickup checkout |
| Auto shops | Apex Auto Works · text-to-pay + pay-later | 82% paid by text within a day · $14.2k pay-later/mo | Text-to-pay, Klarna + Affirm, QuickBooks sync, Dispute evidence | Invoices | Honda CR-V $1,840 → Klarna pay in 4 |
| Home services | Volt & Wire · deposits on estimates | 64% estimates approved (was 41%) · $38k deposits this month | Deposit on approval, Saved card for balance, Affirm financing, E-signature | Estimates & deposits (E-1188 Dana Kim $720) | Panel upgrade 200A estimate + deposit |
| Laundry | FreshFold · charged by weight | 1,920 orders charged by weight · $2,140 failed cards recovered | Hold then charge, Saved cards, Automatic retries, Email receipts | Charges (84% … 0.4% …) | "Weighed and charged" receipt |
| SaaS | Ledgerly · subscription billing | $48k MRR · $3,140 recovered from failed cards | Plans + trials, Upgrades + proration, Failed-card retries, Invoices + tax | Business overview + revenue by plan | "Upgrade your plan" |

## PY4 · What we set up (dark panel, 5 tabs): "From the tap to your bank account."

| # | Tab · chip | Headline | Fine print | Mockup |
|---|---|---|---|---|
| 01 | One-tap checkout · Apple Pay · Google Pay · Link · Cards | One tap instead of sixteen digits. | One setup, one set of receipts for all methods. | Ember Kitchen phone checkout → Apple Pay sheet (Apple Card) → receipt #5821; kitchen screen flips Waiting → Paid · Apple Pay, Not started → Cooking; toast "9 seconds from cart to paid · No account, no card number" |
| 02 | Pay over time · Klarna · Afterpay · Affirm · PayPal Pay Later | A $1,840 repair, in four easy payments. | Bigger tickets, fewer "let me think about it". | Apex CR-V estimate → Klarna "Pay in 4, interest-free" → "First of 4 payments made" + owner card (receives $1,840, fee −$69.18, missed payment = Klarna's risk) + toast "Average repair ▲ 38% since adding pay-later" |
| 03 | Pay links by text · Text-to-pay · Invoices · Deposits · Saved cards | Send the bill as a text. Get paid before they leave. | Polite reminders after 1 and 3 days. | iMessage from Apex ("your 911 is ready… Pay here") → checkout → Apple Pay → receipt |
| 04 | Payouts that match · QuickBooks · Xero · Fees · Refunds · Tips | Every payout explained, line by line. | Done with webhooks, the part most developers skip. | FreshFold payouts with sales/tips/fees/refunds columns + toast "Matched in QuickBooks · Oct 15 payout · 46 lines" |
| 05 | Fraud & disputes · 3D Secure · Fraud rules · Dispute evidence · PCI | Stop bad payments. Win the disputes you should. | Card details never touch your servers; PCI stays a short self-assessment. | Apex Disputes: 0.06% of payments, won 7 of 8 ($3,912 kept), blocked as risky; evidence checklist sent 19 days before deadline (signed estimate, photos, texts, Apple Pay with Face ID, pickup signature) |

## PY5 · Honest choice: "Stripe, PayPal, Square or a local gateway? It depends on where and how you sell."
Lead: many businesses use two: Stripe for cards and wallets, plus a PayPal button.

| | **Stripe** (recommended) | PayPal · Checkout · Braintree | Square | Regional gateway · N-Genius (UAE) · Saferpay (Europe) |
|---|---|---|---|---|
| Best for | Online businesses, apps, SaaS | Customers who prefer PayPal | Shops that also take in-person payments | UAE, Switzerland, Europe |
| Typical US online fee | 2.9% + 30¢ | 3.49% + 49¢ | 2.9–3.3% + 30¢ | Agreed with your bank |
| Apple Pay & Google Pay | Yes, one setup | Yes | Yes | Yes, through the gateway |
| Pay later | Klarna, Afterpay, Affirm | PayPal Pay Later | Afterpay | Depends on the bank |
| Subscriptions & invoices | ●●●●● | ●●● | ●●● | — |
| Money in your bank | 2 business days, or instant | Instant to PayPal balance | Next business day | 1–3 business days |

Note under table: "Published US rates in 2026. Check current pricing before you choose."

## PY6 · Process: "Live in days. Fully set up in 3 weeks." (eyebrow: From first call to first payment)
| Step | When | Title | Visual |
|---|---|---|---|
| 01 | Days 1–3 | Map how money comes in | Ways customers pay · $9,860 unpaid · $31,200 fees last year · hours/week chasing |
| 02 | Week 1 | Pick the right provider (real fees on your sales; accounts in your name) | Fees on $40k/mo, 500 payments: PayPal $1,641 vs Stripe $1,310 → "You keep $3,972 more a year" |
| 03 | Weeks 1–2 | Build checkout and pay links | Ember one-page checkout |
| 04 | Week 2 | Connect your books | `payout.paid $4,204.75` → split → QuickBooks 46 lines matched |
| 05 | Week 3 | Test every way it can fail | Pills: Declined card, 3D Secure, Refund, Dispute, Webhook retry ✓ |
| 06 | Live | Go live and watch | First real payments watched together |

## PY7 · Case study (dark): Maison Rose · Austin, TX
- **H3:** No-shows used to cost $4,100 a month. Now they pay a deposit.
- **Problem:** one in six clients missed 3-hour color appointments; taking cards by phone felt awkward.
- **Built:** $85 Apple Pay deposit at booking, saved card for late cancellations, tips at checkout, payouts split by stylist. Live in 3 weeks.
- **Metrics:** −64% no-shows · $4,100 saved every month · 71% pay with Apple Pay
- **Quote:** "Clients don't mind the deposit. The ones who did were the ones who never showed up."
- **Mockups:** deposits dashboard + deposit checkout phone sequence.

## PY8 · Pricing: "Fixed price. Agreed before we start."
Lead adds: "Provider fees are paid to them, never through us."

| Tier | Price (placeholder) | Includes | Time |
|---|---|---|---|
| Get paid online · Checkout & pay links | from **$990** (homepage Add-on) | Stripe or PayPal setup, Apple Pay + Google Pay, pay links by text/email, receipts + refunds | Live in days |
| **Most chosen · Complete payments** | from **$6,500** | + Klarna/Afterpay/Affirm, deposits/saved cards/subscriptions, QuickBooks or Xero sync, fraud rules + dispute evidence | 3–4 weeks |
| Platform · Marketplaces & international | from **$14,000** | Split payouts to staff/vendors, multi-currency, N-Genius or Saferpay, moving saved cards, usage-based billing | — |

**What changes the price:** payment methods · subscriptions · payouts to staff or vendors · moving saved cards · accounting sync · countries and currencies.

## PY9 · FAQ: "Questions before you change how you get paid."
1. Does the money go through you? (never; your account, straight to your bank)
2. Do we need to worry about PCI compliance? (much less; short self-assessment, we fill it in with you)
3. Can you move our saved cards from Square or PayPal? (usually, via provider-run transfer)
4. With pay-later, what if the customer doesn't pay? (provider's risk; fee typically 3–6%)
5. Will switching providers interrupt sales? (run in parallel, switch at a quiet time, can roll back in minutes)
6. Do you work outside the US? (N-Genius UAE, Saferpay Switzerland/Europe, multi-currency)

## PY10 · Often paired with: "Get more from every payment."
Business automation & ERP · SaaS development · Shopify development · Mobile apps. Industries: Salons & spas, Restaurants, Auto shops, Home services, Laundry, SaaS.

## PY11 · CTA + footer
"Chasing payments, or losing them at checkout? *30 minutes* and we'll map the fix." Widget: **Payments planning call**.

---

## Consistency with homepage (homepage wins)
All items below were **fixed in the mockup on 2026-10-07** unless marked "Owner to decide". Verified in headless Chrome: values render, no page errors.

| Item | Homepage | This mockup | Resolution |
|---|---|---|---|
| Entry price | Add-on **from $990**: "Stripe, PayPal, Apple Pay or Klarna", "Live in days" | Checkout & pay links from $2,400, 1–2 weeks | Change the first tier to from $990 · live in days. Complete payments ($6,500, 3–4 weeks) and Platform stay as they are. |
| Timeline | "A payment integration [can be live] in days" | Process headline "About 3 weeks" | Reword the headline so the first payment is live in days and full books/fraud setup takes ~3 weeks. |

## Open items (this page)
- Real prices; Platform tier has no timeline.
- Provider fees in the table and "$3,972 more a year" example must be re-checked against current published rates before launch.
- Booking-style UI (Maison Rose deposit) appears in both the showcase and the case study; consider swapping the case study to another brand if the owner flags it against the "booking at most once" rule.
- Confirm the owner actually offers N-Genius and Saferpay work now that UAE is out of scope.
