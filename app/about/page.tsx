import ProjectCTA from "../components/ProjectCTA";

export default function About() {
  return (
    <div className="overflow-x-hidden bg-[#080808] text-[#f2f0eb]">
      {/* Hero */}
      <section className="border-b border-white/[0.08]">
        <div className="site-container py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-5 text-[10px] uppercase tracking-[0.22em] text-[#77736c]">
              About Digilaguna
            </div>

            <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.03em] md:text-7xl">
              Digital work should feel considered, not complicated.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#a7a39b] md:text-lg">
              Digilaguna brings web design, front-end development and digital
              visuals together to turn ideas into things people can actually
              use.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-b border-white/[0.08]">
        <div className="site-container py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-2 md:gap-20">
            <div>
              <div className="mb-5 text-[10px] uppercase tracking-[0.22em] text-[#77736c]">
                The approach
              </div>

              <h2 className="max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl">
                Start with the idea. Build what actually helps.
              </h2>
            </div>

            <div className="max-w-xl">
              <p className="text-sm leading-7 text-[#a7a39b] md:text-base">
                Not every problem needs a complicated solution. The first step
                is understanding what you are trying to achieve, what is
                getting in the way and what would make the biggest difference.
              </p>

              <p className="mt-6 text-sm leading-7 text-[#a7a39b] md:text-base">
                From there, design and technology have a job to do. They
                should make the idea clearer, easier to use and easier to
                move forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="border-b border-white/[0.08]">
        <div className="site-container py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="mb-5 text-[10px] uppercase tracking-[0.22em] text-[#77736c]">
              Background
            </div>

            <h2 className="max-w-2xl text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl">
              A visual background with a practical mindset.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#a7a39b] md:text-base">
              The work is grounded in web design, digital graphics and
              front-end development, with a focus on visual thinking and
              careful implementation.
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#a7a39b] md:text-base">
              Formal studies in web design and digital graphics were completed
              at Estonian Entrepreneurship University of Applied Sciences
              (Mainor) in 2021. Since then, the focus has remained on putting
              those skills into practical use.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-b border-white/[0.08]">
        <div className="site-container py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="mb-5 text-[10px] uppercase tracking-[0.22em] text-[#77736c]">
              A simple principle
            </div>

            <blockquote className="text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl">
              The tools change. Good thinking still matters.
            </blockquote>

            <p className="mt-8 max-w-xl text-sm leading-7 text-[#a7a39b] md:text-base">
              Modern tools can speed up the process and open new possibilities.
              They are useful when they serve the idea — not when they become
              the idea.
            </p>
          </div>
        </div>
      </section>

      <ProjectCTA />
    </div>
  );
}