import { motion } from "framer-motion";
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

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative isolate w-full overflow-hidden bg-[#030708] py-15 text-white sm:py-19"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(45,212,191,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "48px 48px"] }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 -z-10 h-72 w-72 rounded-full bg-teal-500/20 blur-[100px] sm:h-96 sm:w-96"
        animate={{
          x: [0, 100, 35, 0],
          y: [0, 70, 130, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 -z-10 h-72 w-72 rounded-full bg-violet-500/15 blur-[110px] sm:h-96 sm:w-96"
        animate={{
          x: [0, -90, -35, 0],
          y: [0, 100, 40, 0],
          scale: [1, 0.85, 1.2, 1],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-64 w-64 rounded-full bg-lime-400/10 blur-[100px]"
        animate={{
          x: [-80, 100, -80],
          y: [20, -70, 20],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-teal-300"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              boxShadow: "0 0 12px rgba(45,212,191,0.8)",
            }}
            animate={{
              y: [0, -35, 10, 0],
              x: [0, 15, -12, 0],
              opacity: [0.15, 0.8, 0.25, 0.15],
              scale: [0.8, 1.4, 0.9, 0.8],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mb-10 px-4 text-center">
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

      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 border-y border-teal-300/10 bg-white/[0.025] py-3 shadow-[0_0_60px_rgba(45,212,191,0.04)] backdrop-blur-sm"
      >
        <SkillRow />
      </motion.div>

      <motion.div
        className="mx-auto mt-10 h-px w-3/4 bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"
        animate={{ opacity: [0.25, 0.8, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}