import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zhirictronics",
  description:
    "The Zhirictronics official store - Your destination for top-quality electronics.",
  keywords: [
    "electronics",
    "Zhirictronics",
    "official store",
    "gadgets",
    "ecommerce",
  ],
  openGraph: {
    title: "Zhirictronics - Official Store",
    description: "Your destination for top-quality electronics and gadgets.",
    url: "https://zhirictronics.vercel.app",
    siteName: "Zhirictronics",
    images: [
      {
        url: "https://zhirictronics.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zhirictronics Official Store",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
