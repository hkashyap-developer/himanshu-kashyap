"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import NavigationMenu from "./NavigationMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
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
          <Button className="cursor-pointer">Donate</Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
