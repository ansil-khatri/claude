import { HubHero } from "@/components/sections/Simple";
import { Plain, Head } from "@/components/sections/Blocks";
import { Booking } from "@/components/ui/Booking";
import { WaBtn } from "@/components/ui/Buttons";
import { ContactForm } from "@/components/sections/ContactClient";
import { meta } from "@/lib/seo";
import { site, footerLine } from "@/config/site";

export const metadata = meta({ title: `Contact ${site.brand} · Book a Call or WhatsApp Us`, desc: "Book a free 30-minute call, WhatsApp us, or send the short form. We reply within an hour on working days (Mon–Fri, 9:00–18:00 Dubai time).", path: "/contact" });

export default function Page() {
  return (
    <>
      <HubHero kicker="Contact" h1="Tell us what's going on." em="We'll tell you what it takes." sub="Book a call, message us on WhatsApp, or send a short form. We reply within the hour." wa="Hi, I'm on your contact page" />
      <Plain text="Book a free 30-minute call, WhatsApp us, or send the short form. We reply within an hour on working days (Mon–Fri, 9:00–18:00 Dubai time) and give you a price range on the first call." facts={[["Hours", "Mon–Fri GST"], ["Reply", "Within 1 hour"], ["Call", "30 minutes, free"], ["Based in", "Dubai"]]} />
      <section className="sec"><div className="w">
        <div className="tool" style={{ alignItems: "stretch" }}>
          <div id="book"><Booking /></div>
          <div style={{ display: "grid", gap: 22 }}>
            <div className="tool-in"><span className="eyebrow"><i />WhatsApp</span><h3 style={{ font: "800 26px/1.15 var(--font-sans)", letterSpacing: "-.04em", margin: "12px 0" }}>Replies within an hour, Mon–Fri.</h3>
              <div className="qr" aria-label="QR code placeholder for wa.me link"><span>QR · wa.me/{site.whatsappNumber}</span></div><WaBtn text="Hi, I'm on your contact page" className="" /></div>
            <div className="tool-in"><span className="eyebrow"><i />Email &amp; phone</span><p style={{ margin: "12px 0 0", font: "700 20px/1.5 var(--font-sans)" }}><a href={`mailto:${site.email}`}>{site.email}</a><br />{site.phoneDisplay}</p><p className="note">{footerLine}</p></div>
          </div>
        </div>
      </div></section>
      <section className="sec-tight"><div className="w two-col"><div><Head eyebrow="Or send a short form" title="Prefer to write it down?" /></div><ContactForm /></div></section>
      <section className="sec-tight"><div className="w"><Head eyebrow="What happens next" title="Three steps." />
        <ol className="cta-steps" style={{ color: "var(--ink)" }}>{["We reply within an hour on working days.", "A 30-minute call to understand the business.", "A fixed price in writing within 48 hours."].map((s) => <li key={s} style={{ color: "var(--ink)" }}>{s}</li>)}</ol></div></section>
    </>
  );
}
