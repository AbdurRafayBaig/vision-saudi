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
    emerald: "text-[#059669] dark:text-[#10E784] font-mono font-bold",
    gold: "text-[#059669] dark:text-[#10E784] font-mono font-bold",
    slate: "text-slate-700 dark:text-[#D8CCB8] font-mono font-medium",
    outline: "text-[#059669] dark:text-[#10E784] font-mono font-medium",
  };

  return (
    <span
      className={`inline-flex items-center text-xs font-mono uppercase tracking-wider ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};


