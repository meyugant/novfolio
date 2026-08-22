import { ExternalLink } from "lucide-react";

function DashboardHeader({ user, activeSection, onSectionChange }) {
  const profile = user?.profile;

  const name = profile?.full_name || "User";

  const slug = user?.portfolio?.slug;

  const initial = name.charAt(0).toUpperCase();

  const pageTitles = {
    overview: "Overview",
    profile: "Profile",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    "social-links": "Social Links",
    settings: "Settings",
  };

  const pageTitle = pageTitles[activeSection] || "Overview";

  return (
    <header
      className="
        sticky top-0 z-40
        flex h-20 items-center justify-between
        border-b border-slate-200
        bg-white/90
        px-4
        pl-18
        backdrop-blur
        sm:px-6
        sm:pl-20
        lg:px-8
        lg:pl-8
      "
    >
      {/* =====================================================
          PAGE TITLE
      ===================================================== */}

      <div className="min-w-0">
        <h1 className="truncate text-base font-semibold tracking-tight text-slate-950 sm:text-lg">
          {pageTitle}
        </h1>
      </div>

      {/* =====================================================
          ACTIONS
      ===================================================== */}

      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        {/* View Portfolio */}

        <a
          href={`/${slug}`}
          target="_blank"
          rel="noreferrer"
          className="
            hidden
            items-center
            gap-2
            rounded-xl
            border border-slate-200
            bg-white
            px-3 py-2.5
            text-sm font-medium
            text-slate-700
            transition
            hover:border-violet-300
            hover:text-violet-600
            sm:flex
            sm:px-4
          "
        >
          <span className="hidden md:inline">View Portfolio</span>

          <ExternalLink size={15} />
        </a>

        {/* Profile */}

        <button
          type="button"
          onClick={() => onSectionChange("profile")}
          className="
            flex
            items-center
            gap-2
            rounded-xl
            p-1.5
            transition
            hover:bg-slate-50
          "
          title="View Profile"
        >
          <div
            className="
              flex
              h-9 w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-slate-950
              text-sm
              font-medium
              text-white
            "
          >
            {initial}
          </div>
        </button>
      </div>
    </header>
  );
}

export default DashboardHeader;
