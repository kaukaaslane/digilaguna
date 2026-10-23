"use client";

import { useState } from "react";
import WallPreview from "./WallPreview";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

type ShopText = Dictionary["shop"];

type SizeView = { id: string; label: string; price: number; cm: number };

type Status = "idle" | "sending" | "sent" | "error";

/** Suurem kogus on juba kokkulepe, mitte poeostu — suunatakse sõnumisse. */
const MAX_QTY = 10;

const money = (n: number) => `${n.toString().replace(".", ",")} €`;

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
  const total = unitPrice * qty;

  const deliveryOptions = [
    { id: "parcel", label: t.delivery.parcel },
    { id: "finland", label: t.delivery.finland },
    { id: "pickup", label: t.delivery.pickup },
  ];

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
          quantity: qty,
          unitPrice,
          delivery:
            deliveryOptions.find((d) => d.id === deliveryId)?.label ?? "",
          total,
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
          className="w-full border border-line bg-bg-raised px-4 py-3 text-sm text-text"
        >
          {deliveryOptions.map((d) => (
            <option key={d.id} value={d.id}>
              {d.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6 flex items-baseline justify-between gap-6 border-t border-line-strong pt-5">
        <span className="eyebrow">{t.form.total}</span>

        <span className="flex items-baseline gap-3">
          {qty > 1 && (
            <span className="text-sm text-text-faint tabular-nums">
              {qty} &times; {money(unitPrice)}
            </span>
          )}
          <span className="text-2xl font-medium">{money(total)}</span>
        </span>
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
            className="w-full border border-line bg-bg-raised px-4 py-3 text-sm text-text"
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
        className="w-full border border-line bg-bg-raised px-4 py-3 text-sm text-text"
      />
    </div>
  );
}
