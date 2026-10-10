import { meta } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import { webPageLd, breadcrumbLd } from "@/lib/schema";
import { PROCESS } from "@content/v3/site";
import { PageHero, CtaBand } from "@/components/sections/Blocks";

export const metadata = meta({ title: "Our Process: From Discovery Call to Launch", desc: "How a Shopify, WordPress or software project runs with us: nine steps from the first call and fixed quote to launch and care plan, with what we need from you at each.", path: "/process" });

export default function Process() {
  return (
    <>
      <JsonLd data={webPageLd("Process", "/process", "How a project runs")} /><JsonLd data={breadcrumbLd([["Home", "/"], ["Process", "/process"]])} />
      <PageHero trail={[["Home", "/"], ["Process"]]} kicker="Process" h="Nine steps," dim="no surprises." sub="What happens from the first call to launch, and what we need from you at each step." />
      <section className="sec themed t-paper"><div className="w"><ol className="steps" data-stagger>
        {PROCESS.map((s) => <li key={s.n} className="step"><span className="wk">{s.n} · {s.wk}</span><h3>{s.t}</h3><div><p>{s.p}</p><p><small>From you</small>{s.you}</p></div></li>)}
      </ol></div></section>
      <CtaBand h="Start with the call." lead="Thirty minutes. We will say early if we are not the right fit." wa="Hi, I'd like to book a discovery call" />
    </>
  );
}
