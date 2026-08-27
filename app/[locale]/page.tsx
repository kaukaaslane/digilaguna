import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { localizePath, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

const VISUALS = [
  { src: "/visual-01.webp", box: "aspect-[3/4] md:col-span-2 md:row-span-2", sizes: "(min-width: 768px) 50vw, 50vw" },
  { src: "/visual-02.webp", box: "aspect-square", sizes: "(min-width: 768px) 25vw, 50vw" },
  { src: "/visual-03.webp", box: "aspect-square", sizes: "(min-width: 768px) 25vw, 50vw" },
  { src: "/visual-04.webp", box: "aspect-square", sizes: "(min-width: 768px) 25vw, 50vw" },
];

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);
  const t = dict.home;
  const c = dict.common;
  const p = (route: string) => localizePath(route, locale as Locale);

  return (
    <div className="overflow-x-hidden bg-bg text-text">
      {/* HERO */}
      <section aria-labelledby="hero-heading" className="rule">
        <div className="site-container flex min-h-[680px] items-center section-lg md:min-h-[760px]">
          <div className="max-w-4xl">
            <p className="mb-5 eyebrow">{t.hero.eyebrow}</p>

            <h1
              id="hero-heading"
              className="max-w-4xl text-[clamp(3.4rem,8vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.045em]"
            >
              {t.hero.title.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
              {t.hero.lead}
            </p>

            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
              <Link href={p("/contact")} className="btn btn-primary">
                {c.startProject}
                <span aria-hidden className="btn-arrow">&rarr;</span>
              </Link>

              <Link href={p("/work")} className="btn btn-secondary">
                {c.viewWork}
                <span aria-hidden className="btn-arrow">&rarr;</span>
              </Link>
            </div>

            <div className="mt-20 flex flex-wrap gap-x-6 gap-y-3 tag-list">
              {t.hero.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section aria-labelledby="positioning-heading" className="rule">
        <div className="site-container section-lg">
          <div className="max-w-4xl">
            <p className="mb-4 eyebrow">{t.positioning.eyebrow}</p>
            <h2 id="positioning-heading" className="whitespace-pre-line text-3xl font-medium sm:text-4xl">
              {t.positioning.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-text-muted">
              {t.positioning.body}
            </p>
            <p className="mt-6 statement">{t.positioning.statement}</p>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section aria-labelledby="work-heading" className="rule">
        <div className="site-container section-lg">
          <div className="mb-12 flex items-end justify-between gap-8">
            <div>
              <p className="mb-4 eyebrow">{t.work.eyebrow}</p>
              <h2 id="work-heading" className="text-3xl font-medium sm:text-4xl">{t.work.title}</h2>
            </div>
            <div className="hidden text-right text-xs text-text-faint sm:block">
              {t.work.disciplines.map((d) => <span key={d} className="block">{d}</span>)}
            </div>
          </div>

          <article className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <h3 className="text-xl font-medium">{t.work.project.title}</h3>
              <p className="mt-5 max-w-md text-base leading-7 text-text-secondary">
                {t.work.project.body}
              </p>
              <Link href={p("/work/dropmow")} className="mt-7 btn btn-secondary">
                {c.viewCase}
                <span aria-hidden className="btn-arrow">&rarr;</span>
              </Link>
            </div>

            <div className="relative aspect-[16/10] media media-zoom">
              <Image
                src="/dropmow-full.webp"
                alt={t.work.project.title}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
          </article>
        </div>
      </section>

      {/* SERVICES */}
      <section aria-labelledby="services-heading" className="rule">
        <div className="site-container section-lg">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 eyebrow">{t.services.eyebrow}</p>
            <h2 id="services-heading" className="text-3xl font-medium sm:text-4xl">{t.services.title}</h2>
            <p className="mt-5 text-base leading-7 text-text-muted">{t.services.lead}</p>
          </div>

          <div className="border-t border-line">
            {t.services.items.map((service) => (
              <article
                key={service.number}
                className="grid grid-cols-[48px_1fr] gap-4 rule py-8 md:grid-cols-[80px_0.8fr_1fr] md:gap-8 md:py-10"
              >
                <div className="text-xs text-text-faint">{service.number}</div>
                <h3 className="text-lg font-medium md:text-xl">{service.title}</h3>
                <p className="col-start-2 text-sm leading-6 text-text-muted md:col-start-3 md:text-base">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section aria-labelledby="process-heading" className="rule">
        <div className="site-container section-lg">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 eyebrow">{t.process.eyebrow}</p>
            <h2 id="process-heading" className="text-3xl font-medium sm:text-4xl">{t.process.title}</h2>
          </div>

          <div className="grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {t.process.steps.map((step) => (
              <article
                key={step.number}
                className="rule py-8 sm:border-r sm:px-6 lg:min-h-[230px] lg:border-b-0 lg:px-8 first:lg:pl-0 last:lg:border-r-0"
              >
                <div className="mb-8 text-xs text-text-faint">{step.number}</div>
                <h3 className="mb-3 text-lg font-medium">{step.title}</h3>
                <p className="text-sm leading-6 text-text-muted">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL VISUALS */}
      <section aria-labelledby="visuals-heading" className="rule">
        <div className="site-container section-lg">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 eyebrow">{t.visuals.eyebrow}</p>
            <h2 id="visuals-heading" className="text-3xl font-medium sm:text-4xl">{t.visuals.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-text-muted">{t.visuals.lead}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {VISUALS.map((v, i) => (
              <div key={v.src} className={`relative media media-zoom ${v.box}`}>
                <Image
                  src={v.src}
                  alt={`${t.visuals.alt} 0${i + 1}`}
                  fill
                  sizes={v.sizes}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <Link href={p("/digital-visuals")} className="mt-8 btn btn-secondary">
            {c.exploreVisuals}
            <span aria-hidden className="btn-arrow">&rarr;</span>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="rule">
        <div className="site-container section-lg">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 eyebrow">{t.faq.eyebrow}</p>
            <h2 id="faq-heading" className="text-3xl font-medium sm:text-4xl">{t.faq.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-text-muted">{t.faq.lead}</p>
          </div>

          <div className="max-w-4xl border-t border-line">
            {t.faq.items.map((faq) => (
              <details key={faq.question} className="faq-item">
                <summary className="faq-summary">
                  <span>{faq.question}</span>
                  <span aria-hidden className="faq-icon">+</span>
                </summary>
                <div className="faq-answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* STARTER */}
      <section aria-labelledby="starter-heading" className="rule">
        <div className="site-container section-lg">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.35fr_1fr]">
            <p className="eyebrow">{t.starter.eyebrow}</p>
            <div className="max-w-2xl">
              <h2 id="starter-heading" className="text-3xl font-medium sm:text-4xl">{t.starter.title}</h2>
              <p className="mt-6 text-base leading-7 text-text-muted">{t.starter.body}</p>
              <Link href={p("/contact")} className="mt-8 btn btn-secondary">
                {t.starter.cta}
                <span aria-hidden className="btn-arrow">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section aria-labelledby="final-cta-heading">
        <div className="site-container section-xl">
          <div className="max-w-3xl">
            <p className="mb-4 eyebrow">{t.finalCta.eyebrow}</p>
            <h2 id="final-cta-heading" className="text-5xl font-medium tracking-[-0.04em] sm:text-6xl md:text-7xl">
              {t.finalCta.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-text-muted">{t.finalCta.body}</p>
            <Link href={p("/contact")} className="mt-8 btn btn-primary">
              {c.startProject}
              <span aria-hidden className="btn-arrow">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
