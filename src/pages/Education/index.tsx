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
      institution: "Ebonyi State Universiity",
      period: "Oct 2018 - Nov 2022",
      sectionTitle: "Academic Highlights",
      details: [
        "Deep understanding of molecular and cellular processes",
        "Strong analytical and research-driven mindset",
        "Experienced in critical thinking and structured experimentation",
        "This scientific background now enhances my ability to build smart, scalable engineering solutions.",
      ],
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#0f1c23] py-20 dark:bg-white text-white font-display flex flex-col items-center px-6 sm:px-10 lg:px-32"
      id="Education"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-blue-500 text-4xl sm:text-5xl font-black mb-12 text-center md:text-left">
          Education
        </h2>

        <div className="relative flex flex-col gap-12">
          {/* Timeline Line (Desktop only for better looks) */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-primary/20 hidden sm:block" />

          {educationData.map((edu, index) => (
            <div key={index} className="flex gap-6 md:gap-10 relative">
              {/* Timeline Icon */}
              <div className="z-10 bg-[#0f1c23] dark:bg-white p-1 hidden sm:block">
                <div className="p-3 bg-primary/20 text-primary rounded-full text-xl shadow-[0_0_15px_rgba(6,168,249,0.2)]">
                  {edu.icon}
                </div>
              </div>

              {/* Education Card */}
              <div className="flex-1">
                <Card className="bg-[#1a1a1a]/40 dark:bg-gray-50 border border-white/5 dark:border-black/5 rounded-2xl shadow-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-black">
                      {edu.title}
                    </h3>
                    <span className="text-primary font-medium text-sm sm:text-base">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-lg mb-6 dark:text-zinc-600">
                    {edu.institution}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-zinc-300 font-semibold text-base dark:text-zinc-700">
                      {edu.sectionTitle}
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                      {edu.details.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-zinc-400 text-sm sm:text-base dark:text-zinc-600"
                        >
                          <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" />
                          {item}
                        </li>
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
