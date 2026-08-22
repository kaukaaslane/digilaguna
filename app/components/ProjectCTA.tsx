import Link from "next/link";

export default function ProjectCTA() {
  return (
    <section className="border-t border-gray-800">
      <div className="site-container py-28 md:py-40">
        <div className="max-w-3xl">
          <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#66645f]">
            Start here
          </p>

          <h2 className="text-5xl font-medium tracking-[-0.04em] sm:text-6xl md:text-7xl">
            Have an idea?
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#88857e]">
            You do not need to know exactly what you need yet. Tell us what you
            are trying to achieve and we&apos;ll figure out the next step.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/[0.14] px-5 text-sm font-medium text-[#f2f0eb] transition-colors hover:border-white/[0.3] hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2f0eb]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
            >
              Start a project
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}