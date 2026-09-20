// Residency routes on /services/premium-residency. Icons are named here and
// resolved to components in the page, so this file stays plain copy.

export const PATHWAYS = [
  {
    icon: "briefcase",
    title: "Investor Residency",
    target: "Capital Investors & Asset Allocation",
    criteria: "Direct capital investment in Saudi commercial entities in accordance with Premium Residency Center thresholds.",
    privilege: "Self-sponsored residency, property ownership rights, freedom to conduct commercial business.",
  },
  {
    icon: "user-check",
    title: "Entrepreneur Residency",
    target: "Startup Founders & Tech Innovators",
    criteria: "Obtain MISA Entrepreneurship license, secure venture capital backing, or meet incubator milestones.",
    privilege: "5-year convertible residency, capability to hire employees, business expansion support.",
  },
  {
    icon: "award",
    title: "Special Talent Residency",
    target: "Executives, Healthcare & Researchers",
    criteria: "Executive leadership role, scientific research publications, or specialized healthcare/tech expertise.",
    privilege: "Exemption from Saudization quotas for self, long-term stability, direct family sponsorship.",
  },
  {
    icon: "home",
    title: "Real Estate Owner Residency",
    target: "Property Investors",
    criteria: "Own unencumbered Saudi real estate assets valued at SAR 4,000,000 or above.",
    privilege: "Residency linked to property title, family coverage, freedom to enter and exit KSA.",
  },
  {
    icon: "calendar",
    title: "Limited Duration Residency",
    target: "1-Year Renewable Residency",
    criteria: "One-off financial payment of SAR 100,000 for 1-year renewable status.",
    privilege: "Ideal for short-term executive advisory, property search, and preliminary market evaluation.",
  },
] as const;
