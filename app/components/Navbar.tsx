"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import { localizePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

export default function Navbar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const p = (route: string) => localizePath(route, locale);
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    // Lock background scroll when menu is open
    if (open) {
      document.body.style.overflow = "hidden";

      // Focus the close button inside the overlay
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = "";
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 rule bg-bg">
      <div className="site-container flex items-center justify-between py-5">
        <Link href={p("/")} className="flex cursor-pointer items-center gap-3">
          <Image src="/logo.svg" alt="Digilaguna" width={28} height={30} priority />

          <div className="border-l border-white/25 pl-3">
            <div className="text-lg font-semibold tracking-tight text-text">
              DIGILAGUNA
            </div>

            <div className="text-xs text-text-secondary">
              {dict.footer.tagline}
            </div>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 text-sm text-text md:flex">
          <Link
            href={p("/services")}
            data-active={pathname === p("/services")}
            className="link-nav"
          >
            {dict.nav.services}
          </Link>

          <Link
            href={p("/work")}
            data-active={pathname === p("/work")}
            className="link-nav"
          >
            {dict.nav.work}
          </Link>

          <Link
            href={p("/digital-visuals")}
            data-active={pathname === p("/digital-visuals")}
            className="link-nav"
          >
            {dict.nav.visuals}
          </Link>

          <Link
            href={p("/about")}
            data-active={pathname === p("/about")}
            className="link-nav"
          >
            {dict.nav.about}
          </Link>

          <Link
            href={p("/contact")}
            data-active={pathname === p("/contact")}
            className="link-nav"
          >
            {dict.nav.contact}
          </Link>

          {pathname !== p("/contact") && (
            <Link
              href={p("/contact")}
            data-active={pathname === p("/contact")}
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
          )}
          <LocaleSwitcher locale={locale} label={dict.nav.language} />
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? dict.nav.menuClose : dict.nav.menuOpen}
            onClick={() => setOpen((v) => !v)}
            className="btn-icon"
          >
            {open ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M3 6h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 12h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col bg-bg text-text"
        >
          {/* Header row inside overlay */}
          <div className="flex items-center justify-between rule px-6 py-5">
            <Link
              href={p("/")}
              onClick={closeMenu}
              className="flex cursor-pointer items-center gap-3"
            >
              <Image src="/logo.svg" alt="Digilaguna" width={28} height={30} />

              <div>
                <div className="text-lg font-semibold tracking-tight text-text">
                  DIGILAGUNA
                </div>

                <div className="text-xs text-text-secondary">
                  {dict.footer.tagline}
                </div>
              </div>
            </Link>

            <div>
              <button
                ref={closeBtnRef}
                type="button"
                aria-label={dict.nav.menuClose}
                onClick={closeMenu}
                className="btn-icon"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="overflow-auto px-6 py-8">
            <nav className="flex min-h-[60vh] flex-col gap-6 text-xl text-text">
              <Link
                href={p("/services")}
            data-active={pathname === p("/services")}
                onClick={closeMenu}
                className="link-nav block"
              >
                {dict.nav.services}
              </Link>

              <Link
                href={p("/work")}
            data-active={pathname === p("/work")}
                onClick={closeMenu}
                className="link-nav block"
              >
                {dict.nav.work}
              </Link>

              <Link
                href={p("/digital-visuals")}
            data-active={pathname === p("/digital-visuals")}
                onClick={closeMenu}
                className="link-nav block"
              >
                {dict.nav.visuals}
              </Link>

              <Link
                href={p("/about")}
            data-active={pathname === p("/about")}
                onClick={closeMenu}
                className="link-nav block"
              >
                {dict.nav.about}
              </Link>

              <Link
                href={p("/contact")}
            data-active={pathname === p("/contact")}
                onClick={closeMenu}
                className="link-nav block"
              >
                {dict.nav.contact}
              </Link>

              {pathname !== p("/contact") && (
                <div className="mt-6">
                  <Link
                    href={p("/contact")}
            data-active={pathname === p("/contact")}
                    onClick={closeMenu}
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
              <div className="mt-8">
                <LocaleSwitcher
                  locale={locale}
                  label={dict.nav.language}
                  onNavigate={closeMenu}
                />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}