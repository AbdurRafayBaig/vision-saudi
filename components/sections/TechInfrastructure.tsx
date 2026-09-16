"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Cpu, Mail, Server, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ContactFormModal } from "@/components/forms/ContactFormModal";

export default function TechInfrastructure() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white py-[var(--space-section-lg)] border-b border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-[#10E784]/10 blur-[160px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#059669]/10 blur-[160px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Technology Overview */}
          <div className="lg:col-span-6">
            <h2 className="font-display text-2xl sm:text-4xl text-slate-900 dark:text-white font-bold tracking-tight mb-6">
              Technology Behind Business. <br />
              <span className="green-gradient-text">Infrastructure Built For KSA.</span>
            </h2>
            <p className="text-slate-600 dark:text-[#D8CCB8] text-base leading-relaxed mb-8 font-light">
              Once established, your Saudi operation requires digital systems tailored to local regulatory standards — including ZATCA Phase-2 e-invoicing, Qiwa HR compliance, and secure localized corporate email.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { title: "Enterprise ERP & Localized Accounting", desc: "ZATCA e-invoicing, VAT, and WPS payroll integration." },
                { title: "SamMail Corporate Suite", desc: "Secure corporate communication with in-Kingdom data sovereignty." },
                { title: "AI Workflows & Document Automation", desc: "Automated compliance auditing and digital contract extraction." },
              ].map((item, idx) => (
                <div key={idx} className="p-5 bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl flex items-start gap-4 shadow-md hover:border-[#10E784] transition-all duration-300">
                  <CheckCircle2 className="h-5 w-5 text-[#059669] dark:text-[#10E784] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-[#B9B3A8] font-light mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                showArrow
                href="/services/technology-infrastructure"
              >
                Explore Technology Solutions
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Tech Stack Diagram Box */}
          <div className="lg:col-span-6 bg-white dark:bg-gradient-to-br dark:from-[#101312] dark:to-[#0A0D0C] border border-slate-200 dark:border-[#10E784]/30 p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[#10E784]/10 blur-[100px] pointer-events-none" />

            <div className="text-xs font-mono uppercase tracking-wider text-[#059669] dark:text-[#10E784] mb-4 pb-2 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
              <span>POWERED BY SLNEE & SAMMAIL</span>
              <span className="w-2 h-2 rounded-full bg-[#10E784] animate-pulse" />
            </div>

            <h3 className="font-display text-2xl text-slate-900 dark:text-white font-bold mb-8">
              Unified Saudi Tech Architecture
            </h3>

            <div className="space-y-4">
              <div className="p-5 bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-between hover:border-[#10E784] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#10E784]/15 border border-[#10E784]/30 flex items-center justify-center text-[#059669] dark:text-[#10E784]">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">Enterprise ERP & Financials</div>
                    <div className="text-xs text-slate-500 dark:text-[#B9B3A8] font-light">ZATCA & WPS Compliant</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#059669] dark:text-[#10E784] font-bold">
                  ACTIVE
                </span>
              </div>

              <div className="p-5 bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-between hover:border-[#10E784] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#10E784]/15 border border-[#10E784]/30 flex items-center justify-center text-[#059669] dark:text-[#10E784]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">SamMail Corporate Suite</div>
                    <div className="text-xs text-slate-500 dark:text-[#B9B3A8] font-light">Saudi Cloud Sovereign Hosting</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#059669] dark:text-[#10E784] font-bold">
                  INTEGRATED
                </span>
              </div>

              <div className="p-5 bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-between hover:border-[#10E784] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#10E784]/15 border border-[#10E784]/30 flex items-center justify-center text-[#059669] dark:text-[#10E784]">
                    <Server className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">Data Sovereignty Governance</div>
                    <div className="text-xs text-slate-500 dark:text-[#B9B3A8] font-light">In-Kingdom Infrastructure</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#059669] dark:text-[#10E784] font-bold">
                  SECURE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

