import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'School Uniform Manufacturer in Tamil Nadu | EVENVIBE UNIFORMS',
  description: 'EVENVIBE UNIFORMS is a leading school uniform manufacturer in Tamil Nadu. We supply premium custom school uniforms and track pants for schools across the state. Bulk orders accepted.',
  alternates: {
    canonical: 'https://evenvibe.in/school-uniforms-tamil-nadu/',
  },
  openGraph: {
    title: 'School Uniform Manufacturer in Tamil Nadu | EVENVIBE UNIFORMS',
    description: 'EVENVIBE UNIFORMS is a leading school uniform manufacturer in Tamil Nadu. We supply premium custom school uniforms and track pants for schools across the state. Bulk orders accepted.',
    url: 'https://evenvibe.in/school-uniforms-tamil-nadu/',
    type: 'website',
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "School Uniform Manufacturing",
  "provider": {
    "@type": "LocalBusiness",
    "name": "EVENVIBE UNIFORMS",
    "image": "https://evenvibe.in/logo.jpeg"
  },
  "areaServed": {
    "@type": "State",
    "name": "Tamil Nadu"
  },
  "description": "Premium custom school uniform and track pant manufacturer for schools in Tamil Nadu."
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
          <nav className="text-[12px] text-gray-500 font-medium mb-8 flex items-center gap-2 uppercase tracking-wider">
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
              As a dedicated <strong>school uniform manufacturer in Tamil Nadu</strong>, EVENVIBE UNIFORMS understands that a uniform is more than just clothing—it represents a school&apos;s identity, values, and pride. We specialize in producing high-quality, durable, and comfortable uniforms for educational institutions across the state.
            </p>
            
            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Custom School Uniform Manufacturer
            </h2>
            <p>
              Every school has unique branding requirements. We are a trusted <strong>custom school uniform manufacturer</strong>, offering tailored solutions that include specific color schemes, custom embroidery for school logos, and specific fabric choices. Whether your institution requires traditional formal wear or modern designs, our manufacturing capabilities ensure your students look their best.
            </p>

            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Comprehensive Uniform Supplier in Tamil Nadu
            </h2>
            <p>
              As a leading <strong>school uniform supplier in Tamil Nadu</strong>, we manage the entire production process from fabric selection to final stitching. We cater to bulk orders for schools, ensuring timely delivery before the start of every academic year. Our product range covers everything a student needs throughout the year.
            </p>

            <h3 className="text-[18px] font-bold text-gray-900 mt-8 mb-3 uppercase tracking-wide">
              School Track Pant Manufacturer
            </h3>
            <p>
              In addition to formal wear, we are a specialized <strong>school track pant manufacturer</strong>. Physical education and sports require specialized clothing that offers mobility and durability. Our school track pants are designed for active students, using premium breathable materials that withstand rigorous daily use. If you also need specialized sports team wear, explore our <Link href="/sports-uniforms/" className="text-[#3FAE49] font-bold hover:underline">sports uniforms</Link> manufacturing services.
            </p>

            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Why Choose Us as Your Uniform Manufacturer in Tamil Nadu?
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Premium Quality Fabrics:</strong> We select materials that are comfortable for long school hours and durable enough for active kids.</li>
              <li><strong>Bulk Order Capacity:</strong> Fully equipped to handle large volume requirements for major educational groups.</li>
              <li><strong>Customization:</strong> Precise color matching, logo embroidery, and custom sizing options.</li>
              <li><strong>Statewide Delivery:</strong> Efficient supply chain ensuring reliable delivery to schools across Tamil Nadu. (Also serving schools as a <Link href="/school-uniforms-kerala/" className="text-[#3FAE49] font-bold hover:underline">uniform manufacturer in Kerala</Link>).</li>
            </ul>

          </div>

          <div className="mt-16 p-8 bg-[#FAFAFA] rounded-2xl border border-gray-100 text-center flex flex-col items-center">
            <h3 className="text-[22px] font-black text-gray-900 mb-4 uppercase tracking-wide">Ready to Upgrade Your School&apos;s Uniforms?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss your school&apos;s specific uniform requirements. We offer consultations for custom designs and bulk manufacturing.
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
