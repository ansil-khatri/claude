import { JsonLd } from "@/components/ui/JsonLd";
import { HubHero } from "@/components/sections/Simple";
import { Plain, Head, FaqSection, CtaSection } from "@/components/sections/Blocks";
import { ProcessToggle } from "@/components/sections/ProcessClient";
import { Viz } from "@/components/mock/Viz";
import { meta, breadcrumbLd } from "@/lib/seo";

export const metadata = meta({ title: "How We Work: Fixed Price, Weekly Demos, You Own the Code", desc: "A free call, a written fixed price in 48 hours, every screen designed and approved before code, a demo every Friday, then launch. Here's exactly what happens.", path: "/process" });

const CARDS = [["Friday demo video", "A 3-minute screen recording of what shipped."], ["Staging link", "Click through the real thing on your own phone."], ["Plain-English update", "What shipped, what's next, what we need from you."], ["WhatsApp group", "The people building it, a message away."]];
const FAQ = [{ q: "How long does a typical project take?", a: "Add-ons take days, a website 2–4 weeks, and a website plus app about 12 weeks from the first call." }, { q: "What if I don't like the design?", a: "We revise it until you do. Nothing is built until you approve every screen." }, { q: "What if we're late?", a: "The contract says what happens: we extend support at no cost for the length of the delay." }, { q: "What happens after launch?", a: "30 days of fixes are included. After that, an optional care plan from AED 790 a month." }, { q: "Do I need to be technical?", a: "No. Everything is explained in plain English, in English or Arabic." }];

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([["Home", "/"], ["How we work", "/process"]])} />
      <HubHero kicker="How we work" h1="No surprises." em="Here's exactly what happens." sub="A free call, a written fixed price, every screen approved before code, a demo every Friday, then launch." wa="Hi, I'm on your process page" />
      <Plain text="Every project follows the same steps: a free call, a written scope and fixed AED price within 48 hours, every screen designed and approved before code, a demo every Friday, testing on real phones, launch, then optional care. You own the code, designs and accounts from your first payment." facts={[["Price", "Fixed, in writing"], ["Demos", "Every Friday"], ["Ownership", "Yours from payment 1"], ["Based in", "Dubai"]]} />
      <section className="sec"><div className="w"><Head eyebrow="The timeline" title="Nine steps, from first call to we-stay." lead="Choose the kind of project to see the timing." /><ProcessToggle /></div></section>
      <section className="sec-tight"><div className="w"><Head eyebrow="Every week" title="What you get every week." />
        <div className="rgrid">{CARDS.map(([h, p]) => <div className="rc rv" key={h}><span className="k">WEEKLY</span><h4>{h}</h4><p>{p}</p></div>)}</div></div></section>
      <section className="sec-tight"><div className="w two-col">
        <div className="rv"><Head eyebrow="The contract" title="The contract, in plain English." lead="One page, no jargon." /></div>
        <div className="rv"><Viz spec={{ t: "doc", title: "Agreement · summary", sub: "Plain English", lines: [["Scope", "Written, with screens"], ["Price", "Fixed, in AED, excl. 5% VAT"], ["Payments", "50/50 or 30/40/30"], ["Change requests", "Priced before work"], ["Code ownership", "Yours from payment 1"], ["NDA", "Included"], ["If we're late", "Free support extension"], ["After launch", "30 days of fixes"]], total: ["Lock-in", "None"] }} /></div>
      </div></section>
      <section className="sec-tight"><div className="w"><div className="soft-sec" style={{ margin: 0, padding: "clamp(26px,4vw,50px)" }}>
        <Head eyebrow="After launch" title="Then we stay, if you want us to." lead="Care plans from AED 790 a month cover hosting, updates, backups, security and small changes. Cancel with 30 days' notice; no 6-month lock-in." />
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}><a className="btn btn-ink" href="/pricing#care">See care plans</a><a className="btn btn-line" href="/services">See services</a></div>
      </div></div></section>
      <FaqSection eyebrow="FAQ" head="About the process." items={FAQ} />
      <CtaSection h="Ready to start? 30 minutes and you'll know the plan, the price and the date." lead="We'll walk you through the first three steps live." steps={["Pick a time that works for you", "Tell us about the business", "Get a plan and fixed price within 48 hours"]} wa="Hi, I'd like to start a project" />
    </>
  );
}
