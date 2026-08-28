import { notFound } from "next/navigation";
import ProjectCTA from "@/app/components/ProjectCTA";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);
  const t = dict.about;

  return (
    <div className="overflow-x-hidden bg-bg text-text">
      {/* Hero */}
      <section className="rule">
        <div className="site-container section-lg">
          <div className="max-w-4xl">
            <div className="mb-5 eyebrow">{t.eyebrow}</div>

            <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.03em] md:text-7xl">
              {t.title}
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-text-secondary md:text-lg">
              {t.lead}
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="rule">
        <div className="site-container section">
          <div className="grid gap-10 md:grid-cols-2 md:gap-20">
            <div>
              <div className="mb-5 eyebrow">{t.approach.eyebrow}</div>

              <h2 className="max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl">
                {t.approach.title}
              </h2>
            </div>

            <div className="max-w-xl">
              {t.approach.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-6 text-sm leading-7 text-text-secondary first:mt-0 md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="rule">
        <div className="site-container section">
          <div className="max-w-3xl">
            <div className="mb-5 eyebrow">{t.background.eyebrow}</div>

            <h2 className="max-w-2xl text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl">
              {t.background.title}
            </h2>

            {t.background.body.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 max-w-2xl text-sm leading-7 text-text-secondary md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="rule">
        <div className="site-container section">
          <div className="max-w-3xl">
            <div className="mb-5 eyebrow">{t.philosophy.eyebrow}</div>

            <blockquote className="text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl">
              {t.philosophy.quote}
            </blockquote>

            <p className="mt-8 max-w-xl text-sm leading-7 text-text-secondary md:text-base">
              {t.philosophy.body}
            </p>
          </div>
        </div>
      </section>

      <ProjectCTA locale={locale as Locale} dict={dict} />
    </div>
  );
}
