import React from "react";
import Link from "next/link";
import { ALL_LINKS } from "./Navbar";

interface MobileMenuPanelProps {
  isOpen: boolean;
  pathname: string;
  onClose: () => void;
}

export default function MobileMenuPanel({ isOpen, pathname, onClose }: MobileMenuPanelProps) {
  return (
    <div
      className={`absolute top-full mt-3 left-0 right-0 bg-brand-dark rounded-4xl py-6 px-4 shadow-2xl transition-all duration-300 origin-top z-40 ${
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
              onClick={onClose}
              className={`block w-full text-center py-3 rounded-full text-[20px] font-semibold font-urbanist transition-colors ${
                isActive ? "bg-brand-orange text-white" : "text-gray-200 hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
