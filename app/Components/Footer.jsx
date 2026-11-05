"use client";
import Link from "next/link";
import { FiMail, FiCode, FiShare2 } from "react-icons/fi";

const EMAIL = "mohamedhhnour@gmail.com"; // غيّره بإيميلك الحقيقي

const navLinks = [
  { label: "Home", id: "Home" },
  { label: "About", id: "About" },
  { label: "Skills", id: "Skills" },
  { label: "Journey", id: "journey" },
  { label: "Projects", id: "Work" },
  { label: "Contact", id: "Contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/midonour",
    icon: FiCode,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-nour-2996102a7/",
    icon: FiShare2,
    external: true,
  },
  { label: "Email", href: `mailto:${EMAIL}`, icon: FiMail, external: false },
];

function Footer() {
  return (
    <footer className="w-full border-t border-[#E2E8F0] bg-white px-4 py-8 font-mono dark:border-white/5 dark:bg-[#0A0B0F] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Top row */}
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          {/* Brand */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#34D399] shadow-[0_0_8px_#34D399]" />
            <span className="font-space-grotesk text-lg font-semibold text-[#0F172A] dark:text-white sm:text-xl">
              Mohamed Nour
            </span>
            <span className="text-sm text-[#0891B2] dark:text-[#00F2FF]">.dev</span>
            <span className="hidden h-6 w-px bg-[#CBD5E1] dark:bg-white/15 sm:block" />
            <span className="text-xs text-[#475569] dark:text-[#CBD5E1] sm:text-sm">
              Junior Frontend Developer
            </span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[#475569] dark:text-[#CBD5E1] sm:text-sm lg:gap-x-8">
            {navLinks.map(({ label, id }) => (
              <Link
                key={id}
                href={`#${id}`}
                className="transition hover:text-[#0891B2] dark:hover:text-[#00F2FF]"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center justify-center gap-4 text-xs text-[#475569] dark:text-[#CBD5E1] sm:text-sm">
            {socials.map(({ label, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition hover:text-[#0891B2] dark:hover:text-[#00F2FF]"
              >
                <Icon size={15} />
                {label}
              </a>
            ))}
          </div>
        </div>

        <hr className="my-6 border-[#E2E8F0] dark:border-white/10" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-[#64748B] sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Mohamed Nour. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#0891B2] dark:bg-[#00F2FF]" />
            Designed &amp; Built with React &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;