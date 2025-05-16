'use client';

import { useState } from 'react';

type TrafficRecord = {
  id: number;
  date: string;
  ip: string;
  device: string;
  location: string;
  browser: string;
};

const sampleData: TrafficRecord[] = [
  {
    id: 1,
    date: '2025-05-15',
    ip: '192.168.1.1',
    device: 'Mobile',
    location: 'Kathmandu, Nepal',
    browser: 'Chrome',
  },
  {
    id: 2,
    date: '2025-05-14',
    ip: '192.168.1.2',
    device: 'Desktop',
    location: 'Pokhara, Nepal',
    browser: 'Firefox',
  },
  {
    id: 3,
    date: '2025-05-14',
    ip: '192.168.1.3',
    device: 'Tablet',
    location: 'Lalitpur, Nepal',
    browser: 'Safari',
  },
];

export default function TrafficPage() {
  const [trafficData] = useState<TrafficRecord[]>(sampleData);

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-white shadow-xl p-8 rounded-3xl">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">Referral Traffic Overview</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-600 border rounded-xl">
            <thead className="bg-indigo-100 text-indigo-800 uppercase font-semibold">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">IP Address</th>
                <th className="px-4 py-3">Device</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Browser</th>
              </tr>
            </thead>
            <tbody>
              {trafficData.map((record, index) => (
                <tr
                  key={record.id}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="px-4 py-3 font-semibold">{index + 1}</td>
                  <td className="px-4 py-3">{record.date}</td>
                  <td className="px-4 py-3">{record.ip}</td>
                  <td className="px-4 py-3">{record.device}</td>
                  <td className="px-4 py-3">{record.location}</td>
                  <td className="px-4 py-3">{record.browser}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-indigo-50 p-6 rounded-xl shadow-sm text-center">
            <p className="text-xl font-bold text-indigo-700">
              {trafficData.length}
            </p>
            <p className="text-sm text-indigo-600">Total Clicks</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl shadow-sm text-center">
            <p className="text-xl font-bold text-indigo-700">3</p>
            <p className="text-sm text-indigo-600">Unique Visitors</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl shadow-sm text-center">
            <p className="text-xl font-bold text-indigo-700">2</p>
            <p className="text-sm text-indigo-600">Nepal Regions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
