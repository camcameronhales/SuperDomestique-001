import React from 'react';
import { ArrowLeft, Cog } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ShopPage: React.FC = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const categories = {
    bars: [
      {
        title: "Farsports F1X",
        description: "Compatible with most modern internally routed frames (F1s Spacer Required), Proven aerodynamic performance, 50g lighter than F1s bars, updated new look with LAVA finish & updated routing. Comes with Computer Mount (Compatible with Garmin/Wahoo)",
        price: 850,
        image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CARBON%20BARS/farsports-f1x-integrated-handlebar-stem.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NBUkJPTiBCQVJTL2ZhcnNwb3J0cy1mMXgtaW50ZWdyYXRlZC1oYW5kbGViYXItc3RlbS53ZWJwIiwiaWF0IjoxNzQ2NzYwNTUyLCJleHAiOjIwNjIxMjA1NTJ9.W9yVtmQnvHreM6O_7IDWYmvqffg57MqjBgJR_ChGfvU",
        path: '/shop/carbon-bars/f1x'
      },
      {
        title: "Farsports F1S",
        description: "Keeping the original shape, the details are upgraded to improve on aesthetics, ergonomics and aerodynamic performance. Cable ports are now upgraded to facilitate for easier cabling of integrated bikes and new mount with an improved 3 bolt locking system is included",
        price: 650,
        image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CARBON%20BARS/farsportsf1s.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NBUkJPTiBCQVJTL2ZhcnNwb3J0c2Yxcy53ZWJwIiwiaWF0IjoxNzQ2NzYwNzM4LCJleHAiOjIwNjIxMjA3Mzh9.BZK07BRe1QIKD0kS1l-8TbMEh1y23uwr_v0m2-mrmYA",
        path: '/shop/carbon-bars/f1s'
      }
    ],
    cranks: [
      {
        title: "Praxis Doon",
        description: "Pro level carbon road crank. The Doon is the ultimate marriage of lightness, stiffness and versatility.",
        price: 750,
        image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CRANKS/Praxis-Works-DOON-Carbon-Road-Crankset-3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NSQU5LUy9QcmF4aXMtV29ya3MtRE9PTi1DYXJib24tUm9hZC1DcmFua3NldC0zLmpwZyIsImlhdCI6MTc0NzQ2Mjc1OCwiZXhwIjoyMDMxMjg2NzU4fQ.HATyX3vMLkhnmEnXTtbT-xPnjxC_4yzJIxE8lhXNEjc",
        path: '/shop/cranks'
      },
      {
        title: "Xcadey Power Meter",
        description: "Super light weight and accurate spider based power meter",
        price: 400,
        image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CRANKS/XCADEY_PM.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NSQU5LUy9YQ0FERVlfUE0ud2VicCIsImlhdCI6MTc0NzQ2MzUwMCwiZXhwIjoyMDMxMjg3NTAwfQ.hB6XNwffyBxpPXUg3rwUZfLyuuRQ3cayZCebr-knmmw",
        path: '/shop/cranks/xcadey'
      }
    ],
    wheelsets: [
      {
        title: "Farsports EVO S Series",
        description: "FARSPORTS Flagship Model",
        price: 2800,
        image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20EVO%20S/EVO_S5-2_compressed.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgRVZPIFMvRVZPX1M1LTJfY29tcHJlc3NlZC53ZWJwIiwiaWF0IjoxNzQ3NDM1Mzk1LCJleHAiOjIwMzEyNTkzOTV9.2dG2oJ2uUWdQSCpzNRFuEKBx-wGarqH22QQmY4n5RF0",
        path: '/shop/carbon-wheels/evo-s'
      },
      {
        title: "Farsports S Series",
        description: "Professional Series",
        price: 1800,
        image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPOSRTS%20S%20SERIES/s6-2_compressed.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9TUlRTIFMgU0VSSUVTL3M2LTJfY29tcHJlc3NlZC53ZWJwIiwiaWF0IjoxNzQ3NDM2MDkxLCJleHAiOjIwMzEyNjAwOTF9.sNXcqZbNE42c_wyeRvXTtgThwDsPC1EkOesPDm4OlyQ",
        path: '/shop/carbon-wheels/s-series'
      },
      {
        title: "Farsports C Series",
        description: "Entry Level Performance",
        price: 1400,
        image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20C%20SERIES/c3_2_compressed.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgQyBTRVJJRVMvYzNfMl9jb21wcmVzc2VkLndlYnAiLCJpYXQiOjE3NDc0MzQ3NzUsImV4cCI6MjAzMTI1ODc3NX0.HJy05vIjfp3Ypqm1fz5pwbo8GroM5sp9KTcU6FaY6Us",
        path: '/shop/carbon-wheels/c-series'
      }
    ],
    groupsets: [
      {
        title: "Wheeltop EDS TX - Road Groupset",
        description: "Advanced wireless electronic shifting system offering exceptional versatility and performance at an accessible price point.",
        price: 1000,
        image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/COMPONENTS/GROUPSETS/TX/EDS_TX_RD.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NPTVBPTkVOVFMvR1JPVVBTRVRTL1RYL0VEU19UWF9SRC53ZWJwIiwiaWF0IjoxNzQ3NDQ5NjI3LCJleHAiOjIwMzEyNzM2Mjd9.EY1VawzdKgCIG69LHTB8YvF-qHoLSykuPksAXKCirek",
        path: '/shop/electronic-groupsets/eds-tx'
      },
      {
        title: "Wheeltop EDS GeX - Gravel Groupset",
        description: "Purpose-built electronic shifting system designed for the demands of gravel riding and adventure cycling.",
        price: 800,
        image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/COMPONENTS/GROUPSETS/GX/GX_RD.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NPTVBPTkVOVFMvR1JPVVBTRVRTL0dYL0dYX1JELndlYnAiLCJpYXQiOjE3NDc0NjAzNjcsImV4cCI6MjAzMTI4NDM2N30._w3EN4E-Rd-0APsgK9FOh0fvZXYOUnKed0EpzPwh9lQ",
        path: '/shop/electronic-groupsets/eds-gex'
      },
      {
        title: "WHEELTOP EDS OX2.0 - Mountain Bike",
        description: "High-performance wireless electronic shifting system optimized for mountain biking, offering precise gear changes in demanding conditions.",
        price: 700,
        image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/COMPONENTS/GROUPSETS/OX/EDS_RD.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NPTVBPTkVOVFMvR1JPVVBTRVRTL09YL0VEU19SRC53ZWJwIiwiaWF0IjoxNzQ3NDYxMDgxLCJleHAiOjIwMzEyODUwODF9.ATSdEzFLTR6VYmGHcnsUO5IMuDJ4FGc5WM7EM6-DwsE",
        path: '/shop/electronic-groupsets/eds-ox2'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-brand-blue flex flex-col">
      <div className="fixed inset-0 z-0">
        <img 
          src="https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/SHOP/Znx8yJbWFbowe5T6_Z8B_0298.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1NIT1AvWm54OHlKYldGYm93ZTVUNl9aOEJfMDI5OC53ZWJwIiwiaWF0IjoxNzQ2NTY5ODE5LCJleHAiOjIwNjE5Mjk4MTl9._JleOaGrvwtjzbwuY82LQuIJI2lYnMt8brb2taZ3W1I"
          alt="Shop background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-blue bg-opacity-90"></div>
      </div>
      
      <div className="fixed w-full z-50 top-0 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-24 items-center justify-between">
            <button 
              onClick={handleReturnHome}
              className="flex items-center space-x-2 text-brand-gold hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Return to Home</span>
            </button>
            <div className="flex items-center space-x-2">
              <Cog className="w-6 h-6 text-brand-gold rotate-45" />
              <div className="text-xl font-light tracking-wider text-brand-gold">SUPER DOMESTIQUE</div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-32 pb-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-light text-brand-gold mb-12 text-center">PREMIUM COMPONENTS</h1>
          
          {Object.entries(categories).map(([title, items]) => (
            <div id={title.toLowerCase()} key={title} className="mb-16 scroll-mt-32">
              <h2 className="text-2xl font-light text-brand-gold mb-8">
                {title.toUpperCase().replace('_', ' & ')}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item) => (
                  <div  
                    key={item.title}
                    onClick={() => handleProductClick(item.path)}
                    className="bg-brand-blue bg-opacity-90 border border-brand-gold p-6 group hover:bg-opacity-100 transition-all duration-300 cursor-pointer"
                  >
                    {item.image && (
                      <div className="aspect-square mb-4 overflow-hidden relative">
                        <div className="absolute inset-0 bg-white"></div>
                        <img 
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-brand-blue bg-opacity-30 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
                      </div>
                    )}
                    <h3 className="text-brand-gold text-xl mb-3">{item.title}</h3>
                    {item.price && (
                      <p className="text-brand-gold text-lg mb-3">${item.price.toLocaleString()}</p>
                    )}
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;