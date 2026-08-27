import Link from "next/link";

export default function ProjectCTA() {
  return (
    <section className="border-t border-line">
      <div className="site-container section-xl">
        <div className="max-w-3xl">
          <p className="mb-4 eyebrow">
            Start here
          </p>

          <h2 className="text-5xl font-medium tracking-[-0.04em] sm:text-6xl md:text-7xl">
            Have an idea?
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-text-muted">
            You do not need to know exactly what you need yet. Tell us what you
            are trying to achieve and we&apos;ll figure out the next step.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Start a project
              <span aria-hidden className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}