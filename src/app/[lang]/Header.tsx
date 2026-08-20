'use client';

import { useState } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Header({ lang }: { lang: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Core desktop links
  const navLinks = [
    { href: `/${lang}/why-valoraex`, label: 'Why ValoraEX' },
    { href: `/${lang}/what-we-do`, label: 'What We Do' },
    { href: `/${lang}/insights`, label: 'Insights' },
    { href: `/${lang}/about`, label: 'About' },
    { href: `/${lang}/faq`, label: 'FAQ' },
    { href: `/${lang}/contact`, label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Home Link */}
        <Link href={`/${lang}`} className="font-bold text-2xl tracking-tight text-gray-900">
          ValoraEX
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 items-center">
          {navLinks.slice(0, 2).map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              {link.label}
            </Link>
          ))}

          {/* Solutions Dropdown */}
          <div className="relative group py-8">
            <span className="text-sm font-medium text-gray-700 hover:text-black transition-colors cursor-pointer flex items-center gap-1">
              Solutions ▾
            </span>
            <div className="absolute top-[70px] left-0 w-64 bg-white border border-gray-200 shadow-lg rounded-md p-2 hidden group-hover:flex flex-col gap-1">
              <Link href={`/${lang}/solutions/valoraex-one`} className="text-sm text-gray-700 hover:text-black p-3 hover:bg-gray-50 rounded-md transition-colors">ValoraEX ONE</Link>
              <Link href={`/${lang}/solutions/valoraex-governance`} className="text-sm text-gray-700 hover:text-black p-3 hover:bg-gray-50 rounded-md transition-colors">ValoraEX Governance</Link>
              <Link href={`/${lang}/solutions/execution-coordination`} className="text-sm text-gray-700 hover:text-black p-3 hover:bg-gray-50 rounded-md transition-colors">Execution & Coordination</Link>
            </div>
          </div>

          {navLinks.slice(2).map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="lg:hidden p-2 text-gray-700 text-2xl"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        lang={lang}
        navLinks={navLinks}
      />
    </header>
  );
}