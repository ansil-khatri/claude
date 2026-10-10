import { JsonLd } from "@/components/ui/JsonLd";
import Link from "next/link";
import { HubHero } from "@/components/sections/Simple";
import { Plain, CtaSection } from "@/components/sections/Blocks";
import { meta, breadcrumbLd } from "@/lib/seo";

export const metadata = meta({ title: "Free Tools for UAE Business Owners", desc: "Four free calculators in AED: Talabat commission, payment gateway fees, e-invoicing readiness and app cost.", path: "/tools" });
const T: [string, string, string][] = [
  ["/tools/talabat-commission-calculator", "Talabat commission calculator", "See what delivery apps cost your restaurant a year, and what you'd keep with your own ordering."],
  ["/tools/payment-gateway-fee-calculator", "Payment gateway fee calculator", "Stripe, Telr, Ziina and PayTabs fees on your real card volume."],
  ["/tools/e-invoicing-readiness-check", "E-invoicing readiness check", "Ten questions: your deadline, a score and a personal checklist."],
  ["/tools/app-cost-calculator", "App cost calculator", "An AED range and a time estimate for your app."],
];
export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Tools", "/tools"]])} />
      <HubHero kicker="Tools" h1="Free calculators," em="in AED." sub="Quick answers before you spend a dirham." wa="Hi, I'm on your tools page" />
      <Plain text="Four free tools for UAE owners: what delivery-app commission really costs a restaurant, which payment gateway leaves you the most money, whether your business is ready for e-invoicing, and what an app is likely to cost. Each shows its method and assumptions, and none stores your numbers." facts={[["Price", "Free"], ["Currency", "AED"], ["Data stored", "None"], ["Checked", "October 2026"]]} />
      <section className="sec"><div className="w"><div className="card-grid">{T.map(([h, t, d]) => <Link key={h} href={h} className="g-card rv"><span className="cat">Free tool</span><h3>{t}</h3><p>{d}</p><span style={{ fontWeight: 700 }}>Open →</span></Link>)}</div></div></section>
      <CtaSection h="Want a person to check the numbers? 30 minutes, free." lead="Bring your results and we'll tell you what to do next." steps={["Pick a time that works for you", "Share your results", "Get a plan and fixed price within 48 hours"]} wa="Hi, I used your tools" />
    </>
  );
}
