import { Card, Button, Image } from "@heroui/react";
import { FaGithub } from "react-icons/fa";
import { Project } from "./project.type";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-[#1a2234]/40 rounded-lg p-0 flex flex-col h-full overflow-hidden hover:-translate-y-1 transition shadow-md hover:shadow-primary/20">
      
      {/* ✅ Full-width Image */}
      <div className="w-full h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex-1">
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
        <p className="text-sm text-[#A0A0A0] mt-2">{project.description}</p>
      </div>

      <div className="p-4 pt-0">
        <a href={project.repoUrl} target="_blank" rel="noreferrer">
          <Button className="w-full hover:bg-[#35454d] flex items-center gap-2" color="primary">
            <FaGithub />
            View Code
          </Button>
        </a>
      </div>
    </Card>
  );
}
