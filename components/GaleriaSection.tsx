'use client';

import { useState } from 'react';
import Lightbox from './Lightbox';

export default function GaleriaSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galeria = [
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500',
    'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
    'https://images.unsplash.com/photo-1520095972714-909e91b038e5?w=500',
    'https://images.unsplash.com/photo-1603732551681-37fef23b0950?w=500',
    'https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=500',
  ];

  return (
    <>
      <section id="galeria" className="py-20 bg-gradient-to-b from-red-950 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-white" style={{fontFamily: 'Georgia, serif'}}>
            Momentos Mágicos
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galeria.map((img, i) => (
              <div 
                key={i} 
                className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Circo ${i+1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="text-yellow-400 font-bold">Ver más</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
}