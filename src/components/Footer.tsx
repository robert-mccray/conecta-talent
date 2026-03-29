export default function Footer() {
  return (
    <footer className="bg-conecta-blue text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-bold text-2xl tracking-tight mb-4">
            Conecta<span className="text-conecta-teal">TALENT</span>
          </div>
          <p className="text-gray-300 font-medium">Hire Smart. Grow Faster.</p>
          <p className="text-gray-400 mt-2 text-sm">Bilingual Virtual Assistants and Skilled Tech Talent for U.S. Companies.</p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4 text-conecta-teal">Divisions</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Virtual Assistants</li>
            <li>Interpreters</li>
            <li>Cold Callers</li>
            <li>Software Engineers</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4 text-conecta-teal">Contact</h4>
          <a href="mailto:hello@conectatalent.com" className="text-gray-300 text-sm hover:text-white transition-colors">
            hello@conectatalent.com
          </a>
        </div>
      </div>
    </footer>
  );
}