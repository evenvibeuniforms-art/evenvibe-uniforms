import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sports Uniform & Jersey Manufacturer in Tamil Nadu & Kerala | EVENVIBE',
  description: 'EVENVIBE UNIFORMS is a premier sports uniform and custom jersey manufacturer in Tamil Nadu, Kerala & Bengaluru. Sublimation jerseys, school track pants, and athletic wear for tournaments and schools.',
  keywords: [
    'Sports Uniform Manufacturer in Tamil Nadu',
    'Sports Uniform Manufacturer in Kerala',
    'Sports Uniform Manufacturer in Bengaluru',
    'Sports Uniform Manufacturer in Chennai',
    'Sports Uniform Manufacturer in Trichy',
    'Sports Uniform Manufacturer in Tirupur',
    'Sports Uniform & Jersey Manufacturer in Tamil Nadu & Kerala',
    'Sports Uniform Manufacture in Tamil Nadu',
    'Custom Sports Jersey Manufacturer South India'
  ],
  alternates: {
    canonical: 'https://evenvibe.in/sports-uniforms',
  },
  openGraph: {
    title: 'Sports Uniform & Jersey Manufacturer in Tamil Nadu & Kerala | EVENVIBE',
    description: 'Custom sports jerseys, school track pants, and athletic team wear manufacturer serving Tamil Nadu, Kerala, and Bengaluru. Direct factory production in Tirupur.',
    url: 'https://evenvibe.in/sports-uniforms',
    siteName: 'EVENVIBE UNIFORMS',
    type: 'website',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'EVENVIBE UNIFORMS - Sports Uniform & Jersey Manufacturer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports Uniform & Jersey Manufacturer in Tamil Nadu & Kerala',
    description: 'Custom sports jerseys, athletic team wear, and school PE kits manufacturer in Tamil Nadu and Kerala.',
    images: ['/logo.jpeg'],
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "Sports Uniform and Jersey Manufacturing",
      "name": "Sports Uniform & Jersey Manufacturing",
      "provider": {
        "@id": "https://evenvibe.in/#organization"
      },
      "areaServed": [
        { "@type": "State", "name": "Tamil Nadu" },
        { "@type": "State", "name": "Kerala" },
        { "@type": "State", "name": "Karnataka" },
        { "@type": "City", "name": "Chennai" },
        { "@type": "City", "name": "Bengaluru" },
        { "@type": "City", "name": "Tiruppur" },
        { "@type": "City", "name": "Kochi" },
        { "@type": "City", "name": "Trichy" }
      ],
      "description": "Custom sports jerseys, track pants, sublimation kits, and athletic wear manufacturing for schools, clubs, and tournaments."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://evenvibe.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Sports Uniforms",
          "item": "https://evenvibe.in/sports-uniforms"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What sports uniform products does EVENVIBE manufacture?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We manufacture full-sublimation football and cricket jerseys, school PE kits, athletics track pants, basketball uniforms, house-colored T-shirts, and marathon jerseys for schools and sports clubs."
          }
        },
        {
          "@type": "Question",
          "name": "Do you support custom player names and numbers on bulk team jerseys?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide individual player name and number printing, custom sponsor logos, and full digital sublimation with zero color peeling or fading."
          }
        },
        {
          "@type": "Question",
          "name": "Which regions do you supply sports uniforms to?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We supply sports uniforms across Tamil Nadu (Chennai, Tirupur, Trichy, Coimbatore), Kerala (Kochi, Trivandrum, Calicut), and Karnataka (Bengaluru) with scheduled express dispatch."
          }
        }
      ]
    }
  ]
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
          <nav aria-label="Breadcrumb" className="text-[12px] text-gray-500 font-medium mb-8 flex items-center gap-2 uppercase tracking-wider">
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
            Sports Uniform & Jersey Manufacturer in Tamil Nadu & Kerala
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6 text-[15px] md:text-[16px] leading-relaxed">
            <p>
              Athletic performance demands high-quality, breathable, and durable apparel. EVENVIBE UNIFORMS is a leading <strong>sports uniform manufacturer in Tamil Nadu</strong> and a trusted <strong>sports uniform manufacturer in Kerala</strong>, also catering to sports clubs and schools as a dependable <strong>sports uniform manufacturer in Bengaluru</strong>. We engineer custom sportswear that helps athletes look professional and perform at their peak.
            </p>
            
            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              School Sports Uniform & Physical Education Kits
            </h2>
            <p>
              Physical education, sports days, and inter-school tournaments require apparel that can withstand heavy use while keeping students cool. As a dedicated <strong>sports uniform manufacturer in Chennai</strong>, <strong>Trichy</strong>, and <strong>Tirupur</strong>, we supply complete PE kits, house-color T-shirts, and athletic track wear tailored specifically for educational institutions across South India.
            </p>

            <h3 className="text-[18px] font-bold text-gray-900 mt-8 mb-3 uppercase tracking-wide">
              High-Mobility School Track Pant Manufacturer
            </h3>
            <p>
              A crucial component of any school sports kit is the track pant. We are a specialized <strong>school track pant manufacturer</strong>, utilizing premium 4-way stretchable and moisture-wicking micro-polyester fabrics. Our track pants offer superior mobility for active students, making them perfect for sports training, gymnastics, and everyday physical training sessions.
            </p>

            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Custom Sports Jersey Manufacture in Tamil Nadu and Kerala
            </h2>
            <p>
              Whether it&apos;s for an inter-school football championship, a corporate cricket league, or a professional athletic club, the right jersey unites the squad. As an experienced <strong>sports jersey manufacturer in Tamil Nadu and Kerala</strong>, we offer:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>All-Over Digital Sublimation:</strong> Vibrant, fade-resistant team colors and sharp logos infused directly into the technical fabric.</li>
              <li><strong>Moisture-Management Micro-Dry Fabrics:</strong> Advanced sweat-wicking materials that keep players cool, dry, and focused during intensive games.</li>
              <li><strong>Custom Player Names & Numbers:</strong> Precision numbering and personalized name tags for every player on your roster.</li>
              <li><strong>Bulk Scalable Production:</strong> Factory-direct manufacturing in Tirupur to outfit entire sporting tournaments, schools, and corporate athletic events.</li>
            </ul>

            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Complete Institutional & Regional Apparel Solutions
            </h2>
            <p>
              In addition to sportswear, we manufacture academic <Link href="/school-uniforms-tamil-nadu" className="text-[#3FAE49] font-bold hover:underline">school uniforms in Tamil Nadu</Link>, <Link href="/school-uniforms-kerala" className="text-[#3FAE49] font-bold hover:underline">school uniforms in Kerala</Link>, <Link href="/school-uniforms-bengaluru" className="text-[#3FAE49] font-bold hover:underline">school uniforms in Bengaluru</Link>, and <Link href="/corporate-tshirts" className="text-[#3FAE49] font-bold hover:underline">corporate T-shirts</Link> to serve all your apparel needs under one trusted roof.
            </p>

            {/* FAQ Section */}
            <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-[18px] font-bold text-gray-900 mb-4 uppercase tracking-wide">
                Frequently Asked Questions — Sports Uniforms & Jerseys
              </h3>
              <div className="space-y-4 text-sm md:text-base">
                <div>
                  <strong className="block text-gray-800 mb-1">What sports uniform products does EVENVIBE manufacture?</strong>
                  <p>We manufacture full-sublimation football and cricket jerseys, school PE kits, athletics track pants, basketball uniforms, house-colored T-shirts, and marathon jerseys for schools and sports clubs.</p>
                </div>
                <div>
                  <strong className="block text-gray-800 mb-1">Do you support custom player names and numbers on bulk team jerseys?</strong>
                  <p>Yes, we provide individual player name and number printing, custom sponsor logos, and full digital sublimation with zero color peeling or fading.</p>
                </div>
                <div>
                  <strong className="block text-gray-800 mb-1">Which regions do you supply sports uniforms to?</strong>
                  <p>We supply sports uniforms across Tamil Nadu (Chennai, Tirupur, Trichy, Coimbatore), Kerala (Kochi, Trivandrum, Calicut), and Karnataka (Bengaluru) with scheduled express dispatch.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-16 p-8 bg-[#FAFAFA] rounded-2xl border border-gray-100 text-center flex flex-col items-center">
            <h3 className="text-[22px] font-black text-gray-900 mb-4 uppercase tracking-wide">Gear Up Your Team Today</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to design custom sports uniforms and jerseys that stand out on the field? Contact us to discuss fabrics, sublimation designs, and bulk institutional pricing.
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
