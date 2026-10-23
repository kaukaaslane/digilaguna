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
      et: "Värvikad mandalad lõuendil, mis toovad seinale sügavust ja soojust.",
      en: "Colourful mandalas on canvas that bring depth and warmth to a wall.",
      ru: "Яркие мандалы на холсте, которые добавят стене глубину и тепло.",
      fi: "Värikkäitä mandaloja kankaalla, jotka tuovat seinälle syvyyttä ja lämpöä.",
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
  {
    slug: "seened",
    name: {
      et: "Seened",
      en: "Mushrooms",
      ru: "Грибы",
      fi: "Sienet",
    },
    tagline: {
      et: "Seente müstiline maailm",
      en: "The mystical world of fungi",
      ru: "Мистический мир грибов",
      fi: "Sienten myyttinen maailma",
    },
    description: {
      et: "Seente omaette kooslus — see, mis elab metsa all ja mida harva märgatakse.",
      en: "The world fungi make among themselves — the one that lives under the forest and is rarely noticed.",
      ru: "Собственный мир грибов — тот, что живёт под лесом и редко попадается на глаза.",
      fi: "Sienten oma yhteisö — se, joka elää metsän alla ja jonka harvoin huomaa.",
    },
    products: [
      {
        slug: "meditatsioon",
        sourceFile: "seened-01.png",
        name: { et: "Meditatsioon", en: "Meditation", ru: "Медитация", fi: "Meditaatio" },
        description: {
          et: "Keegi istub helendavate seente keskel ja loeb.",
          en: "Someone sits among glowing mushrooms, reading.",
          ru: "Кто-то сидит среди светящихся грибов и читает.",
          fi: "Joku istuu hohtavien sienten keskellä ja lukee.",
        },
      },
      {
        slug: "mustiline-ring-i",
        sourceFile: "seened-02.png",
        name: { et: "Müstiline ring I", en: "Mystic Ring I", ru: "Мистическое кольцо I", fi: "Mystinen rengas I" },
        description: {
          et: "Seened kasvavad helendava veering keskelt.",
          en: "Mushrooms rise from the middle of a glowing ripple.",
          ru: "Грибы растут из центра светящегося круга на воде.",
          fi: "Sienet nousevat hohtavan väreilyn keskeltä.",
        },
      },
      {
        slug: "mustiline-ring-ii",
        sourceFile: "seened-03.png",
        name: { et: "Müstiline ring II", en: "Mystic Ring II", ru: "Мистическое кольцо II", fi: "Mystinen rengas II" },
        description: {
          et: "Valgusrõngas metsa ja vee vahel.",
          en: "A ring of light between the forest and the water.",
          ru: "Кольцо света между лесом и водой.",
          fi: "Valorengas metsän ja veden välissä.",
        },
      },
      {
        slug: "seenepere",
        sourceFile: "seened-04.png",
        name: { et: "Seenepere", en: "The Family", ru: "Семейство", fi: "Sieniperhe" },
        description: {
          et: "Sinised kübarad ripuvad nagu laternad metsa all.",
          en: "Blue caps hang like lanterns under the forest.",
          ru: "Синие шляпки висят под лесом, словно фонари.",
          fi: "Siniset lakit riippuvat kuin lyhdyt metsän alla.",
        },
      },
      {
        slug: "salajane-rada",
        sourceFile: "seened-05.png",
        name: { et: "Salajane rada", en: "Secret Path", ru: "Тайная тропа", fi: "Salainen polku" },
        description: {
          et: "Rada läbi metsa, mida valgustavad seened.",
          en: "A path through the forest, lit by mushrooms.",
          ru: "Тропа через лес, освещённая грибами.",
          fi: "Polku metsän läpi, sienten valaisemana.",
        },
      },
    ],
  },
  {
    slug: "sulamid",
    name: {
      et: "Sulamid",
      en: "Alloys",
      ru: "Сплавы",
      fi: "Metalliseokset",
    },
    tagline: {
      et: "Vedelad metallid mikroskoobi all",
      en: "Liquid metals under the microscope",
      ru: "Жидкие металлы под микроскопом",
      fi: "Nestemäisiä metalleja mikroskoopin alla",
    },
    description: {
      et: "Sula metall suure suurendusega — voolav, tarduv, hõõguv.",
      en: "Molten metal at high magnification — flowing, setting, glowing.",
      ru: "Расплавленный металл при большом увеличении — текущий, застывающий, светящийся.",
      fi: "Sulaa metallia suurennettuna — virtaavaa, jähmettyvää, hehkuvaa.",
    },
    products: [
      {
        slug: "raud",
        sourceFile: "sulamid-01.png",
        name: { et: "Raud", en: "Iron", ru: "Железо", fi: "Rauta" },
        description: {
          et: "Must pind, mille all hõõgub veel punane.",
          en: "A black surface with red still glowing beneath it.",
          ru: "Чёрная поверхность, под которой ещё тлеет красное.",
          fi: "Musta pinta, jonka alla hehkuu yhä punainen.",
        },
      },
      {
        slug: "sulahobe",
        sourceFile: "sulamid-02.png",
        name: { et: "Sulahõbe", en: "Molten Silver", ru: "Расплавленное серебро", fi: "Sula hopea" },
        description: {
          et: "Hõbedased piisad kulla ja musta vahel.",
          en: "Silver droplets between gold and black.",
          ru: "Серебряные капли между золотом и чёрным.",
          fi: "Hopeisia pisaroita kullan ja mustan välissä.",
        },
      },
      {
        slug: "sulakuld",
        sourceFile: "sulamid-03.png",
        name: { et: "Sulakuld", en: "Molten Gold", ru: "Расплавленное золото", fi: "Sula kulta" },
        description: {
          et: "Kuld voolab mustast välja ja tardub.",
          en: "Gold flows out of the black and sets.",
          ru: "Золото вытекает из черноты и застывает.",
          fi: "Kulta virtaa mustasta ulos ja jähmettyy.",
        },
      },
      {
        slug: "plaatina",
        sourceFile: "sulakuld2.png",
        name: { et: "Plaatina", en: "Platinum", ru: "Платина", fi: "Platina" },
        description: {
          et: "Kuld ja roheline, mis voolavad teineteise sisse.",
          en: "Gold and green flowing into one another.",
          ru: "Золото и зелёное, перетекающие друг в друга.",
          fi: "Kultaa ja vihreää, jotka virtaavat toisiinsa.",
        },
      },
      {
        slug: "maak",
        sourceFile: "sulamid-05.png",
        name: { et: "Maak", en: "Ore", ru: "Руда", fi: "Malmi" },
        description: {
          et: "Kuldne soon kivimi ja türkiisi vahel.",
          en: "A gold seam between rock and turquoise.",
          ru: "Золотая жила между породой и бирюзой.",
          fi: "Kultainen juonne kiven ja turkoosin välissä.",
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
  /**
   * Külje pikkus sentimeetrites. Kõik mõõdud on ruudud, nii et üks arv
   * piisab. Seinaeelvaade arvutab sellest päris suuruse — ära tuleta
   * seda id-stringist, muidu läheb katki esimese mitteruudu lisamisel.
   */
  cm: number;
};

export const SIZES: SizeOption[] = [
  {
    id: "20x20",
    label: { et: "20×20 cm", en: "20×20 cm", ru: "20×20 см", fi: "20×20 cm" },
    price: 29,
    cm: 20,
  },
  {
    id: "30x30",
    label: { et: "30×30 cm", en: "30×30 cm", ru: "30×30 см", fi: "30×30 cm" },
    price: 45,
    cm: 30,
  },
  {
    id: "40x40",
    label: { et: "40×40 cm", en: "40×40 cm", ru: "40×40 см", fi: "40×40 cm" },
    price: 59,
    cm: 40,
  },
  {
    id: "50x50",
    label: { et: "50×50 cm", en: "50×50 cm", ru: "50×50 см", fi: "50×50 cm" },
    price: 79,
    cm: 50,
  },
];

/** Premium satiinlõuend, lisandub valitud mõõdu hinnale. */
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
