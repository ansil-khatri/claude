# Service Page: AI Integration — Design Spec

- **Date:** 2026-10-07
- **Status:** Mockup built, waiting for owner review
- **Route:** `/services/ai-integration`
- **Reference mockup:** `docs/superpowers/mockups/service-ai.html`
- **Builds on:** `2026-10-07-agency-site-homepage-and-mobile-apps-design.md` (design system §3, template §5, accessibility/responsive §6). Only page-specific content is recorded here.

**Story:** your team answers the same questions all day, let AI take the first shift → three overload moments (phone, DMs, paperwork) → each industry's first job for AI → five jobs AI can take → buy vs build vs DIY vs hire → 4–6 weeks → proof → price → objections → AI planning call.

**Positioning rules visible in the copy:** the assistant always says it's AI, answers only from approved information, hands over to a person with a summary, and needs approval before money moves. AI usage is paid to the provider at cost, never marked up.

**Mockup mix:** light unified inbox, phone-call log, Instagram DMs, Gmail, agent run log, PDF supplier invoice with extracted fields, Slack-style #ops channel with an approval button, eval/check-up report, WhatsApp chat, voice-call transcript, iMessage. Class prefix for this page: `ai-`.

---

## AI1 · Hero (dark panel)
- **Breadcrumb:** Services / AI Integration
- **H1:** "Your team answers the same questions all day. **Let AI take the first shift.**"
- **Sub:** Assistants that answer customers on WhatsApp, your website and the phone, and agents that handle the busywork behind the scenes. They learn your prices and rules, work inside your tools, and pass anything tricky to a person.
- **CTAs:** Book a free call · See pricing
- **Tech chips:** OpenAI · Claude · Gemini · WhatsApp Business · Twilio Voice · Your docs & data
- **Visual:** FreshFold Conversations inbox (`app.freshfold.com/inbox`): 312 today, 84% handled by AI, first reply 4 sec (was 2 h 10 min), sent-to-team count; live table across WhatsApp / Web chat / Text / Phone call ("Where's my laundry? Order 2241" → ETA sent; "Do you clean wedding dresses?" → $189 quote; stain complaint → Sent to Nina; pickup scheduled; card updated); **Handoff panel** for Amy Kim with AI summary and suggested fix (free re-clean + $5 credit, Approve / Reply myself). Phone: WhatsApp Business chat with disclosure banner ("FreshFold uses an AI assistant. Ask for a person anytime."), order timeline, delivery window, quick replies.
- **Floating cards:** "Answered at 2:14 AM · WhatsApp · Pickup moved to 8 AM ✓" · "Handled without staff · 84% of conversations" · "Sent to Nina, with a summary · Amy K. · stain on a white shirt".

## AI2 · Sound familiar? "Too many questions. Not enough hands."

| Quote | Before | After | Cost (red) | Fix |
|---|---|---|---|---|
| "The phone rings all through the dinner rush, and nobody can get it." | Ember Kitchen main-line call log, Fri 6–9 PM: 23 missed, 9 voicemails ("Table for 6 tonight?") | Same evening: 0 missed; takeout orders #5840–5842 with totals, table for 6 reserved, catering for 40 transferred to Marco, "Open Monday?" answered; footer "61 calls · 34 orders, $2,480 · 3 sent to staff" | 23 missed calls; most were takeout orders that went to a delivery app. | An AI host answers every call, takes the order, texts a pay link, sends the ticket to the kitchen. |
| "Our DMs are the same twenty questions, all day." | Instagram inbox `maisonrose.atx`, 47 unread; thread "Hello??" → "nvm found somewhere else", no reply for 3 days | Tabs "Needs you 3 · Answered 44"; AI replies with real prices (long-hair balayage $220, men's cuts $45); bridal group and kids' color routed to Sophie; "replied in 6 seconds" | Sophie spends two hours a day typing prices; some people wait three days. | Answers from the real price list and calendar, in the salon's tone; Sophie sees only the 3 that need her. |
| "Every parts invoice gets typed in by hand." | Gmail `parts@apexautoworks.com`, 38 unread supplier PDFs + sticky "TYPE ALL INTO QB BY FRIDAY!! — Rick" | Agent run "Parts invoices → QuickBooks": read 14, matched 41 lines to repair orders, drafted 13 bills ($6,214.80), flagged rotor price $68 → $81 (+19%) "Ask Rick"; saved 5 h 40 min, 2 price increases caught | ~140 invoices/month, 6 h/week typing, price increases unnoticed until month-end. | An agent reads, matches to the repair order, drafts the bill and flags price changes. |

## AI3 · Showcase: "Every business has a different first job for AI."
- **Lead:** The big screen shows what the owner sees, and the phone shows what the customer gets.

| Tab | Brand · AI job | Results | Chips | Owner screen | Phone |
|---|---|---|---|---|---|
| Salons & spas | Maison Rose · rebooking agent | 64 clients rebooked in Oct · $11.5k booked from texts | Rebooking texts, Real calendar openings, Opt-outs handled, Complaints go to Sophie | Rebooking agent (186 due, 34% rebooked, $11,520) + **"The rules" set by Sophie** (opted-in only, max one text/month, real openings, upset → Sophie, no discounts without approval) | iMessage: due reminder → "Sat 1pm please!!" → booked with $85 deposit on saved card |
| Restaurants | Ember Kitchen · menu & allergy assistant | 214 questions answered tonight · 61% order after asking | Allergen sheet, Notes to the kitchen, Private dining → Marco, Any language | Guest questions + allergen sheet (shared fryer, gluten, dairy, nuts) | Guest chat |
| Auto shops | Apex Auto Works · inspection explainer | 71% approved by text (was 38%) · $214 more work per car | Tech notes → plain English, Photos, Answers "why?", Approve by reply | Inspection texts + "Tech note → text" | Text with pads/cabin filter/tires |
| Home services | Volt & Wire · photo to estimate | < 10 min photo to estimate · 64% approved | WhatsApp photos, Draft estimates, Erin approves, Safety triage | New leads + draft estimate E-1192 | WhatsApp with panel photos |
| Laundry | FreshFold · AI dispatcher | 96% routes on time · ▼71% "where's my driver?" calls | Late-driver texts, Route swaps, Card retries, Approval rules | AI dispatcher + suggestion | Late-driver text (6:10–6:25 PM) |
| SaaS | Ledgerly · in-app copilot | 18,420 questions/month · ▼46% support tickets | Answers from your data, Sources on every number, Private per company, $0.004 per answer | Copilot + "Cost & safety" ($73.68/mo) | "Ask Ledgerly" |

## AI4 · What we build (dark panel, 5 tabs): "Five jobs AI can take off your plate."

| # | Tab · chip | Headline | Fine print | Mockup |
|---|---|---|---|---|
| 01 | Website & WhatsApp chat · Website · WhatsApp · Instagram · SMS | A quote at 11:42 PM, while you sleep. | Says it's AI, quotes only approved prices, hands over on request. | Volt & Wire site with chat widget: Model Y question → $890–$1,150 → two qualifying questions → "Quote E-1194 · $1,010" + toast "New lead · Erin calls at 8 AM" |
| 02 | Answers the phone · AI receptionist · Orders · Reservations · Transfers | Every call answered, even at 7:45 on a Friday. | Runs on your existing number; every call and transcript reviewable. | Phone call transcript (AI host, upsell sourdough, pay link) + kitchen ticket #5840 $85 "Pay link sent" + toast "61 calls answered Friday · 0 missed" |
| 03 | Reads your paperwork · Invoices · Receipts · Forms · Contracts | Nobody retypes a PDF again. | Typical accuracy 98–99% on clean invoices; the rest flagged. | Desert Parts Supply PDF invoice #88213 with highlighted fields → extraction card (RO-4822, vendor ✓, line check rotors +19%, "Rotors went from $68 to $81…job earns $26 less", Ask Rick / Create bill) + toast "13 bills drafted today" |
| 04 | Agents with approval · Slack · Stripe · Your CRM · Your scheduling | It does the busywork, then asks before spending money. | You choose what it does alone vs with a yes; every action logged with a reason. | Slack-style #ops (FreshFold): Ops Agent fixes a declined card, reschedules pickups for traffic, detects a duplicate charge → "Approve refund" → Nina "Approved 👍" → refund + apology + $5 credit |
| 05 | Tested before it talks · Test sets · Guardrails · Weekly check-ups | We test it on 300 real questions before a customer sees it. | Price/hour changes caught by the test. | Maison Rose "Assistant check-up": 97.4% correct (304/312), 0 made-up prices, 100% handover when asked, 1.8 s reply; test rows incl. "free hair if i post about u?", pregnancy color question, discount code, Thanksgiving hours "Fixed"; "It will never…" checklist |

## AI5 · Honest choice: "Buy a chatbot, build your own, or hire someone? It depends on what you want it to do."
Lead: for FAQs only, off-the-shelf may be enough; custom is worth it when AI must look things up and act.

| | **Custom assistant** (recommended) | Off-the-shelf chatbot · Intercom Fin · Tidio · Zendesk AI | DIY · ChatGPT + Zapier | Hire another person · front desk or VA |
|---|---|---|---|---|
| Best for | Answering and acting: quotes, orders, status, bookings | Website FAQs with a support team behind | Trying an idea for a week | Complex, emotional conversations |
| Typical cost | From $990 once + $40–300/mo to run | $0.99/answer or $40–150/seat/mo | $20–100/mo + your time | $3,200–4,500/mo |
| Knows live prices, stock, schedule | Yes, from your systems | Only what you paste in | Breaks when things change | Yes |
| Takes action | ●●●●● | low | low | ●●●●● |
| Phone, WhatsApp and web | All, one brain | Web and email, usually | One channel at a time | Working hours |
| Who owns it | You: code, prompts, data | The vendor | You, but fragile | You |

Note: "Published prices in 2026. AI usage is paid to the provider directly, never marked up by us."

## AI6 · Process: "About 4–6 weeks, step by step." (eyebrow: From first call to first answer)
| Step | When | Title | Visual |
|---|---|---|---|
| 01 | Days 1–5 | Read your real conversations (500 recent) | Bar breakdown: Prices 31% · Order status 18% · Hours/location 16% · Changes 14% · Complaints |
| 02 | Week 1 | Write what it may and may not do (signed off by you) | Allowed / ask / never list (quote prices ✓, move pickup ≤ 2 h ✓, refunds → ask Nina, medical/legal ✗) |
| 03 | Weeks 1–3 | Connect your tools | Pills: Square, Google Calendar, QuickBooks, WhatsApp, Twilio, Stripe ✓ |
| 04 | Week 3 | Test it on 300 real questions | Eval log: 312 run, 304 correct (97.4%), 0 made-up prices, 8 fixed + re-run |
| 05 | Week 4 | Go live with a person watching (AI drafts, team approves first) | Draft replies marked Sent / Edited |
| 06 | Every week | Improve it every week | Weekly report |

## AI7 · Case study (dark): Volt & Wire · Dallas, TX
- **H3:** 38% of calls came in after 5 PM. Now every one gets answered.
- **Problem:** office closes at 5; after-hours calls hit voicemail; emergencies went to whoever answered first on Google.
- **Built:** AI receptionist on the main line + website chat; prices standard jobs, triages emergencies by safety, texts Carlos a summary. Live in 5 weeks.
- **Metrics:** 100% of calls answered · +$26k booked work/month · 2.4 h a day back for Erin
- **Quote:** "It asks the questions I'd ask. When someone smells burning, it tells them to switch off the breaker before anything else."
- **Mockups:** `office.voltwire.com/calls` (214 calls, 100% answered vs 64%, tonight's calls incl. burning-smell triage, transcript panel) + iMessage to Carlos ("🔴 URGENT · Linda Park… booked 7:30 AM, $89 trip fee approved").

## AI8 · Pricing: "Fixed price. Agreed before we start."
Lead adds: AI usage billed by the provider to you at cost, usually $40–300/month.

| Tier | Price (placeholder) | Includes | Time |
|---|---|---|---|
| Assistant · Answers customers | from **$990** (homepage Add-on "AI chat on your existing site") | Trained on prices/hours/FAQs, web chat + WhatsApp or SMS, handover with summary, 300-question test | Website chat live in days; WhatsApp/SMS 2–3 weeks |
| **Most chosen · Assistant that takes action** | from **$9,500** | + AI receptionist on phone, orders/quotes/status/changes, POS/CRM/scheduling connection, weekly report + tune-ups for 3 months | 4–6 weeks |
| Agents · Back-office agents | from **$18,000** | Invoice/email/document reading, ops agents, approvals in Slack/Teams, private data + audit log + role limits, copilot in your product | — |

**What changes the price:** channels (web, WhatsApp, phone) · systems to connect · actions it can take · languages · approval steps · data privacy needs.

## AI9 · FAQ: "Questions before you let AI talk to customers."
1. Will it make things up? (approved info only; says when it doesn't know; tested weekly)
2. Will customers know they're talking to AI? (yes; some US states require it)
3. What does it cost to run each month? ($40–300 AI usage + phone minutes)
4. Is our customer data used to train AI? (no; business API terms; your accounts; AI never sees card numbers)
5. What happens when it gets something wrong? (logged; fixes in minutes; money needs approval)
6. Can it speak Spanish and other languages? (yes; summaries in English)

## AI10 · Often paired with: "AI works best with good systems behind it."
Business automation & ERP · Web app development · SaaS development · Vibe-code rescue. Industries: Salons & spas, Restaurants, Auto shops, Home services, Laundry, SaaS.

## AI11 · CTA + footer
"Answering the same questions every day? *30 minutes* and we'll show you what AI can take on." Lead: bring a few real customer messages. Widget: **AI planning call**.

---

## Consistency with homepage (homepage wins)
All items below were **fixed in the mockup on 2026-10-07** unless marked "Owner to decide". Verified in headless Chrome: values render, no page errors.

| Item | Homepage | This mockup | Resolution |
|---|---|---|---|
| Entry price | Add-on **from $990** includes "AI chat on your existing site", "Live in days" | Assistant tier from $3,500, 2–3 weeks; comparison "From $3,500 once" | Change the first tier and the comparison cell to from $990; say website chat goes live in days. |

## Open items (this page)
- Real prices; Agents tier has no timeline.
- The "some US states require it" disclosure claim and provider data-use terms need a legal check before launch.
- Off-the-shelf pricing in the table (e.g. $0.99/answer) changes often; re-verify.
- Arabic is listed among supported languages; fine to keep, but the site itself is English-only for now.
