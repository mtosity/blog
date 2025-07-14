import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MTosity's Blog",
  description: "Bring a fresh mint to the world",
  icons: {
    icon: [
      { url: "/images/mt.png", sizes: "32x32", type: "image/png" },
      { url: "/images/mt.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/images/mt.png",
    shortcut: "/images/mt.png",
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
        className={`${playfairDisplay.variable} ${sourceSerif4.variable} antialiased`}
      >
        <Script src="/sw.js" strategy="worker" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
