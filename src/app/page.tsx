export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-night via-night to-anthracite text-white flex items-center justify-center px-6 text-center">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Time is your greatest luxury.
        </h1>
        <h2 className="mt-6 text-xl md:text-2xl text-white/80">
          Tell us what you want. <br /> We’ll handle the rest.
        </h2>
        <button className="mt-10 px-6 py-3 bg-[#d4af37] text-black rounded-xl text-lg font-semibold hover:scale-105 transition-transform">
          YES, I need that.
        </button>
      </div>
    </section>
  )
}