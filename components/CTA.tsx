import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="border-b border-grid-line py-24 px-6 lg:px-12 flex justify-center bg-grid-pattern">
      <div className="w-full max-w-4xl relative">
        {/* Glowing effect behind card */}
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20"></div>
        
        <div className="relative bg-onyx border border-primary/50 shadow-glow-card p-1">
          <div className="border border-primary/20 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary"></div>
            
            <div className="flex flex-col gap-4 text-center md:text-left z-10">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase w-fit mx-auto md:mx-0 rounded">Limited Availability</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tightest leading-none">60-Day Sprint</h2>
              <p className="text-gray-400 max-w-md">Two months to overhaul your digital infrastructure. Fixed scope, fixed price, guaranteed velocity.</p>
            </div>
            
            <div className="z-10">
              <button className="relative flex items-center justify-center w-full md:w-auto px-10 py-5 bg-primary text-white text-base font-bold uppercase tracking-wider rounded-full shadow-gloss-green hover:brightness-110 transition-all duration-300 whitespace-nowrap">
                Secure This Sprint
              </button>
              <p className="text-center text-xs text-gray-500 mt-4 uppercase tracking-widest">Only 2 Slots Remaining</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;