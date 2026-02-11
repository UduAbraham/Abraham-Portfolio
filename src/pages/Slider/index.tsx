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
    <div className="w-full bg-[#FFFFFF20] dark:bg-white border-y border-[#FFFFFF20] overflow-hidden select-none py-6">
      <div className="flex gap-8 animate-scroll whitespace-nowrap hover:[animation-play-state:paused]">
        {/* First list */}
        {techNames.map((label, index) => (
          <div key={index} className="flex items-center gap-3">
            <p className="text-white text-lg dark:text-black">{label.Name}</p>
          </div>
        ))}

        {/* Duplicate for seamless infinite scroll */}
        {techNames.map((label, index) => (
          <div key={`dup-${index}`} className="flex items-center gap-3">
            <p className="text-white text-lg dark:text-black">{label.Name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
