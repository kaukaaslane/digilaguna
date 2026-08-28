import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localizePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);
  const t = dict.services;
  const c = dict.common;
  const p = (route: string) => localizePath(route, locale as Locale);

  return (
    <div className="min-h-screen overflow-x-hidden bg-bg text-text">
      <div>
        {/* HERO */}
        <section aria-labelledby="services-page-heading" className="rule">
          <div className="site-container section-lg">
            <div className="max-w-4xl">
              <p className="mb-5 eyebrow">{t.hero.eyebrow}</p>

              <h1
                id="services-page-heading"
                className="max-w-4xl whitespace-pre-line text-[clamp(3.4rem,8vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.045em]"
              >
                {t.hero.title}
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
                {t.hero.lead}
              </p>

              <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
                <Link href={p("/contact")} className="btn btn-primary">
                  {c.startProject}
                  <span aria-hidden className="btn-arrow">→</span>
                </Link>

                <Link href={p("/work")} className="btn btn-secondary">
                  {c.viewWork}
                  <span aria-hidden className="btn-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="rule">
          <div className="site-container section-lg">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.35fr_1fr]">
              <p className="eyebrow">{t.intro.eyebrow}</p>

              <div className="max-w-3xl">
                <h2 className="text-3xl font-medium tracking-[-0.025em] sm:text-4xl">
                  {t.intro.title}
                </h2>

                {t.intro.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-6 text-base leading-7 text-text-muted first:mt-6"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section aria-labelledby="service-list-heading" className="rule">
          <div className="site-container section-lg">
            <div className="mb-14 max-w-2xl">
              <p className="mb-4 eyebrow">{t.list.eyebrow}</p>

              <h2
                id="service-list-heading"
                className="text-3xl font-medium tracking-[-0.025em] sm:text-4xl"
              >
                {t.list.title}
              </h2>
            </div>

            <div className="border-t border-line">
              {t.list.items.map((service) => (
                <article key={service.number} className="rule py-12 md:py-16">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-[80px_0.8fr_1fr] md:gap-8">
                    <div className="text-xs text-text-faint">
                      {service.number}
                    </div>

                    <div>
                      <h3 className="text-2xl font-medium tracking-[-0.025em] sm:text-3xl">
                        {service.title}
                      </h3>

                      <p className="mt-4 text-base leading-7 text-text-secondary">
                        {service.intro}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm leading-6 text-text-muted md:text-base">
                        {service.description}
                      </p>

                      <ul className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {service.points.map((point) => (
                          <li key={point} className="text-sm text-text-faint">
                            <span className="mr-2 text-text-secondary">—</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section aria-labelledby="approach-heading" className="rule">
          <div className="site-container section-lg">
            <div className="mb-14 max-w-2xl">
              <p className="mb-4 eyebrow">{t.approach.eyebrow}</p>

              <h2
                id="approach-heading"
                className="text-3xl font-medium tracking-[-0.025em] sm:text-4xl"
              >
                {t.approach.title}
              </h2>

              <p className="mt-5 text-base leading-7 text-text-muted">
                {t.approach.lead}
              </p>
            </div>

            <div className="grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
              {t.approach.steps.map((step) => (
                <article
                  key={step.number}
                  className="rule py-8 sm:border-r sm:px-6 lg:min-h-[240px] lg:border-b-0 lg:px-8 first:lg:pl-0 last:lg:border-r-0"
                >
                  <div className="mb-8 text-xs text-text-faint">
                    {step.number}
                  </div>

                  <h3 className="mb-3 text-lg font-medium">{step.title}</h3>

                  <p className="text-sm leading-6 text-text-muted">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="rule">
          <div className="site-container section-lg">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.35fr_1fr]">
              <p className="eyebrow">{t.why.eyebrow}</p>

              <div className="max-w-3xl">
                <h2 className="text-3xl font-medium tracking-[-0.025em] sm:text-4xl">
                  {t.why.title}
                </h2>

                {t.why.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-6 text-base leading-7 text-text-muted first:mt-6"
                  >
                    {paragraph}
                  </p>
                ))}

                <p className="mt-7 statement">{t.why.statement}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section aria-labelledby="services-cta-heading">
          <div className="site-container section-xl">
            <div className="max-w-3xl">
              <p className="mb-4 eyebrow">{t.cta.eyebrow}</p>

              <h2
                id="services-cta-heading"
                className="text-5xl font-medium tracking-[-0.04em] sm:text-6xl md:text-7xl"
              >
                {t.cta.title}
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-text-muted">
                {t.cta.body}
              </p>

              <Link href={p("/contact")} className="mt-8 btn btn-primary">
                {c.startProject}
                <span aria-hidden className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
