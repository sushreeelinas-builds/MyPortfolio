
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Users,
} from "lucide-react";

const items = [
  {
    icon: BriefcaseBusiness,
    title: "Python Full Stack Internship",
    org: "Qlith Innovation, Bhubaneswar",
    desc: "Practical training, technical guidance, project development, and mentorship.",
    date: "Internship Training",
    color: "from-emerald-400 to-green-600",
    glow: "group-hover:shadow-emerald-500/20",
  },
  {
    icon: BrainCircuit,
    title: "AI / ML Training",
    org: "Nirman Organization · GITAM Introduction",
    desc: "Learning Python, Artificial Intelligence, Machine Learning, and Deep Learning.",
    date: "AI & ML Training",
    color: "from-violet-400 to-purple-600",
    glow: "group-hover:shadow-violet-500/20",
  },
  {
    icon: Users,
    title: "Team Project Collaboration",
    org: "ResuNova AI · Team Alpha Intelligence",
    desc: "Collaborated on an AI-powered resume builder with a focus on development and teamwork.",
    date: "Project Development",
    color: "from-green-400 to-violet-600",
    glow: "group-hover:shadow-purple-500/20",
  },
];

function ExperienceBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Black, green and violet base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020807] via-[#090713] to-[#05030b]" />

      {/* Green glowing orb */}
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

      {/* Violet glowing orb */}
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

      {/* Bottom green-violet glow */}
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

      {/* Subtle grid */}
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020504]/70" />
    </div>
  );
}

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative isolate overflow-hidden bg-[#020504] px-5 py-20 text-white sm:px-8 lg:px-16"
    >
      <ExperienceBackground />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
            MY JOURNEY
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Experience &{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-violet-300 to-purple-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <motion.div
    initial={{ width: 0, opacity: 0 }}
    whileInView={{ width: 100, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.25 }}
    className="mx-auto mb-10 mt-5 h-1 rounded-full bg-gradient-to-r from-green-400 via-emerald-300 to-violet-500"
  />


        </motion.div>

        {/* Achievement cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 45, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.16,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                  scale: 1.025,
                  transition: { duration: 0.3 },
                }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b100f]/70 p-6 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-emerald-400/30 hover:bg-[#101714]/90 hover:shadow-2xl ${item.glow}`}
              >
                {/* Animated card glow */}
                <motion.div
                  animate={{ opacity: [0.15, 0.35, 0.15] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-violet-500/20 blur-3xl"
                />

                <div className="absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-500 group-hover:bg-emerald-400/20" />

                <div className="relative z-10">
                  {/* Icon and label */}
                  <div className="mb-7 flex items-center justify-between">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.12 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`flex h-13 w-13 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} p-3 shadow-lg`}
                    >
                      <Icon size={25} className="text-white" />
                    </motion.div>

                    <span className="rounded-full border border-violet-300/15 bg-violet-400/10 px-3 py-1.5 text-[10px] font-medium tracking-wide text-violet-200">
                      {item.date}
                    </span>
                  </div>

                  {/* Card content */}
                  <h3 className="text-lg font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-emerald-200">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-violet-300">
                    {item.org}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-gray-400">
                    {item.desc}
                  </p>

                  {/* Card footer */}
                  
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-emerald-400 via-violet-500 to-purple-500 transition-all duration-700 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
