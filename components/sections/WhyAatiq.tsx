"use client";

import React, { useState } from "react";
import { Check, X, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ContactFormModal } from "@/components/forms/ContactFormModal";

export default function WhyAatiq() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white py-[var(--space-section-lg)] border-b border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-[#10E784]/10 blur-[160px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#059669]/10 blur-[160px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-2xl sm:text-4xl text-slate-900 dark:text-white font-bold tracking-tight mb-4">
            One Kingdom. <span className="green-gradient-text">One Unified Ecosystem.</span>
          </h2>
          <p className="text-slate-600 dark:text-[#D8CCB8] text-base leading-relaxed font-light">
            Compare traditional company-formation agents with Vision Saudi's integrated Saudi advisory, technology, property, and market-entry platform.
          </p>
        </div>

        {/* Comparison Table Glass Box */}
        <div className="bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-[#B9B3A8]">
                <th className="py-4 px-6 font-bold w-1/3 text-slate-900 dark:text-white">Feature / Capability</th>
                <th className="py-4 px-6 font-bold w-1/3 text-slate-500 dark:text-[#B9B3A8]">Traditional Setup Agencies</th>
                <th className="py-4 px-6 font-bold w-1/3 text-[#059669] dark:text-[#10E784] bg-[#10E784]/15 border-t border-x border-[#10E784]/30 rounded-t-2xl">
                  Vision Saudi Platform
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-white/5 text-sm">
              {[
                {
                  feature: "Commercial Formation & CR",
                  traditional: "Single transaction deliverable",
                  aatiq: "Stage 01 of integrated 5-Stage Journey",
                },
                {
                  feature: "Post-Establishment Operations",
                  traditional: "Left to client / third party agents",
                  aatiq: "Full GRO, compliance, Qiwa & ZATCA activation",
                },
                {
                  feature: "Enterprise Technology & Software",
                  traditional: "None / non-existent",
                  aatiq: "SLNEE enterprise ERP, SamMail corporate suite",
                },
                {
                  feature: "Real Estate & Commercial Premises",
                  traditional: "Basic address lease referral",
                  aatiq: "Strategic office sourcing & property investment advisory",
                },
                {
                  feature: "Saudi Premium Residency Guidance",
                  traditional: "Not offered",
                  aatiq: "Investor, Talent & Real Estate pathway evaluation",
                },
                {
                  feature: "Ecosystem Network & Partners",
                  traditional: "Isolated operational entity",
                  aatiq: "Access to Service & Success Partner commercial networks",
                },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 text-slate-900 dark:text-white font-bold">{row.feature}</td>
                  <td className="py-4 px-6 text-slate-500 dark:text-[#B9B3A8] font-light">
                    <div className="flex items-center gap-2">
                      <X className="h-4 w-4 text-red-500 dark:text-red-400 shrink-0" />
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-900 dark:text-white font-medium bg-[#10E784]/10 border-x border-[#10E784]/20">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#059669] dark:text-[#10E784] shrink-0" />
                      <span className="font-semibold text-[#059669] dark:text-[#10E784]">{row.aatiq}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => setContactModalOpen(true)}
          >
            Start Your Saudi Journey With Vision Saudi
          </Button>
        </div>
      </div>

      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        defaultIntent="advisory"
      />
    </section>
  );
}

