import { UserPlus, PencilLine, Share2, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Create your account",
      description:
        "Sign up for Novfolio and get your own workspace to build and manage your professional portfolio.",
      points: ["Create your account", "Access your dashboard"],
    },
    {
      number: "02",
      icon: PencilLine,
      title: "Build your portfolio",
      description:
        "Add your profile, projects, experience, education, skills, and social links from one simple dashboard.",
      points: ["Add your professional details", "Organize your work"],
    },
    {
      number: "03",
      icon: Share2,
      title: "Publish and share",
      description:
        "Publish your portfolio and share your personal portfolio link with recruiters, clients, and your network.",
      points: ["Get your public portfolio", "Share it anywhere"],
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-slate-50 px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
            How it works
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-5xl">
            From blank page to
            <br className="hidden sm:block" />
            professional portfolio.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Create and publish your professional online presence in just a few
            simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-7 hidden h-px bg-slate-200 lg:block">
            <div className="absolute left-1/3 top-0 w-1/3 border-t border-dashed border-violet-200" />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.07)]"
                >
                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    {/* Icon */}
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/10 transition duration-300 group-hover:bg-violet-600">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    {/* Number */}
                    <span className="text-xs font-semibold tracking-[0.2em] text-slate-300">
                      STEP {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>
                  </div>

                  {/* Points */}
                  <div className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
                    {step.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2 text-xs font-medium text-slate-500"
                      >
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                          <Check size={10} strokeWidth={2.5} />
                        </span>

                        {point}
                      </div>
                    ))}
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-violet-500 transition-all duration-300 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            to="/register"
            className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition duration-200 hover:-translate-y-0.5 hover:bg-violet-600"
          >
            Start building your portfolio
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

export default HowItWorks;
