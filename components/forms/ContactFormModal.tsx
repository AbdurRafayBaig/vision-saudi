"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/FormInput";
import {
  CheckCircle2,
  ArrowRight,
  Building2,
  ShieldCheck,
  Landmark,
  Crown,
  Cpu,
  Handshake,
  Sparkles,
  MessageSquare,
  ArrowLeft,
} from "lucide-react";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultIntent?: string;
}

export const ContactFormModal: React.FC<ContactFormModalProps> = ({
  isOpen,
  onClose,
  defaultService = "business-setup",
  defaultIntent,
}) => {
  const initialIntent = defaultIntent || defaultService;
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    serviceIntent: initialIntent,
    capitalScale: "$500K - $2M",
    timeline: "Immediate (1-3 months)",
    targetRegion: "Riyadh (Olaya / KAFD)",
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const directions = [
    {
      id: "business-setup",
      icon: Building2,
      title: "Business Setup & Entity Formation",
      desc: "MISA investment licensing, CR, Articles of Association & corporate bank account.",
    },
    {
      id: "corporate-services",
      icon: ShieldCheck,
      title: "Corporate Services & GRO",
      desc: "Saudization (Nitaqat), Qiwa, ZATCA e-invoicing, visa transfers & government relations.",
    },
    {
      id: "real-estate",
      icon: Landmark,
      title: "Real Estate Investment Advisory",
      desc: "Grade-A commercial HQ sourcing, residential portfolios & land acquisition.",
    },
    {
      id: "premium-residency",
      icon: Crown,
      title: "Saudi Premium Residency",
      desc: "Investor, Talent, Entrepreneur & Real Estate Owner pathway evaluation.",
    },
    {
      id: "technology",
      icon: Cpu,
      title: "Technology & Digital Infrastructure",
      desc: "Enterprise ERP, SamMail corporate suite, cloud hosting & AI document automation.",
    },
    {
      id: "partnership",
      icon: Handshake,
      title: "Strategic Ecosystem Partnership",
      desc: "Service Partner and Success Partner collaboration network across the Kingdom.",
    },
  ];

  const capitalOptions = ["Under $500K", "$500K - $2M", "$2M - $10M", "$10M+ Enterprise"];
  const timelineOptions = ["Immediate (1-3 months)", "Planning (3-6 months)", "Long-term (6-12 months)"];
  const regionOptions = ["Riyadh (Olaya / KAFD)", "Jeddah / Western", "Eastern Province", "All Kingdom"];

  const handleSelectDirection = (directionId: string) => {
    setFormData((prev) => ({ ...prev, serviceIntent: directionId }));
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetAndClose = () => {
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  const getStepProgressWidth = () => {
    if (step === 1) return "w-1/3";
    if (step === 2) return "w-2/3";
    return "w-full";
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={resetAndClose}
      title={isSubmitted ? "Confidential Strategy Dispatched" : "MAKE THE FIRST MOVE"}
    >
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-6 text-center flex flex-col items-center"
        >
          <div className="relative mb-6">
            <div className="w-20 h-20 bg-[#10E784]/20 border-2 border-[#10E784] rounded-full flex items-center justify-center text-[#10E784] shadow-[0_0_40px_rgba(16,231,132,0.4)] animate-pulse">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#10E784] rounded-full flex items-center justify-center text-slate-950 text-[10px] font-bold">
              KSA
            </div>
          </div>

          <h4 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mb-3">
            Strategy Brief Dispatched
          </h4>
          <p className="text-slate-600 dark:text-[#D8CCB8] text-sm max-w-lg mb-6 leading-relaxed font-light">
            Thank you, <strong className="text-slate-900 dark:text-white font-bold">{formData.name || "Partner"}</strong>. Your confidential Saudi market-entry parameters have been assigned to a Vision Saudi senior partner in Riyadh. You will receive a direct contact response within 24 hours.
          </p>

          {/* Submitted Summary Badge */}
          <div className="w-full p-4 bg-slate-50 dark:bg-white/[0.04] border border-[#10E784]/30 rounded-2xl mb-8 text-left space-y-2 font-mono text-xs text-slate-700 dark:text-[#D8CCB8]">
            <div className="flex justify-between border-b border-slate-200 dark:border-white/10 pb-2">
              <span className="text-slate-400 dark:text-[#B9B3A8]">OBJECTIVE:</span>
              <span className="text-[#10E784] font-bold uppercase">{formData.serviceIntent.replace("-", " ")}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 dark:border-white/10 pb-2">
              <span className="text-slate-400 dark:text-[#B9B3A8]">CAPITAL SCALE:</span>
              <span className="text-slate-900 dark:text-white font-bold">{formData.capitalScale}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 dark:text-[#B9B3A8]">TARGET TIMELINE:</span>
              <span className="text-slate-900 dark:text-white font-bold">{formData.timeline}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/966500000000?text=Hello%20Vision%20Saudi%20Advisory,%20I%20have%20submitted%20a%20confidential%20inquiry%20regarding%20${encodeURIComponent(formData.serviceIntent)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-md transition-all"
            >
              <MessageSquare className="h-4 w-4 shrink-0" />
              <span>Instant WhatsApp Connect</span>
            </a>

            <Button variant="outline" size="md" onClick={resetAndClose}>
              Close Window
            </Button>
          </div>
        </motion.div>
      ) : (
        <div>
          {/* Progress Bar & Indicators */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs font-sans font-semibold mb-2 tracking-wide">
              <span className={step === 1 ? "text-[#10E784] font-bold" : "text-slate-400 dark:text-white/40"}>
                01. Strategic Direction
              </span>
              <span className={step === 2 ? "text-[#10E784] font-bold" : "text-slate-400 dark:text-white/40"}>
                02. Scope & Profiler
              </span>
              <span className={step === 3 ? "text-[#10E784] font-bold" : "text-slate-400 dark:text-white/40"}>
                03. Confidential Brief
              </span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden relative">
              <div
                className={`h-full bg-gradient-to-r from-[#10E784] to-[#0be07b] transition-all duration-500 rounded-full ${getStepProgressWidth()}`}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {/* STEP 1: CHOOSE PRIMARY DIRECTION */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
              >
                <div className="mb-5">
                  <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-1">
                    Select Your Primary Strategic Objective
                  </h4>
                  <p className="text-xs font-sans text-slate-600 dark:text-[#D8CCB8] font-light">
                    Choose an objective to configure your Saudi establishment or investment parameters.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                  {directions.map((dir) => {
                    const Icon = dir.icon;
                    const isSelected = formData.serviceIntent === dir.id;
                    return (
                      <button
                        key={dir.id}
                        onClick={() => handleSelectDirection(dir.id)}
                        className={`p-4 text-left border rounded-2xl transition-all duration-300 group relative ${
                          isSelected
                            ? "bg-[#10E784]/15 border-[#10E784] shadow-[0_0_25px_rgba(16,231,132,0.15)]"
                            : "bg-slate-50 dark:bg-white/[0.03] border-slate-200 dark:border-white/10 hover:border-[#10E784]/60 hover:bg-emerald-500/5 dark:hover:bg-white/[0.06]"
                        }`}
                      >
                        <div className="flex items-start gap-3.5">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isSelected ? "bg-[#10E784] text-slate-950" : "bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-[#10E784] group-hover:bg-[#10E784] group-hover:text-slate-950"}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-[#10E784] transition-colors mb-1">
                              {dir.title}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-[#D8CCB8]/80 font-light leading-relaxed">
                              {dir.desc}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-end pt-2">
                  <Button variant="emerald" size="md" showArrow onClick={() => setStep(2)}>
                    Proceed to Profiler
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: SCOPE & CAPITAL PROFILER */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-5"
              >
                {/* Active Direction Badge */}
                <div className="flex items-center justify-between bg-slate-100 dark:bg-white/[0.04] border border-[#10E784]/40 px-4 py-2.5 rounded-full text-xs font-sans text-slate-700 dark:text-[#D8CCB8]">
                  <span>Objective: <strong className="text-[#10E784] font-bold uppercase">{formData.serviceIntent.replace("-", " ")}</strong></span>
                  <button onClick={() => setStep(1)} className="text-xs text-[#10E784] underline hover:text-slate-900 dark:hover:text-white font-medium">
                    Change
                  </button>
                </div>

                {/* Capital Investment Scale Selector */}
                <div>
                  <label className="block text-xs font-sans font-medium text-slate-700 dark:text-[#D8CCB8] mb-2">
                    Target Capital Allocation / Investment Scale *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {capitalOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, capitalScale: opt })}
                        className={`py-3 px-2 text-center text-xs font-medium rounded-2xl border transition-all duration-300 ${
                          formData.capitalScale === opt
                            ? "bg-[#10E784]/20 border-[#10E784] text-[#10E784] font-bold"
                            : "bg-slate-50 dark:bg-white/[0.03] text-slate-600 dark:text-[#D8CCB8] border-slate-200 dark:border-white/10 hover:border-[#10E784]/40 hover:text-slate-900 dark:hover:text-white"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline Selector */}
                <div>
                  <label className="block text-xs font-sans font-medium text-slate-700 dark:text-[#D8CCB8] mb-2">
                    Planned Execution Timeline *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {timelineOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: opt })}
                        className={`py-3 px-3 text-center text-xs font-medium rounded-2xl border transition-all duration-300 ${
                          formData.timeline === opt
                            ? "bg-[#10E784]/20 border-[#10E784] text-[#10E784] font-bold"
                            : "bg-slate-50 dark:bg-white/[0.03] text-slate-600 dark:text-[#D8CCB8] border-slate-200 dark:border-white/10 hover:border-[#10E784]/40 hover:text-slate-900 dark:hover:text-white"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Target Region Selector */}
                <div>
                  <label className="block text-xs font-sans font-medium text-slate-700 dark:text-[#D8CCB8] mb-2">
                    Primary Regional Headquarters Focus *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {regionOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, targetRegion: opt })}
                        className={`py-2.5 px-2 text-center text-[11px] font-medium rounded-2xl border transition-all duration-300 ${
                          formData.targetRegion === opt
                            ? "bg-[#10E784]/20 border-[#10E784] text-[#10E784] font-bold"
                            : "bg-slate-50 dark:bg-white/[0.03] text-slate-600 dark:text-[#D8CCB8] border-slate-200 dark:border-white/10 hover:border-[#10E784]/40 hover:text-slate-900 dark:hover:text-white"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-1.5 text-xs font-sans text-slate-600 dark:text-[#D8CCB8] hover:text-slate-900 dark:hover:text-white"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Back to Strategic Direction</span>
                  </button>
                  <Button variant="emerald" size="md" showArrow onClick={() => setStep(3)}>
                    Proceed to Contact
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: CONFIDENTIAL CONTACT BRIEF */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
              >
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Full Name *"
                      required
                      placeholder="e.g. Alexander Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <Input
                      label="Corporate Email *"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Phone / WhatsApp *"
                      required
                      placeholder="+966 50 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    <Input
                      label="Company / Entity Name"
                      placeholder="e.g. Apex Global Enterprise"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <Input
                    label="Country of Origin"
                    placeholder="e.g. United Kingdom / UAE / USA"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  />

                  <Textarea
                    label="Overview of Strategic Objectives (Optional)"
                    placeholder="Share specific activities, partner requirements, or questions for senior strategists."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />

                  <div className="pt-3 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-1.5 text-xs font-sans text-slate-600 dark:text-[#D8CCB8] hover:text-slate-900 dark:hover:text-white"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" />
                      <span>Back to Scope Profiler</span>
                    </button>
                    <Button
                      variant="emerald"
                      size="lg"
                      type="submit"
                      disabled={isSubmitting}
                      className="font-bold"
                    >
                      {isSubmitting ? "Dispatching Brief..." : "Submit Confidential Brief"}
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </Modal>
  );
};

