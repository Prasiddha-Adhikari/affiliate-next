"use client";

import Link from "next/link";

export default function AdminHome() {
  // Dummy stats - replace with API data later
  const stats = {
    users: 1245,
    webinars: 32,
    payouts: 57,
    courses: 12,
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>
      <p className="mb-8 text-gray-600">Welcome back, Admin! Here is a quick overview.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-xl font-semibold text-gray-700">Total Users</h2>
          <p className="mt-2 text-3xl font-bold text-blue-600">{stats.users}</p>
        </div>
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-xl font-semibold text-gray-700">Total Webinars</h2>
          <p className="mt-2 text-3xl font-bold text-blue-600">{stats.webinars}</p>
        </div>
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-xl font-semibold text-gray-700">Total Payouts</h2>
          <p className="mt-2 text-3xl font-bold text-blue-600">{stats.payouts}</p>
        </div>
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-xl font-semibold text-gray-700">Total Courses</h2>
          <p className="mt-2 text-3xl font-bold text-blue-600">{stats.courses}</p>
        </div>
      </div>

      <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <Link
          href="/admin/users"
          className="block bg-blue-600 hover:bg-blue-700 text-white rounded p-5 text-center font-semibold transition"
        >
          Manage Users
        </Link>
        <Link
          href="/admin/webinar"
          className="block bg-blue-600 hover:bg-blue-700 text-white rounded p-5 text-center font-semibold transition"
        >
          Manage Webinars
        </Link>
        <Link
          href="/admin/payouts"
          className="block bg-blue-600 hover:bg-blue-700 text-white rounded p-5 text-center font-semibold transition"
        >
          Manage Payouts
        </Link>
        <Link
          href="/admin/settings"
          className="block bg-blue-600 hover:bg-blue-700 text-white rounded p-5 text-center font-semibold transition"
        >
          Settings
        </Link>
      </nav>
    </div>
  );
}
