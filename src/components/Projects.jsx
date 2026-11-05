
import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

// ======================================
// PROJECT DATA
// ======================================

const projects = [
  {
    num: "01",
    type: "FRONTEND DEVELOPMENT",
    title: "Pizza Ordering Website",
    desc: "A modern responsive food ordering website featuring menu cards, special offers, and an interactive ordering experience.",
    stack: ["HTML", "Tailwind CSS", "JavaScript"],
    link: "https://pizzaorderingwebsite-virid.vercel.app/",
    github: "https://github.com/sushreeelinas-builds/Pizza_Ordering_Website",
    image: "/pizza.png",
    color: "from-emerald-400 to-indigo-500",
    glow: "rgba(52,211,153,0.35)",
  },
  {
    num: "02",
    type: "AI / FULL STACK",
    title: "ResuNova AI",
    desc: "An AI-powered resume builder designed to help users create, edit, and improve professional resumes with intelligent suggestions and a seamless workflow.",
    stack: ["React", "Node.js", "Express", "MongoDB", "AI API"],
    link: "https://resu-nova-ai-client.vercel.app/",
    github: "https://github.com/sushreeelinas-boop/resume-builder",
    image: "/resume.png",
    color: "from-teal-400 to-violet-500",
    glow: "rgba(45,212,191,0.35)",
  },
  {
    num: "03",
    type: "FRONTEND DEVELOPMENT",
    title: "Trivigo Hotel Search UI",
    desc: "A modern hotel discovery and comparison website featuring hotel listings, destination search, price comparisons, ratings, filters, and a responsive user interface.",
    stack: ["React.js", "Tailwind CSS", "JavaScript", "Vite"],
    link: "https://trivigo-hotel-search-ui.vercel.app/",
    github: "https://github.com/sushreeelinas-builds/Trivigo-Hotel-Search-UI",
    image: "/trivigo.png",
    color: "from-blue-400 to-violet-500",
    glow: "rgba(96,165,250,0.35)",
  },
];

// ======================================
// ANIMATED BACKGROUND
// ======================================

function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#020609] via-[#080b19] to-[#090416]" />

      <motion.div
        animate={{
          x: [0, 45, -20, 0],
          y: [0, -25, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-0 h-[350px] w-[350px] rounded-full bg-emerald-500/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -45, 25, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 top-10 h-[370px] w-[370px] rounded-full bg-violet-600/20 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, 25, -20, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-150px] left-[30%] h-[330px] w-[330px] rounded-full bg-blue-700/20 blur-[120px]"
      />

      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(16,185,129,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}

// ======================================
// PROJECT CARD
// ======================================

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      {/* GLOWING FRAME */}

      <div
        className={`absolute -inset-[1px] rounded-xl bg-gradient-to-br ${project.color} opacity-40 blur-[2px] transition-all duration-500 group-hover:opacity-100`}
      />

      {/* MAIN CARD */}

      <div
        className="relative min-h-[280px] overflow-hidden rounded-xl border border-white/15 bg-[#050b16] sm:min-h-[290px]"
        style={{
          boxShadow: `0 0 12px ${project.glow}`,
        }}
      >
        {/* BACKGROUND IMAGE */}

        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="
            absolute inset-0 h-full w-full object-cover
            opacity-80
            transition-all duration-700 ease-in-out
            group-hover:scale-105
            group-hover:brightness-[0.65]
            group-hover:blur-[1px]
          "
        />

        {/* BLACK GLASS BLUR OVERLAY */}

        <div
          className="
            pointer-events-none absolute inset-0 z-[1]
            bg-black/10
            transition-all duration-700
            group-hover:bg-black/35
            group-hover:backdrop-blur-[2px]
          "
        />

        {/* DEFAULT CARD CONTENT */}

        <div
          className="
            absolute inset-0 z-10 flex flex-col
            justify-between p-4
            transition-all duration-300
            group-hover:opacity-0
            group-hover:scale-95
            group-hover:pointer-events-none
          "
        >
          <div className="flex items-center justify-between">
            <span
              className={`rounded-full bg-gradient-to-r ${project.color} px-3 py-1 text-xs font-black text-white`}
            >
              {project.num}
            </span>

            <span className="rounded-full border border-teal-300/60 bg-black/30 px-3 py-1 text-[9px] font-bold tracking-wider text-white backdrop-blur-sm">
              {project.type}
            </span>
          </div>

          <div>
            <h3 className="text-xl font-extrabold text-white drop-shadow-lg sm:text-2xl">
              {project.title}
            </h3>

            

            <div
              className={`mt-3 h-[3px] w-12 rounded-full bg-gradient-to-r ${project.color}`}
            />
          </div>
        </div>

        {/* ======================================
            TRANSPARENT SLIDING DETAILS PANEL
        ====================================== */}

        <div
          className="
            absolute inset-0 z-20
            flex flex-col justify-between
            bg-transparent
            p-4
            transition-all duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            translate-x-0
            md:-translate-x-full
            md:group-hover:translate-x-0
            md:group-focus-within:translate-x-0
          "
        >
          {/* TOP DETAILS */}

          <div>
            <div className="flex items-center justify-between gap-2">
              <span
                className={`rounded-full bg-gradient-to-r ${project.color} px-3 py-1 text-xs font-black text-white`}
              >
                {project.num}
              </span>

              <span className="rounded-full border border-teal-300/70 bg-transparent px-3 py-1 text-[8px] font-bold tracking-wider text-white">
                {project.type}
              </span>
            </div>

            {/* TITLE */}

            <h3 className="mt-5 text-xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-2xl">
              {project.title}
            </h3>

            {/* DESCRIPTION */}

            <p className="mt-2 max-w-[95%] text-[11px] leading-relaxed text-white drop-shadow-md sm:text-xs">
              {project.desc}
            </p>

            {/* TECHNOLOGIES */}

            <div className="mt-4">
              <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-teal-300 drop-shadow-md">
                Technologies Used
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-teal-300/70 bg-black/10 px-2.5 py-1 text-[9px] font-medium text-white transition-all duration-300 hover:border-violet-400 hover:text-teal-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* BUTTONS */}

          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-white/40 pt-3">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 rounded-full bg-gradient-to-r ${project.color} px-4 py-2 text-[10px] font-bold text-white shadow-lg`}
            >
              <Code2 size={13} />
              Live Project
              <ArrowUpRight size={12} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-white/70 bg-transparent px-4 py-2 text-[10px] font-bold text-white transition-all duration-300 hover:border-teal-300 hover:text-teal-300"
            >
              <Code2 size={13} />
              GitHub
              <ArrowUpRight size={12} />
            </motion.a>
          </div>

          {/* LEFT ACCENT LINE */}

          <div
            className={`absolute bottom-0 left-0 top-0 w-[3px] bg-gradient-to-b ${project.color}`}
          />
        </div>

        {/* BOTTOM GLOW */}

        <div
          className={`absolute bottom-0 left-0 z-30 h-[2px] w-full bg-gradient-to-r ${project.color}`}
        />
      </div>
    </motion.div>
  );
}

// ======================================
// MAIN PROJECT SECTION
// ======================================

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-[#020609] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-20"
    >
      <AnimatedBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl">

        {/* SECTION HEADING */}

        <div className="mb-7 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-2 mt-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-teal-400 sm:text-xs"
          >
            SELECTED WORK
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-teal-300 via-cyan-200 to-violet-400 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:text-5xl"
          >
            Creative Work &{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 75, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto mt-3 h-[3px] rounded-full bg-gradient-to-r from-teal-400 to-violet-400"
          />
        </div>

        {/* PROJECT CARDS GRID */}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.num}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
