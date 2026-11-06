
import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Flame,
  CalendarDays,
  ExternalLink,
  RefreshCw,
  Heart,
} from "lucide-react";

const USERNAME = "sushreeelinas-builds";

const CONTRIBUTION_API = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;
const GITHUB_API = `https://api.github.com/users/${USERNAME}`;

const getStreaks = (contributions) => {
  const activeDates = new Set(
    contributions
      .filter((day) => day.count > 0)
      .map((day) => day.date)
  );

  let longest = 0;
  let current = 0;
  let running = 0;

  contributions.forEach((day) => {
    if (day.count > 0) {
      running++;
      longest = Math.max(longest, running);
    } else {
      running = 0;
    }
  });

  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  let checkDate = activeDates.has(formatDate(today))
    ? today
    : yesterday;

  while (activeDates.has(formatDate(checkDate))) {
    current++;
    checkDate = new Date(checkDate);
    checkDate.setDate(checkDate.getDate() - 1);
  }

  return { longest, current };
};

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
  const [contributions, setContributions] = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
        throw new Error("Unable to load GitHub contributions.");
      }

      if (!profileResponse.ok) {
        throw new Error("Unable to load GitHub profile.");
      }

      const contributionData = await contributionResponse.json();
      const profileData = await profileResponse.json();

      setContributions(contributionData.contributions || []);
      setProfile(profileData);
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

  const totalContributions = useMemo(
    () => contributions.reduce((sum, day) => sum + day.count, 0),
    [contributions]
  );

  const maxContribution = useMemo(
    () => Math.max(0, ...contributions.map((day) => day.count)),
    [contributions]
  );

  const streaks = useMemo(
    () => getStreaks(contributions),
    [contributions]
  );

  const weeks = useMemo(
    () => getCalendarWeeks(contributions),
    [contributions]
  );

  const monthLabels = useMemo(() => {
    const labels = [];
    let previousMonth = -1;

    weeks.forEach((week, index) => {
      const firstDay = week.find((day) => {
        const date = new Date(`${day.date}T00:00:00`);
        return date.getDate() === 1;
      });

      if (firstDay) {
        const date = new Date(`${firstDay.date}T00:00:00`);
        const month = date.getMonth();

        if (month !== previousMonth) {
          labels.push({
            index,
            label: date.toLocaleString("en-US", {
              month: "short",
            }),
          });

          previousMonth = month;
        }
      }
    });

    return labels;
  }, [weeks]);

  const getLevel = (day) => {
    if (day.count === 0) return 0;

    if (day.level >= 1 && day.level <= 4) {
      return day.level;
    }

    return getContributionLevel(day.count, maxContribution);
  };

  const levelColors = [
    "bg-[#18243a]",
    "bg-[#075c46]",
    "bg-[#07976a]",
    "bg-[#18d58a]",
    "bg-[#65ff9b]",
  ];

  const formattedDate = (date) =>
    new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  return (
    <section
      id="github-activity"
      className="relative isolate overflow-hidden bg-[#050817] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-violet-600/15 blur-[110px]" />
        <div className="absolute -right-20 top-40 h-64 w-64 rounded-full bg-emerald-500/15 blur-[110px]" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[110px]" />
      </div>

      <div className="pointer-events-none absolute left-[8%] top-28 h-12 w-12 rounded-full bg-violet-500/80 shadow-[0_0_45px_12px_rgba(139,92,246,0.35)] blur-[1px]" />
      <div className="pointer-events-none absolute right-[9%] top-40 h-9 w-9 rounded-full bg-emerald-400/80 shadow-[0_0_45px_12px_rgba(52,211,153,0.35)] blur-[1px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:text-left"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.2)]">
            <Code2 size={30} />
          </div>

          <div className="hidden h-14 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent sm:block" />

          <div>
            <h2 className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
              GitHub Activity
            </h2>

            
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl border border-cyan-400/30 bg-[#0c1428]/80 p-4 shadow-[0_0_45px_rgba(34,211,238,0.06)] backdrop-blur-xl sm:p-6 lg:p-8"
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-base font-semibold text-slate-200 sm:text-xl">
              {loading
                ? "Loading GitHub activity..."
                : `${totalContributions.toLocaleString()} contributions in the last year`}
            </h3>

            <button
              type="button"
              onClick={fetchGitHubData}
              disabled={loading}
              className="flex items-center gap-2 text-xs text-slate-400 transition hover:text-cyan-300 disabled:opacity-50 sm:text-sm"
            >
              <RefreshCw
                size={14}
                className={loading ? "animate-spin" : ""}
              />
              Refresh activity
            </button>
          </div>

          {error ? (
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-6 text-center">
              <p className="text-sm text-red-300">{error}</p>
              <button
                onClick={fetchGitHubData}
                className="mt-3 text-sm text-cyan-300 underline"
              >
                Try again
              </button>
            </div>
          ) : loading ? (
            <div className="flex h-32 items-center justify-center">
              <RefreshCw className="animate-spin text-cyan-400" size={26} />
            </div>
          ) : (
            <>
              <div className="overflow-x-auto pb-3">
                <div className="min-w-[650px]">
                  <div
                    className="mb-2 grid gap-[3px]"
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
                          className="h-5 whitespace-nowrap text-[10px] text-slate-400 sm:text-xs"
                        >
                          {month?.label}
                        </div>
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-[25px_1fr] gap-2">
                    <div className="grid grid-rows-7 gap-[3px] text-[10px] text-slate-500">
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
                            <div
                              key={day.date}
                              title={`${day.count} contributions on ${formattedDate(day.date)}`}
                              className={`aspect-square w-full min-w-[5px] rounded-[2px] transition-all duration-200 hover:scale-125 hover:ring-1 hover:ring-cyan-300 ${levelColors[getLevel(day)]}`}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <a
                  href="https://docs.github.com/en/account-and-profile/reference/profile-contributions-reference"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 transition hover:text-cyan-300 sm:text-sm"
                >
                  Learn how we count contributions ↗
                </a>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>Less</span>
                  {levelColors.map((color, index) => (
                    <span
                      key={index}
                      className={`h-3 w-3 rounded-[3px] ${color}`}
                    />
                  ))}
                  <span>More</span>
                </div>
              </div>
            </>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-violet-400/30 bg-[#0c1428]/80 p-4 shadow-[0_0_40px_rgba(139,92,246,0.08)] backdrop-blur-xl md:grid-cols-4 md:gap-0 md:p-5"
        >
          <div className="flex items-center gap-3 border-r border-white/10 px-2 py-3 md:px-4">
            <Code2 className="shrink-0 text-cyan-400" size={30} />
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {loading ? "—" : totalContributions.toLocaleString()}
              </h3>
              <p className="text-xs text-slate-400 sm:text-sm">
                Contributions
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-2 py-3 md:border-r md:border-white/10 md:px-4">
            <Flame className="shrink-0 text-emerald-400" size={32} />
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {loading ? "—" : streaks.longest}
              </h3>
              <p className="text-xs text-slate-400 sm:text-sm">
                Longest Streak
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-r border-white/10 px-2 py-3 md:px-4">
            <CalendarDays className="shrink-0 text-violet-400" size={30} />
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {loading ? "—" : streaks.current}
              </h3>
              <p className="text-xs text-slate-400 sm:text-sm">
                Current Streak
              </p>
            </div>
          </div>

          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-2 py-3 transition hover:opacity-80 md:px-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
              <Code2 size={23} />
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-sm font-bold text-white">
                {profile?.login || USERNAME}
              </h3>
              <p className="flex items-center gap-1 text-xs text-emerald-400">
                View Profile <ExternalLink size={12} />
              </p>
            </div>
          </a>
        </motion.div>

        {profile && (
          <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <span>
              <strong className="text-slate-300">
                {profile.public_repos}
              </strong>{" "}
              Public Repositories
            </span>
            <span>
              <strong className="text-slate-300">
                {profile.followers}
              </strong>{" "}
              Followers
            </span>
            <span>
              <strong className="text-slate-300">
                {profile.following}
              </strong>{" "}
              Following
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
