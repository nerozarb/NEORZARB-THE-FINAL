import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section className="border-b border-grid-line py-24 px-6 lg:px-12 bg-grid-pattern" id="offers">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tightest mb-4">The Grand Slam Offers</h2>
        <p className="text-gray-400 text-sm tracking-widest uppercase">Choose your velocity</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto items-start">
        {/* Card 1: The Hero Offer (Sprint) - Emphasized */}
        <div className="relative bg-onyx border border-primary shadow-gloss-green p-1 group hover:-translate-y-2 transition-all duration-300 flex flex-col order-1 md:col-span-2 lg:col-span-1 lg:scale-105 z-10">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg whitespace-nowrap z-10">
            🔥 The Hero Offer
          </div>
          <div className="h-full border border-primary/20 p-8 flex flex-col bg-onyx/80 backdrop-blur-sm">
            <div className="mb-8">
              <h3 className="text-2xl font-black uppercase mb-2 leading-none">Protocol:<br/>Growth Sprint</h3>
              <p className="text-gray-400 text-xs mb-6 uppercase tracking-wider">The 60-Day Overhaul</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl lg:text-4xl font-black text-white">Rs. 150k</span>
                <span className="text-[10px] text-gray-500 font-mono uppercase">/ One-time</span>
              </div>
              <p className="text-sm text-primary mt-4 font-medium italic">"A complete system reboot. We build the entire machine in 60 days."</p>
            </div>

            <div className="space-y-6 mb-10 flex-grow">
                <div>
                    <span className="text-xs font-bold text-white uppercase tracking-widest block mb-2">Phase 1: Visuals</span>
                    <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="material-symbols-outlined text-primary text-base">check</span>
                            <span>Brand Facelift (Logo, Palette, Bio)</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="material-symbols-outlined text-primary text-base">check</span>
                            <span>High-Converting Landing Page</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <span className="text-xs font-bold text-white uppercase tracking-widest block mb-2">Phase 2: Content</span>
                    <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="material-symbols-outlined text-primary text-base">check</span>
                            <span>30 Short-Form Videos (Scripted & Edited)</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="material-symbols-outlined text-primary text-base">check</span>
                            <span>10 Static/Carousel Posts</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <span className="text-xs font-bold text-white uppercase tracking-widest block mb-2">Phase 3: Systems</span>
                    <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="material-symbols-outlined text-primary text-base">check</span>
                            <span>Meta Ads Setup (Pixel & Campaign)</span>
                        </li>
                         <li className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="material-symbols-outlined text-primary text-base">check</span>
                            <span>WhatsApp Automation Bot</span>
                        </li>
                    </ul>
                </div>
            </div>

            <button className="w-full py-4 bg-primary text-white text-sm font-bold uppercase tracking-wider hover:brightness-110 transition-all shadow-gloss-green mt-auto">
              Start The Sprint
            </button>
          </div>
        </div>

        {/* Card 2: Maintenance Engine */}
        <div className="relative bg-onyx border border-grid-line p-1 group hover:border-gray-500 hover:-translate-y-2 transition-all duration-300 flex flex-col order-2">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#222] text-gray-300 border border-gray-700 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg whitespace-nowrap z-10">
            ⚡ Active Presence
          </div>
          <div className="h-full border border-grid-line p-8 flex flex-col bg-onyx/50 backdrop-blur-sm">
            <div className="mb-8">
              <h3 className="text-2xl font-bold uppercase mb-2 leading-none">Protocol:<br/>Maintenance</h3>
              <p className="text-gray-400 text-xs mb-6 uppercase tracking-wider">Recurring Engine</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl lg:text-4xl font-black text-white">Rs. 50k</span>
                <span className="text-[10px] text-gray-500 font-mono uppercase">/ Month</span>
              </div>
              <p className="text-sm text-gray-400 mt-4 font-medium italic">"Beats market volume using AI. Perfect for staying alive on feeds."</p>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "15 AI-Enhanced Reels/Month",
                "Cross-Platform Posting (IG, TikTok, YT, FB)",
                "Community Management (Replies)",
                "Monthly Performance Report",
                "Dedicated Content Strategy"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="material-symbols-outlined text-gray-500 text-lg flex-shrink-0">check_circle</span>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 bg-transparent border border-gray-600 text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all mt-auto">
              Activate Engine
            </button>
          </div>
        </div>

        {/* Card 3: Market Dominance */}
        <div className="relative bg-onyx border border-grid-line p-1 group hover:border-white hover:-translate-y-2 transition-all duration-300 flex flex-col order-3">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black border border-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg whitespace-nowrap z-10">
            🚀 Dominance
          </div>
          <div className="h-full border border-grid-line p-8 flex flex-col relative overflow-hidden bg-onyx/50 backdrop-blur-sm">
            {/* Background sheen */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] rounded-full transition-opacity duration-300 group-hover:opacity-100 opacity-50"></div>
            
            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-bold uppercase mb-2 leading-none">Protocol:<br/>Dominance</h3>
              <p className="text-gray-400 text-xs mb-6 uppercase tracking-wider">High Ticket Custom</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl lg:text-4xl font-black text-white">Rs. 300k+</span>
                <span className="text-[10px] text-gray-500 font-mono uppercase">/ Month</span>
              </div>
              <p className="text-sm text-gray-400 mt-4 font-medium italic">"For established brands. Full-stack automation, custom dev, and scale."</p>
            </div>

            <ul className="space-y-4 mb-10 flex-grow relative z-10">
              {[
                "On-Site Production (High-end Gear)",
                "Custom SaaS / App Development",
                "Aggressive Ad Scaling (50+ Creatives)",
                "Dedicated Account Manager (24/7)",
                "Daily Optimization Cycles"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="material-symbols-outlined text-white text-lg flex-shrink-0">check_circle</span>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 bg-white text-black text-sm font-bold uppercase tracking-wider hover:bg-gray-200 transition-all mt-auto relative z-10">
              Apply For Dominance
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;