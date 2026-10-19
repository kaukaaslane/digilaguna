import type { MetadataRoute } from "next";
import { locales, localeTags } from "@/i18n/config";
import { COLLECTIONS } from "@/data/pood";

const SITE = "https://www.digilaguna.com";

/** Püsilehed. Poe lehed tulevad andmefailist, vt allpool. */
const staticRoutes = [
  "", "/services", "/work", "/work/dropmow", "/digital-visuals", "/pood",
  "/about", "/contact", "/privacy", "/terms", "/cookies", "/legal-notice",
];

/** /pood/<kollektsioon> ja /pood/<kollektsioon>/<toode> */
const shopRoutes = COLLECTIONS.flatMap((c) => [
  `/pood/${c.slug}`,
  ...c.products.map((p) => `/pood/${c.slug}/${p.slug}`),
]);

const routes = [...staticRoutes, ...shopRoutes];

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
