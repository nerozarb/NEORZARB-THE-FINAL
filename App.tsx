import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="relative w-full flex flex-col pt-16 border-l border-r border-grid-line max-w-[1440px] mx-auto min-h-screen">
      <Navbar />
      <Hero />
      <PainPoints />
      <Portfolio />
      <Process />
      <Pricing />
      <FAQ />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default App;