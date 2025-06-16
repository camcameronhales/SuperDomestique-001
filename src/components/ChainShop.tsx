import React, { useEffect } from 'react';
import { ArrowLeft, Cog } from 'lucide-react';

interface ChainShopProps {
  onClose: () => void;
}

const ChainShop: React.FC<ChainShopProps> = ({ onClose }) => {
  useEffect(() => {
    // Remove any existing Shopify scripts to prevent duplication
    const existingScripts = document.querySelectorAll('script[src*="buy-button-storefront"]');
    existingScripts.forEach(script => script.remove());

    // Remove any existing product components
    const existingComponents = document.querySelectorAll('[id^="product-component"]');
    existingComponents.forEach(component => component.innerHTML = '');

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
            // Dura-Ace 12-speed
            ui.createComponent('product', {
              id: '9053271425272',
              node: document.getElementById('product-component-1745918118297'),
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

            // Ultegra 12-speed
            ui.createComponent('product', {
              id: '9057622163704',
              node: document.getElementById('product-component-1746244503737'),
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

            // Dura-Ace 11-speed
            ui.createComponent('product', {
              id: '9057623146744',
              node: document.getElementById('product-component-1746244845004'),
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

            // Ultegra 11-speed
            ui.createComponent('product', {
              id: '9057623507192',
              node: document.getElementById('product-component-1746244978191'),
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

            // SRAM RED XPLR
            ui.createComponent('product', {
              id: '9057623736568',
              node: document.getElementById('product-component-1746401151812'),
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

            // SRAM RED AXS
            ui.createComponent('product', {
              id: '9057624260856',
              node: document.getElementById('product-component-1746434444079'),
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

            // SRAM Force
            ui.createComponent('product', {
              id: '9057624654072',
              node: document.getElementById('product-component-1746434652067'),
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
      // Clean up all Shopify-related elements on unmount
      const shopifyScripts = document.querySelectorAll('script[src*="buy-button-storefront"]');
      shopifyScripts.forEach(script => script.remove());
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      const components = document.querySelectorAll('[id^="product-component"]');
      components.forEach(component => component.innerHTML = '');
    };
  }, []);

  const chains = [
    {
      id: "dura-ace-12",
      title: "Shimano Dura-Ace 12-Speed",
      description: "CN-M9100 Chain. Ultimate performance for modern 12-speed drivetrains. Includes premium hot-melt wax treatment.",
      price: 125.00,
      image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CHAINS/CN_M9100.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NIQUlOUy9DTl9NOTEwMC53ZWJwIiwiaWF0IjoxNzQyNjA3MzExLCJleHAiOjIwNTc5NjczMTF9.SnN6YrSSvCZoiJAkc-IiOz1V3lBWMfOD3qnBSYD_4rs"
    },
    {
      id: "ultegra-12",
      title: "Shimano Ultegra 12-Speed",
      description: "CN-R8100 Chain. Professional-grade performance for 12-speed systems. Includes premium hot-melt wax treatment.",
      price: 115.00,
      image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CHAINS/CN_M8100.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NIQUlOUy9DTl9NODEwMC53ZWJwIiwiaWF0IjoxNzQyNjA3ODU5LCJleHAiOjIwNTc5Njc4NTl9.-UqQdLxE4BKGuWQ1dGBQ8OrvnyJ1qGyqc787i81bjgA"
    },
    {
      id: "dura-ace-11",
      title: "Shimano Dura-Ace 11-Speed",
      description: "CN-HG901 Chain. Race-proven reliability for 11-speed drivetrains. Includes premium hot-melt wax treatment.",
      price: 105.00,
      image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CHAINS/CN_HG901_11.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NIQUlOUy9DTl9IRzkwMV8xMS53ZWJwIiwiaWF0IjoxNzQyNjA4MzA0LCJleHAiOjIwNTc5NjgzMDR9.iYB1L8caO9A4ciQv0IafFB9pLiznCB3JO7HGbMN4-ac"
    },
    {
      id: "ultegra-11",
      title: "Shimano Ultegra 11-Speed",
      description: "CN-HG701 Chain. High-performance 11-speed chain for demanding riders. Includes premium hot-melt wax treatment.",
      price: 100.00,
      image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CHAINS/CN_HG701_11.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NIQUlOUy9DTl9IRzcwMV8xMS53ZWJwIiwiaWF0IjoxNzQyNjA5NjkzLCJleHAiOjE3NzQxNDU2OTN9.DxvsArhZRVi86Vrd3jqitjGv7zoZYMrEc2oj4vYu9OI"
    },
    {
      id: "sram-red-xplr",
      title: "SRAM RED XPLR 12-Speed",
      description: "Latest E1 generation chain optimized for electronic shifting. Includes premium hot-melt wax treatment.",
      price: 200.00,
      image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CHAINS/SRAM%20RED%20E1.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NIQUlOUy9TUkFNIFJFRCBFMS53ZWJwIiwiaWF0IjoxNzQyNjA4Nzg2LCJleHAiOjIwNTc5Njg3ODZ9.-EYhagbnTrgPmdphx0kIL-v76J4HvhaXgmNtDjnUhSw"
    },
    {
      id: "sram-red-axs",
      title: "SRAM RED AXS 12-Speed",
      description: "D1 generation chain with Flattop™ technology. Includes premium hot-melt wax treatment.",
      price: 155.00,
      image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CHAINS/SRAM%20RED%20D1.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NIQUlOUy9TUkFNIFJFRCBEMS53ZWJwIiwiaWF0IjoxNzQyNjA4OTAxLCJleHAiOjE3NzQxNDQ5MDF9.Mnw6lc7QJseI2FbHR8n__RgU14AxStgpg1arNlxR_IY"
    },
    {
      id: "sram-force",
      title: "SRAM Force 12-Speed",
      description: "Professional-grade 12-speed chain with Flattop™ technology. Includes premium hot-melt wax treatment.",
      price: 125.00,
      image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CHAINS/SRAM%20FORCE%20D1.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NIQUlOUy9TUkFNIEZPUkNFIEQxLndlYnAiLCJpYXQiOjE3NDI2MDkwMDMsImV4cCI6MTc3NDE0NTAwM30.BJRymVfFeC9N0D85hv4KRnl5DDdgrMtzwJQHok_K7Us"
    },
    {
      id: "silca-super-secret",
      title: "Silca Super Secret Chain Lube (118mL)",
      description: "SILCA Super Secret Chain Lube maintains all of the super speed and silent running of a hot-melt wax-dipped chain.",
      price: 45.00,
      image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CHAINS/silca-super-secret-chain-lube-118ml.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NIQUlOUy9zaWxjYS1zdXBlci1zZWNyZXQtY2hhaW4tbHViZS0xMThtbC53ZWJwIiwiaWF0IjoxNzQ4MDQzNDk0LCJleHAiOjIwMzE4Njc0OTR9.yaN7Nru_3nvoj7t4MpCHFUQLcrRGvePVfH9-5_hr7nA"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-blue flex flex-col">
      <div className="fixed inset-0 z-0">
        <img 
          src="https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CHAINS/SILCA%20SUPERSECRET.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NIQUlOUy9TSUxDQSBTVVBFUlNFQ1JFVC5qcGVnIiwiaWF0IjoxNzQyNjI4OTU1LCJleHAiOjE3NzQxNjQ5NTV9.ecdTunTlBERL1RyFi4pVwSyY5-25zYyaHlM-1KCyqL4"
          alt="Chain shop background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-blue bg-opacity-90"></div>
      </div>
      
      <div className="fixed w-full z-40 top-0 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-24 items-center justify-between">
            <button 
              onClick={onClose}
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
          <h1 className="text-3xl font-light text-brand-gold mb-12 text-center">CHAIN SHOP</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {chains.map((chain) => (
              <div key={chain.id} className="bg-brand-blue bg-opacity-90 border border-brand-gold p-6 group hover:bg-opacity-100 transition-all duration-300 flex flex-col">
                <div className="aspect-square mb-4 overflow-hidden">
                  <img 
                    src={chain.image} 
                    alt={chain.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-brand-gold text-xl mb-2">{chain.title}</h3>
                <p className="text-gray-300 text-sm flex-grow min-h-[4rem]">{chain.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-brand-gold text-lg">${chain.price.toFixed(2)}</span>
                    {chain.id === "dura-ace-12" && (
                      <div id="product-component-1745918118297"></div>
                    )}
                    {chain.id === "ultegra-12" && (
                      <div id="product-component-1746244503737"></div>
                    )}
                    {chain.id === "dura-ace-11" && (
                      <div id="product-component-1746244845004"></div>
                    )}
                    {chain.id === "ultegra-11" && (
                      <div id="product-component-1746244978191"></div>
                    )}
                    {chain.id === "sram-red-xplr" && (
                      <div id="product-component-1746401151812"></div>
                    )}
                    {chain.id === "sram-red-axs" && (
                      <div id="product-component-1746434444079"></div>
                    )}
                    {chain.id === "sram-force" && (
                      <div id="product-component-1746434652067"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChainShop;