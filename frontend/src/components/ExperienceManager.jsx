import { useEffect, useState } from "react";
import DeleteConfirmModal from "./dashboard/DeleteConfirm";

import {
  getExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
} from "../api/experience";

function ExperienceManager() {
  const [experiences, setExperiences] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [deleteId, setDeleteId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const [form, setForm] = useState({
    organization: "",
    role: "",
    employment_type: "",
    location: "",
    start_date: "",
    end_date: "",
    is_current: false,
    description: "",
    display_order: 0,
  });

  const loadExperiences = async () => {
    try {
      const data = await getExperiences();

      setExperiences(data);
    } catch (error) {
      console.error(error);

      setError(error.response?.data?.detail || "Unable to load experiences.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadExperiences();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const resetForm = () => {
    setForm({
      organization: "",
      role: "",
      employment_type: "",
      location: "",
      start_date: "",
      end_date: "",
      is_current: false,
      description: "",
      display_order: 0,
    });

    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      const experienceData = {
        ...form,

        end_date: form.is_current ? null : form.end_date || null,

        display_order: Number(form.display_order),
      };

      if (editingId) {
        const updatedExperience = await updateExperience(
          editingId,
          experienceData,
        );

        setExperiences(
          experiences.map((experience) =>
            (experience.id || experience.experience_id) === editingId
              ? updatedExperience
              : experience,
          ),
        );
      } else {
        const newExperience = await createExperience(experienceData);

        setExperiences([...experiences, newExperience]);
      }

      resetForm();
    } catch (error) {
      console.error(error);

      setError(error.response?.data?.detail || "Unable to save experience.");
    }
  };

  const handleEdit = (experience) => {
    const experienceId = experience.id || experience.experience_id;

    setEditingId(experienceId);

    setForm({
      organization: experience.organization || "",
      role: experience.role || "",
      employment_type: experience.employment_type || "",
      location: experience.location || "",
      start_date: experience.start_date || "",
      end_date: experience.end_date || "",
      is_current: experience.is_current || false,
      description: experience.description || "",
      display_order: experience.display_order ?? 0,
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
      await deleteExperience(deleteId);

      setExperiences(
        experiences.filter(
          (experience) =>
            (experience.id || experience.experience_id) !== deleteId,
        ),
      );

      setDeleteId(null);
    } catch (error) {
      console.error(error);

      setError(error.response?.data?.detail || "Unable to delete experience.");
    } finally {
      setDeleting(false);
    }
  };

  const formatDate = (date) => {
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
  };

  if (loading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8">
        <p className="text-sm text-slate-500">Loading experiences...</p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm lg:p-9">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
          Experience
        </p>

        <div className="mt-3">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Your experience
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            Add and manage your professional experience.
          </p>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
          <p className="text-sm font-medium text-red-600">{error}</p>
        </div>
      )}

      {/* Form */}
      <div className="rounded-2xl bg-slate-50 p-5 lg:p-6">
        <div className="mb-6">
          <h3 className="text-base font-semibold text-slate-950">
            {editingId ? "Edit Experience" : "Add New Experience"}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {editingId
              ? "Update your experience details."
              : "Add a position or professional experience to your portfolio."}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Organization + Role */}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Organization
              </label>

              <input
                name="organization"
                value={form.organization}
                onChange={handleChange}
                placeholder="e.g. Google"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Role
              </label>

              <input
                name="role"
                value={form.role}
                onChange={handleChange}
                placeholder="e.g. Software Engineer"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />
            </div>
          </div>

          {/* Employment + Location */}
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Employment Type
              </label>

              <input
                name="employment_type"
                value={form.employment_type}
                onChange={handleChange}
                placeholder="Full-time, Internship, Freelance"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Location
              </label>

              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="e.g. Bangalore, India"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Start Date
              </label>

              <input
                type="date"
                name="start_date"
                value={form.start_date}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                End Date
              </label>

              <input
                type="date"
                name="end_date"
                value={form.end_date}
                onChange={handleChange}
                disabled={form.is_current}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />
            </div>
          </div>

          {/* Current Position */}
          <label className="mt-5 flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              name="is_current"
              checked={form.is_current}
              onChange={handleChange}
              className="h-4 w-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500"
            />

            <span className="text-sm font-medium text-slate-700">
              I currently work here
            </span>
          </label>

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
              placeholder="Describe your responsibilities, achievements, and what you learned..."
              className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
            />
          </div>

          {/* Display Order */}
          <div className="mt-5 max-w-xs">
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

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="submit"
              className="rounded-xl bg-slate-950 px-6 py-3 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-violet-600"
            >
              {editingId ? "Update Experience" : "Add Experience"}
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

      {/* Experience List */}
      <div className="mt-10">
        <div className="mb-5">
          <h3 className="text-lg font-semibold text-slate-950">
            Your Experience
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {experiences.length}{" "}
            {experiences.length === 1 ? "experience" : "experiences"} added
          </p>
        </div>

        {experiences.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
            <p className="text-sm font-medium text-slate-700">
              No experience added yet.
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Add your first professional experience using the form above.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {experiences.map((experience) => {
              const experienceId = experience.id || experience.experience_id;

              return (
                <article
                  key={experienceId}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:border-violet-200 hover:shadow-sm lg:p-6"
                >
                  {/* Header */}
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h4 className="text-xl font-semibold tracking-tight text-slate-950">
                        {experience.role}
                      </h4>

                      <p className="mt-1 text-base font-medium text-violet-600">
                        {experience.organization}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {experience.employment_type && (
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
                          {experience.employment_type}
                        </span>
                      )}

                      {experience.is_current && (
                        <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-600">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Date + Location */}
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
                    <span>
                      {formatDate(experience.start_date)}
                      {" — "}
                      {experience.is_current
                        ? "Present"
                        : formatDate(experience.end_date)}
                    </span>

                    {experience.location && <span>{experience.location}</span>}
                  </div>

                  {/* Description */}
                  {experience.description && (
                    <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-600">
                      {experience.description}
                    </p>
                  )}

                  {/* Order */}
                  <p className="mt-4 text-xs text-slate-400">
                    Display order: {experience.display_order}
                  </p>

                  {/* Actions */}
                  <div className="mt-6 flex gap-3 border-t border-slate-100 pt-5">
                    <button
                      type="button"
                      onClick={() => handleEdit(experience)}
                      className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-violet-300 hover:text-violet-600 md:flex-none md:px-8"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setDeleteId(experience.id || experience.experience_id)
                      }
                      className="flex-1 rounded-xl border border-red-200 bg-white px-4 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50 md:flex-none md:px-8"
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
        title="Delete this experience?"
        message="This experience will be permanently removed from your portfolio. This action cannot be undone."
        onCancel={() => setDeleteId(null)}
        onConfirm={confirmDelete}
        deleting={deleting}
      />
    </div>
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

export default ExperienceManager;
