export const locales = ["et", "en", "ru", "fi"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "et";

/** Name of each language in that language — never translate these. */
export const localeNames: Record<Locale, string> = {
  et: "Eesti",
  en: "English",
  ru: "Русский",
  fi: "Suomi",
};

/** BCP-47 tags for <html lang> and hreflang. */
export const localeTags: Record<Locale, string> = {
  et: "et-EE",
  en: "en",
  ru: "ru",
  fi: "fi-FI",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Swap the locale segment of a pathname, keeping the rest of the route.
 * "/en/work/dropmow" + "et" -> "/et/work/dropmow"
 */
export function localizePath(pathname: string, locale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length && isLocale(segments[0])) {
    segments[0] = locale;
  } else {
    segments.unshift(locale);
  }
  return "/" + segments.join("/");
}
