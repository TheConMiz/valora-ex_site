import type { Metadata } from 'next';
import './globals.css';
import Header from './Header';
import Footer from './Footer';

export const metadata: Metadata = {
  title: 'ValoraEX',
  description: 'Extend Value Beyond Exit. ValoraEX connects FF&E asset transition with structured workflow, route readiness, evidence and governance-ready information.',
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