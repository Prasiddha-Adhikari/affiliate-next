'use client';

import { useDashboard } from '@/context/DashboardContext';

export default function AffiliateList() {
  const { data } = useDashboard();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Affiliates</h1>

      {data.affiliates.length === 0 ? (
        <p>No affiliates found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded shadow">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Enrollment Date</th>
                <th className="p-3 text-left">Contact</th>
                <th className="p-3 text-left">Package</th>
                <th className="p-3 text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.affiliates.map((affiliate) => (
                <tr key={affiliate.id} className="border-b hover:bg-indigo-50 transition">
                  <td className="p-3">{affiliate.name}</td>
                  <td className="p-3">{affiliate.email}</td>
                  <td className="p-3">{affiliate.enrollmentDate}</td>
                  <td className="p-3">{affiliate.contact}</td>
                  <td className="p-3">{affiliate.packageName}</td>
                  <td className="p-3">Rs. {affiliate.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
