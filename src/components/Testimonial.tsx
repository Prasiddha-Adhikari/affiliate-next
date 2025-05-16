'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Jane Doe',
    feedback: 'The courses were amazing and helped me land a job in tech!',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'John Smith',
    feedback: 'Top-notch content and great support from the team!',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Alice Johnson',
    feedback: 'Great learning experience with helpful mentors!',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    name: 'Michael Brown',
    feedback: 'I gained real-world skills that helped me grow professionally.',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
];

export default function TestimonialSlider() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 2) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length],
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-indigo-900 mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleTestimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center transition duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <p className="text-gray-700 text-lg mb-3">"{testimonial.feedback}"</p>
              <p className="font-semibold text-indigo-600">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
