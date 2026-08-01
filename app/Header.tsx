"use client";

import { useState } from "react";
import Link from "next/link";
// We will import the MobileMenu component once we create it
import MobileMenu from "./MobileMenu"; 

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Solutions", href: "/solutions" },
    { name: "Governance & Data", href: "/governance" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--background)] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
              ValoraEX
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm text-[var(--foreground)] hover:text-[var(--brand-camel)] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/contact"
              className="text-sm font-bold border-2 border-[var(--foreground)] text-[var(--foreground)] px-5 py-2 hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all"
            >
              Talk to Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              type="button" 
              className="text-[var(--foreground)] hover:text-[var(--brand-camel)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-camel)] p-2 rounded-md"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Simple Hamburger Icon */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer Component - To be implemented */}
      <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} navLinks={navLinks} />
      
    </header>
  );
}