// "use client";

// import { useState, useMemo } from "react";

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   role: "user" | "affiliate" | "admin";
//   isActive: boolean;
// }

// export default function AdminUsers() {
//   const [users, setUsers] = useState<User[]>([
//     { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "user", isActive: true },
//     { id: 2, name: "Bob Smith", email: "bob@example.com", role: "affiliate", isActive: true },
//     { id: 3, name: "Charlie Davis", email: "charlie@example.com", role: "admin", isActive: true },
//     { id: 4, name: "Dana Lee", email: "dana@example.com", role: "user", isActive: false },
//   ]);

//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredUsers = useMemo(() => {
//     const term = searchTerm.toLowerCase();
//     return users.filter(
//       (user) =>
//         user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
//     );
//   }, [searchTerm, users]);

//   function toggleActive(id: number) {
//     setUsers((prev) =>
//       prev.map((user) =>
//         user.id === id ? { ...user, isActive: !user.isActive } : user
//       )
//     );
//   }

//   function changeRole(id: number, newRole: User["role"]) {
//     setUsers((prev) =>
//       prev.map((user) =>
//         user.id === id ? { ...user, role: newRole } : user
//       )
//     );
//   }

//   function deleteUser(id: number) {
//     if (confirm("Are you sure you want to delete this user?")) {
//       setUsers((prev) => prev.filter((user) => user.id !== id));
//     }
//   }

//   return (
//     <div className="max-w-5xl mx-auto p-8 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-semibold mb-6 text-gray-800">Manage Users</h1>

//       <input
//         type="search"
//         placeholder="Search by name or email..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="w-full mb-6 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />

//       <table className="w-full table-auto bg-white rounded shadow">
//         <thead>
//           <tr className="bg-blue-600 text-white">
//             <th className="p-3 text-left">Name</th>
//             <th className="p-3 text-left">Email</th>
//             <th className="p-3 text-left">Role</th>
//             <th className="p-3 text-left">Status</th>
//             <th className="p-3 text-left">Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {filteredUsers.length === 0 && (
//             <tr>
//               <td colSpan={5} className="text-center p-4 text-gray-500">
//                 No users found.
//               </td>
//             </tr>
//           )}

//           {filteredUsers.map(({ id, name, email, role, isActive }) => (
//             <tr key={id} className="border-b hover:bg-gray-100">
//               <td className="p-3">{name}</td>
//               <td className="p-3">{email}</td>
//               <td className="p-3">
//                 <select
//                   value={role}
//                   onChange={(e) => changeRole(id, e.target.value as User["role"])}
//                   className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="user">User</option>
//                   <option value="affiliate">Affiliate</option>
//                   <option value="admin">Admin</option>
//                 </select>
//               </td>
//               <td className="p-3">
//                 <button
//                   onClick={() => toggleActive(id)}
//                   className={`px-3 py-1 rounded text-white ${
//                     isActive ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
//                   } transition`}
//                 >
//                   {isActive ? "Active" : "Inactive"}
//                 </button>
//               </td>
//               <td className="p-3 space-x-2">
//                 <button
//                   onClick={() => deleteUser(id)}
//                   className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
"use client";

import React, { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  affiliateCode?: string;
}

const ROLES = ["All", "Admin", "User"];

export default function AdminUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // Controls
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("All");
  const [sortKey, setSortKey] = useState<"name" | "email" | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  useEffect(() => {
    async function fetchUsers() {
      try {
        // Dummy data - replace with API call
        const data: User[] = [
          { id: "1", name: "Alice Johnson", email: "alice@example.com", role: "User", affiliateCode: "AFF123" },
          { id: "2", name: "Bob Smith", email: "bob@example.com", role: "Admin", affiliateCode: "AFF456" },
          { id: "3", name: "Charlie Brown", email: "charlie@example.com", role: "User" },
          { id: "4", name: "David Lee", email: "david@example.com", role: "User", affiliateCode: "AFF789" },
          { id: "5", name: "Eva Green", email: "eva@example.com", role: "User" },
          { id: "6", name: "Frank White", email: "frank@example.com", role: "Admin" },
          { id: "7", name: "Grace Hopper", email: "grace@example.com", role: "User" },
          { id: "8", name: "Henry Ford", email: "henry@example.com", role: "User", affiliateCode: "AFF101" },
        ];
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  // Filtering, searching, sorting logic
  useEffect(() => {
    let tempUsers = [...users];

    // Filter role
    if (filterRole !== "All") {
      tempUsers = tempUsers.filter((user) => user.role === filterRole);
    }

    // Search term (name or email)
    if (searchTerm.trim()) {
      tempUsers = tempUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    if (sortKey) {
      tempUsers.sort((a, b) => {
        const valA = a[sortKey]!.toLowerCase();
        const valB = b[sortKey]!.toLowerCase();
        if (valA < valB) return sortOrder === "asc" ? -1 : 1;
        if (valA > valB) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
    }

    setFilteredUsers(tempUsers);
    setCurrentPage(1); // Reset to first page on filter/search change
  }, [users, searchTerm, filterRole, sortKey, sortOrder]);

  // Pagination slice
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(filteredUsers.length / pageSize);

  // Sort toggler
  const handleSort = (key: "name" | "email") => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  // Handlers for edit/delete (placeholders)
  const handleEdit = (id: string) => {
    alert(`Edit user ${id} (not implemented)`);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      // Implement delete logic here
      alert(`Deleted user ${id} (not implemented)`);
    }
  };

  if (loading) return <p className="p-6">Loading users...</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Manage Users</h1>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="border border-gray-300 rounded px-3 py-2 flex-grow sm:flex-auto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        >
          {ROLES.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <table className="min-w-full bg-white shadow rounded border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th
              className="p-4 border-b cursor-pointer select-none"
              onClick={() => handleSort("name")}
            >
              Name{" "}
              {sortKey === "name" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
            </th>
            <th
              className="p-4 border-b cursor-pointer select-none"
              onClick={() => handleSort("email")}
            >
              Email{" "}
              {sortKey === "email" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
            </th>
            <th className="p-4 border-b">Role</th>
            <th className="p-4 border-b">Affiliate Code</th>
            <th className="p-4 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center p-4 italic text-gray-500">
                No users found.
              </td>
            </tr>
          ) : (
            paginatedUsers.map(({ id, name, email, role, affiliateCode }) => (
              <tr
                key={id}
                className="border-b hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="p-4">{name}</td>
                <td className="p-4">{email}</td>
                <td className="p-4">{role}</td>
                <td className="p-4">{affiliateCode || <span className="italic text-gray-400">None</span>}</td>
                <td className="p-4 flex justify-center gap-2">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => handleEdit(id)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => handleDelete(id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-4 flex justify-center gap-3">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? "bg-blue-600 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
