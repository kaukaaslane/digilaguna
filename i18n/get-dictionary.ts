import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/en";

// Dynamic imports keep each locale in its own chunk — a visitor on /et never
// downloads the Russian or Finnish strings.
const dictionaries = {
  et: () => import("./dictionaries/et").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
  ru: () => import("./dictionaries/ru").then((m) => m.default),
  fi: () => import("./dictionaries/fi").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}

export type { Dictionary };
