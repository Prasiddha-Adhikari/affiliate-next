"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "My Courses", href: "/dashboard/my-courses" },
  { label: "Affiliate Dashboard", href: "/dashboard/affiliate-dashboard" },
  { label: "Profile", href: "/dashboard/profile" },
  { label: "KYC", href: "/dashboard/kyc" },
  { label: "Plan", href: "/dashboard/plan" },
  { label: "Affiliate Link", href: "/dashboard/affiliate-link" },
  { label: "Leaderboard", href: "/dashboard/leaderboard" },
  { label: "Payouts", href: "/dashboard/payouts" },
  { label: "Withdrawal Request", href: "/dashboard/withdrawal-request" },
  { label: "My Affiliates", href: "/dashboard/my-affiliates" },
  { label: "Traffic", href: "/dashboard/traffic" },
  { label: "Social Media Handles", href: "/dashboard/social-media-handles" },
  { label: "Upcoming Webinar", href: "/dashboard/upcoming-webinar" },
  { label: "Training", href: "/dashboard/training" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col space-y-2">
      {links.map(({ label, href }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`block rounded px-4 py-2 text-sm font-medium transition-colors
              ${
                isActive
                  ? "bg-blue-600 text-white font-bold"
                  : "text-black hover:bg-blue-100 hover:text-blue-900"
              }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
