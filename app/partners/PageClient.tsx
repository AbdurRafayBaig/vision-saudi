"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { NextStepCTA } from "@/components/ui/NextStepCTA";
import { Button } from "@/components/ui/Button";
import { ContactFormModal } from "@/components/forms/ContactFormModal";
import { Globe, Network, CheckCircle2, ShieldCheck } from "lucide-react";

export default function PartnersPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"service" | "success">("service");

  return (
    <div className="bg-[#0A0D0C] text-white overflow-x-hidden min-h-screen transition-colors duration-300">
      {/* Hero Section — Type C Statement */}
      <PageHero
        type="type-c"
        category="PARTNERSHIP ECOSYSTEM"
        title="An ecosystem built on collaboration."
        subtitle="We keep international specialist partners and ecosystem member businesses distinct, structuring appropriate Saudi regulatory and project-specific engagements."
        imageSrc="/images/partners-header.webp"
        imageAlt="Saudi Partnership Network & Modern Headquarters"
        primaryCtaLabel="Apply for Ecosystem Partnership"
        onPrimaryCtaClick={() => setModalOpen(true)}
      />

      {/* Narrative & Tab Selection Section */}
      <section className="py-[var(--space-section-lg)] bg-[#0A0D0C] transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Ecosystem Dual Model Header */}
          <div className="mb-12">
            <p className="text-[#10E784] text-xs uppercase tracking-widest mb-3 font-bold">
              Dual Vector Collaboration
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Two partnership models for the Saudi market.
            </h2>
          </div>

          {/* Tab Selection */}
          <div className="flex border-b border-white/10 mb-12 overflow-x-auto">
            <button
              onClick={() => setActiveTab("service")}
              className={`min-h-[44px] pb-4 px-6 text-sm font-bold uppercase tracking-wider transition-all duration-300 border-b-2 shrink-0 ${
                activeTab === "service"
                  ? "border-[#10E784] text-[#10E784]"
                  : "border-transparent text-[#A39B8B] hover:border-white/40 hover:text-white"
              }`}
            >
              Service Partners (International Specialists)
            </button>
            <button
              onClick={() => setActiveTab("success")}
              className={`min-h-[44px] pb-4 px-6 text-sm font-bold uppercase tracking-wider transition-all duration-300 border-b-2 shrink-0 ${
                activeTab === "success"
                  ? "border-[#10E784] text-[#10E784]"
                  : "border-transparent text-[#A39B8B] hover:border-white/40 hover:text-white"
              }`}
            >
              Success Partners (Ecosystem Members)
            </button>
          </div>

          {/* Active Tab Content */}
          {activeTab === "service" ? (
            <Reveal y={15} immediate className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 sm:p-12 rounded-3xl shadow-xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#10E784] bg-[#10E784]/10 px-3.5 py-1 border border-[#10E784]/30 rounded-full mb-6">
                  <Globe className="h-3.5 w-3.5" />
                  <span>INTERNATIONAL SERVICE PARTNERS</span>
                </div>
                <h3 className="font-display text-3xl text-white font-bold mb-4">
                  Connecting international specialists to Saudi opportunities.
                </h3>
                <p className="text-[#A39B8B] text-base font-light leading-relaxed mb-8">
                  The Vision Saudi Service Partner Program connects international technology vendors, specialized engineering consultancies, and niche service providers with major commercial opportunities in Saudi Arabia. We combine your domain expertise with our local Saudi infrastructure, government licenses, and execution experience.
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className="text-xs uppercase tracking-widest text-[#10E784] mb-3 font-bold">
                    Participation Criteria:
                  </h4>
                  {[
                    "Proven track record in home market or international domain",
                    "Specialist technology, engineering, or advisory capability",
                    "Compliance alignment with Saudi tax and commercial rules (ZATCA / Withholding Tax)",
                    "Commitment to local project delivery support and team deployment",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs text-[#E2D9C8] p-3.5 bg-white/[0.03] border border-white/10 rounded-2xl">
                      <CheckCircle2 className="h-4 w-4 text-[#10E784] shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <Button variant="emerald" size="lg" onClick={() => setModalOpen(true)}>
                  Apply as Service Partner
                </Button>
              </div>

              <div className="lg:col-span-5 bg-[#101312] text-white p-8 sm:p-10 rounded-3xl border border-white/15 shadow-2xl backdrop-blur-2xl space-y-6">
                <div className="text-xs font-bold text-[#10E784] uppercase tracking-wider border-b border-white/10 pb-3">
                  REGULATORY & TRANSPARENCY GUARANTEE
                </div>
                <p className="text-xs text-[#A39B8B] leading-relaxed font-light">
                  Service Partner engagements are structured specifically for each project, activity, and Saudi regulatory framework. Vision Saudi does not promise blanket exclusive access or guaranteed government tenders. All engagements comply strictly with MISA, ZATCA, and Saudi Commercial Law.
                </p>
                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#10E784]">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Verified Project-Specific Frameworks</span>
                </div>
              </div>
            </Reveal>
          ) : (
            <Reveal y={15} immediate className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 sm:p-12 rounded-3xl shadow-xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#10E784] bg-[#10E784]/10 px-3.5 py-1 border border-[#10E784]/30 rounded-full mb-6">
                  <Network className="h-3.5 w-3.5" />
                  <span>SUCCESS PARTNER NETWORK</span>
                </div>
                <h3 className="font-display text-3xl text-white font-bold mb-4">
                  Ecosystem member collaboration & growth.
                </h3>
                <p className="text-[#A39B8B] text-base font-light leading-relaxed mb-8">
                  For eligible companies operating inside the Vision Saudi ecosystem. Once established and activated, member companies collaborate across complementary commercial services, strategic referrals, real estate requirements, and regional expansion.
                </p>

                <div className="p-6 bg-[#101312] text-white rounded-2xl border border-white/15 mb-8">
                  <span className="text-xs font-mono text-[#10E784] block mb-1 font-bold">THE ECOSYSTEM SLOGAN</span>
                  <div className="text-lg font-display font-bold text-white tracking-wide">
                    ESTABLISH HERE. OPERATE HERE. PARTNER HERE. GROW HERE.
                  </div>
                </div>

                <Button variant="emerald" size="lg" onClick={() => setModalOpen(true)}>
                  Join Success Partner Ecosystem
                </Button>
              </div>

              <div className="lg:col-span-5 bg-[#101312] text-white p-8 sm:p-10 rounded-3xl border border-white/15 shadow-2xl backdrop-blur-2xl space-y-6">
                <div className="text-xs font-bold text-[#10E784] uppercase tracking-wider border-b border-white/10 pb-3">
                  NETWORK ADVANTAGES
                </div>
                <p className="text-xs text-[#A39B8B] leading-relaxed font-light">
                  Success Partners gain preferred visibility across Vision Saudi&apos;s establishment pipelines, corporate technology users, and real estate clients in Riyadh and Jeddah, creating organic peer-to-peer commercial growth.
                </p>
                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#10E784]">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Internal Ecosystem Synergies</span>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Next Step CTA */}
      <NextStepCTA
        eyebrow="Partner Ecosystem"
        headline="Collaborate with Vision Saudi in Saudi Arabia."
        subtext="Apply to join our international Service Partner registry or access member collaboration within our Saudi Success Partner ecosystem."
        primaryCtaText="Apply for Ecosystem Partnership"
        onPrimaryCtaClick={() => setModalOpen(true)}
        secondaryCtaText="Explore Corporate Services"
        secondaryCtaHref="/services/corporate-services"
      />

      <ContactFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService="partnership"
      />
    </div>
  );
}
