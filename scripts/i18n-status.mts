// Translation coverage per locale. Run with `npm run i18n:status`.
// Reads the catalogues directly so it stays a plain script, independent of the
// app's module aliases.
import fs from "node:fs";

const read = (locale: string): Record<string, string> =>
  JSON.parse(fs.readFileSync(new URL(`../messages/${locale}.json`, import.meta.url), "utf8"));

const DEFAULT_LOCALE = "en";
const DIRECTION: Record<string, string> = { en: "ltr", ar: "rtl" };
const served = (process.env.NEXT_PUBLIC_LOCALES ?? DEFAULT_LOCALE).split(",").map((s) => s.trim());

const base = read(DEFAULT_LOCALE);
const keys = Object.keys(base);
let incomplete = false;

for (const locale of Object.keys(DIRECTION)) {
  const catalogue = locale === DEFAULT_LOCALE ? base : read(locale);
  const missing = keys.filter((k) => !catalogue[k]);
  const done = keys.length - missing.length;
  const live = served.includes(locale) ? "live" : "not served";
  console.log(`${locale} (${DIRECTION[locale]}, ${live}): ${done}/${keys.length} strings — ${Math.round((done / keys.length) * 100)}%`);

  const extra = Object.keys(catalogue).filter((k) => !(k in base));
  if (extra.length) console.log(`  not in ${DEFAULT_LOCALE}.json: ${extra.join(", ")}`);
  if (missing.length && locale !== DEFAULT_LOCALE) {
    incomplete = true;
    console.log(`  missing: ${missing.slice(0, 8).join(", ")}${missing.length > 8 ? ` … +${missing.length - 8} more` : ""}`);
  }
}

if (incomplete) console.log("\nUntranslated keys fall back to English at runtime.");
