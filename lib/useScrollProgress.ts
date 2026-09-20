"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * 0→1 progress of an element travelling through the viewport, updated on scroll.
 * Replaces a library hook for the one place that needs it (the journey timeline).
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const start = window.innerHeight * 0.7; // begins when the top reaches 70% down
      const end = window.innerHeight * 0.55;
      const travelled = start - rect.top;
      const total = rect.height + start - end;
      setProgress(Math.min(1, Math.max(0, travelled / total)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ref]);

  return progress;
}
