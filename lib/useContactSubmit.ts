"use client";

import { useState } from "react";
import { contactSchema, firstError } from "@/lib/contact-schema";

/** Validates with the shared schema, then posts to /api/contact. Used by both contact forms. */
export function useContactSubmit() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const submit = async (data: Record<string, unknown>) => {
    setSubmitError(null);
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      setSubmitError(firstError(parsed));
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Failed to send your inquiry.");
      }
      setIsSubmitted(true);
      window.dispatchEvent(new CustomEvent("vs:lead-submitted", { detail: { serviceIntent: parsed.data.serviceIntent } }));
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
