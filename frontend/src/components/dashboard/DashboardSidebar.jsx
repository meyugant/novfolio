import {
  LayoutDashboard,
  User,
  FolderKanban,
  BriefcaseBusiness,
  Code2,
  Link,
  GraduationCap,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardSidebar({ activeSection, onSectionChange, user }) {
  const navigation = [
    {
      label: "Overview",
      icon: LayoutDashboard,
      section: "overview",
    },
    {
      label: "Profile",
      icon: User,
      section: "profile",
    },
    {
      label: "Projects",
      icon: FolderKanban,
      section: "projects",
    },
    {
      label: "Experience",
      icon: BriefcaseBusiness,
      section: "experience",
    },
    {
      label: "Education",
      icon: GraduationCap,
      section: "education",
    },
    {
      label: "Skills",
      icon: Code2,
      section: "skills",
    },
    {
      label: "Social Links",
      icon: Link,
      section: "social-links",
    },
    {
      label: "Settings",
      icon: Settings,
      section: "settings",
    },
  ];

  const navigate = useNavigate();

  const [loggingOut, setLoggingOut] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    setLoggingOut(true);

    setTimeout(() => {
      localStorage.removeItem("access_token");
      navigate("/login");
    }, 700);
  };

  const handleSectionChange = (section) => {
    onSectionChange(section);

    // Close drawer after selecting a section
    setMobileOpen(false);
  };

  return (
    <>
      {/* =====================================================
          MOBILE / TABLET MENU BUTTON
      ===================================================== */}

      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-40 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 sm:left-5 sm:top-5 lg:hidden"
        aria-label="Open navigation"
      >
        <Menu size={20} />
      </button>

      {/* =====================================================
          MOBILE / TABLET OVERLAY
      ===================================================== */}

      {mobileOpen && (
        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/20 backdrop-blur-[2px] lg:hidden"
          aria-label="Close navigation"
        />
      )}

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen
          w-[85vw] max-w-72
          flex-col
          border-r border-slate-200 bg-white
          transition-transform duration-300 ease-in-out
          lg:w-64 lg:translate-x-0
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* =====================================================
            LOGO
        ===================================================== */}

        <div className="flex h-20 shrink-0 items-center justify-between px-6 sm:px-8">
          <button
            type="button"
            onClick={() => handleSectionChange("overview")}
            className="text-2xl font-bold tracking-[-0.04em] text-slate-950"
          >
            novfolio<span className="text-violet-600">.</span>
          </button>

          {/* Close button - mobile/tablet only */}
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-50 hover:text-slate-950 lg:hidden"
            aria-label="Close navigation"
          >
            <X size={20} />
          </button>
        </div>

        {/* =====================================================
            NAVIGATION
        ===================================================== */}

        <nav className="flex-1 overflow-y-auto px-4 py-5 sm:py-6">
          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              const isActive = activeSection === item.section;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleSectionChange(item.section)}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-violet-50 text-violet-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.8} />

                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* =====================================================
            LOGOUT
        ===================================================== */}

        <div className="shrink-0 p-4 sm:p-5">
          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <LogOut
              size={16}
              className={`transition-transform duration-300 ${
                loggingOut ? "translate-x-1" : ""
              }`}
            />

            {loggingOut ? "Logging out..." : "Logout"}
          </button>
        </div>
      </aside>
    </>
  );
}

export default DashboardSidebar;
