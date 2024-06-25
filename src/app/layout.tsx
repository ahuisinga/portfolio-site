import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anna Huisinga",
  description: "Learn more about me!",
  openGraph: {
    url: "https://annahuisinga.com",
    siteName: "Anna Huisinga",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "rgb(129 140 248)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
