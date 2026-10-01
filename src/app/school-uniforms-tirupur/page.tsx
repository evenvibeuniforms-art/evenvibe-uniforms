import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'School Uniform Manufacturer in Tirupur | EVENVIBE UNIFORMS',
  description: 'EVENVIBE UNIFORMS is a direct factory school uniform and sports jersey manufacturer in Tirupur. Wholesale pricing, custom knitting, dyeing, and bulk supply across South India.',
  keywords: [
    'School Uniform Manufacturer in Tirupur',
    'Sports Uniform Manufacturer in Tirupur',
    'Uniform Manufacturer in Tirupur',
    'Bulk School Uniforms Tirupur',
    'Tirupur Uniform Factory'
  ],
  alternates: {
    canonical: 'https://evenvibe.in/school-uniforms-tirupur',
  },
  openGraph: {
    title: 'School Uniform Manufacturer in Tirupur | EVENVIBE UNIFORMS',
    description: 'Direct factory school uniform and sports jersey manufacturing in Tirupur with wholesale pricing, in-house knitting, and bulk supply capabilities.',
    url: 'https://evenvibe.in/school-uniforms-tirupur',
    siteName: 'EVENVIBE UNIFORMS',
    type: 'website',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'EVENVIBE UNIFORMS - School Uniform Manufacturer in Tirupur',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'School Uniform Manufacturer in Tirupur | EVENVIBE UNIFORMS',
    description: 'Direct factory school uniform and sports jersey manufacturing in Tirupur. Bulk orders accepted.',
    images: ['/logo.jpeg'],
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "School & Sports Uniform Manufacturing",
      "name": "School Uniform Manufacturer in Tirupur",
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
        { "@type": "City", "name": "Tiruppur" },
        { "@type": "State", "name": "Tamil Nadu" },
        { "@type": "State", "name": "Kerala" }
      ],
      "description": "Direct textile factory school uniform, track pant, and sports jersey manufacturer based in Tirupur, Tamil Nadu."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://evenvibe.in" },
        { "@type": "ListItem", "position": 2, "name": "School Uniforms Tamil Nadu", "item": "https://evenvibe.in/school-uniforms-tamil-nadu" },
        { "@type": "ListItem", "position": 3, "name": "School Uniforms Tirupur", "item": "https://evenvibe.in/school-uniforms-tirupur" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can educational trusts visit the EVENVIBE manufacturing factory in Tirupur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, school management representatives, procurement officers, and educational trust directors are welcome to visit our manufacturing facility in Tirupur to inspect fabric looms, stitching quality, and sample archives."
          }
        },
        {
          "@type": "Question",
          "name": "Why is Tirupur the preferred hub for school uniform manufacturing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tirupur provides an end-to-end knitwear ecosystem with localized yarn spinning, eco-certified dyeing units, precision computerized embroidery, and high-volume automated cutting facilities, ensuring maximum cost efficiency and speed."
          }
        },
        {
          "@type": "Question",
          "name": "Do you manufacture sports track pants and jerseys at the Tirupur facility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our Tirupur facility houses dedicated sublimation printing and technical sportswear lines for school PE track pants, sports jerseys, and house T-shirts."
          }
        }
      ]
    }
  ]
};

export default function SchoolUniformsTirupur() {
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
            <span className="text-gray-800 font-bold">Tirupur Hub</span>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-[#3FAE49]" />
            <span className="text-[#3FAE49] font-bold text-[12px] tracking-[0.2em] uppercase">
              TIRUPPUR MANUFACTURING EPICENTER
            </span>
          </div>

          <h1 className="text-[32px] md:text-[46px] font-black text-[#111827] uppercase tracking-tight leading-[1.1] mb-8">
            School Uniform Manufacturer in Tirupur
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6 text-[15px] md:text-[16px] leading-relaxed">
            <p>
              Tirupur is globally celebrated as the knitwear and garment manufacturing capital of India. Operating directly from this vibrant textile ecosystem, EVENVIBE UNIFORMS (a unit of DKJ Apparels) is an established <strong>school uniform manufacturer in Tirupur</strong>, supplying hundreds of institutions across South India with factory-direct apparel solutions.
            </p>
            
            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Direct Factory Advantages for School Uniform Manufacture in Tirupur
            </h2>
            <p>
              By partnering directly with a primary manufacturer in Tirupur rather than middlemen or retail aggregators, educational institutions gain significant advantages:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Factory-Wholesale Pricing:</strong> Direct yarn-to-garment manufacturing eliminates multi-tier retail markups.</li>
              <li><strong>In-House Dyeing & Color Consistency:</strong> Precise lab-dipped pantone matching to ensure identical shade consistency year after year.</li>
              <li><strong>Advanced Stitching & Finishing:</strong> Industrial multi-needle machines and computerized bar-tack reinforcement on high-stress seams.</li>
              <li><strong>Strict Textile Quality Control:</strong> Pre-shrunk, bio-washed, and anti-pilling fabrics that withstand active school environments.</li>
            </ul>

            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Sports Uniform & Jersey Manufacturer in Tirupur
            </h2>
            <p>
              In addition to formal school uniforms, we operate as a leading <strong>sports uniform manufacturer in Tirupur</strong>. Leveraging Tirupur&apos;s cutting-edge digital sublimation and micro-polyester dry-fit textile mills, we produce custom athletic jerseys, house uniforms, and school track pants engineered for peak athletic comfort. Explore our full range of <Link href="/sports-uniforms" className="text-[#3FAE49] font-bold hover:underline">sports uniforms and team jerseys</Link>.
            </p>

            <h3 className="text-[18px] font-bold text-gray-900 mt-8 mb-3 uppercase tracking-wide">
              Logistics Network Connecting Tirupur Across South India
            </h3>
            <p>
              Our central location along Avinashi Road in Tirupur provides seamless freight connectivity across state borders. We manage scheduled deliveries to <Link href="/school-uniforms-chennai" className="text-[#3FAE49] font-bold hover:underline">schools in Chennai</Link>, <Link href="/school-uniforms-trichy" className="text-[#3FAE49] font-bold hover:underline">Trichy</Link>, <Link href="/school-uniforms-kerala" className="text-[#3FAE49] font-bold hover:underline">Kerala</Link>, and <Link href="/school-uniforms-bengaluru" className="text-[#3FAE49] font-bold hover:underline">Bengaluru</Link>, ensuring all students are outfitted well before the academic term commences.
            </p>

            <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-[18px] font-bold text-gray-900 mb-4 uppercase tracking-wide">
                Frequently Asked Questions — Tirupur Manufacturing
              </h3>
              <div className="space-y-4 text-sm md:text-base">
                <div>
                  <strong className="block text-gray-800 mb-1">Can educational trusts visit the EVENVIBE manufacturing factory in Tirupur?</strong>
                  <p>Yes, school management representatives, procurement officers, and educational trust directors are welcome to visit our manufacturing facility in Tirupur to inspect fabric looms, stitching quality, and sample archives.</p>
                </div>
                <div>
                  <strong className="block text-gray-800 mb-1">Why is Tirupur the preferred hub for school uniform manufacturing?</strong>
                  <p>Tirupur provides an end-to-end knitwear ecosystem with localized yarn spinning, eco-certified dyeing units, precision computerized embroidery, and high-volume automated cutting facilities, ensuring maximum cost efficiency and speed.</p>
                </div>
                <div>
                  <strong className="block text-gray-800 mb-1">Do you manufacture sports track pants and jerseys at the Tirupur facility?</strong>
                  <p>Yes, our Tirupur facility houses dedicated sublimation printing and technical sportswear lines for school PE track pants, sports jerseys, and house T-shirts.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-16 p-8 bg-[#FAFAFA] rounded-2xl border border-gray-100 text-center flex flex-col items-center">
            <h3 className="text-[22px] font-black text-gray-900 mb-4 uppercase tracking-wide">Get Direct Factory Pricing From Tirupur</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect directly with our manufacturing floor in Tirupur for bulk uniform consultations, fabric swatches, and competitive factory quotations.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-[#3FAE49] hover:bg-[#2E7D32] text-white rounded-lg px-8 py-4 text-[14px] font-bold transition-all shadow-md uppercase tracking-wider"
            >
              Request a Direct Factory Quote
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
