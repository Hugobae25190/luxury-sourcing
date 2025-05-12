'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// ----- Data for Benefits Section -----
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

// ----- Hero Section -----
function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Yacht%20pic.webp"
          alt="Yacht background"
          className="w-full h-full object-cover object-bottom"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black opacity-90" />
      </div>

      <div className="relative z-10 max-w-3xl mx-6 space-y-16">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          All you need is <span className="underline underline-offset-8 decoration-[#d4af37]">one</span> call.
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-200 mt-12 leading-relaxed">
          Pick the destination.<br />We’ll handle the rest.
        </h2>
        <div className="relative flex justify-center items-center mt-16">
          <div className="absolute -inset-10 bg-white opacity-20 blur-3xl rounded-2xl pointer-events-none" />
          <div className="w-full max-w-xl">
            <video 
              className="rounded-xl shadow-xl w-full z-10"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="mt-16">
          <a href="/contact">
            <button className="px-10 py-5 bg-[#d4af37] text-black rounded-xl text-xl font-bold hover:scale-105 transition-transform shadow-lg">
              Plan my trip now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

// ----- Benefit Item -----
type BenefitItemProps = {
  item: {
    title: string;
    highlights: string[];
    image: string;
  };
  dotRef?: (el: HTMLDivElement | null) => void;
};

function BenefitItem({ item, dotRef }: BenefitItemProps) {
  return (
    <div className="relative flex flex-col md:flex-row items-center gap-10">
      <div className="md:w-1/2 w-full">
        <Image
          src={item.image}
          alt={item.title}
          width={600}
          height={400}
          className="rounded-xl w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 space-y-4">
        <div className="flex items-start gap-4 relative z-30 pl-4">
          <div
            ref={dotRef}
            className="w-4 h-4 rounded-full bg-white z-30 mt-1"
          />
          <h3 className="text-xl font-bold uppercase">
            {item.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-[#d4af37]">{item.title.split(' ').slice(-1)}</span>
          </h3>
        </div>
        <ul className="space-y-3 text-lg text-gray-300 pl-8">
          {item.highlights.map((point, i) => (
            <li key={i}>✅ {point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ----- Key Benefits -----
function KeyBenefits() {
  const containerRef = useRef<HTMLDivElement>(null);
  const topDotRef = useRef<HTMLDivElement | null>(null);
  const bottomDotRef = useRef<HTMLDivElement | null>(null);
  const [lineProps, setLineProps] = useState({ left: 0, top: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current && topDotRef.current && bottomDotRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const topDot = topDotRef.current.getBoundingClientRect();
      const bottomDot = bottomDotRef.current.getBoundingClientRect();

      const left = topDot.left - containerRect.left + topDot.width / 2;
      const top = topDot.top - containerRect.top + topDot.height / 2;
      const height =
        bottomDot.top - topDot.top + bottomDot.height / 2 - topDot.height / 2;

      setLineProps({ left, top, height });
    }
  }, []);

  return (
    <section className="relative bg-night py-32 text-white overflow-hidden" ref={containerRef}>
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          className="absolute bg-yellow-400 w-1 rounded-full z-10"
          style={{
            left: lineProps.left,
            top: lineProps.top,
            height: lineProps.height,
          }}
        />
        <div className="space-y-32 relative z-20 w-full">
          {benefits.map((item, index) => (
            <BenefitItem
              key={index}
              item={item}
              dotRef={
                index === 0
                  ? (el) => (topDotRef.current = el)
                  : index === benefits.length - 1
                  ? (el) => (bottomDotRef.current = el)
                  : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ----- Differentiators -----
function Differentiators() {
  return (
    <section className="max-w-5xl mx-auto text-center px-6 py-28 space-y-16">
      <h3 className="text-3xl md:text-4xl font-bold">What Makes You Different?</h3>
      <div className="grid md:grid-cols-3 gap-14 text-left text-xl">
        {[{ title: 'Precision', text: 'Every detail covered, from A to Z.' },
          { title: 'Outcome', text: 'No fluff. No useless meetings. Just results.' },
          { title: 'Global', text: 'Wherever you are, wherever you’re going — one call gets it moving.' }
        ].map((item, index) => (
          <div key={index} className="space-y-4">
            <h4 className="text-2xl font-bold text-[#d4af37]">{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ----- Call to Action -----
function CallToAction() {
  return (
    <section className="max-w-3xl mx-auto text-center px-6 py-28 space-y-12">
      <h3 className="text-3xl md:text-4xl font-bold">Get in Touch</h3>
      <div className="space-y-8 text-xl leading-relaxed">
        <p className="text-gray-300">
          You want it booked. <br />
          You want it easy. <br />
          You want it ready.
        </p>
        <p className="text-gray-400 italic">
          Contact us NOW to get a reply within 24h.<br />
          No noise, no hidden fees, no bullshit.
        </p>
      </div>
      <div className="pt-8">
        <a href="/contact">
          <button className="px-12 py-6 bg-[#d4af37] text-black rounded-xl text-xl font-bold hover:scale-105 transition-transform shadow-xl">
            Contact us
          </button>
        </a>
      </div>
    </section>
  );
}

// ----- Main Page Component -----
export default function Home() {
  return (
    <>
      <Hero />
      <KeyBenefits />
      <Differentiators />
      <CallToAction />
    </>
  );
}
