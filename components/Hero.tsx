import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="manifesto" className="relative flex flex-col justify-center min-h-[85vh] border-b border-grid-line px-6 lg:px-12 py-20 overflow-hidden bg-onyx">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-1/4 h-full w-px bg-grid-line hidden lg:block opacity-50"></div>
      <div className="absolute top-0 left-2/4 h-full w-px bg-grid-line hidden lg:block opacity-50"></div>
      <div className="absolute top-0 left-3/4 h-full w-px bg-grid-line hidden lg:block opacity-50"></div>
      
      {/* Faint Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-[pulse_10s_ease-in-out_infinite]"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.1] md:leading-[0.9] tracking-tightest uppercase mb-8">
          The Full-Stack<br />
          Digital Growth<br />
          <span className="text-primary">Engine.</span>
        </h1>
        
        <h2 className="text-lg md:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl mb-10">
          Stop hiring scattered freelancers. <br className="hidden md:block"/>
          <span className="text-primary font-medium">Hum poora digital system banate hain.</span><br />
          We build the machine in 60 days. You just drive it.
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <a href="#offers" className="group relative flex items-center justify-center px-8 py-4 bg-primary text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-gloss-green hover:brightness-110 transition-all duration-300 transform hover:scale-105">
            <span className="mr-2">Start The 60-Day Sprint</span>
            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">bolt</span>
          </a>
          <a href="#work" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2 group">
            See The Output
            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-6 right-6 lg:right-12 text-xs font-mono text-gray-500 uppercase tracking-widest">
        System v2.04 // Ready
      </div>
    </section>
  );
};

export default Hero;