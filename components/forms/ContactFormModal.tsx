"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { LeadFields } from "@/components/forms/LeadFields";
import { useContactSubmit } from "@/lib/useContactSubmit";
import { ConsentFields } from "@/components/forms/ConsentFields";
import { AnimatedCheck } from "@/components/ui/AnimatedCheck";
import { whatsappUrl } from "@/lib/site-config";
import {
  Building2,
  ShieldCheck,
  Landmark,
  Crown,
  Cpu,
  Handshake,
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

  const { submit, isSubmitting, isSubmitted, submitError, reset } = useContactSubmit();
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");

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
    submit({ ...formData, consent, website });
  };

  const resetAndClose = () => {
    setStep(1);
    reset();
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
        <Reveal immediate className="py-6 text-center flex flex-col items-center">
          <div className="mb-6">
            <AnimatedCheck size={80} />
          </div>

          <h4 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
            Strategy Brief Dispatched
          </h4>
          <p className="text-[#D8CCB8] text-sm max-w-lg mb-6 leading-relaxed font-light">
            Thank you, <strong className="text-white font-bold">{formData.name || "Partner"}</strong>. Your confidential Saudi market-entry parameters have been assigned to a Vision Saudi senior partner in Riyadh. You will receive a direct contact response within 24 hours.
          </p>

          {/* Submitted Summary Badge */}
          <div className="w-full p-4 bg-white/[0.04] border border-[#10E784]/30 rounded-2xl mb-8 text-left space-y-2 font-mono text-xs text-[#D8CCB8]">
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-[#B9B3A8]">OBJECTIVE:</span>
              <span className="text-[#10E784] font-bold uppercase">{formData.serviceIntent.replaceAll("-", " ")}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-[#B9B3A8]">CAPITAL SCALE:</span>
              <span className="text-white font-bold">{formData.capitalScale}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#B9B3A8]">TARGET TIMELINE:</span>
              <span className="text-white font-bold">{formData.timeline}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl(
                `Hello Vision Saudi Advisory, I have submitted a confidential inquiry regarding ${formData.serviceIntent}`
              )}
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
        </Reveal>
      ) : (
        <div>
          {/* Progress Bar & Indicators */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs font-sans font-semibold mb-2 tracking-wide">
              <span className={step === 1 ? "text-[#10E784] font-bold" : "text-white/40"}>
                01. Strategic Direction
              </span>
              <span className={step === 2 ? "text-[#10E784] font-bold" : "text-white/40"}>
                02. Scope & Profiler
              </span>
              <span className={step === 3 ? "text-[#10E784] font-bold" : "text-white/40"}>
                03. Confidential Brief
              </span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden relative">
              <div
                className={`h-full bg-gradient-to-r from-[#10E784] to-[#0be07b] transition-all duration-500 rounded-full ${getStepProgressWidth()}`}
              />
            </div>
          </div>

                      {/* STEP 1: CHOOSE PRIMARY DIRECTION */}
            {step === 1 && (
              <div key="step1" className="anim-rise-in">
                <div className="mb-5">
                  <h4 className="text-xl font-display font-bold text-white mb-1">
                    Select Your Primary Strategic Objective
                  </h4>
                  <p className="text-xs font-sans text-[#D8CCB8] font-light">
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
                            ? "bg-[#10E784]/15 border-[#10E784] shadow-[0_0_25px_rgba(16,231,132,0.07)]"
                            : "bg-white/[0.03] border-white/10 hover:border-[#10E784]/60 hover:bg-white/[0.06]"
                        }`}
                      >
                        <div className="flex items-start gap-3.5">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isSelected ? "bg-[#10E784] text-slate-950" : "bg-white/10 text-[#10E784] group-hover:bg-[#10E784] group-hover:text-slate-950"}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white group-hover:text-[#10E784] transition-colors mb-1">
                              {dir.title}
                            </div>
                            <div className="text-xs text-[#D8CCB8]/80 font-light leading-relaxed">
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
              </div>
            )}

            {/* STEP 2: SCOPE & CAPITAL PROFILER */}
            {step === 2 && (
              <div key="step2" className="anim-rise-in space-y-5">
                {/* Active Direction Badge */}
                <div className="flex items-center justify-between bg-white/[0.04] border border-[#10E784]/40 px-4 py-2.5 rounded-full text-xs font-sans text-[#D8CCB8]">
                  <span>Objective: <strong className="text-[#10E784] font-bold uppercase">{formData.serviceIntent.replaceAll("-", " ")}</strong></span>
                  <button onClick={() => setStep(1)} className="text-xs text-[#10E784] underline hover:text-white font-medium">
                    Change
                  </button>
                </div>

                {/* Capital Investment Scale Selector */}
                <div>
                  <label className="block text-xs font-sans font-medium text-[#D8CCB8] mb-2">
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
                            : "bg-white/[0.03] text-[#D8CCB8] border-white/10 hover:border-[#10E784]/40 hover:text-white"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline Selector */}
                <div>
                  <label className="block text-xs font-sans font-medium text-[#D8CCB8] mb-2">
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
                            : "bg-white/[0.03] text-[#D8CCB8] border-white/10 hover:border-[#10E784]/40 hover:text-white"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Target Region Selector */}
                <div>
                  <label className="block text-xs font-sans font-medium text-[#D8CCB8] mb-2">
                    Primary Regional Headquarters Focus *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {regionOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, targetRegion: opt })}
                        className={`py-2.5 px-2 text-center text-xs font-medium rounded-2xl border transition-all duration-300 ${
                          formData.targetRegion === opt
                            ? "bg-[#10E784]/20 border-[#10E784] text-[#10E784] font-bold"
                            : "bg-white/[0.03] text-[#D8CCB8] border-white/10 hover:border-[#10E784]/40 hover:text-white"
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
                    className="inline-flex items-center gap-1.5 text-xs font-sans text-[#D8CCB8] hover:text-white"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Back to Strategic Direction</span>
                  </button>
                  <Button variant="emerald" size="md" showArrow onClick={() => setStep(3)}>
                    Proceed to Contact
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3: CONFIDENTIAL CONTACT BRIEF */}
            {step === 3 && (
              <div key="step3" className="anim-rise-in">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <LeadFields
                    compact
                    value={formData}
                    onChange={(patch) => setFormData({ ...formData, ...patch })}
                  />

                  <ConsentFields consent={consent} onConsentChange={setConsent} website={website} onWebsiteChange={setWebsite} />

                  {submitError && (
                    <p className="text-red-500 text-xs -mt-1">{submitError}</p>
                  )}

                  <div className="pt-3 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-1.5 text-xs font-sans text-[#D8CCB8] hover:text-white"
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
              </div>
            )}
        </div>
      )}
    </Modal>
  );
};

