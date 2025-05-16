'use client';

import Image from 'next/image';
import aboutImage from '../public/images/course2.png';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4">
        <Image
          src={aboutImage}
          alt="About us"
          className="rounded-xl"
          width={500}
          height={400}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">About Us</h2>
          <p className="text-gray-700 text-lg mb-6">
            We are committed to helping learners and professionals succeed by providing high-quality, accessible education. Our platform brings together experts and learners to ensure you get the best learning experience possible.
          </p>
          <Link
            href="/about"
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
