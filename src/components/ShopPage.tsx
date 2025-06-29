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
        price: 830,
        salePrice: 750,
        image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/public/super%20domestique/CARBON%20BARS/farsports-f1x-integrated-handlebar-stem.webp",
        path: '/shop/carbon-bars/f1x'
      },
      {
        title: "Farsports F1S",
        description: "Keeping the original shape, the details are upgraded to improve on aesthetics, ergonomics and aerodynamic performance. Cable ports are now upgraded to facilitate for easier cabling of integrated bikes and new mount with an improved 3 bolt locking system is included",
        price: 640,
        salePrice: 580,
        image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/public/super%20domestique/CARBON%20BARS/farsportsf1s.webp",
        path: '/shop/carbon-bars/f1s'
      }
    ],
    cranks: [
      {
        title: "Praxis Doon",
        description: "Pro level carbon road crank. The Doon is the ultimate marriage of lightness, stiffness and versatility.",
        price: 750,
        salePrice: 680,
        image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/public/super%20domestique/CRANKS/Praxis-Works-DOON-Carbon-Road-Crankset-3.jpg",
        path: '/shop/cranks'
      },
      {
        title: "Xcadey Power Meter",
        description: "Super light weight and accurate spider based power meter",
        price: 499,
        salePrice: 450,
        image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/public/super%20domestique/CRANKS/XCADEY_PM.webp",
        path: '/shop/cranks/xcadey'
      }
    ],
    wheelsets: [
      {
        title: "Farsports EVO S Series",
        description: "FARSPORTS Flagship Model",
        price: 2570,
        salePrice: 2320,
        image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/public/super%20domestique/WHEELSETS/FARSPORTS%20EVO%20S/EVO_S5-2_compressed.webp",
        path: '/shop/carbon-wheels/evo-s'
      },
      {
        title: "Farsports S Series",
        description: "Professional Series",
        price: 2200,
        salePrice: 1980,
        image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/public/super%20domestique/WHEELSETS/FARSPOSRTS%20S%20SERIES/s6-2_compressed.webp",
        path: '/shop/carbon-wheels/s-series'
      },
      {
        title: "Farsports C Series",
        description: "Entry Level Performance",
        price: 1899,
        salePrice: 1710,
        image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/public/super%20domestique/WHEELSETS/FARSPORTS%20C%20SERIES/c3_2_compressed.webp",
        path: '/shop/carbon-wheels/c-series'
      }
    ],
    groupsets: [
      {
        title: "Wheeltop EDS TX - Road Groupset",
        description: "Advanced wireless electronic shifting system offering exceptional versatility and performance at an accessible price point.",
        price: 1250,
        salePrice: 1130,
        image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/public/super%20domestique/COMPONENTS/GROUPSETS/TX/EDS_TX_RD.webp",
        path: '/shop/electronic-groupsets/eds-tx'
      },
      {
        title: "Wheeltop EDS GeX - Gravel Groupset",
        description: "Purpose-built electronic shifting system designed for the demands of gravel riding and adventure cycling.",
        price: 950,
        salePrice: 860,
        backorder: true,
        image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/public/super%20domestique/COMPONENTS/GROUPSETS/GX/GX_RD.webp",
        path: '/shop/electronic-groupsets/eds-gex'
      },
      {
        title: "WHEELTOP EDS OX2.0 - Mountain Bike",
        description: "High-performance wireless electronic shifting system optimized for mountain biking, offering precise gear changes in demanding conditions.",
        price: 800,
        salePrice: 720,
        backorder: true,
        image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/public/super%20domestique/COMPONENTS/GROUPSETS/OX/EDS_RD.webp",
        path: '/shop/electronic-groupsets/eds-ox2'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-brand-blue flex flex-col">
      <div className="fixed inset-0 z-0">
        <img 
          src="https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/public/super%20domestique/SHOP/Znx8yJbWFbowe5T6_Z8B_0298.webp"
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
                        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                        <img 
                          src={encodeURI(item.image)}
                          alt={item.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-0"
                          crossOrigin="anonymous"
                          loading="eager"
                          decoding="async"
                          fetchPriority="high"
                          onLoad={(e) => {
                            e.currentTarget.style.opacity = '1';
                            e.currentTarget.style.transition = 'opacity 0.3s ease-in-out';
                          }}
                          onError={(e) => {
                            console.log(`Failed to load image: ${item.image}`);
                            // Try the original URL if encoded version fails
                            if (e.currentTarget.src === encodeURI(item.image)) {
                              e.currentTarget.src = item.image;
                            } else {
                              e.currentTarget.style.display = 'none';
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-brand-blue bg-opacity-30 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
                      </div>
                    )}
                    <h3 className="text-brand-gold text-xl mb-3">{item.title}</h3>
                    {item.price && (
                      <div className="mb-3">
                        <div className="flex justify-between items-start">
                          <p className="text-brand-gold text-lg">RRP ${item.price.toLocaleString()}</p>
                          <div className="text-right">
                            <p className="text-red-500 text-lg font-semibold">Sale ${item.salePrice?.toLocaleString() || item.price.toLocaleString()}</p>
                            {title === 'wheelsets' && (
                              <div className="mt-1">
                                <p className="text-red-500 text-sm font-semibold">BONUS OFFER</p>
                                <p className="text-white text-xs">Incl tyres & tubeless setup</p>
                                <p className="text-white text-xs">GP5000 / Corsa Pro</p>
                                <p className="text-white text-xs italic">*pickup in store</p>
                              </div>
                            )}
                            {item.backorder && (
                              <p className="text-red-500 text-sm font-semibold mt-1">BACKORDER</p>
                            )}
                          </div>
                        </div>
                      </div>
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