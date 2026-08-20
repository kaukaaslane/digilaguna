"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
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
    <header className="sticky top-0 z-40 border-b border-gray-800 bg-[#080808]">
      <div className="site-container flex items-center justify-between py-5">
        <div>
          <Link
            href="/"
            className="cursor-pointer text-lg font-semibold tracking-tight text-[#f2f0eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
          >
            DIGILAGUNA
          </Link>

          <div className="text-xs text-[#a7a39b]">
            Ideas into digital.
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 text-sm text-gray-100 md:flex">
          <Link
            href="/services"
            className="cursor-pointer hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
          >
            Services
          </Link>

          <Link
            href="/work"
            className="cursor-pointer hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
          >
            Work
          </Link>

          <Link
            href="/digital-visuals"
            className="cursor-pointer hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
          >
            Digital Visuals
          </Link>

          <Link
            href="/about"
            className="cursor-pointer hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="cursor-pointer hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
          >
            Contact
          </Link>

          {pathname !== "/contact" && (
            <Link
              href="/contact"
              className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/12 px-4 text-sm font-medium text-[#f2f0eb] transition-colors duration-150 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] md:h-9"
            >
              <span>Start a project</span>

              <span
                aria-hidden
                className="text-[#66645f] transition-colors duration-150 group-hover:text-[#f2f0eb]"
              >
                →
              </span>
            </Link>
          )}
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md text-[#f2f0eb] hover:bg-white/[0.02] active:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] md:h-10 md:w-10"
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
          className="fixed inset-0 z-50 flex flex-col bg-[#080808] text-[#f2f0eb]"
        >
          {/* Header row inside overlay */}
          <div className="flex items-center justify-between border-b border-gray-800 px-6 py-5">
            <div>
              <Link
                href="/"
                onClick={closeMenu}
                className="cursor-pointer text-lg font-semibold tracking-tight text-[#f2f0eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
                DIGILAGUNA
              </Link>

              <div className="text-xs text-[#a7a39b]">
                Ideas into digital.
              </div>
            </div>

            <div>
              <button
                ref={closeBtnRef}
                type="button"
                aria-label="Close menu"
                onClick={closeMenu}
                className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md text-[#f2f0eb] hover:bg-white/[0.02] active:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] md:h-10 md:w-10"
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
            <nav className="flex min-h-[60vh] flex-col gap-6 text-xl text-[#f2f0eb]">
              <Link
                href="/services"
                onClick={closeMenu}
                className="block cursor-pointer text-[#f2f0eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
                Services
              </Link>

              <Link
                href="/work"
                onClick={closeMenu}
                className="block cursor-pointer text-[#f2f0eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
                Work
              </Link>

              <Link
                href="/digital-visuals"
                onClick={closeMenu}
                className="block cursor-pointer text-[#f2f0eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
                Digital Visuals
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className="block cursor-pointer text-[#f2f0eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="block cursor-pointer text-[#f2f0eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
                Contact
              </Link>

              {pathname !== "/contact" && (
                <div className="mt-6">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/12 px-4 text-sm font-medium text-[#f2f0eb] transition-colors duration-150 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] md:h-9"
                  >
                    <span>Start a project</span>

                    <span
                      aria-hidden
                      className="text-[#66645f] transition-colors duration-150 group-hover:text-[#f2f0eb]"
                    >
                      →
                    </span>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}