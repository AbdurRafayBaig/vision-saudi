"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { Select } from "@/components/ui/FormInput";
import { LeadFields } from "@/components/forms/LeadFields";
import { useContactSubmit } from "@/lib/useContactSubmit";
import { ConsentFields } from "@/components/forms/ConsentFields";
import { AnimatedCheck } from "@/components/ui/AnimatedCheck";
import { BookCall } from "@/components/sections/BookCall";
import { Button } from "@/components/ui/Button";
import { OfficeHours } from "@/components/ui/OfficeHours";
import { MapPin, Mail, Phone, ShieldCheck } from "lucide-react";
import { SITE, mailtoUrl, whatsappUrl } from "@/lib/site-config";

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

  const { submit, isSubmitting, isSubmitted, submitError, reset } = useContactSubmit();
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit({ ...formData, consent, website });
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
        imageSrc="/images/corporateBusinessServices.webp"
        imageAlt="Saudi Arabia Riyadh Olaya Skyline"
      />

      {/* Main Contact Form & Location Section */}
      <section className="py-[var(--space-section-lg)] bg-[#0A0D0C] text-white relative transition-colors duration-300">
        {/* Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-[#10E784]/5 blur-[160px]" />
          <div className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-[#059669]/5 blur-[160px]" />
        </div>

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Container */}
            <Reveal y={20} immediate className="lg:col-span-7 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="mb-6">
                    <AnimatedCheck size={64} />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-3">
                    Confidential Inquiry Received
                  </h3>
                  <p className="text-[#D8CCB8] text-base max-w-md mb-8 leading-relaxed font-light">
                    Thank you. A Vision Saudi senior strategist will review your requirements and reply during Riyadh working hours, Sunday to Thursday.
                  </p>
                  <Button variant="primary" onClick={reset}>
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Intent Quick Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#10E784] mb-3">
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
                              ? "bg-[#10E784]/20 text-[#10E784] border-[#10E784] shadow-[0_0_15px_rgba(16,231,132,0.1)]"
                              : "bg-white/[0.03] text-[#D8CCB8] border-white/10 hover:border-[#10E784]/40 hover:text-white"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <LeadFields
                    value={formData}
                    onChange={(patch) => setFormData({ ...formData, ...patch })}
                  >
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
                  </LeadFields>

                  <ConsentFields consent={consent} onConsentChange={setConsent} website={website} onWebsiteChange={setWebsite} />

                  <OfficeHours />

                  {submitError && (
                    <p className="text-red-500 text-xs">{submitError}</p>
                  )}

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
            </Reveal>

            {/* Sidebar Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <BookCall />
              <div className="p-8 sm:p-10 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
                <h3 className="font-display text-2xl font-bold mb-6 text-white">
                  Riyadh Advisory Headquarters
                </h3>

                <div className="space-y-6 text-sm text-[#D8CCB8]">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#10E784]/15 border border-[#10E784]/30 flex items-center justify-center text-[#10E784] shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">Olaya Headquarters</div>
                      <div className="text-xs text-[#B9B3A8] font-light leading-relaxed">
                        {SITE.address.street}, {SITE.address.city}, {SITE.address.country}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#10E784]/15 border border-[#10E784]/30 flex items-center justify-center text-[#10E784] shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">Direct Advisory Email</div>
                      <a
                        href={mailtoUrl()}
                        className="inline-block py-3 -my-3 text-xs font-mono text-[#10E784] hover:underline"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#10E784]/15 border border-[#10E784]/30 flex items-center justify-center text-[#10E784] shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">Phone / WhatsApp</div>
                      <a
                        href={whatsappUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block py-3 -my-3 text-xs font-mono text-[#10E784] hover:underline"
                      >
                        {SITE.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confidentiality Box */}
              <div className="p-6 bg-[#10E784]/15 border border-[#10E784]/30 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3 mb-2 text-[#10E784]">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Strict Confidentiality Protocol
                  </span>
                </div>
                <p className="text-xs text-[#D8CCB8] font-light leading-relaxed">
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

