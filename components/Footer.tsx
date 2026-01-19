import React from 'react';

const Logo: React.FC<{className?: string}> = ({className}) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="silver-metal-footer" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="25%" stopColor="#E0E0E0" />
        <stop offset="50%" stopColor="#909090" />
        <stop offset="75%" stopColor="#505050" />
        <stop offset="100%" stopColor="#E0E0E0" />
      </linearGradient>
      <linearGradient id="green-gem-footer" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#5e9c3f" />
        <stop offset="100%" stopColor="#2e4d1f" />
      </linearGradient>
    </defs>
    
    {/* Base Octagon Silver Frame */}
    <path d="M60 5 L140 5 L195 60 L195 140 L140 195 L60 195 L5 140 L5 60 Z" 
          fill="#0a0a0a" stroke="url(#silver-metal-footer)" strokeWidth="6" />
    
    {/* Inner Green Field */}
    <path d="M64 14 L136 14 L186 64 L186 136 L136 186 L64 186 L14 136 L14 64 Z" 
          fill="url(#green-gem-footer)" opacity="0.9" />

    {/* Black Void Octagon */}
    <path d="M75 45 L125 45 L155 75 L155 125 L125 155 L75 155 L45 125 L45 75 Z" 
          fill="#050505" stroke="url(#silver-metal-footer)" strokeWidth="2" />

    {/* The 8 Spikes / Star */}
    <g transform="translate(100, 100)">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle})`}>
          {/* Main Spike pointing out */}
          <path d="M-6 -50 L0 -85 L6 -50 L0 -40 Z" fill="url(#silver-metal-footer)" />
          {/* Connecting Line to center */}
          <rect x="-1" y="-40" width="2" height="40" fill="url(#silver-metal-footer)" />
        </g>
      ))}
      {/* Center Detail */}
      <circle cx="0" cy="0" r="12" fill="url(#silver-metal-footer)" />
      <circle cx="0" cy="0" r="6" fill="#000" />
    </g>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden pt-24 bg-onyx">
      <div className="px-6 lg:px-12 pb-24 border-b border-grid-line">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
          <div className="flex flex-col gap-8 max-w-xl">
            <div>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-2">Ready to stop guessing?</h3>
              <p className="text-xl text-primary font-medium">Let's build your engine.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="flex items-center justify-center gap-2 bg-primary hover:brightness-110 text-white font-bold px-8 py-4 uppercase tracking-wider text-sm transition-all rounded shadow-gloss-green">
                <span className="material-symbols-outlined">chat</span>
                WhatsApp Us
              </button>
              <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-200 text-black font-bold px-8 py-4 uppercase tracking-wider text-sm transition-colors rounded">
                <span className="material-symbols-outlined">mail</span>
                Email Us
              </button>
            </div>
          </div>
          
          <div className="flex flex-col gap-8">
             <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm text-gray-400">
              <a href="#" className="hover:text-primary transition-colors">Home</a>
              <a href="#" className="hover:text-primary transition-colors">Services</a>
              <a href="#" className="hover:text-primary transition-colors">Case Studies</a>
            </div>
            <div className="text-xs text-gray-600 font-mono">
              NEROZARB © 2025. Built with AI.
            </div>
          </div>
        </div>
      </div>
      
      {/* Massive Brand Name & Logo Watermark */}
      <div className="w-full relative overflow-hidden h-[20vw] bg-[#050505]">
        <div className="absolute -bottom-[2vw] -right-[5vw] opacity-10 rotate-12">
             <Logo className="w-[40vw] h-[40vw]" />
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none">
          <h1 className="text-[22vw] font-black text-[#0f0f0f] tracking-tighter leading-none -mb-[4vw] -ml-[1vw]">
            NEROZARB
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;