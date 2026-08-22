import { UserPlus, PencilLine, Share2, ArrowRight } from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Create your account",
      description:
        "Sign up for Novfolio and get your own space to build and manage your professional portfolio.",
    },
    {
      number: "02",
      icon: PencilLine,
      title: "Build your portfolio",
      description:
        "Add your profile, projects, experience, education, skills, and social links from one simple dashboard.",
    },
    {
      number: "03",
      icon: Share2,
      title: "Share your work",
      description:
        "Publish your portfolio and share your personal portfolio link with recruiters, clients, and your network.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-100 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
            How it works
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
            From blank page to
            <br className="hidden sm:block" />
            professional portfolio.
          </h2>

          <p className="mt-5 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
            Everything you need to create and share your professional online
            presence, without spending hours designing a website.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          {/* Connecting line */}
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-10 hidden h-px bg-slate-200 md:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-7"
              >
                {/* Step number + icon */}
                <div className="relative flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-semibold tracking-widest text-slate-300">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-7 text-lg font-semibold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => {
              window.location.href = "/register";
            }}
            className="group flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Start building your portfolio
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

export default HowItWorks;
