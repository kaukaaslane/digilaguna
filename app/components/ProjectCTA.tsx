import Link from "next/link";

export default function ProjectCTA() {
  return (
    <section className="border-t border-gray-800">
      <div className="site-container py-16 text-center">
        <h3 className="text-2xl font-semibold mb-2">Have an idea?</h3>
        <p className="text-gray-400 mb-6">Let's turn it into something digital.</p>
        <Link href="/contact" className="cursor-pointer rounded-full border border-white/12 px-6 py-3 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">Start a project →</Link>
      </div>
    </section>
  );
}
