"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
function AboutSection() {
  return (
    <motion.section
      id="About"
      className="flex flex-col md:flex-row gap-10 px-8 md:px-16 w-full min-h-screen font-space-grotesk items-center justify-center"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <motion.div
        className="about-image w-17 h-17 rounded-[50%] border-4 border-[#7000FF]/30 relative top-10 right-25 md:-top-65 md:left-40"
        animate={{ y: ["0", "20px", "0"] }}
        transition={{ duration: 2, ease: "easeOut", repeat: Infinity }}
      >
        <SiNextdotjs className="text-black dark:text-white w-full h-full" />
      </motion.div>
      <motion.div
        className="about-image h-fit rounded-[50%] border-5 border-[#7000FF]/30"
        animate={{ y: ["0", "20px", "0"] }}
        transition={{ duration: 2, ease: "easeOut", repeat: Infinity }}
      >
        <Image
          src="/IMG-20231106-WA0018.webp"
          alt="About Image"
          width={500}
          height={300}
          className="rounded-[50%] object-cover "
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          placeholder="blur"
          blurDataURL="/IMG-20231106-WA0018-small.webp"
        />
      </motion.div>

      {/* Text */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-[#7000FF] dark:text-white capitalize">
          Who am I?
        </h2>
        <p className="mt-4 text-[#475569] dark:text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
          I am a fourth-year student in the Information Technology program at
          the Faculty of Science, Minia University, and a passionate junior
          frontend developer with experience in building web applications using
          modern technologies. I enjoy learning new programming languages and
          frameworks, and I am always looking for opportunities to grow my
          skills and contribute to exciting projects.
        </p>
      </div>
    </motion.section>
  );
}

export default AboutSection;
