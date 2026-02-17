import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PLACEHOLDER_IMAGES, VillaConfig } from '../types';

const VillaDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Mock data fetching based on ID
  const getVillaData = (id: string | undefined): VillaConfig => {
    switch(id) {
      case 'azure':
        return {
          id: 'azure',
          name: 'The Azure',
          type: '4 BHK Triplex',
          facing: 'East Facing',
          size: '3200 Sft',
          image: PLACEHOLDER_IMAGES.villaAzure,
          features: ['4 Master Bedrooms with Walk-in Closets', '2 Covered Car Parks', 'Private Terrace Garden', 'Dedicated Home Theater Room'],
          description: 'The Azure features a unique East-facing orientation that invites the morning sun deep into your living spaces. With a grand double-height entrance and a private home theater, it is the epitome of luxury.',
          tagColor: 'text-gold'
        };
      case 'solis':
        return {
          id: 'solis',
          name: 'The Solis',
          type: '3 BHK Duplex',
          facing: 'West Facing',
          size: '2800 Sft',
          image: PLACEHOLDER_IMAGES.villaSolis,
          features: ['3 Spacious Bedrooms + Study', 'Double Height Living Area', 'Open Kitchen with Island', 'Family Lounge on First Floor'],
          description: 'Designed for the modern family, The Solis optimizes space without compromising on style. The West-facing layout ensures beautiful sunset views from the master bedroom balcony.',
          tagColor: 'text-white'
        };
      default: // Zenith
        return {
          id: 'zenith',
          name: 'The Zenith',
          type: '5 BHK Luxury',
          facing: 'Corner Plot',
          size: '4500 Sft',
          image: PLACEHOLDER_IMAGES.villaZenith,
          features: ['5 Grand Suites', 'Private Plunge Pool', 'Internal Lift Provision', 'Terrace Bar & Lounge'],
          description: 'Our most exclusive offering, The Zenith sits on prime corner plots. It features a private lap pool, a provision for an internal elevator, and expansive landscaped decks on every level.',
          tagColor: 'text-blue-500'
        };
    }
  };

  const villa = getVillaData(id);

  return (
    <div className="animate-in fade-in duration-500">
       <div className="relative h-[60vh] flex items-center justify-center -mt-20">
          <img src={villa.image} className="absolute inset-0 w-full h-full object-cover" alt={villa.name} />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
          <div className="relative z-10 text-center mt-20">
              <h1 className="text-5xl font-serif text-white mb-2">{villa.name}</h1>
              <p className="text-gold tracking-widest uppercase text-sm">{villa.type} | {villa.facing} | {villa.size}</p>
          </div>
      </div>
      <div className="container mx-auto px-6 py-12">
          <button onClick={() => navigate('/villas')} className="mb-8 text-sm text-gray-400 hover:text-white flex items-center gap-2">
            <i className="fas fa-arrow-left"></i> Back to Villas
          </button>
          <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                  <h2 className="text-3xl font-serif text-white mb-6">Overview</h2>
                  <p className="text-gray-400 leading-relaxed mb-6">{villa.description}</p>
                  <ul className="space-y-4 text-sm text-gray-300">
                      {villa.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <i className="fas fa-check text-gold"></i> {feature}
                        </li>
                      ))}
                  </ul>
                  <button onClick={() => navigate('/contact')} className="btn-primary bg-gold text-black font-bold uppercase py-3 px-8 mt-8 hover:bg-opacity-90 transition">
                    Request Floor Plan & Price
                  </button>
              </div>
              <div className="glass-panel p-4 rounded-xl">
                  <div className="bg-blue-900/20 border border-dashed border-white/20 h-80 rounded flex items-center justify-center flex-col overflow-hidden text-gray-500">
                      <p>Interactive Floor Plan Viewer</p>
                      <span className="text-xs mt-2">(Schematic Placeholder)</span>
                      <img src={PLACEHOLDER_IMAGES.hero} className="absolute opacity-10 object-cover w-full h-full" alt="Floorplan bg" />
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default VillaDetails;