export interface PropertyCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  locations: string[];
  keyHighlights: string[];
  investmentModel: string;
}

export const MASTER_REAL_ESTATE_CATEGORIES: PropertyCategory[] = [
  {
    id: "commercial-hq",
    title: "Commercial HQ & Office Premises",
    tagline: "Grade-A office space in Saudi economic centers.",
    description: "Sourcing corporate headquarters, commercial floors, and flagship retail premises across KAFD, Olaya, and King Fahd Road in Riyadh.",
    locations: ["Riyadh (KAFD, Olaya, Digital City)", "Jeddah (Corniche, Al-Shati)", "Eastern Province (Dhahran, Khobar)"],
    keyHighlights: [
      "Balady Commercial Lease Attestation",
      "Headquarters Zoning & Space Audits",
      "Lease Attestation & Municipal Licensing Coordination"
    ],
    investmentModel: "Commercial Lease & Asset Acquisition"
  },
  {
    id: "residential-investments",
    title: "High-Yield Residential Portfolios",
    tagline: "Off-plan and completed luxury residences.",
    description: "Data-driven property selection focusing on high-growth urban developments, luxury residential towers, and gated compounds.",
    locations: ["Riyadh North (Sedra, Al Narjis, Diriyah)", "Jeddah Waterfront", "Khobar Marina"],
    keyHighlights: [
      "Projected Rental Scenario Analysis",
      "Qualifies for SAR 4M+ Real Estate Premium Residency",
      "Foreign Ownership Legal Structuring"
    ],
    investmentModel: "Freehold Ownership & Rental Portfolio"
  },
  {
    id: "holy-cities",
    title: "Makkah & Madinah Property Advisory",
    tagline: "Specialized holy city real estate frameworks.",
    description: "Navigating leasehold opportunities, hotel developments, and commercial property in Makkah Al-Mukarramah and Al-Madinah Al-Munawwarah.",
    locations: ["Makkah Central Area", "Madinah Central Zone"],
    keyHighlights: [
      "Specialized Leasehold & Regulatory Advisory",
      "Hospitality & Commercial Opportunities",
      "Local Regulatory Compliance Audits"
    ],
    investmentModel: "Long-Term Leasehold & Hospitality Advisory"
  }
];
