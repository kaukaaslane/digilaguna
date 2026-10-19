import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localizePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { COLLECTIONS, getCollection, CHEAPEST, imagePath } from "@/data/pood";

type Params = Promise<{ locale: string; kollektsioon: string }>;

// Vanem [locale] genereerib keeled; siin ainult oma segment.
export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ kollektsioon: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale, kollektsioon } = await params;
  if (!isLocale(locale)) return {};
  const c = getCollection(kollektsioon);
  if (!c) return {};

  const l = locale as Locale;
  const title = `${c.name[l]} — ${c.tagline[l]} | DIGILAGUNA`;

  return {
    title,
    description: c.description[l],
    alternates: { canonical: `/${locale}/pood/${c.slug}` },
    openGraph: {
      title,
      description: c.description[l],
      images: [imagePath(c.slug, c.products[0].slug)],
    },
  };
}

const money = (n: number) => `${n.toString().replace(".", ",")} €`;

export default async function Kollektsioon({ params }: { params: Params }) {
  const { locale, kollektsioon } = await params;
  if (!isLocale(locale)) notFound();

  const c = getCollection(kollektsioon);
  if (!c) notFound();

  const l = locale as Locale;
  const t = (await getDictionary(l)).shop;
  const p = (route: string) => localizePath(route, l);

  return (
    <div className="overflow-x-hidden bg-bg text-text">
      {/* Hero */}
      <section className="rule">
        <div className="site-container section-lg">
          <div className="max-w-4xl">
            <Link
              href={p("/pood")}
              className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text"
            >
              <span aria-hidden>&larr;</span>
              {t.collection.backToShop}
            </Link>

            <div className="mb-5 eyebrow">{c.tagline[l]}</div>

            <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.03em] md:text-7xl">
              {c.name[l]}
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-text-secondary md:text-lg">
              {c.description[l]}
            </p>
          </div>
        </div>
      </section>

      {/* Tööd */}
      <section>
        <div className="site-container section">
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {c.products.map((prod) => (
              <article key={prod.slug}>
                <Link
                  href={p(`/pood/${c.slug}/${prod.slug}`)}
                  className="group block"
                >
                  <div className="relative aspect-square media media-zoom">
                    <Image
                      src={imagePath(c.slug, prod.slug)}
                      alt={prod.name[l]}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <h2 className="mt-5 text-lg font-medium">{prod.name[l]}</h2>

                  <p className="mt-2 text-sm leading-6 text-text-muted">
                    {prod.description[l]}
                  </p>

                  <div className="mt-4 text-sm text-text-faint">
                    {t.product.from} {money(CHEAPEST)}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
