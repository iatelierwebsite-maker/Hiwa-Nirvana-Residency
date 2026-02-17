import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PLACEHOLDER_IMAGES, Amenity } from '../types';

const AmenityDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const getAmenityData = (id: string | undefined): Amenity => {
    switch(id) {
      case 'pool':
        return {
          id: 'pool',
          name: 'Infinity Pool',
          description: 'Level 3 | 25 Meter Lap Pool | Jacuzzi',
          fullDescription: 'Experience the ultimate in relaxation with our suspended infinity pool. Designed to blend seamlessly with the horizon, it offers a tranquil escape where you can swim amidst the clouds. The temperature-controlled waters ensure year-round comfort.',
          icon: 'fa-swimmer',
          image: PLACEHOLDER_IMAGES.poolSwim,
          features: ['Temperature Controlled', 'Kids Pool Section', 'Cabana Seating', 'Sunset View Deck'],
          gallery: [PLACEHOLDER_IMAGES.pool, PLACEHOLDER_IMAGES.poolSwim]
        };
      case 'gym':
        return {
          id: 'gym',
          name: 'Sky Gym',
          description: 'Level 4 | Technogym Equipment | Yoga Deck',
          fullDescription: 'Elevate your fitness journey in our Sky Gym. Perched on the top floor, this facility is equipped with the latest Technogym equipment. Floor-to-ceiling glass walls provide motivating views of the city skyline.',
          icon: 'fa-dumbbell',
          image: PLACEHOLDER_IMAGES.gym,
          features: ['Technogym Equipment', 'Yoga Studio', 'Personal Trainers', 'Steam & Sauna']
        };
      case 'clubhouse':
        return {
          id: 'clubhouse',
          name: 'The Club Royale',
          description: '15,000 Sft | Banquet Hall | Library | Indoor Games',
          fullDescription: 'The heart of our community, The Club Royale is a sprawling 15,000 Sft clubhouse designed for social and recreational excellence. It features a grand banquet hall for events, a mini-theater, and an indoor games arena.',
          icon: 'fa-glass-cheers',
          image: PLACEHOLDER_IMAGES.clubhouseNight,
          features: ['Banquet Hall', 'Mini Theater', 'Indoor Games', 'Residents Lounge'],
          gallery: [PLACEHOLDER_IMAGES.indoorGames, PLACEHOLDER_IMAGES.partyHall]
        };
      case 'garden':
        return {
          id: 'garden',
          name: 'Zen Gardens',
          description: 'Manicured landscapes for peace of mind.',
          fullDescription: 'Step into a world of calm in our meticulously landscaped Zen Gardens. Inspired by Japanese design principles, these spaces feature rock gardens, koi ponds, and walking paths lined with exotic flora.',
          icon: 'fa-tree',
          image: PLACEHOLDER_IMAGES.landscape,
          features: ['Jogging Track', 'Meditation Pavilion', 'Senior Citizens Corner', 'Pet Park']
        };
      default:
        return {
          id: 'pool',
          name: 'Infinity Pool',
          description: 'A visual masterpiece merging water and sky.',
          fullDescription: 'Experience the ultimate in relaxation.',
          icon: 'fa-swimmer',
          image: PLACEHOLDER_IMAGES.poolSwim,
          features: ['Temperature Controlled']
        };
    }
  };

  const amenity = getAmenityData(id);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="relative h-[60vh] flex items-center justify-center -mt-20">
         <img src={amenity.image} className="absolute inset-0 w-full h-full object-cover" alt={amenity.name} />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
         <div className="relative z-10 text-center mt-20">
             <div className="w-16 h-16 rounded-full bg-gold/20 backdrop-blur-md flex items-center justify-center mx-auto mb-6 border border-gold/40">
                <i className={`fas ${amenity.icon} text-3xl text-gold`}></i>
             </div>
             <h1 className="text-5xl font-serif text-white mb-2">{amenity.name}</h1>
             <p className="text-gray-200 tracking-widest uppercase text-sm">{amenity.description}</p>
         </div>
     </div>

     <div className="container mx-auto px-6 py-12">
         <button onClick={() => navigate('/amenities')} className="mb-8 text-sm text-gray-400 hover:text-white flex items-center gap-2">
           <i className="fas fa-arrow-left"></i> Back to All Amenities
         </button>
         
         <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <i className={`fas ${amenity.icon} text-9xl text-white`}></i>
                </div>
                <h2 className="text-3xl font-serif text-white mb-6">Experience</h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                    {amenity.fullDescription}
                </p>
                <div className="grid grid-cols-2 gap-4">
                    {amenity.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                            <i className="fas fa-star text-gold text-xs"></i>
                            <span className="text-sm text-white">{feature}</span>
                        </div>
                    ))}
                </div>
             </div>

             <div className="grid grid-cols-2 gap-4">
                 {/* Main Amenity Image */}
                 <div className="glass-card p-1 rounded-xl col-span-2">
                     <img src={amenity.image} className="w-full h-48 object-cover rounded-lg" alt="Main View" />
                 </div>
                 {/* Gallery Images if available, else placeholders */}
                 {amenity.gallery ? (
                     amenity.gallery.map((img, i) => (
                        <div key={i} className={`glass-card p-1 rounded-xl ${i % 2 === 0 ? 'transform translate-y-8' : ''}`}>
                             <img src={img} className="w-full h-48 object-cover rounded-lg" alt={`Detail ${i}`} />
                        </div>
                     ))
                 ) : (
                    <>
                        <div className="glass-card p-1 rounded-xl transform translate-y-8">
                             <img src={amenity.image} className="w-full h-48 object-cover rounded-lg" alt="Detail 1" />
                        </div>
                        <div className="glass-card p-1 rounded-xl">
                            <div className="w-full h-48 bg-gold/10 rounded-lg flex items-center justify-center flex-col text-center p-4 border border-gold/20">
                                <span className="text-2xl font-serif text-gold mb-2">Luxury</span>
                                <span className="text-xs text-gray-400">Standard</span>
                            </div>
                        </div>
                    </>
                 )}
             </div>
         </div>
     </div>
    </div>
  );
};

export default AmenityDetails;