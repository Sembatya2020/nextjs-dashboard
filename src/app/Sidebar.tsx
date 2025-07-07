
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
  { href: "/", label: "Home", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 inline-block align-middle">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125h3.75v-4.5c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v4.5h3.75c.621 0 1.125-.504 1.125-1.125V9.75M8.25 22.5h7.5" />
    </svg>
  ) },
  { href: "/invoices", label: "Invoices", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 inline-block align-middle">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-6.75A2.25 2.25 0 0017.25 5.25h-10.5A2.25 2.25 0 004.5 7.5v9A2.25 2.25 0 006.75 18.75h10.5A2.25 2.25 0 0019.5 16.5v-2.25M9 12h6m-6 3h6m-6-6h.008v.008H9V9zm3 0h.008v.008H12V9zm3 0h.008v.008H15V9z" />
    </svg>
  ) },
  { href: "/customers", label: "Customers", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 inline-block align-middle">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3 3 0 11-6 0 3 3 0 016 0zm-9 12a6 6 0 1112 0H6.75z" />
    </svg>
  ) },
];


import Image from "next/image";

export default function Sidebar() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  return (
    <>
      {/* Logo and Acme header moved to layout.tsx */}
      <nav className="flex flex-col gap-3 w-full mt-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center flex-1 text-left px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-lg font-medium ${pathname === link.href ? "bg-blue-100 text-blue-700" : "bg-white hover:bg-blue-50 hover:text-blue-700 text-gray-700"}`}
          >
            {link.icon}
            <span className="inline-block align-middle ml-2">{link.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
