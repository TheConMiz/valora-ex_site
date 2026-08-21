'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';

export default function LanguageSelector({ currentLang }: { currentLang: string }) {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Close the dropdown when clicking outside of it
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	// Helper to swap the language segment in the current URL
	const getRedirectPath = (targetLang: string) => {
		if (!pathname) return `/${targetLang}`;
		const segments = pathname.split('/');
		segments[1] = targetLang;
		return segments.join('/');
	};

	const languages = [
		{ code: 'en', label: 'EN' },
		{ code: 'zh-hk', label: '繁中' },
		{ code: 'zh-cn', label: '简中' }
	];

	// Determine the current display label
	const currentDisplayLabel = languages.find(l => l.code === currentLang)?.label || 'EN';

	return (
		<div className="relative" ref={dropdownRef}>
			{/* Dropdown Toggle Button */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center gap-2 p-2 text-gray-600 hover:text-[var(--accent-teal)] transition-colors rounded-md focus:outline-none"
				aria-label="Select Language"
				aria-expanded={isOpen}
			>
				<Globe size={20} strokeWidth={1.5} />
				<span className="text-sm font-medium hidden sm:block">{currentDisplayLabel}</span>
			</button>

			{/* Dropdown Menu */}
			{isOpen && (
				<div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 shadow-xl rounded-md overflow-hidden z-50 animate-fade-in-up">
					<div className="flex flex-col">
						{languages.map((lang) => (
							<Link
								key={lang.code}
								href={getRedirectPath(lang.code)}
								onClick={() => setIsOpen(false)}
								className={`px-4 py-3 text-sm transition-colors hover:bg-gray-50 border-b border-gray-100 last:border-none ${currentLang === lang.code
										? 'text-[var(--accent-teal)] font-bold bg-gray-50'
										: 'text-gray-700'
									}`}
							>
								{lang.label}
							</Link>
						))}
					</div>
				</div>
			)}
		</div>
	);
}