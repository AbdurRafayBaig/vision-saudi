import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "emerald" | "gold" | "slate" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "emerald",
  className = "",
}) => {
  const styles = {
    emerald: "bg-[#10E784]/15 text-[#059669] dark:text-[#10E784] border border-[#10E784]/30 font-mono font-bold",
    gold: "bg-[#10E784]/15 text-[#059669] dark:text-[#10E784] border border-[#10E784]/40 font-mono font-bold",
    slate: "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-[#D8CCB8] border border-slate-200 dark:border-white/10 font-mono font-medium",
    outline: "bg-transparent text-[#059669] dark:text-[#10E784] border border-[#10E784]/40 font-mono font-medium",
  };

  return (
    <span
      className={`inline-flex items-center px-3.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded-full ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};


