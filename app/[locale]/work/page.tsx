import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localizePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function Work({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);
  const t = dict.work;
  const c = dict.common;
  const p = (route: string) => localizePath(route, locale as Locale);

  return (
    <div className="overflow-x-hidden bg-bg text-text">
      {/* HERO */}
      <section className="rule">
        <div className="site-container section-lg">
          <div className="max-w-4xl">
            <div className="mb-5 eyebrow">{t.hero.eyebrow}</div>

            <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl">
              {t.hero.title}
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-text-muted sm:text-lg">
              {t.hero.lead}
            </p>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="rule">
        <div className="site-container section-lg">
          <article>
            <div className="mb-12 flex flex-wrap items-center justify-between gap-4 tag-list">
              <span>{t.selected.kicker}</span>
              <span>{t.selected.type}</span>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
              <div>
                <div className="mb-5 eyebrow">{t.selected.label}</div>

                <h2 className="max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.035em] sm:text-5xl md:text-6xl">
                  {t.selected.title}
                </h2>
              </div>

              <div className="flex flex-col justify-end lg:pb-1">
                <p className="max-w-xl text-base leading-7 text-text-muted">
                  {t.selected.body}
                </p>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 tag-list">
                  {t.selected.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="mt-10">
                  <Link href={p("/work/dropmow")} className="btn btn-secondary">
                    <span>{c.viewCase}</span>

                    <span aria-hidden className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* PROJECT VISUAL */}
            <div className="relative mt-16 aspect-[16/9] overflow-hidden border border-line bg-bg-raised md:mt-20">
              <Image
                src="/dropmow-full.webp"
                alt="DropMow project"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1400px"
                className="object-cover object-top"
              />
            </div>
          </article>
        </div>
      </section>

      {/* APPROACH */}
      <section className="rule">
        <div className="site-container section-lg">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="mb-5 eyebrow">{t.approach.eyebrow}</div>

              <h2 className="max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-4xl md:text-5xl">
                {t.approach.title}
              </h2>
            </div>

            <div className="max-w-2xl">
              {t.approach.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-6 text-base leading-7 text-text-muted first:mt-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MATTERS */}
      <section className="rule">
        <div className="site-container section-lg">
          <div className="mb-14 max-w-2xl">
            <div className="mb-5 eyebrow">{t.matters.eyebrow}</div>

            <h2 className="text-3xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-4xl">
              {t.matters.title}
            </h2>
          </div>

          <div className="border-t border-line">
            {t.matters.items.map((item) => (
              <div
                key={item.number}
                className="grid gap-4 rule py-8 md:grid-cols-[80px_0.8fr_1fr] md:gap-8 md:py-10"
              >
                <div className="text-xs text-text-faint">{item.number}</div>

                <h3 className="text-lg font-medium tracking-[-0.015em] md:text-xl">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-text-muted md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-line">
        <div className="site-container section-xl">
          <div className="max-w-3xl">
            <div className="mb-5 eyebrow">{t.finalCta.eyebrow}</div>

            <h2 className="whitespace-pre-line text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl">
              {t.finalCta.title}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-text-muted">
              {t.finalCta.body}
            </p>

            <div className="mt-10">
              <Link href={p("/contact")} className="btn btn-primary">
                <span>{c.startProject}</span>

                <span aria-hidden className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
