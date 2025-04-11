import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anna Huisinga",
  description:
    "Software Developer with 4+ years of experience building scalable, user-focused apps. Passionate about clean code, good books, and Alabama football.",
  openGraph: {
    url: "https://annahuisinga.com",
    siteName: "Anna Huisinga",
    type: "website",
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
            ? "https://" + process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
            : ""
        }/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Anna Huisinga's Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
            ? "https://" + process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
            : ""
        }/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Anna Huisinga's Portfolio",
        type: "image/png",
      },
    ],
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
