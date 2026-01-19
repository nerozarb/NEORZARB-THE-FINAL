import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Mozart Haus",
    category: "Culture / Events",
    image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Lumina",
    category: "Skincare Concept",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Urban Threads",
    category: "Fashion Concept",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Apex Dental",
    category: "Service Concept",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"
  }
];

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="border-b border-grid-line" id="work">
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Project Zoom" className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl border border-grid-line" />
          <button className="absolute top-6 right-6 text-white text-4xl">&times;</button>
        </div>
      )}

      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/4 border-b lg:border-b-0 lg:border-r border-grid-line p-8 lg:p-12 sticky top-16 h-fit bg-onyx z-20">
          <span className="text-primary text-xs font-bold tracking-widest-2 uppercase mb-4 block">The Proof</span>
          <h2 className="text-3xl font-black uppercase tracking-tightest mb-6">Built By<br />Nerozarb</h2>
          <p className="text-gray-400 text-sm mb-8">Selected works demonstrating high-velocity infrastructure deployment.</p>
          <div className="h-px w-12 bg-primary"></div>
        </div>
        
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group relative aspect-square border-b border-r border-grid-line overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" 
                  style={{ backgroundImage: `url('${project.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                  <h3 className="text-2xl font-bold uppercase mb-1 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white drop-shadow-md">{project.title}</h3>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 drop-shadow-md">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;