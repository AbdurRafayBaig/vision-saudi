export interface PremiumResidencyPathway {
  id: string;
  title: string;
  category: string;
  feeStructure: string;
  duration: string;
  eligibilitySummary: string;
  keyBenefits: string[];
  requirements: string[];
}

export const MASTER_RESIDENCY_PATHWAYS: PremiumResidencyPathway[] = [
  {
    id: "investor-residency",
    title: "Investor Premium Residency",
    category: "Business & Capital Investors",
    feeStructure: "Direct Grant upon SAR 7M+ Qualified Capital Investment",
    duration: "Permanent Premium Residency Status",
    eligibilitySummary: "Investing SAR 7 Million or more in Saudi business entities under MISA regulations and creating at least 10 verified Saudi jobs within 2 years.",
    keyBenefits: [
      "Permanent residency in the Kingdom of Saudi Arabia",
      "Conduct commercial business without a Saudi sponsor",
      "Exemption from expat dependent fees for family members",
      "Own residential & commercial real estate"
    ],
    requirements: [
      "SAR 7,000,000 capital investment proof in KSA company",
      "Commercial Registration (CR) & MISA licence proof",
      "Commitment to create 10 Saudi national jobs",
      "Clean criminal record & medical clearance"
    ]
  },
  {
    id: "real-estate-residency",
    title: "Real Estate Owner Premium Residency",
    category: "Property Investors",
    feeStructure: "Included with Property Ownership",
    duration: "Tied to Real Estate Ownership Duration",
    eligibilitySummary: "Purchasing unencumbered (mortgage-free) Saudi residential real estate valued at SAR 4,000,000 or higher.",
    keyBenefits: [
      "Self-sponsored residency for owner and direct family",
      "Freedom to exit and re-enter KSA without visa approval",
      "Access to private healthcare & educational institutions",
      "Own additional real estate assets"
    ],
    requirements: [
      "Official Real Estate Title Deed valued at SAR 4,000,000+",
      "Property must be unencumbered (free of mortgage/lien)",
      "Property valuation report from certified Saudi valuer (Taqeem)",
      "Clean criminal background check"
    ]
  },
  {
    id: "special-talent-residency",
    title: "Special Talent & Executive Residency",
    category: "Executives, Healthcare, Tech & Research",
    feeStructure: "SAR 4,000 One-Time Fee",
    duration: "5-Year Renewable Status (Route to Permanent)",
    eligibilitySummary: "For C-suite executives, senior healthcare professionals, scientific researchers, and high-tech innovators with proven salary levels.",
    keyBenefits: [
      "Work freely across private sector organizations",
      "Self-sponsored family residency rights",
      "Priority processing for government transactions",
      "Route to Permanent Residency upon meeting tenure"
    ],
    requirements: [
      "Executive employment contract with minimum SAR 85,000/mo salary (Executives)",
      "Specialist talent qualification & professional accreditation",
      "Attested university degrees & professional credentials",
      "Valid Saudi employment or offer letter"
    ]
  },
  {
    id: "entrepreneur-residency",
    title: "Entrepreneur Premium Residency",
    category: "Founders & Venture-Backed Startups",
    feeStructure: "SAR 4,000 One-Time Fee",
    duration: "5-Year Renewable Status",
    eligibilitySummary: "For founders securing recognized venture capital investment (SAR 400,000+) or establishing innovative Saudi startups with MISA approval.",
    keyBenefits: [
      "100% ownership of startup entity",
      "Exemption from Saudization quotas during initial 2 years",
      "Sponsor startup employees and key engineering talent",
      "Access to Saudi venture ecosystem"
    ],
    requirements: [
      "MISA Entrepreneurial License",
      "Minimum SAR 400,000 VC funding proof or SAR 15M investment for Category-2 permanent status",
      "Recommendation letter from accredited incubator or VC fund"
    ]
  }
];
