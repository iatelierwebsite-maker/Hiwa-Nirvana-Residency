import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PLACEHOLDER_IMAGES } from '../types';

const Villas: React.FC = () => {
  const navigate = useNavigate();

  const villas = [
    {
      id: 'azure',
      name: 'The Azure',
      desc: '4 BHK Triplex Villa • 3200 Sft',
      tag: 'EAST FACING',
      tagColor: 'bg-gold',
      image: PLACEHOLDER_IMAGES.villaAzure
    },
    {
      id: 'solis',
      name: 'The Solis',
      desc: '3 BHK Duplex Villa • 2800 Sft',
      tag: 'WEST FACING',
      tagColor: 'bg-white',
      image: PLACEHOLDER_IMAGES.villaSolis
    },
    {
      id: 'zenith',
      name: 'The Zenith',
      desc: '5 BHK Luxury Villa • 4500 Sft',
      tag: 'CORNER',
      tagColor: 'bg-blue-500',
      image: PLACEHOLDER_IMAGES.villaNorth // Using North facing type 2 as represented in HTML list
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-16">
        <span className="text-gold uppercase tracking-widest text-sm">Configurations</span>
        <h2 className="text-4xl font-serif mt-2 text-white">Choose Your Sanctuary</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {villas.map((villa) => (
          <div 
            key={villa.id} 
            className="glass-card rounded-xl group cursor-pointer overflow-hidden" 
            onClick={() => navigate(`/villas/${villa.id}`)}
          >
            <div className="h-64 overflow-hidden relative">
              <img 
                src={villa.image} 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
                alt={villa.name} 
              />
              <span className={`absolute top-4 right-4 ${villa.tagColor} text-black text-xs font-bold px-3 py-1 uppercase`}>
                {villa.tag}
              </span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif text-white mb-2">{villa.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{villa.desc}</p>
              <button className="w-full py-3 border border-gold text-gold hover:bg-gold hover:text-black transition uppercase text-sm tracking-wider">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Villas;