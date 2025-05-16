"use client";

import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Sidebar fixed and full height */}
      <aside className="fixed top-9 left-0 w-64 h-full bg-white text-blue-600 p-6 overflow-auto">
        <Sidebar />
      </aside>

      {/* Main content with left margin so it's not behind sidebar */}
      <main className="ml-64 min-h-screen bg-gray-50 p-8 overflow-auto">
        {children}
      </main>
    </>
  );
}
