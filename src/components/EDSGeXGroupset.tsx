import React from 'react';
import { ArrowLeft, Cog } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EDSGeXGroupset: React.FC = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/shop');
    setTimeout(() => {
      const groupsetsSection = document.getElementById('groupsets');
      if (groupsetsSection) {
        groupsetsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const product = {
    id: 'wheeltop-eds-gex',
    name: 'Wheeltop EDS GeX - Gravel Groupset',
    description: 'Purpose-built electronic shifting system designed for the demands of gravel riding and adventure cycling.',
    price: 800.00,
    features: [
      'Wireless 1x 3-14 speed compatibility',
      'Gravel-specific gearing options',
      '75mm cage for 10-46T',
      '93mm cage for 10-52T',
      'Extended battery life',
      'Bluetooth connectivity',
      'Rugged construction',
      'Sealed bearings',
      'Mud-clearing design',
      'Multiple riding modes'
    ],
    specs: [
      'Battery Life: Up to 350 hours',
      'Weight: 350g (rear derailleur)',
      'Charging Time: 2.5 hours',
      'Waterproof Rating: IPX7',
      'Bluetooth Version: 5.0',
      'Maximum Cassette: 10-52T',
      'Minimum Cassette: 10-36T',
      'Chain Compatibility: 11/12-speed'
    ],
    images: [
      'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/COMPONENTS/GROUPSETS/GX/EDS_GX.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NPTVBPTkVOVFMvR1JPVVBTRVRTL0dYL0VEU19HWC53ZWJwIiwiaWF0IjoxNzQ3NDYwNTA2LCJleHAiOjIwMzEyODQ1MDZ9.qsHdKByDpxCTQyHRRM2t_jONrmW0ptD6TfRCAR1L8bU',
      'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/COMPONENTS/GROUPSETS/GX/WheelTop_EDS_GeX_Wireless_Groupset.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NPTVBPTkVOVFMvR1JPVVBTRVRTL0dYL1doZWVsVG9wX0VEU19HZVhfV2lyZWxlc3NfR3JvdXBzZXQud2VicCIsImlhdCI6MTc0NzQ2MDI5NiwiZXhwIjoyMDMxMjg0Mjk2fQ.B5tlWBT9ZZ9NDLLas_NT0lIhWv9_kbZzToJ7zySfLAA',
      'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/COMPONENTS/GROUPSETS/GX/EDS_GX_SHIFTERS.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NPTVBPTkVOVFMvR1JPVVBTRVRTL0dYL0VEU19HWF9TSElGVEVSUy53ZWJwIiwiaWF0IjoxNzQ3NDYwMzIxLCJleHAiOjIwMzEyODQzMjF9.aqclxR9A8AJKBL-HmjdYX1ts52ybIkERlmEUp1MN57c',
      'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/COMPONENTS/GROUPSETS/GX/EDS_CALLIPER.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NPTVBPTkVOVFMvR1JPVVBTRVRTL0dYL0VEU19DQUxMSVBFUi53ZWJwIiwiaWF0IjoxNzQ3NDYwMzQ2LCJleHAiOjIwMzEyODQzNDZ9.AqSmA43Kbnhc6BRlvouBsEBtSQyXDif6X9N-dDmZqzg',
      'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/COMPONENTS/GROUPSETS/GX/GX_RD.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NPTVBPTkVOVFMvR1JPVVBTRVRTL0dYL0dYX1JELndlYnAiLCJpYXQiOjE3NDc0NjAzNjcsImV4cCI6MjAzMTI4NDM2N30._w3EN4E-Rd-0APsgK9FOh0fvZXYOUnKed0EpzPwh9lQ'
    ]
  };

  return (
    <div className="min-h-screen bg-brand-blue flex flex-col">
      <div className="fixed inset-0 z-0">
        <img 
          src="https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/COMPONENTS/GROUPSETS/1a.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NPTVBPTkVOVFMvR1JPVVBTRVRTLzFhLmpwZyIsImlhdCI6MTc0Njc1NDg5NywiZXhwIjoyMDYyMTE0ODk3fQ.nQx28-Eg3wemDP0WDqJSUUbmwj46BFCJptbC8V7doFM"
          alt="Electronic groupset background"
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
              <span>Return to Groupsets</span>
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
          <h1 className="text-3xl font-light text-brand-gold mb-12 text-center">ELECTRONIC GROUPSETS</h1>
          
          <div className="bg-brand-blue bg-opacity-90 border border-brand-gold p-8 group hover:bg-opacity-100 transition-all duration-300">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-white"></div>
                  <img 
                    src={image}
                    alt={`${product.name} - Image ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-blue bg-opacity-30 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-brand-gold text-2xl">{product.name}</h3>
                <span className="text-brand-gold text-xl">${product.price.toLocaleString()}</span>
              </div>
              
              <p className="text-gray-300">{product.description}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h4 className="text-brand-gold">Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-300 flex items-center">
                        <span className="text-brand-gold mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-brand-gold">Specifications:</h4>
                  <ul className="space-y-2">
                    {product.specs.map((spec, index) => (
                      <li key={index} className="text-gray-300 flex items-center">
                        <span className="text-brand-gold mr-2">•</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
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

export default EDSGeXGroupset;