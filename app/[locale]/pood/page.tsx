import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localizePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import {
  COLLECTIONS,
  SHIPPING,
  CHEAPEST,
  imagePath,
} from "@/data/pood";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = (await getDictionary(locale as Locale)).shop.meta;

  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: `/${locale}/pood` },
    openGraph: { title: m.title, description: m.description },
  };
}

const money = (n: number) => `${n.toString().replace(".", ",")} €`;

export default async function Pood({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const l = locale as Locale;
  const t = (await getDictionary(l)).shop;
  const p = (route: string) => localizePath(route, l);

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

      {/* Kollektsioonid */}
      <section className="rule">
        <div className="site-container section">
          <div className="space-y-20 md:space-y-28">
            {COLLECTIONS.map((c) => (
              <article key={c.slug}>
                <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <div className="mb-4 eyebrow">{c.tagline[l]}</div>

                    <h2 className="text-3xl font-medium tracking-[-0.025em] md:text-4xl">
                      {c.name[l]}
                    </h2>
                  </div>

                  <Link
                    href={p(`/pood/${c.slug}`)}
                    className="btn btn-secondary"
                  >
                    {t.collection.view}
                    <span aria-hidden className="btn-arrow">
                      &rarr;
                    </span>
                  </Link>
                </div>

                <p className="mb-10 max-w-2xl text-sm leading-7 text-text-secondary md:text-base">
                  {c.description[l]}
                </p>

                {/* Eelvaade: kolm esimest tööd */}
                <div className="grid grid-cols-3 gap-3 md:gap-5">
                  {c.products.slice(0, 3).map((prod) => (
                    <Link
                      key={prod.slug}
                      href={p(`/pood/${c.slug}/${prod.slug}`)}
                      className="group relative block aspect-square media media-zoom"
                    >
                      <Image
                        src={imagePath(c.slug, prod.slug)}
                        alt={prod.name[l]}
                        fill
                        sizes="(min-width: 768px) 30vw, 33vw"
                        className="object-cover"
                      />
                    </Link>
                  ))}
                </div>

                <div className="mt-5 text-sm text-text-faint">
                  {t.product.from} {money(CHEAPEST)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
