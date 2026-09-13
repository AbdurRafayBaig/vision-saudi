"use client";

import React from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";

export default function PrivacyPage() {
  return (
    <div className="bg-[#0A0D0C] text-white overflow-x-hidden min-h-screen">
      {/* Hero Header */}
      <PageHero
        type="type-d"
        category="GOVERNANCE & PRIVACY"
        title="Privacy Policy"
        subtitle="How Vision Saudi protects confidential client disclosures and personal data in accordance with KSA laws."
      />

      {/* Content */}
      <section className="py-[var(--space-section-lg)] bg-[#0A0D0C]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-[#A39B8B]">
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 space-y-8 font-light text-sm leading-relaxed shadow-2xl">
            <div>
              <h2 className="font-display text-2xl text-white font-bold mb-3">
                1. Data Protection Commitment
              </h2>
              <p>
                Vision Saudi ("Vision Saudi", "we", "us", or "our") respects your privacy and is committed to protecting confidential personal and commercial data submitted through our digital platform in accordance with the Kingdom of Saudi Arabia Personal Data Protection Law (PDPL).
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white font-bold mb-3">
                2. Information Collection & Usage
              </h2>
              <p>
                We collect information provided directly by clients when requesting strategic advisory, business setup evaluation, real estate briefs, Premium Residency assessments, or partnership applications. Collected data is strictly utilized to evaluate commercial requirements, facilitate ministry filings, and activate ecosystem services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white font-bold mb-3">
                3. Regulatory Disclaimers & Ministry Policy
              </h2>
              <p>
                Vision Saudi provides corporate advisory, ecosystem integration, and post-establishment facilitation. Official Ministry of Investment (MISA) licenses, Commercial Registrations (CR), and regulatory permits remain subject to official Kingdom of Saudi Arabia ministry policies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
