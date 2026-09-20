import React from "react";
import Image from "next/image";
import Link from "next/link";

interface VisionSaudiLogoProps {
  /** "dark" selects the logo drawn for light backgrounds; everything else uses the light-on-dark logo. */
  variant?: "white" | "gold" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showSubtext?: boolean;
  href?: string;
}

const sizeClasses = {
  sm: "h-10", // ~40px
  md: "h-9 sm:h-14 lg:h-16", // compact on phones, full size from tablet up
  lg: "h-16 sm:h-20", // ~64-80px (High-Visibility Footer Logo)
  xl: "h-22 sm:h-24", // ~88-96px
};

export const VisionSaudiLogo: React.FC<VisionSaudiLogoProps> = ({
  variant = "white",
  size = "md",
  className = "",
  showSubtext = false,
  href = "/",
}) => {
  const logoSrc = variant === "dark"
    ? "/images/logo_hdr_light.png"
    : "/images/logo_hdr_dark.png";
  const sizeClass = sizeClasses[size];

  const content = (
    <div className={`group inline-flex flex-col ${className}`}>
      <div className="relative flex items-center">
        <Image
          src={logoSrc}
          alt="Vision Saudi"
          width={240}
          height={64}
          priority
          className={`${sizeClass} w-auto object-contain transition-all duration-300 group-hover:scale-[1.03] filter drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]`}
        />
      </div>
      {showSubtext && (
        <span className="text-xs font-mono text-[#10E784] tracking-[0.2em] mt-1 opacity-90 ps-0.5 font-bold">
          KINGDOM OF SAUDI ARABIA
        </span>
      )}
    </div>
  );

  if (href) {
    // inline-block so the anchor's hit area matches the logo, not the text line box
    return (
      <Link href={href} aria-label="Vision Saudi Home" className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
};

export default VisionSaudiLogo;
