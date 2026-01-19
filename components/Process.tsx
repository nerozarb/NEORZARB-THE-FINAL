import React from 'react';

const Process: React.FC = () => {
  return (
    <section className="border-b border-grid-line py-20 px-6 lg:px-12" id="protocol">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-grid-line pb-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tightest">How We Work</h2>
          <p className="font-mono text-primary text-sm uppercase tracking-widest mb-2">[ The AI System ]</p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
          {/* Connecting Line */}
          <div className="absolute top-16 left-0 w-full h-px bg-primary/30 hidden md:block"></div>
          <div className="absolute top-16 left-0 w-full h-px bg-primary hidden md:block scale-x-0 origin-left animate-[grow_2s_ease-out_forwards]"></div>

          {/* Step 01 */}
          <div className="relative z-10 flex flex-col gap-6 group">
            <div className="w-16 h-16 bg-onyx border border-grid-line group-hover:border-primary flex items-center justify-center transition-colors duration-300 shadow-gloss-green">
              <span className="font-mono text-xl font-bold text-white">01</span>
            </div>
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-2xl font-bold uppercase">Audit</h3>
                <span className="text-xs font-mono text-primary">Day 1-7</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">We analyze your brand gap. <span className="text-gray-300 font-medium">Hum dekhte hain paisa kahan waste ho raha hai.</span></p>
            </div>
          </div>

          {/* Step 02 */}
          <div className="relative z-10 flex flex-col gap-6 group">
            <div className="w-16 h-16 bg-onyx border border-grid-line group-hover:border-primary flex items-center justify-center transition-colors duration-300 shadow-gloss-green">
              <span className="font-mono text-xl font-bold text-white">02</span>
            </div>
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-2xl font-bold uppercase">Build</h3>
                <span className="text-xs font-mono text-primary">Day 7-30</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">We rebuild your visual identity, shoot the content, and set up the Ad Account.</p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="relative z-10 flex flex-col gap-6 group">
            <div className="w-16 h-16 bg-onyx border border-grid-line group-hover:border-primary flex items-center justify-center transition-colors duration-300 shadow-gloss-green">
              <span className="font-mono text-xl font-bold text-white">03</span>
            </div>
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-2xl font-bold uppercase">Scale</h3>
                <span className="text-xs font-mono text-primary">Day 30+</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">We launch the Ads. We turn on the Automation. Leads start flowing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;