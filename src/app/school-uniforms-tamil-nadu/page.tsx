import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'School Uniform Manufacturer in Tamil Nadu | EVENVIBE UNIFORMS',
  description: 'EVENVIBE UNIFORMS is a leading school uniform manufacturer in Tamil Nadu. We supply premium custom school uniforms, pinafores, shirts, and track pants across Chennai, Coimbatore, Tirupur, Trichy, and Madurai.',
  keywords: [
    'School Uniform Manufacturer in Tamil Nadu',
    'School Uniform Manufacture in Tamil Nadu',
    'School Uniform Manufacturer in Chennai',
    'School Uniform Manufacturer in Tirupur',
    'School Uniform Manufacturer in Trichy',
    'Custom School Uniform Supplier Tamil Nadu'
  ],
  alternates: {
    canonical: 'https://evenvibe.in/school-uniforms-tamil-nadu',
  },
  openGraph: {
    title: 'School Uniform Manufacturer in Tamil Nadu | EVENVIBE UNIFORMS',
    description: 'Premier custom school uniform and track pant manufacturer for schools and educational trusts across Tamil Nadu. Direct factory supply from Tirupur.',
    url: 'https://evenvibe.in/school-uniforms-tamil-nadu',
    siteName: 'EVENVIBE UNIFORMS',
    type: 'website',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'EVENVIBE UNIFORMS - School Uniform Manufacturer in Tamil Nadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'School Uniform Manufacturer in Tamil Nadu | EVENVIBE UNIFORMS',
    description: 'Premier custom school uniform manufacturer for schools across Tamil Nadu. Bulk orders accepted.',
    images: ['/logo.jpeg'],
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "School Uniform Manufacturing",
      "name": "School Uniform Manufacturing in Tamil Nadu",
      "provider": {
        "@type": "LocalBusiness",
        "name": "EVENVIBE UNIFORMS",
        "image": "https://evenvibe.in/logo.jpeg",
        "telephone": "+919344039068",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "20th, Azer Nagar, SAP Theatre Backside, Avinashi Road",
          "addressLocality": "Tiruppur",
          "addressRegion": "Tamil Nadu",
          "postalCode": "641603",
          "addressCountry": "IN"
        }
      },
      "areaServed": [
        { "@type": "State", "name": "Tamil Nadu" },
        { "@type": "City", "name": "Chennai" },
        { "@type": "City", "name": "Coimbatore" },
        { "@type": "City", "name": "Tiruppur" },
        { "@type": "City", "name": "Trichy" },
        { "@type": "City", "name": "Madurai" },
        { "@type": "City", "name": "Salem" }
      ],
      "description": "Premium custom school uniform and track pant manufacturer for schools and educational institutions in Tamil Nadu."
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
          "name": "School Uniforms Tamil Nadu",
          "item": "https://evenvibe.in/school-uniforms-tamil-nadu"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you manufacture custom school uniforms for institutions across Tamil Nadu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, EVENVIBE UNIFORMS manufactures tailored school uniforms with customized colors, patterns, and computer-embroidered school crests for CBSE, Matriculation, ICSE, and State Board schools across Tamil Nadu including Chennai, Tirupur, Trichy, Coimbatore, and Madurai."
          }
        },
        {
          "@type": "Question",
          "name": "Where is your manufacturing unit located in Tamil Nadu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our primary manufacturing facility operates in Tirupur, the textile and knitwear capital of Tamil Nadu, allowing us to maintain direct control over fabric dyeing, cutting, stitching, and bulk delivery."
          }
        },
        {
          "@type": "Question",
          "name": "What is the typical turnaround time for bulk school uniform orders in Tamil Nadu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard bulk school uniform production takes between 10 to 30 days depending on the volume and customization specifications, with scheduled academic year dispatch."
          }
        }
      ]
    }
  ]
};

export default function SchoolUniformsTamilNadu() {
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
            <span className="text-gray-800 font-bold">School Uniforms Tamil Nadu</span>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-[#3FAE49]" />
            <span className="text-[#3FAE49] font-bold text-[12px] tracking-[0.2em] uppercase">
              EVENVIBE UNIFORMS
            </span>
          </div>

          <h1 className="text-[32px] md:text-[46px] font-black text-[#111827] uppercase tracking-tight leading-[1.1] mb-8">
            School Uniform Manufacturer in Tamil Nadu
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6 text-[15px] md:text-[16px] leading-relaxed">
            <p>
              As a dedicated <strong>school uniform manufacturer in Tamil Nadu</strong>, EVENVIBE UNIFORMS understands that a student&apos;s uniform reflects discipline, pride, and school heritage. From our textile manufacturing base in Tiruppur, we engineer high-grade, durable, and comfortable school uniforms for top educational institutions across Tamil Nadu.
            </p>
            
            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Custom School Uniform Manufacture Across Tamil Nadu
            </h2>
            <p>
              Whether your institution requires traditional formal shirts, skirts, pinafores, blazers, or modern unisex polo uniforms, our custom school uniform manufacture capabilities cater to exact requirements. We provide precision pantone color matching, high-definition computerized embroidery for school crests, and reinforced seams designed for daily student activity.
            </p>

            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Serving Schools Across Chennai, Tirupur, Trichy & Coimbatore
            </h2>
            <p>
              We operate an established supply chain reaching every major district in Tamil Nadu:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Chennai:</strong> Supplying prestigious matriculation, CBSE, and international academies. Explore our dedicated <Link href="/school-uniforms-chennai" className="text-[#3FAE49] font-bold hover:underline">school uniform manufacturer in Chennai</Link> services.
              </li>
              <li>
                <strong>Tirupur:</strong> Direct factory manufacturing with wholesale knitwear advantages. Learn about our <Link href="/school-uniforms-tirupur" className="text-[#3FAE49] font-bold hover:underline">school uniform manufacturer in Tirupur</Link> hub.
              </li>
              <li>
                <strong>Trichy & Central TN:</strong> Trusted by prominent institutions like Sri Vignesh Vidyalaya and Vignesh Sri Renga School. View our <Link href="/school-uniforms-trichy" className="text-[#3FAE49] font-bold hover:underline">school uniform manufacturer in Trichy</Link> solutions.
              </li>
              <li>
                <strong>Coimbatore, Salem & Madurai:</strong> Reliable bulk dispatch for large educational trusts and residential schools.
              </li>
            </ul>

            <h3 className="text-[18px] font-bold text-gray-900 mt-8 mb-3 uppercase tracking-wide">
              School Track Pant Manufacturer & Sports PE Wear
            </h3>
            <p>
              In addition to academic day wear, we are a specialized <strong>school track pant manufacturer</strong>. Physical education demands flexible, moisture-wicking fabrics that retain their shape through intense workouts and repeated laundering. For complete school athletic kits, explore our <Link href="/sports-uniforms" className="text-[#3FAE49] font-bold hover:underline">sports uniforms</Link> collection.
            </p>

            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Why Educational Trusts Choose EVENVIBE UNIFORMS
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Breathable Premium Fabrics:</strong> Bio-washed cotton and durable poly-viscose blends tailored for South Indian climatic conditions.</li>
              <li><strong>Bulk Manufacturing Capacity:</strong> State-of-the-art cutting and stitching lines capable of fulfilling orders of 500 to 50,000+ sets.</li>
              <li><strong>Zero Color Bleed & Anti-Pilling:</strong> Rigorously lab-tested textiles that maintain vibrancy after dozens of washes.</li>
              <li><strong>Interstate Reach:</strong> Seamless bulk distribution across South India, including our specialized services as a <Link href="/school-uniforms-kerala" className="text-[#3FAE49] font-bold hover:underline">uniform manufacturer in Kerala</Link> and <Link href="/school-uniforms-bengaluru" className="text-[#3FAE49] font-bold hover:underline">uniform manufacturer in Bengaluru</Link>.</li>
            </ul>

            {/* FAQ Section */}
            <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-[18px] font-bold text-gray-900 mb-4 uppercase tracking-wide">
                Frequently Asked Questions — Tamil Nadu Uniform Manufacturing
              </h3>
              <div className="space-y-4 text-sm md:text-base">
                <div>
                  <strong className="block text-gray-800 mb-1">Do you manufacture custom school uniforms for institutions across Tamil Nadu?</strong>
                  <p>Yes, EVENVIBE UNIFORMS manufactures tailored school uniforms with customized colors, patterns, and computer-embroidered school crests for CBSE, Matriculation, ICSE, and State Board schools across Tamil Nadu.</p>
                </div>
                <div>
                  <strong className="block text-gray-800 mb-1">Where is your manufacturing unit located in Tamil Nadu?</strong>
                  <p>Our primary manufacturing facility operates in Tirupur, allowing us to maintain direct control over fabric dyeing, cutting, stitching, and bulk delivery.</p>
                </div>
                <div>
                  <strong className="block text-gray-800 mb-1">What is the typical turnaround time for bulk school uniform orders in Tamil Nadu?</strong>
                  <p>Standard bulk school uniform production takes between 10 to 30 days depending on the volume and customization specifications.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-16 p-8 bg-[#FAFAFA] rounded-2xl border border-gray-100 text-center flex flex-col items-center">
            <h3 className="text-[22px] font-black text-gray-900 mb-4 uppercase tracking-wide">Ready to Upgrade Your School&apos;s Uniforms?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our uniform specialists today to request fabric swatches, sizing kits, and a customized quotation for your educational institution.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-[#3FAE49] hover:bg-[#2E7D32] text-white rounded-lg px-8 py-4 text-[14px] font-bold transition-all shadow-md uppercase tracking-wider"
            >
              Request a Bulk Quote
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
