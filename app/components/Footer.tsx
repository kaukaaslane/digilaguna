"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localizePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

const navLinkClass = "link-nav";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const p = (route: string) => localizePath(route, locale);

  return (
    <footer className="border-t border-line bg-bg text-text">
      <div className="site-container py-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Digilaguna" width={28} height={30} />

            <div className="border-l border-white/25 pl-3">
              <div className="text-lg font-semibold text-text">
                DIGILAGUNA
              </div>

              <div className="text-sm text-text-secondary">
                {dict.footer.tagline}
              </div>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-text">
            <Link href={p("/services")} className={navLinkClass}>
              {dict.nav.services}
            </Link>

            <Link href={p("/work")} className={navLinkClass}>
              {dict.nav.work}
            </Link>

            <Link href={p("/digital-visuals")} className={navLinkClass}>
              {dict.nav.visuals}
            </Link>

            <Link href={p("/about")} className={navLinkClass}>
              {dict.nav.about}
            </Link>

            <Link href={p("/contact")} className={navLinkClass}>
              {dict.nav.contact}
            </Link>
          </nav>
        </div>

        <div className="mt-6 border-t border-line pt-5">
          <nav
            aria-label={dict.footer.legal}
            className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-text-secondary"
          >
            <Link
              href={p("/privacy")}
              className="link-nav"
            >
              {dict.footer.privacy}
            </Link>

            <Link
              href={p("/terms")}
              className="link-nav"
            >
              {dict.footer.terms}
            </Link>

            <Link
              href={p("/cookies")}
              className="link-nav"
            >
              {dict.footer.cookies}
            </Link>

            <Link
              href={p("/legal-notice")}
              className="link-nav"
            >
              {dict.footer.notice}
            </Link>
          </nav>
        </div>

        <div className="mt-8 flex items-center justify-between gap-6">
          <div className="text-xs text-text-faint">
            © {new Date().getFullYear()} Digilaguna OÜ
          </div>

          {pathname !== p("/contact") && (
            <div>
              <Link
                href={p("/contact")}
                className="btn btn-secondary"
              >
                <span>{dict.nav.cta}</span>

                <span
                  aria-hidden
                  className="btn-arrow"
                >
                  →
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}