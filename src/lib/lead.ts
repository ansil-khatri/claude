import { track } from "@/components/shell/Analytics";

export type Lead = { kind: "booking" | "contact" | "quote" | "audit"; name: string; business?: string; whatsapp?: string; needs?: string[]; budget?: string; slot?: string; url?: string; message?: string };

/** Posts a lead to /api/lead. Resolves `delivered: true` only when the server forwarded it. If there is no server (static preview) or it fails, the caller shows a WhatsApp fallback. */
export async function sendLead(lead: Lead): Promise<{ ok: boolean; delivered: boolean }> {
  try {
    const r = await fetch("/api/lead", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...lead, page: location.pathname }) });
    const j = await r.json().catch(() => ({}));
    if (r.ok) { track(lead.kind === "booking" ? "booking_completed" : lead.kind === "quote" ? "quote_submit" : lead.kind === "audit" ? "audit_submit" : "lead_submitted", { delivered: !!j.delivered }); return { ok: true, delivered: !!j.delivered }; }
  } catch { /* fall through */ }
  return { ok: false, delivered: false };
}
