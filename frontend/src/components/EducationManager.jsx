import { useEffect, useState } from "react";

import {
  getEducations,
  createEducation,
  updateEducation,
  deleteEducation,
} from "../api/education";

import DeleteConfirmModal from "./dashboard/DeleteConfirm";

function EducationManager() {
  const [educations, setEducations] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [deleteId, setDeleteId] = useState(null);

  const [deleting, setDeleting] = useState(false);

  const [form, setForm] = useState({
    institution: "",
    degree: "",
    field_of_study: "",
    location: "",
    start_date: "",
    end_date: "",
    description: "",
    display_order: 0,
  });

  const loadEducations = async () => {
    try {
      const data = await getEducations();

      setEducations(data);
    } catch (error) {
      console.error(error);

      setError(error.response?.data?.detail || "Unable to load education.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEducations();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const resetForm = () => {
    setForm({
      institution: "",
      degree: "",
      field_of_study: "",
      location: "",
      start_date: "",
      end_date: "",
      description: "",
      display_order: 0,
    });

    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      const educationData = {
        ...form,

        end_date: form.end_date || null,

        display_order: Number(form.display_order),
      };

      if (editingId) {
        const updatedEducation = await updateEducation(
          editingId,
          educationData,
        );

        setEducations(
          educations.map((education) =>
            (education.id || education.education_id) === editingId
              ? updatedEducation
              : education,
          ),
        );
      } else {
        const newEducation = await createEducation(educationData);

        setEducations([...educations, newEducation]);
      }

      resetForm();
    } catch (error) {
      console.error(error);

      setError(error.response?.data?.detail || "Unable to save education.");
    }
  };

  const handleEdit = (education) => {
    const educationId = education.id || education.education_id;

    setEditingId(educationId);

    setForm({
      institution: education.institution || "",
      degree: education.degree || "",
      field_of_study: education.field_of_study || "",
      location: education.location || "",
      start_date: education.start_date || "",
      end_date: education.end_date || "",
      description: education.description || "",
      display_order: education.display_order ?? 0,
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
      await deleteEducation(deleteId);

      setEducations(
        educations.filter(
          (education) => (education.id || education.education_id) !== deleteId,
        ),
      );

      setDeleteId(null);
    } catch (error) {
      console.error(error);

      setError(error.response?.data?.detail || "Unable to delete education.");
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
        <p className="text-sm text-slate-500">Loading education...</p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm lg:p-9">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
          Education
        </p>

        <div className="mt-3">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Your education
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            Add and manage your academic background.
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
            {editingId ? "Edit Education" : "Add New Education"}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {editingId
              ? "Update your education details."
              : "Add your degree, institution, and academic background."}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Institution + Degree */}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Institution
              </label>

              <input
                name="institution"
                value={form.institution}
                onChange={handleChange}
                placeholder="e.g. IIIT Bhopal"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Degree
              </label>

              <input
                name="degree"
                value={form.degree}
                onChange={handleChange}
                placeholder="e.g. B.Tech"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />
            </div>
          </div>

          {/* Field + Location */}
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Field of Study
              </label>

              <input
                name="field_of_study"
                value={form.field_of_study}
                onChange={handleChange}
                placeholder="e.g. Computer Science"
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
                placeholder="e.g. Bhopal, India"
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
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />

              <p className="mt-2 text-xs text-slate-400">
                Leave empty if you are currently studying.
              </p>
            </div>
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
              placeholder="Add relevant details about your education, achievements, coursework, etc..."
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
              {editingId ? "Update Education" : "Add Education"}
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

      {/* Education List */}
      <div className="mt-10">
        <div className="mb-5">
          <h3 className="text-lg font-semibold text-slate-950">
            Your Education
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {educations.length}{" "}
            {educations.length === 1 ? "education entry" : "education entries"}{" "}
            added
          </p>
        </div>

        {educations.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
            <p className="text-sm font-medium text-slate-700">
              No education added yet.
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Add your first education entry using the form above.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {educations.map((education) => {
              const educationId = education.id || education.education_id;

              return (
                <article
                  key={educationId}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:border-violet-200 hover:shadow-sm"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h4 className="text-lg font-semibold tracking-tight text-slate-950">
                        {education.degree}
                      </h4>

                      <p className="mt-1 text-base font-medium text-violet-600">
                        {education.institution}
                      </p>
                    </div>
                  </div>

                  {/* Field */}
                  {education.field_of_study && (
                    <p className="mt-4 text-sm font-medium text-slate-700">
                      {education.field_of_study}
                    </p>
                  )}

                  {/* Date + Location */}
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                    <span>
                      {formatDate(education.start_date)}
                      {" — "}
                      {education.end_date
                        ? formatDate(education.end_date)
                        : "Present"}
                    </span>

                    {education.location && <span>{education.location}</span>}
                  </div>

                  {/* Description */}
                  {education.description && (
                    <p className="mt-5 text-sm leading-7 text-slate-600">
                      {education.description}
                    </p>
                  )}

                  {/* Actions */}
                  <div className="mt-6 flex gap-3 border-t border-slate-100 pt-5">
                    <button
                      type="button"
                      onClick={() => handleEdit(education)}
                      className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-violet-300 hover:text-violet-600"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => setDeleteId(educationId)}
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

      {/* Delete Confirmation */}
      <DeleteConfirmModal
        isOpen={deleteId !== null}
        title="Delete this education?"
        message="This education entry will be permanently removed from your portfolio. This action cannot be undone."
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

export default EducationManager;
