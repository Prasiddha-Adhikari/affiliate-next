'use client';

import { useDashboard } from '@/context/DashboardContext';

export default function WithdrawalRequests() {
  const { data } = useDashboard();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Withdrawal Requests</h1>

      {data.withdrawalRequests.length === 0 ? (
        <p>No withdrawal requests found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded shadow">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Amount (Rs.)</th>
                <th className="p-3 text-left">Payment Mode</th>
                <th className="p-3 text-left">Payment Detail</th>
                <th className="p-3 text-left">Remark</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.withdrawalRequests.map((wr) => (
                <tr key={wr.id} className="border-b hover:bg-indigo-50 transition">
                  <td className="p-3">{wr.date}</td>
                  <td className="p-3">{wr.amount}</td>
                  <td className="p-3">{wr.paymentMode}</td>
                  <td className="p-3">{wr.paymentDetail}</td>
                  <td className="p-3">{wr.remark}</td>
                  <td className={`p-3 font-semibold ${wr.status === 'Approved' ? 'text-green-600' : 'text-yellow-600'}`}>
                    {wr.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
