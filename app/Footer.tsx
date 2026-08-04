import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--background)] border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Proposition & Description */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h2 className="text-lg font-medium text-[var(--foreground)]">
              Extend Value Beyond Exit
            </h2>
            <p className="text-sm text-[var(--text-muted)] max-w-md">
              ValoraEX connects FF&E asset transition with structured workflow, route readiness, evidence and governance-ready information.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-[var(--foreground)] label-priority">Platform</h3>
            <Link href="/#one" className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">
              ValoraEX ONE
            </Link>
            <Link href="/#governance" className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">
              Governance
            </Link>
            <Link href="/#neutrality" className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">
              Ecosystem
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-[var(--foreground)] label-priority">Contact</h3>
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
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs text-[var(--text-disclaimer)]">
            <span>&copy; {currentYear} ValoraEX Limited</span>
            <span>延昇智能生態有限公司</span>
          </div>
          
          <div className="flex gap-6 text-xs text-[var(--text-disclaimer)]">
            <Link href="/privacy" className="hover:text-[var(--foreground)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--foreground)] transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}