"use client";
import { useState } from "react";
import { waLink } from "@/config/site";

const NEEDS = ["Website", "Store", "App", "WhatsApp / AI", "E-invoicing", "Other"];
export function ContactForm() {
  const [needs, setNeeds] = useState<string[]>([]);
  const [budget, setBudget] = useState("10–50k");
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);
  if (done) return <div className="tool-in" style={{ textAlign: "center" }}><h3 style={{ font: "800 28px var(--font-sans)" }}>Thanks{name ? `, ${name}` : ""}.</h3><p style={{ color: "var(--mute)", margin: "10px 0 20px" }}>We&apos;ll WhatsApp you within an hour on working days (Mon–Fri, GST).</p><a className="btn btn-ink" href={waLink(`Hi, I just sent the form. I need: ${needs.join(", ") || "a chat"}`)}>Message us now</a></div>;
  return (
    <form className="tool-in" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <div className="fld"><label htmlFor="n">Your name</label><input id="n" className="inp" required value={name} onChange={(e) => setName(e.target.value)} /></div>
      <div className="fld"><label htmlFor="b">Business</label><input id="b" className="inp" /></div>
      <div className="fld"><label>What do you need?</label><div className="opt-row">{NEEDS.map((n) => <button type="button" key={n} className="opt" aria-pressed={needs.includes(n)} onClick={() => setNeeds((x) => x.includes(n) ? x.filter((y) => y !== n) : [...x, n])}>{n}</button>)}</div></div>
      <div className="fld"><label htmlFor="bg">Budget range (AED)</label><select id="bg" value={budget} onChange={(e) => setBudget(e.target.value)}><option>Under 10k</option><option>10–50k</option><option>50–150k</option><option>150k+</option></select></div>
      <div className="fld"><label htmlFor="w">WhatsApp number</label><input id="w" className="inp" inputMode="tel" placeholder="+971 50 000 0000" required /></div>
      <button className="btn btn-ink" style={{ width: "100%" }}>Send</button>
      <p className="note">Demo form: nothing is sent until a scheduling and CRM provider is connected.</p>
    </form>
  );
}
