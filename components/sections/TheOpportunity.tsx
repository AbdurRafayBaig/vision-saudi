"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Landmark } from "lucide-react";

export default function TheOpportunity() {
  return (
    <section id="opportunity" className="bg-white dark:bg-[#0A0D0C] text-slate-900 dark:text-white py-[var(--space-section-lg)] relative overflow-hidden border-b border-slate-200 dark:border-white/10 transition-colors duration-400">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-[#10E784]/10 dark:bg-[#2D7A5F]/15 blur-[140px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[#10B981]/10 dark:bg-[#10E784]/10 blur-[150px] -translate-y-1/2" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6"
          >
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight mb-6 heading-gradient-light-to-dark">
              A market opening at <br />
              <span className="green-gradient-text">extraordinary speed.</span>
            </h2>

            <p className="text-slate-600 dark:text-[#94A3B8] text-lg leading-relaxed font-light mb-6">
              Saudi Arabia is transforming. Vision 2030 has opened the Kingdom to international investment, new industries, and ambitious operators at a pace the region has never seen before.
            </p>

            <p className="text-slate-600 dark:text-[#94A3B8] text-base leading-relaxed font-light mb-8">
              Vision Saudi helps enterprise leaders, investors, and ambitious operators build their position inside it — connecting MISA market entry through operations, real estate, technology, and ecosystem integration.
            </p>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-transparent border-l-4 border-l-[#10E784] rounded-2xl hover-green-box">
                <div className="flex items-center gap-2 text-[#059669] dark:text-[#10E784] font-mono text-xs font-bold mb-1">
                  <TrendingUp className="h-4 w-4" />
                  <span>VISION 2030 PIPELINE</span>
                </div>
                <div className="text-3xl font-display font-bold text-slate-900 dark:text-white">$1.3 Trillion</div>
                <div className="text-xs text-slate-500 dark:text-[#94A3B8] mt-1 font-light">Giga-Projects & Development</div>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-transparent border-l-4 border-l-[#10E784] rounded-2xl hover-green-box">
                <div className="flex items-center gap-2 text-[#059669] dark:text-[#10E784] font-mono text-xs font-bold mb-1">
                  <Landmark className="h-4 w-4" />
                  <span>REGULATORY MANDATE</span>
                </div>
                <div className="text-3xl font-display font-bold text-slate-900 dark:text-white">RHQ Directive</div>
                <div className="text-xs text-slate-500 dark:text-[#94A3B8] mt-1 font-light">Regional HQ Program Compliance</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl group hover:border-[#10E784] hover:shadow-[#10E784]/20 transition-all duration-500">
              <Image
                src="/images/businessSetup.png"
                alt="Modern Saudi executive business architecture"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 dark:from-[#0A0D0C] via-slate-950/30 dark:via-[#0A0D0C]/30 to-transparent" />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 dark:bg-[#0A0D0C]/85 border border-slate-200 dark:border-white/10 backdrop-blur-xl rounded-2xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-[#059669] dark:text-[#10E784]" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">Kingdom-Wide Ecosystem Access</div>
                      <div className="text-[11px] text-slate-500 dark:text-[#94A3B8]">Riyadh Olaya Headquarters · MISA Licensed</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#059669] dark:text-[#10E784] font-bold">KSA 2030</span>
                </div>
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}

