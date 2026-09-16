"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/providers/ThemeProvider";

interface VisionSaudiLogoProps {
  variant?: "white" | "gold" | "dark" | "auto";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showSubtext?: boolean;
  href?: string;
}

const sizeClasses = {
  sm: "h-10", // ~40px
  md: "h-13 sm:h-16", // ~52-64px (High-Visibility Navbar Logo)
  lg: "h-16 sm:h-20", // ~64-80px (High-Visibility Footer Logo)
  xl: "h-22 sm:h-24", // ~88-96px
};

export const VisionSaudiLogo: React.FC<VisionSaudiLogoProps> = ({
  variant = "auto",
  size = "md",
  className = "",
  showSubtext = false,
  href = "/",
}) => {
  const { theme } = useTheme();

  const isLight = variant === "dark" || (variant === "auto" && theme === "light");
  const logoSrc = isLight 
    ? "/images/logo_hdr_light.png" 
    : "/images/logo_hdr_dark.png";
  const sizeClass = sizeClasses[size];

  const content = (
    <div className={`group inline-flex flex-col ${className}`}>
      <div className="relative flex items-center">
        <img
          src={logoSrc}
          alt="Vision Saudi"
          className={`${sizeClass} w-auto object-contain transition-all duration-300 group-hover:scale-[1.03] filter drop-shadow-[0_2px_12px_rgba(16,231,132,0.25)] dark:drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]`}
        />
      </div>
      {showSubtext && (
        <span className="text-[10px] font-mono text-[#059669] dark:text-[#10E784] tracking-[0.2em] mt-1 opacity-90 pl-0.5 font-bold">
          KINGDOM OF SAUDI ARABIA
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="Vision Saudi Home">
        {content}
      </Link>
    );
  }

  return content;
};

export default VisionSaudiLogo;
