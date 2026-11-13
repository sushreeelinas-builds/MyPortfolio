
import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, RefreshCw, Github } from "lucide-react";

const USERNAME = "sushreeelinas-builds";

const CONTRIBUTION_API = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;
const GITHUB_API = `https://api.github.com/users/${USERNAME}`;

const STREAK_IMAGE = `https://streak-stats.demolab.com/?user=${USERNAME}&theme=dark&hide_border=true&background=030107&ring=4ade80&fire=a78bfa&currStreakLabel=4ade80&sideNums=a78bfa&sideLabels=4ade80&dates=FFFFFF&border_radius=10`;

const getContributionLevel = (count, maxCount) => {
  if (count === 0) return 0;

  const ratio = count / Math.max(maxCount, 1);

  if (ratio <= 0.25) return 1;
  if (ratio <= 0.5) return 2;
  if (ratio <= 0.75) return 3;

  return 4;
};

const getCalendarWeeks = (contributions) => {
  if (!contributions.length) return [];

  const firstDate = new Date(`${contributions[0].date}T00:00:00`);
  const lastDate = new Date(
    `${contributions[contributions.length - 1].date}T00:00:00`
  );

  const start = new Date(firstDate);
  start.setDate(start.getDate() - start.getDay());

  const weeks = [];
  let currentWeek = [];

  const contributionMap = new Map(
    contributions.map((day) => [day.date, day])
  );

  const cursor = new Date(start);

  while (cursor <= lastDate || currentWeek.length > 0) {
    const dateKey = [
      cursor.getFullYear(),
      String(cursor.getMonth() + 1).padStart(2, "0"),
      String(cursor.getDate()).padStart(2, "0"),
    ].join("-");

    const day = contributionMap.get(dateKey);

    currentWeek.push({
      date: dateKey,
      count: day?.count || 0,
      level: day?.level || 0,
    });

    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];

      if (cursor >= lastDate) break;
    }

    cursor.setDate(cursor.getDate() + 1);

    if (cursor > lastDate && currentWeek.length === 0) break;
  }

  return weeks;
};

export default function GitHubActivity() {
  const reduceMotion = useReducedMotion();

  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Neon background animation
  const ballTransition = (duration, delay = 0) => ({
    duration: reduceMotion ? 0 : duration,
    delay,
    repeat: reduceMotion ? 0 : Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  });

  // Fetch GitHub activity
  const fetchGitHubData = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const [contributionResponse, profileResponse] =
        await Promise.all([
          fetch(CONTRIBUTION_API),
          fetch(GITHUB_API),
        ]);

      if (!contributionResponse.ok) {
        throw new Error("Unable to load contributions.");
      }

      if (!profileResponse.ok) {
        throw new Error("Unable to load profile.");
      }

      const contributionData = await contributionResponse.json();

      await profileResponse.json();

      setContributions(contributionData.contributions || []);
    } catch (err) {
      setError(
        "GitHub activity is temporarily unavailable. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGitHubData();
  }, [fetchGitHubData]);

  // Total contributions
  const totalContributions = useMemo(
    () => contributions.reduce((sum, day) => sum + day.count, 0),
    [contributions]
  );

  // Maximum contributions
  const maxContribution = useMemo(
    () => Math.max(0, ...contributions.map((day) => day.count)),
    [contributions]
  );

  // Calendar weeks
  const weeks = useMemo(
    () => getCalendarWeeks(contributions),
    [contributions]
  );

  // Month labels
  const monthLabels = useMemo(() => {
    const labels = [];

    weeks.forEach((week, index) => {
      const firstDay = week.find((day) => {
        return new Date(`${day.date}T00:00:00`).getDate() === 1;
      });

      if (firstDay) {
        const date = new Date(`${firstDay.date}T00:00:00`);

        labels.push({
          index,
          label: date.toLocaleString("en-US", {
            month: "short",
          }),
        });
      }
    });

    return labels;
  }, [weeks]);

  // Neon green contribution colors
  const levelColors = [
    "bg-[#171322]",
    "bg-[#123b2b]",
    "bg-[#087a43]",
    "bg-[#22c55e]",
    "bg-[#86efac]",
  ];

  const getLevel = (day) => {
    if (day.count === 0) return 0;

    if (day.level >= 1 && day.level <= 4) {
      return day.level;
    }

    return getContributionLevel(day.count, maxContribution);
  };

  const formattedDate = (date) =>
    new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  return (
    <section
      id="github-activity"
      className="
        relative isolate w-full overflow-hidden
        bg-[#030107]
        px-6 py-10 text-white
        sm:px-10 sm:py-12
        lg:px-20
      "
    >
      {/* DEEP BLACK AND VIOLET BASE */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-30
          bg-gradient-to-br
          from-[#030107]
          via-[#090516]
          to-[#020906]
        "
      />

      {/* NEON GRID */}

      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? {}
            : {
                backgroundPosition: [
                  "0px 0px",
                  "50px 50px",
                ],
              }
        }
        transition={{
          duration: 15,
          repeat: reduceMotion ? 0 : Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none absolute inset-0 -z-20
          opacity-[0.16]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(74,222,128,0.22) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167,139,250,0.22) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* VIOLET NEON ORB */}

      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, 80, -35, 0],
                y: [0, 45, -25, 0],
                scale: [1, 1.2, 0.9, 1],
                opacity: [0.35, 0.6, 0.4, 0.35],
              }
        }
        transition={ballTransition(17)}
        className="
          pointer-events-none absolute
          -left-40 -top-20 -z-10
          h-[420px] w-[420px]
          rounded-full bg-violet-700/30
          blur-[130px]
        "
      />

      {/* GREEN NEON ORB */}

      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, -70, 35, 0],
                y: [0, 55, -30, 0],
                scale: [1, 1.15, 0.9, 1],
                opacity: [0.3, 0.55, 0.35, 0.3],
              }
        }
        transition={ballTransition(19, 1)}
        className="
          pointer-events-none absolute
          -right-40 top-0 -z-10
          h-[450px] w-[450px]
          rounded-full bg-green-500/25
          blur-[140px]
        "
      />

      {/* BOTTOM VIOLET GLOW */}

      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, 45, -30, 0],
                y: [0, -35, 25, 0],
                scale: [1, 1.15, 0.95, 1],
              }
        }
        transition={ballTransition(16, 2)}
        className="
          pointer-events-none absolute
          bottom-[-180px] left-[30%] -z-10
          h-[400px] w-[400px]
          rounded-full bg-violet-600/20
          blur-[130px]
        "
      />

      {/* CENTER NEON GLOW */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-1/2 -z-10
          h-[300px] w-[300px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full bg-green-500/[0.07]
          blur-[120px]
        "
      />

      {/* FLOATING VIOLET PARTICLE */}

      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? {}
            : {
                y: [0, -22, 0],
                x: [0, 12, 0],
                scale: [1, 1.2, 1],
              }
        }
        transition={ballTransition(6)}
        className="
          pointer-events-none absolute
          left-[8%] top-20
          h-8 w-8 rounded-full
          bg-violet-400/80
          shadow-[0_0_25px_8px_rgba(167,139,250,0.45)]
          blur-[1px]
        "
      />

      {/* FLOATING GREEN PARTICLE */}

      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? {}
            : {
                y: [0, 20, 0],
                x: [0, -12, 0],
                scale: [1, 1.25, 1],
              }
        }
        transition={ballTransition(7, 1)}
        className="
          pointer-events-none absolute
          right-[9%] top-28
          h-7 w-7 rounded-full
          bg-green-400/90
          shadow-[0_0_30px_8px_rgba(74,222,128,0.45)]
          blur-[1px]
        "
      />

      {/* MAIN CONTAINER - PROJECTS ALIGNMENT */}

      <div className="relative z-10 mx-auto w-full max-w-7xl">

        {/* SECTION HEADING */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-20 text-center"
        >
          <span
            className="
              absolute left-1/2 top-1/2 -z-10
              -translate-x-1/2 -translate-y-1/2
              whitespace-nowrap
              text-6xl font-black tracking-[12px]
              text-white/[0.035]
              sm:text-8xl lg:text-9xl 
            "
          >
            GITHUB
          </span>

          <h2 className="
            text-2xl font-bold tracking-[2px]
            text-white sm:text-4xl  lg:text-5xl
          ">
            <span className="text-green-400 drop-shadow-[0_0_12px_rgba(74,222,128,0.8)]">
              —
            </span>{" "}
            GITHUB ACTIVITY{" "}
            <span className="text-violet-400  drop-shadow-[0_0_12px_rgba(167,139,250,0.8)]">
              —
            </span>
          </h2>

          
        </motion.div>

        {/* CONTRIBUTION CALENDAR */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="
            group relative overflow-hidden rounded-xl
            border border-violet-500/25
            bg-[#080510]/85
            p-3 sm:p-5
            shadow-[0_0_25px_rgba(139,92,246,0.08),0_20px_70px_rgba(0,0,0,0.5)]
            backdrop-blur-2xl
            transition-all duration-500
            hover:border-green-400/50
            hover:shadow-[0_0_30px_rgba(74,222,128,0.12)]
          "
        >
          {/* CARD NEON TOP LINE */}

          <div className="
            pointer-events-none absolute left-0 top-0 h-[2px] w-full
            bg-gradient-to-r from-transparent via-violet-400 to-green-400
            opacity-70
          " />

          {/* CARD VIOLET GLOW */}

          <div className="
            pointer-events-none absolute -right-16 -top-16
            h-40 w-40 rounded-full
            bg-violet-600/20 blur-[70px]
          " />

          {/* CARD GREEN GLOW */}

          <div className="
            pointer-events-none absolute -bottom-20 -left-16
            h-40 w-40 rounded-full
            bg-green-500/10 blur-[70px]
          " />

          {/* CALENDAR HEADER */}

          <div className="relative mb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-sm font-semibold text-zinc-100 sm:text-base">
                {loading
                  ? "Loading GitHub activity..."
                  : `${totalContributions.toLocaleString()} contributions in the last year`}
              </h3>

              <p className="mt-1 text-[10px] text-green-300/70 sm:text-xs">
                @{USERNAME}
              </p>
            </div>

            <button
              type="button"
              onClick={fetchGitHubData}
              disabled={loading}
              className="
                flex items-center gap-1.5 rounded-lg
                border border-violet-400/25
                bg-violet-500/[0.06]
                px-2.5 py-1.5 text-[10px] text-zinc-300
                transition-all duration-300
                hover:border-green-400/60
                hover:bg-green-400/10
                hover:text-green-300
                hover:shadow-[0_0_15px_rgba(74,222,128,0.15)]
                disabled:opacity-50 sm:text-xs
              "
            >
              <RefreshCw
                size={12}
                className={loading ? "animate-spin" : ""}
              />
              Refresh
            </button>
          </div>

          {/* LOADING / ERROR / CALENDAR */}

          {error ? (
            <div className="
              rounded-lg border border-red-400/20
              bg-red-400/5 p-5 text-center
            ">
              <p className="text-xs text-red-300">{error}</p>

              <button
                onClick={fetchGitHubData}
                className="mt-2 text-xs text-green-300 underline"
              >
                Try again
              </button>
            </div>
          ) : loading ? (
            <div className="flex h-24 items-center justify-center">
              <RefreshCw
                className="animate-spin text-violet-400"
                size={23}
              />
            </div>
          ) : (
            <>
              {/* CALENDAR GRID */}

              <div className="overflow-x-auto pb-2">
                <div className="min-w-[560px]">

                  {/* MONTH LABELS */}

                  <div
                    className="mb-1.5 grid gap-[3px]"
                    style={{
                      gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))`,
                    }}
                  >
                    {weeks.map((_, index) => {
                      const month = monthLabels.find(
                        (item) => item.index === index
                      );

                      return (
                        <div
                          key={index}
                          className="
                            h-4 whitespace-nowrap
                            text-[9px] text-zinc-500 sm:text-[10px]
                          "
                        >
                          {month?.label}
                        </div>
                      );
                    })}
                  </div>

                  {/* CONTRIBUTION SQUARES */}

                  <div className="grid grid-cols-[22px_1fr] gap-1.5">
                    <div className="
                      grid grid-rows-7 gap-[3px]
                      text-[9px] text-zinc-500
                    ">
                      <span></span>
                      <span>Mon</span>
                      <span></span>
                      <span>Wed</span>
                      <span></span>
                      <span>Fri</span>
                      <span></span>
                    </div>

                    <div
                      className="grid gap-[3px]"
                      style={{
                        gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))`,
                      }}
                    >
                      {weeks.map((week, weekIndex) => (
                        <div
                          key={weekIndex}
                          className="grid grid-rows-7 gap-[3px]"
                        >
                          {week.map((day) => (
                            <motion.div
                              key={day.date}
                              title={`${day.count} contributions on ${formattedDate(day.date)}`}
                              whileHover={
                                reduceMotion
                                  ? {}
                                  : {
                                      scale: 1.4,
                                      zIndex: 10,
                                    }
                              }
                              className={`
                                aspect-square w-full min-w-[5px]
                                cursor-pointer rounded-[2px]
                                ${levelColors[getLevel(day)]}
                                transition-all duration-200
                                hover:ring-1 hover:ring-green-300
                                hover:shadow-[0_0_10px_rgba(74,222,128,0.8)]
                              `}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTRIBUTION LEGEND */}

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <a
                  href="https://docs.github.com/en/account-and-profile/reference/profile-contributions-reference"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-[10px] text-zinc-500
                    transition hover:text-violet-300 sm:text-xs
                  "
                >
                  Learn how contributions work ↗
                </a>

                <div className="flex items-center gap-1.5 text-[10px] text-zinc-400">
                  <span>Less</span>

                  {levelColors.map((color, index) => (
                    <span
                      key={index}
                      className={`
                        h-2.5 w-2.5 rounded-[2px]
                        ${color}
                        shadow-[0_0_5px_rgba(74,222,128,0.15)]
                      `}
                    />
                  ))}

                  <span>More</span>
                </div>
              </div>
            </>
          )}

          {/* CARD BOTTOM NEON LINE */}

          <div className="
            pointer-events-none absolute bottom-0 left-0
            h-[2px] w-full
            bg-gradient-to-r from-green-400 via-violet-500 to-green-400
            opacity-60
          " />
        </motion.div>

        {/* GITHUB STATS */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 flex flex-col items-center"
        >
          <div className="mb-4 text-center">
            <h3 className="
              text-xl font-extrabold tracking-[2px]
              sm:text-2xl
            ">
              <span className="
                text-green-400
                drop-shadow-[0_0_12px_rgba(74,222,128,0.65)]
              ">
                GITHUB
              </span>{" "}
              <span className="
                text-violet-400
                drop-shadow-[0_0_12px_rgba(167,139,250,0.65)]
              ">
                STATS
              </span>
            </h3>

            <div className="
              mx-auto mt-2 h-[2px] w-12 rounded-full
              bg-gradient-to-r from-green-400 to-violet-500
              shadow-[0_0_12px_rgba(139,92,246,0.6)]
            " />
          </div>

          {/* STREAK CARD */}

          <motion.a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduceMotion ? {} : { y: -5, scale: 1.02 }}
            whileTap={reduceMotion ? {} : { scale: 0.98 }}
            className="
              group relative block w-full max-w-[410px]
              overflow-hidden rounded-xl
              border border-violet-500/30
              bg-[#080510]/90
              p-2.5 sm:p-3
              shadow-[0_0_25px_rgba(139,92,246,0.12)]
              backdrop-blur-xl
              transition-all duration-500
              hover:border-green-400/60
              hover:shadow-[0_0_30px_rgba(74,222,128,0.2)]
            "
          >
            {/* STREAK CARD GLOWS */}

            <div className="
              pointer-events-none absolute -right-8 -top-8
              h-28 w-28 rounded-full
              bg-violet-500/20 blur-[55px]
            " />

            <div className="
              pointer-events-none absolute -bottom-10 -left-8
              h-24 w-24 rounded-full
              bg-green-500/15 blur-[50px]
            " />

            <img
              src={STREAK_IMAGE}
              alt={`${USERNAME}'s GitHub streak statistics`}
              loading="lazy"
              className="relative mx-auto block h-auto w-full"
            />

            {/* NEON BORDER ACCENT */}

            <div className="
              pointer-events-none absolute bottom-0 left-0
              h-[2px] w-full
              bg-gradient-to-r from-green-400 via-violet-500 to-green-400
              opacity-70
            " />
          </motion.a>

          {/* GITHUB PROFILE BUTTON */}

          <motion.a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduceMotion ? {} : { y: -3, scale: 1.03 }}
            whileTap={reduceMotion ? {} : { scale: 0.97 }}
            className="
              group mt-4 inline-flex items-center gap-2
              rounded-lg
              border border-green-400/40
              bg-green-400/[0.06]
              px-4 py-2
              text-xs font-semibold text-green-300
              shadow-[0_0_12px_rgba(74,222,128,0.08)]
              transition-all duration-300
              hover:border-green-300
              hover:bg-green-400/15
              hover:text-white
              hover:shadow-[0_0_25px_rgba(74,222,128,0.3)]
            "
          >
            <Github
              size={14}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
            View GitHub Profile
            <ExternalLink size={12} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
