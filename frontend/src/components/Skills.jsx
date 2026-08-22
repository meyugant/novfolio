function Skills({ skills = [] }) {
  const sortedSkills = [...skills].sort(
    (a, b) => a.display_order - b.display_order,
  );

  if (sortedSkills.length === 0) {
    return null;
  }

  const groupedSkills = sortedSkills.reduce((groups, skill) => {
    const category = skill.category || "Other";

    if (!groups[category]) {
      groups[category] = [];
    }

    groups[category].push(skill);

    return groups;
  }, {});

  const categories = Object.entries(groupedSkills);

  return (
    <section id="skills" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
        {/* Heading */}
        <div className="mb-12 max-w-3xl sm:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            Skills
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
            Tools I use to
            <span className="text-violet-600"> build and solve problems.</span>
          </h2>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          {categories.map(([category, categorySkills], index) => (
            <article
              key={category}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:p-7 lg:p-8"
            >
              {/* Category Header */}
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400 sm:mb-3">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                    {category}
                  </h3>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-6 sm:mt-8">
                {categorySkills.map((skill, skillIndex) => (
                  <div
                    key={skill.skill_id}
                    className={`flex items-center justify-between gap-4 py-3.5 sm:gap-6 sm:py-4 ${
                      skillIndex !== categorySkills.length - 1
                        ? "border-b border-slate-100"
                        : ""
                    }`}
                  >
                    <span className="min-w-0 text-sm font-medium text-slate-800 transition-colors duration-200 group-hover:text-slate-950 sm:text-base">
                      {skill.name}
                    </span>

                    {skill.proficiency && (
                      <span className="shrink-0 text-xs text-slate-400 sm:text-sm">
                        {skill.proficiency}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
