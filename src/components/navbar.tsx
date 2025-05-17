'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from "next/image";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(lastScrollY > currentScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } bg-[#131e28] border-b border-gray-700`}
    >
<div className="max-w-7xl mx-auto px-4 py-1 sm:py-2 md:py-2 flex justify-between items-center text-white">

      <Link href="/">

<Image
  src="/logo SVG.svg"
  alt="Logo"
  width={80}
  height={80}
/>
</Link>
        <div className="space-x-4 text-xs sm:text-sm md:text-base lg:text-lg">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}