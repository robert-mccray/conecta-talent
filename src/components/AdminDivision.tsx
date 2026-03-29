export default function AdminDivision() {
  return (
    <section id="admin" className="py-16 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-conecta-blue mb-4">Admin Division</h2>
          <p className="text-xl text-conecta-teal font-medium">
            "We save you 60% vs. U.S. hires."
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-conecta-blue">Virtual Assistants</h3>
            <p className="text-gray-600">Perfect for real estate firms, e-commerce stores, and marketing agencies.</p>
          </div>
          <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-conecta-blue">Interpreters</h3>
            <p className="text-gray-600">Bilingual support for healthcare providers, legal firms, and customer support.</p>
          </div>
          <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-conecta-blue">Cold Callers</h3>
            <p className="text-gray-600">Outbound specialists for real estate investors, solar companies, and SaaS startups.</p>
          </div>
        </div>
      </div>
    </section>
  );
}