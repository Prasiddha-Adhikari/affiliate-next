"use client";

import { useState } from "react";

interface Training {
  id: number;
  title: string;
  description: string;
  date: string; // ISO string or yyyy-mm-dd
  videoUrl?: string;
}

export default function AdminTraining() {
  const [trainings, setTrainings] = useState<Training[]>([
    {
      id: 1,
      title: "Affiliate Marketing Basics",
      description: "Introduction to affiliate marketing and how to get started.",
      date: "2025-06-01",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "Advanced Promotion Techniques",
      description: "How to boost your affiliate sales using social media.",
      date: "2025-06-15",
    },
  ]);

  const [newTraining, setNewTraining] = useState<Omit<Training, "id">>({
    title: "",
    description: "",
    date: "",
    videoUrl: "",
  });

  const [editingId, setEditingId] = useState<number | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setNewTraining((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleAddOrUpdate(e: React.FormEvent) {
    e.preventDefault();

    if (!newTraining.title || !newTraining.date || !newTraining.description) {
      alert("Please fill all required fields (title, date, description)");
      return;
    }

    if (editingId !== null) {
      // Update existing
      setTrainings((prev) =>
        prev.map((t) => (t.id === editingId ? { id: editingId, ...newTraining } : t))
      );
      setEditingId(null);
    } else {
      // Add new
      setTrainings((prev) => [
        ...prev,
        { id: prev.length ? prev[prev.length - 1].id + 1 : 1, ...newTraining },
      ]);
    }

    setNewTraining({ title: "", description: "", date: "", videoUrl: "" });
  }

  function handleEdit(id: number) {
    const training = trainings.find((t) => t.id === id);
    if (!training) return;
    setNewTraining({
      title: training.title,
      description: training.description,
      date: training.date,
      videoUrl: training.videoUrl || "",
    });
    setEditingId(id);
  }

  function handleDelete(id: number) {
    if (confirm("Are you sure you want to delete this training?")) {
      setTrainings((prev) => prev.filter((t) => t.id !== id));
      if (editingId === id) {
        setEditingId(null);
        setNewTraining({ title: "", description: "", date: "", videoUrl: "" });
      }
    }
  }

  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Manage Trainings</h1>

      <form onSubmit={handleAddOrUpdate} className="bg-white p-6 rounded shadow mb-10 space-y-4">
        <h2 className="text-xl font-semibold">{editingId !== null ? "Edit Training" : "Add New Training"}</h2>

        <input
          type="text"
          name="title"
          placeholder="Training Title"
          value={newTraining.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={newTraining.description}
          onChange={handleChange}
          rows={4}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="date"
          name="date"
          value={newTraining.date}
          min={today}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="url"
          name="videoUrl"
          placeholder="Video URL (optional, e.g. YouTube embed link)"
          value={newTraining.videoUrl}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          {editingId !== null ? "Update Training" : "Add Training"}
        </button>
      </form>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Trainings</h2>
        {trainings.filter((t) => t.date >= today).length === 0 && <p>No upcoming trainings.</p>}
        <ul className="space-y-4">
          {trainings
            .filter((t) => t.date >= today)
            .map(({ id, title, description, date, videoUrl }) => (
              <li
                key={id}
                className="bg-white rounded shadow p-4 flex flex-col md:flex-row md:justify-between md:items-center"
              >
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                  <p className="text-sm text-gray-500">Date: {new Date(date).toLocaleDateString()}</p>
                  {videoUrl && (
                    <a
                      href={videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline text-sm"
                    >
                      Watch Video
                    </a>
                  )}
                </div>
                <div className="mt-4 md:mt-0 space-x-2">
                  <button
                    onClick={() => handleEdit(id)}
                    className="px-4 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(id)}
                    className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Past Trainings</h2>
        {trainings.filter((t) => t.date < today).length === 0 && <p>No past trainings.</p>}
        <ul className="space-y-4">
          {trainings
            .filter((t) => t.date < today)
            .map(({ id, title, description, date, videoUrl }) => (
              <li
                key={id}
                className="bg-white rounded shadow p-4 flex flex-col md:flex-row md:justify-between md:items-center"
              >
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                  <p className="text-sm text-gray-500">Date: {new Date(date).toLocaleDateString()}</p>
                  {videoUrl && (
                    <a
                      href={videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline text-sm"
                    >
                      Watch Video
                    </a>
                  )}
                </div>
                <div className="mt-4 md:mt-0 space-x-2">
                  <button
                    onClick={() => handleEdit(id)}
                    className="px-4 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(id)}
                    className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}
