import { meta } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import { webPageLd, breadcrumbLd } from "@/lib/schema";
import { CONTACT } from "@content/v3/site";
import { site, waLink } from "@/config/site";
import { Booking } from "@/components/ui/Booking";
import { WaBtn } from "@/components/ui/Buttons";
import { PageHero } from "@/components/sections/Blocks";

export const metadata = meta({ title: "Contact: Start a Project in Dubai", desc: "Book a free 30-minute call or message us on WhatsApp. Tell us what you sell and what is not working. You get a reply within one working day.", path: "/contact" });

export default function Contact() {
  const channels = [
    { label: "Email", value: site.email, note: "Best for briefs, files and links." },
    { label: "WhatsApp", value: site.phoneDisplay, note: "Best for quick questions and arranging a call." },
    { label: "Hours", value: site.hours, note: "We reply to every enquiry within one working day." },
    { label: "Location", value: `${site.baseLocation}, UAE`, note: "Meetings by appointment, in Dubai or online." },
  ];
  return (
    <>
      <JsonLd data={webPageLd("Contact", "/contact", "Start a project", "ContactPage")} /><JsonLd data={breadcrumbLd([["Home", "/"], ["Contact", "/contact"]])} />
      <PageHero trail={[["Home", "/"], ["Contact"]]} kicker="Contact" h="Tell us what you want" dim="to sell, or stop doing by hand." />
      <section className="sec-s themed t-dark"><div className="w two">
        <div>
          <ol className="steps" style={{ marginBottom: 40 }}>{CONTACT.steps.map((s, i) => <li key={i} className="step" style={{ gridTemplateColumns: "60px 1fr" }}><span className="wk">0{i + 1}</span><p style={{ color: "var(--fg)" }}>{s}</p></li>)}</ol>
          <div className="chan">{channels.map((c) => <div key={c.label}><span>{c.label}</span><b>{c.value}</b><small>{c.note}</small></div>)}</div>
          <div style={{ marginTop: 30 }}><WaBtn text="Hi, I'd like to talk about a project" /></div>
        </div>
        <Booking />
      </div></section>
    </>
  );
}
