import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'School Uniform Manufacturer in Chennai | EVENVIBE UNIFORMS',
  description: 'EVENVIBE UNIFORMS is a trusted school uniform and sports jersey manufacturer serving Chennai. Premium custom school uniforms, blazer sets, track pants, and PE kits for CBSE, ICSE & Matriculation institutions.',
  keywords: [
    'School Uniform Manufacturer in Chennai',
    'School Uniform Manufacture in Chennai',
    'Sports Uniform Manufacturer in Chennai',
    'Sports Uniform Manufacture in Chennai',
    'Custom School Uniforms Chennai',
    'School Uniform Supplier Chennai'
  ],
  alternates: {
    canonical: 'https://evenvibe.in/school-uniforms-chennai',
  },
  openGraph: {
    title: 'School Uniform Manufacturer in Chennai | EVENVIBE UNIFORMS',
    description: 'Custom school uniforms, blazers, track pants, and athletic team wear manufacturer serving schools across Chennai. Direct factory supply from Tirupur.',
    url: 'https://evenvibe.in/school-uniforms-chennai',
    siteName: 'EVENVIBE UNIFORMS',
    type: 'website',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'EVENVIBE UNIFORMS - School Uniform Manufacturer in Chennai',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'School Uniform Manufacturer in Chennai | EVENVIBE UNIFORMS',
    description: 'Custom school uniform manufacturer and bulk supplier for educational institutions in Chennai.',
    images: ['/logo.jpeg'],
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "School and Sports Uniform Manufacturing",
      "name": "School Uniform Manufacturer in Chennai",
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
        { "@type": "City", "name": "Chennai" },
        { "@type": "State", "name": "Tamil Nadu" }
      ],
      "description": "Premium custom school uniform, sports jersey, and track pant manufacturing for schools across Chennai."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://evenvibe.in" },
        { "@type": "ListItem", "position": 2, "name": "School Uniforms Tamil Nadu", "item": "https://evenvibe.in/school-uniforms-tamil-nadu" },
        { "@type": "ListItem", "position": 3, "name": "School Uniforms Chennai", "item": "https://evenvibe.in/school-uniforms-chennai" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does EVENVIBE provide sizing kits and sample fitting for schools in Chennai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we dispatch comprehensive sizing sets, fabric swatches, and design mockups directly to school administrative offices across Chennai for trial fitting prior to bulk production."
          }
        },
        {
          "@type": "Question",
          "name": "Can you manufacture specialized blazers and winter wear for Chennai international schools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we manufacture formal blazers with custom brass buttons, crest embroidery, knitted cardigans, ties, and belts tailored for international and CBSE curriculums in Chennai."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can bulk school uniform orders be delivered to Chennai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bulk uniform orders are manufactured at our Tirupur facility and delivered to Chennai within 10 to 30 days via dedicated logistics partners."
          }
        }
      ]
    }
  ]
};

export default function SchoolUniformsChennai() {
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
            <Link href="/school-uniforms-tamil-nadu" className="hover:text-[#3FAE49] transition-colors">Tamil Nadu</Link>
            <span>/</span>
            <span className="text-gray-800 font-bold">Chennai</span>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-[#3FAE49]" />
            <span className="text-[#3FAE49] font-bold text-[12px] tracking-[0.2em] uppercase">
              CHENNAI INSTITUTIONAL APPAREL
            </span>
          </div>

          <h1 className="text-[32px] md:text-[46px] font-black text-[#111827] uppercase tracking-tight leading-[1.1] mb-8">
            School Uniform Manufacturer in Chennai
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6 text-[15px] md:text-[16px] leading-relaxed">
            <p>
              Chennai is the educational center of Tamil Nadu, home to many of South India&apos;s most prestigious matriculation schools, CBSE academies, ICSE institutions, and international day-cum-boarding schools. EVENVIBE UNIFORMS is a trusted <strong>school uniform manufacturer in Chennai</strong>, delivering premium custom academic attire that upholds institutional prestige and ensures student comfort throughout the school day.
            </p>
            
            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Custom School Uniform Manufacture in Chennai
            </h2>
            <p>
              Our end-to-end <strong>school uniform manufacture in Chennai</strong> caters to the diverse dress codes of premier institutions across Anna Nagar, Adyar, Mylapore, T. Nagar, Velachery, and OMR. From lightweight breathable cotton shirts suitable for Chennai&apos;s coastal climate to tailored pinafores, pleated skirts, trousers, and custom-embroidered school ties, every piece is manufactured with attention to detail.
            </p>

            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Sports Uniform & Jersey Manufacturer in Chennai
            </h2>
            <p>
              Chennai&apos;s vibrant school athletics and inter-school tournaments demand technical athletic apparel. As a premier <strong>sports uniform manufacturer in Chennai</strong> and <strong>sports jersey manufacturer</strong>, we supply full sublimation team jerseys, house-wise PE T-shirts, and durable school track pants engineered with quick-dry technology. Explore our specialized <Link href="/sports-uniforms" className="text-[#3FAE49] font-bold hover:underline">sports uniform solutions</Link>.
            </p>

            <h3 className="text-[18px] font-bold text-gray-900 mt-8 mb-3 uppercase tracking-wide">
              Direct Factory Supply from Tirupur to Chennai
            </h3>
            <p>
              By producing all garments at our integrated textile facility in Tirupur, we offer Chennai educational trusts factory-direct pricing without the retail markup of local middlemen. We also supply institutions across Tamil Nadu including our dedicated <Link href="/school-uniforms-trichy" className="text-[#3FAE49] font-bold hover:underline">uniform manufacturing in Trichy</Link> and <Link href="/school-uniforms-tirupur" className="text-[#3FAE49] font-bold hover:underline">Tirupur manufacturing hub</Link>.
            </p>

            <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-[18px] font-bold text-gray-900 mb-4 uppercase tracking-wide">
                Frequently Asked Questions — Chennai School Uniforms
              </h3>
              <div className="space-y-4 text-sm md:text-base">
                <div>
                  <strong className="block text-gray-800 mb-1">Does EVENVIBE provide sizing kits and sample fitting for schools in Chennai?</strong>
                  <p>Yes, we dispatch comprehensive sizing sets, fabric swatches, and design mockups directly to school administrative offices across Chennai for trial fitting prior to bulk production.</p>
                </div>
                <div>
                  <strong className="block text-gray-800 mb-1">Can you manufacture specialized blazers and winter wear for Chennai international schools?</strong>
                  <p>Yes, we manufacture formal blazers with custom brass buttons, crest embroidery, knitted cardigans, ties, and belts tailored for international and CBSE curriculums in Chennai.</p>
                </div>
                <div>
                  <strong className="block text-gray-800 mb-1">How quickly can bulk school uniform orders be delivered to Chennai?</strong>
                  <p>Bulk uniform orders are manufactured at our Tirupur facility and delivered to Chennai within 10 to 30 days via dedicated logistics partners.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-16 p-8 bg-[#FAFAFA] rounded-2xl border border-gray-100 text-center flex flex-col items-center">
            <h3 className="text-[22px] font-black text-gray-900 mb-4 uppercase tracking-wide">Partner With Us for Chennai School Uniforms</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Request sample fabric swatches and customized bulk manufacturing pricing for your Chennai school or college today.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-[#3FAE49] hover:bg-[#2E7D32] text-white rounded-lg px-8 py-4 text-[14px] font-bold transition-all shadow-md uppercase tracking-wider"
            >
              Request a Chennai Quote
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
