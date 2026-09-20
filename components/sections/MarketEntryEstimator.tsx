"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, Mail } from "lucide-react";
import {
  ACTIVITIES,
  CAPITALS,
  ENTITIES,
  estimate,
  type ActivityId,
  type CapitalId,
  type EntityId,
} from "@/data/estimator";
import { useContactSubmit } from "@/lib/useContactSubmit";
import { ConsentFields } from "@/components/forms/ConsentFields";
import { AnimatedCheck } from "@/components/ui/AnimatedCheck";
import { Input } from "@/components/ui/FormInput";
import { Button } from "@/components/ui/Button";

function Choice<T extends string>({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: { id: T; label: string; summary?: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset>
      <legend className="text-xs font-bold uppercase tracking-wider text-[#10E784] mb-3">{legend}</legend>
      <div className="grid gap-2">
        {options.map((o) => {
          const active = o.id === value;
          return (
            <label
              key={o.id}
              className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 transition-colors ${
                active ? "border-[#10E784] bg-[#10E784]/10" : "border-white/10 bg-white/[0.02] hover:border-white/25"
              }`}
            >
              <input
                type="radio"
                name={legend}
                value={o.id}
                checked={active}
                onChange={() => onChange(o.id)}
                className="mt-1 accent-[#10E784]"
              />
              <span>
                <span className={`block text-sm font-semibold ${active ? "text-white" : "text-[#D8CCB8]"}`}>{o.label}</span>
                {o.summary && <span className="block text-xs text-[#94A3B8] mt-0.5">{o.summary}</span>}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function MarketEntryEstimator() {
  const [entity, setEntity] = useState<EntityId>("llc");
  const [activity, setActivity] = useState<ActivityId>("services");
  const [capital, setCapital] = useState<CapitalId>("2m-10m");
  const [showForm, setShowForm] = useState(false);
  const [lead, setLead] = useState({ name: "", email: "", phone: "", company: "" });
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const { submit, isSubmitting, isSubmitted, submitError } = useContactSubmit();

  const result = useMemo(() => estimate(entity, activity, capital), [entity, activity, capital]);
  const labelOf = <T extends string>(list: { id: T; label: string }[], id: T) => list.find((x) => x.id === id)?.label ?? id;

  const planSummary = [
    `Entity: ${labelOf(ENTITIES, entity)} | Activity: ${labelOf(ACTIVITIES, activity)} | Capital: ${labelOf(CAPITALS, capital)}`,
    `Indicative timeline: ${result.totalWeeks[0]}–${result.totalWeeks[1]} weeks`,
    ...result.steps.map((s, i) => `${i + 1}. ${s.title} (${s.weeks[0] === s.weeks[1] ? s.weeks[0] : `${s.weeks[0]}–${s.weeks[1]}`} wk)`),
  ].join("\n");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit({ ...lead, leadType: "estimate", serviceIntent: "business-setup", planSummary, consent, website });
  };

  return (
    <section id="estimator" className="bg-[#0A0D0C] text-white py-[var(--space-section-lg)] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-[#10E784] mb-4">Market Entry Estimator</p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.12] tracking-tight mb-4">
            How long will it take to set up in Saudi Arabia?
          </h2>
          <p className="text-[#B9B3A8] text-lg leading-relaxed">
            Answer three questions to see your indicative timeline and step-by-step roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-5 space-y-8">
            <Choice legend="Entity type" options={ENTITIES} value={entity} onChange={setEntity} />
            <Choice legend="Business activity" options={ACTIVITIES} value={activity} onChange={setActivity} />
            <Choice legend="Planned capital" options={CAPITALS} value={capital} onChange={setCapital} />
          </div>

          {/* Result */}
          <div className="lg:col-span-7 lg:sticky lg:top-28 self-start rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8" aria-live="polite">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-5 w-5 text-[#10E784]" aria-hidden="true" />
              <p className="text-sm text-[#B9B3A8]">Indicative timeline</p>
            </div>
            <p className="font-display text-4xl sm:text-5xl font-bold text-white mb-8">
              {result.totalWeeks[0]}–{result.totalWeeks[1]} <span className="text-2xl text-[#94A3B8] font-semibold">weeks</span>
            </p>

            {/* Steps build in one by one; the key restarts the sequence whenever an answer changes */}
            <motion.ol
              key={`${entity}-${activity}`}
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.09 } } }}
              className="space-y-3 mb-6"
            >
              {result.steps.map((step, i) => (
                <motion.li
                  key={step.title}
                  variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0A0D0C]/60 px-4 py-3"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#10E784]/15 text-xs font-bold text-[#10E784]">
                    {i + 1}
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-semibold text-white">{step.title}</span>
                    <span className="block text-xs text-[#94A3B8] mt-0.5">{step.detail}</span>
                  </span>
                  <span className="shrink-0 text-xs font-mono text-[#B9B3A8]">
                    {step.weeks[0] === step.weeks[1] ? step.weeks[0] : `${step.weeks[0]}–${step.weeks[1]}`} wk
                  </span>
                </motion.li>
              ))}
            </motion.ol>

            {result.notes.length > 0 && (
              <ul className="space-y-2 mb-6">
                {result.notes.map((n) => (
                  <li key={n} className="text-sm text-[#D8CCB8] pl-4 border-l-2 border-[#10E784]/60">
                    {n}
                  </li>
                ))}
              </ul>
            )}

            <p className="text-xs text-[#64748B] mb-6">
              Indicative estimate for a well-prepared applicant. Actual timelines depend on documentation and
              authority processing. Government fees are included in your full plan.
            </p>

            <AnimatePresence mode="wait" initial={false}>
              {isSubmitted ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center text-center rounded-2xl border border-[#10E784]/30 bg-[#10E784]/5 p-6"
                >
                  <AnimatedCheck size={56} />
                  <p className="mt-4 font-semibold text-white">Your roadmap is on its way.</p>
                  <p className="text-sm text-[#B9B3A8] mt-1">
                    A senior strategist will follow up within 24 hours with fees and a document checklist.
                  </p>
                </motion.div>
              ) : showForm ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="Full Name *" required value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} />
                    <Input label="Email *" type="email" required value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} />
                    <Input label="Phone / WhatsApp *" required placeholder="+966 50 000 0000" value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} />
                    <Input label="Company" value={lead.company} onChange={(e) => setLead({ ...lead, company: e.target.value })} />
                  </div>
                  <ConsentFields consent={consent} onConsentChange={setConsent} website={website} onWebsiteChange={setWebsite} />
                  {submitError && <p className="text-red-400 text-xs">{submitError}</p>}
                  <Button variant="primary" size="lg" type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending…" : "Email me the full plan"}
                  </Button>
                </motion.form>
              ) : (
                <motion.div key="cta" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <Button variant="primary" size="lg" showArrow className="w-full" onClick={() => setShowForm(true)}>
                    <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
                    Email me the full plan
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
