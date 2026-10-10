import { JsonLd } from "@/components/ui/JsonLd";
import Link from "next/link";
import { INDUSTRIES } from "@content/catalog";
import { industryPage } from "@content/industries";
import { BRANDS } from "@content/brands";
import { AppInPhone } from "@/components/mock/BrandMocks";
import { HubHero } from "@/components/sections/Simple";
import { Plain, CtaSection } from "@/components/sections/Blocks";
import { WaBtn } from "@/components/ui/Buttons";
import { meta, breadcrumbLd } from "@/lib/seo";

export const metadata = meta({ title: "Software for UAE Restaurants, Salons, Garages & More", desc: "Six industries we know from the counter up: restaurants, salons, laundries, garages, AC and maintenance companies, and phone repair shops. Fixed AED prices.", path: "/industries" });

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Industries", "/industries"]])} />
      <HubHero kicker="Industries" h1="We've seen how your business" em="actually runs." sub="Six industries we know from the counter up, and the software they already use." wa="Hi, I'm on your industries page" />
      <Plain text="We build websites, apps and back-office software for six kinds of UAE business: restaurants and cloud kitchens, salons and spas, laundries, garages, AC and maintenance companies, and phone repair shops. Every package starts with a website from AED 7,900, with a full upgrade from AED 49,000 and multi-location platforms from AED 105,000." facts={[["From", "AED 7,900"], ["Industries", "6"], ["Languages", "English + Arabic"], ["Based in", "Dubai"]]} />
      <section className="sec"><div className="w">
        <div className="igrid">
          {INDUSTRIES.map((i) => {
            const b = BRANDS[i.brand]; const p = industryPage(i.slug)!;
            return (
              <article key={i.slug} className="ind-card rv" style={{ background: `linear-gradient(150deg, ${b.accent}, ${b.dark ? "#0d0d0f" : "#16161a"})`, color: b.key === "voltwire" ? "#fff" : "#fff" }}>
                <div>
                  <span className="nm">{b.name.toUpperCase()} · {b.area.toUpperCase()}</span>
                  <h3><Link href={`/industries/${i.slug}`}>{i.h1[0]} {i.h1[1]}</Link></h3>
                  <div className="chips">{i.worksWith.map((w) => <span key={w} className="chip" style={{ background: "rgba(255,255,255,.14)", color: "#fff", borderColor: "rgba(255,255,255,.22)" }}>{w}</span>)}</div>
                  <div className="res">{p.caseStudy!.metrics.slice(0, 2).map(([n, l]) => <div key={l}><b>{n}</b><small>{l}</small></div>)}</div>
                  <span className="ex-chip">Example project · illustrative numbers</span>
                  <div className="sol"><Link href={`/industries/${i.slug}`}>See {i.name.split(" ")[0].toLowerCase()} page →</Link>{i.solutions.map((s) => <Link key={s.slug} href={`/industries/${i.slug}/${s.slug}`}>{s.name}</Link>)}</div>
                </div>
                <div className="ph" aria-hidden><AppInPhone k={i.brand} kind="home" /></div>
              </article>
            );
          })}
        </div>
      </div></section>
      <section className="sec-tight"><div className="w"><div className="soft-sec" style={{ margin: 0, padding: "clamp(28px,5vw,60px)", display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ maxWidth: 640 }}><h2 className="h2" style={{ marginTop: 0 }}>Not on the list?</h2><p className="lead">We also work with clinics, real-estate brokers, car rentals and retail brands. Tell us how your business runs.</p></div>
        <WaBtn text="Hi, my industry isn't listed" />
      </div></div></section>
      <CtaSection h="Tell us how your business runs today. 30 minutes, and you'll know what to fix first." lead="No pitch deck, no pressure." steps={["Pick a time that works for you", "Walk us through a typical day", "Get a plan and fixed price within 48 hours"]} wa="Hi, I'd like to talk about my business" />
    </>
  );
}
