"use client";
import { useState } from "react";
import { sendLead } from "@/lib/lead";
import { waLink } from "@/config/site";

const NEEDS = ["Online store", "Business website", "WhatsApp or AI assistant", "ERP or software", "Not sure yet"];
const BUDGETS = ["Under AED 10,000", "AED 10,000 to 30,000", "AED 30,000 to 70,000", "AED 70,000 plus", "Not sure"];

/** Three-question quote request. Posts to /api/lead; if delivery is not configured it hands over to WhatsApp so no lead is lost. */
export function QuoteForm({ kind = "quote", title = "Get a fixed quote", lead = "Three quick questions. We reply within one working day with questions or a time for a call." }: { kind?: "quote" | "audit"; title?: string; lead?: string }) {
  const audit = kind === "audit";
  const [need, setNeed] = useState<string | null>(audit ? "Website audit" : null);
  const [budget, setBudget] = useState<string | null>(null);
  const [name, setName] = useState(""); const [wa, setWa] = useState(""); const [site, setSite] = useState(""); const [hp, setHp] = useState("");
  const [state, setState] = useState<"idle" | "busy" | "sent" | "manual">("idle");
  const ok = name.trim() && (wa.trim().length > 5) && (audit ? site.trim() : need);
  const text = audit ? `Hi, please audit my website: ${site}. Name: ${name}` : `Hi, I'd like a quote. I need: ${need ?? "-"}. Budget: ${budget ?? "-"}. Site: ${site || "-"}. Name: ${name}`;

  if (state === "sent" || state === "manual") return (
    <div className="qf done"><b>✓</b><h3>{state === "sent" ? "Thank you. We have it." : "One more step."}</h3>
      <p>{state === "sent" ? (audit ? "You will get five specific findings on your site within one working day." : "We will reply within one working day with questions or a time for a call.") : "We could not send this automatically. Please send it on WhatsApp so it reaches us now."}</p>
      {state === "manual" && <a className="btn btn-p" href={waLink(text)} target="_blank" rel="noopener" data-wa="1">Send on WhatsApp <i className="arr">→</i></a>}
    </div>
  );
  return (
    <form className="qf" onSubmit={async (e) => {
      e.preventDefault(); if (!ok || state === "busy") return; setState("busy");
      const r = await sendLead({ kind, name, whatsapp: wa, needs: need ? [need] : [], budget: budget ?? "", url: site, message: hp ? "" : text });
      setState(r.ok && r.delivered ? "sent" : "manual");
    }}>
      <h3>{title}</h3><p className="qf-lead">{lead}</p>
      {audit ? (
        <label className="qf-f"><span>Your website address</span><input className="inp" inputMode="url" placeholder="yourbrand.com" value={site} onChange={(e) => setSite(e.target.value)} /></label>
      ) : (<>
        <fieldset className="qf-f"><legend>What do you need?</legend><div className="opt-row">{NEEDS.map((n) => <button type="button" key={n} className="opt" aria-pressed={need === n} onClick={() => setNeed(n)}>{n}</button>)}</div></fieldset>
        <fieldset className="qf-f"><legend>Rough budget</legend><div className="opt-row">{BUDGETS.map((n) => <button type="button" key={n} className="opt" aria-pressed={budget === n} onClick={() => setBudget(n)}>{n}</button>)}</div></fieldset>
        <label className="qf-f"><span>Current website (optional)</span><input className="inp" inputMode="url" placeholder="yourbrand.com" value={site} onChange={(e) => setSite(e.target.value)} /></label>
      </>)}
      <div className="qf-row">
        <label className="qf-f"><span>Your name</span><input className="inp" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} /></label>
        <label className="qf-f"><span>WhatsApp number</span><input className="inp" inputMode="tel" autoComplete="tel" placeholder="+971" value={wa} onChange={(e) => setWa(e.target.value)} /></label>
      </div>
      <input tabIndex={-1} autoComplete="off" aria-hidden className="hp" name="website" value={hp} onChange={(e) => setHp(e.target.value)} />
      <button className="btn btn-p" disabled={!ok || state === "busy"} style={{ opacity: ok ? 1 : .5 }}>{state === "busy" ? "Sending…" : audit ? "Audit my website" : "Send my request"} <i className="arr">→</i></button>
      <p className="qf-fine">No spam, no newsletter. We use your details only to reply to this request.</p>
    </form>
  );
}
