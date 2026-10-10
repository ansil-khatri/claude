import { meta } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import { webPageLd, breadcrumbLd } from "@/lib/schema";
import { ABOUT, TECH, GENERAL_FAQ } from "@content/v3/site";
import { site } from "@/config/site";
import { Faq } from "@/components/ui/Faq";
import { PageHero, CtaBand, SecHead } from "@/components/sections/Blocks";

export const metadata = meta({ title: "About: A Senior Studio in Dubai", desc: "A small senior studio in Dubai building Shopify stores, WordPress sites and automation software. How we work, what we believe and the tools we use.", path: "/about" });

export default function About() {
  return (
    <>
      <JsonLd data={webPageLd("About", "/about", "A senior studio in Dubai", "AboutPage")} /><JsonLd data={breadcrumbLd([["Home", "/"], ["About", "/about"]])} />
      <PageHero trail={[["Home", "/"], ["About"]]} kicker={`About ${site.brand}`} h="A small senior studio" dim="in Dubai." />
      <section className="sec themed t-paper"><div className="w">{ABOUT.story.map((p, i) => <p key={i} className={i === 0 ? "statement" : "lead"} style={{ marginBottom: 28, color: i === 0 ? undefined : "var(--fg)" }} data-reveal>{p}</p>)}</div></section>
      <section className="sec themed t-dark"><div className="w"><SecHead eyebrow="Principles" h="How we work." />
        <ol className="steps" data-stagger>{ABOUT.principles.map((x, i) => <li key={x.t} className="step"><span className="wk">{String(i + 1).padStart(2, "0")}</span><h3>{x.t}</h3><p>{x.p}</p></li>)}</ol></div></section>
      <section className="sec themed t-coal"><div className="w"><SecHead eyebrow="Team" h="The people." lead="Roles are listed now. Names and photos are added when the owner confirms them." />
        <div className="team" data-stagger>{ABOUT.team.map((t) => <div key={t.role}><b>{t.role}</b><span>{t.note}</span></div>)}</div></div></section>
      <section className="sec themed t-dark"><div className="w"><SecHead eyebrow="Tools" h="What we build with." /><div className="tech" data-stagger>{TECH.map((t) => <span key={t}>{t}</span>)}</div></div></section>
      <section className="sec themed t-paper"><div className="w two"><div><span className="label">Questions</span><h2 className="display h3" style={{ margin: "20px 0" }}>About working with us.</h2></div><Faq items={GENERAL_FAQ} /></div></section>
      <CtaBand h="Meet the team that builds it." lead="Book a call and talk to the people who will do the work." wa="Hi, I'd like to talk to the team" />
    </>
  );
}
