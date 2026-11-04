
import { motion } from "framer-motion";
import {
  Code2,
  Atom,
  Database,
  FileCode2,
  Cpu,
  BrainCircuit,
  GitBranch,
  Braces,
} from "lucide-react";

const technologies = [
  { Icon: Code2, color: "#61DAFB", label: "React" },
  { Icon: FileCode2, color: "#F7DF1E", label: "JavaScript" },
  { Icon: Database, color: "#4ADE80", label: "MongoDB" },
  { Icon: Atom, color: "#61DAFB", label: "Web Development" },
  { Icon: Cpu, color: "#60A5FA", label: "Python" },
  { Icon: BrainCircuit, color: "#A78BFA", label: "AI / ML" },
  { Icon: GitBranch, color: "#FB923C", label: "Git" },
  { Icon: Braces, color: "#38BDF8", label: "Programming" },
];

export default function ProfileOrbit() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[600px] items-center justify-center">

      {/* Outer orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[80%] w-[80%] rounded-full border border-white/[0.08]"
      />

      {/* Inner orbit */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[60%] w-[60%] rounded-full border border-cyan-400/[0.10]"
      />

      {/* Center glow */}
      <div className="absolute h-[52%] w-[52%] rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Profile picture */}
      <motion.div
        initial={{ opacity: 0, scale: 0.65 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 h-[46%] w-[46%] rounded-full bg-gradient-to-br from-cyan-400 via-sky-400 to-violet-500 p-[3px] shadow-[0_0_25px_rgba(34,211,238,0.22)]"
      >
        <motion.img
          src="/sushree.png"
          alt="Sushree Elina Sahoo"
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-full w-full rounded-full border-2 border-[#111] bg-[#151515] object-cover object-top"
        />
      </motion.div>

      {/* Orbiting technology icons */}
      {technologies.map(({ Icon, color, label }, index) => {
        const angle = (index / technologies.length) * Math.PI * 2;
        const radius = 43;
        const x = 50 + radius * Math.sin(angle);
        const y = 50 - radius * Math.cos(angle);

        return (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -3, 0],
            }}
            transition={{
              opacity: { delay: index * 0.1, duration: 0.4 },
              scale: {
                delay: index * 0.1,
                duration: 0.4,
                type: "spring",
              },
              y: {
                delay: index * 0.12,
                duration: 2.5 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            title={label}
            className="absolute z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0b1518] shadow-lg transition-colors hover:border-cyan-400/60 sm:h-12 sm:w-12"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
          >
            <Icon size={21} color={color} strokeWidth={2} />
          </motion.div>
        );
      })}
    </div>
  );
}
