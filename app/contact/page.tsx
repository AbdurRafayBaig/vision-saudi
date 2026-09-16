"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { Input, Select, Textarea } from "@/components/ui/FormInput";
import { Button } from "@/components/ui/Button";
import { MapPin, Mail, ShieldCheck, CheckCircle2, Building2, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    serviceIntent: "business-setup",
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    timeline: "Immediate (1-3 months)",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const intentOptions = [
    { value: "business-setup", label: "Business Setup & Market Entry" },
    { value: "corporate-services", label: "Corporate Services & GRO" },
    { value: "real-estate", label: "Real Estate Investment Advisory" },
    { value: "premium-residency", label: "Saudi Premium Residency" },
    { value: "technology", label: "Technology & Digital Infrastructure" },
    { value: "partnership", label: "Strategic Partnership (Service / Success)" },
    { value: "other", label: "Other Commercial Inquiry" },
  ];

  return (
    <div className="bg-[#0A0D0C] text-white overflow-x-hidden min-h-screen">
      {/* Hero Section — Type D Conversion Focus */}
      <PageHero
        type="type-d"
        category="MAKE THE FIRST MOVE"
        title="What are you looking to do in Saudi Arabia?"
        subtitle="Connect with Vision Saudi's senior market-entry strategists to evaluate your establishment, investment, real estate, or corporate service objectives."
        imageSrc="/images/hero-riyadh.png"
        imageAlt="Saudi Arabia Riyadh Olaya Skyline"
      />

      {/* Main Contact Form & Location Section */}
      <section className="py-[var(--space-section-lg)] bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white relative transition-colors duration-300">
        {/* Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-[#10E784]/10 blur-[160px]" />
          <div className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-[#059669]/10 blur-[160px]" />
        </div>

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl"
            >
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#10E784]/20 border border-[#10E784] rounded-full flex items-center justify-center mb-6 text-[#059669] dark:text-[#10E784] shadow-[0_0_30px_rgba(16,231,132,0.3)]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-3">
                    Confidential Inquiry Received
                  </h3>
                  <p className="text-slate-600 dark:text-[#D8CCB8] text-base max-w-md mb-8 leading-relaxed font-light">
                    Thank you. A Vision Saudi senior strategist will review your submitted requirements and respond within 24 hours.
                  </p>
                  <Button variant="primary" onClick={() => setIsSubmitted(false)}>
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Intent Quick Selector */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#059669] dark:text-[#10E784] mb-3">
                      Select Primary Objective *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2">
                      {intentOptions.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, serviceIntent: opt.value })}
                          className={`p-3.5 text-left text-xs font-semibold rounded-2xl border transition-all duration-300 ${
                            formData.serviceIntent === opt.value
                              ? "bg-[#10E784]/20 text-[#059669] dark:text-[#10E784] border-[#10E784] shadow-[0_0_15px_rgba(16,231,132,0.2)]"
                              : "bg-slate-50 dark:bg-white/[0.03] text-slate-700 dark:text-[#D8CCB8] border-slate-200 dark:border-white/10 hover:border-[#10E784]/40 hover:text-slate-900 dark:hover:text-white"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      label="Phone / WhatsApp *"
                      required
                      placeholder="+966 50 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    <Input
                      label="Company / Entity Name"
                      placeholder="e.g. Global Tech Enterprise"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      label="Country of Origin"
                      placeholder="e.g. United Kingdom / UAE / USA"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    />
                    <Select
                      label="Target Timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      options={[
                        { value: "Immediate (1-3 months)", label: "Immediate (1-3 months)" },
                        { value: "Planning (3-6 months)", label: "Planning (3-6 months)" },
                        { value: "Long-term (6-12 months)", label: "Long-term (6-12 months)" },
                      ]}
                    />
                  </div>

                  <Textarea
                    label="Overview of Strategic Objectives"
                    placeholder="Provide relevant details regarding planned activities, capital allocation, or specific advisory required."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />

                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    className="w-full font-bold tracking-wider shadow-md shadow-[#10E784]/20"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "PROCESSING INQUIRY..." : "SUBMIT CONFIDENTIAL INQUIRY"}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Sidebar Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 sm:p-10 bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl">
                <h3 className="font-display text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                  Riyadh Advisory Headquarters
                </h3>

                <div className="space-y-6 text-sm text-slate-700 dark:text-[#D8CCB8]">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#10E784]/15 border border-[#10E784]/30 flex items-center justify-center text-[#059669] dark:text-[#10E784] shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white mb-1">Olaya Headquarters</div>
                      <div className="text-xs text-slate-500 dark:text-[#B9B3A8] font-light leading-relaxed">
                        King Fahd Road, Olaya District, Riyadh, Kingdom of Saudi Arabia
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#10E784]/15 border border-[#10E784]/30 flex items-center justify-center text-[#059669] dark:text-[#10E784] shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white mb-1">Direct Advisory Email</div>
                      <div className="text-xs font-mono text-[#059669] dark:text-[#10E784]">
                        advisory@visionsaudi.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confidentiality Box */}
              <div className="p-6 bg-[#10E784]/15 border border-[#10E784]/30 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3 mb-2 text-[#059669] dark:text-[#10E784]">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    Strict Confidentiality Protocol
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-[#D8CCB8] font-light leading-relaxed">
                  All commercial disclosures, financial data, and strategic objectives submitted to Vision Saudi are governed by non-disclosure protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

