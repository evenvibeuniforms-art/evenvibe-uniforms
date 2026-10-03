import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'School Uniform Manufacturer in Trichy | EVENVIBE UNIFORMS',
  description: 'EVENVIBE UNIFORMS is a proven school uniform and sports jersey manufacturer in Trichy. Trusted by prominent institutions like Sri Vignesh Vidyalaya and Vignesh Sri Renga School across Tiruchirappalli.',
  keywords: [
    'School Uniform Manufacturer in Trichy',
    'Sports Uniform Manufacturer in Trichy',
    'Uniform Manufacturer in Trichy',
    'School Uniform Supplier Tiruchirappalli',
    'Custom School Uniforms Trichy'
  ],
  alternates: {
    canonical: 'https://evenvibe.in/school-uniforms-trichy',
  },
  openGraph: {
    title: 'School Uniform Manufacturer in Trichy | EVENVIBE UNIFORMS',
    description: 'Trusted custom school uniform and sports jersey manufacturer in Trichy and Central Tamil Nadu. Direct factory supply from Tirupur.',
    url: 'https://evenvibe.in/school-uniforms-trichy',
    siteName: 'EVENVIBE UNIFORMS',
    type: 'website',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'EVENVIBE UNIFORMS - School Uniform Manufacturer in Trichy',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'School Uniform Manufacturer in Trichy | EVENVIBE UNIFORMS',
    description: 'Custom school uniform and sports jersey manufacturer in Trichy. Bulk orders accepted.',
    images: ['/logo.jpeg'],
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "School and Sports Uniform Manufacturing",
      "name": "School Uniform Manufacturer in Trichy",
      "provider": {
        "@id": "https://evenvibe.in/#organization"
      },
      "areaServed": [
        { "@type": "City", "name": "Tiruchirappalli" },
        { "@type": "State", "name": "Tamil Nadu" }
      ],
      "description": "Custom school uniform, sports jersey, and track pant manufacturing for schools and educational trusts across Trichy and Central Tamil Nadu."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://evenvibe.in" },
        { "@type": "ListItem", "position": 2, "name": "School Uniforms Tamil Nadu", "item": "https://evenvibe.in/school-uniforms-tamil-nadu" },
        { "@type": "ListItem", "position": 3, "name": "School Uniforms Trichy", "item": "https://evenvibe.in/school-uniforms-trichy" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which schools in Trichy use EVENVIBE uniforms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "EVENVIBE is privileged to manufacture and supply uniforms for prominent educational groups in the Trichy region including Sri Vignesh Vidyalaya, Vignesh Sri Renga Matriculation School, and Sri Vignesh School."
          }
        },
        {
          "@type": "Question",
          "name": "Can you provide bulk PE track pants and sports jerseys for Trichy sports events?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we produce custom sublimation jerseys and high-mobility track pants for annual sports days, inter-house tournaments, and district athletic meets in Trichy."
          }
        },
        {
          "@type": "Question",
          "name": "What is the order delivery timeframe for schools in Tiruchirappalli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because of direct transport links between Tirupur and Trichy, bulk uniform orders are typically delivered within 10 to 20 days following sample approval."
          }
        }
      ]
    }
  ]
};

export default function SchoolUniformsTrichy() {
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
            <span className="text-gray-800 font-bold">Trichy</span>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-[#3FAE49]" />
            <span className="text-[#3FAE49] font-bold text-[12px] tracking-[0.2em] uppercase">
              CENTRAL TAMIL NADU SUPPLY
            </span>
          </div>

          <h1 className="text-[32px] md:text-[46px] font-black text-[#111827] uppercase tracking-tight leading-[1.1] mb-8">
            School Uniform Manufacturer in Trichy
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6 text-[15px] md:text-[16px] leading-relaxed">
            <p>
              Tiruchirappalli (Trichy) stands as a prominent educational powerhouse in Central Tamil Nadu. EVENVIBE UNIFORMS is an established <strong>school uniform manufacturer in Trichy</strong>, known for producing resilient, stylish, and high-comfort school uniforms that meet the demanding standards of top Matriculation, CBSE, and ICSE educational institutions.
            </p>
            
            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Trusted by Top Schools Across Tiruchirappalli
            </h2>
            <p>
              We are proud to have outfitted thousands of students across the Trichy region, partnering with prestigious educational institutions including <strong>Sri Vignesh Vidyalaya</strong>, <strong>Vignesh Sri Renga Matriculation School</strong>, and <strong>Sri Vignesh School</strong>. Our direct relationship with school trusts guarantees consistent fabric shades, exact sizing distributions, and timely deliveries before every new academic session.
            </p>

            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Sports Uniform & Track Pant Manufacturer in Trichy
            </h2>
            <p>
              Athletics and physical education are fundamental to holistic student development. As a leading <strong>sports uniform manufacturer in Trichy</strong>, we manufacture custom house jerseys, school PE track pants, and inter-school sports kits. Using high-mobility breathable micro-polyester fabrics, our sports wear keeps students comfortable during intense sports days and drills. Explore our <Link href="/sports-uniforms" className="text-[#3FAE49] font-bold hover:underline">sports uniform collection</Link>.
            </p>

            <h3 className="text-[18px] font-bold text-gray-900 mt-8 mb-3 uppercase tracking-wide">
              Seamless Supply from Our Tirupur Factory
            </h3>
            <p>
              Our primary manufacturing plant in Tirupur operates just a short logistical hop from Trichy via the NH81 highway corridor. This enables quick physical swatch deliveries, fast sizing trials, and reliable bulk consignments. We also cater to neighboring educational centers like Thanjavur, Karur, Dindigul, and Pudukkottai, as well as statewide hubs like <Link href="/school-uniforms-chennai" className="text-[#3FAE49] font-bold hover:underline">Chennai</Link> and <Link href="/school-uniforms-tirupur" className="text-[#3FAE49] font-bold hover:underline">Tirupur</Link>.
            </p>

            <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-[18px] font-bold text-gray-900 mb-4 uppercase tracking-wide">
                Frequently Asked Questions — Trichy School Uniforms
              </h3>
              <div className="space-y-4 text-sm md:text-base">
                <div>
                  <strong className="block text-gray-800 mb-1">Which schools in Trichy use EVENVIBE uniforms?</strong>
                  <p>EVENVIBE is privileged to manufacture and supply uniforms for prominent educational groups in the Trichy region including Sri Vignesh Vidyalaya, Vignesh Sri Renga Matriculation School, and Sri Vignesh School.</p>
                </div>
                <div>
                  <strong className="block text-gray-800 mb-1">Can you provide bulk PE track pants and sports jerseys for Trichy sports events?</strong>
                  <p>Yes, we produce custom sublimation jerseys and high-mobility track pants for annual sports days, inter-house tournaments, and district athletic meets in Trichy.</p>
                </div>
                <div>
                  <strong className="block text-gray-800 mb-1">What is the order delivery timeframe for schools in Tiruchirappalli?</strong>
                  <p>Because of direct transport links between Tirupur and Trichy, bulk uniform orders are typically delivered within 10 to 20 days following sample approval.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-16 p-8 bg-[#FAFAFA] rounded-2xl border border-gray-100 text-center flex flex-col items-center">
            <h3 className="text-[22px] font-black text-gray-900 mb-4 uppercase tracking-wide">Upgrade Your Trichy School&apos;s Uniforms</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our team to review previous uniform samples supplied to Trichy institutions and discuss customized bulk manufacturing.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-[#3FAE49] hover:bg-[#2E7D32] text-white rounded-lg px-8 py-4 text-[14px] font-bold transition-all shadow-md uppercase tracking-wider"
            >
              Request a Trichy School Quote
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
