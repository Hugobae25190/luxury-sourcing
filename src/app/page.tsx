import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Yacht%20pic.webp"
            alt="Yacht background"
            className="w-full h-full object-cover object-bottom"
            fill
            priority
          />
          {/* Dark overlay directly on image */}
          <div className="absolute inset-0 bg-black opacity-90" />
        </div>

        {/* Content Container - With increased spacing */}
        <div className="relative z-10 max-w-3xl mx-6 space-y-16">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            All you need is <span className="underline underline-offset-8 decoration-[#d4af37]">one</span> call.
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-gray-200 mt-12 leading-relaxed">
            Pick the destination.<br />We’ll handle the rest.
          </h2>

          {/* Video Player - Same style as About page */}
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

          {/* CTA Button */}
          <div className="mt-16">
            <a href="/contact">
              <button className="px-10 py-5 bg-[#d4af37] text-black rounded-xl text-xl font-bold hover:scale-105 transition-transform shadow-lg">
                Plan my trip now
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Buy Section */}
      <section className="max-w-3xl mx-auto text-center px-6 py-28 space-y-10">
        <h3 className="text-3xl md:text-4xl font-bold">Why Buy?</h3>
        <p className="text-gray-300 italic text-xl leading-relaxed">
          One mistake ruins a trip.<br />That mistake won’t come from us.
        </p>
      </section>

      {/* Alternatives Section */}
      <section className="max-w-4xl mx-auto text-center px-6 py-28 space-y-14">
        <h3 className="text-3xl md:text-4xl font-bold">Alternatives</h3>
        <ul className="space-y-10 text-xl">
          <li className="space-y-4">
            <div className="text-2xl">❌ <strong>Do it yourself?</strong></div>
            <p className="text-gray-400">If wasting time is your thing — sure.</p>
          </li>
          <li className="space-y-4">
            <div className="text-2xl">❌ <strong>Let your assistant ’’figure it out’’?</strong></div>
            <p className="text-gray-400">She’ll try. We already know the outcome.</p>
          </li>
          <li className="space-y-4">
            <div className="text-2xl">❌ <strong>Big firms?</strong></div>
            <p className="text-gray-400">You’re just another file in their database.</p>
          </li>
        </ul>
      </section>

      {/* Differentiators Section */}
      <section className="max-w-5xl mx-auto text-center px-6 py-28 space-y-16">
        <h3 className="text-3xl md:text-4xl font-bold">What Makes You Different?</h3>
        <div className="grid md:grid-cols-3 gap-14 text-left text-xl">
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-[#d4af37]">Precision</h4>
            <p>Every detail covered, from A to Z.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-[#d4af37]">Outcome</h4>
            <p>No fluff. No useless meetings. Just results.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-[#d4af37]">Global</h4>
            <p>Wherever you are, wherever you’re going — one call gets it moving.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </>
  );
}