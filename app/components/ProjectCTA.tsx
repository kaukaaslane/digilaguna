import Link from "next/link";
import { localizePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

export default function ProjectCTA({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="border-t border-line">
      <div className="site-container section-xl">
        <div className="max-w-3xl">
          <p className="mb-4 eyebrow">{dict.projectCta.eyebrow}</p>

          <h2 className="text-5xl font-medium tracking-[-0.04em] sm:text-6xl md:text-7xl">
            {dict.projectCta.title}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-text-muted">
            {dict.projectCta.body}
          </p>

          <div className="mt-8">
            <Link
              href={localizePath("/contact", locale)}
              className="btn btn-primary"
            >
              {dict.common.startProject}
              <span aria-hidden className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
