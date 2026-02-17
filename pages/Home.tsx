import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PLACEHOLDER_IMAGES } from '../types';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [galleryImage, setGalleryImage] = useState(PLACEHOLDER_IMAGES.street);
  const [galleryCaption, setGalleryCaption] = useState('Serene Streetscapes');

  const updateGallery = (src: string, caption: string) => {
    setGalleryImage(src);
    setGalleryCaption(caption);
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={PLACEHOLDER_IMAGES.hero} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-[#0f172a]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
          <div className="inline-flex items-center gap-2 border border-gold/40 bg-black/30 backdrop-blur-md px-4 py-1 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-gold text-xs tracking-widest uppercase font-medium">Secunderabad's Finest</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient-gold drop-shadow-2xl leading-tight">
            HIWA NIRVARA
          </h1>
          <p className="text-lg text-gray-200 font-light max-w-2xl mx-auto mb-10">
            Premium 3 & 4 BHK Independent Villas
          </p>
          <button 
            onClick={() => navigate('/villas')}
            className="bg-gradient-to-r from-gold to-[#aa771c] text-black font-semibold uppercase tracking-wider px-8 py-3 rounded-none clip-path-polygon hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
          >
            Explore Residences
          </button>
        </div>
      </div>

      {/* Arrival Experience (Scrollable) */}
      <div className="bg-black/50 backdrop-blur-sm border-t border-white/5 py-12">
        <div className="container mx-auto px-6">
          <h3 className="text-gold uppercase tracking-widest text-sm mb-6 text-center">The Arrival Experience</h3>
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x no-scrollbar">
             {/* Entrance */}
             <div className="flex-none w-[85%] md:w-[40%] snap-center glass-card rounded-xl overflow-hidden cursor-pointer group" onClick={() => navigate('/villas')}>
                 <div className="h-48 relative overflow-hidden">
                     <img src={PLACEHOLDER_IMAGES.entrance} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Entrance" />
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center"><h4 className="text-2xl font-serif text-white">Grand Entrance</h4></div>
                 </div>
                 <div className="p-4 text-center">
                     <p className="text-xs text-gray-400">Double Height Entrance Lobbies</p>
                 </div>
             </div>
             {/* Landscape */}
             <div className="flex-none w-[85%] md:w-[40%] snap-center glass-card rounded-xl overflow-hidden cursor-pointer group" onClick={() => navigate('/amenities/garden')}>
                 <div className="h-48 relative overflow-hidden">
                     <img src={PLACEHOLDER_IMAGES.landscape} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Landscape" />
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center"><h4 className="text-2xl font-serif text-white">Lush Landscapes</h4></div>
                 </div>
                 <div className="p-4 text-center">
                     <p className="text-xs text-gray-400">Glass Facades with Garden Views</p>
                 </div>
             </div>
             {/* Club */}
             <div className="flex-none w-[85%] md:w-[40%] snap-center glass-card rounded-xl overflow-hidden cursor-pointer group" onClick={() => navigate('/amenities/clubhouse')}>
                 <div className="h-48 relative overflow-hidden">
                     <img src={PLACEHOLDER_IMAGES.clubhouse} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Clubhouse" />
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center"><h4 className="text-2xl font-serif text-white">Elite Club</h4></div>
                 </div>
                 <div className="p-4 text-center">
                     <p className="text-xs text-gray-400">Infinity Pools & Sky Decks</p>
                 </div>
             </div>
          </div>
        </div>
      </div>

      {/* Interactive Gallery */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="text-gold uppercase tracking-widest text-sm">Experience</span>
          <h2 className="text-3xl font-serif mt-2 text-white">Life at Nirvara</h2>
        </div>
        <div className="glass-panel p-2 rounded-2xl max-w-5xl mx-auto">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl mb-4 group">
            <img 
              src={galleryImage} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="Gallery Main"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <h3 className="text-2xl font-serif text-white">{galleryCaption}</h3>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div onClick={() => updateGallery(PLACEHOLDER_IMAGES.street, 'Serene Streetscapes')} className="cursor-pointer rounded-lg overflow-hidden h-24 border-2 border-gold opacity-100 transition">
              <img src={PLACEHOLDER_IMAGES.street} className="w-full h-full object-cover" alt="Street" />
            </div>
            <div onClick={() => updateGallery(PLACEHOLDER_IMAGES.balcony, 'Private Balconies')} className="cursor-pointer rounded-lg overflow-hidden h-24 border-2 border-transparent hover:border-gold opacity-60 hover:opacity-100 transition">
              <img src={PLACEHOLDER_IMAGES.balcony} className="w-full h-full object-cover" alt="Balcony" />
            </div>
            <div onClick={() => updateGallery(PLACEHOLDER_IMAGES.streetNight, 'Evening Ambiance')} className="cursor-pointer rounded-lg overflow-hidden h-24 border-2 border-transparent hover:border-gold opacity-60 hover:opacity-100 transition">
              <img src={PLACEHOLDER_IMAGES.streetNight} className="w-full h-full object-cover" alt="Night" />
            </div>
          </div>
        </div>
      </div>

      {/* Exclusive Designs (Scrollable) */}
      <div className="bg-black/50 backdrop-blur-sm border-t border-white/5 py-12">
          <div className="container mx-auto px-6">
              <h3 className="text-gold uppercase tracking-widest text-sm mb-6 text-center">Exclusive Designs</h3>
              <div className="flex overflow-x-auto gap-4 pb-4 snap-x no-scrollbar">
                  <div className="flex-none w-[85%] md:w-[40%] snap-center glass-card rounded-xl overflow-hidden cursor-pointer" onClick={() => navigate('/villas')}>
                      <div className="h-48 relative">
                          <img src={PLACEHOLDER_IMAGES.villaSouth1} className="w-full h-full object-cover" alt="Modern" />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center"><h4 className="text-2xl font-serif text-white">Modern Contemporary</h4></div>
                      </div>
                  </div>
                  <div className="flex-none w-[85%] md:w-[40%] snap-center glass-card rounded-xl overflow-hidden cursor-pointer" onClick={() => navigate('/villas')}>
                      <div className="h-48 relative">
                          <img src={PLACEHOLDER_IMAGES.villaSouth2} className="w-full h-full object-cover" alt="Classic" />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center"><h4 className="text-2xl font-serif text-white">Classic Elegance</h4></div>
                      </div>
                  </div>
                  <div className="flex-none w-[85%] md:w-[40%] snap-center glass-card rounded-xl overflow-hidden cursor-pointer" onClick={() => navigate('/villas')}>
                      <div className="h-48 relative">
                          <img src={PLACEHOLDER_IMAGES.villaSouth3} className="w-full h-full object-cover" alt="Neo" />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center"><h4 className="text-2xl font-serif text-white">Neo-Modern</h4></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Quick Enquiry */}
      <div className="container mx-auto px-6 py-16">
        <div className="glass-panel max-w-2xl mx-auto p-8 rounded-2xl relative">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-serif text-white">Quick Enquiry</h3>
            <p className="text-gray-400 text-sm">Download our e-brochure instantly.</p>
          </div>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Enquiry Submitted!'); }}>
            <input type="text" placeholder="Name" required className="w-full bg-slate-800/50 border border-white/10 rounded p-3 text-white focus:border-gold outline-none" />
            <input type="tel" placeholder="Phone" required className="w-full bg-slate-800/50 border border-white/10 rounded p-3 text-white focus:border-gold outline-none" />
            <button type="submit" className="w-full bg-gold hover:bg-[#aa771c] text-black font-bold py-3 uppercase transition">Get Brochure</button>
          </form>
        </div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto px-6 py-16 border-t border-white/5">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif text-white">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
           {[
             { q: "What are the villa sizes available?", a: "We offer 3 BHK (2800 Sft) and 4 BHK (3200-4500 Sft) independent villas." },
             { q: "Is the project HMDA approved?", a: "Yes, Hiwa Nirvara is fully HMDA approved and RERA registered." },
             { q: "What is the completion timeline?", a: "Phase 1 is ready for handover by Dec 2025. Phase 2 by mid-2026." },
             { q: "Are banks providing loans?", a: "Yes, the project is approved by SBI, HDFC, ICICI, and Axis Bank." },
             { q: "Can we customize the interiors?", a: "Yes, internal structural changes are permitted before the brickwork stage." }
           ].map((faq, idx) => (
             <details key={idx} className="glass-card rounded-lg p-4 group">
               <summary className="flex justify-between items-center font-medium text-gold cursor-pointer list-none">
                 {faq.q}
                 <span className="group-open:rotate-180 transition transform"><i className="fas fa-chevron-down"></i></span>
               </summary>
               <p className="text-gray-300 text-sm mt-3 pl-2 border-l-2 border-gold/30">{faq.a}</p>
             </details>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Home;