import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
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
    icon: "/images/mt.png",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (navigator && navigator.serviceWorker && navigator.serviceWorker.getRegistrations) {
                navigator.serviceWorker.getRegistrations().then((registrations) => {
                  for(let registration of registrations) {
                    registration.unregister()
                  }
                })
              }
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
