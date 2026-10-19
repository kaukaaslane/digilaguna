import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import OrderForm from "./OrderForm";
import { isLocale, localizePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import {
  SIZES,
  PREMIUM_SURCHARGE,
  getCollection,
  getProduct,
  imagePath,
} from "@/data/pood";

const SITE = "https://www.digilaguna.com";

type Params = Promise<{
  locale: string;
  kollektsioon: string;
  toode: string;
}>;

// Vanemad segmendid ([locale], [kollektsioon]) on juba genereeritud;
// siin ainult tooted selle kollektsiooni sees. `await` töötab nii
// tavalise objekti kui Promise'i korral.
export async function generateStaticParams({
  params,
}: {
  params: { kollektsioon: string } | Promise<{ kollektsioon: string }>;
}) {
  const { kollektsioon } = await params;
  const c = getCollection(kollektsioon);
  return (c?.products ?? []).map((p) => ({ toode: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale, kollektsioon, toode } = await params;
  if (!isLocale(locale)) return {};
  const found = getProduct(kollektsioon, toode);
  if (!found) return {};

  const l = locale as Locale;
  const { collection, product } = found;
  const title = `${product.name[l]} — ${collection.name[l]} | DIGILAGUNA`;

  return {
    title,
    description: product.description[l],
    alternates: {
      canonical: `/${locale}/pood/${collection.slug}/${product.slug}`,
    },
    openGraph: {
      type: "website",
      title,
      description: product.description[l],
      images: [imagePath(collection.slug, product.slug)],
    },
  };
}

const money = (n: number) => `${n.toString().replace(".", ",")} €`;

export default async function Toode({ params }: { params: Params }) {
  const { locale, kollektsioon, toode } = await params;
  if (!isLocale(locale)) notFound();

  const found = getProduct(kollektsioon, toode);
  if (!found) notFound();

  const l = locale as Locale;
  const { collection, product } = found;
  const t = (await getDictionary(l)).shop;
  const p = (route: string) => localizePath(route, l);

  const prices = SIZES.map((s) => s.price);

  // Product-struktuurandmed: annab Google'i tulemusse hinnavahemiku.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.name[l]} — ${collection.name[l]}`,
    description: product.description[l],
    image: `${SITE}${imagePath(collection.slug, product.slug)}`,
    brand: { "@type": "Brand", name: "Digilaguna" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: Math.min(...prices),
      highPrice: Math.max(...prices) + PREMIUM_SURCHARGE,
      offerCount: SIZES.length,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Digilaguna OÜ" },
    },
  };

  return (
    <div className="overflow-x-hidden bg-bg text-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section>
        <div className="site-container section">
          <div className="mb-10">
            <Link
              href={p(`/pood/${collection.slug}`)}
              className="btn btn-secondary btn-back"
            >
              <span aria-hidden className="btn-arrow">&larr;</span>
              {collection.name[l]}
            </Link>
          </div>

          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            {/* Pilt */}
            <div>
              <div className="relative aspect-square media">
                <Image
                  src={imagePath(collection.slug, product.slug)}
                  alt={product.name[l]}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>

              <p className="mt-6 max-w-md text-sm leading-7 text-text-muted">
                {t.product.detail}
              </p>
            </div>

            {/* Info ja tellimine */}
            <div>
              <div className="mb-4 eyebrow">{collection.name[l]}</div>

              <h1 className="text-4xl font-medium tracking-[-0.03em] md:text-5xl">
                {product.name[l]}
              </h1>

              <p className="mt-5 text-base leading-7 text-text-secondary">
                {product.description[l]}
              </p>

              <div className="mt-10">
                <OrderForm
                  locale={l}
                  t={t}
                  sizes={SIZES.map((s) => ({
                    id: s.id,
                    label: s.label[l],
                    price: s.price,
                  }))}
                  premiumSurcharge={PREMIUM_SURCHARGE}
                  productName={product.name[l]}
                  productSlug={product.slug}
                  collectionSlug={collection.slug}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tingimused */}
      <section className="border-t border-line">
        <div className="site-container py-12">
          <div className="max-w-2xl space-y-3 text-xs leading-6 text-text-faint">
            <p>{t.terms.vat}</p>
            <p>{t.terms.withdrawal}</p>
            <p>{t.terms.ai}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
