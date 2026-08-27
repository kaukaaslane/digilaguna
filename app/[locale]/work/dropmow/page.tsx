import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "The idea",
    text: "DropMow explores a service model where robotic lawn care becomes something you use rather than something you have to own, store or maintain.",
  },
  {
    number: "02",
    title: "The challenge",
    text: "How do you make a relatively technical service feel simple, trustworthy and approachable? The interface needed to explain the idea quickly without overwhelming the visitor with technical detail.",
  },
  {
    number: "03",
    title: "Design direction",
    text: "The visual direction is calm, minimal and Scandinavian-inspired. Clear typography, generous space and a restrained interface help keep the focus on the service rather than the technology behind it.",
  },
  {
    number: "04",
    title: "UX & structure",
    text: "The experience follows a simple path: understand the service, see how it works, explore the pricing and start a conversation. The goal is to remove friction rather than add more information.",
  },
  {
    number: "05",
    title: "Front-end development",
    text: "The website was built with Next.js, TypeScript and Tailwind CSS, with a focus on responsive behaviour, reusable components, accessibility and a multilingual structure.",
  },
];

const faqs = [
  {
    question: "Is DropMow a real service?",
    answer:
      "DropMow was developed as a service concept and digital product exploration. The case study focuses on how the idea could be presented and experienced through a real-world website.",
  },
  {
    question: "What was the main UX challenge?",
    answer:
      "The main challenge was making a relatively technical robotic lawn-care service feel simple and approachable. The interface therefore focuses on explaining the value of the service before introducing unnecessary technical detail.",
  },
  {
    question: "Why a service model instead of selling the robot?",
    answer:
      "The concept explores a model where customers can benefit from robotic lawn care without having to purchase, store or maintain the equipment themselves.",
  },
  {
    question: "Was the website built from scratch?",
    answer:
      "Yes. The front-end concept was developed with Next.js, TypeScript and Tailwind CSS, with responsive behaviour and reusable components considered throughout the build.",
  },
  {
    question: "What would happen next?",
    answer:
      "The next step would be validating the concept with real customers, testing the service economics and refining the website around real usage, pricing and operational requirements.",
  },
];

export default function DropMow() {
  return (
    <div className="overflow-x-hidden bg-bg text-text">
      {/* INTRO */}
      <section className="rule">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-36 lg:px-12">
          <div className="mb-8 eyebrow">
            Case study / 01
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.45fr] lg:items-end">
            <div>
              <h1 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[7rem]">
                DROP MOW
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-8 text-text-secondary sm:text-2xl">
                Robotic lawn care, rethought.
              </p>
            </div>

            <div className="text-sm leading-6 text-text-faint lg:pb-2">
              <div>Web Design</div>
              <div>UX</div>
              <div>Front-end Development</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT INTRO */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-28 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.55fr_1fr]">
            <div className="eyebrow">
              Overview
            </div>

            <div className="max-w-3xl">
              <p className="text-2xl leading-[1.35] tracking-[-0.02em] text-text sm:text-3xl">
                A multilingual website concept for a robotic lawn-care
                service, designed around clarity, simplicity and a calm
                Scandinavian visual direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HERO VISUAL */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative aspect-[16/9] overflow-hidden border border-line bg-bg-raised">
            <Image
              src="/dropmow-hero.webp"
              alt="DropMow homepage"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1400px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* CASE STUDY SECTIONS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-36 lg:px-12">
          <div className="border-t border-line">
            {sections.map((section) => (
              <article
                key={section.number}
                className="grid gap-6 rule py-10 md:grid-cols-[80px_0.55fr_1fr] md:gap-8 md:py-14"
              >
                <div className="text-xs text-text-faint">
                  {section.number}
                </div>

                <h2 className="text-2xl font-medium tracking-[-0.025em]">
                  {section.title}
                </h2>

                <p className="max-w-2xl text-base leading-7 text-text-muted">
                  {section.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="mb-14 grid gap-8 md:grid-cols-[0.4fr_1fr]">
            <div className="eyebrow">
              How it works
            </div>

            <div>
              <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                Lawn care, without the ownership.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
                We bring the robot to your lawn, set everything up and let it
                do the work.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden border border-line bg-bg-raised">
            <Image
              src="/dropmow-process.webp"
              alt="DropMow how it works"
              width={2400}
              height={1350}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* SECOND SCREEN */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="mb-14 grid gap-8 md:grid-cols-[0.4fr_1fr]">
            <div className="eyebrow">
              Project screen
            </div>

            <div>
              <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                A simple service model.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
                The experience keeps the service understandable from the
                first interaction through to getting started.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden border border-line bg-bg-raised">
            <Image
              src="/dropmow-detail.webp"
              alt="DropMow service screen"
              width={2400}
              height={1350}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* SELECTED SCREENS */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="mb-14 grid gap-8 md:grid-cols-[0.4fr_1fr]">
            <div className="eyebrow">
              Selected screens
            </div>

            <div>
              <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                The interface
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
                The final experience was designed to work across desktop and
                mobile while keeping the same visual language throughout.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* DESKTOP */}
            <div className="relative overflow-hidden border border-line bg-bg-raised">
              <Image
                src="/dropmow-full.webp"
                alt="DropMow desktop website"
                width={2400}
                height={1350}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full"
              />
            </div>

            {/* MOBILE */}
            <div className="relative overflow-hidden border border-line bg-bg-raised">
              <Image
                src="/dropmow-mobile.webp"
                alt="DropMow mobile website"
                width={1200}
                height={1800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GET STARTED SCREEN */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="mb-14 grid gap-8 md:grid-cols-[0.4fr_1fr]">
            <div className="eyebrow">
              Get started
            </div>

            <div>
              <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                Ready for a better lawn?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
                The final step is deliberately simple: tell us about the
                property and start a conversation.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden border border-line bg-bg-raised">
            <Image
              src="/dropmow-form.webp"
              alt="DropMow get started form"
              width={2400}
              height={1350}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* FULL PROJECT */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 md:py-32 lg:px-8">
          <div className="mb-10">
            <div className="eyebrow">
              Full project
            </div>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
              DropMow from top to bottom.
            </h2>
          </div>

          <div className="overflow-hidden border border-line bg-bg-raised">
            <Image
              src="/dropmow-full.webp"
              alt="Full DropMow website"
              width={2400}
              height={5000}
              sizes="100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="grid gap-10 md:grid-cols-[0.4fr_1fr]">
            <div className="eyebrow">
              Next steps
            </div>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                From concept to something real.
              </h2>

              <p className="mt-6 text-base leading-7 text-text-muted">
                The next phase would be less about adding features and more
                about validating the idea in the real world.
              </p>

              <div className="mt-10 border-t border-line">
                <div className="grid gap-6 rule py-8 md:grid-cols-[80px_0.8fr_1fr] md:gap-8">
                  <div className="text-xs text-text-faint">01</div>

                  <h3 className="text-lg font-medium md:text-xl">
                    Validate the service
                  </h3>

                  <p className="text-sm leading-6 text-text-muted md:text-base">
                    Test the concept with real homeowners and understand what
                    would make the service genuinely useful.
                  </p>
                </div>

                <div className="grid gap-6 rule py-8 md:grid-cols-[80px_0.8fr_1fr] md:gap-8">
                  <div className="text-xs text-text-faint">02</div>

                  <h3 className="text-lg font-medium md:text-xl">
                    Test the economics
                  </h3>

                  <p className="text-sm leading-6 text-text-muted md:text-base">
                    Explore pricing, equipment utilisation, maintenance and
                    the operational model behind the service.
                  </p>
                </div>

                <div className="grid gap-6 rule py-8 md:grid-cols-[80px_0.8fr_1fr] md:gap-8">
                  <div className="text-xs text-text-faint">03</div>

                  <h3 className="text-lg font-medium md:text-xl">
                    Build the real product
                  </h3>

                  <p className="text-sm leading-6 text-text-muted md:text-base">
                    Turn the validated concept into a service people can
                    actually book, use and return to throughout the season.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="grid gap-10 md:grid-cols-[0.4fr_1fr]">
            <div className="eyebrow">
              FAQ
            </div>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                Questions around the concept.
              </h2>

              <div className="mt-10 border-t border-line">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rule"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-6 text-left text-base font-medium marker:hidden [&::-webkit-details-marker]:hidden">
                      <span>{faq.question}</span>

                      <span
                        aria-hidden
                        className="shrink-0 text-xl font-normal text-text-faint transition-transform duration-200 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>

                    <div className="max-w-2xl pb-7 pr-10 text-sm leading-6 text-text-muted md:text-base">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="grid gap-10 md:grid-cols-[0.4fr_1fr]">
            <div className="eyebrow">
              Reflection
            </div>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                Designing for clarity.
              </h2>

              <p className="mt-6 text-base leading-7 text-text-muted">
                This project started as an exploration of how a relatively
                technical service could be presented in a simple, human way.
                The challenge was not to explain every technical detail, but
                to make the value of the service easy to understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-36 lg:px-12">
          <div className="mb-6 eyebrow">
            Next
          </div>

          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              More work
            </h2>

            <Link
              href="/work"
              className="group inline-flex cursor-pointer items-center text-sm text-text"
            >
              View selected work

              <span
                aria-hidden
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* START PROJECT */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:px-8 md:py-40 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-5 eyebrow">
              Have an idea?
            </div>

            <h2 className="text-5xl font-medium tracking-[-0.05em] sm:text-6xl md:text-7xl">
              Let&apos;s make sense of it.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-text-muted">
              You don&apos;t need to have everything figured out before
              starting.
            </p>

            <Link
              href="/contact"
              className="mt-8 hover:bg-white/[0.04] btn btn-primary"
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
      </section>
    </div>
  );
}