"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { NextStepCTA } from "@/components/ui/NextStepCTA";
import { MASTER_SERVICES } from "@/data/services";
import { AccordionItem } from "@/components/ui/Accordion";
import { ContactFormModal } from "@/components/forms/ContactFormModal";
import { ShieldCheck, Cpu, Database, Cloud, Smartphone, Zap, Server } from "lucide-react";

export default function TechnologyPage() {
  const service = MASTER_SERVICES.find((s) => s.slug === "technology-infrastructure")!;
  const [modalOpen, setModalOpen] = useState(false);

  const techModules = [
    {
      icon: Database,
      title: "Enterprise ERP & Finance",
      desc: "Local KSA localized SAP, Oracle, and Odoo implementations integrated with ZATCA Phase 2 e-invoicing.",
    },
    {
      icon: Cpu,
      title: "Automated AI Workflows",
      desc: "Custom document processing, automated customer support pipelines, and intelligent operational workflow tools.",
    },
    {
      icon: Cloud,
      title: "Cloud & Data Hosting",
      desc: "KSA local cloud infrastructure compliance (Saudi Telecom Cloud, CST certified hosting) for data residency laws.",
    },
    {
      icon: Smartphone,
      title: "Custom Digital Platforms",
      desc: "B2B client portals, mobile applications, and enterprise web platforms engineered for the Saudi market.",
    },
    {
      icon: Zap,
      title: "HR & Payroll Systems",
      desc: "Localized payroll software integrated with Wages Protection System (WPS) and GOSI government databases.",
    },
    {
      icon: Server,
      title: "Corporate Email & Security",
      desc: "Enterprise Microsoft 365, Google Workspace, cybersecurity audits, and local domain infrastructure.",
    },
  ];

  return (
    <div className="bg-[#0A0D0C] text-white overflow-x-hidden min-h-screen transition-colors duration-300">
      {/* Hero Section — Type B Editorial Split */}
      <PageHero
        type="type-a"
        category="ENTERPRISE SYSTEMS & DIGITAL"
        title="Infrastructure behind growth."
        subtitle="Technology built for Saudi Arabia's regulatory and enterprise environment — from ERP systems and ZATCA integration to automated workflows, cloud hosting, and custom digital platforms."
        imageSrc="/images/servicePartnersPic.webp"
        imageAlt="Saudi Enterprise Digital Architecture & Systems"
        primaryCtaLabel="Request Tech Consultation"
        onPrimaryCtaClick={() => setModalOpen(true)}
        secondaryCtaLabel="Explore Enterprise Systems"
        secondaryCtaHref="#systems"
        />

      {/* Strategic Technology Partner Attribution Banner */}
      <section className="bg-[#0A0D0C] text-white py-12 border-b border-white/10 relative overflow-hidden transition-colors">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="p-8 bg-[#101312] border border-white/15 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl backdrop-blur-2xl">
            <div className="flex items-start gap-4">
              <ShieldCheck className="h-8 w-8 text-[#10E784] shrink-0 mt-1" />
              <div>
                <span className="text-xs font-bold text-[#10E784] tracking-widest uppercase block mb-1">
                  STRATEGIC TECHNOLOGY PARTNER
                </span>
                <h3 className="font-display text-xl text-white font-bold mb-1">
                  Implemented in partnership with SLNEE
                </h3>
                <p className="text-xs text-[#A39B8B] font-light max-w-2xl leading-relaxed">
                  Vision Saudi&apos;s enterprise technology capabilities draw upon deep Saudi execution experience. Historical multi-million-riyal government and enterprise systems delivered through strategic partner SLNEE.
                </p>
              </div>
            </div>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#10E784] hover:text-white transition-colors shrink-0"
            >
              <span>View SLNEE Track Record</span>
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Systems Spectrum Grid */}
      <section id="systems" className="py-[var(--space-section-lg)] bg-[#0A0D0C] transition-colors">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-[#10E784] text-xs uppercase tracking-widest mb-4 font-bold">
              Technology Spectrum
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.12] tracking-tight">
              Enterprise digital architecture.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techModules.map((mod, idx) => (
              <Reveal key={idx} y={20} className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#10E784] hover:shadow-[0_0_25px_rgba(16,231,132,0.1)] hover:-translate-y-1 transition-all duration-300 shadow-xl group">
                <div className="w-12 h-12 rounded-2xl bg-[#10E784]/15 border border-[#10E784]/30 flex items-center justify-center text-[#10E784] mb-6 group-hover:bg-[#10E784] group-hover:text-[#0A0D0C] transition-all duration-300">
                  <mod.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl text-white font-bold mb-3 group-hover:text-[#10E784] transition-colors">
                  {mod.title}
                </h3>
                <p className="text-xs text-[#A39B8B] font-light leading-relaxed mb-6">
                  {mod.desc}
                </p>
                <div className="pt-4 border-t border-white/10 text-xs font-bold text-[#10E784] tracking-wider uppercase">
                  Enterprise Ready · KSA
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture & Workflow Diagram Visual */}
      <section className="py-[var(--space-section)] bg-[#0A0D0C] border-t border-white/10 transition-colors">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <p className="text-[#10E784] text-xs uppercase tracking-widest mb-4 font-bold">
                System Integration Flow
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-white font-bold mb-6">
                Connected infrastructure that scales with your entity.
              </h2>
              <p className="text-[#A39B8B] text-base leading-relaxed font-light mb-8">
                We design technology workflows so your corporate entity communicates directly with Saudi government portals, financial institutions, and internal enterprise dashboards without manual bottleneck.
              </p>

              <div className="space-y-4">
                <div className="p-5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#10E784]/15 border border-[#10E784]/30 text-[#10E784] flex items-center justify-center font-bold text-xs font-mono shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Data Residency & Cloud Compliance</h4>
                    <p className="text-xs text-[#A39B8B] font-light">All corporate databases hosted on CST-compliant Saudi cloud servers.</p>
                  </div>
                </div>

                <div className="p-5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#10E784]/15 border border-[#10E784]/30 text-[#10E784] flex items-center justify-center font-bold text-xs font-mono shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Government API Integration</h4>
                    <p className="text-xs text-[#A39B8B] font-light">Direct integration with ZATCA e-invoicing and Qiwa HR portals.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#101312] text-white p-8 sm:p-12 rounded-3xl border border-white/15 shadow-2xl backdrop-blur-2xl">
              <h3 className="text-xs uppercase tracking-widest text-[#10E784] mb-6 pb-3 border-b border-white/10 font-bold">
                Workflow System Diagram
              </h3>

              <div className="space-y-6">
                <div className="p-4 bg-white/[0.03] border border-white/10 rounded-2xl">
                  <span className="text-xs font-mono text-[#10E784] block mb-1">INPUT LAYER</span>
                  <div className="text-sm font-bold text-white">Commercial Transactions & HR Data</div>
                </div>

                <div className="flex justify-center text-[#10E784]">↓</div>

                <div className="p-4 bg-[#10E784]/15 border border-[#10E784]/30 rounded-2xl text-center">
                  <span className="text-xs font-mono text-[#10E784] block mb-1 font-bold">VISION SAUDI DIGITAL CORE</span>
                  <div className="text-base font-bold text-white">ZATCA + ERP + WPS Automation Engine</div>
                </div>

                <div className="flex justify-center text-[#10E784]">↓</div>

                <div className="p-4 bg-white/[0.03] border border-white/10 rounded-2xl">
                  <span className="text-xs font-mono text-[#10E784] block mb-1">OUTPUT LAYER</span>
                  <div className="text-sm font-bold text-white">Real-Time Financial Dashboard & Government Reporting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[var(--space-section)] bg-[#0A0D0C] transition-colors">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#10E784] text-xs uppercase tracking-widest mb-3 font-bold">
              Technology FAQ
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-bold">
              Systems & Regulatory Compliance
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
        eyebrow="Digital Infrastructure"
        headline="Build the technology behind your Saudi growth."
        subtext="Schedule a technical discovery session with our digital strategists to plan your ERP, ZATCA e-invoicing, and cloud infrastructure."
        primaryCtaText="Request Tech Consultation"
        onPrimaryCtaClick={() => setModalOpen(true)}
        secondaryCtaText="Explore Real Estate Investment"
        secondaryCtaHref="/services/real-estate"
      />

      <ContactFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService="technology"
      />
    </div>
  );
}
