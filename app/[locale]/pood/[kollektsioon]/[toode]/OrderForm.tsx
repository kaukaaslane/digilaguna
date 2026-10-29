"use client";

import { useState } from "react";
import WallPreview from "./WallPreview";
import { SHIPPING } from "@/data/pood";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

type ShopText = Dictionary["shop"];

type SizeView = { id: string; label: string; price: number; cm: number };

type Status = "idle" | "sending" | "sent" | "error";

/** Suurem kogus on juba kokkulepe, mitte poeostu — suunatakse sõnumisse. */
const MAX_QTY = 10;

/**
 * Sama kuju mis kinnituskirjas (lib/order-reply.ts): kaks kohta komast.
 * Klient peab nägema täpselt sama numbrit enne tellimust ja pärast seda —
 * "3,9 €" vormis ja "3,90 €" kirjas on sama summa, aga näeb välja nagu
 * kaks eri hinda.
 */
const money = (n: number) => `${n.toFixed(2).replace(".", ",")} €`;

export default function OrderForm({
  locale,
  t,
  sizes,
  productName,
  productSlug,
  collectionSlug,
  imageSrc,
}: {
  locale: Locale;
  t: ShopText;
  sizes: SizeView[];
  productName: string;
  productSlug: string;
  collectionSlug: string;
  imageSrc: string;
}) {
  const [sizeId, setSizeId] = useState(sizes[0].id);
  const [qty, setQty] = useState(1);
  const [deliveryId, setDeliveryId] = useState("parcel");
  const [status, setStatus] = useState<Status>("idle");
  const [fieldError, setFieldError] = useState<string | null>(null);

  const size = sizes.find((s) => s.id === sizeId) ?? sizes[0];
  const unitPrice = size.price;
  const itemTotal = unitPrice * qty;

  /**
   * Tarne hind käib valikuga kaasa, mitte ei tule alles kinnituskirjaga.
   * Varem näitas vorm ainult toote hinda ja kiri lisas tarne juurde —
   * kliendi jaoks tähendas see, et hind tõusis pärast tellimuse saatmist.
   *
   * null = hinda ei saa ette öelda (Soome). Siis ei ole ka lõppsummat,
   * mida näidata: parem jätta see lahti kui pakkuda numbrit, mis muutub.
   */
  const deliveryOptions = [
    { id: "parcel", label: t.delivery.parcel, price: SHIPPING.parcelMachineEE },
    { id: "finland", label: t.delivery.finland, price: SHIPPING.finland },
    { id: "pickup", label: t.delivery.pickup, price: SHIPPING.pickupTallinn },
  ];

  const delivery =
    deliveryOptions.find((d) => d.id === deliveryId) ?? deliveryOptions[0];
  const shipping = delivery.price;
  const total = shipping === null ? null : itemTotal + shipping;

  /** Hinnasilt tarnevaliku juures: tasuta, summa või "küsi hinda". */
  const shippingLabel = (price: number | null) =>
    price === null
      ? t.delivery.finlandPrice
      : price === 0
        ? t.delivery.free
        : money(price);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name) return setFieldError(t.form.errorName);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return setFieldError(t.form.errorEmail);
    if (!phone) return setFieldError(t.form.errorPhone);

    setFieldError(null);
    setStatus("sending");

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          name,
          email,
          phone,
          message,
          product: productName,
          productSlug: `${collectionSlug}/${productSlug}`,
          size: size.label,
          sizeId: size.id,
          quantity: qty,
          unitPrice,
          delivery: delivery.label,
          deliveryId,
          // Mida klient päriselt ekraanil nägi. Soome puhul on see toote
          // summa, sest tarnet ei saanud ette öelda.
          total: total ?? itemTotal,
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-line-strong p-8">
        <div className="mb-4 eyebrow">{t.form.eyebrow}</div>
        <p className="text-lg text-success">{t.form.success}</p>
      </div>
    );
  }

  return (
    <div>
      {/* Mõõt */}
      <fieldset>
        <legend className="mb-3 eyebrow">{t.product.selectSize}</legend>

        <div>
          {sizes.map((s) => (
            <label
              key={s.id}
              className="flex cursor-pointer items-baseline justify-between gap-6 rule py-3"
            >
              <span className="flex items-baseline gap-3 text-sm">
                <input
                  type="radio"
                  name="size"
                  value={s.id}
                  checked={sizeId === s.id}
                  onChange={() => setSizeId(s.id)}
                  className="accent-[var(--color-accent)]"
                />
                {s.label}
              </span>
              <span className="text-sm font-medium">{money(s.price)}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Seinaeelvaade. Mõõt tuleb valitud suurusest, nii et kliendil pole
          vaba skaalat — ta ei saa kokku klõpsida mõõtu, mida me ei müü. */}
      <WallPreview
        src={imageSrc}
        alt={productName}
        sizeCm={size.cm}
        sizeLabel={size.label}
        t={t.wallPreview}
      />

      {/* Kogus */}
      <div className="mt-4 flex items-center justify-between gap-6 rule py-3">
        <span className="text-sm">{t.product.quantity}</span>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setQty((n) => Math.max(1, n - 1))}
            disabled={qty <= 1}
            aria-label={t.product.quantityDecrease}
            className="qty-btn"
          >
            &minus;
          </button>

          <span
            aria-live="polite"
            className="w-10 text-center text-sm font-medium tabular-nums"
          >
            {qty}
          </span>

          <button
            type="button"
            onClick={() => setQty((n) => Math.min(MAX_QTY, n + 1))}
            disabled={qty >= MAX_QTY}
            aria-label={t.product.quantityIncrease}
            className="qty-btn"
          >
            +
          </button>
        </div>
      </div>

      {/* Tarneviis */}
      <div className="mt-6">
        <label htmlFor="delivery" className="mb-3 block eyebrow">
          {t.delivery.label}
        </label>
        <select
          id="delivery"
          value={deliveryId}
          onChange={(e) => setDeliveryId(e.target.value)}
          className="w-full border border-line bg-bg-raised px-4 py-3 text-base text-text"
        >
          {deliveryOptions.map((d) => (
            <option key={d.id} value={d.id}>
              {d.label} &mdash; {shippingLabel(d.price)}
            </option>
          ))}
        </select>
      </div>

      {/* Hinna koosseis lahti: toode, tarne, kokku. Nii ei ole
          kinnituskirjas ühtki numbrit, mida klient siin ei näinud. */}
      <div className="mt-6 border-t border-line-strong pt-5">
        <div className="flex items-baseline justify-between gap-6 text-sm">
          <span className="text-text-secondary">
            {t.form.product}
            {qty > 1 && (
              <span className="ml-2 text-text-faint tabular-nums">
                {qty} &times; {money(unitPrice)}
              </span>
            )}
          </span>
          <span className="tabular-nums">{money(itemTotal)}</span>
        </div>

        <div className="mt-2 flex items-baseline justify-between gap-6 text-sm">
          <span className="text-text-secondary">{t.delivery.eyebrow}</span>
          <span className="tabular-nums">{shippingLabel(shipping)}</span>
        </div>

        <div className="mt-4 flex items-baseline justify-between gap-6 border-t border-line pt-4">
          <span className="eyebrow">{t.form.total}</span>
          <span className="text-2xl font-medium tabular-nums">
            {money(total ?? itemTotal)}
          </span>
        </div>
      </div>

      {/* Vorm */}
      <form onSubmit={submit} className="mt-8 space-y-4">
        <Field name="name" label={t.form.name} autoComplete="name" required />
        <Field
          name="email"
          label={t.form.email}
          type="email"
          autoComplete="email"
          required
        />
        <Field
          name="phone"
          label={t.form.phone}
          type="tel"
          autoComplete="tel"
          required
        />

        <div>
          <label htmlFor="message" className="mb-2 block eyebrow">
            {t.form.message}
            <span className="ml-2 text-text-faint">
              {t.form.messageOptional}
            </span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            maxLength={2000}
            className="w-full border border-line bg-bg-raised px-4 py-3 text-base text-text"
          />
        </div>

        {fieldError && <p className="text-sm text-error">{fieldError}</p>}

        {status === "error" && (
          <p className="text-sm text-error">{t.form.errorGeneric}</p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-primary w-full justify-center disabled:opacity-60"
        >
          {status === "sending" ? t.form.sending : t.form.submit}
          <span aria-hidden className="btn-arrow">
            &rarr;
          </span>
        </button>
      </form>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  autoComplete,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block eyebrow">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        maxLength={200}
        className="w-full border border-line bg-bg-raised px-4 py-3 text-base text-text"
      />
    </div>
  );
}
