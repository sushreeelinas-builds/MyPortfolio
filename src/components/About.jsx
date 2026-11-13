
import ProfileOrbit from "./ProfileOrbit";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";


const particles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 13) % 100}%`,
  top: `${(i * 53 + 9) % 100}%`,
  size: 2 + (i % 3),
  duration: 5 + (i % 7),
  delay: -(i % 6),
}));


export default function About() {
  const reduceMotion = useReducedMotion();
  
  return (
    <section
      id="about"
      className="about-section section relative isolate w-full overflow-hidden bg-[#030107] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-20"
    >
      {/* ======================================
          ANIMATED NEON BACKGROUND
      ====================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Moving Neon Grid */}
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
          className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-emerald-500/20 blur-[140px] sm:h-[28rem] sm:w-[28rem]"
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

        {/* Center Neon Green Glow */}
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
        {particles.map((particle, i) => (
          <motion.span
            key={particle.id}
            className={`absolute rounded-full ${
              i % 2 === 0 ? "bg-emerald-300" : "bg-violet-300"
            }`}
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              boxShadow:
                i % 2 === 0
                  ? "0 0 12px rgba(52,211,153,0.8)"
                  : "0 0 12px rgba(167,139,250,0.8)",
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
            className={`absolute h-px w-48 bg-gradient-to-r from-transparent ${
              item % 2 === 0
                ? "via-emerald-300/50"
                : "via-violet-300/50"
            } to-transparent sm:w-72`}
            style={{
              top: `${25 + item * 25}%`,
            }}
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

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030107]/30 via-transparent to-[#030107]/80" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">

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

            <h2 className="text-3xl font-bold tracking-[3px] text-white sm:text-5xl">
              <span className="text-emerald-400">—</span>{" "}
              ABOUT ME{" "}
              <span className="text-violet-400">—</span>
            </h2>

            {/* Neon Underline */}
            
          </motion.div>
        </div>

        {/* Profile and About Details */}
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">

          {/* Profile Orbit */}
          <motion.div
            initial={{ opacity: 0, x: -45, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex min-h-[280px] w-full items-center justify-center sm:min-h-[350px]"
          >
            <ProfileOrbit />
          </motion.div>

          {/* About Information */}
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
              <span className="bg-gradient-to-r from-emerald-400 via-violet-400 to-purple-300 bg-clip-text text-transparent">
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

            {/* Explore Projects Button */}
            <motion.a
        href="#projects"
        whileHover={reduceMotion ? {} : { y: -4, scale: 1.03 }}
        whileTap={reduceMotion ? {} : { scale: 0.97 }}
        className="group mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-300 to-emerald-400 px-6 py-3.5 text-sm font-bold text-black shadow-[0_0_25px_rgba(74,222,128,0.12)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(74,222,128,0.3)]"
      >
        Explore My Work
        <ArrowUpRight size={17} />
      </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
