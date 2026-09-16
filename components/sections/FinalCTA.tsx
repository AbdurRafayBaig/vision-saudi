"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ContactFormModal } from "@/components/forms/ContactFormModal";
import { ShieldCheck, Calendar, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-24 sm:py-32 bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white relative overflow-hidden border-t border-slate-200 dark:border-white/10 transition-colors duration-300">
      {/* Ambient Radial Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#10E784]/10 blur-[160px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto p-10 sm:p-16 bg-white dark:bg-[#101312] border border-slate-200 dark:border-white/15 rounded-3xl shadow-2xl backdrop-blur-2xl relative group hover:border-[#10E784] transition-all duration-500 text-center overflow-hidden"
        >
          {/* Subtle inner neon green shimmer line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#10E784] to-transparent opacity-80" />

          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-8 leading-[1.12]">
            <span className="heading-gradient-light-to-dark block">Ready to build your position</span>
            <span className="green-gradient-text block font-sans">in the Kingdom?</span>
          </h2>

          <p className="text-slate-600 dark:text-[#A39B8B] text-lg font-light mb-10 leading-relaxed max-w-2xl mx-auto">
            Establish, invest, operate, and scale in Saudi Arabia with an experienced partner backed by 16+ years of operating track record and enterprise technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => setModalOpen(true)}
              className="font-bold shadow-md shadow-[#10E784]/20"
            >
              Make the First Move
            </Button>
            <Button
              variant="ivory"
              size="lg"
              onClick={() => setModalOpen(true)}
              className="font-bold"
            >
              Schedule Senior Strategy Call
            </Button>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-600 dark:text-[#A39B8B]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#10E784]" />
              <span>100% Confidential Strategy Session</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#10E784]" />
              <span>Direct Access to Riyadh Advisory Team</span>
            </div>
          </div>
        </motion.div>
      </div>

      <ContactFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}


