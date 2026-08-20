import '../globals.css';
import Header from './Header';
import Footer from './Footer';

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