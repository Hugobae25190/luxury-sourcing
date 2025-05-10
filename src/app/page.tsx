export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-night via-night to-anthracite text-white px-6 py-20 space-y-32">
      
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">All you need is one call.</h1>
        <h2 className="text-xl md:text-2xl text-gray-300">Pick the destination.<br />We’ll handle the rest.</h2>
        <p className="text-md text-[#d4af37] uppercase tracking-widest">Make travel effortless.</p>
        <a href="/contact">
          <button className="mt-6 px-6 py-3 bg-[#d4af37] text-black rounded-xl text-lg font-semibold hover:scale-105 transition-transform">
            Plan my trip now
          </button>
        </a>
      </section>

      {/* Why Buy */}
      <section className="max-w-3xl mx-auto text-center space-y-4">
        <h3 className="text-2xl font-semibold">Why Buy?</h3>
        <p className="text-gray-300 italic">One mistake ruins a trip.<br />That mistake won’t come from us.</p>
      </section>

      {/* Alternatives */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h3 className="text-2xl font-semibold text-center">Alternatives</h3>
        <ul className="space-y-4">
          <li>❌ <strong>Do it yourself?</strong><br /><span className="text-gray-400">If wasting time is your thing — sure.</span></li>
          <li>❌ <strong>Let your assistant “figure it out”?</strong><br /><span className="text-gray-400">She’ll try. We already know the outcome.</span></li>
          <li>❌ <strong>Big firms?</strong><br /><span className="text-gray-400">You’re just another file in their database.</span></li>
        </ul>
      </section>

      {/* Differentiators */}
      <section className="max-w-4xl mx-auto text-center space-y-10">
        <h3 className="text-2xl font-semibold">What Makes You Different?</h3>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div>
            <h4 className="text-xl font-bold text-[#d4af37]">Precision</h4>
            <p>Every detail covered, from A to Z.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-[#d4af37]">Outcome</h4>
            <p>No fluff. No useless meetings. Just results.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-[#d4af37]">Global</h4>
            <p>Wherever you are, wherever you’re going — one call gets it moving.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-3xl mx-auto text-center space-y-4">
        <h3 className="text-3xl font-semibold">Get in Touch</h3>
        <p className="text-gray-300">
          You want it booked. <br />
          You want it easy. <br />
          You want it ready.
        </p>
        <p className="text-gray-400 italic">Contact us NOW to get a reply within 24h.<br />No noise, no hidden fees, no bullshit.</p>
        <a href="/contact">
          <button className="mt-4 px-6 py-3 bg-[#d4af37] text-black rounded-xl text-lg font-semibold hover:scale-105 transition-transform">
            Contact us
          </button>
        </a>
      </section>
    </main>
  );
}