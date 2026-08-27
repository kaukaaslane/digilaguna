import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <div className="overflow-x-hidden bg-bg text-text">
      {/* HERO */}
      <section className="rule">
        <div className="site-container section-lg">
          <div className="max-w-4xl">
            <div className="mb-5 eyebrow">
              Selected work
            </div>

            <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl">
              Good work starts with a reason.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-text-muted sm:text-lg">
              A look at projects, experiments and ideas we&apos;ve taken from
              an early thought into something people can actually use.
            </p>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="rule">
        <div className="site-container section-lg">
          <article>
            <div className="mb-12 flex flex-wrap items-center justify-between gap-4 tag-list">
              <span>01 / Selected project</span>
              <span>Concept</span>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
              <div>
                <div className="mb-5 eyebrow">
                  DropMow
                </div>

                <h2 className="max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.035em] sm:text-5xl md:text-6xl">
                  A digital concept for a smarter way to think about
                  autonomous lawn care.
                </h2>
              </div>

              <div className="flex flex-col justify-end lg:pb-1">
                <p className="max-w-xl text-base leading-7 text-text-muted">
                  DropMow is a concept project exploring how a product,
                  service and digital experience could come together around
                  autonomous mowing.
                </p>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 tag-list">
                  <span>Web design</span>
                  <span>UX</span>
                  <span>Front-end</span>
                </div>

                <div className="mt-10">
                  <Link
                    href="/work/dropmow"
                    className="btn btn-secondary"
                  >
                    <span>View case study</span>

                    <span
                      aria-hidden
                      className="btn-arrow"
                    >
                      →
                    </span>
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
              <div className="mb-5 eyebrow">
                How we approach projects
              </div>

              <h2 className="max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-4xl md:text-5xl">
                We&apos;re interested in the part before the build.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-base leading-7 text-text-muted">
                The question, the problem, the rough idea that isn&apos;t
                quite a product yet. That&apos;s often where the most useful
                work starts.
              </p>

              <p className="mt-6 text-base leading-7 text-text-muted">
                Not every project needs more technology. Sometimes it needs
                better structure, clearer communication or simply a different
                way of looking at the problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MATTERS */}
      <section className="rule">
        <div className="site-container section-lg">
          <div className="mb-14 max-w-2xl">
            <div className="mb-5 eyebrow">
              What matters
            </div>

            <h2 className="text-3xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-4xl">
              Technology should solve a problem, not create another one.
            </h2>
          </div>

          <div className="border-t border-line">
            {[
              {
                number: "01",
                title: "Clarity",
                description:
                  "The purpose of a digital product should be easy to understand before the technology gets complicated.",
              },
              {
                number: "02",
                title: "Useful design",
                description:
                  "Design should make things easier to understand, navigate and use — not simply make them look different.",
              },
              {
                number: "03",
                title: "Right-sized technology",
                description:
                  "We use the technology a project actually needs instead of adding complexity for its own sake.",
              },
            ].map((item) => (
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
            <div className="mb-5 eyebrow">
              Get in touch
            </div>

            <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl">
              Have something
              <br />
              worth building?
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-text-muted">
              Let&apos;s figure out what it could become.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="btn btn-primary"
              >
                <span>Start a project</span>

                <span
                  aria-hidden
                  className="btn-arrow"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}