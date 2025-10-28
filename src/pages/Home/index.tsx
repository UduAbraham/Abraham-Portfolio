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
    <div
      className="min-h-screen bg-[#0f1c23] dark:bg-white text-white font-display "
      id="Home"
    >
      <div className="mx-auto space-y-2">
        <NavBar />

        {/* Hero Section */}
        <main className="flex flex-cols md:flex-row items-center justify-center px-6 sm:px-10 lg:px-20 py- md:py-20 gap-10 md:gap-14">
          {/* Image Section */}
          <div className="max-w-[280px] sm:max-w-[320px] md:max-w-sm flex justify-center">
            <Image
              src="src\Asset\image\WhatsApp Image 2025-10-27 at 18.38.22_fd3e3377.jpg"
              alt="Udu Abraham"
              className="rounded-full border-4 border-primary/50 shadow-lg shadow-primary/20 object-cover w-full aspect-square my-10"
            />
          </div>

          {/* Intro Text Section */}
          <div className="flex flex-col gap-6 max-w-lg text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-black leading-tight dark:text-black">
              Hi, I’m <span className="text-blue-600 ">Abraham</span>, a
              Frontend Engineer crafting sleek, interactive, and scalable web
              applications.
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed dark:text-black">
              I specialize in building responsive, performant UIs, My goal is to
              transform ideas into visually stunning, accessible digital
              experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button
                variant="bordered"
                className="text-white border-[#27343a] py-2
                 rounded-lg hover:bg-[#27343a] dark:text-black
                  hover:text-primary dark:text-white
                 transition w-full bg-blue-600 sm:w-auto"
                as="a"
                href="#Contact"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </main>

        {/* Sections */}
        <HeroSlider />
        <AboutPage />
        <ProjectsPage />
        <TechStack />
        <EducationSection />
        <Contactpage />
      </div>
    </div>
  );
}
