"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  /** Label nudge in px, so neighbouring cities don't overlap. */
  label?: [number, number];
  anchor?: "start" | "middle" | "end";
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
    sectors: ["Finance & RHQs", "Government", "Technology", "Professional services"],
    help: "Company formation, RHQ licensing, Grade-A office sourcing in Olaya and KAFD, and GRO support from our Riyadh headquarters.",
  },
  {
    id: "jeddah",
    name: "Jeddah",
    coord: [39.17, 21.54],
    label: [-14, 4],
    anchor: "end",
    tagline: "Red Sea commercial gateway",
    sectors: ["Trade & logistics", "Retail", "Hospitality", "Port & shipping"],
    help: "Market entry for trading and logistics businesses, commercial real estate advisory and western-region operations.",
  },
  {
    id: "makkah",
    name: "Makkah",
    coord: [39.83, 21.39],
    label: [16, 14],
    anchor: "start",
    tagline: "Hospitality & pilgrimage economy",
    sectors: ["Hospitality", "Religious tourism", "Real estate", "Food & retail"],
    help: "Residential and hospitality real estate advisory for investors serving the Hajj and Umrah economy.",
  },
  {
    id: "madinah",
    name: "Madinah",
    coord: [39.61, 24.47],
    label: [16, 4],
    anchor: "start",
    tagline: "Pilgrimage, logistics & light industry",
    sectors: ["Hospitality", "Logistics", "Agri-business", "Real estate"],
    help: "Property investment advisory and entity setup for operators serving Madinah's visitor and logistics economy.",
  },
  {
    id: "neom",
    name: "NEOM",
    coord: [35.3, 28.0],
    label: [0, -18],
    tagline: "Giga-project for future industries",
    sectors: ["Renewable energy", "Advanced manufacturing", "Technology", "Tourism"],
    help: "Structuring and licensing for companies supplying or partnering with NEOM and the wider giga-project ecosystem.",
  },
  {
    id: "alula",
    name: "AlUla",
    coord: [37.92, 26.62],
    label: [14, 4],
    anchor: "start",
    tagline: "Heritage, culture & tourism",
    sectors: ["Hospitality", "Culture & heritage", "Eco-tourism", "Events"],
    help: "Market entry and licensing for hospitality, tourism and culture operators in the Kingdom's flagship heritage destination.",
  },
  {
    id: "redsea",
    name: "Red Sea Coast",
    coord: [37.27, 25.02],
    label: [-14, 4],
    anchor: "end",
    tagline: "Luxury tourism development",
    sectors: ["Hospitality", "Marine & leisure", "Construction", "Renewables"],
    help: "Entity setup and supplier licensing for the Red Sea and Amaala tourism developments.",
  },
  {
    id: "kaec",
    name: "KAEC / Rabigh",
    coord: [39.1, 22.39],
    label: [-14, -6],
    anchor: "end",
    tagline: "Industrial & logistics city",
    sectors: ["Manufacturing", "Logistics", "Ports", "Light industry"],
    help: "Industrial licensing and warehousing setup in King Abdullah Economic City and the Rabigh corridor.",
  },
  {
    id: "eastern",
    name: "Eastern Province",
    coord: [50.1, 26.43],
    label: [14, 4],
    anchor: "start",
    tagline: "Energy and industrial heartland",
    sectors: ["Oil & gas services", "Petrochemicals", "Manufacturing", "Industrial logistics"],
    help: "Industrial licensing, entity setup for energy-sector suppliers and operations support across Dammam, Khobar and Jubail.",
  },
  {
    id: "asir",
    name: "Abha / Asir",
    coord: [42.51, 18.22],
    label: [14, 4],
    anchor: "start",
    tagline: "Highland tourism & agriculture",
    sectors: ["Tourism", "Agriculture", "Hospitality", "Events"],
    help: "Licensing and advisory for tourism and agri-business operators in the southern highlands.",
  },
];

const HQ = HUBS[0];
const TOUR_MS = 3800;

export default function SaudiMap() {
  const [activeId, setActiveId] = useState(HUBS[0].id);
  // The map cycles on its own until the visitor interacts, then it stays put.
  const [touring, setTouring] = useState(true);
  const active = HUBS.find((h) => h.id === activeId)!;
  const indexRef = useRef(0);

  useEffect(() => {
    if (!touring) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % HUBS.length;
      setActiveId(HUBS[indexRef.current].id);
    }, TOUR_MS);
    return () => clearInterval(timer);
  }, [touring]);

  const pick = (id: string) => {
    setTouring(false);
    indexRef.current = HUBS.findIndex((h) => h.id === id);
    setActiveId(id);
  };

  const [hqX, hqY] = project(HQ.coord);
  const [ax, ay] = project(active.coord);

  return (
    <section className="bg-[#0A0D0C] text-white py-[var(--space-section-lg)] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-[#10E784] mb-4">Where we work</p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.12] tracking-tight mb-4">
            One Kingdom, ten very different markets.
          </h2>
          <p className="text-[#B9B3A8] text-lg leading-relaxed">
            Select a region to see its sectors and how we help you enter it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <svg
              viewBox="-20 -20 700 550"
              className="w-full h-auto"
              role="group"
              aria-label="Map of Saudi Arabia with the regions Vision Saudi covers"
            >
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

              {/* Route line from the Riyadh HQ to the selected region */}
              {active.id !== HQ.id && (
                <motion.line
                  key={active.id}
                  x1={hqX}
                  y1={hqY}
                  x2={ax}
                  y2={ay}
                  stroke="#10E784"
                  strokeWidth={1.2}
                  strokeDasharray="5 5"
                  opacity={0.65}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              )}

              {HUBS.map((hub, i) => {
                const [x, y] = project(hub.coord);
                const isActive = hub.id === activeId;
                const [lx, ly] = hub.label ?? [0, -16];
                return (
                  <motion.g
                    key={hub.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: 1.1 + i * 0.07 }}
                  >
                    {isActive && <circle cx={x} cy={y} r={15} className="map-pin-pulse" fill="#10E784" opacity={0.3} />}
                    {/* Plain SVG: browsers transition the r attribute in CSS, and animating it
                        through the motion library renders an invalid frame on mount. */}
                    <circle
                      cx={x}
                      cy={y}
                      r={isActive ? 7 : 4.5}
                      fill={isActive ? "#10E784" : "#0A0D0C"}
                      stroke="#10E784"
                      strokeWidth={2}
                      opacity={isActive ? 1 : 0.75}
                      style={{ transition: "r 250ms cubic-bezier(0.16,1,0.3,1), opacity 250ms ease" }}
                    />
                    <text
                      x={x + lx}
                      y={y + ly}
                      textAnchor={hub.anchor ?? "middle"}
                      className={`map-label pointer-events-none font-semibold transition-colors ${
                        isActive ? "fill-white" : "fill-[#8595a5]"
                      }`}
                    >
                      {hub.name}
                    </text>
                    {/* Generous invisible hit area so pins are easy to tap */}
                    <circle
                      cx={x}
                      cy={y}
                      r={22}
                      fill="transparent"
                      role="button"
                      tabIndex={0}
                      aria-label={`${hub.name}: ${hub.tagline}`}
                      aria-pressed={isActive}
                      className="cursor-pointer focus:outline-none focus-visible:stroke-white focus-visible:stroke-2"
                      onMouseEnter={() => pick(hub.id)}
                      onFocus={() => pick(hub.id)}
                      onClick={() => pick(hub.id)}
                    />
                  </motion.g>
                );
              })}
            </svg>
          </div>

          <div className="lg:col-span-5">
            <div aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
                >
                  <div className="flex items-center gap-2 text-[#10E784] mb-3">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-wider">{active.tagline}</span>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-white mb-5">{active.name}</h3>
                  <motion.ul
                    className="flex flex-wrap gap-2 mb-6"
                    initial="hidden"
                    animate="show"
                    variants={{ show: { transition: { staggerChildren: 0.06 } } }}
                  >
                    {active.sectors.map((s) => (
                      <motion.li
                        key={s}
                        variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}
                        className="rounded-full border border-white/15 px-3 py-1 text-xs text-[#D8CCB8]"
                      >
                        {s}
                      </motion.li>
                    ))}
                  </motion.ul>
                  <p className="text-sm text-[#B9B3A8] leading-relaxed">{active.help}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Always available: easier than hitting a pin, and keyboard friendly */}
            <ul className="flex flex-wrap gap-2 mt-4">
              {HUBS.map((hub) => (
                <li key={hub.id}>
                  <button
                    type="button"
                    onClick={() => pick(hub.id)}
                    aria-pressed={hub.id === activeId}
                    className={`min-h-[40px] rounded-full px-3.5 text-xs font-semibold border transition-colors ${
                      hub.id === activeId
                        ? "border-[#10E784] bg-[#10E784]/15 text-white"
                        : "border-white/15 text-[#B9B3A8] hover:border-white/35 hover:text-white"
                    }`}
                  >
                    {hub.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
