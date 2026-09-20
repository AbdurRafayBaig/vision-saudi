"use client";

import { ChevronDown } from "lucide-react";
import { Input, Textarea } from "@/components/ui/FormInput";

export interface LeadCore {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  message: string;
}

export const EMPTY_LEAD: LeadCore = {
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  message: "",
};

/**
 * The identical set of questions behind every lead path on the site.
 *
 * Three forms used to ask for the same things with different labels and
 * different requirements, so the leads they produced could not be compared.
 * Whatever route someone takes, we now collect the same three required fields
 * and offer the same optional ones. `children` goes inside the disclosure, for
 * the extra a particular form needs (a timeline, a region).
 */
export function LeadFields({
  value,
  onChange,
  children,
  compact = false,
}: {
  value: LeadCore;
  onChange: (patch: Partial<LeadCore>) => void;
  children?: React.ReactNode;
  /** Tighter spacing, for the modal. */
  compact?: boolean;
}) {
  const gap = compact ? "gap-4" : "gap-5";

  return (
    <>
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${gap}`}>
        <Input
          label="Full Name *"
          required
          placeholder="e.g. Alexander Vance"
          value={value.name}
          onChange={(e) => onChange({ name: e.target.value })}
        />
        <Input
          label="Work Email *"
          type="email"
          required
          placeholder="name@company.com"
          value={value.email}
          onChange={(e) => onChange({ email: e.target.value })}
        />
      </div>

      <Input
        label="Phone / WhatsApp *"
        required
        placeholder="+966 50 000 0000"
        value={value.phone}
        onChange={(e) => onChange({ phone: e.target.value })}
      />

      {/* Three fields get someone to send. The rest speed up our reply, so they
          are offered rather than demanded. <details> needs no JavaScript. */}
      <details className="group rounded-2xl border border-white/10 bg-white/[0.02]">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-sm font-semibold text-[#D8CCB8] transition-colors hover:text-white">
          <span>Add detail so we can answer properly (optional)</span>
          <ChevronDown
            className="h-4 w-4 shrink-0 text-[#10E784] transition-transform group-open:rotate-180"
            aria-hidden="true"
          />
        </summary>

        <div className={`space-y-5 border-t border-white/10 px-5 py-5`}>
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${gap}`}>
            <Input
              label="Company / Entity Name"
              placeholder="e.g. Global Tech Enterprise"
              value={value.company}
              onChange={(e) => onChange({ company: e.target.value })}
            />
            <Input
              label="Country of Origin"
              placeholder="e.g. United Kingdom / UAE / USA"
              value={value.country}
              onChange={(e) => onChange({ country: e.target.value })}
            />
          </div>

          {children}

          <Textarea
            label="Overview of Strategic Objectives"
            placeholder="Provide relevant details regarding planned activities, capital allocation, or specific advisory required."
            value={value.message}
            onChange={(e) => onChange({ message: e.target.value })}
          />
        </div>
      </details>
    </>
  );
}
