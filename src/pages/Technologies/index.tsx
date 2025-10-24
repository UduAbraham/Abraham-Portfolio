import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaSass,
  FaSlack,
  FaTrello,
  FaFigma,
  FaDropbox,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiChakraui,
  SiRedux,
  SiFirebase,
  SiWebpack,
  SiNpm,
//   SiReactnative,
  SiFlutter,
  SiMobx,
  SiMongodb,
  SiDart,
  SiSolidity,
//   SiMicrosoftteams,
  SiClickup,
  SiNotion,
//   SiJotai,
} from "react-icons/si";

export default function TechStack() {
  const icon = (Icon: any, className = "") =>
    React.createElement(Icon, { className: `text-4xl ${className}` });

  const categories = [
    {
      title: "Programming Languages",
      items: [
        { name: "HTML5", icon: icon(FaHtml5, "text-[#E44D26]") },
        { name: "CSS3", icon: icon(FaCss3Alt, "text-[#1572B6]") },
        { name: "JavaScript", icon: icon(FaJs, "text-[#F7DF1E]") },
        { name: "TypeScript", icon: icon(SiTypescript, "text-[#3178C6]") },
        { name: "SASS", icon: icon(FaSass, "text-[#CC6699]") },
        { name: "Dart", icon: icon(SiDart, "text-[#00B4AB]") },
        { name: "Python", icon: icon(FaPython, "text-[#FFD43B]") },
        { name: "Solidity", icon: icon(SiSolidity, "text-gray-300") },
      ],
    },
    {
      title: "Technologies & Tools",
      items: [
        { name: "React Js", icon: icon(FaReact, "text-[#61DAFB]") },
        { name: "Next Js", icon: icon(SiNextdotjs, "text-white") },
        { name: "Tailwind", icon: icon(SiTailwindcss, "text-[#06B6D4]") },
        { name: "Chakra UI", icon: icon(SiChakraui, "text-[#319795]") },
        { name: "Redux", icon: icon(SiRedux, "text-[#764ABC]") },
        { name: "Jotai", icon: icon( "text-gray-200") },
        { name: "Firebase", icon: icon(SiFirebase, "text-[#FFCA28]") },
        { name: "Webpack", icon: icon(SiWebpack, "text-[#8DD6F9]") },
        { name: "Node Js", icon: icon(FaNodeJs, "text-[#68A063]") },
        { name: "NPM", icon: icon(SiNpm, "text-[#CB3837]") },
        { name: "React Native", icon: icon( "text-[#61DAFB]") },
        { name: "Flutter", icon: icon(SiFlutter, "text-[#02569B]") },
        { name: "MobX", icon: icon(SiMobx, "text-[#E05A47]") },
        { name: "MongoDB", icon: icon(SiMongodb, "text-[#4DB33D]") },
        { name: "Docker", icon: icon(FaDocker, "text-[#0db7ed]") },
      ],
    },
    {
      title: "Productivity",
      items: [
        { name: "Teams", icon: icon( "text-[#6264A7]") },
        { name: "Slack", icon: icon(FaSlack, "text-[#4A154B]") },
        { name: "Trello", icon: icon(FaTrello, "text-[#0079BF]") },
        { name: "Clickup", icon: icon(SiClickup, "text-[#7B68EE]") },
        { name: "Notion", icon: icon(SiNotion, "text-white") },
        { name: "Figma", icon: icon(FaFigma, "text-[#F24E1E]") },
        { name: "Dropbox", icon: icon(FaDropbox, "text-[#0061FF]") },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f1c23] text-white font-display px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto space-y-10">
        <div>
          <h2 className="text-4xl font-extrabold mb-3">Tech Stack</h2>
          <p className="text-gray-400 text-lg">
            Here are the tools, programming languages, and communication platforms I use to support my workflow
          </p>
        </div>

        {categories.map((category, index) => (
          <div key={index} className="bg-[#121826] rounded-xl p-6 space-y-6 shadow-md">
            <h3 className="text-xl font-semibold">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.items.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-[#1a2234] hover:bg-[#1f2a3e] p-4 rounded-lg transition-all duration-300"
                >
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <p className="text-sm text-gray-300 font-medium text-center">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
