// Builds public/guides/saudi-market-entry-guide-2026.pdf from the site's own content.
// Run: node scripts/build-guide.mts   (dev server not required)
//
// Content comes only from data already published on the site. Re-run after editing
// data/estimator.ts so the guide's timelines stay in sync with the on-site estimator.
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { ENTITIES, estimate } from "../data/estimator.ts";

const STAGES = [
  ["Establish", "Enter with confidence.", "MISA licensing, Commercial Registration, capital transfer and corporate bank account setup. Your Saudi entity starts here."],
  ["Activate", "Turn registration into readiness.", "Qiwa, GOSI, ZATCA and Balady — activating every platform your company needs to hire, sign contracts and begin operations."],
  ["Operate", "Build the infrastructure behind the business.", "Enterprise ERP, corporate communications, GRO management, payroll compliance and digital systems."],
  ["Connect", "Business doesn't happen in isolation.", "Office sourcing, legal advisory, banking relationships and connections to partner networks across the Kingdom."],
  ["Grow", "Your Saudi story shouldn't end with setup.", "Premium Residency pathways, joint ventures, regional expansion and long-term strategic positioning."],
];

const AUTHORITIES = [
  ["MISA", "Foreign investment licensing"],
  ["Ministry of Commerce", "Commercial Registration"],
  ["ZATCA", "Tax, VAT & e-invoicing"],
  ["Qiwa", "Labour & workforce"],
  ["GOSI", "Social insurance"],
  ["Muqeem", "Residency & visa services"],
  ["Balady", "Municipal licensing"],
  ["Saudi Business Center", "Business registration"],
];

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const range = ([a, b]: [number, number]) => (a === b ? `${a}` : `${a}–${b}`);

const structures = ENTITIES.map((e) => {
  const est = estimate(e.id, "services", "2m-10m");
  return `
    <section class="card">
      <h3>${esc(e.label)}</h3>
      <p class="muted">${esc(e.summary)}</p>
      <p class="big">${range(est.totalWeeks)} weeks <span>indicative</span></p>
      <ol>${est.steps.map((s) => `<li><b>${esc(s.title)}</b> — ${esc(s.detail)} <i>(${range(s.weeks)} wk)</i></li>`).join("")}</ol>
    </section>`;
}).join("");

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: "Segoe UI", Inter, Arial, sans-serif; color: #0F172A; font-size: 11pt; line-height: 1.55; }
  .page { width: 210mm; min-height: 297mm; padding: 22mm 20mm; page-break-after: always; position: relative; }
  .cover { background: #0A0D0C; color: #fff; display: flex; flex-direction: column; justify-content: space-between; }
  .brand { font-weight: 800; letter-spacing: .12em; color: #10E784; font-size: 13pt; }
  .cover h1 { font-size: 40pt; line-height: 1.05; margin: 0 0 8mm; }
  .cover p { color: #94A3B8; font-size: 13pt; max-width: 140mm; }
  .tag { display: inline-block; border: 1px solid #10E784; color: #10E784; padding: 2mm 4mm; border-radius: 99px; font-size: 9pt; letter-spacing: .1em; }
  h2 { font-size: 20pt; margin: 0 0 4mm; } h2 small { display: block; font-size: 9pt; letter-spacing: .15em; color: #059669; text-transform: uppercase; margin-bottom: 2mm; }
  h3 { margin: 0 0 1mm; font-size: 13pt; }
  .muted { color: #475569; margin: 0 0 3mm; }
  .lead { font-size: 11pt; color: #334155; max-width: 160mm; }
  .card { border: 1px solid #E2E8F0; border-left: 4px solid #059669; border-radius: 3mm; padding: 3.5mm 5mm; margin-bottom: 3.5mm; font-size: 9.5pt; break-inside: avoid; }
  .big { font-size: 13pt; font-weight: 800; color: #059669; margin: 0 0 2mm; } .big span { font-size: 8pt; color: #64748B; font-weight: 600; text-transform: uppercase; letter-spacing: .1em; }
  ol { margin: 0; padding-left: 5mm; } li { margin-bottom: 0.6mm; } li i { color: #64748B; font-style: normal; }
  .stage { display: flex; gap: 5mm; margin-bottom: 4mm; break-inside: avoid; }
  .num { flex: 0 0 11mm; height: 11mm; border-radius: 50%; background: #0A0D0C; color: #10E784; font-weight: 800; display: flex; align-items: center; justify-content: center; }
  .stage b { display: block; font-size: 13pt; } .stage em { color: #059669; font-style: normal; font-weight: 600; font-size: 10pt; }
  table { width: 100%; border-collapse: collapse; margin-top: 4mm; } td { padding: 3mm 2mm; border-bottom: 1px solid #E2E8F0; } td:first-child { font-weight: 700; width: 55mm; }
  .note { font-size: 8.5pt; color: #64748B; border-top: 1px solid #E2E8F0; padding-top: 3mm; position: absolute; bottom: 14mm; left: 20mm; right: 20mm; }
  .cta { background: #0A0D0C; color: #fff; border-radius: 4mm; padding: 8mm; margin-top: 8mm; } .cta b { color: #10E784; }
</style></head><body>

<div class="page cover">
  <div class="brand">VISION SAUDI</div>
  <div>
    <span class="tag">2026 EDITION</span>
    <h1>Saudi Market<br/>Entry Guide</h1>
    <p>What international companies need to know before establishing in the Kingdom — from the first licence to full operations.</p>
  </div>
  <p style="font-size:10pt">One Kingdom. One Vision. One Ecosystem.</p>
</div>

<div class="page">
  <h2><small>01 · The opportunity</small>A market opening at extraordinary speed</h2>
  <p class="lead">Saudi Arabia is transforming. Vision 2030 has opened the Kingdom to international investment, new industries and ambitious operators at a pace the region has never seen before.</p>
  <p class="lead">But a Commercial Registration is only the beginning. A Saudi entity on paper cannot sponsor employee visas, sign commercial leases or invoice clients until every operational platform is activated. This guide walks through the full path.</p>
  <h2 style="margin-top:8mm"><small>02 · The path</small>Five stages from licence to growth</h2>
  ${STAGES.map(([n, h, d], i) => `<div class="stage"><div class="num">0${i + 1}</div><div><b>${n}</b><em>${esc(h)}</em><div>${esc(d)}</div></div></div>`).join("")}
</div>

<div class="page">
  <h2><small>03 · Structure</small>Choosing your entity</h2>
  <p class="lead">The right structure depends on ownership, activity and whether Saudi Arabia will be your regional base. Timelines below are indicative for a well-prepared applicant in professional services.</p>
  ${structures}
  <p class="note">Indicative only. Actual timelines depend on documentation quality and authority processing times. Trading and industrial activities add further licensing steps.</p>
</div>

<div class="page">
  <h2><small>04 · Activation</small>The platforms you must activate</h2>
  <p class="lead">After registration, these authorities and platforms determine whether you can actually hire, pay and invoice.</p>
  <table>${AUTHORITIES.map(([a, r]) => `<tr><td>${a}</td><td>${r}</td></tr>`).join("")}</table>
  <div class="cta">
    <p style="margin:0 0 3mm;font-size:14pt;font-weight:800">Ready to plan your entry?</p>
    <p style="margin:0;color:#CBD5E1">A senior strategist will map your exact timeline, government fees and document checklist.</p>
    <p style="margin:4mm 0 0"><b>advisory@visionsaudi.com</b> · <b>+966 54 045 7397</b> · <b>visionsaudi.com</b></p>
  </div>
  <p class="note">This guide is general information, not legal or tax advice. Requirements change; confirm your specific case with Vision Saudi before acting. © ${new Date().getFullYear()} Vision Saudi.</p>
</div>
</body></html>`;

mkdirSync("public/guides", { recursive: true });
const browser = await chromium.launch({ channel: process.env.CI ? undefined : "msedge", headless: true });
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "load" });
await page.pdf({ path: "public/guides/saudi-market-entry-guide-2026.pdf", format: "A4", printBackground: true });
await browser.close();
console.log("wrote public/guides/saudi-market-entry-guide-2026.pdf");
