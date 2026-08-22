function Experience({ experiences = [] }) {
  const sortedExperiences = [...experiences].sort(
    (a, b) => a.display_order - b.display_order,
  );

  if (sortedExperiences.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
        {/* Section heading */}
        <div className="mb-12 max-w-4xl sm:mb-16 lg:mb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            Experience
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
            Where I've worked{" "}
            <span className="text-violet-600">and what I've learned.</span>
          </h2>
        </div>

        {/* Experience list */}
        <div>
          {sortedExperiences.map((experience, index) => (
            <article
              key={experience.experience_id}
              className="group border-t border-slate-200 py-8 transition-colors duration-300 hover:border-violet-200 sm:py-10 lg:py-12"
            >
              <div className="grid gap-5 lg:grid-cols-[80px_minmax(0,1fr)_220px] lg:gap-12">
                {/* Number */}
                <div>
                  <p className="text-sm font-medium tracking-wide text-slate-400 transition-colors duration-300 group-hover:text-violet-600">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>

                {/* Mobile date */}
                <div className="order-2 lg:hidden">
                  <p className="text-sm font-medium text-slate-500">
                    {formatDate(experience.start_date)}
                    {" — "}
                    {experience.is_current
                      ? "Present"
                      : formatDate(experience.end_date)}
                  </p>
                </div>

                {/* Main information */}
                <div className="order-3 min-w-0 lg:order-none">
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-3xl md:text-4xl">
                    {experience.role}
                  </h3>

                  {experience.organization && (
                    <p className="mt-2 text-base font-medium text-violet-600 sm:text-lg">
                      {experience.organization}
                    </p>
                  )}

                  {experience.description && (
                    <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                      {experience.description}
                    </p>
                  )}

                  {/* Metadata */}
                  {(experience.location || experience.employment_type) && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.location && (
                        <span className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm text-slate-500 transition-colors duration-200 group-hover:border-slate-300">
                          {experience.location}
                        </span>
                      )}

                      {experience.employment_type && (
                        <span className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm text-slate-500 transition-colors duration-200 group-hover:border-slate-300">
                          {experience.employment_type}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Desktop dates */}
                <div className="hidden lg:block lg:text-right">
                  <p className="text-sm font-medium text-slate-950">
                    {formatDate(experience.start_date)}
                    {" — "}
                    {experience.is_current
                      ? "Present"
                      : formatDate(experience.end_date)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function formatDate(date) {
  if (!date) {
    return "";
  }

  const [year, month] = date.split("-");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${months[Number(month) - 1]} ${year}`;
}

export default Experience;
