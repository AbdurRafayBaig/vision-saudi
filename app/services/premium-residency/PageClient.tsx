"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { NextStepCTA } from "@/components/ui/NextStepCTA";
import { MASTER_SERVICES } from "@/data/services";
import { AccordionItem } from "@/components/ui/Accordion";
import { ContactFormModal } from "@/components/forms/ContactFormModal";
import { CheckCircle2, UserCheck, Briefcase, Award, Home, Calendar } from "lucide-react";

export default function PremiumResidencyPage() {
  const service = MASTER_SERVICES.find((s) => s.slug === "premium-residency")!;
  const [modalOpen, setModalOpen] = useState(false);

  const pathways = [
    {
      icon: Briefcase,
      title: "Investor Residency",
      target: "Capital Investors & Asset Allocation",
      criteria: "Direct capital investment in Saudi commercial entities in accordance with Premium Residency Center thresholds.",
      privilege: "Self-sponsored residency, property ownership rights, freedom to conduct commercial business.",
    },
    {
      icon: UserCheck,
      title: "Entrepreneur Residency",
      target: "Startup Founders & Tech Innovators",
      criteria: "Obtain MISA Entrepreneurship license, secure venture capital backing, or meet incubator milestones.",
      privilege: "5-year convertible residency, capability to hire employees, business expansion support.",
    },
    {
      icon: Award,
      title: "Special Talent Residency",
      target: "Executives, Healthcare & Researchers",
      criteria: "Executive leadership role, scientific research publications, or specialized healthcare/tech expertise.",
      privilege: "Exemption from Saudization quotas for self, long-term stability, direct family sponsorship.",
    },
    {
      icon: Home,
      title: "Real Estate Owner Residency",
      target: "Property Investors",
      criteria: "Own unencumbered Saudi real estate assets valued at SAR 4,000,000 or above.",
      privilege: "Residency linked to property title, family coverage, freedom to enter and exit KSA.",
    },
    {
      icon: Calendar,
      title: "Limited Duration Residency",
      target: "1-Year Renewable Residency",
      criteria: "One-off financial payment of SAR 100,000 for 1-year renewable status.",
      privilege: "Ideal for short-term executive advisory, property search, and preliminary market evaluation.",
    },
  ];

  return (
    <div className="bg-[#0A0D0C] text-white transition-colors duration-400 overflow-x-hidden min-h-screen">
      {/* Hero Section — Type A Cinematic Lifestyle */}
      <PageHero
        type="type-a"
        category="RESIDENCY & ADVISORY"
        title="A life in the Kingdom, by design."
        subtitle="Navigate Saudi Premium Residency through official Investor, Entrepreneur, Special Talent, Real Estate Owner, and Limited Duration pathways. Strategic evaluation and end-to-end application support."
        imageSrc="/images/businessSetup.webp"
        imageAlt="Saudi Arabia Modern City & Lifestyle"
        primaryCtaLabel="Check Residency Eligibility"
        onPrimaryCtaClick={() => setModalOpen(true)}
        secondaryCtaLabel="Explore Pathways"
        secondaryCtaHref="#pathways"
      />

      {/* Narrative Section — Lifestyle + Advisory */}
      <section className="py-[var(--space-section)] bg-[#0A0D0C] transition-colors duration-400">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <p className="text-[#10E784] text-xs uppercase tracking-widest mb-4 font-bold">
                Kingdom Long-Term Vision
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.12] tracking-tight mb-6">
                Permanent position in a <span className="green-gradient-text">transforming nation.</span>
              </h2>
              <p className="text-[#A39B8B] text-lg leading-relaxed font-light mb-6">
                Saudi Arabia&apos;s Premium Residency program offers global investors, executives, and innovators self-sponsored residency, complete freedom of movement, commercial business ownership, and real estate rights without needing a local Saudi sponsor.
              </p>
              <p className="text-[#A39B8B] text-sm font-light leading-relaxed">
                Vision Saudi provides strategic evaluation of your qualification profile, structures documentation in compliance with the Premium Residency Center (PRC), and guides your application through approval.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-3xl border border-white/15 shadow-2xl backdrop-blur-xl">
                <Image
                  src="/images/businessSetup.webp"
                  alt="Saudi Lifestyle & Premium Living"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Official Pathways Spectrum */}
      <section id="pathways" className="py-[var(--space-section-lg)] bg-[#0A0D0C] border-y border-white/10 relative overflow-hidden transition-colors duration-400">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#10E784]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <p className="text-[#10E784] text-xs uppercase tracking-widest mb-4 font-bold">
              Official Pathways
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.12] tracking-tight">
              Five distinct pathways to Saudi residency.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pathways.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#10E784] hover:-translate-y-1 transition-all duration-300 shadow-2xl group text-white"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#10E784]/15 border border-[#10E784]/30 flex items-center justify-center text-[#10E784] mb-6 group-hover:bg-[#10E784] group-hover:text-[#0A0D0C] transition-all duration-300">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold text-[#10E784] uppercase tracking-wider block mb-1">
                    {p.target}
                  </span>
                  <h3 className="font-display text-2xl text-white font-bold mb-4 group-hover:text-[#10E784] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#A39B8B] font-light leading-relaxed mb-6">
                    {p.criteria}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-[11px] font-bold text-[#10E784] uppercase block mb-1">
                    Key Advantage:
                  </span>
                  <p className="text-xs text-[#E2D9C8] font-medium leading-relaxed">
                    {p.privilege}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privileges & Benefits Grid */}
      <section className="py-[var(--space-section-lg)] bg-[#0A0D0C] transition-colors duration-400">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-[#10E784] text-xs uppercase tracking-widest mb-4 font-bold">
              Program Privileges
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.12] tracking-tight">
              Rights & freedoms granted under Premium Residency.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Residency for self & eligible family members",
              "Real estate ownership across KSA (residential & commercial)",
              "Freedom to conduct commercial business without Saudi sponsor",
              "Exemption from expat levy & dependent fees",
              "Unrestricted entry & exit through Saudi ports",
              "Ability to recruit & hire private workers",
              "Right to work in private sector establishments",
              "Access to dedicated Premium Residency airport lanes",
            ].map((benefit, i) => (
              <div key={i} className="p-6 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl flex items-start gap-3 hover:border-[#10E784] transition-all">
                <CheckCircle2 className="h-5 w-5 text-[#10E784] shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-[#E2D9C8] leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[var(--space-section)] bg-[#0A0D0C] border-t border-white/10 transition-colors duration-400">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#10E784] text-xs uppercase tracking-widest mb-3 font-bold">
              Eligibility & Process FAQ
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-bold">
              Premium Residency Guidance
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
        eyebrow="Residency Evaluation"
        headline="Explore your pathway to Saudi Premium Residency."
        subtext="Our advisors evaluate your profile against the 5 official pathways to determine optimal qualification strategy and capital requirements."
        primaryCtaText="Check Residency Eligibility"
        onPrimaryCtaClick={() => setModalOpen(true)}
        secondaryCtaText="Explore Real Estate Investment"
        secondaryCtaHref="/services/real-estate"
      />

      <ContactFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService="premium-residency"
      />
    </div>
  );
}
