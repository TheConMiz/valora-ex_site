// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import Navigation from './Navigation';

// export default function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <>
//       <header className="sticky top-0 z-50 w-full bg-[var(--background)]/90 backdrop-blur-md border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
//           {/* Logo Area */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="text-xl font-medium tracking-tight text-[var(--foreground)]">
//               ValoraEX
//             </Link>
//           </div>

//           {/* Desktop Navigation (Hidden on Mobile to reduce clutter) */}
//           <nav className="hidden md:flex items-center gap-8">
//             <Link href="/#one" className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">
//               ONE
//             </Link>
//             <Link href="/#governance" className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">
//               Governance
//             </Link>
//             <Link href="/#neutrality" className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">
//               Ecosystem
//             </Link>
//             <Link href="/about" className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">
//               About
//             </Link>
//           </nav>

//           {/* CTA & Mobile Toggle */}
//           <div className="flex items-center gap-4">
//             {/* 
//               Primary CTA 
//               Uses 'Request a Demo' per the feedback for space-restricted areas
//             */}
//             <Link href="/contact" className="btn-primary hidden sm:inline-flex py-2 px-4 text-xs">
//               Request a Demo
//             </Link>
            
//             {/* Mobile Menu Button */}
//             <button 
//               className="md:hidden p-2 text-[var(--foreground)] hover:text-[var(--text-muted)] transition-colors"
//               onClick={() => setIsMobileMenuOpen(true)}
//               aria-label="Open mobile menu"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Navigation Drawer Component (Next in sequence) */}
//       <Navigation isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
//     </>
//   );
// }

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--background)]/95 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Official Logo Integration */}
          <Link href="/" className="flex-shrink-0 flex items-center group">
            {/* 
              Note: Drop the official logo from Dennis into the `public` folder 
              named 'valoraex-logo.png' (or .svg). Adjust width/height to match 
              the intrinsic aspect ratio of his file. 
            */}
            <Image 
              src="/valoraex-logo.png" 
              alt="ValoraEX Official Logo"
              width={160} 
              height={40} 
              className="w-auto h-7 md:h-8 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              priority
            />
          </Link>

          {/* Navigation Component */}
          <Navigation />
          
        </div>
      </div>
    </header>
  );
}