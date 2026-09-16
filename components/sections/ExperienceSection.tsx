"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Building2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ContactFormModal } from "@/components/forms/ContactFormModal";

export default function ExperienceSection() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white py-[var(--space-section-lg)] border-b border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[#10E784]/10 blur-[160px] -translate-y-1/2" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6"
          >
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.12] tracking-tight mb-6">
              <span className="heading-gradient-light-to-dark block">We know the Kingdom</span>
              <span className="green-gradient-text block font-sans">because we work inside it.</span>
            </h2>

            <p className="text-slate-600 dark:text-[#D8CCB8] text-base leading-relaxed mb-6 font-light">
              Our perspective comes from years of operating inside Saudi Arabia — delivering enterprise technology projects, implementing compliance systems, navigating government institutions, and building high-trust commercial relationships across public and private sectors.
            </p>

            <div className="p-4 rounded-2xl bg-white dark:bg-white/[0.03] border-l-4 border-[#10E784] text-slate-700 dark:text-[#B9B3A8] text-xs leading-relaxed mb-8 shadow-sm">
              Selected enterprise tech & advisory experience delivered through strategic partner SLNEE.
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="md" href="/experience">
                View Full Track Record
              </Button>
              <Button variant="outline" size="md" onClick={() => setContactModalOpen(true)}>
                Schedule Consultation
              </Button>
            </div>
          </motion.div>

          {/* Right: Key Stats Glass Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="p-8 rounded-3xl bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-xl hover-green-box hover:border-[#10E784]/60 transition-all duration-300 group sm:col-span-2">
              <div className="flex items-center gap-3 text-[#10E784] mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                <Building2 className="h-5 w-5" />
                <span>EXPERIENCE IN KSA</span>
              </div>
              <div className="green-gradient-text font-display text-4xl lg:text-5xl font-bold mb-2">
                16+ Years
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                Deep In-Kingdom Operating Track Record
              </div>
              <p className="text-xs text-slate-600 dark:text-[#B9B3A8] leading-relaxed font-light">
                Proven operational legacy behind the team and strategic partner SLNEE in Saudi Arabia.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-lg hover-green-box hover:border-[#10E784]/60 transition-all duration-300">
              <div className="flex items-center gap-2 text-[#10E784] mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                <Award className="h-4 w-4" />
                <span>DELIVERY</span>
              </div>
              <div className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-1">
                SAR 100M+
              </div>
              <div className="text-xs text-slate-600 dark:text-[#D8CCB8] font-medium mb-1">
                Project Capital Value
              </div>
              <p className="text-[11px] text-slate-500 dark:text-[#B9B3A8] leading-relaxed font-light">
                Enterprise technology implementations & advisory delivered.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-lg hover-green-box hover:border-[#10E784]/60 transition-all duration-300">
              <div className="flex items-center gap-2 text-[#10E784] mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>ECOSYSTEM</span>
              </div>
              <div className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-1">
                5 Pillars
              </div>
              <div className="text-xs text-slate-600 dark:text-[#D8CCB8] font-medium mb-1">
                Unified Ecosystem
              </div>
              <p className="text-[11px] text-slate-500 dark:text-[#B9B3A8] leading-relaxed font-light">
                Setup, Corporate, Tech, Real Estate & Residency integrated.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        defaultIntent="experience"
      />
    </section>
  );
}

