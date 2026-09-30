import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'School Uniform Manufacturer in Kerala | EVENVIBE UNIFORMS',
  description: 'Looking for a reliable school uniform manufacturer in Kerala? EVENVIBE UNIFORMS provides high-quality, custom school uniforms with bulk supply capabilities for institutions across Kerala.',
  alternates: {
    canonical: 'https://evenvibe.in/school-uniforms-kerala',
  },
  openGraph: {
    title: 'School Uniform Manufacturer in Kerala | EVENVIBE UNIFORMS',
    description: 'Looking for a reliable school uniform manufacturer in Kerala? EVENVIBE UNIFORMS provides high-quality, custom school uniforms with bulk supply capabilities for institutions across Kerala.',
    url: 'https://evenvibe.in/school-uniforms-kerala',
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
    "name": "Kerala"
  },
  "description": "High-quality, bulk custom school uniform manufacturing and supply for educational institutions across Kerala."
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
          <nav className="text-[12px] text-gray-500 font-medium mb-8 flex items-center gap-2 uppercase tracking-wider">
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
              Finding the right apparel partner is crucial for educational institutions. EVENVIBE UNIFORMS is a prominent <strong>school uniform manufacturer in Kerala</strong>, dedicated to supplying schools with top-tier, long-lasting uniforms that students are proud to wear. We focus on delivering exceptional quality tailored to the specific climate and cultural preferences of the region.
            </p>
            
            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Dedicated Uniform Manufacturer in Kerala
            </h2>
            <p>
              We operate as a full-scale <strong>uniform manufacturer in Kerala</strong>, handling every step of the apparel creation process. From sourcing the most comfortable, breathable fabrics suitable for daily wear to precision stitching and quality control, our manufacturing process is designed to meet the rigorous demands of school life while maintaining an impeccable appearance.
            </p>

            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Custom School Uniform Manufacturer Services
            </h2>
            <p>
              We know that standard off-the-shelf clothing doesn&apos;t work for schools wanting a unique identity. As an experienced <strong>custom school uniform manufacturer</strong>, we collaborate with school administrators and management boards to create bespoke uniform designs. This includes unique patterns, exact color dyeing, and highly durable logo embroidery that survives countless washes.
            </p>

            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Your Reliable School Uniform Supplier in Kerala
            </h2>
            <p>
              Timely delivery is essential in the education sector. As a trusted <strong>school uniform supplier in Kerala</strong>, we have the logistical capacity and manufacturing infrastructure to handle bulk uniform orders and ensure they arrive exactly when you need them. 
            </p>
            <p>
              Looking for sports attire? We also manufacture custom <Link href="/sports-uniforms/" className="text-[#3FAE49] font-bold hover:underline">sports uniforms</Link> for athletic departments and school teams. Alternatively, if your institution has branches in neighboring regions, we also serve as a <Link href="/school-uniforms-tamil-nadu/" className="text-[#3FAE49] font-bold hover:underline">school uniform manufacturer in Tamil Nadu</Link>.
            </p>

            <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-[18px] font-bold text-gray-900 mb-4 uppercase tracking-wide">Frequently Asked Questions</h3>
              <div className="space-y-4 text-sm md:text-base">
                <div>
                  <strong className="block text-gray-800 mb-1">Do you accept bulk orders for Kerala schools?</strong>
                  <p>Yes, we specialize in bulk uniform manufacturing to supply entire schools and large educational groups efficiently.</p>
                </div>
                <div>
                  <strong className="block text-gray-800 mb-1">Can you match our existing school uniform design?</strong>
                  <p>Absolutely. We can replicate your current design, matching colors and patterns precisely, or help you transition to a completely new look.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-16 p-8 bg-[#FAFAFA] rounded-2xl border border-gray-100 text-center flex flex-col items-center">
            <h3 className="text-[22px] font-black text-gray-900 mb-4 uppercase tracking-wide">Partner With Us for Your Uniform Needs</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our dedicated team is ready to provide you with samples and discuss your bulk manufacturing requirements. Let&apos;s create uniforms your students will love.
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
