import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryButtons } from "@/components/forms/EnquiryButtons";
import { ShieldCheck, Calendar } from "lucide-react";

// A server component. Only the buttons and their modal are client code.
export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 bg-[#0A0D0C] text-white relative overflow-hidden border-t border-white/10 transition-colors duration-300">
      {/* Ambient Radial Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#10E784]/5 blur-[160px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <Reveal y={20} className="max-w-4xl mx-auto p-10 sm:p-16 bg-[#101312] border border-white/15 rounded-3xl shadow-2xl backdrop-blur-2xl relative group hover:border-[#10E784] transition-all duration-500 text-center overflow-hidden">
          {/* Subtle inner neon green shimmer line */}
          <div className="absolute top-0 start-0 end-0 h-[2px] bg-gradient-to-r from-transparent via-[#10E784] to-transparent opacity-80" />

          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-8 leading-[1.12]">
            <span className="heading-gradient-light-to-dark block">Ready to build your position</span>
            <span className="green-gradient-text block font-sans">in the Kingdom?</span>
          </h2>

          <p className="text-[#A39B8B] text-lg font-light mb-10 leading-relaxed max-w-2xl mx-auto">
            Establish, invest, operate, and scale in Saudi Arabia with an experienced partner backed by 16+ years of operating track record and enterprise technology.
          </p>

          <EnquiryButtons
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            triggers={[
              { label: "Make the First Move", variant: "primary", size: "lg", className: "font-bold shadow-md shadow-[#10E784]/20" },
              { label: "Schedule Senior Strategy Call", variant: "ivory", size: "lg", className: "font-bold" },
            ]}
          />

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-[#A39B8B]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#10E784]" />
              <span>100% Confidential Strategy Session</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#10E784]" />
              <span>Direct Access to Riyadh Advisory Team</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


