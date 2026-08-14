"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Import icons from assets/icons
import logoIcon from "@/assets/icons/logo-jc.svg";
import hamburgerIcon from "@/assets/icons/hamburger.svg";
import closeIcon from "@/assets/icons/close.svg";

const LEFT_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Service", href: "/service" },
];

const RIGHT_LINKS = [
  { name: "Resume", href: "/resume" },
  { name: "Project", href: "/project" },
  { name: "Contact", href: "/contact" },
];

const ALL_LINKS = [...LEFT_LINKS, ...RIGHT_LINKS];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Reusable Logo Component using assets/icons/logo-jc.svg
  const Logo = () => (
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

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      {/* 
        DESKTOP NAVIGATION
        Visible on md and up. Logo centered between links. 
      */}
      <nav className="hidden md:flex items-center justify-between bg-brand-dark rounded-full p-2 w-full max-w-4xl shadow-xl">
        <div className="flex items-center gap-2 lg:gap-6 pl-2">
          {LEFT_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  isActive
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
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  isActive
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
        {/* Mobile Navbar Pill */}
        <nav className="bg-brand-dark rounded-full px-5 py-3 flex items-center justify-between shadow-xl relative z-50">
          <Logo />
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none p-1 flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              // Close (X) Icon using assets/icons/close.svg
              <Image
                src={closeIcon}
                alt="Close Menu"
                width={24}
                height={24}
                className="w-6 h-6 invert"
              />
            ) : (
              // Hamburger Menu Icon using assets/icons/hamburger.svg
              <Image
                src={hamburgerIcon}
                alt="Open Menu"
                width={24}
                height={24}
                className="w-6 h-6 invert"
              />
            )}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute top-0 left-0 right-0 bg-brand-dark rounded-[2rem] pt-20 pb-6 px-4 shadow-2xl transition-all duration-300 origin-top -z-10 ${
            isOpen
              ? "opacity-100 scale-y-100 translate-y-0"
              : "opacity-0 scale-y-95 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-2">
            {ALL_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-center py-3.5 rounded-full text-base font-medium transition-colors ${
                    isActive
                      ? "bg-brand-orange text-white"
                      : "text-gray-200 hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
