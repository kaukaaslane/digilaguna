"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

type ShopText = Dictionary["shop"];

type ProductView = {
  slug: string;
  image: string;
  name: string;
  description: string;
};

type SizeView = {
  id: string;
  label: string;
  price: number;
};

type Status = "idle" | "sending" | "sent" | "error";

const money = (n: number) => `${n.toString().replace(".", ",")} €`;

export default function ShopClient({
  locale,
  t,
  products,
  sizes,
  premiumSurcharge,
}: {
  locale: Locale;
  t: ShopText;
  products: ProductView[];
  sizes: SizeView[];
  premiumSurcharge: number;
}) {
  const [open, setOpen] = useState<ProductView | null>(null);
  const [sizeId, setSizeId] = useState(sizes[0].id);
  const [premium, setPremium] = useState(false);
  const [deliveryId, setDeliveryId] = useState("parcel");
  const [status, setStatus] = useState<Status>("idle");
  const [fieldError, setFieldError] = useState<string | null>(null);

  const size = sizes.find((s) => s.id === sizeId) ?? sizes[0];
  const total = size.price + (premium ? premiumSurcharge : 0);
  const cheapest = Math.min(...sizes.map((s) => s.price));

  const deliveryOptions = [
    { id: "parcel", label: t.delivery.parcel },
    { id: "finland", label: t.delivery.finland },
    { id: "pickup", label: t.delivery.pickup },
  ];

  // Dialoogi avamisel lähtestame valikud ja lukustame lehe kerimise.
  useEffect(() => {
    if (!open) return;
    setSizeId(sizes[0].id);
    setPremium(false);
    setDeliveryId("parcel");
    setStatus("idle");
    setFieldError(null);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, sizes]);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!open) return;

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
          product: open.name,
          productSlug: open.slug,
          size: size.label,
          premium,
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

  return (
    <>
      {/* Ruudustik */}
      <section className="rule">
        <div className="site-container section">
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article key={p.slug}>
                <button
                  type="button"
                  onClick={() => setOpen(p)}
                  className="group block w-full cursor-pointer text-left"
                >
                  <div className="relative aspect-square media media-zoom">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <h2 className="mt-5 text-lg font-medium">{p.name}</h2>

                  <p className="mt-2 text-sm leading-6 text-text-muted">
                    {p.description}
                  </p>

                  <div className="mt-4 text-sm text-text-faint">
                    {t.product.from} {money(cheapest)}
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Toote- ja tellimusdialoog */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.name}
          className="fixed inset-0 z-50 overflow-y-auto bg-bg/95 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(null);
          }}
        >
          <div className="site-container py-10 md:py-16">
            <div className="mx-auto max-w-5xl">
              <div className="mb-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setOpen(null)}
                  className="btn btn-secondary"
                >
                  {t.product.close}
                </button>
              </div>

              <div className="grid gap-10 md:grid-cols-2 md:gap-14">
                <div className="relative aspect-square media">
                  <Image
                    src={open.image}
                    alt={open.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div>
                  {status === "sent" ? (
                    <div>
                      <div className="mb-5 eyebrow">{t.form.eyebrow}</div>
                      <p className="text-lg text-success">
                        {t.form.success}
                      </p>
                      <button
                        type="button"
                        onClick={() => setOpen(null)}
                        className="mt-8 btn btn-secondary"
                      >
                        {t.product.close}
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-3xl font-medium tracking-[-0.02em]">
                        {open.name}
                      </h2>

                      <p className="mt-4 text-sm leading-7 text-text-secondary">
                        {open.description}
                      </p>

                      <p className="mt-4 text-sm leading-7 text-text-muted">
                        {t.product.detail}
                      </p>

                      {/* Mõõt */}
                      <fieldset className="mt-8">
                        <legend className="mb-3 eyebrow">
                          {t.product.selectSize}
                        </legend>

                        <div className="space-y-px">
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
                              <span className="text-sm font-medium">
                                {money(s.price)}
                              </span>
                            </label>
                          ))}
                        </div>
                      </fieldset>

                      <label className="mt-4 flex cursor-pointer items-baseline justify-between gap-6 rule py-3">
                        <span className="flex items-baseline gap-3 text-sm">
                          <input
                            type="checkbox"
                            checked={premium}
                            onChange={(e) => setPremium(e.target.checked)}
                            className="accent-[var(--color-accent)]"
                          />
                          {t.product.premium}
                        </span>
                        <span className="text-sm font-medium">
                          +{money(premiumSurcharge)}
                        </span>
                      </label>

                      {/* Tarneviis */}
                      <div className="mt-6">
                        <label
                          htmlFor="delivery"
                          className="mb-3 block eyebrow"
                        >
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
                        <span className="text-2xl font-medium">
                          {money(total)}
                        </span>
                      </div>

                      {/* Vorm */}
                      <form onSubmit={submit} className="mt-8 space-y-4">
                        <Field
                          name="name"
                          label={t.form.name}
                          autoComplete="name"
                          required
                        />
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
                          <label
                            htmlFor="message"
                            className="mb-2 block eyebrow"
                          >
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

                        {fieldError && (
                          <p className="text-sm text-error">{fieldError}</p>
                        )}

                        {status === "error" && (
                          <p className="text-sm text-error">
                            {t.form.errorGeneric}
                          </p>
                        )}

                        <button
                          type="submit"
                          disabled={status === "sending"}
                          className="btn btn-primary w-full justify-center disabled:opacity-60"
                        >
                          {status === "sending"
                            ? t.form.sending
                            : t.form.submit}
                          <span aria-hidden className="btn-arrow">
                            &rarr;
                          </span>
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
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
