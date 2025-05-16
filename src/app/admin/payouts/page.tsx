"use client";

import { useState } from "react";

interface PayoutRequest {
  id: string;
  user: string;
  amount: number;
  status: "Pending" | "Approved" | "Rejected";
  requestedAt: string;
  paymentMethod: string;
}

export default function AdminPayouts() {
  // Dummy data for payout requests (replace with API data)
  const [payouts, setPayouts] = useState<PayoutRequest[]>([
    {
      id: "payout1",
      user: "John Doe",
      amount: 500,
      status: "Pending",
      requestedAt: "2025-05-10",
      paymentMethod: "Bank Transfer",
    },
    {
      id: "payout2",
      user: "Jane Smith",
      amount: 300,
      status: "Approved",
      requestedAt: "2025-05-08",
      paymentMethod: "PayPal",
    },
    {
      id: "payout3",
      user: "Alice Johnson",
      amount: 150,
      status: "Rejected",
      requestedAt: "2025-05-09",
      paymentMethod: "Bank Transfer",
    },
  ]);

  // Function to approve a payout request
  function approvePayout(id: string) {
    setPayouts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: "Approved" } : p
      )
    );
  }

  // Function to reject a payout request
  function rejectPayout(id: string) {
    setPayouts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: "Rejected" } : p
      )
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Admin Payout Requests</h1>

      <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-3 px-6 text-left">User</th>
            <th className="py-3 px-6 text-left">Amount (USD)</th>
            <th className="py-3 px-6 text-left">Payment Method</th>
            <th className="py-3 px-6 text-left">Requested At</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {payouts.map(({ id, user, amount, status, requestedAt, paymentMethod }) => (
            <tr key={id} className="border-b last:border-none hover:bg-gray-100">
              <td className="py-4 px-6">{user}</td>
              <td className="py-4 px-6">${amount.toLocaleString()}</td>
              <td className="py-4 px-6">{paymentMethod}</td>
              <td className="py-4 px-6">{requestedAt}</td>
              <td className="py-4 px-6">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    status === "Pending"
                      ? "bg-yellow-200 text-yellow-800"
                      : status === "Approved"
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {status}
                </span>
              </td>
              <td className="py-4 px-6 text-center space-x-2">
                {status === "Pending" && (
                  <>
                    <button
                      onClick={() => approvePayout(id)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => rejectPayout(id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Reject
                    </button>
                  </>
                )}
                {status !== "Pending" && (
                  <span className="text-gray-500">No actions</span>
                )}
              </td>
            </tr>
          ))}
          {payouts.length === 0 && (
            <tr>
              <td colSpan={6} className="py-6 text-center text-gray-500">
                No payout requests found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
