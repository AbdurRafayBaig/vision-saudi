"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Vertical offset in px to travel while fading in. */
  y?: number;
  /** Horizontal offset in px to travel while fading in. */
  x?: number;
  /** Seconds to wait before starting — used to stagger siblings. */
  delay?: number;
  /** Animate immediately on mount instead of waiting for scroll (hero content). */
  immediate?: boolean;
  as?: ElementType;
  id?: string;
}

/**
 * Fade-and-slide on scroll, in ~1KB instead of an animation library.
 * The transition itself is CSS; this only toggles a class when the element
 * first enters the viewport. Reduced motion and no-JS both show content
 * immediately (see .reveal in globals.css).
 */
export function Reveal({ children, className = "", y = 20, x = 0, delay = 0, immediate = false, as: Tag = "div", id }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (immediate) {
      // Next frame, so the browser paints the "from" state first.
      const raf = requestAnimationFrame(() => el.classList.add("is-revealed"));
      return () => cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add("is-revealed");
        io.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [immediate]);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${className}`}
      style={{ "--reveal-y": `${y}px`, "--reveal-x": `${x}px`, "--reveal-delay": `${delay}s` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
