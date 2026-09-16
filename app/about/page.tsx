"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { NextStepCTA } from "@/components/ui/NextStepCTA";
import { KEY_CREDIBILITY_METRICS } from "@/data/experience";
import { ContactFormModal } from "@/components/forms/ContactFormModal";
import { Compass, Shield, Award, TrendingUp, ShieldCheck, ArrowRight, CheckCircle2, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const principles = [
    {
      icon: Compass,
      title: "Perspective",
      desc: "Years operating inside the Kingdom shape how we see the market — and where Vision 2030 is taking it next.",
    },
    {
      icon: Shield,
      title: "Precision",
      desc: "We approach every engagement with legal clarity, structured compliance, and uncompromising execution detail.",
    },
    {
      icon: Award,
      title: "Partnership",
      desc: "We build relationships for the long term, continuing through operations, growth, and ecosystem integration.",
    },
    {
      icon: TrendingUp,
      title: "Progress",
      desc: "The Kingdom moves at extraordinary speed. We ensure our strategy, technology, and capabilities move with it.",
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white overflow-x-hidden min-h-screen transition-colors duration-300">
      {/* Hero Section — Type C Statement / Credibility */}
      <PageHero
        type="type-c"
        category="POSITIONING & CREDIBILITY"
        title="Built for the Kingdom's next chapter."
        subtitle="Vision Saudi connects global enterprise, investors, and founders to the wider Saudi ecosystem. We help businesses establish, operate, invest, and scale in Saudi Arabia."
        imageSrc="/images/corporateBusinessServices.png"
        imageAlt="Saudi Vision 2030 Skyward Architecture"
        primaryCtaLabel="Make the First Move"
        onPrimaryCtaClick={() => setModalOpen(true)}
        proofText="Selected project experience explicitly attributed to SLNEE"
      />

      {/* Brand Narrative Section 01 */}
      <section className="py-[var(--space-section-lg)] bg-white dark:bg-[#101312] border-b border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-[#059669] dark:text-[#10E784] text-xs font-mono font-bold tracking-wider uppercase mb-4">
                <span>LOCAL PERSPECTIVE</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.12] tracking-tight mb-6">
                <span className="heading-gradient-light-to-dark block">We know the Kingdom.</span>
                <span className="green-gradient-text block font-sans font-extrabold">Because we've worked within it.</span>
              </h2>
              <p className="text-slate-600 dark:text-[#D8CCB8] text-lg leading-relaxed font-light mb-6">
                Our experience wasn't built from the outside looking in. It comes from years of operating inside Saudi Arabia — navigating institutions, implementing enterprise technology systems, and working alongside organizations across the public and private sectors.
              </p>
              <p className="text-slate-500 dark:text-[#B9B3A8] text-sm leading-relaxed font-light">
                We understand that establishing in Saudi Arabia is only the first step. That is why we built Vision Saudi differently: not merely as a company setup agency, but as an ecosystem platform for what comes next.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-50 dark:bg-white/[0.03] text-slate-900 dark:text-white p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl relative backdrop-blur-2xl">
                <span className="text-xs font-mono font-bold text-[#10E784] tracking-widest uppercase block mb-3">
                  STRATEGIC DELIVERY PARTNER
                </span>
                <h3 className="font-display text-2xl text-slate-900 dark:text-white font-bold mb-4">
                  Enterprise Experience Behind Vision Saudi
                </h3>
                <p className="text-slate-600 dark:text-[#B9B3A8] text-sm leading-relaxed font-light mb-8">
                  Vision Saudi brings established Saudi execution experience into a modern platform. Through our leadership team and strategic technology partner SLNEE, our wider experience includes multi-million-riyal government projects, digital infrastructure, and enterprise consulting across the Kingdom.
                </p>
                <div className="p-4 bg-white dark:bg-white/[0.04] border-l-4 border-[#10E784] rounded-2xl flex items-center gap-3 text-xs text-slate-700 dark:text-[#D8CCB8]">
                  <ShieldCheck className="h-5 w-5 text-[#10E784] shrink-0" />
                  <span>Selected historical enterprise implementations attributed directly to SLNEE.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Operating Principles */}
      <section className="py-[var(--space-section-lg)] bg-slate-50 dark:bg-[#0A0D0C] border-b border-slate-200 dark:border-white/10 relative transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-[#10E784] font-mono text-xs font-bold tracking-widest mb-4 uppercase">
              BRAND PHILOSOPHY
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-[1.12] tracking-tight">
              Our four operating principles.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="p-8 bg-white dark:bg-white/[0.03] border-l-4 border-[#10E784] rounded-3xl hover:border-[#10E784] hover:shadow-[0_0_25px_rgba(16,231,132,0.2)] transition-all duration-300 shadow-md group backdrop-blur-md"
              >
                <item.icon className="h-8 w-8 text-[#10E784] mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display text-2xl text-slate-900 dark:text-white font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-[#B9B3A8] font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility Metrics Bar */}
      <section className="py-[var(--space-section)] bg-white dark:bg-[#101312] transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {KEY_CREDIBILITY_METRICS.map((m, i) => (
              <div key={i} className="p-8 bg-slate-50 dark:bg-white/[0.03] rounded-3xl text-center shadow-md border border-slate-200 dark:border-white/5 hover:border-[#10E784]/60 transition-all backdrop-blur-md">
                <div className="text-4xl font-display text-[#10E784] font-bold mb-2">
                  {m.stat}
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-900 dark:text-white mb-1">
                  {m.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-[#B9B3A8] font-light">{m.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <NextStepCTA
        eyebrow="Start a Conversation"
        headline="Build your position in Saudi Arabia with confidence."
        subtext="Speak directly with Vision Saudi senior strategists in Riyadh to discuss market entry, investment advisory, or enterprise corporate services."
        primaryCtaText="Make the First Move"
        onPrimaryCtaClick={() => setModalOpen(true)}
        secondaryCtaText="Explore Track Record"
        secondaryCtaHref="/experience"
      />

      <ContactFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

