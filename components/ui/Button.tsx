"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "ivory" | "emerald" | "gold";
  size?: "sm" | "md" | "lg";
  shape?: "pill" | "square" | "rounded" | "default";
  href?: string;
  showArrow?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      shape = "pill",
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
      "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer group rounded-full active:scale-[0.98] hover:scale-[1.02]";

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-[#10E784] to-[#00C86F] text-[#0A0D0C] font-bold hover:from-[#34D399] hover:to-[#10E784] focus:ring-[#10E784] focus:ring-offset-[#0A0D0C] shadow-lg shadow-[#10E784]/30 border border-[#10E784]/50 tracking-wide",
      emerald:
        "bg-gradient-to-r from-[#10E784] to-[#00C86F] text-[#0A0D0C] font-bold hover:from-[#34D399] hover:to-[#10E784] focus:ring-[#10E784] focus:ring-offset-[#0A0D0C] shadow-lg shadow-[#10E784]/30 border border-[#10E784]/50 tracking-wide",
      outline:
        "bg-transparent border border-[#10E784]/50 text-[#10E784] hover:border-[#10E784] hover:text-white hover:bg-[#10E784]/10 focus:ring-[#10E784] backdrop-blur-md font-medium",
      ghost:
        "bg-transparent text-[#94A3B8] hover:text-[#10E784] hover:bg-white/10 focus:ring-white/20 font-medium",
      ivory:
        "bg-white/10 text-white hover:bg-white/20 focus:ring-white/20 backdrop-blur-md border border-white/20 font-medium",
      gold:
        "bg-gradient-to-r from-[#10E784] to-[#00C86F] text-[#0A0D0C] font-bold hover:brightness-110 focus:ring-[#10E784] shadow-md border border-[#10E784]/50",
    };

    const sizeStyles = {
      sm: "px-5 py-2.5 text-xs font-mono tracking-wider uppercase",
      md: "px-7 py-3 text-sm font-medium",
      lg: "px-9 py-4 text-base font-medium",
    };


    const classes = twMerge(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        <span>{children}</span>
        {showArrow && (
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </>
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
