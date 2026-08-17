import Link from "next/link";
import ProjectCTA from "../components/ProjectCTA";

export default function Work() {
  return (
    <div>
      <div className="site-container py-20">
        <div className="max-w-4xl">
          <div className="text-xs text-gray-400 mb-3">Work</div>
          <h1 className="text-3xl font-semibold mb-6">Selected projects</h1>
          <div className="space-y-8">
            <article className="border rounded-md p-6">
              <h2 className="text-xl font-semibold">DROP MOW</h2>
              <div className="text-sm text-gray-400 mb-3">Web Design · UX · Front-end Development</div>
              <p className="text-gray-300 mb-4">A portfolio / concept project showcasing design and front-end implementation.</p>
              <Link href="/work/dropmow" className="group inline-flex items-center h-11 md:h-9 gap-2 px-4 rounded-full border border-white/12 text-sm font-medium text-[#f2f0eb] cursor-pointer hover:bg-white/[0.04] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"><span>View case study</span><span aria-hidden className="text-[#66645f] transition-colors duration-150 group-hover:text-[#f2f0eb]">→</span></Link>
            </article>
          </div>
        </div>
      </div>

      <ProjectCTA />
    </div>
  );
}
