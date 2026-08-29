import { useEffect, useState } from "react";
import {
  getSocialLinks,
  createSocialLink,
  updateSocialLink,
  deleteSocialLink,
} from "../api/socialLink";

import DeleteConfirmModal from "./dashboard/DeleteConfirm";

function SocialLinks() {
  const [links, setLinks] = useState([]);
  const [platform, setPlatform] = useState("");
  const [url, setUrl] = useState("");
  const [displayOrder, setDisplayOrder] = useState(0);

  const [editingId, setEditingId] = useState(null);

  // Delete modal state
  const [deleteLinkId, setDeleteLinkId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const loadLinks = async () => {
    try {
      const data = await getSocialLinks();
      setLinks(data);
    } catch (error) {
      console.error("Failed to load social links:", error);
    }
  };

  useEffect(() => {
    loadLinks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      platform,
      url,
      display_order: Number(displayOrder),
    };

    try {
      if (editingId) {
        await updateSocialLink(editingId, data);
      } else {
        await createSocialLink(data);
      }

      setPlatform("");
      setUrl("");
      setDisplayOrder(0);
      setEditingId(null);

      loadLinks();
    } catch (error) {
      console.error("Failed to save social link:", error);
    }
  };

  const handleEdit = (link) => {
    setEditingId(link.id);
    setPlatform(link.platform);
    setUrl(link.url);
    setDisplayOrder(link.display_order);
  };

  const handleDelete = async () => {
    if (!deleteLinkId) {
      return;
    }

    try {
      setDeleting(true);

      await deleteSocialLink(deleteLinkId);

      setDeleteLinkId(null);

      loadLinks();
    } catch (error) {
      console.error("Failed to delete social link:", error);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Social Links</h2>

          <p className="text-sm text-gray-500 mt-1">
            Add your professional and social profiles
          </p>
        </div>
      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
      >
        <input
          type="text"
          placeholder="Platform"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="url"
          placeholder="https://github.com/username"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
          required
        />

        <input
          type="number"
          min="0"
          placeholder="Order"
          value={displayOrder}
          onChange={(e) => setDisplayOrder(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="md:col-span-4 bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition"
        >
          {editingId ? "Update Social Link" : "Add Social Link"}
        </button>
      </form>

      {/* Existing links */}

      <div className="space-y-3">
        {links.length === 0 ? (
          <p className="text-gray-500 text-sm">No social links added yet.</p>
        ) : (
          links.map((link) => (
            <div
              key={link.id}
              className="flex w-full min-w-0 flex-col gap-4 rounded-xl border border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              {/* Link information */}
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-gray-800">{link.platform}</h3>

                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block max-w-full break-all text-sm text-blue-600 hover:underline"
                >
                  {link.url}
                </a>

                <p className="mt-1 text-xs text-gray-400">
                  Order: {link.display_order}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex shrink-0 gap-2">
                <button
                  onClick={() => handleEdit(link)}
                  className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
                >
                  Edit
                </button>

                <button
                  onClick={() => setDeleteLinkId(link.id)}
                  className="rounded-lg border border-red-200 px-3 py-1.5 text-sm font-medium text-red-600 transition hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Delete Confirmation Modal */}

      <DeleteConfirmModal
        isOpen={Boolean(deleteLinkId)}
        title="Delete this social link?"
        message="This social link will be permanently removed from your portfolio. This action cannot be undone."
        onCancel={() => setDeleteLinkId(null)}
        onConfirm={handleDelete}
        deleting={deleting}
      />
    </div>
  );
}

export default SocialLinks;
