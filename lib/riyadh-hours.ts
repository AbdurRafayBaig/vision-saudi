// Saudi working week: Sunday–Thursday, 09:00–18:00, Riyadh is UTC+3 year round
// (no daylight saving), so the offset can be applied without a timezone library.

const OPEN_HOUR = 9;
const CLOSE_HOUR = 18;
const WORKING_DAYS = [0, 1, 2, 3, 4]; // Sunday = 0 … Thursday = 4

export interface OfficeStatus {
  isOpen: boolean;
  /** Short line for a status pill. */
  label: string;
  /** What the visitor can expect, in plain words. */
  detail: string;
}

export function riyadhNow(at: Date = new Date()): Date {
  return new Date(at.getTime() + (3 * 60 + at.getTimezoneOffset()) * 60_000);
}

export function officeStatus(at: Date = new Date()): OfficeStatus {
  const local = riyadhNow(at);
  const day = local.getDay();
  const hour = local.getHours();
  const isOpen = WORKING_DAYS.includes(day) && hour >= OPEN_HOUR && hour < CLOSE_HOUR;

  if (isOpen) {
    return {
      isOpen,
      label: "Riyadh office open",
      detail: "Messages sent now are usually answered within the hour.",
    };
  }

  const opensTomorrow = WORKING_DAYS.includes(day) && hour < OPEN_HOUR ? "this morning" : "the next working morning";
  return {
    isOpen,
    label: "Outside Riyadh hours",
    detail: `We reply ${opensTomorrow}. Sunday to Thursday, 09:00–18:00 (GMT+3).`,
  };
}
