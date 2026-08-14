import React from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Navbar";

interface MobileNavbarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileNavbar({ isOpen, onToggle }: MobileNavbarProps) {
  return (
    <nav className="bg-brand-dark rounded-full px-3 py-3 flex items-center justify-between shadow-xl relative z-50">
      <Logo />
      <button
        onClick={onToggle}
        className="text-white focus:outline-none p-1 flex items-center justify-center"
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>
    </nav>
  );
}
