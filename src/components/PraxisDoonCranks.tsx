import React from 'react';
import { ArrowLeft, Cog } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PraxisDoonCranks: React.FC = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/shop');
    setTimeout(() => {
      const cranksSection = document.getElementById('cranks');
      if (cranksSection) {
        cranksSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const product = {
    id: 'praxis-doon',
    name: 'Praxis Doon Carbon Crankset',
    description: 'Pro level carbon road crank. The Doon is the ultimate marriage of lightness, stiffness and versatility.',
    price: 750.00,
    specs: [
      'Crank Arm Material: Carbon (C.R.A.F.T. process)',
      'Spindle: 30mm alloy M30-THRU (30mm drive/30mm non-drive)',
      'Interface: Praxis 3-bolt direct mount',
      'Chainring Options: LevaTime II X-Rings in 48/32, 50/34, 52/36, and 53/39 combinations',
      'Chainline: 2x: 44.5mm (Note: Not compatible with Shimano GRX front derailleurs), 1x: 45.5mm',
      'Q-Factor: 147mm',
      'Chain Compatibility: 10-, 11-, and 12-speed chains from Shimano, SRAM (including Flattop), and KMC',
      'Crank Arm Lengths: 165mm, 170mm, 172.5mm, 175mm',
      'Weight: 342g (172.5mm armset only)',
      'Weight with Chainrings:',
      '• 542g with 48/32',
      '• 570g with 50/34',
      '• 574g with 52/36',
      '• 602g with 53/39'
    ],
    images: [
      'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CRANKS/Praxis-Works-DOON-Carbon-Road-Crankset-3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NSQU5LUy9QcmF4aXMtV29ya3MtRE9PTi1DYXJib24tUm9hZC1DcmFua3NldC0zLmpwZyIsImlhdCI6MTc0NzQ2Mjc1OCwiZXhwIjoyMDMxMjg2NzU4fQ.HATyX3vMLkhnmEnXTtbT-xPnjxC_4yzJIxE8lhXNEjc'
    ]
  };

  return (
    <div className="min-h-screen bg-brand-blue flex flex-col">
      <div className="fixed inset-0 z-0">
        <img 
          src="https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CRANKS/XCADEY%20CRANKS_1.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NSQU5LUy9YQ0FERVkgQ1JBTktTXzEuanBlZyIsImlhdCI6MTc0NzQ2MzAxNiwiZXhwIjoyMDMxMjg3MDE2fQ.GwSmqYp29wKZsk0Yzq_XWrH2B17jBcqAItRhuULxRxA"
          alt="Cranks background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-blue bg-opacity-90"></div>
      </div>
      
      <div className="fixed w-full z-50 top-0 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-24 items-center justify-between">
            <button 
              onClick={handleReturn}
              className="flex items-center space-x-2 text-brand-gold hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Return to Cranks</span>
            </button>
            <div className="flex items-center space-x-2">
              <Cog className="w-6 h-6 text-brand-gold rotate-45" />
              <div className="text-xl font-light tracking-wider text-brand-gold">SUPER DOMESTIQUE</div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-32 pb-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-light text-brand-gold mb-12 text-center">CRANKS & POWER METERS</h1>
          
          <div className="bg-brand-blue bg-opacity-90 border border-brand-gold p-8 group hover:bg-opacity-100 transition-all duration-300">
            <div className="aspect-video mb-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-white"></div>
              <img 
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-brand-blue bg-opacity-30 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-brand-gold text-2xl">{product.name}</h3>
                <span className="text-brand-gold text-xl">${product.price.toLocaleString()}</span>
              </div>
              
              <p className="text-gray-300">{product.description}</p>
              
              <div className="space-y-2">
                <h4 className="text-brand-gold">Key Specifications:</h4>
                <ul className="space-y-2">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="text-brand-gold mr-2 mt-1.5">•</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4">
                <button 
                  className="w-full px-4 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-blue transition-all duration-300"
                >
                  ENQUIRE NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PraxisDoonCranks;