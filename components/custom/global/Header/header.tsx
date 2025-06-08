"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavigationMenu from "./NavigationMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "Our Mission", "Our Team", "Dashboard", "Login"];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Image
          src="https://i.ibb.co/spPh6DZ7/Thought-2-1.png"
          alt="Build XI Logo"
          width={140}
          height={400}
          className=""
        />

        <div className="hidden md:block">
          <NavigationMenu />
        </div>

        <div className="flex gap-4">
          <MobileMenu />

          <Button className="cursor-pointer">Donate</Button>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-gray-700 hover:text-black transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
