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
      {/* Hero.

          Tekst istub pildi peal. Kate on vasakul 90–96% must, nii et
          teksti kontrast on umbes 12:1 — tumedam kui vaja, aga see hoiab
          paremal poolel pildi lahti, kus töö ja lamp näha jäävad. */}
      <section className="relative flex min-h-[82vh] items-center overflow-hidden rule">
        <Image
          src="/pood/interjoor.webp"
          alt={t.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Kate oli 90–96% ja tegi toast halli tapeedi. Mõõdetud: teksti
            ala püsib AA-s kuni 60% katteni, nii et 68% jätab varu ja laseb
            elutoa välja. Paremal hääbub peaaegu olematuks, et töö ja lamp
            jääksid täies värvis näha. */}
        <div aria-hidden className="absolute inset-0 bg-bg/72 md:hidden" />
        <div
          aria-hidden
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "radial-gradient(ellipse 75% 120% at 0% 55%, rgba(8,8,8,0.62) 0%, rgba(8,8,8,0.28) 45%, rgba(8,8,8,0) 78%), linear-gradient(90deg, rgba(8,8,8,0.82) 0%, rgba(8,8,8,0.68) 38%, rgba(8,8,8,0.28) 68%, rgba(8,8,8,0.04) 100%)",
          }}
        />

        <div className="relative w-full site-container py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="mb-5 eyebrow">{t.hero.eyebrow}</div>

            <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.03em] md:text-7xl">
              {t.hero.title}
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-text-secondary md:text-lg">
              {t.hero.lead}
            </p>

            <p className="mt-6 max-w-xl text-sm leading-6 text-accent">
              {t.wallPreview.promo}
            </p>

            <div className="mt-9">
              <Link href="#kollektsioonid" className="btn btn-primary">
                {t.hero.cta}
                <span aria-hidden className="btn-arrow">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pildil on raamitud panoraam, poes ruudukujulised lõuendid.
          See rida teeb vahest pakkumise, mitte segaduse. */}
      <section className="rule">
        <div className="site-container py-8">
          <p className="max-w-2xl text-sm leading-6 text-text-muted">
            {t.hero.custom}
          </p>
        </div>
      </section>

      {/* Kollektsioonid */}
      <section id="kollektsioonid" className="rule">
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
        <div className="site-container py-12">
          <div className="max-w-2xl text-sm leading-7 text-text-muted">
            <p>{t.terms.vat}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
