import ProjectCTA from "../components/ProjectCTA";

export default function Services() {
  return (
    <div>
      <div className="site-container py-20">
        <div className="max-w-3xl">
          <div className="text-xs text-gray-400 mb-3">Services</div>
          <h1 className="text-3xl font-semibold mb-6">Services</h1>
          <section className="mb-12">
            <h2 className="text-xl font-semibold">Web Design</h2>
            <p className="text-gray-300">UX, structure, visual direction, responsive layouts, typography and content hierarchy.</p>
          </section>
          <section className="mb-12">
            <h2 className="text-xl font-semibold">Front‑end Development</h2>
            <p className="text-gray-300">Next.js, React, TypeScript, Tailwind CSS — responsive development with performance and accessibility in mind.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Digital Visuals</h2>
            <p className="text-gray-300">Digital imagery, campaign visuals, product visuals and print-ready artwork.</p>
          </section>
        </div>
      </div>

      <ProjectCTA />
    </div>
  );
}
