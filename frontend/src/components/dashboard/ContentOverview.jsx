import {
  User,
  FolderKanban,
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  Link,
  ChevronRight,
} from "lucide-react";

function ContentOverview({ portfolio, onSectionChange }) {
  const profile = portfolio?.profile;

  const items = [
    {
      title: "Profile",
      description: profile?.full_name
        ? profile.full_name
        : "Add your personal information",
      section: "profile",
      icon: User,
      completed: Boolean(profile?.full_name && profile?.bio),
    },

    {
      title: "Projects",
      description: `${portfolio?.projects?.length || 0} ${
        portfolio?.projects?.length === 1 ? "project" : "projects"
      } added`,
      section: "projects",
      icon: FolderKanban,
      completed: (portfolio?.projects?.length || 0) > 0,
    },

    {
      title: "Experience",
      description: `${portfolio?.experiences?.length || 0} ${
        portfolio?.experiences?.length === 1 ? "experience" : "experiences"
      } added`,
      section: "experience",
      icon: BriefcaseBusiness,
      completed: (portfolio?.experiences?.length || 0) > 0,
    },

    {
      title: "Education",
      description: `${portfolio?.educations?.length || 0} ${
        portfolio?.educations?.length === 1 ? "entry" : "entries"
      } added`,
      section: "education",
      icon: GraduationCap,
      completed: (portfolio?.education?.length || 0) > 0,
    },

    {
      title: "Skills",
      description: `${portfolio?.skills?.length || 0} ${
        portfolio?.skills?.length === 1 ? "skill" : "skills"
      } added`,
      section: "skills",
      icon: Code2,
      completed: (portfolio?.skills?.length || 0) > 0,
    },

    {
      title: "Social Links",
      description: `${portfolio?.social_links?.length || 0} ${
        portfolio?.social_links?.length === 1 ? "link" : "links"
      } added`,
      section: "social-links",
      icon: Link,
      completed: (portfolio?.social_links?.length || 0) > 0,
    },
  ];

  return (
    <section
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        sm:p-6
        lg:p-8
      "
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex flex-col gap-2">
        <div>
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-violet-600
            "
          >
            Content
          </p>

          <h2
            className="
              mt-2
              text-lg
              font-semibold
              tracking-tight
              text-slate-950
              sm:text-xl
            "
          >
            Content Overview
          </h2>

          <p className="mt-1 max-w-xl text-sm leading-6 text-slate-500">
            Manage the information displayed on your public portfolio.
          </p>
        </div>
      </div>

      {/* =====================================================
          CONTENT GRID
      ===================================================== */}

      <div
        className="
          mt-6
          grid
          gap-3
          sm:mt-7
          sm:grid-cols-2
          lg:grid-cols-2
          xl:grid-cols-3
        "
      >
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                group
                rounded-2xl
                border
                border-slate-200
                p-4
                transition
                duration-300
                hover:-translate-y-0.5
                hover:border-violet-200
                hover:shadow-[0_12px_30px_rgba(15,23,42,0.05)]
                sm:p-5
              "
            >
              {/* =================================================
                  ICON + STATUS
              ================================================= */}

              <div className="flex items-center justify-between">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-violet-50
                    text-violet-600
                  "
                >
                  <Icon size={19} strokeWidth={1.8} />
                </div>

                <div
                  className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                    item.completed ? "bg-emerald-500" : "bg-slate-300"
                  }`}
                  title={item.completed ? "Completed" : "Not completed"}
                />
              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <h3 className="mt-5 text-sm font-semibold text-slate-950 sm:mt-6">
                {item.title}
              </h3>

              <p className="mt-1 min-h-[40px] text-xs leading-5 text-slate-500 sm:text-sm">
                {item.description}
              </p>

              {/* =================================================
                  MANAGE BUTTON
              ================================================= */}

              <button
                type="button"
                onClick={() => onSectionChange(item.section)}
                className="
                  mt-4
                  flex
                  items-center
                  gap-1
                  text-sm
                  font-medium
                  text-violet-600
                  transition
                  hover:text-violet-700
                "
              >
                Manage
                <ChevronRight
                  size={15}
                  className="
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ContentOverview;
