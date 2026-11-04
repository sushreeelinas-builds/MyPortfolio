
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  CalendarDays,
  MapPin,
  Award,
  School,
} from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    place: "GITAM, Bhubaneswar",
    period: "2025 – Present",
    detail:
      "Currently pursuing MCA with a focus on software development, programming, web technologies.",
    icon: GraduationCap,
    type: "Post Graduation",
    color: "from-violet-500 to-purple-600",
    status: "Currently Studying",
  },
  {
    degree: "Bachelor of Science (Chemistry)",
    place: "Adikavi Sarala Das (Degree) College, Tirtol",
    period: "2023 – 2025",
    icon: BookOpen,
    type: "Graduation",
    color: "from-emerald-400 to-green-600",
    status: "74%",
  },
  {
    degree: "Higher Secondary",
    place: "Adikavi Sarala Das (Degree) College, Tirtol",
    period: "2021 – 2022",
    icon: School,
    type: "Intermediate",
    color: "from-purple-400 to-violet-600",
    status: "79.83%",
  },
  {
    degree: "Matriculation",
    place: "Purna Chandra Government High School, Raghunathpur",
    period: "2019 – 2020",
    icon: Award,
    type: "Secondary Education",
    color: "from-green-400 to-emerald-600",
    status: "78%",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative isolate overflow-hidden bg-[#050505] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-20"
    >
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, 80, -40, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-600/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 60, 0],
            y: [0, -60, 100, 0],
            scale: [1, 0.8, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-40 h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[130px]"
        />

        <motion.div
          animate={{
            x: [0, 80, -80, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-500/10 blur-[110px]"
        />

        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* Same Home container alignment */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-green-400"
          >
            MY EDUCATION
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
          >
            My Educational{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-violet-500 bg-clip-text text-transparent">
              Journey.
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 100, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto mt-5 h-1 rounded-full bg-gradient-to-r from-green-400 via-emerald-300 to-violet-500"
          />
        </div>

        {/* Timeline */}
        <div className="relative mx-auto w-full max-w-4xl">

          {/* Timeline Line */}
          <div className="absolute bottom-10 left-[21px] top-10 w-[2px] bg-gradient-to-b from-green-400 via-violet-500 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {education.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.degree}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -60 : 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                  }}
                  className={`relative flex items-start gap-5 md:w-full ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                    }}
                    className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br ${item.color} shadow-[0_0_25px_rgba(34,197,94,0.2)] md:absolute md:left-1/2 md:-translate-x-1/2`}
                  >
                    <Icon size={21} className="text-white" />
                  </motion.div>

                  {/* Education Card */}
                  <div
                    className={`group w-full rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-green-400/40 hover:bg-white/[0.07] hover:shadow-[0_0_35px_rgba(34,197,94,0.12)] md:w-[44%] ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="mb-1 flex flex-wrap items-center justify-between gap-3">
                      <span
                        className={`rounded-full bg-gradient-to-r ${item.color} bg-clip-text text-sm font-bold text-transparent`}
                      >
                        {item.type}
                      </span>

                      <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-gray-300">
                        <CalendarDays size={11} />
                        {item.period}
                      </span>
                    </div>

                    <h3 className="mb-1 text-lg font-bold leading-snug text-white transition-colors group-hover:text-green-300 sm:text-xl">
                      {item.degree}
                    </h3>

                    <p className="mb-2 flex items-start gap-2 text-sm text-gray-400">
                      <MapPin
                        size={16}
                        className="mt-0.5 shrink-0 text-green-400"
                      />
                      {item.place}
                    </p>

                    {item.detail && (
                      <p className="text-sm leading-6 text-gray-400">
                        {item.detail}
                      </p>
                    )}

                    <div className="mt-2 flex items-center justify-between gap-2 border-t border-white/10 pt-2">
                      <span className="text-xs text-gray-500">
                        Academic Achievement
                      </span>

                      <span className="rounded-lg border border-green-400/20 bg-green-400/10 px-3 py-1.5 text-sm font-semibold text-green-300">
                        {item.status}
                      </span>
                    </div>

                    {/* Card Glow */}
                    <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-green-500/5 to-violet-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
