"use client";

import { useState } from "react";
import { validateLead } from "@/lib/contact-fields";

/** Validates with the shared schema, then posts to /api/contact. Used by both contact forms. */
export function useContactSubmit() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const submit = async (data: Record<string, unknown>) => {
    setSubmitError(null);
    const problem = validateLead(data);
    if (problem) {
      setSubmitError(problem);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Failed to send your inquiry.");
      }
      setIsSubmitted(true);
      window.dispatchEvent(new CustomEvent("vs:lead-submitted", { detail: { serviceIntent: data.serviceIntent } }));
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Failed to send your inquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setIsSubmitted(false);
    setSubmitError(null);
  };

  return { submit, isSubmitting, isSubmitted, submitError, reset };
}
