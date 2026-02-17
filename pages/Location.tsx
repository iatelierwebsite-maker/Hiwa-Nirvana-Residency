import React from 'react';

const Location: React.FC = () => {
  return (
    <div className="py-16 relative min-h-screen">
      <div className="container mx-auto px-6 text-center mb-12">
        <span className="text-gold uppercase tracking-widest text-sm">Connectivity</span>
        <h2 className="text-4xl md:text-5xl font-serif mt-2 text-white">Narapally, Secunderabad</h2>
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 glass-panel p-2">
          {/* Iframe for map */}
          <div className="w-full h-[400px] md:h-[500px]">
             <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.988235952596!2d78.62982489394645!3d17.412352200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9e402d9107b5%3A0x62761a722955c821!2sPeerzadiguda%2C%20Hyderabad%2C%20Telangana%20500088!5e0!3m2!1sen!2sin!4v1770834230579!5m2!1sen!2sin"
                className="w-full h-full rounded-xl filter grayscale-[50%] hover:grayscale-0 transition-all duration-500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-full px-6 sm:px-0 flex justify-center">
            <a 
              href="https://www.google.com/maps/dir/?api=1&origin=Current+Location&destination=17.4123522,78.62982489394645&travelmode=driving"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#C6A052] to-[#B68B2D] text-[#1A2A3F] font-semibold px-6 py-3 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base shadow-[0_8px_25px_rgba(198,160,82,0.4)] active:scale-95 transition-all duration-300 hover:brightness-110 w-full sm:w-auto max-w-xs min-h-[48px]"
            >
              <i className="fas fa-route text-[#1A2A3F]"></i>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;