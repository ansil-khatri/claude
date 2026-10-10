import { JsonLd } from "@/components/ui/JsonLd";
import Link from "next/link";
import { INDUSTRY_PAGES } from "@content/industries";
import { BRANDS } from "@content/brands";
import { SiteInBrowser, AppInPhone } from "@/components/mock/BrandMocks";
import { HubHero } from "@/components/sections/Simple";
import { Plain, CtaSection } from "@/components/sections/Blocks";
import { meta, breadcrumbLd } from "@/lib/seo";

export const metadata = meta({ title: "Example Projects: Websites, Apps and Systems for UAE Businesses", desc: "Concept projects showing what we build for restaurants, salons, laundries, garages, AC companies and phone repair shops. Every number is illustrative.", path: "/work" });

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Work", "/work"]])} />
      <HubHero kicker="Work" h1="Example projects," em="until real ones go live." sub="Every project below is a concept with illustrative numbers. We replace them with real, permitted client work as projects finish." wa="Hi, I'm on your work page" />
      <Plain text="These are example projects for the kinds of UAE businesses we serve. Websites, apps, dashboards and WhatsApp flows are built the same way as real client work, but names, numbers and results are illustrative and labelled that way. Real case studies with permission are added here as soon as they exist." facts={[["Status", "Example projects"], ["Industries", "6"], ["Numbers", "Illustrative"], ["Real cases", "Coming"]]} />
      <section className="sec"><div className="w"><div className="gal">
        {INDUSTRY_PAGES.map((p) => {
          const b = BRANDS[p.caseStudy.brand];
          return (
            <Link key={p.slug} href={`/work/${b.key}`} className="gal-card" data-cursor="View" style={{ ["--ga" as string]: b.accent } as React.CSSProperties}>
              <div className="gal-vis"><div className="gal-site"><SiteInBrowser k={b.key} /></div><div className="gal-phone"><AppInPhone k={b.key} kind="home" /></div></div>
              <div className="gal-info"><div><h3>{p.caseStudy.h}</h3><p>{b.name} · {b.area}</p></div><span className="ex-chip" style={{ background: "var(--soft)", color: "var(--mute)" }}>Example</span></div>
            </Link>
          );
        })}
      </div></div></section>
      <CtaSection h="Want to see how this would look for your business? 30 minutes." lead="Tell us about the business and we'll show you the closest example." steps={["Pick a time that works for you", "Tell us about the business", "Get a plan and fixed price within 48 hours"]} wa="Hi, I'd like to see work like mine" />
    </>
  );
}
