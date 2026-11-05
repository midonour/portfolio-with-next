"use client";
import { motion } from "framer-motion";
import { FaFolderOpen, FaDownload } from "react-icons/fa";

function HeroSection() {
  return (
    <motion.section
      id="Home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-20 font-space-grotesk"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* soft glow behind heading */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 hidden h-[300px] w-[90vw] max-w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00F2FF]/10 blur-3xl dark:block" />

      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        {/* Badge */}
        <span className="flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-3 py-1.5 font-mono text-xs text-[#047857] dark:border-white/10 dark:bg-white/[0.04] dark:text-[#E2E8F0] sm:px-4 sm:text-sm">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#34D399]" />
          Available for Frontend Opportunities
        </span>

        {/* Eyebrow */}
        <span className="mt-5 font-mono text-xs font-bold uppercase tracking-widest text-[#0891B2] dark:text-[#00F2FF] sm:text-sm">
          <span className="font-normal text-[#94A3B8] dark:text-[#64748B]">// </span>
          Mohamed Nour • Frontend Developer
        </span>

        {/* Heading */}
        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-[#0F172A] dark:text-[#F5F2F0] sm:text-5xl md:text-6xl lg:text-7xl">
          Building{" "}
          <span className="bg-gradient-to-r from-[#0891B2] to-[#3A5EED] bg-clip-text text-transparent dark:from-[#A5F3FC] dark:to-[#D1BCFF]">
            modern web
          </span>{" "}
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#0891B2] to-[#0891B2] bg-clip-text text-transparent dark:from-[#00F2FF] dark:to-[#A5F3FC]">
            experiences
          </span>{" "}
          with code.
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl font-inter text-sm leading-relaxed text-[#475569] dark:text-[#CBD5E1] sm:text-base md:text-lg">
          Junior Frontend Developer focused on{" "}
          <span className="font-semibold text-[#0F172A] dark:text-white">JavaScript</span>,{" "}
          <span className="font-semibold text-[#0F172A] dark:text-white">React</span>, and{" "}
          <span className="font-semibold text-[#0F172A] dark:text-white">Next.js</span>. I build
          responsive, scalable, and user-friendly web applications.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex w-full max-w-md flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <a
            href="https://github.com/midonour"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0891B2] px-6 py-3 text-base font-medium text-white transition hover:opacity-80 dark:bg-[#00F2FF] dark:text-black sm:w-auto"
          >
            <FaFolderOpen />
            View My Projects
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=16DeooN2MI-5sfMabe7reDzA8WwRDqngh"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#CBD5E1] px-6 py-3 text-base font-medium text-[#1E293B] transition hover:bg-gray-100 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-[#0891B2]/10 sm:w-auto"
          >
            <FaDownload />
            Download CV
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default HeroSection;