import ProjectCTA from "../components/ProjectCTA";

export default function DigitalVisuals() {
  return (
    <div className="overflow-x-hidden bg-[#080808] text-[#f2f0eb]">
      {/* Hero */}
      <section className="border-b border-white/[0.08]">
        <div className="site-container py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-5 text-[10px] uppercase tracking-[0.22em] text-[#77736c]">
              Digital visuals
            </div>

            <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.03em] md:text-7xl">
              When the right visual doesn&apos;t exist, we make one.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#a7a39b] md:text-lg">
              Visuals for products, websites, campaigns and print — created
              around the idea, the format and where it needs to be used.
            </p>
          </div>
        </div>
      </section>

      {/* What we create */}
      <section className="border-b border-white/[0.08]">
        <div className="site-container">
          <div className="grid md:grid-cols-2">
            <article className="border-b border-white/[0.08] py-14 md:border-b-0 md:border-r md:pr-14 md:py-20">
              <div className="mb-16 text-[10px] uppercase tracking-[0.18em] text-[#77736c]">
                01 / Product
              </div>

              <h2 className="max-w-md text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-4xl">
                Give the product something worth looking at.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#a7a39b] md:text-base">
                Product scenes, mockups and supporting imagery for websites,
                stores, presentations and campaigns.
              </p>
            </article>

            <article className="border-b border-white/[0.08] py-14 md:border-b-0 md:pl-14 md:py-20">
              <div className="mb-16 text-[10px] uppercase tracking-[0.18em] text-[#77736c]">
                02 / Campaign
              </div>

              <h2 className="max-w-md text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-4xl">
                A visual direction people can recognise.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#a7a39b] md:text-base">
                Campaign concepts, social visuals and supporting imagery built
                around a consistent visual idea.
              </p>
            </article>

            <article className="border-b border-white/[0.08] py-14 md:col-span-2 md:py-20">
              <div className="mb-16 text-[10px] uppercase tracking-[0.18em] text-[#77736c]">
                03 / Print
              </div>

              <div className="grid gap-8 md:grid-cols-2 md:gap-16">
                <h2 className="max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-4xl">
                  Digital, but made for something physical.
                </h2>

                <div>
                  <p className="max-w-lg text-sm leading-7 text-[#a7a39b] md:text-base">
                    High-resolution visuals prepared for posters, wall decor,
                    packaging, printed materials and other physical formats.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.16em] text-[#66645f]">
                    <span>Print-ready</span>
                    <span>High resolution</span>
                    <span>Custom formats</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-white/[0.08]">
        <div className="site-container py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-2 md:gap-20">
            <div>
              <div className="mb-5 text-[10px] uppercase tracking-[0.22em] text-[#77736c]">
                How it works
              </div>

              <h2 className="max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl">
                Start with what you need the visual to do.
              </h2>
            </div>

            <div>
              <div className="space-y-8">
                <div>
                  <div className="text-sm font-medium text-[#f2f0eb]">
                    01 / Tell us the idea
                  </div>
                  <p className="mt-2 text-sm leading-7 text-[#a7a39b]">
                    A finished brief is useful, but it isn&apos;t required.
                    Tell us what you have in mind and where the visual will be
                    used.
                  </p>
                </div>

                <div>
                  <div className="text-sm font-medium text-[#f2f0eb]">
                    02 / We shape the direction
                  </div>
                  <p className="mt-2 text-sm leading-7 text-[#a7a39b]">
                    We work out the visual direction, format and details before
                    creating the final piece.
                  </p>
                </div>

                <div>
                  <div className="text-sm font-medium text-[#f2f0eb]">
                    03 / You get the finished visual
                  </div>
                  <p className="mt-2 text-sm leading-7 text-[#a7a39b]">
                    Final files are prepared for their intended use — digital,
                    print or both.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI positioning */}
      <section className="border-b border-white/[0.08]">
        <div className="site-container py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="mb-5 text-[10px] uppercase tracking-[0.22em] text-[#77736c]">
              The role of AI
            </div>

            <h2 className="max-w-2xl text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl">
              The tool is part of the process. The idea comes first.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#a7a39b] md:text-base">
              AI can make visual exploration faster and open up possibilities
              that would otherwise take much longer. But the goal is not to
              make something simply because AI can make it. The visual still
              needs a reason to exist.
            </p>
          </div>
        </div>
      </section>

      <ProjectCTA />
    </div>
  );
}