import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Corporate T Shirt Manufacturer in Tamil Nadu & Kerala | Bulk Supplier',
  description: 'EVENVIBE UNIFORMS is a leading corporate T-shirt manufacturer in Tamil Nadu and Kerala. Operating out of Tiruppur, we offer bulk T-shirt manufacturing with custom branding.',
  alternates: {
    canonical: 'https://evenvibe.in/corporate-tshirts/',
  },
  openGraph: {
    title: 'Corporate T Shirt Manufacturer in Tamil Nadu & Kerala | Bulk Supplier',
    description: 'EVENVIBE UNIFORMS is a leading corporate T-shirt manufacturer in Tamil Nadu and Kerala. Operating out of Tiruppur, we offer bulk T-shirt manufacturing with custom branding.',
    url: 'https://evenvibe.in/corporate-tshirts/',
    type: 'website',
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Corporate T-Shirt Manufacturing",
  "provider": {
    "@type": "LocalBusiness",
    "name": "EVENVIBE UNIFORMS",
    "image": "https://evenvibe.in/logo.jpeg"
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Tamil Nadu"
    },
    {
      "@type": "State",
      "name": "Kerala"
    }
  ],
  "description": "Bulk custom corporate T-shirt manufacturing and supply for businesses and events."
};

export default function CorporateTShirts() {
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
            <span className="text-gray-800 font-bold">Corporate T-Shirts</span>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-[#3FAE49]" />
            <span className="text-[#3FAE49] font-bold text-[12px] tracking-[0.2em] uppercase">
              EVENVIBE CORPORATE
            </span>
          </div>

          <h1 className="text-[32px] md:text-[46px] font-black text-[#111827] uppercase tracking-tight leading-[1.1] mb-8">
            Corporate T Shirt Manufacturer in Tamil Nadu & Kerala
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6 text-[15px] md:text-[16px] leading-relaxed">
            <p>
              Professional corporate wear builds brand identity and fosters a sense of unity among employees. EVENVIBE UNIFORMS is a premier <strong>corporate T shirt manufacturer in Tamil Nadu</strong> and a trusted <strong>corporate T shirt manufacturer in Kerala</strong>, providing businesses with high-quality, customized apparel solutions that represent their brand with excellence.
            </p>
            
            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Custom Corporate T-Shirts
            </h2>
            <p>
              Whether you need branded polo shirts for your sales team, comfortable cotton tees for casual Fridays, or promotional wear for an upcoming corporate event, we have the manufacturing expertise to deliver. Our corporate T-shirts are designed for comfort, durability, and a sharp professional appearance, featuring precise logo embroidery and high-quality fabric printing.
            </p>

            <h2 className="text-[24px] font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wide">
              Bulk T Shirt Manufacturer in Tiruppur
            </h2>
            <p>
              Tiruppur is known as the knitwear capital of India, and leveraging this rich textile ecosystem allows us to produce superior garments at scale. As an established <strong>bulk T shirt manufacturer in Tiruppur</strong>, we have direct control over fabric sourcing, knitting, dyeing, and stitching. This end-to-end manufacturing capability ensures that large corporate orders are fulfilled on time without compromising on quality or consistency.
            </p>

            <h3 className="text-[18px] font-bold text-gray-900 mt-8 mb-3 uppercase tracking-wide">
              Our Corporate Apparel Manufacturing Process
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Fabric Selection:</strong> Choose from premium bio-washed cotton, durable poly-cotton blends, or moisture-wicking fabrics suitable for different working environments.</li>
              <li><strong>Custom Branding:</strong> High-definition logo embroidery, screen printing, and DTF printing options to make your corporate identity stand out.</li>
              <li><strong>Bulk Production:</strong> Efficient manufacturing lines capable of handling large volume orders for multinational corporations and nationwide events.</li>
              <li><strong>Quality Assurance:</strong> Rigorous checking processes to ensure every T-shirt meets our exacting standards before dispatch.</li>
            </ul>

            <p className="mt-8">
              We also cater to specific institutional requirements. Discover our manufacturing capabilities for <Link href="/school-uniforms-tamil-nadu/" className="text-[#3FAE49] font-bold hover:underline">school uniforms</Link> and <Link href="/sports-uniforms/" className="text-[#3FAE49] font-bold hover:underline">sports uniforms</Link>.
            </p>

          </div>

          <div className="mt-16 p-8 bg-[#FAFAFA] rounded-2xl border border-gray-100 text-center flex flex-col items-center">
            <h3 className="text-[22px] font-black text-gray-900 mb-4 uppercase tracking-wide">Upgrade Your Corporate Wardrobe</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Looking for a reliable bulk T-shirt supplier for your business? Contact us today to discuss fabric options, branding techniques, and bulk manufacturing pricing.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-[#3FAE49] hover:bg-[#2E7D32] text-white rounded-lg px-8 py-4 text-[14px] font-bold transition-all shadow-md uppercase tracking-wider"
            >
              Request a Corporate Quote
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
