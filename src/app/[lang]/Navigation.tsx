'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
	isOpen: boolean;
	onClose: () => void;
	lang: string;
}

export default function Navigation({ isOpen, onClose, lang }: NavigationProps) {
	const pathname = usePathname();

	// Prevent body scroll when mobile drawer is open
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

	// Corrected links with proper localized prefixes and target routes
	const navLinks = [
		{ name: 'Home', href: `/${lang}` },
		{ name: 'Why ValoraEX', href: `/${lang}/why-valoraex` },
		{ name: 'What We Do', href: `/${lang}/what-we-do` },
		{ name: 'ValoraEX ONE', href: `/${lang}/valoraex-one` },
		{ name: 'ValoraEX Governance', href: `/${lang}/valoraex-governance` },
		{ name: 'Execution & Coordination', href: `/${lang}/execution-coordination` },
		{ name: 'Insights', href: `/${lang}/insights` },
		{ name: 'About', href: `/${lang}/about` },
		{ name: 'FAQ', href: `/${lang}/faq` },
		{ name: 'Contact', href: `/${lang}/contact` },
	];

	return (
		<div className="fixed inset-0 z-[60] flex justify-end">
			{/* Backdrop */}
			<div
				className="fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
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

				<div className="flex flex-col p-6 gap-5 overflow-y-auto">
					{navLinks.map((link) => {
						const isActive = pathname === link.href;
						return (
							<Link
								key={link.href}
								href={link.href}
								onClick={onClose}
								className={`text-base transition-colors ${isActive
										? 'text-[var(--accent-teal)] font-medium'
										: 'text-[var(--text-muted)] hover:text-[var(--foreground)]'
									}`}
							>
								{link.name}
							</Link>
						);
					})}

					{/* Full Primary CTA */}
					<div className="mt-6 pt-6 border-t border-gray-200">
						<Link
							href={`/${lang}/contact`}
							onClick={onClose}
							className="btn-primary w-full text-center"
						>
							Talk to Us
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
}