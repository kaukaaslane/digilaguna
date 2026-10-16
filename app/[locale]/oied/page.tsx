import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ShopClient from "./ShopClient";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { PRODUCTS, SIZES, PREMIUM_SURCHARGE, SHIPPING } from "@/data/oied";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = (await getDictionary(locale as Locale)).shop;

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: { canonical: `/${locale}/oied` },
  };
}

export default async function Oied({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);
  const t = dict.shop;
  const l = locale as Locale;

  const money = (n: number) =>
    `${n.toString().replace(".", ",")} €`;

  return (
    <div className="overflow-x-hidden bg-bg text-text">
      {/* Hero */}
      <section className="rule">
        <div className="site-container section-lg">
          <div className="max-w-4xl">
            <div className="mb-5 eyebrow">{t.hero.eyebrow}</div>

            <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.03em] md:text-7xl">
              {t.hero.title}
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-text-secondary md:text-lg">
              {t.hero.lead}
            </p>
          </div>
        </div>
      </section>

      {/* Tooted + tellimusvorm (klient) */}
      <ShopClient
        locale={l}
        t={t}
        products={PRODUCTS.map((p) => ({
          slug: p.slug,
          image: p.image,
          name: p.name[l],
          description: p.description[l],
        }))}
        sizes={SIZES.map((s) => ({
          id: s.id,
          label: s.label[l],
          price: s.price,
        }))}
        premiumSurcharge={PREMIUM_SURCHARGE}
      />

      {/* Tarne */}
      <section className="rule">
        <div className="site-container section">
          <div className="grid gap-10 md:grid-cols-2 md:gap-20">
            <div>
              <div className="mb-5 eyebrow">{t.delivery.eyebrow}</div>
              <h2 className="max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-4xl">
                {t.delivery.time}
              </h2>
            </div>

            <dl className="border-t border-line">
              <div className="flex items-baseline justify-between gap-8 rule py-5">
                <dt className="text-sm text-text-secondary">
                  {t.delivery.parcel}
                </dt>
                <dd className="text-sm font-medium">
                  {money(SHIPPING.parcelMachineEE)}
                </dd>
              </div>

              <div className="flex items-baseline justify-between gap-8 rule py-5">
                <dt className="text-sm text-text-secondary">
                  {t.delivery.finland}
                </dt>
                <dd className="text-sm font-medium">
                  {SHIPPING.finland === null
                    ? t.delivery.finlandPrice
                    : money(SHIPPING.finland)}
                </dd>
              </div>

              <div className="flex items-baseline justify-between gap-8 rule py-5">
                <dt className="text-sm text-text-secondary">
                  {t.delivery.pickup}
                </dt>
                <dd className="text-sm font-medium">{t.delivery.free}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Tingimused */}
      <section>
        <div className="site-container section">
          <div className="max-w-2xl space-y-4 text-sm leading-7 text-text-muted">
            <p>{t.terms.vat}</p>
            <p>{t.terms.withdrawal}</p>
            <p>{t.terms.ai}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
