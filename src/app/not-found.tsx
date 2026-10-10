import Link from "next/link";
import { MONEY } from "@content/v3/nav";
import { WaBtn } from "@/components/ui/Buttons";

export default function NotFound() {
  return (
    <section className="nf themed t-dark"><div className="w">
      <span className="label">Error 404</span>
      <h1 className="display h1">This page moved, or never existed.</h1>
      <p className="lead">Try one of our service pages instead.</p>
      <div className="svc-grid">{MONEY.slice(0, 6).map((m) => <Link key={m.slug} href={`/${m.slug}`} className="svc" style={{ minHeight: 120 }}><b>{m.label}</b><span className="tlink">Open →</span></Link>)}</div>
      <div className="cta-row"><Link className="btn btn-p" href="/">Home <i className="arr">→</i></Link><Link className="btn btn-o" href="/pricing">Pricing</Link><WaBtn text="Hi, I couldn't find a page on your website" /></div>
    </div></section>
  );
}
