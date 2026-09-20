"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// Simple equirectangular projection over the Kingdom's bounding box.
const SCALE = 30;
const project = ([lon, lat]: [number, number]) => [(lon - 34) * SCALE, (33 - lat) * SCALE] as const;

// Simplified national border (lon, lat), traced clockwise from the Gulf of Aqaba.
const BORDER: [number, number][] = [
  [34.95, 29.35], [36.5, 29.5], [37.9, 30.5], [37.0, 31.5], [39.2, 32.15], [42.0, 31.1], [44.7, 29.2],
  [46.5, 29.1], [47.7, 28.5], [48.4, 28.0], [49.6, 27.0], [50.1, 26.2], [50.5, 25.4], [50.8, 24.8],
  [51.5, 24.3], [52.6, 22.9], [55.2, 22.7], [55.7, 22.0], [55.0, 20.0], [52.0, 19.0], [49.0, 18.6],
  [46.5, 17.3], [44.2, 17.4], [43.3, 17.3], [42.8, 16.4], [42.6, 16.8], [41.8, 17.9], [40.8, 19.6],
  [39.6, 20.9], [39.1, 21.6], [38.9, 22.6], [38.4, 23.7], [37.5, 24.3], [36.6, 25.8], [35.8, 27.0],
  [35.2, 28.1], [34.6, 28.1],
];
const BORDER_PATH = BORDER.map((p, i) => `${i ? "L" : "M"}${project(p).join(",")}`).join(" ") + " Z";

interface Hub {
  id: string;
  name: string;
  coord: [number, number];
  tagline: string;
  sectors: string[];
  help: string;
}

const HUBS: Hub[] = [
  {
    id: "riyadh",
    name: "Riyadh",
    coord: [46.72, 24.69],
    tagline: "Capital, government & regional headquarters",
    sectors: ["Finance & RHQs", "Government services", "Technology", "Professional services"],
    help: "Company formation, RHQ licensing, Grade-A office sourcing in Olaya and KAFD, and GRO support from our Riyadh headquarters.",
  },
  {
    id: "jeddah",
    name: "Jeddah",
    coord: [39.17, 21.54],
    tagline: "Red Sea commercial gateway",
    sectors: ["Trade & logistics", "Retail", "Hospitality", "Port & shipping"],
    help: "Market entry for trading and logistics businesses, commercial real estate advisory and western-region operations.",
  },
  {
    id: "neom",
    name: "NEOM",
    coord: [35.3, 28.0],
    tagline: "Giga-project for future industries",
    sectors: ["Renewable energy", "Advanced manufacturing", "Technology", "Tourism"],
    help: "Structuring and licensing for companies supplying or partnering with NEOM and the wider giga-project ecosystem.",
  },
  {
    id: "eastern",
    name: "Eastern Province",
    coord: [50.1, 26.43],
    tagline: "Energy and industrial heartland",
    sectors: ["Oil & gas services", "Petrochemicals", "Manufacturing", "Industrial logistics"],
    help: "Industrial licensing, entity setup for energy-sector suppliers and operations support across Dammam, Khobar and Jubail.",
  },
  {
    id: "alula",
    name: "AlUla",
    coord: [37.92, 26.62],
    tagline: "Heritage, culture & tourism",
    sectors: ["Hospitality", "Culture & heritage", "Eco-tourism", "Events"],
    help: "Market entry and licensing for hospitality, tourism and culture operators in the Kingdom's flagship heritage destination.",
  },
];

export default function SaudiMap() {
  const [activeId, setActiveId] = useState(HUBS[0].id);
  const active = HUBS.find((h) => h.id === activeId)!;

  return (
    <section className="bg-[#0A0D0C] text-white py-[var(--space-section-lg)] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-[#10E784] mb-4">Where we work</p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.12] tracking-tight mb-4">
            One Kingdom, five very different markets.
          </h2>
          <p className="text-[#B9B3A8] text-lg leading-relaxed">Select a region to see its sectors and how we help you enter it.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <svg viewBox="-10 -10 680 530" className="w-full h-auto" role="group" aria-label="Map of Saudi Arabia with key business regions">
              <motion.path
                d={BORDER_PATH}
                fill="rgba(16,231,132,0.04)"
                stroke="rgba(16,231,132,0.55)"
                strokeWidth={1.5}
                strokeLinejoin="round"
                initial={{ pathLength: 0, fillOpacity: 0 }}
                whileInView={{ pathLength: 1, fillOpacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ pathLength: { duration: 1.8, ease: "easeInOut" }, fillOpacity: { duration: 0.8, delay: 1.4 } }}
              />
              {HUBS.map((hub, i) => {
                const [x, y] = project(hub.coord);
                const isActive = hub.id === activeId;
                return (
                  <motion.g
                    key={hub.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: 1.2 + i * 0.12 }}
                  >
                    <circle cx={x} cy={y} r={isActive ? 16 : 11} className="map-pin-pulse" fill="#10E784" opacity={0.25} />
                    <circle cx={x} cy={y} r={isActive ? 7 : 5} fill={isActive ? "#10E784" : "#0A0D0C"} stroke="#10E784" strokeWidth={2} />
                    <text
                      x={x}
                      y={y - 16}
                      textAnchor="middle"
                      className={`text-[13px] font-semibold ${isActive ? "fill-white" : "fill-[#94A3B8]"}`}
                    >
                      {hub.name}
                    </text>
                    {/* Generous invisible hit area so pins are easy to tap on phones */}
                    <circle
                      cx={x}
                      cy={y}
                      r={24}
                      fill="transparent"
                      role="button"
                      tabIndex={0}
                      aria-label={`${hub.name}: ${hub.tagline}`}
                      aria-pressed={isActive}
                      className="cursor-pointer focus:outline-none focus-visible:stroke-[#10E784] focus-visible:stroke-2"
                      onMouseEnter={() => setActiveId(hub.id)}
                      onFocus={() => setActiveId(hub.id)}
                      onClick={() => setActiveId(hub.id)}
                    />
                  </motion.g>
                );
              })}
            </svg>
          </div>

          <div className="lg:col-span-5" aria-live="polite">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="flex items-center gap-2 text-[#10E784] mb-3">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-wider">{active.tagline}</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-white mb-5">{active.name}</h3>
              <ul className="flex flex-wrap gap-2 mb-6">
                {active.sectors.map((s) => (
                  <li key={s} className="rounded-full border border-white/15 px-3 py-1 text-xs text-[#D8CCB8]">
                    {s}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[#B9B3A8] leading-relaxed">{active.help}</p>
            </motion.div>

            {/* Keyboard- and phone-friendly alternative to the pins */}
            <div className="flex flex-wrap gap-2 mt-4 lg:hidden">
              {HUBS.map((hub) => (
                <button
                  key={hub.id}
                  type="button"
                  onClick={() => setActiveId(hub.id)}
                  aria-pressed={hub.id === activeId}
                  className={`min-h-[44px] rounded-full px-4 text-xs font-semibold border transition-colors ${
                    hub.id === activeId ? "border-[#10E784] bg-[#10E784]/15 text-white" : "border-white/15 text-[#B9B3A8]"
                  }`}
                >
                  {hub.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
