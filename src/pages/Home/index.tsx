import { Button, Image } from "@heroui/react";

import AboutPage from "../About";
import ProjectsPage from "../Project";
import EducationSection from "../Education";
import TechStack from "../Technologies";
import Contactpage from "../Contact";
import HeroSlider from "../Slider";
import NavBar from "../Navbar";

export default function HomePage() {

  return (
    <div className="min-h-screen bg-[#0f1c23] text-white font-display "id="Home">
      <div className="mx-auto space-y-10">
        
        <NavBar/>
        
        {/* Hero Section */}
        <main className="flex flex-col md:flex-row items-center justify-center px-6 sm:px-10 lg:px-20 py- md:py-20 gap-10 md:gap-14">
          {/* Image Section */}
          <div className="max-w-[280px] sm:max-w-[320px] md:max-w-sm flex justify-center">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_57Xn8_i5D7Wj0D83Ar4UsWNmtjIabm2utupG6F4cI7ym3wED4TWg6SGIVLxfIBXmokblygCNbk9NxJaFIlb8DeZyWk3FkO7N8nH3ZB3h8EjoVwG7zCHVOlidGBpaL3xd_9z736PKW5eimJx2FBeMcBYDeHGfiJ4tLO_kQ49XHOz1Omf78IQeetjw5DgoWATPW4HlE_RZeCSUb93JRECNo38cQAsNlXAmclrnbpQDbOnZrJYx_IlApNdCk-YqqTtWsgbleLmCdfA3"
              alt="Udu Abraham"
              className="rounded-full border-4 border-primary/50 shadow-lg shadow-primary/20 object-cover w-full aspect-square"
            />
          </div>

          {/* Intro Text Section */}
          <div className="flex flex-col gap-6 max-w-lg text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              Hi, I’m <span className="text-primary">Abraham</span>, a
              Frontend Engineer crafting sleek, interactive, and scalable web
              applications.
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I specialize in building responsive, performant UIs, My goal is to
              transform ideas into visually stunning, accessible digital
              experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
             
              <Button
                variant="bordered"
                className="text-white border-[#27343a] hover:bg-[#27343a] hover:text-primary transition w-full sm:w-auto"
               as="a" href="#Contact"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </main>

        {/* Sections */}
        <HeroSlider/>
        <AboutPage />
        <ProjectsPage />
        <TechStack />
        <EducationSection />
        <Contactpage />
      </div>
    </div>
  );
}
