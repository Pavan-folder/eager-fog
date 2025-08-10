// src/components/SideNav.jsx
import React, { useState } from "react";
import {
  Home,
  Users,
  Briefcase,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Dashboard", icon: <Home size={20} />, href: "#" },
  { label: "Buyers", icon: <Users size={20} />, href: "#" },
  { label: "Opportunities", icon: <Briefcase size={20} />, href: "#" },
  { label: "Settings", icon: <Settings size={20} />, href: "#" },
];

export default function SideNav() {
  const [active, setActive] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Mobile toggle button */}
      <button
        className="lg:hidden p-2 text-gray-700 fixed top-4 left-4 z-50 bg-white shadow rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-200 fixed lg:static z-40 h-full w-64 bg-white border-r shadow-sm flex flex-col`}
      >
        {/* Profile Section */}
        <div className="p-4 flex items-center gap-3 border-b">
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-gray-800">Pavan Kumar</p>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => setActive(link.label)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded text-sm font-medium transition-colors ${
                active === link.label
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {link.icon}
              {link.label}
            </button>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t">
          <button className="flex items-center gap-2 text-red-600 hover:bg-red-50 w-full px-3 py-2 rounded">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </div>
  );
}
