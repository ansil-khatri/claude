import Link from "next/link";
import { industry } from "@content/catalog";
import { Head } from "./Blocks";

/** Row of solution-page links on each industry page (internal linking per seo-uae/03). */
export function SolutionLinks({ slug }: { slug: string }) {
  const ind = industry(slug);
  if (!ind?.solutions.length) return null;
  return (
    <section className="sec-tight"><div className="w">
      <Head eyebrow="Go deeper" title="Looking for one specific job?" lead="Short pages for the exact thing you're searching for." />
      <div className="rgrid sol" style={{ ["--cols" as string]: Math.min(4, ind.solutions.length) } as React.CSSProperties}>
        {ind.solutions.map((s) => (
          <Link key={s.slug} href={`/industries/${slug}/${s.slug}`} className="rc rv" data-cursor="Open">
            <span className="k">{ind.name.toUpperCase()}</span><h4>{s.name}</h4><span className="go">Explore →</span>
          </Link>
        ))}
      </div>
    </div></section>
  );
}
