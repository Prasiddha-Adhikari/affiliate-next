"use client";

import AdminSidebar from "@/components/AdminSidebar";
import React from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 fixed left-0 top-0 h-full bg-white text-blue-600 border-r shadow">
        <AdminSidebar />
      </aside>
      <main className="ml-64 flex-1 bg-gray-50 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}