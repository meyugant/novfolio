import { useState } from "react";
import { deleteProfile } from "../api/profile";
import { deleteAccount } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { ExternalLink, Globe, Lock, CheckCircle2 } from "lucide-react";
import DeleteConfirmModal from "./dashboard/DeleteConfirm";

import {
  getMyPortfolio,
  publishPortfolio,
  unpublishPortfolio,
} from "../api/portfolio";

function Settings({ user, onUpdated }) {
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState("");

  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    setDeleting(true);
    setDeleteError("");

    try {
      await deleteAccount();

      localStorage.removeItem("access_token");

      navigate("/register");
    } catch (error) {
      console.error(error);

      setDeleteError(
        error.response?.data?.detail || "Unable to delete your account.",
      );

      setDeleting(false);
    }
  };

  console.log("USER IN SETTINGS:", user);

  const isPublished = Boolean(user?.portfolio?.is_published);

  const slug = user?.slug;

  const handlePublish = async () => {
    setSaving(true);
    setMessage("");
    setError("");

    try {
      await publishPortfolio();

      const updatedPortfolio = await getMyPortfolio();

      setMessage("Your portfolio is now public.");

      if (onUpdated) {
        onUpdated(updatedPortfolio);
      }
    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.detail || "Unable to publish your portfolio.",
      );
    } finally {
      setSaving(false);
    }
  };

  const handleUnpublish = async () => {
    setSaving(true);
    setMessage("");
    setError("");

    try {
      await unpublishPortfolio();

      const updatedPortfolio = await getMyPortfolio();

      setMessage("Your portfolio has been unpublished.");

      if (onUpdated) {
        onUpdated(updatedPortfolio);
      }
    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.detail || "Unable to unpublish your portfolio.",
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="mx-auto max-w-[1000px]">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
          Settings
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
          Portfolio settings
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Manage how your portfolio is presented and whether visitors can access
          it publicly.
        </p>
      </div>

      {/* Messages */}
      {message && (
        <div className="mb-5 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
          <CheckCircle2 size={18} className="shrink-0 text-emerald-600" />

          <p className="text-sm font-medium text-emerald-700">{message}</p>
        </div>
      )}

      {error && (
        <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
          <p className="text-sm font-medium text-red-600">{error}</p>
        </div>
      )}

      {/* =====================================================
          PORTFOLIO VISIBILITY
      ===================================================== */}

      <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm lg:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                isPublished
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {isPublished ? <Globe size={20} /> : <Lock size={20} />}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-950">
                Portfolio visibility
              </h3>

              <p className="mt-1 max-w-xl text-sm leading-6 text-slate-500">
                Control whether visitors can access your public portfolio.
              </p>
            </div>
          </div>

          {/* Status */}
          <div
            className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ${
              isPublished
                ? "bg-emerald-50 text-emerald-700"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                isPublished ? "bg-emerald-500" : "bg-slate-400"
              }`}
            />

            {isPublished ? "Published" : "Unpublished"}
          </div>
        </div>

        {/* Public URL */}
        {slug && (
          <div className="mt-8 border-t border-slate-200 pt-7">
            <p className="text-sm font-medium text-slate-700">
              Public portfolio URL
            </p>

            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <div className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="truncate text-sm text-slate-600">
                  {window.location.origin}/{slug}
                </p>
              </div>

              {isPublished && (
                <a
                  href={`/${slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-600"
                >
                  View Portfolio
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Publish controls */}
        <div className="mt-7 border-t border-slate-200 pt-7">
          {isPublished ? (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-950">
                  Your portfolio is live
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Visitors can currently view your portfolio.
                </p>
              </div>

              <button
                type="button"
                onClick={handleUnpublish}
                disabled={saving}
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-red-200 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? "Updating..." : "Unpublish"}
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-950">
                  Your portfolio is not public
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Publish it when you're ready for visitors to see it.
                </p>
              </div>

              <button
                type="button"
                onClick={handlePublish}
                disabled={saving}
                className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? "Publishing..." : "Publish Portfolio"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          INFORMATION
      ===================================================== */}

      <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm lg:p-8">
        <h3 className="text-lg font-semibold text-slate-950">
          About your portfolio
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          Your portfolio is generated from the information you manage in the
          dashboard.
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
              Projects
            </p>

            <p className="mt-2 text-2xl font-semibold text-slate-950">
              {user?.projects?.length || 0}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
              Skills
            </p>

            <p className="mt-2 text-2xl font-semibold text-slate-950">
              {user?.skills?.length || 0}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
              Experience
            </p>

            <p className="mt-2 text-2xl font-semibold text-slate-950">
              {user?.experiences?.length || 0}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
              Education
            </p>

            <p className="mt-2 text-2xl font-semibold text-slate-950">
              {user?.educations?.length || 0}
            </p>
          </div>
        </div>
      </section>

      {/* Delete Account Modal */}
      <div className="mt-6 rounded-3xl border border-red-200 bg-white p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
          Danger zone
        </p>

        <h2 className="mt-3 text-xl font-semibold text-slate-950">
          Delete your account
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Permanently delete your account and all portfolio data. This action
          cannot be undone.
        </p>

        {deleteError && (
          <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
            <p className="text-sm text-red-600">{deleteError}</p>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={() => setShowDeleteModal(true)}
            disabled={deleting}
            className="rounded-xl bg-red-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Delete Account
          </button>
        </div>
      </div>
      <DeleteConfirmModal
        isOpen={showDeleteModal}
        title="Delete your account?"
        message="This will permanently delete your account and all of your portfolio data. This action cannot be undone."
        onCancel={() => setShowDeleteModal(false)}
        onConfirm={handleDeleteAccount}
        deleting={deleting}
      />
    </div>
  );
}

export default Settings;
