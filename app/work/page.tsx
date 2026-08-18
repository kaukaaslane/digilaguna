import Link from "next/link";

export default function Work() {
  return (
    <main className="overflow-x-hidden bg-[#080808] text-[#f2f0eb]">
      {/* HERO */}
      <section className="border-b border-white/[0.09]">
        <div className="site-container py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#66645f]">
              Selected work
            </div>

            <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl">
               Good work starts with a reason.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#88857e] sm:text-lg">
              A look at projects, experiments and ideas we&apos;ve taken from
              an early thought into something people can actually use.
            </p>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="border-b border-white/[0.09]">
        <div className="site-container py-24 md:py-32">
          <article>
            <div className="mb-12 flex flex-wrap items-center justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[#66645f]">
              <span>01 / Selected project</span>
              <span>Concept</span>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
              <div>
                <div className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#a7a39b]">
                  DropMow
                </div>

                <h2 className="max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.035em] sm:text-5xl md:text-6xl">
                  A digital concept for a smarter way to think about
                  autonomous lawn care.
                </h2>
              </div>

              <div className="flex flex-col justify-end lg:pb-1">
                <p className="max-w-xl text-base leading-7 text-[#88857e]">
                  DropMow is a concept project exploring how a product,
                  service and digital experience could come together around
                  autonomous mowing.
                </p>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#66645f]">
                  <span>Web design</span>
                  <span>UX</span>
                  <span>Front-end</span>
                </div>

                <div className="mt-10">
                  <Link
                    href="/work/dropmow"
                    className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/12 px-4 text-sm font-medium text-[#f2f0eb] transition-colors duration-150 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
                  >
                    <span>View case study</span>

                    <span
                      aria-hidden
                      className="text-[#66645f] transition-colors duration-150 group-hover:text-[#f2f0eb]"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Visual placeholder */}
            <div className="mt-16 aspect-[16/9] overflow-hidden border border-white/[0.09] bg-[#111] md:mt-20">
              <div className="flex h-full items-center justify-center px-6 text-center text-[10px] font-medium uppercase tracking-[0.24em] text-[#444]">
                DropMow project visual
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* APPROACH */}
      <section className="border-b border-white/[0.09]">
        <div className="site-container py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#66645f]">
                How we approach projects
              </div>

              <h2 className="max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-4xl md:text-5xl">
                We&apos;re interested in the part before the build.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-base leading-7 text-[#88857e]">
                The question, the problem, the rough idea that isn&apos;t
                quite a product yet. That&apos;s often where the most useful
                work starts.
              </p>

              <p className="mt-6 text-base leading-7 text-[#88857e]">
                Not every project needs more technology. Sometimes it needs
                better structure, clearer communication or simply a different
                way of looking at the problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MATTERS */}
      <section className="border-b border-white/[0.09]">
        <div className="site-container py-24 md:py-32">
          <div className="mb-14 max-w-2xl">
            <div className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#66645f]">
              What matters
            </div>

            <h2 className="text-3xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-4xl">
              Technology should solve a problem, not create another one.
            </h2>
          </div>

          <div className="border-t border-white/[0.09]">
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
                className="grid gap-4 border-b border-white/[0.09] py-8 md:grid-cols-[80px_0.8fr_1fr] md:gap-8 md:py-10"
              >
                <div className="text-xs text-[#66645f]">{item.number}</div>

                <h3 className="text-lg font-medium tracking-[-0.015em] md:text-xl">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-[#88857e] md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — SAME LANGUAGE AS HOME */}
      <section className="border-t border-white/[0.09]">
        <div className="site-container py-28 md:py-40">
          <div className="max-w-3xl">
            <div className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#66645f]">
              Get in touch
            </div>

            <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl">
              Have something
              <br />
              worth building?
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#88857e]">
              Let&apos;s figure out what it could become.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/12 px-4 text-sm font-medium text-[#f2f0eb] transition-colors duration-150 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
                <span>Start a project</span>

                <span
                  aria-hidden
                  className="text-[#66645f] transition-colors duration-150 group-hover:text-[#f2f0eb]"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}