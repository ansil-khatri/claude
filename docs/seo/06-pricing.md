# 06 · Pricing: market check and the price book

You asked me to set pricing from what the market charges. The homepage is the source of truth, so I checked its prices and every service page's tiers against 2025–2026 US market data. **Summary: the current prices are well positioned and I recommend keeping almost all of them.** I flag three that need a decision, and add the "typical total" ranges that the pages and the `/pricing` page should show.

## 1. Where we sit in the market

| Who | Typical US rate | Example: small business website | Example: business app |
|---|---|---|---|
| Offshore freelancer (Fiverr/Upwork) | $15–50/h | $500–2,000 | $5k–15k, high risk |
| US freelancer | ~$75–150/h | $1,500–8,000 | $20k–50k |
| US agency | ~$100–250/h | $6,000–25,000 | $40k–150k+ |
| **Us: senior remote studio, fixed price** | effective ~$45–70/h | **$3,900–8,900** | **$9,900–29,000** |

**Positioning line:** *"Agency-quality work at a fixed price, typically 40–60% below a US agency, without the freelancer risk."* We beat freelancers on reliability (team, process, fixed price, code ownership), and US agencies on price. Every price page should say what's included so "cheaper" never reads as "worse".

## 2. Market benchmarks behind each decision

| Service | US market (2025–26) | Our tiers (placeholders) | Verdict |
|---|---|---|---|
| Small business website | Freelancer $1.5–8k; boutique agency $6–12k; small-business median ~$5k (Clutch surveys) | $3,900 · $8,900 · $16,000 (WooCommerce) | ✅ Keep. Right in the middle. |
| Mobile app | Small businesses: ⅓ spend <$10k, ⅓ >$50k (Clutch); agency MVP $20–40k, mid $40–80k | $9,900 · **$14,900** · $29,000 | ✅ Keep. Aggressive but credible for Flutter + a studio. Show the typical total. |
| Custom web app | Agencies $25k–150k; internal tools $10–40k | $7,900 · $16,900 · $34,000 | ✅ Keep |
| SaaS MVP | Fixed-price agency $45–90k; offshore senior team $30–80k | $6,900 (prototype) · $34,000 · $70,000 | ✅ Keep. $34k is the low end of credible: state scope clearly. |
| Shopify | Freelancer $2–10k; agency $8–50k; migration $5–8k basic | $4,900 · $11,900 · $24,000 | ✅ Keep |
| Landing pages | $1,500–5,000 per page; CRO retainers $1.5–5k/mo | $1,900 · $4,900 · $1,500/mo | ✅ Keep |
| Payments | Mostly bundled in agency projects; Stripe experts $100–200/h | $990 · $6,500 · $14,000 | ✅ Keep |
| AI chatbot/receptionist | Off-the-shelf SaaS $50–400/mo; custom builds $5k–50k | $990 + usage · $9,500 · $18,000 | ✅ Keep. Always show running cost ($40–300/mo). |
| Automation / ERP | Small Zapier/n8n jobs $150–1,000 (crowded); ERP implementation $25k–150k+ | $2,500 · $18,000 · $45,000 | ✅ Keep. $2,500 for ~10 automations is fair and filters out tiny jobs. |
| Local SEO | $500–3,000/mo; most small businesses $1,000–2,000/mo | $1,500 setup · $1,200/mo · $3,000/mo | ✅ Keep |
| Vibe-code rescue | Fiverr $100–500; US devs $100–150/h; real rescues often $2–10k | Free audit · **from $990** · $3,000/mo | ⚠️ See decision 2 |
| White-label | Offshore white-label $25–60/h; US $75–150/h | $6,000/project · **$14,500/mo team** · $65/h | ⚠️ See decision 3 |
| Care / maintenance | WordPress care $50–500/mo; app maintenance 15–20% of build/yr | from $290/mo | ✅ Keep; add tiers (below) |

## 3. Three decisions for the owner

1. **Mobile apps at $9,900 / $14,900.** These are the lowest "real agency" prices a US buyer will see. Good for conversion. The risk is the occasional buyer who reads it as too cheap. **Recommendation:** keep, and on every page show a "most projects land between" range (below) so expectations are honest and the sales call isn't a shock.
2. **Vibe rescue "Rescue & launch" from $990.** The tier includes data rules, logins, leaked keys, payments, load testing, tests, staging and moving hosting. That's rarely $990 of work. **Recommendation:** keep "from $990" (matches the homepage Add-on, and some fixes really are that small) but state "most rescues: $2,500–7,500, fixed after the free audit".
3. **White-label team at $14,500/mo for ~480 h** = about $30/h, while hour blocks are $65/h. The gap is large. **Recommendation:** either raise the team to **from $18,500/mo** (~$38/h, still the cheapest credible option for agencies) or define the team as fewer hours. Owner's call; it doesn't affect the homepage.

## 4. The price book (what `/pricing` and every page show)

All "from" prices are placeholders until the owner confirms. "Typical total" is the honest range most projects land in.

| Package | From | Typical total | Time |
|---|---|---|---|
| **Add-on** (payments, AI chat, AI-built app fix) | $990 | $990–3,500 | Live in days |
| **Launch** · website | $3,900 | $3,900–9,500 | 2–4 weeks |
| **Build** · web + app (most chosen) | $14,900 | $14,900–35,000 | ~12 weeks |
| **Care** · monthly | $290/mo | $290–1,490/mo | Ongoing |

Per service:

| Service | Tier 1 | Tier 2 (most chosen) | Tier 3 | Typical total |
|---|---|---|---|---|
| Mobile apps | MVP app $9,900 · 6–8 wk | Business app $14,900 · 10–12 wk | Custom platform $29,000 · 14–20 wk | $14,900–35,000 |
| Web apps | Internal tool $7,900 · 5–7 wk | Business web app $16,900 · 9–12 wk | Platform $34,000 · 14–20 wk | $12,000–40,000 |
| SaaS | Prototype $6,900 · 2–3 wk | Launch-ready SaaS $34,000 · 10–14 wk | Platform $70,000 | $34,000–90,000 |
| Shopify | Launch store $4,900 · 3–4 wk | Custom theme $11,900 · 6–8 wk | Plus/headless/apps $24,000 · 10–16 wk | $4,900–20,000 |
| WordPress | Business site $3,900 · 2–4 wk | Custom site $8,900 · 5–6 wk | WooCommerce/plugin $16,000 · 8–12 wk | $3,900–12,000 |
| Landing pages | One page $1,900 · 7–10 days | Campaign pack $4,900 · 2–3 wk | Test & improve $1,500/mo | $1,900–6,000 |
| Payments | Checkout & pay links $990 | Complete payments $6,500 · 3–4 wk | Platform $14,000 | $990–8,000 |
| AI | Assistant $990 + usage | Assistant that acts $9,500 · 4–6 wk | Back-office agents $18,000 | $990–15,000 (+$40–300/mo running) |
| Automation & ERP | Automations $2,500 · 1–3 wk | Ops system $18,000 · 8–12 wk | Multi-location ERP $45,000 | $2,500–30,000 |
| SEO | Setup $1,500 · 3–4 wk | Monthly local SEO $1,200/mo | Multi-location $3,000/mo | $1,200–3,000/mo |
| Vibe rescue | Audit free · 48 h | Rescue & launch from $990 | Rescue + build $3,000/mo | $2,500–7,500 |
| White-label | Per project $6,000 | Dedicated team $14,500/mo (see decision 3) | Hours $65/h | — |

**Care plans (new, extends the homepage "Care from $290/mo"):**

| Plan | Price | Includes |
|---|---|---|
| Care | $290/mo | Hosting setup & monitoring, updates, daily backups, uptime alerts, security patches, 2 h of changes |
| Care Plus | $690/mo | Everything in Care + 6 h of changes, priority reply (same business day), monthly speed/SEO check |
| Growth Care | $1,490/mo | Everything in Care Plus + 15 h of improvements, a monthly report and call, small features shipped every two weeks |

**Payment terms (show on `/pricing` and `/process`):** under $5,000: 50% to start, 50% at launch. Over $5,000: 30% to start, 40% at design approval / mid-build demo, 30% at launch. Monthly plans billed monthly, cancel with 30 days' notice. You own the code, accounts and designs from the first payment onward.

**"What changes the price" chips (reuse everywhere):** number of screens/pages · logins and roles · payments · integrations (POS, QuickBooks, CRM) · data migration · custom design vs theme · iOS + Android + web · AI features · multiple locations.

## 5. Why showing prices helps SEO and conversion

- Most agency sites hide prices, so "how much does X cost" searches land on vague blog posts. A clear `/pricing` page plus cost guides with **our real numbers** wins those clicks and gets quoted by AI answers ("[Brand] lists small business apps from $9,900").
- Visible prices pre-qualify leads: fewer calls with $500 budgets.
- Keep prices as HTML text + Offer schema, and update the "Updated October 2026" stamp each quarter.
