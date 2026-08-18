import Link from "next/link";

const navLinkClass =
  "cursor-pointer hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#080808] text-[#f2f0eb]">
      <div className="site-container py-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="text-lg font-semibold text-[#f2f0eb]">
              DIGILAGUNA
            </div>
            <div className="text-sm text-[#a7a39b]">
              Ideas into digital.
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#f2f0eb]">
            <Link href="/services" className={navLinkClass}>
              Services
            </Link>
            <Link href="/work" className={navLinkClass}>
              Work
            </Link>
            <Link href="/digital-visuals" className={navLinkClass}>
              Digital Visuals
            </Link>
            <Link href="/about" className={navLinkClass}>
              About
            </Link>
            <Link href="/contact" className={navLinkClass}>
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-6 border-t border-white/10 pt-5">
          <nav
            aria-label="Legal"
            className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#a7a39b]"
          >
            <Link href="/privacy" className="hover:text-[#f2f0eb] hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#f2f0eb] hover:underline">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-[#f2f0eb] hover:underline">
              Cookie Policy
            </Link>
            <Link
              href="/legal-notice"
              className="hover:text-[#f2f0eb] hover:underline"
            >
              Legal Notice
            </Link>
          </nav>
        </div>

        <div className="mt-8 flex items-center justify-between gap-6">
          <div className="text-xs text-[#7e7a74]">
            © {new Date().getFullYear()} Digilaguna OÜ
          </div>

          <div>
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
          </div>
        </div>
      </div>
    </footer>
  );
}