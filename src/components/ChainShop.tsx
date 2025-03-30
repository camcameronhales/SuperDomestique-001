import React, { useState } from 'react';
import { ArrowLeft, Cog, ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import Cart from './Cart';

interface ChainShopProps {
  onClose: () => void;
}

const ChainShop: React.FC<ChainShopProps> = ({ onClose }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items, addItem } = useCartStore();
  
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
      description: "CN-HG901-11 Chain. Race-proven reliability for 11-speed drivetrains. Includes premium hot-melt wax treatment.",
      price: 105.00,
      image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CHAINS/CN_HG901_11.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NIQUlOUy9DTl9IRzkwMV8xMS53ZWJwIiwiaWF0IjoxNzQyNjA4MzA0LCJleHAiOjIwNTc5NjgzMDR9.iYB1L8caO9A4ciQv0IafFB9pLiznCB3JO7HGbMN4-ac"
    },
    {
      id: "ultegra-11",
      title: "Shimano Ultegra 11-Speed",
      description: "CN-HG701-11 Chain. High-performance 11-speed chain for demanding riders. Includes premium hot-melt wax treatment.",
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
      price: 100.00,
      image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CHAINS/SRAM%20FORCE%20D1.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NIQUlOUy9TUkFNIEZPUkNFIEQxLndlYnAiLCJpYXQiOjE3NDI2MDkwMDMsImV4cCI6MTc3NDE0NTAwM30.BJRymVfFeC9N0D85hv4KRnl5DDdgrMtzwJQHok_K7Us"
    },
    {
      id: "strip-redip",
      title: "Strip & Re-Dip Service",
      description: "Complete chain stripping and re-treatment service. Restore your chain to optimal efficiency with our premium hot-melt wax.",
      price: 25.00,
      image: "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CHAINS/RE_DIP.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NIQUlOUy9SRV9ESVAud2VicCIsImlhdCI6MTc0MjYwOTM0OSwiZXhwIjoxNzc0MTQ1MzQ5fQ.E4D81y98nxArNFv5ij7YiUVPP-83q3RMcntR6a7X7uw"
    }
  ];

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-brand-blue flex flex-col">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CHAINS/SILCA%20SUPERSECRET.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NIQUlOUy9TSUxDQSBTVVBFUlNFQ1JFVC5qcGVnIiwiaWF0IjoxNzQyNjI4OTU1LCJleHAiOjE3NzQxNjQ5NTV9.ecdTunTlBERL1RyFi4pVwSyY5-25zYyaHlM-1KCyqL4"
          alt="Chain shop background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-blue bg-opacity-90"></div>
      </div>
      
      {/* Header */}
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
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-brand-gold hover:text-white transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-gold text-brand-blue rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Chain Shop Content */}
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
                <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-brand-gold text-lg">${chain.price.toFixed(2)}</span>
                    <span className="text-gray-400 text-xs">postage included</span>
                  </div>
                  <button 
                    onClick={() => addItem({ id: chain.id, title: chain.title, price: chain.price })}
                    className="px-4 py-1 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-blue transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default ChainShop;