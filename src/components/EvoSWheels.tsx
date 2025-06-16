import React from 'react';
import { ArrowLeft, Cog } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EvoSWheels: React.FC = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/shop');
    setTimeout(() => {
      const wheelsetSection = document.getElementById('wheelsets');
      if (wheelsetSection) {
        wheelsetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const images = [
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20EVO%20S/EVO_S5-1_compressed.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgRVZPIFMvRVZPX1M1LTFfY29tcHJlc3NlZC53ZWJwIiwiaWF0IjoxNzQ3NDM1NzA2LCJleHAiOjIwMzEyNTk3MDZ9.8Ly0TyoxH4QjFeOEdOcTXPPwBmlq_8GlblAz2p6xBKM',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20EVO%20S/EVO_S5-2_compressed.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgRVZPIFMvRVZPX1M1LTJfY29tcHJlc3NlZC53ZWJwIiwiaWF0IjoxNzQ3NDM1Mzk1LCJleHAiOjIwMzEyNTkzOTV9.2dG2oJ2uUWdQSCpzNRFuEKBx-wGarqH22QQmY4n5RF0',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20EVO%20S/EVO_S5-3_compressed.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgRVZPIFMvRVZPX1M1LTNfY29tcHJlc3NlZC53ZWJwIiwiaWF0IjoxNzQ3NDM1NzI5LCJleHAiOjIwMzEyNTk3Mjl9.HqCnz13H3WyEw8gl3DtffQX9fv2cTaGea3uBCAbCp74',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20EVO%20S/EVO_S5-4_compressed.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgRVZPIFMvRVZPX1M1LTRfY29tcHJlc3NlZC53ZWJwIiwiaWF0IjoxNzQ3NDM1NzQ3LCJleHAiOjIwMzEyNTk3NDd9.fm_ZCgX49gmyxFyPZlLU4qXqoHOtUgCp2Fp4vb_6V98',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20EVO%20S/EVO_S5-5_compressed.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgRVZPIFMvRVZPX1M1LTVfY29tcHJlc3NlZC53ZWJwIiwiaWF0IjoxNzQ3NDM1NzY5LCJleHAiOjIwMzEyNTk3Njl9.PjLZ1LG4NuHbWM8tBa4p43oLlHHX12k1qMODhgPOCvc',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20EVO%20S/EVO_S5-6_compressed.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgRVZPIFMvRVZPX1M1LTZfY29tcHJlc3NlZC53ZWJwIiwiaWF0IjoxNzQ3NDM1ODA2LCJleHAiOjIwMzEyNTk4MDZ9.HOxE7IURRpFRPcjN0X42YndcI2QQpcDFg76d7tQYWQI'
  ];

  const specs = [
    'Equipped with CeramicSpeed Bearing',
    'FARSPORTS New Bladed T-head 5.0mm Carbon Spokes',
    'FARSPORTS Light Hub with Rachet System',
    'Tubeless-Ready Hook Rim Design',
    'Disc Brake & Center Lock',
    'Incredible Stiffness',
    'Optimized for Max Power Transfer',
    'Lightweight',
    'Built to race'
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
          <h1 className="text-3xl font-light text-brand-gold mb-12 text-center">FARSPORTS EVO S SERIES</h1>
          
          <div className="bg-brand-blue bg-opacity-90 border border-brand-gold p-8 group hover:bg-opacity-100 transition-all duration-300">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {images.map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-white"></div>
                  <img 
                    src={image}
                    alt={`EVO S Series - Image ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-blue bg-opacity-30 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-brand-gold text-2xl">FARSPORTS Flagship Model</h3>
                <span className="text-brand-gold text-xl">$2,800</span>
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

export default EvoSWheels;