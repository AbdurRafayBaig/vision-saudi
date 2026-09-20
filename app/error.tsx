"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled route error:", error);
  }, [error]);

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-[#0A0D0C] text-white px-6 py-24">
      <div className="max-w-xl text-center">
        <p className="inline-flex items-center gap-2 text-[#10E784] text-xs font-bold tracking-wider uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          <span>Something went wrong</span>
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          This page could not be loaded.
        </h1>
        <p className="text-[#94A3B8] font-light leading-relaxed mb-10">
          An unexpected error interrupted this page. You can retry, or continue to the
          homepage and reach our advisory team directly.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <Button variant="primary" size="lg" showArrow onClick={reset}>
            Try again
          </Button>
          <Button variant="ivory" size="lg" href="/">
            Back to homepage
          </Button>
        </div>
        {error.digest && (
          <p className="mt-8 text-xs font-mono text-[#64748B]">Reference: {error.digest}</p>
        )}
      </div>
    </section>
  );
}
