"use client";
import { useMemo, useState } from "react";
import type { Brand } from "@content/brands";
import { SiteInBrowser, AppInPhone } from "@/components/mock/BrandMocks";
import { Viz } from "@/components/mock/Viz";
import { waLink } from "@/config/site";
import { track } from "@/components/shell/Analytics";

type Kind = { key: string; label: string; tag: string; headline: [string, string]; sub: string; items: Brand["items"]; chip: string; chat: [string, string, string]; price: [string, string][]; ask: string };
const KINDS: Kind[] = [
  { key: "restaurant", label: "Restaurant", tag: "Restaurant", headline: ["Order direct.", "Pay no commission."], sub: "Fresh from the kitchen to your door, or ready for pickup in 20 minutes.", items: [{ n: "Chef's special", p: "AED 85" }, { n: "Family box", p: "AED 245" }, { n: "Dessert", p: "AED 38" }], chip: "0% commission",
    chat: ["Is the shawarma halal and what time do you close?", "Yes, all our meat is halal. We close at 1 AM tonight. Want me to start an order for pickup?", "Two chicken shawarma please"],
    price: [["Direct ordering website", "from AED 7,900"], ["WhatsApp ordering assistant", "from AED 2,900"], ["Own ordering app", "from AED 35,000"]], ask: "ordering" },
  { key: "salon", label: "Salon or spa", tag: "Beauty & wellness", headline: ["Book your chair", "in under a minute."], sub: "Colour, cuts and treatments. Reserve your time and pay a small deposit with Apple Pay.", items: [{ n: "Cut & style", p: "AED 180" }, { n: "Colour", p: "AED 450" }, { n: "Facial", p: "AED 320" }], chip: "AED 100 deposit",
    chat: ["Do you have a slot for balayage on Saturday?", "Yes, Saturday 12:30 with Mia is free. AED 100 deposit holds it. Shall I book it?", "Yes please"],
    price: [["Website with online booking", "from AED 7,900"], ["Deposits with Apple Pay", "from AED 2,900"], ["Own booking app", "from AED 35,000"]], ask: "booking" },
  { key: "laundry", label: "Laundry", tag: "Laundry & dry cleaning", headline: ["Laundry picked up.", "Back in 24 hours."], sub: "Free pickup and delivery. Track your driver live and pay by card.", items: [{ n: "Wash & fold", p: "AED 15/kg" }, { n: "Shirt pressed", p: "AED 9" }, { n: "Duvet", p: "AED 75" }], chip: "Pickup in 60 min",
    chat: ["Can you collect my laundry tonight?", "Yes, our driver Imran can collect between 6:10 and 6:25 PM. Same address as last time?", "Yes, same tower"],
    price: [["Website with pickup booking", "from AED 7,900"], ["Customer + driver app", "from AED 49,000"], ["WhatsApp updates", "from AED 2,900"]], ask: "pickup and delivery" },
  { key: "garage", label: "Garage", tag: "Car service", headline: ["Serviced right.", "See it before you pay."], sub: "Photos of every inspection finding, approved on WhatsApp before we touch your car.", items: [{ n: "Oil service", p: "AED 299" }, { n: "Brake pads", p: "AED 890" }, { n: "AC regas", p: "AED 349" }], chip: "Photo quotes",
    chat: ["Brakes are squeaking on my Patrol. How much?", "Front pads and discs are AED 890. I'm sending the inspection photos. Reply YES to approve.", "YES"],
    price: [["Website with booking by plate", "from AED 7,900"], ["Photo quotes on WhatsApp", "from AED 2,900"], ["Shop system", "from AED 29,000"]], ask: "job and quote" },
  { key: "home", label: "AC & maintenance", tag: "Home services", headline: ["AC not cooling?", "We're there in 60 min."], sub: "Book a technician and pay the AED 99 call-out deposit with Apple Pay or Tabby.", items: [{ n: "AC check", p: "AED 99" }, { n: "AC service", p: "AED 180" }, { n: "Gas refill", p: "AED 350" }], chip: "AED 99 deposit",
    chat: ["AC stopped cooling in JVC. Can someone come today?", "Yes, Ryan can be there in about 60 minutes. AED 99 call-out, taken as a deposit. Pay by Apple Pay?", "Yes"],
    price: [["Website with call-out booking", "from AED 7,900"], ["Deposit and pay links", "from AED 2,900"], ["Dispatch system", "from AED 29,000"]], ask: "dispatch" },
  { key: "repair", label: "Phone repair", tag: "Phone repair", headline: ["Cracked screen?", "Fixed in 45 minutes."], sub: "Pick your model and see the price instantly. Book online and skip the queue.", items: [{ n: "Screen", p: "AED 449" }, { n: "Battery", p: "AED 220" }, { n: "Trade-in", p: "up to AED 1,550" }], chip: "Instant price",
    chat: ["How much to replace an iPhone 13 screen?", "AED 449 online, 45 minutes. Want a slot at Deira at 4 PM?", "Yes"],
    price: [["Website with instant quotes", "from AED 7,900"], ["WhatsApp repair updates", "from AED 2,900"], ["Repair + stock system", "from AED 29,000"]], ask: "repair" },
];
const PALETTES: { n: string; bg: string; ink: string; accent: string; accentInk: string; soft: string; dark?: boolean }[] = [
  { n: "Ink & orange", bg: "#14110f", ink: "#ffffff", accent: "#ff5b1f", accentInk: "#14110f", soft: "#241d19", dark: true },
  { n: "Rose", bg: "#fbf1ee", ink: "#3a1d26", accent: "#b4536a", accentInk: "#ffffff", soft: "#f4dfdc" },
  { n: "Ocean", bg: "#eef4ff", ink: "#0b1b44", accent: "#2f6bff", accentInk: "#ffffff", soft: "#dbe6ff" },
  { n: "Forest", bg: "#eef6f0", ink: "#0f2a1c", accent: "#1f8a5b", accentInk: "#ffffff", soft: "#d8ebdf" },
  { n: "Sand & gold", bg: "#f6efe3", ink: "#2b2013", accent: "#a8741a", accentInk: "#ffffff", soft: "#ebdcc3" },
  { n: "Graphite", bg: "#101012", ink: "#f2f2f4", accent: "#c8c8d0", accentInk: "#101012", soft: "#1c1c20", dark: true },
];

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 22) || "yourbusiness";

/** Our own idea: type a business name, pick a type and a colour, and see the website, app and WhatsApp assistant we would build, with real AED prices. */
export function Rebuilder() {
  const [name, setName] = useState("");
  const [ki, setKi] = useState(0);
  const [pi, setPi] = useState(0);
  const k = KINDS[ki], pal = PALETTES[pi];
  const shown = name.trim() || "Your Business";
  const brand = useMemo<Brand>(() => ({
    key: "custom", name: shown, tag: k.tag, area: "Dubai", domain: `${slug(shown)}.ae`, phone: "+971 4 000 0000", ...pal,
    industry: k.label, headline: k.headline, sub: k.sub, rating: "4.9", reviews: "Preview", items: k.items, chip: k.chip,
  }), [shown, k, pal]);
  const msg = `Hi, I'm ${shown} (${k.label.toLowerCase()}). I tried your preview and I'd like ${k.ask} built. Can we talk?`;
  return (
    <section className="sec rb" id="try"><div className="w">
      <div className="sec-head"><span data-reveal="fade"><span className="eyebrow"><i />Try it on your business</span></span>
        <h2 className="h2" data-split="lines">See your business, rebuilt in ten seconds.</h2>
        <p className="lead" data-reveal="up" data-delay="0.15">Type your business name. This is the website, the app and the WhatsApp assistant we would build for you, with a fixed price.</p></div>
      <div className="rb-grid">
        <div className="rb-ctl">
          <label htmlFor="rb-n">Business name</label>
          <input id="rb-n" className="inp" placeholder="e.g. Al Noor Salon" value={name} maxLength={28} onChange={(e) => setName(e.target.value)} onBlur={() => name && track("rebuilder_used", { kind: k.key })} />
          <label>What kind of business?</label>
          <div className="rb-kinds">{KINDS.map((x, i) => <button key={x.key} type="button" aria-pressed={ki === i} onClick={() => setKi(i)}>{x.label}</button>)}</div>
          <label>Colour</label>
          <div className="rb-pal">{PALETTES.map((x, i) => <button key={x.n} type="button" aria-label={x.n} aria-pressed={pi === i} onClick={() => setPi(i)} style={{ background: `linear-gradient(135deg, ${x.bg} 50%, ${x.accent} 50%)` }} />)}</div>
          <div className="rb-price">
            <span>Your fixed price, in writing within 48 hours</span>
            {k.price.map(([a, b]) => <div key={a}><i>{a}</i><b>{b}</b></div>)}
            <small>AED, excluding 5% VAT. Preview is illustrative; real design is done with you in Figma.</small>
          </div>
          <div className="rb-cta">
            <a className="btn btn-lime" href={waLink(msg)} target="_blank" rel="noopener" onClick={() => track("whatsapp_click", { source: "rebuilder" })}>Send this to us on WhatsApp</a>
            <a className="btn btn-line" href="#book">Book a free call</a>
          </div>
        </div>
        <div className="rb-out" data-nosnippet aria-hidden>
          <div className="rb-site" key={`${ki}-${pi}`}><SiteInBrowser k="custom" b={brand} /></div>
          <div className="rb-phone" key={`p${ki}-${pi}`}><AppInPhone k="custom" kind="home" b={brand} /></div>
          <div className="rb-chat"><Viz spec={{ t: "chat", name: shown, color: pal.accent, msgs: [{ w: "in", t: k.chat[0], time: "11:42 PM" }, { w: "out", t: k.chat[1], time: "11:42 PM" }, { w: "in", t: k.chat[2], time: "11:43 PM" }] }} /></div>
        </div>
      </div>
    </div></section>
  );
}
