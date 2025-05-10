export default function ContactPage() {
    return (
      <main className="min-h-screen bg-night text-white px-6 py-20">
        <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>
        <form className="max-w-xl mx-auto space-y-6">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full p-3 rounded bg-anthracite text-white placeholder-gray-400"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-3 rounded bg-anthracite text-white placeholder-gray-400"
          />
          <textarea 
            placeholder="Your Message" 
            rows={6} 
            className="w-full p-3 rounded bg-anthracite text-white placeholder-gray-400"
          />
          <button 
            type="submit" 
            className="w-full py-3 bg-[#d4af37] text-black rounded-xl font-semibold hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </form>
      </main>
    );
  }