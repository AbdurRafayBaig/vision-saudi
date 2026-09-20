// Locales and text direction.
//
// English is live. Arabic is wired end to end but stays dark until the
// translated copy exists: set NEXT_PUBLIC_LOCALES="en,ar" to turn it on. That
// way the plumbing is exercised by the build and the tests now, and switching
// it on later is a configuration change rather than a rewrite.

export const LOCALES = ["en", "ar"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Locales the site currently serves. Arabic joins once its copy lands. */
export const ENABLED_LOCALES: Locale[] = (process.env.NEXT_PUBLIC_LOCALES ?? DEFAULT_LOCALE)
  .split(",")
  .map((s) => s.trim())
  .filter((s): s is Locale => (LOCALES as readonly string[]).includes(s));

export const RTL_LOCALES: Locale[] = ["ar"];

export const dirOf = (locale: Locale): "ltr" | "rtl" => (RTL_LOCALES.includes(locale) ? "rtl" : "ltr");

export const isEnabled = (locale: Locale) => ENABLED_LOCALES.includes(locale);

/** A path under a locale: "/services" → "/ar/services", or unchanged for English. */
export function localePath(path: string, locale: Locale = DEFAULT_LOCALE): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return locale === DEFAULT_LOCALE ? clean : `/${locale}${clean === "/" ? "" : clean}`;
}
