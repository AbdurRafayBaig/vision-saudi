import type { Metadata } from "next";
import type { Components } from "react-markdown";
import Markdown from "react-markdown";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MASTER_INSIGHTS } from "@/data/insights";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SITE, absoluteUrl } from "@/lib/site-config";

type Params = { params: Promise<{ slug: string }> };

const findArticle = (slug: string) => MASTER_INSIGHTS.find((a) => a.slug === slug);

// Pre-render every article at build time; unknown slugs fall through to notFound() below.
export function generateStaticParams() {
  return MASTER_INSIGHTS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const article = findArticle((await params).slug);
  if (!article) return {};
  const path = `/insights/${article.slug}`;
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: path,
      publishedTime: article.publishedISO,
      section: article.category,
    },
  };
}

// Markdown elements styled to match the site's editorial article design.
const markdownComponents: Components = {
  h2: ({ children }) => (
    <h2 className="font-display text-2xl text-white font-bold mt-10 mb-4">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-display text-xl text-white font-bold mt-8 mb-3">{children}</h3>
  ),
  p: ({ children }) => <p>{children}</p>,
  ol: ({ children }) => <ol className="space-y-4 font-light">{children}</ol>,
  ul: ({ children }) => <ul className="space-y-4 font-light">{children}</ul>,
  li: ({ children }) => (
    <li className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start gap-3 shadow-sm">
      <span>{children}</span>
    </li>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-[#10E784] uppercase tracking-wider">{children}</strong>
  ),
  em: ({ children }) => <em className="text-white not-italic font-medium">{children}</em>,
  a: ({ href, children }) => (
    <a href={href} className="text-[#10E784] underline underline-offset-4 hover:text-white">
      {children}
    </a>
  ),
};

export default async function ArticlePage({ params }: Params) {
  const article = findArticle((await params).slug);
  if (!article) notFound();
  const others = MASTER_INSIGHTS.filter((a) => a.slug !== article.slug).slice(0, 3);

  const url = absoluteUrl(`/insights/${article.slug}`);

  return (
    <div className="pt-36 pb-24 bg-[#0A0D0C] text-white min-h-screen relative overflow-hidden">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          datePublished: article.publishedISO,
          articleSection: article.category,
          mainEntityOfPage: url,
          url,
          image: absoluteUrl("/images/og-default.jpg"),
          author: { "@type": "Organization", name: SITE.name, url: SITE.url },
          publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
        }}
      />

      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#10E784]/5 blur-[180px]" />
        <div className="absolute bottom-0 end-0 w-[400px] h-[400px] rounded-full bg-[#059669]/5 blur-[160px]" />
      </div>

      <article className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <Breadcrumbs trail={[{ label: "Insights", href: "/insights" }, { label: article.title }]} bare />

        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold text-[#10E784] uppercase tracking-widest px-4 py-1.5 bg-[#10E784]/15 border border-[#10E784]/30 rounded-full shadow-[0_0_15px_rgba(16,231,132,0.07)]">
            {article.category}
          </span>
          <span className="text-xs font-mono text-[#B9B3A8]">
            <time dateTime={article.publishedISO}>{article.publishedDate}</time> · {article.readTime}
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl text-white font-bold tracking-tight mb-8 leading-[1.08]">
          {article.title}
        </h1>

        <div className="p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 border-s-4 border-s-[#10E784] text-[#D8CCB8] text-xl font-display italic mb-12 shadow-2xl">
          &ldquo;{article.excerpt}&rdquo;
        </div>

        <div className="space-y-6 text-[#D8CCB8] text-lg font-light leading-relaxed">
          <Markdown components={markdownComponents}>{article.contentMarkdown}</Markdown>
        </div>

        {/* An article that ends in nothing wastes the attention it just earned. */}
        <aside className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
            Planning this for your own company?
          </h2>
          <p className="text-sm text-[#94A3B8] mb-6 max-w-xl leading-relaxed">
            Tell us where you are and a senior strategist will come back with the
            specifics for your activity, ownership structure and timeline.
          </p>
          <Button variant="primary" size="lg" showArrow href="/contact">
            Speak to a strategist
          </Button>
        </aside>

        {others.length > 0 && (
          <nav aria-label="More insights" className="mt-12">
            <h2 className="font-display text-base font-bold text-white mb-4">Keep reading</h2>
            <ul className="space-y-3">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/insights/${other.slug}`}
                    className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-[#10E784]/60"
                  >
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#10E784] transition-transform group-hover:translate-x-0.5" />
                    <span>
                      <span className="block text-sm font-semibold text-white">{other.title}</span>
                      <span className="block text-xs text-[#94A3B8] mt-0.5">
                        {other.category} · {other.readTime}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </article>
    </div>
  );
}
