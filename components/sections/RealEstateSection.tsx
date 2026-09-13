"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function RealEstateSection() {
  return (
    <section className="relative bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white overflow-hidden border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/service-realestate.png"
          alt="Premium Saudi Arabian property"
          fill
          className="object-cover opacity-20 dark:opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/80 to-slate-50/50 dark:from-[#0A0D0C]/95 dark:via-[#0A0D0C]/80 dark:to-[#0A0D0C]/50" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 py-[var(--space-section-lg)]">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10E784]/10 border border-[#10E784]/30 text-[#10E784] text-xs font-mono font-semibold tracking-widest uppercase mb-4">
              <span>REAL ESTATE OPPORTUNITIES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.12] tracking-tight mb-6">
              <span className="heading-gradient-light-to-dark block">Where capital</span>
              <span className="green-gradient-text block font-sans">meets place.</span>
            </h2>
            <p className="text-slate-300 dark:text-[#D8CCB8] text-lg leading-relaxed mb-4 font-light">
              Explore opportunities across the Kingdom — from Grade-A commercial
              headquarters in Riyadh and Jeddah to strategic residential and
              hospitality-led investment environments.
            </p>
            <p className="text-slate-400 dark:text-[#B9B3A8] text-sm leading-relaxed mb-10 font-light">
              Data-driven property analysis and strategic advisory in accordance
              with REGA frameworks.
            </p>

            <Link
              href="/services/real-estate"
              className="inline-flex items-center gap-3 text-white bg-[#10E784] hover:bg-[#0be07b] text-slate-950 font-bold px-6 py-3 rounded-full shadow-[0_0_20px_rgba(16,231,132,0.3)] hover:gap-4 transition-all duration-300 group"
            >
              <span>Explore Real Estate</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
