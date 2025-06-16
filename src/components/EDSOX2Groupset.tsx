import React from 'react';
import { ArrowLeft, Cog } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EDSOX2Groupset: React.FC = () => {
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
    id: 'wheeltop-eds-ox2',
    name: 'WHEELTOP EDS OX2.0 - Mountain Bike',
    description: 'High-performance wireless electronic shifting system optimized for mountain biking, offering precise gear changes in demanding conditions.',
    price: 700.00,
    features: [
      'Wireless 1x 3-14 speed compatibility',
      'Gravel-specific gearing options',
      '75mm cage for 10-46T',
      '93mm cage for 10-52T',
      'Extended battery life',
      'Bluetooth connectivity',
      'Impact-resistant design',
      'All-weather performance',
      'Quick-response shifting',
      'Customizable shift points'
    ],
    specs: [
      'Battery Life: Up to 300 hours',
      'Weight: 380g (rear derailleur)',
      'Charging Time: 2.5 hours',
      'Waterproof Rating: IPX7',
      'Bluetooth Version: 5.0',
      'Maximum Cassette: 10-52T',
      'Minimum Cassette: 10-42T',
      'Chain Compatibility: 11/12-speed'
    ],
    images: [
      'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/COMPONENTS/GROUPSETS/OX/EDS_OX2.0.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NPTVBPTkVOVFMvR1JPVVBTRVRTL09YL0VEU19PWDIuMC53ZWJwIiwiaWF0IjoxNzQ3NDYxMjY4LCJleHAiOjIwMzEyODUyNjh9.snl6_py1nmxNRJ2wH73op_AZJ9eN1VwXUBV9DcJKz40',
      'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/COMPONENTS/GROUPSETS/OX/Frame_48.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NPTVBPTkVOVFMvR1JPVVBTRVRTL09YL0ZyYW1lXzQ4LndlYnAiLCJpYXQiOjE3NDc0NjEyOTUsImV4cCI6MjAzMTI4NTI5NX0.eFHXFvpsWnkfvOkRx6u2R3t3efSLYoTWtIEndgZx_DE',
      'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/COMPONENTS/GROUPSETS/OX/OX2.0-93mm-image_3.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NPTVBPTkVOVFMvR1JPVVBTRVRTL09YL09YMi4wLTkzbW0taW1hZ2VfMy53ZWJwIiwiaWF0IjoxNzQ3NDYxMzE5LCJleHAiOjIwMzEyODUzMTl9.Swx_zbF0CBPw7pyfN6tKxU9SEypM9UP7gFQyDMjtgRA'
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

export default EDSOX2Groupset;