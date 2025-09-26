import About from './pages/About';
import CTA from './pages/CTA';
import Footer from './pages/Footer';
import Gallery from './pages/Gallery';
import Hero from './pages/Hero';
import Lenis from "@studio-freight/lenis";
import React, { useEffect } from 'react';
function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // scroll smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Gallery />
      <CTA />
      <Footer />
        {/* Add other sections later */}
    </div>
  );
}

export default App;
