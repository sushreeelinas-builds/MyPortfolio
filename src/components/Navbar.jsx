
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  // Detect active section while scrolling
  useEffect(() => {
    const sections = ["home", ...links.map(([, href]) => href.slice(1))];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(`#${visibleSections[0].target.id}`);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Handle navigation click
  const handleNavClick = (href) => {
    setActiveSection(href);
    setOpen(false);
  };

  const isActive = (href) => activeSection === href;

  return (
    <header className="navbar-wrap w-full px-6 sm:px-10 lg:px-20">
      <nav
        className="navbar relative flex w-full max-w-[1800px] items-center justify-between px-4 sm:px-10"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <a
          className="brand"
          href="#home"
          onClick={() => handleNavClick("#home")}
        >
          ELINA<span>.</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${open ? "nav-open" : ""}`}>
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => handleNavClick(href)}
              aria-current={isActive(href) ? "location" : undefined}
              className={`
                relative font-medium
                transition-all duration-300
                hover:text-green-400
                hover:[text-shadow:0_0_12px_rgba(34,197,94,0.65)]
                ${
                  isActive(href)
                    ? "active-nav-link"
                    : "text-zinc-400"
                }
              `}
            >
              {label}

              {/* Active Neon Green Underline */}
              {isActive(href) && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
              )}
            </a>
          ))}

          {/* Let's Talk Button */}
          <a
            href="#contact"
            onClick={() => handleNavClick("#contact")}
            className={`group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 px-5 py-3.5 text-sm font-bold text-black shadow-[0_0_25px_rgba(34,197,94,0.15)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(34,197,94,0.4)] active:scale-[0.97] ${
              isActive("#contact")
                ? "shadow-[0_0_35px_rgba(34,197,94,0.4)]"
                : ""
            }`}
          >
            <span className="text-black">Let's Talk</span>

            <ArrowUpRight
              size={17}
              className="text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </nav>

      {/* Active Navigation Styling */}
      <style>{`
        .nav-links a.active-nav-link {
          color: #22c55e !important;
          text-shadow: 0 0 12px rgba(34, 197, 94, 0.55);
        }
      `}</style>
    </header>
  );
}
