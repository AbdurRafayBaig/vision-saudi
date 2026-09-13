"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ContactFormModal } from "@/components/forms/ContactFormModal";

export interface NextStepCTAProps {
  eyebrow?: string;
  headline: string;
  subtext?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  onPrimaryCtaClick?: () => void;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function NextStepCTA({
  eyebrow = "Next Step",
  headline,
  subtext = "Connect with senior market-entry strategists to evaluate your establishment, investment, or advisory requirements in Saudi Arabia.",
  primaryCtaText = "Make the First Move",
  primaryCtaHref,
  onPrimaryCtaClick,
  secondaryCtaText,
  secondaryCtaHref,
}: NextStepCTAProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handlePrimaryClick = () => {
    if (onPrimaryCtaClick) {
      onPrimaryCtaClick();
    } else if (!primaryCtaHref) {
      setModalOpen(true);
    }
  };

  return (
    <>
      <section className="bg-white dark:bg-[#101312] text-slate-900 dark:text-white py-[var(--space-section-lg)] relative overflow-hidden border-t border-slate-200 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10E784]/10 border border-[#10E784]/30 text-[#10E784] text-xs font-mono font-semibold tracking-widest uppercase mb-4">
              <span>VISION SAUDI / {eyebrow}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.12] tracking-tight mb-6">
              <span className="heading-gradient-light-to-dark block">{headline}</span>
            </h2>

            <p className="text-slate-600 dark:text-[#D8CCB8] text-lg leading-relaxed mb-10 font-light max-w-2xl">
              {subtext}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="emerald"
                size="lg"
                showArrow
                onClick={handlePrimaryClick}
                href={primaryCtaHref}
                className="font-bold"
              >
                {primaryCtaText}
              </Button>

              {secondaryCtaText && secondaryCtaHref && (
                <Button variant="ivory" size="lg" href={secondaryCtaHref} className="border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white font-bold">
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <ContactFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
