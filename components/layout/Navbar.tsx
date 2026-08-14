"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoDesktop from "@/assets/icons/logo-jc-dekstop.svg";
import logoMobile from "@/assets/icons/logo-jc-mobile.svg";
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

export const Logo = () => (
  <Link href="/" className="flex items-center z-50">
    {/* Desktop Logo */}
    <div className="hidden md:block relative w-32 h-9 lg:w-53.5 lg:h-15 xl:w-75 xl:h-21.25">
      <Image
        src={logoDesktop}
        alt="JC Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
    {/* Mobile Logo */}
    <div className="block md:hidden relative w-24.25 h-8">
      <Image
        src={logoMobile}
        alt="JC Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-360 z-50 px-3 md:px-17.5 flex justify-center">
      {/* 
        DESKTOP NAVIGATION
        Visible on md and up. Logo centered between links. 
      */}
      <nav className="hidden md:flex items-center justify-between bg-brand-dark rounded-full p-2.5 w-full shadow-xl">
        {LEFT_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`py-2 px-2.5 lg:py-3.5 lg:px-5 xl:py-5 xl:px-10 rounded-full text-[14px] lg:text-[17px] xl:text-[20px] font-semibold font-urbanist transition-colors duration-300 ${isActive
                ? "bg-brand-orange text-white"
                : "text-gray-300 hover:text-white"
                }`}
            >
              {link.name}
            </Link>
          );
        })}

        <Logo />

        {RIGHT_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`py-2 px-2.5 lg:py-3.5 lg:px-5 xl:py-5 xl:px-10 rounded-full text-[14px] lg:text-[17px] xl:text-[20px] font-semibold font-urbanist transition-colors duration-300 ${isActive
                ? "bg-brand-orange text-white"
                : "text-gray-300 hover:text-white"
                }`}
            >
              {link.name}
            </Link>
          );
        })}
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