import { CalendarClock } from "lucide-react";
import { BOOKING_URL } from "@/lib/site-config";

/** Inline scheduler (Calendly or Cal.com). Renders nothing until NEXT_PUBLIC_BOOKING_URL is set. */
export function BookCall() {
  if (!BOOKING_URL) return null;

  const src = BOOKING_URL.includes("calendly.com")
    ? `${BOOKING_URL}${BOOKING_URL.includes("?") ? "&" : "?"}hide_gdpr_banner=1&background_color=101312&text_color=ffffff&primary_color=10e784`
    : `${BOOKING_URL}${BOOKING_URL.includes("?") ? "&" : "?"}embed=true&theme=dark`;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-2">
        <CalendarClock className="h-5 w-5 text-[#10E784]" aria-hidden="true" />
        <h3 className="font-display text-xl font-bold text-white">Prefer to talk? Book a call</h3>
      </div>
      <p className="text-sm text-[#B9B3A8] mb-5">Pick a 30-minute slot with a senior market-entry strategist.</p>
      <iframe
        src={src}
        title="Book a call with Vision Saudi"
        loading="lazy"
        className="w-full h-[660px] rounded-2xl border-0 bg-[#101312]"
      />
    </div>
  );
}
