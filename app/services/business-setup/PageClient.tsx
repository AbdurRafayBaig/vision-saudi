"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { NextStepCTA } from "@/components/ui/NextStepCTA";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { MASTER_SERVICES } from "@/data/services";
import { AccordionItem } from "@/components/ui/Accordion";
import { ContactFormModal } from "@/components/forms/ContactFormModal";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ROADMAP_STEPS } from "@/data/business-setup";

export default function BusinessSetupPage() {
  const service = MASTER_SERVICES.find((s) => s.slug === "business-setup")!;
  const [modalOpen, setModalOpen] = useState(false);


  return (
    <div className="bg-[#0A0D0C] text-white transition-colors duration-400 overflow-x-hidden min-h-screen">
      {/* Hero Section — Type B Editorial Split */}
      <PageHero
        type="type-a"
        category="MARKET ENTRY & FORMATION"
        title="Enter the Kingdom with clarity."
        subtitle="From MISA foreign investment licensing and Commercial Registration (CR) to corporate banking and operational portal activation — we handle the full establishment process so your Saudi entity is operational, not just registered."
        imageSrc="/images/businessSetup.webp"
        imageAlt="Saudi Corporate Formation & MISA License"
        primaryCtaLabel="Start Company Establishment"
        onPrimaryCtaClick={() => setModalOpen(true)}
        secondaryCtaLabel="Explore Roadmap"
        secondaryCtaHref="#roadmap"
        />

      <Breadcrumbs trail={[{ label: "Services", href: "/services" }, { label: "Business Setup & Market Entry" }]} />

      {/* Visual Journey: DISCOVER → STRUCTURE → ESTABLISH → ACTIVATE → OPERATE */}
      <section id="roadmap" className="py-[var(--space-section-lg)] bg-[#0A0D0C] border-b border-white/10 relative overflow-hidden transition-colors duration-400">
        <div className="absolute top-1/2 end-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#10E784]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <Reveal y={20} className="mb-16">
            <p className="text-[#10E784] text-xs uppercase tracking-widest mb-4 font-bold">
              The Establishment Journey
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.12] tracking-tight mb-6">
              A 5-stage roadmap into the Saudi economy.
            </h2>
            <p className="text-[#A39B8B] text-lg leading-relaxed max-w-2xl font-light">
              Most firms get you established. We built what comes next. Here is how your Saudi entity moves from initial strategic discovery to full operational scale.
            </p>
          </Reveal>

          {/* Step Cards Stack */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {ROADMAP_STEPS.map((s, idx) => (
              <Reveal delay={idx * 0.1} key={s.step} y={20} className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-[#10E784] hover:-translate-y-1 transition-all duration-300 shadow-2xl group">
                <div>
                  <div className="text-xs font-bold text-[#10E784] mb-3 tracking-wider uppercase">
                    {s.step} · {s.title}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#10E784] transition-colors">
                    {s.subtitle}
                  </h3>
                  <p className="text-xs text-[#A39B8B] font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-medium text-[#A39B8B] group-hover:text-[#10E784]">
                  <span>Stage {s.step}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Deep-Dive */}
      <section className="py-[var(--space-section-lg)] bg-[#0A0D0C] relative transition-colors duration-400">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <p className="text-[#10E784] text-xs uppercase tracking-widest mb-4 font-bold">
              Full Spectrum Scope
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.12] tracking-tight">
              What Vision Saudi actually delivers.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.capabilities.map((cap, idx) => (
              <Reveal delay={idx * 0.1} key={idx} y={20} className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl hover:border-[#10E784] transition-all duration-300 group">
                <h3 className="font-display text-2xl text-white font-bold mb-3 group-hover:text-[#10E784] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-[#A39B8B] text-sm font-light leading-relaxed mb-6">
                  {cap.description}
                </p>
                <ul className="space-y-3 text-xs text-[#E2D9C8] border-t border-white/10 pt-6">
                  {cap.details.map((d, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-[#10E784] shrink-0" />
                      <span className="font-medium">{d}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-[var(--space-section)] bg-[#0A0D0C] border-t border-white/10 transition-colors duration-400">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#10E784] text-xs uppercase tracking-widest mb-3 font-bold">
              Regulatory & Process Clarity
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-bold">
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
      <RelatedServices currentSlug="business-setup" />

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
