// "use client";
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";
// import { FaCode } from "react-icons/fa";

// export default function ProjectCard({ image, title, description, live, github, disable }) {
//   return (
//     <div className="dark:bg-[#1B1B20] dark:border-0 bg-white border border-[#E2E8F0] rounded-lg shadow-lg ">
//       <img
//         src={image}
//         alt={title}
//         className="object-fit w-full h-80 rounded-md mb-4"
//         priority
//       />
//       <div className="p-4">
//         <h3 className="text-xl font-bold mb-2 dark:text-[#E2E8F0] text-[#0F172A]">{title}</h3>
//         <p className="dark:text-[#B9CACB] text-[#475569] mb-4">{description}</p>
//         <div className="flex gap-4">
//           <a
//             href={github}
//             target="_blank"
//             rel="noopener noreferrer"
//             disabled={disable}
//             className="px-4 py-2 text-[#0F172A] dark:text-[#E2E8F0] text-center rounded hover:bg-gray-700 transition"
//           >
//             <FaCode className="inline-block mr-2" />
//             GitHub
//           </a>
//           <a
//             href={live}
//             target="_blank"
//             rel="noopener noreferrer"
//             disabled={disable}
//             className="px-4 py-2  text-[#0F172A] dark:text-[#E2E8F0] rounded text-center hover:bg-blue-700 transition"
//           >
//             <FaArrowUpRightFromSquare className="inline-block mr-2" />
//             Live Demo
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import Image from "next/image";

export default function ProjectCard({ image, title, description, live, github, disable, priority }) {
  return (
    <div className="dark:bg-[#1B1B20] dark:border-0 bg-white border border-[#E2E8F0] rounded-lg shadow-lg">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full h-80 object-cover rounded-md mb-4"
        priority={priority} // فقط للصورة الأولى
        loading={priority ? "eager" : "lazy"} // lazy load لباقي الصور
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 dark:text-[#E2E8F0] text-[#0F172A]">{title}</h3>
        <p className="dark:text-[#B9CACB] text-[#475569] mb-4">{description}</p>
        <div className="flex gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 text-[#0F172A] dark:text-[#E2E8F0] text-center rounded hover:bg-gray-700 transition ${disable ? "pointer-events-none opacity-50" : ""}`}
          >
            <FaCode className="inline-block mr-2" />
            GitHub
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 text-[#0F172A] dark:text-[#E2E8F0] text-center rounded hover:bg-blue-700 transition ${disable ? "pointer-events-none opacity-50" : ""}`}
          >
            <FaArrowUpRightFromSquare className="inline-block mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}