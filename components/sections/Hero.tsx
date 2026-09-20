"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";
import { ContactFormModal } from "@/components/forms/ContactFormModal";

// Business hubs only. Makkah and Madinah are deliberately excluded: non-Muslims cannot
// enter Makkah, so they undermine credibility with the foreign investors this site targets.
const CITIES = ["Saudi Arabia", "Riyadh", "Jeddah", "NEOM", "Eastern Province"];

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [cityIndex, setCityIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCityIndex((prev) => (prev + 1) % CITIES.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between bg-[#0A0D0C] overflow-hidden pt-28 pb-12 md:pb-16 text-white">
      {/* ── Ambient Radial Glows & Luxury Backdrop Layers ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep Emerald Glow Top Left */}
        <div className="absolute -top-[20%] -start-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-[#2D7A5F]/10 blur-[130px]" />

        {/* Soft Sand Glow Bottom Right */}
        <div className="absolute -bottom-[20%] -end-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-[#10E784]/5 blur-[140px]" />

        {/* High-Resolution Background Photography with Gradient Blending */}
        <div className="absolute inset-0 opacity-95 z-0">
          <Image
            src="/images/aboutHeritagePage.webp"
            alt="Diriyah At-Turaif Heritage & Riyadh Skyline Sunset"
            fill
            priority
            className="object-cover object-center animate-hero-zoom"
            sizes="100vw"
          />
        </div>

        {/* Subtle Bottom Vignette Gradient for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D0C]/40 via-transparent to-[#0A0D0C] z-0" />

        {/* The portrait crop puts body copy over the brightest part of the photo, so
            small screens get an extra flat scrim that desktop doesn't need. */}
        <div className="absolute inset-0 bg-[#0A0D0C]/45 sm:bg-transparent z-0" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 w-full my-auto py-8">
        <div className="max-w-3xl">
          
          {/* Left Narrative Column */}
          <div>
            {/* Editorial Headline: "Vision" static + dynamic city */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 text-white flex flex-wrap items-baseline gap-x-3 sm:gap-x-4">
              <span className="shrink-0">Vision</span>
              <span className="inline-flex items-baseline relative overflow-hidden h-[1.25em] min-w-max pb-1">
                {/* key remounts the span, which replays the CSS slide-up — no animation library needed */}
                <span key={CITIES[cityIndex]} className="green-gradient-text inline-block whitespace-nowrap anim-slide-up-in">
                  {CITIES[cityIndex]}
                </span>
              </span>
            </h1>

            {/* Supporting Statement */}
            <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-xl mb-10 font-light">
              From MISA licensing and corporate establishment to digital platforms and commercial real estate — Vision Saudi connects global enterprise to the Saudi Arabia ecosystem.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                showArrow
                onClick={() => setModalOpen(true)}
              >
                Make the First Move
              </Button>
              <Button
                variant="ivory"
                size="lg"
                href="#opportunity"
              >
                Explore Platform
              </Button>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Bar Footer */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 w-full pt-4">
        <Reveal delay={1} immediate className="flex items-center justify-between border-t border-white/10 pt-4">
          <a
            href="#opportunity"
            className="inline-flex items-center gap-2 py-3 -my-3 text-[#B9B3A8] text-xs tracking-wider uppercase hover:text-white transition-colors"
          >
            <span>Scroll to explore platform</span>
            <ArrowDown className="h-3.5 w-3.5 text-[#10E784] shrink-0" />
          </a>

          <div className="hidden sm:flex items-center gap-6 text-xs font-mono text-[#B9B3A8]">
            <span>RIYADH · JEDDAH · NEOM</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#10E784]" />
            <span>ESTABLISH · OPERATE · SCALE</span>
          </div>
        </Reveal>
      </div>

      <ContactFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
