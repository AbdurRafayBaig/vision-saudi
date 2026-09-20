"use client";

import { useState } from "react";
import { Download, FileText } from "lucide-react";
import { useContactSubmit } from "@/lib/useContactSubmit";
import { ConsentFields } from "@/components/forms/ConsentFields";
import { AnimatedCheck } from "@/components/ui/AnimatedCheck";
import { Input } from "@/components/ui/FormInput";
import { Button } from "@/components/ui/Button";
import { GUIDE_PATH } from "@/lib/site-config";

const CONTENTS = [
  "The 5-stage path from licence to operations",
  "LLC vs Branch vs Regional HQ — which fits you",
  "Indicative timelines for each step",
  "The government platforms you must activate",
];

/** Email-gated download of the Saudi Market Entry Guide 2026. */
export default function GuideDownload() {
  const [lead, setLead] = useState({ name: "", email: "", company: "" });
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const { submit, isSubmitting, isSubmitted, submitError } = useContactSubmit();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit({ ...lead, leadType: "guide", serviceIntent: "other", consent, website });
  };

  return (
    <section id="guide" className="bg-[#0A0D0C] text-white py-[var(--space-section)] border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
          <div>
            <div className="flex items-center gap-2 text-[#10E784] mb-4">
              <FileText className="h-4 w-4" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider">Free guide · PDF</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight mb-4">Saudi Market Entry Guide 2026</h2>
            <p className="text-[#B9B3A8] leading-relaxed mb-6">
              Everything international companies need to know before establishing in the Kingdom — in one short read.
            </p>
            <ul className="space-y-2">
              {CONTENTS.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-[#D8CCB8]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#10E784]" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {isSubmitted ? (
            <div className="flex flex-col items-center text-center" aria-live="polite">
              <AnimatedCheck size={64} />
              <p className="mt-4 font-semibold text-white">Your guide is ready.</p>
              <p className="text-sm text-[#B9B3A8] mt-1 mb-6">We&apos;ve also emailed you a copy.</p>
              <Button variant="primary" size="lg" href={GUIDE_PATH}>
                <Download className="h-4 w-4 mr-2" aria-hidden="true" />
                Download the guide
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative space-y-4">
              <Input label="Full Name *" required value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} />
              <Input label="Work Email *" type="email" required value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} />
              <Input label="Company" value={lead.company} onChange={(e) => setLead({ ...lead, company: e.target.value })} />
              <ConsentFields consent={consent} onConsentChange={setConsent} website={website} onWebsiteChange={setWebsite} />
              {submitError && <p className="text-red-400 text-xs">{submitError}</p>}
              <Button variant="primary" size="lg" type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Preparing…" : "Get the free guide"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
