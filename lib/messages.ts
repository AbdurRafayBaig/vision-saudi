import en from "@/messages/en.json";
import ar from "@/messages/ar.json";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";

export type MessageKey = keyof typeof en;

const CATALOGUES: Record<Locale, Partial<Record<MessageKey, string>>> = {
  en,
  ar: ar as Partial<Record<MessageKey, string>>,
};

/**
 * Translator for a locale, falling back to English per key.
 *
 * Per-key fallback rather than per-locale is deliberate: it means Arabic can go
 * live with half the strings translated and the rest still readable, instead of
 * waiting for a complete catalogue or showing raw keys to visitors.
 */
export function translator(locale: Locale = DEFAULT_LOCALE) {
  const catalogue = CATALOGUES[locale] ?? {};
  return (key: MessageKey): string => catalogue[key] || en[key] || key;
}

/** How much of a locale is actually translated — reported by `npm run i18n:status`. */
export function coverage(locale: Locale): { translated: number; total: number; missing: MessageKey[] } {
  const keys = Object.keys(en) as MessageKey[];
  const catalogue = CATALOGUES[locale] ?? {};
  const missing = keys.filter((k) => !catalogue[k]);
  return { translated: keys.length - missing.length, total: keys.length, missing };
}
