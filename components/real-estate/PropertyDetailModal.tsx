"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, MapPin, Building, ArrowRight, CheckCircle2, ShieldCheck, Calculator } from "lucide-react";
import { PropertyItem } from "@/data/properties";

interface PropertyDetailModalProps {
  property: PropertyItem | null;
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: (propertyTitle: string) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  isOpen,
  onClose,
  onBookConsultation,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showYieldCalculator, setShowYieldCalculator] = useState(false);
  const [investmentAmount, setInvestmentAmount] = useState(2500000);

  if (!isOpen || !property) return null;

  const activeImage = property.gallery[selectedImageIndex] || property.image;
  const estimatedAnnualYield = (investmentAmount * (property.yieldNumeric / 100)).toLocaleString("en-US", {
    maximumFractionDigits: 0,
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-10">
    {/* Backdrop */}
    <div
      onClick={onClose}
      className="anim-fade-in fixed inset-0 bg-black/85 backdrop-blur-xl"
    />

    {/* Modal Window */}
    <div
      className="anim-scale-in relative w-full max-w-5xl bg-[#0E1211] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto text-white transition-colors duration-300"
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121615]">
        <div className="flex items-center gap-2 text-xs text-[#A39B8B] tracking-wider uppercase">
          <button onClick={onClose} className="inline-block py-3 -my-3 hover:text-[#10E784] transition-colors">
            Properties
          </button>
          <span>/</span>
          <span className="text-[#10E784] font-bold truncate max-w-[250px] sm:max-w-none">
            {property.title}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Modal Content */}
      <div className="p-6 sm:p-8 lg:p-10 max-h-[82vh] overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Image Gallery & Description */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Main Hero Image */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/15 bg-black">
              <Image
                src={activeImage}
                alt={property.title}
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />

              {/* The listings are real; these photographs stand in for them. */}
              <span className="absolute bottom-3 right-3 z-10 rounded bg-[#0A0D0C]/80 px-2.5 py-1 text-xs text-[#D8CCB8] backdrop-blur-md">
                Indicative image
              </span>

              {/* Status Badge */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {property.featured && (
                  <span className="px-3 py-1 bg-slate-950/80 border border-[#10E784]/50 text-[#10E784] text-xs font-bold uppercase tracking-wider rounded-md backdrop-blur-md">
                    FEATURED
                  </span>
                )}
                <span className="px-3 py-1 bg-slate-950/80 border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-md backdrop-blur-md">
                  {property.status}
                </span>
              </div>
            </div>

            {/* Thumbnails Gallery */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {property.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative aspect-[4/3] rounded-xl overflow-hidden border transition-all ${
                    selectedImageIndex === idx
                      ? "border-[#10E784] ring-2 ring-[#10E784]/40"
                      : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={imgUrl}
                    alt={`${property.title} preview ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="15vw"
                  />
                </button>
              ))}
            </div>

            {/* Description & Overview */}
            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-display font-bold text-white">Property Overview</h3>
              <p className="text-sm text-[#A39B8B] leading-relaxed font-light">
                {property.description}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#10E784]">
                Key Property Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 bg-white/[0.03] border border-white/10 rounded-xl text-xs text-[#E2D9C8]">
                    <CheckCircle2 className="h-4 w-4 text-[#10E784] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Pricing, Specs & Actions */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Property Header Info */}
            <div className="bg-[#141817] border border-white/15 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-medium text-[#10E784]">
                <MapPin className="h-3.5 w-3.5" />
                <span>{property.location}</span>
                <span>·</span>
                <Building className="h-3.5 w-3.5" />
                <span>{property.type}</span>
              </div>

              <h2 className="text-2xl font-display font-bold text-white">
                {property.title}
              </h2>

              <div className="pt-2 border-t border-white/10 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-[#A39B8B] uppercase block mb-1">Indicative Price</span>
                  <span className="text-xl font-bold text-[#10E784] font-mono">{property.price}</span>
                </div>
                {property.yieldNumeric > 0 && (
                  <div className="text-right">
                    <span className="text-xs text-[#A39B8B] uppercase block mb-1">Est. Rental Yield</span>
                    <span className="text-base font-bold text-[#10E784] font-mono">~{property.yieldNumeric}% p.a.</span>
                  </div>
                )}
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-3 pt-3">
                {property.propertyArea && (
                  <div className="p-3 bg-white/[0.04] rounded-xl border border-white/5 shadow-sm">
                    <span className="text-xs text-[#A39B8B] uppercase block">Property Area</span>
                    <span className="text-sm font-bold text-white font-mono">{property.propertyArea}</span>
                  </div>
                )}
                {property.buildingArea && (
                  <div className="p-3 bg-white/[0.04] rounded-xl border border-white/5 shadow-sm">
                    <span className="text-xs text-[#A39B8B] uppercase block">Building Area</span>
                    <span className="text-sm font-bold text-white font-mono">{property.buildingArea}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Take This Further Card */}
            <div className="bg-[#141817] border border-white/15 rounded-2xl p-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#A39B8B] block">
                Take This Further
              </span>

              <button
                onClick={() => {
                  onClose();
                  onBookConsultation(property.title);
                }}
                className="w-full py-3.5 px-5 rounded-xl bg-[#10E784] hover:bg-[#0be07b] text-slate-950 text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#10E784]/20 cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => setShowYieldCalculator(!showYieldCalculator)}
                className="w-full py-3 px-5 rounded-xl bg-white/[0.05] hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/15 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calculator className="h-4 w-4 text-[#10E784]" />
                <span>{showYieldCalculator ? "Hide Return Model" : "Model My Returns"}</span>
              </button>

              <p className="text-xs text-[#A39B8B] leading-relaxed font-light">
                Details are indicative and confirmed case by case with specialist partners. Availability, pricing and specification are established directly as part of the opportunity assessment.
              </p>
            </div>

            {/* Interactive Yield Calculator */}
            {showYieldCalculator && (
              <div
                className="anim-rise-in bg-[#161B1A] border border-[#10E784]/40 rounded-2xl p-5 space-y-3 shadow-md"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#10E784]">
                  <span className="font-bold">INVESTMENT RETURN MODEL</span>
                  <span>{property.yieldNumeric}% Est. Yield</span>
                </div>

                <div>
                  <label className="text-xs text-[#A39B8B] block mb-1">Capital Deployment (SAR)</label>
                  <input
                    type="range"
                    min="500000"
                    max="20000000"
                    step="250000"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    className="w-full accent-[#10E784] bg-white/10 rounded-lg cursor-pointer h-2"
                  />
                  <div className="flex justify-between text-xs font-mono text-white mt-1">
                    <span>SAR {investmentAmount.toLocaleString()}</span>
                    <span className="text-[#10E784] font-bold">+SAR {estimatedAnnualYield} / yr</span>
                  </div>
                </div>
              </div>
            )}

            {/* Legal Guidance Card */}
            <div className="bg-[#141817] border border-white/15 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#10E784] font-bold uppercase">
                <ShieldCheck className="h-4 w-4 text-[#10E784]" />
                <span>Get Legal Guidance</span>
              </div>
              <p className="text-xs text-[#A39B8B] leading-relaxed font-light">
                The purchase process, rules that decide eligibility and the authorities a transaction passes through: set out before you commit to anything. REGA legal verification guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
