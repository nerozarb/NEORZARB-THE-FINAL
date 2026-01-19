import React from 'react';

const PainPoints: React.FC = () => {
  return (
    <section className="border-b border-grid-line">
      <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[400px]">
        {/* Header Column */}
        <div className="border-b lg:border-b-0 lg:border-r border-grid-line p-8 lg:p-12 flex flex-col justify-between">
          <div>
            <span className="text-primary text-xs font-bold tracking-widest-2 uppercase mb-4 block">Reality Check</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tightest leading-none">Why Your<br />Current Marketing<br />Isn't Working.</h2>
          </div>
          <div className="hidden lg:block w-8 h-8 rounded-full border border-grid-line flex items-center justify-center mt-8">
            <span className="material-symbols-outlined text-gray-500 text-sm">arrow_forward</span>
          </div>
        </div>

        {/* Pain Point 1 */}
        <div className="border-b lg:border-b-0 lg:border-r border-grid-line p-8 lg:p-12 flex flex-col hover:bg-[#111] transition-colors group">
          <div className="mb-auto">
            <span className="material-symbols-outlined text-4xl text-gray-600 group-hover:text-primary transition-colors mb-6">extension_off</span>
            <h3 className="text-xl font-bold uppercase mb-2">The Freelancer Chaos</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Designer gayab, Editor offline. You are managing people, not growing revenue.</p>
          </div>
          <div className="mt-8 w-full h-px bg-grid-line group-hover:bg-primary transition-colors"></div>
        </div>

        {/* Pain Point 2 */}
        <div className="border-b lg:border-b-0 lg:border-r border-grid-line p-8 lg:p-12 flex flex-col hover:bg-[#111] transition-colors group">
          <div className="mb-auto">
            <span className="material-symbols-outlined text-4xl text-gray-600 group-hover:text-primary transition-colors mb-6">campaign</span>
            <h3 className="text-xl font-bold uppercase mb-2">The 'Post & Pray' Trap</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Posting randomly without strategy? Likes don't pay bills. You need a sales system.</p>
          </div>
          <div className="mt-8 w-full h-px bg-grid-line group-hover:bg-primary transition-colors"></div>
        </div>

        {/* Pain Point 3 */}
        <div className="p-8 lg:p-12 flex flex-col hover:bg-[#111] transition-colors group">
          <div className="mb-auto">
            <span className="material-symbols-outlined text-4xl text-gray-600 group-hover:text-primary transition-colors mb-6">settings</span>
            <h3 className="text-xl font-bold uppercase mb-2">Tech Overwhelm</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Pixels, CRMs, APIs... sar dard. We handle the tech so you handle the cash.</p>
          </div>
          <div className="mt-8 w-full h-px bg-grid-line group-hover:bg-primary transition-colors"></div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;