/**
 * Vision Saudi — contact-form lead store and notifier (Google Apps Script)
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

// Who gets told when a lead arrives. Apps Script sends this itself, from the
// Google account that owns the script, so notification works with no domain,
// no DNS and no email provider — useful on day one, and a second safety net
// afterwards. Free Google accounts may send 100 of these a day.
// Set to "" to turn it off, for example once Resend is delivering.
const NOTIFY_EMAIL = "akadir.ksa1@gmail.com";

// leadType says which form it came from — "inquiry", "estimate" or "guide" —
// which is the first thing you want when triaging a row.
const COLUMNS = [
  "receivedAt", "leadType", "name", "email", "phone", "company", "country",
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

  // The row is already saved, so a failure here must not fail the request —
  // a lead that is stored but unannounced is far better than one rejected.
  if (NOTIFY_EMAIL) {
    try {
      notify(data);
    } catch (err) {
      console.error("Lead stored but notification failed: " + err);
    }
  }

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function notify(data) {
  const name = data.name || "Someone";
  const intent = (data.serviceIntent || "general").replace(/-/g, " ");

  const rows = COLUMNS
    .filter((c) => c !== "ip" && data[c])
    .map((c) => {
      const label = c.replace(/([A-Z])/g, " $1").replace(/^./, (m) => m.toUpperCase());
      return '<tr><td style="padding:6px 14px 6px 0;color:#666;white-space:nowrap">' + label +
        '</td><td style="padding:6px 0"><b>' + String(data[c]).replace(/</g, "&lt;") + "</b></td></tr>";
    })
    .join("");

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    replyTo: data.email || NOTIFY_EMAIL,
    subject: "New Vision Saudi lead — " + name + " (" + intent + ")",
    htmlBody:
      '<div style="font-family:system-ui,Arial,sans-serif;font-size:14px;color:#111">' +
      "<h2 style=\"margin:0 0 4px\">New lead</h2>" +
      '<p style="margin:0 0 18px;color:#666">Reply to this email to answer ' + name + " directly.</p>" +
      '<table style="border-collapse:collapse">' + rows + "</table>" +
      '<p style="margin:22px 0 0;color:#999;font-size:12px">Saved to the Vision Saudi Leads sheet.</p>' +
      "</div>",
  });
}
