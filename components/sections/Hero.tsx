"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowDown, ShieldCheck, Building2 } from "lucide-react";
import { ContactFormModal } from "@/components/forms/ContactFormModal";

const LOCATIONS = [
  "in Riyadh.",
  "in Jeddah.",
  "in Dammam.",
  "in Makkah.",
  "in Madinah.",
  "in Khobar.",
  "in Dhahran.",
  "in NEOM.",
  "in Tabuk.",
  "in AlUla.",
  "in Abha.",
];

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [locationIndex, setLocationIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLocationIndex((prev) => (prev + 1) % LOCATIONS.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-[#0A0D0C] overflow-hidden pt-28 pb-12 md:pb-16 text-slate-900 dark:text-white transition-colors duration-400">
      {/* ── Ambient Radial Glows & Luxury Backdrop Layers ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep Emerald Glow Top Left */}
        <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-[#10E784]/15 dark:bg-[#2D7A5F]/20 blur-[130px]" />
        
        {/* Soft Sand Glow Bottom Right */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-[#10B981]/10 dark:bg-[#10E784]/10 blur-[140px]" />

        {/* Subtle Architectural Line Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 dark:opacity-40" />

        {/* High-Resolution Background Photography with Gradient Blending */}
        <div className="absolute inset-0 opacity-15 dark:opacity-30 mix-blend-multiply dark:mix-blend-luminosity">
          <Image
            src="/images/hero-riyadh.png"
            alt="Modern Riyadh Financial District skyline"
            fill
            priority
            className="object-cover object-center scale-105"
            sizes="100vw"
          />
        </div>

        {/* Vignette Gradient for Light vs Dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-slate-50/70 to-slate-50 dark:from-[#0A0D0C]/80 dark:via-[#0A0D0C]/60 dark:to-[#0A0D0C]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            {/* Fluorescent Neon Luxury Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#10E784]/15 dark:bg-[#10E784]/10 border border-[#10E784]/40 dark:border-[#10E784]/30 text-[#047857] dark:text-[#10E784] text-xs font-semibold tracking-widest uppercase mb-6 shadow-[0_0_25px_rgba(16,231,132,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#10E784] animate-pulse" />
              <span className="font-mono">VISION 2030 ENTERPRISE GATEWAY</span>
            </div>

            {/* Editorial Headline with Dynamic Rotating Location Animation */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6 text-slate-900 dark:text-white">
              Build your position <br />
              <span className="inline-block relative overflow-hidden align-bottom h-[1.25em] min-w-[220px] sm:min-w-[360px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={LOCATIONS[locationIndex]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 top-0 green-gradient-text block whitespace-nowrap"
                  >
                    {LOCATIONS[locationIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            {/* Supporting Statement */}
            <p className="text-slate-600 dark:text-[#94A3B8] text-lg sm:text-xl leading-relaxed max-w-xl mb-10 font-light">
              From MISA licensing and corporate establishment to digital platforms and commercial real estate — Vision Saudi connects global enterprise to the Saudi Arabia ecosystem.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                showArrow
                onClick={() => setModalOpen(true)}
                className="btn-neon-green"
              >
                Make the First Move
              </Button>
              <Button
                variant="ivory"
                size="lg"
                href="#opportunity"
                className="border border-slate-300 dark:border-white/20 bg-white/80 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-900 dark:text-white backdrop-blur-md shadow-sm"
              >
                Explore Platform
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Floating Theme-Aware Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 backdrop-blur-2xl shadow-xl dark:shadow-2xl space-y-6 relative overflow-hidden group hover:border-[#10E784]/60 transition-all duration-500 text-slate-900 dark:text-white">
              {/* Subtle inner green shimmer line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#10E784] to-transparent opacity-70" />

              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                <div>
                  <span className="text-xs font-mono text-slate-500 dark:text-[#94A3B8] uppercase tracking-wider block">ATTRIBUTED TRACK RECORD</span>
                  <span className="text-[11px] text-slate-400 dark:text-[#64748B]">Enterprise Partner: SLNEE</span>
                </div>
                <span className="text-xs font-bold text-[#059669] dark:text-[#10E784] px-3.5 py-1 bg-[#10E784]/15 border border-[#10E784]/30 rounded-full">
                  16+ YEARS KSA
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-slate-50 dark:bg-white/[0.03] border-l-2 border-[#10E784] rounded-2xl">
                  <span className="text-3xl font-display font-bold text-[#059669] dark:text-[#10E784] block">50+</span>
                  <span className="text-xs text-slate-600 dark:text-[#94A3B8] mt-1 block font-medium">Enterprise Implementations</span>
                </div>
                <div className="p-5 bg-slate-50 dark:bg-white/[0.03] border-l-2 border-[#10E784] rounded-2xl">
                  <span className="text-3xl font-display font-bold text-[#059669] dark:text-[#10E784] block">SR 100M+</span>
                  <span className="text-xs text-slate-600 dark:text-[#94A3B8] mt-1 block font-medium">Delivered Contract Value</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-4 bg-slate-50 dark:bg-white/[0.03] rounded-2xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="h-4 w-4 text-[#059669] dark:text-[#10E784]" />
                    <span className="font-medium text-slate-800 dark:text-white">100% ISIC 4 & MISA Compliant</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#059669] dark:text-[#10E784] px-2 py-0.5 bg-[#10E784]/15 rounded-full">VERIFIED</span>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-white/[0.03] rounded-2xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <Building2 className="h-4 w-4 text-[#059669] dark:text-[#10E784]" />
                    <span className="font-medium text-slate-800 dark:text-white">Headquarters: Olaya District, Riyadh</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-[#94A3B8] px-2 py-0.5 bg-slate-200 dark:bg-white/5 rounded-full">KSA SCOPE</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 dark:text-[#94A3B8] font-light flex items-center justify-between border-t border-slate-200 dark:border-white/10">
                <span>Vision 2030 Strategic Alignment</span>
                <span className="text-[#059669] dark:text-[#10E784] font-semibold">Government & Enterprise</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Bar Footer */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 w-full pt-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex items-center justify-between border-t border-slate-200 dark:border-white/10 pt-4"
        >
          <a
            href="#opportunity"
            className="inline-flex items-center gap-2 text-slate-500 dark:text-[#B9B3A8] text-xs tracking-wider uppercase hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <span>Scroll to explore platform</span>
            <ArrowDown className="h-3.5 w-3.5 text-[#10E784]" />
          </a>

          <div className="hidden sm:flex items-center gap-6 text-[11px] font-mono text-slate-500 dark:text-[#B9B3A8]">
            <span>RIYADH · JEDDAH · NEOM</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#10E784]" />
            <span>ESTABLISH · OPERATE · SCALE</span>
          </div>
        </motion.div>
      </div>

      <ContactFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

