"use client";

import React from "react";
import { motion } from "framer-motion";

const stages = [
  {
    number: "01",
    name: "Establish",
    headline: "Enter with confidence.",
    description:
      "MISA licensing, Commercial Registration, capital transfer, and corporate bank account setup. Your Saudi entity starts here.",
  },
  {
    number: "02",
    name: "Activate",
    headline: "Turn registration into readiness.",
    description:
      "Qiwa, GOSI, ZATCA, Balady — we activate every platform your company needs to hire, sign contracts, and begin operations.",
  },
  {
    number: "03",
    name: "Operate",
    headline: "Build the infrastructure behind the business.",
    description:
      "Enterprise ERP, corporate communications through SamMail, GRO management, payroll compliance, and digital systems — powered by SLNEE.",
  },
  {
    number: "04",
    name: "Connect",
    headline: "Business doesn't happen in isolation.",
    description:
      "Office sourcing, legal advisory, banking relationships, and connections to our Service and Success Partner networks across the Kingdom.",
  },
  {
    number: "05",
    name: "Grow",
    headline: "Your Saudi story shouldn't end with setup.",
    description:
      "Premium Residency pathways, joint ventures, regional expansion, and long-term strategic positioning as an established ecosystem member.",
  },
];

export default function JourneyNarrative() {
  return (
    <section className="bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white transition-colors duration-300 py-[var(--space-section-lg)] border-b border-slate-200 dark:border-white/10 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] rounded-full bg-[#10E784]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mb-20"
        >
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.12] tracking-tight mb-6">
            <span className="heading-gradient-light-to-dark block">Most firms help you start.</span>
            <span className="green-gradient-text block font-sans">We stay for what comes next.</span>
          </h2>
          <p className="text-slate-600 dark:text-[#B9B3A8] text-lg leading-relaxed">
            A Saudi company on paper is only the beginning. The real work
            starts when the business needs to operate, connect, and grow.
          </p>
        </motion.div>

        {/* Journey Stages */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[19px] lg:left-[23px] top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-white/15" />

          <div className="flex flex-col gap-0">
            {stages.map((stage, idx) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-14 lg:pl-16 py-8 group"
              >
                {/* Stage number dot */}
                <div className="absolute left-0 top-8 flex items-center justify-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-slate-300 dark:border-white/20 bg-white dark:bg-[#1A3C2E] flex items-center justify-center group-hover:border-[#10E784] group-hover:shadow-[0_0_15px_rgba(16,231,132,0.4)] transition-all duration-300">
                    <span className="text-xs lg:text-sm font-bold text-slate-500 dark:text-[#B9B3A8] group-hover:text-[#10E784] transition-colors">
                      {stage.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="max-w-xl bg-white/60 dark:bg-white/[0.02] p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 hover:border-[#10E784]/50 transition-all duration-300 shadow-sm hover:shadow-md">
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-[#10E784] transition-colors duration-300">
                    {stage.name}
                  </h3>
                  <p className="text-[#10E784] text-xs font-mono font-bold tracking-wide mb-3 uppercase">
                    {stage.headline}
                  </p>
                  <p className="text-slate-600 dark:text-[#B9B3A8] text-sm leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
