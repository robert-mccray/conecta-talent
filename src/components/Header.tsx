export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Logo image goes here */}
          <div className="text-conecta-blue font-bold text-2xl tracking-tight">
            Conecta<span className="text-conecta-teal">TALENT</span>
          </div>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <a href="#admin" className="hover:text-conecta-teal transition-colors">Admin Support</a>
          <a href="#tech" className="hover:text-conecta-teal transition-colors">Tech Talent</a>
          <a href="#process" className="hover:text-conecta-teal transition-colors">How It Works</a>
        </nav>
        <a href="#contact" className="bg-conecta-blue text-white px-5 py-2 rounded-md font-medium hover:bg-blue-900 transition-colors">
          Get Started
        </a>
      </div>
    </header>
  );
}