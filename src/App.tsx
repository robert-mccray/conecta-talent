import Header from './components/Header';
import Hero from './components/Hero';
import AdminDivision from './components/AdminDivision';
import TechDivision from './components/TechDivision';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-slate-50 min-h-screen">
      <Header />
      <main>
        <Hero />
        <AdminDivision />
        <TechDivision />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default App;