export interface EcosystemVector {
  id: string;
  name: string;
  category: 'CORPORATE' | 'FINANCE' | 'TECHNOLOGY' | 'COMMUNICATIONS' | 'REAL ESTATE' | 'PARTNERSHIPS';
  headline: string;
  description: string;
  capabilities: string[];
  partnerHighlight?: string;
  iconName: string;
}

export const MASTER_ECOSYSTEM_VECTORS: EcosystemVector[] = [
  {
    id: "corporate",
    name: "Corporate & Advisory",
    category: "CORPORATE",
    headline: "Formation, licensing, government relations, and ongoing compliance.",
    description: "The baseline layer that ensures your Saudi legal entity remains in good standing with MISA, Ministry of Commerce, Balady, and HRSD.",
    capabilities: [
      "MISA & Commercial Registration (CR) Filings",
      "Government Relations & GRO Liaison",
      "Saudization & Qiwa Portal Compliance",
      "Annual Regulatory Renewals"
    ],
    partnerHighlight: "In-house bilingual Saudi GRO & legal advisory team",
    iconName: "Building2"
  },
  {
    id: "finance",
    name: "Finance & Tax Infrastructure",
    category: "FINANCE",
    headline: "Banking support, ZATCA e-invoicing, accounting, and payroll.",
    description: "Financial administration framework connecting corporate bank account opening with Saudi ZATCA e-invoicing compliance and GOSI payroll.",
    capabilities: [
      "Tier-1 Corporate Banking Opening Facilitation",
      "ZATCA E-Invoicing (Fatoora) Integration",
      "Wages Protection System (WPS) Execution",
      "Corporate Income Tax & VAT Coordination"
    ],
    partnerHighlight: "Saudi chartered accounting & banking liaisons",
    iconName: "Landmark"
  },
  {
    id: "technology",
    name: "Technology & ERP",
    category: "TECHNOLOGY",
    headline: "Enterprise ERP, CRM, custom software, and AI workflows.",
    description: "Scalable digital architecture tailored for Saudi business requirements, powered by strategic delivery partner SLNEE.",
    capabilities: [
      "Localized Enterprise ERP Systems",
      "Automated HR & Payroll Workflows",
      "Custom Software & Client Portals",
      "AI-Enabled Compliance & Document Processing"
    ],
    partnerHighlight: "SLNEE — Strategic Technology & Delivery Partner",
    iconName: "Cpu"
  },
  {
    id: "communications",
    name: "Communications & Digital Infrastructure",
    category: "COMMUNICATIONS",
    headline: "Corporate email, SamMail, cloud infrastructure, and domains.",
    description: "Secure digital communications and localized cloud infrastructure designed for Saudi data sovereignty.",
    capabilities: [
      "SamMail Corporate Communication Suite Integration",
      "Saudi Data Center Cloud Hosting",
      "Corporate Email & Domain Governance",
      "Cybersecurity Governance & Access Protocols"
    ],
    partnerHighlight: "SamMail Corporate Communication Suite",
    iconName: "Mail"
  },
  {
    id: "realestate",
    name: "Real Estate & Property",
    category: "REAL ESTATE",
    headline: "Commercial premises, residential portfolios, Makkah & Madinah.",
    description: "Strategic real estate advisory sourcing Grade-A corporate headquarters, commercial leases, and high-yield investment properties.",
    capabilities: [
      "Commercial HQ Site Sourcing in Riyadh & Jeddah",
      "Balady Commercial Lease Attestation",
      "Residential Property Investment Analysis",
      "Holy Cities (Makkah & Madinah) Property Guidance"
    ],
    partnerHighlight: "Al Sulaiman Real Estate Strategic Network",
    iconName: "Building"
  },
  {
    id: "partnerships",
    name: "Partnership Network",
    category: "PARTNERSHIPS",
    headline: "Service Partners for specialists; Success Partners for ecosystem members.",
    description: "Two distinct collaboration frameworks connecting international specialists with local opportunities and expanding ecosystem members.",
    capabilities: [
      "Service Partner Programme (International Specialists)",
      "Success Partner Ecosystem (Member Collaboration)",
      "Project-Specific Subcontracting Structures",
      "Cross-Ecosystem Commercial Referral Alignment"
    ],
    partnerHighlight: "AATIQ Ecosystem Network",
    iconName: "Users"
  }
];

export const FIVE_STAGE_CLIENT_JOURNEY = [
  {
    stage: "ESTABLISH",
    label: "01 / ESTABLISH",
    headline: "Enter with confidence.",
    description: "We handle corporate structuring, MISA foreign investment licensing, Commercial Registration (CR), and initial banking setup.",
    details: ["MISA Filings", "CR Issuance", "Capital Transfer", "Corporate Bank Account"]
  },
  {
    stage: "ACTIVATE",
    label: "02 / ACTIVATE",
    headline: "Turn registration into readiness.",
    description: "We activate Qiwa, Muqeem, GOSI, ZATCA, and municipal licenses so your company can hire employees and sign contracts immediately.",
    details: ["Qiwa & GOSI Setup", "ZATCA Registration", "Balady License", "Manager Iqama Transfer"]
  },
  {
    stage: "OPERATE",
    label: "03 / OPERATE",
    headline: "Build the infrastructure behind the business.",
    description: "Through SLNEE technology, ERP systems, and SamMail communications, we equip your operational team with reliable software.",
    details: ["Enterprise ERP", "SamMail Corporate Suite", "GRO Renewals", "Payroll Compliance"]
  },
  {
    stage: "CONNECT",
    label: "04 / CONNECT",
    headline: "Business doesn't happen in isolation.",
    description: "We connect you to commercial office space, property capability, local legal resources, and strategic ecosystem specialists.",
    details: ["HQ Office Sourcing", "Legal Advisory", "Banking Relationships", "Service Partners"]
  },
  {
    stage: "GROW",
    label: "05 / GROW",
    headline: "Your Saudi story shouldn't end with setup.",
    description: "As an established ecosystem member, you explore joint ventures, Premium Residency status, and long-term expansion opportunities.",
    details: ["Premium Residency", "Success Partner Network", "Joint Ventures", "Regional Expansion"]
  }
];
