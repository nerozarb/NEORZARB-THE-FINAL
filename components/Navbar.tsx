import React from 'react';

const Logo: React.FC<{className?: string}> = ({className}) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="silver-metal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="25%" stopColor="#E0E0E0" />
        <stop offset="50%" stopColor="#909090" />
        <stop offset="75%" stopColor="#505050" />
        <stop offset="100%" stopColor="#E0E0E0" />
      </linearGradient>
      <linearGradient id="green-gem" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#5e9c3f" />
        <stop offset="100%" stopColor="#2e4d1f" />
      </linearGradient>
    </defs>
    
    {/* Base Octagon Silver Frame */}
    <path d="M60 5 L140 5 L195 60 L195 140 L140 195 L60 195 L5 140 L5 60 Z" 
          fill="#0a0a0a" stroke="url(#silver-metal)" strokeWidth="6" />
    
    {/* Inner Green Field */}
    <path d="M64 14 L136 14 L186 64 L186 136 L136 186 L64 186 L14 136 L14 64 Z" 
          fill="url(#green-gem)" opacity="0.9" />

    {/* Black Void Octagon */}
    <path d="M75 45 L125 45 L155 75 L155 125 L125 155 L75 155 L45 125 L45 75 Z" 
          fill="#050505" stroke="url(#silver-metal)" strokeWidth="2" />

    {/* The 8 Spikes / Star */}
    <g transform="translate(100, 100)">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle})`}>
          {/* Main Spike pointing out */}
          <path d="M-6 -50 L0 -85 L6 -50 L0 -40 Z" fill="url(#silver-metal)" />
          {/* Connecting Line to center */}
          <rect x="-1" y="-40" width="2" height="40" fill="url(#silver-metal)" />
        </g>
      ))}
      {/* Center Detail */}
      <circle cx="0" cy="0" r="12" fill="url(#silver-metal)" />
      <circle cx="0" cy="0" r="6" fill="#000" />
    </g>
  </svg>
);

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-grid-line bg-onyx/90 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-16 px-6 lg:px-12">
        <div className="flex items-center gap-4">
          <Logo className="w-10 h-10" />
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-primary text-[10px] font-bold tracking-widest uppercase">System Online</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a className="hover:text-primary transition-colors" href="#manifesto">MANIFESTO</a>
          <a className="hover:text-primary transition-colors" href="#protocol">PROTOCOL</a>
          <a className="hover:text-primary transition-colors" href="#work">WORK</a>
        </nav>
        <a className="text-sm font-bold hover:text-primary transition-colors tracking-wide flex items-center" href="#offers">
          GET STARTED
          <span className="material-symbols-outlined align-middle text-sm ml-1">arrow_forward</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;