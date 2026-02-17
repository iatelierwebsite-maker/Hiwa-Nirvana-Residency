import React, { FormEvent } from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you! Our sales team will contact you shortly.");
  };

  return (
    <div className="container mx-auto px-6 py-12 flex flex-col justify-center min-h-[80vh] animate-in fade-in duration-500">
      <div className="glass-panel w-full max-w-5xl mx-auto rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
        {/* Contact Info */}
        <div className="md:w-2/5 bg-slate-900/90 p-10 flex flex-col justify-between border-r border-white/5">
          <div>
            <h2 className="text-3xl font-serif text-white mb-8">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h5 className="text-white font-medium">Site Address</h5>
                  <p className="text-gray-400 text-sm">Survey No. 45/A, Warangal Highway, Narapally</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h5 className="text-white font-medium">Email</h5>
                  <p className="text-gray-400 text-sm">sales@hiwanirvara.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Form */}
        <div className="md:w-3/5 p-10 bg-white/5 relative">
          <h3 className="text-xl text-gold font-serif mb-2">Register Interest</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
              className="block w-full px-0 py-3 text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-gold transition-colors"
            />
            <input 
              type="tel" 
              placeholder="Phone Number" 
              required 
              className="block w-full px-0 py-3 text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-gold transition-colors"
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              required 
              className="block w-full px-0 py-3 text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-gold transition-colors"
            />
            <button 
              type="submit" 
              className="w-full bg-gold hover:bg-[#aa771c] text-black font-bold uppercase py-3 mt-4 transition transform hover:scale-105"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;