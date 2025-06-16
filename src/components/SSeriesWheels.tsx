import React from 'react';
import { ArrowLeft, Cog } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SSeriesWheels: React.FC = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/shop');
    setTimeout(() => {
      const wheelsetsSection = document.getElementById('wheelsets');
      if (wheelsetsSection) {
        wheelsetsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const images = [
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPOSRTS%20S%20SERIES/S6-1_compressed.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9TUlRTIFMgU0VSSUVTL1M2LTFfY29tcHJlc3NlZC53ZWJwIiwiaWF0IjoxNzQ3NDM2MjcxLCJleHAiOjIwMzEyNjAyNzF9.O-Z4Le3JCqBeEHGyRWiZNb7PUO6BeoWVm6BflW6nO-Q',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPOSRTS%20S%20SERIES/s6-2_compressed.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9TUlRTIFMgU0VSSUVTL3M2LTJfY29tcHJlc3NlZC53ZWJwIiwiaWF0IjoxNzQ3NDM2MDkxLCJleHAiOjIwMzEyNjAwOTF9.sNXcqZbNE42c_wyeRvXTtgThwDsPC1EkOesPDm4OlyQ',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPOSRTS%20S%20SERIES/S6-3_compressed.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9TUlRTIFMgU0VSSUVTL1M2LTNfY29tcHJlc3NlZC53ZWJwIiwiaWF0IjoxNzQ3NDM2MzEzLCJleHAiOjIwMzEyNjAzMTN9.5k9g0-BuUyq2Qb26h60-ZkGvWqAiuVBubG0ujIhCL44',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPOSRTS%20S%20SERIES/S6-4_compressed.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9TUlRTIFMgU0VSSUVTL1M2LTRfY29tcHJlc3NlZC53ZWJwIiwiaWF0IjoxNzQ3NDM2MzMyLCJleHAiOjIwMzEyNjAzMzJ9.f9dwql39fO2pMmOgz8FqWxIe5221BCgsB8MaAw406b8',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPOSRTS%20S%20SERIES/S6-5_compressed.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9TUlRTIFMgU0VSSUVTL1M2LTVfY29tcHJlc3NlZC53ZWJwIiwiaWF0IjoxNzQ3NDM2MzUzLCJleHAiOjIwMzEyNjAzNTN9.1ohCdcYGJ-j2FHLYeouVwBHL04FyQ-CowW7ogMhjtHs',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPOSRTS%20S%20SERIES/S6-6_compressed.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9TUlRTIFMgU0VSSUVTL1M2LTZfY29tcHJlc3NlZC53ZWJwIiwiaWF0IjoxNzQ3NDM2Mzc1LCJleHAiOjIwMzEyNjAzNzV9.7-__ZcX1cu2itSV6YNq8n9Q67U_63WqmlbEkptbj2Qs'
  ];

  const specs = [
    'Equipped with Steel Bearings',
    'FARSPORTS New Bladed T-head 5.0mm Carbon Spokes',
    'FARSPORTS Light Hub with Rachet System',
    'Tubeless-Ready Hook Rim Design',
    'Disc Brake & Center Lock',
    'Incredible Stiffness',
    'Optimized for Max Power Transfer'
  ];

  return (
    <div className="min-h-screen bg-brand-blue flex flex-col">
      <div className="fixed inset-0 z-0">
        <img 
          src="https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/public/super%20domestique/CARBON%20WHEELS/BACKGROUND.webp"
          alt="Carbon wheels background"
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
              <span>Return to Wheelsets</span>
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
          <h1 className="text-3xl font-light text-brand-gold mb-12 text-center">FARSPORTS S SERIES</h1>
          
          <div className="bg-brand-blue bg-opacity-90 border border-brand-gold p-8 group hover:bg-opacity-100 transition-all duration-300">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {images.map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-white"></div>
                  <img 
                    src={image}
                    alt={`S Series - Image ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-blue bg-opacity-30 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-brand-gold text-2xl">Professional Series</h3>
                <span className="text-brand-gold text-xl">$1,800</span>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-brand-gold">Specifications:</h4>
                <ul className="space-y-2">
                  {specs.map((spec, index) => (
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

export default SSeriesWheels;