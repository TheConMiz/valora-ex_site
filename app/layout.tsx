import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ValoraEX | Asset Transition Workflow, Evidence and Governance",
  description: "ValoraEX is a workflow, Governance and ecosystem-coordination platform that helps organisations manage asset transition.",
  openGraph: {
    title: "ValoraEX | Asset Transition Workflow, Evidence and Governance",
    description: "ValoraEX is a workflow, Governance and ecosystem-coordination platform that helps organisations manage asset transition.",
    url: "https://valoraex.com",
    siteName: "ValoraEX",
    locale: "en_HK",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
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