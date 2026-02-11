import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "@heroui/react";

const navItems = [
  { name: "Home", href: "#Home", icon: <FaHome /> },
  { name: "About", href: "#About", icon: <FaUser /> },
  { name: "Projects", href: "#Project", icon: <FaBriefcase /> },
  { name: "Education", href: "#Education", icon: <FaGraduationCap /> },
  { name: "Skills", href: "#TechStack", icon: <FaCode /> },
  { name: "Contact", href: "#Contact", icon: <FaEnvelope /> },
];

export default function MobileNav() {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90%] max-w-lg">
      <div className="bg-[#1a2234]/80 dark:bg-white/80 backdrop-blur-lg border border-white/10 dark:border-black/10 rounded-2xl px-6 py-3 flex items-center justify-between shadow-2xl">
        {navItems.map((item) => (
          <Link
            key={item.name}
            className="flex flex-col items-center gap-1 text-zinc-400 hover:text-blue-500 transition-colors"
            href={item.href}
            title={item.name}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-[10px] font-medium uppercase tracking-tighter">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
