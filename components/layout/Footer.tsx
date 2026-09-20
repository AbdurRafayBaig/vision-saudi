"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Building2 } from "lucide-react";
import { VisionSaudiLogo } from "@/components/ui/VisionSaudiLogo";

export default function Footer() {
  return (
    <footer className="bg-[#0A0D0C] text-[#B9B3A8] border-t border-white/10 pt-20 pb-12 relative overflow-hidden transition-colors duration-300">
      {/* Background Neon Ambient Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#10E784]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <VisionSaudiLogo variant="white" size="lg" />
              </div>

              <p className="text-sm text-[#B9B3A8] leading-relaxed max-w-md mb-8 font-light">
                Premium Saudi Arabia market-entry, investment advisory, commercial real estate, and corporate ecosystem platform. Connecting global enterprises and investors to Vision 2030 opportunities.
              </p>

              {/* SLNEE Attribution Card */}
              <div className="p-5 bg-[#101312] border border-white/10 rounded-2xl max-w-md backdrop-blur-xl shadow-sm">
                <div className="flex items-center justify-between text-white font-medium text-xs mb-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#10E784]" />
                    <span className="font-mono text-white font-bold">ATTRIBUTED TRACK RECORD</span>
                  </div>
                  <span className="text-xs font-mono text-[#10E784] font-bold">16+ YEARS KSA</span>
                </div>
                <p className="text-xs text-[#A39B8B] leading-relaxed font-light">
                  Historical enterprise project implementations attributed directly through strategic technology partner SLNEE.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 text-xs tracking-widest text-[#10E784] uppercase flex items-center gap-2 font-bold">
              <Building2 className="h-4 w-4 text-[#10E784]" />
              <span>OLAYA DISTRICT · RIYADH · JEDDAH · KSA</span>
            </div>
          </div>

          {/* Column 1: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-6">
              Core Pillars
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/business-setup" className="inline-block py-3 -my-3 hover:text-[#10E784] transition-colors">
                  Business Setup & Market Entry
                </Link>
              </li>
              <li>
                <Link href="/services/corporate-services" className="inline-block py-3 -my-3 hover:text-[#10E784] transition-colors">
                  Corporate Services & GRO
                </Link>
              </li>
              <li>
                <Link href="/services/technology-infrastructure" className="inline-block py-3 -my-3 hover:text-[#10E784] transition-colors">
                  Technology & Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services/real-estate" className="inline-block py-3 -my-3 hover:text-[#10E784] transition-colors">
                  Real Estate & Property
                </Link>
              </li>
              <li>
                <Link href="/services/premium-residency" className="inline-block py-3 -my-3 hover:text-[#10E784] transition-colors">
                  Saudi Premium Residency
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-6">
              Platform & Track Record
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="inline-block py-3 -my-3 hover:text-[#10E784] transition-colors">
                  About Vision Saudi
                </Link>
              </li>
              <li>
                <Link href="/experience" className="inline-block py-3 -my-3 hover:text-[#10E784] transition-colors">
                  Track Record & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/insights" className="inline-block py-3 -my-3 hover:text-[#10E784] transition-colors">
                  Market Insights & Research
                </Link>
              </li>
              <li>
                <Link href="/partners" className="inline-block py-3 -my-3 hover:text-[#10E784] transition-colors">
                  Ecosystem Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="inline-block py-3 -my-3 hover:text-[#10E784] transition-colors">
                  Contact Strategists
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Governance */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-6">
              Governance & Compliance
            </h4>
            <ul className="space-y-3 text-sm mb-6">
              <li>
                <Link href="/privacy" className="inline-block py-3 -my-3 hover:text-[#10E784] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="inline-block py-3 -my-3 hover:text-[#10E784] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>

            <div className="text-xs text-[#A39B8B] leading-relaxed p-4 bg-white/[0.03] border border-white/10 rounded-2xl font-mono">
              Commercial Advisory & Ecosystem Platform · Olaya Street, Riyadh, KSA
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-[#B9B3A8]/70">
          <p className="max-w-3xl leading-relaxed font-light">
            Vision Saudi provides market entry advisory, corporate facilitation, and ecosystem integration in Saudi Arabia. MISA foreign investment licenses, Commercial Registrations (CR), and regulatory clearances are governed under Kingdom of Saudi Arabia ministry frameworks. Historical enterprise projects attributed directly to strategic partner SLNEE.
          </p>
          <div className="shrink-0 font-mono text-[#B9B3A8]">
            © {new Date().getFullYear()} Vision Saudi. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}


