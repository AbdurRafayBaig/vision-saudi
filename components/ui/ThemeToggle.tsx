"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-between gap-1 p-1 rounded-full bg-slate-200/90 dark:bg-white/10 border border-slate-300 dark:border-white/15 backdrop-blur-md transition-all duration-300 cursor-pointer hover:border-[#10E784]/60 shadow-inner"
      aria-label="Toggle Light & Dark Mode"
      title={`Current Mode: ${theme === "dark" ? "Dark Mode 🌙" : "Light Mode ☀️"} (Click to switch)`}
    >
      <div
        className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
          theme === "light"
            ? "bg-white text-emerald-700 shadow-sm font-bold scale-105"
            : "text-slate-400 hover:text-slate-200"
        }`}
      >
        <Sun className="h-3.5 w-3.5" />
        <span className="text-[10px] uppercase font-mono tracking-wider hidden sm:inline">Light</span>
      </div>

      <div
        className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
          theme === "dark"
            ? "bg-[#10E784] text-[#0A0D0C] shadow-sm font-bold scale-105"
            : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
        }`}
      >
        <Moon className="h-3.5 w-3.5" />
        <span className="text-[10px] uppercase font-mono tracking-wider hidden sm:inline">Dark</span>
      </div>
    </button>
  );
};

