"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiCode, FiCheckCircle } from "react-icons/fi";

const chipTone = {
  cyan: "border-[#0891B2]/30 bg-[#0891B2]/10 text-[#0891B2] dark:border-[#00F2FF]/30 dark:bg-[#00F2FF]/10 dark:text-[#00F2FF]",
  violet:
    "border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#6D28D9] dark:border-[#7C3AED]/50 dark:bg-[#7C3AED]/20 dark:text-[#D1BCFF]",
  neutral:
    "border-[#E2E8F0] bg-[#F8FAFC] text-[#475569] dark:border-white/10 dark:bg-white/[0.03] dark:text-[#CBD5E1]",
};

// أي تقنية مش هنا بتاخد اللون العادي
const highlight = {
  React: "cyan",
  "Next.js 14": "cyan",
  Supabase: "violet",
  "API": "violet",
};

function TechChip({ name }) {
  return (
    <span
      className={`rounded-full border px-3 py-1 font-mono text-[11px] sm:text-xs ${
        chipTone[highlight[name] ?? "neutral"]
      }`}
    >
      {name}
    </span>
  );
}

function Buttons({ live, github }) {
  const disabled = (href) => (!href || href === "#" ? "pointer-events-none opacity-50" : "");
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 rounded-full bg-[#0891B2] px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition hover:opacity-85 dark:bg-[#00F2FF] dark:text-black sm:text-sm ${disabled(live)}`}
      >
        <FiExternalLink /> Live Demo
      </a>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 rounded-full border border-[#CBD5E1] px-5 py-2.5 font-mono text-xs text-[#334155] transition hover:bg-[#0891B2]/10 dark:border-white/15 dark:bg-white/[0.03] dark:text-[#E2E8F0] sm:text-sm ${disabled(github)}`}
      >
        <FiCode /> GitHub
      </a>
    </div>
  );
}

export default function ProjectCard({
  featured = false,
  title,
  year,
  image,
  description,
  features = [],
  tech = [],
  live,
  github,
  priority = false,
}) {
  const shell =
    "overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white dark:border-white/10 dark:bg-[#101218]";

  if (featured) {
    return (
      <motion.article
        className={`${shell} grid lg:grid-cols-[1.5fr_1fr]`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Image */}
        <div className="relative min-h-56 sm:min-h-72 lg:min-h-full">
          <Image
            src={image}
            alt={title}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-left-top"
          />
          <span className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white/80 px-3 py-1.5 font-mono text-[11px] font-bold uppercase text-[#0891B2] backdrop-blur-md dark:border-white/10 dark:bg-black/50 dark:text-[#00F2FF] sm:left-5 sm:top-5 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0891B2] dark:bg-[#00F2FF]" />
            Featured Project
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 p-5 sm:p-7">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white sm:text-3xl">
              {title}
            </h3>
            <span className="pt-2 font-mono text-xs text-[#64748B]">{year}</span>
          </div>

          <p className="text-sm leading-relaxed text-[#475569] dark:text-[#CBD5E1] sm:text-base">
            {description}
          </p>

          <div>
            <p className="mb-2.5 font-mono text-[11px] uppercase tracking-widest text-[#64748B]">
              Key Features
            </p>
            <div className="flex flex-wrap gap-2">
              {features.map((f) => (
                <span
                  key={f}
                  className={`flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] sm:text-xs ${chipTone.neutral}`}
                >
                  <FiCheckCircle className="text-[#0891B2] dark:text-[#00F2FF]" size={12} />
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2.5 font-mono text-[11px] uppercase tracking-widest text-[#64748B]">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <TechChip key={t} name={t} />
              ))}
            </div>
          </div>

          <hr className="border-[#E2E8F0] dark:border-white/10" />
          <Buttons live={live} github={github} />
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      className={`${shell} flex flex-col`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-7">
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <TechChip key={t} name={t} />
          ))}
        </div>

        <h3 className="text-xl font-bold text-[#0F172A] dark:text-white sm:text-2xl">{title}</h3>

        <p className="flex-1 text-sm leading-relaxed text-[#475569] dark:text-[#CBD5E1] sm:text-base">
          {description}
        </p>

        <hr className="border-[#E2E8F0] dark:border-white/10" />
        <Buttons live={live} github={github} />
      </div>
    </motion.article>
  );
}