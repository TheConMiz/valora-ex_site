import type { Metadata } from 'next';
import './../globals.css';
import Header from '@/app/[lang]/Header';
import Footer from '@/app/[lang]/Footer';

export const metadata: Metadata = {
	title: 'ValoraEX',
	description: 'Extend Value Beyond Exit. ValoraEX connects FF&E asset transition with structured workflow, route readiness, evidence and governance-ready information.',
	// Add the new icons and manifest configuration here:
	icons: {
		icon: [
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
		],
		shortcut: '/favicon.ico',
		apple: [
			{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
		],
	},
	manifest: '/site.webmanifest',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
				<Header />

				{/* Main content wrapper that flex-grows to push footer to the bottom */}
				<main className="flex-grow flex flex-col w-full relative">
					{children}
				</main>

				<Footer />
			</body>
		</html>
	);
}