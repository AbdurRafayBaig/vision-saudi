"use client";

import React from "react";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { Compass, Shield, Award, TrendingUp } from "lucide-react";

export default function DirectionPositioning() {
  return (
    <section id="direction" className="py-[var(--space-section-lg)] bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      {/* Background Royal Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#10E784]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#059669]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Marker */}
          <div className="lg:col-span-5">
            <SectionMarker number="01" title="Direction & Positioning" />
            <h2 className="font-display text-3xl sm:text-5xl text-slate-900 dark:text-white font-bold tracking-tight leading-tight mb-6">
              Saudi Arabia Isn't A Market We're Discovering. <br />
              <span className="text-[#059669] dark:text-[#10E784]">It's A Market We Know.</span>
            </h2>
            <p className="text-slate-600 dark:text-[#A39B8B] text-base leading-relaxed mb-8 font-light">
              Our experience has been built through years of operating in the Kingdom — delivering projects, implementing systems, navigating institutions, and building relationships across government, semi-government, and private enterprise.
            </p>
            <div className="p-6 bg-white dark:bg-[#101312] border-l-4 border-[#10E784] text-sm font-display italic text-slate-700 dark:text-[#E2D9C8] rounded-2xl shadow-xl backdrop-blur-md">
              "Perspective comes from years inside the environment — understanding not just the regulations, but the commercial rhythm behind them."
            </div>
          </div>

          {/* Right Column: 4 Guiding Principles Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: Compass,
                title: "Perspective",
                desc: "Years inside the Kingdom shape how we see the market — and where it's going next.",
              },
              {
                icon: Shield,
                title: "Precision",
                desc: "We approach every engagement with structure, legal rigor, and attention to detail.",
              },
              {
                icon: Award,
                title: "Partnership",
                desc: "We build commercial relationships for the long term, not simply for single transactions.",
              },
              {
                icon: TrendingUp,
                title: "Progress",
                desc: "The Kingdom keeps moving forward. We ensure your technology and strategy move with it.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl hover:border-[#10E784] hover:-translate-y-1 transition-all duration-300 group shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#10E784]/15 border border-[#10E784]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#10E784] transition-all duration-300">
                  <item.icon className="h-6 w-6 text-[#059669] dark:text-[#10E784] group-hover:text-[#0A0D0C] transition-colors" />
                </div>
                <h3 className="font-display text-xl text-slate-900 dark:text-white mb-2 font-bold group-hover:text-[#059669] dark:group-hover:text-[#10E784] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-[#A39B8B] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
