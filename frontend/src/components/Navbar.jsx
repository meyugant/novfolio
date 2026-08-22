import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-10">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        {/* Main Navbar */}
        <div className="flex items-center justify-between px-5 py-4 sm:px-6">
          {/* Logo */}
          <a
            href="#top"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl"
          >
            novfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex lg:gap-10">
            <a
              href="#about"
              className="text-sm text-slate-700 transition hover:text-violet-600 lg:text-base"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-sm text-slate-700 transition hover:text-violet-600 lg:text-base"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="text-sm text-slate-700 transition hover:text-violet-600 lg:text-base"
            >
              Experience
            </a>

            <a
              href="#skills"
              className="text-sm text-slate-700 transition hover:text-violet-600 lg:text-base"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-600 lg:text-base"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-950 transition hover:border-violet-300 hover:text-violet-600 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full bg-current transition-transform duration-200 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`h-0.5 w-full bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-0.5 w-full bg-current transition-transform duration-200 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-slate-200 px-5 py-4 md:hidden">
            <div className="flex flex-col">
              <a
                href="#about"
                onClick={closeMenu}
                className="border-b border-slate-100 py-4 text-base text-slate-700 transition hover:text-violet-600"
              >
                About
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="border-b border-slate-100 py-4 text-base text-slate-700 transition hover:text-violet-600"
              >
                Projects
              </a>

              <a
                href="#experience"
                onClick={closeMenu}
                className="border-b border-slate-100 py-4 text-base text-slate-700 transition hover:text-violet-600"
              >
                Experience
              </a>

              <a
                href="#skills"
                onClick={closeMenu}
                className="border-b border-slate-100 py-4 text-base text-slate-700 transition hover:text-violet-600"
              >
                Skills
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-4 rounded-xl bg-slate-950 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-violet-600"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
