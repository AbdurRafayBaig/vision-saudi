"use client";

import { useState } from "react";
import { Send, X } from "lucide-react";
import { MASTER_PROPERTIES } from "@/data/properties";
import { useShortlist } from "@/lib/useShortlist";
import { useContactSubmit } from "@/lib/useContactSubmit";
import { ConsentFields } from "@/components/forms/ConsentFields";
import { AnimatedCheck } from "@/components/ui/AnimatedCheck";
import { Input } from "@/components/ui/FormInput";
import { Button } from "@/components/ui/Button";

/**
 * Bar that appears once something is shortlisted. Comparing three properties
 * across a scrolling grid is hard; having them sent over as a set is what
 * people actually want, and it tells us precisely what they are interested in.
 */
export function ShortlistBar() {
  const { ids, clear } = useShortlist();
  const [open, setOpen] = useState(false);
  const [lead, setLead] = useState({ name: "", email: "", phone: "" });
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const { submit, isSubmitting, isSubmitted, submitError } = useContactSubmit();

  const chosen = MASTER_PROPERTIES.filter((p) => ids.includes(p.id));
  if (chosen.length === 0) return null;

  const planSummary = [
    `Shortlisted ${chosen.length} propert${chosen.length === 1 ? "y" : "ies"}:`,
    ...chosen.map((p) => `- ${p.title} — ${p.location}, ${p.type}, ${p.price}, est. yield ~${p.yieldNumeric}% p.a.`),
  ].join("\n");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit({ ...lead, leadType: "inquiry", serviceIntent: "real-estate", planSummary, consent, website });
  };

  return (
    <div className="shortlist-bar fixed inset-x-0 bottom-16 z-40 px-4 sm:bottom-6 sm:px-6">
      <div className="anim-rise-in mx-auto max-w-2xl rounded-2xl border border-[#10E784]/40 bg-[#0E1211]/95 p-4 shadow-2xl backdrop-blur-xl">
        {isSubmitted ? (
          <div className="flex items-center gap-4" aria-live="polite">
            <AnimatedCheck size={36} />
            <div>
              <p className="text-sm font-semibold text-white">On its way.</p>
              <p className="text-xs text-[#94A3B8]">
                Details for all {chosen.length} are being sent over, with a note on what each one needs.
              </p>
            </div>
            <button
              onClick={clear}
              className="ml-auto rounded-full p-2 text-[#94A3B8] transition-colors hover:text-white"
              aria-label="Clear shortlist"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : open ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">
                Send me these {chosen.length}
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-[#94A3B8] transition-colors hover:text-white"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Input label="Full Name *" required value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} />
              <Input label="Work Email *" type="email" required value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} />
              <Input label="Phone / WhatsApp *" required placeholder="+966 50 000 0000" value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} />
            </div>
            <ConsentFields consent={consent} onConsentChange={setConsent} website={website} onWebsiteChange={setWebsite} />
            {submitError && <p className="text-xs text-red-400">{submitError}</p>}
            <Button variant="primary" size="md" type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : `Email me these ${chosen.length}`}
            </Button>
          </form>
        ) : (
          <div className="flex items-center gap-3">
            <p className="text-sm text-[#D8CCB8]">
              <span className="font-bold text-white">{chosen.length}</span> shortlisted
            </p>
            <button
              onClick={clear}
              className="rounded-full px-3 py-2 text-xs text-[#94A3B8] transition-colors hover:text-white"
            >
              Clear
            </button>
            <Button variant="primary" size="sm" className="ml-auto" onClick={() => setOpen(true)}>
              <Send className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
              Email me these {chosen.length}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
