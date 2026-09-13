"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { Button } from "@/components/ui/Button";
import { ContactFormModal } from "@/components/forms/ContactFormModal";
import { Globe, Users, Network, ArrowRight } from "lucide-react";

export default function SuccessPartnersSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-[var(--space-section-lg)] bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      {/* Background Royal Ambient Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#10E784]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <SectionMarker number="09" title="Partnership Ecosystem" />
          <h2 className="font-display text-3xl sm:text-5xl text-slate-900 dark:text-white font-bold tracking-tight mb-4">
            Don't Just Enter The Market. <br />
            <span className="text-[#059669] dark:text-[#10E784]">Become Part Of It.</span>
          </h2>
          <p className="text-slate-600 dark:text-[#A39B8B] text-base leading-relaxed font-light">
            We maintain two distinct collaboration streams: Service Partners for international specialist providers, and Success Partners for qualifying ecosystem member businesses in Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Service Partners Card */}
          <div className="bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#10E784] hover:-translate-y-1 transition-all duration-300 group shadow-2xl">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#059669] dark:text-[#10E784] bg-[#10E784]/15 px-3.5 py-1 border border-[#10E784]/30 mb-6 rounded-full font-bold">
                <Globe className="h-3.5 w-3.5 text-[#059669] dark:text-[#10E784]" />
                <span>FOR INTERNATIONAL SPECIALISTS</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-slate-900 dark:text-white font-bold mb-4 group-hover:text-[#059669] dark:group-hover:text-[#10E784] transition-colors">
                Service Partner Programme
              </h3>

              <p className="text-slate-600 dark:text-[#A39B8B] text-sm leading-relaxed mb-6 font-light">
                Connect your international expertise, technology solutions, or specialist advisory with qualified commercial opportunities in Saudi Arabia within appropriate regulatory frameworks.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-700 dark:text-[#E2D9C8] border-t border-slate-200 dark:border-white/10 pt-6 mb-8 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#10E784] rounded-full" />
                  Local capability & project execution support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#10E784] rounded-full" />
                  Regulatory compliance & subcontracting alignment
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#10E784] rounded-full" />
                  Access to established Saudi enterprise network
                </li>
              </ul>
            </div>

            <Link
              href="/partners"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#059669] dark:text-[#10E784] hover:text-emerald-700 dark:hover:text-white transition-colors"
            >
              <span>Explore Service Partner Criteria</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Success Partners Card */}
          <div className="bg-white dark:bg-[#101312] text-slate-900 dark:text-white border border-slate-200 dark:border-white/15 p-8 sm:p-10 rounded-3xl shadow-2xl flex flex-col justify-between backdrop-blur-2xl hover:border-[#10E784] transition-all duration-300">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#059669] dark:text-[#10E784] bg-[#10E784]/15 px-3.5 py-1 border border-[#10E784]/30 mb-6 rounded-full font-bold">
                <Network className="h-3.5 w-3.5 text-[#059669] dark:text-[#10E784]" />
                <span>FOR ECOSYSTEM MEMBER BUSINESSES</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-slate-900 dark:text-white font-bold mb-4">
                Success Partner Network
              </h3>

              <p className="text-slate-600 dark:text-[#A39B8B] text-sm leading-relaxed mb-6 font-light">
                For eligible companies operating inside the AATIQ ecosystem. Establish here, operate here, partner here, and grow together across shared commercial channels.
              </p>

              <div className="p-4 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl text-xs font-display font-bold text-[#059669] dark:text-[#10E784] mb-8 tracking-wider">
                ESTABLISH HERE. OPERATE HERE. PARTNER HERE. GROW HERE.
              </div>
            </div>

            <Button variant="primary" size="md" onClick={() => setModalOpen(true)}>
              JOIN SUCCESS PARTNER NETWORK
            </Button>
          </div>
        </div>
      </div>

      <ContactFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
