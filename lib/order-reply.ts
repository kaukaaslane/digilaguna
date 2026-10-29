import { PRODUCTION_DAYS, SHIPPING, SIZES } from "@/data/pood";
import { BUSINESS, PAYMENT } from "@/data/business";
import { isLocale, type Locale } from "@/i18n/config";

/**
 * Koostab tellimusele saatmisvalmis vastuse kliendi keeles.
 *
 * Hinnad arvutatakse SIZES-ist ja SHIPPING-ust uuesti, mitte ei võeta
 * kliendi saadetud väljadelt. Vorm saadab `total` ja `unitPrice` kaasa,
 * aga need tulevad brauserist ja neid ei tohi usaldada — kui mustand
 * ehitada nende pealt, siis saaks mustand valetada. Nii ei saa.
 *
 * Siin ei ole tehisaru ega malli täitmist väljastpoolt. Tellimus on iga
 * kord ühesugune ja ettearvatav; just seepärast ongi siin mall õige
 * tööriist ja just seepärast ei saa ta hinda valesti välja mõelda.
 */

type Fields = {
  locale: string;
  name: string;
  sizeId: string;
  deliveryId: string;
  quantity: number;
  product: string;
};

/** Vormi tarnevaliku id -> hind andmefailist. null = küsi hinda. */
const SHIPPING_BY_ID: Record<string, number | null> = {
  parcel: SHIPPING.parcelMachineEE,
  finland: SHIPPING.finland,
  pickup: SHIPPING.pickupTallinn,
};

const money = (n: number) => `${n.toFixed(2).replace(".", ",")} €`;

type Copy = {
  subject: string;
  greeting: string;
  thanks: string;
  work: string;
  size: string;
  quantity: string;
  material: string;
  materialText: string;
  productLine: string;
  delivery: string;
  deliveryAsk: string;
  total: string;
  payment: string;
  reference: string;
  missingPayment: string;
  production: string;
  closing: string;
  deliveryNames: Record<string, string>;
};

const COPY: Record<Locale, Copy> = {
  et: {
    subject: "Tellimuse kinnitus",
    greeting: "Tere",
    thanks: "Aitäh tellimuse eest. Kinnitan üle:",
    work: "Töö",
    size: "Mõõt",
    quantity: "Kogus",
    material: "Kandja",
    materialText: "premium satiinlõuend, pingutatud 2 cm puitalusraamile",
    productLine: "Toode",
    delivery: "Tarne",
    deliveryAsk: "täpsustan eraldi",
    total: "Kokku",
    payment: "Makseandmed",
    reference: "Selgitus",
    missingPayment: "[LISA MAKSEANDMED — IBAN puudub]",
    production: `Töö valmib ${PRODUCTION_DAYS.min}–${PRODUCTION_DAYS.max} tööpäevaga pärast makse laekumist.`,
    closing: "Kui midagi on valesti või soovid muuta, anna teada.",
    deliveryNames: {
      parcel: "pakiautomaati Eestis",
      finland: "Soome",
      pickup: "järeltulemine Tallinnas",
    },
  },
  en: {
    subject: "Order confirmation",
    greeting: "Hi",
    thanks: "Thank you for your order. Confirming the details:",
    work: "Work",
    size: "Size",
    quantity: "Quantity",
    material: "Material",
    materialText: "premium satin canvas, stretched on a 2 cm wooden frame",
    productLine: "Item",
    delivery: "Delivery",
    deliveryAsk: "I will confirm separately",
    total: "Total",
    payment: "Payment details",
    reference: "Reference",
    missingPayment: "[ADD PAYMENT DETAILS — IBAN missing]",
    production: `The work will be ready in ${PRODUCTION_DAYS.min}–${PRODUCTION_DAYS.max} working days after payment arrives.`,
    closing: "If anything is wrong or you would like to change something, let me know.",
    deliveryNames: {
      parcel: "parcel machine in Estonia",
      finland: "Finland",
      pickup: "pickup in Tallinn",
    },
  },
  ru: {
    subject: "Подтверждение заказа",
    greeting: "Здравствуйте",
    thanks: "Спасибо за заказ. Подтверждаю детали:",
    work: "Работа",
    size: "Размер",
    quantity: "Количество",
    material: "Основа",
    materialText: "премиум-холст сатин, натянут на деревянный подрамник 2 см",
    productLine: "Товар",
    delivery: "Доставка",
    deliveryAsk: "уточню отдельно",
    total: "Итого",
    payment: "Реквизиты для оплаты",
    reference: "Назначение платежа",
    missingPayment: "[ДОБАВИТЬ РЕКВИЗИТЫ — IBAN отсутствует]",
    production: `Работа будет готова за ${PRODUCTION_DAYS.min}–${PRODUCTION_DAYS.max} рабочих дней после поступления оплаты.`,
    closing: "Если что-то не так или нужно изменить — дайте знать.",
    deliveryNames: {
      parcel: "почтомат в Эстонии",
      finland: "Финляндия",
      pickup: "самовывоз в Таллинне",
    },
  },
  fi: {
    subject: "Tilausvahvistus",
    greeting: "Hei",
    thanks: "Kiitos tilauksesta. Vahvistan tiedot:",
    work: "Teos",
    size: "Koko",
    quantity: "Määrä",
    material: "Materiaali",
    materialText: "premium-satiinikangas, pingotettu 2 cm:n puukehykseen",
    productLine: "Tuote",
    delivery: "Toimitus",
    deliveryAsk: "vahvistan erikseen",
    total: "Yhteensä",
    payment: "Maksutiedot",
    reference: "Viite",
    missingPayment: "[LISÄÄ MAKSUTIEDOT — IBAN puuttuu]",
    production: `Teos valmistuu ${PRODUCTION_DAYS.min}–${PRODUCTION_DAYS.max} arkipäivässä maksun saapumisen jälkeen.`,
    closing: "Jos jokin on väärin tai haluat muuttaa jotain, kerro ihmeessä.",
    deliveryNames: {
      parcel: "pakettiautomaatti Virossa",
      finland: "Suomi",
      pickup: "nouto Tallinnasta",
    },
  },
};

export function buildOrderReply(f: Fields) {
  /**
   * IBAN tuleb keskkonnamuutujast, mitte koodist — repo on avalik.
   * Sea Vercelis: Settings -> Environment Variables -> PAYMENT_IBAN.
   * Puudumisel jääb mustandisse suurtähtedega märge, nii et pooleldi
   * täidetud kiri ei lähe vaikselt välja.
   *
   * Loetakse päringu ajal, mitte mooduli laadimisel: Verceli "Secret"
   * tüüpi muutujad jõuavad kohale alles käitusajal ja funktsiooni sees
   * lugemine ei sõltu sellest, millal moodul esimest korda laetakse.
   */
  const iban = process.env.PAYMENT_IBAN?.trim() ?? "";

  const locale: Locale = isLocale(f.locale) ? f.locale : "et";
  const t = COPY[locale];

  // Autoriteetne hind andmefailist, mitte kliendilt.
  const sizeRow = SIZES.find((s) => s.id === f.sizeId);
  const unit = sizeRow?.price ?? null;
  const sizeLabel = sizeRow?.label[locale] ?? f.sizeId;

  const shipping = SHIPPING_BY_ID[f.deliveryId] ?? null;
  const deliveryName = t.deliveryNames[f.deliveryId] ?? f.deliveryId;

  const itemTotal = unit === null ? null : unit * f.quantity;
  const grand =
    itemTotal === null || shipping === null ? null : itemTotal + shipping;

  const reference = `${f.product} ${sizeLabel}`;

  const lines: string[] = [
    `${t.greeting}, ${f.name}`,
    "",
    t.thanks,
    "",
    `${t.work}: ${f.product}`,
    `${t.size}: ${sizeLabel}`,
    `${t.quantity}: ${f.quantity}`,
    `${t.material}: ${t.materialText}`,
    "",
  ];

  if (unit !== null && itemTotal !== null) {
    lines.push(
      f.quantity > 1
        ? `${t.productLine}: ${money(unit)} × ${f.quantity} = ${money(itemTotal)}`
        : `${t.productLine}: ${money(unit)}`,
    );
  }

  lines.push(
    `${t.delivery}: ${deliveryName} — ${
      shipping === null ? t.deliveryAsk : money(shipping)
    }`,
  );

  if (grand !== null) lines.push(`${t.total}: ${money(grand)}`);

  lines.push(
    "",
    `${t.payment}:`,
    BUSINESS.legalName,
    iban ? `IBAN: ${iban}` : t.missingPayment,
    `${t.reference}: ${reference}`,
    "",
    t.production,
    "",
    t.closing,
    "",
    PAYMENT.signer,
    BUSINESS.name,
  );

  return {
    subject: `${t.subject} — ${reference}`,
    body: lines.join("\n"),
    /** Serveris arvutatud summa, mida kiri näitab. null = ei saa arvutada. */
    grandTotal: grand,
  };
}
