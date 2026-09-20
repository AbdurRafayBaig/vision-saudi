"use client";

import { useCallback, useSyncExternalStore } from "react";

const KEY = "vs:shortlist";
const EVENT = "vs:shortlist-change";
const EMPTY = "[]";

// localStorage is an external store: another tab can change it, and the server
// has none. Reading it through useSyncExternalStore gives React a defined
// hydration story instead of a first render that disagrees with the markup.
function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(EVENT, onChange);
  };
}

function getSnapshot(): string {
  try {
    return window.localStorage.getItem(KEY) ?? EMPTY;
  } catch {
    return EMPTY; // private window, or site data blocked
  }
}

const getServerSnapshot = () => EMPTY;

function write(ids: string[]) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(ids));
  } catch {
    /* the list simply won't survive a reload */
  }
  window.dispatchEvent(new Event(EVENT));
}

/**
 * Properties the visitor has set aside, so a reload — or a look at another page
 * — doesn't lose the comparison they were building.
 */
export function useShortlist() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  let ids: string[];
  try {
    const parsed = JSON.parse(raw);
    ids = Array.isArray(parsed) ? (parsed as string[]) : [];
  } catch {
    ids = [];
  }

  const toggle = useCallback((id: string) => {
    const current = JSON.parse(getSnapshot()) as string[];
    write(current.includes(id) ? current.filter((x) => x !== id) : [...current, id]);
  }, []);

  const clear = useCallback(() => write([]), []);

  return { ids, has: (id: string) => ids.includes(id), toggle, clear };
}
