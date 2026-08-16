import ProjectCTA from "../components/ProjectCTA";

export default function DigitalVisuals() {
  return (
    <div>
      <div className="site-container py-20">
        <div className="max-w-4xl">
          <div className="text-xs text-gray-400 mb-3">Digital Visuals</div>
          <h1 className="text-3xl font-semibold mb-6">Visual ideas for screens, campaigns and print</h1>
          <p className="text-gray-300 mb-8">A curated collection of visual experiments and editorial imagery. This page emphasises large imagery and generous whitespace.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-64 bg-gray-900 flex items-center justify-center text-gray-600">[Image]</div>
            <div className="h-64 bg-gray-900 flex items-center justify-center text-gray-600">[Image]</div>
            <div className="h-64 bg-gray-900 flex items-center justify-center text-gray-600">[Image]</div>
          </div>
        </div>
      </div>

      <ProjectCTA />
    </div>
  );
}
