import { HubHero } from "@/components/sections/Simple";
import { Plain, Head, FaqSection, CtaSection } from "@/components/sections/Blocks";
import { JsonLd } from "@/components/ui/JsonLd";
import { meta } from "@/lib/seo";
import { site, url } from "@/config/site";

export const metadata = meta({ title: `About ${site.brand} · A Software Studio Based in Dubai`, desc: "A small senior team based in Dubai, building apps, websites and software for UAE businesses at fixed AED prices, in English and Arabic.", path: "/about" });

const DIFF = [["01", "Fixed AED prices", "You know what it costs before we start, in writing."], ["02", "Arabic + English included", "Right-to-left done properly, not a plugin."], ["03", "You own everything", "Code, designs, domain, store and app accounts from your first payment."], ["04", "Weekly demos", "A Friday demo on a staging link. No black box."], ["05", "Same time zone", "Dubai (GST), Mon–Fri. Same-day replies."]];
const TEAM = [["[Name]", "Founder · Product & strategy"], ["[Name]", "Lead developer"], ["[Name]", "Design lead"], ["[Name]", "Arabic content & QA"]];

export default function Page() {
  return (
    <>
      <HubHero kicker="About us" h1="A small senior team." em="Based in Dubai, building for the UAE." sub="Owners were stuck between cheap freelancers and slow big agencies. We're the third option." wa="Hi, I'd like to know more about your team" />
      <Plain text={`${site.brand} is a software studio based in Dubai. We build stores, websites, apps, WhatsApp assistants and the systems behind them for UAE businesses and agencies, in English and Arabic, at fixed AED prices. You talk to the people who build your project, and you own everything we make.`} facts={[["Licensed in", "Dubai"], ["Hours", "Mon–Fri 9:00–18:00 GST"], ["Replies", "Within an hour on WhatsApp"], ["Projects launched", "[N]"]]} />
      <section className="sec"><div className="w two-col">
        <div className="rv"><span className="eyebrow"><i />Our story</span><h2 className="h2">Why the studio exists.</h2></div>
        <div className="prose rv"><p>[owner to write] Most business owners we meet have the same two bad options. A freelancer who is cheap and disappears, or a big agency that quotes six figures and a six-month timeline for something that should take weeks.</p><p>We started {site.brand} to be the third option: a small senior team that quotes a fixed price, designs every screen before building it, demos every Friday, and hands over everything we make.</p><p>We work in English and Arabic, in Dubai time, and we say no to projects we can&apos;t do well.</p></div>
      </div></section>
      <section className="sec-tight"><div className="w"><Head eyebrow="The team" title="Real names and photos go here." lead="Placeholders until the team sends photos. We don't publish fake people." />
        <div className="card-grid">{TEAM.map(([n, r], i) => <div key={i} className="team-card rv"><div className="team-av">{n[1] ?? "?"}</div><h3 style={{ font: "800 22px var(--font-sans)", letterSpacing: "-.03em" }}>{n}</h3><p style={{ color: "var(--mute)" }}>{r}</p><div className="chips" style={{ marginTop: 14 }}><span className="chip">English</span><span className="chip">العربية</span></div></div>)}</div>
      </div></section>
      <section className="sec"><div className="w"><Head eyebrow="How we're different" title="Five promises." />
        <div className="diff">{DIFF.map(([n, h, p]) => <div key={n} className="rv"><span>{n}</span><b>{h}</b><p>{p}</p></div>)}</div></div></section>
      <section className="sec-tight"><div className="w"><div className="soft-sec" style={{ margin: 0, padding: "clamp(26px,4vw,50px)" }}>
        <Head eyebrow="Where we are" title="Dubai · meetings by video or at your office." lead={`Trade licence ${site.licence} · ${site.freeZone}. We'll publish our address and map once it's final.`} />
        <span className="ex-chip" style={{ background: "var(--card)", color: "var(--mute)" }}>Numbers are placeholders until launch</span>
      </div></div></section>
      <FaqSection eyebrow="FAQ" head="About working with us." items={[{ q: "Are you a registered company?", a: `Yes: a Dubai-based company, trade licence ${site.licence} (${site.freeZone}). The number is shown in the footer of every page.` }, { q: "Do you have an office?", a: "We're based in Dubai and meet at your office, by video, or in a co-working space on request." }, { q: "Who will I talk to?", a: "The people who build your project. No account managers between you and the developers." }, { q: "Can I see your work?", a: "The projects on this site are example projects with illustrative numbers. We share real client work and references on a call, with permission." }]} />
      <CtaSection h="Want to meet the team? 30 minutes, by video or in person in Dubai." lead="Tell us about the business. We'll tell you honestly if we're the right fit." steps={["Pick a time that works for you", "Tell us about the business", "Get a plan and fixed price within 48 hours"]} wa="Hi, I'd like to meet the team" />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", name: "About", url: url("/about"), about: { "@id": url("/#org") } }} />
    </>
  );
}
