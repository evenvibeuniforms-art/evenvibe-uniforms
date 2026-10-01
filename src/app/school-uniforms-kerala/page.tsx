import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'School Uniform Manufacturer in Kerala | EVENVIBE UNIFORMS',
  description: 'Looking for a reliable school uniform manufacturer in Kerala? EVENVIBE UNIFORMS provides high-quality, custom school uniforms with bulk supply capabilities for institutions across Kochi, Thiruvananthapuram, Kozhikode, Thrissur, and Kottayam.',
  keywords: [
    'School Uniform Manufacturer in Kerala',
    'School Uniform Manufacture in Kerala',
    'School Uniform Supplier in Kerala',
    'Custom School Uniforms Kochi',
    'Bulk School Uniforms Kerala'
  ],
  alternates: {
    canonical: 'https://evenvibe.in/school-uniforms-kerala',
  },
  openGraph: {
    title: 'School Uniform Manufacturer in Kerala | EVENVIBE UNIFORMS',
    description: 'Looking for a reliable school uniform manufacturer in Kerala? EVENVIBE UNIFORMS provides high-quality, custom school uniforms with bulk supply capabilities for institutions across Kerala.',
    url: 'https://evenvibe.in/school-uniforms-kerala',
    siteName: 'EVENVIBE UNIFORMS',
    type: 'website',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'EVENVIBE UNIFORMS - School Uniform Manufacturer in Kerala',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'School Uniform Manufacturer in Kerala | EVENVIBE UNIFORMS',
    description: 'Custom school uniform manufacturer and bulk supplier for schools across Kerala.',
    images: ['/logo.jpeg'],
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "School Uniform Manufacturing",
      "name": "School Uniform Manufacturing in Kerala",
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
        { "@type": "State", "name": "Kerala" },
        { "@type": "City", "name": "Kochi" },
        { "@type": "City", "name": "Thiruvananthapuram" },
        { "@type": "City", "name": "Kozhikode" },
        { "@type": "City", "name": "Thrissur" },
        { "@type": "City", "name": "Kottayam" },
        { "@type": "City", "name": "Palakkad" },
        { "@type": "City", "name": "Kannur" }
      ],
      "description": "High-quality, bulk custom school uniform manufacturing and supply for educational institutions across Kerala."
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
          "name": "School Uniforms Kerala",
          "item": "https://evenvibe.in/school-uniforms-kerala"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you accept bulk uniform orders for Kerala schools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, EVENVIBE UNIFORMS specializes in bulk uniform manufacturing to supply entire schools, ICSE/CBSE academies, and large educational trusts across Kerala efficiently."
          }
        },
        {
          "@type": "Question",
          "name": "Can you match our existing school uniform design and colors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We replicate existing school uniform designs with exact fabric shade matching, collar tipping, skirt pleating, and logo embroidery, or help schools create modern updated collections."
          }
        },
        {
          "@type": "Question",
          "name": "How are uniform orders delivered to Kerala?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We operate express logistical routes connecting our manufacturing hub in Tirupur directly to Palakkad, Kochi, Kozhikode, Thrissur, and Thiruvananthapuram for prompt scheduled delivery."
          }
        }
      ]
    }
  ]
};

export default function SchoolUniformsKerala() {
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
            <span className="text-gray-800 font-bold">School Uniforms Kerala</span>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-[#3FAE49]" />
            <span className="text-[#3FAE49] font-bold text-[12px] tracking-[0.2em] uppercase">
              EVENVIBE UNIFORMS
            </span>
          </div>

          <h1 className="text-[32px] md:text-[46px] font-black text-[#111827] uppercase tracking-tight leading-[1.1] mb-8">
            School Uniform Manufacturer in Kerala
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6 text-[15px] md:text-[16px] leading-relaxed">
            <p>
              Finding the right apparel manufacturing partner is crucial for educational institutions in God&apos;s Own Country. EVENVIBE UNIFORMS is a prominent <strong>school uniform manufacturer in Kerala</strong>, dedicated to supplying schools with top-tier, long-lasting uniforms that students are proud to wear. We focus on delivering exceptional quality tailored to the specific tropical climate and cultural preferences of the region.
            </p>
            
            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Dedicated School Uniform Manufacture in Kerala
            </h2>
            <p>
              We operate end-to-end <strong>school uniform manufacture in Kerala</strong>, handling every step of apparel creation. From sourcing the most comfortable, breathable fabrics suitable for humid weather to precision computer stitching and strict quality control, our garments meet the rigorous demands of school life while maintaining an impeccable appearance.
            </p>

            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Custom School Uniform Manufacturer Services
            </h2>
            <p>
              Standard off-the-shelf clothing doesn&apos;t work for schools seeking a distinctive visual identity. As an experienced <strong>custom school uniform manufacturer</strong>, we collaborate with school administrators and trust boards across Kochi, Trivandrum, Calicut, and Thrissur to create bespoke uniform designs. This includes custom checks, specific yarn-dyed patterns, and highly durable logo embroidery that survives countless washes.
            </p>

            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Reliable School Uniform Supplier Across Kerala
            </h2>
            <p>
              Timely delivery before the academic term begins is essential. As a trusted <strong>school uniform supplier in Kerala</strong>, we utilize direct road transport corridors from our Tirupur textile hub to ensure your bulk uniform consignments arrive on schedule. 
            </p>
            <p>
              Looking for sports attire? We also manufacture custom <Link href="/sports-uniforms" className="text-[#3FAE49] font-bold hover:underline">sports uniforms</Link> and jerseys for school athletic departments. We also serve schools across the border as a premier <Link href="/school-uniforms-tamil-nadu" className="text-[#3FAE49] font-bold hover:underline">school uniform manufacturer in Tamil Nadu</Link> and <Link href="/school-uniforms-bengaluru" className="text-[#3FAE49] font-bold hover:underline">school uniform manufacturer in Bengaluru</Link>.
            </p>

            <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-[18px] font-bold text-gray-900 mb-4 uppercase tracking-wide">Frequently Asked Questions — Kerala School Uniforms</h3>
              <div className="space-y-4 text-sm md:text-base">
                <div>
                  <strong className="block text-gray-800 mb-1">Do you accept bulk orders for Kerala schools?</strong>
                  <p>Yes, we specialize in bulk uniform manufacturing to supply entire schools and large educational groups efficiently across Kerala.</p>
                </div>
                <div>
                  <strong className="block text-gray-800 mb-1">Can you match our existing school uniform design?</strong>
                  <p>Absolutely. We can replicate your current design, matching colors and patterns precisely, or help you transition to a completely new look.</p>
                </div>
                <div>
                  <strong className="block text-gray-800 mb-1">How are uniform orders delivered to Kerala?</strong>
                  <p>We operate express logistical routes connecting our manufacturing hub directly to Palakkad, Kochi, Kozhikode, Thrissur, and Thiruvananthapuram for prompt scheduled delivery.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-16 p-8 bg-[#FAFAFA] rounded-2xl border border-gray-100 text-center flex flex-col items-center">
            <h3 className="text-[22px] font-black text-gray-900 mb-4 uppercase tracking-wide">Partner With Us for Your Uniform Needs</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our dedicated team is ready to provide you with fabric samples, size sets, and discuss your bulk manufacturing requirements across Kerala.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-[#3FAE49] hover:bg-[#2E7D32] text-white rounded-lg px-8 py-4 text-[14px] font-bold transition-all shadow-md uppercase tracking-wider"
            >
              Get a Custom Quote
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
