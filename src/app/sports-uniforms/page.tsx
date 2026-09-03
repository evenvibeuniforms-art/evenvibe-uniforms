import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sports Uniform & Jersey Manufacturer in Tamil Nadu & Kerala',
  description: 'EVENVIBE UNIFORMS is a premium sports uniform manufacturer in Tamil Nadu and Kerala. We design custom sports jerseys, track pants, and athletic wear for schools and teams.',
  alternates: {
    canonical: 'https://evenvibe.in/sports-uniforms/',
  },
  openGraph: {
    title: 'Sports Uniform & Jersey Manufacturer in Tamil Nadu & Kerala',
    description: 'EVENVIBE UNIFORMS is a premium sports uniform manufacturer in Tamil Nadu and Kerala. We design custom sports jerseys, track pants, and athletic wear for schools and teams.',
    url: 'https://evenvibe.in/sports-uniforms/',
    type: 'website',
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Sports Uniform Manufacturing",
  "provider": {
    "@type": "LocalBusiness",
    "name": "EVENVIBE UNIFORMS",
    "image": "https://evenvibe.in/logo.jpeg"
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Tamil Nadu"
    },
    {
      "@type": "State",
      "name": "Kerala"
    }
  ],
  "description": "Custom sports jerseys, track pants, and athletic wear manufacturing for schools and sports teams."
};

export default function SportsUniforms() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-[1024px] px-6 lg:px-12 relative z-10 flex flex-col">
          
          {/* Breadcrumbs */}
          <nav className="text-[12px] text-gray-500 font-medium mb-8 flex items-center gap-2 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#3FAE49] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-800 font-bold">Sports Uniforms</span>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-[#3FAE49]" />
            <span className="text-[#3FAE49] font-bold text-[12px] tracking-[0.2em] uppercase">
              EVENVIBE ATHLETIC WEAR
            </span>
          </div>

          <h1 className="text-[32px] md:text-[46px] font-black text-[#111827] uppercase tracking-tight leading-[1.1] mb-8">
            Sports Uniform Manufacturer in Tamil Nadu & Kerala
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6 text-[15px] md:text-[16px] leading-relaxed">
            <p>
              Athletic performance demands high-quality, breathable, and durable apparel. EVENVIBE UNIFORMS is a leading <strong>sports uniform manufacturer in Tamil Nadu</strong> and a trusted <strong>sports uniform manufacturer in Kerala</strong>. We engineer custom sportswear that helps athletes look professional and perform at their peak.
            </p>
            
            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              School Sports Uniform Manufacturer
            </h2>
            <p>
              Physical education and school sporting events require apparel that can withstand heavy use while keeping students comfortable. As a dedicated <strong>school sports uniform manufacturer in Tamil Nadu</strong> and <strong>school sports uniform manufacturer in Kerala</strong>, we supply complete PE kits, house-color T-shirts, and athletic wear tailored specifically for educational institutions.
            </p>

            <h3 className="text-[18px] font-bold text-gray-900 mt-8 mb-3 uppercase tracking-wide">
              School Track Pant Manufacturer
            </h3>
            <p>
              A crucial component of any sports kit is the track pant. We are a specialized <strong>school track pant manufacturer</strong>, utilizing premium stretchable and moisture-wicking fabrics. Our track pants offer superior mobility for active students, making them perfect for sports practice, gymnastics, and everyday physical education classes.
            </p>

            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Custom Sports Jersey Manufacturer in Tamil Nadu and Kerala
            </h2>
            <p>
              Whether it&apos;s for a school football team, a corporate cricket tournament, or a professional athletic club, the right jersey unites the team. As an experienced <strong>sports jersey manufacturer in Tamil Nadu and Kerala</strong>, we offer:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Sublimation Printing:</strong> Vibrant, fade-resistant team colors and logos that become part of the fabric.</li>
              <li><strong>Breathable Fabrics:</strong> Advanced moisture management materials that keep players cool and dry.</li>
              <li><strong>Custom Numbering & Naming:</strong> Personalized jerseys for every member of your roster.</li>
              <li><strong>Bulk Manufacturing:</strong> Scalable production to outfit entire leagues or massive inter-school tournaments.</li>
            </ul>

            <p className="mt-8">
              In addition to sportswear, we also manufacture formal <Link href="/school-uniforms-tamil-nadu/" className="text-[#3FAE49] font-bold hover:underline">school uniforms</Link> and <Link href="/corporate-tshirts/" className="text-[#3FAE49] font-bold hover:underline">corporate T-shirts</Link> to meet all your institutional apparel needs under one roof.
            </p>

          </div>

          <div className="mt-16 p-8 bg-[#FAFAFA] rounded-2xl border border-gray-100 text-center flex flex-col items-center">
            <h3 className="text-[22px] font-black text-gray-900 mb-4 uppercase tracking-wide">Gear Up Your Team Today</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to design custom sports uniforms that stand out on the field? Contact us to discuss fabrics, designs, and bulk pricing for your sports teams.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-[#3FAE49] hover:bg-[#2E7D32] text-white rounded-lg px-8 py-4 text-[14px] font-bold transition-all shadow-md uppercase tracking-wider"
            >
              Request a Sports Uniform Quote
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
