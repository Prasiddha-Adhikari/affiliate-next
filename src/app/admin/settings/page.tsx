"use client";

import { useState } from "react";

export default function AdminSettings() {
  const [siteName, setSiteName] = useState("My Affiliate Platform");
  const [siteDescription, setSiteDescription] = useState(
    "Manage your affiliate marketing business efficiently."
  );
  const [adminEmail, setAdminEmail] = useState("admin@example.com");
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setSaveMessage("");

    // Simulate API call delay
    setTimeout(() => {
      setSaving(false);
      setSaveMessage("Settings saved successfully.");
    }, 1500);
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8 text-gray-800">Admin Settings</h1>

      <form onSubmit={handleSave} className="space-y-6 bg-white p-6 rounded-lg shadow">
        <div>
          <label htmlFor="siteName" className="block text-gray-700 font-medium mb-2">
            Site Name
          </label>
          <input
            id="siteName"
            type="text"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="siteDescription" className="block text-gray-700 font-medium mb-2">
            Site Description
          </label>
          <textarea
            id="siteDescription"
            value={siteDescription}
            onChange={(e) => setSiteDescription(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            required
          />
        </div>

        <div>
          <label htmlFor="adminEmail" className="block text-gray-700 font-medium mb-2">
            Admin Email
          </label>
          <input
            id="adminEmail"
            type="email"
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex items-center space-x-3">
          <input
            id="maintenanceMode"
            type="checkbox"
            checked={maintenanceMode}
            onChange={(e) => setMaintenanceMode(e.target.checked)}
            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="maintenanceMode" className="text-gray-700 font-medium">
            Enable Maintenance Mode
          </label>
        </div>

        <button
          type="submit"
          disabled={saving}
          className={`px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition ${
            saving ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {saving ? "Saving..." : "Save Settings"}
        </button>

        {saveMessage && (
          <p className="mt-4 text-green-600 font-medium">{saveMessage}</p>
        )}
      </form>
    </div>
  );
}
