"use client";

import { useState, useMemo, useEffect } from "react";

interface Webinar {
  id: number;
  title: string;
  date: string; // ISO string
  description: string;
}

export default function AdminWebinar() {
  const [webinars, setWebinars] = useState<Webinar[]>([
    {
      id: 1,
      title: "Next.js Basics",
      date: "2025-06-10T15:00:00Z",
      description: "Learn the basics of Next.js framework.",
    },
    {
      id: 2,
      title: "Advanced React Patterns",
      date: "2025-06-15T18:00:00Z",
      description: "Deep dive into React hooks and patterns.",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({ title: "", date: "", description: "" });

  // Filter webinars by title
  const filteredWebinars = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return webinars.filter((w) => w.title.toLowerCase().includes(term));
  }, [searchTerm, webinars]);

  function resetForm() {
    setForm({ title: "", date: "", description: "" });
    setEditingId(null);
  }

  function handleEdit(id: number) {
    const webinar = webinars.find((w) => w.id === id);
    if (!webinar) return;
    setForm({
      title: webinar.title,
      date: webinar.date.slice(0, 16), // for datetime-local input
      description: webinar.description,
    });
    setEditingId(id);
  }

  function handleDelete(id: number) {
    if (confirm("Are you sure you want to delete this webinar?")) {
      setWebinars((prev) => prev.filter((w) => w.id !== id));
      if (editingId === id) resetForm();
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title || !form.date) {
      alert("Title and date are required");
      return;
    }
    if (editingId !== null) {
      // Update existing
      setWebinars((prev) =>
        prev.map((w) =>
          w.id === editingId
            ? { ...w, title: form.title, date: form.date, description: form.description }
            : w
        )
      );
    } else {
      // Add new
      const newWebinar: Webinar = {
        id: Math.max(0, ...webinars.map((w) => w.id)) + 1,
        title: form.title,
        date: form.date,
        description: form.description,
      };
      setWebinars((prev) => [...prev, newWebinar]);
    }
    resetForm();
  }

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Manage Webinars</h1>

      <input
        type="search"
        placeholder="Search webinars by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-6 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <table className="w-full table-auto bg-white rounded shadow mb-6">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Date & Time</th>
            <th className="p-3 text-left">Description</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredWebinars.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center p-4 text-gray-500">
                No webinars found.
              </td>
            </tr>
          )}

          {filteredWebinars.map(({ id, title, date, description }) => (
            <tr key={id} className="border-b hover:bg-gray-100">
              <td className="p-3 font-medium">{title}</td>
              <td className="p-3">{new Date(date).toLocaleString()}</td>
              <td className="p-3">{description}</td>
              <td className="p-3 space-x-2">
                <button
                  onClick={() => handleEdit(id)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(id)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={handleSubmit} className="bg-white rounded shadow p-6 max-w-xl mx-auto">
        <h2 className="text-2xl mb-4 text-gray-800">
          {editingId !== null ? "Edit Webinar" : "Add New Webinar"}
        </h2>

        <label className="block mb-2 font-semibold text-gray-700">
          Title <span className="text-red-500">*</span>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>

        <label className="block mb-2 font-semibold text-gray-700">
          Date & Time <span className="text-red-500">*</span>
          <input
            type="datetime-local"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>

        <label className="block mb-4 font-semibold text-gray-700">
          Description
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
        </label>

        <div className="flex justify-end space-x-4">
          {editingId !== null && (
            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            {editingId !== null ? "Update Webinar" : "Add Webinar"}
          </button>
        </div>
      </form>
    </div>
  );
}
