import React from 'react';
import { ArrowLeft, Cog } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CarbonWheelsPage: React.FC = () => {
  const navigate = useNavigate();

  const evoSImages = [
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20EVO%20S/EVO_S5-1.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgRVZPIFMvRVZPX1M1LTEud2VicCIsImlhdCI6MTc0Njc2Mjc3NCwiZXhwIjoyMDYyMTIyNzc0fQ.di7ZKL1p6KgXa5jdXwDhi_dk9j20MXJ-VXSHzYl4tRI',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20EVO%20S/EVO_S5-2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgRVZPIFMvRVZPX1M1LTIud2VicCIsImlhdCI6MTc0Njc2Mjg0OCwiZXhwIjoyMDYyMTIyODQ4fQ.OzOPa0SiKKng_xYjoCw3ombT5l2FnH0rdc57irFfFMA',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20EVO%20S/EVO_S5-3.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgRVZPIFMvRVZPX1M1LTMud2VicCIsImlhdCI6MTc0Njc2Mjg2NSwiZXhwIjoyMDYyMTIyODY1fQ.9NfjX7lkUJPTWQ-KjjMpuh06khSfLEGH6zBXwG_k1N0',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20EVO%20S/EVO_S5-4.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgRVZPIFMvRVZPX1M1LTQud2VicCIsImlhdCI6MTc0Njc2Mjg4NCwiZXhwIjoyMDYyMTIyODg0fQ.DXqb5vBa2nns3pG6A-OvHAm6d0LgP4c3tLZ1kF8pNaU',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20EVO%20S/EVO_S5-5.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgRVZPIFMvRVZPX1M1LTUud2VicCIsImlhdCI6MTc0Njc2MjkwMywiZXhwIjoyMDYyMTIyOTAzfQ.7DwYacxXNpdK8UUDeAWtME0yu4CWMHbz3JCg3Gf_cN0',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20EVO%20S/EVO_S5-6.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgRVZPIFMvRVZPX1M1LTYud2VicCIsImlhdCI6MTc0Njc2MjkyMSwiZXhwIjoyMDYyMTIyOTIxfQ.VWfCGrcIS9GrRCwi62MQ-ZIfTHtZ75p7CeVJbXxLe4Q'
  ];

  const sSImages = [
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPOSRTS%20S%20SERIES/S6-1.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9TUlRTIFMgU0VSSUVTL1M2LTEud2VicCIsImlhdCI6MTc0Njc2NTY0MywiZXhwIjoyMDYyMTI1NjQzfQ.xgghRF8ffvC_kjKJCzfr2KanJvsbw3Sevl2u0mAEcAI',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPOSRTS%20S%20SERIES/s6-2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9TUlRTIFMgU0VSSUVTL3M2LTIud2VicCIsImlhdCI6MTc0Njc2NTY1OSwiZXhwIjoyMDYyMTI1NjU5fQ.nu7DRK2_JzRGP3faZ1lep6ikXmCVOe6K_YX9V-Dhm28',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPOSRTS%20S%20SERIES/S6-3.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9TUlRTIFMgU0VSSUVTL1M2LTMud2VicCIsImlhdCI6MTc0Njc2NTcwNywiZXhwIjoyMDYyMTI1NzA3fQ.tAEeyq12oz8UwN_28O7mQSImhPnX-0TkdW5EtjeyZf8',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPOSRTS%20S%20SERIES/S6-4.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9TUlRTIFMgU0VSSUVTL1M2LTQud2VicCIsImlhdCI6MTc0Njc2NTcyNiwiZXhwIjoyMDYyMTI1NzI2fQ.a62hoRgVAjknMR6bYUtYJr2GnO6NueeElD6TfYG0XZI',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPOSRTS%20S%20SERIES/S6-5.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9TUlRTIFMgU0VSSUVTL1M2LTUud2VicCIsImlhdCI6MTc0Njc2NTc0MiwiZXhwIjoyMDYyMTI1NzQyfQ.TPoHiD1HodYZ8heN6J-_WQ3hFkKe75chGKaHvYSV-Kc',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPOSRTS%20S%20SERIES/S6-6.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9TUlRTIFMgU0VSSUVTL1M2LTYud2VicCIsImlhdCI6MTc0Njc2NTc1OCwiZXhwIjoyMDYyMTI1NzU4fQ.o7TPXUtPrZvZQaer67rsR_r_tSDX303G6uv3rHgYiAQ'
  ];

  const cImages = [
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20C%20SERIES/c3_1.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgQyBTRVJJRVMvYzNfMS53ZWJwIiwiaWF0IjoxNzQ2NzY3MjIzLCJleHAiOjIwNjIxMjcyMjN9.oq2KIzkwI6skkZbQfPqcWmWZbjxMP4-IM9lEI9yw3i0',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20C%20SERIES/c3_2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgQyBTRVJJRVMvYzNfMi53ZWJwIiwiaWF0IjoxNzQ2NzY3MjQyLCJleHAiOjIwNjIxMjcyNDJ9.tjXLr4a1IfTtftWt59ZFpFR_4FmbCQQi6Pgbe9AKKVk',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20C%20SERIES/c3_3.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgQyBTRVJJRVMvYzNfMy53ZWJwIiwiaWF0IjoxNzQ2NzY3MjU3LCJleHAiOjIwNjIxMjcyNTd9._xSaIgoMmHhnmGJrlxv4OK4kqq3FgTfi6X429bGL59o',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20C%20SERIES/c3_4.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgQyBTRVJJRVMvYzNfNC53ZWJwIiwiaWF0IjoxNzQ2NzY3Mjc1LCJleHAiOjIwNjIxMjcyNzV9.GJioDl1p9p5LYvXIqi9py07rT7RuR5jfpdhASE0fNQ0',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20C%20SERIES/c3_5.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgQyBTRVJJRVMvYzNfNS53ZWJwIiwiaWF0IjoxNzQ2NzY3MzE4LCJleHAiOjIwNjIxMjczMTh9.n6OdqKcg-cKg4tVuQfhamDtPtr-WWs5F9dLUkLJZeZA',
    'https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/WHEELSETS/FARSPORTS%20C%20SERIES/c3_6.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL1dIRUVMU0VUUy9GQVJTUE9SVFMgQyBTRVJJRVMvYzNfNi53ZWJwIiwiaWF0IjoxNzQ2NzY3MzM0LCJleHAiOjIwNjIxMjczMzR9.doN2SDZaMTgBCQLJ_K1-9fcGMKRTTUIe9oyoHcnc08c'
  ];

  const products = [
    {
      id: 'evo-s-series',
      name: 'Farsports EVO S Series',
      description: 'FARSPORTS Flagship Model',
      price: 2800.00,
      specs: [
        'Equipped with CeramicSpeed Bearing',
        'FARSPORTS New Bladed T-head 5.0mm Carbon Spokes',
        'FARSPORTS Light Hub with Rachet System',
        'Tubeless-Ready Hook Rim Design',
        'Disc Brake & Center Lock',
        'Incredible Stiffness',
        'Optimized for Max Power Transfer',
        'Lightweight',
        'Built to race'
      ],
      images: evoSImages
    },
    {
      id: 's-series',
      name: 'Farsports S Series',
      price: 1800.00,
      specs: [
        'Equipped with Steel Bearings',
        'FARSPORTS New Bladed T-head 5.0mm Carbon Spokes',
        'FARSPORTS Light Hub with Rachet System',
        'Tubeless-Ready Hook Rim Design',
        'Disc Brake & Center Lock',
        'Incredible Stiffness',
        'Optimized for Max Power Transfer'
      ],
      images: sSImages
    },
    {
      id: 'c-series',
      name: 'Farsports C Series',
      price: 1400.00,
      specs: [
        'Tubeless-Ready Hooked Wheelset',
        'UCI Approved',
        'Incredible Lateral Stiffness',
        'Built with Lightweight Rachet System Hubset',
        'Aerodynamic Bladed Alpina Ultralite Aero Spokes',
        'Robust design: built-to-last',
        'Easily serviceable',
        'Disc Brake & Center Lock'
      ],
      images: cImages
    }
  ];

  return (
    <div className="min-h-screen bg-brand-blue flex flex-col">
      <div className="fixed inset-0 z-0">
        <img 
          src="https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/CARBON%20WHEELS/BACKGROUND.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5Xzc0MTU1NzNhLTQyZTAtNDU3Yy1iYTk2LTMwNTAwMTdjZmI2ZiJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL0NBUkJPTiBXSEVFTFMvQkFDS0dST1VORHdlYnAiLCJpYXQiOjE3NDY3NjIyODAsImV4cCI6MjA2MjEyMjI4MH0.Bg_Bg_Bg_Bg_Bg_Bg_Bg_Bg_Bg_Bg_Bg_Bg_Bg_Bg_Bg_Bg"
          alt="Carbon wheels background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-blue bg-opacity-90"></div>
      </div>
      
      <div className="fixed w-full z-50 top-0 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-24 items-center justify-between">
            <button 
              onClick={() => navigate('/shop')}
              className="flex items-center space-x-2 text-brand-gold hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Return to Shop</span>
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
          <h1 className="text-3xl font-light text-brand-gold mb-12 text-center">CARBON WHEELS</h1>
          
          <div className="space-y-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-brand-blue bg-opacity-90 border border-brand-gold p-8 group hover:bg-opacity-100 transition-all duration-300"
              >
                {product.images ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {product.images.map((image, index) => (
                      <div key={index} className="aspect-square overflow-hidden relative">
                        <div className="absolute inset-0 bg-white"></div>
                        <img 
                          src={image}
                          alt={`${product.name} - Image ${index + 1}`}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-brand-blue bg-opacity-30 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="aspect-video mb-6 overflow-hidden relative">
                    <div className="absolute inset-0 bg-white"></div>
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-brand-blue bg-opacity-30 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
                  </div>
                )}
                
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-brand-gold text-2xl">{product.name}</h3>
                    <span className="text-brand-gold text-xl">${product.price.toLocaleString()}</span>
                  </div>
                  
                  {product.description && (
                    <p className="text-gray-300">{product.description}</p>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-8">
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

                    {product.features && (
                      <div className="space-y-2">
                        <h4 className="text-brand-gold">Features:</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, index) => (
                            <li key={index} className="text-gray-300 flex items-center">
                              <span className="text-brand-gold mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonWheelsPage;