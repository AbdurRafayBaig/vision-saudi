"use client";

import React from "react";
import Link from "next/link";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { Button } from "@/components/ui/Button";
import { MASTER_SERVICES } from "@/data/services";
import { ArrowUpRight, Building2, Building, UserCheck, Settings } from "lucide-react";

export default function FourDirections() {
  const iconMap: Record<string, any> = {
    "business-setup": Building2,
    "corporate-services": Settings,
    "real-estate": Building,
    "premium-residency": UserCheck,
  };

  return (
    <section id="directions" className="py-[var(--space-section-lg)] bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white relative border-t border-slate-200 dark:border-white/10 overflow-hidden transition-colors duration-300">
      {/* Background Royal Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#10E784]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <SectionMarker number="02" title="Four Core Directions" />
            <h2 className="font-display text-3xl sm:text-5xl text-slate-900 dark:text-white font-bold tracking-tight">
              One Platform. Four Directions.
            </h2>
          </div>
          <p className="text-slate-600 dark:text-[#A39B8B] text-sm max-w-md font-light leading-relaxed">
            ESTABLISH · INVEST · RESIDE · GROW. Integrated services built around your commercial timeline in Saudi Arabia.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MASTER_SERVICES.slice(0, 4).map((service) => {
            const Icon = iconMap[service.id] || Building2;

            return (
              <div
                key={service.id}
                className="bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#10E784] hover:shadow-[0_0_25px_rgba(16,231,132,0.2)] hover:-translate-y-1 transition-all duration-300 group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold text-[#059669] dark:text-[#10E784] uppercase tracking-wider font-mono">
                      STAGE / {service.journeyStage}
                    </span>
                    <span className="text-2xl font-display text-slate-300 dark:text-white/30 font-bold group-hover:text-[#059669] dark:group-hover:text-[#10E784] transition-colors">
                      {service.number}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-[#10E784]/15 border border-[#10E784]/30 flex items-center justify-center text-[#059669] dark:text-[#10E784] mb-6 group-hover:bg-[#10E784] group-hover:text-[#0A0D0C] transition-all duration-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="font-display text-2xl text-slate-900 dark:text-white font-bold mb-3 group-hover:text-[#059669] dark:group-hover:text-[#10E784] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-[#A39B8B] text-sm leading-relaxed mb-6 font-light">
                    {service.summary}
                  </p>

                  {/* Capabilities Bullet Summary */}
                  <ul className="space-y-2 mb-8 border-t border-slate-200 dark:border-white/10 pt-6">
                    {service.capabilities.slice(0, 3).map((cap, i) => (
                      <li key={i} className="text-xs text-slate-700 dark:text-[#E2D9C8] flex items-center gap-2 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10E784]" />
                        {cap.title}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-wider text-[#059669] dark:text-[#10E784] group-hover:text-emerald-700 dark:group-hover:text-white transition-colors"
                >
                  <span>Explore {service.title}</span>
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
