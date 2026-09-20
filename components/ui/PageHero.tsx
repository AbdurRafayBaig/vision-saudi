"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ShieldCheck } from "lucide-react";

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
  proofText?: string;
}

// Declared outside PageHero so it isn't recreated (and remounted) on every render.
function BackgroundHDImage({ imageSrc, imageAlt }: { imageSrc?: string; imageAlt: string }) {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#10E784]/10 blur-[140px]" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-[#00C86F]/8 blur-[150px]" />
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center opacity-90 animate-hero-zoom"
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D0C]/55 via-[#0A0D0C]/30 to-[#0A0D0C] transition-colors duration-300" />
      {/* Extra flat scrim on small screens, where the portrait crop pushes copy onto the brightest area. */}
      <div className="absolute inset-0 bg-[#0A0D0C]/40 sm:bg-transparent" />
    </div>
  );
}

// Eyebrow label shown above the H1 — matches the mono uppercase tag style used across the site.
function CategoryLabel({ category }: { category: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-[#10E784] text-xs font-bold tracking-wider uppercase mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      <span>{category}</span>
    </div>
  );
}

export function PageHero({
  type,
  category,
  title,
  subtitle,
  imageSrc = "/images/corporateBusinessServices.webp",
  imageAlt = "Saudi Arabia Landscape",
  customVisual,
  primaryCtaLabel,
  onPrimaryCtaClick,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  proofText,
}: PageHeroProps) {
  // HERO TYPE A: CINEMATIC (Full-bleed media backdrop with high contrast editorial text)
  if (type === "type-a") {
    return (
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex flex-col justify-end bg-[#0A0D0C] text-white overflow-hidden pt-32 pb-16 md:pb-24 transition-colors duration-300">
        <BackgroundHDImage imageSrc={imageSrc} imageAlt={imageAlt} />

        {/* Content Container */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <motion.div
            initial={{ y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <CategoryLabel category={category} />
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight mb-6 heading-gradient-light-to-dark">
              {title}
            </h1>

            <p className="text-[#94A3B8] text-lg sm:text-xl font-light leading-relaxed max-w-2xl mb-10">
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
      <section className="bg-[#0A0D0C] text-white pt-36 pb-20 md:pb-28 border-b border-white/10 overflow-hidden relative transition-colors duration-300">
        <BackgroundHDImage imageSrc={imageSrc} imageAlt={imageAlt} />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative Column */}
            <motion.div
              initial={{ x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <CategoryLabel category={category} />
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6 heading-gradient-light-to-dark">
                {title}
              </h1>

              <p className="text-[#94A3B8] text-lg sm:text-xl font-light leading-relaxed max-w-xl mb-10">
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
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0C]/90 via-transparent to-transparent" />
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
      <section className="bg-[#0A0D0C] text-white pt-36 pb-20 md:pb-24 border-b border-white/10 relative overflow-hidden transition-colors duration-300">
        <BackgroundHDImage imageSrc={imageSrc} imageAlt={imageAlt} />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={customVisual ? "lg:col-span-7" : "lg:col-span-12 max-w-4xl"}
            >
              <CategoryLabel category={category} />
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.12] tracking-tight mb-6 heading-gradient-light-to-dark">
                {title}
              </h1>

              <p className="text-[#94A3B8] text-lg sm:text-xl font-light leading-relaxed max-w-3xl mb-10">
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
                  <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.04] border border-white/10 text-xs text-[#94A3B8] rounded-xl backdrop-blur-md shadow-sm">
                    <ShieldCheck className="h-4 w-4 text-[#10E784] shrink-0" />
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
    <section className="bg-[#0A0D0C] text-white pt-36 pb-16 md:pb-20 border-b border-white/10 relative overflow-hidden transition-colors duration-300">
      <BackgroundHDImage imageSrc={imageSrc} imageAlt={imageAlt} />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <CategoryLabel category={category} />
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.12] tracking-tight mb-6 heading-gradient-light-to-dark">
            {title}
          </h1>

          <p className="text-[#94A3B8] text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

