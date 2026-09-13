"use client";

import React, { useState } from "react";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { FIVE_STAGE_CLIENT_JOURNEY } from "@/data/ecosystem";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FiveStageJourney() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = FIVE_STAGE_CLIENT_JOURNEY[activeStageIndex];

  return (
    <section className="py-[var(--space-section-lg)] bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      {/* Background Royal Ambient Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#10E784]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <SectionMarker number="03 & 04" title="The Client Journey" />
          <h2 className="font-display text-3xl sm:text-5xl text-slate-900 dark:text-white font-bold tracking-tight mb-4">
            Most Firms Get You Established. <br />
            <span className="text-[#059669] dark:text-[#10E784]">We Built What Comes Next.</span>
          </h2>
          <p className="text-slate-600 dark:text-[#A39B8B] text-base leading-relaxed font-light">
            A Saudi company on paper is only the beginning. The real work starts when the business needs to operate. Explore our 5-stage client journey from formation to market ecosystem integration.
          </p>
        </div>

        {/* Desktop Interactive Journey Stepper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Stage Selector Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {FIVE_STAGE_CLIENT_JOURNEY.map((item, idx) => {
              const isActive = idx === activeStageIndex;

              return (
                <button
                  key={item.stage}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-5 text-left border rounded-2xl transition-all duration-300 relative backdrop-blur-xl ${
                    isActive
                      ? "bg-[#10E784]/15 border-[#10E784] shadow-xl scale-[1.02]"
                      : "bg-white dark:bg-white/[0.03] border-slate-200 dark:border-white/10 hover:border-[#10E784]/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider ${
                      isActive ? "text-[#059669] dark:text-[#10E784]" : "text-slate-500 dark:text-[#A39B8B]"
                    }`}>
                      {item.label}
                    </span>
                    {isActive && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#10E784] shadow-[0_0_8px_rgba(16,231,132,0.8)]" />
                    )}
                  </div>
                  <div className={`font-display text-xl font-bold mt-1 ${
                    isActive ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-[#E2D9C8]"
                  }`}>
                    {item.stage}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-[#A39B8B] mt-1 line-clamp-1 font-light">
                    {item.headline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Stage Detail Display */}
          <div className="lg:col-span-7 bg-white dark:bg-[#101312] text-slate-900 dark:text-white border border-slate-200 dark:border-white/15 p-8 sm:p-10 rounded-3xl shadow-2xl flex flex-col justify-between relative overflow-hidden backdrop-blur-2xl">
            <div className="absolute top-0 right-0 p-8 font-mono text-8xl text-slate-200 dark:text-white/5 font-bold select-none pointer-events-none">
              0{activeStageIndex + 1}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.stage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="inline-block text-xs font-mono uppercase tracking-widest text-[#059669] dark:text-[#10E784] bg-[#10E784]/15 px-3.5 py-1 border border-[#10E784]/30 rounded-full mb-6 font-bold">
                  {activeStage.label}
                </div>

                <h3 className="font-display text-3xl sm:text-4xl text-slate-900 dark:text-white font-bold mb-4">
                  {activeStage.headline}
                </h3>

                <p className="text-slate-600 dark:text-[#A39B8B] text-base leading-relaxed mb-8 font-light">
                  {activeStage.description}
                </p>

                <div className="border-t border-slate-200 dark:border-white/10 pt-6 mb-8">
                  <h4 className="text-xs uppercase font-mono tracking-widest text-[#059669] dark:text-[#10E784] mb-4 font-semibold">
                    Core Stage Deliverables:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeStage.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-[#E2D9C8] p-3 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl">
                        <CheckCircle2 className="h-4 w-4 text-[#059669] dark:text-[#10E784] shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-[#A39B8B] relative z-10">
              <span>ONE RELATIONSHIP. ONE ECOSYSTEM.</span>
              <div className="flex gap-2">
                <button
                  disabled={activeStageIndex === 0}
                  onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-1.5 border border-slate-300 dark:border-white/20 hover:border-[#10E784] rounded-full disabled:opacity-30 text-slate-900 dark:text-white font-bold transition-all"
                >
                  PREV
                </button>
                <button
                  disabled={activeStageIndex === FIVE_STAGE_CLIENT_JOURNEY.length - 1}
                  onClick={() => setActiveStageIndex((prev) => Math.min(FIVE_STAGE_CLIENT_JOURNEY.length - 1, prev + 1))}
                  className="px-4 py-1.5 border border-slate-300 dark:border-white/20 hover:border-[#10E784] rounded-full disabled:opacity-30 text-slate-900 dark:text-white font-bold transition-all"
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
