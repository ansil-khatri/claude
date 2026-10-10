import Link from "next/link";
import { GUIDES, STUDIES, CATS, CHECKED } from "@content/guides";
import { HubHero } from "@/components/sections/Simple";
import { Plain, Head, CtaSection } from "@/components/sections/Blocks";
import { GuideFilter } from "@/components/sections/GuideClient";
import { meta } from "@/lib/seo";

export const metadata = meta({ title: "Guides for UAE Business Owners: E-invoicing, Costs, Apps, WhatsApp", desc: "Straight answers for UAE business owners: e-invoicing 2027, what websites and apps really cost in AED, Talabat commission, payments and more.", path: "/guides" });

export default function Page() {
  const featured = GUIDES[0];
  return (
    <>
      <HubHero kicker="Guides" h1="Straight answers for" em="UAE business owners." sub="Real AED numbers, real dates, plain English. Each guide shows when we last checked it." wa="Hi, I read your guides" />
      <Plain text="Our guides answer the questions UAE owners actually ask: what e-invoicing means for you before July 2027, what a website or app really costs in dirhams, how much Talabat takes and how to get paid. Facts that can change (laws, fees, dates) are marked and linked to the official source." facts={[["Published", `${GUIDES.filter((g) => g.body).length} guides`], ["Planned", "55 + 3 studies"], ["Checked", CHECKED], ["Languages", "English (Arabic soon)"]]} />
      <section className="sec-tight"><div className="w">
        <Link href={`/guides/${featured.slug}`} className="feat">
          <div><span className="eyebrow on-dark"><i />Featured pillar</span><h2>{featured.title}</h2><p>{featured.answer}</p><span className="btn btn-lime">Read the guide <span className="arrow">→</span></span></div>
          <Countdown />
        </Link>
      </div></section>
      <section className="sec"><div className="w"><GuideFilter guides={GUIDES.map(({ body, ...g }) => ({ ...g, live: !!body }))} cats={CATS} /></div></section>
      <section className="sec-tight"><div className="w"><Head eyebrow="Tools" title="Free calculators." />
        <div className="card-grid">{[["/tools/talabat-commission-calculator", "Talabat commission calculator"], ["/tools/payment-gateway-fee-calculator", "Payment gateway fee calculator"], ["/tools/e-invoicing-readiness-check", "E-invoicing readiness check"]].map(([h, t]) => <Link key={h} href={h} className="g-card"><span className="cat">Free tool</span><h3>{t}</h3><span style={{ fontWeight: 700 }}>Open →</span></Link>)}</div></div></section>
      <section className="sec-tight"><div className="w"><Head eyebrow="Data studies" title="Coming in months 9–12." />
        <div className="card-grid">{STUDIES.map((s) => <div key={s.id} className="g-card soon"><span className="cat">{s.id} · Data study</span><h3>{s.title}</h3><p>{s.note}</p></div>)}</div></div></section>
      <CtaSection h="Have a question we haven't answered? 30 minutes, free." lead="Tell us what you're trying to figure out." steps={["Pick a time that works for you", "Ask us anything", "Get a plan and fixed price within 48 hours"]} wa="Hi, I have a question" />
    </>
  );
}

function Countdown() {
  const days = Math.max(0, Math.ceil((new Date("2027-07-01").getTime() - Date.now()) / 86400000));
  return <div className="count"><b>{days}</b><span>days until 1 July 2027</span><small>Dates per Ministry of Finance, checked {CHECKED}</small></div>;
}
