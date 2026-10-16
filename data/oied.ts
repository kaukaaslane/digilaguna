/**
 * Kollektsioon "Õied" — mandala-lõuendiprindid.
 *
 * Toodete lisamine: lisa kirje PRODUCTS-massiivi. Mõõdud ja hinnad on
 * kõigile toodetele ühised, seega neid eraldi toote juures määrata ei ole vaja.
 */

import type { Locale } from "@/i18n/config";

type Localized = Record<Locale, string>;

export type Product = {
  /** Kasutatakse URL-is ja pildifaili nimes: /oied/keskoo, pilt keskoo.webp */
  slug: string;
  /** Trükifaili nimi originaalkaustas (ei lähe avalikku kausta). */
  sourceFile: string;
  /** Veebipilt public/-kaustas. */
  image: string;
  /** Lõuendi-mockup (pilt seinal). Lisandub hiljem. */
  mockup?: string;
  name: Localized;
  description: Localized;
};

export type SizeOption = {
  id: string;
  label: Localized;
  /** Hind eurodes. */
  price: number;
};

export const PRODUCTS: Product[] = [
  {
    slug: "keskoo",
    sourceFile: "01_Keskoo.png",
    image: "/oied/keskoo.webp",
    name: {
      et: "Kesköö",
      ru: "Полночь",
      fi: "Keskiyö",
      en: "Midnight",
    },
    description: {
      et: "Kuld ja sinine tumedal taustal.",
      ru: "Золото и синий на тёмном фоне.",
      fi: "Kultaa ja sinistä tummalla pohjalla.",
      en: "Gold and blue on a dark ground.",
    },
  },
  {
    slug: "tuli",
    sourceFile: "02_Tuli.png",
    image: "/oied/tuli.webp",
    name: { et: "Tuli", ru: "Огонь", fi: "Tuli", en: "Fire" },
    description: {
      et: "Helendav kuld ja roosa, särab tumedal seinal.",
      ru: "Светящееся золото и розовый, сияет на тёмной стене.",
      fi: "Hehkuvaa kultaa ja pinkkiä, loistaa tummalla seinällä.",
      en: "Glowing gold and pink, luminous on a dark wall.",
    },
  },
  {
    slug: "tahed",
    sourceFile: "03_Tahed.png",
    image: "/oied/tahed.webp",
    name: { et: "Tähed", ru: "Звёзды", fi: "Tähdet", en: "Stars" },
    description: {
      et: "Sinised ja roosad valgusjooned.",
      ru: "Синие и розовые линии света.",
      fi: "Sinisiä ja pinkkejä valoviivoja.",
      en: "Blue and pink lines of light.",
    },
  },
  {
    slug: "meri",
    sourceFile: "04_Meri.png",
    image: "/oied/meri.webp",
    name: { et: "Meri", ru: "Море", fi: "Meri", en: "Sea" },
    description: {
      et: "Sinine ja oranž kihtidena, hele taust.",
      ru: "Синий и оранжевый слоями, светлый фон.",
      fi: "Sinistä ja oranssia kerroksina, vaalea pohja.",
      en: "Blue and orange in layers on a light ground.",
    },
  },
  {
    slug: "hamarik",
    sourceFile: "05_Hamarik.png",
    image: "/oied/hamarik.webp",
    name: { et: "Hämarik", ru: "Сумерки", fi: "Hämärä", en: "Dusk" },
    description: {
      et: "Lilla, sinine ja kuld, rahulik ja pehme.",
      ru: "Сиреневый, синий и золото, спокойный и мягкий.",
      fi: "Liilaa, sinistä ja kultaa, rauhallinen ja pehmeä.",
      en: "Violet, blue and gold — calm and soft.",
    },
  },
  {
    slug: "paike",
    sourceFile: "06_Paike.png",
    image: "/oied/paike.webp",
    name: { et: "Päike", ru: "Солнце", fi: "Aurinko", en: "Sun" },
    description: {
      et: "Soe kuldne õis tumesinisel taustal.",
      ru: "Тёплый золотой цветок на тёмно-синем фоне.",
      fi: "Lämmin kultainen kukka tummansinisellä pohjalla.",
      en: "A warm golden bloom on deep blue.",
    },
  },
  {
    slug: "kuld",
    sourceFile: "07_Kuld.png",
    image: "/oied/kuld.webp",
    name: { et: "Kuld", ru: "Золото", fi: "Kulta", en: "Gold" },
    description: {
      et: "Kuldne ornament sügavpruunil taustal.",
      ru: "Золотой орнамент на глубоком коричневом фоне.",
      fi: "Kultainen ornamentti syvänruskealla pohjalla.",
      en: "A gold ornament on deep brown.",
    },
  },
  {
    slug: "sugis",
    sourceFile: "08_Sugis.png",
    image: "/oied/sugis.webp",
    name: { et: "Sügis", ru: "Осень", fi: "Syksy", en: "Autumn" },
    description: {
      et: "Oranž, lilla ja türkiis, erksad sügisvärvid.",
      ru: "Оранжевый, фиолетовый и бирюзовый, яркие осенние цвета.",
      fi: "Oranssia, violettia ja turkoosia, kirkkaat syysvärit.",
      en: "Orange, violet and turquoise — bright autumn colour.",
    },
  },
  {
    slug: "siid",
    sourceFile: "09_Siid.png",
    image: "/oied/siid.webp",
    name: { et: "Siid", ru: "Шёлк", fi: "Silkki", en: "Silk" },
    description: {
      et: "Roostepunane, sinine ja kuld kreemjal taustal.",
      ru: "Ржаво-красный, синий и золото на кремовом фоне.",
      fi: "Ruosteenpunaista, sinistä ja kultaa kermanvärisellä pohjalla.",
      en: "Rust red, blue and gold on cream.",
    },
  },
];

export const SIZES: SizeOption[] = [
  {
    id: "30x30",
    label: { et: "30×30 cm", ru: "30×30 см", fi: "30×30 cm", en: "30×30 cm" },
    price: 39,
  },
  {
    id: "40x40",
    label: { et: "40×40 cm", ru: "40×40 см", fi: "40×40 cm", en: "40×40 cm" },
    price: 55,
  },
  {
    id: "50x50",
    label: { et: "50×50 cm", ru: "50×50 см", fi: "50×50 cm", en: "50×50 cm" },
    price: 75,
  },
  {
    id: "triptych",
    label: {
      et: "Kolmik 3× 30×30 cm",
      ru: "Триптих 3× 30×30 см",
      fi: "Kolmikko 3× 30×30 cm",
      en: "Triptych 3× 30×30 cm",
    },
    price: 105,
  },
];

/** Premium satiinlõuend, lisandub valitud mõõdu hinnale. */
export const PREMIUM_SURCHARGE = 8;

export const SHIPPING = {
  parcelMachineEE: 3.9,
  /** Soome hind täpsustamisel — null tähendab "küsi hinda". */
  finland: null as number | null,
  pickupTallinn: 0,
};

/** Tööpäevades. */
export const PRODUCTION_DAYS = { min: 3, max: 5 };
