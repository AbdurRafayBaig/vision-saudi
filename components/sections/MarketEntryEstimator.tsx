"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ChevronDown, Clock, Mail } from "lucide-react";
import {
  ACTIVITIES,
  CAPITALS,
  ENTITIES,
  documentsFor,
  estimate,
  feasibility,
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
                className="mt-0.5 h-4 w-4 shrink-0 accent-[#10E784]"
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
  const [targetDate, setTargetDate] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [lead, setLead] = useState({ name: "", email: "", phone: "", company: "" });
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const { submit, isSubmitting, isSubmitted, submitError } = useContactSubmit();

  const result = useMemo(() => estimate(entity, activity, capital), [entity, activity, capital]);

  // Only computed once a date is typed, so the server never renders a verdict
  // against the build machine's clock.
  const verdict = useMemo(() => {
    if (!targetDate) return null;
    const target = new Date(`${targetDate}T00:00:00`);
    return Number.isNaN(target.getTime()) ? null : feasibility(target, result.totalWeeks);
  }, [targetDate, result.totalWeeks]);

  const documents = useMemo(() => documentsFor(entity, activity), [entity, activity]);
  const [gathered, setGathered] = useState<Record<string, boolean>>({});
  const gatheredCount = documents.filter((d) => gathered[d.title]).length;
  const labelOf = <T extends string>(list: { id: T; label: string }[], id: T) => list.find((x) => x.id === id)?.label ?? id;

  const planSummary = [
    `Entity: ${labelOf(ENTITIES, entity)} | Activity: ${labelOf(ACTIVITIES, activity)} | Capital: ${labelOf(CAPITALS, capital)}`,
    `Indicative timeline: ${result.totalWeeks[0]}–${result.totalWeeks[1]} weeks`,
    ...(verdict ? [`Target operational date: ${targetDate} (${verdict.verdict}) — ${verdict.headline}`] : []),
    ...result.steps.map((s, i) => `${i + 1}. ${s.title} (${s.weeks[0] === s.weeks[1] ? s.weeks[0] : `${s.weeks[0]}–${s.weeks[1]}`} wk)`),
    "",
    `Documents already in hand (${gatheredCount}/${documents.length}):`,
    ...documents.map((d) => `${gathered[d.title] ? "[x]" : "[ ]"} ${d.title}${d.attested ? " (needs attestation)" : ""}`),
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
            Answer three questions to see your indicative timeline and step-by-step roadmap. Add the date you need to be trading and we&apos;ll tell you whether it holds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-5 space-y-8">
            <Choice legend="Entity type" options={ENTITIES} value={entity} onChange={setEntity} />
            <Choice legend="Business activity" options={ACTIVITIES} value={activity} onChange={setActivity} />
            <Choice legend="Planned capital" options={CAPITALS} value={capital} onChange={setCapital} />

            <div>
              <label
                htmlFor="estimator-target-date"
                className="block text-xs font-bold uppercase tracking-wider text-[#10E784] mb-3"
              >
                When do you need to be operational?
              </label>
              <input
                id="estimator-target-date"
                type="date"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white transition-colors focus:border-[#10E784] focus:outline-none"
              />
              <p className="mt-2 text-xs text-[#94A3B8]">Optional. We&apos;ll tell you whether it holds up.</p>
            </div>
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
            <ol
              key={`${entity}-${activity}`}
              className="anim-stagger space-y-3 mb-6"
            >
              {result.steps.map((step, i) => (
                <li
                  key={step.title}
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
                </li>
              ))}
            </ol>

            {verdict && (
              <div
                className={`anim-rise-in mb-6 rounded-2xl border p-5 ${
                  verdict.verdict === "comfortable"
                    ? "border-[#10E784]/40 bg-[#10E784]/5"
                    : verdict.verdict === "tight"
                      ? "border-[#E7B710]/40 bg-[#E7B710]/5"
                      : "border-[#E76A6A]/40 bg-[#E76A6A]/5"
                }`}
              >
                <p className="text-sm font-semibold text-white mb-1">{verdict.headline}</p>
                <p className="text-sm leading-relaxed text-[#D8CCB8]">{verdict.detail}</p>
              </div>
            )}

            {result.notes.length > 0 && (
              <ul className="space-y-2 mb-6">
                {result.notes.map((n) => (
                  <li key={n} className="text-sm text-[#D8CCB8] pl-4 border-l-2 border-[#10E784]/60">
                    {n}
                  </li>
                ))}
              </ul>
            )}

            {/* The paperwork is what actually delays people, so it is on the page
                rather than saved for the first call. */}
            <details className="group mb-6 rounded-2xl border border-white/10 bg-[#0A0D0C]/60">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-sm font-semibold text-[#D8CCB8] transition-colors hover:text-white">
                <span>
                  Documents you&apos;ll need to provide
                  <span className="ml-2 font-normal text-[#94A3B8]">
                    ({gatheredCount}/{documents.length} ready)
                  </span>
                </span>
                <ChevronDown className="h-4 w-4 shrink-0 text-[#10E784] transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>

              <ul className="space-y-1 border-t border-white/10 px-3 py-3">
                {documents.map((doc) => (
                  <li key={doc.title}>
                    <label className="flex cursor-pointer items-start gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-white/[0.03]">
                      <input
                        type="checkbox"
                        checked={Boolean(gathered[doc.title])}
                        onChange={(e) => setGathered({ ...gathered, [doc.title]: e.target.checked })}
                        className="mt-0.5 h-4 w-4 shrink-0 accent-[#10E784]"
                      />
                      <span>
                        <span className="block text-sm font-semibold text-white">
                          {doc.title}
                          {doc.attested && (
                            <span className="ml-2 rounded bg-[#E7B710]/15 px-1.5 py-0.5 text-xs font-bold uppercase tracking-wide text-[#E7B710]">
                              Needs attestation
                            </span>
                          )}
                        </span>
                        <span className="block text-xs leading-relaxed text-[#94A3B8] mt-0.5">{doc.note}</span>
                      </span>
                    </label>
                  </li>
                ))}
              </ul>

              <p className="border-t border-white/10 px-5 py-3 text-xs leading-relaxed text-[#76839A]">
                Attested documents must be legalised through the Saudi embassy in the
                country that issued them, or apostilled where that country is party to
                the Hague Convention. It is the step that most often sets a timeline back.
              </p>
            </details>

            <p className="text-xs text-[#76839A] mb-6">
              Indicative estimate for a well-prepared applicant. Actual timelines depend on documentation and
              authority processing. Government fees are included in your full plan.
            </p>

            {isSubmitted ? (
              <Reveal immediate className="flex flex-col items-center text-center rounded-2xl border border-[#10E784]/30 bg-[#10E784]/5 p-6">
                <AnimatedCheck size={56} />
                <p className="mt-4 font-semibold text-white">Your roadmap is on its way.</p>
                <p className="text-sm text-[#B9B3A8] mt-1">
                  A senior strategist will follow up within 24 hours with fees and a document checklist.
                </p>
              </Reveal>
            ) : showForm ? (
              <form onSubmit={handleSubmit} className="anim-rise-in relative space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input label="Full Name *" required value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} />
                  <Input label="Work Email *" type="email" required value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} />
                  <Input label="Phone / WhatsApp *" required placeholder="+966 50 000 0000" value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} />
                  <Input label="Company / Entity Name" value={lead.company} onChange={(e) => setLead({ ...lead, company: e.target.value })} />
                </div>
                <ConsentFields consent={consent} onConsentChange={setConsent} website={website} onWebsiteChange={setWebsite} />
                {submitError && <p className="text-red-400 text-xs">{submitError}</p>}
                <Button variant="primary" size="lg" type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending…" : "Email me the full plan"}
                </Button>
              </form>
            ) : (
              <Reveal immediate>
                <Button variant="primary" size="lg" showArrow className="w-full" onClick={() => setShowForm(true)}>
                  <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
                  Email me the full plan
                </Button>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
