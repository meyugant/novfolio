import {
  Plus,
  User,
  FolderKanban,
  BriefcaseBusiness,
  Code2,
} from "lucide-react";

function QuickActions() {
  const actions = [
    {
      label: "Add Project",
      href: "#projects",
      icon: FolderKanban,
    },
    {
      label: "Add Experience",
      href: "#experience",
      icon: BriefcaseBusiness,
    },
    {
      label: "Add Skill",
      href: "#skills",
      icon: Code2,
    },
    {
      label: "Edit Profile",
      href: "#profile",
      icon: User,
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-7">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
          Shortcuts
        </p>

        <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
          Quick actions
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Jump directly to the sections you update most often.
        </p>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <a
              key={action.label}
              href={action.href}
              className="group flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-medium text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-600"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition group-hover:bg-violet-50 group-hover:text-violet-600">
                <Icon size={17} strokeWidth={1.8} />
              </span>

              <span>{action.label}</span>

              <Plus
                size={15}
                className="ml-auto text-slate-300 transition group-hover:text-violet-500"
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default QuickActions;
