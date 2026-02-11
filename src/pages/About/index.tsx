import { Card } from "@heroui/react";
import { FaCode } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div
      className="min-h-screen bg-[#0f1c23] dark:bg-white flex flex-col"
      id="About"
    >
      <main className="flex-1 max-w-6xl mx-auto px-6 sm:px-10 py-16 md:py-24 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
        {/* Left Section */}
        <section className="flex-1 w-full text-center lg:text-left">
          <h1 className="text-[#fbcfe8] dark:text-blue-600 text-4xl sm:text-5xl lg:text-6xl font-black mb-8">
            About Me
          </h1>
          <div className="space-y-6">
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed dark:text-black">
              I’m a passionate software engineer focused on crafting elegant,
              efficient, and user-friendly web applications. My work combines
              creativity with technical precision to deliver clean, scalable,
              and maintainable code.
            </p>

            <div>
              <h2 className="text-blue-500 text-2xl lg:text-3xl font-bold mb-3">
                My Philosophy
              </h2>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed dark:text-black">
                I believe great software is built through collaboration, clean
                architecture, and continuous learning. My focus is not just on
                code—but on solving problems and delivering value.
              </p>
            </div>

            <div>
              <h3 className="text-blue-500 text-xl lg:text-2xl font-bold mb-3">
                Personal Interests
              </h3>
              <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed dark:text-black">
                Outside coding, I enjoy exploring UI design trends, chess, and
                hiking — activities that inspire focus and creativity in my
                projects.
              </p>
            </div>
          </div>
        </section>

        {/* Right Section */}
        <aside className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <Card className="p-8 bg-[#1b2327] rounded-3xl flex justify-center items-center w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,168,249,0.3)]">
            <FaCode className="text-blue-500 text-6xl sm:text-8xl" />
          </Card>
        </aside>
      </main>
    </div>
  );
}
