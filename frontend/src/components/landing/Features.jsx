import {
  UserRound,
  FolderKanban,
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  Share2,
  ArrowUpRight,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: UserRound,
      number: "01",
      title: "Professional Profile",
      description:
        "Create a clear professional profile with your name, bio, location, contact information, and profile image.",
    },
    {
      icon: FolderKanban,
      number: "02",
      title: "Projects",
      description:
        "Showcase your best work with project descriptions, technologies, images, and live or GitHub links.",
    },
    {
      icon: BriefcaseBusiness,
      number: "03",
      title: "Experience",
      description:
        "Present your roles, organizations, employment history, achievements, and professional journey.",
    },
    {
      icon: GraduationCap,
      number: "04",
      title: "Education",
      description:
        "Highlight your degrees, institutions, fields of study, academic background, and achievements.",
    },
    {
      icon: Code2,
      number: "05",
      title: "Skills",
      description:
        "Organize your technical and professional skills so visitors can quickly understand your strengths.",
    },
    {
      icon: Share2,
      number: "06",
      title: "Social Links",
      description:
        "Connect your GitHub, LinkedIn, and other important profiles from one professional portfolio.",
    },
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
            Everything you need
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-5xl">
            All the essential sections
            <br className="hidden sm:block" />
            to tell your story.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Novfolio gives you everything you need to create a complete and
            professional portfolio — without having to build a website from
            scratch.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.number}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.07)] sm:p-7"
              >
                {/* Number */}
                <div className="absolute right-5 top-5 text-[10px] font-semibold tracking-widest text-slate-300 transition-colors duration-300 group-hover:text-violet-300">
                  {feature.number}
                </div>

                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition-all duration-300 group-hover:bg-violet-600 group-hover:text-white">
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="mt-7">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom arrow */}
                <div className="mt-7 flex items-center text-xs font-medium text-slate-400 transition-colors duration-300 group-hover:text-violet-600">
                  <span>Included with your portfolio</span>

                  <ArrowUpRight
                    size={14}
                    className="ml-1 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-violet-500 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
