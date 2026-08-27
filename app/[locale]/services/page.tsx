import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Websites",
    intro:
      "Websites that make your business easier to understand, trust and choose.",
    description:
      "We design and build clear, responsive websites around your business, audience and goals. The focus is not on adding features for the sake of it, but on creating a website that communicates what you do and makes the next step obvious.",
    points: [
      "Business websites",
      "Landing pages",
      "Service websites",
      "Responsive design",
      "Website structure and content",
      "SEO-friendly foundations",
    ],
  },
  {
    number: "02",
    title: "E-commerce",
    intro:
      "Online stores designed around how you actually sell.",
    description:
      "An online store needs to do more than look good. We help structure products, pages and the buying experience so customers can understand what you offer and move naturally towards a purchase.",
    points: [
      "Shopify stores",
      "Product presentation",
      "E-commerce structure",
      "Conversion-focused layouts",
      "Payment and store setup",
      "Store improvements",
    ],
  },
  {
    number: "03",
    title: "Digital tools",
    intro:
      "Custom digital tools for problems that existing software does not solve well.",
    description:
      "Sometimes a website or off-the-shelf application is not enough. We can build focused digital tools around a specific workflow, internal process or business problem.",
    points: [
      "Internal tools",
      "Custom web applications",
      "Business dashboards",
      "Simple client portals",
      "Workflow tools",
      "Custom functionality",
    ],
  },
  {
    number: "04",
    title: "Automation & AI",
    intro:
      "Less repetitive work. Better workflows. Smarter systems where they actually help.",
    description:
      "Automation and AI should solve real problems, not simply be added because they are fashionable. We look for repetitive tasks, manual processes and information flows that can be made simpler or more efficient.",
    points: [
      "AI-assisted workflows",
      "Business automation",
      "Content workflows",
      "Data processing",
      "Repetitive task automation",
      "AI-powered digital tools",
    ],
  },
  {
    number: "05",
    title: "Digital visuals",
    intro:
      "Visuals created for brands, products, websites, spaces and print.",
    description:
      "We create digital visuals for projects that need something more specific than stock imagery. The visual direction can be developed around a brand, product, website or physical space.",
    points: [
      "AI-assisted visuals",
      "Brand imagery",
      "Website visuals",
      "Product visuals",
      "Print-ready artwork",
      "Digital campaigns",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Start with the problem",
    description:
      "Tell us what you are trying to achieve, what is not working or what you have been thinking about.",
  },
  {
    number: "02",
    title: "Define the right solution",
    description:
      "We look at the problem before choosing the technology. Sometimes the answer is a website. Sometimes it is something much simpler.",
  },
  {
    number: "03",
    title: "Build what makes sense",
    description:
      "We design and develop the solution with a focus on clarity, usability and keeping unnecessary complexity out.",
  },
  {
    number: "04",
    title: "Keep improving",
    description:
      "Digital products are not necessarily finished at launch. They can evolve as your business, customers and needs change.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-bg text-text">
      <div>
        {/* HERO */}
        <section
          aria-labelledby="services-page-heading"
          className="rule"
        >
          <div className="site-container section-lg">
            <div className="max-w-4xl">
              <p className="mb-5 eyebrow">
                Services
              </p>

              <h1
                id="services-page-heading"
                className="max-w-4xl text-[clamp(3.4rem,8vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.045em]"
              >
                Digital work
                <br />
                built around
                <br />
                the problem.
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
                Websites, e-commerce, digital tools, automation, AI and
                digital visuals — built around what your business actually
                needs.
              </p>

              <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn btn-primary"
                >
                  Start a project
                  <span aria-hidden className="btn-arrow">→</span>
                </Link>

                <Link
                  href="/work"
                  className="btn btn-secondary"
                >
                  View selected work
                  <span aria-hidden className="btn-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="rule">
          <div className="site-container section-lg">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.35fr_1fr]">
              <p className="eyebrow">
                What we do
              </p>

              <div className="max-w-3xl">
                <h2 className="text-3xl font-medium tracking-[-0.025em] sm:text-4xl">
                  Not every project needs the same solution.
                </h2>

                <p className="mt-6 text-base leading-7 text-text-muted">
                  A business might need a new website. Another might need an
                  online store, an internal tool or a better way to handle
                  repetitive work. The technology comes after understanding
                  the problem.
                </p>

                <p className="mt-5 text-base leading-7 text-text-muted">
                  Our job is to figure out what needs to be built, why it needs
                  to be built and how to keep the result useful.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          aria-labelledby="service-list-heading"
          className="rule"
        >
          <div className="site-container section-lg">
            <div className="mb-14 max-w-2xl">
              <p className="mb-4 eyebrow">
                Our services
              </p>

              <h2
                id="service-list-heading"
                className="text-3xl font-medium tracking-[-0.025em] sm:text-4xl"
              >
                What we can build together.
              </h2>
            </div>

            <div className="border-t border-line">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="rule py-12 md:py-16"
                >
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-[80px_0.8fr_1fr] md:gap-8">
                    <div className="text-xs text-text-faint">
                      {service.number}
                    </div>

                    <div>
                      <h3 className="text-2xl font-medium tracking-[-0.025em] sm:text-3xl">
                        {service.title}
                      </h3>

                      <p className="mt-4 text-base leading-7 text-text-secondary">
                        {service.intro}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm leading-6 text-text-muted md:text-base">
                        {service.description}
                      </p>

                      <ul className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {service.points.map((point) => (
                          <li
                            key={point}
                            className="text-sm text-text-faint"
                          >
                            <span className="mr-2 text-text-secondary">—</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section
          aria-labelledby="approach-heading"
          className="rule"
        >
          <div className="site-container section-lg">
            <div className="mb-14 max-w-2xl">
              <p className="mb-4 eyebrow">
                How we work
              </p>

              <h2
                id="approach-heading"
                className="text-3xl font-medium tracking-[-0.025em] sm:text-4xl"
              >
                Start with the idea. Not the technology.
              </h2>

              <p className="mt-5 text-base leading-7 text-text-muted">
                A good digital solution starts with understanding what needs
                to change.
              </p>
            </div>

            <div className="grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="rule py-8 sm:border-r sm:px-6 lg:min-h-[240px] lg:border-b-0 lg:px-8 first:lg:pl-0 last:lg:border-r-0"
                >
                  <div className="mb-8 text-xs text-text-faint">
                    {step.number}
                  </div>

                  <h3 className="mb-3 text-lg font-medium">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-6 text-text-muted">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="rule">
          <div className="site-container section-lg">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.35fr_1fr]">
              <p className="eyebrow">
                The principle
              </p>

              <div className="max-w-3xl">
                <h2 className="text-3xl font-medium tracking-[-0.025em] sm:text-4xl">
                  Technology should make things clearer, not more complicated.
                </h2>

                <p className="mt-6 text-base leading-7 text-text-muted">
                  We do not believe every business needs the newest technology
                  or the most complicated system. The best solution is usually
                  the one that solves the actual problem without creating new
                  ones.
                </p>

                <p className="mt-5 text-base leading-7 text-text-muted">
                  That means choosing the right level of technology, designing
                  for real people and keeping the experience understandable.
                </p>

                <p className="mt-7 statement">
                  Simple where it can be. Powerful where it needs to be.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section aria-labelledby="services-cta-heading">
          <div className="site-container section-xl">
            <div className="max-w-3xl">
              <p className="mb-4 eyebrow">
                Start here
              </p>

              <h2
                id="services-cta-heading"
                className="text-5xl font-medium tracking-[-0.04em] sm:text-6xl md:text-7xl"
              >
                Have an idea?
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-text-muted">
                You do not need to know exactly what you need yet. Tell us what
                you are trying to achieve and we&apos;ll figure out the next
                step.
              </p>

              <Link
                href="/contact"
                className="mt-8 btn btn-primary"
              >
                Start a project
                <span aria-hidden className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}