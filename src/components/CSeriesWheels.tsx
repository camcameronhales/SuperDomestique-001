import React from 'react';
import { ArrowLeft, Cog } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CSeriesWheels: React.FC = () => {
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
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20C%20SERIES/c3_1_compressed.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgQyBTRVJJRVMvYzNfMV9jb21wcmVzc2VkLndlYnAiLCJpYXQiOjE3NDc0MzQ5ODgsImV4cCI6MjAzMTI1ODk4OH0.OvT2KwWFvUBpTp9auHbXJZCDIhpO60UBOGfLjp4Vqf0',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20C%20SERIES/c3_2_compressed.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgQyBTRVJJRVMvYzNfMl9jb21wcmVzc2VkLndlYnAiLCJpYXQiOjE3NDc0MzQ3NzUsImV4cCI6MjAzMTI1ODc3NX0.HJy05vIjfp3Ypqm1fz5pwbo8GroM5sp9KTcU6FaY6Us',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20C%20SERIES/c3_3_compressed.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgQyBTRVJJRVMvYzNfM19jb21wcmVzc2VkLndlYnAiLCJpYXQiOjE3NDc0MzUwMTcsImV4cCI6MjAzMTI1OTAxN30.ImKiKvjBkgW4DiNDX1RTBmKhnSoC324bno59tzTlwWo',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20C%20SERIES/c3_4_compressed.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgQyBTRVJJRVMvYzNfNF9jb21wcmVzc2VkLndlYnAiLCJpYXQiOjE3NDc0MzUwMzcsImV4cCI6MjAzMTI1OTAzN30.qQ3pS55JSB0zv6Pb1khQEWSwCemjEIzYKGI6Wl2vSsc',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20C%20SERIES/c3_5_compressed.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgQyBTRVJJRVMvYzNfNV9jb21wcmVzc2VkLndlYnAiLCJpYXQiOjE3NDc0MzUwNTQsImV4cCI6MjAzMTI1OTA1NH0.KApF8JqE2YpmfFREjy8ecSByvaP1e80APKd3qRHN7YY',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20C%20SERIES/c3_6_compressed.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgQyBTRVJJRVMvYzNfNl9jb21wcmVzc2VkLndlYnAiLCJpYXQiOjE3NDc0MzUwNzQsImV4cCI6MjAzMTI1OTA3NH0.z3laMd60qU3W7frfyUQQccbAxB78vvQ3QPQSFkmBIb4'
  ];

  const specs = [
    'Tubeless-Ready Hooked Wheelset',
    'UCI Approved',
    'Incredible Lateral Stiffness',
    'Built with Lightweight Rachet System Hubset',
    'Aerodynamic Bladed Alpina Ultralite Aero Spokes',
    'Robust design: built-to-last',
    'Easily serviceable',
    'Disc Brake & Center Lock'
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
          <h1 className="text-3xl font-light text-brand-gold mb-12 text-center">FARSPORTS C SERIES</h1>
          
          <div className="bg-brand-blue bg-opacity-90 border border-brand-gold p-8 group hover:bg-opacity-100 transition-all duration-300">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {images.map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-white"></div>
                  <img 
                    src={image}
                    alt={`C Series - Image ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-blue bg-opacity-30 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-brand-gold text-2xl">Entry Level Performance</h3>
                <span className="text-brand-gold text-xl">$1,400</span>
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

export default CSeriesWheels;