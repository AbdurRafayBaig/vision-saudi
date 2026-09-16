"use client";

import React from "react";
import Link from "next/link";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { MASTER_EXPERIENCE_TRACK_RECORD, KEY_CREDIBILITY_METRICS } from "@/data/experience";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

export default function ExperienceShowcase() {
  return (
    <section className="py-[var(--space-section-lg)] bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      {/* Royal Ambient Background Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#10E784]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <SectionMarker number="06" title="Experience & Credibility" />
            <h2 className="font-display text-3xl sm:text-5xl text-slate-900 dark:text-white font-bold tracking-tight mb-4">
              We've Been Here Before.
            </h2>
            <p className="text-slate-600 dark:text-[#A39B8B] text-base max-w-2xl font-light leading-relaxed">
              Through our strategic technology and delivery partner SLNEE, our wider experience includes enterprise technology implementation, multi-million-riyal projects, and work across government, semi-government, and private sector organizations.
            </p>
          </div>
          <div className="p-5 bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 max-w-xs shrink-0 text-xs rounded-2xl shadow-sm">
            <span className="text-[#059669] dark:text-[#10E784] font-mono uppercase tracking-wider font-bold block mb-1">
              Verified Legal Attribution
            </span>
            <span className="text-slate-600 dark:text-[#A39B8B] font-light">
              Selected project experience delivered through strategic technology partner SLNEE.
            </span>
          </div>
        </div>

        {/* 4 Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {KEY_CREDIBILITY_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-8 bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl relative group hover:border-[#10E784] hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              <div className="text-3xl sm:text-4xl font-display text-[#059669] dark:text-[#10E784] font-bold mb-2">
                {metric.stat}
              </div>
              <div className="text-xs uppercase font-semibold tracking-wider text-slate-900 dark:text-white mb-2">
                {metric.label}
              </div>
              <p className="text-xs text-slate-500 dark:text-[#A39B8B] font-light">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Selected Project Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {MASTER_EXPERIENCE_TRACK_RECORD.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className="p-8 sm:p-10 bg-white dark:bg-[#101312] border border-slate-200 dark:border-white/10 rounded-3xl flex flex-col justify-between hover:border-[#10E784] transition-all duration-300 group shadow-2xl backdrop-blur-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#059669] dark:text-[#10E784] uppercase tracking-wider px-3.5 py-1 bg-[#10E784]/15 border border-[#10E784]/30 rounded-full font-mono">
                    {item.clientSector} SECTOR
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-[#A39B8B]">
                    Delivered via {item.deliveryPartner}
                  </span>
                </div>

                <h3 className="font-display text-2xl text-slate-900 dark:text-white font-bold mb-4 group-hover:text-[#059669] dark:group-hover:text-[#10E784] transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 dark:text-[#A39B8B] text-sm leading-relaxed mb-6 font-light">
                  {item.summary}
                </p>

                <div className="space-y-2 mb-6 bg-slate-50 dark:bg-white/[0.03] p-4 border border-slate-200 dark:border-white/10 rounded-2xl">
                  {item.impactMetrics.map((m, i) => (
                    <div key={i} className="text-xs text-slate-700 dark:text-[#E2D9C8] flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-[#059669] dark:text-[#10E784] shrink-0" />
                      <span className="font-medium">{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center gap-2 flex-wrap text-[11px] font-medium text-slate-500 dark:text-[#A39B8B]">
                {item.capabilitiesUsed.map((c, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 rounded-full text-slate-700 dark:text-[#E2D9C8]">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#10E784]/10 hover:bg-[#10E784] border border-[#10E784]/40 text-[#059669] dark:text-[#10E784] hover:text-slate-900 dark:hover:text-[#0A0D0C] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md group"
          >
            <span>View Complete Attributed Track Record</span>
            <ArrowUpRight className="h-4 w-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
