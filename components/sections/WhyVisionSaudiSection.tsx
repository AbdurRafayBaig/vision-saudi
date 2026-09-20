"use client";

import React from "react";
import { motion } from "framer-motion";

const stages = [
  { name: "Establish", description: "Formation, licensing, and legal entity creation." },
  { name: "Activate", description: "Platform activation and operational readiness." },
  { name: "Operate", description: "Technology, compliance, and ongoing infrastructure." },
  { name: "Connect", description: "Real estate, banking, legal, and partnerships." },
  { name: "Grow", description: "Residency, expansion, and long-term positioning." },
];

export default function WhyAatiqSection() {
  return (
    <section className="bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white py-[var(--space-section-lg)] border-b border-slate-200 dark:border-white/10 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.12] tracking-tight mb-4">
              <span className="heading-gradient-light-to-dark block">Most firms get you established.</span>
            </h2>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.12] tracking-tight mb-8">
              <span className="green-gradient-text block font-sans">Vision Saudi helps you build a position.</span>
            </h2>
            <p className="text-slate-600 dark:text-[#B9B3A8] text-base leading-relaxed max-w-md font-light">
              Traditional setup agencies deliver a registration and move on.
              Vision Saudi integrates business setup, technology, real estate,
              residency, and ecosystem access into one continuous relationship —
              designed for companies that intend to stay and grow.
            </p>
          </motion.div>

          {/* Right: 5-stage progression */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center bg-white dark:bg-white/[0.02] p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg"
          >
            {stages.map((stage, idx) => (
              <div
                key={stage.name}
                className={`py-5 flex items-start gap-5 group transition-colors ${
                  idx < stages.length - 1 ? "border-b border-slate-200 dark:border-white/10" : ""
                }`}
              >
                <span className="text-sm font-mono text-[#10E784] font-bold mt-0.5 w-6 shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-1 group-hover:text-[#10E784] transition-colors">
                    {stage.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-[#B9B3A8] font-light leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
