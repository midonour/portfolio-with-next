// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// function AboutSection() {
//   return (
//     <motion.section
//       initial={{ opacity: 0, scale: 0 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 1 }}
//       className="flex md:flex-row flex-col gap-10 pl-8 w-full h-screen font-space-grotesk"
//     >
//       <div className="about-image pr-5 pb-5 h-fit rounded-2xl border border-[#7000FF]/30">
//         <Image
//           src="/IMG-20231106-WA0018.webp"
//           alt="About Image"
//           width={500}
//           height={300}
//           className="rounded-xl"
//           priority
//         />
//       </div>
//       <div className="w-full md:mt-15 sm:w-1/2">
//         <h2 className="dark:text-white text-[#7000FF] text-3xl capitalize">
//           who am i ?
//         </h2>
//         <p className="dark:text-gray-300 text-[#475569] text-md md:leading-relaxed md:text-2xl  mt-4">
//           I am a fourth-year student in the Information Technology program at
//           the Faculty of Science, Minia University, and a passionate junior
//           frontend developer with experience in building web applications using
//           modern technologies. I enjoy learning new programming languages and
//           frameworks, and I am always looking for opportunities to grow my
//           skills and contribute to exciting projects.
//         </p>
//       </div>
//     </motion.section>
//   );
// }

// export default AboutSection;

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

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
      <div className="about-image pr-5 pb-5 h-fit rounded-2xl border border-[#7000FF]/30">
        <Image
          src="/IMG-20231106-WA0018.webp"
          alt="About Image"
          width={500}
          height={300}
          className="rounded-xl object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          placeholder="blur"
          blurDataURL="/IMG-20231106-WA0018-small.webp"
        />
      </div>

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
