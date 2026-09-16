"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-[136px] h-9 rounded-full bg-slate-200/60 dark:bg-white/10 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <div
      className="relative inline-flex items-center p-1 rounded-full bg-slate-200/80 dark:bg-white/[0.08] border border-slate-300/70 dark:border-white/15 backdrop-blur-xl shadow-inner select-none transition-colors duration-300"
      role="radiogroup"
      aria-label="Theme mode switcher"
    >
      {/* Light Mode Option */}
      <button
        type="button"
        onClick={() => isDark && toggleTheme()}
        className={`relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
          !isDark
            ? "text-slate-900 font-semibold"
            : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
        }`}
        aria-checked={!isDark}
        role="radio"
      >
        <Sun
          className={`h-3.5 w-3.5 transition-transform duration-300 ${
            !isDark ? "text-amber-500 scale-110 rotate-45" : "text-slate-400"
          }`}
        />
        <span className="text-[11px] uppercase font-bold tracking-wider">Light</span>
        {!isDark && (
          <motion.div
            layoutId="theme-active-indicator"
            className="absolute inset-0 bg-white shadow-md rounded-full -z-10 border border-slate-200/80"
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          />
        )}
      </button>

      {/* Dark Mode Option */}
      <button
        type="button"
        onClick={() => !isDark && toggleTheme()}
        className={`relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
          isDark
            ? "text-white font-semibold"
            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
        }`}
        aria-checked={isDark}
        role="radio"
      >
        <Moon
          className={`h-3.5 w-3.5 transition-transform duration-300 ${
            isDark ? "text-[#10E784] scale-110 -rotate-12" : "text-slate-400"
          }`}
        />
        <span className="text-[11px] uppercase font-bold tracking-wider">Dark</span>
        {isDark && (
          <motion.div
            layoutId="theme-active-indicator"
            className="absolute inset-0 bg-[#0A0D0C] shadow-lg rounded-full -z-10 border border-[#10E784]/40 shadow-[0_0_12px_rgba(16,231,132,0.25)]"
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          />
        )}
      </button>
    </div>
  );
};


