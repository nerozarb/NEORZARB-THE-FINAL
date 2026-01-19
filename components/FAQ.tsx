import React from 'react';

const FAQ: React.FC = () => {
  return (
    <section className="border-b border-grid-line py-20 px-6 lg:px-12 bg-onyx">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black uppercase tracking-tightest mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          <div className="border-l-2 border-primary pl-6 py-2">
            <h3 className="text-lg font-bold uppercase mb-2">Do you come to shoot the videos?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">For the Sprint and Scale packages in Lahore, yes. For others, we guide you on how to record on your phone, and our AI editors make it look professional.</p>
          </div>
          
          <div className="border-l-2 border-grid-line pl-6 py-2">
            <h3 className="text-lg font-bold uppercase mb-2">Can I just try one month?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Digital growth is not magic. It takes consistency. That is why our Sprint is 60 days—so we can actually show you results.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;