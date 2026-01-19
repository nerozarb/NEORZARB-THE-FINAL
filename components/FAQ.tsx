import React from 'react';

const FAQ: React.FC = () => {
  return (
    <section className="border-b border-grid-line py-20 px-6 lg:px-12 bg-onyx">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black uppercase tracking-tightest mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
           <div className="border-l-2 border-primary pl-6 py-2">
            <h3 className="text-lg font-bold uppercase mb-2">Why do I need a "Sprint" first?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Most brands have broken foundations. If we run ads on a bad profile, you lose money. The 60-Day Sprint builds the "Machine" so that when we switch to maintenance, it actually performs.</p>
          </div>

          <div className="border-l-2 border-grid-line pl-6 py-2">
            <h3 className="text-lg font-bold uppercase mb-2">How is the 50k/month plan so cheap?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">We use AI-enhanced workflows. What takes a human 10 hours, our system does in 1. You pay for the output and strategy, not the manual labor. It's efficiency, not magic.</p>
          </div>
          
          <div className="border-l-2 border-grid-line pl-6 py-2">
            <h3 className="text-lg font-bold uppercase mb-2">Do you come to shoot the videos?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">For the Sprint and Dominance packages in Lahore, yes. For others, we guide you on how to record on your phone, and our AI editors make it look professional.</p>
          </div>
          
          <div className="border-l-2 border-grid-line pl-6 py-2">
            <h3 className="text-lg font-bold uppercase mb-2">What happens after 60 days?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">You graduate. Once the machine is built, you can drop into our "Active Presence" tier (50k/month) to keep the engine running smoothly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;