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
import { PropertyShowcase } from "@/components/real-estate/PropertyShowcase";
import { CheckCircle2, ArrowRight, Building2, Landmark, Compass, ShieldCheck } from "lucide-react";

export default function RealEstatePage() {
  const service = MASTER_SERVICES.find((s) => s.slug === "real-estate")!;
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: "commercial",
      title: "Commercial Headquarters & Office Towers",
      subtitle: "Riyadh & Jeddah Prime Locations",
      description:
        "Strategic acquisition and leasing of Grade-A office space in KAFD (King Abdullah Financial District), Olaya, and prime business corridors across Riyadh and Jeddah.",
      image: "/images/successPartnersPiic.png",
      specs: ["Grade-A Commercial Space", "MISA & Ministry Compliant Leases", "KAFD & Olaya Districts", "Full Fit-Out Coordination"],
    },
    {
      id: "residential",
      title: "High-Yield Residential Portfolios",
      subtitle: "Executive Housing & Luxury Residential",
      description:
        "Sourcing and managing premium residential assets tailored for corporate executive compounds, high-net-worth investors, and residency qualification pathways.",
      image: "/images/businessSetup.png",
      specs: ["Executive Compounds", "Premium Residency Eligible", "High Rental Yield Portfolios", "Property Management Support"],
    },
    {
      id: "hospitality",
      title: "Hospitality & Mixed-Use Developments",
      subtitle: "Strategic Tourism & Cultural Assets",
      description:
        "Advisory across Saudi Arabia's expanding tourism and hospitality sector, evaluating strategic boutique hotel assets, commercial retail centers, and leisure developments.",
      image: "/images/corporateBusinessServices.png",
      specs: ["Boutique Hotel Sourcing", "Retail & Commercial Hubs", "Vision 2030 Tourism Corridors", "Operator Partnership Advisory"],
    },
    {
      id: "land",
      title: "Strategic Land & Industrial Parcels",
      subtitle: "Makkah, Madinah & Industrial Zones",
      description:
        "Legally compliant investment advisory for industrial logistics land in MODON zones, plus verified foreign investment advisory for permitted real estate structures.",
      image: "/images/hero-riyadh.png",
      specs: ["MODON Industrial Logistics", "REGA Compliance Verification", "Land Acquisition Due Diligence", "Long-Term Capital Growth"],
    },
  ];

  const journeySteps = [
    { step: "01", name: "DISCOVER", desc: "Identify target asset classes, location parameters, yield targets, and regulatory capital rules." },
    { step: "02", name: "ASSESS", desc: "Perform market valuation, rental yield analysis, zoning check, and municipal compliance audit." },
    { step: "03", name: "DUE DILIGENCE", desc: "REGA title deed verification, legal title checks, encumbrance verification, and physical inspection." },
    { step: "04", name: "ACQUIRE", desc: "Structure purchase agreements, manage escrow/notary transfer, and register official ownership." },
    { step: "05", name: "MANAGE / EXIT", desc: "Tenant management, lease administration, asset optimization, or strategic portfolio disposition." },
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white transition-colors duration-400 overflow-x-hidden min-h-screen">
      {/* Hero Section — Type A Cinematic with High-Visibility Background */}
      <PageHero
        type="type-a"
        category="INVESTMENT & PROPERTY ADVISORY"
        title="Where capital meets place."
        subtitle="Strategic real estate advisory across Riyadh, Jeddah, Makkah, and Madinah — from Grade-A commercial headquarters to high-yield residential investment portfolios."
        imageSrc="/images/businessSetup.png"
        imageAlt="Saudi Arabia Luxury Real Estate & Skyline"
        primaryCtaLabel="Inquire for Real Estate Advisory"
        onPrimaryCtaClick={() => setModalOpen(true)}
        secondaryCtaLabel="Explore Properties"
        secondaryCtaHref="#properties-showcase"
      />

      {/* Interactive Properties Listing Showcase with Filter Sidebar */}
      <PropertyShowcase
        onBookConsultation={(title: string) => {
          setModalOpen(true);
        }}
      />

      {/* Narrative Section */}
      <section className="py-[var(--space-section)] bg-white dark:bg-[#0A0D0C] border-t border-slate-200 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <p className="text-[#059669] dark:text-[#10E784] text-xs font-mono uppercase tracking-widest mb-4 font-bold">
                Investment Perspective
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-[1.12] tracking-tight mb-6">
                More than agency. <br />
                <span className="green-gradient-text">Investment-grade Advisory.</span>
              </h2>
              <p className="text-slate-600 dark:text-[#A39B8B] text-lg leading-relaxed font-light mb-6">
                Saudi real estate represents one of the region's highest-conviction asset classes. Driven by Vision 2030 giga-projects, urban expansion, and corporate headquarters mandates, securing the right property requires local intelligence and legal precision.
              </p>
              <p className="text-slate-500 dark:text-[#A39B8B] text-sm font-light leading-relaxed">
                Vision Saudi acts as your strategic real estate advisory partner — evaluating assets, verifying legal titles, ensuring REGA regulatory compliance, and managing transactions from acquisition to exit.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 dark:border-white/15 shadow-xl dark:shadow-2xl backdrop-blur-xl">
                <Image
                  src="/images/properties/saudi_commercial_tower_1_1789299197392.png"
                  alt="Riyadh Commercial Skyline"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation System */}
      <section id="categories" className="py-[var(--space-section-lg)] bg-slate-50 dark:bg-[#0A0D0C] border-y border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#10E784]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <p className="text-[#059669] dark:text-[#10E784] text-xs font-mono uppercase tracking-widest mb-4 font-bold">
              Asset Spectrum
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-[1.12] tracking-tight">
              Four investment vectors.
            </h2>
          </div>

          {/* Category Tabs Header */}
          <div className="flex flex-wrap gap-3 mb-12 border-b border-slate-200 dark:border-white/10 pb-6">
            {categories.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(idx)}
                className={`px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${
                  activeCategory === idx
                    ? "bg-[#10E784] text-[#0A0D0C] shadow-lg shadow-[#10E784]/20"
                    : "bg-white dark:bg-white/[0.05] text-slate-600 dark:text-[#A39B8B] hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10"
                }`}
              >
                {cat.title.split("&")[0]}
              </button>
            ))}
          </div>

          {/* Active Category Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white dark:bg-[#101312] border border-slate-200 dark:border-white/15 rounded-3xl p-8 sm:p-12 shadow-xl dark:shadow-2xl backdrop-blur-2xl text-slate-900 dark:text-white"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <span className="text-xs font-mono font-bold text-[#059669] dark:text-[#10E784] tracking-widest uppercase block mb-2">
                    {categories[activeCategory].subtitle}
                  </span>
                  <h3 className="font-display text-3xl text-slate-900 dark:text-white font-bold mb-4">
                    {categories[activeCategory].title}
                  </h3>
                  <p className="text-slate-600 dark:text-[#A39B8B] text-base leading-relaxed font-light mb-8">
                    {categories[activeCategory].description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {categories[activeCategory].specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-3 p-3.5 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl text-xs font-medium text-slate-800 dark:text-[#E2D9C8]">
                        <CheckCircle2 className="h-4 w-4 text-[#059669] dark:text-[#10E784] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10">
                    <Image
                      src={categories[activeCategory].image}
                      alt={categories[activeCategory].title}
                      fill
                      className="object-cover"
                      sizes="40vw"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Advisory Journey: DISCOVER → ASSESS → DUE DILIGENCE → ACQUIRE → MANAGE / EXIT */}
      <section className="py-[var(--space-section-lg)] bg-white dark:bg-[#0A0D0C] transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-[#059669] dark:text-[#10E784] text-xs font-mono uppercase tracking-widest mb-4 font-bold">
              Methodology
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-[1.12] tracking-tight">
              The Real Estate Advisory Roadmap.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {journeySteps.map((step, idx) => (
              <div key={step.step} className="p-6 bg-slate-50 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl flex flex-col justify-between hover:border-[#10E784] hover:-translate-y-1 transition-all duration-300 group shadow-md dark:shadow-2xl">
                <div>
                  <div className="text-xs font-mono font-bold text-[#059669] dark:text-[#10E784] mb-3 uppercase">
                    {step.step} · {step.name}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-[#A39B8B] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 text-[11px] font-mono font-medium text-slate-400 dark:text-[#A39B8B]">
                  Stage {step.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[var(--space-section)] bg-slate-50 dark:bg-[#0A0D0C] border-t border-slate-200 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#059669] dark:text-[#10E784] text-xs font-mono uppercase tracking-widest mb-3 font-bold">
              Real Estate Investment FAQ
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-900 dark:text-white font-bold">
              Ownership & Legal Verification
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
        eyebrow="Real Estate Advisory"
        headline="Explore property & land opportunities in the Kingdom."
        subtext="Consult with our real estate strategists to evaluate commercial headquarters, residential portfolios, or strategic parcels across Riyadh, Jeddah, Makkah, and Madinah."
        primaryCtaText="Inquire for Real Estate Advisory"
        onPrimaryCtaClick={() => setModalOpen(true)}
        secondaryCtaText="Explore Premium Residency"
        secondaryCtaHref="/services/premium-residency"
      />

      <ContactFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService="real-estate"
      />
    </div>
  );
}
