"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { NextStepCTA } from "@/components/ui/NextStepCTA";
import { MASTER_EXPERIENCE_TRACK_RECORD, KEY_CREDIBILITY_METRICS } from "@/data/experience";
import { ContactFormModal } from "@/components/forms/ContactFormModal";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";

export default function ExperiencePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [filterSector, setFilterSector] = useState<string>("All");

  const sectors = ["All", "Government", "Semi-Government", "Enterprise", "Private Sector"];

  const filteredItems = filterSector === "All"
    ? MASTER_EXPERIENCE_TRACK_RECORD
    : MASTER_EXPERIENCE_TRACK_RECORD.filter(item => item.clientSector === filterSector);

  return (
    <div className="bg-[#0A0D0C] text-white overflow-x-hidden min-h-screen transition-colors duration-300">
      {/* Hero Section — Type C Statement */}
      <PageHero
        type="type-c"
        category="ATTRIBUTED TRACK RECORD"
        title="Experience behind Vision Saudi."
        subtitle="Vision Saudi stands on a foundation of 16+ years of operating experience in Saudi Arabia. Enterprise digital platforms and government-grade technology projects delivered through strategic partner SLNEE."
        imageSrc="/images/successPartnersPiic.webp"
        imageAlt="Saudi Enterprise & Public Project Operations"
        primaryCtaLabel="Discuss Your Engagement"
        onPrimaryCtaClick={() => setModalOpen(true)}
        proofText="Selected project experience explicitly attributed to SLNEE"
        customVisual={
          <div className="bg-white/[0.03] text-white p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl space-y-6 backdrop-blur-2xl relative group hover-green-box transition-all duration-500">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#10E784] to-transparent opacity-80" />

            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs text-[#D8CCB8] uppercase tracking-wider">TRACK RECORD DASHBOARD</span>
              <span className="text-xs font-bold text-[#10E784] px-3.5 py-1 bg-[#10E784]/15 border border-[#10E784]/30 rounded-full font-mono">16+ YEARS KSA</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 bg-white/[0.03] border-l-4 border-[#10E784] rounded-2xl">
                <CountUp value="50+" className="text-3xl font-display font-bold text-[#10E784]" />
                <span className="text-xs text-[#B9B3A8] block mt-1">Enterprise Projects</span>
              </div>
              <div className="p-4 bg-white/[0.03] border-l-4 border-[#10E784] rounded-2xl">
                <CountUp value="SAR 100M+" className="text-3xl font-display font-bold text-[#10E784]" />
                <span className="text-xs text-[#B9B3A8] block mt-1">Delivered Value</span>
              </div>
            </div>

            <div className="p-4 bg-white/[0.03] rounded-2xl flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-[#10E784] shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">Historical Partner: SLNEE</div>
                <div className="text-xs text-[#B9B3A8]">Government & Semi-Government Implementations</div>
              </div>
            </div>
          </div>
        }
      />

      {/* Attribution Framework Statement Banner */}
      <section className="bg-[#101312] py-12 border-b border-white/10 transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl backdrop-blur-xl">
            <div className="flex items-start gap-4">
              <ShieldCheck className="h-8 w-8 text-[#10E784] shrink-0 mt-1" />
              <div>
                <span className="text-xs font-bold text-[#10E784] tracking-widest uppercase block mb-1">
                  ATTRIBUTION GUARANTEE
                </span>
                <h3 className="font-display text-xl text-white font-bold mb-1">
                  Historical Enterprise Delivery Partner: SLNEE
                </h3>
                <p className="text-xs text-[#B9B3A8] font-light max-w-2xl leading-relaxed">
                  All enterprise case studies highlighted below represent verified project implementations delivered through strategic technology partner SLNEE across Saudi ministries, semi-government entities, and major commercial groups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Metrics Overview */}
      <section className="py-16 bg-[#0A0D0C] border-b border-white/10 transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {KEY_CREDIBILITY_METRICS.map((metric, idx) => (
              <div key={idx} className="p-8 bg-white/[0.03] rounded-3xl text-center shadow-md border border-white/5 hover:border-[#10E784]/60 transition-all backdrop-blur-md">
                <div className="text-4xl font-display text-[#10E784] font-bold mb-2">
                  <CountUp value={metric.stat} />
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-white mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-[#B9B3A8] font-light">{metric.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record Showcase & Sector Filter */}
      <section className="py-[var(--space-section-lg)] bg-[#101312] transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[#10E784] text-xs font-bold tracking-widest mb-3 uppercase">
                CASE STUDY INDEX
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Verified project stories.
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {sectors.map((sec) => (
                <button
                  key={sec}
                  onClick={() => setFilterSector(sec)}
                  className={`px-4 min-h-[44px] text-xs font-mono font-semibold uppercase tracking-wider rounded-xl transition-all duration-200 ${
                    filterSector === sec
                      ? "bg-[#10E784] text-slate-950 shadow-md font-bold"
                      : "bg-white/[0.04] text-[#B9B3A8] border border-white/10 hover:border-[#10E784]/50 hover:text-white"
                  }`}
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>

          {/* Project Showcase Grid */}
          <div className={filteredItems.length === 1 ? "flex justify-center" : "grid grid-cols-1 md:grid-cols-2 gap-8"}>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className={`bg-white/[0.03] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover-green-box transition-all duration-300 shadow-xl group backdrop-blur-xl ${
                  filteredItems.length === 1 ? "w-full max-w-2xl" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#10E784] uppercase tracking-wider px-3.5 py-1 bg-[#10E784]/10 border border-[#10E784]/30 rounded-full">
                      {item.clientSector} SECTOR
                    </span>
                    <span className="text-xs font-bold text-[#B9B3A8]">
                      {item.deliveryPartner}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-white font-bold mb-4 group-hover:text-[#10E784] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[#B9B3A8] text-sm leading-relaxed mb-6 font-light">
                    {item.summary}
                  </p>

                  <div className="space-y-3 mb-6 bg-white/[0.03] p-5 rounded-2xl border-l-4 border-[#10E784] shadow-sm">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#D8CCB8] mb-2">
                      Verified Deliverables & Impact:
                    </div>
                    {item.impactMetrics.map((m, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs text-[#B9B3A8]">
                        <CheckCircle2 className="h-4 w-4 text-[#10E784] shrink-0" />
                        <span className="font-bold text-white">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 flex-wrap text-xs font-medium text-[#B9B3A8]">
                  {item.capabilitiesUsed.map((c, i) => (
                    <span key={i} className="px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full text-[#D8CCB8] group-hover:border-[#10E784]/40 transition-colors">
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <NextStepCTA
        eyebrow="Proven Execution"
        headline="See what we can build together in the Kingdom."
        subtext="Consult with our strategists to discuss how Vision Saudi and strategic partner SLNEE can support your enterprise setup, digital platforms, or investment roadmap."
        primaryCtaText="Discuss Your Engagement"
        onPrimaryCtaClick={() => setModalOpen(true)}
        secondaryCtaText="Explore Ecosystem Partnerships"
        secondaryCtaHref="/partners"
      />

      <ContactFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

