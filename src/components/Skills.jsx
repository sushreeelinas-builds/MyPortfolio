
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import {
  FaPython,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiMysql,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: FaPython },
  { name: "Node.js", icon: FaNodeJs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "React", icon: SiReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "MySQL", icon: SiMysql },
  { name: "Express.js", icon: SiExpress },
  { name: "Git", icon: FaGitAlt },
];

const particles = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 53 + 7) % 100}%`,
  size: 2 + (i % 4),
  duration: 5 + (i % 6),
  delay: -(i % 7),
}));

function SkillRow() {
  const items = [...skills, ...skills];

  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {items.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={`${skill.name}-${index}`}
              whileHover={{ y: -7, scale: 1.12 }}
              transition={{ duration: 0.2 }}
              className="group flex w-[105px] shrink-0 flex-col items-center justify-center gap-3 py-6 sm:w-[125px]"
            >
              <Icon className="h-10 w-10 text-3xl text-teal-400 transition-all duration-300 group-hover:text-lime-300 group-hover:drop-shadow-[0_0_15px_rgba(163,255,18,0.8)] sm:text-4xl" />

              <span className="whitespace-nowrap text-xs text-teal-100/70 transition-colors group-hover:text-white">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

// ======================================
// ANIMATED SKILLS BACKGROUND
// ======================================

function SkillsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Main Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020807] via-[#090713] to-[#05030b]" />

      {/* Emerald Green Glow */}
      <motion.div
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
        className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-emerald-500/20 blur-[140px]"
      />

      {/* Violet Glow */}
      <motion.div
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
        className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[150px]"
      />

      {/* Bottom Green Glow */}
      <motion.div
        animate={{
          x: [0, 35, -30, 0],
          y: [0, -25, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-52 left-1/3 h-[420px] w-[420px] rounded-full bg-green-500/10 blur-[140px]"
      />

      {/* Moving Emerald-Violet Grid */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "48px 48px"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.2) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Bottom Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020504]/70" />
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative isolate w-full overflow-hidden bg-[#020504] py-15 text-white sm:py-29"
    >

      {/* Background */}
      <SkillsBackground />

      {/* Heading */}
      <div className="relative z-10 mb-20 px-4 text-center mt-10">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-8 text-center"
        >
          <span className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-6xl font-black tracking-[12px] text-white/[0.025] sm:text-8xl lg:text-9xl">
            SKILL
          </span>

          

          <h2 className="text-3xl font-bold tracking-[3px] text-white sm:text-5xl">
            <span className="text-emerald-400">—</span>{" "}
            MY SKILLS{" "}
            <span className="text-violet-400">—</span>
          </h2>
        </motion.div>

        {/* Old heading design preserved */}
        {/* 
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 mt-10 text-xs font-semibold uppercase tracking-[0.35em] text-teal-400"
        >
          TECH STACK
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-teal-300 via-cyan-200 to-violet-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl"
        >
          My Skills
        </motion.h2>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 100, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-5 h-1 rounded-full bg-gradient-to-r from-teal-400 to-violet-400"
        />
        */}

      </div>

      {/* Scrolling Skills */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 border-y border-teal-300/10 bg-white/[0.025] py-3 shadow-[0_0_60px_rgba(45,212,191,0.04)] backdrop-blur-sm"
      >
        <SkillRow />
      </motion.div>

      {/* Bottom Animated Line */}
      <motion.div
        className="mx-auto mt-10 h-px w-3/4 bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"
        animate={{ opacity: [0.25, 0.8, 0.25] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

    </section>
  );
}
