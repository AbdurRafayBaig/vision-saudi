"use client";

import { useSyncExternalStore } from "react";
import { officeStatus, type OfficeStatus } from "@/lib/riyadh-hours";

// The clock is an external store: it changes on its own, and the server has a
// different one. Serialised so the snapshot stays referentially stable between
// ticks, which is what useSyncExternalStore requires.
function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 60_000);
  return () => clearInterval(id);
}

const getSnapshot = () => JSON.stringify(officeStatus());
const getServerSnapshot = () => "";

/**
 * Live "are they awake right now" indicator. Renders nothing on the server: a
 * prerendered page would otherwise claim the Riyadh office is open at 3am.
 */
export function OfficeHours({ className = "" }: { className?: string }) {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (!snapshot) return null;

  const status = JSON.parse(snapshot) as OfficeStatus;

  return (
    <p className={`inline-flex items-center gap-2 text-xs text-[#94A3B8] ${className}`}>
      <span
        aria-hidden="true"
        className={`h-2 w-2 shrink-0 rounded-full ${status.isOpen ? "bg-[#10E784]" : "bg-[#94A3B8]"}`}
      />
      <span>
        <span className={status.isOpen ? "font-semibold text-[#10E784]" : "font-semibold text-[#D8CCB8]"}>
          {status.label}
        </span>{" "}
        · {status.detail}
      </span>
    </p>
  );
}
