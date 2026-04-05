// "use client";
// import ProjectCard from "./ProjectCard";
// import { motion } from "framer-motion";
// function ProjectsSection() {
//   return (
//     <motion.section
//       initial={{ opacity: 0, scale: 0 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 1 }}
//       id="Work"
//       className="py-20 text-white w-full px-4"
//     >
//       <div className="container p-4 ">
//         <h2 className="text-3xl font-bold mb-8">Selected Work</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-8 w-[95%] md:mx-5 lg:mx-10">
//           <ProjectCard
//             image="/InkTopia.png"
//             title="InkTopia"
//             description="A book reader app which let you read/download books"
//             live="https://inktopia.vercel.app/?_vercel_share=08nJjKJnxbGzybeGT6BUgvELFJagRbe2"
//             github="https://github.com/midonour/inktopia"
//           />
//           <ProjectCard
//             image="/clocky.jpeg"
//             title="Clocky"
//             description="A clock , stop watch and alarm app built with react js"
//             live="https://clock-y.vercel.app"
//             github="https://github.com/midonour/clockY"
//           />
//           <ProjectCard
//             image="/tasks.jpeg"
//             title="ToDo"
//             description="A ToDo app built with react js which let you add and delete your tasks"
//             live="https://todo-list-reactjs-18suuaatj-mohamed-nours-projects-338143bc.vercel.app/"
//             github="https://github.com/midonour/todo-list"
//           />
//           <ProjectCard
//             image="/coming_soon.png"
//             title="weather app"
//             description="This project is currently under development."
//             live="#"
//             github="#"
//             disable={true}
//           />
//         </div>
//       </div>
//     </motion.section>
//   );
// }

// export default ProjectsSection;
"use client";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

function ProjectsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      id="Work"
      className="py-20 w-full px-4 text-white"
    >
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-8">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center w-[95%] md:mx-5 lg:mx-10">
          <ProjectCard
            image="/InkTopia.webp"
            title="InkTopia"
            description="A book reader app which lets you read/download books"
            live="https://inktopia.vercel.app/?_vercel_share=08nJjKJnxbGzybeGT6BUgvELFJagRbe2"
            github="https://github.com/midonour/inktopia"
            priority={true} // فقط هذه الصورة لزيادة LCP
          />
          <ProjectCard
            image="/clocky.webp"
            title="Clocky"
            description="A clock, stopwatch and alarm app built with React.js"
            live="https://clock-y.vercel.app"
            github="https://github.com/midonour/clockY"
            priority={false}
          />
          <ProjectCard
            image="/tasks.webp"
            title="ToDo"
            description="A ToDo app built with React.js to manage your tasks"
            live="https://todo-list-reactjs-18suuaatj-mohamed-nours-projects-338143bc.vercel.app/"
            github="https://github.com/midonour/todo-list"
            priority={false}
          />
          <ProjectCard
            image="/coming_soon.webp"
            title="Weather App"
            description="This project is currently under development."
            live="#"
            github="#"
            disable={true}
            priority={false}
          />
        </div>
      </div>
    </motion.section>
  );
}

export default ProjectsSection;