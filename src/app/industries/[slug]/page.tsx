import { notFound } from "next/navigation";
import { INDUSTRY_PAGES, industryPage } from "@content/industries";
import { PageTemplate } from "@/components/sections/PageTemplate";
import { SolutionLinks } from "@/components/sections/SolutionLinks";
import { meta } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => INDUSTRY_PAGES.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = industryPage(slug);
  return p ? meta({ title: p.seo.title, desc: p.seo.desc, path: `/industries/${slug}` }) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = industryPage(slug);
  if (!p) notFound();
  return (
    <>
      <PageTemplate p={p} kind="industry" path={`/industries/${slug}`} parent={{ href: "/industries", label: "Industries" }} />
      <SolutionLinks slug={slug} />
    </>
  );
}
