"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoIcon from "@/assets/icons/logo-jc.svg";
import MobileNavbar from "./MobileNavbar";
import MobileMenuPanel from "./MobileMenuPanel";

export const LEFT_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Service", href: "/service" },
];

export const RIGHT_LINKS = [
  { name: "Resume", href: "/resume" },
  { name: "Project", href: "/project" },
  { name: "Contact", href: "/contact" },
];

export const ALL_LINKS = [...LEFT_LINKS, ...RIGHT_LINKS];

// Reusable Logo Component using assets/icons/logo-jc.svg
export const Logo = () => (
  <Link href="/" className="flex items-center gap-2 z-50">
    <Image
      src={logoIcon}
      alt="JC Logo"
      width={32}
      height={32}
      className="w-8 h-8"
      priority
    />
    <span className="text-white font-bold tracking-widest text-sm uppercase font-sans">
      Jcrea
    </span>
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-360 z-50 px-4 md:px-17.5 flex justify-center">
      {/* 
        DESKTOP NAVIGATION
        Visible on md and up. Logo centered between links. 
      */}
      <nav className="hidden md:flex items-center justify-between bg-brand-dark rounded-full p-2.5 w-full shadow-xl">
        <div className="flex items-center gap-2 lg:gap-6 pl-2">
          {LEFT_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`p-5 rounded-full text-[20px] font-semibold font-urbanist transition-colors duration-300 ${isActive
                  ? "bg-brand-orange text-white"
                  : "text-gray-300 hover:text-white"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="px-4">
          <Logo />
        </div>

        <div className="flex items-center gap-2 lg:gap-6 pr-2">
          {RIGHT_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`p-5 rounded-full text-[20px] font-semibold font-urbanist transition-colors duration-300 ${isActive
                  ? "bg-brand-orange text-white"
                  : "text-gray-300 hover:text-white"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* 
        MOBILE NAVIGATION
        Visible on screens smaller than md. 
      */}
      <div className="md:hidden w-full max-w-md relative">
        <MobileNavbar isOpen={isOpen} onToggle={toggleMenu} />
        <MobileMenuPanel isOpen={isOpen} pathname={pathname} onClose={() => setIsOpen(false)} />
      </div>
    </header>
  );
}