import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DESVÍO — NOT MADE TO FOLLOW",
  description: "DESVÍO is contemporary urban streetwear for those who take another way. Independent, rebellious, authentic. Pre-sale Drop 001 now open.",
  keywords: ["streetwear", "urban fashion", "desvio", "independent brand", "clothing"],
  openGraph: {
    title: "DESVÍO — NOT MADE TO FOLLOW",
    description: "Contemporary urban streetwear for the independent.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-desvio-black text-desvio-white">{children}</body>
    </html>
  );
}
