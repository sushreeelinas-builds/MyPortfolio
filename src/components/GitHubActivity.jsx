
import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Code2,
  Flame,
  RefreshCw,
  GitCommitHorizontal,
  Users,
  BookOpen,
  CalendarDays,
  AlertCircle,
} from "lucide-react";

// ==========================================
// GITHUB CONFIGURATION
// ==========================================

const username = "sushreeelinas-builds";

const githubProfile = `https://github.com/${username}`;

const contributionAPI =
  `https://github-contributions-api.jogruber.de/v4/${username}?y=last`;

const profileAPI =
  `https://api.github.com/users/${username}`;

// Refresh interval: 5 minutes
const REFRESH_INTERVAL = 5 * 60 * 1000;

// ==========================================
// THEME
// ==========================================

const calendarColors = [
  "#161b22",
  "#064e3b",
  "#047857",
  "#10b981",
  "#34d399",
];

const floatTransition = (duration, delay = 0) => ({
  duration,
  delay,
  repeat: Infinity,
  ease: "easeInOut",
  repeatType: "reverse",
});

// ==========================================
// DATE HELPERS
// ==========================================

function getDateKey(date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

function calculateStreaks(contributions) {
  const contributionMap = new Map(
    contributions.map((day) => [day.date, day.count])
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const hasContribution = (date) =>
    (contributionMap.get(getDateKey(date)) || 0) > 0;

  // Current streak
  const currentCheck = new Date(today);

  // If there is no contribution today, check yesterday.
  if (!hasContribution(currentCheck)) {
    currentCheck.setDate(currentCheck.getDate() - 1);
  }

  let currentStreak = 0;

  while (hasContribution(currentCheck)) {
    currentStreak++;
    currentCheck.setDate(currentCheck.getDate() - 1);
  }

  // Longest streak
  let longestStreak = 0;
  let runningStreak = 0;

  const sortedDays = [...contributions].sort(
    (a, b) => a.date.localeCompare(b.date)
  );

  sortedDays.forEach((day) => {
    if (day.count > 0) {
      runningStreak++;
      longestStreak = Math.max(longestStreak, runningStreak);
    } else {
      runningStreak = 0;
    }
  });

  return {
    currentStreak,
    longestStreak,
  };
}

// ==========================================
// CONTRIBUTION CALENDAR DATA
// ==========================================

function buildCalendar(contributions) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const start = new Date(today);
  start.setDate(start.getDate() - 364);

  // Start from Sunday so the calendar has complete weeks.
  start.setDate(start.getDate() - start.getDay());

  const contributionMap = new Map(
    contributions.map((day) => [day.date, day.count])
  );

  const weeks = [];
  const cursor = new Date(start);

  while (cursor <= today) {
    const week = [];

    for (let day = 0; day < 7; day++) {
      const dateKey = getDateKey(cursor);

      const count = contributionMap.get(dateKey) || 0;

      let level = 0;

      if (count > 0) level = 1;
      if (count >= 3) level = 2;
      if (count >= 6) level = 3;
      if (count >= 10) level = 4;

      week.push({
        date: dateKey,
        count,
        level,
        future: cursor > today,
      });

      cursor.setDate(cursor.getDate() + 1);
    }

    weeks.push(week);
  }

  return weeks;
}

// ==========================================
// MONTH LABELS
// ==========================================

function getMonthLabels(weeks) {
  const labels = [];
  let previousMonth = -1;

  weeks.forEach((week, index) => {
    const firstValidDay = week.find(
      (day) => day.date
    );

    if (!firstValidDay) return;

    const month = new Date(
      `${firstValidDay.date}T00:00:00`
    ).getMonth();

    if (month !== previousMonth) {
      labels.push({
        index,
        name: new Date(
          `${firstValidDay.date}T00:00:00`
        ).toLocaleDateString("en-US", {
          month: "short",
        }),
      });

      previousMonth = month;
    }
  });

  return labels;
}

// ==========================================
// REUSABLE STAT CARD
// ==========================================

function StatCard({
  icon: Icon,
  label,
  value,
  description,
  color = "emerald",
}) {
  const colors = {
    emerald: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    cyan: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    violet: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a1114]/80 p-5 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/30"
    >
      <div
        className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl border ${colors[color]}`}
      >
        <Icon size={21} />
      </div>

      <p className="text-2xl font-extrabold text-white sm:text-3xl">
        {value.toLocaleString("en-US")}
      </p>

      <p className="mt-2 text-sm font-semibold text-gray-300">
        {label}
      </p>

      <p className="mt-1 text-xs text-gray-500">
        {description}
      </p>
    </motion.div>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function GitHubActivity() {
  const reduceMotion = useReducedMotion();

  const [contributions, setContributions] = useState([]);
  const [profile, setProfile] = useState(null);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  const [lastUpdated, setLastUpdated] = useState(null);

  // ========================================
  // FETCH ACTUAL GITHUB DATA
  // ========================================

  const fetchGitHubData = useCallback(async (manual = false) => {
    if (manual) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }

    setError("");

    try {
      const [contributionResponse, profileResponse] =
        await Promise.all([
          fetch(contributionAPI, {
            cache: "no-store",
            headers: {
              "Cache-Control": "no-cache",
            },
          }),

          fetch(profileAPI, {
            cache: "no-store",
            headers: {
              Accept: "application/vnd.github+json",
            },
          }),
        ]);

      if (!contributionResponse.ok) {
        throw new Error(
          "Unable to fetch GitHub contribution data."
        );
      }

      if (!profileResponse.ok) {
        throw new Error(
          "Unable to fetch GitHub profile information."
        );
      }

      const contributionData =
        await contributionResponse.json();

      const profileData =
        await profileResponse.json();

      if (!Array.isArray(contributionData.contributions)) {
        throw new Error("Invalid contribution data received.");
      }

      setContributions(contributionData.contributions);
      setProfile(profileData);
      setLastUpdated(new Date());

    } catch (err) {
      console.error("GitHub API error:", err);

      setError(
        err.message ||
        "Unable to load GitHub activity. Please try again."
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  // ========================================
  // INITIAL LOAD + AUTOMATIC REFRESH
  // ========================================

  useEffect(() => {
    fetchGitHubData();

    const interval = setInterval(() => {
      fetchGitHubData();
    }, REFRESH_INTERVAL);

    return () => clearInterval(interval);
  }, [fetchGitHubData]);

  // ========================================
  // DYNAMIC STATISTICS
  // ========================================

  const totalContributions = useMemo(() => {
    return contributions.reduce(
      (total, day) => total + day.count,
      0
    );
  }, [contributions]);

  const { currentStreak, longestStreak } = useMemo(
    () => calculateStreaks(contributions),
    [contributions]
  );

  const weeks = useMemo(
    () => buildCalendar(contributions),
    [contributions]
  );

  const monthLabels = useMemo(
    () => getMonthLabels(weeks),
    [weeks]
  );

  // ========================================
  // ANIMATION SETTINGS
  // ========================================

  const glowAnimation = (values) =>
    reduceMotion ? {} : values;

  // ========================================
  // LOADING SCREEN
  // ========================================

  if (loading && contributions.length === 0) {
    return (
      <section
        id="github"
        className="flex min-h-[450px] items-center justify-center bg-[#020609] text-white"
      >
        <div className="text-center">
          <Github
            size={40}
            className="mx-auto mb-5 animate-pulse text-emerald-400"
          />

          <p className="text-sm font-semibold text-gray-300">
            Loading GitHub Activity...
          </p>

          <p className="mt-2 text-xs text-gray-500">
            Fetching your latest contributions
          </p>
        </div>
      </section>
    );
  }

  // ========================================
  // MAIN UI
  // ========================================

  return (
    <section
      id="github"
      className="relative isolate overflow-hidden bg-[#020609] px-4 py-20 text-white sm:px-8 lg:px-16"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#03110b] via-[#080713] to-[#030407]" />

        <motion.div
          animate={glowAnimation({
            x: [0, 50, -30, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.2, 0.9, 1],
          })}
          transition={floatTransition(12)}
          className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-emerald-500/20 blur-[140px]"
        />

        <motion.div
          animate={glowAnimation({
            x: [0, -50, 30, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.2, 1],
          })}
          transition={floatTransition(15, 1)}
          className="absolute -right-40 top-40 h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[150px]"
        />

        <motion.div
          animate={glowAnimation({
            x: [0, 40, -30, 0],
            y: [0, -20, 20, 0],
          })}
          transition={floatTransition(14, 2)}
          className="absolute bottom-[-180px] left-[35%] h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[130px]"
        />

        <motion.div
          animate={glowAnimation({
            backgroundPosition: [
              "0px 0px",
              "45px 45px",
            ],
          })}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16,185,129,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020609]/20 to-[#020609]/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1250px]">

        {/* ===================================
            MAIN HEADING
        =================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-400">
            MY CODING JOURNEY
          </p>

          <h2 className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-400 bg-clip-text text-3xl font-extrabold uppercase tracking-tight text-transparent sm:text-5xl">
            GitHub Calendar
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400 to-violet-500 shadow-[0_0_20px_rgba(16,185,129,0.7)]" />

          <p className="mt-5 text-sm text-gray-400">
            A live overview of my coding consistency and contributions.
          </p>
        </motion.div>

        {/* ===================================
            ERROR MESSAGE
        =================================== */}

        {error && (
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-red-400/20 bg-red-400/5 p-4 text-sm text-red-300">
            <div className="flex items-center gap-2">
              <AlertCircle size={18} />
              {error}
            </div>

            <button
              onClick={() => fetchGitHubData(true)}
              className="font-semibold underline"
            >
              Try again
            </button>
          </div>
        )}

        {/* ===================================
            CONTRIBUTION CALENDAR
        =================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-[#090e0c]/85 p-4 shadow-[0_0_35px_rgba(16,185,129,0.08)] backdrop-blur-xl transition-all duration-500 hover:border-emerald-400/40 sm:p-7"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-emerald-500/10 blur-[100px]" />

          {/* CALENDAR HEADER */}

          <div className="relative mb-7 flex flex-wrap items-center justify-between gap-4">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-400">
                <Code2 size={21} />
              </div>

              <div>
                <h3 className="text-sm font-bold text-white sm:text-base">
                  Contribution Activity
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  @{username}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">

              <button
                type="button"
                onClick={() => fetchGitHubData(true)}
                disabled={refreshing}
                className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs font-semibold text-emerald-300 transition-all hover:border-emerald-400/50 hover:bg-emerald-400/10 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <RefreshCw
                  size={14}
                  className={refreshing ? "animate-spin" : ""}
                />

                {refreshing ? "Refreshing..." : "Refresh"}
              </button>

              <a
                href={githubProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/5 px-4 py-2 text-xs font-semibold text-violet-300 transition hover:border-violet-400/50 hover:bg-violet-400/10 sm:flex"
              >
                <Github size={14} />
                View Profile
                <ExternalLink size={12} />
              </a>

            </div>
          </div>

          {/* CONTRIBUTION TOTAL */}

          <div className="relative mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-gray-200">
              {totalContributions.toLocaleString("en-US")} contributions in the last year
            </p>

            <p className="text-[10px] text-gray-500">
              Last 365 days
            </p>
          </div>

          {/* CALENDAR GRID */}

          <div className="relative overflow-x-auto pb-4">

            <div className="min-w-[760px]">

              {/* MONTH LABELS */}

              <div
                className="mb-3 grid h-5 gap-[4px]"
                style={{
                  gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))`,
                }}
              >
                {monthLabels.map((month) => (
                  <span
                    key={`${month.name}-${month.index}`}
                    className="text-[11px] font-semibold text-gray-300"
                    style={{
                      gridColumn: `${month.index + 1} / span 4`,
                    }}
                  >
                    {month.name}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">

                {/* WEEKDAY LABELS */}

                <div className="grid w-7 shrink-0 grid-rows-7 gap-[4px] text-[10px] text-gray-500">
                  <span />
                  <span>Mon</span>
                  <span />
                  <span>Wed</span>
                  <span />
                  <span>Fri</span>
                  <span />
                </div>

                {/* CONTRIBUTION SQUARES */}

                <div className="grid flex-1 grid-flow-col grid-rows-7 gap-[4px]">

                  {weeks.map((week, weekIndex) =>
                    week.map((day, dayIndex) => (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        title={
                          day.future
                            ? ""
                            : `${day.count} contributions on ${day.date}`
                        }
                        className="aspect-square min-w-[9px] rounded-[3px] transition-all duration-200 hover:scale-125 hover:ring-1 hover:ring-white/50"
                        style={{
                          backgroundColor: day.future
                            ? "transparent"
                            : calendarColors[day.level],
                          opacity: day.future ? 0 : 1,
                        }}
                      />
                    ))
                  )}

                </div>
              </div>
            </div>
          </div>

          {/* CALENDAR LEGEND */}

          <div className="relative mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">

            <p className="text-[10px] font-medium text-gray-500 sm:text-xs">
              {lastUpdated
                ? `Last fetched: ${lastUpdated.toLocaleTimeString()}`
                : "Live contribution activity"}
            </p>

            <div className="flex items-center gap-2">

              <span className="text-[10px] text-gray-500">
                Less
              </span>

              {calendarColors.map((color, index) => (
                <span
                  key={index}
                  className="h-3 w-3 rounded-[3px]"
                  style={{ backgroundColor: color }}
                />
              ))}

              <span className="text-[10px] text-gray-500">
                More
              </span>

            </div>
          </div>
        </motion.div>

        {/* ===================================
            GITHUB STATS HEADING
        =================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 mt-20 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-violet-400">
            MY DEVELOPMENT RECORD
          </p>

          <h2 className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-400 bg-clip-text text-3xl font-extrabold uppercase tracking-tight text-transparent sm:text-5xl">
            GitHub Stats
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400 to-violet-500" />
        </motion.div>

        {/* ===================================
            DYNAMIC STATS CARDS
        =================================== */}

        {profile && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <StatCard
              icon={GitCommitHorizontal}
              label="Total Contributions"
              value={totalContributions}
              description="Contributions in the last year"
              color="emerald"
            />

            <StatCard
              icon={Flame}
              label="Current Streak"
              value={currentStreak}
              description="Consecutive active days"
              color="violet"
            />

            <StatCard
              icon={BookOpen}
              label="Public Repositories"
              value={profile.public_repos}
              description="Public GitHub projects"
              color="cyan"
            />

            <StatCard
              icon={Users}
              label="Followers"
              value={profile.followers}
              description={`${profile.following} following`}
              color="emerald"
            />

          </div>
        )}

        {/* ===================================
            LONGEST STREAK CARD
        =================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-7 max-w-[650px]"
        >
          <div className="relative overflow-hidden rounded-2xl border border-violet-400/20 bg-[#0b0f12]/90 p-7 text-center shadow-[0_0_35px_rgba(139,92,246,0.08)] backdrop-blur-xl transition duration-500 hover:border-violet-400/40">

            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/15 blur-[90px]" />

            <div className="relative">

              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
                <Flame size={28} />
              </div>

              <p className="text-4xl font-extrabold text-cyan-300">
                {longestStreak}
              </p>

              <h3 className="mt-2 font-bold text-white">
                Longest Contribution Streak
              </h3>

              <p className="mt-2 text-xs text-gray-500">
                Your longest consecutive active period in the available contribution history.
              </p>

            </div>
          </div>
        </motion.div>

        {/* ===================================
            PROFILE INFORMATION
        =================================== */}

        {profile && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto mt-8 max-w-[650px] rounded-2xl border border-emerald-400/20 bg-[#090e0c]/80 p-5 backdrop-blur-xl sm:p-7"
          >
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">

              <img
                src={profile.avatar_url}
                alt={`${username} GitHub avatar`}
                className="h-16 w-16 rounded-full border-2 border-emerald-400/50"
              />

              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-white">
                  {profile.name || profile.login}
                </h3>

                <p className="mt-1 text-xs text-gray-400">
                  @{profile.login}
                </p>

                <p className="mt-2 text-xs text-gray-500">
                  {profile.bio || "Developer exploring technology and building projects."}
                </p>
              </div>

              <a
                href={githubProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-5 py-2.5 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-400/10"
              >
                Visit Profile
                <ExternalLink size={14} />
              </a>

            </div>
          </motion.div>
        )}

        {/* ===================================
            EXPLORE GITHUB BUTTON
        =================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href={githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-7 py-3 text-sm font-semibold text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-400/10 hover:text-violet-300"
          >
            <Github size={18} />

            Explore My GitHub

            <ExternalLink
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
