/**
 * Vision Saudi — contact-form lead store (Google Apps Script)
 *
 * SETUP (one time, ~5 minutes):
 *  1. Create a Google Sheet named "Vision Saudi Leads".
 *  2. Extensions -> Apps Script. Delete the sample code, paste this whole file.
 *  3. Change SECRET below to a long random string.
 *  4. Deploy -> New deployment -> type "Web app".
 *       Execute as: Me      Who has access: Anyone
 *  5. Copy the Web app URL into .env.local (and your hosting provider's env vars):
 *       LEADS_WEBHOOK_URL=https://script.google.com/macros/s/XXXX/exec
 *       LEADS_WEBHOOK_SECRET=<the same SECRET as below>
 *
 * Each submission becomes one row. The header row is created automatically.
 */

const SECRET = "CHANGE_ME_TO_A_LONG_RANDOM_STRING";

const COLUMNS = [
  "receivedAt", "name", "email", "phone", "company", "country",
  "serviceIntent", "capitalScale", "timeline", "targetRegion", "message", "ip",
];

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  if (data.secret !== SECRET) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: "unauthorized" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(COLUMNS);

  // Prefix "=" / "+" / "-" / "@" values with a quote so a lead can't inject a spreadsheet formula.
  const safe = (v) => {
    const s = v == null ? "" : String(v);
    return /^[=+\-@]/.test(s) ? "'" + s : s;
  };
  sheet.appendRow(COLUMNS.map((c) => safe(data[c])));

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
