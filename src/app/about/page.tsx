export default function About() {
    return (
      <main className="min-h-screen bg-night text-white px-6 py-20 space-y-10">
        <h1 className="text-4xl font-bold text-center">About</h1>
        <div className="max-w-3xl mx-auto space-y-6 text-center text-lg text-gray-300">
          <p>
            I spent three years inside Michelin-starred restaurants, both in the kitchen and on the floor.
            Every day, I served multimillionaires. I learned how to deliver under pressure, how to understand their real needs — and how to exceed expectations.
          </p>
          <p className="italic text-gray-400">
            Elegance. Discipline. Precision. Luxury isn’t optional — it’s the baseline.
          </p>
        </div>
        {/* Placeholder video */}
        <div className="max-w-3xl mx-auto">
          <video controls className="w-full rounded-xl shadow-xl">
            <source src="/your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </main>
    );
  }