import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { site, url } from "@/config/site";
import { Nav } from "@/components/shell/Nav";
import { Footer } from "@/components/shell/Footer";
import { Motion } from "@/components/shell/Motion";
import { WaFloat } from "@/components/shell/WaFloat";
import { Analytics } from "@/components/shell/Analytics";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(url()),
  title: { default: `App, Website & Software Company in Dubai & UAE · ${site.brand}`, template: `%s · ${site.brand}` },
  description: "We build the stores, apps, WhatsApp assistants and systems that run UAE businesses. Fixed AED prices, Arabic + English, based in Dubai.",
  openGraph: { siteName: site.brand, locale: "en_AE", type: "website" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#0a0a0b", width: "device-width", initialScale: 1 };

const org = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization", "@id": url("/#org"), name: site.brand, url: url(), logo: url("/icon.svg"), email: site.email,
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
      contactPoint: { "@type": "ContactPoint", telephone: site.phoneDisplay, contactType: "sales", availableLanguage: ["English", "Arabic"] },
    },
    { "@type": "WebSite", "@id": url("/#site"), url: url(), name: site.brand, inLanguage: "en-AE", publisher: { "@id": url("/#org") } },
  ],
};

/** Runs before paint. Only ever adds classes that hide what the motion engine is about to animate, and removes them again after 3.5 s if JS never finishes. */
const PRE = `(function(){try{var d=document.documentElement;if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('m-pre');if(!sessionStorage.getItem('seen')){sessionStorage.setItem('seen','1');d.classList.add('m-load');}setTimeout(function(){d.classList.remove('m-pre','m-load')},3500);}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AE" dir="ltr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: PRE }} />
      </head>
      <body>
        <div id="loader" aria-hidden="true"><div className="ld-in"><span className="ld-word"><b data-load-word>{site.brand}</b></span><span className="ld-n" data-load-n>00</span><i className="ld-bar" data-load-bar /></div></div>
        <div id="curtain" aria-hidden="true"><span>{site.brand}</span></div>
        <div id="pbar" className="pbar" aria-hidden="true" />
        <a href="#main" className="sr-only">Skip to content</a>
        <Nav />
        <div className="page-body" id="page-body">
          <main id="main">{children}</main>
        </div>
        <Footer />
        <WaFloat />
        <Motion />
        <Analytics />
        <JsonLd data={org} />
        <div className="cur-dot" id="cur-dot" aria-hidden />
        <div className="cur-ring" id="cur-ring" aria-hidden />
      </body>
    </html>
  );
}
