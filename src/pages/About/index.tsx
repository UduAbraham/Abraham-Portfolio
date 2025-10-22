

import {  Card } from "@heroui/react";
import { FaCode } from "react-icons/fa";

 export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f1c23]  font-['Space_Grotesk'] flex flex-col mx-30">
      {/* Header */}
     

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 md:px-10 py-12 flex flex-col lg:flex-row gap-16">
        {/* Left Section */}
        <section className="flex-1 lg:w-2/3 ">
          <h1 className="text-white text-5xl font-black mb-6">About Me</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m a passionate software engineer focused on crafting elegant, efficient,
            and user-friendly web applications. My work combines creativity with
            technical precision to deliver clean, scalable, and maintainable code.
          </p>

          <h2 className="text-primary text-2xl font-bold mt-10 mb-3">My Philosophy</h2>
          <p className="text-gray-300 text-lg mb-6">
            I believe great software is built through collaboration, clean architecture,
            and continuous learning. My focus is not just on code—but on solving problems
            and delivering value.
          </p>

          <h2 className="text-primary text-2xl font-bold mt-10 mb-3">Professional Journey</h2>
          <p className="text-gray-300 text-lg">
            Over the years, I’ve worked across a range of projects—frontend and backend.
            My expertise in React, TypeScript, and scalable design has shaped my approach
            to building high-performance, user-centric products.
          </p>
        </section>

        {/* Right Section */}
        <aside className="flex-1 lg:w-1/3 flex flex-col gap-10 items-center">
          <Card className="p-8 bg-[#2A2A3A] rounded-xl flex justify-center items-center w-64 h-64 lg:w-80 lg:h-80">
            <FaCode className="text-primary text-7xl" />
          </Card>


          {/* Interests */}
          <div>
            <h3 className="text-primary text-xl font-bold mb-3">Personal Interests</h3>
            <p className="text-gray-400 text-base">
              Outside coding, I enjoy exploring UI design trends, chess, and hiking — 
              activities that inspire focus and creativity in my projects.
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
};

