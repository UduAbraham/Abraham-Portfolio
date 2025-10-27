import { Card } from "@heroui/react";
import { FaLaptopCode, FaFlask } from "react-icons/fa";

export default function EducationSection() {
  const educationData = [
    {
      icon: <FaLaptopCode />,
      title: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      period: "August 2018 - May 2022",
      sectionTitle: "Relevant Coursework",
      details: [
        "Data Structures & Algorithms",
        "Machine Learning",
        "Artificial Intelligence",
        "Database Systems",
      ],
    },
    {
      icon: <FaFlask />,
      title: "Bachelor of Science in Biochemistry",
      institution: "University of California, Berkeley",
      period: "August 2018 - May 2022",
      sectionTitle: "Academic Highlights",
      details: [
        "Organic Chemistry I & II",
        "Molecular Biology",
        "Genetics and Genomics",
        "Undergraduate Research on Protein Folding",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f1c23] py-15 dark:bg-white text-white font-display flex flex-col items-center  px-4 sm:px-10 lg:px-32">
      <div className="max-w-4xl w-full">
        <h2 className="text-primary text-3xl sm:text-4xl font-bold leading-tight pb-6 text-center md:text-left">
          Education
        </h2>

        <div className="grid grid-cols-[auto_1fr] gap-x-6 py-6 relative">
          {educationData.map((edu, index) => (
            <div key={index} className="contents">
              {/* Timeline Icon + Line */}
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-primary/20 text-primary rounded-full text-lg">
                  {edu.icon}
                </div>
                {index < educationData.length - 1 && (
                  <div className="w-px bg-primary/30 h-full" />
                )}
              </div>

              {/* Education Card */}
              <div className="pb-12">
                <Card className="bg-[#1a1a1a]/20 rounded-lg shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 p-6 rounded-xl">
                  <p className="text-xl font-semibold text-white dark:text-black">{edu.title}</p>
                  <p className="text-zinc-400 text-base dark:text-black">{edu.institution}</p>
                  <p className="text-zinc-500 text-sm mt-1 dark:text-black">{edu.period}</p>

                  <div className="mt-4">
                    <h3 className="text-zinc-300 font-medium text-sm mb-2 dark:text-black">
                      {edu.sectionTitle}
                    </h3>
                    <ul className="list-disc list-inside text-zinc-400 text-sm space-y-1  dark:text-black">
                      {edu.details.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
