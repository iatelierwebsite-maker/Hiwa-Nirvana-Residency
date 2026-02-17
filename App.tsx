import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Villas from './pages/Villas';
import VillaDetails from './pages/VillaDetails';
import Amenities from './pages/Amenities';
import AmenityDetails from './pages/AmenityDetails';
import Gallery from './pages/Gallery';
import Location from './pages/Location';
import EMICalculator from './pages/EMICalculator';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/villas" element={<Villas />} />
            <Route path="/villas/:id" element={<VillaDetails />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/amenities/:id" element={<AmenityDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/location" element={<Location />} />
            <Route path="/emi" element={<EMICalculator />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;