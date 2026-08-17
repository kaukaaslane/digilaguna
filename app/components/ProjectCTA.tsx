import Link from "next/link";

export default function ProjectCTA() {
  return (
    <section className="border-t border-gray-800">
      <div className="site-container py-16 text-center">
        <h3 className="text-2xl font-semibold mb-2">Have an idea?</h3>
        <p className="text-gray-400 mb-6">Let's turn it into something digital.</p>
        <Link href="/contact" className="group inline-flex items-center h-11 md:h-9 gap-2 px-4 rounded-full border border-white/12 text-sm font-medium text-[#f2f0eb] cursor-pointer hover:bg-white/[0.04] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">
          <span>Start a project</span>
          <span aria-hidden className="text-[#66645f] transition-colors duration-150 group-hover:text-[#f2f0eb]">→</span>
        </Link>
      </div>
    </section>
  );
}
