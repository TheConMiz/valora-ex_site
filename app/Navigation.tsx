'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Navigation({ isOpen, onClose }: NavigationProps) {
  // Prevent body scroll when the mobile navigation is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity fade-enter-active"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Drawer */}
      <nav 
        className="relative w-full max-w-sm bg-[var(--background)] h-full shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out translate-x-0"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <span className="text-xl font-medium tracking-tight text-[var(--foreground)]">
            Menu
          </span>
          <button 
            onClick={onClose}
            className="p-2 text-[var(--foreground)] hover:text-[var(--text-muted)] transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col p-6 gap-6 overflow-y-auto">
          {/* Navigation Links */}
          <Link href="/#one" onClick={onClose} className="text-lg text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">
            ValoraEX ONE
          </Link>
          <Link href="/#governance" onClick={onClose} className="text-lg text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">
            Governance
          </Link>
          <Link href="/#neutrality" onClick={onClose} className="text-lg text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">
            Ecosystem
          </Link>
          <Link href="/about" onClick={onClose} className="text-lg text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors border-t border-gray-100 pt-6">
            About Us
          </Link>

          {/* Full Primary CTA */}
          <div className="mt-8">
            <Link 
              href="/contact" 
              onClick={onClose} 
              className="btn-primary w-full text-center"
            >
              Request a Demonstration
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}