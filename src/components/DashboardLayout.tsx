'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sidebarItems = [
  { label: 'My Courses', href: '/dashboard/my-courses' },
  { label: 'Affiliate Dashboard', href: '/dashboard/affiliate-dashboard' },
  { label: 'Profile', href: '/dashboard/profile' },
  { label: 'KYC', href: '/dashboard/kyc' },
  { label: 'Plan', href: '/dashboard/plan' },
  { label: 'Affiliate Link', href: '/dashboard/affiliate-link' },
  { label: 'Leaderboard', href: '/dashboard/leaderboard' },
  { label: 'Payouts', href: '/dashboard/payouts' },
  { label: 'Withdrawal Request', href: '/dashboard/withdrawal-request' },
  { label: 'My Affiliates', href: '/dashboard/my-affiliates' },
  { label: 'Traffic', href: '/dashboard/traffic' },
  { label: 'Social Media Handles', href: '/dashboard/social-media-handles' },
  { label: 'Upcoming Webinar', href: '/dashboard/upcoming-webinar' },
  { label: 'Training', href: '/dashboard/training' },
  { label: 'Other', href: '/dashboard/other' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-md">
        <h2 className="text-xl font-bold text-indigo-600 mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded text-sm font-medium ${
                pathname === item.href
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
