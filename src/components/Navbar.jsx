
import { useState } from "react";
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

  return (
    <header className="navbar-wrap w-full px-6 sm:px-10 lg:px-20">
      <nav
        className="navbar container-wide mx-auto flex w-full max-w-[1800px] items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          className="brand"
          href="#home"
          onClick={() => setOpen(false)}
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
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}

          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Let's Talk <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>
    </header>
  );
}
