"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { NextStepCTA } from "@/components/ui/NextStepCTA";
import { MASTER_SERVICES } from "@/data/services";
import { AccordionItem } from "@/components/ui/Accordion";
import { ContactFormModal } from "@/components/forms/ContactFormModal";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export default function CorporateServicesPage() {
  const service = MASTER_SERVICES.find((s) => s.slug === "corporate-services")!;
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCapability, setActiveCapability] = useState(0);

  const capabilities = [
    {
      title: "Government Relations & GRO Operations",
      tagline: "Qiwa, Muqeem, and Ministry of Labor Representation",
      description:
        "Direct liaison with Saudi ministries to manage work visas, Iqama issuance and renewals, Saudization (Nitaqat) ratio optimization, and Qiwa portal administration.",
      details: [
        "Work Visa & Block Visa Allocation",
        "Iqama Issuance & Renewal Management",
        "Muqeem Exit/Re-Entry Visa Authorizations",
        "Commercial Registration (CR) Annual Renewals",
      ],
      image: "/images/businessServices.png",
    },
    {
      title: "Tax, ZATCA & Financial Compliance",
      tagline: "E-Invoicing Phase 2 & Tax Filings",
      description:
        "Ensure complete compliance with ZATCA Phase 2 FATOORA integration, annual corporate tax returns, VAT filing, and withholding tax coordination.",
      details: [
        "ZATCA E-Invoicing Integration (Phase 2)",
        "VAT Registration & Quarterly Returns",
        "Zakat & Corporate Income Tax Coordination",
        "Audited Financial Statement Submissions",
      ],
      image: "/images/servicePartnersPic.png",
    },
    {
      title: "Saudization & HR Infrastructure",
      tagline: "Nitaqat Green Zone Maintenance",
      description:
        "Structure local workforce quotas, GOSI monthly registrations, compliant employment contracts, and ongoing HR administrative support.",
      details: [
        "Nitaqat Target Calculation & Monitoring",
        "GOSI Social Insurance Monthly Filings",
        "Standardized Labor Law Employment Contracts",
        "Payroll Wages Protection System (WPS)",
      ],
      image: "/images/successPartnersPiic.png",
    },
    {
      title: "Corporate Governance & Office Sourcing",
      tagline: "Municipal Licenses & Entity Standing",
      description:
        "Secure Balady municipal licenses, registered commercial office addresses, corporate bank account maintenance, and legal entity modifications.",
      details: [
        "Balady Commercial Office Licenses",
        "Grade-A Commercial Space Sourcing",
        "Corporate Secretarial & MoA Amendments",
        "Annual MISA License Renewals & Audits",
      ],
      image: "/images/aboutHeritagePage.png",
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white transition-colors duration-400 overflow-x-hidden min-h-screen">
      {/* Hero Section — Type B Editorial Split */}
      <PageHero
        type="type-b"
        category="GRO & COMPLIANCE INFRASTRUCTURE"
        title="Operate with accuracy in the Kingdom."
        subtitle="Your Commercial Registration opens the door. Our corporate services provide the ongoing operational infrastructure — GRO, Saudization compliance, ZATCA e-invoicing, payroll, and government renewals."
        imageSrc="/images/corporateBusinessServices.png"
        imageAlt="Saudi Corporate Services & GRO Operations"
        primaryCtaLabel="Retain Corporate Support"
        onPrimaryCtaClick={() => setModalOpen(true)}
        secondaryCtaLabel="Explore Capabilities"
        secondaryCtaHref="#capabilities"
        customVisual={
          <div className="bg-white dark:bg-[#101312] text-slate-900 dark:text-white p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-white/15 shadow-xl dark:shadow-2xl space-y-6 backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
              <span className="text-xs font-mono text-[#059669] dark:text-[#10E784] uppercase tracking-wider font-bold">GRO & COMPLIANCE PANEL</span>
              <span className="text-xs font-bold text-[#059669] dark:text-[#10E784] px-3 py-1 bg-[#10E784]/15 border border-[#10E784]/30 rounded-full font-mono">ACTIVE MONITORING</span>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Saudization Ratio (Nitaqat)</div>
                  <div className="text-[11px] text-slate-500 dark:text-[#A39B8B]">Ministry of Human Resources</div>
                </div>
                <span className="text-xs font-bold text-[#059669] dark:text-[#10E784] px-2.5 py-0.5 bg-[#10E784]/15 border border-[#10E784]/30 rounded-full font-mono">HIGH GREEN</span>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">ZATCA Phase 2 FATOORA</div>
                  <div className="text-[11px] text-slate-500 dark:text-[#A39B8B]">Tax & E-Invoicing Clearance</div>
                </div>
                <span className="text-xs font-bold text-[#059669] dark:text-[#10E784] px-2.5 py-0.5 bg-[#10E784]/15 border border-[#10E784]/30 rounded-full font-mono">COMPLIANT</span>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Wages Protection (WPS)</div>
                  <div className="text-[11px] text-slate-500 dark:text-[#A39B8B]">Monthly GOSI Payroll Filing</div>
                </div>
                <span className="text-xs font-bold text-[#059669] dark:text-[#10E784] px-2.5 py-0.5 bg-[#10E784]/15 border border-[#10E784]/30 rounded-full font-mono">SUBMITTED</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-500 dark:text-[#A39B8B] font-light flex items-center justify-between border-t border-slate-200 dark:border-white/10">
              <span>Annual CR & MISA Renewal Service</span>
              <ShieldCheck className="h-4 w-4 text-[#059669] dark:text-[#10E784]" />
            </div>
          </div>
        }
      />

      {/* Continuity Journey: ESTABLISH → ACTIVATE → OPERATE */}
      <section className="py-16 bg-white dark:bg-[#0A0D0C] border-b border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-400">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl">
              <span className="text-xs font-mono font-bold text-slate-400 dark:text-[#A39B8B] uppercase tracking-wider block mb-2">Stage 01</span>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-2">ESTABLISH</h3>
              <p className="text-xs text-slate-600 dark:text-[#A39B8B] font-light leading-relaxed">
                MISA foreign investment license, Commercial Registration, and corporate articles of association.
              </p>
            </div>

            <div className="p-8 bg-slate-50 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl">
              <span className="text-xs font-mono font-bold text-slate-400 dark:text-[#A39B8B] uppercase tracking-wider block mb-2">Stage 02</span>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-2">ACTIVATE</h3>
              <p className="text-xs text-slate-600 dark:text-[#A39B8B] font-light leading-relaxed">
                Qiwa, GOSI, Muqeem portal setups, corporate bank account, and General Manager visa issuance.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-[#101312] text-slate-900 dark:text-white rounded-3xl border border-[#10E784] shadow-xl dark:shadow-2xl">
              <span className="text-xs font-mono font-bold text-[#059669] dark:text-[#10E784] uppercase tracking-wider block mb-2">Stage 03 (Ongoing)</span>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-2">OPERATE</h3>
              <p className="text-xs text-slate-600 dark:text-[#A39B8B] font-light leading-relaxed">
                Continuous GRO, Saudization compliance, ZATCA tax filings, payroll administration, and annual renewals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Capability System — Large Vertical List + Changing Media */}
      <section id="capabilities" className="py-[var(--space-section-lg)] bg-slate-50 dark:bg-[#0A0D0C] transition-colors duration-400">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-[#059669] dark:text-[#10E784] text-xs font-mono uppercase tracking-widest mb-4 font-bold">
              Operational Scope
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-[1.12] tracking-tight">
              Operational continuation, by design.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Capability Selector List */}
            <div className="lg:col-span-6 flex flex-col space-y-4">
              {capabilities.map((cap, idx) => {
                const isActive = idx === activeCapability;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCapability(idx)}
                    onMouseEnter={() => setActiveCapability(idx)}
                    className={`text-left p-6 sm:p-8 rounded-2xl transition-all duration-300 border backdrop-blur-xl ${
                      isActive
                        ? "bg-[#10E784]/15 border-[#10E784] shadow-xl text-slate-900 dark:text-white scale-[1.02]"
                        : "bg-white dark:bg-white/[0.03] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-slate-600 dark:text-[#A39B8B]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-mono font-bold uppercase tracking-wider ${isActive ? "text-[#059669] dark:text-[#10E784]" : "text-slate-400 dark:text-[#A39B8B]"}`}>
                        Capability 0{idx + 1}
                      </span>
                      {isActive && <ArrowRight className="h-4 w-4 text-[#059669] dark:text-[#10E784]" />}
                    </div>
                    <h3 className={`font-display text-2xl font-bold mb-2 ${isActive ? "text-slate-900 dark:text-white" : "text-slate-800 dark:text-[#E2D9C8]"}`}>
                      {cap.title}
                    </h3>
                    <p className="text-xs text-[#059669] dark:text-[#10E784] font-medium mb-3">
                      {cap.tagline}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-[#A39B8B] font-light leading-relaxed">
                      {cap.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right: Active Capability Media & Detail Box */}
            <div className="lg:col-span-6 sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCapability}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white dark:bg-[#101312] text-slate-900 dark:text-white p-8 sm:p-10 rounded-3xl shadow-xl dark:shadow-2xl border border-slate-200 dark:border-white/15 backdrop-blur-2xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-8 border border-slate-200 dark:border-white/10">
                    <Image
                      src={capabilities[activeCapability].image}
                      alt={capabilities[activeCapability].title}
                      fill
                      className="object-cover"
                      sizes="40vw"
                    />
                  </div>

                  <h4 className="text-xs uppercase font-mono tracking-widest text-[#059669] dark:text-[#10E784] mb-4 pb-3 border-b border-slate-200 dark:border-white/10 font-bold">
                    Delivered Capabilities Scope:
                  </h4>

                  <ul className="space-y-3">
                    {capabilities[activeCapability].details.map((d, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-[#E2D9C8]">
                        <CheckCircle2 className="h-4 w-4 text-[#059669] dark:text-[#10E784] shrink-0" />
                        <span className="font-light">{d}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-[#A39B8B]">
                    <span>Official Kingdom Compliance</span>
                    <ShieldCheck className="h-4 w-4 text-[#059669] dark:text-[#10E784]" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[var(--space-section)] bg-white dark:bg-[#0A0D0C] border-t border-slate-200 dark:border-white/10 transition-colors duration-400">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#059669] dark:text-[#10E784] text-xs font-mono uppercase tracking-widest mb-3 font-bold">
              Corporate Governance FAQ
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-900 dark:text-white font-bold">
              Post-Establishment Compliance
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
        eyebrow="Corporate Continuity"
        headline="Keep your Saudi entity fully compliant and operational."
        subtext="Retain Vision Saudi's corporate services team for GRO administration, Saudization management, ZATCA tax filings, and legal renewals."
        primaryCtaText="Retain Corporate Support"
        onPrimaryCtaClick={() => setModalOpen(true)}
        secondaryCtaText="Explore Technology Infrastructure"
        secondaryCtaHref="/services/technology-infrastructure"
      />

      <ContactFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService="corporate-services"
      />
    </div>
  );
}
