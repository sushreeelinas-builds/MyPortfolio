
import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = {
    damping: 20,
    stiffness: 180,
    mass: 0.6,
  };

  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const trail1X = useSpring(mouseX, {
    damping: 25,
    stiffness: 100,
  });
  const trail1Y = useSpring(mouseY, {
    damping: 25,
    stiffness: 100,
  });

  const trail2X = useSpring(mouseX, {
    damping: 30,
    stiffness: 65,
  });
  const trail2Y = useSpring(mouseY, {
    damping: 30,
    stiffness: 65,
  });

  const trail3X = useSpring(mouseX, {
    damping: 35,
    stiffness: 40,
  });
  const trail3Y = useSpring(mouseY, {
    damping: 35,
    stiffness: 40,
  });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const handleMouseOver = (e) => {
      setHovering(
        Boolean(
          e.target.closest(
            "a, button, input, textarea, select, [role='button']"
          )
        )
      );
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          body,
          body a,
          body button,
          body input,
          body textarea,
          body select {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Comet Trail - Back */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9996] hidden h-8 w-8 rounded-full bg-violet-500/30 blur-xl md:block"
        style={{
          x: trail3X,
          y: trail3Y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? 0.7 : 0,
          scale: hovering ? 2.5 : 1.5,
        }}
      />

      {/* Comet Trail - Middle */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9997] hidden h-5 w-5 rounded-full bg-emerald-400/40 blur-lg md:block"
        style={{
          x: trail2X,
          y: trail2Y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? 0.9 : 0,
          scale: hovering ? 2 : 1.3,
        }}
      />

      {/* Comet Trail - Front */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-3 w-3 rounded-full bg-violet-300/60 blur-md md:block"
        style={{
          x: trail1X,
          y: trail1Y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.8 : 1,
        }}
      />

      {/* Main Comet Head */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.5 : 1,
        }}
        transition={{
          scale: { duration: 0.2 },
          opacity: { duration: 0.2 },
        }}
      >
        {/* Outer Glow */}
        <div className="absolute -inset-3 rounded-full bg-emerald-400/20 blur-md" />

        {/* Neon Center */}
        <div className="relative h-3 w-3 rounded-full border border-white/70 bg-emerald-300 shadow-[0_0_10px_#34d399,0_0_25px_#10b981,0_0_40px_#8b5cf6]" />

        {/* Small Orbit Spark */}
        <motion.div
          className="absolute -right-2 -top-2 h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_10px_#a78bfa]"
          animate={{
            x: [0, 3, 0],
            y: [0, -3, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </>
  );
}
