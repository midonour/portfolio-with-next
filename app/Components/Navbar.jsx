"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiUser, FiMail, FiCode, FiFolder } from "react-icons/fi";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";


export default function Navbar() {
  const links = ["Home", "Skills", "Work", "Contact"];
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const icons = {
    Home: <FiUser size={26} />,
    Skills: <FiCode size={26} />,
    Work: <FiFolder size={26} />,
    Contact: <FiMail size={26} />,
  };

  // Mount guard to avoid SSR mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      links.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null; // prevent SSR mismatch

  return (
    <motion.nav
      className="w-full sticky top-0 px-6 md:px-10 py-2 flex justify-between items-center
        border-b border-[#E2E8F0]
        bg-white/70
        dark:border-[#3a494b1a]
        dark:bg-transparent
        backdrop-blur-lg
        dark:shadow-[0_20px_40px_rgba(0,242,255,0.08)]
        z-10"
    >
      {/* logo */}
      <span
        className="text-2xl font-bold font-space-grotesk 
        text-[#00696F] 
        dark:text-[#00F2FF]
        dark:drop-shadow-[0_0_4px_rgba(0,242,255,0.8)]"
      >
        Frontend Junior
      </span>

      {/* desktop */}
      <div className="hidden md:flex gap-4 font-space-grotesk">
        {links.map((link) => (
          <Link
            key={link}
            href={`#${link}`}
            className={`px-4 py-2 rounded-xl transition-all duration-300
              border border-transparent text-lg
              ${
                active === link
                  ? "text-black dark:text-[#00F2FF]"
                  : "text-[#64748B] dark:text-[#94A3B8]"
              }
              hover:text-[#00696F] 
              dark:hover:text-[#00F2FF]
              hover:bg-[#F1F5F9]
              dark:hover:bg-white/5`}
          >
            {link}
          </Link>
        ))}
      </div>

      {/* mobile */}
      <div className="flex items-center gap-3">
        <ThemeToggle />

        <button
          className="md:hidden text-[#334155] dark:text-[#00F2FF]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 z-50
        transition-all duration-300
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        dark:bg-[#0B0F19]/80 
        bg-white/70
        backdrop-blur-xl`}
      >
        <div
          className="flex flex-col gap-6 p-8 pt-24 
          bg-white/80 
          dark:bg-[#0B0F19]/90 
          rounded-3xl 
          shadow-lg"
        >
          {/* close */}
          <button
            className="absolute top-6 right-6 text-[#334155] dark:text-[#00F2FF]"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes size={28} />
          </button>

          <h2 className="text-3xl font-space-grotesk text-[#00696F] dark:text-[#00F2FF] font-bold">
            Mohamed Nour
          </h2>

          <span className="text-[#64748B] dark:text-[#94A3B8]">
            Frontend Developer
          </span>

          {links.map((link) => (
            <Link
              key={link}
              href={`#${link}`}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-4 
                p-4 rounded-2xl
                border border-[#E2E8F0]
                dark:border-white/10
                transition-all duration-300
                ${
                  active === link
                    ? "text-[#00696F] dark:text-[#00F2FF] bg-[#F1F5F9] dark:bg-white/5"
                    : "text-[#334155] dark:text-[#94A3B8]"
                }
                hover:bg-[#F1F5F9]
                dark:hover:bg-white/5`}
            >
              {icons[link]}
              {link}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}