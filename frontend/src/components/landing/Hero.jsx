import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.10) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Soft background glow */}
      <div className="absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-6 sm:pt-40 lg:px-8 lg:pb-28 lg:pt-48">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            Build your professional online presence
          </div>
        </div>

        {/* Hero content */}
        <div className="mx-auto mt-8 max-w-4xl text-center">
          <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
            Your work deserves
            <br />a better home.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            Create a professional online portfolio to showcase your projects,
            experience, education, skills, and everything that makes you stand
            out.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/register"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-violet-600 sm:w-auto"
            >
              Create your portfolio
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <a
              href="#explore"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-medium text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-600 sm:w-auto"
            >
              Explore portfolios
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.10)]">
            {/* Browser bar */}
            <div className="flex h-10 items-center border-b border-slate-200 bg-slate-50 px-4">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              </div>

              <div className="mx-auto h-5 w-32 rounded-md bg-white sm:w-48" />
            </div>

            {/* Dashboard */}
            <div className="flex min-h-[320px] sm:min-h-[420px]">
              {/* Sidebar */}
              <div className="hidden w-36 shrink-0 border-r border-slate-100 bg-white p-4 sm:block">
                <div className="h-4 w-20 rounded bg-slate-950" />

                <div className="mt-8 space-y-2">
                  <div className="h-8 rounded-lg bg-violet-50" />
                  <div className="h-8 rounded-lg bg-slate-50" />
                  <div className="h-8 rounded-lg bg-slate-50" />
                  <div className="h-8 rounded-lg bg-slate-50" />
                  <div className="h-8 rounded-lg bg-slate-50" />
                </div>
              </div>

              {/* Main dashboard */}
              <div className="min-w-0 flex-1 bg-white p-5 sm:p-8">
                {/* Profile row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-xs font-medium text-white">
                      Y
                    </div>

                    <div>
                      <div className="h-3 w-24 rounded bg-slate-950" />
                      <div className="mt-2 h-2.5 w-16 rounded bg-slate-200" />
                    </div>
                  </div>

                  <div className="h-8 w-20 rounded-lg border border-slate-200" />
                </div>

                {/* Heading */}
                <div className="mt-8">
                  <div className="h-7 w-52 rounded bg-slate-950 sm:w-72" />

                  <div className="mt-3 h-2.5 w-56 rounded bg-slate-100 sm:w-80" />

                  <div className="mt-2 h-2.5 w-44 rounded bg-slate-100 sm:w-64" />
                </div>

                {/* Cards */}
                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-100 bg-slate-50 p-4"
                    >
                      <div className="h-3 w-14 rounded bg-violet-100" />

                      <div className="mt-5 h-4 w-20 rounded bg-slate-800" />

                      <div className="mt-3 h-2.5 w-full rounded bg-slate-200" />

                      <div className="mt-2 h-2.5 w-3/4 rounded bg-slate-200" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-slate-400 sm:text-sm">
            One place for your profile, projects, experience, education, skills,
            and social links.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
