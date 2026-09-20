"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { MapPin, Building, RotateCcw, SlidersHorizontal, Bookmark, BookmarkCheck } from "lucide-react";
import { MASTER_PROPERTIES, PropertyItem } from "@/data/properties";
import { PropertyDetailModal } from "./PropertyDetailModal";
import { ShortlistBar } from "./ShortlistBar";
import { useShortlist } from "@/lib/useShortlist";

interface PropertyShowcaseProps {
  onBookConsultation: (propertyTitle: string) => void;
}

export const PropertyShowcase: React.FC<PropertyShowcaseProps> = ({ onBookConsultation }) => {
  const [selectedLocation, setSelectedLocation] = useState<string>("ALL");
  const [selectedType, setSelectedType] = useState<string>("ALL");
  const [selectedStatus, setSelectedStatus] = useState<string>("ALL");
  const [maxPrice, setMaxPrice] = useState<number>(10000000);
  const [minYield, setMinYield] = useState<number>(0);
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(null);
  const shortlist = useShortlist();

  const locations = ["ALL LOCATIONS", "DHAHRAN", "MAKKAH", "MEDINA", "RIYADH"];
  const types = ["ALL TYPES", "APARTMENT", "COMMERCIAL", "RESIDENTIAL", "VILLA"];
  const statuses = ["ALL", "AVAILABLE", "AVAILABLE FOR SALE", "COMING SOON", "SOLD OUT"];

  const filteredProperties = useMemo(() => {
    return MASTER_PROPERTIES.filter((prop) => {
      // Location filter
      if (selectedLocation !== "ALL" && selectedLocation !== "ALL LOCATIONS") {
        if (prop.location.toUpperCase() !== selectedLocation) return false;
      }

      // Type filter
      if (selectedType !== "ALL" && selectedType !== "ALL TYPES") {
        if (prop.type.toUpperCase() !== selectedType) return false;
      }

      // Status filter
      if (selectedStatus !== "ALL") {
        if (prop.status !== selectedStatus) return false;
      }

      // Max price filter (if numeric > 0 and maxPrice < 10M)
      if (maxPrice < 10000000 && prop.priceNumeric > 0) {
        if (prop.priceNumeric > maxPrice) return false;
      }

      // Min yield filter
      if (minYield > 0 && prop.yieldNumeric > 0) {
        if (prop.yieldNumeric < minYield) return false;
      }

      return true;
    });
  }, [selectedLocation, selectedType, selectedStatus, maxPrice, minYield]);

  const resetFilters = () => {
    setSelectedLocation("ALL");
    setSelectedType("ALL");
    setSelectedStatus("ALL");
    setMaxPrice(10000000);
    setMinYield(0);
  };

  return (
    <section id="properties-showcase" className="py-16 bg-[#0A0D0C] text-white relative transition-colors duration-400">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#10E784] text-xs uppercase tracking-widest mb-3 font-bold">
            Real Estate Portfolio
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4 heading-gradient-light-to-dark">
            Properties
          </h2>
          <p className="text-[#94A3B8] text-base leading-relaxed font-light">
            Residential, commercial and investment opportunities across the Kingdom, assessed with specialist partners.
          </p>
        </div>

        {/* Layout Grid: Left Sidebar Filters + Right Property Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Sidebar: Filter Panel */}
          <div className="lg:col-span-3 bg-[#101312] border border-white/15 rounded-3xl p-6 shadow-2xl space-y-6 sticky top-28 text-white">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold text-[#10E784] uppercase tracking-wider">
                <SlidersHorizontal className="h-4 w-4 text-[#10E784]" />
                <span>FILTER PROPERTIES</span>
              </div>
              <button
                onClick={resetFilters}
                className="py-3 -my-3 ps-3 -ms-3 text-xs font-mono text-[#94A3B8] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="h-3 w-3" />
                <span>RESET</span>
              </button>
            </div>

            {/* LOCATION FILTER */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider block">
                LOCATION
              </span>
              <div className="space-y-1.5 max-h-48 overflow-y-auto pe-1">
                {locations.map((loc) => {
                  const locKey = loc === "ALL LOCATIONS" ? "ALL" : loc;
                  const isSelected = selectedLocation === locKey || (selectedLocation === "ALL" && loc === "ALL LOCATIONS");
                  return (
                    <button
                      key={loc}
                      onClick={() => setSelectedLocation(locKey)}
                      className={`w-full text-start px-3.5 min-h-[44px] flex items-center rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-[#10E784]/20 text-[#10E784] border border-[#10E784] font-semibold shadow-sm"
                          : "bg-white/[0.03] text-[#94A3B8] hover:bg-white/[0.08] hover:text-white border border-white/5"
                      }`}
                    >
                      {loc}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* PROPERTY TYPE FILTER */}
            <div className="space-y-2.5 pt-2 border-t border-white/10">
              <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider block">
                PROPERTY TYPE
              </span>
              <div className="space-y-1.5">
                {types.map((type) => {
                  const typeKey = type === "ALL TYPES" ? "ALL" : type;
                  const isSelected = selectedType === typeKey || (selectedType === "ALL" && type === "ALL TYPES");
                  return (
                    <button
                      key={type}
                      onClick={() => setSelectedType(typeKey)}
                      className={`w-full text-start px-3.5 min-h-[44px] flex items-center rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-[#10E784]/20 text-[#10E784] border border-[#10E784] font-semibold shadow-sm"
                          : "bg-white/[0.03] text-[#94A3B8] hover:bg-white/[0.08] hover:text-white border border-white/5"
                      }`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STATUS FILTER */}
            <div className="space-y-2.5 pt-2 border-t border-white/10">
              <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider block">
                STATUS
              </span>
              <div className="space-y-1.5">
                {statuses.map((st) => {
                  const isSelected = selectedStatus === st;
                  return (
                    <button
                      key={st}
                      onClick={() => setSelectedStatus(st)}
                      className={`w-full text-start px-3.5 min-h-[44px] flex items-center rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-[#10E784]/20 text-[#10E784] border border-[#10E784] font-semibold shadow-sm"
                          : "bg-white/[0.03] text-[#94A3B8] hover:bg-white/[0.08] hover:text-white border border-white/5"
                      }`}
                    >
                      {st}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* MAX PRICE SLIDER */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#94A3B8] font-bold">MAX PRICE</span>
                <span className="text-[#10E784] font-semibold">
                  {maxPrice >= 10000000 ? "SAR 10,000,000+" : `SAR ${maxPrice.toLocaleString()}`}
                </span>
              </div>
              <input
                type="range"
                min="500000"
                max="10000000"
                step="500000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="range-touch w-full accent-[#10E784] cursor-pointer"
              />
              <div className="flex justify-between text-xs font-mono text-[#94A3B8]">
                <span>SAR 0</span>
                <span>SAR 10,000,000+</span>
              </div>
            </div>

            {/* MIN YIELD SLIDER */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#94A3B8] font-bold">MIN YIELD</span>
                <span className="text-[#10E784] font-semibold">{minYield}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="12"
                step="1"
                value={minYield}
                onChange={(e) => setMinYield(Number(e.target.value))}
                className="range-touch w-full accent-[#10E784] cursor-pointer"
              />
              <div className="flex justify-between text-xs font-mono text-[#94A3B8]">
                <span>0%</span>
                <span>12%</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-normal font-light">
                Price and yield narrow the list where a figure has been confirmed.
              </p>
            </div>
          </div>

          {/* Right Main Grid: Property Cards */}
          <div className="lg:col-span-9 space-y-6">
            {/* Counter Header */}
            <div className="flex items-center justify-between px-2">
              <span className="text-xs text-[#10E784] uppercase tracking-wider font-bold">
                SHOWING <strong className="text-white font-bold">{filteredProperties.length}</strong> OF {MASTER_PROPERTIES.length} PROPERTIES
              </span>

              {filteredProperties.length < MASTER_PROPERTIES.length && (
                <button
                  onClick={resetFilters}
                  className="inline-block py-3 -my-3 text-xs font-mono text-[#10E784] hover:underline"
                >
                  Show All Properties
                </button>
              )}
            </div>

            {/* Properties Cards Grid */}
            {filteredProperties.length === 0 ? (
              <div className="p-12 text-center bg-[#101312] border border-white/10 rounded-3xl space-y-4 shadow-md">
                <p className="text-white text-lg font-display font-medium">No properties match your active filter criteria.</p>
                <p className="text-[#94A3B8] text-sm font-light">Try expanding your price range, location, or yield filters.</p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 rounded-full btn-neon-green text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <div
                    key={property.id}
                    onClick={() => setSelectedProperty(property)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View details for ${property.title}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedProperty(property);
                      }
                    }}
                    className="anim-rise-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10E784] group bg-[#101312] border border-white/15 rounded-3xl overflow-hidden hover:border-[#10E784] hover:shadow-2xl hover:shadow-[#10E784]/20 transition-all duration-300 flex flex-col justify-between cursor-pointer text-white"
                  >
                    {/* Card Image Header */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* The listings are real; these photographs stand in for them. */}
                      <span className="absolute bottom-2 end-2 z-10 rounded bg-[#0A0D0C]/80 px-2 py-1 text-xs text-[#D8CCB8] backdrop-blur-md">
                        Indicative image
                      </span>

                      {/* Shortlist toggle. stopPropagation: the whole card opens the
                          detail modal, and saving is not opening. */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          shortlist.toggle(property.id);
                        }}
                        aria-pressed={shortlist.has(property.id)}
                        aria-label={
                          shortlist.has(property.id)
                            ? `Remove ${property.title} from your shortlist`
                            : `Save ${property.title} to your shortlist`
                        }
                        className={`absolute top-3 end-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition-colors ${
                          shortlist.has(property.id)
                            ? "border-[#10E784] bg-[#10E784]/20 text-[#10E784]"
                            : "border-white/20 bg-[#0A0D0C]/70 text-white hover:border-[#10E784] hover:text-[#10E784]"
                        }`}
                      >
                        {shortlist.has(property.id) ? (
                          <BookmarkCheck className="h-5 w-5" aria-hidden="true" />
                        ) : (
                          <Bookmark className="h-5 w-5" aria-hidden="true" />
                        )}
                      </button>

                      {/* Badges */}
                      {/* right-16 keeps the badges clear of the save button: a long
                          status ("AVAILABLE FOR SALE") otherwise runs under it and
                          takes the click. */}
                      <div className="absolute top-3 start-3 end-16 flex flex-wrap gap-1.5 z-10">
                        {property.featured && (
                          <span className="px-2.5 py-1 bg-[#0A0D0C]/85 border border-[#10E784]/60 text-[#10E784] text-xs font-bold uppercase tracking-wider rounded backdrop-blur-md">
                            FEATURED
                          </span>
                        )}
                        <span className="px-2.5 py-1 bg-[#101312]/85 border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded backdrop-blur-md">
                          {property.status}
                        </span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="text-lg font-display font-bold text-white group-hover:text-[#10E784] transition-colors mb-1.5">
                          {property.title}
                        </h3>

                        <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-[#10E784]" />
                            {property.location}
                          </span>
                          <span>·</span>
                          <span className="flex items-center gap-1">
                            <Building className="h-3 w-3 text-[#10E784]" />
                            {property.type}
                          </span>
                        </div>
                      </div>

                      {/* Pricing & Area Metrics */}
                      <div className="pt-4 border-t border-white/10 space-y-3">
                        <div>
                          <span className="text-xs text-[#A39B8B] uppercase block">PRICE</span>
                          <span className="text-sm font-bold font-mono text-[#10E784]">{property.price}</span>
                        </div>

                        {(property.propertyArea || property.buildingArea) && (
                          <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#A39B8B] pt-1">
                            <div>
                              <span className="block uppercase text-white/50">PROPERTY AREA</span>
                              <span className="text-white font-medium">{property.propertyArea || "On request"}</span>
                            </div>
                            <div>
                              <span className="block uppercase text-white/50">BUILDING AREA</span>
                              <span className="text-white font-medium">{property.buildingArea || "On request"}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Property Detail Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        isOpen={!!selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onBookConsultation={onBookConsultation}
      />

      <ShortlistBar />
    </section>
  );
};
