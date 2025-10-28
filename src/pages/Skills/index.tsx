

type SkillCategory = {
  title: string;
  skills: { name: string; icon: string }[];
};

const SKILLS: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: "code" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Java", icon: "data_object" },
      { name: "C++", icon: "terminal" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "javascript" },
      { name: "Node.js", icon: "hub" },
      { name: "Django", icon: "layers" },
      { name: "Spring", icon: "looks_one" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: "share" },
      { name: "Docker", icon: "deployed_code" },
      { name: "AWS", icon: "cloud" },
      { name: "Jenkins", icon: "build" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="min-h-screen bg-background-dark text-white font-display px-4 md:px-10 lg:px-40 ">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-500">Technical Skills</h2>

      {SKILLS.map((category, idx) => (
        <div key={idx} className="mb-10">
          <h3 className="text-blue-500 text-xl font-semibold mb-4">
            {category.title}
          </h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex gap-3 items-center p-4 rounded-lg border border-primary/30 bg-background-dark/50 
                transition-all hover:border-primary hover:shadow-[0_0_15px_0_rgba(6,168,249,0.5)]"
              >
                <span className="material-symbols-outlined text-primary text-2xl">
                  {skill.icon}
                </span>
                <h2 className="text-base font-medium">{skill.name}</h2>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
