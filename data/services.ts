export interface ServicePillar {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  summary: string;
  heroHeadline: string;
  heroSubheadline: string;
  journeyStage: 'ESTABLISH' | 'ACTIVATE' | 'OPERATE' | 'CONNECT' | 'GROW';
  capabilities: {
    title: string;
    description: string;
    details: string[];
  }[];
  processSteps: {
    step: string;
    name: string;
    description: string;
  }[];
  postEstablishmentEcosystem: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const MASTER_SERVICES: ServicePillar[] = [
  {
    id: "business-setup",
    slug: "business-setup",
    number: "01",
    title: "Business Setup & Market Entry",
    tagline: "Build your Saudi presence properly.",
    summary:
      "Full end-to-end commercial establishment for international enterprises, high-net-worth investors, and regional businesses entering Saudi Arabia.",
    heroHeadline: "Enter Saudi Arabia With Clarity, Structure & Precision",
    heroSubheadline:
      "Traditional formation agencies give you a CR and leave. We guide you through corporate structuring, MISA licensing, Ministry of Commerce approvals, and immediate operational activation.",
    journeyStage: "ESTABLISH",
    capabilities: [
      {
        title: "Corporate Structuring & Advisory",
        description: "Selecting optimal legal entity structures tailored to your capital, foreign equity ownership rights, and long-term expansion goals.",
        details: [
          "Limited Liability Company (LLC) Formation",
          "Technical & Regional Branch Establishment",
          "Joint Venture (JV) Alignment & Shareholder Agreements",
          "MISA Foreign Investment Licensing Guidance"
        ]
      },
      {
        title: "Licensing & Ministry Registrations",
        description: "Complete handling of official Saudi ministry filings and regulatory clearances across sectors.",
        details: [
          "Ministry of Investment (MISA) Service & Trading Licences",
          "Ministry of Commerce Commercial Registration (CR)",
          "Chamber of Commerce Membership & Attestation",
          "ZATCA (Tax & Customs Authority) Registration"
        ]
      },
      {
        title: "Banking & Financial Infrastructure Setup",
        description: "Direct facilitation with tier-1 Saudi financial institutions for capital deposit and corporate account opening.",
        details: [
          "Corporate Bank Account Opening Support",
          "Share Capital Transfer Verification & Proof of Funds",
          "Authorized Signatory & General Manager Banking Credentials",
          "Wages Protection System (WPS) & Payroll Banking Setup"
        ]
      },
      {
        title: "Operational Platform Activation",
        description: "Activating essential Saudi government digital portals required to hire, operate, and maintain compliance.",
        details: [
          "Qiwa (Ministry of Human Resources) Employer Portal",
          "Muqeem (Passports & Iqama Management) Setup",
          "Mudad (Wages Protection & Digital Contracts)",
          "GOSI (General Organization for Social Insurance)"
        ]
      }
    ],
    processSteps: [
      {
        step: "01",
        name: "Discovery & Structure Evaluation",
        description: "Assessing business activity codes, capital requirements, and optimal corporate structure."
      },
      {
        step: "02",
        name: "MISA & Ministry Filings",
        description: "Preparing articles of association, obtaining MISA licence approval, and issuing the Commercial Registration."
      },
      {
        step: "03",
        name: "Banking & Capital Deposit",
        description: "Opening corporate bank account, depositing minimum capital, and securing capital certificate."
      },
      {
        step: "04",
        name: "Government Portal Activation",
        description: "Enrolling entity in Qiwa, GOSI, Muqeem, and ZATCA for immediate hiring and operations."
      },
      {
        step: "05",
        name: "Ecosystem Onboarding",
        description: "Transitioning entity into AATIQ's ongoing corporate, technology, and real estate ecosystem."
      }
    ],
    postEstablishmentEcosystem: [
      "Corporate Renewals & GRO Services",
      "Enterprise ERP & SamMail Corporate Communications",
      "Commercial Property Sourcing in Riyadh & Jeddah",
      "Success Partner Ecosystem Expansion"
    ],
    faqs: [
      {
        question: "Can foreign companies own 100% of a Saudi company?",
        answer: "Yes, under MISA regulations, foreign investors can hold 100% ownership in many commercial, industrial, service, and technology sectors, subject to specific activity capital requirements."
      },
      {
        question: "How long does company establishment take in Saudi Arabia?",
        answer: "Initial MISA licence approval and CR issuance typically take between 5 to 15 business days depending on documentation readiness and sector activity licensing."
      },
      {
        question: "Does AATIQ provide post-formation operational support?",
        answer: "Yes. Establishment is only stage one. We provide ongoing GRO services, accounting, technology infrastructure, corporate communications, and access to our commercial network."
      }
    ]
  },
  {
    id: "corporate-services",
    slug: "corporate-services",
    number: "02",
    title: "Corporate & Business Services",
    tagline: "Everything around the business after establishment.",
    summary:
      "What happens after company formation: ongoing government relations (GRO), compliance renewals, payroll coordination, accounting, and operational infrastructure.",
    heroHeadline: "What Happens After Establishment Is What Determines Success",
    heroSubheadline:
      "A Saudi company on paper is only the beginning. We maintain your corporate compliance, navigate regulatory shifts, and manage operational administration.",
    journeyStage: "OPERATE",
    capabilities: [
      {
        title: "Government Relations & GRO Execution",
        description: "Dedicated bilingual liaison officers handling all Saudi ministry interactions and official documentation.",
        details: [
          "Iqama Issuance, Transfers & Renewal Services",
          "Saudization (Nitaqat) Compliance Management",
          "Ministry of Commerce CR & License Amendments",
          "Work Visas, Exit/Re-entry Permits & Business Visas"
        ]
      },
      {
        title: "Compliance & Corporate Governance",
        description: "Proactive compliance auditing to protect your entity from statutory fines and operational disruption.",
        details: [
          "ZATCA VAT & Corporate Income Tax Filing Coordination",
          "Annual Financial Audit Liaison",
          "Commercial Registration & License Annual Renewals",
          "National Address & Municipal License (Balady) Renewals"
        ]
      },
      {
        title: "Financial & Payroll Operational Services",
        description: "Structured back-office coordination for payroll compliance and accounting integrity.",
        details: [
          "Wages Protection System (WPS) Monthly Execution",
          "GOSI Social Insurance Monthly Filings",
          "Bookkeeping & ZATCA E-Invoicing (Fatoora) Setup",
          "End of Service Benefits (EOSB) Calculations"
        ]
      }
    ],
    processSteps: [
      {
        step: "01",
        name: "Operational Assessment",
        description: "Reviewing active entity licences, Saudization rating, and compliance baseline."
      },
      {
        step: "02",
        name: "Dedicated GRO Allocation",
        description: "Assigning an experienced Saudi GRO team for daily government platform execution."
      },
      {
        step: "03",
        name: "Compliance Calendar Setup",
        description: "Establishing automated renewal tracking for CR, MISA, Balady, and tax filings."
      },
      {
        step: "04",
        name: "Continuous Execution",
        description: "Managing ongoing visa processing, employee onboarding, and regulatory reporting."
      }
    ],
    postEstablishmentEcosystem: [
      "Technology & ERP Workflow Automation",
      "Executive Premium Residency Guidance",
      "Strategic Service Partner Collaboration"
    ],
    faqs: [
      {
        question: "What is Saudization (Nitaqat) and how does it affect my company?",
        answer: "Saudization requires businesses to maintain a specific percentage of Saudi nationals in their workforce depending on sector and company size. We manage your Nitaqat category to ensure continuous visa allocation."
      },
      {
        question: "Why do I need GRO services if my company is already registered?",
        answer: "Saudi commercial regulations require ongoing filings across Qiwa, Muqeem, Balady, ZATCA, and Mudad. Professional GRO execution prevents portal locks, visa freezes, and administrative delays."
      }
    ]
  },
  {
    id: "technology-infrastructure",
    slug: "technology-infrastructure",
    number: "03",
    title: "Technology & Digital Infrastructure",
    tagline: "Infrastructure built for the Kingdom.",
    summary:
      "Enterprise technology implementation, ERP, CRM, custom digital platforms, and corporate email powered by strategic delivery partner SLNEE and SamMail.",
    heroHeadline: "Modern Technology Backing Your Saudi Growth",
    heroSubheadline:
      "Through our strategic technology partner SLNEE, we equip established businesses with government-grade digital infrastructure, localized ERP workflows, and secure corporate communications.",
    journeyStage: "OPERATE",
    capabilities: [
      {
        title: "Enterprise ERP & Systems Architecture",
        description: "Tailored business software designed for Saudi commercial requirements, ZATCA e-invoicing, and local accounting.",
        details: [
          "ZATCA Phase 1 & Phase 2 Integrated E-Invoicing",
          "Localized HR & Payroll (Qiwa / GOSI / WPS Compliant)",
          "Financial Accounting & Multi-Currency Management",
          "Supply Chain, Inventory & Asset Management"
        ]
      },
      {
        title: "Corporate Email & Secure Communications",
        description: "Connecting businesses with robust corporate communication systems and localized cloud infrastructure.",
        details: [
          "Corporate Email Infrastructure (SamMail Integration)",
          "Saudi Data Sovereignty & Cloud Hosting Alignment",
          "Enterprise Domain Management & Cybersecurity",
          "Collaboration & Document Governance Platforms"
        ]
      },
      {
        title: "Custom Digital Platforms & AI Workflows",
        description: "Bespoke web applications, workflow automation, and intelligent document processing.",
        details: [
          "Custom Portal Development for Clients & Partners",
          "AI Document Extraction & Automated Compliance Auditing",
          "CRM Setup & Customer Engagement Pipelines",
          "SLNEE Enterprise Delivery Integration"
        ]
      }
    ],
    processSteps: [
      {
        step: "01",
        name: "Technology Requirements Discovery",
        description: "Evaluating current operational stack, user seats, and localized software needs."
      },
      {
        step: "02",
        name: "Solution Architecture & Selection",
        description: "Designing ERP, CRM, corporate email, and cloud architecture."
      },
      {
        step: "03",
        name: "Implementation & Data Migration",
        description: "Configuring workflows, ZATCA connectors, and employee database setup."
      },
      {
        step: "04",
        name: "Training & Ongoing Support",
        description: "Conducting user training and providing continuous enterprise system maintenance."
      }
    ],
    postEstablishmentEcosystem: [
      "SamMail Corporate Communication Suite",
      "SLNEE Custom Software Development",
      "Automated Compliance Tracking"
    ],
    faqs: [
      {
        question: "What is SLNEE's role in AATIQ's technology offering?",
        answer: "SLNEE is AATIQ's strategic technology and delivery partner, bringing 16+ years of enterprise software engineering, government implementations, and digital platform delivery."
      },
      {
        question: "Are your ERP and invoicing systems ZATCA phase 2 compliant?",
        answer: "Yes. All technology solutions implemented through our ecosystem conform strictly to ZATCA Phase 1 and Phase 2 electronic invoicing requirements."
      }
    ]
  },
  {
    id: "real-estate",
    slug: "real-estate",
    number: "04",
    title: "Real Estate Investment & Advisory",
    tagline: "Own a piece of what's being built.",
    summary:
      "Strategic property advisory, commercial premises sourcing, residential investment analysis, and specialist guidance across Riyadh, Jeddah, Makkah, and Madinah.",
    heroHeadline: "The Kingdom Is Being Built. Position Yourself Strategically.",
    heroSubheadline:
      "Whether sourcing corporate headquarters in Riyadh, evaluating residential developments, or navigating holy city real estate frameworks, we provide rigorous data-driven analysis.",
    journeyStage: "CONNECT",
    capabilities: [
      {
        title: "Commercial Property Sourcing & Leasing",
        description: "Identifying and securing prime office space, retail flagships, and industrial facilities in key economic zones.",
        details: [
          "Riyadh & Jeddah Grade-A Office Space Sourcing",
          "Municipal Balady License & Commercial Lease Attestation",
          "Headquarters Site Selection & Zoning Compliance",
          "Lease Negotiation & Fit-Out Coordination"
        ]
      },
      {
        title: "Residential Investment & Portfolio Analysis",
        description: "Advising investors and executives on high-growth residential opportunities across Saudi urban hubs.",
        details: [
          "Off-Plan & Completed Residential Property Evaluation",
          "Portfolio Yield Projections & ROI Modeling",
          "Foreign Ownership Qualification Guidance",
          "Resale & Secondary Market Exit Strategy"
        ]
      },
      {
        title: "Holy Cities Advisory (Makkah & Madinah)",
        description: "Navigating specialized regulatory frameworks governing real estate in Makkah Al-Mukarramah and Al-Madinah Al-Munawwarah.",
        details: [
          "Long-Term Leasehold Opportunity Analysis",
          "Hospitality & Commercial Investment Guidance",
          "Regulatory Ownership Rules Verification",
          "Local Partner Alignment"
        ]
      }
    ],
    processSteps: [
      {
        step: "01",
        name: "Investment Brief & Requirement Mapping",
        description: "Defining commercial usage, space needs, budget, or residential target yield."
      },
      {
        step: "02",
        name: "Market Sourcing & Due Diligence",
        description: "Shortlisting verified properties and conducting physical and legal due diligence."
      },
      {
        step: "03",
        name: "Transaction Structuring",
        description: "Negotiating purchase/lease terms and coordinating legal contract execution."
      },
      {
        step: "04",
        name: "Post-Acquisition Activation",
        description: "Facilitating municipal licensing, property management, or rental onboarding."
      }
    ],
    postEstablishmentEcosystem: [
      "Premium Residency Real Estate Pathway Guidance",
      "Corporate Office Fit-out & Technology Infrastructure",
      "Success Partner Joint Development"
    ],
    faqs: [
      {
        question: "Can foreign nationals purchase real estate in Saudi Arabia?",
        answer: "Yes. Foreign individuals and entities can purchase real estate for corporate premises or residential investment under Saudi foreign ownership regulations, with specific leasehold rules in Makkah and Madinah."
      },
      {
        question: "Does real estate ownership qualify for Saudi Premium Residency?",
        answer: "Yes. Owning residential real estate in Saudi Arabia valued at SAR 4,000,000 or more (free of mortgage) qualifies eligible applicants for the Real Estate Owner Premium Residency."
      }
    ]
  },
  {
    id: "premium-residency",
    slug: "premium-residency",
    number: "05",
    title: "Saudi Premium Residency Pathways",
    tagline: "Make the Kingdom more than a market.",
    summary:
      "Specialized evaluation and application guidance for foreign investors, executives, entrepreneurs, and specialists securing Saudi Premium Residency.",
    heroHeadline: "Establish Long-Term Roots In The Middle East's Greatest Growth Economy",
    heroSubheadline:
      "Saudi Premium Residency offers foreign investors, executives, and high-skilled professionals long-term residency, property ownership rights, business freedom, and visa-free travel.",
    journeyStage: "GROW",
    capabilities: [
      {
        title: "Investor Premium Residency Pathway",
        description: "For individuals investing SAR 7 Million or more in Saudi business entities alongside establishing 10+ Saudi jobs.",
        details: [
          "MISA Investment Proof & Entity Valuation Audit",
          "Job Creation Verification & Qiwa Documentation",
          "Direct Route to Permanent Saudi Residency",
          "Exemption from Expat Dependent Fees"
        ]
      },
      {
        title: "Real Estate Owner Pathway",
        description: "For individuals purchasing Saudi residential real estate valued at SAR 4 Million or higher.",
        details: [
          "Property Title Deed Evaluation & Unencumbered Audit",
          "REGA Regulatory Verification",
          "Renewable Premium Residency Status",
          "Family Sponsorship Inclusion (Spouse & Children under 25)"
        ]
      },
      {
        title: "Special Talent & Executive Pathways",
        description: "For C-suite executives, healthcare leaders, researchers, sports professionals, and tech innovators.",
        details: [
          "Minimum Salary & Employment Contract Validation",
          "Executive Nomination & Professional Accreditation",
          "Fast-Track Processing Guidance",
          "Commercial Activity Ownership Freedom"
        ]
      },
      {
        title: "Entrepreneur Pathway",
        description: "For founders securing recognized venture funding or establishing innovative Saudi startups.",
        details: [
          "MISA Entrepreneurial License Alignment",
          "Venture Capital Funding Proof Verification",
          "Transition from Category-1 to Permanent Status"
        ]
      }
    ],
    processSteps: [
      {
        step: "01",
        name: "Eligibility Assessment",
        description: "Reviewing asset portfolio, salary history, or investment capital against official criteria."
      },
      {
        step: "02",
        name: "Document Curation & Audit",
        description: "Attesting bank statements, title deeds, degree certificates, and police clearances."
      },
      {
        step: "03",
        name: "Official Portal Submission",
        description: "Submitting application packet to the Saudi Premium Residency Center (PRC)."
      },
      {
        step: "04",
        name: "Issuance & Ecosystem Integration",
        description: "Receiving Premium Residency card and activating long-term commercial rights."
      }
    ],
    postEstablishmentEcosystem: [
      "Direct Saudi Real Estate Acquisition",
      "Self-Sponsored Entity Establishment",
      "Success Partner Ecosystem Leadership"
    ],
    faqs: [
      {
        question: "What are the primary benefits of Saudi Premium Residency?",
        answer: "Key rights include residing in KSA without a Saudi sponsor, owning real estate, conducting commercial business, switching jobs freely, sponsoring family members, and exempting dependents from expat fees."
      },
      {
        question: "What is the difference between Limited and Unlimited Premium Residency?",
        answer: "Limited-Duration Premium Residency is renewable annually (or multi-year for SAR 100,000/yr), whereas Permanent Premium Residency provides lifetime status (for a one-time fee of SAR 800,000 or via qualified Investor/Talent pathways)."
      }
    ]
  }
];
