// components/Footer.jsx
"use client";

import { useState } from "react";

export default function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <footer className="bg-gray-50 text-gray-700 text-sm py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-4 text-center md:text-left md:flex-row md:justify-between md:items-center">
        {/* Logo */}
        <div className="font-bold text-2xl">Builder XI</div>

        {/* Accordion Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-full text-center font-medium"
          >
            Menu {menuOpen ? "↑" : "↓"}
          </button>
          {menuOpen && (
            <div className="flex flex-col gap-2 mt-2">
              <a href="#" className="hover:underline">
                Home
              </a>
              <a href="#" className="hover:underline">
                About
              </a>
              <a href="#" className="hover:underline">
                Services
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </div>
          )}
        </div>

        {/* Horizontal Menu for Desktop */}
        <nav className="hidden md:flex gap-4">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Services
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </nav>

        {/* Policies */}
        <div className="flex gap-4 justify-center">
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
