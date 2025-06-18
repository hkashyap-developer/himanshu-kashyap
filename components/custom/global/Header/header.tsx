"use client";

import { ShinyButton } from "@/components/magicui/shiny-button";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import NavigationMenu from "./NavigationMenu";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Image
          src="https://i.ibb.co/spPh6DZ7/Thought-2-1.png"
          alt="Build XI Logo"
          width={160}
          height={400}
          className=""
        />

        <div className="hidden md:hidden">
          <NavigationMenu />
        </div>

        <div className="flex gap-4">
          <ShinyButton className="cursor-pointer">Buy us a coffee</ShinyButton>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
