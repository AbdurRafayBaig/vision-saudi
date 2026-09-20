"use client";

import React from "react";
import { MotionConfig } from "framer-motion";

// `reducedMotion="user"` makes Framer Motion honour prefers-reduced-motion:
// transform/layout animations are skipped while opacity still resolves, so
// scroll-revealed content never stays stuck invisible for those users.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
