function Stats({ portfolio }) {
  const projects = portfolio?.projects || [];
  const experiences = portfolio?.experiences || [];
  const skills = portfolio?.skills || [];

  const technologySet = new Set();

  projects.forEach((project) => {
    if (project.technologies?.length) {
      project.technologies.forEach((technology) => {
        technologySet.add(technology);
      });
    }
  });

  const stats = [
    {
      value: projects.length,
      label: "Projects built",
    },
    {
      value: technologySet.size,
      label: "Technologies",
    },
    {
      value: experiences.length,
      label: "Experiences",
    },
  ];

  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`px-6 py-8 sm:py-10 lg:px-10 ${
              index !== stats.length - 1
                ? "border-b border-slate-200 md:border-b-0 md:border-r"
                : ""
            }`}
          >
            <p className="text-4xl font-bold tracking-[-0.03em] text-slate-950 sm:text-5xl">
              {String(stat.value).padStart(2, "0")}+
            </p>

            <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
