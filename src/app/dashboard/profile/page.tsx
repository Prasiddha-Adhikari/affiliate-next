'use client';

import { useState } from 'react';

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  const [kycDetails] = useState({
    panNumber: '123456789',
    citizenshipNumber: '987654321',
    idType: 'Citizenship',
    frontImage: '/kyc/front.png',
    backImage: '/kyc/back.png',
  });

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-indigo-700 mb-8">My Profile</h2>

        {/* Basic Profile Section */}
        <div className="flex items-center gap-6 mb-10">
          <img
            src="/default-avatar.png"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-indigo-500 object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Your Name</h3>
            <p className="text-gray-500">your.email@example.com</p>
          </div>
        </div>

        {/* Profile Info Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-xl px-4 py-2"
                value={profile.fullName}
                onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl px-4 py-2"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-xl px-4 py-2"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                placeholder="Enter your address"
                className="w-full border border-gray-300 rounded-xl px-4 py-2"
                value={profile.address}
                onChange={(e) => setProfile({ ...profile, address: e.target.value })}
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition"
          >
            Save Changes
          </button>
        </form>

        {/* Divider */}
        <hr className="my-10" />

        {/* KYC Details Section */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700 mb-6">KYC Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600">ID Type</p>
              <p className="text-lg font-medium">{kycDetails.idType}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Citizenship Number</p>
              <p className="text-lg font-medium">{kycDetails.citizenshipNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">PAN Number</p>
              <p className="text-lg font-medium">{kycDetails.panNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Front Image</p>
              <img
                src={kycDetails.frontImage}
                alt="Front of ID"
                className="rounded-xl border shadow w-60"
              />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Back Image</p>
              <img
                src={kycDetails.backImage}
                alt="Back of ID"
                className="rounded-xl border shadow w-60"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
