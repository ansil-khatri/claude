import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque/opsz.css";
import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { site, url } from "@/config/site";
import { Nav } from "@/components/shell/Nav";
import { Footer } from "@/components/shell/Footer";
import { Motion } from "@/components/shell/Motion";
import { WaFloat } from "@/components/shell/WaFloat";
import { Analytics } from "@/components/shell/Analytics";
import { ConvertBar } from "@/components/ui/ConvertBar";
import { JsonLd } from "@/components/ui/JsonLd";
import { orgGraph } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(url()),
  title: { default: `Shopify & WordPress Agency in Dubai · ${site.brand}`, template: `%s · ${site.brand}` },
  description: "Dubai agency for Shopify, Shopify Plus, WordPress and custom theme development, plus ERP, WhatsApp automation and AI assistants. Fixed AED prices.",
  applicationName: site.brand, authors: [{ name: site.brand }], creator: site.brand,
  alternates: { types: { "application/rss+xml": url("/feed.xml") } },
  openGraph: { siteName: site.brand, locale: "en_AE", type: "website" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};
export const viewport: Viewport = { themeColor: "#060606", width: "device-width", initialScale: 1 };

/** Runs before paint. Only ever adds classes that hide what the motion engine is about to animate, and removes them again after 3.5 s if JS never finishes. */
const PRE = `(function(){try{var d=document.documentElement;if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('m-pre');if(!sessionStorage.getItem('seen')){sessionStorage.setItem('seen','1');d.classList.add('m-load');}setTimeout(function(){d.classList.remove('m-pre','m-load')},3500);}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AE" dir="ltr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: PRE }} />
      </head>
      <body>
        <div id="loader" aria-hidden="true"><div className="ld-in"><span className="ld-n"><i>Dubai · AE</i><i data-load-n>00</i></span><span className="ld-word"><b data-load-word>{site.brand}</b></span><i className="ld-bar" data-load-bar /></div></div>
        <div id="curtain" aria-hidden="true"><span>{site.brand}</span></div>
        <div id="pbar" className="pbar" aria-hidden="true" />
        <a href="#main" className="skip">Skip to content</a>
        <Nav />
        <div className="page-body" id="page-body">
          <main id="main">{children}</main>
        </div>
        <Footer />
        <ConvertBar />
        <WaFloat />
        <Motion />
        <Analytics />
        <JsonLd data={orgGraph()} />
        <div className="cur-dot" id="cur-dot" aria-hidden />
        <div className="cur-ring" id="cur-ring" aria-hidden />
      </body>
    </html>
  );
}
