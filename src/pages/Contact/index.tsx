import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Button } from "@heroui/button";

export default function Contactpage() {
  return (
    <section
      className="min-h-screen bg-background-dark dark:bg-white text-white flex flex-col items-center justify-center px-6 sm:px-10 py-20 md:py-24"
      id="Contact"
    >
      {/* Section Title */}
      <h2 className="text-4xl sm:text-5xl font-black text-blue-500 mb-12 text-center uppercase tracking-tight">
        Contact Me
      </h2>

      {/* Contact Form */}
      <form className="w-full max-w-3xl bg-[#1b2327]/60 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-2xl dark:bg-zinc-50 border border-white/10 dark:border-black/5 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              className="text-sm font-semibold text-zinc-400 dark:text-zinc-600 ml-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full rounded-xl bg-background-dark border border-white/10 dark:border-black/10 focus:border-blue-500 dark:text-black p-4 text-gray-200 outline-none transition-all focus:ring-2 focus:ring-blue-500/20"
              id="name"
              placeholder="Your Name"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-semibold text-zinc-400 dark:text-zinc-600 ml-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full rounded-xl bg-background-dark border border-white/10 dark:border-black/10 focus:border-blue-500 dark:text-black p-4 text-gray-200 outline-none transition-all focus:ring-2 focus:ring-blue-500/20"
              id="email"
              placeholder="Your Email"
              type="email"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-semibold text-zinc-400 dark:text-zinc-600 ml-1"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="w-full rounded-xl bg-background-dark border border-white/10 dark:border-black/10 focus:border-blue-500 dark:text-black p-4 text-gray-200 outline-none transition-all focus:ring-2 focus:ring-blue-500/20"
            id="subject"
            placeholder="What's this about?"
            type="text"
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-semibold text-zinc-400 dark:text-zinc-600 ml-1"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="w-full min-h-[160px] rounded-xl bg-background-dark border border-white/10 dark:border-black/10 focus:border-blue-500 dark:text-black p-4 text-gray-200 outline-none resize-none transition-all focus:ring-2 focus:ring-blue-500/20"
            id="message"
            placeholder="Tell me more..."
          />
        </div>

        <Button
          className="bg-blue-600 text-white hover:bg-blue-700 px-10 py-4 h-auto rounded-xl font-bold text-lg w-full md:w-auto transition-all transform hover:scale-[1.02]"
          type="submit"
        >
          Send Message
        </Button>
      </form>

      {/* Direct Contact Info */}
      <div className="flex flex-col items-center gap-6 mt-16 text-center">
        <p className="text-zinc-400 dark:text-zinc-600 font-medium">
          Or reach out directly via
        </p>
        <a
          className="text-xl sm:text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors"
          href="mailto:uduabraham12@gmail.com"
        >
          uduabraham12@gmail.com
        </a>

        {/* Social Links */}
        <div className="flex gap-10 mt-6">
          <a
            className="text-zinc-400 hover:text-blue-500 transition-all hover:scale-125"
            href="http://www.linkedin.com/in/udu-abraham-10752024b"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            className="text-zinc-400 hover:text-blue-500 transition-all hover:scale-125"
            href="https://github.com/Udu-Abraham"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub size={30} />
          </a>
          <a
            className="text-zinc-400 hover:text-blue-500 transition-all hover:scale-125"
            href="https://twitter.com"
            rel="noreferrer"
            target="_blank"
          >
            <BsTwitterX size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}
