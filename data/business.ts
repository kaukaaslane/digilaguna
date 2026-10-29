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
 * Profiilid, mis kuuluvad samale ettevõttele. Lähevad `sameAs`-i ja
 * ütlevad Google'ile, et need kontod ja see sait on üks ettevõte.
 *
 * Facebooki aadress on numbriline, sest lehel pole kasutajanime
 * määratud. See töötab — Google järgib teda ja numbriline kuju jääb
 * kehtima ka siis, kui nimi hiljem lisandub.
 *
 * Instagram on meelega puudu: olemasolev konto on isiklik, mitte
 * ettevõtte oma. Vale seos on halvem kui seos puudu, sest sameAs
 * väidab, et see konto ON ettevõte.
 */
export const SOCIAL: string[] = [
  "https://www.facebook.com/profile.php?id=61577596337753",
];

/** Piirkonnad, kuhu päriselt teenindame — tarne käib praegu EE ja FI. */
export const AREA_SERVED = ["Estonia", "Finland"] as const;

/**
 * Makseandmed, mis lähevad tellimuse vastusesse.
 *
 * Tühjana jääb mustandisse nähtav märge, et neid pole. Nii ei lähe
 * pooleldi täidetud kiri kogemata välja — parem silmatorkav auk kui
 * vaikne puudumine.
 */
export const PAYMENT = {
  /**
   * Kes kirjale alla kirjutab. IBAN-it siin EI OLE ja ei tohi olla:
   * see repo on avalik ja git ajalugu ei unusta — ühe commitiga sees
   * olnud konto number jääb sinna ka pärast rea kustutamist.
   *
   * IBAN loetakse keskkonnamuutujast PAYMENT_IBAN, vt lib/order-reply.ts.
   */
  signer: "Toomas",
};
