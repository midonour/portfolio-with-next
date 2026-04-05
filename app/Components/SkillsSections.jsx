// "use client";
// import SkillsCards from "./SkillsCards";
// import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaHtml5,
//   FaCss3Alt,
//   FaGit,
//   FaGithub,
//   FaJs,
// } from "react-icons/fa";
// import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
// const tech = [
//   { icon: <FaReact />, name: "React" },
//   { icon: <FaHtml5 />, name: "HTML5" },
//   { icon: <FaCss3Alt />, name: "CSS3" },
//   { icon: <FaGit />, name: "Git" },
//   { icon: <FaGithub />, name: "GitHub" },
//   { icon: <FaJs />, name: "JavaScript" },
//   { icon: <SiNextdotjs />, name: "Nextjs" },
//   { icon: <SiTailwindcss />, name: "TailwindCSS" },
// ];
// function SkillsSections() {
//   return (
//     <motion.section
//       className="relative text-white w-full my-8 flex flex-col justify-center items-center font-space-grotesk"
//       id="Skills"
//       initial={{ opacity: 0, scale: 0 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <span className="dark:text-white text-black">TECHNICAL ARSENAL</span>
//       <h2 className="text-3xl font-bold mb-8 dark:text-white text-black">
//         Core Competencies
//       </h2>
//       <div className="flex overflow-hidden w-[90%] py-4 gap-4 relative">
//         <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-22 bg-linear-to-r dark:from-[#131318]  to-transparent"></div>
//         <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-22 bg-linear-to-l dark:from-[#131318]  to-transparent"></div>
//         fo
//         <motion.div
//           className="flex gap-4 shrink-0"
//           animate={{ x: ["-100%", "0%"] }}
//           transition={{
//             duration: 20,
//             ease: "linear",
//             repeat: Infinity,
//           }}
//         >
//           {tech.map((skill, index) => (
//             <SkillsCards key={index} icon={skill.icon} name={skill.name} />
//           ))}
//         </motion.div>
//         <motion.div
//           className="flex gap-4 shrink-0"
//           animate={{ x: ["-100%", "0%"] }}
//           transition={{
//             duration: 20,
//             ease: "linear",
//             repeat: Infinity,
//           }}
//         >
//           {tech.map((skill, index) => (
//             <SkillsCards key={index} icon={skill.icon} name={skill.name} />
//           ))}
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }

// export default SkillsSections;

"use client";
import SkillsCards from "./SkillsCards";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaJs,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const tech = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaGit />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiNextdotjs />, name: "Nextjs" },
  { icon: <SiTailwindcss />, name: "TailwindCSS" },
];

function SkillsSections() {
  return (
    <motion.section
      id="Skills"
      className="relative text-white w-full my-8 flex flex-col justify-center items-center font-space-grotesk"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <span className="dark:text-white text-black">TECHNICAL ARSENAL</span>
      <h2 className="text-3xl font-bold mb-8 dark:text-white text-black">
        Core Competencies
      </h2>

      <div className="relative flex overflow-hidden w-[90%] py-4 gap-4">
        {/* Left & Right fade overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-22 bg-linear-to-r dark:from-[#131318] to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-22 bg-linear-to-l dark:from-[#131318] to-transparent"></div>

        {/* Motion container */}
        <motion.div
          className="flex gap-4 shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {tech.map((skill, index) => (
            <SkillsCards key={index} icon={skill.icon} name={skill.name} />
          ))}
          {/* Duplicate for seamless scroll */}
          {tech.map((skill, index) => (
            <SkillsCards key={`dup-${index}`} icon={skill.icon} name={skill.name} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default SkillsSections;
