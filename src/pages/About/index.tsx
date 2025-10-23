import { Card } from "@heroui/react";
import { FaCode } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f1c23] flex flex-col">
      <main className="flex-1 max-w-[1060px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-12 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
        
        {/* Left Section */}
        <section className="flex-1 w-full lg:w-2/3 text-center lg:text-left">
          <h1 className="text-pink-200 text-4xl sm:text-5xl font-black mb-6">
            About Me
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            I’m a passionate software engineer focused on crafting elegant, efficient,
            and user-friendly web applications. My work combines creativity with
            technical precision to deliver clean, scalable, and maintainable code.
          </p>

          <h2 className="text-primary text-2xl font-bold mt-10 mb-3">
            My Philosophy
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-6">
            I believe great software is built through collaboration, clean architecture,
            and continuous learning. My focus is not just on code—but on solving problems
            and delivering value.
          </p>

          <h3 className="text-primary text-xl font-bold mb-3">
            Personal Interests
          </h3>
          <p className="text-gray-400 text-base sm:text-lg">
            Outside coding, I enjoy exploring UI design trends, chess, and hiking — 
            activities that inspire focus and creativity in my projects.
          </p>
        </section>

        {/* Right Section */}
        <aside className="flex-1 w-full lg:w-1/3 flex  py-30 justify-center lg:justify-end mt-10 lg:mt-0">
          <Card className="p-8 bg-[#1b2327] rounded-2xl flex justify-center items-center w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,168,249,0.4)]">
            <FaCode className="text-primary text-6xl sm:text-7xl" />
          </Card>
        </aside>

      </main>
    </div>
  );
}
