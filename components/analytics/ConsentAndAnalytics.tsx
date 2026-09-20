"use client";

import { useEffect, useSyncExternalStore } from "react";
import Script from "next/script";
import Link from "next/link";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const STORAGE_KEY = "vs_cookie_consent";
type Consent = "accepted" | "declined" | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const track = (event: string, params: Record<string, unknown> = {}) => window.gtag?.("event", event, params);

const CHANGE_EVENT = "vs:consent-change";
// Fallback so a choice still sticks for this visit when storage is blocked.
let memoryConsent: Consent = null;

function readConsent(): Consent {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "accepted" || v === "declined" ? v : memoryConsent;
  } catch {
    return memoryConsent;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

/**
 * PDPL-friendly analytics: Google Analytics is not loaded at all until the visitor
 * accepts. Also records the conversions that matter for a lead-generation site.
 */
export function ConsentAndAnalytics() {
  // Server snapshot is undefined (unknown), so no banner flashes for returning visitors.
  const consent = useSyncExternalStore<Consent | undefined>(subscribe, readConsent, () => undefined);

  const choose = (value: Exclude<Consent, null>) => {
    memoryConsent = value;
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* storage blocked — memoryConsent keeps the choice for this visit */
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  const analyticsOn = consent === "accepted" && Boolean(GA_ID);

  useEffect(() => {
    if (!analyticsOn) return;

    const onLead = (e: Event) =>
      track("generate_lead", { service_intent: (e as CustomEvent).detail?.serviceIntent });

    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest("a");
      const href = link?.getAttribute("href") ?? "";
      if (href.includes("wa.me/")) track("whatsapp_click", { location: window.location.pathname });
      else if (href.startsWith("tel:")) track("phone_click", { location: window.location.pathname });
      else if (href.startsWith("mailto:")) track("email_click", { location: window.location.pathname });
    };

    window.addEventListener("vs:lead-submitted", onLead);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("vs:lead-submitted", onLead);
      document.removeEventListener("click", onClick);
    };
  }, [analyticsOn]);

  return (
    <>
      {analyticsOn && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      )}

      {consent === null && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          data-consent-banner=""
          className="fixed inset-x-4 bottom-20 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-[60] p-5 rounded-2xl bg-[#101312]/95 border border-white/15 backdrop-blur-xl shadow-2xl text-sm text-[#B9B3A8]"
        >
          <p className="mb-4 leading-relaxed">
            We use cookies to understand how visitors use this site and improve it. Nothing is tracked unless
            you accept. See our{" "}
            <Link href="/privacy" className="text-[#10E784] underline underline-offset-2 hover:text-white">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => choose("accepted")}
              className="flex-1 min-h-[44px] rounded-xl bg-[#10E784] text-[#0A0D0C] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => choose("declined")}
              className="flex-1 min-h-[44px] rounded-xl border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:border-white/40 transition"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}
