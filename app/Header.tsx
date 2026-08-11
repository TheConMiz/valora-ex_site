'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Navigation from './Navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'ONE', href: '/one' },
    { name: 'Governance', href: '/governance' },
    { name: 'Ecosystem', href: '/ecosystem' },
    { name: 'Use Cases', href: '/use-cases' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[var(--background)]/95 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Official Logo Integration */}
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <Image 
                src="/valoraex-logo.png" 
                alt="ValoraEX Official Logo"
                width={160} 
                height={40} 
                className="w-auto h-7 md:h-8 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className={`text-sm transition-colors ${
                      isActive 
                        ? 'text-[var(--accent-teal)] font-medium' 
                        : 'text-[var(--text-muted)] hover:text-[var(--foreground)]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link href="/contact" className="btn-primary hidden sm:inline-flex py-2 px-4 text-xs">
                Request a Demo
              </Link>
              
              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 text-[var(--foreground)] hover:text-[var(--text-muted)] transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer (Props supplied correctly here) */}
      <Navigation isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}