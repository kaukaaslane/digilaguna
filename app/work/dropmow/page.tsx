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

export default function DropMow() {
  return (
    <div className="overflow-x-hidden bg-[#080808] text-[#f2f0eb]">
      {/* INTRO */}
      <section className="border-b border-white/[0.09]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-36 lg:px-12">
          <div className="mb-8 text-[10px] tracking-[0.28em] text-[#66645f] uppercase">
            Case study / 01
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.45fr] lg:items-end">
            <div>
              <h1 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[7rem]">
                DROP MOW
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-8 text-[#a7a39b] sm:text-2xl">
                Robotic lawn care, rethought.
              </p>
            </div>

            <div className="text-sm leading-6 text-[#66645f] lg:pb-2">
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
            <div className="text-[10px] tracking-[0.25em] text-[#66645f] uppercase">
              Overview
            </div>

            <div className="max-w-3xl">
              <p className="text-2xl leading-[1.35] tracking-[-0.02em] text-[#f2f0eb] sm:text-3xl">
                A multilingual website concept for a robotic lawn-care
                service, designed around clarity, simplicity and a calm
                Scandinavian visual direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HERO VISUAL PLACEHOLDER */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative aspect-[16/9] overflow-hidden border border-white/[0.08] bg-[#101010]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-3 text-[10px] tracking-[0.25em] text-[#444] uppercase">
                  Selected screen
                </div>
                <div className="text-sm text-[#555]">
                  DropMow homepage visual
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY SECTIONS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-36 lg:px-12">
          <div className="border-t border-white/[0.09]">
            {sections.map((section) => (
              <article
                key={section.number}
                className="grid gap-6 border-b border-white/[0.09] py-10 md:grid-cols-[80px_0.55fr_1fr] md:gap-8 md:py-14"
              >
                <div className="text-xs text-[#66645f]">
                  {section.number}
                </div>

                <h2 className="text-2xl font-medium tracking-[-0.025em]">
                  {section.title}
                </h2>

                <p className="max-w-2xl text-base leading-7 text-[#88857e]">
                  {section.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VISUALS */}
      <section className="border-t border-white/[0.09]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="mb-14 grid gap-8 md:grid-cols-[0.4fr_1fr]">
            <div className="text-[10px] tracking-[0.25em] text-[#66645f] uppercase">
              Selected screens
            </div>

            <div>
              <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                The interface
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#88857e]">
                Real project screens will be added here. The layout is
                intentionally prepared for large desktop views and supporting
                mobile screens.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden border border-white/[0.08] bg-[#101010]">
              <div className="absolute inset-0 flex items-center justify-center text-[10px] tracking-[0.2em] text-[#444] uppercase">
                Desktop screen
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border border-white/[0.08] bg-[#101010]">
              <div className="absolute inset-0 flex items-center justify-center text-[10px] tracking-[0.2em] text-[#444] uppercase">
                Mobile screen
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING */}
      <section className="border-t border-white/[0.09]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="grid gap-10 md:grid-cols-[0.4fr_1fr]">
            <div className="text-[10px] tracking-[0.25em] text-[#66645f] uppercase">
              Reflection
            </div>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                Designing for clarity.
              </h2>

              <p className="mt-6 text-base leading-7 text-[#88857e]">
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
      <section className="border-t border-white/[0.09]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-36 lg:px-12">
          <div className="mb-6 text-[10px] tracking-[0.25em] text-[#66645f] uppercase">
            Next
          </div>

          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              More work
            </h2>

            <Link
              href="/work"
              className="group inline-flex cursor-pointer items-center text-sm text-[#f2f0eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2f0eb]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
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
      <section className="border-t border-white/[0.09]">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:px-8 md:py-40 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-5 text-[10px] tracking-[0.25em] text-[#66645f] uppercase">
              Have an idea?
            </div>

            <h2 className="text-5xl font-medium tracking-[-0.05em] sm:text-6xl md:text-7xl">
              Let's make sense of it.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#88857e]">
              You don't need to have everything figured out before starting.
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center h-11 md:h-9 gap-2 px-4 rounded-full border border-white/12 text-sm font-medium text-[#f2f0eb] cursor-pointer hover:bg-white/[0.04] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
            >
              <span>Start a project</span>
              <span aria-hidden className="text-[#66645f] transition-colors duration-150 group-hover:text-[#f2f0eb]">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}