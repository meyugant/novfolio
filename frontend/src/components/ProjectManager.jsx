import { useEffect, useState } from "react";
import DeleteConfirmModal from "./dashboard/DeleteConfirm";
import { uploadImage } from "../api/upload";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../api/project";

function ProjectManager() {
  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [deleteId, setDeleteId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    technologies: "",
    project_url: "",
    github_url: "",
    image_url: "",
    is_featured: false,
    display_order: 0,
  });

  const loadProjects = async () => {
    try {
      const data = await getProjects();

      setProjects(data);
    } catch (error) {
      console.error(error);

      setError(error.response?.data?.detail || "Unable to load projects.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setUploading(true);
    setError("");

    try {
      const data = await uploadImage(file);

      setForm({
        ...form,
        image_url: data.url,
      });
    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.detail || "Failed to upload project image.",
      );
    } finally {
      setUploading(false);
    }
  };

  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      technologies: "",
      project_url: "",
      github_url: "",
      image_url: "",
      is_featured: false,
      display_order: 0,
    });

    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      const projectData = {
        ...form,

        technologies: form.technologies
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item !== ""),

        display_order: Number(form.display_order),
      };

      if (editingId) {
        const updatedProject = await updateProject(editingId, projectData);

        setProjects(
          projects.map((project) =>
            (project.id || project.project_id) === editingId
              ? updatedProject
              : project,
          ),
        );
      } else {
        const newProject = await createProject(projectData);

        setProjects([...projects, newProject]);
      }

      resetForm();
    } catch (error) {
      console.error(error);

      setError(error.response?.data?.detail || "Unable to save project.");
    }
  };

  const handleEdit = (project) => {
    const projectId = project.id || project.project_id;

    setEditingId(projectId);

    setForm({
      title: project.title || "",
      description: project.description || "",
      technologies: project.technologies?.join(", ") || "",
      project_url: project.project_url || "",
      github_url: project.github_url || "",
      image_url: project.image_url || "",
      is_featured: project.is_featured || false,
      display_order: project.display_order ?? 0,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const confirmDelete = async () => {
    if (!deleteId) {
      return;
    }

    setDeleting(true);
    setError("");

    try {
      await deleteProject(deleteId);

      setProjects(
        projects.filter(
          (project) => (project.id || project.project_id) !== deleteId,
        ),
      );

      setDeleteId(null);
    } catch (error) {
      console.error(error);

      setError(error.response?.data?.detail || "Unable to delete project.");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8">
        <p className="text-sm text-slate-500">Loading projects...</p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm lg:p-9">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
          Projects
        </p>

        <div className="mt-3">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Your projects
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            Add and manage the projects displayed on your portfolio.
          </p>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
          <p className="text-sm font-medium text-red-600">{error}</p>
        </div>
      )}

      {/* Add / Edit Form */}
      <div className="rounded-2xl bg-slate-50 p-5 lg:p-6">
        <div className="mb-6">
          <h3 className="text-base font-semibold text-slate-950">
            {editingId ? "Edit Project" : "Add New Project"}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {editingId
              ? "Update the details of your project."
              : "Add a project to showcase your work."}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Project Title
            </label>

            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Social Media Platform"
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
            />
          </div>

          {/* Description */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Description
            </label>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={5}
              placeholder="Describe what you built and the problem it solves..."
              className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
            />
          </div>

          {/* Technologies */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Technologies
            </label>

            <input
              name="technologies"
              value={form.technologies}
              onChange={handleChange}
              placeholder="React, FastAPI, PostgreSQL"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
            />

            <p className="mt-2 text-xs text-slate-400">
              Separate technologies using commas.
            </p>
          </div>

          {/* URLs */}
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Project URL
              </label>

              <input
                type="url"
                name="project_url"
                value={form.project_url}
                onChange={handleChange}
                placeholder="https://yourproject.com"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                GitHub URL
              </label>

              <input
                type="url"
                name="github_url"
                value={form.github_url}
                onChange={handleChange}
                placeholder="https://github.com/username/project"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />
            </div>
          </div>

          {/* Image + Order */}
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Project Image
              </label>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                {form.image_url && (
                  <div className="mb-4">
                    <img
                      src={form.image_url}
                      alt="Project preview"
                      className="h-32 w-full rounded-lg object-cover border border-slate-200"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setForm({
                          ...form,
                          image_url: "",
                        })
                      }
                      className="mt-2 text-xs font-medium text-red-500 hover:text-red-600"
                    >
                      Remove image
                    </button>
                  </div>
                )}

                <label
                  htmlFor="project-image-upload"
                  className="flex cursor-pointer items-center justify-center rounded-lg border border-dashed border-slate-300 px-4 py-4 text-sm font-medium text-slate-600 transition hover:border-violet-400 hover:bg-violet-50 hover:text-violet-600"
                >
                  {uploading ? "Uploading..." : "Choose Project Image"}
                </label>

                <input
                  id="project-image-upload"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="hidden"
                />

                <p className="mt-2 text-xs text-slate-400">
                  JPG, PNG or WEBP. Maximum size: 5 MB.
                </p>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Display Order
              </label>

              <input
                type="number"
                name="display_order"
                value={form.display_order}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />
            </div>
          </div>

          {/* Featured */}
          <label className="mt-5 flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              name="is_featured"
              checked={form.is_featured}
              onChange={handleChange}
              className="h-4 w-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500"
            />

            <span className="text-sm font-medium text-slate-700">
              Feature this project
            </span>
          </label>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="submit"
              className="rounded-xl bg-slate-950 px-6 py-3 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-violet-600"
            >
              {editingId ? "Update Project" : "Add Project"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Project List */}
      <div className="mt-10">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-950">
              Your Projects
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {projects.length} {projects.length === 1 ? "project" : "projects"}{" "}
              added
            </p>
          </div>
        </div>

        {projects.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
            <p className="text-sm font-medium text-slate-700">
              No projects added yet.
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Add your first project using the form above.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {projects.map((project) => {
              const projectId = project.id || project.project_id;

              return (
                <article
                  key={projectId}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:border-violet-200 hover:shadow-sm"
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h4 className="text-lg font-semibold tracking-tight text-slate-950">
                        {project.title}
                      </h4>

                      {project.is_featured && (
                        <span className="mt-2 inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-600">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  {project.description && (
                    <p className="mt-4 line-clamp-4 text-sm leading-6 text-slate-600">
                      {project.description}
                    </p>
                  )}

                  {/* Technologies */}
                  {project.technologies?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology, index) => (
                        <span
                          key={`${technology}-${index}`}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  {(project.project_url || project.github_url) && (
                    <div className="mt-5 flex flex-wrap gap-3">
                      {project.project_url && (
                        <a
                          href={project.project_url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-violet-600 hover:text-violet-700"
                        >
                          View project
                        </a>
                      )}

                      {project.github_url && (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-slate-600 hover:text-slate-950"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="mt-6 flex gap-3 border-t border-slate-100 pt-5">
                    <button
                      type="button"
                      onClick={() => handleEdit(project)}
                      className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-violet-300 hover:text-violet-600"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => setDeleteId(projectId)}
                      className="flex-1 rounded-xl border border-red-200 bg-white px-4 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
      <DeleteConfirmModal
        isOpen={deleteId !== null}
        title="Delete this project?"
        message="This project will be permanently removed from your portfolio. This action cannot be undone."
        onCancel={() => setDeleteId(null)}
        onConfirm={confirmDelete}
        deleting={deleting}
      />
    </div>
  );
}

export default ProjectManager;
