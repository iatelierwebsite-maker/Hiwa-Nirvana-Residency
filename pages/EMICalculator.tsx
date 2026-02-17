import React, { useState, useEffect } from 'react';
import { Bank } from '../types';

const banks: Bank[] = [
  { id: 'sbi', name: 'State Bank of India', homeLoanRate: 8.4, personalLoanRate: 10.5, color: 'bg-blue-600' },
  { id: 'hdfc', name: 'HDFC Bank', homeLoanRate: 8.5, personalLoanRate: 10.8, color: 'bg-blue-800' },
  { id: 'icici', name: 'ICICI Bank', homeLoanRate: 8.6, personalLoanRate: 11.0, color: 'bg-orange-600' },
  { id: 'axis', name: 'Axis Bank', homeLoanRate: 8.7, personalLoanRate: 11.2, color: 'bg-red-600' }
];

const EMICalculator: React.FC = () => {
  const [propertyPrice, setPropertyPrice] = useState(25000000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTenure, setLoanTenure] = useState(15);
  const [interestRate, setInterestRate] = useState(8.5); // Default matches HDFC/Approx
  const [docFees, setDocFees] = useState(50000);
  const [selectedBankId, setSelectedBankId] = useState('sbi');
  const [results, setResults] = useState({
    loanAmount: 0,
    downPayment: 0,
    emi: 0,
    totalInterest: 0,
    totalPayment: 0,
    totalDocFees: 0
  });

  const formatNumber = (num: number) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  useEffect(() => {
    // Select default bank on load
    const defaultBank = banks.find(b => b.id === 'sbi');
    if(defaultBank && selectedBankId === 'sbi' && interestRate === 8.5) {
        setInterestRate(defaultBank.homeLoanRate);
    }
  }, []);

  useEffect(() => {
    const downPayment = (propertyPrice * downPaymentPercent) / 100;
    const loanAmount = propertyPrice - downPayment;
    const monthlyInterestRate = interestRate / 12 / 100;
    const months = loanTenure * 12;
    
    const emi = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months) / 
               (Math.pow(1 + monthlyInterestRate, months) - 1);
    
    const totalPayment = emi * months;
    const totalInterest = totalPayment - loanAmount;

    setResults({
      loanAmount,
      downPayment,
      emi: isNaN(emi) ? 0 : emi,
      totalInterest,
      totalPayment,
      totalDocFees: docFees
    });
  }, [propertyPrice, downPaymentPercent, loanTenure, interestRate, docFees]);

  const handleBankSelect = (bank: Bank) => {
    setSelectedBankId(bank.id);
    setInterestRate(bank.homeLoanRate);
  };

  return (
    <div className="container mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-12">
        <span className="text-gold uppercase tracking-widest text-sm">Financial Planning</span>
        <h2 className="text-4xl font-serif mt-2 text-white">EMI Calculator</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">Calculate your monthly payments including down payment, interest rates, and documentation fees.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="glass-panel p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-300 mb-2">Property Price (₹)</label>
                <input 
                  type="number" 
                  value={propertyPrice} 
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-gold outline-none" 
                  step="100000"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Down Payment ({downPaymentPercent}%)</label>
                <input 
                  type="range" 
                  min="10" 
                  max="90" 
                  value={downPaymentPercent} 
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" 
                />
                 <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-400">10%</span>
                    <span className="text-gold">{downPaymentPercent}%</span>
                    <span className="text-xs text-gray-400">90%</span>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
               <div>
                <label className="block text-gray-300 mb-2">Tenure ({loanTenure} Years)</label>
                <input 
                  type="range" 
                  min="5" 
                  max="30"
                  step="5" 
                  value={loanTenure} 
                  onChange={(e) => setLoanTenure(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" 
                />
                 <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-400">5Y</span>
                    <span className="text-gold">{loanTenure}Y</span>
                    <span className="text-xs text-gray-400">30Y</span>
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Interest Rate (% p.a.)</label>
                 <input 
                  type="number" 
                  step="0.1"
                  value={interestRate} 
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-gold outline-none" 
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                 <div>
                    <label className="block text-gray-300 mb-2">Documentation Fees (₹)</label>
                    <input 
                      type="number" 
                      value={docFees} 
                      onChange={(e) => setDocFees(Number(e.target.value))}
                      className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-gold outline-none" 
                    />
                 </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-2xl font-serif text-white mb-6">Select Your Bank</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {banks.map(bank => (
                <div 
                  key={bank.id} 
                  onClick={() => handleBankSelect(bank)}
                  className={`glass-panel p-4 rounded-xl text-center cursor-pointer transition-all ${selectedBankId === bank.id ? 'border-gold bg-gold/10' : ''}`}
                >
                  <div className={`w-10 h-10 rounded-full ${bank.color} flex items-center justify-center mx-auto mb-2`}>
                    <i className="fas fa-university text-white"></i>
                  </div>
                  <h4 className="text-sm font-medium text-white">{bank.name}</h4>
                  <p className="text-xs text-gray-400 mt-1">Home: {bank.homeLoanRate}%</p>
                </div>
              ))}
            </div>
             <div className="glass-panel p-6 rounded-2xl mt-6">
                <h3 className="text-xl font-serif text-white mb-4">Current Bank Rates</h3>
                <div className="space-y-2">
                    {banks.map(bank => (
                        <div key={bank.id} className="flex justify-between text-sm">
                            <span className="text-gray-300">{bank.name}</span>
                            <span className="text-gold">{bank.homeLoanRate}% - {bank.personalLoanRate}%</span>
                        </div>
                    ))}
                </div>
             </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="glass-panel p-8 rounded-2xl bg-gradient-to-br from-gold/10 to-slate-900 border border-gold/30">
            <h3 className="text-2xl font-serif text-white mb-6">Your EMI Breakdown</h3>
             <div className="space-y-4">
               <div className="flex justify-between"><span className="text-gray-300">Loan Amount:</span><span className="text-white font-bold">₹{formatNumber(Math.round(results.loanAmount))}</span></div>
               <div className="flex justify-between"><span className="text-gray-300">Down Payment:</span><span className="text-white font-bold">₹{formatNumber(Math.round(results.downPayment))}</span></div>
               <div className="flex justify-between"><span className="text-gray-300">Monthly EMI:</span><span className="text-2xl text-gold font-bold">₹{formatNumber(Math.round(results.emi))}</span></div>
               <div className="flex justify-between"><span className="text-gray-300">Total Interest:</span><span className="text-white font-bold">₹{formatNumber(Math.round(results.totalInterest))}</span></div>
               <div className="flex justify-between"><span className="text-gray-300">Total Payment:</span><span className="text-white font-bold">₹{formatNumber(Math.round(results.totalPayment))}</span></div>
               <div className="flex justify-between border-t border-white/10 pt-4"><span className="text-gray-300">Doc Fees:</span><span className="text-white font-bold">₹{formatNumber(results.totalDocFees)}</span></div>
             </div>
             
             <div className="mt-8 space-y-4">
                <a href={`https://wa.me/919876543210?text=Hi, I'm interested in loan options for Hiwa Nirvara. My estimated EMI is ₹${Math.round(results.emi)}`} target="_blank" rel="noreferrer" className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-medium transition">
                   <i className="fab fa-whatsapp mr-2"></i> Chat on WhatsApp
                </a>
                <a href="tel:+919876543210" className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-medium transition">
                    <i className="fas fa-phone mr-2"></i> Call Now
                </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;