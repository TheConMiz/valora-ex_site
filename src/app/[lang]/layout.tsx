import '../globals.css';
import Header from './Header';
import Footer from './Footer';

// Add this function to generate static paths for all pages under [lang]
export function generateStaticParams() {
	return [{ lang: 'en' }, { lang: 'zh-hk' }, { lang: 'zh-cn' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  // Unwrap the Promise
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className="min-h-screen flex flex-col">
        <Header lang={lang} />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer lang={lang} />
      </body>
    </html>
  );
}