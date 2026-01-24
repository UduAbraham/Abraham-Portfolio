
const techNames = [
  { Name: "HTML5" },
  { Name: "CSS3" },
  { Name: "JavaScript" },
  { Name: "TypeScript" },
  { Name: "SASS" },
  { Name: "Dart" },
  { Name: "Python" },
  { Name: "Solidity" },
  { Name: "React Js" },
  { Name: "Next Js" },
  { Name: "Tailwind" },
  { Name: "Chakra UI" },
  { Name: "Redux" },
  { Name: "Jotai" },
  { Name: "Firebase" },
  { Name: "Webpack" },
  { Name: "Node Js" },
  { Name: "NPM" },
  { Name: "React Native" },
  { Name: "Flutter" },
  { Name: "MobX" },
  { Name: "MongoDB" },
  { Name: "Docker" },
  { Name: "Teams" },
  { Name: "Slack" },
  { Name: "Trello" },
  { Name: "Clickup" },
  { Name: "Notion" },
  { Name: "Figma" },
  { Name: "Dropbox" },
];


export default function HeroSlider() {
  return (
    <div className="w-full bg-[#FFFFFF10] dark:bg-zinc-50 border-y border-white/5 dark:border-black/5 overflow-hidden select-none py-8 md:py-10">
      <div className="flex gap-10 md:gap-16 animate-scroll whitespace-nowrap hover:[animation-play-state:paused]">
        {/* First list */}
        {techNames.map((label, index) => (
          <div key={index} className="flex items-center gap-4">
            <p className="text-white dark:text-black text-xl md:text-2xl font-bold tracking-wider uppercase opacity-80 hover:opacity-100 transition-opacity">
              {label.Name}
            </p>
            <span className="w-2 h-2 bg-blue-500 rounded-full mx-2" />
          </div>
        ))}

        {/* Duplicate for seamless infinite scroll */}
        {techNames.map((label, index) => (
          <div key={`dup-${index}`} className="flex items-center gap-4">
            <p className="text-white dark:text-black text-xl md:text-2xl font-bold tracking-wider uppercase opacity-80 hover:opacity-100 transition-opacity">
              {label.Name}
            </p>
            <span className="w-2 h-2 bg-blue-500 rounded-full mx-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

