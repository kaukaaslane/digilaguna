/**
 * Poe andmed — kollektsioonid ja tooted.
 *
 * UUE KOLLEKTSIOONI LISAMINE
 *   1. Pane pildid kausta  public/pood/<slug>/
 *   2. Lisa kirje COLLECTIONS-massiivi
 *   Rohkem midagi teha ei ole: lehed, sitemap ja menüü tulevad siit.
 *
 * UUE TOOTE LISAMINE
 *   Lisa kirje kollektsiooni products-massiivi. Pildifaili nimi peab
 *   olema sama mis slug: slug "keskoo" -> keskoo.webp
 *
 * Mõõdud, hinnad ja tarne on kõigil kollektsioonidel ühised.
 */

import type { Locale } from "@/i18n/config";

type Localized = Record<Locale, string>;

export type Product = {
  /** URL-is ja pildifaili nimes: /pood/mandalad/keskoo -> keskoo.webp */
  slug: string;
  /** Trükifaili nimi originaalkaustas. Ei lähe avalikku kausta. */
  sourceFile: string;
  name: Localized;
  description: Localized;
};

export type Collection = {
  slug: string;
  name: Localized;
  /** Lühike alapealkiri kollektsiooni kaardil ja lehe heros. */
  tagline: Localized;
  /** Sissejuhatav lõik kollektsiooni lehel. */
  description: Localized;
  products: Product[];
};

export const COLLECTIONS: Collection[] = [
  {
    slug: "mandalad",
    name: {
      et: "Mandalad",
      en: "Mandalas",
      ru: "Мандалы",
      fi: "Mandalat",
    },
    tagline: {
      et: "Digitaalne kunst lõuendil",
      en: "Digital art on canvas",
      ru: "Цифровое искусство на холсте",
      fi: "Digitaalista taidetta kankaalla",
    },
    description: {
      et: "Värvikad mandalad lõuendil, mis toovad seinale sügavust ja soojust. Digitaalne kunst, trükitud Tallinnas.",
      en: "Colourful mandalas on canvas that bring depth and warmth to a wall. Digital art, printed in Tallinn.",
      ru: "Яркие мандалы на холсте, которые добавят стене глубину и тепло. Цифровое искусство, напечатано в Таллинне.",
      fi: "Värikkäitä mandaloja kankaalla, jotka tuovat seinälle syvyyttä ja lämpöä. Digitaalista taidetta, painettu Tallinnassa.",
    },
    products: [
      {
        slug: "keskoo",
        sourceFile: "01_Keskoo.png",
        name: { et: "Kesköö", en: "Midnight", ru: "Полночь", fi: "Keskiyö" },
        description: {
          et: "Kuld ja sinine tumedal taustal.",
          en: "Gold and blue on a dark ground.",
          ru: "Золото и синий на тёмном фоне.",
          fi: "Kultaa ja sinistä tummalla pohjalla.",
        },
      },
      {
        slug: "tuli",
        sourceFile: "02_Tuli.png",
        name: { et: "Tuli", en: "Fire", ru: "Огонь", fi: "Tuli" },
        description: {
          et: "Helendav kuld ja roosa, särab tumedal seinal.",
          en: "Glowing gold and pink, luminous on a dark wall.",
          ru: "Светящееся золото и розовый, сияет на тёмной стене.",
          fi: "Hehkuvaa kultaa ja pinkkiä, loistaa tummalla seinällä.",
        },
      },
      {
        slug: "tahed",
        sourceFile: "03_Tahed.png",
        name: { et: "Tähed", en: "Stars", ru: "Звёзды", fi: "Tähdet" },
        description: {
          et: "Sinised ja roosad valgusjooned.",
          en: "Blue and pink lines of light.",
          ru: "Синие и розовые линии света.",
          fi: "Sinisiä ja pinkkejä valoviivoja.",
        },
      },
      {
        slug: "meri",
        sourceFile: "04_Meri.png",
        name: { et: "Meri", en: "Sea", ru: "Море", fi: "Meri" },
        description: {
          et: "Sinine ja oranž kihtidena, hele taust.",
          en: "Blue and orange in layers on a light ground.",
          ru: "Синий и оранжевый слоями, светлый фон.",
          fi: "Sinistä ja oranssia kerroksina, vaalea pohja.",
        },
      },
      {
        slug: "hamarik",
        sourceFile: "05_Hamarik.png",
        name: { et: "Hämarik", en: "Dusk", ru: "Сумерки", fi: "Hämärä" },
        description: {
          et: "Lilla, sinine ja kuld, rahulik ja pehme.",
          en: "Violet, blue and gold — calm and soft.",
          ru: "Сиреневый, синий и золото, спокойный и мягкий.",
          fi: "Liilaa, sinistä ja kultaa, rauhallinen ja pehmeä.",
        },
      },
      {
        slug: "paike",
        sourceFile: "06_Paike.png",
        name: { et: "Päike", en: "Sun", ru: "Солнце", fi: "Aurinko" },
        description: {
          et: "Soe kuldne õis tumesinisel taustal.",
          en: "A warm golden bloom on deep blue.",
          ru: "Тёплый золотой цветок на тёмно-синем фоне.",
          fi: "Lämmin kultainen kukka tummansinisellä pohjalla.",
        },
      },
      {
        slug: "kuld",
        sourceFile: "07_Kuld.png",
        name: { et: "Kuld", en: "Gold", ru: "Золото", fi: "Kulta" },
        description: {
          et: "Kuldne ornament sügavpruunil taustal.",
          en: "A gold ornament on deep brown.",
          ru: "Золотой орнамент на глубоком коричневом фоне.",
          fi: "Kultainen ornamentti syvänruskealla pohjalla.",
        },
      },
      {
        slug: "sugis",
        sourceFile: "08_Sugis.png",
        name: { et: "Sügis", en: "Autumn", ru: "Осень", fi: "Syksy" },
        description: {
          et: "Oranž, lilla ja türkiis, erksad sügisvärvid.",
          en: "Orange, violet and turquoise — bright autumn colour.",
          ru: "Оранжевый, фиолетовый и бирюзовый, яркие осенние цвета.",
          fi: "Oranssia, violettia ja turkoosia, kirkkaat syysvärit.",
        },
      },
      {
        slug: "siid",
        sourceFile: "09_Siid.png",
        name: { et: "Siid", en: "Silk", ru: "Шёлк", fi: "Silkki" },
        description: {
          et: "Roostepunane, sinine ja kuld kreemjal taustal.",
          en: "Rust red, blue and gold on cream.",
          ru: "Ржаво-красный, синий и золото на кремовом фоне.",
          fi: "Ruosteenpunaista, sinistä ja kultaa kermanvärisellä pohjalla.",
        },
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Mõõdud, hinnad, tarne — ühised kõigile kollektsioonidele            */
/* ------------------------------------------------------------------ */

export type SizeOption = {
  id: string;
  label: Localized;
  /** Hind eurodes. */
  price: number;
};

export const SIZES: SizeOption[] = [
  {
    id: "30x30",
    label: { et: "30×30 cm", en: "30×30 cm", ru: "30×30 см", fi: "30×30 cm" },
    price: 39,
  },
  {
    id: "40x40",
    label: { et: "40×40 cm", en: "40×40 cm", ru: "40×40 см", fi: "40×40 cm" },
    price: 55,
  },
  {
    id: "50x50",
    label: { et: "50×50 cm", en: "50×50 cm", ru: "50×50 см", fi: "50×50 cm" },
    price: 75,
  },
  {
    id: "triptych",
    label: {
      et: "Kolmik 3× 30×30 cm",
      en: "Triptych 3× 30×30 cm",
      ru: "Триптих 3× 30×30 см",
      fi: "Kolmikko 3× 30×30 cm",
    },
    price: 105,
  },
];

/** Premium satiinlõuend, lisandub valitud mõõdu hinnale. */
export const PREMIUM_SURCHARGE = 8;

export const SHIPPING = {
  parcelMachineEE: 3.9,
  /** null tähendab "küsi hinda". */
  finland: null as number | null,
  pickupTallinn: 0,
};

/** Tööpäevades. */
export const PRODUCTION_DAYS = { min: 3, max: 5 };

/* ------------------------------------------------------------------ */
/* Abifunktsioonid                                                      */
/* ------------------------------------------------------------------ */

export function getCollection(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}

export function getProduct(
  collectionSlug: string,
  productSlug: string
): { collection: Collection; product: Product } | undefined {
  const collection = getCollection(collectionSlug);
  const product = collection?.products.find((p) => p.slug === productSlug);
  return collection && product ? { collection, product } : undefined;
}

/** Veebipildi tee. */
export function imagePath(collectionSlug: string, productSlug: string): string {
  return `/pood/${collectionSlug}/${productSlug}.webp`;
}

/** Odavaim mõõt — kasutatakse "alates X €" juures. */
export const CHEAPEST = Math.min(...SIZES.map((s) => s.price));
