"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    // lock background scroll when menu is open
    if (open) {
      document.body.style.overflow = "hidden";
      // focus the close button inside the overlay
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
    <header className="static border-b border-gray-800 bg-[#080808] md:bg-transparent">
      <div className="site-container flex items-center justify-between py-5">
        <div>
          <Link href="/" className="cursor-pointer text-lg font-semibold tracking-tight text-[#f2f0eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">
            DIGILAGUNA
          </Link>
          <div className="text-xs text-[#a7a39b]">Ideas into digital.</div>
        </div>

        {/* Desktop navigation (visible md and up) */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-100">
          <Link href="/services" className="cursor-pointer hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">
            Services
          </Link>
          <Link href="/work" className="cursor-pointer hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">
            Work
          </Link>
          <Link href="/digital-visuals" className="cursor-pointer hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">
            Digital Visuals
          </Link>
          <Link href="/about" className="cursor-pointer hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">
            About
          </Link>
          <Link href="/contact" className="cursor-pointer hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">
            Contact
          </Link>
          <Link
            href="/contact"
          className="group inline-flex items-center h-11 md:h-9 gap-2 px-4 rounded-full border border-white/12 text-sm font-medium text-[#f2f0eb] cursor-pointer hover:bg-white/[0.04] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
          >
          <span>Start a project</span>
          <span aria-hidden className="text-[#66645f] transition-colors duration-150 group-hover:text-[#f2f0eb]">→</span>
          </Link>
        </nav>

        {/* Mobile: hamburger (visible below md) */}
        <div className="md:hidden">
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 md:h-10 md:w-10 cursor-pointer items-center justify-center rounded-md text-[#f2f0eb] hover:bg-white/[0.02] active:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
          >
            {/* Icon minimal */}
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
              <Link href="/" onClick={closeMenu} className="cursor-pointer text-lg font-semibold tracking-tight text-[#f2f0eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">
                DIGILAGUNA
              </Link>
              <div className="text-xs text-[#a7a39b]">Ideas into digital.</div>
            </div>

            <div>
              <button
                ref={closeBtnRef}
                type="button"
                aria-label="Close menu"
                onClick={closeMenu}
                className="inline-flex h-11 w-11 md:h-10 md:w-10 cursor-pointer items-center justify-center rounded-md text-[#f2f0eb] hover:bg-white/[0.02] active:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div className="overflow-auto py-8 px-6">
            <nav className="flex min-h-[60vh] flex-col gap-6 text-xl text-[#f2f0eb]">
              <Link href="/services" onClick={closeMenu} className="block cursor-pointer text-[#f2f0eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">
                Services
              </Link>
              <Link href="/work" onClick={closeMenu} className="block cursor-pointer text-[#f2f0eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">
                Work
              </Link>
              <Link href="/digital-visuals" onClick={closeMenu} className="block cursor-pointer text-[#f2f0eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">
                Digital Visuals
              </Link>
              <Link href="/about" onClick={closeMenu} className="block cursor-pointer text-[#f2f0eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">
                About
              </Link>
              <Link href="/contact" onClick={closeMenu} className="block cursor-pointer text-[#f2f0eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">
                Contact
              </Link>

              <div className="mt-6">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="group inline-flex items-center h-11 md:h-9 gap-2 px-4 rounded-full border border-white/12 text-sm font-medium text-[#f2f0eb] cursor-pointer hover:bg-white/[0.04] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
                >
                  <span>Start a project</span>
                  <span aria-hidden className="text-[#66645f] transition-colors duration-150 group-hover:text-[#f2f0eb]">→</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
