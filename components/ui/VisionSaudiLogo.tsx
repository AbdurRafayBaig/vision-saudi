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
  sm: "h-7", // ~28px
  md: "h-9", // ~36px
  lg: "h-11", // ~44px
  xl: "h-14", // ~56px
};

const logoSrcMap = {
  white: "/images/vision-saudi-logo-white.png",
  gold: "/images/vision-saudi-logo-gold.png",
  dark: "/images/vision-saudi-logo-dark.png",
};

export const VisionSaudiLogo: React.FC<VisionSaudiLogoProps> = ({
  variant = "auto",
  size = "md",
  className = "",
  showSubtext = false,
  href = "/",
}) => {
  const { theme } = useTheme();

  let effectiveVariant = variant;
  if (variant === "auto") {
    effectiveVariant = theme === "light" ? "dark" : "white";
  }

  const logoSrc = logoSrcMap[effectiveVariant as keyof typeof logoSrcMap] || logoSrcMap.white;
  const sizeClass = sizeClasses[size];

  const content = (
    <div className={`group inline-flex flex-col ${className}`}>
      <div className="relative flex items-center">
        <img
          src={logoSrc}
          alt="Vision Saudi"
          className={`${sizeClass} w-auto object-contain transition-all duration-300 group-hover:brightness-110 group-hover:scale-[1.02]`}
        />
      </div>
      {showSubtext && (
        <span className="text-[10px] font-mono text-[#10E784] tracking-[0.2em] mt-1 opacity-90 pl-0.5">
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
