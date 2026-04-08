"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    try {
      if (!name || !email || !message) {
        toast.error("Please fill in all fields.");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email address.");
        return;
      }
      const params = {
        name,
        email,
        message,
      };
      emailjs
        .send(
          "service_iuufj3s",
          "template_rfg3hbi",
          params,
          "qBPGm0sdOLrFBOm0-",
        )
        .then(
          (response) => {
            toast.success(`${response.text} .... ${response.status}`);
          },
          (error) => {
            toast.error("Failed to send message.");
          },
        );
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error(`An error occurred, ${error.message}`);
    }
  }
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
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[95%] xl:w-[50%] border rounded-2xl p-6 bg-white/20 dark:bg-[#1B1B20]/20 border-[#E2E8F0] dark:border-[rgba(27,27,32,0.5)] shadow-md dark:shadow-none"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex flex-col flex-1 gap-2">
              <label htmlFor="name" className="ml-3 text-[#64748B]">
                Your Identity
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
