import type { NextConfig } from "next";
import { locales } from "./i18n/config";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Pood kolis /oied pealt /pood/mandalad peale. Püsisuunamine, et
      // vanad lingid ja juba indekseeritud aadressid ei katkeks.
      ...locales.map((locale) => ({
        source: `/${locale}/oied`,
        destination: `/${locale}/pood/mandalad`,
        permanent: true,
      })),
      { source: "/oied", destination: "/pood/mandalad", permanent: true },
    ];
  },
};

export default nextConfig;
