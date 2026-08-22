import { useState } from "react";

function Projects({ projects = [] }) {
  const sortedProjects = [...projects].sort(
    (a, b) => a.display_order - b.display_order,
  );

  const [failedImages, setFailedImages] = useState({});

  if (sortedProjects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            Projects
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
            Selected work that
            <span className="text-violet-600"> solves real problems.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:mt-8 sm:text-lg sm:leading-8">
            A selection of projects I've built using modern technologies,
            thoughtful design, and practical engineering.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-14 space-y-16 sm:mt-16 sm:space-y-20 lg:mt-20">
          {sortedProjects.map((project, index) => {
            const hasImage =
              typeof project.image_url === "string" &&
              project.image_url.trim() !== "" &&
              !failedImages[project.project_id];

            return (
              <article
                key={project.project_id}
                className="group border-b border-slate-200 pb-16 last:border-0 sm:pb-20"
              >
                {/* Image */}
                {hasImage && (
                  <div className="mb-7 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 sm:mb-8 sm:rounded-3xl">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      onError={() =>
                        setFailedImages((previous) => ({
                          ...previous,
                          [project.project_id]: true,
                        }))
                      }
                      className="block h-[220px] w-full object-cover transition duration-700 group-hover:scale-[1.02] sm:h-[300px] lg:h-[360px]"
                    />
                  </div>
                )}

                {/* Information */}
                <div className="grid gap-6 lg:grid-cols-[80px_1fr_auto] lg:items-start lg:gap-12">
                  {/* Number */}
                  <div>
                    <p className="text-sm font-medium text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  {/* Main content */}
                  <div className="min-w-0">
                    <h3 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-3xl">
                      {project.title}
                    </h3>

                    {project.description && (
                      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                        {project.description}
                      </p>
                    )}

                    {project.technologies?.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                        {project.technologies.map((technology, techIndex) => (
                          <span
                            key={`${technology}-${techIndex}`}
                            className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs text-slate-600 sm:px-4 sm:py-2 sm:text-sm"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch lg:justify-start">
                    {project.project_url && (
                      <a
                        href={project.project_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-600"
                      >
                        View project →
                      </a>
                    )}

                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-600"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
