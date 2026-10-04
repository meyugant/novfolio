import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

function FinalCTA() {
  const points = [
    "Build your professional portfolio",
    "Showcase your work and experience",
    "Share one link with anyone",
  ];

  return (
    <section
      id="get-started"
      className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
          Start building
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-6xl">
          Your next opportunity
          <br className="hidden sm:block" />
          could start with one link.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
          Create a professional portfolio that gives your projects, skills,
          experience, and education the space they deserve.
        </p>

        {/* CTA */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/register"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Create your portfolio
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>

          <a
            href="#features"
            className="inline-flex items-center rounded-xl border border-slate-700 px-6 py-3.5 text-sm font-medium text-slate-300 transition duration-200 hover:border-slate-600 hover:bg-slate-900 hover:text-white"
          >
            Explore features
          </a>
        </div>

        {/* Points */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-7">
          {points.map((point) => (
            <div
              key={point}
              className="flex items-center gap-2 text-xs text-slate-400"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">
                <Check size={12} strokeWidth={2.5} />
              </span>

              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
