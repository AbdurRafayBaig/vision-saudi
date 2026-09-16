"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Business Setup",
    subtitle: "Market entry, formation & activation",
    description:
      "From MISA licensing and Commercial Registration to corporate bank accounts and Qiwa activation — we handle the full establishment process so your Saudi entity is operational, not just registered.",
    image: "/images/businessSetup.png",
    href: "/services/business-setup",
  },
  {
    number: "02",
    title: "Corporate Services",
    subtitle: "Ongoing operations & compliance",
    description:
      "Government relations, Saudization compliance, ZATCA e-invoicing, payroll administration, and regulatory renewals. The infrastructure that keeps your Saudi entity in good standing.",
    image: "/images/corporateBusinessServices.png",
    href: "/services/corporate-services",
  },
  {
    number: "03",
    title: "Real Estate",
    subtitle: "Investment & property opportunities",
    description:
      "Strategic real estate advisory across Riyadh, Jeddah, Makkah and Madinah — from Grade-A commercial headquarters to high-yield residential investment portfolios.",
    image: "/images/businessServices.png",
    href: "/services/real-estate",
  },
  {
    number: "04",
    title: "Premium Residency",
    subtitle: "Residency pathways for investors & talent",
    description:
      "Navigate Saudi Premium Residency through Investor, Entrepreneur, Special Talent, and Real Estate Owner pathways. Strategic evaluation and application support.",
    image: "/images/aboutHeritagePage.png",
    href: "/services/premium-residency",
  },
];

export default function ServiceNavigator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section id="services" className="bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white relative overflow-hidden py-[var(--space-section-lg)] border-b border-slate-200 dark:border-white/10">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#10E784]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.12] tracking-tight">
            <span className="heading-gradient-light-to-dark block">Four directions into</span>
            <span className="green-gradient-text block font-sans">the Saudi market.</span>
          </h2>
        </div>

        {/* Service Navigator — Desktop */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
          {/* Left: Service List */}
          <div className="col-span-5 flex flex-col gap-2">
            {services.map((service, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={service.number}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`text-left p-6 rounded-2xl transition-all duration-300 group ${
                    isActive
                      ? "bg-white dark:bg-white/[0.05] border-l-4 border-[#10E784] shadow-xl backdrop-blur-md"
                      : "bg-transparent border-l-4 border-transparent hover:bg-emerald-500/5 dark:hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`text-sm font-mono font-bold tabular-nums transition-colors duration-300 mt-1 ${
                      isActive ? "text-[#10E784]" : "text-slate-400 dark:text-[#B9B3A8]"
                    }`}>
                      {service.number}
                    </span>
                    <div>
                      <h3 className={`font-display text-2xl font-bold transition-colors duration-300 mb-1 ${
                        isActive ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-[#B9B3A8] group-hover:text-[#10E784]"
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-xs transition-all duration-300 font-light ${
                        isActive ? "text-slate-600 dark:text-[#D8CCB8]" : "text-slate-400 dark:text-[#7A7A72]"
                      }`}>
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Image + Description */}
          <div className="col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.number}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white dark:bg-white/[0.03] p-8 rounded-3xl border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-2xl"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-8 border border-slate-200 dark:border-white/10 shadow-lg">
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    className="object-cover transition-transform duration-700"
                    sizes="60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 dark:from-[#0A0D0C]/80 via-transparent to-transparent" />
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-[#D8CCB8] text-base leading-relaxed mb-6 font-light">
                  {activeService.description}
                </p>

                <Link
                  href={activeService.href}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#10E784] hover:gap-3 transition-all duration-300"
                >
                  <span>Explore {activeService.title} Specification</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Service Navigator — Mobile (Stacked) */}
        <div className="lg:hidden flex flex-col gap-6">
          {services.map((service) => (
            <div key={service.number} className="bg-white dark:bg-white/[0.03] p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-md hover:border-[#10E784]/50 transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-5">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="flex items-start gap-3 mb-3">
                <span className="text-sm font-mono text-[#10E784] font-bold mt-0.5">{service.number}</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-[#B9B3A8] leading-relaxed mb-4 font-light">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-[#10E784] text-xs font-mono font-bold uppercase"
                  >
                    <span>Explore {service.title}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

