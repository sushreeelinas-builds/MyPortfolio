
import { motion } from "framer-motion";
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
      className="about-section section relative isolate w-full overflow-hidden bg-[#050610] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(31, 34, 76, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(49, 36, 81, 0.5) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
            maskImage:
              "radial-gradient(ellipse at center, black 10%, transparent 80%)",
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

        <motion.div
          className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-blue-600/25 blur-[110px] sm:h-[28rem] sm:w-[28rem]"
          animate={{
            x: [0, 100, 35, 0],
            y: [0, -45, 70, 0],
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.5, 0.9, 0.55, 0.5],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-40 top-[15%] h-96 w-96 rounded-full bg-violet-600/25 blur-[130px] sm:h-[34rem] sm:w-[34rem]"
          animate={{
            x: [0, -90, -30, 0],
            y: [0, 80, -45, 0],
            scale: [1, 0.85, 1.15, 1],
            opacity: [0.45, 0.85, 0.55, 0.45],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute left-1/3 top-1/3 h-64 w-64 rounded-full bg-cyan-500/15 blur-[100px]"
          animate={{
            x: [-50, 80, -20, -50],
            y: [20, -70, 60, 20],
            scale: [0.9, 1.2, 0.8, 0.9],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-48 left-[25%] h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]"
          animate={{
            x: [0, 100, -40, 0],
            opacity: [0.25, 0.65, 0.3, 0.25],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-blue-300"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              boxShadow: "0 0 10px rgba(129,140,248,0.9)",
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

        <div className="absolute inset-0 bg-gradient-to-b from-[#050610]/30 via-transparent to-[#050610]/70" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="relative z-10 mb-7 px-4 text-center">
          <motion.p
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mb-1 mt-2 bg-gradient-to-r from-teal-300 via-cyan-200 to-violet-400 bg-clip-text text-xs font-semibold uppercase tracking-[0.35em] text-transparent"
>
  GET TO KNOW ME
</motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-teal-300 via-cyan-200 to-violet-400 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 100, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto mt-2 h-1 rounded-full bg-gradient-to-r from-teal-400 to-violet-400"
          />
        </div>

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
