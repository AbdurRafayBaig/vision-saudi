"use client";

import { useEffect, useRef } from "react";

// Splits "SAR 100M+" -> ["SAR ", 100, "M+"], "$1.3 Trillion" -> ["$", 1.3, " Trillion"].
function parse(value: string) {
  const m = value.match(/^(\D*?)(\d+(?:\.\d+)?)(.*)$/);
  if (!m) return null;
  const [, prefix, num, suffix] = m;
  return { prefix, target: parseFloat(num), decimals: num.split(".")[1]?.length ?? 0, suffix };
}

const DURATION_MS = 1600;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Counts a stat up from zero the first time it scrolls into view.
 * The real value is server-rendered, so search engines, no-JS visitors and screen
 * readers always get it. The count only runs if the number starts off-screen, so
 * nobody sees it jump from the real value back to zero.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parts = parse(value);
    if (!el || !parts) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const format = (n: number) => `${parts.prefix}${n.toFixed(parts.decimals)}${parts.suffix}`;
    let frame = 0;
    let firstReport = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (firstReport) {
          firstReport = false;
          if (entry.isIntersecting) {
            observer.disconnect(); // already on screen at load: leave the real value alone
            return;
          }
          el.textContent = format(0); // off-screen, so this reset is never seen
          return;
        }
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          // rAF timestamps can precede the start time we took, so clamp at 0.
          const t = Math.min(Math.max((now - start) / DURATION_MS, 0), 1);
          el.textContent = format(parts.target * easeOutCubic(t));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = value;
    };
  }, [value]);

  return (
    <span className={className}>
      <span className="sr-only">{value}</span>
      <span ref={ref} aria-hidden="true" className="tabular-nums">
        {value}
      </span>
    </span>
  );
}
