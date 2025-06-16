import React from 'react';
import { ArrowLeft, Cog } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EDSTXGroupset: React.FC = () => {
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
    id: 'wheeltop-eds-tx',
    name: 'Wheeltop EDS TX - Road Groupset',
    description: 'Advanced wireless electronic shifting system offering exceptional versatility and performance at an accessible price point.',
    price: 1000.00,
    features: [
      'Wireless 3-14-speed shifting',
      'Enhanced battery life',
      'Bluetooth connectivity',
      'Customizable shifting patterns',
      'Universal compatibility',
      'Lightweight design',
      'Easy installation',
      'Mobile app support',
      'Firmware updates',
      'Multiple shift modes'
    ],
    specs: [
      'Battery Life: Up to 400 hours',
      'Weight: 320g (rear derailleur), 150g (front derailleur)',
      'Charging Time: 2 hours',
      'Waterproof Rating: IPX7',
      'Bluetooth Version: 5.0',
      'Maximum Cassette Size: 11-36T',
      'Minimum Cassette Size: 11-25T',
      'Chain Compatibility: 11/12/13/14-speed'
    ],
    images: [
      'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/COMPONENTS/GROUPSETS/TX/EDS_TX.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NPTVBPTkVOVFMvR1JPVVBTRVRTL1RYL0VEU19UWC53ZWJwIiwiaWF0IjoxNzQ3NDUwNjc2LCJleHAiOjIwMzEyNzQ2NzZ9.mQ55cdzFW47mjmNhkJl6P5DLXYApYgapus6ojWzQTpg',
      'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/COMPONENTS/GROUPSETS/TX/EDS_TX_GROUP.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NPTVBPTkVOVFMvR1JPVVBTRVRTL1RYL0VEU19UWF9HUk9VUC53ZWJwIiwiaWF0IjoxNzQ3NDUwNzI2LCJleHAiOjIwMzEyNzQ3MjZ9.155d5259lZ_TziBoZnieLABLdmgiRs9y2hQhTLyZy3A',
      'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/COMPONENTS/GROUPSETS/TX/EDS_TX_SHIFT.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NPTVBPTkVOVFMvR1JPVVBTRVRTL1RYL0VEU19UWF9TSElGVC53ZWJwIiwiaWF0IjoxNzQ3NDUwNjk5LCJleHAiOjIwMzEyNzQ2OTl9.DFdEFAeLVwdLwqfZ85n8X8HqzPeBGG6ZeXpZ-Ajmiqc',
      'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/COMPONENTS/GROUPSETS/TX/EDS_TX_CALIPER.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NPTVBPTkVOVFMvR1JPVVBTRVRTL1RYL0VEU19UWF9DQUxJUEVSLndlYnAiLCJpYXQiOjE3NDc0NTE5MzksImV4cCI6MjAzMTI3NTkzOX0.G96af3duoGvRrzIwon0bFJpel2gmVj7C263f5G9m-Q8',
      'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/COMPONENTS/GROUPSETS/TX/EDS_TX_FD.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NPTVBPTkVOVFMvR1JPVVBTRVRTL1RYL0VEU19UWF9GRC53ZWJwIiwiaWF0IjoxNzQ3NDUwODAwLCJleHAiOjIwMzEyNzQ4MDB9.zS4_vbi8ly9cLQ05fDEjisJU0AXaNlPZCunkamG7wQs',
      'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/COMPONENTS/GROUPSETS/TX/EDS_TX_RD.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NPTVBPTkVOVFMvR1JPVVBTRVRTL1RYL0VEU19UWF9SRC53ZWJwIiwiaWF0IjoxNzQ3NDUwODI1LCJleHAiOjIwMzEyNzQ4MjV9._lKmB-mtzJOsscq6Eki9sTPILS4hoX3AvLGbL1HFGcY'
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

export default EDSTXGroupset;