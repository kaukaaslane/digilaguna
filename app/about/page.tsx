import ProjectCTA from "../components/ProjectCTA";

export default function About() {
  return (
    <div>
      <div className="site-container py-20">
        <div className="max-w-3xl">
          <div className="text-xs text-gray-400 mb-3">About</div>
          <h1 className="text-3xl font-semibold mb-4">About Digilaguna</h1>
          <p className="text-gray-300 mb-4">Web design & digital graphics education at Estonian Entrepreneurship University of Applied Sciences (Mainor), graduated 2021. Focused on web design, digital graphics, visual creation and front-end development.</p>
          <p className="text-gray-300">Work is practice-led and rooted in visual thinking. Modern tools assist the process but the emphasis remains on thoughtful design and careful implementation.</p>
        </div>
      </div>

      <ProjectCTA />
    </div>
  );
}
