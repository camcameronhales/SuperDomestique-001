import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const backgroundImages = [
    "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/MAIN%20BG/MP_01.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL01BSU4gQkcvTVBfMDEud2VicCIsImlhdCI6MTc0MDk3NTgyNiwiZXhwIjoyMDU2MzM1ODI2fQ.ABi8l7Ptn9UFtwBhgOOIF2xBWI-LIPh3aFDLM6Wc_LY",
    "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/MAIN%20BG/MP_02.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL01BSU4gQkcvTVBfMDIud2VicCIsImlhdCI6MTc0MDk3NTkzMSwiZXhwIjoyMDU2MzM1OTMxfQ.g2HYCIZI7d77XS6XC32eENbppMCokDQG3H7ab5Ovot0",
    "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/MAIN%20BG/MP_03.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL01BSU4gQkcvTVBfMDMud2VicCIsImlhdCI6MTc0MDk3NTk1OCwiZXhwIjoyMDU2MzM1OTU4fQ.Uo7BxvJypKwh-fl8S-M-FroTeUSeLCsdmvL672Esr18",
    "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/MAIN%20BG/MP_04.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL01BSU4gQkcvTVBfMDQud2VicCIsImlhdCI6MTc0MDk3NjA0MywiZXhwIjoyMDU2MzM2MDQzfQ.mAYvfC1sBUsPqsI9TxqUeWfO2AYrBU9LniMFLzP1Vic",
    "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/MAIN%20BG/MP_05.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL01BSU4gQkcvTVBfMDUud2VicCIsImlhdCI6MTc0MDk3NjA2NSwiZXhwIjoyMDU2MzM2MDY1fQ.vCVHollQ6DkWGWFh5QR6sWTVOZWLSGt4wHIAOtLAT90",
    "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/MAIN%20BG/MP_06.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL01BSU4gQkcvTVBfMDYud2VicCIsImlhdCI6MTc0MDk3NjA4NCwiZXhwIjoyMDU2MzM2MDg0fQ.-IZYamD5u-NgC1cK8l5KcQKKAgQPDMqMNJnmg-x-gkY",
    "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/MAIN%20BG/MP_07.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL01BSU4gQkcvTVBfMDcud2VicCIsImlhdCI6MTc0MDk3NjEwNCwiZXhwIjoyMDU2MzM2MTA0fQ.V0cdFOU8UOJ1u14vZk821HedxBlr-Z8W6dp-JIuFq5Q",
    "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/MAIN%20BG/MP_08.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL01BSU4gQkcvTVBfMDgud2VicCIsImlhdCI6MTc0MDk3NjEyMywiZXhwIjoyMDU2MzM2MTIzfQ.H77YkRuyYAim48HDGV92hqsiDHf3pzqQh8xs_EVzUL0",
    "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/MAIN%20BG/MP_09.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL01BSU4gQkcvTVBfMDkud2VicCIsImlhdCI6MTc0MDk3NjE0MywiZXhwIjoyMDU2MzM2MTQzfQ.5TOIis_qYgJDok__GTxeJjZW9dUJFSJW7fNZdk9QS1o",
    "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/MAIN%20BG/MP_10.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL01BSU4gQkcvTVBfMTAud2VicCIsImlhdCI6MTc0MDk3NjE2MywiZXhwIjoyMDU2MzM2MTYzfQ.8yCkxZ0CZKW2fuSJQMxrRnDLhLLyAnIr-VclNkEWndM",
    "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/MAIN%20BG/MP_11.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL01BSU4gQkcvTVBfMTEud2VicCIsImlhdCI6MTc0MDk3NjE4MSwiZXhwIjoyMDU2MzM2MTgxfQ.t3ubqzahrHicTxdsMyY6aIevE4TTyXIEtH4rpOgGQYk",
    "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/MAIN%20BG/MP_12.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL01BSU4gQkcvTVBfMTIud2VicCIsImlhdCI6MTc0MDk3NjIwMywiZXhwIjoyMDU2MzM2MjAzfQ.mQZkcWlfOhltgJV9D0pe4eVC2wAV078FhRyWlkcilcc",
    "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/MAIN%20BG/MP_13.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL01BSU4gQkcvTVBfMTMud2VicCIsImlhdCI6MTc0MDk3NjIyMywiZXhwIjoyMDU2MzM2MjIzfQ.HhxFlt8NT2UvL7Ago1uHRqpqW_z5duJGzFNf89FZH7s",
    "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/MAIN%20BG/MP_14.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL01BSU4gQkcvTVBfMTQud2VicCIsImlhdCI6MTc0MDk3NjIzOSwiZXhwIjoyMDU2MzM2MjM5fQ.RarAhVFOXoW04ouUTAXWLYwkxgfdwY8YAIRUMkpux9w",
    "https://aonppfwqveuzgesogqyi.supabase.co/storage/v1/object/sign/super%20domestique/MAIN%20BG/MP_15.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlciBkb21lc3RpcXVlL01BSU4gQkcvTVBfMTUud2VicCIsImlhdCI6MTc0MDk3NjI1OCwiZXhwIjoyMDU2MzM2MjU4fQ.eiW5SER8fYSywYqEU_lCKqKW516jJ5LBnDMOvdStuIY"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="relative pt-20 sm:pt-24">
      <div className="absolute inset-0 z-0 h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="absolute inset-0 bg-brand-blue bg-opacity-80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-4 md:py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex-shrink-0 pt-4 sm:pt-0">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-light text-brand-gold leading-tight">
                DEDICATED<br />
                TO SERVICE
              </h1>
              <button 
                onClick={() => navigate('/booking')}
                className="text-sm px-12 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-blue transition-all duration-300"
              >
                BOOK WORKSHOP
              </button>
            </div>
          </div>
          <div className="md:w-[600px] mt-6 md:mt-0">
            <p className="text-brand-gold text-lg leading-relaxed text-right">At Super Domestique, it's not just about fixing bikes, it's about elevating every ride. Whether you're chasing podiums, town sign sprints, or cruising for the pure joy of it, I treat every bike like it's my own, applying a meticulous, quality-driven approach to every service. I stay ahead of the curve on gear, brands, and trends so you don't have to. Book a service. Feel the difference. Ride with confidence.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;