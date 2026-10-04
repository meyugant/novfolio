import {
  ArrowRight,
  ExternalLink,
  Mail,
  MapPin,
  Code2,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";

function PortfolioShowcase() {
  return (
    <section
      id="explore"
      className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-40 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
            Your portfolio, your way
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-5xl">
            A professional home
            <br className="hidden sm:block" />
            for your work.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Turn your projects, skills, experience, and achievements into a
            polished online portfolio that you can share anywhere.
          </p>
        </div>

        {/* Browser mockup */}
        <div className="relative mx-auto mt-16 max-w-6xl">
          {/* Glow */}
          <div className="absolute -inset-6 rounded-[40px] bg-violet-200/30 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_35px_100px_rgba(15,23,42,0.12)]">
            {/* Browser header */}
            <div className="flex h-12 items-center border-b border-slate-200 bg-slate-50 px-4 sm:h-14 sm:px-6">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              </div>

              <div className="mx-auto flex h-7 w-48 items-center justify-center rounded-lg border border-slate-200 bg-white text-[10px] text-slate-400 sm:w-64">
                novfolio.com/your-name
              </div>

              <div className="w-10 sm:w-12" />
            </div>

            {/* Portfolio */}
            <div className="bg-white">
              {/* Portfolio navigation */}
              <div className="border-b border-slate-100 px-5 py-4 sm:px-8 lg:px-10">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-bold tracking-tight text-slate-950">
                    novfolio<span className="text-violet-500">.</span>
                  </div>

                  <div className="hidden items-center gap-6 text-[10px] font-medium text-slate-400 sm:flex">
                    <span className="text-slate-900">Home</span>
                    <span>About</span>
                    <span>Projects</span>
                    <span>Experience</span>
                    <span>Skills</span>
                    <span>Contact</span>
                  </div>

                  <div className="h-7 w-7 rounded-full bg-slate-950" />
                </div>
              </div>

              {/* Hero portfolio */}
              <div className="grid gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1fr_300px] lg:px-14 lg:py-16">
                {/* Text */}
                <div className="flex flex-col justify-center">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-violet-50 px-3 py-1.5 text-[9px] font-semibold text-violet-600">
                    AVAILABLE FOR OPPORTUNITIES
                  </div>

                  <h3 className="mt-5 text-4xl font-bold tracking-[-0.05em] text-slate-950 sm:text-5xl">
                    Yugant Sidar
                  </h3>

                  <p className="mt-3 text-lg font-medium text-violet-600">
                    Software Developer
                  </p>

                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin size={11} />
                      Bengaluru, India
                    </span>

                    <span className="flex items-center gap-1">
                      <Code2 size={11} />
                      Full Stack Development
                    </span>
                  </div>

                  <p className="mt-6 max-w-xl text-sm leading-6 text-slate-500">
                    I enjoy building clean, user-friendly web applications and
                    solving real-world problems through technology.
                  </p>

                  {/* Buttons */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="rounded-lg bg-slate-950 px-4 py-2.5 text-xs font-medium text-white"
                    >
                      View my work
                    </button>

                    <button
                      type="button"
                      className="rounded-lg border border-slate-200 px-4 py-2.5 text-xs font-medium text-slate-600"
                    >
                      Contact me
                    </button>
                  </div>

                  {/* Social */}
                  <div className="mt-7 flex items-center gap-3 text-slate-400">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200">
                      <span className="text-[10px] font-semibold">GH</span>
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200">
                      <span className="text-[10px] font-semibold">in</span>
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200">
                      <Mail size={14} />
                    </div>
                  </div>
                </div>

                {/* Abstract profile visual */}
                <div className="relative flex min-h-[250px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-violet-100 via-white to-indigo-100">
                  {/* Decorative shapes */}
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-200/60 blur-2xl" />

                  <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-indigo-200/50 blur-2xl" />

                  {/* Abstract profile */}
                  <div className="relative">
                    <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-slate-950 text-4xl font-bold text-white shadow-2xl shadow-slate-900/20">
                      A
                    </div>

                    <div className="absolute -bottom-3 -right-5 rounded-xl border border-white bg-white px-3 py-2 shadow-lg">
                      <div className="text-[9px] font-semibold text-slate-900">
                        6 Projects
                      </div>

                      <div className="mt-1 text-[8px] text-slate-400">
                        Featured work
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="border-y border-slate-100 bg-slate-50/60 px-5 py-5 sm:px-8 lg:px-14">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <PortfolioStat
                    icon={<Code2 size={15} />}
                    value="06"
                    label="Projects"
                  />

                  <PortfolioStat
                    icon={<BriefcaseBusiness size={15} />}
                    value="03"
                    label="Experience"
                  />

                  <PortfolioStat
                    icon={<GraduationCap size={15} />}
                    value="02"
                    label="Education"
                  />

                  <PortfolioStat
                    icon={<Code2 size={15} />}
                    value="12"
                    label="Skills"
                  />
                </div>
              </div>

              {/* Projects */}
              <div className="px-5 py-10 sm:px-8 sm:py-12 lg:px-14">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-violet-600">
                      Selected work
                    </p>

                    <h4 className="mt-2 text-xl font-bold tracking-tight text-slate-950">
                      Featured Projects
                    </h4>
                  </div>

                  <span className="hidden text-xs font-medium text-violet-600 sm:block">
                    View all projects →
                  </span>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <PortfolioProject
                    title="TaskFlow"
                    description="A productivity web application."
                    technologies="React • Node.js"
                    variant="purple"
                  />

                  <PortfolioProject
                    title="Weatherly"
                    description="A real-time weather dashboard."
                    technologies="React • API"
                    variant="blue"
                  />

                  <PortfolioProject
                    title="NotesHub"
                    description="A minimal notes application."
                    technologies="React • PostgreSQL"
                    variant="slate"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom content */}
        <div className="mx-auto mt-12 flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="max-w-xl">
            <h3 className="text-lg font-semibold tracking-tight text-slate-950">
              One link. Your entire professional story.
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Give recruiters, clients, and your network one place to discover
              your work, experience, education, and skills.
            </p>
          </div>

          <Link
            to="/register"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition duration-200 hover:-translate-y-0.5 hover:bg-violet-600"
          >
            Create your portfolio
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* Stats */
function PortfolioStat({ icon, value, label }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
        {icon}
      </div>

      <div>
        <p className="text-sm font-bold text-slate-950">{value}</p>
        <p className="text-[9px] text-slate-400">{label}</p>
      </div>
    </div>
  );
}

/* Project card */
function PortfolioProject({ title, description, technologies, variant }) {
  const backgrounds = {
    purple: "from-violet-100 via-purple-50 to-white",
    blue: "from-indigo-100 via-blue-50 to-white",
    slate: "from-slate-200 via-slate-50 to-white",
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Original CSS visual */}
      <div
        className={`relative h-32 overflow-hidden bg-gradient-to-br ${backgrounds[variant]}`}
      >
        <div className="absolute left-5 top-5 h-2 w-20 rounded-full bg-white/90" />

        <div className="absolute left-5 top-11 h-1.5 w-28 rounded-full bg-slate-300/60" />

        <div className="absolute bottom-0 right-5 h-20 w-24 rounded-t-xl border border-white/80 bg-white/70 shadow-sm">
          <div className="mt-5 ml-4 h-2 w-12 rounded-full bg-violet-200" />
          <div className="mt-3 ml-4 h-1.5 w-16 rounded-full bg-slate-200" />
          <div className="mt-2 ml-4 h-1.5 w-10 rounded-full bg-slate-200" />
        </div>
      </div>

      {/* Details */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h5 className="text-sm font-semibold text-slate-950">{title}</h5>

          <ExternalLink
            size={13}
            className="text-slate-300 transition-colors group-hover:text-violet-500"
          />
        </div>

        <p className="mt-2 text-xs leading-5 text-slate-400">{description}</p>

        <p className="mt-3 text-[9px] font-medium text-violet-500">
          {technologies}
        </p>
      </div>
    </div>
  );
}

export default PortfolioShowcase;
