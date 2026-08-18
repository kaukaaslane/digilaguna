import Link from "next/link";
import ProjectCTA from "../components/ProjectCTA";

export default function Work() {
  return (
    <div className="overflow-x-hidden bg-[#080808] text-[#f2f0eb]">
      {/* Hero */}
      <section className="border-b border-white/[0.08]">
        <div className="site-container py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-5 text-[10px] uppercase tracking-[0.22em] text-[#77736c]">
              Selected work
            </div>

            <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.03em] md:text-7xl">
              Good work starts with a reason.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#a7a39b] md:text-lg">
              A look at projects, experiments and ideas we&apos;ve taken from
              an early thought into something people can actually use.
            </p>
          </div>
        </div>
      </section>

      {/* Selected project */}
      <section>
        <div className="site-container">
          <article className="border-b border-white/[0.08] py-16 md:py-24">
            <div className="mb-16 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[#77736c]">
              <span>01 / Selected project</span>
              <span>Concept</span>
            </div>

            <div className="grid gap-12 md:grid-cols-[1fr_0.7fr] md:gap-20">
              <div>
                <div className="mb-6 text-sm uppercase tracking-[0.18em] text-[#66645f]">
                  DROP MOW
                </div>

                <h2 className="max-w-2xl text-4xl font-medium leading-[1.02] tracking-[-0.025em] md:text-6xl">
                  A digital concept for a smarter way to think about
                  autonomous lawn care.
                </h2>
              </div>

              <div className="flex flex-col justify-end">
                <p className="text-sm leading-7 text-[#a7a39b] md:text-base">
                  DROP MOW is a concept project exploring how a product,
                  service and digital experience could come together around
                  autonomous mowing.
                </p>

                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.16em] text-[#66645f]">
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
          </article>
        </div>
      </section>

      {/* What we look for */}
      <section className="border-b border-white/[0.08]">
        <div className="site-container py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-2 md:gap-20">
            <div>
              <div className="mb-5 text-[10px] uppercase tracking-[0.22em] text-[#77736c]">
                How we approach projects
              </div>

              <h2 className="max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl">
                We&apos;re interested in the part before the build.
              </h2>
            </div>

            <div className="max-w-xl">
              <p className="text-sm leading-7 text-[#a7a39b] md:text-base">
                The question, the problem, the rough idea that isn&apos;t
                quite a product yet. That&apos;s often where the most useful
                work starts.
              </p>

              <p className="mt-6 text-sm leading-7 text-[#a7a39b] md:text-base">
                Not every project needs more technology. Sometimes it needs
                better structure, clearer communication or simply a different
                way of looking at the problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProjectCTA />
    </div>
  );
}