export default function TechDivision() {
  return (
    <section id="tech" className="py-16 bg-slate-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-conecta-blue mb-4">Tech Division</h2>
          <p className="text-xl text-conecta-teal font-medium">
            "Scale your dev team with reliable LATAM engineers, pre-tested by a software engineer."
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold mb-4 text-conecta-blue">Frontend & Backend Developers</h3>
            <p className="text-gray-600 mb-4">Pre-vetted engineers proficient in modern stacks (React, Python, PHP, SQL).</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Take-home coding challenges</li>
              <li>Live coding interviews</li>
              <li>GitHub project reviews</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold mb-4 text-conecta-blue">Designers & QA Testers</h3>
            <p className="text-gray-600 mb-4">Skilled web designers, QA testers, and WordPress/Shopify developers ready to build.</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Portfolio showcases</li>
              <li>Problem-solving & debugging tasks</li>
              <li>Ideal for small-mid U.S. businesses and agencies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}