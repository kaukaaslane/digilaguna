import { notFound } from "next/navigation";
import ProjectCTA from "@/app/components/ProjectCTA";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function DigitalVisuals({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);
  const t = dict.digitalVisuals;

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

      {/* What we create */}
      <section className="rule">
        <div className="site-container">
          <div className="grid md:grid-cols-2">
            <article className="rule py-14 md:border-b-0 md:border-r md:pr-14 md:py-20">
              <div className="mb-16 eyebrow">{t.whatWeCreate.product.label}</div>

              <h2 className="max-w-md text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-4xl">
                {t.whatWeCreate.product.title}
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-text-secondary md:text-base">
                {t.whatWeCreate.product.body}
              </p>
            </article>

            <article className="rule py-14 md:border-b-0 md:pl-14 md:py-20">
              <div className="mb-16 eyebrow">{t.whatWeCreate.campaign.label}</div>

              <h2 className="max-w-md text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-4xl">
                {t.whatWeCreate.campaign.title}
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-text-secondary md:text-base">
                {t.whatWeCreate.campaign.body}
              </p>
            </article>

            <article className="rule py-14 md:col-span-2 md:py-20">
              <div className="mb-16 eyebrow">{t.whatWeCreate.print.label}</div>

              <div className="grid gap-8 md:grid-cols-2 md:gap-16">
                <h2 className="max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-4xl">
                  {t.whatWeCreate.print.title}
                </h2>

                <div>
                  <p className="max-w-lg text-sm leading-7 text-text-secondary md:text-base">
                    {t.whatWeCreate.print.body}
                  </p>

                  <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 tag-list">
                    {t.whatWeCreate.print.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="rule">
        <div className="site-container section">
          <div className="grid gap-10 md:grid-cols-2 md:gap-20">
            <div>
              <div className="mb-5 eyebrow">{t.howItWorks.eyebrow}</div>

              <h2 className="max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl">
                {t.howItWorks.title}
              </h2>
            </div>

            <div>
              <div className="space-y-8">
                {t.howItWorks.steps.map((step) => (
                  <div key={step.label}>
                    <div className="text-sm font-medium text-text">
                      {step.label}
                    </div>
                    <p className="mt-2 text-sm leading-7 text-text-secondary">
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI positioning */}
      <section className="rule">
        <div className="site-container section">
          <div className="max-w-3xl">
            <div className="mb-5 eyebrow">{t.aiPositioning.eyebrow}</div>

            <h2 className="max-w-2xl text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl">
              {t.aiPositioning.title}
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-text-secondary md:text-base">
              {t.aiPositioning.body}
            </p>
          </div>
        </div>
      </section>

      <ProjectCTA locale={locale as Locale} dict={dict} />
    </div>
  );
}
