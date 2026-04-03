import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import React from 'react';
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LazyMotion, domAnimation } from "framer-motion";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "optional",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://eletech.io"),
  title: {
    default: "ELETECH Solutions | AI & Automation Agency",
    template: "%s | ELETECH Solutions"
  },
  description: "We help businesses leverage artificial intelligence to drive growth, efficiency, and innovation. Discover the future of operational excellence with Eletech.",
  openGraph: {
    title: "ELETECH Solutions | AI & Automation Agency",
    description: "We help businesses leverage artificial intelligence to drive growth, efficiency, and innovation.",
    url: "https://eletech.io",
    siteName: "ELETECH Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ELETECH Solutions - AI & Automation Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELETECH Solutions | AI & Automation Agency",
    description: "Transforming Business with AI and Automation.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/Eletech Letter logo white.svg",
    shortcut: "/Eletech Letter logo white.svg",
    apple: "/Eletech Letter logo white.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        {/* Preload critical font to prevent layout shift and LCP delay */}
        <link
          rel="preload"
          href="/_next/static/media/36966cca54120369-s.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          spaceGrotesk.variable
        )}
      >
        <LazyMotion features={domAnimation}>
          {children}
          {process.env.VERCEL === '1' && <Analytics />}
        </LazyMotion>
      </body>
    </html>
  );
}
