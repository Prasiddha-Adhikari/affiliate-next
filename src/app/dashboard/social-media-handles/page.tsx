'use client';

import { useState } from 'react';

export default function SocialMediaHandlesPage() {
  const [handles, setHandles] = useState({
    facebook: '',
    instagram: '',
    twitter: '',
    linkedin: '',
    youtube: '',
    tiktok: '',
    website: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHandles({ ...handles, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit to backend logic here
    console.log(handles);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-xl rounded-3xl">
        <h2 className="text-3xl font-bold text-indigo-700 mb-8">Social Media Handles</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: 'Facebook', name: 'facebook' },
            { label: 'Instagram', name: 'instagram' },
            { label: 'Twitter', name: 'twitter' },
            { label: 'LinkedIn', name: 'linkedin' },
            { label: 'YouTube', name: 'youtube' },
            { label: 'TikTok', name: 'tiktok' },
            { label: 'Personal Website', name: 'website' },
          ].map(({ label, name }) => (
            <div key={name}>
              <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
              <input
                type="url"
                name={name}
                placeholder={`Enter your ${label} URL`}
                value={(handles as any)[name]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Save Handles
          </button>
        </form>
      </div>
    </div>
  );
}
