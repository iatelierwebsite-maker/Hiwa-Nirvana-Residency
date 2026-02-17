import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Villas', path: '/villas' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Location', path: '/location' },
    { name: 'EMI Calculator', path: '/emi' },
  ];

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link transition-colors duration-300 hover:text-gold ${
      isActive ? 'text-gold border-b-2 border-gold pb-1' : 'text-slate-200'
    }`;

  return (
    <>
      <nav className="fixed w-full z-50 transition-all duration-300 glass-panel border-b border-white/5 top-0">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Brand */}
          <NavLink to="/" onClick={closeMenu} className="block cursor-pointer">
            <div className="text-2xl font-serif font-bold text-gold tracking-widest">
              HIWA <span className="text-white">NIRVARA</span>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center text-sm font-light tracking-wide">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path} className={getNavLinkClass}>
                {item.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="bg-gradient-to-r from-gold to-[#aa771c] text-black font-semibold uppercase text-xs px-8 py-3 clip-path-polygon hover:scale-105 transition-transform"
              style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
            >
              Enquire
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button onClick={toggleMobileMenu} className="lg:hidden text-gold text-2xl focus:outline-none">
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/98 z-40 flex flex-col justify-center items-center space-y-6 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={closeMenu}
            className="text-2xl font-serif text-white hover:text-gold"
          >
            {item.name}
          </NavLink>
        ))}
        <NavLink
          to="/contact"
          onClick={closeMenu}
          className="text-xl text-gold border border-gold px-8 py-2 mt-4"
        >
          Enquire
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;