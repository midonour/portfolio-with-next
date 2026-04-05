"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="dark:text-[#00F2FF]  text-[#334155] absolute right-19 text-2xl  transition-colors"
      aria-label="Theme toggle"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}