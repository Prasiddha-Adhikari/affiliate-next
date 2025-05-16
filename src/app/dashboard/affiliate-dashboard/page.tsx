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

// Sample data for each timeframe
const dataMap = {
  '7d': [
    { date: 'May 7', amount: 50 },
    { date: 'May 8', amount: 120 },
    { date: 'May 9', amount: 80 },
    { date: 'May 10', amount: 150 },
    { date: 'May 11', amount: 100 },
    { date: 'May 12', amount: 200 },
    { date: 'May 13', amount: 180 },
  ],
  '1m': [
    { date: 'Apr 15', amount: 300 },
    { date: 'Apr 20', amount: 500 },
    { date: 'Apr 25', amount: 250 },
    { date: 'May 1', amount: 650 },
    { date: 'May 5', amount: 400 },
    { date: 'May 10', amount: 700 },
    { date: 'May 13', amount: 600 },
  ],
  '1y': [
    { date: 'Jul', amount: 2000 },
    { date: 'Aug', amount: 3200 },
    { date: 'Sep', amount: 2800 },
    { date: 'Oct', amount: 3500 },
    { date: 'Nov', amount: 3000 },
    { date: 'Dec', amount: 4200 },
    { date: 'Jan', amount: 3900 },
    { date: 'Feb', amount: 4500 },
    { date: 'Mar', amount: 4800 },
    { date: 'Apr', amount: 4700 },
    { date: 'May', amount: 5300 },
  ],
};

export default function AffiliateDashboard() {
  const [selectedRange, setSelectedRange] = useState<'7d' | '1m' | '1y'>('7d');

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-indigo-700">Affiliate Dashboard</h1>

      {/* Earnings Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-gray-500 text-sm mb-2">Earned in 7 Days</h2>
          <p className="text-2xl font-bold text-indigo-600">Rs. 2,000</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-gray-500 text-sm mb-2">Earned in 1 Month</h2>
          <p className="text-2xl font-bold text-indigo-600">Rs. 8,500</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-gray-500 text-sm mb-2">Earned in 1 Year</h2>
          <p className="text-2xl font-bold text-indigo-600">Rs. 95,000</p>
        </div>
      </div>

      {/* Range Selector */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={() => setSelectedRange('7d')}
          className={`px-4 py-2 rounded-full text-sm font-semibold border ${
            selectedRange === '7d'
              ? 'bg-indigo-600 text-white'
              : 'border-indigo-300 text-indigo-600'
          }`}
        >
          Last 7 Days
        </button>
        <button
          onClick={() => setSelectedRange('1m')}
          className={`px-4 py-2 rounded-full text-sm font-semibold border ${
            selectedRange === '1m'
              ? 'bg-indigo-600 text-white'
              : 'border-indigo-300 text-indigo-600'
          }`}
        >
          Last 1 Month
        </button>
        <button
          onClick={() => setSelectedRange('1y')}
          className={`px-4 py-2 rounded-full text-sm font-semibold border ${
            selectedRange === '1y'
              ? 'bg-indigo-600 text-white'
              : 'border-indigo-300 text-indigo-600'
          }`}
        >
          Last 1 Year
        </button>
      </div>

      {/* Earnings Chart */}
      <div className="bg-white shadow-lg p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-4 text-indigo-600">Earnings Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dataMap[selectedRange]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#6366f1" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
