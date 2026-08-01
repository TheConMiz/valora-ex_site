import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: 'ValoraEX | Asset Transition Workflow, Evidence and Governance',
  description: 'Make every asset transition more visible, traceable and better prepared.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'ValoraEX | Asset Transition Workflow',
    description: 'Visible assets. Transparent information. Structured evidence.'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col selection:bg-[var(--brand-camel)] selection:text-white">
        {/* We will insert the <Header /> here in the next step */}
        
        <main className="flex-grow flex flex-col items-center w-full">
          {children}
        </main>
        
        {/* We will insert the <Footer /> here in a later step */}
      </body>
    </html>
  );
}