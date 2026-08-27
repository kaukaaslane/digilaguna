import ProjectCTA from "@/app/components/ProjectCTA";

export default function DigitalVisuals() {
  return (
    <div className="overflow-x-hidden bg-bg text-text">
      {/* Hero */}
      <section className="rule">
        <div className="site-container section-lg">
          <div className="max-w-4xl">
            <div className="mb-5 eyebrow">
              Digital visuals
            </div>

            <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.03em] md:text-7xl">
              When the right visual doesn&apos;t exist, we make one.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-text-secondary md:text-lg">
              Visuals for products, websites, campaigns and print — created
              around the idea, the format and where it needs to be used.
            </p>
          </div>
        </div>
      </section>

      {/* What we create */}
      <section className="rule">
        <div className="site-container">
          <div className="grid md:grid-cols-2">
            <article className="rule py-14 md:border-b-0 md:border-r md:pr-14 md:py-20">
              <div className="mb-16 eyebrow">
                01 / Product
              </div>

              <h2 className="max-w-md text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-4xl">
                Give the product something worth looking at.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-text-secondary md:text-base">
                Product scenes, mockups and supporting imagery for websites,
                stores, presentations and campaigns.
              </p>
            </article>

            <article className="rule py-14 md:border-b-0 md:pl-14 md:py-20">
              <div className="mb-16 eyebrow">
                02 / Campaign
              </div>

              <h2 className="max-w-md text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-4xl">
                A visual direction people can recognise.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-text-secondary md:text-base">
                Campaign concepts, social visuals and supporting imagery built
                around a consistent visual idea.
              </p>
            </article>

            <article className="rule py-14 md:col-span-2 md:py-20">
              <div className="mb-16 eyebrow">
                03 / Print
              </div>

              <div className="grid gap-8 md:grid-cols-2 md:gap-16">
                <h2 className="max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-4xl">
                  Digital, but made for something physical.
                </h2>

                <div>
                  <p className="max-w-lg text-sm leading-7 text-text-secondary md:text-base">
                    High-resolution visuals prepared for posters, wall decor,
                    packaging, printed materials and other physical formats.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 tag-list">
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
      <section className="rule">
        <div className="site-container section">
          <div className="grid gap-10 md:grid-cols-2 md:gap-20">
            <div>
              <div className="mb-5 eyebrow">
                How it works
              </div>

              <h2 className="max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl">
                Start with what you need the visual to do.
              </h2>
            </div>

            <div>
              <div className="space-y-8">
                <div>
                  <div className="text-sm font-medium text-text">
                    01 / Tell us the idea
                  </div>
                  <p className="mt-2 text-sm leading-7 text-text-secondary">
                    A finished brief is useful, but it isn&apos;t required.
                    Tell us what you have in mind and where the visual will be
                    used.
                  </p>
                </div>

                <div>
                  <div className="text-sm font-medium text-text">
                    02 / We shape the direction
                  </div>
                  <p className="mt-2 text-sm leading-7 text-text-secondary">
                    We work out the visual direction, format and details before
                    creating the final piece.
                  </p>
                </div>

                <div>
                  <div className="text-sm font-medium text-text">
                    03 / You get the finished visual
                  </div>
                  <p className="mt-2 text-sm leading-7 text-text-secondary">
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
      <section className="rule">
        <div className="site-container section">
          <div className="max-w-3xl">
            <div className="mb-5 eyebrow">
              The role of AI
            </div>

            <h2 className="max-w-2xl text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl">
              The tool is part of the process. The idea comes first.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-text-secondary md:text-base">
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