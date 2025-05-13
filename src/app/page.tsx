'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const benefits = [
  {
    title: 'Learn vital life lessons',
    highlights: [
      'World-class custom built learning application',
      'Scale from Zero to $10k/month as fast as possible',
      'Master the skills you need to maximise your income',
    ],
    image: '/img1.webp',
  },
  {
    title: 'Join a private network',
    highlights: [
      'Celebrate your wins with people who understand',
      'Make like-minded friends on your journey',
      'Network with 113,000+ people',
    ],
    image: '/img2.webp',
  },
  {
    title: 'Access to multimillionaires',
    highlights: [
      'Mentors are hyper-successful experts in their field',
      'Get mentored every step of your journey',
      '1-on-1 advice from industry experts',
    ],
    image: '/img3.webp',
  },
];

export default function KeyBenefits() {
  return (
    <section className="relative bg-night py-32 text-white overflow-hidden">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-yellow-400 transform -translate-x-1/2 z-0" />

      <div className="relative max-w-7xl mx-auto px-6 space-y-32 z-10">
        {benefits.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
              {/* Point on timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-6 h-6 bg-white rounded-full border-4 border-yellow-400" />
              </div>

              {/* Left side (message if even, image if odd) */}
              {isEven ? (
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-4 text-right pr-4"
                >
                  <h3 className="text-xl font-bold uppercase">
                    {item.title.split(' ').slice(0, -1).join(' ')}{' '}
                    <span className="text-[#d4af37]">{item.title.split(' ').slice(-1)}</span>
                  </h3>
                  <ul className="space-y-2 text-lg text-gray-300">
                    {item.highlights.map((point, i) => (
                      <li key={i}>✅ {point}</li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="rounded-xl shadow-xl"
                  />
                </motion.div>
              )}

              {/* Right side (image if even, message if odd) */}
              {isEven ? (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="rounded-xl shadow-xl"
                  />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-4 text-left pl-4"
                >
                  <h3 className="text-xl font-bold uppercase">
                    {item.title.split(' ').slice(0, -1).join(' ')}{' '}
                    <span className="text-[#d4af37]">{item.title.split(' ').slice(-1)}</span>
                  </h3>
                  <ul className="space-y-2 text-lg text-gray-300">
                    {item.highlights.map((point, i) => (
                      <li key={i}>✅ {point}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}