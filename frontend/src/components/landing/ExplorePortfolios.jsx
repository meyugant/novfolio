import {
  ArrowRight,
  Code2,
  GraduationCap,
  Palette,
  BriefcaseBusiness,
} from "lucide-react";
import { Link } from "react-router-dom";

const portfolioTypes = [
  {
    icon: Code2,
    category: "Developer",
    title: "Showcase your technical work",
    description:
      "Present your projects, technical skills, experience, and professional journey in one place.",
    tags: ["Projects", "Skills", "Experience"],
  },
  {
    icon: GraduationCap,
    category: "Student",
    title: "Turn your learning into a portfolio",
    description:
      "Bring together your education, projects, achievements, and the skills you are developing.",
    tags: ["Education", "Projects", "Skills"],
  },
  {
    icon: Palette,
    category: "Designer",
    title: "Give your creative work a home",
    description:
      "Showcase your creative projects, experience, skills, and professional story in one portfolio.",
    tags: ["Projects", "Experience", "Skills"],
  },
];

function PortfolioPreview({ category, icon: Icon }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Browser header */}
      <div className="flex h-9 items-center border-b border-slate-200 bg-slate-50 px-3">
        <div className="flex gap-1.5">
          {[1, 2, 3].map((dot) => (
            <span key={dot} className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          ))}
        </div>

        <div className="mx-auto rounded-md border border-slate-100 bg-white px-3 py-1 text-[9px] text-slate-400">
          Portfolio preview
        </div>
      </div>

      {/* Mock portfolio */}
      <div className="h-[245px] p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-600">
            <Icon size={19} />
          </div>

          <div className="space-y-2">
            <div className="h-2.5 w-24 rounded bg-slate-800" />
            <div className="h-2 w-16 rounded bg-slate-200" />
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold text-slate-800">
            {category} Portfolio
          </p>

          <div className="mt-3 space-y-2">
            <div className="h-2 w-full rounded bg-slate-100" />
            <div className="h-2 w-5/6 rounded bg-slate-100" />
            <div className="h-2 w-3/5 rounded bg-slate-100" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="h-[76px] rounded-lg border border-slate-200 bg-slate-50 p-3"
            >
              <div className="h-2 w-10 rounded bg-violet-200" />
              <div className="mt-3 h-2 w-16 max-w-full rounded bg-slate-300" />
              <div className="mt-2 h-1.5 w-12 rounded bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExplorePortfolios() {
  return (
    <section
      id="explore-portfolios"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Subtle background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
            Explore portfolios
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
            See how your professional
            <br className="hidden sm:block" />
            story can come together.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Discover how different professionals can organize their projects,
            skills, education, and experience into one polished portfolio.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioTypes.map((portfolio) => {
            const Icon = portfolio.icon;

            return (
              <div
                key={portfolio.category}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.09)]"
              >
                {/* Preview */}
                <div className="border-b border-slate-100 bg-slate-50/80 p-4 sm:p-5">
                  <PortfolioPreview category={portfolio.category} icon={Icon} />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <span className="rounded-full border border-violet-100 bg-violet-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-700">
                      {portfolio.category}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-950">
                    {portfolio.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {portfolio.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {portfolio.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <p className="text-xs font-medium text-violet-600">
                      Example portfolio layout
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
            <BriefcaseBusiness size={21} />
          </div>

          <h3 className="mt-5 text-xl font-semibold text-slate-950">
            Ready to showcase your work?
          </h3>

          <p className="mt-3 max-w-lg text-sm leading-7 text-slate-600">
            Build a portfolio that brings your professional story together and
            makes your work easy to share.
          </p>

          <Link
            to="/register"
            className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
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

export default ExplorePortfolios;
