'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What is the duration of each course?',
    answer: 'Each course varies in length, typically between 4 to 12 weeks.',
  },
  {
    question: 'Do I get a certificate after completion?',
    answer: 'Yes, we provide certificates for all our completed courses.',
  },
  {
    question: 'Are the courses beginner friendly?',
    answer: 'Absolutely! We offer courses for all levels including beginners.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image on the left */}
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
            alt="FAQ"
            className="rounded-lg shadow-md w-full object-cover h-96"
          />
        </div>

        {/* FAQ on the right */}
        <div>
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-md overflow-hidden">
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-4 font-semibold text-indigo-800 focus:outline-none"
                >
                  {faq.question}
                </button>
                {activeIndex === index && (
                  <div className="px-6 pb-4 text-gray-700 transition-all duration-300 ease-in-out">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
