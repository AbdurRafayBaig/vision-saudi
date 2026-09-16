"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { NextStepCTA } from "@/components/ui/NextStepCTA";
import { MASTER_SERVICES } from "@/data/services";
import { AccordionItem } from "@/components/ui/Accordion";
import { ContactFormModal } from "@/components/forms/ContactFormModal";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function BusinessSetupPage() {
  const service = MASTER_SERVICES.find((s) => s.slug === "business-setup")!;
  const [modalOpen, setModalOpen] = useState(false);

  const roadmapSteps = [
    {
      step: "01",
      title: "DISCOVER",
      subtitle: "Strategic Alignment & Activity Definition",
      desc: "Evaluate ISIC 4 activity classification, MISA license requirements, local shareholder criteria, and capital allocation structure.",
    },
    {
      step: "02",
      title: "STRUCTURE",
      subtitle: "Legal Architecture & Corporate Documentation",
      desc: "Draft Memorandum of Association (MoA), prepare board resolutions, obtain power of attorney (PoA), and structure foreign ownership percentage.",
    },
    {
      step: "03",
      title: "ESTABLISH",
      subtitle: "MISA Licensing & Commercial Registration",
      desc: "Secure MISA Investment License, obtain Ministry of Commerce Commercial Registration (CR), and issue official tax identification number.",
    },
    {
      step: "04",
      title: "ACTIVATE",
      subtitle: "Government Portals & Corporate Banking",
      desc: "Activate Qiwa, Muqeem, GOSI, and ZATCA portals, open corporate banking accounts, and complete general manager visa issuing.",
    },
    {
      step: "05",
      title: "OPERATE",
      subtitle: "Saudization Compliance & Ecosystem Scaling",
      desc: "Transition into ongoing GRO operations, Saudization ratio management, commercial contract execution, and ecosystem integration.",
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white transition-colors duration-400 overflow-x-hidden min-h-screen">
      {/* Hero Section — Type B Editorial Split */}
      <PageHero
        type="type-b"
        category="MARKET ENTRY & FORMATION"
        title="Enter the Kingdom with clarity."
        subtitle="From MISA foreign investment licensing and Commercial Registration (CR) to corporate banking and operational portal activation — we handle the full establishment process so your Saudi entity is operational, not just registered."
        imageSrc="/images/businessSetup.png"
        imageAlt="Saudi Corporate Formation & MISA License"
        primaryCtaLabel="Start Company Establishment"
        onPrimaryCtaClick={() => setModalOpen(true)}
        secondaryCtaLabel="Explore Roadmap"
        secondaryCtaHref="#roadmap"
        customVisual={
          <div className="bg-white dark:bg-[#101312] text-slate-900 dark:text-white p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-white/15 shadow-xl dark:shadow-2xl space-y-6 backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
              <span className="text-xs font-mono text-[#059669] dark:text-[#10E784] uppercase tracking-wider font-bold">MISA FORMATION MATRIX</span>
              <span className="text-xs font-bold text-[#059669] dark:text-[#10E784] px-3 py-1 bg-[#10E784]/15 border border-[#10E784]/30 rounded-full font-mono">100% FOREIGN OWNERSHIP</span>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-slate-500 dark:text-[#A39B8B]">MISA Investment License</span>
                  <span className="text-[#059669] dark:text-[#10E784] font-bold">VERIFIED</span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">Commercial / Service License (ISIC 4)</div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-slate-500 dark:text-[#A39B8B]">Commercial Registration (CR)</span>
                  <span className="text-[#059669] dark:text-[#10E784] font-bold">ISSUED</span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">Ministry of Commerce Registration</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl text-center">
                  <span className="text-[10px] text-slate-500 dark:text-[#A39B8B] uppercase block">Qiwa Portal</span>
                  <span className="text-xs font-bold text-[#059669] dark:text-[#10E784]">ACTIVATED</span>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl text-center">
                  <span className="text-[10px] text-slate-500 dark:text-[#A39B8B] uppercase block">Corporate Bank</span>
                  <span className="text-xs font-bold text-[#059669] dark:text-[#10E784]">OPENED</span>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-500 dark:text-[#A39B8B] font-light flex items-center justify-between border-t border-slate-200 dark:border-white/10">
              <span>Time to License: 5–10 Days</span>
              <ShieldCheck className="h-4 w-4 text-[#059669] dark:text-[#10E784]" />
            </div>
          </div>
        }
      />

      {/* Visual Journey: DISCOVER → STRUCTURE → ESTABLISH → ACTIVATE → OPERATE */}
      <section id="roadmap" className="py-[var(--space-section-lg)] bg-white dark:bg-[#0A0D0C] border-b border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-400">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#10E784]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <p className="text-[#059669] dark:text-[#10E784] text-xs font-mono uppercase tracking-widest mb-4 font-bold">
              The Establishment Journey
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-[1.12] tracking-tight mb-6">
              A 5-stage roadmap into the Saudi economy.
            </h2>
            <p className="text-slate-600 dark:text-[#A39B8B] text-lg leading-relaxed max-w-2xl font-light">
              Most firms get you established. We built what comes next. Here is how your Saudi entity moves from initial strategic discovery to full operational scale.
            </p>
          </motion.div>

          {/* Step Cards Stack */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {roadmapSteps.map((s, idx) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-slate-50 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-[#10E784] hover:-translate-y-1 transition-all duration-300 shadow-md dark:shadow-2xl group"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#059669] dark:text-[#10E784] mb-3 tracking-wider uppercase">
                    {s.step} · {s.title}
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-[#059669] dark:group-hover:text-[#10E784] transition-colors">
                    {s.subtitle}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-[#A39B8B] font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] font-medium text-slate-500 dark:text-[#A39B8B] group-hover:text-[#059669] dark:group-hover:text-[#10E784]">
                  <span>Stage {s.step}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Deep-Dive */}
      <section className="py-[var(--space-section-lg)] bg-slate-50 dark:bg-[#0A0D0C] relative transition-colors duration-400">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <p className="text-[#059669] dark:text-[#10E784] text-xs font-mono uppercase tracking-widest mb-4 font-bold">
              Full Spectrum Scope
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-[1.12] tracking-tight">
              What Vision Saudi actually delivers.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 sm:p-10 shadow-md dark:shadow-2xl hover:border-[#10E784] transition-all duration-300 group"
              >
                <h3 className="font-display text-2xl text-slate-900 dark:text-white font-bold mb-3 group-hover:text-[#059669] dark:group-hover:text-[#10E784] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-slate-600 dark:text-[#A39B8B] text-sm font-light leading-relaxed mb-6">
                  {cap.description}
                </p>
                <ul className="space-y-3 text-xs text-slate-700 dark:text-[#E2D9C8] border-t border-slate-200 dark:border-white/10 pt-6">
                  {cap.details.map((d, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-[#059669] dark:text-[#10E784] shrink-0" />
                      <span className="font-medium">{d}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-[var(--space-section)] bg-white dark:bg-[#0A0D0C] border-t border-slate-200 dark:border-white/10 transition-colors duration-400">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#059669] dark:text-[#10E784] text-xs font-mono uppercase tracking-widest mb-3 font-bold">
              Regulatory & Process Clarity
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-900 dark:text-white font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => (
              <AccordionItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <NextStepCTA
        eyebrow="Establishment Decision"
        headline="Ready to establish your position in Saudi Arabia?"
        subtext="Our senior advisors evaluate your ISIC 4 activity scope, license category, and legal entity structure before submitting to MISA."
        primaryCtaText="Start Company Establishment"
        onPrimaryCtaClick={() => setModalOpen(true)}
        secondaryCtaText="Explore Corporate Services"
        secondaryCtaHref="/services/corporate-services"
      />

      <ContactFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService="business-setup"
      />
    </div>
  );
}
