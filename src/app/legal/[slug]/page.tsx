import { notFound } from "next/navigation";
import { meta } from "@/lib/seo";
import { PageHero, slugify } from "@/components/sections/Blocks";

const DOCS: Record<string, { title: string; intro: string; sections: [string, string][] }> = {
  privacy: { title: "Privacy policy", intro: "Outline only. A lawyer must write and approve the final text, in English and Arabic, before launch.", sections: [["What we collect", "[lawyer to write] Name, business, WhatsApp number and what you tell us when you book a call or send a brief."], ["Why we use it", "[lawyer to write] To reply to your enquiry, prepare a quote and run the project."], ["Analytics", "Analytics cookies load only after you accept the consent banner."], ["Your rights", "[lawyer to write] Access, correction and deletion under UAE PDPL."], ["Contact", "[lawyer to write] Data controller details and contact."]] },
  terms: { title: "Terms", intro: "Outline only. A lawyer must write and approve the final text before launch.", sections: [["Services and scope", "[lawyer to write]"], ["Prices, VAT and payment terms", "Prices are fixed in AED and exclude 5% VAT. Under AED 20,000 is paid 50% at start and 50% at launch; above that, 30%, 40% and 30%."], ["Ownership", "Accounts, domain and code are in the client's name. Intellectual property transfers on final payment. [lawyer to confirm]"], ["Liability and warranties", "[lawyer to write] No guarantee of rankings, traffic or sales."]] },
  cookies: { title: "Cookies", intro: "Outline only. The cookie list is finalised with the analytics set-up.", sections: [["Essential cookies", "A small cookie remembers your consent choice and the first-visit intro."], ["Analytics", "Only with consent."], ["How to change your choice", "Clear site data in your browser to see the consent banner again."]] },
};
export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(DOCS).map((slug) => ({ slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const d = DOCS[slug];
  return d ? meta({ title: d.title, desc: d.intro, path: `/legal/${slug}` }) : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const d = DOCS[slug]; if (!d) notFound();
  return (
    <>
      <PageHero trail={[["Home", "/"], ["Legal"], [d.title]]} kicker="Legal" h={d.title} sub={d.intro} />
      <section className="sec-s themed t-dark"><div className="w art-grid">
        <aside className="toc"><b>On this page</b>{d.sections.map(([h]) => <a key={h} href={`#${slugify(h)}`}>{h}</a>)}</aside>
        <div className="prose">{d.sections.map(([h, t]) => <section key={h}><h2 id={slugify(h)}>{h}</h2><p>{t}</p></section>)}</div>
      </div></section>
    </>
  );
}
