import { localeTags, type Locale } from "@/i18n/config";
import { AREA_SERVED, BUSINESS, SITE, SOCIAL } from "@/data/business";

/**
 * Ütleb Google'ile, kes selle saidi omanik on.
 *
 * Enne seda olid struktuurandmed ainult tootelehtedel: Google teadis, et
 * siin müüakse lõuendeid, aga mitte seda, et digilaguna.com *on*
 * Digilaguna OÜ Tallinnas. Just see seos paneb brändiotsingu tööle,
 * toidab kohalikke tulemusi ja on see, mida AI-assistendid loevad, kui
 * neilt ettevõtte kohta küsitakse.
 *
 * Kaks sõlme @id-dega, et nad omavahel viitaksid ja Google ei arvaks,
 * et tegemist on kahe eri asjaga. @graph lubab mõlemad ühte plokki.
 */
export default function SiteSchema({
  locale,
  description,
}: {
  locale: Locale;
  description: string;
}) {
  const org: Record<string, unknown> = {
    "@type": "ProfessionalService",
    "@id": `${SITE}/#organization`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: SITE,
    email: BUSINESS.email,
    description,
    logo: {
      "@type": "ImageObject",
      url: `${SITE}/logo.svg`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.city,
      addressCountry: BUSINESS.country,
    },
    areaServed: AREA_SERVED.map((name) => ({ "@type": "Country", name })),
    identifier: {
      "@type": "PropertyValue",
      propertyID: "Estonian business registry code",
      value: BUSINESS.registryCode,
    },
    // Neljas keeles teenindamine on päris eristaja, mitte kaunistus.
    knowsLanguage: Object.values(localeTags),
    priceRange: BUSINESS.priceRange,
  };

  // Tühi sameAs on müra — jäta väli välja, kuni profiilid on teada.
  if (SOCIAL.length > 0) org.sameAs = SOCIAL;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      org,
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: BUSINESS.name,
        publisher: { "@id": `${SITE}/#organization` },
        inLanguage: localeTags[locale],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
