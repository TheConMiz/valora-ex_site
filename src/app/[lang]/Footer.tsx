import Link from 'next/link';

export default function Footer({ lang }: { lang: string }) {
	// DRY approach to rendering the comprehensive footer links
	const footerLinks = [
		{ href: `/${lang}/why-valoraex`, label: 'Why ValoraEX' },
		{ href: `/${lang}/what-we-do`, label: 'What We Do' },
		{ href: `/${lang}/solutions/valoraex-one`, label: 'V-ONE' },
		{ href: `/${lang}/solutions/valoraex-governance`, label: 'V-Governance' },
		{ href: `/${lang}/solutions/execution-coordination`, label: 'Execution & Coordination Services' },
		{ href: `/${lang}/insights`, label: 'Insights' },
		{ href: `/${lang}/about`, label: 'About' },
		{ href: `/${lang}/faq`, label: 'FAQ' },
		{ href: `/${lang}/contact`, label: 'Contact' },
		{ href: `/${lang}/privacy`, label: 'Privacy Notice' },
		{ href: `/${lang}/terms`, label: 'Terms of Use' }
	];

	return (
		<footer className="bg-gray-50 border-t border-gray-200 py-16 px-8 mt-auto">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

				{/* Company Info */}
				<div className="flex flex-col gap-2">
					<h3 className="font-bold text-gray-900 text-lg">ValoraEX Intelligence Ecosystem Limited</h3>
					<p className="text-gray-700">延昇智能生態有限公司</p>
					<p className="font-semibold text-gray-900 mt-4">Extend Value Beyond Exit</p>
					<p className="text-gray-600 mt-2">Hong Kong</p>
				</div>

				{/* Navigation Links */}
				<div className="flex flex-col gap-4">
					<ul className="flex flex-wrap gap-x-6 gap-y-3">
						{footerLinks.map((link) => (
							<li key={link.href}>
								<Link href={link.href} className="text-sm text-gray-600 hover:text-black transition-colors">
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Social & Contact */}
				<div className="flex flex-col gap-3">
					<h4 className="font-bold text-gray-900 mb-1">Connect With Us</h4>
					<a href="https://www.linkedin.com/company/valoraex" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-black transition-colors">LinkedIn</a>
					<a href="https://www.youtube.com/@ValoraEX_Ecosystem" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-black transition-colors">YouTube</a>
					<a href="mailto:hello@valoraex.com" className="text-sm text-gray-600 hover:text-black transition-colors">hello@valoraex.com</a>
				</div>

			</div>
			<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500">
				© 2026 ValoraEX Intelligence Ecosystem Limited. All rights reserved.
			</div>
		</footer>
	);
}