'use client';

import { useState } from 'react';
import { UploadCloud } from 'lucide-react';

export default function KYCPage() {
  const [form, setForm] = useState({
    fullName: '',
    email: 'user@example.com',
    phone: '',
    address: '',
    dob: '',
    citizenship: '',
    document: null as File | null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'document') {
      const fileInput = e.target as HTMLInputElement;
      if (fileInput.files && fileInput.files.length > 0) {
        setForm({ ...form, document: fileInput.files[0] });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
        <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center">KYC Verification</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Full Name</label>
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Email</label>
              <input
                name="email"
                value={form.email}
                disabled
                className="w-full p-3 bg-gray-100 border border-gray-300 rounded-xl text-gray-500 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Phone Number</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g. +977-9812345678"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Citizenship / ID Number</label>
              <input
                name="citizenship"
                value={form.citizenship}
                onChange={handleChange}
                required
                placeholder="ID Number"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Address</label>
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                placeholder="Your address"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Upload ID Document</label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <UploadCloud className="w-8 h-8 text-indigo-500 mb-2" />
                  <p className="mb-1 text-sm text-gray-600">
                    <span className="font-semibold">Click to upload</span> or drag & drop
                  </p>
                  <p className="text-xs text-gray-500">PDF, JPG, PNG (Max 10MB)</p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  accept="image/*,.pdf"
                  name="document"
                  onChange={handleChange}
                  className="hidden"
                  required
                />
              </label>
            </div>
            {form.document && (
              <p className="mt-2 text-sm text-gray-600">
                Selected File: <strong>{form.document.name}</strong>
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-xl transition"
          >
            Submit KYC
          </button>

          {submitted && (
            <div className="text-green-600 font-medium text-center mt-4">
              ✅ KYC details submitted successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
