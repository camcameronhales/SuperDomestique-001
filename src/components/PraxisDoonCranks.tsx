import React, { useEffect, useState } from 'react';
import { ArrowLeft, Cog, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PraxisDoonCranks: React.FC = () => {
  const navigate = useNavigate();
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleReturn = () => {
    navigate('/shop');
    setTimeout(() => {
      const cranksSection = document.getElementById('cranks');
      if (cranksSection) {
        cranksSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email && !formData.mobile) {
      alert('Please provide either an email address or mobile number.');
      return;
    }

    setIsSubmitting(true);

    const subject = `Product Enquiry: ${product.name}`;
    const body = `
Product: ${product.name}
RRP: $${product.price.toLocaleString()}
Sale Price: $${product.salePrice.toLocaleString()}

Product Description:
${product.description}

Customer Contact Information:
Email: ${formData.email || 'Not provided'}
Mobile: ${formData.mobile || 'Not provided'}

Customer Notes:
${formData.notes || 'No additional notes'}
    `.trim();

    const mailtoLink = `mailto:info@superdomestique.vip?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    // Reset form and close modal
    setTimeout(() => {
      setIsSubmitting(false);
      setShowEnquiryForm(false);
      setFormData({ email: '', mobile: '', notes: '' });
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const product = {
    id: 'praxis-doon',
    name: 'Praxis Doon Carbon Crankset',
    description: 'Pro level carbon road crank. The Doon is the ultimate marriage of lightness, stiffness and versatility.',
    price: 750,
    salePrice: 680,
    specs: [
      'Crank Arm Material: Carbon (C.R.A.F.T. process)',
      'Spindle: 30mm alloy M30-THRU (30mm drive/30mm non-drive)',
      'Interface: Praxis 3-bolt direct mount',
      'Chainring Options: LevaTime II X-Rings in 48/32, 50/34, 52/36, and 53/39 combinations',
      'Chainline: 2x: 44.5mm (Note: Not compatible with Shimano GRX front derailleurs), 1x: 45.5mm',
      'Q-Factor: 147mm',
      'Chain Compatibility: 10-, 11-, and 12-speed chains from Shimano, SRAM (including Flattop), and KMC',
      'Crank Arm Lengths: 165mm, 170mm, 172.5mm, 175mm',
      'Weight: 342g (172.5mm armset only)',
      'Weight with Chainrings:',
      '• 542g with 48/32',
      '• 570g with 50/34',
      '• 574g with 52/36',
      '• 602g with 53/39'
    ],
    // Fixed: Using public URL instead of signed URL
    image: 'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/public/super%20domestique/CRANKS/Praxis-Works-DOON-Carbon-Road-Crankset-3.jpg',
    backgroundImage: 'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/public/super%20domestique/CRANKS/XCADEY%20CRANKS_1.jpeg'
  };

  return (
    <div className="min-h-screen bg-brand-blue flex flex-col">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        <img 
          src={encodeURI(product.backgroundImage)}
          alt="Cranks background"
          className="w-full h-full object-cover opacity-0"
          crossOrigin="anonymous"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onLoad={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transition = 'opacity 0.5s ease-in-out';
          }}
          onError={(e) => {
            console.log(`Failed to load background image: ${product.backgroundImage}`);
            e.currentTarget.style.display = 'none';
          }}
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
              <span>Return to Cranks</span>
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
          <h1 className="text-3xl font-light text-brand-gold mb-12 text-center">CRANKS & POWER METERS</h1>
          
          <div className="bg-brand-blue bg-opacity-90 border border-brand-gold p-8 group hover:bg-opacity-100 transition-all duration-300">
            <div className="aspect-video mb-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-white"></div>
              <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
              <img 
                src={encodeURI(product.image)}
                alt={product.name}
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
                  console.log(`Failed to load product image: ${product.image}`);
                  // Try the original URL if encoded version fails
                  if (e.currentTarget.src === encodeURI(product.image)) {
                    e.currentTarget.src = product.image;
                  } else {
                    e.currentTarget.style.display = 'none';
                  }
                }}
              />
              <div className="absolute inset-0 bg-brand-blue bg-opacity-30 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <h3 className="text-brand-gold text-2xl">{product.name}</h3>
                  <p className="text-brand-gold text-xl">RRP ${product.price.toLocaleString()}</p>
                </div>
                <p className="text-red-500 text-xl font-semibold">Sale ${product.salePrice.toLocaleString()}</p>
              </div>
              
              <p className="text-gray-300">{product.description}</p>
              
              <div className="space-y-2">
                <h4 className="text-brand-gold">Key Specifications:</h4>
                <ul className="space-y-2">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="text-brand-gold mr-2 mt-1.5">•</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 space-y-3">
                <button
                  onClick={() => setShowEnquiryForm(true)}
                  className="w-full bg-brand-gold hover:bg-yellow-600 text-brand-blue font-semibold py-3 px-6 transition-colors duration-300"
                >
                  Enquire Now
                </button>
                <a
                  href="tel:+61456576896"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 transition-colors duration-300 block text-center"
                >
                  Call +61 456 576 896
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Form Modal */}
      {showEnquiryForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-brand-blue border border-brand-gold p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-brand-gold text-xl font-semibold">Product Enquiry</h3>
              <button
                onClick={() => setShowEnquiryForm(false)}
                className="text-brand-gold hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-4">
              <p className="text-brand-gold font-semibold">{product.name}</p>
              <p className="text-gray-300 text-sm">RRP ${product.price.toLocaleString()} | Sale ${product.salePrice.toLocaleString()}</p>
            </div>

            <form onSubmit={handleEnquirySubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-brand-gold text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 focus:border-brand-gold focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-brand-gold text-sm font-medium mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 focus:border-brand-gold focus:outline-none"
                  placeholder="+61 xxx xxx xxx"
                />
              </div>

              <p className="text-gray-400 text-xs">
                * Please provide either email or mobile number
              </p>

              <div>
                <label htmlFor="notes" className="block text-brand-gold text-sm font-medium mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 focus:border-brand-gold focus:outline-none resize-none"
                  placeholder="Any specific requirements, questions, or additional information..."
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowEnquiryForm(false)}
                  className="flex-1 px-4 py-2 bg-gray-600 text-white hover:bg-gray-700 transition-colors"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-brand-gold text-brand-blue font-semibold hover:bg-yellow-600 transition-colors disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PraxisDoonCranks;