export interface ExperienceItem {
  id: string;
  title: string;
  clientSector: 'Government' | 'Semi-Government' | 'Enterprise' | 'Private Sector';
  deliveryPartner: 'Delivered through strategic partner SLNEE' | 'Vision Saudi Ecosystem Delivery' | 'AATIQ Ecosystem Delivery' | 'Strategic Partner';
  summary: string;
  impactMetrics: string[];
  capabilitiesUsed: string[];
}

export const MASTER_EXPERIENCE_TRACK_RECORD: ExperienceItem[] = [
  {
    id: "enterprise-gov-tech",
    title: "National Digital Platform & ERP Implementation",
    clientSector: "Government",
    deliveryPartner: "Delivered through strategic partner SLNEE",
    summary:
      "Enterprise digital transformation for major Saudi public-sector institutions, delivering workflow automation, ZATCA e-invoicing compliance, and localized HR platforms.",
    impactMetrics: [
      "16+ Years Operating Track Record",
      "Multi-Million SAR Project Execution",
      "Over 100,000 Active Platform Users"
    ],
    capabilitiesUsed: ["Enterprise ERP", "ZATCA Compliance", "Workflow Automation", "Government Portal Integration"]
  },
  {
    id: "semi-gov-infra",
    title: "Multi-Agency Municipal Portal & Licensing Automation",
    clientSector: "Semi-Government",
    deliveryPartner: "Delivered through strategic partner SLNEE",
    summary:
      "Designing and deploying unified regulatory clearance platforms connecting municipal approval workflows for commercial infrastructure projects.",
    impactMetrics: [
      "Sub-24h Processing Time Reduction",
      "Enterprise Data Sovereignty",
      "Integrated Cloud Architecture"
    ],
    capabilitiesUsed: ["Custom Software Architecture", "Municipal API Integration", "Security Governance"]
  },
  {
    id: "corporate-market-entry",
    title: "Regional Enterprise Market Establishment & Headquarters Setup",
    clientSector: "Enterprise",
    deliveryPartner: "Vision Saudi Ecosystem Delivery",
    summary:
      "Facilitating MISA licensing, commercial registration, Grade-A headquarters sourcing in King Abdullah Financial District (KAFD), and payroll activation for multinational tech firm.",
    impactMetrics: [
      "100% Foreign Ownership MISA Approval",
      "14 Days End-to-End CR Issuance",
      "Seamless Banking Account Activation"
    ],
    capabilitiesUsed: ["Business Setup", "MISA Licensing", "Riyadh HQ Sourcing", "Corporate Banking Facilitation"]
  },
  {
    id: "communications-cloud",
    title: "SamMail Enterprise Communications Infrastructure Deployment",
    clientSector: "Private Sector",
    deliveryPartner: "Delivered through strategic partner SLNEE",
    summary:
      "Deploying secure localized corporate communications, enterprise email hosting, and data sovereignty compliance for high-security commercial organizations in KSA.",
    impactMetrics: [
      "100% In-Kingdom Data Sovereignty",
      "Zero Downtime Deployment",
      "Enterprise Security Encryption"
    ],
    capabilitiesUsed: ["SamMail Integration", "Data Sovereignty Compliance", "Domain Governance"]
  }
];

export const KEY_CREDIBILITY_METRICS = [
  {
    stat: "16+",
    label: "Years of Saudi Experience",
    subtext: "Operating experience behind the team and strategic partner SLNEE in the Kingdom."
  },
  {
    stat: "SAR 100M+",
    label: "Project Delivery Track Record",
    subtext: "Enterprise technology implementations and advisory engagements delivered through SLNEE."
  },
  {
    stat: "100%",
    label: "Foreign Equity Capability",
    subtext: "Guiding clients through full ownership legal structures under MISA frameworks."
  },
  {
    stat: "5 Pillars",
    label: "Unified Platform",
    subtext: "Business Setup, Real Estate, Premium Residency, Corporate Services, and Technology."
  }
];
