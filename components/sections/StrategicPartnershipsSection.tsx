"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// ── Government & Corporate Strategic Partners Ticker (Row 1) ──
const partnerLogos = [
  {
    name: "Riyadh Municipality",
    svg: (
      <svg viewBox="0 0 200 60" className="h-12 w-auto fill-current">
        <path d="M25 15 C30 10 40 10 45 15 C50 25 40 35 35 45 L25 45 Z" fill="#10E784" opacity="0.9" />
        <circle cx="35" cy="25" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="55" y="36" fontSize="11" fontWeight="bold" fill="currentColor" fontFamily="sans-serif">RIYADH MUNICIPALITY</text>
      </svg>
    ),
  },
  {
    name: "Ministry of Transport & Logistic Services",
    svg: (
      <svg viewBox="0 0 260 60" className="h-12 w-auto fill-current">
        <path d="M30 10 L30 50 M20 25 L40 25 M15 35 L45 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M30 10 Q20 5 15 15 M30 10 Q40 5 45 15" fill="none" stroke="#10E784" strokeWidth="2" />
        <text x="55" y="30" fontSize="11" fontWeight="bold" fill="currentColor" fontFamily="sans-serif">Ministry of Transport</text>
        <text x="55" y="44" fontSize="9" fill="currentColor" opacity="0.7" fontFamily="sans-serif">and Logistic Services</text>
      </svg>
    ),
  },
  {
    name: "SLNEE",
    svg: (
      <svg viewBox="0 0 180 60" className="h-12 w-auto fill-current">
        <path d="M15 30 L30 15 L45 30 L30 45 Z" fill="#10E784" />
        <path d="M35 30 L50 15 L65 30 L50 45 Z" fill="currentColor" opacity="0.8" />
        <text x="75" y="36" fontSize="20" fontWeight="900" fill="currentColor" letterSpacing="1">SLNEE</text>
      </svg>
    ),
  },
  {
    name: "Ministry of Foreign Affairs",
    svg: (
      <svg viewBox="0 0 240 60" className="h-12 w-auto fill-current">
        <circle cx="30" cy="30" r="18" fill="none" stroke="#10E784" strokeWidth="2" />
        <path d="M30 18 L30 42 M20 30 L40 30" stroke="currentColor" strokeWidth="2" />
        <text x="58" y="28" fontSize="12" fontWeight="bold" fill="currentColor" fontFamily="sans-serif">Ministry of</text>
        <text x="58" y="42" fontSize="12" fontWeight="bold" fill="#10E784" fontFamily="sans-serif">Foreign Affairs</text>
      </svg>
    ),
  },
  {
    name: "Al Sulaiman Real Estate",
    svg: (
      <svg viewBox="0 0 220 60" className="h-12 w-auto fill-current">
        <path d="M20 45 C30 15 45 15 50 45" fill="none" stroke="#10E784" strokeWidth="3" strokeLinecap="round" />
        <text x="60" y="30" fontSize="14" fontWeight="bold" fill="currentColor" fontFamily="sans-serif">Al Sulaiman</text>
        <text x="60" y="44" fontSize="9" fill="currentColor" opacity="0.7" fontFamily="sans-serif">Real Estate</text>
      </svg>
    ),
  },
  {
    name: "Ministry of Municipal & Rural Affairs",
    svg: (
      <svg viewBox="0 0 280 60" className="h-12 w-auto fill-current">
        <path d="M25 45 L35 15 L45 45 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M35 15 L35 45" stroke="#10E784" strokeWidth="2" />
        <text x="55" y="28" fontSize="11" fontWeight="bold" fill="currentColor" fontFamily="sans-serif">Ministry of Municipal</text>
        <text x="55" y="42" fontSize="9" fill="currentColor" opacity="0.7" fontFamily="sans-serif">Rural Affairs &amp; Housing</text>
      </svg>
    ),
  },
  {
    name: "KAFD",
    svg: (
      <svg viewBox="0 0 160 60" className="h-12 w-auto fill-current">
        <path d="M15 45 L30 15 L45 45 L30 35 Z" fill="#10E784" />
        <text x="55" y="34" fontSize="18" fontWeight="900" fill="currentColor" letterSpacing="2">KAFD</text>
      </svg>
    ),
  },
];

// ── Official Government Authority Badges (Row 2) ──
const governmentAuthorities = [
  {
    name: "GOSI",
    color: "#10E784",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7">
        <path d="M12 20 L22 10 L22 17 L30 17 L30 23 L22 23 L22 30 Z" fill="#10E784" />
        <path d="M12 12 L20 20 L12 28" fill="none" stroke="#10E784" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Qiwa",
    color: "#38BDF8",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7">
        <circle cx="20" cy="14" r="6" fill="none" stroke="#38BDF8" strokeWidth="2.5" />
        <path d="M12 28 C12 22 28 22 28 28" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M26 12 L32 18" stroke="#10E784" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Invest Saudi",
    color: "#34D399",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7">
        <path d="M20 6 L32 14 L32 26 L20 34 L8 26 L8 14 Z" fill="none" stroke="#34D399" strokeWidth="2.5" />
        <path d="M20 14 L20 26 M14 20 L26 20" stroke="#10E784" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    name: "Saudi Business Centre",
    color: "#818CF8",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7">
        <path d="M20 8 L30 18 L20 28 L10 18 Z" fill="none" stroke="#818CF8" strokeWidth="2" />
        <circle cx="20" cy="18" r="4" fill="#10E784" />
        <path d="M20 28 L20 34" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Digital Government Authority",
    color: "#A78BFA",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7">
        <rect x="10" y="10" width="20" height="20" rx="4" fill="none" stroke="#A78BFA" strokeWidth="2.5" />
        <path d="M16 20 L24 20 M20 16 L20 24" stroke="#10E784" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Ministry of Commerce",
    color: "#F43F5E",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7">
        <path d="M8 30 L20 10 L32 30 Z" fill="none" stroke="#F43F5E" strokeWidth="2.5" />
        <circle cx="20" cy="22" r="3" fill="#10E784" />
      </svg>
    ),
  },
  {
    name: "ZATCA",
    color: "#F59E0B",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7">
        <path d="M10 14 H30 V26 H10 Z" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
        <path d="M16 10 L24 10 M20 26 L20 30" stroke="#10E784" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "MISA",
    color: "#10E784",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7">
        <circle cx="20" cy="20" r="12" fill="none" stroke="#10E784" strokeWidth="2.5" />
        <path d="M14 20 L26 20 M20 14 L20 26" stroke="#10E784" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function StrategicPartnershipsSection() {
  return (
    <section className="bg-slate-900 dark:bg-[#0A0D0C] text-slate-900 dark:text-white py-[var(--space-section-lg)] border-b border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-400">
      {/* Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#10E784]/10 blur-[160px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight mb-4 text-white">
            Strategic <span className="text-[#10E784]">Partnerships</span>
          </h2>
          <p className="text-slate-400 dark:text-[#94A3B8] text-base sm:text-lg font-light leading-relaxed">
            Empowering Investors through strong local partnerships.
          </p>
        </div>

        {/* ── ROW 1: TOP INFINITE MARQUEE TICKER (Partner Logos) ── */}
        <div className="relative overflow-hidden py-6 mb-16 border-y border-white/10 bg-black/40 backdrop-blur-md rounded-2xl">
          {/* Left & Right Fade Gradients */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-slate-900 dark:from-[#0A0D0C] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-slate-900 dark:from-[#0A0D0C] to-transparent z-20 pointer-events-none" />

          <div className="animate-marquee items-center gap-16 text-slate-300 dark:text-white/80">
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 shrink-0 px-6 py-2 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                {logo.svg}
              </div>
            ))}
          </div>
        </div>

        {/* ── MIDDLE SUBHEADER ── */}
        <div className="text-center mb-10">
          <p className="text-xs font-mono font-bold text-[#10E784] tracking-[0.25em] uppercase">
            REGISTERED AND COMPLIANT ACROSS EVERY SAUDI GOVERNMENT AUTHORITY
          </p>
        </div>

        {/* ── ROW 2: BOTTOM INFINITE MARQUEE TICKER (Government Authority Glass Badges) ── */}
        <div className="relative overflow-hidden py-4">
          {/* Left & Right Fade Gradients */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-slate-900 dark:from-[#0A0D0C] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-slate-900 dark:from-[#0A0D0C] to-transparent z-20 pointer-events-none" />

          <div className="animate-marquee-reverse items-center gap-6">
            {[...governmentAuthorities, ...governmentAuthorities, ...governmentAuthorities].map((auth, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-between w-44 h-32 p-4 rounded-2xl bg-white/5 dark:bg-[#101312] border border-white/10 hover:border-[#10E784] hover:shadow-[0_0_25px_rgba(16,231,132,0.25)] transition-all duration-300 shrink-0 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {auth.icon}
                </div>
                <div className="text-center">
                  <span className="block text-xs font-bold text-white group-hover:text-[#10E784] transition-colors">
                    {auth.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
