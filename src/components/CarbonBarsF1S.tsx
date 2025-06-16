import React from 'react';
import { ArrowLeft, Cog } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CarbonBarsF1S: React.FC = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/shop');
    setTimeout(() => {
      const barsSection = document.getElementById('bars');
      if (barsSection) {
        barsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const product = {
    id: 'farsports-f1s',
    name: 'Farsports F1S',
    description: 'Keeping the original shape, the details are upgraded to improve on aesthetics, ergonomics and aerodynamic performance. Cable ports are now upgraded to facilitate for easier cabling of integrated bikes and new mount with an improved 3 bolt locking system is included',
    price: 650.00,
    specs: [
      'Width (C to C Hoods) 360mm, 380mm, 400mm, 420mm',
      'Width (C to C Drops) 380mm, 400mm, 420mm, 440mm',
      'Stem length 80mm, 90mm, 100mm, 110mm, 120mm',
      'Reach: 75mm',
      'Drop: 127mm',
      'Stem angle: -10°',
      'Steerer tube diameter 1-1/8" (with shim), 1-1/4"'
    ],
    image: 'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CARBON%20BARS/farsportsf1s.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NBUkJPTiBCQVJTL2ZhcnNwb3J0c2Yxcy53ZWJwIiwiaWF0IjoxNzQ2NzYwNzM4LCJleHAiOjIwNjIxMjA3Mzh9.BZK07BRe1QIKD0kS1l-8TbMEh1y23uwr_v0m2-mrmYA'
  };

  return (
    <div className="min-h-screen bg-brand-blue flex flex-col">
      <div className="fixed inset-0 z-0">
        <img 
          src="https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CARBON%20BARS/Colnago.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NBUkJPTiBCQVJTL0NvbG5hZ28ud2VicCIsImlhdCI6MTc0Njc1NTMzOCwiZXhwIjoyMDYyMTE1MzM4fQ.HJRxzVd2wnOGmSuFy9GkSBQ5oHrhIj8RhMAnG9Lbvz4"
          alt="Carbon bars background"
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
              <span>Return to Bars</span>
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
          <h1 className="text-3xl font-light text-brand-gold mb-12 text-center">CARBON BARS</h1>
          
          <div className="bg-brand-blue bg-opacity-90 border border-brand-gold p-8 group hover:bg-opacity-100 transition-all duration-300">
            <div className="aspect-video mb-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-white"></div>
              <img 
                src={product.image}
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

export default CarbonBarsF1S;