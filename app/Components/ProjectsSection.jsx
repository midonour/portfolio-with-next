"use client";
import { image } from "motion/react-client";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    featured: false,
    title: "InkTopia",
    year: "2024",
    image: "/InkTopia.webp",
    description:
      "A comprehensive full-stack e-book reading platform designed for seamless digital reading, library management, and real-time document interaction.",
    features: [
      "Authentication",
      "Online PDF reading",
      "Bookmarks",
      "User profiles",
      "Admin dashboard",
      "Book management",
      "Download functionality",
    ],
    tech: [
      "React",
      "Supabase",
      "Context API",
      "React Router",
      "react-pdf",
      "Tailwind CSS",
    ],
    live: "https://inktopia.vercel.app/?_vercel_share=08nJjKJnxbGzybeGT6BUgvELFJagRbe2",
    github: "https://github.com/midonour/inktopia",
  },
  {
    featured: true,
    title: "Tammni",
    year: "2026",
    image: "/awareness2.png",
    description:
      "(My graduation project with a wonderful team) Is a secure platform that helps you report missing or found individuals, track cases, and access information more quickly.",
    features: [
      "Authentication",
      "AI face recognition and matching",
      "Case reporting",
      "Case tracking",
      "Admin dashboard",
      "User profiles",
      "Notifications",
      "Search functionality",
    ],
    tech: [
      "Next.js 14",
      "node.Js",
      "Java Spring Boot",
      "Express.js",
      "Tailwind CSS",
      "Vite",
    ],
    live: "#",
    github: "#",
  },
  {
    title: "clocky",
    image: "/clocky.webp",
    description:
      "Real-time clock, stopwatch, and alarm application built with React.js, featuring a user-friendly interface and responsive design.",
    tech: ["React", "CSS"],
    live: "https://clock-y.vercel.app/",
    github: "https://github.com/midonour/clockY",
  },
  {
    title: "todo list",
    image: "/tasks.webp",
    description:
      "A simple and efficient task management application built with React.js, allowing users to create, edit, and organize their daily tasks seamlessly.",
    tech: ["React", "CSS"],
    live: "https://todo-list-l73028d57-mohamed-nours-projects-338143bc.vercel.app/",
    github: "https://github.com/midonour/todo-list",
  },
];

function ProjectsSection() {
  const featureds = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <motion.section
      id="Work"
      className="w-full px-4 py-14 font-space-grotesk sm:px-6 md:py-16 lg:px-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col items-start gap-3.5">
            <span className="rounded-md border border-[#E2E8F0] bg-white px-3 py-1.5 font-mono text-xs uppercase text-[#0891B2] dark:border-white/10 dark:bg-white/[0.04] dark:text-[#00F2FF]">
              <span className="text-[#94A3B8] dark:text-[#64748B]">{'//'}</span> 04.
              Selected_Works
            </span>
            <h2 className="text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl lg:text-5xl">
              Selected Projects
            </h2>
            <p className="text-sm text-[#475569] dark:text-[#CBD5E1] sm:text-base lg:text-lg">
              Some of the applications I&apos;ve designed and built.
            </p>
          </div>

          <div className="flex flex-1 items-center gap-4 md:max-w-[55%]">
            <div className="hidden h-px flex-1 bg-[#E2E8F0] dark:bg-white/10 md:block" />
            <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-widest text-[#64748B] sm:text-xs">
              Production &amp; Open Source
            </span>
          </div>
        </div>

        {/* Featured */}
        <div className="mt-8 flex flex-col gap-5 sm:mt-10">
          {featureds.map((p, i) => (
            <ProjectCard key={p.title} {...p} priority={i === 0} />
          ))}
        </div>

        {/* Others */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {others.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
