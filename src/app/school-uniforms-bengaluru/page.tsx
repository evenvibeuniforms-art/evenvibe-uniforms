import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'School Uniform Manufacturer in Bengaluru | EVENVIBE UNIFORMS',
  description: 'EVENVIBE UNIFORMS is a leading school uniform and sports jersey manufacturer serving Bengaluru and Karnataka. Custom blazers, pinafores, track pants, and tech corporate sports apparel.',
  keywords: [
    'School Uniform Manufacturer in Bengaluru',
    'Sports Uniform Manufacturer in Bengaluru',
    'School Uniform Supplier Bangalore',
    'Custom School Uniforms Bengaluru',
    'Corporate Sports Jersey Manufacturer Bengaluru'
  ],
  alternates: {
    canonical: 'https://evenvibe.in/school-uniforms-bengaluru',
  },
  openGraph: {
    title: 'School Uniform Manufacturer in Bengaluru | EVENVIBE UNIFORMS',
    description: 'Premier custom school uniform, sports jersey, and track pant manufacturer serving educational institutions and corporate teams across Bengaluru.',
    url: 'https://evenvibe.in/school-uniforms-bengaluru',
    siteName: 'EVENVIBE UNIFORMS',
    type: 'website',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'EVENVIBE UNIFORMS - School Uniform Manufacturer in Bengaluru',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'School Uniform Manufacturer in Bengaluru | EVENVIBE UNIFORMS',
    description: 'Custom school uniform and sports jersey manufacturer in Bengaluru and Karnataka.',
    images: ['/logo.jpeg'],
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "School and Sports Uniform Manufacturing",
      "name": "School Uniform Manufacturer in Bengaluru",
      "provider": {
        "@id": "https://evenvibe.in/#organization"
      },
      "areaServed": [
        { "@type": "City", "name": "Bengaluru" },
        { "@type": "State", "name": "Karnataka" }
      ],
      "description": "Premium custom school uniforms, blazer sets, athletic jerseys, and track pants manufactured for institutions in Bengaluru and Karnataka."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://evenvibe.in" },
        { "@type": "ListItem", "position": 2, "name": "School Uniforms Bengaluru", "item": "https://evenvibe.in/school-uniforms-bengaluru" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does EVENVIBE supply uniforms to international and CBSE schools in Bengaluru?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, EVENVIBE manufactures custom uniform collections for international, ICSE, and CBSE schools across Bengaluru including Whitefield, Electronic City, Sarjapur, Hebbal, and Indiranagar."
          }
        },
        {
          "@type": "Question",
          "name": "How does EVENVIBE deliver bulk uniform orders to Bengaluru?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using overnight direct transport logistics between our Tirupur textile manufacturing facility and Bengaluru, bulk consignments are delivered securely and promptly."
          }
        },
        {
          "@type": "Question",
          "name": "Do you manufacture corporate sports jerseys for Bengaluru tech companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we produce custom sublimation cricket and football jerseys, marathon T-shirts, and company sports day kits for technology firms and corporate athletic leagues in Bengaluru."
          }
        }
      ]
    }
  ]
};

export default function SchoolUniformsBengaluru() {
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
            <span className="text-gray-800 font-bold">School Uniforms Bengaluru</span>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-[#3FAE49]" />
            <span className="text-[#3FAE49] font-bold text-[12px] tracking-[0.2em] uppercase">
              BENGALURU & KARNATAKA REGION
            </span>
          </div>

          <h1 className="text-[32px] md:text-[46px] font-black text-[#111827] uppercase tracking-tight leading-[1.1] mb-8">
            School Uniform Manufacturer in Bengaluru
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6 text-[15px] md:text-[16px] leading-relaxed">
            <p>
              As India&apos;s Silicon Valley, Bengaluru is home to a world-class network of international schools, CBSE institutions, ICSE day academies, and forward-thinking corporate campuses. EVENVIBE UNIFORMS is a premier <strong>school uniform manufacturer in Bengaluru</strong>, bringing South India&apos;s finest textile craftsmanship from Tirupur directly to Karnataka&apos;s leading educational trusts.
            </p>
            
            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Modern Academic Attire for Bengaluru Educational Institutions
            </h2>
            <p>
              From bespoke tailored blazers, woven cardigans, and formal pinafores to comfortable cotton-rich polo shirts and divided skirts, our manufacturing caters to the contemporary style and comfort expected by Bengaluru schools. We partner with school management teams across Whitefield, Sarjapur, Koramangala, Electronic City, Hebbal, and Yelahanka to craft distinctive visual identities.
            </p>

            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Sports Uniform & Jersey Manufacturer in Bengaluru
            </h2>
            <p>
              Bengaluru has an energetic sports culture spanning school leagues, collegiate championships, and IT corporate sports tournaments. As a dedicated <strong>sports uniform manufacturer in Bengaluru</strong>, we manufacture:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Sublimation Team Jerseys:</strong> High-definition color-infused football, basketball, and cricket jerseys.</li>
              <li><strong>School PE Track Pants:</strong> Flexible, anti-chafing 4-way stretch pants designed for physical education.</li>
              <li><strong>Corporate Sports Wear:</strong> Marathon T-shirts, dry-fit jerseys, and tech firm sports day kits.</li>
              <li><strong>House T-Shirts:</strong> Color-matched pique and single jersey polos with durable school crests.</li>
            </ul>

            <h3 className="text-[18px] font-bold text-gray-900 mt-8 mb-3 uppercase tracking-wide">
              Fast Overnight Freight from Tirupur to Bengaluru
            </h3>
            <p>
              Our manufacturing center in Tirupur operates on a direct overnight logistics link with Bengaluru, ensuring fast sample delivery, sizing approvals, and scheduled bulk deliveries. We also serve major educational regions across South India including <Link href="/school-uniforms-tamil-nadu" className="text-[#3FAE49] font-bold hover:underline">Tamil Nadu</Link>, <Link href="/school-uniforms-chennai" className="text-[#3FAE49] font-bold hover:underline">Chennai</Link>, and <Link href="/school-uniforms-kerala" className="text-[#3FAE49] font-bold hover:underline">Kerala</Link>.
            </p>

            <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-[18px] font-bold text-gray-900 mb-4 uppercase tracking-wide">
                Frequently Asked Questions — Bengaluru School & Sports Uniforms
              </h3>
              <div className="space-y-4 text-sm md:text-base">
                <div>
                  <strong className="block text-gray-800 mb-1">Does EVENVIBE supply uniforms to international and CBSE schools in Bengaluru?</strong>
                  <p>Yes, EVENVIBE manufactures custom uniform collections for international, ICSE, and CBSE schools across Bengaluru including Whitefield, Electronic City, Sarjapur, Hebbal, and Indiranagar.</p>
                </div>
                <div>
                  <strong className="block text-gray-800 mb-1">How does EVENVIBE deliver bulk uniform orders to Bengaluru?</strong>
                  <p>Using overnight direct transport logistics between our Tirupur textile manufacturing facility and Bengaluru, bulk consignments are delivered securely and promptly.</p>
                </div>
                <div>
                  <strong className="block text-gray-800 mb-1">Do you manufacture corporate sports jerseys for Bengaluru tech companies?</strong>
                  <p>Yes, we produce custom sublimation cricket and football jerseys, marathon T-shirts, and company sports day kits for technology firms and corporate athletic leagues in Bengaluru.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-16 p-8 bg-[#FAFAFA] rounded-2xl border border-gray-100 text-center flex flex-col items-center">
            <h3 className="text-[22px] font-black text-gray-900 mb-4 uppercase tracking-wide">Request a Bengaluru School or Sports Quote</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our uniform specialists are available to coordinate fabric samples, sizing trials, and bulk manufacturing plans for your Bengaluru institution.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-[#3FAE49] hover:bg-[#2E7D32] text-white rounded-lg px-8 py-4 text-[14px] font-bold transition-all shadow-md uppercase tracking-wider"
            >
              Get a Bengaluru Quote
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
