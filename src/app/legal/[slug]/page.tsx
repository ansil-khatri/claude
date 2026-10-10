import { notFound } from "next/navigation";
import { HubHero } from "@/components/sections/Simple";
import { meta } from "@/lib/seo";
import { site } from "@/config/site";

const DOCS: Record<string, { title: string; intro: string; sections: [string, string][] }> = {
  privacy: { title: "Privacy policy", intro: "Outline only. A lawyer must write and approve the final text, in English and Arabic, before launch.", sections: [["What we collect", "[lawyer to write] Name, business, WhatsApp number and what you tell us when you book a call or send the form."], ["WhatsApp", "[lawyer to write] How we use WhatsApp conversations, opt-in and templates."], ["Analytics and cookies", "[lawyer to write] Consent-based analytics, what each cookie does."], ["Your rights under the UAE PDPL", "[lawyer to write] Access, correction, deletion and how to ask."], ["Contact", `${site.email}`]] },
  terms: { title: "Terms", intro: "Outline only. A lawyer must write and approve the final text before launch.", sections: [["Services and scope", "[lawyer to write]"], ["Prices, VAT and payment terms", "Prices are fixed in AED and exclude 5% VAT. See the pricing page."], ["Ownership", "You own the code, designs and accounts from the first payment."], ["Liability", "[lawyer to write]"], ["Governing law", "[lawyer to write]"]] },
  cookies: { title: "Cookies", intro: "Outline only. Consent banner copy and the cookie list are written with the analytics set-up.", sections: [["Essential cookies", "[to write]"], ["Analytics (GA4)", "Only with consent."], ["How to change your choice", "[to write]"]] },
};
export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(DOCS).map((slug) => ({ slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const d = DOCS[slug];
  return d ? meta({ title: d.title, desc: d.intro, path: `/legal/${slug}`, noindex: false }) : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const d = DOCS[slug]; if (!d) notFound();
  return (
    <>
      <HubHero kicker="Legal" h1={d.title} sub={d.intro} />
      <section className="sec"><div className="w art-grid">
        <aside className="toc"><b>On this page</b>{d.sections.map(([h]) => <a key={h} href={`#${h.toLowerCase().replace(/\W+/g, "-")}`}>{h}</a>)}</aside>
        <div className="prose">{d.sections.map(([h, t]) => <section key={h}><h2 id={h.toLowerCase().replace(/\W+/g, "-")}>{h}</h2><p>{t}</p></section>)}</div>
      </div></section>
    </>
  );
}
