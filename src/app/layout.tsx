import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollRestoration from "@/components/layout/ScrollRestoration";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://evenvibe.in'),
  title: {
    default: "School Uniform Manufacturer in Tamil Nadu & Kerala | EVENVIBE",
    template: "%s | EVENVIBE UNIFORMS"
  },
  description: "EVENVIBE UNIFORMS manufactures premium school uniforms, sports uniforms and corporate T-shirts for schools and businesses across Tamil Nadu and Kerala. Custom designs and bulk orders available.",
  keywords: [
    "School Uniform Manufacturer in Tamil Nadu",
    "School Uniform Manufacturer in Kerala",
    "Uniform Manufacturer in Tamil Nadu",
    "Uniform Manufacturer in Kerala",
    "EVENVIBE UNIFORMS"
  ],
  authors: [{ name: "EVENVIBE UNIFORMS" }],
  creator: "EVENVIBE UNIFORMS",
  publisher: "EVENVIBE UNIFORMS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'School Uniform Manufacturer in Tamil Nadu & Kerala | EVENVIBE',
    description: 'EVENVIBE UNIFORMS manufactures premium school uniforms, sports uniforms and corporate T-shirts for schools and businesses across Tamil Nadu and Kerala. Custom designs and bulk orders available.',
    url: 'https://evenvibe.in',
    siteName: 'EVENVIBE UNIFORMS',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'School Uniform Manufacturer in Tamil Nadu & Kerala | EVENVIBE',
    description: 'EVENVIBE UNIFORMS manufactures premium school uniforms, sports uniforms and corporate T-shirts for schools and businesses across Tamil Nadu and Kerala. Custom designs and bulk orders available.',
    creator: '@evenvibe',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "EVENVIBE UNIFORMS",
  "image": "https://evenvibe.in/logo.jpeg",
  "url": "https://evenvibe.in",
  "telephone": "+919363227147",
  "email": "hello@evenvibe.com",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "areaServed": ["Tamil Nadu", "Kerala", "India"],
  "priceRange": "$$"
};

import MotionProvider from "@/providers/MotionProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-[72px]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ScrollRestoration />
        <MotionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
