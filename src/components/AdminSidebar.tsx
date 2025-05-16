import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Dashboard", href: "/admin" },
  { name: "Users", href: "/admin/users" },
  { name: "Courses", href: "/admin/courses" },
  { name: "Affiliates", href: "/admin/affiliates" },
  { name: "Payouts", href: "/admin/payouts" },
  { name: "Webinars", href: "/admin/webinars" },
  { name: "Trainings", href: "/admin/trainings" },
  { name: "Settings", href: "/admin/settings" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-4 p-6">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`hover:text-blue-800 transition ${
            pathname === link.href ? "font-bold" : ""
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
