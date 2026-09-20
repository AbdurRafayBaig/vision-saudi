"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ContactFormModal } from "@/components/forms/ContactFormModal";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const ecosystemCategories = [
  {
    name: "Corporate & Advisory",
    description:
      "Formation, licensing, government relations, and ongoing regulatory compliance with MISA, Ministry of Commerce, and HRSD.",
  },
  {
    name: "Finance & Tax",
    description:
      "Corporate banking facilitation, ZATCA e-invoicing compliance, GOSI payroll integration, and corporate tax coordination.",
  },
  {
    name: "Technology & ERP",
    description:
      "Localized enterprise ERP, automated HR workflows, custom software, and AI-enabled compliance — delivered through strategic partner SLNEE.",
  },
  {
    name: "Communications",
    description:
      "SamMail corporate email, Saudi cloud infrastructure, domain governance, and cybersecurity protocols with in-Kingdom data sovereignty.",
  },
  {
    name: "Real Estate & Property",
    description:
      "Commercial HQ sourcing in Riyadh and Jeddah, residential investment analysis, and property guidance across the Kingdom including Makkah and Madinah.",
  },
  {
    name: "Partnership Network",
    description:
      "Service Partners for international specialists and Success Partners for ecosystem member businesses — structured collaboration across the Kingdom.",
  },
];

export default function EcosystemSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="bg-[#0A0D0C] text-white py-[var(--space-section-lg)] border-b border-white/10 relative overflow-hidden transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-[#10E784]/5 blur-[150px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.12] tracking-tight mb-6">
            <span className="heading-gradient-light-to-dark block">Your CR opens the door.</span>
            <span className="green-gradient-text block font-sans">We take you further.</span>
          </h2>
          <p className="text-[#D8CCB8] text-lg leading-relaxed font-light">
            Setting up a Saudi legal entity shouldn&apos;t leave you searching for another provider every time the business needs something. Six core commercial capabilities, one unified platform.
          </p>
        </motion.div>

        {/* Ecosystem Categories — Typography & Glass-led Accordion */}
        <div className="border border-white/10 rounded-3xl overflow-hidden bg-white/[0.02] backdrop-blur-xl p-4 sm:p-6 shadow-xl">
          {ecosystemCategories.map((category, idx) => {
            const isActive = activeIndex === idx;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, margin: "-30px" }}
                className="border-b border-white/10 last:border-b-0"
              >
                <button
                  onClick={() => setActiveIndex(isActive ? null : idx)}
                  className="w-full py-6 px-4 flex items-center justify-between text-left group transition-all duration-300 rounded-2xl hover:bg-white/[0.03]"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-sm font-mono text-[#10E784] font-bold w-6">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className={`font-display text-xl lg:text-2xl font-bold transition-colors duration-300 ${
                        isActive ? "text-[#10E784]" : "text-white group-hover:text-[#10E784]"
                      }`}
                    >
                      {category.name}
                    </h3>
                  </div>

                  <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive ? "rotate-180 bg-[#10E784]/20 border-[#10E784] text-[#10E784]" : "border-white/10 text-[#B9B3A8] group-hover:border-[#10E784] group-hover:text-[#10E784]"}`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-6 sm:pl-12 pr-4 sm:pr-6 pb-6 pt-2">
                        <div className="p-6 bg-white/[0.04] border border-white/10 rounded-2xl shadow-inner flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                          <p className="text-[#D8CCB8] text-base leading-relaxed font-light max-w-2xl">
                            {category.description}
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setContactModalOpen(true)}
                            className="shrink-0 text-xs font-bold tracking-wider"
                          >
                            <span className="inline-flex items-center gap-1.5">
                              <span>INQUIRE CAPABILITY</span>
                              <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                            </span>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => setContactModalOpen(true)}
          >
            Enter the Ecosystem
          </Button>
        </div>
      </div>

      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </section>
  );
}
