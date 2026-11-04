import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);

      setHover(
        Boolean(
          e.target.closest("a, button, input, textarea, [role='button']")
        )
      );
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`custom-cursor ${visible ? "is-visible" : ""}`}
    >
      <span
        className={`cursor-ring ${hover ? "is-hover" : ""}`}
        style={{ left: pos.x, top: pos.y }}
      />
      <span
        className="cursor-dot"
        style={{ left: pos.x, top: pos.y }}
      />
    </div>
  );
}