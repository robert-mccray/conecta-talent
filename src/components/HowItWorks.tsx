export default function HowItWorks() {
  return (
    <section id="process" className="py-16 bg-white px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-conecta-blue mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 text-center">
            <div className="w-16 h-16 bg-conecta-teal text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2 text-conecta-blue">Scouting & Screening</h3>
            <p className="text-gray-600">We source top talent and conduct rigorous English, typing, and technical assessments.</p>
          </div>
          <div className="flex-1 text-center">
            <div className="w-16 h-16 bg-conecta-teal text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2 text-conecta-blue">Interviews & Selection</h3>
            <p className="text-gray-600">You review custom Talent Cards and interview the best candidates for your specific needs.</p>
          </div>
          <div className="flex-1 text-center">
            <div className="w-16 h-16 bg-conecta-teal text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2 text-conecta-blue">Placement & Guarantee</h3>
            <p className="text-gray-600">Hire with confidence. We offer a 30 to 60-day replacement guarantee if it's not a perfect fit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}