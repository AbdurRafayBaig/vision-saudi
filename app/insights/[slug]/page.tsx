import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MASTER_INSIGHTS } from "@/data/insights";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const article = MASTER_INSIGHTS.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="pt-36 pb-24 bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white min-h-screen relative overflow-hidden transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#10E784]/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#059669]/10 blur-[160px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-8">
          <Button variant="outline" size="sm" href="/insights" className="text-xs font-bold uppercase tracking-wider">
            <ArrowLeft className="h-4 w-4 shrink-0 mr-1" />
            <span>Back to Insights</span>
          </Button>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold text-[#059669] dark:text-[#10E784] uppercase tracking-widest px-4 py-1.5 bg-[#10E784]/15 border border-[#10E784]/30 rounded-full shadow-[0_0_15px_rgba(16,231,132,0.15)]">
            {article.category}
          </span>
          <span className="text-xs font-mono text-slate-500 dark:text-[#B9B3A8]">
            {article.publishedDate} · {article.readTime}
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl text-slate-900 dark:text-white font-bold tracking-tight mb-8 leading-[1.08]">
          {article.title}
        </h1>

        <div className="p-8 rounded-3xl bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 border-l-4 border-l-[#10E784] text-slate-700 dark:text-[#D8CCB8] text-xl font-display italic mb-12 shadow-2xl">
          "{article.excerpt}"
        </div>

        <div className="space-y-6 text-slate-700 dark:text-[#D8CCB8] text-lg font-light leading-relaxed">
          <p>
            Entering the Kingdom of Saudi Arabia represents one of the most compelling commercial expansion opportunities in the global economy. Powered by Vision 2030 initiatives, massive infrastructure expenditure, and regulatory modernization, foreign direct investment into Riyadh and Jeddah continues to reach historic highs.
          </p>
          <h2 className="font-display text-2xl text-slate-900 dark:text-white font-bold mt-10 mb-4">
            The 5-Stage Client Journey Framework
          </h2>
          <p>
            To build a resilient enterprise presence in Saudi Arabia, businesses must move beyond traditional administrative registration into an integrated operational ecosystem:
          </p>
          <ul className="space-y-4 text-slate-700 dark:text-[#D8CCB8] font-light">
            <li className="p-4 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 flex items-start gap-3 shadow-sm">
              <span className="font-mono font-bold text-[#059669] dark:text-[#10E784] shrink-0 uppercase tracking-wider">ESTABLISH:</span>
              <span>Securing MISA foreign investment licensing, entity legal structuring, Articles of Association, and Ministry of Commerce Commercial Registration (CR).</span>
            </li>
            <li className="p-4 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 flex items-start gap-3 shadow-sm">
              <span className="font-mono font-bold text-[#059669] dark:text-[#10E784] shrink-0 uppercase tracking-wider">ACTIVATE:</span>
              <span>Enrolling mandatory government digital platforms including Qiwa (Human Resources), Muqeem (Passports), GOSI (Social Insurance), and ZATCA (Tax Authority).</span>
            </li>
            <li className="p-4 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 flex items-start gap-3 shadow-sm">
              <span className="font-mono font-bold text-[#059669] dark:text-[#10E784] shrink-0 uppercase tracking-wider">OPERATE:</span>
              <span>Implementing localized enterprise ERP, ZATCA e-invoicing compliance, Wages Protection System (WPS) payroll integration, and SamMail corporate communications.</span>
            </li>
            <li className="p-4 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 flex items-start gap-3 shadow-sm">
              <span className="font-mono font-bold text-[#059669] dark:text-[#10E784] shrink-0 uppercase tracking-wider">CONNECT:</span>
              <span>Sourcing Grade-A commercial office space, securing Balady municipal lease attestations, and embedding local legal and banking relationships.</span>
            </li>
            <li className="p-4 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 flex items-start gap-3 shadow-sm">
              <span className="font-mono font-bold text-[#059669] dark:text-[#10E784] shrink-0 uppercase tracking-wider">GROW:</span>
              <span>Expanding into Saudi Premium Residency pathways, joint ventures, and strategic partnership ecosystems.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

