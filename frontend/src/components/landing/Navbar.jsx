import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8">
      <nav className="relative mx-auto w-full max-w-5xl rounded-full border border-slate-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md sm:px-5">
        {/* Main navbar */}
        <div className="flex min-w-0 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="shrink-0 text-xl font-bold tracking-[-0.05em] text-slate-950"
          >
            novfolio<span className="text-violet-600">.</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm text-slate-600 transition hover:text-slate-950"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="text-sm text-slate-600 transition hover:text-slate-950"
            >
              How it works
            </a>

            <a
              href="#explore"
              className="text-sm text-slate-600 transition hover:text-slate-950"
            >
              Explore
            </a>
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 md:flex">
            <Link
              to="/login"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-600"
            >
              Get started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="absolute left-0 right-0 top-[calc(100%+10px)] overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-3 shadow-xl backdrop-blur-md md:hidden">
            <div className="flex flex-col">
              <a
                href="#features"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
              >
                How it works
              </a>

              <a
                href="#explore"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
              >
                Explore
              </a>

              <div className="mt-2 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center rounded-xl bg-slate-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-violet-600"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
