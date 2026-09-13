"use client";

import React, { useState } from "react";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { MASTER_ECOSYSTEM_VECTORS } from "@/data/ecosystem";
import { Building2, Landmark, Cpu, Mail, Building, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ContactFormModal } from "@/components/forms/ContactFormModal";

export default function EcosystemExplorer() {
  const [selectedVectorId, setSelectedVectorId] = useState(MASTER_ECOSYSTEM_VECTORS[0].id);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const selectedVector =
    MASTER_ECOSYSTEM_VECTORS.find((v) => v.id === selectedVectorId) ||
    MASTER_ECOSYSTEM_VECTORS[0];

  const iconMap: Record<string, any> = {
    Building2,
    Landmark,
    Cpu,
    Mail,
    Building,
    Users,
  };

  return (
    <section className="py-[var(--space-section-lg)] bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      {/* Royal Ambient Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#10E784]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#059669]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <SectionMarker number="05" title="The Central Differentiator" />
          <h2 className="font-display text-3xl sm:text-5xl text-slate-900 dark:text-white font-bold tracking-tight mb-4">
            Your CR Opens The Door. <br />
            <span className="text-[#059669] dark:text-[#10E784]">We Take You Further.</span>
          </h2>
          <p className="text-slate-600 dark:text-[#A39B8B] text-base leading-relaxed font-light">
            Setting up your Saudi legal entity shouldn't leave you searching for another provider every time the business needs something. We have brought the 6 core commercial capabilities together into one unified ecosystem.
          </p>
        </div>

        {/* Ecosystem Vector Selector Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Vector Selector Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {MASTER_ECOSYSTEM_VECTORS.map((vector) => {
              const Icon = iconMap[vector.iconName] || Building2;
              const isSelected = vector.id === selectedVectorId;

              return (
                <button
                  key={vector.id}
                  onClick={() => setSelectedVectorId(vector.id)}
                  className={`p-6 text-left border rounded-2xl transition-all duration-300 group backdrop-blur-xl ${
                    isSelected
                      ? "bg-[#10E784]/15 border-[#10E784] shadow-xl text-slate-900 dark:text-white scale-[1.02]"
                      : "bg-white dark:bg-white/[0.03] border-slate-200 dark:border-white/10 hover:border-[#10E784]/50 text-slate-600 dark:text-[#A39B8B]"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    isSelected ? "bg-[#10E784] text-[#0A0D0C]" : "bg-slate-100 dark:bg-white/[0.05] text-[#059669] dark:text-[#10E784] group-hover:bg-[#10E784]/20"
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className={`text-xs font-mono uppercase tracking-wider font-bold mb-1 ${
                    isSelected ? "text-[#059669] dark:text-[#10E784]" : "text-slate-500 dark:text-[#A39B8B]"
                  }`}>
                    {vector.category}
                  </div>
                  <h3 className={`font-display text-lg font-bold transition-colors ${
                    isSelected ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-[#E2D9C8] group-hover:text-slate-900 dark:group-hover:text-white"
                  }`}>
                    {vector.name}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Selected Vector Capability Display */}
          <div className="lg:col-span-6 bg-white dark:bg-[#101312] text-slate-900 dark:text-white border border-slate-200 dark:border-white/15 p-8 sm:p-10 rounded-3xl shadow-2xl flex flex-col justify-between backdrop-blur-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#10E784]/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#059669] dark:text-[#10E784] bg-[#10E784]/15 px-3 py-1 border border-[#10E784]/30 rounded-full font-bold">
                  {selectedVector.category} VECTOR
                </span>
                {selectedVector.partnerHighlight && (
                  <span className="text-xs font-mono text-slate-500 dark:text-[#A39B8B]">
                    {selectedVector.partnerHighlight}
                  </span>
                )}
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-slate-900 dark:text-white font-bold mb-4">
                {selectedVector.headline}
              </h3>

              <p className="text-slate-600 dark:text-[#A39B8B] text-sm leading-relaxed mb-8 font-light">
                {selectedVector.description}
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#059669] dark:text-[#10E784] font-semibold">
                  Ecosystem Capabilities Included:
                </h4>
                {selectedVector.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs text-slate-700 dark:text-[#E2D9C8] p-3 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl">
                    <span className="w-2 h-2 rounded-full bg-[#10E784] shadow-[0_0_8px_rgba(16,231,132,0.6)]" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between relative z-10">
              <Button variant="primary" size="md" onClick={() => setContactModalOpen(true)}>
                ENTER THE ECOSYSTEM
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ContactFormModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </section>
  );
}
