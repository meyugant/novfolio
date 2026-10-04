import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    {
      label: "Features",
      href: "#features",
    },
    {
      label: "How it works",
      href: "#how-it-works",
    },
    {
      label: "Explore",
      href: "#explore-portfolios",
    },
    {
      label: "FAQ",
      href: "#faq",
    },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="absolute left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8">
      <nav
        aria-label="Main navigation"
        className="relative mx-auto w-full max-w-6xl rounded-2xl border border-slate-200/80 bg-white/85 px-4 py-3 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:rounded-full sm:px-5"
      >
        {/* Main navigation */}
        <div className="flex min-h-10 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-2"
          >
            <span className="text-xl font-bold tracking-[-0.05em] text-slate-950">
              novfolio<span className="text-violet-600">.</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-500 transition duration-200 hover:bg-slate-50 hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 md:flex">
            <Link
              to="/login"
              className="rounded-full px-4 py-2.5 text-sm font-medium text-slate-700 transition duration-200 hover:bg-slate-50 hover:text-slate-950"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="group flex items-center gap-1.5 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-violet-600 hover:shadow-md"
            >
              Get started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition duration-200 hover:border-slate-300 hover:bg-slate-50 md:hidden"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          id="mobile-navigation"
          className={`grid transition-all duration-300 md:hidden ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "pointer-events-none grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-3 border-t border-slate-100 pt-3">
              {/* Mobile links */}
              <div className="space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition duration-200 hover:bg-slate-50 hover:text-slate-950"
                  >
                    {item.label}

                    <ArrowRight size={14} className="text-slate-300" />
                  </a>
                ))}
              </div>

              {/* Mobile actions */}
              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="flex items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition duration-200 hover:bg-slate-50"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={closeMenu}
                  className="group flex items-center justify-center gap-1.5 rounded-xl bg-slate-950 px-4 py-3 text-sm font-medium text-white transition duration-200 hover:bg-violet-600"
                >
                  Get started
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
