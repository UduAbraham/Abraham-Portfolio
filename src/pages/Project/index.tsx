import ProjectCard from "./project_card";
import { Project } from "./project.type";

const projects: Project[] = [
  {
    id: "p1",
    title: "E-commerce Platform",
    description:
      "A modern e-commerce frontend showcasing products, filters, and checkout UI (mock backend).",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=60&auto=format&fit=crop",
    webUrl: "",
  },
  {
    id: "p2",
    title: "Bled's Porfolio",
    description:
      "Dynamic showcase of a modern creator portfolio with immersive visuals spotlighting collaborations, campaigns, top performing partnership and community influence.",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=60&auto=format&fit=crop",
    webUrl: "bledigmi.com",
  },
  {
    id: "p3",
    title: "Mobile Task Manager (UI)",
    description:
      "Pixel-perfect mobile UI built with React Native patterns and modern design elements.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=60&auto=format&fit=crop",
    webUrl: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div
      className="min-h-screen py-20 bg-[#0f1c23] dark:bg-white font-display text-white"
      id="Project"
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-20">
        <section className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-blue-500">
            Projects
          </h2>
          <p className="mt-4 text-[#9bb0bb] max-w-2xl text-lg dark:text-zinc-600">
            A curated showcase of my best frontend projects — UI demonstrating
            performance and design detail.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </section>
      </div>
    </div>
  );
}
