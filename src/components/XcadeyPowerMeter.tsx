import React from 'react';
import { ArrowLeft, Cog } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const XcadeyPowerMeter: React.FC = () => {
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
    id: 'xcadey-power-meter',
    name: 'Xcadey Power Meter',
    description: 'Super light weight and accurate spider based power meter',
    price: 400.00,
    specs: [
      'Gen2',
      'Accuracy: +/- 1.0%',
      'Power Range: 0-2500 Watts',
      'Cadence Range: 30-220 RPM',
      'Battery Life: 150 hours',
      'Wireless: ANT+, Bluetooth 4.0',
      'Waterproof: IP67',
      'Weight: 110g (Easton Road)',
      'Data: Power, Cadence, Balance',
      'APP Support: XCADEY APP'
    ],
    roadOptions: [
      {
        title: 'SRAM 3-Bolt 110BCD',
        compatibility: 'SRAM Rival 1, Rival 22, Force 1, Force 22, S-900; Praxis Alba, Zayante',
        weight: '106g'
      },
      {
        title: 'SRAM 8-Bolt 107BCD',
        compatibility: 'SRAM Quarq, Force AXS, Red AXS, Red 22',
        weight: '102g'
      },
      {
        title: 'Easton 110BCD',
        compatibility: 'Easton EC90, ELILEE XXE, Cybrei',
        weight: 'Approximately 110g'
      },
      {
        title: 'Praxis Road',
        compatibility: 'Praxis Alba, Zayante cranksets',
        weight: 'Approximately 110g'
      },
      {
        title: 'Cannondale Road',
        compatibility: 'Cannondale Hollowgram cranksets',
        weight: 'Approximately 110g'
      }
    ],
    mtbOptions: [
      {
        title: 'SRAM 3-Bolt 104BCD',
        compatibility: 'SRAM NX, GX, SX, X1, X01, XX1; Truvativ Descendant, Stylo; Praxis Cadet, Lyft',
        chainline: 'Designed for Boost; adjustable to standard with a 3mm spacer',
        weight: '90g'
      },
      {
        title: 'SRAM 8-Bolt 104BCD',
        compatibility: 'SRAM XX Eagle, X0 Eagle, GX Eagle, XX1, Quarq',
        chainline: 'Designed for Boost; adjustable to standard with a 3mm spacer',
        weight: '90g'
      },
      {
        title: 'Shimano MTB 104BCD',
        compatibility: 'Shimano Deore M6100, SLX M7100, XT M8100, XTR M9100',
        chainline: 'Designed for Boost; adjustable to standard with a 3mm spacer',
        weight: '90g'
      },
      {
        title: 'Race Face MTB',
        compatibility: 'Race Face Cinch system cranksets',
        weight: 'Approximately 90g'
      },
      {
        title: 'E*Thirteen MTB',
        compatibility: 'E*Thirteen cranksets',
        weight: 'Approximately 90g'
      }
    ],
    images: [
      'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CRANKS/XCADEY_PM.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NSQU5LUy9YQ0FERVlfUE0ud2VicCIsImlhdCI6MTc0NzQ2MzUwMCwiZXhwIjoyMDMxMjg3NTAwfQ.hB6XNwffyBxpPXUg3rwUZfLyuuRQ3cayZCebr-knmmw'
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
            
            <div className="space-y-8">
              <div className="flex justify-between items-start">
                <h3 className="text-brand-gold text-2xl">{product.name}</h3>
                <span className="text-brand-gold text-xl">${product.price.toLocaleString()}</span>
              </div>
              
              <p className="text-gray-300">{product.description}</p>
              
              <div className="space-y-4">
                <h4 className="text-brand-gold text-xl">Specifications:</h4>
                <ul className="space-y-2">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="text-gray-300 flex items-center">
                      <span className="text-brand-gold mr-2">•</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="text-brand-gold text-xl">Road & Gravel Options:</h4>
                <div className="grid gap-6">
                  {product.roadOptions.map((option, index) => (
                    <div key={index} className="border border-gray-700 p-4 space-y-2">
                      <h5 className="text-brand-gold">{option.title}</h5>
                      <p className="text-gray-300">Compatibility: {option.compatibility}</p>
                      <p className="text-gray-300">Weight: {option.weight}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-brand-gold text-xl">Mountain Bike (MTB) Options:</h4>
                <div className="grid gap-6">
                  {product.mtbOptions.map((option, index) => (
                    <div key={index} className="border border-gray-700 p-4 space-y-2">
                      <h5 className="text-brand-gold">{option.title}</h5>
                      <p className="text-gray-300">Compatibility: {option.compatibility}</p>
                      {option.chainline && (
                        <p className="text-gray-300">Chainline: {option.chainline}</p>
                      )}
                      <p className="text-gray-300">Weight: {option.weight}</p>
                    </div>
                  ))}
                </div>
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

export default XcadeyPowerMeter;