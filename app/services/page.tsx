import ProjectCTA from "../components/ProjectCTA";

export default function Services() {
  return (
    <div className="overflow-x-hidden bg-[#080808] text-[#f2f0eb]">
      {/* Hero */}
      <section className="border-b border-white/[0.08]">
        <div className="site-container py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-5 text-[10px] uppercase tracking-[0.22em] text-[#77736c]">
              What we can build
            </div>

            <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.03em] md:text-7xl">
              Not every idea needs the same solution.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#a7a39b] md:text-lg">
              A website, a better online store, a new visual direction — or
              something that doesn&apos;t quite fit into a category yet. We
              help figure out what makes sense, then build it properly.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="site-container">
          <div className="grid border-b border-white/[0.08] md:grid-cols-2">
            {/* 01 */}
            <article className="border-b border-white/[0.08] py-14 md:border-b-0 md:border-r md:pr-14 md:py-20">
              <div className="mb-16 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[#77736c]">
                <span>01 / Web Design</span>
                <span aria-hidden>01</span>
              </div>

              <h2 className="max-w-md text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-4xl">
                A website should make things clearer.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#a7a39b] md:text-base">
                We design websites around what people need to understand,
                find and do — with a clear structure, considered visuals and
                responsive layouts that work across screens.
              </p>

              <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.16em] text-[#66645f]">
                <span>Structure</span>
                <span>UX</span>
                <span>Visual direction</span>
                <span>Responsive</span>
              </div>
            </article>

            {/* 02 */}
            <article className="border-b border-white/[0.08] py-14 md:border-b-0 md:pl-14 md:py-20">
              <div className="mb-16 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[#77736c]">
                <span>02 / Front-end</span>
                <span aria-hidden>02</span>
              </div>

              <h2 className="max-w-md text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-4xl">
                Good design needs somewhere solid to live.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#a7a39b] md:text-base">
                We turn the design into a fast, responsive website that feels
                right to use — from the front-end to the details people
                shouldn&apos;t have to notice.
              </p>

              <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.16em] text-[#66645f]">
                <span>Next.js</span>
                <span>React</span>
                <span>Performance</span>
                <span>Accessibility</span>
              </div>
            </article>

            {/* 03 */}
            <article className="py-14 md:col-span-2 md:py-20">
              <div className="mb-16 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[#77736c]">
                <span>03 / Digital Visuals</span>
                <span aria-hidden>03</span>
              </div>

              <div className="grid gap-8 md:grid-cols-2 md:gap-16">
                <h2 className="max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-4xl">
                  When the right image doesn&apos;t exist, we can create it.
                </h2>

                <div>
                  <p className="max-w-lg text-sm leading-7 text-[#a7a39b] md:text-base">
                    Digital visuals for websites, products, campaigns and
                    print — created to fit the idea rather than forcing the
                    idea around an existing image.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.16em] text-[#66645f]">
                    <span>Product</span>
                    <span>Campaign</span>
                    <span>AI visuals</span>
                    <span>Print</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Guidance */}
      <section className="border-b border-white/[0.08]">
        <div className="site-container py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="mb-5 text-[10px] uppercase tracking-[0.22em] text-[#77736c]">
              Not sure where to start?
            </div>

            <h2 className="text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl">
              You don&apos;t have to arrive with a finished brief.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#a7a39b] md:text-base">
              Tell us what you&apos;re trying to do, what isn&apos;t working,
              or simply what you&apos;d like to make better. We&apos;ll help
              figure out the right place to start.
            </p>
          </div>
        </div>
      </section>

      <ProjectCTA />
    </div>
  );
}