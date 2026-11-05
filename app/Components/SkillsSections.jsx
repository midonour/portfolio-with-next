"use client";
import SkillsCards from "./SkillsCards";
import { motion } from "framer-motion";

function SkillsSections() {
  return (
    <motion.section
      id="Skills"
      className="relative w-full px-4 py-16 font-space-grotesk sm:px-8 md:py-20 lg:px-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center">
        <span className="rounded-md border border-[#E2E8F0] bg-white px-3 py-1.5 font-mono text-xs uppercase text-[#0891B2] dark:border-white/10 dark:bg-white/4 dark:text-[#00F2FF]">
          <span className="text-[#94A3B8] dark:text-[#64748B]">{'//'}</span> 02. Tech_Stack
        </span>

        <h2 className="text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl lg:text-6xl">
          Tech Stack
        </h2>

        <p className="max-w-xl text-sm text-[#475569] dark:text-[#CBD5E1] sm:text-base lg:text-lg">
          Tools and technologies I use to build modern web applications.
        </p>

        <div className="mt-8 w-full text-left sm:mt-10">
          <SkillsCards />
        </div>
      </div>
    </motion.section>
  );
}

export default SkillsSections;