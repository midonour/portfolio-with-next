"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FiHome,
  FiUser,
  FiMail,
  FiCode,
  FiFolder,
  FiFileText,
} from "react-icons/fi";
import { MdMessage } from "react-icons/md";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const links = ["Home", "About", "Skills", "journey", "Work", "Contact"];

const icons = {
  Home: <FiHome size={26} />,
  About: <FiUser size={26} />,
  Skills: <FiCode size={26} />,
  journey: <FiFolder size={26} />,
  Work: <FiFolder size={26} />,
  Contact: <FiMail size={26} />,
};

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

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
          if (rect.top <= 145 && rect.bottom >= 145) {
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
    <>
      <motion.nav
        className="w-full sticky top-0 px-6 md:px-10 py-3 flex justify-between items-center
          border-b border-[#E2E8F0]
          bg-white/70
          dark:border-[#3a494b1a]
          dark:bg-transparent
          backdrop-blur-lg
          dark:shadow-[0_20px_40px_rgba(0,242,255,0.08)]
          z-10"
      >
        {/* logo */}
        <div className="flex justify-center items-center gap-2">
          <span className="w-2 h-2 bg-[#34D399] rounded-full block"></span>
          <span className="text-sm md:text-xl text-[#0F172A] dark:text-white">
            Mohamed Nour
          </span>
          <span className="text-xs md:bg-[#00F2FF]/10 md:border text-[#0891B2] dark:text-[#00F2FF] text-center md:border-[#00F2FF]/20 mt-1 py-1 md:px-4 rounded-2xl">
            .dev
          </span>
        </div>

        {/* desktop */}
        <div className="hidden md:flex font-space-grotesk">
          {links.map((link) => (
            <Link
              key={link}
              href={`#${link}`}
              className={`px-4 py-2 rounded-xl transition-all duration-300
                border border-transparent text-md font-inter
                ${
                  active === link
                    ? " dark:text-white text-[#0891B2] decoration-[#0891B2] before:w-2 before:h-2 before:bg-[#0891B2] dark:before:bg-[#00F2FF] before:rounded-full before:inline-block before:mr-2 before:mb-0.5"
                    : "text-[#475569] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-white"
                }`}
            >
              {link}
            </Link>
          ))}
        </div>

        {/* actions */}
        <div className=" hidden md:flex justify-between items-center gap-4">
          <a
            href="https://drive.google.com/file/d/16DeooN2MI-5sfMabe7reDzA8WwRDqngh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-3xl border text-[#334155] dark:text-[#E2E8F0] border-[#CBD5E1] dark:border-white/15 hover:bg-[#0891B2]/10 py-1 px-4"
          >
            <FiFileText /> Resume
          </a>
          <button className="flex items-center gap-1.5 text-md justify-center bg-[#0891B2] dark:bg-[#00F2FF] text-white dark:text-black rounded-3xl hover:bg-[#0891B2]/99  cursor-pointer px-4 py-1">
            <MdMessage className="mt-0.5" size={15} /> Let's Talk
          </button>

          <ThemeToggle />

          <button
            className="md:hidden text-[#334155] dark:text-[#00F2FF]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {/* breadCrumb */}
        <div className="sm:hidden flex justify-between items-center gap-4">
          <button className="flex items-center gap-1.5 text-md justify-center bg-[#0891B2] dark:bg-[#00F2FF] text-white dark:text-black rounded-3xl hover:bg-[#0891B2]/99 px-3 py-1 cursor-pointer">
            <MdMessage className="mt-0.5" size={15} /> Let's Talk
          </button>

          
          <button
            className="md:hidden w-9 h-9 border border-white/10 bg-white/4 text-[#334155]  dark:text-[#00F2FF] rounded-full hover:bg-[#0891B2]/10 cursor-pointer flex justify-center items-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={20} className="text-[#CBD5E1]"/>}
          </button>
        </div>
      </motion.nav>

      {/* mobile menu (outside nav so fixed inset-0 covers the whole screen) */}
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

          <span className="text-[#64748B] dark:text-[#94A3B8] flex justify-between gap-2">
            Frontend Developer
            <ThemeToggle />
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
    </>
  );
}
