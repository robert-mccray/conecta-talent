export default function Hero() {
  return (
    <section className="bg-conecta-blue text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Hire Skilled LATAM Talent – From Virtual Assistants to Software Engineers.
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-200">
          Hire Smart. Grow Faster.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#admin" className="bg-conecta-teal hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-md transition-colors text-lg">
            Hire Admin Support
          </a>
          <a href="#tech" className="bg-white text-conecta-blue hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-colors text-lg">
            Hire Developers
          </a>
        </div>
        <div className="mt-8">
          <a href="#apply" className="text-sm text-teal-300 hover:text-white underline">
            Are you a candidate? Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}