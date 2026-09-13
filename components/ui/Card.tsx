import React from "react";
import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "dark" | "light" | "gold" | "emerald";
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  variant = "dark",
  hoverable = true,
}) => {
  const variantStyles = {
    dark: "bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-3xl backdrop-blur-xl shadow-md",
    light: "bg-slate-50 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white shadow-xl rounded-3xl backdrop-blur-xl",
    gold: "bg-[#10E784]/10 border border-[#10E784]/30 text-slate-900 dark:text-white rounded-3xl backdrop-blur-xl",
    emerald: "bg-[#10E784]/10 border border-[#10E784]/30 text-slate-900 dark:text-white rounded-3xl backdrop-blur-xl",
  };

  const hoverStyles = hoverable
    ? "transition-all duration-500 hover:border-[#10E784]/60 hover:shadow-[0_0_25px_rgba(16,231,132,0.15)] hover:scale-[1.01]"
    : "";

  return (
    <div className={clsx("p-6 sm:p-10 relative group overflow-hidden transition-colors duration-300", variantStyles[variant], hoverStyles, className)}>
      {children}
    </div>
  );
};

