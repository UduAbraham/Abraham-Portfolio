


import { Card, Button, Image } from "@heroui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
};

const  Project = [
  {
    id: "p1",
    title: "E-commerce Platform",
    description:
      "A modern e-commerce frontend showcasing products, filters, and checkout UI (mock backend).",
    tags: ["React", "Tailwind", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=60&auto=format&fit=crop",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: "p2",
    title: "Data Visualization Dashboard",
    description:
      "Interactive charts and dashboards for exploring complex datasets. Uses mock data and animated charts.",
    tags: ["D3.js", "Python", "Flask"],
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=60&auto=format&fit=crop",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: "p3",
    title: "Mobile Task Manager (UI)",
    description:
      "Pixel-perfect mobile UI built with React Native patterns (mock data + offline states).",
    tags: ["React Native", "Firebase", "GraphQL"],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=60&auto=format&fit=crop",
    demoUrl: "#",
    repoUrl: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0f1c23] font-display text-white">
      {/* Page container */}
      <div className="container mx-auto px-4 md:px-10 lg:px-40 ">
       
        {/* Title */}
        <section className="mt-8 mb-6">
          <h2 className="text-4xl font-black">Selected Work</h2>
          <p className="mt-2 text-[#9bb0bb] max-w-2xl">
            A curated collection of projects demonstrating frontend craftsmanship,
            UI design, and performance-minded implementations — all frontend
            prototypes or UI-first apps.
          </p>
        </section>

        {/* Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Project.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t border-[#27343a] pt-8 text-center text-sm text-[#9bb0bb]">
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="hover:text-primary">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-primary">
              <SiTypescript />
            </a>
            <a href="#" className="hover:text-primary">
              <SiTailwindcss />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* ---------------------------
   Project Card Component
   --------------------------- */
function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-[#1e1e1e] rounded-lg p-4 flex flex-col h-full transition-transform transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 ">
      <div className="rounded-md overflow-hidden">
        <Image
          alt={project.title}
          src={project.image}
          className="w-full h-44 object-cover"
        />
      </div>

      <div className="mt-4 flex-1">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="text-sm text-[#A0A0A0] mt-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs text-primary bg-primary/20 px-2 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        <a
          href={project.demoUrl ?? "#"}
          target="_blank"
          rel="noreferrer"
          className="flex-1"
        >
          <Button className="w-full bg-primary hover:bg-primary/90">
            <FaExternalLinkAlt className="mr-2" />
            Live Demo
          </Button>
        </a>
        <a
          href={project.repoUrl ?? "#"}
          target="_blank"
          rel="noreferrer"
          className="flex-1"
        >
          <Button className="w-full bg-[#27343a] hover:bg-[#35454d]">
            <FaGithub className="mr-2" />
            View Code
          </Button>
        </a>
      </div>
    </Card>
  );
}
