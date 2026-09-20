import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { TrendingUp, ShieldCheck, Landmark } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";

export default function TheOpportunity() {
  return (
    <section id="opportunity" className="bg-[#0A0D0C] text-white py-[var(--space-section-lg)] relative overflow-hidden border-b border-white/10 transition-colors duration-400">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 start-0 w-[500px] h-[500px] rounded-full bg-[#2D7A5F]/8 blur-[140px] -translate-y-1/2" />
        <div className="absolute top-1/2 end-0 w-[500px] h-[500px] rounded-full bg-[#10E784]/5 blur-[150px] -translate-y-1/2" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Narrative */}
          <Reveal y={20} className="lg:col-span-6">
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight mb-6 heading-gradient-light-to-dark">
              A market opening at <br />
              <span className="green-gradient-text">extraordinary speed.</span>
            </h2>

            <p className="text-[#94A3B8] text-lg leading-relaxed font-light mb-6">
              Saudi Arabia is transforming. Vision 2030 has opened the Kingdom to international investment, new industries, and ambitious operators at a pace the region has never seen before.
            </p>

            <p className="text-[#94A3B8] text-base leading-relaxed font-light mb-8">
              Vision Saudi helps enterprise leaders, investors, and ambitious operators build their position inside it — connecting MISA market entry through operations, real estate, technology, and ecosystem integration.
            </p>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/[0.03] border border-transparent border-s-4 border-s-[#10E784] rounded-2xl hover-green-box">
                <div className="flex items-center gap-2 text-[#10E784] font-mono text-xs font-bold mb-1">
                  <TrendingUp className="h-4 w-4" />
                  <span>VISION 2030 PIPELINE</span>
                </div>
                <CountUp value="$1.3 Trillion" className="block text-3xl font-display font-bold text-white" />
                <div className="text-xs text-[#94A3B8] mt-1 font-light">Giga-Projects & Development</div>
              </div>

              <div className="p-6 bg-white/[0.03] border border-transparent border-s-4 border-s-[#10E784] rounded-2xl hover-green-box">
                <div className="flex items-center gap-2 text-[#10E784] font-mono text-xs font-bold mb-1">
                  <Landmark className="h-4 w-4" />
                  <span>REGULATORY MANDATE</span>
                </div>
                <div className="text-3xl font-display font-bold text-white">RHQ Directive</div>
                <div className="text-xs text-[#94A3B8] mt-1 font-light">Regional HQ Program Compliance</div>
              </div>
            </div>
          </Reveal>

          {/* Right Image Showcase */}
          <Reveal className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-2xl group hover:border-[#10E784] hover:shadow-[#10E784]/20 transition-all duration-500">
              <Image
                src="/images/businessSetup.webp"
                alt="Modern Saudi executive business architecture"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0C] via-[#0A0D0C]/30 to-transparent" />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-6 start-6 end-6 p-6 bg-[#0A0D0C]/85 border border-white/10 backdrop-blur-xl rounded-2xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-[#10E784]" />
                    <div>
                      <div className="text-xs font-bold text-white">Kingdom-Wide Ecosystem Access</div>
                      <div className="text-xs text-[#94A3B8]">Riyadh Olaya Headquarters · MISA Licensed</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#10E784] font-bold">KSA 2030</span>
                </div>
              </div>
            </div>
          </Reveal>


        </div>
      </div>
    </section>
  );
}

