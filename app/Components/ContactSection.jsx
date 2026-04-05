// "use client";
// import { motion } from "framer-motion";
// function ContactSection() {
//   return (
//     <motion.section
//       initial={{ opacity: 0, scale: 0 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 1 }}
//       id="Contact"
//       className="py-20 w-full flex flex-col items-center"
//     >
//       <span className="text-sm dark:text-gray-400 text-[#7000FF]">Connect</span>
//       <h2 className="text-3xl font-bold mt-2 dark:text-white text-[#0F172A] mb-6">
//         Get in Touch
//       </h2>
//       <span className="dark:text-gray-300 text-[#475569]">
//         have aproject in mind? let's discuss!
//       </span>
//       <div className="mt-8 flex justify-center w-full ">
//         <form className="flex flex-col w-[95%] xl:w-[50%] border shadow-[0px_40px_40px_rgba(0,0,0,0.2),0px_40px_100px_rgba(256,256,256,0.2)] dark:shadow-none dark:border-[rgba(27,27,32,0.5)] border-[#E2E8F0] rounded-2xl bg-[rgba(255,255,255,0.2)] dark:bg-[rgb(58,73,75,0.1)] p-6">
//           <div className="flex w-full gap-2 mb-2">
//             <div className="flex flex-col w-[50%] gap-2">
//               <label htmlFor="name" className="text-[#64748B] w-fit ml-3">
//                 Your Identity
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Full Name"
//                 className="px-4 py-3 dark:text-[#475569] text-[#94A3B8] border border-[#E2E8F0] dark:border-[rgba(58,73,75,0.2)] rounded-3xl dark:bg-[#1B1B20] bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="flex flex-col w-[50%] gap-2">
//               <label htmlFor="email" className="text-[#64748B] w-fit ml-3">
//                 Your Gemail
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Email Address"
//                 className="px-4 py-3 dark:text-[#475569] text-[#94A3B8] border border-[#E2E8F0] dark:border-[rgba(58,73,75,0.2)] rounded-3xl dark:bg-[#1B1B20] bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col w-full mb-2">
//             <label htmlFor="message" className="text-[#64748B] mb-1 ml-3 w-fit">
//               The Message
//             </label>
//             <textarea
//               placeholder="Tell me about your mission..."
//               id="message"
//               rows="6"
//               cols="5"
//               className="px-4 py-3 mb-3 rounded-4xl dark:bg-[#1B1B20] bg-[#F8FAFC] border border-[#E2E8F0] dark:border-[rgba(58,73,75,0.2)] dark:text-[#475569] text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-blue-500"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="px-4 py-2 w-90% md:w-full rounded-3xl dark:text-[#002022] text-white text-lg bg-linear-to-r from-[#00696F] dark:from-[#00F2FF] from-0%  to-[#7000FF] to-100% transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//       <div className=" w-full mt-18 h-px bg-linear-to-r from-transparent via-[#00F2FF]/40 to-transparent" />
//     </motion.section>
//   );
// }

// export default ContactSection;
"use client";
import { motion } from "framer-motion";

function ContactSection() {
  return (
    <motion.section
      id="Contact"
      className="py-20 w-full flex flex-col items-center font-space-grotesk"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <span className="text-sm text-[#7000FF] dark:text-gray-400">Connect</span>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#0F172A] dark:text-white mb-6">
        Get in Touch
      </h2>
      <span className="text-[#475569] dark:text-gray-300">
        Have a project in mind? Let's discuss!
      </span>

      <div className="mt-8 flex justify-center w-full">
        <form className="flex flex-col w-[95%] xl:w-[50%] border rounded-2xl p-6 bg-white/20 dark:bg-[#1B1B20]/20 border-[#E2E8F0] dark:border-[rgba(27,27,32,0.5)] shadow-md dark:shadow-none">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex flex-col flex-1 gap-2">
              <label htmlFor="name" className="ml-3 text-[#64748B]">
                Your Identity
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="px-4 py-2 rounded-3xl border border-[#E2E8F0] dark:border-[rgba(58,73,75,0.2)] dark:bg-[#1B1B20] bg-[#F8FAFC] dark:text-[#475569] text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <label htmlFor="email" className="ml-3 text-[#64748B]">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="px-4 py-2 rounded-3xl border border-[#E2E8F0] dark:border-[rgba(58,73,75,0.2)] dark:bg-[#1B1B20] bg-[#F8FAFC] dark:text-[#475569] text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="ml-3 text-[#64748B] mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Tell me about your mission..."
              className="px-4 py-3 rounded-3xl border border-[#E2E8F0] dark:border-[rgba(58,73,75,0.2)] dark:bg-[#1B1B20] bg-[#F8FAFC] dark:text-[#475569] text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-3xl text-white dark:text-[#002022] text-lg bg-gradient-to-r from-[#00696F] to-[#7000FF] dark:from-[#00F2FF] transition-colors hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="w-full mt-20 h-px bg-gradient-to-r from-transparent via-[#00F2FF]/40 to-transparent" />
    </motion.section>
  );
}

export default ContactSection;