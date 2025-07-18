
"use client";

import { navLinks } from "./nav-links";


import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-3 w-full mt-2">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`flex items-center flex-1 text-left px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-lg font-medium ${pathname === link.href ? "bg-blue-100 text-blue-700" : "bg-white hover:bg-blue-50 hover:text-blue-700 text-gray-700"}`}
        >
          {link.icon}
          <span className="inline-block align-middle ml-2">{link.name}</span>
        </Link>
      ))}
    </nav>
  );
}
