// Market Entry Estimator — indicative timelines.
//
// REVIEW BEFORE LAUNCH: these ranges are typical, publicly understood durations for
// a well-prepared applicant. Vision Saudi's team should confirm them against current
// practice. Government fee amounts are intentionally NOT shown on the site; they go
// in the personalised plan the visitor requests.

export type EntityId = "llc" | "branch" | "rhq";
export type ActivityId = "services" | "technology" | "trading" | "industrial";
export type CapitalId = "under-2m" | "2m-10m" | "over-10m";

export interface Step {
  title: string;
  detail: string;
  weeks: [number, number];
}

export const ENTITIES: { id: EntityId; label: string; summary: string }[] = [
  { id: "llc", label: "Limited Liability Company", summary: "100% foreign-owned Saudi company" },
  { id: "branch", label: "Branch of a Foreign Company", summary: "Extension of your existing parent company" },
  { id: "rhq", label: "Regional Headquarters", summary: "Your MENA base under the RHQ programme" },
];

export const ACTIVITIES: { id: ActivityId; label: string }[] = [
  { id: "services", label: "Professional services" },
  { id: "technology", label: "Technology" },
  { id: "trading", label: "Trading" },
  { id: "industrial", label: "Industrial" },
];

export const CAPITALS: { id: CapitalId; label: string }[] = [
  { id: "under-2m", label: "Under SAR 2M" },
  { id: "2m-10m", label: "SAR 2M – 10M" },
  { id: "over-10m", label: "Over SAR 10M" },
];

const BASE_STEPS: Record<EntityId, Step[]> = {
  llc: [
    { title: "MISA investment licence", detail: "Foreign investment licence application and approval", weeks: [1, 2] },
    { title: "Commercial Registration", detail: "Articles of Association and CR with the Ministry of Commerce", weeks: [1, 2] },
    { title: "Municipal & Chamber registration", detail: "Balady licence and Chamber of Commerce membership", weeks: [1, 1] },
    { title: "Corporate bank account", detail: "Account opening and capital deposit", weeks: [2, 3] },
    { title: "Government platform activation", detail: "Qiwa, GOSI, ZATCA and Muqeem — ready to hire and invoice", weeks: [1, 2] },
  ],
  branch: [
    { title: "Parent document legalisation", detail: "Attestation of parent company documents via the Saudi embassy", weeks: [2, 4] },
    { title: "MISA investment licence", detail: "Branch licence application and approval", weeks: [1, 2] },
    { title: "Commercial Registration", detail: "Branch CR with the Ministry of Commerce", weeks: [1, 2] },
    { title: "Corporate bank account", detail: "Account opening for the branch", weeks: [2, 3] },
    { title: "Government platform activation", detail: "Qiwa, GOSI, ZATCA and Muqeem — ready to hire and invoice", weeks: [1, 2] },
  ],
  rhq: [
    { title: "RHQ eligibility & licence", detail: "Eligibility review and RHQ licence under MISA", weeks: [2, 4] },
    { title: "Commercial Registration", detail: "RHQ CR with the Ministry of Commerce", weeks: [1, 2] },
    { title: "Office & premises", detail: "Qualifying office space secured in Riyadh", weeks: [2, 4] },
    { title: "Corporate bank account", detail: "Account opening and capital deposit", weeks: [2, 3] },
    { title: "Government platform activation", detail: "Qiwa, GOSI, ZATCA and Muqeem — ready to hire senior staff", weeks: [1, 2] },
  ],
};

const ACTIVITY_STEPS: Partial<Record<ActivityId, Step>> = {
  trading: {
    title: "Trading activity conditions",
    detail: "Additional MISA conditions for trading licences (capital and localisation commitments)",
    weeks: [2, 4],
  },
  industrial: {
    title: "Industrial licensing",
    detail: "Industrial licence and site allocation (e.g. MODON industrial cities)",
    weeks: [4, 8],
  },
};

export interface Estimate {
  steps: Step[];
  totalWeeks: [number, number];
  notes: string[];
}

export function estimate(entity: EntityId, activity: ActivityId, capital: CapitalId): Estimate {
  const steps = [...BASE_STEPS[entity]];
  const extra = ACTIVITY_STEPS[activity];
  if (extra) steps.splice(1, 0, extra);

  // Some steps overlap in practice, so the total is ~85% of the straight sum.
  const sum = steps.reduce<[number, number]>((acc, s) => [acc[0] + s.weeks[0], acc[1] + s.weeks[1]], [0, 0]);
  const totalWeeks: [number, number] = [Math.max(3, Math.round(sum[0] * 0.85)), Math.round(sum[1] * 0.85)];

  const notes: string[] = [];
  if (entity === "rhq") notes.push("The RHQ programme carries significant tax incentives for eligible activities — assessed in your plan.");
  if (activity === "technology") notes.push("Technology companies may qualify for fast-track and entrepreneur licence routes.");
  if (capital === "over-10m") notes.push("Larger capital commitments can open Premium Residency pathways for key executives.");
  if (entity === "branch") notes.push("Document legalisation is usually the longest step — starting it early saves weeks.");

  return { steps, totalWeeks, notes };
}
