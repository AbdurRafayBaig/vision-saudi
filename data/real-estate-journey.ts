// The advisory journey shown on /services/real-estate.

export const ADVISORY_JOURNEY = [
  { step: "01", name: "DISCOVER", desc: "Identify target asset classes, location parameters, yield targets, and regulatory capital rules." },
  { step: "02", name: "ASSESS", desc: "Perform market valuation, rental yield analysis, zoning check, and municipal compliance audit." },
  { step: "03", name: "DUE DILIGENCE", desc: "REGA title deed verification, legal title checks, encumbrance verification, and physical inspection." },
  { step: "04", name: "ACQUIRE", desc: "Structure purchase agreements, manage escrow/notary transfer, and register official ownership." },
  { step: "05", name: "MANAGE / EXIT", desc: "Tenant management, lease administration, asset optimization, or strategic portfolio disposition." },
] as const;
