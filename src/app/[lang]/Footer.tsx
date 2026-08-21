import Link from 'next/link';
import { getDictionary, Locale } from '@/lib/dictionaries';

export default async function Footer({ lang }: { lang: string }) {
	const dict = await getDictionary(lang as Locale);

	const footerLinks = [
		{ href: `/${lang}/why-valoraex`, label: dict.footer.links.why_valoraex },
		{ href: `/${lang}/what-we-do`, label: dict.footer.links.what_we_do },
		{ href: `/${lang}/valoraex-one`, label: dict.footer.links.v_one },
		{ href: `/${lang}/valoraex-governance`, label: dict.footer.links.v_governance },
		{ href: `/${lang}/execution-coordination`, label: dict.footer.links.execution_coordination },
		{ href: `/${lang}/insights`, label: dict.footer.links.insights },
		{ href: `/${lang}/about`, label: dict.footer.links.about },
		{ href: `/${lang}/faq`, label: dict.footer.links.faq },
		{ href: `/${lang}/contact`, label: dict.footer.links.contact },
		{ href: `/${lang}/privacy`, label: dict.footer.links.privacy },
		{ href: `/${lang}/terms`, label: dict.footer.links.terms }
	];

	return (
		<footer className="bg-gray-50 border-t border-gray-200 py-16 px-8 mt-auto">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

				{/* Company Info */}
				<div className="flex flex-col gap-2">
					<h3 className="font-bold text-gray-900 text-lg">{dict.footer.company_name}</h3>
					<p className="font-semibold text-gray-900 mt-4">{dict.footer.tagline}</p>
					<p className="text-gray-600 mt-2">{dict.footer.location}</p>
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
					<h4 className="font-bold text-gray-900 mb-1">{dict.footer.connect_title}</h4>
					<a href="https://www.linkedin.com/company/valoraex" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-black transition-colors">LinkedIn</a>
					<a href="https://www.youtube.com/@ValoraEX_Ecosystem" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-black transition-colors">YouTube</a>
					<a href="mailto:hello@valoraex.com" className="text-sm text-gray-600 hover:text-black transition-colors">hello@valoraex.com</a>
				</div>

			</div>
			<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500">
				{dict.footer.copyright}
			</div>
		</footer>
	);
}