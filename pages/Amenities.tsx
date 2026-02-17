import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PLACEHOLDER_IMAGES } from '../types';

const Amenities: React.FC = () => {
  const navigate = useNavigate();
  
  const amenities = [
    { id: 'pool', name: 'Infinity Pool', icon: 'fa-swimmer', img: PLACEHOLDER_IMAGES.poolSwim }, // Using pool swim specifically
    { id: 'gym', name: 'Sky Gym', icon: 'fa-dumbbell', img: PLACEHOLDER_IMAGES.gym },
    { id: 'clubhouse', name: 'The Club Royale', icon: 'fa-glass-cheers', img: PLACEHOLDER_IMAGES.clubhouse },
    { id: 'garden', name: 'Zen Gardens', icon: 'fa-tree', img: PLACEHOLDER_IMAGES.landscape },
  ];

  return (
    <div className="container mx-auto px-6 py-12 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <span className="text-gold uppercase tracking-widest text-sm">Lifestyle</span>
          <h2 className="text-4xl font-serif mt-2 text-white">World-Class Amenities</h2>
        </div>
        <p className="text-gray-400 max-w-md text-right hidden md:block">Click on any amenity to view details.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {amenities.map((item) => (
          <div 
            key={item.id} 
            onClick={() => navigate(`/amenities/${item.id}`)}
            className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center aspect-square group hover:bg-white/5 cursor-pointer relative overflow-hidden"
          >
            <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition duration-500 group-hover:scale-110" alt={item.name} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <i className={`fas ${item.icon} text-4xl text-gold mb-4 relative z-10 group-hover:-translate-y-2 transition duration-300`}></i>
            <h4 className="text-lg font-medium text-white relative z-10 group-hover:-translate-y-2 transition duration-300">{item.name}</h4>
            <span className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition duration-300 text-xs text-gold uppercase tracking-widest z-10 translate-y-2 group-hover:translate-y-0">
                View Plan <i className="fas fa-arrow-right ml-1"></i>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;