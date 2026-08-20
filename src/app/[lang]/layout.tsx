import '../globals.css'; // Injects global styles and SCSS variables
import Header from './Header';
import Footer from './Footer';

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: string };
}) {
	return (
		// Dynamically sets the HTML language attribute based on the URL segment
		<html lang={params.lang}>
			<body>
				<Header />
				<main>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}