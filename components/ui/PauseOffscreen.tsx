"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Parks looping animations inside it while they are off screen.
 *
 * An infinite marquee is the one thing on a reading page that never stops
 * asking for attention, and below the fold it burns compositor frames and
 * battery for nobody. This toggles a data attribute; the pause itself is one
 * CSS rule (see [data-offscreen="true"] in globals.css), so nothing animates
 * that a visitor cannot see.
 */
export function PauseOffscreen({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        el.dataset.offscreen = String(!entry.isIntersecting);
      },
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
