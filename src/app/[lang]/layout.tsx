import { Metadata } from 'next';
import { getDictionary, Locale } from '@/lib/dictionaries';
import '../globals.css';
import Header from './Header';
import Footer from './Footer';

// Define your production domain here
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.valoraex.com';

export function generateStaticParams() {
	return [{ lang: 'en' }, { lang: 'zh-hk' }, { lang: 'zh-cn' }];
}

// Dynamically generate localized SEO metadata
export async function generateMetadata({
	params
}: {
	params: Promise<{ lang: string }>
}): Promise<Metadata> {
	const { lang } = await params;
	const dict = await getDictionary(lang as Locale);

	return {
		title: {
			template: `%s | ${dict.footer.company_name}`,
			default: `${dict.home.hero.title} | ${dict.footer.company_name}`,
		},
		description: dict.home.hero.description,
		metadataBase: new URL(SITE_URL),
		alternates: {
			// Canonical URL dynamically respects the current language
			canonical: `/${lang}`,
			// Hreflang attributes to tell Google about language variations
			languages: {
				'en': '/en',
				'zh-HK': '/zh-hk',
				'zh-CN': '/zh-cn',
				'x-default': '/en'
			},
		},
		openGraph: {
			title: dict.home.hero.title,
			description: dict.home.hero.description,
			url: `/${lang}`,
			siteName: dict.footer.company_name,
			locale: lang === 'zh-hk' ? 'zh_HK' : lang === 'zh-cn' ? 'zh_CN' : 'en_US',
			type: 'website',
		},
	};
}
export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang as Locale); // <-- Fetch dictionary

	return (
		<html lang={lang}>
			<body className="min-h-screen flex flex-col">
				<Header lang={lang} dict={dict.nav} commonDict={dict.common} /> {/* <-- Pass localized props */}

				<main className="flex-grow">
					{children}
				</main>

				<Footer lang={lang} />
			</body>
		</html>
	);
}