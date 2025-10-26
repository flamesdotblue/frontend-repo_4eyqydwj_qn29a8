import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Showcase placeholder section to anchor navigation without extra files */}
        <section id="showcase" className="py-20 sm:py-24 bg-gradient-to-b from-white to-orange-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">See it in action</h2>
              <p className="mt-3 text-gray-600">Interact with the 3D scene above — rotate, pan, and explore the orange blocks. Everything runs in your browser.</p>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3].map((i) => (
                <div key={i} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                  <div className="h-36 rounded-xl bg-gradient-to-tr from-orange-100 via-amber-100 to-yellow-100"></div>
                  <h3 className="mt-4 font-semibold">Creative idea #{i}</h3>
                  <p className="mt-1 text-sm text-gray-600">Use the block motif for playful interfaces, educational demos, and concept prototyping.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
