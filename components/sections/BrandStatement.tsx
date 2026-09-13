"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BrandStatement() {
  return (
    <section className="bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white py-[var(--space-section-lg)] overflow-hidden relative border-b border-slate-200 dark:border-white/10">
      {/* Royal Arabic Calligraphy Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5 dark:opacity-5">
        <span className="font-sans text-[18vw] font-bold text-slate-400 dark:text-white whitespace-nowrap">
          المملكة العربية السعودية
        </span>
      </div>

      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#10E784]/15 blur-[140px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10E784]/10 border border-[#10E784]/30 text-[#10E784] text-xs font-mono tracking-widest uppercase mb-8">
            <span>STRATEGIC ALIGNMENT</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="block heading-gradient-light-to-dark"
            >
              One Kingdom.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="block green-gradient-text font-sans font-extrabold"
            >
              One Vision.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="block heading-gradient-light-to-dark"
            >
              One Ecosystem.
            </motion.span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}

