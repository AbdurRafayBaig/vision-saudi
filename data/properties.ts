export interface PropertyItem {
  id: string;
  title: string;
  location: "Riyadh" | "Jeddah" | "Makkah" | "Medina" | "Dhahran";
  type: "Apartment" | "Commercial" | "Residential" | "Villa";
  status: "AVAILABLE" | "AVAILABLE FOR SALE" | "COMING SOON" | "SOLD OUT";
  price: string;
  priceNumeric: number; // for filtering (0 = on request or high)
  yieldNumeric: number; // percentage (e.g. 8.5)
  propertyArea?: string;
  buildingArea?: string;
  featured?: boolean;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
}

export const MASTER_PROPERTIES: PropertyItem[] = [
  {
    id: "alsoliman-business-compound",
    title: "Alsoliman Business Compound",
    location: "Riyadh",
    type: "Commercial",
    status: "AVAILABLE",
    price: "On request",
    priceNumeric: 12000000,
    yieldNumeric: 9.2,
    propertyArea: "12,500 m²",
    buildingArea: "28,000 m²",
    featured: true,
    image: "/images/properties/saudi_commercial_tower_1_1789299197392.png",
    gallery: [
      "/images/properties/saudi_commercial_tower_1_1789299197392.png",
      "/images/hero-riyadh.png",
      "/images/service-realestate.png",
    ],
    description: "Grade-A corporate office compound located in prime Olaya commercial corridor. Designed for international enterprise headquarters with full MISA & Ministry compliance.",
    highlights: ["Grade-A Commercial Space", "MISA & Balady Lease Attestation", "Underground Executive Parking", "24/7 Security & Facility Operations"]
  },
  {
    id: "bluedar-compound",
    title: "BlueDar Compound",
    location: "Riyadh",
    type: "Apartment",
    status: "AVAILABLE FOR SALE",
    price: "From SAR 965,000",
    priceNumeric: 965000,
    yieldNumeric: 8.4,
    propertyArea: "145 m²",
    buildingArea: "185 m²",
    featured: true,
    image: "/images/properties/saudi_luxury_compound_1_1789299138290.png",
    gallery: [
      "/images/properties/saudi_luxury_compound_1_1789299138290.png",
      "/images/properties/sheet_0_0.jpg",
      "/images/properties/sheet_0_1.jpg",
    ],
    description: "Modern luxury apartment compound situated in North Riyadh, featuring private balconies, smart home systems, and resort-style amenities.",
    highlights: ["High Rental Yield Corridor", "Smart Home Automation", "Resort Pool & Gym Facilities", "Premium Residency Qualification Eligible"]
  },
  {
    id: "arees-compound",
    title: "Arees Compound",
    location: "Riyadh",
    type: "Apartment",
    status: "AVAILABLE FOR SALE",
    price: "From SAR 975,000",
    priceNumeric: 975000,
    yieldNumeric: 8.1,
    propertyArea: "150 m²",
    buildingArea: "190 m²",
    featured: true,
    image: "/images/properties/sheet_0_0.jpg",
    gallery: [
      "/images/properties/sheet_0_0.jpg",
      "/images/properties/saudi_luxury_compound_1_1789299138290.png",
      "/images/properties/sheet_0_1.jpg",
    ],
    description: "Contemporary residential compound offering modern executive apartments with dedicated parking and lush landscaped courtyards.",
    highlights: ["Olaya & KAFD Proximity", "Turnkey Luxury Fit-Out", "High Appreciation Potential", "REGA Title Deed Verified"]
  },
  {
    id: "sakenah-residence",
    title: "Sakenah Residence",
    location: "Riyadh",
    type: "Apartment",
    status: "AVAILABLE FOR SALE",
    price: "On request",
    priceNumeric: 1450000,
    yieldNumeric: 7.8,
    propertyArea: "170 m²",
    buildingArea: "210 m²",
    featured: false,
    image: "/images/properties/sheet_0_1.jpg",
    gallery: [
      "/images/properties/sheet_0_1.jpg",
      "/images/properties/sheet_0_0.jpg",
      "/images/properties/sheet_0_2.jpg",
    ],
    description: "Exclusive residential residence in Al Narjis district, featuring 3-bedroom luxury layouts tailored for foreign executives and high-yield investors.",
    highlights: ["170 m² Spacious Layout", "Al Narjis District", "High Corporate Tenant Demand", "REGA Compliant Leasing"]
  },
  {
    id: "sakenah-compound-makkah",
    title: "Sakenah Compound, Makkah",
    location: "Makkah",
    type: "Apartment",
    status: "AVAILABLE FOR SALE",
    price: "On request",
    priceNumeric: 2100000,
    yieldNumeric: 10.5,
    propertyArea: "180 m²",
    buildingArea: "220 m²",
    featured: false,
    image: "/images/properties/sheet_0_2.jpg",
    gallery: [
      "/images/properties/sheet_0_2.jpg",
      "/images/properties/sheet_0_3.jpg",
      "/images/properties/sheet_1_0.jpg",
    ],
    description: "Strategic investment property near Makkah Central Zone, offering high seasonal rental returns during Umrah and Hajj periods.",
    highlights: ["Makkah Central Corridor", "High Hospitality Rental Yield", "Specialized Leasehold Structure", "Full Property Management"]
  },
  {
    id: "lawnda-village",
    title: "Lawnda Village",
    location: "Riyadh",
    type: "Residential",
    status: "COMING SOON",
    price: "On request",
    priceNumeric: 3200000,
    yieldNumeric: 7.5,
    propertyArea: "320 m²",
    buildingArea: "450 m²",
    featured: false,
    image: "/images/properties/sheet_0_3.jpg",
    gallery: [
      "/images/properties/sheet_0_3.jpg",
      "/images/properties/sheet_1_0.jpg",
      "/images/properties/saudi_luxury_villas_1_1789299253981.png",
    ],
    description: "Upcoming master-planned residential community featuring modern luxury townhouses and community retail plazas.",
    highlights: ["Master-Planned Gated Community", "Pre-Launch Priority Allocation", "Diriyah Gate Corridor", "Green Building Standard"]
  },
  {
    id: "alsoliman-elite-plan",
    title: "Alsoliman Elite Plan",
    location: "Riyadh",
    type: "Residential",
    status: "AVAILABLE",
    price: "On request",
    priceNumeric: 25000000,
    yieldNumeric: 9.0,
    propertyArea: "533,237 m²",
    buildingArea: "On request",
    featured: false,
    image: "/images/properties/sheet_1_0.jpg",
    gallery: [
      "/images/properties/sheet_1_0.jpg",
      "/images/properties/sheet_1_1.jpg",
      "/images/service-realestate.png",
    ],
    description: "Prime urban land master plan parcel suitable for major residential subdivision, mixed-use commercial hubs, and giga-project expansion.",
    highlights: ["533,237 m² Land Parcel", "Strategic Urban Expansion Zone", "Infrastructure Ready", "Institutional Partner Advisory"]
  },
  {
    id: "yamam-village",
    title: "Yamam Village",
    location: "Riyadh",
    type: "Villa",
    status: "AVAILABLE",
    price: "On request",
    priceNumeric: 3800000,
    yieldNumeric: 7.2,
    propertyArea: "400 m²",
    buildingArea: "520 m²",
    featured: false,
    image: "/images/properties/sheet_1_1.jpg",
    gallery: [
      "/images/properties/sheet_1_1.jpg",
      "/images/properties/saudi_luxury_villas_1_1789299253981.png",
      "/images/properties/sheet_1_2.jpg",
    ],
    description: "High-end standalone luxury villa development with private swimming pool, internal elevator, and rooftop entertainment terrace.",
    highlights: ["Standalone Luxury Villa", "Private Pool & Elevator", "Al Yasmin District", "Freehold Ownership Structure"]
  },
  {
    id: "bader-villas",
    title: "Bader Villas",
    location: "Riyadh",
    type: "Villa",
    status: "AVAILABLE",
    price: "On request",
    priceNumeric: 2950000,
    yieldNumeric: 7.6,
    propertyArea: "350 m²",
    buildingArea: "420 m²",
    featured: false,
    image: "/images/properties/saudi_luxury_villas_1_1789299253981.png",
    gallery: [
      "/images/properties/saudi_luxury_villas_1_1789299253981.png",
      "/images/properties/sheet_1_1.jpg",
      "/images/properties/sheet_1_2.jpg",
    ],
    description: "Contemporary villa collection featuring sleek modern stone facades, double-height ceilings, and energy-efficient climate design.",
    highlights: ["350 m² Plot Area", "Double-Height Ceilings", "Smart Climate Automation", "SAR 4M Premium Residency Eligible"]
  },
  {
    id: "alrahbah-villas",
    title: "Alrahbah Villas",
    location: "Riyadh",
    type: "Villa",
    status: "SOLD OUT",
    price: "On request",
    priceNumeric: 3100000,
    yieldNumeric: 8.0,
    propertyArea: "433 m²",
    buildingArea: "560 m²",
    featured: false,
    image: "/images/properties/sheet_1_2.jpg",
    gallery: [
      "/images/properties/sheet_1_2.jpg",
      "/images/properties/sheet_1_3.jpg",
      "/images/properties/saudi_luxury_villas_1_1789299253981.png",
    ],
    description: "Fully sold out luxury villa project recognized for its exceptional building quality, generous floor plans, and strong capital growth.",
    highlights: ["Fully Sold Out Project", "100% Occupancy Track Record", "433 m² Land Footprint", "Verified Benchmark Asset"]
  },
  {
    id: "adwar-villas",
    title: "Adwar Villas",
    location: "Riyadh",
    type: "Villa",
    status: "SOLD OUT",
    price: "On request",
    priceNumeric: 2400000,
    yieldNumeric: 7.9,
    propertyArea: "275 m²",
    buildingArea: "340 m²",
    featured: false,
    image: "/images/properties/sheet_1_3.jpg",
    gallery: [
      "/images/properties/sheet_1_3.jpg",
      "/images/service-residency.png",
      "/images/properties/sheet_1_2.jpg",
    ],
    description: "Popular duplex villa development offering efficient luxury living for modern families and private rental portfolios.",
    highlights: ["Sold Out Portfolio", "275 m² Plot Size", "High Secondary Market Value", "REGA Title Attestation"]
  },
  {
    id: "masken-alnokhbah-villas",
    title: "Masken Alnokhbah Villas",
    location: "Riyadh",
    type: "Villa",
    status: "SOLD OUT",
    price: "On request",
    priceNumeric: 3600000,
    yieldNumeric: 8.2,
    propertyArea: "380 m²",
    buildingArea: "480 m²",
    featured: false,
    image: "/images/service-residency.png",
    gallery: [
      "/images/service-residency.png",
      "/images/properties/saudi_luxury_villas_1_1789299253981.png",
      "/images/properties/sheet_1_1.jpg",
    ],
    description: "Gated community of luxury villas delivered with ultra-premium finishing, smart home integration, and private security.",
    highlights: ["Sold Out Luxury Community", "Private Security Gated", "Smart Home Standard", "High Yield Historic Return"]
  },
  {
    id: "sakenah-compound-medina",
    title: "Sakenah Compound, Medina",
    location: "Medina",
    type: "Apartment",
    status: "SOLD OUT",
    price: "On request",
    priceNumeric: 1950000,
    yieldNumeric: 9.8,
    propertyArea: "165 m²",
    buildingArea: "195 m²",
    featured: false,
    image: "/images/service-experience.png",
    gallery: [
      "/images/service-experience.png",
      "/images/properties/sheet_0_2.jpg",
      "/images/partners-header.png",
    ],
    description: "Completed residential compound in Al-Madinah Al-Munawwarah catering to pilgrimage visitors and corporate hospitality tenants.",
    highlights: ["Medina Holy City Location", "Sold Out Hospitality Asset", "High Seasonal Rental Yields", "Regulatory Advisory Portfolio"]
  },
  {
    id: "marbella-compound",
    title: "Marbella Compound",
    location: "Dhahran",
    type: "Apartment",
    status: "SOLD OUT",
    price: "On request",
    priceNumeric: 1850000,
    yieldNumeric: 8.8,
    propertyArea: "160 m²",
    buildingArea: "190 m²",
    featured: false,
    image: "/images/partners-header.png",
    gallery: [
      "/images/partners-header.png",
      "/images/properties/saudi_luxury_compound_1_1789299138290.png",
      "/images/properties/sheet_0_0.jpg",
    ],
    description: "Western-style executive compound in Dhahran Eastern Province, built to international housing standards for energy & tech executives.",
    highlights: ["Dhahran Eastern Province", "Sold Out Executive Compound", "Aramco & Energy Corridor", "Premium Facility Operations"]
  }
];
