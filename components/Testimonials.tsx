import React, { useRef } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "The 60-Day Sprint completely reorganized our chaotic marketing. We went from random posts to a lead-generating machine.",
    author: "Sarah Khan",
    role: "Founder, Dermacare Clinic",
    metric: "+240% Leads"
  },
  {
    id: 2,
    quote: "I was skeptical about the 50k maintenance, but the volume of content is insane. It feels like I have a full team working for me.",
    author: "Ahmed Riaz",
    role: "Owner, IronForge Gym",
    metric: "15k+ Reach"
  },
  {
    id: 3,
    quote: "Nerozarb built our entire brand infrastructure. The landing page alone paid for the sprint fee in just week two of the launch.",
    author: "Bilal Tariq",
    role: "E-com Manager, StyloMode",
    metric: "6.2x ROAS"
  },
  {
    id: 4,
    quote: "Finally, an agency that doesn't just talk about 'brand awareness' but actually cares about systems, automation, and revenue.",
    author: "Zainab Malik",
    role: "Principal Architect, ZM Spaces",
    metric: "System Active"
  }
];

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 400; // Approx card width
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="border-b border-grid-line py-20 bg-onyx relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">Field Reports</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tightest leading-none">System Validation</h2>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 border border-grid-line hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all group active:scale-95"
              aria-label="Previous testimonial"
            >
              <span className="material-symbols-outlined text-gray-400 group-hover:text-primary">arrow_back</span>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 border border-grid-line hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all group active:scale-95"
              aria-label="Next testimonial"
            >
              <span className="material-symbols-outlined text-gray-400 group-hover:text-primary">arrow_forward</span>
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
          }}
        >
          {/* Hide Webkit Scrollbar locally for this container */}
          <style>{`
            .overflow-x-auto::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {testimonials.map((t) => (
            <div 
              key={t.id} 
              className="min-w-[85vw] md:min-w-[400px] bg-[#0F0F0F] border border-grid-line p-8 flex flex-col justify-between snap-center group hover:border-gray-600 transition-colors shadow-sm"
            >
              <div className="mb-8">
                <span className="material-symbols-outlined text-4xl text-grid-line mb-4 group-hover:text-primary transition-colors">format_quote</span>
                <p className="text-gray-300 text-lg leading-relaxed font-medium">"{t.quote}"</p>
              </div>
              
              <div className="flex items-center justify-between border-t border-grid-line pt-6">
                <div>
                  <h4 className="font-bold text-white text-sm uppercase">{t.author}</h4>
                  <p className="text-xs text-gray-500 font-mono mt-1">{t.role}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Result</span>
                  <span className="text-primary font-bold text-sm bg-primary/10 px-2 py-1 rounded border border-primary/20">{t.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;