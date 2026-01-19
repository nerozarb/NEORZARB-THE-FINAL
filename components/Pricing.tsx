import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section className="border-b border-grid-line py-24 px-6 lg:px-12 bg-grid-pattern" id="offers">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tightest mb-4">The Grand Slam Offers</h2>
        <p className="text-gray-400 text-sm tracking-widest uppercase">Choose your velocity</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
        {/* Card 1: The Sprint */}
        <div className="relative bg-onyx border border-primary shadow-glow-card p-1 group hover:transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg whitespace-nowrap z-10">
            🔥 Most Popular
          </div>
          <div className="h-full border border-primary/20 p-8 flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-bold uppercase mb-2">The 60-Day Sprint</h3>
              <p className="text-gray-400 text-xs mb-6 uppercase tracking-wider">The Transformation</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl lg:text-4xl font-black text-white">Rs. 150k</span>
                <span className="text-[10px] text-gray-500 font-mono uppercase">/ One-time</span>
              </div>
              <p className="text-sm text-primary mt-4 font-medium italic">"Perfect for businesses that need a fresh start or a big launch. Ye kharcha nahi, investment hai."</p>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "Full Brand Facelift: Logo, Colors, Fonts, Social Bio optimized",
                "The Landing Page: A high-converting one-page website",
                "30 Short-Form Videos: Scripted & Edited (Reels/TikTok)",
                "Meta Ads Setup: Business Manager & Pixel integration",
                "WhatsApp Automation: Auto-greeting bot setup"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="material-symbols-outlined text-primary text-lg flex-shrink-0">check_circle</span>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 bg-primary text-white text-sm font-bold uppercase tracking-wider hover:brightness-110 transition-all shadow-gloss-green mt-auto">
              Book This Sprint
            </button>
          </div>
        </div>

        {/* Card 2: Growth Engine */}
        <div className="relative bg-onyx border border-grid-line p-1 group hover:border-gray-600 transition-all duration-300 flex flex-col">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#222] text-gray-300 border border-gray-700 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg whitespace-nowrap z-10">
            ⚡ Maintenance
          </div>
          <div className="h-full border border-grid-line p-8 flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-bold uppercase mb-2">Growth Engine</h3>
              <p className="text-gray-400 text-xs mb-6 uppercase tracking-wider">Active Presence</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl lg:text-4xl font-black text-white">Rs. 50k</span>
                <span className="text-[10px] text-gray-500 font-mono uppercase">/ Month</span>
              </div>
              <p className="text-sm text-gray-400 mt-4 font-medium italic">"Cheaper than hiring a junior intern, but with the power of an AI agency."</p>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "15 AI-Enhanced Reels/Month: We script, edit, and post",
                "Cross-Platform Domination: Posted on IG, TikTok, YT Shorts, FB",
                "Community Management: We reply to comments",
                "Monthly Strategy Call: Review the numbers"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="material-symbols-outlined text-gray-500 text-lg flex-shrink-0">check_circle</span>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 bg-transparent border border-gray-600 text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all mt-auto">
              Start Monthly Engine
            </button>
          </div>
        </div>

        {/* Card 3: The Scale Protocol (Inferred based on Step 3) */}
        <div className="relative bg-onyx border border-grid-line p-1 group hover:border-white transition-all duration-300 flex flex-col">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black border border-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg whitespace-nowrap z-10">
            🚀 High Velocity
          </div>
          <div className="h-full border border-grid-line p-8 flex flex-col relative overflow-hidden">
            {/* Background sheen for Scale */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] rounded-full"></div>
            
            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-bold uppercase mb-2">Scale Protocol</h3>
              <p className="text-gray-400 text-xs mb-6 uppercase tracking-wider">Ad Dominance</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl lg:text-4xl font-black text-white">Rs. 100k</span>
                <span className="text-[10px] text-gray-500 font-mono uppercase">/ Month</span>
              </div>
              <p className="text-sm text-gray-400 mt-4 font-medium italic">"For brands ready to pour fuel on the fire. We manage the spend, you handle the demand."</p>
            </div>

            <ul className="space-y-4 mb-10 flex-grow relative z-10">
              {[
                "Advanced Meta & TikTok Ads Management (ROAS Focus)",
                "Full Funnel Optimization & A/B Testing",
                "Weekly Performance Deep Dives & Reporting",
                "Scale Automation: Lead nurturing workflows",
                "Includes all 'Growth Engine' features"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="material-symbols-outlined text-white text-lg flex-shrink-0">check_circle</span>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 bg-white text-black text-sm font-bold uppercase tracking-wider hover:bg-gray-200 transition-all mt-auto relative z-10">
              Apply For Scale
            </button>
          </div>
        </div>
      </div>

      {/* Hidden / Small Launchpad Link */}
      <div className="text-center mt-12">
        <a href="#" className="inline-flex items-center gap-2 text-xs font-mono text-gray-600 uppercase tracking-widest hover:text-primary transition-colors">
          <span>Just starting out? View The Launchpad</span>
          <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
        </a>
      </div>
    </section>
  );
};

export default Pricing;