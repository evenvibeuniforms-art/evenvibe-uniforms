"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export const homeFaqData = [
  {
    question: "What is EVENVIBE UNIFORMS?",
    answer:
      "EVENVIBE UNIFORMS is a custom B2B and institutional uniform manufacturer based in Tiruppur, Tamil Nadu, operating as a unit of DKJ APPARELS.",
  },
  {
    question: "What types of uniforms does EVENVIBE UNIFORMS manufacture?",
    answer:
      "We manufacture school day uniforms (formal shirts, trousers, pinafores, skirts, and blazers), sports and PE uniforms, custom sports jerseys, school track pants, corporate T-shirts and polo shirts, and uniform accessories including ties, belts, socks, and embroidered crest badges.",
  },
  {
    question: "Which regions does EVENVIBE UNIFORMS serve?",
    answer:
      "We supply educational institutions, sports organizations, and businesses across Tamil Nadu, Kerala, and Bengaluru / Karnataka, with established distribution reaching Chennai, Tirupur, Trichy, Coimbatore, Kochi, and Bengaluru.",
  },
  {
    question: "Does EVENVIBE UNIFORMS handle institutional or bulk orders?",
    answer:
      "Yes, EVENVIBE UNIFORMS specializes in bulk manufacturing for schools, colleges, sports academies, and corporate enterprises, providing full customization from fabric selection to sizing, computerized crest embroidery, and scheduled academic year campus delivery.",
  },
  {
    question: "How can institutions contact EVENVIBE UNIFORMS?",
    answer:
      "Institutions can request a customized quotation through our website's quote form, contact our team directly by phone or WhatsApp at +91 93440 39068, or email us at evenvibeuniforms@gmail.com.",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": homeFaqData.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer,
    },
  })),
};

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative w-full bg-[#FDFDFD] py-20 md:py-28 overflow-hidden border-t border-gray-100"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <div className="container mx-auto max-w-[1024px] px-6 lg:px-12 relative z-10 flex flex-col">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-14"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-[#3FAE49]" />
            <div className="flex items-center gap-2 text-[#3FAE49] font-bold text-[11px] tracking-[0.2em] uppercase">
              <HelpCircle className="w-4 h-4" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <div className="w-8 h-[1px] bg-[#3FAE49]" />
          </div>

          <h2
            id="faq-heading"
            className="text-[30px] md:text-[40px] font-black text-[#111827] uppercase tracking-tight leading-[1.15] mb-4"
          >
            INSTITUTIONAL UNIFORM <span className="text-[#3FAE49]">FAQS</span>
          </h2>

          <p className="text-gray-500 text-[14px] md:text-[16px] font-medium max-w-[650px] leading-relaxed">
            Key factual information about EVENVIBE UNIFORMS, manufacturing capabilities, regional reach, and procurement workflows.
          </p>
        </m.div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {homeFaqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <m.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`bg-white border rounded-2xl transition-all duration-300 overflow-hidden ${isOpen
                    ? "border-[#3FAE49]/50 shadow-[0_4px_20px_rgba(63,174,73,0.08)]"
                    : "border-gray-200/80 hover:border-gray-300 shadow-sm"
                  }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <h3 className="text-[15px] md:text-[17px] font-bold text-[#111827] leading-snug pr-2">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen
                        ? "bg-[#EAF6EA] text-[#3FAE49] rotate-180"
                        : "bg-gray-100 text-gray-500"
                      }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 md:px-6 md:pb-6 text-gray-600 text-[14px] md:text-[15px] leading-relaxed border-t border-gray-100 pt-4 font-medium">
                        {faq.answer}
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
