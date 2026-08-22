function CompletionCard({ portfolio }) {
  const profile = portfolio?.profile || {};

  const checks = [
    {
      label: "Profile",
      completed: Boolean(profile.full_name && profile.bio),
    },
    {
      label: "Projects",
      completed: (portfolio?.projects?.length || 0) > 0,
    },
    {
      label: "Experience",
      completed: (portfolio?.experiences?.length || 0) > 0,
    },
    {
      label: "Education",
      completed: (portfolio?.educations?.length || 0) > 0,
    },
    {
      label: "Skills",
      completed: (portfolio?.skills?.length || 0) > 0,
    },
    {
      label: "Social Links",
      completed: (portfolio?.social_links?.length || 0) > 0,
    },
  ];

  const completedCount = checks.filter((item) => item.completed).length;

  const completion = Math.round((completedCount / checks.length) * 100);

  const remainingItems = checks.filter((item) => !item.completed);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-7">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
            Progress
          </p>

          <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
            Portfolio completion
          </h2>
        </div>

        <span className="text-2xl font-bold tracking-tight text-slate-950">
          {completion}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-violet-600 transition-all duration-500"
          style={{
            width: `${completion}%`,
          }}
        />
      </div>

      {/* Status */}
      <p className="mt-4 text-sm leading-6 text-slate-500">
        {completion === 100
          ? "Your portfolio is complete and ready to share."
          : `${remainingItems.length} ${
              remainingItems.length === 1 ? "section is" : "sections are"
            } still waiting for your attention.`}
      </p>

      {/* Checklist */}
      <div className="mt-6 space-y-3">
        {checks.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-bold ${
                  item.completed
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : "border-slate-300 bg-white text-transparent"
                }`}
              >
                ✓
              </span>

              <span
                className={`text-sm ${
                  item.completed ? "text-slate-700" : "text-slate-400"
                }`}
              >
                {item.label}
              </span>
            </div>

            <span
              className={`text-xs font-medium ${
                item.completed ? "text-emerald-600" : "text-slate-400"
              }`}
            >
              {item.completed ? "Complete" : "Missing"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CompletionCard;
