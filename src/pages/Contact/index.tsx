import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Button } from "@heroui/button";

export default function Contactpage() {
  return (
    <section
      id="Contact"
      className="min-h-screen bg-background-dark dark:bg-white text-white flex flex-col items-center justify-center px-6 sm:px-10 py-20 md:py-24"
    >
      {/* Section Title */}
      <h2 className="text-4xl sm:text-5xl font-black text-blue-500 mb-12 text-center uppercase tracking-tight">
        Contact Me
      </h2>

      {/* Contact Form */}
      <form className="w-full max-w-3xl bg-[#1b2327]/60 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-2xl dark:bg-zinc-50 border border-white/10 dark:border-black/5 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-400 dark:text-zinc-600 ml-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl bg-background-dark border border-white/10 dark:border-black/10 focus:border-blue-500 dark:text-black p-4 text-gray-200 outline-none transition-all focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-400 dark:text-zinc-600 ml-1">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl bg-background-dark border border-white/10 dark:border-black/10 focus:border-blue-500 dark:text-black p-4 text-gray-200 outline-none transition-all focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-400 dark:text-zinc-600 ml-1">Subject</label>
          <input
            type="text"
            placeholder="What's this about?"
            className="w-full rounded-xl bg-background-dark border border-white/10 dark:border-black/10 focus:border-blue-500 dark:text-black p-4 text-gray-200 outline-none transition-all focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-400 dark:text-zinc-600 ml-1">Message</label>
          <textarea
            placeholder="Tell me more..."
            className="w-full min-h-[160px] rounded-xl bg-background-dark border border-white/10 dark:border-black/10 focus:border-blue-500 dark:text-black p-4 text-gray-200 outline-none resize-none transition-all focus:ring-2 focus:ring-blue-500/20"
          ></textarea>
        </div>

        <Button
          type="submit"
          className="bg-blue-600 text-white hover:bg-blue-700 px-10 py-4 h-auto rounded-xl font-bold text-lg w-full md:w-auto transition-all transform hover:scale-[1.02]"
        >
          Send Message
        </Button>
      </form>

      {/* Direct Contact Info */}
      <div className="flex flex-col items-center gap-6 mt-16 text-center">
        <p className="text-zinc-400 dark:text-zinc-600 font-medium">Or reach out directly via</p>
        <a
          href="mailto:uduabraham12@gmail.com"
          className="text-xl sm:text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors"
        >
          uduabraham12@gmail.com
        </a>

        {/* Social Links */}
        <div className="flex gap-10 mt-6">
          <a href="#" target="_blank" className="text-zinc-400 hover:text-blue-500 transition-all hover:scale-125">
            <FaLinkedin size={30} />
          </a>
          <a href="#" target="_blank" className="text-zinc-400 hover:text-blue-500 transition-all hover:scale-125">
            <FaGithub size={30} />
          </a>
          <a href="#" target="_blank" className="text-zinc-400 hover:text-blue-500 transition-all hover:scale-125">
            <BsTwitterX size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

