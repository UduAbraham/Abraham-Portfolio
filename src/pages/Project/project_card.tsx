import { Card, Button, Image } from "@heroui/react";
import { BsArrowUpRightCircle } from "react-icons/bs";

import { Project } from "./project.type";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-[#1a2234]/40 rounded-lg p-0 flex flex-col h-full overflow-hidden hover:-translate-y-1 transition shadow-md hover:shadow-primary/20">
      {/* ✅ Full-width Image */}
      <div className="w-full h-48 overflow-hidden">
        <Image
          alt={project.title}
          className="w-full h-full object-cover"
          src={project.image}
        />
      </div>
      <div className="p-4 flex-1">
        <h3 className="text-lg font-bold text-white dark:text-black">
          {project.title}
        </h3>
        <p className="text-sm text-[#A0A0A0] mt-2 dark:text-black">
          {project.description}
        </p>
      </div>

      <div className="p-4 pt-0">
        <a href={project.webUrl} rel="noreferrer" target="_blank">
          <Button className="w-full hover:bg-[#35454d] py-2 flex items-center gap-2 rounded-lg bg-blue-500 font-bold">
            <BsArrowUpRightCircle className="text-xl" />
            View Website
          </Button>
        </a>
      </div>
    </Card>
  );
}
