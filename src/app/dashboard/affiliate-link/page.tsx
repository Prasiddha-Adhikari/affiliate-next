'use client';

import { useState } from 'react';
import { Copy } from 'lucide-react';

export default function AffiliatedLinkPage() {
  const [copiedText, setCopiedText] = useState('');

  const referralCode = 'ABC123XYZ';
  const referralLink = `https://yourdomain.com/signup?ref=${referralCode}`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(''), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-8 text-center">
          Your Affiliate Info
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          {/* Referral Code */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Referral Code
            </label>
            <div className="flex items-center justify-between bg-gray-100 rounded-lg p-3">
              <span className="text-lg font-mono text-indigo-700">{referralCode}</span>
              <button
                onClick={() => handleCopy(referralCode)}
                className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800"
              >
                <Copy className="w-4 h-4" />
                {copiedText === referralCode ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Referral Link */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Referral Link
            </label>
            <div className="flex items-center justify-between bg-gray-100 rounded-lg p-3 overflow-auto">
              <span className="text-sm text-indigo-700 truncate">{referralLink}</span>
              <button
                onClick={() => handleCopy(referralLink)}
                className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 ml-4"
              >
                <Copy className="w-4 h-4" />
                {copiedText === referralLink ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {copiedText && (
            <div className="text-center text-green-600 font-medium transition-all">
              Copied to clipboard!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
