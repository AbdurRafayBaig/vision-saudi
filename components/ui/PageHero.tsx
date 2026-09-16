"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck } from "lucide-react";

export interface PageHeroProps {
  type: "type-a" | "type-b" | "type-c" | "type-d";
  category: string;
  title: string;
  subtitle: string;
  imageSrc?: string;
  imageAlt?: string;
  customVisual?: React.ReactNode;
  primaryCtaLabel?: string;
  onPrimaryCtaClick?: () => void;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  proofBadge?: string;
  proofText?: string;
}

export function PageHero({
  type,
  category,
  title,
  subtitle,
  imageSrc = "/images/hero-riyadh.png",
  imageAlt = "Saudi Arabia Landscape",
  customVisual,
  primaryCtaLabel,
  onPrimaryCtaClick,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  proofBadge,
  proofText,
}: PageHeroProps) {
  // Shared HD Background Image component
  const BackgroundHDImage = () => (
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#10E784]/20 blur-[140px]" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-[#00C86F]/15 blur-[150px]" />
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center opacity-85 dark:opacity-90 transition-opacity duration-700"
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/60 via-slate-50/30 to-slate-50 dark:from-[#0A0D0C]/55 dark:via-[#0A0D0C]/30 dark:to-[#0A0D0C] transition-colors duration-300" />
    </div>
  );

  // HERO TYPE A: CINEMATIC (Full-bleed media backdrop with high contrast editorial text)
  if (type === "type-a") {
    return (
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex flex-col justify-end bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white overflow-hidden pt-32 pb-16 md:pb-24 transition-colors duration-300">
        <BackgroundHDImage />

        {/* Content Container */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight mb-6 heading-gradient-light-to-dark">
              {title}
            </h1>

            <p className="text-slate-600 dark:text-[#94A3B8] text-lg sm:text-xl font-light leading-relaxed max-w-2xl mb-10">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {primaryCtaLabel && (
                <Button
                  variant="primary"
                  size="lg"
                  showArrow
                  onClick={onPrimaryCtaClick}
                  href={primaryCtaHref}
                >
                  {primaryCtaLabel}
                </Button>
              )}
              {secondaryCtaLabel && secondaryCtaHref && (
                <Button variant="ivory" size="lg" href={secondaryCtaHref}>
                  {secondaryCtaLabel}
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // HERO TYPE B: EDITORIAL SPLIT (Asymmetric 12-col grid: typography left, visual right)
  if (type === "type-b") {
    return (
      <section className="bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white pt-36 pb-20 md:pb-28 border-b border-slate-200 dark:border-white/10 overflow-hidden relative transition-colors duration-300">
        <BackgroundHDImage />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6 heading-gradient-light-to-dark">
                {title}
              </h1>

              <p className="text-slate-600 dark:text-[#94A3B8] text-lg sm:text-xl font-light leading-relaxed max-w-xl mb-10">
                {subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {primaryCtaLabel && (
                  <Button
                    variant="primary"
                    size="lg"
                    showArrow
                    onClick={onPrimaryCtaClick}
                    href={primaryCtaHref}
                  >
                    {primaryCtaLabel}
                  </Button>
                )}
                {secondaryCtaLabel && secondaryCtaHref && (
                  <Button variant="ivory" size="lg" href={secondaryCtaHref}>
                    {secondaryCtaLabel}
                  </Button>
                )}
              </div>
            </motion.div>

            {/* Right Media / Custom Visual Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              {customVisual ? (
                customVisual
              ) : (
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 dark:border-white/15 shadow-2xl">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-[#0A0D0C]/90 via-transparent to-transparent" />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // HERO TYPE C: STATEMENT / CREDIBILITY (Bold statement hero for About, Experience, Partnerships)
  if (type === "type-c") {
    return (
      <section className="bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white pt-36 pb-20 md:pb-24 border-b border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
        <BackgroundHDImage />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={customVisual ? "lg:col-span-7" : "lg:col-span-12 max-w-4xl"}
            >
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.12] tracking-tight mb-6 heading-gradient-light-to-dark">
                {title}
              </h1>

              <p className="text-slate-600 dark:text-[#94A3B8] text-lg sm:text-xl font-light leading-relaxed max-w-3xl mb-10">
                {subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                {primaryCtaLabel && (
                  <Button
                    variant="primary"
                    size="lg"
                    showArrow
                    onClick={onPrimaryCtaClick}
                    href={primaryCtaHref}
                  >
                    {primaryCtaLabel}
                  </Button>
                )}

                {proofText && (
                  <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-[#94A3B8] rounded-xl backdrop-blur-md shadow-sm">
                    <ShieldCheck className="h-4 w-4 text-[#059669] dark:text-[#10E784] shrink-0" />
                    <span>{proofText}</span>
                  </div>
                )}
              </div>
            </motion.div>

            {customVisual && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5"
              >
                {customVisual}
              </motion.div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // HERO TYPE D: CONVERSION FOCUS (Clean high-intent hero for Contact page)
  return (
    <section className="bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white pt-36 pb-16 md:pb-20 border-b border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      <BackgroundHDImage />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.12] tracking-tight mb-6 heading-gradient-light-to-dark">
            {title}
          </h1>

          <p className="text-slate-600 dark:text-[#94A3B8] text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

