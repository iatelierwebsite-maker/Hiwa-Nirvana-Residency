import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-black/40 mt-auto py-12 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h4 className="text-2xl font-serif text-white mb-2">HIWA NIRVARA</h4>
            <p className="text-gray-400 text-xs">Narapally, Secunderabad, Telangana</p>
          </div>
          <div className="flex space-x-6 text-xl">
            <a href="#" className="text-gray-400 hover:text-gold transition"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-gold transition"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-400 hover:text-gold transition"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="text-gray-400 hover:text-gold transition"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2024 Hiwa Nirvara. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-gold cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-gold cursor-pointer">Privacy Policy</span>
            <span>RERA No: P0220000XXXX</span>
          </div>
        </div>
      </div>
      
      {/* Floating Action Buttons */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 transition-transform z-50"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <a
        href="tel:+919876543210"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 transition-transform z-50"
      >
        <i className="fas fa-phone"></i>
      </a>
    </footer>
  );
};

export default Footer;