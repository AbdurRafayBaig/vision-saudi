"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function RealEstateSection() {
  return (
    <section className="relative bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white overflow-hidden border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/businessServices.png"
          alt="Premium Saudi Arabian commercial real estate architecture"
          fill
          className="object-cover opacity-45 dark:opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/85 via-slate-50/60 to-slate-50/30 dark:from-[#0A0D0C]/85 dark:via-[#0A0D0C]/60 dark:to-[#0A0D0C]/30" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 py-[var(--space-section-lg)]">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.12] tracking-tight mb-6">
              <span className="heading-gradient-light-to-dark block">Where capital</span>
              <span className="green-gradient-text block font-sans">meets place.</span>
            </h2>
            <p className="text-slate-300 dark:text-[#D8CCB8] text-lg leading-relaxed mb-4 font-light">
              Explore opportunities across the Kingdom — from Grade-A commercial
              headquarters in Riyadh and Jeddah to strategic residential and
              hospitality-led investment environments.
            </p>
            <p className="text-slate-400 dark:text-[#B9B3A8] text-sm leading-relaxed mb-10 font-light">
              Data-driven property analysis and strategic advisory in accordance
              with REGA frameworks.
            </p>

            <Button
              variant="primary"
              size="lg"
              showArrow
              href="/services/real-estate"
            >
              Explore Real Estate
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
