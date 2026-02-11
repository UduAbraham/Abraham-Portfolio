import { FC, useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "@heroui/use-theme";

export const ThemeSwitch: FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-6 h-6" />;

  const isLight = theme === "light";

  return (
    <button
      aria-label="Toggle Theme"
      className="p-2 rounded-lg text-gray-800 dark:text-yellow-400 transition hover:opacity-80"
      onClick={() => setTheme(isLight ? "dark" : "light")}
    >
      {isLight ? <FaMoon className="text-lg" /> : <FaSun className="text-lg" />}
    </button>
  );
};
