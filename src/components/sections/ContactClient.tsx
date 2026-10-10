"use client";
import { useState } from "react";
import { waLink } from "@/config/site";
import { sendLead } from "@/lib/lead";

const NEEDS = ["Website", "Store", "App", "WhatsApp / AI", "E-invoicing", "Other"];
export function ContactForm() {
  const [needs, setNeeds] = useState<string[]>([]);
  const [budget, setBudget] = useState("10–50k");
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  if (done) return <div className="tool-in" style={{ textAlign: "center" }}><h3 style={{ font: "800 28px var(--font-sans)" }}>Thanks{name ? `, ${name}` : ""}.</h3><p style={{ color: "var(--mute)", margin: "10px 0 20px" }}>{sent ? "We\u2019ll WhatsApp you within an hour on working days (Mon\u2013Fri, GST)." : "We couldn\u2019t send this automatically. Please message us on WhatsApp and we\u2019ll pick it up from there."}</p><a className="btn btn-ink" href={waLink(`Hi, I just sent the form. I need: ${needs.join(", ") || "a chat"}`)}>Message us now</a></div>;
  return (
    <form className="tool-in" onSubmit={async (e) => { e.preventDefault(); const f = new FormData(e.currentTarget); setBusy(true); const r = await sendLead({ kind: "contact", name, business: String(f.get("business") ?? ""), whatsapp: String(f.get("whatsapp") ?? ""), needs, budget }); setSent(r.delivered); setBusy(false); setDone(true); }}>
      <div className="fld"><label htmlFor="n">Your name</label><input id="n" className="inp" required value={name} onChange={(e) => setName(e.target.value)} /></div>
      <div className="fld"><label htmlFor="b">Business</label><input id="b" name="business" className="inp" /></div>
      <div className="fld"><label>What do you need?</label><div className="opt-row">{NEEDS.map((n) => <button type="button" key={n} className="opt" aria-pressed={needs.includes(n)} onClick={() => setNeeds((x) => x.includes(n) ? x.filter((y) => y !== n) : [...x, n])}>{n}</button>)}</div></div>
      <div className="fld"><label htmlFor="bg">Budget range (AED)</label><select id="bg" value={budget} onChange={(e) => setBudget(e.target.value)}><option>Under 10k</option><option>10–50k</option><option>50–150k</option><option>150k+</option></select></div>
      <div className="fld"><label htmlFor="w">WhatsApp number</label><input id="w" name="whatsapp" className="inp" inputMode="tel" placeholder="+971 50 000 0000" required /></div>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden style={{ position: "absolute", left: "-9999px" }} />
      <button className="btn btn-ink" disabled={busy} style={{ width: "100%" }}>{busy ? "Sending…" : "Send"}</button>
      <p className="note">We reply within an hour on working days. Prefer WhatsApp? Use the button above.</p>
    </form>
  );
}
