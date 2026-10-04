import {
  ArrowRight,
  ExternalLink,
  FolderKanban,
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  Share2,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.09) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Soft purple glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 lg:pt-44">
        {/* Small label */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-[11px] font-semibold tracking-wide text-violet-600">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            BUILD. SHOWCASE. SHARE.
          </div>
        </div>

        {/* Hero heading */}
        <div className="mx-auto mt-7 max-w-4xl text-center">
          <h1 className="text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
            Build a professional
            <br />
            portfolio without
            <br />
            building a website
            <br className="hidden sm:block" />
            from scratch.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            Novfolio is a portfolio builder that helps students, developers,
            designers, researchers, and professionals create a polished online
            portfolio for their work, skills, experience, and education.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/register"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition duration-200 hover:-translate-y-0.5 hover:bg-violet-600 sm:w-auto"
            >
              Create your portfolio
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <a
              href="#explore"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-medium text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-600 sm:w-auto"
            >
              Explore portfolios
              <ExternalLink size={15} />
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-400">
            No complex setup. Just your work, beautifully presented.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="relative mx-auto mt-16 max-w-6xl sm:mt-20 lg:mt-24">
          {/* Glow behind dashboard */}
          <div className="absolute -inset-6 rounded-[40px] bg-violet-200/30 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_35px_100px_rgba(15,23,42,0.12)]">
            {/* Browser bar */}
            <div className="flex h-11 items-center border-b border-slate-200 bg-slate-50 px-4">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              </div>

              <div className="mx-auto flex h-6 w-40 items-center justify-center rounded-md border border-slate-200 bg-white text-[9px] text-slate-400 sm:w-64">
                app.novfolio.com/dashboard
              </div>

              <div className="w-12" />
            </div>

            <div className="flex min-h-[380px]">
              {/* Sidebar */}
              <div className="hidden w-48 shrink-0 border-r border-slate-100 bg-white p-5 md:block">
                {/* Logo */}
                <div className="text-sm font-bold tracking-tight text-slate-950">
                  novfolio<span className="text-violet-500">.</span>
                </div>

                {/* Sidebar links */}
                <div className="mt-9 space-y-1.5">
                  <DashboardNavItem
                    icon={<UserRound size={14} />}
                    text="Overview"
                    active
                  />

                  <DashboardNavItem
                    icon={<FolderKanban size={14} />}
                    text="Projects"
                  />

                  <DashboardNavItem
                    icon={<BriefcaseBusiness size={14} />}
                    text="Experience"
                  />

                  <DashboardNavItem
                    icon={<GraduationCap size={14} />}
                    text="Education"
                  />

                  <DashboardNavItem icon={<Code2 size={14} />} text="Skills" />

                  <DashboardNavItem
                    icon={<Share2 size={14} />}
                    text="Social Links"
                  />
                </div>

                {/* Bottom settings */}
                <div className="mt-12 border-t border-slate-100 pt-4">
                  <div className="text-[10px] font-medium text-slate-400">
                    YOUR PORTFOLIO
                  </div>

                  <div className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-[10px] text-slate-500">
                    novfolio.com/your-name
                  </div>
                </div>
              </div>

              {/* Main dashboard */}
              <div className="min-w-0 flex-1 bg-slate-50/50 p-5 sm:p-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-medium text-violet-500">
                      YOUR DASHBOARD
                    </p>

                    <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                      Welcome back
                    </h2>

                    <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                      Let's keep building your portfolio.
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
                    Y
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
                  <DashboardStat
                    icon={<FolderKanban size={15} />}
                    label="Projects"
                    value="06"
                  />

                  <DashboardStat
                    icon={<BriefcaseBusiness size={15} />}
                    label="Experience"
                    value="03"
                  />

                  <DashboardStat
                    icon={<GraduationCap size={15} />}
                    label="Education"
                    value="02"
                  />

                  <DashboardStat
                    icon={<Code2 size={15} />}
                    label="Skills"
                    value="12"
                  />
                </div>

                {/* Recent projects */}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Recent projects
                      </h3>

                      <p className="mt-1 text-[10px] text-slate-400">
                        Showcase the work you're proud of.
                      </p>
                    </div>

                    <span className="text-[10px] font-medium text-violet-500">
                      View all →
                    </span>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <ProjectCard
                      title="TaskFlow"
                      description="Productivity web app"
                      type="Web Application"
                    />

                    <ProjectCard
                      title="Weatherly"
                      description="Weather dashboard"
                      type="React Application"
                    />

                    <ProjectCard
                      title="NotesHub"
                      description="Notes application"
                      type="Full Stack"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <span>Profile</span>
            <span>Projects</span>
            <span>Experience</span>
            <span>Education</span>
            <span>Skills</span>
            <span>Social Links</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Sidebar item */
function DashboardNavItem({ icon, text, active = false }) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[11px] font-medium ${
        active
          ? "bg-violet-50 text-violet-600"
          : "text-slate-400 hover:bg-slate-50"
      }`}
    >
      {icon}
      {text}
    </div>
  );
}

/* Dashboard stat */
function DashboardStat({ icon, label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-50 text-violet-500">
          {icon}
        </div>

        <span className="text-lg font-bold tracking-tight text-slate-900">
          {value}
        </span>
      </div>

      <p className="mt-3 text-[10px] font-medium text-slate-400">{label}</p>
    </div>
  );
}

/* Project card */
function ProjectCard({ title, description, type }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Project visual */}
      <div className="relative h-24 overflow-hidden bg-gradient-to-br from-violet-100 via-white to-indigo-100">
        <div className="absolute left-4 top-4 h-2 w-16 rounded-full bg-white/80" />
        <div className="absolute left-4 top-9 h-1.5 w-24 rounded-full bg-violet-200" />

        <div className="absolute bottom-0 right-4 h-14 w-20 rounded-t-xl border border-white/70 bg-white/70 shadow-sm" />
        <div className="absolute bottom-3 right-7 h-1.5 w-10 rounded-full bg-violet-200" />
      </div>

      {/* Project details */}
      <div className="p-3">
        <h4 className="text-xs font-semibold text-slate-900">{title}</h4>

        <p className="mt-1 text-[10px] text-slate-400">{description}</p>

        <div className="mt-3 text-[9px] font-medium text-violet-500">
          {type}
        </div>
      </div>
    </div>
  );
}

export default Hero;
