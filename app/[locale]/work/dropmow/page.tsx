import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localizePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function DropMow({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);
  const t = dict.workDropmow;
  const c = dict.common;
  const p = (route: string) => localizePath(route, locale as Locale);

  return (
    <div className="overflow-x-hidden bg-bg text-text">
      {/* INTRO */}
      <section className="rule">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-36 lg:px-12">
          <div className="mb-8 eyebrow">{t.intro.kicker}</div>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.45fr] lg:items-end">
            <div>
              <h1 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[7rem]">
                {t.intro.title}
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-8 text-text-secondary sm:text-2xl">
                {t.intro.subtitle}
              </p>
            </div>

            <div className="text-sm leading-6 text-text-faint lg:pb-2">
              {t.intro.meta.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT INTRO */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-28 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.55fr_1fr]">
            <div className="eyebrow">{t.overview.label}</div>

            <div className="max-w-3xl">
              <p className="text-2xl leading-[1.35] tracking-[-0.02em] text-text sm:text-3xl">
                {t.overview.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HERO VISUAL */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative aspect-[16/9] overflow-hidden border border-line bg-bg-raised">
            <Image
              src="/dropmow-hero.webp"
              alt="DropMow homepage"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1400px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* CASE STUDY SECTIONS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-36 lg:px-12">
          <div className="border-t border-line">
            {t.sections.map((section) => (
              <article
                key={section.number}
                className="grid gap-6 rule py-10 md:grid-cols-[80px_0.55fr_1fr] md:gap-8 md:py-14"
              >
                <div className="text-xs text-text-faint">{section.number}</div>

                <h2 className="text-2xl font-medium tracking-[-0.025em]">
                  {section.title}
                </h2>

                <p className="max-w-2xl text-base leading-7 text-text-muted">
                  {section.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="mb-14 grid gap-8 md:grid-cols-[0.4fr_1fr]">
            <div className="eyebrow">{t.howItWorks.label}</div>

            <div>
              <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                {t.howItWorks.title}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
                {t.howItWorks.body}
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden border border-line bg-bg-raised">
            <Image
              src="/dropmow-process.webp"
              alt="DropMow how it works"
              width={2400}
              height={1350}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* SECOND SCREEN */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="mb-14 grid gap-8 md:grid-cols-[0.4fr_1fr]">
            <div className="eyebrow">{t.secondScreen.label}</div>

            <div>
              <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                {t.secondScreen.title}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
                {t.secondScreen.body}
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden border border-line bg-bg-raised">
            <Image
              src="/dropmow-detail.webp"
              alt="DropMow service screen"
              width={2400}
              height={1350}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* SELECTED SCREENS */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="mb-14 grid gap-8 md:grid-cols-[0.4fr_1fr]">
            <div className="eyebrow">{t.selectedScreens.label}</div>

            <div>
              <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                {t.selectedScreens.title}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
                {t.selectedScreens.body}
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* DESKTOP */}
            <div className="relative overflow-hidden border border-line bg-bg-raised">
              <Image
                src="/dropmow-full.webp"
                alt="DropMow desktop website"
                width={2400}
                height={1350}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full"
              />
            </div>

            {/* MOBILE */}
            <div className="relative overflow-hidden border border-line bg-bg-raised">
              <Image
                src="/dropmow-mobile.webp"
                alt="DropMow mobile website"
                width={1200}
                height={1800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GET STARTED SCREEN */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="mb-14 grid gap-8 md:grid-cols-[0.4fr_1fr]">
            <div className="eyebrow">{t.getStarted.label}</div>

            <div>
              <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                {t.getStarted.title}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
                {t.getStarted.body}
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden border border-line bg-bg-raised">
            <Image
              src="/dropmow-form.webp"
              alt="DropMow get started form"
              width={2400}
              height={1350}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* FULL PROJECT */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 md:py-32 lg:px-8">
          <div className="mb-10">
            <div className="eyebrow">{t.fullProject.label}</div>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
              {t.fullProject.title}
            </h2>
          </div>

          <div className="overflow-hidden border border-line bg-bg-raised">
            <Image
              src="/dropmow-full.webp"
              alt="Full DropMow website"
              width={2400}
              height={5000}
              sizes="100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="grid gap-10 md:grid-cols-[0.4fr_1fr]">
            <div className="eyebrow">{t.nextSteps.label}</div>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                {t.nextSteps.title}
              </h2>

              <p className="mt-6 text-base leading-7 text-text-muted">
                {t.nextSteps.body}
              </p>

              <div className="mt-10 border-t border-line">
                {t.nextSteps.items.map((item) => (
                  <div
                    key={item.number}
                    className="grid gap-6 rule py-8 md:grid-cols-[80px_0.8fr_1fr] md:gap-8"
                  >
                    <div className="text-xs text-text-faint">
                      {item.number}
                    </div>

                    <h3 className="text-lg font-medium md:text-xl">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-6 text-text-muted md:text-base">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="grid gap-10 md:grid-cols-[0.4fr_1fr]">
            <div className="eyebrow">{t.faq.label}</div>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                {t.faq.title}
              </h2>

              <div className="mt-10 border-t border-line">
                {t.faq.items.map((faq) => (
                  <details key={faq.question} className="group rule">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-6 text-left text-base font-medium marker:hidden [&::-webkit-details-marker]:hidden">
                      <span>{faq.question}</span>

                      <span
                        aria-hidden
                        className="shrink-0 text-xl font-normal text-text-faint transition-transform duration-200 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>

                    <div className="max-w-2xl pb-7 pr-10 text-sm leading-6 text-text-muted md:text-base">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="grid gap-10 md:grid-cols-[0.4fr_1fr]">
            <div className="eyebrow">{t.learning.label}</div>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                {t.learning.title}
              </h2>

              <p className="mt-6 text-base leading-7 text-text-muted">
                {t.learning.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-36 lg:px-12">
          <div className="mb-6 eyebrow">{t.nextProject.label}</div>

          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              {t.nextProject.title}
            </h2>

            <Link
              href={p("/work")}
              className="group inline-flex cursor-pointer items-center text-sm text-text"
            >
              {c.viewWork}

              <span
                aria-hidden
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* START PROJECT */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:px-8 md:py-40 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-5 eyebrow">{t.startProject.label}</div>

            <h2 className="text-5xl font-medium tracking-[-0.05em] sm:text-6xl md:text-7xl">
              {t.startProject.title}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-text-muted">
              {t.startProject.body}
            </p>

            <Link
              href={p("/contact")}
              className="mt-8 hover:bg-white/[0.04] btn btn-primary"
            >
              <span>{c.startProject}</span>

              <span aria-hidden className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
