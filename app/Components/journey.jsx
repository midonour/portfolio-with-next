"use client";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2023",
    tag: "Getting Started",
    text: "Started learning web development, focusing on HTML, CSS, and JavaScript fundamentals.",
    tone: "cyan",
  },
  {
    year: "2024",
    tag: "Core Foundations",
    text: "Started building web applications and strengthening JavaScript fundamentals.",
    tone: "cyan",
  },
  {
    year: "2025",
    tag: "React Ecosystem & Full Stack Basics",
    text: "Built real-world React projects and worked with APIs, authentication, and databases.",
    tone: "violet",
  },
  {
    year: "2026",
    tag: "Production Architecture",
    text: "Focused on Next.js, Redux Toolkit, Supabase, and building production-style applications.",
    tone: "cyan",
  },
  {
    year: "Currently",
    tag: "Open to Frontend Roles",
    text: "Looking for opportunities to grow as a Frontend Developer and contribute to real-world products.",
    tone: "green",
  },
];

const tones = {
  cyan: {
    tag: "border-[#0891B2]/30 bg-[#0891B2]/10 text-[#0891B2] dark:border-[#00F2FF]/30 dark:bg-[#00F2FF]/10 dark:text-[#00F2FF]",
    dot: "bg-[#0891B2] ring-[#0891B2]/20 dark:bg-[#00F2FF] dark:ring-[#00F2FF]/20",
    card: "border-[#E2E8F0] dark:border-white/10",
  },
  violet: {
    tag: "border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#6D28D9] dark:border-[#7C3AED]/50 dark:bg-[#7C3AED]/20 dark:text-[#D1BCFF]",
    dot: "bg-[#0891B2] ring-[#0891B2]/20 dark:bg-[#00F2FF] dark:ring-[#00F2FF]/20",
    card: "border-[#E2E8F0] dark:border-white/10",
  },
  green: {
    tag: "border-[#34D399]/40 bg-[#34D399]/10 text-[#047857] dark:border-[#34D399]/30 dark:bg-[#34D399]/10 dark:text-[#34D399]",
    dot: "bg-[#34D399] ring-[#34D399]/20",
    card: "border-[#34D399]/40 dark:border-[#34D399]/30",
  },
};

function Journey() {
  return (
    <motion.section
      id="journey"
      className="relative w-full px-4 py-14 font-space-grotesk sm:px-6 md:py-16 lg:px-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3.5 text-center">
        <span className="rounded-md border border-[#E2E8F0] bg-white px-3 py-1.5 font-mono text-xs uppercase text-[#0891B2] dark:border-white/10 dark:bg-white/[0.04] dark:text-[#00F2FF]">
          <span className="text-[#94A3B8] dark:text-[#64748B]">{'//'}</span> 03.
          Developer_Journey
        </span>

        <h2 className="text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl lg:text-5xl">
          My Journey
        </h2>

        <p className="max-w-lg text-sm text-[#475569] dark:text-[#CBD5E1] sm:text-base lg:text-lg">
          A brief timeline of growth, technical focus, and continuous learning.
        </p>

        {/* Timeline */}
        <div className="relative mt-7 w-full text-left sm:mt-10">
          {/* vertical line */}
          <div className="absolute bottom-4 left-[8px] top-4 w-px bg-gradient-to-b from-[#0891B2]/60 to-transparent dark:from-[#00F2FF]/50 sm:left-[10px]" />

          <div className="flex flex-col gap-4 sm:gap-5">
            {timeline.map((item, i) => {
              const t = tones[item.tone];
              return (
                <motion.div
                  key={item.year}
                  className="relative pl-8 sm:pl-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* dot */}
                  <span
                    className={`absolute left-0 top-7 h-[18px] w-[18px] rounded-full ring-4 sm:h-5 sm:w-5 ${t.dot}`}
                  />

                  {/* card */}
                  <div
                    className={`rounded-2xl border bg-white p-4 dark:bg-[#101218] sm:rounded-3xl sm:p-6 ${t.card}`}
                  >
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <h3 className="text-lg font-bold text-[#0F172A] dark:text-white sm:text-xl">
                        {item.year}
                      </h3>
                      <span
                        className={`flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] sm:text-xs ${t.tag}`}
                      >
                        {item.tone === "green" && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#34D399]" />
                        )}
                        {item.tag}
                      </span>
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#475569] dark:text-[#CBD5E1] sm:mt-3.5 sm:text-base">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Journey;