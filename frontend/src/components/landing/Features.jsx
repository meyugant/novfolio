import {
  UserRound,
  FolderKanban,
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  Share2,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: UserRound,
      title: "Professional Profile",
      description:
        "Create a clear professional profile with your name, bio, location, contact information, and profile image.",
    },
    {
      icon: FolderKanban,
      title: "Showcase Your Projects",
      description:
        "Highlight your best projects with descriptions, technologies, links, and the work you're most proud of.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Share Your Experience",
      description:
        "Present your professional experience, roles, organizations, employment history, and achievements.",
    },
    {
      icon: GraduationCap,
      title: "Education & Background",
      description:
        "Display your education, degrees, institutions, fields of study, and academic achievements.",
    },
    {
      icon: Code2,
      title: "Highlight Your Skills",
      description:
        "Organize your technical and professional skills so visitors can quickly understand what you can do.",
    },
    {
      icon: Share2,
      title: "One Link to Share",
      description:
        "Share your professional portfolio with a single public URL that you can use anywhere.",
    },
  ];

  return (
    <section
      id="features"
      className="relative bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
            Everything you need
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
            Your professional story,
            <br className="hidden sm:block" />
            all in one place.
          </h2>

          <p className="mt-5 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
            Build an online portfolio that brings together your profile,
            projects, experience, education, skills, and social links.
          </p>
        </div>

        {/* Features */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-7"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition duration-300 group-hover:bg-violet-600 group-hover:text-white">
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                {/* Text */}
                <h3 className="mt-6 text-base font-semibold text-slate-950 sm:text-lg">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
