

import { Button,  Image } from "@heroui/react";
import {  FaReact } from "react-icons/fa";
import AboutPage from "../About";
import ProjectsPage from "../Project";
import SkillsSection from "../Skills";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0f1c23] text-white font-display ">
      <div className="mx-auto space-y-10  ">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-[#27343a] px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
            <FaReact className="text-[#0f1c23]" size={18} />
          </div>
          <h2 className="text-xl font-bold tracking-tight">Udu Abraham</h2>
        </div>

        <nav className="hidden md:flex gap-8">
          {["Projects", "Skills", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="md:hidden bg-primary/20 p-2 rounded-lg">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-center px-10 py-20 gap-10">
        <div className="max-w-sm">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_57Xn8_i5D7Wj0D83Ar4UsWNmtjIabm2utupG6F4cI7ym3wED4TWg6SGIVLxfIBXmokblygCNbk9NxJaFIlb8DeZyWk3FkO7N8nH3ZB3h8EjoVwG7zCHVOlidGBpaL3xd_9z736PKW5eimJx2FBeMcBYDeHGfiJ4tLO_kQ49XHOz1Omf78IQeetjw5DgoWATPW4HlE_RZeCSUb93JRECNo38cQAsNlXAmclrnbpQDbOnZrJYx_IlApNdCk-YqqTtWsgbleLmCdfA3"
            alt="Udu Abraham"
            className="rounded-full border-4 border-primary/50 shadow-lg shadow-primary/20 object-cover"
          />
        </div>

        <div className="flex flex-col gap-6 max-w-lg">
          <h1 className="text-4xl md:text-5xl font-black leading-tight">
            Hi, I’m <span className="text-primary">Udu Abraham</span>, a
            Frontend Engineer crafting sleek, interactive, and scalable web
            applications.
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            I specialize in building responsive, performant UIs using React,
            TypeScript, Tailwind CSS, and HeroUI etc. My goal is to transform ideas
            into visually stunning, accessible digital experiences.
          </p>
          <div className="flex gap-4">
            <Button className="bg-primary text-white font-semibold hover:scale-105 transition">
              Download Resume
            </Button>
            <Button
              variant="bordered"
              className="text-white border-[#27343a] hover:bg-[#27343a] hover:text-primary"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </main>
        <AboutPage/>
        <ProjectsPage/>
        <SkillsSection/>
</div>
    </div>
  );
}
