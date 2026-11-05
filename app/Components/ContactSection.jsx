

"use client";
import { motion } from "framer-motion";
import { FiMail, FiCode, FiShare2 } from "react-icons/fi";

const EMAIL = "mohamedhhnour@gmail.com";
const GITHUB = "https://github.com/midonour";
const LINKEDIN = "https://www.linkedin.com/in/mohamed-nour-2996102a7/";

const channels = [
  {
    label: "GitHub",
    href: GITHUB,
    icon: FiCode,
    color: "text-[#0891B2] dark:text-[#00F2FF]",
  },
  {
    label: "LinkedIn",
    href: LINKEDIN,
    icon: FiShare2,
    color: "text-[#6D28D9] dark:text-[#C4B5FD]",
  },
  {
    label: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: FiMail,
    color: "text-[#047857] dark:text-[#34D399]",
  },
];

function ContactSection() {
  return (
    <motion.section
      id="Contact"
      className="w-full px-4 py-14 font-space-grotesk sm:px-6 md:py-16 lg:px-10"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center rounded-3xl border border-[#E2E8F0] bg-white px-5 py-10 text-center shadow-lg shadow-slate-200/60 dark:border-white/10 dark:bg-[#101218] dark:shadow-none sm:px-10 sm:py-14 lg:px-16">
        {/* Badge */}
        <span className="flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-1.5 font-mono text-xs uppercase text-[#0891B2] dark:border-white/10 dark:bg-white/[0.04] dark:text-[#00F2FF]">
          <span className="h-2 w-2 rounded-full bg-[#34D399]" />
          <span className="text-[#94A3B8] dark:text-[#64748B]">{'//'}</span> 05.
          Get_In_Touch
        </span>

        {/* Heading */}
        <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight text-[#0F172A] dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Let&apos;s build something{" "}
          <span className="bg-gradient-to-r from-[#0891B2] to-[#3A5EED] bg-clip-text text-transparent dark:from-[#00F2FF] dark:to-[#BFDBFE]">
            together.
          </span>
        </h2>

        {/* Description */}
        <p className="mt-5 max-w-2xl font-inter text-sm leading-relaxed text-[#475569] dark:text-[#CBD5E1] sm:text-base md:text-lg">
          I&apos;m currently open to frontend opportunities, internships,
          freelance projects, and collaborations.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex w-full max-w-md flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <a
            href={`mailto:${EMAIL}`}
            target="_blank"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0891B2] px-6 py-3 text-sm font-medium text-white transition hover:opacity-85 dark:bg-[#00F2FF] dark:text-black sm:w-auto sm:text-base"
          >
            <FiMail size={18} />
            Send Me an Email
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#CBD5E1] px-6 py-3 text-sm font-medium text-[#1E293B] transition hover:bg-[#0891B2]/10 dark:border-white/15 dark:bg-white/5 dark:text-white sm:w-auto sm:text-base"
          >
            <FiShare2 size={18} className="text-[#6D28D9] dark:text-[#C4B5FD]" />
            Connect on LinkedIn
          </a>
        </div>

        <hr className="mt-10 w-full border-[#E2E8F0] dark:border-white/10 sm:mt-12" />

        {/* Direct channels */}
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-[#64748B]">
          Direct Channels
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {channels.map(({ label, href, icon: Icon, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2.5 font-mono text-xs text-[#334155] transition hover:border-[#0891B2]/40 dark:border-white/10 dark:bg-white/3 dark:text-[#E2E8F0] dark:hover:border-[#00F2FF]/30 sm:text-sm"
            >
              <Icon size={16} className={color} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ContactSection;