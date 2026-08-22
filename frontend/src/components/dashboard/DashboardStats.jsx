function DashboardStats({ portfolio }) {
  const projects = portfolio?.projects?.length || 0;
  const experiences = portfolio?.experiences?.length || 0;
  const educations = portfolio?.educations?.length || 0;
  const skills = portfolio?.skills?.length || 0;

  const stats = [
    {
      label: "Projects",
      value: projects,
      description: "Projects in your portfolio",
    },
    {
      label: "Experience",
      value: experiences,
      description: "Professional experiences",
    },
    {
      label: "Education",
      value: educations,
      description: "Education entries",
    },
    {
      label: "Skills",
      value: skills,
      description: "Skills you've added",
    },
  ];

  return (
    <section className="px-4 pb-5 sm:px-6 sm:pb-6 md:px-8 lg:px-10">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              transition
              duration-300
              hover:-translate-y-0.5
              hover:border-violet-200
              hover:shadow-[0_12px_30px_rgba(15,23,42,0.05)]
              sm:p-6
            "
          >
            {/* Label */}

            <p className="text-sm font-medium text-slate-500">{stat.label}</p>

            {/* Value */}

            <p
              className="
                mt-3
                text-3xl
                font-bold
                tracking-[-0.03em]
                text-slate-950
                sm:mt-4
                sm:text-4xl
              "
            >
              {String(stat.value).padStart(2, "0")}
            </p>

            {/* Description */}

            <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DashboardStats;
