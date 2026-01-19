import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 lg:p-10 flex justify-between items-start pointer-events-none">
      <div className="pointer-events-auto">
        <div className="bg-black/40 backdrop-blur-xl border border-white/5 p-4 rounded-sm flex items-center gap-3 shadow-2xl transform hover:-translate-y-1 transition-transform">
          <span className="material-symbols-outlined text-primary text-2xl font-black">architecture</span>
          <span className="text-white font-black tracking-tighter text-xl">NEROZARB</span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-4 pointer-events-auto">
        <div className="hidden md:flex gap-1">
          <a href="#offers" className="bg-black/60 border border-white/10 px-6 py-3 text-[10px] font-bold tracking-[0.3em] text-white/50 hover:text-primary transition-colors cursor-pointer">SERVICES</a>
          <a href="#work" className="bg-black/60 border border-white/10 px-6 py-3 text-[10px] font-bold tracking-[0.3em] text-white/50 hover:text-primary transition-colors cursor-pointer">CASES</a>
          <a href="#protocol" className="bg-black/60 border border-white/10 px-6 py-3 text-[10px] font-bold tracking-[0.3em] text-white/50 hover:text-primary transition-colors cursor-pointer">PROCESS</a>
        </div>
        <div className="shadow-[inset_4px_4px_10px_rgba(0,0,0,0.8),inset_-1px_-1px_2px_rgba(255,255,255,0.05),0_0_20px_rgba(68,106,36,0.1)] bg-[#0d0e11] border border-white/5 px-4 py-2 flex items-center gap-4 group rounded-sm">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[9px] font-black tracking-[0.2em] text-[#C0C0C0]/40 uppercase">System Active: Slots Available</span>
          </div>
          <div className="h-4 w-[1px] bg-white/10"></div>
          <a href="#offers" className="text-[10px] font-black tracking-widest text-primary hover:text-white transition-colors uppercase">Audit My Site</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;