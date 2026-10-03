import { Metadata } from 'next';
import Link from 'next/link';
import { Shirt, Trophy, Sparkles, Palette, FileCheck, Factory, Truck, CheckCircle2 } from 'lucide-react';

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
      "description": "Premium custom school uniform, sports PE wear, and accessory manufacturer for schools and educational institutions in Tamil Nadu."
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
        },
        {
          "@type": "Question",
          "name": "Can you manufacture complete school kits including ties, belts, and house t-shirts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide end-to-end uniform coordination including regular day uniforms, sports track pants, house t-shirts, custom woven school ties, belts, and embroidered crest badges so institutions can source their complete kit from a single manufacturer."
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

          <div className="text-gray-600 space-y-6 text-[15px] md:text-[16px] leading-relaxed">
            <p>
              As a dedicated <strong>school uniform manufacturer in Tamil Nadu</strong>, EVENVIBE UNIFORMS understands that a student&apos;s uniform reflects discipline, pride, and institutional heritage. From our textile manufacturing base in Tiruppur, we engineer high-grade, durable, and comfortable school uniforms for educational trusts, matriculation academies, CBSE, ICSE, and international schools across Tamil Nadu.
            </p>
            
            {/* 1. Full School Uniform & Kit Range */}
            <div className="mt-12 pt-6 border-t border-gray-100">
              <h2 className="text-[24px] font-bold text-gray-900 mb-3 uppercase tracking-wide">
                Full School Uniform & Kit Range
              </h2>
              <p className="text-gray-600 mb-8">
                Designed specifically for school management, correspondents, and institutional procurement teams, our complete apparel catalog covers every student requirement throughout the academic year:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-8">
                {/* Category A: Regular School Uniforms */}
                <div className="bg-gray-50/80 border border-gray-200/80 rounded-xl p-6 flex flex-col justify-between hover:border-[#3FAE49]/50 transition-colors">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#3FAE49]/10 text-[#3FAE49] flex items-center justify-center mb-4">
                      <Shirt className="w-5 h-5" />
                    </div>
                    <h3 className="text-[17px] font-bold text-gray-900 uppercase tracking-wide mb-3">
                      Regular Day Uniforms
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-[#3FAE49] font-bold">•</span>
                        <span><strong>Formal Shirts:</strong> Breathable poly-cotton & cotton-rich fabrics with reinforced collars and cuffs.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3FAE49] font-bold">•</span>
                        <span><strong>Trousers & Shorts:</strong> Durable poly-viscose weaves built for daily active wear.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3FAE49] font-bold">•</span>
                        <span><strong>Pinafores & Skirts:</strong> Precise knife and box pleating with secure waistbands.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3FAE49] font-bold">•</span>
                        <span><strong>School Blazers:</strong> Formal blazers with tailored linings and school crest embroidery.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Category B: Sports & Physical Education */}
                <div className="bg-gray-50/80 border border-gray-200/80 rounded-xl p-6 flex flex-col justify-between hover:border-[#3FAE49]/50 transition-colors">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#3FAE49]/10 text-[#3FAE49] flex items-center justify-center mb-4">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <h3 className="text-[17px] font-bold text-gray-900 uppercase tracking-wide mb-3">
                      Sports & PE Uniforms
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-[#3FAE49] font-bold">•</span>
                        <span><strong>School Track Pants:</strong> Flexible, moisture-wicking interlock knits with zip pockets and drawstring support.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3FAE49] font-bold">•</span>
                        <span><strong>House T-Shirts & Polos:</strong> High-colorfastness polos tailored in distinct house colors with custom tipping.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3FAE49] font-bold">•</span>
                        <span><strong>Athletic Team Wear:</strong> Breathable mesh kits for sports meets and training (explore our <Link href="/sports-uniforms" className="text-[#3FAE49] font-bold hover:underline">sports uniforms</Link>).</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Category C: School Uniform Accessories */}
                <div className="bg-gray-50/80 border border-gray-200/80 rounded-xl p-6 flex flex-col justify-between hover:border-[#3FAE49]/50 transition-colors">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#3FAE49]/10 text-[#3FAE49] flex items-center justify-center mb-4">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="text-[17px] font-bold text-gray-900 uppercase tracking-wide mb-3">
                      Uniform Accessories
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-[#3FAE49] font-bold">•</span>
                        <span><strong>Custom School Ties:</strong> Woven jacquard and printed school ties with institutional stripes and logo motifs.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3FAE49] font-bold">•</span>
                        <span><strong>School Belts:</strong> Heavy-duty woven belts with customized embossed metal or acrylic buckles.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3FAE49] font-bold">•</span>
                        <span><strong>Institutional Socks:</strong> Cotton-rich ribbed socks with custom color bands and reinforced heels.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3FAE49] font-bold">•</span>
                        <span><strong>Embroidered Badges:</strong> Computerized, high-definition crest badges and blazer patches.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Single Manufacturer Coordination Benefit */}
              <div className="bg-[#EAF6EA]/60 border border-[#3FAE49]/20 rounded-xl p-5 md:p-6 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3FAE49] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[15px] font-bold text-gray-900 uppercase tracking-wide mb-1">
                      The Advantage of Single-Source Uniform Kit Coordination
                    </h4>
                    <p className="text-[14px] text-gray-700 leading-relaxed">
                      Sourcing shirts, skirts, track pants, ties, and accessories from a single Tirupur manufacturing partner ensures perfect fabric color harmony across all garments, standardizes grade-by-grade sizing, simplifies institutional billing, and guarantees synchronized campus delivery before the academic term starts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Institutional Ordering Process */}
            <div className="mt-12 pt-6 border-t border-gray-100">
              <h2 className="text-[24px] font-bold text-gray-900 mb-3 uppercase tracking-wide">
                Institutional Ordering Process
              </h2>
              <p className="text-gray-600 mb-8">
                We provide a structured, transparent procurement workflow designed to make uniform ordering hassle-free for school correspondents, trustees, and administrative committees:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 not-prose mb-10">
                {/* Step 1 */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col relative shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#3FAE49] bg-[#3FAE49]/10 px-2.5 py-1 rounded">
                      Step 01
                    </span>
                    <Palette className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="text-[15px] font-bold text-gray-900 mb-2">
                    Fabric & Colour Selection
                  </h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    Consultation on fabric blends (poly-cotton, poly-viscose, interlock knits), climate-appropriate GSM weights, and Pantone color matching to your school guidelines.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col relative shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#3FAE49] bg-[#3FAE49]/10 px-2.5 py-1 rounded">
                      Step 02
                    </span>
                    <FileCheck className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="text-[15px] font-bold text-gray-900 mb-2">
                    Custom Sample & Approval
                  </h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    Production of physical uniform prototypes, standardized sizing sets, and digitized school crest embroidery for committee evaluation and sign-off.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col relative shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#3FAE49] bg-[#3FAE49]/10 px-2.5 py-1 rounded">
                      Step 03
                    </span>
                    <Factory className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="text-[15px] font-bold text-gray-900 mb-2">
                    Bulk Factory Production
                  </h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    Precision computer-aided cutting, dedicated stitching lines, and computerized crest application at our Tirupur facility with strict batch quality inspections.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col relative shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#3FAE49] bg-[#3FAE49]/10 px-2.5 py-1 rounded">
                      Step 04
                    </span>
                    <Truck className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="text-[15px] font-bold text-gray-900 mb-2">
                    Scheduled Institutional Dispatch
                  </h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    Systematic size-wise and class-wise bundling, protective packing, and scheduled direct consignment dispatch to campuses across Tamil Nadu.
                  </p>
                </div>
              </div>
            </div>

            {/* Regional Supply Chain Section */}
            <div className="mt-12 pt-6 border-t border-gray-100">
              <h2 className="text-[24px] font-bold text-gray-900 mb-4 uppercase tracking-wide">
                Serving Schools Across Chennai, Tirupur, Trichy & Coimbatore
              </h2>
              <p>
                We operate an established supply chain reaching every major district in Tamil Nadu:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>
                  <strong>Chennai:</strong> Supplying prestigious matriculation, CBSE, and international academies. Explore our dedicated <Link href="/school-uniforms-chennai" className="text-[#3FAE49] font-bold hover:underline">school uniform manufacturer in Chennai</Link> services.
                </li>
                <li>
                  <strong>Tirupur:</strong> Direct factory manufacturing with wholesale textile advantages. Learn about our <Link href="/school-uniforms-tirupur" className="text-[#3FAE49] font-bold hover:underline">school uniform manufacturer in Tirupur</Link> hub.
                </li>
                <li>
                  <strong>Trichy & Central TN:</strong> Trusted by prominent institutions like Sri Vignesh Vidyalaya and Vignesh Sri Renga School. View our <Link href="/school-uniforms-trichy" className="text-[#3FAE49] font-bold hover:underline">school uniform manufacturer in Trichy</Link> solutions.
                </li>
                <li>
                  <strong>Coimbatore, Salem & Madurai:</strong> Direct logistics and bulk dispatch for educational trusts, day schools, and residential institutions across Western and Southern Tamil Nadu.
                </li>
              </ul>
            </div>

            {/* Why Choose EVENVIBE */}
            <div className="mt-12 pt-6 border-t border-gray-100">
              <h2 className="text-[24px] font-bold text-gray-900 mb-4 uppercase tracking-wide">
                Why Educational Trusts Choose EVENVIBE UNIFORMS
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Breathable Premium Fabrics:</strong> Bio-washed cotton and durable poly-viscose blends tailored specifically for South Indian climatic conditions.</li>
                <li><strong>Bulk Manufacturing Capacity:</strong> State-of-the-art cutting and stitching lines capable of fulfilling orders of 500 to 50,000+ sets without quality variance.</li>
                <li><strong>Zero Color Bleed & Anti-Pilling:</strong> Rigorously lab-tested textiles that maintain vibrancy and shape after repeated domestic laundering.</li>
                <li><strong>Regional & Interstate Distribution:</strong> Efficient campus dispatch across all Tamil Nadu districts, alongside specialized distribution for schools in neighboring regions such as our <Link href="/school-uniforms-kerala" className="text-[#3FAE49] font-bold hover:underline">uniform manufacturer in Kerala</Link> and <Link href="/school-uniforms-bengaluru" className="text-[#3FAE49] font-bold hover:underline">uniform manufacturer in Bengaluru</Link> networks.</li>
              </ul>
            </div>

            {/* FAQ Section */}
            <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-[18px] font-bold text-gray-900 mb-4 uppercase tracking-wide">
                Frequently Asked Questions — Tamil Nadu Uniform Manufacturing
              </h3>
              <div className="space-y-4 text-sm md:text-base">
                <div>
                  <strong className="block text-gray-800 mb-1">Do you manufacture custom school uniforms for institutions across Tamil Nadu?</strong>
                  <p>Yes, EVENVIBE UNIFORMS manufactures tailored school uniforms with customized colors, patterns, and computer-embroidered school crests for CBSE, Matriculation, ICSE, and State Board schools across Tamil Nadu including Chennai, Tirupur, Trichy, Coimbatore, and Madurai.</p>
                </div>
                <div>
                  <strong className="block text-gray-800 mb-1">Where is your manufacturing unit located in Tamil Nadu?</strong>
                  <p>Our primary manufacturing facility operates in Tirupur, the textile and knitwear capital of Tamil Nadu, allowing us to maintain direct control over fabric dyeing, cutting, stitching, and bulk delivery.</p>
                </div>
                <div>
                  <strong className="block text-gray-800 mb-1">What is the typical turnaround time for bulk school uniform orders in Tamil Nadu?</strong>
                  <p>Standard bulk school uniform production takes between 10 to 30 days depending on the volume and customization specifications, with scheduled academic year dispatch.</p>
                </div>
                <div>
                  <strong className="block text-gray-800 mb-1">Can you manufacture complete school kits including ties, belts, and house t-shirts?</strong>
                  <p>Yes, we provide end-to-end uniform coordination including regular day uniforms, sports track pants, house t-shirts, custom woven school ties, belts, and embroidered crest badges so institutions can source their complete kit from a single manufacturer.</p>
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

