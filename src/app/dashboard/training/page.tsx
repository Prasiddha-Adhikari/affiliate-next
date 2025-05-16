'use client';

import { useDashboard } from '@/context/DashboardContext';

export default function TrainingsPage() {
  const { data } = useDashboard();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Upcoming Trainings</h1>
      {data.upcomingTrainings.length === 0 ? (
        <p>No upcoming trainings.</p>
      ) : (
        <ul className="space-y-4">
          {data.upcomingTrainings.map((training) => (
            <li
              key={training.id}
              className="border p-4 rounded shadow hover:bg-indigo-50 cursor-pointer transition"
            >
              <h2 className="text-xl font-semibold text-indigo-700">{training.title}</h2>
              <p className="text-gray-600">{training.date} | {training.time}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
