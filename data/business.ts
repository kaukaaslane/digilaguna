/**
 * Ettevõtte identiteet ühes kohas.
 *
 * Need andmed olid laiali: registrikood ja e-post õigusliku teate lehel,
 * linn sõnastikes, logo avalehel. Struktuurandmed vajavad neid korraga
 * ja Google tahab, et need oleksid kõikjal ühesugused — erinev kirjapilt
 * eri kohtades nõrgendab seost ettevõtte ja saidi vahel.
 *
 * SOCIAL on tühi, kuni profiilide aadressid on käes. Niipea kui nad siia
 * tulevad, teab Google, et need kontod on sinu omad, ja profiilidelt
 * saidile viivad lingid hakkavad brändiotsingut toetama.
 */

export const SITE = "https://digilaguna.com";

export const BUSINESS = {
  /** Kaubamärginimi, mida inimesed otsivad. */
  name: "Digilaguna",

  /** Ametlik nimi äriregistris. */
  legalName: "Digilaguna OÜ",

  /** Eesti äriregistri kood. */
  registryCode: "17334320",

  email: "info@digilaguna.com",

  city: "Tallinn",
  country: "EE",

  /** Hinnaklass — Google'i kohalikud tulemused näitavad seda. */
  priceRange: "€€",
} as const;

/**
 * Profiilid, mis kuuluvad samale ettevõttele. Lähevad `sameAs`-i.
 * Lisa siia terve aadress, nt "https://www.facebook.com/digilaguna".
 * Tühjana jäetakse väli struktuurandmetest välja.
 */
export const SOCIAL: string[] = [];

/** Piirkonnad, kuhu päriselt teenindame — tarne käib praegu EE ja FI. */
export const AREA_SERVED = ["Estonia", "Finland"] as const;
