import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Wrench, Settings, Gauge, Cog, Syringe } from 'lucide-react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import BookingPage from './components/BookingPage';
import ChainShop from './components/ChainShop';
import ServicesPage from './components/ServicesPage';
import ShopPage from './components/ShopPage';
import ElectronicGroupsetsPage from './components/ElectronicGroupsetsPage';
import CarbonBarsF1X from './components/CarbonBarsF1X';
import CarbonBarsF1S from './components/CarbonBarsF1S';
import EvoSWheels from './components/EvoSWheels';
import SSeriesWheels from './components/SSeriesWheels';
import CSeriesWheels from './components/CSeriesWheels';
import EDSTXGroupset from './components/EDSTXGroupset';
import EDSGeXGroupset from './components/EDSGeXGroupset';
import EDSOX2Groupset from './components/EDSOX2Groupset';
import PraxisDoonCranks from './components/PraxisDoonCranks';
import XcadeyPowerMeter from './components/XcadeyPowerMeter';
import ClientsPage from './components/ClientsPage';
import LoginPage from './components/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';

const MainContent: React.FC = () => {
  const [showChainShop, setShowChainShop] = useState(false);
  const navigate = useNavigate();

  const handleChainShopClick = () => {
    setShowChainShop(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseChainShop = () => {
    setShowChainShop(false);
  };

  const handleWorkshopRatesClick = () => {
    navigate('/services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showChainShop) {
    return <ChainShop onClose={handleCloseChainShop} />;
  }

  return (
    <div className="min-h-screen bg-brand-blue flex flex-col">
      <NavBar />
      <Hero />
      
      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 relative z-10">
        <h2 className="text-3xl font-light text-center mb-16 text-brand-gold opacity-0">PRECISION SERVICES</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-8 border border-gray-100 hover:border-brand-gold transition-colors group relative overflow-hidden h-full flex flex-col">
            <div 
              className="absolute inset-0 z-0 transition-transform duration-500 ease-out group-hover:scale-110"
              style={{
                backgroundImage: `url(https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/SERVICE%20CARDS/Family-Canyon-aeroad-my25-10.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1NFUlZJQ0UgQ0FSRFMvRmFtaWx5LUNhbnlvbi1hZXJvYWQtbXkyNS0xMC53ZWJwIiwiaWF0IjoxNzQwOTAzMzQ1LCJleHAiOjE3NzI0MzkzNDV9.lhuY_0zwv_J-ktEnn_CbCf6R88yYWuw_DkYyQOjHj_M)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-brand-blue bg-opacity-30 group-hover:bg-opacity-90 transition-all duration-500" />
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-xl font-light mb-4 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="space-y-2">
                  <div className="text-brand-gold">Premium Services</div>
                  <div className="text-brand-gold">Custom Builds</div>
                  <div className="text-brand-gold">Bespoke Upgrades</div>
                </div>
              </h3>
              <div className="flex-grow">
                <p className="text-brand-gold transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Comprehensive care for high-end bicycles with meticulous attention to detail
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="mt-auto self-start relative">
                  <div className="absolute inset-0 bg-brand-gold rounded-lg -m-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                  <div className="text-brand-blue relative opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <Wrench className="w-8 h-8" />
                  </div>
                </div>
                <button 
                  onClick={handleWorkshopRatesClick}
                  className="px-4 py-1 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-blue transition-all duration-300"
                >
                  WORKSHOP RATES
                </button>
              </div>
            </div>
          </div>
          <ServiceCard 
            icon={<Gauge className="w-8 h-8" />}
            title="Electronic Groupsets"
            description="Expert configuration and maintenance of electronic shifting systems, installing firmware updates, system diagnostics checks and fault debugging."
            backgroundImage="https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/SERVICE%20CARDS/C23_C11052U_SuperSix_EVO_LAB71_MOX_D2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1NFUlZJQ0UgQ0FSRFMvQzIzX0MxMTA1MlVfU3VwZXJTaXhfRVZPX0xBQjcxX01PWF9EMi53ZWJwIiwiaWF0IjoxNzQwOTAzMTkyLCJleHAiOjE3NzI0MzkxOTJ9.4kSpy4wAkIrpgfGIf9vsMBJ5x89_hTHpdG_jBTn5_d0"
          />
          <div id="chain-shop" className="p-8 border border-gray-100 hover:border-brand-gold transition-colors group relative overflow-hidden h-full flex flex-col">
            <div 
              className="absolute inset-0 z-0 transition-transform duration-500 ease-out group-hover:scale-110"
              style={{
                backgroundImage: `url(https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/SERVICE%20CARDS/Zn3UGh5LeNNTwnIM_006118679005-FC-RED-PM-E1-DUB-175-5037-d-3q-1200x1200.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1NFUlZJQ0UgQ0FSRFMvWm4zVUdoNUxlTk5Ud25JTV8wMDYxMTg2NzkwMDUtRkMtUkVELVBNLUUxLURVQi0xNzUtNTAzNy1kLTNxLTEyMDB4MTIwMC53ZWJwIiwiaWF0IjoxNzQwOTAzNDU0LCJleHAiOjE3NzI0Mzk0NTR9.XQggiEpdSXA6YIc-zV3SB5VSaOOQPsDYYVzcPm_kDBE)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-brand-blue bg-opacity-30 group-hover:bg-opacity-90 transition-all duration-500" />
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-xl font-light mb-4 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Drivetrain Efficiency
              </h3>
              <div className="flex-grow">
                <p className="text-brand-gold transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Premium chain waxing service for superior drivetrain efficiency and longevity. Pre-waxed Silca SuperSecret chains available for purchase and install, comprehensive drivetrain degreasing or strip and re-dip.
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="mt-auto self-start relative">
                  <div className="absolute inset-0 bg-brand-gold rounded-lg -m-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                  <div className="text-brand-blue relative opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <Settings className="w-8 h-8" />
                  </div>
                </div>
                <button 
                  onClick={handleChainShopClick}
                  className="px-4 py-1 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-blue transition-all duration-300"
                >
                  CHAIN SHOP
                </button>
              </div>
            </div>
          </div>
          <ServiceCard 
            icon={<Syringe className="w-8 h-8" />}
            title="Tubeless Setup"
            description="Professional tubeless tire installation and maintenance. Silca Ultimate Sealant is the perfect sealant for those looking for the ultimate sealing power, longevity, and ease of use. Now you only need to top up when you service."
            backgroundImage="https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/SERVICE%20CARDS/SystemSix_tubeless.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1NFUlZJQ0UgQ0FSRFMvU3lzdGVtU2l4X3R1YmVsZXNzLmpwZyIsImlhdCI6MTc0MjE5OTU3OSwiZXhwIjoyMDU3NTU5NTc5fQ.TAHSKvfy0NBQuldLGLMCz9GknDff1xPkSIXsfXf_I9A"
          />
        </div>
      </section>

      {/* Booking CTA and Footer Container with shared background */}
      <div className="relative -mt-32 flex-grow flex flex-col">
        {/* Shared background for both sections */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 w-full h-[200%]">
            <img 
              src="https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/C23_Landscape_Desktop.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0MyM19MYW5kc2NhcGVfRGVza3RvcC5qcGciLCJpYXQiOjE3Mzk2ODc0NDIsImV4cCI6MTc3MTIyMzQ0Mn0.w_x_iod9Up6G9XNR6HagGYW3n3KrSG87kRJ-_EXS7oU"
              alt="Luxury bicycle"
              className="w-full h-full object-cover"
              style={{ objectPosition: '50% 100%' }}
            />
            <div className="absolute inset-0 bg-brand-blue bg-opacity-80"></div>
          </div>
        </div>
        
        {/* Booking CTA Section */}
        <section className="relative z-10 flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-center py-12 w-full">
            <div className="flex flex-col items-center space-y-6">
              <div className="text-brand-gold space-y-2">
                <a href="mailto:info@superdomestique.vip" className="block hover:text-white transition-colors">
                  info@superdomestique.vip
                </a>
                <a href="tel:+61456576896" className="block hover:text-white transition-colors">
                  +61 456 576 896
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <Cog className="w-6 h-6 text-brand-gold rotate-45" />
                <h3 className="text-xl font-light text-brand-gold">SUPER DOMESTIQUE</h3>
              </div>
              <p className="text-brand-gold text-sm mt-2">BAYSIDE / MELBOURNE</p>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              © {new Date().getFullYear()} Super Domestique. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/booking" element={<BookingPage onClose={() => {}} />} />
        <Route path="/shop/electronic-groupsets" element={<ElectronicGroupsetsPage />} />
        <Route path="/shop/electronic-groupsets/eds-tx" element={<EDSTXGroupset />} />
        <Route path="/shop/electronic-groupsets/eds-gex" element={<EDSGeXGroupset />} />
        <Route path="/shop/electronic-groupsets/eds-ox2" element={<EDSOX2Groupset />} />
        <Route path="/shop/carbon-bars/f1x" element={<CarbonBarsF1X />} />
        <Route path="/shop/carbon-bars/f1s" element={<CarbonBarsF1S />} />
        <Route path="/shop/carbon-wheels/evo-s" element={<EvoSWheels />} />
        <Route path="/shop/carbon-wheels/s-series" element={<SSeriesWheels />} />
        <Route path="/shop/carbon-wheels/c-series" element={<CSeriesWheels />} />
        <Route path="/shop/cranks" element={<PraxisDoonCranks />} />
        <Route path="/shop/cranks/xcadey" element={<XcadeyPowerMeter />} />
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/clients" 
          element={
            <ProtectedRoute>
              <ClientsPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;