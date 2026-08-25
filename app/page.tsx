import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Websites",
    description:
      "Clear, purposeful websites that make a business easier to understand and easier to choose.",
  },
  {
    number: "02",
    title: "E-commerce",
    description:
      "Online stores built around the way you actually sell — not around a template.",
  },
  {
    number: "03",
    title: "Digital tools",
    description:
      "Custom apps and internal tools for the things your existing software can't quite do.",
  },
  {
    number: "04",
    title: "Automation & AI",
    description:
      "Less repetitive work. Better workflows. Smarter systems where they actually help.",
  },
  {
    number: "05",
    title: "Digital visuals",
    description:
      "Visuals for products, brands, spaces and digital experiences.",
  },
];

const process = [
  [
    "01",
    "Tell us what you're thinking.",
    "You don't need a finished brief. A problem, a rough idea or even a sentence is enough.",
  ],
  [
    "02",
    "We figure it out.",
    "We look at what you're trying to achieve and what kind of solution makes sense.",
  ],
  [
    "03",
    "We build it.",
    "The right technology, the right amount of complexity, and nothing added just because we can.",
  ],
  [
    "04",
    "We keep it useful.",
    "Launch is not the end. Digital things can evolve as your business does.",
  ],
];

const faqs = [
  {
    question: "What kind of projects do you work on?",
    answer:
      "We work on websites, e-commerce stores, digital tools, automation, AI-assisted solutions and digital visuals. The right starting point depends on what you are trying to achieve.",
  },
  {
    question: "Do I need to know exactly what I want?",
    answer:
      "No. You can start with a problem, an idea, a rough concept or simply something that you know could work better. We help define the right solution before building it.",
  },
  {
    question: "Do you build custom websites?",
    answer:
      "Yes. We build websites around the needs of the business rather than forcing the project into a generic template.",
  },
  {
    question: "Can you help with an existing website?",
    answer:
      "Yes. We can look at an existing website, identify what could be improved and help decide whether it makes more sense to refine, rebuild or simplify it.",
  },
  {
    question: "Do you work with e-commerce?",
    answer:
      "Yes. We can help with e-commerce strategy, store setup, product presentation and the digital experience around selling online.",
  },
  {
    question: "Can you build internal digital tools?",
    answer:
      "Yes. If your team is relying on spreadsheets, repetitive manual work or disconnected systems, a custom digital tool or automation may be a better solution.",
  },
  {
    question: "How does a project usually start?",
    answer:
      "It starts with a conversation. Tell us what you are trying to achieve, what is currently difficult and what you have in mind. From there we can work out the next sensible step.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080808] text-[#f2f0eb]">
      <main>
        {/* HERO */}
        <section
          aria-labelledby="hero-heading"
          className="border-b border-white/[0.09] bg-[#080808]"
        >
          <div className="site-container flex min-h-[680px] items-center py-24 md:min-h-[760px] md:py-32">
            <div className="max-w-4xl">
              <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-[#a7a39b]">
                Digital studio
              </p>

              <h1
                id="hero-heading"
                className="max-w-4xl text-[clamp(3.4rem,8vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.045em] text-[#f2f0eb]"
              >
                You bring the idea.
                <br />
                We figure out
                <br />
                what to build.
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-[#a7a39b] sm:text-lg">
                Bring us a problem, a rough idea or something you know could
                work better. We&apos;ll help you figure out what comes next.
              </p>

              <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-white/[0.14] px-5 text-sm font-medium text-[#f2f0eb] transition-colors hover:border-white/[0.3] hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2f0eb]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
                >
                  Start a project
                  <span aria-hidden>→</span>
                </Link>

                <Link
                  href="/work"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-white/[0.14] px-5 text-sm font-medium text-[#f2f0eb] transition-colors hover:border-white/[0.3] hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2f0eb]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
                >
                  View selected work
                  <span aria-hidden>→</span>
                </Link>
              </div>

              <div className="mt-20 flex flex-wrap gap-x-6 gap-y-3 text-[10px] uppercase tracking-[0.2em] text-[#66645f]">
                <span>Websites</span>
                <span>E-commerce</span>
                <span>Digital Tools</span>
                <span>Automation &amp; AI</span>
              </div>
            </div>
          </div>
        </section>

        {/* POSITIONING */}
        <section
          aria-labelledby="positioning-heading"
          className="border-b border-white/[0.09]"
        >
          <div className="site-container py-24 md:py-32">
            <div className="max-w-4xl">
              <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#66645f]">
                Start with the problem
              </p>

              <h2
                id="positioning-heading"
                className="text-3xl font-medium tracking-[-0.025em] sm:text-4xl"
              >
                Not every idea needs an app.
                <br />
                Not every business needs a complicated website.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#88857e]">
                Sometimes the right solution is simpler. Sometimes it isn&apos;t.
                We start by understanding what you&apos;re trying to achieve —
                then figure out what makes sense to build.
              </p>

              <p className="mt-6 text-sm uppercase tracking-[0.22em] text-[#a7a39b]">
                The technology comes after the idea.
              </p>
            </div>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section
          aria-labelledby="work-heading"
          className="border-b border-white/[0.09]"
        >
          <div className="site-container py-24 md:py-32">
            <div className="mb-12 flex items-end justify-between gap-8">
              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#66645f]">
                  Selected work
                </p>

                <h2
                  id="work-heading"
                  className="text-3xl font-medium tracking-[-0.025em] sm:text-4xl"
                >
                  A few things we&apos;ve been building.
                </h2>
              </div>

              <div className="hidden text-right text-xs text-[#66645f] sm:block">
                Web Design
                <br />
                UX
                <br />
                Front-end Development
              </div>
            </div>

            <article className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <h3 className="text-xl font-medium">
                  DropMow — robotic lawn-care service
                </h3>

                <p className="mt-5 max-w-md text-base leading-7 text-[#a7a39b]">
                  A multilingual website concept for a robotic lawn-care
                  service, designed and built with a focus on clarity,
                  simplicity and a calm Scandinavian visual direction.
                </p>

                <Link
                  href="/work/dropmow"
                  className="mt-7 inline-flex h-11 items-center gap-2 rounded-full border border-white/[0.14] px-5 text-sm font-medium text-[#f2f0eb] transition-colors hover:border-white/[0.3] hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2f0eb]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
                >
                  View case study
                  <span aria-hidden>→</span>
                </Link>
              </div>

              <div className="relative aspect-[16/10] overflow-hidden border border-white/[0.08] bg-[#111]">
                <img
                  src="/fullp.png"
                  alt="DropMow website project"
                  className="h-full w-full object-cover"
                />
              </div>
            </article>
          </div>
        </section>

        {/* SERVICES */}
        <section
          aria-labelledby="services-heading"
          className="border-b border-white/[0.09]"
        >
          <div className="site-container py-24 md:py-32">
            <div className="mb-14 max-w-2xl">
              <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#66645f]">
                What we build
              </p>

              <h2
                id="services-heading"
                className="text-3xl font-medium tracking-[-0.025em] sm:text-4xl"
              >
                Digital solutions built around what you actually need.
              </h2>

              <p className="mt-5 text-base leading-7 text-[#88857e]">
                From websites and online stores to custom tools, automation,
                AI and digital visuals.
              </p>
            </div>

            <div className="border-t border-white/[0.09]">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="grid grid-cols-[48px_1fr] gap-4 border-b border-white/[0.09] py-8 md:grid-cols-[80px_0.8fr_1fr] md:gap-8 md:py-10"
                >
                  <div className="text-xs text-[#66645f]">
                    {service.number}
                  </div>

                  <h3 className="text-lg font-medium tracking-[-0.015em] md:text-xl">
                    {service.title}
                  </h3>

                  <p className="col-start-2 text-sm leading-6 text-[#88857e] md:col-start-3 md:text-base">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section
          aria-labelledby="process-heading"
          className="border-b border-white/[0.09]"
        >
          <div className="site-container py-24 md:py-32">
            <div className="mb-14 max-w-2xl">
              <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#66645f]">
                Process
              </p>

              <h2
                id="process-heading"
                className="text-3xl font-medium tracking-[-0.025em] sm:text-4xl"
              >
                Start with the idea. Not the technology.
              </h2>
            </div>

            <div className="grid grid-cols-1 border-t border-white/[0.09] sm:grid-cols-2 lg:grid-cols-4">
              {process.map(([number, title, description]) => (
                <article
                  key={number}
                  className="border-b border-white/[0.09] py-8 sm:border-r sm:px-6 lg:min-h-[230px] lg:border-b-0 lg:px-8 first:lg:pl-0 last:lg:border-r-0"
                >
                  <div className="mb-8 text-xs text-[#66645f]">{number}</div>

                  <h3 className="mb-3 text-lg font-medium">{title}</h3>

                  <p className="text-sm leading-6 text-[#88857e]">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DIGITAL VISUALS */}
        <section
          aria-labelledby="visuals-heading"
          className="border-b border-white/[0.09]"
        >
          <div className="site-container py-24 md:py-32">
            <div className="mb-14 max-w-2xl">
              <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#66645f]">
                Digital visuals
              </p>

              <h2
                id="visuals-heading"
                className="text-3xl font-medium tracking-[-0.025em] sm:text-4xl"
              >
                Some ideas are better seen than explained.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#88857e]">
                Visual work created for screens, spaces, products and print.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#111] md:col-span-2 md:row-span-2">
                <img
                  src="/digivisu%20(1).png"
                  alt="Digital visual 1 created by Digilaguna"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative aspect-square overflow-hidden bg-[#111]">
                <img
                  src="/digivisu%20(2).png"
                  alt="Digital visual 2 created by Digilaguna"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative aspect-square overflow-hidden bg-[#111]">
                <img
                  src="/digivisu%20(3).png"
                  alt="Digital visual 3 created by Digilaguna"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative aspect-square overflow-hidden bg-[#111]">
                <img
                  src="/digivisu%20(4).png"
                  alt="Digital visual 4 created by Digilaguna"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <Link
              href="/digital-visuals"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-full border border-white/[0.14] px-5 text-sm font-medium text-[#f2f0eb] transition-colors hover:border-white/[0.3] hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2f0eb]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
            >
              Explore digital visuals
              <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section
          aria-labelledby="faq-heading"
          className="border-b border-white/[0.09]"
        >
          <div className="site-container py-24 md:py-32">
            <div className="mb-14 max-w-2xl">
              <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#66645f]">
                Questions
              </p>

              <h2
                id="faq-heading"
                className="text-3xl font-medium tracking-[-0.025em] sm:text-4xl"
              >
                Questions we get asked.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#88857e]">
                If you&apos;re not sure where to start, these should give you a
                better idea of how we work.
              </p>
            </div>

            <div className="max-w-4xl border-t border-white/[0.09]">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border-b border-white/[0.09]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-6 text-base font-medium marker:hidden">
                    <span>{faq.question}</span>

                    <span
                      aria-hidden
                      className="shrink-0 text-xl font-light text-[#66645f] transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>

                  <div className="max-w-2xl pb-7 pr-12 text-sm leading-6 text-[#88857e]">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECT STARTER CTA */}
        <section
          aria-labelledby="starter-heading"
          className="border-b border-white/[0.09]"
        >
          <div className="site-container py-24 md:py-32">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.35fr_1fr]">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#66645f]">
                Start here
              </p>

              <div className="max-w-2xl">
                <h2
                  id="starter-heading"
                  className="text-3xl font-medium tracking-[-0.025em] sm:text-4xl"
                >
                  Not sure what you need yet?
                </h2>

                <p className="mt-6 text-base leading-7 text-[#88857e]">
                  That&apos;s exactly where you can start. Tell us what you&apos;re
                  thinking about. We&apos;ll help you work out where to take it.
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex h-11 items-center gap-2 rounded-full border border-white/[0.14] px-5 text-sm font-medium text-[#f2f0eb] transition-colors hover:border-white/[0.3] hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2f0eb]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
                >
                  Start with your idea
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section aria-labelledby="final-cta-heading">
          <div className="site-container py-28 md:py-40">
            <div className="max-w-3xl">
              <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#66645f]">
                Get in touch
              </p>

              <h2
                id="final-cta-heading"
                className="text-5xl font-medium tracking-[-0.04em] sm:text-6xl md:text-7xl"
              >
                Have something worth building?
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#88857e]">
                Let&apos;s figure out what it could become.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex h-11 items-center gap-2 rounded-full border border-white/[0.14] px-5 text-sm font-medium text-[#f2f0eb] transition-colors hover:border-white/[0.3] hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2f0eb]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
                Start a project
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}