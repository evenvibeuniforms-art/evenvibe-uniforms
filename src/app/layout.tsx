import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollRestoration from "@/components/layout/ScrollRestoration";
import MotionProvider from "@/providers/MotionProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://evenvibe.in'),
  title: {
    default: "School Uniform Manufacturer in Tamil Nadu & Kerala | EVENVIBE UNIFORMS",
    template: "%s | EVENVIBE UNIFORMS"
  },
  description: "EVENVIBE UNIFORMS is a premier school uniform, sports jersey, and corporate apparel manufacturer in Tamil Nadu, Kerala & Bengaluru. Custom design, bulk manufacturing, and direct factory dispatch from Tirupur.",
  keywords: [
    "School Uniform Manufacturer in Tamil Nadu",
    "School Uniform Manufacturer in Kerala",
    "School Uniform Manufacturer in Bengaluru",
    "School Uniform Manufacturer in Chennai",
    "School Uniform Manufacturer in Trichy",
    "School Uniform Manufacturer in Tirupur",
    "School Uniform Manufacturer in Tamil Nadu & Kerala",
    "Sports Uniform Manufacturer in Tamil Nadu",
    "Sports Uniform Manufacturer in Kerala",
    "Sports Uniform Manufacturer in Bengaluru",
    "Sports Uniform & Jersey Manufacturer in Tamil Nadu & Kerala",
    "Bulk T Shirt Manufacturer in Tiruppur",
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
    canonical: 'https://evenvibe.in',
  },
  openGraph: {
    title: 'School Uniform Manufacturer in Tamil Nadu & Kerala | EVENVIBE UNIFORMS',
    description: 'Premier school uniform, sports jersey, and corporate apparel manufacturer in Tamil Nadu, Kerala & Bengaluru. Direct factory manufacturing in Tirupur with bulk supply capabilities.',
    url: 'https://evenvibe.in',
    siteName: 'EVENVIBE UNIFORMS',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'EVENVIBE UNIFORMS - Custom School and Sports Uniform Manufacturer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'School Uniform Manufacturer in Tamil Nadu & Kerala | EVENVIBE UNIFORMS',
    description: 'Premier school uniform, sports jersey, and corporate apparel manufacturer in Tamil Nadu, Kerala & Bengaluru. Direct factory manufacturing in Tirupur.',
    creator: '@evenvibe__uniforms',
    images: ['/logo.jpeg'],
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
  "@graph": [
    {
      "@type": ["LocalBusiness", "Organization"],
      "@id": "https://evenvibe.in/#organization",
      "name": "EVENVIBE UNIFORMS",
      "legalName": "DKJ APPARELS PRIVATE LIMITED",
      "alternateName": ["EVENVIBE", "Evenvibe Uniforms Tirupur"],
      "parentOrganization": {
        "@type": "Organization",
        "name": "DKJ APPARELS PRIVATE LIMITED",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perambalur",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        }
      },
      "url": "https://evenvibe.in",
      "logo": "https://evenvibe.in/logo.jpeg",
      "image": "https://evenvibe.in/logo.jpeg",
      "telephone": "+919344039068",
      "email": "evenvibeuniforms@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "20th, Azer Nagar, SAP Theatre Backside, Avinashi Road",
        "addressLocality": "Tiruppur",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641603",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 11.1085,
        "longitude": 77.3411
      },
      "areaServed": [
        { "@type": "State", "name": "Tamil Nadu" },
        { "@type": "State", "name": "Kerala" },
        { "@type": "State", "name": "Karnataka" },
        { "@type": "City", "name": "Tiruppur" },
        { "@type": "City", "name": "Chennai" },
        { "@type": "City", "name": "Trichy" },
        { "@type": "City", "name": "Bengaluru" },
        { "@type": "City", "name": "Kochi" },
        { "@type": "Country", "name": "India" }
      ],
      "hasMap": "https://www.google.com/maps/search/?api=1&query=DKJ+APPARELS+20th+Azer+Nagar+SAP+Theatre+Backside+Avinashi+Road+Tiruppur+Tamil+Nadu+641603",
      "sameAs": [
        "https://www.instagram.com/evenvibe__uniforms",
        "https://www.google.com/maps/search/?api=1&query=DKJ+APPARELS+20th+Azer+Nagar+SAP+Theatre+Backside+Avinashi+Road+Tiruppur+Tamil+Nadu+641603"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Uniform Manufacturing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "School Uniform Manufacturing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sports Uniform & Jersey Manufacturing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Corporate T-Shirt Manufacturing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "School Track Pant Manufacturing"
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://evenvibe.in/#website",
      "url": "https://evenvibe.in",
      "name": "EVENVIBE UNIFORMS",
      "publisher": {
        "@id": "https://evenvibe.in/#organization"
      }
    }
  ]
};

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
