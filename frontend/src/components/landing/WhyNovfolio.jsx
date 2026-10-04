import { ArrowRight, Check, Link2, RefreshCw, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

function WhyNovfolio() {
  const benefits = [
    {
      icon: Link2,
      title: "One professional link",
      description:
        "Give recruiters, clients, and collaborators one place to discover your work.",
    },
    {
      icon: Check,
      title: "Built around your work",
      description:
        "Bring your projects, experience, education, skills, and profile together.",
    },
    {
      icon: RefreshCw,
      title: "Easy to keep updated",
      description:
        "Update your portfolio whenever your experience, skills, or projects grow.",
    },
    {
      icon: Share2,
      title: "Ready to share",
      description:
        "Publish your portfolio and use your personal link wherever you showcase your work.",
    },
  ];

  return (
    <section
      id="why-novfolio"
      className="relative overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left side */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
              Why novfolio?
            </p>

            <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
              Your work deserves more than another PDF.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
              Turn your professional journey into a polished online presence
              that is easy to share, easy to update, and built around the work
              you want people to see.
            </p>

            <Link
              to="/register"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Build your portfolio
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Right side */}
          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_25px_70px_rgba(15,23,42,0.08)] sm:p-7">
              {/* Portfolio preview header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                    A
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-slate-950">
                      Yugant Sidar
                    </div>
                    <div className="mt-1 text-xs text-slate-400">
                      Software Developer
                    </div>
                  </div>
                </div>

                <div className="hidden rounded-lg border border-slate-200 px-3 py-2 text-[10px] font-medium text-slate-500 sm:block">
                  View portfolio
                </div>
              </div>

              {/* Portfolio URL */}
              <div className="mt-6 rounded-xl border border-violet-100 bg-violet-50/60 px-4 py-3">
                <div className="text-[10px] font-medium uppercase tracking-[0.16em] text-violet-500">
                  Your public portfolio
                </div>

                <div className="mt-1 text-sm font-medium text-slate-900">
                  novfolio.com/alex-carter
                </div>
              </div>

              {/* Sections */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <PreviewItem
                  number="01"
                  title="Profile"
                  description="Your professional introduction"
                />

                <PreviewItem
                  number="02"
                  title="Projects"
                  description="Your best work and achievements"
                />

                <PreviewItem
                  number="03"
                  title="Experience"
                  description="Your professional journey"
                />

                <PreviewItem
                  number="04"
                  title="Education"
                  description="Your academic background"
                />

                <PreviewItem
                  number="05"
                  title="Skills"
                  description="Your technical strengths"
                />

                <PreviewItem
                  number="06"
                  title="Social Links"
                  description="Your professional profiles"
                />
              </div>
            </div>

            {/* Floating share card */}
            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-[0_15px_40px_rgba(15,23,42,0.1)] sm:block lg:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                  <Share2 size={16} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-900">
                    One link. Everything.
                  </p>
                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Ready to share anywhere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-20 grid gap-4 border-t border-slate-200 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group rounded-2xl border border-transparent p-5 transition duration-300 hover:border-slate-200 hover:bg-white hover:shadow-[0_16px_40px_rgba(15,23,42,0.05)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm ring-1 ring-slate-200 transition duration-300 group-hover:bg-violet-600 group-hover:text-white group-hover:ring-violet-600">
                  <Icon size={18} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-sm font-semibold text-slate-950">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PreviewItem({ number, title, description }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition duration-200 hover:border-violet-200 hover:bg-violet-50/40">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">{title}</h3>

          <p className="mt-1 text-xs leading-5 text-slate-400">{description}</p>
        </div>

        <span className="text-[10px] font-semibold tracking-wider text-slate-300">
          {number}
        </span>
      </div>
    </div>
  );
}

export default WhyNovfolio;
