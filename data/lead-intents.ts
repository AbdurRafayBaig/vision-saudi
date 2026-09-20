import type { ServiceIntent } from "@/lib/contact-fields";

// Copy for the enquiry modal's first step. Icons are named, not imported: this
// file is plain data so the same strings can be translated later without
// dragging React into a translation file.
export type IntentIcon = "building" | "shield" | "landmark" | "crown" | "cpu" | "handshake";

export interface LeadIntent {
  id: ServiceIntent;
  icon: IntentIcon;
  title: string;
  desc: string;
}

export const LEAD_INTENTS: LeadIntent[] = [
  {
    id: "business-setup",
    icon: "building",
    title: "Business Setup & Entity Formation",
    desc: "MISA investment licensing, CR, Articles of Association & corporate bank account.",
  },
  {
    id: "corporate-services",
    icon: "shield",
    title: "Corporate Services & GRO",
    desc: "Saudization (Nitaqat), Qiwa, ZATCA e-invoicing, visa transfers & government relations.",
  },
  {
    id: "real-estate",
    icon: "landmark",
    title: "Real Estate Investment Advisory",
    desc: "Grade-A commercial HQ sourcing, residential portfolios & land acquisition.",
  },
  {
    id: "premium-residency",
    icon: "crown",
    title: "Saudi Premium Residency",
    desc: "Investor, Talent, Entrepreneur & Real Estate Owner pathway evaluation.",
  },
  {
    id: "technology",
    icon: "cpu",
    title: "Technology & Digital Infrastructure",
    desc: "Enterprise ERP, SamMail corporate suite, cloud hosting & AI document automation.",
  },
  {
    id: "partnership",
    icon: "handshake",
    title: "Strategic Ecosystem Partnership",
    desc: "Service Partner and Success Partner collaboration network across the Kingdom.",
  },
];
