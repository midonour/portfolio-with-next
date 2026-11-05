"use client";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiSupabase,
} from "react-icons/si";
import { FiCode, FiDatabase, FiShare2, FiTerminal } from "react-icons/fi";
import { TbApi } from "react-icons/tb";

const categories = [
  {
    title: "Frontend",
    accent: "cyan",
    skills: [
      { name: "HTML", desc: "Core Markup", icon: FaHtml5 },
      { name: "CSS", desc: "Styling & Responsive", icon: FaCss3Alt },
      { name: "JavaScript", desc: "ES6+ & Modern Web", icon: FaJs },
      { name: "React", desc: "Component Architecture", icon: FaReact },
      { name: "Next.js", desc: "App Router & SSR", icon: SiNextdotjs },
      { name: "Tailwind CSS", desc: "Utility-First Styling", icon: SiTailwindcss },
    ],
  },
  {
    title: "State & Data",
    accent: "violet",
    skills: [
      { name: "Redux Toolkit", desc: "Global State", icon: SiRedux },
      { name: "Context API", desc: "React State", icon: FiShare2 },
    ],
  },
  {
    title: "Backend & Services",
    accent: "cyan",
    skills: [
      { name: "Supabase", desc: "Auth & Database", icon: SiSupabase },
      { name: "REST APIs", desc: "Async Integration", icon: TbApi },
    ],
  },
  {
    title: "Tools",
    accent: "violet",
    skills: [
      { name: "Git", desc: "Version Control", icon: FaGitAlt },
      { name: "GitHub", desc: "Collaboration & CI/CD", icon: FaGithub },
      { name: "VS Code", desc: "Development Environment", icon: FiTerminal },
    ],
  },
];

const accents = {
  cyan: {
    dot: "bg-[#00F2FF]",
    icon: "text-[#00F2FF] bg-[#00F2FF]/10 border-[#00F2FF]/30",
  },
  violet: {
    dot: "bg-[#D1BCFF]",
    icon: "text-[#D1BCFF] bg-[#7C3AED]/20 border-[#7C3AED]/40",
  },
};

function SkillsCards() {
  return (
    <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {categories.map((cat, i) => {
        const a = accents[cat.accent];
        return (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col self-start rounded-3xl border border-[#E2E8F0] bg-white p-5 dark:border-white/10 dark:bg-[#101218] sm:p-6 xl:self-stretch"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-2 border-b border-[#E2E8F0] pb-4 dark:border-white/10">
              <div className="flex min-w-0 items-center gap-3">
                <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${a.dot}`} />
                <h3 className="truncate text-base font-semibold text-[#0F172A] dark:text-white sm:text-lg">
                  {cat.title}
                </h3>
              </div>
              <span className="shrink-0 rounded-full border border-[#E2E8F0] bg-[#F1F5F9] px-2.5 py-1 font-mono text-[10px] uppercase text-[#64748B] dark:border-white/10 dark:bg-white/[0.04] dark:text-[#94A3B8]">
                {cat.skills.length} Techs
              </span>
            </div>

            {/* Skills */}
            <div className="mt-4 flex flex-col gap-3">
              {cat.skills.map(({ name, desc, icon: Icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-3 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2.5 transition hover:border-[#0891B2]/40 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-[#00F2FF]/30"
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${a.icon}`}
                  >
                    <Icon size={18} />
                  </span>
                  <div className="flex min-w-0 flex-col leading-tight">
                    <span className="truncate text-sm font-medium text-[#0F172A] dark:text-white">
                      {name}
                    </span>
                    <span className="truncate font-mono text-xs text-[#64748B] dark:text-[#94A3B8]">
                      {desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default SkillsCards;