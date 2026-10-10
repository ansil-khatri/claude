import { servicePage } from "@content/services";
import { PageTemplate } from "@/components/sections/PageTemplate";
import { meta } from "@/lib/seo";

const p = servicePage("agencies")!;
export const metadata = meta({ title: p.seo.title, desc: p.seo.desc, path: "/agencies" });
export default function Page() {
  return <PageTemplate p={p} kind="service" path="/agencies" parent={{ href: "/services", label: "Services" }} />;
}
