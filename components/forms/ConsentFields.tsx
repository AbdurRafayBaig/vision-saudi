"use client";

import Link from "next/link";

interface Props {
  consent: boolean;
  onConsentChange: (value: boolean) => void;
  website: string;
  onWebsiteChange: (value: string) => void;
}

/** PDPL consent checkbox plus a hidden honeypot field that only bots fill in. */
export function ConsentFields({ consent, onConsentChange, website, onWebsiteChange }: Props) {
  return (
    <>
      {/* Honeypot — hidden from people and assistive tech; bots auto-fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => onWebsiteChange(e.target.value)}
          />
        </label>
      </div>

      <label className="flex items-start gap-3 text-xs text-[#B9B3A8] leading-relaxed cursor-pointer">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => onConsentChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#10E784] cursor-pointer"
        />
        <span>
          I agree that Vision Saudi may process my details to respond to this inquiry, as described in the{" "}
          <Link href="/privacy" target="_blank" className="text-[#10E784] underline underline-offset-2 hover:text-white">
            Privacy Policy
          </Link>
          , in line with the Saudi Personal Data Protection Law (PDPL).
        </span>
      </label>
    </>
  );
}
