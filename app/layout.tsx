import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

import { ChatProvider } from "./context/ChatContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ["latin"],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Fethiye.ai - Yapay Zeka Destekli Tatil Asistanı",
  description: "Fethiye tatilinizi yapay zeka ile planlayın. En iyi oteller, plajlar ve restoranlar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans antialiased">
        <ChatProvider>
          {children}
        </ChatProvider>
      </body>
    </html>
  );
}

