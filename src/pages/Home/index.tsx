import { Button, Image } from "@heroui/react";
import Abraham from "../../asset/image/abraham.jpg";
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
        <main className="flex flex-col md:flex-row items-center justify-center px-6 sm:px-10 lg:px-20 py-10 md:py-24 gap-10 md:gap-14">
          {/* Image Section */}
          <div className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-sm flex justify-center">
            <Image
              alt="Udu Abraham"
              className="rounded-full border-4 border-blue-300 shadow-lg shadow-primary/20 object-cover w-full aspect-square"
              src={Abraham}
            />
          </div>

          {/* Intro Text Section */}
          <div className="flex flex-col gap-6 max-w-xl text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight dark:text-black">
              Hi, I’m <span className="text-blue-600 ">Abraham</span>, a
              Frontend Engineer crafting sleek, interactive, and scalable web
              applications.
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed dark:text-black">
              I specialize in building responsive, performant UIs. My goal is to
              transform ideas into visually stunning, accessible digital
              experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-2">
              <Button
                as="a"
                className="text-white py-6 px-8 rounded-lg font-bold transition w-full sm:w-auto"
                color="primary"
                href="mailto:uduabraham12@gmail.com"
                variant="solid"
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
