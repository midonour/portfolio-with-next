// "use client";
// import { motion } from "framer-motion";
// function HeroSection() {
//   return (
//     <motion.section
//       className="w-full h-screen flex justify-center font-space-grotesk"
//       id="Home"
//       initial={{ opacity: 0, scale: 0 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <div className="container mx-auto px-4 py-20 text-center flex flex-col items-center justify-center">
//         <span className="text-lg dark:text-[#FFF] text-[#7000FF]">
//           Welcom in my portfolio
//         </span>
//         <h1 className="md:text-6xl text-4xl font-bold mt-4 w-fit dark:text-[#00F2FF] text-[#0F172A] dark:drop-shadow-[0px_0px_8px_rgba(0,242,255,0.8)]">
//           MOHAMED NOUR
//         </h1>
//         <span className="md:text-3xl text-2xl mt-4 dark:text-[#FFF] text-[#0F172A]">
//           Frontend Developer
//         </span>
//         <p className="text-md mt-6 dark:text-[#94A3B8] text-[#475569] max-w-2xl mx-auto font-space-grotesk">
//           Frontend developer specialized in building fast, accessible web
//           applications with React and Next.js, with a strong focus on
//           performance and clean UI architecture.
//         </p>
//         <div className="mt-8 flex justify-center gap-6">
//           <a
//             href="#Projects"
//             className="px-6 py-3 bg-linear-to-r from-[#00696F] dark:from-[#00F2FF] from-0%  to-[#7000FF] to-100%   dark:text-black text-white rounded-3xl font-medium  hover:from-[#7000FF] hover:to-[#7000FF] transition-colors"
//           >
//             View Projects
//           </a>
//           <a
//             href="#Contact"
//             className="px-6 py-3 border dark:border-[#00F2FF] border-[#CBD5E1] dark:text-[#00F2FF] text-[#1E293B] rounded-3xl font-medium hover:bg-[#7000FF] dark:hover:bg-[#00F2FF] hover:text-white transition-colors"
//           >
//             Contact Me
//           </a>
//         </div>
//       </div>
//     </motion.section>
//   );
// }

// export default HeroSection;
"use client";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <motion.section
      id="Home"
      className="w-full h-screen flex justify-center items-center font-space-grotesk"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 text-center flex flex-col items-center justify-center">
        <span className="text-lg text-[#7000FF] dark:text-white">
          Welcome to my portfolio
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mt-4 w-fit text-[#0F172A] dark:text-[#00F2FF]">
          MOHAMED NOUR
        </h1>

        <span className="mt-4 text-2xl md:text-3xl text-[#0F172A] dark:text-white">
          Frontend Developer
        </span>

        <p className="mt-6 text-md dark:text-[#94A3B8] text-[#475569] max-w-2xl mx-auto">
          Frontend developer specialized in building fast, accessible web
          applications with React and Next.js, focusing on performance and clean UI architecture.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a
            href="#Projects"
            className="px-6 py-3 rounded-3xl font-medium text-white dark:text-black bg-gradient-to-r dark:from-[#00F2FF] from-[#00696F] to-[#7000FF] hover:opacity-80 transition"
          >
            View Projects
          </a>
          <a
            href="#Contact"
            className="px-6 py-3 rounded-3xl font-medium border border-[#CBD5E1] dark:border-white text-[#1E293B] dark:text-white dark:hover:bg-white/10 hover:bg-gray-100  transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default HeroSection;
