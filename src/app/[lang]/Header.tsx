'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import MobileMenu from './MobileMenu';
import LanguageSelector from '@/components/LanguageSelector';

interface HeaderProps {
	lang: string;
	dict: Record<string, string>;
	commonDict: Record<string, string>;
}

export default function Header({ lang, dict, commonDict }: HeaderProps) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Core desktop links driven by the dictionary
	const navLinks = [
		{ href: `/${lang}/why-valoraex`, label: dict.why_valoraex },
		{ href: `/${lang}/what-we-do`, label: dict.what_we_do },
		{ href: `/${lang}/insights`, label: dict.insights },
		{ href: `/${lang}/about`, label: dict.about },
		{ href: `/${lang}/faq`, label: dict.faq },
		{ href: `/${lang}/contact`, label: dict.contact },
	];

	return (
		<header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm">
			<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
				
				{/* Logo / Home Link */}
				<Link href={`/${lang}`} className="flex items-center" aria-label="ValoraEX Home">
					<Image 
						src="/valoraex-logo.png" 
						alt="ValoraEX Official Logo"
						width={240} 
						height={68} 
						className="h-10 md:h-14 lg:h-16 w-auto object-contain"
						priority
					/>
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
							{dict.solutions} ▾
						</span>
						<div className="absolute top-[70px] left-0 w-64 bg-white border border-gray-200 shadow-lg rounded-md p-2 hidden group-hover:flex flex-col gap-1 animate-fade-in-up">
							<Link href={`/${lang}/valoraex-one`} className="text-sm text-gray-700 hover:text-black p-3 hover:bg-gray-50 rounded-md transition-colors">{dict.v_one}</Link>
							<Link href={`/${lang}/valoraex-governance`} className="text-sm text-gray-700 hover:text-black p-3 hover:bg-gray-50 rounded-md transition-colors">{dict.v_governance}</Link>
							<Link href={`/${lang}/execution-coordination`} className="text-sm text-gray-700 hover:text-black p-3 hover:bg-gray-50 rounded-md transition-colors">{dict.execution_coordination}</Link>
						</div>
					</div>

					{navLinks.slice(2).map((link) => (
						<Link key={link.href} href={link.href} className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
							{link.label}
						</Link>
					))}
				</nav>

				{/* Right Side: Language + Mobile Toggle */}
				<div className="flex items-center gap-6">
					<LanguageSelector currentLang={lang} />
					
					{/* Mobile Hamburger Toggle */}
					<button
						className="lg:hidden p-2 text-gray-700 text-2xl"
						onClick={() => setIsMobileMenuOpen(true)}
						aria-label="Open menu"
					>
						☰
					</button>
				</div>
			</div>

			<MobileMenu
				isOpen={isMobileMenuOpen}
				onClose={() => setIsMobileMenuOpen(false)}
				lang={lang}
				navLinks={navLinks}
				ctaText={commonDict.talk_to_us}
			/>
		</header>
	);
}