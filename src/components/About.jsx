
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ProfileOrbit from "./ProfileOrbit";

const particles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 13) % 100}%`,
  top: `${(i * 53 + 9) % 100}%`,
  size: 2 + (i % 3),
  duration: 5 + (i % 7),
  delay: -(i % 6),
}));

export default function About() {
  return (
    <section
      id="about"
      className="about-section section relative isolate w-full overflow-hidden bg-[#020504] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-20"
    >
      {/* ======================================
          ANIMATED BACKGROUND
      ====================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Main Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020807] via-[#090713] to-[#05030b]" />

        {/* Emerald Green Glow */}
        <motion.div
          className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-emerald-500/20 blur-[140px] sm:h-[28rem] sm:w-[28rem]"
          animate={{
            x: [0, 55, -25, 0],
            y: [0, -35, 30, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Violet Glow */}
        <motion.div
          className="absolute -right-40 top-[15%] h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[150px] sm:h-[34rem] sm:w-[34rem]"
          animate={{
            x: [0, -45, 30, 0],
            y: [0, 35, -25, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Bottom Green Glow */}
        <motion.div
          className="absolute -bottom-52 left-1/3 h-[420px] w-[420px] rounded-full bg-green-500/10 blur-[140px]"
          animate={{
            x: [0, 35, -30, 0],
            y: [0, -25, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-emerald-300"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              boxShadow: "0 0 12px rgba(52,211,153,0.8)",
            }}
            animate={{
              y: [0, -35, 15, 0],
              x: [0, 18, -12, 0],
              opacity: [0.1, 0.8, 0.25, 0.1],
              scale: [0.7, 1.4, 0.8, 0.7],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Moving Light Streaks */}
        {[0, 1, 2].map((item) => (
          <motion.div
            key={item}
            className="absolute h-px w-48 bg-gradient-to-r from-transparent via-violet-300/50 to-transparent sm:w-72"
            style={{ top: `${25 + item * 25}%` }}
            animate={{
              x: ["-30vw", "110vw"],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 12 + item * 4,
              delay: item * -4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Bottom Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020504]/70" />
      </div>

      {/* ======================================
          ABOUT CONTENT
      ====================================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl">

        {/* Heading */}
        <div className="relative z-10 mb-7 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mb-8 text-center"
          >
            <span className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-6xl font-black tracking-[12px] text-white/[0.025] sm:text-8xl lg:text-9xl">
              ABOUT
            </span>

            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs tracking-[3px] text-emerald-300">
              <Sparkles size={14} />
              GET TO KNOW ME
            </div>

            <h2 className="text-3xl font-bold tracking-[3px] text-white sm:text-5xl">
              <span className="text-emerald-400">—</span>{" "}
              ABOUT ME{" "}
              <span className="text-violet-400">—</span>
            </h2>
          </motion.div>
        </div>

        {/* Profile and About Details */}
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">

          <motion.div
            initial={{ opacity: 0, x: -45, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex min-h-[280px] w-full items-center justify-center sm:min-h-[350px]"
          >
            <ProfileOrbit />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="flex w-full flex-col items-start"
          >
            <h3 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              Learning. Building.
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-300 bg-clip-text text-transparent">
                Growing.
              </span>
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Hi, I'm{" "}
              <span className="font-semibold text-white">
                Sushree Elina Sahoo
              </span>
              , an MCA student and aspiring Software Developer passionate
              about creating modern digital experiences.
            </p>

            <p className="mt-3 leading-8 text-gray-400">
              I work with React, JavaScript, Tailwind CSS, Node.js, Python,
              and MongoDB. I enjoy developing responsive web applications
              and exploring AI to solve real-world problems.
            </p>

            <p className="mt-3 leading-8 text-gray-400">
              Through projects like ResuNova AI applications, I'm building
              practical skills in frontend development, backend integration,
              APIs, and data analysis. I'm always ready to learn, experiment,
              and turn ideas into working solutions.
            </p>

            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 30px rgba(139,92,246,0.35)",
              }}
              whileTap={{ scale: 0.97 }}
              className="mt-5 inline-flex rounded-xl border border-violet-400/40 bg-violet-500/10 px-6 py-3.5 font-medium text-violet-200 transition-colors hover:border-blue-400/70 hover:bg-blue-500/15"
            >
              Explore My Work ↗
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
