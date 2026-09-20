"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { NextStepCTA } from "@/components/ui/NextStepCTA";
import { MASTER_SERVICES } from "@/data/services";
import { ArrowRight } from "lucide-react";
import { ContactFormModal } from "@/components/forms/ContactFormModal";

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-[#0A0D0C] text-white overflow-x-hidden min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <PageHero
        type="type-a"
        category="PUBLIC PILLARS & ECOSYSTEM"
        title="Public Pillars & Ecosystem Capabilities."
        subtitle="From initial MISA licensing and company establishment to post-formation GRO services, enterprise technology, commercial property sourcing, and Premium Residency."
        imageSrc="/images/servicePartnersPic.webp"
        imageAlt="Saudi Business Ecosystem & Operations"
        primaryCtaLabel="Make the First Move"
        onPrimaryCtaClick={() => setModalOpen(true)}
        secondaryCtaLabel="Explore Pillars"
        secondaryCtaHref="#pillars"
      />

      {/* Pillars List Section */}
      <section id="pillars" className="py-[var(--space-section-lg)] bg-[#101312] transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 space-y-16">
          {MASTER_SERVICES.map((service) => (
            <motion.div
              key={service.id}
              id={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 sm:p-12 hover-green-box transition-all duration-300 shadow-xl group relative backdrop-blur-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-[#10E784] tracking-wider uppercase px-3.5 py-1 bg-[#10E784]/10 border border-[#10E784]/30 rounded-full">
                      STAGE / {service.journeyStage}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#B9B3A8]">
                      PILLAR {service.number}
                    </span>
                  </div>

                  <h2 className="font-display text-3xl sm:text-4xl text-white font-bold mb-3 group-hover:text-[#10E784] transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-base green-gradient-text font-sans font-bold mb-6">
                    &ldquo;{service.tagline}&rdquo;
                  </p>
                  <p className="text-[#B9B3A8] text-base leading-relaxed font-light mb-8 max-w-xl">
                    {service.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.capabilities.map((cap, i) => (
                      <div key={i} className="p-4 bg-white/[0.03] rounded-2xl border border-white/5 shadow-sm">
                        <div className="text-xs font-bold text-white mb-1">
                          {cap.title}
                        </div>
                        <div className="text-[12px] text-[#B9B3A8] font-light leading-relaxed">
                          {cap.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white/[0.03] text-white p-8 rounded-3xl flex flex-col justify-between h-full border border-white/10 shadow-lg backdrop-blur-md">
                  <div>
                    <h3 className="text-xs uppercase font-bold tracking-wider text-[#10E784] mb-6 pb-3 border-b border-white/10">
                      Stage Process Roadmap:
                    </h3>
                    <div className="space-y-4 mb-8">
                      {service.processSteps.map((step) => (
                        <div key={step.step} className="flex items-start gap-3.5 text-xs">
                          <span className="font-mono font-bold text-[#10E784] shrink-0">
                            {step.step}.
                          </span>
                          <div>
                            <div className="text-white font-bold text-sm">{step.name}</div>
                            <div className="text-[#B9B3A8] text-xs font-light mt-0.5 leading-relaxed">
                              {step.description}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-between w-full pt-4 pb-2 -mb-2 min-h-[44px] border-t border-white/10 text-xs font-bold uppercase tracking-wider text-[#10E784] hover:gap-3 transition-all duration-300"
                  >
                    <span>Read Full Specification</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contextual Next Step */}
      <NextStepCTA
        eyebrow="Ecosystem Pathways"
        headline="Ready to establish your position in Saudi Arabia?"
        subtext="Connect with our senior market-entry strategists to evaluate your formation, investment, or corporate service requirements."
        primaryCtaText="Make the First Move"
        onPrimaryCtaClick={() => setModalOpen(true)}
      />

      <ContactFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

