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

// ── Step two: does a target date actually work? ─────────────────────────────
// Everyone arrives with a date in their head ("we want to be invoicing by
// March"). Telling them whether that is realistic — and the date they would
// have to start to make it — is more useful than a duration on its own.

export type Verdict = "comfortable" | "tight" | "missed";

export interface Feasibility {
  verdict: Verdict;
  headline: string;
  detail: string;
  /** Weeks between today and the target date. */
  weeksAvailable: number;
  /** Latest start date that still leaves room for the slower path. */
  startBy: Date;
  /** Earliest realistic operational date if work started today. */
  earliest: Date;
}

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
const addWeeks = (from: Date, weeks: number) => new Date(from.getTime() + weeks * WEEK_MS);

export function feasibility(target: Date, totalWeeks: [number, number], today = new Date()): Feasibility {
  const weeksAvailable = Math.round((target.getTime() - today.getTime()) / WEEK_MS);
  const [fast, slow] = totalWeeks;
  const startBy = addWeeks(target, -slow);
  const earliest = addWeeks(today, fast);

  if (weeksAvailable >= slow) {
    return {
      verdict: "comfortable",
      weeksAvailable,
      startBy,
      earliest,
      headline: "That date is achievable.",
      detail: `You have ${weeksAvailable} weeks and the slower path needs about ${slow}. Starting by ${formatDate(startBy)} keeps the whole margin intact.`,
    };
  }

  if (weeksAvailable >= fast) {
    return {
      verdict: "tight",
      weeksAvailable,
      startBy,
      earliest,
      headline: "Possible, but there is no slack.",
      detail: `${weeksAvailable} weeks against a ${fast}–${slow} week range. It works if the parent-company documents are already legalised and filings go through first time. Start now, not next month.`,
    };
  }

  return {
    verdict: "missed",
    weeksAvailable,
    startBy,
    earliest,
    headline: "Not on that date, on current process.",
    detail: `${weeksAvailable > 0 ? `${weeksAvailable} weeks` : "That date"} is short of the ${fast} weeks the fastest path needs. Beginning today, the realistic date is ${formatDate(earliest)}. An interim arrangement can often cover the gap — worth a conversation.`,
  };
}

function formatDate(d: Date): string {
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

// ── What you have to produce ────────────────────────────────────────────────
// The paperwork, not the process. Most delays are a document that had to be
// legalised and wasn't, so each item says whether it needs attestation and who
// is expected to supply it.

export interface RequiredDoc {
  title: string;
  note: string;
  /** Needs legalisation through a Saudi embassy or an apostille. */
  attested?: boolean;
}

const COMMON_DOCS: RequiredDoc[] = [
  { title: "Passport copies", note: "Shareholders, directors and the proposed General Manager. Valid for at least six months." },
  { title: "Proposed company name", note: "Two or three options, in case the first is unavailable at the Ministry of Commerce." },
  { title: "Saudi address or Ejar lease", note: "Needed for the municipal licence; a serviced office is acceptable to start." },
];

const ENTITY_DOCS: Record<EntityId, RequiredDoc[]> = {
  llc: [
    { title: "Parent company Commercial Registration", note: "Certificate of incorporation or equivalent from your home registry.", attested: true },
    { title: "Board resolution", note: "Approving the Saudi subsidiary, the capital and the appointed manager.", attested: true },
    { title: "Audited financial statements", note: "Most recent financial year, in English or with certified translation." },
    { title: "Power of attorney", note: "Authorising whoever files on your behalf in the Kingdom.", attested: true },
    { title: "Articles of Association", note: "Drafted for the Saudi entity; we prepare this from your instructions." },
  ],
  branch: [
    { title: "Parent Commercial Registration and Articles", note: "Legalised through the Saudi embassy in the country of incorporation.", attested: true },
    { title: "Board resolution to open a branch", note: "Stating the branch activity, capital and the appointed branch manager.", attested: true },
    { title: "Audited financial statements", note: "Most recent financial year; MISA reviews parent-company standing." },
    { title: "Power of attorney for the branch manager", note: "Scope of authority spelled out.", attested: true },
    { title: "Bank reference letter", note: "From the parent company's bank, confirming the relationship." },
  ],
  rhq: [
    { title: "Parent company Commercial Registration", note: "Plus evidence of subsidiaries or branches in at least two other countries.", attested: true },
    { title: "Group structure chart", note: "Showing the entities the RHQ will direct." },
    { title: "Board resolution establishing the RHQ", note: "Committing to the Riyadh headquarters and its mandate.", attested: true },
    { title: "RHQ activity and headcount plan", note: "The mandatory strategic functions and senior roles for the first year." },
    { title: "Audited financial statements", note: "Group level, most recent financial year." },
  ],
};

const ACTIVITY_DOCS: Partial<Record<ActivityId, RequiredDoc[]>> = {
  trading: [
    { title: "Product list with ISIC codes", note: "Trading licences are granted against specific activity classifications." },
    { title: "Distribution or agency agreements", note: "Where you will represent another manufacturer's products." },
  ],
  industrial: [
    { title: "Machinery and production list", note: "Equipment, capacity and raw materials for the industrial licence." },
    { title: "Site and utilities requirement", note: "Land area, power and water load — needed for a MODON allocation." },
  ],
  technology: [
    { title: "Data hosting and residency plan", note: "Where customer data will live, for CST and SDAIA expectations." },
  ],
};

export function documentsFor(entity: EntityId, activity: ActivityId): RequiredDoc[] {
  return [...ENTITY_DOCS[entity], ...(ACTIVITY_DOCS[activity] ?? []), ...COMMON_DOCS];
}
