import type { MetadataRoute } from "next";
import { locales, localeTags } from "@/i18n/config";

const SITE = "https://www.digilaguna.com";

const routes = [
  "", "/services", "/work", "/work/dropmow", "/digital-visuals",
  "/about", "/contact", "/privacy", "/terms", "/cookies", "/legal-notice",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${SITE}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [localeTags[l], `${SITE}/${l}${route}`])
        ),
      },
    }))
  );
}
