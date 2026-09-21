"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { NextStepCTA } from "@/components/ui/NextStepCTA";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { MASTER_SERVICES } from "@/data/services";
import { AccordionItem } from "@/components/ui/Accordion";
import { ContactFormModal } from "@/components/forms/ContactFormModal";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { CAPABILITIES } from "@/data/corporate-services";

// Three peers. They were three hand-copied blocks, and one had drifted to a
// green label while the others stayed grey — which read as one card being
// singled out for no reason a visitor could see.
const CONTINUITY_STAGES = [
  {
    label: "Stage 01",
    name: "ESTABLISH",
    description: "MISA foreign investment license, Commercial Registration, and corporate articles of association.",
  },
  {
    label: "Stage 02",
    name: "ACTIVATE",
    description: "Qiwa, GOSI, Muqeem portal setups, corporate bank account, and General Manager visa issuance.",
  },
  {
    label: "Stage 03 (Ongoing)",
    name: "OPERATE",
    description: "Continuous GRO, Saudization compliance, ZATCA tax filings, payroll administration, and annual renewals.",
  },
];

export default function CorporateServicesPage() {
  const service = MASTER_SERVICES.find((s) => s.slug === "corporate-services")!;
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCapability, setActiveCapability] = useState(0);


  return (
    <div className="bg-[#0A0D0C] text-white transition-colors duration-400 overflow-x-hidden min-h-screen">
      {/* Hero Section — Type B Editorial Split */}
      <PageHero
        type="type-a"
        category="GRO & COMPLIANCE INFRASTRUCTURE"
        title="Operate with accuracy in the Kingdom."
        subtitle="Your Commercial Registration opens the door. Our corporate services provide the ongoing operational infrastructure — GRO, Saudization compliance, ZATCA e-invoicing, payroll, and government renewals."
        imageSrc="/images/corporateBusinessServices.webp"
        imageAlt="Saudi Corporate Services & GRO Operations"
        primaryCtaLabel="Retain Corporate Support"
        onPrimaryCtaClick={() => setModalOpen(true)}
        secondaryCtaLabel="Explore Capabilities"
        secondaryCtaHref="#CAPABILITIES"
        />

      <Breadcrumbs trail={[{ label: "Services", href: "/services" }, { label: "Corporate & Business Services" }]} />

      {/* Continuity Journey: ESTABLISH → ACTIVATE → OPERATE */}
      <section className="py-16 bg-[#0A0D0C] border-b border-white/10 relative overflow-hidden transition-colors duration-400">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          {/* The design has no visible title here, but the outline needs one —
              without it the three cards jumped straight from h1 to h3. */}
          <h2 className="sr-only">How corporate services fit the establishment journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CONTINUITY_STAGES.map((stage) => (
              // Nothing here is selectable, so green is free to mean hover.
              <div
                key={stage.label}
                className="group p-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl transition-colors duration-300 hover:border-[#10E784] hover:bg-[#10E784]/[0.06]"
              >
                <span className="text-xs font-bold text-[#10E784] uppercase tracking-wider block mb-2">
                  {stage.label}
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-2">{stage.name}</h3>
                <p className="text-xs text-[#A39B8B] font-light leading-relaxed transition-colors duration-300 group-hover:text-[#D8CCB8]">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Capability System — Large Vertical List + Changing Media */}
      <section id="CAPABILITIES" className="py-[var(--space-section-lg)] bg-[#0A0D0C] transition-colors duration-400">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-[#10E784] text-xs uppercase tracking-widest mb-4 font-bold">
              Operational Scope
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.12] tracking-tight">
              Operational continuation, by design.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Capability Selector List */}
            <div className="lg:col-span-6 flex flex-col space-y-4">
              {CAPABILITIES.map((cap, idx) => {
                const isActive = idx === activeCapability;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCapability(idx)}
                    aria-pressed={isActive}
                    // No onMouseEnter. Selecting on hover fired by accident just
                    // moving the pointer down the list, and touch has no hover at
                    // all, so the two behaved differently. A click selects.
                    //
                    // Selected is a green edge on the inline start, not a green
                    // fill and a scale-up — that vocabulary belongs to hover, which
                    // is why the first card looked permanently hovered on load.
                    className={`text-start p-6 sm:p-8 rounded-2xl transition-all duration-300 border border-s-4 backdrop-blur-xl ${
                      isActive
                        ? "bg-white/[0.05] border-white/10 border-s-[#10E784] text-white"
                        // Hover carries no green at all. In this list green means
                        // "this one is selected", and a hover that borrowed even a
                        // muted version of it made the card that happens to be
                        // selected on arrival look like the pointer was sitting on
                        // it. Hover is a neutral lift; green is a state.
                        // Two channels, so it is unmistakable without borrowing
                        // green: a white edge where the selected card has a green
                        // one, and a small shift toward the reader. A 5% lift in
                        // surface brightness alone measured 11/255 and simply was
                        // not visible on a dark screen.
                        : "bg-white/[0.03] border-white/10 border-s-transparent text-[#A39B8B] hover:bg-white/[0.13] hover:border-white/35 hover:border-s-white/70 hover:text-white hover:translate-x-1 rtl:hover:-translate-x-1"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-mono font-bold uppercase tracking-wider ${isActive ? "text-[#10E784]" : "text-[#A39B8B]"}`}>
                        Capability 0{idx + 1}
                      </span>
                      {isActive && <ArrowRight className="h-4 w-4 text-[#10E784]" />}
                    </div>
                    <h3 className={`font-display text-2xl font-bold mb-2 ${isActive ? "text-white" : "text-[#E2D9C8]"}`}>
                      {cap.title}
                    </h3>
                    <p className="text-xs text-[#10E784] font-medium mb-3">
                      {cap.tagline}
                    </p>
                    <p className="text-xs text-[#A39B8B] font-light leading-relaxed">
                      {cap.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right: Active Capability Media & Detail Box */}
            <div className="lg:col-span-6 sticky top-28">
              <div
                key={activeCapability}
                className="anim-rise-in bg-[#101312] text-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-white/15 backdrop-blur-2xl"
              >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-8 border border-white/10">
                    <Image
                      src={CAPABILITIES[activeCapability].image}
                      alt={CAPABILITIES[activeCapability].title}
                      fill
                      className="object-cover"
                      sizes="40vw"
                    />
                  </div>

                  <h4 className="text-xs uppercase tracking-widest text-[#10E784] mb-4 pb-3 border-b border-white/10 font-bold">
                    Delivered Capabilities Scope:
                  </h4>

                  <ul className="space-y-3">
                    {CAPABILITIES[activeCapability].details.map((d, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-[#E2D9C8]">
                        <CheckCircle2 className="h-4 w-4 text-[#10E784] shrink-0" />
                        <span className="font-light">{d}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#A39B8B]">
                    <span>Official Kingdom Compliance</span>
                    <ShieldCheck className="h-4 w-4 text-[#10E784]" />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[var(--space-section)] bg-[#0A0D0C] border-t border-white/10 transition-colors duration-400">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#10E784] text-xs uppercase tracking-widest mb-3 font-bold">
              Corporate Governance FAQ
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-bold">
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
      <RelatedServices currentSlug="corporate-services" />

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
