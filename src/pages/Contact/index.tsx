import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "@heroui/button";

export default function Contactpage() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-background-dark text-white flex flex-col items-center justify-center px-6 md:px-20 lg:px-40 pb-10"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-primary mb-10 text-center">
        Contact Me
      </h2>

      {/* Contact Form */}
      <form className="w-full max-w-2xl bg-[#1b2327] p-8 rounded-2xl shadow-lg border border-primary/20 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg bg-background-dark border border-primary/30 focus:border-primary p-4 text-gray-200 placeholder-gray-500 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-lg bg-background-dark border border-primary/30 focus:border-primary p-4 text-gray-200 placeholder-gray-500 outline-none"
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-lg bg-background-dark border border-primary/30 focus:border-primary p-4 text-gray-200 placeholder-gray-500 outline-none"
        />

        <textarea
          placeholder="Your Message"
          className="w-full min-h-[150px] rounded-lg bg-background-dark border border-primary/30 focus:border-primary p-4 text-gray-200 placeholder-gray-500 outline-none resize-none"
        ></textarea>

        <Button
          type="submit"
          className="bg-primary text-white hover:bg-primary/80 px-6 py-3 rounded-lg font-semibold w-full md:w-auto"
        >
          Send Message
        </Button>
      </form>

      {/* Direct Contact Info */}
      <div className="flex flex-col items-center gap-4 mt-10 text-center">
        <p className="text-gray-400">Or reach out directly:</p>
        <a
          href="mailto:uduabraham12@gmail.com"
          className="text-lg text-primary hover:underline"
        >
         uduabraham12@gmail.com
        </a>

        {/* Social Links */}
        <div className="flex gap-6 mt-4">
          <a
            href="#"
            target="_blank"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

