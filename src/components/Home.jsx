import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Code2,
} from "lucide-react";

const developerText = "Software Developer";

export default function Home() {
  const reduceMotion = useReducedMotion();

  const ballTransition = (duration, delay = 0) => ({
    duration: reduceMotion ? 0 : duration,
    delay,
    repeat: reduceMotion ? 0 : Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  });

  return (
    <section
      id="home"
      className="relative isolate min-h-screen w-full overflow-hidden bg-[#030304] px-6 pb-24 pt-28 text-white sm:px-10 lg:px-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.12] [background-image:linear-gradient(rgba(167,139,250,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,0.18)_1px,transparent_1px)] [background-size:55px_55px]"
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-violet-600/25 blur-[100px] sm:h-[600px] sm:w-[600px]"
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, -65, 0],
                y: [0, 80, 0],
                scale: [1, 1.15, 1],
              }
        }
        transition={ballTransition(12)}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-40 -z-10 h-[430px] w-[430px] rounded-full bg-green-700/25 blur-[110px] sm:h-[620px] sm:w-[620px]"
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, 90, 0],
                y: [0, -65, 0],
                scale: [1, 1.12, 1],
              }
        }
        transition={ballTransition(15, 1)}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-950/20 blur-[100px]"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

        <motion.div
          className="relative z-10 flex flex-col items-start"
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
           

          <p className="mb-3 mt- text-xs font-bold tracking-[5px] text-violet-300">
            HELLO, I'M
          </p>

          <h1 className="flex flex-col items-start text-5xl font-black leading-[1.08] tracking-[-0.07em] sm:text-6xl md:text-7xl xl:text-[5.5rem]">
            <motion.span
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 35, filter: "blur(10px)" }
              }
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-white"
            >
              Sushree Elina
            </motion.span>

            <motion.span
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 35, filter: "blur(10px)" }
              }
              animate={
                reduceMotion
                  ? { opacity: 1, y: 0 }
                  : {
                      opacity: 1,
                      y: [0, -3, 0],
                      filter: "blur(0px)",
                    }
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      opacity: { duration: 0.8, delay: 0.45 },
                      y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
              }
              className="bg-gradient-to-r from-violet-300 via-purple-400 to-green-300 bg-clip-text pb-2 pr-2 text-transparent drop-shadow-[0_0_25px_rgba(167,139,250,0.18)]"
            >
              Sahoo.
            </motion.span>
          </h1>

          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
            className="mt-5 text-base font-semibold leading-relaxed sm:text-xl"
          >
            <span className="text-white">MCA Student</span>
            <span className="mx-2 text-emerald-400">|</span>

            <motion.span className="inline-block text-emerald-400">
              {developerText.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={
                    reduceMotion
                      ? { opacity: 1 }
                      : { opacity: [0, 1, 1, 0] }
                  }
                  transition={{
                    duration: 2.5,
                    times: [0, 0.1, 0.75, 1],
                    delay: reduceMotion ? 0 : index * 0.12,
                    repeat: reduceMotion ? 0 : Infinity,
                    repeatDelay: 1,
                  }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.span>
          </motion.h2>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={reduceMotion ? {} : { y: -4, scale: 1.03 }}
              whileTap={reduceMotion ? {} : { scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-300 to-emerald-400 px-5 py-3.5 text-sm font-bold text-black shadow-[0_0_25px_rgba(74,222,128,0.12)] transition-shadow hover:shadow-[0_0_35px_rgba(74,222,128,0.3)]"
            >
              Explore My Work <ArrowUpRight size={17} />
            </motion.a>

           <motion.a
  href="#contact"
  whileHover={reduceMotion ? {} : { y: -4, scale: 1.03 }}
  whileTap={reduceMotion ? {} : { scale: 0.97 }}
  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-300 to-emerald-400 px-5 py-3.5 text-sm font-bold text-black shadow-[0_0_25px_rgba(74,222,128,0.12)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(74,222,128,0.3)]"
>
  Get In Touch
</motion.a>

            <motion.a
  href="/Sushree_Elina_Sahoo(CV).pdf"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={reduceMotion ? {} : { y: -4, scale: 1.03 }}
  whileTap={reduceMotion ? {} : { scale: 0.97 }}
  className="inline-flex items-center gap-2 rounded-xl border border-green-300/30 bg-green-400/[0.06] px-5 py-3.5 text-sm font-semibold text-green-300 shadow-[0_0_20px_rgba(74,222,128,0.05)] backdrop-blur-xl transition-all hover:border-green-300/60 hover:bg-green-400/15 hover:shadow-[0_0_25px_rgba(74,222,128,0.15)]"
>
  Resume
</motion.a>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-9 flex flex-wrap items-center gap-4 text-xs text-zinc-400"
          >
            <motion.a
              href="https://www.linkedin.com/in/sushree-elina-sahoo-038b51358/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              whileHover={reduceMotion ? {} : { y: -4 }}
              className="rounded-xl border border-violet-300/15 bg-white/[0.04] p-3 text-violet-200 transition-colors hover:border-violet-300/50 hover:text-white"
            >
              <Linkedin size={18} />
            </motion.a>

            <motion.a
              href="https://github.com/sushreeelinas-builds"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              whileHover={reduceMotion ? {} : { y: -4 }}
              className="rounded-xl border border-green-300/15 bg-white/[0.04] p-3 text-green-200 transition-colors hover:border-green-300/50 hover:text-white"
            >
              <Github size={18} />
            </motion.a>

            <span className="h-7 w-px bg-white/15" />

            <span>Based in Bhubaneswar, Odisha</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto flex min-h-[360px] w-full max-w-xl items-center justify-center lg:ml-auto sm:min-h-[430px]"
          initial={
            reduceMotion ? false : { opacity: 0, scale: 0.9, x: 30 }
          }
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <motion.div
            className="absolute h-64 w-64 rounded-full bg-violet-600/20 blur-[90px] sm:h-80 sm:w-80"
            animate={reduceMotion ? {} : { scale: [1, 1.2, 1] }}
            transition={ballTransition(7)}
          />

          <motion.div
            className="absolute h-48 w-48 rounded-full bg-green-600/15 blur-[80px]"
            animate={reduceMotion ? {} : { scale: [1.2, 1, 1.2] }}
            transition={ballTransition(8, 1)}
          />

          <motion.div
            animate={reduceMotion ? {} : { y: [0, -10, 0] }}
            transition={ballTransition(6)}
            className="relative z-10 w-full overflow-hidden rounded-2xl border border-violet-300/20 bg-[#0a0a0e]/80 shadow-[0_30px_100px_rgba(0,0,0,0.45),0_0_50px_rgba(139,92,246,0.08)] backdrop-blur-2xl"
          >
            <div className="flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.025] px-5 py-4">
              <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />

              <span className="ml-auto font-mono text-[11px] text-zinc-500">
                developer.jsx
              </span>
            </div>

            <div className="space-y-2.5 px-5 py-7 font-mono text-xs leading-relaxed text-zinc-300 sm:px-8 sm:py-9 sm:text-sm">
              <p>
                <span className="text-violet-300">const</span>{" "}
                developer = {"{"}
              </p>

              <p className="pl-5">
                name: <span className="text-green-300">"Elina"</span>,
              </p>

              <p className="pl-5">
                focus:{" "}
                <span className="text-green-300">"Web Development"</span>,
              </p>

              <p className="pl-5">
                interest:{" "}
                <span className="text-green-300">"Full Stack"</span>,
              </p>

              <p className="pl-5">
                learning: <span className="text-purple-300">true</span>,
              </p>

              <p>{"};"}</p>

              <br />

              <p>
                <span className="text-violet-300">return</span>{" "}
                <span className="text-green-300">"Let's build!"</span>;
              </p>
            </div>

            <div className="flex items-center gap-2 border-t border-white/[0.07] px-5 py-4 text-[10px] text-zinc-500 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" />
              Ready to create something useful
            </div>
          </motion.div>

          <motion.div
            animate={reduceMotion ? {} : { y: [0, -8, 0] }}
            transition={ballTransition(5)}
            className="absolute -right-1 top-6 z-20 flex items-center gap-2 rounded-xl border border-violet-300/20 bg-[#100d18]/90 px-3 py-3 text-[10px] font-semibold text-violet-100 shadow-xl backdrop-blur-xl sm:-right-4 sm:px-4 sm:text-xs"
          >
            <Code2 size={16} className="text-violet-300" />
            Creative Developer
          </motion.div>

          <motion.div
            animate={reduceMotion ? {} : { y: [0, 8, 0] }}
            transition={ballTransition(6, 1)}
            className="absolute -bottom-1 left-0 z-20 flex items-center gap-2 rounded-xl border border-green-300/20 bg-[#07120b]/90 px-3 py-3 text-[10px] font-semibold text-green-100 shadow-xl backdrop-blur-xl sm:-left-4 sm:px-4 sm:text-xs"
          >
            <span className="text-base text-green-300">✳</span>
            Learning by building
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-7 left-6 flex items-center gap-3 text-[9px] tracking-[2px] text-zinc-500 transition-colors hover:text-violet-200 sm:left-10 lg:left-20"
      >
        <span className="h-px w-8 bg-gradient-to-r from-violet-400 to-green-400" />
        SCROLL TO EXPLORE

        <motion.span
          animate={reduceMotion ? {} : { y: [0, 4, 0] }}
          transition={ballTransition(1.5)}
        >
          <ArrowDown size={13} />
        </motion.span>
      </motion.a>
    </section>
  );
}