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
  FiMap,
} from "react-icons/fi";
import { MdMessage } from "react-icons/md";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

// label = اللي بيظهر، id = id الـ section
const links = [
  { label: "Home", id: "Home", icon: FiHome },
  { label: "About", id: "About", icon: FiUser },
  { label: "Skills", id: "Skills", icon: FiCode },
  { label: "Journey", id: "journey", icon: FiMap },
  { label: "Projects", id: "Work", icon: FiFolder },
  { label: "Contact", id: "Contact", icon: FiMail },
];

const RESUME_URL =
  "https://drive.google.com/file/d/16DeooN2MI-5sfMabe7reDzA8WwRDqngh/view?usp=sharing";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      links.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 145 && rect.bottom >= 145) setActive(id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // قفل الـ scroll لما المنيو تفتح + Escape يقفلها
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  // لو الشاشة كبرت لـ lg والمنيو مفتوحة، اقفلها
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => e.matches && setIsOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <motion.nav className="sticky top-0 z-40 w-full border-b border-[#E2E8F0] bg-white/70 backdrop-blur-lg dark:border-[#3a494b1a] dark:bg-[#0B0D12]/70 dark:shadow-[0_20px_40px_rgba(0,242,255,0.08)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-2.5 sm:px-6 sm:py-3 lg:px-10">
          {/* Logo */}
          <Link href="#Home" className="flex min-w-0 shrink-0 items-center gap-2">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#34D399] sm:h-2.5 sm:w-2.5" />
            <span className="whitespace-nowrap font-space-grotesk text-sm font-semibold text-[#0F172A] dark:text-white sm:text-lg xl:text-xl">
              Mohamed Nour
            </span>
            <span className="rounded-full border border-[#0891B2]/20 bg-[#0891B2]/10 px-2 py-0.5 font-mono text-[10px] text-[#0891B2] dark:border-[#00F2FF]/20 dark:bg-[#00F2FF]/10 dark:text-[#00F2FF] sm:px-2.5 sm:text-xs">
              .dev
            </span>
          </Link>

          {/* Desktop links (lg+) */}
          <div className="hidden items-center font-inter lg:flex lg:gap-1 xl:gap-3">
            {links.map(({ label, id }) => {
              const isActive = active === id;
              return (
                <Link
                  key={id}
                  href={`#${id}`}
                  className={`relative flex items-center gap-2 px-3 py-2 text-sm transition-colors duration-300 xl:px-4 xl:text-base ${
                    isActive
                      ? "text-[#0891B2] dark:text-white"
                      : "text-[#475569] hover:text-[#0F172A] dark:text-[#94A3B8] dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span className=" h-2 w-2 top-5 right-4 rounded-full bg-[#0891B2] dark:bg-[#00F2FF]" />
                  )}
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Resume: يظهر من xl بس عشان المساحة */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full border border-[#CBD5E1] px-4 py-2 font-mono text-sm text-[#334155] transition hover:bg-[#0891B2]/10 dark:border-white/15 dark:bg-white/[0.03] dark:text-[#E2E8F0] xl:flex"
            >
              <FiFileText /> Resume
            </a>

            <a
              href="#Contact"
              className="flex items-center gap-1.5 rounded-full bg-[#0891B2] px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wide text-white transition hover:opacity-85 dark:bg-[#00F2FF] dark:text-black sm:px-5 sm:py-2 sm:text-sm sm:tracking-wider"
            >
              <MdMessage className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>
                Let&apos;s <span className="hidden min-[380px]:inline">Talk</span>
              </span>
            </a>

            {/* Theme toggle: على الديسكتوب بس هنا، على الموبايل جوه المنيو */}
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>

            {/* Hamburger (أقل من lg) */}
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              aria-expanded={isOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#CBD5E1] bg-white/50 text-[#334155] transition hover:bg-[#0891B2]/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-[#CBD5E1] lg:hidden"
            >
              <FaBars size={16} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile / tablet menu */}
      <div
        className={`fixed inset-0 z-50 overflow-y-auto bg-white/95 backdrop-blur-xl transition-all duration-300 dark:bg-[#0B0F19]/95 lg:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="relative mx-auto flex min-h-full w-full max-w-xl flex-col gap-4 p-5 pt-20 sm:p-8 sm:pt-24">
          <button
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-[#334155] dark:text-[#00F2FF] sm:right-6 sm:top-6"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </button>

          <h2 className="font-space-grotesk text-2xl font-bold text-[#00696F] dark:text-[#00F2FF] sm:text-3xl">
            Mohamed Nour
          </h2>

          <div className="flex items-center justify-between text-sm text-[#64748B] dark:text-[#94A3B8] sm:text-base">
            <span>Frontend Developer</span>
            <ThemeToggle />
          </div>

          {/* على التابلت: عمودين، على الموبايل: عمود */}
          <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {links.map(({ label, id, icon: Icon }) => (
              <Link
                key={id}
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 rounded-2xl border border-[#E2E8F0] p-4 transition-all duration-300 hover:bg-[#F1F5F9] dark:border-white/10 dark:hover:bg-white/5 ${
                  active === id
                    ? "bg-[#F1F5F9] text-[#00696F] dark:bg-white/5 dark:text-[#00F2FF]"
                    : "text-[#334155] dark:text-[#94A3B8]"
                }`}
              >
                <Icon size={20} />
                {label}
              </Link>
            ))}
          </div>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl border border-[#CBD5E1] p-4 font-mono text-[#334155] dark:border-white/15 dark:text-[#E2E8F0]"
          >
            <FiFileText /> Resume
          </a>
        </div>
      </div>
    </>
  );
}