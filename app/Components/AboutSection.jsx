"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMapPin, FiTerminal } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const infoCards = [
  {
    label: "Location",
    value: "Based in Egypt",
    icon: FiMapPin,
    color:
      "text-[#0891B2] bg-[#0891B2]/10 border-[#0891B2]/30 dark:text-[#00F2FF] dark:bg-[#00F2FF]/10 dark:border-[#00F2FF]/30",
  },
  {
    label: "Specialization",
    value: "Frontend Developer",
    icon: FiTerminal,
    color:
      "text-[#6D28D9] bg-[#7C3AED]/10 border-[#7C3AED]/30 dark:text-[#C4B5FD] dark:bg-[#7C3AED]/20 dark:border-[#7C3AED]/40",
  },
  {
    label: "Education",
    value: "Graduating 2026",
    icon: FaGraduationCap,
    color:
      "text-[#334155] bg-[#F1F5F9] border-[#CBD5E1] dark:text-white dark:bg-white/5 dark:border-white/10",
  },
];

const stats = [
  { value: "15+", label: "Completed Projects", color: "text-[#0891B2] dark:text-[#00F2FF]" },
  { value: "100%", label: "Responsive Craft", color: "text-[#6D28D9] dark:text-[#C4B5FD]" },
  { value: "Next.js", label: "App Router Stack", color: "text-[#0F172A] dark:text-white" },
];

function AboutSection() {
  return (
    <motion.section
      id="About"
      className="w-full overflow-hidden bg-[#F8FAFC] px-4 py-16 font-space-grotesk dark:bg-[#0E0F14] sm:px-8 md:py-20 lg:px-12"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-10">
        {/* Left: photo card */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-[#E2E8F0] shadow-lg shadow-slate-200/60 dark:border-white/10 dark:shadow-none sm:aspect-square lg:max-w-none">
          <Image
            src="/IMG-20260623-WA0012.jpg"
            alt="Mohamed Nour"
            fill
            priority
            sizes="(min-width: 1024px) 35vw, (min-width: 640px) 384px, 100vw"
            className="object-cover object-center"
          />

          {/* Open to work badge */}
          <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-white/80 px-3 py-1.5 font-mono text-xs text-[#047857] backdrop-blur-md dark:border-white/10 dark:bg-black/50 dark:text-white sm:left-4 sm:top-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to Work
          </div>

          {/* Name bar */}
          <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 rounded-2xl border border-[#E2E8F0] bg-white/85 px-4 py-3 backdrop-blur-md dark:border-white/10 dark:bg-black/60 sm:inset-x-4 sm:bottom-4 sm:rounded-full sm:px-5">
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-semibold text-[#0F172A] dark:text-white sm:text-base">
                Mohamed Nour
              </span>
              <span className="truncate font-mono text-[11px] text-[#0891B2] dark:text-[#00F2FF] sm:text-xs">
                Junior Frontend Developer
              </span>
            </div>
            <div className="hidden shrink-0 items-center gap-1 rounded-md border border-[#E2E8F0] bg-[#F1F5F9] px-2.5 py-1 font-mono text-xs text-[#475569] dark:border-white/10 dark:bg-white/5 dark:text-white/80 sm:flex">
              <FiMapPin className="text-[#0891B2] dark:text-[#00F2FF]" size={12} />
              Egypt
            </div>
          </div>
        </div>

        {/* Right: content */}
        <div className="flex min-w-0 flex-col gap-4 sm:gap-5">
          <span className="w-fit rounded-md border border-[#E2E8F0] bg-white px-3 py-1.5 font-mono text-xs uppercase text-[#0891B2] dark:border-white/10 dark:bg-white/[0.04] dark:text-[#00F2FF]">
            <span className="text-[#94A3B8] dark:text-[#64748B]">{'//'}</span> 01. About Me
          </span>

          <h2 className="text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl lg:text-5xl">
            About Me
          </h2>

          <p className="text-base font-medium leading-relaxed text-[#1E293B] dark:text-slate-200 sm:text-lg lg:text-xl">
            I&apos;m Mohamed Nour, a Junior Frontend Developer passionate about
            building modern, interactive, and resilient web applications.
          </p>

          <p className="text-sm leading-relaxed text-[#475569] dark:text-slate-400 sm:text-base">
            Specializing in JavaScript (ES6+), React, and Next.js, I craft
            responsive, accessible interfaces powered by clean component
            architecture. I focus on bridging aesthetic UI design with robust
            code quality, semantic standards, and smooth real-world user
            interactions while constantly advancing with cutting-edge web
            technologies.
          </p>

          {/* Info pills */}
          <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {infoCards.map(({ label, value, icon: Icon, color }) => (
              <div
                key={label}
                className="flex min-w-0 items-center gap-3 rounded-full border border-[#E2E8F0] bg-white px-3 py-2.5 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${color}`}
                >
                  <Icon size={16} />
                </span>
                <div className="flex min-w-0 flex-col leading-tight">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#64748B]">
                    {label}
                  </span>
                  <span className="text-xs font-medium text-[#0F172A] dark:text-white sm:text-[13px]">
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <hr className="border-[#E2E8F0] dark:border-white/10" />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {stats.map(({ value, label, color }) => (
              <div
                key={label}
                className="flex min-w-0 flex-col gap-1 rounded-2xl border border-[#E2E8F0] bg-white px-3 py-4 dark:border-white/10 dark:bg-white/[0.03] sm:rounded-3xl sm:px-5 sm:py-5"
              >
                <span className={`text-xl font-bold sm:text-2xl lg:text-3xl ${color}`}>
                  {value}
                </span>
                <span className="font-mono text-[9px] uppercase leading-tight tracking-wider text-[#64748B] dark:text-slate-400 sm:text-[11px]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutSection;