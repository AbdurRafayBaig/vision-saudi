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
        {/* The file is 793x181. Declaring 240x64 made Next serve a 256px-wide
            candidate for a mark that renders up to 420px, so the logo was being
            upscaled and looked soft. Intrinsic size plus a sizes hint lets the
            browser pick a candidate that matches the slot and the screen. */}
        <Image
          src={logoSrc}
          alt="Vision Saudi"
          width={793}
          height={181}
          sizes="(max-width: 640px) 180px, (max-width: 1024px) 300px, 420px"
          quality={95}
          priority
          // A 15px black glow behind a logo on a dark bar does not separate it,
          // it smudges it — the thin "ONE KINGDOM. ONE VISION." line lost most
          // of its contrast to the blur. A tight shadow separates without haze.
          className={`${sizeClass} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] drop-shadow-[0_1px_4px_rgba(0,0,0,0.75)]`}
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
