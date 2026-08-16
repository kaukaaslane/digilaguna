import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#080808] text-[#f2f0eb]">
      <div className="site-container py-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="text-lg font-semibold text-[#f2f0eb]">DIGILAGUNA</div>
            <div className="text-sm text-[#a7a39b]">Ideas into digital.</div>
          </div>

          <nav className="flex gap-4 text-sm text-[#f2f0eb]">
            <Link href="/services" className="cursor-pointer hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">Services</Link>
            <Link href="/work" className="cursor-pointer hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">Work</Link>
            <Link href="/digital-visuals" className="cursor-pointer hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">Digital Visuals</Link>
            <Link href="/about" className="cursor-pointer hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">About</Link>
            <Link href="/contact" className="cursor-pointer hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">Contact</Link>
          </nav>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="text-xs text-[#7e7a74]">© {new Date().getFullYear()} Digilaguna OÜ</div>
          <div>
            <Link href="/contact" className="cursor-pointer text-sm text-[#f2f0eb] underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">Start a project →</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
