"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "ivory" | "emerald" | "gold";
  size?: "sm" | "md" | "lg";
  shape?: "default" | "rounded" | "square" | "pill";
  href?: string;
  showArrow?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      shape = "default",
      href,
      showArrow = false,
      className,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer group active:scale-[0.99] select-none text-center";

    const shapeStyles = {
      default: "rounded-xl",
      rounded: "rounded-lg",
      square: "rounded-md",
      pill: "rounded-full",
    };

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-[#34D399] via-[#10E784] to-[#059669] text-[#0A0D0C] font-bold hover:from-[#6EE7B7] hover:via-[#34D399] hover:to-[#10E784] focus:ring-[#10E784] focus:ring-offset-[#0A0D0C] shadow-md shadow-[#10E784]/20 border border-[#10E784]/40 tracking-wide",
      emerald:
        "bg-gradient-to-r from-[#34D399] via-[#10E784] to-[#059669] text-[#0A0D0C] font-bold hover:from-[#6EE7B7] hover:via-[#34D399] hover:to-[#10E784] focus:ring-[#10E784] focus:ring-offset-[#0A0D0C] shadow-md shadow-[#10E784]/20 border border-[#10E784]/40 tracking-wide",
      outline:
        "bg-transparent border border-slate-300 dark:border-[#10E784]/40 text-slate-800 dark:text-[#10E784] hover:border-[#10E784] hover:text-[#059669] dark:hover:text-white hover:bg-[#10E784]/10 focus:ring-[#10E784] backdrop-blur-md font-semibold",
      ghost:
        "bg-transparent text-slate-600 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-[#10E784] hover:bg-slate-100 dark:hover:bg-white/10 focus:ring-white/20 font-medium",
      ivory:
        "bg-white dark:bg-white/10 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/20 focus:ring-slate-300 dark:focus:ring-white/20 backdrop-blur-md border border-slate-300 dark:border-white/20 font-semibold shadow-sm",
      gold:
        "bg-gradient-to-r from-[#34D399] via-[#10E784] to-[#059669] text-[#0A0D0C] font-bold hover:brightness-105 focus:ring-[#10E784] shadow-md border border-[#10E784]/40",
    };

    const sizeStyles = {
      sm: "px-4 py-2 text-xs font-semibold tracking-wider uppercase min-h-[38px]",
      md: "px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide min-h-[42px]",
      lg: "px-6 py-3 text-sm sm:text-base font-bold tracking-wide min-h-[46px]",
    };

    const classes = twMerge(
      baseStyles,
      shapeStyles[shape],
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <span className="inline-flex items-center justify-center gap-2 leading-none shrink-0 pointer-events-none">
        <span className="inline-flex items-center gap-1.5">{children}</span>
        {showArrow && (
          <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    );

    if (href) {
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} onClick={onClick} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
