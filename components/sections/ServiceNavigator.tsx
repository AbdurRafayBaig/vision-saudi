"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MASTER_SERVICES } from "@/data/services";

export default function ServiceNavigator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = MASTER_SERVICES[activeIndex];

  return (
    <section id="services" className="bg-[#0A0D0C] text-white relative overflow-hidden py-[var(--space-section-lg)] border-b border-white/10">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 start-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#10E784]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.12] tracking-tight">
            <span className="heading-gradient-light-to-dark block">Five directions into</span>
            <span className="green-gradient-text block font-sans">the Saudi market.</span>
          </h2>
        </div>

        {/* Service Navigator — Desktop */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
          {/* Left: Service List */}
          <div className="col-span-5 flex flex-col gap-2">
            {MASTER_SERVICES.map((service, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={service.number}
                  onClick={() => setActiveIndex(idx)}
                  aria-pressed={isActive}
                  // Hover used to select, which changed the panel by accident and
                  // had no equivalent on touch. A click selects.
                  className={`text-start p-6 rounded-2xl transition-all duration-300 group ${
                    isActive
                      ? "bg-white/[0.05] border-s-4 border-[#10E784] shadow-xl backdrop-blur-md"
                      : "bg-transparent border-s-4 border-transparent hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`text-sm font-mono font-bold tabular-nums transition-colors duration-300 mt-1 ${
                      isActive ? "text-[#10E784]" : "text-[#B9B3A8]"
                    }`}>
                      {service.number}
                    </span>
                    <div>
                      <h3 className={`font-display text-2xl font-bold transition-colors duration-300 mb-1 ${
                        isActive ? "text-white" : "text-[#B9B3A8] group-hover:text-[#10E784]"
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-xs transition-all duration-300 font-light ${
                        isActive ? "text-[#D8CCB8]" : "text-[#7A7A72]"
                      }`}>
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Image + Description */}
          <div className="col-span-7">
            <div
                key={activeService.number}
                className="anim-scale-in bg-white/[0.03] p-8 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-8 border border-white/10 shadow-lg">
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    className="object-cover transition-transform duration-700"
                    sizes="60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0C]/80 via-transparent to-transparent" />
                </div>

                {/* Description */}
                <p className="text-[#D8CCB8] text-base leading-relaxed mb-6 font-light">
                  {activeService.summary}
                </p>

                <Link
                  href={`/services/${activeService.slug}`}
                  className="inline-flex min-h-[44px] items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#10E784] hover:gap-3 transition-all duration-300"
                >
                  <span>Explore {activeService.title}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
          </div>
        </div>

        {/* Service Navigator — Mobile (Stacked) */}
        <div className="lg:hidden flex flex-col gap-6">
          {MASTER_SERVICES.map((service) => (
            <div key={service.number} className="bg-white/[0.03] p-6 rounded-3xl border border-white/10 shadow-md hover:border-[#10E784]/50 transition-all duration-300">
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
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#B9B3A8] leading-relaxed mb-4 font-light">
                    {service.summary}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 py-3 -my-3 text-[#10E784] text-xs font-bold uppercase"
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

