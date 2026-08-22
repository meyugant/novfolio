import { useEffect, useState } from "react";

import { getSkills, createSkill, updateSkill, deleteSkill } from "../api/skill";

import DeleteConfirmModal from "./dashboard/DeleteConfirm";

function SkillManager() {
  const [skills, setSkills] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [deleteSkillId, setDeleteSkillId] = useState(null);

  const [deleting, setDeleting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    category: "",
    proficiency: "",
    display_order: 0,
  });

  const loadSkills = async () => {
    try {
      const data = await getSkills();

      setSkills(data);
    } catch (error) {
      console.error(error);

      setError(error.response?.data?.detail || "Unable to load skills.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSkills();
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
      name: "",
      category: "",
      proficiency: "",
      display_order: 0,
    });

    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      const skillData = {
        ...form,
        display_order: Number(form.display_order),
      };

      if (editingId) {
        const updatedSkill = await updateSkill(editingId, skillData);

        setSkills(
          skills.map((skill) =>
            skill.id === editingId ? updatedSkill : skill,
          ),
        );
      } else {
        const newSkill = await createSkill(skillData);

        setSkills([...skills, newSkill]);
      }

      resetForm();
    } catch (error) {
      console.error(error);

      setError(error.response?.data?.detail || "Unable to save skill.");
    }
  };

  const handleEdit = (skill) => {
    setEditingId(skill.id);

    setForm({
      name: skill.name || "",
      category: skill.category || "",
      proficiency: skill.proficiency || "",
      display_order: skill.display_order ?? 0,
    });
  };

  const handleDelete = async () => {
    if (!deleteSkillId) {
      return;
    }

    setDeleting(true);
    setError("");

    try {
      await deleteSkill(deleteSkillId);

      setSkills(skills.filter((skill) => skill.id !== deleteSkillId));

      setDeleteSkillId(null);
    } catch (error) {
      console.error(error);

      setError(error.response?.data?.detail || "Unable to delete skill.");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="py-6 text-center text-slate-500">Loading skills...</div>
    );
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800">Skills</h2>

        <p className="mt-1 text-sm text-slate-500">
          Manage the skills displayed on your portfolio.
        </p>
      </div>

      {/* Error */}

      {error && (
        <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Form */}

      <form onSubmit={handleSubmit} className="mb-8 rounded-xl bg-slate-50 p-5">
        <h3 className="mb-4 text-base font-semibold text-slate-700">
          {editingId ? "Edit Skill" : "Add New Skill"}
        </h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Name */}

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-600">
              Skill Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="React"
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Category */}

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-600">
              Category
            </label>

            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Frontend"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Proficiency */}

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-600">
              Proficiency
            </label>

            <input
              type="text"
              name="proficiency"
              value={form.proficiency}
              onChange={handleChange}
              placeholder="Advanced"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Display Order */}

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-600">
              Display Order
            </label>

            <input
              type="number"
              name="display_order"
              value={form.display_order}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Buttons */}

        <div className="mt-5 flex gap-3">
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            {editingId ? "Update Skill" : "Add Skill"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-lg border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Skills */}

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold text-slate-700">Your Skills</h3>

          <span className="text-sm text-slate-400">{skills.length} skills</span>
        </div>

        {skills.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 py-10 text-center">
            <p className="text-sm text-slate-500">No skills added yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="rounded-xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      {skill.name}
                    </h4>

                    {skill.category && (
                      <p className="mt-1 text-xs text-slate-400">
                        {skill.category}
                      </p>
                    )}
                  </div>

                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                    {skill.proficiency || "N/A"}
                  </span>
                </div>

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(skill)}
                    className="flex-1 rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => setDeleteSkillId(skill.id)}
                    className="flex-1 rounded-lg border border-red-200 px-3 py-1.5 text-sm font-medium text-red-600 transition hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Delete Confirmation */}

      <DeleteConfirmModal
        isOpen={Boolean(deleteSkillId)}
        title="Delete this skill?"
        message="This skill will be permanently removed from your portfolio. This action cannot be undone."
        onCancel={() => setDeleteSkillId(null)}
        onConfirm={handleDelete}
        deleting={deleting}
      />
    </section>
  );
}

export default SkillManager;
