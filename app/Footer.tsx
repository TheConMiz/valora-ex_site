import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--background)] border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8 mb-12">
          
          {/* Company */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-[var(--foreground)] label-priority">
              Company
            </h3>
            <p className="text-sm text-[var(--text-muted)]">
              ValoraEX Intelligence Ecosystem Limited
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-[var(--foreground)] label-priority">
              Contact
            </h3>
            <a 
              href="tel:+85246285775" 
              className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              +852 4628 5775
            </a>
            <a 
              href="mailto:office@valoraex.com" 
              className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              office@valoraex.com
            </a>
            <div className="text-sm text-[var(--text-muted)] mt-2 leading-relaxed">
              <p>Flat B, 17/F, Yuen Long Hi Tech Centre</p>
              <p>11 Wang Yip Street West</p>
              <p>Yuen Long, Hong Kong</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-[var(--foreground)] label-priority">
              Links
            </h3>
            <Link href="/about" className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">
              Privacy Notice
            </Link>
            <Link href="/terms" className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">
              Terms of Use
            </Link>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 border-t border-gray-200 flex flex-col items-start">
          <span className="text-xs text-[var(--text-disclaimer)]">
            &copy; {currentYear} ValoraEX Intelligence Ecosystem Limited. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}