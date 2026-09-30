import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Quote | Custom Uniforms & Bulk Orders | EVENVIBE',
  description: 'Request a quick custom quote for school uniforms, corporate T-shirts, sports jerseys, and bulk apparel orders from EVENVIBE UNIFORMS.',
  alternates: {
    canonical: 'https://evenvibe.in/quote',
  },
  openGraph: {
    title: 'Request a Quote | Custom Uniforms & Bulk Orders | EVENVIBE',
    description: 'Request a quick custom quote for school uniforms, corporate T-shirts, sports jerseys, and bulk apparel orders from EVENVIBE UNIFORMS.',
    url: 'https://evenvibe.in/quote',
    type: 'website',
  },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
