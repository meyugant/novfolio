import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Palette,
  FlaskConical,
} from "lucide-react";
import { Link } from "react-router-dom";

function WhoIsNovfolioFor() {
  const audiences = [
    {
      icon: GraduationCap,
      title: "Students",
      description:
        "Showcase projects, skills, education, achievements, and everything you are building as you start your career.",
    },
    {
      icon: Code2,
      title: "Developers",
      description:
        "Put your technical projects, experience, skills, GitHub work, and professional journey in one place.",
    },
    {
      icon: Palette,
      title: "Designers",
      description:
        "Create a professional online presence that brings your work, experience, skills, and creative journey together.",
    },
    {
      icon: FlaskConical,
      title: "Researchers",
      description:
        "Present your academic background, research experience, projects, skills, and professional interests.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Professionals",
      description:
        "Build a personal portfolio that makes your experience, achievements, projects, and expertise easy to discover.",
    },
  ];

  return (
    <section
      id="who-is-novfolio-for"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
            Built for your journey
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
            One portfolio.
            <br className="hidden sm:block" />
            Different paths.
          </h2>

          <p className="mt-5 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
            Whether you are starting your career, building your expertise, or
            growing professionally, novfolio gives you a place to showcase what
            you do.
          </p>
        </div>

        {/* Audience cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {audiences.map((audience) => {
            const Icon = audience.icon;

            return (
              <div
                key={audience.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_20px_45px_rgba(15,23,42,0.07)]"
              >
                {/* Background number */}
                <span className="pointer-events-none absolute -right-2 -top-5 text-7xl font-bold tracking-[-0.08em] text-slate-50 transition duration-300 group-hover:text-violet-50">
                  {String(audiences.indexOf(audience) + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition duration-300 group-hover:bg-violet-600 group-hover:text-white">
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="relative mt-6 text-base font-semibold text-slate-950">
                  {audience.title}
                </h3>

                <p className="relative mt-2 text-sm leading-6 text-slate-500">
                  {audience.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-violet-600 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA / message */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:p-8">
          <div>
            <p className="text-base font-semibold text-slate-950 sm:text-lg">
              Your path is unique. Your portfolio should be too.
            </p>

            <p className="mt-1.5 text-sm leading-6 text-slate-500">
              Bring your professional story together and give your work a place
              to be discovered.
            </p>
          </div>

          <Link
            to="/register"
            className="group flex shrink-0 items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
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

export default WhoIsNovfolioFor;
