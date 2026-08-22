import { ArrowRight, ExternalLink } from "lucide-react";

function PortfolioShowcase() {
  return (
    <section
      id="explore"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
            Your portfolio, your way
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
            A professional home
            <br className="hidden sm:block" />
            for your work.
          </h2>

          <p className="mt-5 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
            Turn your experience, projects, skills, and achievements into a
            polished online portfolio that you can share anywhere.
          </p>
        </div>

        {/* Showcase */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
          {/* Browser bar */}
          <div className="flex h-12 items-center border-b border-slate-200 bg-white px-4 sm:h-14 sm:px-6">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            </div>

            <div className="mx-auto hidden h-7 w-64 items-center justify-center rounded-lg bg-slate-50 text-[10px] text-slate-400 sm:flex">
              novfolio.com/your-name
            </div>
          </div>

          {/* Portfolio preview */}
          <div className="grid min-h-[480px] md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[250px_minmax(0,1fr)]">
            {/* Sidebar */}
            <aside className="hidden border-r border-slate-200 bg-white p-6 md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-medium text-white">
                  Y
                </div>

                <div>
                  <div className="h-3 w-20 rounded bg-slate-950" />
                  <div className="mt-2 h-2 w-14 rounded bg-slate-200" />
                </div>
              </div>

              <div className="mt-10 space-y-2">
                {[
                  "Overview",
                  "Projects",
                  "Experience",
                  "Education",
                  "Skills",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-lg px-3 py-2.5 text-xs ${
                      index === 0
                        ? "bg-violet-50 font-medium text-violet-600"
                        : "text-slate-400"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </aside>

            {/* Main portfolio */}
            <div className="min-w-0 bg-white p-5 sm:p-8 lg:p-10">
              {/* Profile */}
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white">
                    Y
                  </div>

                  <div>
                    <div className="h-5 w-32 rounded bg-slate-950 sm:w-40" />
                    <div className="mt-2 h-3 w-24 rounded bg-slate-200" />
                  </div>
                </div>

                <div className="h-9 w-28 rounded-lg border border-slate-200" />
              </div>

              {/* Intro */}
              <div className="mt-10 max-w-2xl">
                <div className="h-7 w-64 rounded bg-slate-950 sm:h-8 sm:w-80" />

                <div className="mt-4 space-y-2">
                  <div className="h-2.5 w-full max-w-xl rounded bg-slate-100" />
                  <div className="h-2.5 w-5/6 max-w-lg rounded bg-slate-100" />
                  <div className="h-2.5 w-2/3 max-w-md rounded bg-slate-100" />
                </div>
              </div>

              {/* Cards */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="h-8 w-8 rounded-lg bg-violet-100" />

                    <div className="mt-5 h-4 w-28 rounded bg-slate-950" />

                    <div className="mt-3 space-y-2">
                      <div className="h-2 w-full rounded bg-slate-200" />
                      <div className="h-2 w-4/5 rounded bg-slate-200" />
                    </div>

                    <div className="mt-5 flex items-center gap-1 text-xs text-violet-600">
                      View project
                      <ArrowRight size={12} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            One shareable link for your profile, projects, experience,
            education, skills, and social links.
          </p>

          <button
            type="button"
            onClick={() => {
              window.location.href = "/register";
            }}
            className="group flex shrink-0 items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Create your portfolio
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default PortfolioShowcase;
