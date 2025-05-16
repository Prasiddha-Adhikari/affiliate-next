'use client';

import { useState } from 'react';

interface Payout {
  id: number;
  date: string;
  amount: number;
  paymentMode: string;
  paymentDetail: string;
  remark: string;
}

const dummyPayouts: Payout[] = [
  {
    id: 1,
    date: '2025-04-01',
    amount: 5000,
    paymentMode: 'Bank Transfer',
    paymentDetail: 'Account No: 1234567890',
    remark: 'April payout',
  },
  {
    id: 2,
    date: '2025-03-01',
    amount: 4500,
    paymentMode: 'PayPal',
    paymentDetail: 'paypal@example.com',
    remark: 'March payout',
  },
  {
    id: 3,
    date: '2025-02-01',
    amount: 6000,
    paymentMode: 'Bank Transfer',
    paymentDetail: 'Account No: 1234567890',
    remark: 'February payout',
  },
];

export default function PayoutsPage() {
  const [payouts] = useState<Payout[]>(dummyPayouts);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">Payouts</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm text-left border border-gray-200 rounded-xl">
            <thead className="bg-indigo-50 text-indigo-700 font-semibold">
              <tr>
                <th className="px-6 py-4 border-b">Sr. No</th>
                <th className="px-6 py-4 border-b">Date</th>
                <th className="px-6 py-4 border-b text-right">Amount (NPR)</th>
                <th className="px-6 py-4 border-b">Payment Mode</th>
                <th className="px-6 py-4 border-b">Payment Detail</th>
                <th className="px-6 py-4 border-b">Remark</th>
              </tr>
            </thead>
            <tbody>
              {payouts.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 border-b">{p.id}</td>
                  <td className="px-6 py-4 border-b">{p.date}</td>
                  <td className="px-6 py-4 border-b text-right font-medium text-green-600">Rs. {p.amount}</td>
                  <td className="px-6 py-4 border-b">{p.paymentMode}</td>
                  <td className="px-6 py-4 border-b">{p.paymentDetail}</td>
                  <td className="px-6 py-4 border-b">{p.remark}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {payouts.length === 0 && (
            <div className="text-center text-gray-500 py-8">No payouts found.</div>
          )}
        </div>
      </div>
    </div>
  );
}
