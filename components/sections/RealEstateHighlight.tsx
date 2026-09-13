"use client";

import React from "react";
import Link from "next/link";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { MASTER_REAL_ESTATE_CATEGORIES } from "@/data/realestate";
import { Building, MapPin, ArrowUpRight } from "lucide-react";

export default function RealEstateHighlight() {
  return (
    <section className="py-[var(--space-section-lg)] bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      {/* Background Royal Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#10E784]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <SectionMarker number="08" title="Real Estate & Property" />
            <h2 className="font-display text-3xl sm:text-5xl text-slate-900 dark:text-white font-bold tracking-tight mb-4">
              The Kingdom Is Being Built. <br />
              <span className="text-[#059669] dark:text-[#10E784]">Be Part Of What Comes Next.</span>
            </h2>
            <p className="text-slate-600 dark:text-[#A39B8B] text-base max-w-2xl font-light leading-relaxed">
              From Grade-A commercial office space in Riyadh and Jeddah to high-yield residential investment portfolios and holy city frameworks in Makkah and Madinah.
            </p>
          </div>
          <div className="p-5 bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 max-w-xs shrink-0 text-xs rounded-2xl shadow-sm">
            <span className="text-[#059669] dark:text-[#10E784] font-mono uppercase tracking-wider font-bold block mb-1">
              Regulatory Notice
            </span>
            <span className="text-slate-600 dark:text-[#A39B8B] font-light">
              Data-driven property analysis & strategic advisory in accordance with REGA frameworks.
            </span>
          </div>
        </div>

        {/* 3 Real Estate Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {MASTER_REAL_ESTATE_CATEGORIES.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#10E784] hover:-translate-y-1 transition-all duration-300 group shadow-xl"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#059669] dark:text-[#10E784] font-bold uppercase tracking-wider mb-4">
                  <Building className="h-4 w-4" />
                  <span>{item.investmentModel}</span>
                </div>

                <h3 className="font-display text-2xl text-slate-900 dark:text-white font-bold mb-3 group-hover:text-[#059669] dark:group-hover:text-[#10E784] transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 dark:text-[#A39B8B] text-sm leading-relaxed mb-6 font-light">
                  {item.description}
                </p>

                <div className="space-y-2 mb-6 bg-slate-50 dark:bg-white/[0.03] p-4 border border-slate-200 dark:border-white/10 rounded-2xl">
                  <div className="text-xs uppercase font-mono text-[#059669] dark:text-[#10E784] font-bold mb-2">
                    Key Locations:
                  </div>
                  {item.locations.map((loc, i) => (
                    <div key={i} className="text-xs text-slate-700 dark:text-[#E2D9C8] flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-[#059669] dark:text-[#10E784] shrink-0" />
                      <span className="font-medium">{loc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/services/real-estate"
                className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-wider text-[#059669] dark:text-[#10E784] group-hover:text-emerald-700 dark:group-hover:text-white transition-colors"
              >
                <span>View Opportunity Brief</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
