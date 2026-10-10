import { NextResponse } from "next/server";

export const runtime = "nodejs";

/** Receives booking and contact-form leads. Set LEAD_WEBHOOK_URL (Zapier, Make, n8n, a CRM or a Slack/WhatsApp relay)
 *  to forward them; without it the lead is only logged on the server and the response says `delivered: false`. */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 }); }
  const str = (v: unknown, n = 300) => (typeof v === "string" ? v.slice(0, n) : "");
  if (str(body.website)) return NextResponse.json({ ok: true, delivered: false }); // honeypot
  const lead = {
    kind: str(body.kind, 20) || "contact", name: str(body.name, 100), business: str(body.business, 150), whatsapp: str(body.whatsapp, 40),
    needs: Array.isArray(body.needs) ? body.needs.slice(0, 8).map((x) => str(x, 40)) : [], budget: str(body.budget, 40),
    slot: str(body.slot, 80), url: str(body.url, 200), message: str(body.message, 600), page: str(body.page, 200), receivedAt: new Date().toISOString(),
  };
  if (!lead.name) return NextResponse.json({ ok: false, error: "Name is required" }, { status: 422 });
  const hook = process.env.LEAD_WEBHOOK_URL;
  if (!hook) { console.log("[lead]", JSON.stringify(lead)); return NextResponse.json({ ok: true, delivered: false }); }
  try {
    const r = await fetch(hook, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(lead) });
    return NextResponse.json({ ok: r.ok, delivered: r.ok }, { status: r.ok ? 200 : 502 });
  } catch { return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 502 }); }
}
