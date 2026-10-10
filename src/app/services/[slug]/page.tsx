import { notFound } from "next/navigation";
import { SERVICE_PAGES, servicePage } from "@content/services";
import { PageTemplate } from "@/components/sections/PageTemplate";
import { meta } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => SERVICE_PAGES.filter((p) => p.slug !== "agencies").map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = servicePage(slug);
  return p ? meta({ title: p.seo.title, desc: p.seo.desc, path: `/services/${slug}` }) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = servicePage(slug);
  if (!p || slug === "agencies") notFound();
  return <PageTemplate p={p} kind="service" path={`/services/${slug}`} parent={{ href: "/services", label: "Services" }} />;
}
