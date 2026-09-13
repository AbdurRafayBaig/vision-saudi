export interface FAQItem {
  id: string;
  category: 'Business Setup' | 'Ecosystem & Corporate' | 'Real Estate' | 'Premium Residency' | 'Partnerships';
  question: string;
  answer: string;
}

export const MASTER_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Business Setup",
    question: "What is the difference between AATIQ and a standard company setup agent?",
    answer: "Standard agencies hand you a Commercial Registration (CR) and exit. AATIQ is an integrated ecosystem platform: we establish your entity, activate your government portals, implement localized technology (ERP & SamMail), connect corporate office space, and provide long-term operational support."
  },
  {
    id: "faq-2",
    category: "Business Setup",
    question: "Can foreign investors own 100% of a company in Saudi Arabia?",
    answer: "Yes. Under Ministry of Investment (MISA) regulations, foreign investors can hold 100% equity in most commercial, IT, industrial, professional, and service sectors. Specific capital rules apply depending on activity classification."
  },
  {
    id: "faq-3",
    category: "Ecosystem & Corporate",
    question: "What technology solutions are available through AATIQ's ecosystem?",
    answer: "Through our strategic technology partner SLNEE and SamMail, we deliver enterprise ERP systems, localized HR/payroll software compliant with Qiwa and GOSI, ZATCA Phase-2 electronic invoicing, custom digital portals, and secure corporate email."
  },
  {
    id: "faq-4",
    category: "Real Estate",
    question: "How does AATIQ assist with commercial real estate in Riyadh and Jeddah?",
    answer: "We source Grade-A commercial office space, evaluate municipal zoning, coordinate Balady commercial lease attestations, and ensure location compliance for MISA and Ministry of Commerce requirements."
  },
  {
    id: "faq-5",
    category: "Premium Residency",
    question: "Does real estate ownership qualify for Saudi Premium Residency?",
    answer: "Yes. Purchasing unencumbered residential property in Saudi Arabia valued at SAR 4,000,000 or higher qualifies the owner and direct family members for the Real Estate Owner Premium Residency."
  },
  {
    id: "faq-6",
    category: "Partnerships",
    question: "What is the difference between Service Partners and Success Partners?",
    answer: "Service Partners are international companies and specialist providers collaborating with AATIQ on eligible Saudi projects. Success Partners are qualifying businesses operating inside the AATIQ ecosystem accessing market networks and cross-referral growth."
  }
];
