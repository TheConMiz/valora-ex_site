"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

interface NavLink {
  name: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navLinks: NavLink[];
}

export default function MobileMenu({ isOpen, setIsOpen, navLinks }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the menu when the Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="md:hidden border-b border-gray-200 bg-[var(--background)] absolute w-full z-40"
      id="mobile-menu"
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Main mobile navigation"
    >
      <div className="px-6 pt-2 pb-6 space-y-1 shadow-lg bg-[var(--background)]">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="block px-3 py-4 text-base font-normal text-[var(--foreground)] hover:text-[var(--brand-camel)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--brand-camel)] transition-colors border-b border-gray-100 last:border-none"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        
        {/* Mobile CTA */}
        <div className="pt-6 pb-2">
          <Link
            href="/contact"
            className="block w-full text-center text-base font-bold border-2 border-[var(--foreground)] text-[var(--foreground)] px-5 py-3 hover:bg-[var(--foreground)] hover:text-[var(--background)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--foreground)] transition-all"
            onClick={() => setIsOpen(false)}
          >
            Talk to Us
          </Link>
        </div>
      </div>
    </div>
  );
}