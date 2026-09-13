"use client";

import React from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";

export default function TermsPage() {
  return (
    <div className="bg-[#0A0D0C] text-white overflow-x-hidden min-h-screen">
      {/* Hero Header */}
      <PageHero
        type="type-d"
        category="GOVERNANCE & TERMS"
        title="Terms & Conditions"
        subtitle="Terms governing the use of the Vision Saudi platform and corporate advisory engagements."
      />

      {/* Content */}
      <section className="py-[var(--space-section-lg)] bg-[#0A0D0C]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-[#A39B8B]">
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 space-y-8 font-light text-sm leading-relaxed shadow-2xl">
            <div>
              <h2 className="font-display text-2xl text-white font-bold mb-3">
                1. Scope of Engagement
              </h2>
              <p>
                Vision Saudi provides business establishment facilitation, market entry strategy, technology ecosystem integration, real estate property advisory, and Premium Residency guidance across the Kingdom of Saudi Arabia.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white font-bold mb-3">
                2. Strategic Partner Attribution Framework
              </h2>
              <p>
                Selected enterprise technology implementations and project track records referenced across the platform are delivered through strategic technology and delivery partner SLNEE and are explicitly attributed as such.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white font-bold mb-3">
                3. Advisory & Investment Disclaimers
              </h2>
              <p>
                Real estate yield projections and investment scenario modeling are provided for analytical advisory purposes only and do not constitute guaranteed financial returns. Official MISA licenses and Commercial Registrations remain subject to official Saudi government approval.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
