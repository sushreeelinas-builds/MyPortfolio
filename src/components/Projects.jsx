
import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

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
      tabIndex={0}
    >

      <div
        className={`absolute -inset-[1px] rounded-xl bg-gradient-to-br ${project.color} opacity-40 blur-[2px] transition-all duration-500 group-hover:opacity-100`}
      />

      <div
        className="
          relative min-h-[290px]
          overflow-hidden rounded-xl
          border border-white/15
          bg-[#050b16]
          sm:min-h-[310px]
        "
        style={{
          boxShadow: `0 0 12px ${project.glow}`,
        }}
      >

        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="
            absolute inset-0
            h-full w-full object-cover
            opacity-90
            transition-all duration-700 ease-in-out
            group-hover:scale-105
            group-hover:brightness-[0.85]
          "
        />


        <div
          className="
            pointer-events-none absolute inset-0 z-[1]
            bg-black/10
            transition-all duration-700
            group-hover:bg-black/15
          "
        />


        <div
          className="
            absolute inset-0 z-10
            flex flex-col justify-between
            p-5
            transition-all duration-500
            group-hover:scale-95
            group-hover:opacity-0
            group-hover:pointer-events-none
          "
        >


          <div className="flex items-center justify-between">

            <span
              className={`rounded-full bg-gradient-to-r ${project.color} px-3 py-1 text-xs font-black text-white`}
            >
              {project.num}
            </span>

            <span className="rounded-full border border-emerald-300/60 bg-black/30 px-3 py-1 text-[9px] font-bold tracking-wider text-white backdrop-blur-sm">
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


        <div
          className="
            absolute inset-0 z-20
            flex flex-col items-center justify-center
            overflow-hidden rounded-xl
            p-5 text-center

            bg-gradient-to-t
            from-[#35166e]/85
            via-[#123b31]/55
            to-[#071a15]/15

            backdrop-blur-[2px]

            translate-y-0
            md:translate-y-full

            transition-transform
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]

            md:group-hover:translate-y-0
            md:group-focus-within:translate-y-0
          "
        >

          <div
            className="
              pointer-events-none absolute inset-0
              bg-gradient-to-br
              from-white/[0.06]
              via-transparent
              to-emerald-400/[0.08]
            "
          />


          <div
            className="
              pointer-events-none absolute
              -bottom-24 left-1/2
              h-52 w-80
              -translate-x-1/2
              rounded-full
              bg-violet-500/35
              blur-[85px]
            "
          />


          <div
            className="
              pointer-events-none absolute
              -right-20 top-0
              h-56 w-56
              rounded-full
              bg-emerald-500/20
              blur-[85px]
            "
          />
          <div
            className="
              pointer-events-none absolute
              -left-20 -top-20
              h-48 w-48
              rounded-full
              bg-violet-400/15
              blur-[80px]
            "
          />
          <div
            className="
              pointer-events-none absolute
              inset-x-8 top-0 h-px
              bg-gradient-to-r
              from-transparent
              via-white/50
              to-transparent
            "
          />

          <div
            className="
              relative z-10 mx-auto
              flex w-full max-w-lg
              flex-col items-center
              justify-center
            "
          >

            <span
              className={`mb-3 rounded-full bg-gradient-to-r ${project.color} px-3 py-1 text-[10px] font-black text-white shadow-lg`}
            >
              {project.num} / PROJECT
            </span>

            <h3
              className="
                text-2xl font-extrabold
                leading-tight text-white
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]
                sm:text-3xl
              "
            >
              {project.title}
            </h3>
            <p
              className="
                mt-3 max-w-[95%]
                text-xs font-semibold
                leading-relaxed text-white
                drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]
                sm:text-sm
              "
            >
              {project.desc}
            </p>


            <div className="mt-4 flex flex-wrap justify-center gap-1.5">

              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border border-white/50
                    bg-[#071b16]/20
                    px-2.5 py-1
                    text-[9px] font-semibold
                    text-white shadow-sm
                    backdrop-blur-md
                    transition-all duration-300
                    hover:border-violet-300
                    hover:bg-violet-500/30
                  "
                >
                  {tech}
                </span>
              ))}

            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">

              <motion.a
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live project`}
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-full
                  border border-white/80
                  bg-white
                  text-[#3d246d]
                  shadow-xl shadow-black/20
                  transition-all duration-300
                  hover:bg-[#17102b]
                  hover:text-white
                  sm:h-12 sm:w-12
                "
              >
                <ArrowUpRight size={22} />
              </motion.a>


              <motion.a
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} GitHub repository`}
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-full
                  border border-white/80
                  bg-white/10
                  text-white
                  shadow-xl shadow-black/20
                  backdrop-blur-md
                  transition-all duration-300
                  hover:bg-white
                  hover:text-[#174b36]
                  sm:h-12 sm:w-12
                "
              >
                <Code2 size={20} />
              </motion.a>

            </div>

            <div
              className="
                mt-2 flex items-center gap-6
                text-[9px] font-bold
                uppercase tracking-wider
                text-white drop-shadow-md
              "
            >
              <span>Live Preview</span>
              <span>Source Code</span>
            </div>

          </div>

          <div
            className="
              pointer-events-none absolute
              bottom-0 left-0 h-[3px] w-full
              bg-gradient-to-r
              from-emerald-400
              via-violet-300
              to-emerald-400
              shadow-[0_0_15px_rgba(167,139,250,0.7)]
            "
          />

        </div>

        <div
          className={`absolute bottom-0 left-0 z-30 h-[2px] w-full bg-gradient-to-r ${project.color}`}
        />

      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative isolate overflow-hidden
        bg-[#020609]
        px-6 py-10 text-white
        sm:px-10 sm:py-12
        lg:px-20
      "
    >

      <AnimatedBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl">

        <div className="mb-7 text-center">

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              mb-2 mt-2
              text-[10px] font-semibold
              uppercase tracking-[0.35em]
              text-teal-400 sm:text-xs
            "
          >
            SELECTED WORK
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              bg-gradient-to-r
              from-teal-300 via-cyan-200
              to-violet-400
              bg-clip-text
              text-3xl font-extrabold
              tracking-tight text-transparent
              sm:text-4xl lg:text-5xl
            "
          >
            Creative Work &{" "}
            <span
              className="
                bg-gradient-to-r
                from-emerald-300
                via-violet-400
                to-blue-400
                bg-clip-text text-transparent
              "
            >
              Projects
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 75, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="
              mx-auto mt-3 h-[3px]
              rounded-full
              bg-gradient-to-r
              from-teal-400 to-violet-400
            "
          />

        </div>

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
