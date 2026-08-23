import { useEffect, useState } from "react";
import { createProfile, updateProfile } from "../api/profile";
import { uploadImage } from "../api/upload";

function ProfileEditor({ profile, onUpdated }) {
  const [form, setForm] = useState({
    full_name: "",
    headline: "",
    bio: "",
    location: "",
    profile_image: "",
    phone: "",
    email: "",
  });

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (profile) {
      setForm({
        full_name: profile.full_name || "",
        headline: profile.headline || "",
        bio: profile.bio || "",
        location: profile.location || "",
        profile_image: profile.profile_image || "",
        phone: profile.phone || "",
        email: profile.email || "",
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setUploading(true);
    setError("");
    setMessage("");

    try {
      const data = await uploadImage(file);

      setForm({
        ...form,
        profile_image: data.url,
      });

      setMessage("Image uploaded successfully.");
    } catch (error) {
      console.error(error);

      setError(error.response?.data?.detail || "Failed to upload image.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSaving(true);
    setMessage("");
    setError("");

    try {
      let savedProfile;

      if (profile?.id) {
        savedProfile = await updateProfile(form);

        setMessage("Profile updated successfully.");
      } else {
        savedProfile = await createProfile(form);

        setMessage("Profile created successfully.");
      }

      if (onUpdated) {
        onUpdated(savedProfile);
      }
    } catch (error) {
      console.error(error);

      setError(error.response?.data?.detail || "Failed to save profile.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm lg:p-9">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
          Profile
        </p>

        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Personal information
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Manage the information displayed on your public portfolio.
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Basic Information */}
        <div className="rounded-2xl bg-slate-50 p-5 lg:p-6">
          <h3 className="text-base font-semibold text-slate-950">
            Basic information
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Tell visitors who you are and what you do.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />
            </div>

            {/* Headline */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Headline
              </label>

              <input
                type="text"
                name="headline"
                value={form.headline}
                onChange={handleChange}
                placeholder="e.g. Full Stack Developer"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Bio
            </label>

            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              rows={5}
              placeholder="Tell visitors a little about yourself..."
              className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-6 rounded-2xl bg-slate-50 p-5 lg:p-6">
          <h3 className="text-base font-semibold text-slate-950">
            Contact information
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Add information visitors can use to reach you.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {/* Location */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="e.g. Bhopal, India"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />
            </div>

            {/* Profile Image */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Profile Image
              </label>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                {form.profile_image && (
                  <div className="mb-4 flex items-center gap-4">
                    <img
                      src={form.profile_image}
                      alt="Profile preview"
                      className="h-20 w-20 rounded-full object-cover border border-slate-200"
                    />

                    <div>
                      <p className="text-sm font-medium text-slate-700">
                        Current profile image
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          setForm({
                            ...form,
                            profile_image: "",
                          })
                        }
                        className="mt-1 text-xs font-medium text-red-500 hover:text-red-600"
                      >
                        Remove image
                      </button>
                    </div>
                  </div>
                )}

                <label
                  htmlFor="profile-image-upload"
                  className="flex cursor-pointer items-center justify-center rounded-lg border border-dashed border-slate-300 px-4 py-4 text-sm font-medium text-slate-600 transition hover:border-violet-400 hover:bg-violet-50 hover:text-violet-600"
                >
                  {uploading ? "Uploading..." : "Choose Profile Image"}
                </label>

                <input
                  id="profile-image-upload"
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
          </div>
        </div>

        {/* Messages */}
        {message && (
          <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
            <p className="text-sm font-medium text-emerald-700">{message}</p>
          </div>
        )}

        {error && (
          <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
            <p className="text-sm font-medium text-red-600">{error}</p>
          </div>
        )}

        {/* Actions */}
        <div className="mt-7 flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-slate-400">
            Changes will appear on your public portfolio after saving.
          </p>

          <button
            type="submit"
            disabled={saving}
            className="rounded-xl bg-slate-950 px-6 py-3 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {saving
              ? profile?.id
                ? "Updating..."
                : "Saving..."
              : profile?.id
                ? "Update Profile"
                : "Save Profile"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileEditor;
