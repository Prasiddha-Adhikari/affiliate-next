'use client';

import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function DashboardPage() {
  // Mock data (replace with real data fetching)
  const earningsSummary = {
    last7Days: 1500,
    last1Month: 5600,
    last1Year: 45000,
  };

  const myCoursesCount = 8;

  const withdrawalRequests = [
    { id: 1, status: 'Pending' },
    { id: 2, status: 'Approved' },
    { id: 3, status: 'Approved' },
  ];

  const upcomingTrainings = [
    {
      id: 1,
      title: 'React Advanced Patterns',
      date: '2025-06-05',
      time: '3:00 PM - 4:30 PM',
    },
    {
      id: 2,
      title: 'Next.js SEO Workshop',
      date: '2025-06-12',
      time: '1:00 PM - 2:30 PM',
    },
  ];

  const totalAffiliates = 25;
  const totalPayouts = 120000;

  // Earnings chart data example
  const chartData = [
    { date: 'Day 1', amount: 100 },
    { date: 'Day 2', amount: 200 },
    { date: 'Day 3', amount: 400 },
    { date: 'Day 4', amount: 300 },
    { date: 'Day 5', amount: 500 },
    { date: 'Day 6', amount: 700 },
    { date: 'Day 7', amount: 900 },
  ];

  // Calculate withdrawal counts
  const pendingWithdrawals = withdrawalRequests.filter(
    (r) => r.status === 'Pending'
  ).length;
  const approvedWithdrawals = withdrawalRequests.filter(
    (r) => r.status === 'Approved'
  ).length;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-indigo-700 mb-10">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* Earnings Cards */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Earnings Summary</h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Last 7 Days</span>
              <span className="font-semibold text-green-600">Rs. {earningsSummary.last7Days}</span>
            </li>
            <li className="flex justify-between">
              <span>Last 1 Month</span>
              <span className="font-semibold text-green-600">Rs. {earningsSummary.last1Month}</span>
            </li>
            <li className="flex justify-between">
              <span>Last 1 Year</span>
              <span className="font-semibold text-green-600">Rs. {earningsSummary.last1Year}</span>
            </li>
          </ul>
        </div>

        {/* My Courses */}
        <div className="bg-white rounded-xl p-6 shadow flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">My Courses</h2>
          <p className="text-4xl font-bold text-indigo-600">{myCoursesCount}</p>
          <p className="text-gray-600 mt-1">Courses purchased</p>
        </div>

        {/* Withdrawals */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Withdrawal Requests</h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Pending</span>
              <span className="font-semibold text-yellow-600">{pendingWithdrawals}</span>
            </li>
            <li className="flex justify-between">
              <span>Approved</span>
              <span className="font-semibold text-green-600">{approvedWithdrawals}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="bg-white rounded-xl p-6 shadow text-center">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Total Affiliates</h2>
          <p className="text-4xl font-bold text-indigo-600">{totalAffiliates}</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow text-center">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Total Payouts</h2>
          <p className="text-4xl font-bold text-indigo-600">Rs. {totalPayouts}</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Upcoming Trainings</h2>
          <ul className="space-y-3">
            {upcomingTrainings.map((t) => (
              <li key={t.id} className="border rounded p-3 hover:bg-indigo-50 transition cursor-pointer">
                <p className="font-semibold text-indigo-700">{t.title}</p>
                <p className="text-sm text-gray-600">{t.date} | {t.time}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Earnings Chart */}
      <div className="bg-white rounded-xl p-6 shadow">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Earnings Trend (Last 7 Days)</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#4F46E5"
              strokeWidth={3}
              dot={{ r: 5, strokeWidth: 2, fill: '#6366F1' }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
