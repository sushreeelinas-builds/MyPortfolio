
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";

const contactEmail = "sushreeelinas@gmail.com";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <section
        id="contact"
        className="relative isolate overflow-hidden bg-[#020b13] px-6 py-12 sm:px-10 sm:py-16 lg:px-20"
      >
        {/* Animated Background */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {/* Neon Grid */}
          <motion.div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(16,185,129,0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139,92,246,0.35) 1px, transparent 1px)
              `,
              backgroundSize: "55px 55px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "55px 55px"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Green Glow */}
          <motion.div
            className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-500/20 blur-[130px]"
            animate={{
              x: [0, 80, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Violet Glow */}
          <motion.div
            className="absolute -right-40 top-10 h-[30rem] w-[30rem] rounded-full bg-violet-600/20 blur-[140px]"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 19,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Blue Glow */}
          <motion.div
            className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-600/15 blur-[120px]"
            animate={{
              x: [0, 70, -40, 0],
              y: [0, -40, 30, 0],
            }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#020b13]/20 via-transparent to-[#020b13]/70" />
        </div>

        {/* Same Home container alignment */}
        <div className="relative z-10 mx-auto w-full max-w-7xl">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mb-8 text-center"
          >
            <span className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-6xl font-black tracking-[12px] text-white/[0.025] sm:text-8xl lg:text-9xl">
              CONTACT
            </span>

            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs tracking-[3px] text-emerald-300">
              <Sparkles size={14} />
              LET'S CONNECT
            </div>

            <h2 className="text-3xl font-bold tracking-[3px] text-white sm:text-5xl">
              <span className="text-emerald-400">—</span>{" "}
              CONTACT ME{" "}
              <span className="text-violet-400">—</span>
            </h2>
          </motion.div>

          {/* Contact Layout */}
          <div className="grid w-full gap-5 lg:grid-cols-[0.8fr_1.7fr]">

            {/* Left Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl border border-emerald-400/10 bg-[#0b1e2c]/85 p-5 shadow-[0_0_45px_rgba(16,185,129,0.06)] backdrop-blur-xl sm:p-7"
            >
              {/* Email */}
              <div className="mb-6">
                <h3 className="mb-3 border-l-2 border-emerald-400 pl-4 text-lg font-semibold text-white">
                  Email
                </h3>

                <a
                  href={`mailto:${contactEmail}`}
                  className="block break-all pl-4 text-sm leading-7 text-gray-400 transition-colors hover:text-emerald-300"
                >
                  {contactEmail}
                </a>
              </div>

              {/* Contact */}
              <div className="mb-6">
                <h3 className="mb-3 border-l-2 border-violet-400 pl-4 text-lg font-semibold text-white">
                  Contact
                </h3>

                <div className="pl-4 text-sm leading-7 text-gray-400">
                  7326057454
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="mb-4 border-l-2 border-emerald-400 pl-4 text-lg font-semibold text-white">
                  Connect With Me
                </h3>

                <div className="flex gap-3 pl-4">
                  <a
                    href="https://www.linkedin.com/in/sushree-elina-sahoo-038b51358/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/15 hover:text-blue-300"
                  >
                    <Linkedin size={19} />
                  </a>

                  <a
                    href="https://github.com/sushreeelinas-boop"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-500/15 hover:text-violet-300"
                  >
                    <Github size={19} />
                  </a>

                  <a
                    href={`mailto:${contactEmail}`}
                    aria-label="Email"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-emerald-500/15 hover:text-emerald-300"
                  >
                    <Mail size={19} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-2xl border border-violet-400/10 bg-[#0b1e2c]/85 p-5 shadow-[0_0_45px_rgba(139,92,246,0.06)] backdrop-blur-xl sm:p-7"
            >
              <h3 className="mb-5 border-l-2 border-violet-400 pl-4 text-xl font-semibold text-white">
                Get In Touch
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name and Email */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    required
                    className="w-full rounded-lg border border-white/15 bg-[#0a2030]/80 px-4 py-2.5 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/10"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    className="w-full rounded-lg border border-white/15 bg-[#0a2030]/80 px-4 py-2.5 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/10"
                  />
                </div>

                {/* Subject */}
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  required
                  className="w-full rounded-lg border border-white/15 bg-[#0a2030]/80 px-4 py-2.5 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/10"
                />

                {/* Message */}
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your message *"
                  required
                  className="w-full resize-y rounded-lg border border-white/15 bg-[#0a2030]/80 px-4 py-2.5 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/10"
                />

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 25px rgba(16,185,129,0.2)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-violet-500 px-7 py-3 font-semibold text-[#04120f] shadow-lg shadow-emerald-500/10 transition-all"
                >
                  Send Message
                  <Send size={17} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#02080e] px-6 py-6 sm:px-10 lg:px-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <a
            className="text-2xl font-bold tracking-wider text-white"
            href="#home"
          >
            ELINA<span className="text-emerald-400">.</span>
          </a>

          <p className="text-center text-xs text-gray-500">
            Designed & built with React{" "}
            <span className="text-violet-400">♥</span> and a lot of curiosity.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-emerald-300"
          >
            Back to top
            <ArrowUpRight size={16} />
          </a>
        </div>
      </footer>
    </>
  );
}
