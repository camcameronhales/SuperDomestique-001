import React, { useEffect } from 'react';
import { ArrowLeft, Cog } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CarbonBarsF1X: React.FC = () => {
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

  useEffect(() => {
    // Remove any existing Shopify scripts to prevent duplication
    const existingScripts = document.querySelectorAll('script[src*="buy-button-storefront"]');
    existingScripts.forEach(script => script.remove());

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
          } else {
            loadScript();
          }
        } else {
          loadScript();
        }
        function loadScript() {
          var script = document.createElement('script');
          script.async = true;
          script.src = scriptURL;
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
          script.onload = ShopifyBuyInit;
        }
        function ShopifyBuyInit() {
          var client = ShopifyBuy.buildClient({
            domain: 'cr9bth-tr.myshopify.com',
            storefrontAccessToken: '4467a7e35cac1180cfd193839f38b140',
          });
          ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
              id: '9082234208504',
              node: document.getElementById('product-component-1748063370117'),
              moneyFormat: '%24%7B%7Bamount%7D%7D',
              options: {
                "product": {
                  "styles": {
                    "product": {
                      "@media (min-width: 601px)": {
                        "max-width": "calc(25% - 20px)",
                        "margin-left": "20px",
                        "margin-bottom": "50px"
                      }
                    },
                    "button": {
                      ":hover": {
                        "background-color": "#a48f4e"
                      },
                      "background-color": "#b69f57",
                      ":focus": {
                        "background-color": "#a48f4e"
                      }
                    }
                  },
                  "contents": {
                    "img": false,
                    "title": false,
                    "price": false
                  },
                  "text": {
                    "button": "Add to cart"
                  }
                },
                "productSet": {
                  "styles": {
                    "products": {
                      "@media (min-width: 601px)": {
                        "margin-left": "-20px"
                      }
                    }
                  }
                },
                "modalProduct": {
                  "contents": {
                    "img": false,
                    "imgWithCarousel": true,
                    "button": false,
                    "buttonWithQuantity": true
                  },
                  "styles": {
                    "product": {
                      "@media (min-width: 601px)": {
                        "max-width": "100%",
                        "margin-left": "0px",
                        "margin-bottom": "0px"
                      }
                    },
                    "button": {
                      ":hover": {
                        "background-color": "#a48f4e"
                      },
                      "background-color": "#b69f57",
                      ":focus": {
                        "background-color": "#a48f4e"
                      }
                    }
                  },
                  "text": {
                    "button": "Add to cart"
                  }
                },
                "option": {},
                "cart": {
                  "styles": {
                    "button": {
                      ":hover": {
                        "background-color": "#a48f4e"
                      },
                      "background-color": "#b69f57",
                      ":focus": {
                        "background-color": "#a48f4e"
                      }
                    }
                  },
                  "text": {
                    "total": "Subtotal",
                    "button": "Checkout"
                  }
                },
                "toggle": {
                  "styles": {
                    "toggle": {
                      "background-color": "#b69f57",
                      ":hover": {
                        "background-color": "#a48f4e"
                      },
                      ":focus": {
                        "background-color": "#a48f4e"
                      }
                    }
                  }
                }
              },
            });
          });
        }
      })();
    `;

    document.body.appendChild(script);

    return () => {
      // Clean up Shopify-related elements on unmount
      const shopifyScripts = document.querySelectorAll('script[src*="buy-button-storefront"]');
      shopifyScripts.forEach(script => script.remove());
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const product = {
    id: 'farsports-f1x',
    name: 'Farsports F1X',
    description: 'Compatible with most modern internally routed frames (F1s Spacer Required), Proven aerodynamic performance, 50g lighter than F1s bars, updated new look with LAVA finish & updated routing. Comes with Computer Mount (Compatible with Garmin/Wahoo)',
    price: 850.00,
    specs: [
      'Width (C to C): 360mm, 380mm, 400mm, 420mm',
      'Stem length: 80mm, 90mm, 100mm, 110mm, 120mm, 130mm, 140mm',
      'Reach: 75mm',
      'Drop: 127mm',
      'Stem angle: -10°',
      'Steerer tube diameter: 1-1/8" (with shim), 1-1/4"',
      'Weight (including locking screws, stem cap and computer mount): 310g (400mm-100mm)'
    ],
    image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CARBON%20BARS/farsports-f1x-integrated-handlebar-stem.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NBUkJPTiBCQVJTL2ZhcnNwb3J0cy1mMXgtaW50ZWdyYXRlZC1oYW5kbGViYXItc3RlbS53ZWJwIiwiaWF0IjoxNzQ2NzYwNTUyLCJleHAiOjIwNjIxMjA1NTJ9.W9yVtmQnvHreM6O_7IDWYmvqffg57MqjBgJR_ChGfvU"
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
                <div id="product-component-1748063370117"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonBarsF1X;