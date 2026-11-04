
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

// PROJECT DATA
const projects = [

  {
    num: "01",
    type: "FRONTEND DEVELOPMENT",
    title: "Pizza Ordering Website",
    desc: "A modern responsive food ordering website featuring menu cards, special offers, and an interactive ordering experience.",
    stack: ["HTML", "Tailwind CSS", "JavaScript"],
    link: "https://pizzaorderingwebsite-virid.vercel.app/",
    image:
      "/pizza.png",
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
    image: "/resume.png",
    color: "from-teal-400 to-violet-500",
    glow: "rgba(45,212,191,0.35)",
  },
 
  
];

// ANIMATED BACKGROUND
function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#020609] via-[#080b19] to-[#090416]" />

      <motion.div
        animate={{
          x: [0, 65, -30, 0],
          y: [0, -35, 30, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-0 h-[460px] w-[460px] rounded-full bg-emerald-500/20 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -60, 30, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-violet-600/20 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, 35, -25, 0],
          y: [0, -30, 25, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-180px] left-[30%] h-[430px] w-[430px] rounded-full bg-blue-700/20 blur-[140px]"
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
        className="absolute inset-0 opacity-[0.15]"
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

// PROJECT CARD
function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
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
        className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${project.color} opacity-50 blur-[2px] transition duration-500 group-hover:opacity-100`}
      />

      {/* MAIN CARD */}
      <div
        className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/15 bg-[#050b16] sm:min-h-[330px]"
        style={{
          boxShadow: `0 0 15px ${project.glow}`,
        }}
      >
        {/* BACKGROUND IMAGE */}
        <motion.img
          src={project.image}
          alt={`${project.title} background`}
          loading="lazy"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#050b18]/30 to-[#050b18]/0" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#020609]/90 via-transparent to-[#020609]/0" />

        {/* CARD CONTENT */}
        <div className="relative z-10 flex min-h-[320px] flex-col justify-between p-4 sm:min-h-[330px] sm:p-5">

          {/* TOP */}
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full bg-gradient-to-r ${project.color} px-3 py-1 text-sm font-black text-white`}
            >
              {project.num}
            </span>

            <span className="rounded-full border border-teal-300/30 bg-[#06121b]/80 px-3 py-1.5 text-[9px] font-bold tracking-wider text-teal-300 backdrop-blur-md">
              {project.type}
            </span>
          </div>

          {/* PROJECT INFORMATION */}
          <div className="mt-20 max-w-[90%] sm:max-w-[80%]">

            {/* TITLE */}
            <h3 className="text-xl font-extrabold leading-tight text-white transition group-hover:text-teal-300 sm:text-2xl">
              {project.title}
            </h3>

           
            {/* TECHNOLOGIES */}
            <div className="mt-2">
              <p className="mb-2 text-[9px] font-bold uppercase tracking-widest text-teal-300">
                Technologies
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-teal-400/40 bg-[#06111c]/80 px-2.5 py-1 text-[9px] text-white backdrop-blur-md transition hover:border-violet-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt- flex flex-wrap gap-2 border-t border-white/10 pt-3">

            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-1.5 rounded-full bg-gradient-to-r ${project.color} px-4 py-2 text-[10px] font-bold text-white shadow-lg`}
            >
              <Github size={13} />
              View Project
              <ArrowUpRight size={13} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/sushreeelinas-builds/Pizza_Ordering_Website"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-white/40 bg-black/50 px-4 py-2 text-[10px] font-bold text-white backdrop-blur-md transition hover:border-teal-400 hover:text-teal-300"
            >
              <Github size={13} />
              GitHub
              <ArrowUpRight size={13} />
            </motion.a>

          </div>
        </div>

        {/* BOTTOM GLOW */}
        <div
          className={`absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r ${project.color}`}
        />
      </div>
    </motion.div>
  );
}

// MAIN PROJECT SECTION
export default function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-[#020609] px-5 py-16 text-white sm:px-10 lg:px-16"
    >
      <AnimatedBackground />

      <div className="relative z-10 mx-auto max-w-[1210px]">

        {/* SECTION HEADING */}
        <div className="mb-12 text-center">

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-teal-400"
          >
            SELECTED WORK
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-teal-300 via-cyan-200 to-violet-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl"
          >
            Creative Work &{" "}
    <span className="bg-gradient-to-r from-emerald-300 via-violet-400 to-blue-400 bg-clip-text text-transparent">
      Projects
    </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 100, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto mt-5 h-1 rounded-full bg-gradient-to-r from-teal-400 to-violet-400"
          />

        </div>

        {/* COMPACT PROJECT CARDS GRID */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
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
