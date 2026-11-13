
import { motion, useReducedMotion } from "framer-motion";import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";

const contactEmail = "sushreeelinas@gmail.com";

export default function Contact() {
  const reduceMotion = useReducedMotion();
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
        className="relative isolate overflow-hidden bg-[#030107] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-20"
      >
        {/* Animated Neon Background */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

          {/* Moving Grid */}
          <motion.div
            className="absolute inset-0 opacity-[0.09]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(16,185,129,0.35) 1px, transparent 1px),
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

          {/* Left Neon Green Orb */}
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

          {/* Right Neon Violet Orb */}
          <motion.div
            className="absolute -right-40 top-10 h-[30rem] w-[30rem] rounded-full bg-violet-600/25 blur-[140px]"
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

          {/* Bottom Violet Orb */}
          <motion.div
            className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-violet-700/20 blur-[130px]"
            animate={{
              x: [0, 70, -40, 0],
              y: [0, -40, 30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Center Green Glow */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]"
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating Neon Particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute h-1 w-1 rounded-full ${
                i % 2 === 0
                  ? "bg-emerald-400 shadow-[0_0_12px_#34d399]"
                  : "bg-violet-400 shadow-[0_0_12px_#a78bfa]"
              }`}
              style={{
                left: `${(i * 17 + 8) % 100}%`,
                top: `${(i * 23 + 12) % 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2],
                scale: [0.7, 1.5, 0.7],
              }}
              transition={{
                duration: 4 + (i % 4),
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030107]/30 via-transparent to-[#030107]/80" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mb-10 text-center"
          >
            <span className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-6xl font-black tracking-[12px] text-white/[0.025] sm:text-8xl lg:text-9xl">
              CONTACT
            </span>

            <h2 className="text-3xl font-bold tracking-[3px] text-white sm:text-5xl">
              <span className="text-emerald-400">—</span>{" "}
              CONTACT ME{" "}
              <span className="text-violet-400">—</span>
            </h2>

           
          </motion.div>

          {/* Contact Cards */}
          <div className="grid w-full gap-5 lg:grid-cols-[0.8fr_1.7fr]">

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{
                y: -5,
                boxShadow: "0 0 35px rgba(16,185,129,0.12)",
              }}
              className="rounded-2xl border border-emerald-400/20 bg-[#090613]/80 p-5 shadow-[0_0_35px_rgba(16,185,129,0.06)] backdrop-blur-xl transition-all duration-300 sm:p-7"
            >
              <div className="mb-7">
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

              <div className="mb-7">
                <h3 className="mb-3 border-l-2 border-violet-400 pl-4 text-lg font-semibold text-white">
                  Contact
                </h3>

                <div className="pl-4 text-sm leading-7 text-gray-400">
                  7326057454
                </div>
              </div>

              <div>
                <h3 className="mb-4 border-l-2 border-emerald-400 pl-4 text-lg font-semibold text-white">
                  Connect With Me
                </h3>

                <div className="flex gap-3 pl-4">
                  <motion.a
                    href="https://www.linkedin.com/in/sushree-elina-sahoo-038b51358/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    whileHover={{ y: -5, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-500/15 hover:text-blue-300 hover:shadow-[0_0_18px_rgba(59,130,246,0.2)]"
                  >
                    <Linkedin size={19} />
                  </motion.a>

                  <motion.a
                    href="https://github.com/sushreeelinas-builds"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    whileHover={{ y: -5, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-500/15 hover:text-violet-300 hover:shadow-[0_0_18px_rgba(139,92,246,0.25)]"
                  >
                    <Github size={19} />
                  </motion.a>

                  <motion.a
                    href={`mailto:${contactEmail}`}
                    aria-label="Email"
                    whileHover={{ y: -5, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-emerald-400/60 hover:bg-emerald-500/15 hover:text-emerald-300 hover:shadow-[0_0_18px_rgba(16,185,129,0.25)]"
                  >
                    <Mail size={19} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              whileHover={{
                boxShadow: "0 0 35px rgba(139,92,246,0.12)",
              }}
              className="rounded-2xl border border-violet-400/20 bg-[#090613]/80 p-5 shadow-[0_0_35px_rgba(139,92,246,0.06)] backdrop-blur-xl transition-all duration-300 sm:p-7"
            >
              <h3 className="mb-5 border-l-2 border-violet-400 pl-4 text-xl font-semibold text-white">
                Get In Touch
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    required
                    className="w-full rounded-lg border border-white/10 bg-[#100b1b]/90 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/10 focus:shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    className="w-full rounded-lg border border-white/10 bg-[#100b1b]/90 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/10 focus:shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#100b1b]/90 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/10"
                />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your message *"
                  required
                  className="w-full resize-y rounded-lg border border-white/10 bg-[#100b1b]/90 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/10"
                />

                <motion.button
  type="submit"
  whileHover={reduceMotion ? {} : { y: -4, scale: 1.03 }}
  whileTap={reduceMotion ? {} : { scale: 0.97 }}
  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-green-300 to-emerald-400 px-7 py-3.5 text-sm font-bold text-black shadow-[0_0_25px_rgba(74,222,128,0.12)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(74,222,128,0.3)]"
>
  Send Message
  <Send
    size={17}
    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  />
</motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-violet-500/20 bg-[#030107] px-6 py-6 sm:px-10 lg:px-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-500/[0.04] via-transparent to-violet-500/[0.06]" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
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
