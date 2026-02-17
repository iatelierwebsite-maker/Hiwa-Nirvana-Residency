import React, { useState } from 'react';
import { PLACEHOLDER_IMAGES } from '../types';

const Gallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const images = [
    PLACEHOLDER_IMAGES.hero,
    PLACEHOLDER_IMAGES.villa1,
    PLACEHOLDER_IMAGES.villa2,
    PLACEHOLDER_IMAGES.villa3,
    PLACEHOLDER_IMAGES.interior,
    PLACEHOLDER_IMAGES.garden
  ];

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    setLightboxOpen(true);
  };

  return (
    <div className="container mx-auto px-6 py-12 animate-in fade-in duration-500">
      <h2 className="text-4xl font-serif text-center mb-12 text-white">Visual Tour</h2>
      <div className="columns-1 md:columns-3 gap-6 space-y-6">
        {images.map((src, index) => (
          <div key={index} className="glass-card p-1 rounded-lg break-inside-avoid cursor-pointer hover:opacity-90 transition" onClick={() => openLightbox(src)}>
            <img src={src} className="w-full rounded-lg" alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-300">
          <button 
            onClick={() => setLightboxOpen(false)} 
            className="absolute top-6 right-6 text-white hover:text-gold text-4xl focus:outline-none"
          >
            &times;
          </button>
          <img 
            src={selectedImage} 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" 
            alt="Fullsize" 
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;