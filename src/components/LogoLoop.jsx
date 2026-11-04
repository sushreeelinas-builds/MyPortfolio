
import { motion } from "framer-motion";

export default function LogoLoop({
  logos = [],
  speed = 30,
  direction = "left",
  logoHeight = 30,
  gap = 40,
  ariaLabel = "Technology logos",
}) {
  const reverse = direction === "right";

  return (
    <div
      className="logo-loop relative w-full overflow-hidden"
      aria-label={ariaLabel}
    >
      <motion.div
        className="logo-loop-track flex w-max items-center"
        style={{
          gap: `${gap}px`,
          "--logo-loop-speed": `${Math.max(speed, 1)}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...logos, ...logos, ...logos, ...logos].map(
          (logo, index) => (
            <a
              key={`${logo.title || logo.alt}-${index}`}
              href={logo.href || "#skills"}
              target={logo.href ? "_blank" : undefined}
              rel={logo.href ? "noreferrer" : undefined}
              title={logo.title || logo.alt}
              className="group flex shrink-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-zinc-400 transition duration-300 hover:border-lime-400/40 hover:bg-lime-400/[0.06] hover:text-lime-300"
            >
              {logo.node ? (
                <span
                  className="flex items-center justify-center transition-transform duration-300 group-hover:scale-125"
                  style={{
                    fontSize: logoHeight,
                    color: logo.hoverColor || "currentColor",
                  }}
                >
                  {logo.node}
                </span>
              ) : (
                <img
                  src={logo.src}
                  alt={logo.alt || ""}
                  style={{
                    height: logoHeight,
                    width: logoHeight,
                    objectFit: "contain",
                  }}
                />
              )}

              <span className="whitespace-nowrap text-sm font-medium">
                {logo.title || logo.alt}
              </span>
            </a>
          )
        )}
      </motion.div>
    </div>
  );
}
