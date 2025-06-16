import React from 'react';
import { ArrowLeft, Cog, Wrench, PenTool as Tool, Cpu, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-blue flex flex-col">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/SERVICE%20CARDS/Family-Canyon-aeroad-my25-10.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1NFUlZJQ0UgQ0FSRFMvRmFtaWx5LUNhbnlvbi1hZXJvYWQtbXkyNS0xMC53ZWJwIiwiaWF0IjoxNzQwOTAzMzQ1LCJleHAiOjE3NzI0MzkzNDV9.lhuY_0zwv_J-ktEnn_CbCf6R88yYWuw_DkYyQOjHj_M"
          alt="Luxury bicycle service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-blue bg-opacity-90"></div>
      </div>
      
      {/* Header */}
      <div className="fixed w-full z-50 top-0 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-24 items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-brand-gold hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Return to Home</span>
            </button>
            <div className="flex items-center space-x-2">
              <Cog className="w-6 h-6 text-brand-gold rotate-45" />
              <div className="text-xl font-light tracking-wider text-brand-gold">SUPER DOMESTIQUE</div>
            </div>
            <button 
              onClick={() => navigate('/booking')}
              className="text-sm px-4 py-1 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-blue transition-all duration-300"
            >
              BOOK WORKSHOP
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-32 pb-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-light text-brand-gold mb-12 text-center">OUR SERVICES</h1>
          
          <div className="space-y-24">
            {/* Workshop Services Section */}
            <section id="workshop-services" className="scroll-mt-32">
              <div className="grid md:grid-cols-3 gap-12">
                <div className="bg-brand-blue bg-opacity-90 p-8 border border-brand-gold min-h-[600px] flex flex-col">
                  <div className="flex items-center space-x-4 mb-6">
                    <Wrench className="w-8 h-8 text-brand-gold" />
                    <h2 className="text-2xl font-light text-brand-gold">Complete Service</h2>
                  </div>
                  <p className="text-xl text-brand-gold mb-6">From $400</p>
                  <ul className="space-y-3 text-gray-300 flex-grow">
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Premium wash & drivetrain degrease
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Ultrasonic chain clean & lube, or wax strip & re-dip
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Service headset & bottom bracket
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Service hubs, wheels trued & sealant top up
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Component wear check (chain, cassette, disc rotors, brake pads & tyres)
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Clean, service & align brake callipers, flush & bleed brakes
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Firmware & battery check
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Align derailleur hanger, & tune gears
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Safety check & test ride
                    </li>
                  </ul>
                  <p className="text-sm text-gray-400 mt-6 italic">*Additional labour & parts will incur an extra cost.</p>
                </div>

                <div className="bg-brand-blue bg-opacity-90 p-8 border border-brand-gold min-h-[600px] flex flex-col">
                  <div className="flex items-center space-x-4 mb-6">
                    <Wrench className="w-8 h-8 text-brand-gold" />
                    <h2 className="text-2xl font-light text-brand-gold">Standard Service</h2>
                  </div>
                  <p className="text-xl text-brand-gold mb-6">From $200</p>
                  <ul className="space-y-3 text-gray-300 flex-grow">
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Deluxe wash
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Ultrasonic chain clean & lube, or wax strip & re-dip
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Headset & bottom bracket checked
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Hubs & wheels checked & sealant top up
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Component wear check (chain, cassette, disc rotors, brake pads & tyres)
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Align brake callipers & true rotors
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Align derailleur hanger and tune gears
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Safety check & test ride
                    </li>
                  </ul>
                  <p className="text-sm text-gray-400 mt-6 italic">*Additional labour & parts will incur an extra cost.</p>
                </div>

                <div className="bg-brand-blue bg-opacity-90 p-8 border border-brand-gold min-h-[600px] flex flex-col">
                  <div className="flex items-center space-x-4 mb-6">
                    <Wrench className="w-8 h-8 text-brand-gold" />
                    <h2 className="text-2xl font-light text-brand-gold">Race Prep Service</h2>
                  </div>
                  <p className="text-xl text-brand-gold mb-6">From $100</p>
                  <ul className="space-y-3 text-gray-300 flex-grow">
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Component wear check (chain, cassette, disc rotors, brake pads & tyres)
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Brakes checked & adjusted
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Gears checked & adjusted
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Safety check & test ride
                    </li>
                  </ul>
                  <p className="text-sm text-gray-400 mt-6 italic">*Additional labour & parts will incur an extra cost.</p>
                </div>
              </div>
            </section>

            {/* Custom Builds and Bespoke Upgrades Section */}
            <section className="scroll-mt-32">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Custom Build Card */}
                <div className="bg-brand-blue bg-opacity-90 p-8 border border-brand-gold">
                  <div className="flex items-center space-x-4 mb-6">
                    <Tool className="w-8 h-8 text-brand-gold" />
                    <h2 className="text-2xl font-light text-brand-gold">Custom Build</h2>
                  </div>
                  <p className="text-xl text-brand-gold mb-6">From $450</p>
                  <p className="text-gray-300 mb-6">Transform your dream bike into reality with our custom build service. Create a unique, high-performance bicycle tailored to your exact specifications.</p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Frame and component selection consultation
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Premium component sourcing
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Professional assembly and setup
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Custom paint and finish options
                    </li>
                  </ul>
                </div>

                {/* Bespoke Upgrades Card */}
                <div className="bg-brand-blue bg-opacity-90 p-8 border border-brand-gold">
                  <div className="flex items-center space-x-4 mb-6">
                    <Cpu className="w-8 h-8 text-brand-gold" />
                    <h2 className="text-2xl font-light text-brand-gold">Bespoke Upgrades</h2>
                  </div>
                  <p className="text-gray-300 mb-6">Elevate your existing bicycle with carefully selected upgrades that enhance performance, comfort, and aesthetics.</p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Electronic groupset upgrades
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Premium wheelset installations
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Cockpit customization
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Power meter integration
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Aerodynamic optimization
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      Weight reduction consulting
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Other Services Section */}
            <section className="scroll-mt-32">
              <div className="bg-brand-blue bg-opacity-90 p-8 border border-brand-gold">
                <div className="flex items-center space-x-4 mb-6">
                  <Settings className="w-8 h-8 text-brand-gold" />
                  <h2 className="text-2xl font-light text-brand-gold">Other Services</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-xl text-brand-gold mb-4">Tubeless Setup</h3>
                    <p className="text-xl text-brand-gold mb-2">From $40</p>
                    <p className="text-sm text-gray-400 italic">*Tyres & valves will incur an extra cost</p>
                  </div>
                  <div>
                    <h3 className="text-xl text-brand-gold mb-4">Tubeless Top Up</h3>
                    <p className="text-xl text-brand-gold">From $20</p>
                  </div>
                  <div>
                    <h3 className="text-xl text-brand-gold mb-4">Chain Strip & Re-dip</h3>
                    <p className="text-xl text-brand-gold mb-2">From $30</p>
                    <p className="text-sm text-gray-400 italic">*New & previously waxed chains only</p>
                  </div>
                  <div>
                    <h3 className="text-xl text-brand-gold mb-4">Parts Install / General Labour</h3>
                    <p className="text-xl text-brand-gold mb-2">From $100</p>
                    <p className="text-sm text-gray-400">Per hour</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;