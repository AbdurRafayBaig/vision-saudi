import type { Metadata } from "next";
import type { Components } from "react-markdown";
import Markdown from "react-markdown";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MASTER_INSIGHTS } from "@/data/insights";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
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
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#059669]/5 blur-[160px]" />
      </div>

      <article className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-8">
          <Button variant="outline" size="sm" href="/insights" className="text-xs font-bold uppercase tracking-wider">
            <ArrowLeft className="h-4 w-4 shrink-0 mr-1" />
            <span>Back to Insights</span>
          </Button>
        </div>

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

        <div className="p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 border-l-4 border-l-[#10E784] text-[#D8CCB8] text-xl font-display italic mb-12 shadow-2xl">
          &ldquo;{article.excerpt}&rdquo;
        </div>

        <div className="space-y-6 text-[#D8CCB8] text-lg font-light leading-relaxed">
          <Markdown components={markdownComponents}>{article.contentMarkdown}</Markdown>
        </div>
      </article>
    </div>
  );
}
